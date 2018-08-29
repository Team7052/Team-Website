import React, {Component} from "react";
import "./stylesheets/global/footerStyle.css";

class Footer extends Component {
  render() {
    if (this.props.type === "grayed") {
      return (
        <footer className="footer gray-footer">
          <div className="footer-trademark">Falcotronix 2018 ®</div>
          <div className="footer-contact">team7052@falcotronix.com</div>
        </footer>
      )
    }
    else {
      return (
        <footer className="footer">
          <div className="footer-trademark">Falcotronix 2018 ®</div>
          <div className="footer-contact">team7052@falcotronix.com</div>
        </footer>
      )
    }
  }
}


export default Footer;