import React, { Component } from "react";
import Jerry from "./components/Jerry";
import George from "./components/George";
import Elaine from "./components/Elaine";
import Kramer from "./components/Kramer";
import Seinfeld from "./components/Seinfeld";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.playSound);
  }

  playSound(event) {
    let audio;
    if (event.keyCode) {
      audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    } else {
      audio = document.querySelector(`audio[data-key="${event.currentTarget.dataset.key}"]`);
    }
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div className="container">
        <header>
          <Seinfeld />
        </header>
        <main className="soundboard">
          <Jerry play={this.playSound} />
          <George play={this.playSound} />
          <Elaine play={this.playSound} />
          <Kramer play={this.playSound} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
