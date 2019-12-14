import React, { Component } from "react";

export default class Elaine extends Component {
  render() {
    return (
      <div className="character">
        <div className="character-image">
          <img
            src="https://media.giphy.com/media/oFmB3wGBDKQSY/giphy.gif"
            alt="Elaine Benes Pixel Art"
          />
        </div>
        <div className="keys">
          <div data-key="71" className="key" onClick={this.props.play}>
            <kbd>G</kbd>
            <span className="sound">"Idiot"</span>
          </div>
          <div data-key="72" className="key" onClick={this.props.play}>
            <kbd>H</kbd>
            <span className="sound">"Bye Bye"</span>
          </div>
          <div data-key="74" className="key" onClick={this.props.play}>
            <kbd>J</kbd>
            <span className="sound">"Bag of Dirt"</span>
          </div>
          <div data-key="75" className="key" onClick={this.props.play}>
            <kbd>K</kbd>
            <span className="sound">"That's my a**"</span>
          </div>
        </div>
        <audio
          data-key="71"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=You%27re+an+Idiot&filename=mj/MjA1OTg3NzYyMDU5MjI_r2hY2j5fg3I.mp3"
        />
        <audio
          data-key="72"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Here%27s+a+Thought&filename=nj/NjI3NTg3NzY2Mjc2NDU_JoNS6n5QPCk.mp3"
        />
        <audio
          data-key="74"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Like+a+Bag+of+Dirt&filename=nz/NzkwMjg3NzY3OTAyOTc_Ef3tpXInnlQ.mp3"
        />
        <audio
          data-key="75"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=That%27s+my+Ass&filename=nz/NzkxNTg3NzY3OTE1ODE_p4ZEJ9C3xQM.mp3"
        />
      </div>
    );
  }
}
