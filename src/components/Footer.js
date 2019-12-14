import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h4>
          made by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AO19"
          >
            AO19
          </a>{" "}
          with a bunch of 🍪
        </h4>
      </div>
    );
  }
}
