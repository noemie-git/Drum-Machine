import React, { Component } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const sounds = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'key snare',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'key kick',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'key kick2',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'key tom-high',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'key tom-mid',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'key tom-low',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'key crash',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'key ride',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'key hihat-open',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav' }];



class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};


    this.verifyIt = this.verifyIt.bind(this);
    this.playDrum = this.playDrum.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === this.props.keyCode) {
      this.verifyIt();
    }
  }

  playDrum() {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
  }

  verifyIt() {
    this.playDrum();
    this.props.onSoundChanged(this.props.id);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.id,
        onClick: this.verifyIt }, /*#__PURE__*/

      React.createElement("audio", {
        id: this.props.keyTrigger,
        src: this.props.url,
        className: "clip" }),

      this.props.keyTrigger));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set up a keyTrigger display that will change when we click on the drumpad
      id: "Sample Sound" };


    this.onSoundChanged = this.onSoundChanged.bind(this);
  }

  onSoundChanged(id) {
    // console.log(`id is ${id}`);
    this.setState({
      id });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.id), /*#__PURE__*/
      React.createElement("div", { id: "pad-elements" }, " ",
      sounds.map((sound, index) => /*#__PURE__*/
      React.createElement(DrumPad, {
        key: index,
        keyCode: sound.keyCode,
        keyTrigger: sound.keyTrigger,
        id: sound.id,
        url: sound.url,
        onSoundChanged: this.onSoundChanged })))));





  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("machine"));