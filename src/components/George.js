import React, { Component } from "react";

export default class George extends Component {
  render() {
    return (
      <div className="character">
        <div className="character-image">
          <img
            src="https://media.giphy.com/media/V3hOuPxczoel2/giphy.gif"
            alt="George Constanza Pixel Art"
          />
        </div>
        <div className="keys">
          <div data-key="81" className="key" onClick={this.props.play}>
            <kbd>Q</kbd>
            <span className="sound">"Back in business"</span>
          </div>
          <div data-key="87" className="key" onClick={this.props.play}>
            <kbd>W</kbd>
            <span className="sound">"It's not a lie"</span>
          </div>
          <div data-key="69" className="key" onClick={this.props.play}>
            <kbd>E</kbd>
            <span className="sound">"Serenity"</span>
          </div>
          <div data-key="82" className="key" onClick={this.props.play}>
            <kbd>R</kbd>
            <span className="sound">"Bubble Boy"</span>
          </div>
        </div>
        <audio
          data-key="81"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Back+in+business&filename=mt/MTMyNzE2MzcxMzI3MjY_dG_2bOJ31oW0Y.mp3"
        />
        <audio
          data-key="87"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Lie&filename=mj/MjcwNzE2MzcyNzA3MjA_RLn4fcAQj_2bo.mp3"
        />
        <audio
          data-key="69"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Serenity&filename=mj/Mjk1ODUzNTQ3Mjk1ODc3_m_2by9gdqMd6U.mp3"
        />
        <audio
          data-key="82"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bubble+boy&filename=mt/MTU2NDUzNTQ3MTU2NDI0_LQ7ZdFNgvMM.mp3"
        />
      </div>
    );
  }
}
