import React, { Component } from "react";

export default class Jerry extends Component {
  render() {
    return (
      <div className="character">
        <div className="character-image">
          <img
            src="https://media.giphy.com/media/TdvoIwSWi1zgY/giphy.gif"
            alt="Jerry Seinfeld Pixel Art"
          />
        </div>
        <div className="keys">
          <div data-key="65" className="key" onClick={this.props.play}>
            <kbd>A</kbd>
            <span className="sound">"Internet"</span>
          </div>
          <div data-key="83" className="key" onClick={this.props.play}>
            <kbd>S</kbd>
            <span className="sound">"Idea"</span>
          </div>
          <div data-key="68" className="key" onClick={this.props.play}>
            <kbd>D</kbd>
            <span className="sound">"Can't get one"</span>
          </div>
          <div data-key="70" className="key" onClick={this.props.play}>
            <kbd>F</kbd>
            <span className="sound">"Freak out"</span>
          </div>
        </div>
        <audio
          data-key="65"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Internet&filename=mt/MTQwMjE2MzgxNDAyMTA_bbZUXnDwpg0.mp3"
        />
        <audio
          data-key="83"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Idea&filename=ot/OTA4MjE2Mzg5MDgyOTU_4cPwbK80hM8.mp3"
        />
        <audio
          data-key="68"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Can%27t+get+one&filename=ot/OTc3NDE2Mzg5Nzc1Mzc_FgJXyKIXZZc.mp3"
        />
        <audio
          data-key="70"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Freak+Out&filename=nj/NjA0MzE2Mzg2MDQ0MzM_XgDBcmckz6E.mp3"
        />
      </div>
    );
  }
}
