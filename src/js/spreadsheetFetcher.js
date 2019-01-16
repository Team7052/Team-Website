import config from "./config";

const initClient = () => {
    return window.gapi.client.init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
    }).then(async () => {
        return await window.gapi.client.load("sheets", "v4");
    })
}

const getInformation = () => {
    return window.gapi.client.sheets.spreadsheets
        .get({
            spreadsheetId: config.spreadsheetId
        })
        .then(response => response && response.result && response.result.sheets )
        .then((sheets) => {
            let promises = [];
            let state = {};
            for (let sheet of sheets) {
                let title = sheet.properties.title;
                let promise = new Promise(async (resolve, reject) => await getSheetAndUpdateState(title).then((info) => {
                    if (!info["legacy"]) { 
                        let key = Object.keys(info)[0];
                        state[key] = info[key];
                        resolve();
                        return;
                    }
                    let yearKey = Object.keys(info.legacy)[0];
                    let typeKey = Object.keys(info.legacy[yearKey])[0];
                    if (!state.legacy) state.legacy = {};
                    if (!state.legacy[yearKey]) state.legacy[yearKey] = {};
                    state.legacy[yearKey][typeKey] = info.legacy[yearKey][typeKey];
                    resolve();
                    return;
                }));
                promises.push(promise);
            }
            return Promise.all(promises).then(() => {
                console.log(state.currentSponsors);
                let sponsorsFormat = {
                    platinum: [],
                    gold: [],
                    silver: [],
                    bronze: []
                }
                for (let sponsor of state.currentSponsors) {
                    sponsorsFormat[sponsor.level.toLowerCase()].push(sponsor);
                }
                state.currentSponsors = sponsorsFormat;
                return state
            });
        });
}

const getSheetAndUpdateState = (sheetTitle) => {
    return window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: "'" + sheetTitle + "'!A:F"
    }).then(data => {
        // get state to update
        let isCurrent = sheetTitle.includes("Current");
        let stateName = "";
        let legacyYear = "";
        if (isCurrent) {
            let split = sheetTitle.split(" ");
            split[0] = split[0].toLowerCase();
            stateName = split.join("");
        }
        else {
            let split = sheetTitle.split(", ");
            legacyYear = split[2];
            stateName = split[1].toLowerCase();
        }
        // parse members
        let values = data.result.values;
        let keys = values[0].map(key => key.toLowerCase());
        let objArray = [];
        if (values.length > 1) {
            for (let i = 1; i < values.length; i++) {
                let obj = {};
                for (let j = 0; j < values[i].length; j++) {
                    if (j < keys.length) {
                        obj[keys[j]] = values[i][j];
                    }
                }
                objArray.push(obj);
            }
        }
        
        if (isCurrent) {
            return { [stateName]: objArray };
        }
        else {
            return {
                legacy: {
                    [legacyYear]: {
                        [stateName]: objArray
                    }
                }
            };
        }
        
    })
}

export { initClient, getInformation };