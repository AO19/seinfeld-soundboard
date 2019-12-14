import React, { Component } from "react";

export default class Kramer extends Component {
  render() {
    return (
      <div className="character">
        <div className="character-image">
          <img
            src="https://media.giphy.com/media/9OXgLssO0tKTu/giphy.gif"
            alt="Kramer Pixel Art"
          />
        </div>
        <div className="keys">
          <div data-key="89" className="key" onClick={this.props.play}>
            <kbd>Y</kbd>
            <span className="sound">"Master of domain"</span>
          </div>
          <div data-key="88" className="key" onClick={this.props.play}>
            <kbd>X</kbd>
            <span className="sound">"Dangerous"</span>
          </div>
          <div data-key="67" className="key" onClick={this.props.play}>
            <kbd>C</kbd>
            <span className="sound">"You're crazy!"</span>
          </div>
          <div data-key="86" className="key" onClick={this.props.play}>
            <kbd>V</kbd>
            <span className="sound">"You stink"</span>
          </div>
        </div>
        <audio
          data-key="89"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Master+of+domain&filename=nz/NzQwMDE2Mzg3NDAwOTc_Q2c0zeoHaSg.mp3"
        />
        <audio
          data-key="88"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=I%27m+Dangerous&filename=mz/MzU2MDQwNzM1NjEyNQ_6aafIjeVil8.mp3"
        />
        <audio
          data-key="67"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Your+Crazy!&filename=ot/OTE4NTQwNzkxODYwNw_UvdZs_2bEZhRA.mp3"
        />
        <audio
          data-key="86"
          src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=You+Stink.&filename=od/ODEzMzQwNzgxMzQ2Nw_2Z3L1iglrqA.mp3"
        />
      </div>
    );
  }
}
