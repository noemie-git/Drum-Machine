import React, { Component } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const sounds = [
{
  keyTrigger: 'Q',
  id: 'key snare',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav' },

{
  keyTrigger: 'W',
  id: 'key kick',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav' },

{
  keyTrigger: 'E',
  id: 'key kick2',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav' },

{
  keyTrigger: 'A',
  id: 'key tom-high',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav' },

{
  keyTrigger: 'S',
  id: 'key tom-mid',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav' },

{
  keyTrigger: 'D',
  id: 'key tom-low',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav' },

{
  keyTrigger: 'Z',
  id: 'key crash',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav' },

{
  keyTrigger: 'X',
  id: 'key ride',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav' },

{
  keyTrigger: 'C',
  id: 'key hihat-open',
  url: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav' }];



class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //sound not playing
    };

    this.handleClick = this.handleClick.bind(this);
    this.verifyIt = this.verifyIt.bind(this);
    this.playDrum = this.playDrum.bind(this);
  }

  handleClick(event) {
    const keyPressed = event.currentTarget.value;

    this.setState({
      //audio file to play sound
    });
  }

  playDrum() {
    const audio = new Audio(this.props.url);
    audio.play();
  }

  verifyIt() {
    console.log('Verify function has been triggered');
    this.playDrum();
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

    this.state = {};

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.props.id), /*#__PURE__*/
      React.createElement("div", { id: "pad-elements" },
      sounds.map((sound, index) => /*#__PURE__*/
      React.createElement(DrumPad, {
        key: index,
        keyTrigger: sound.keyTrigger,
        id: sound.id,
        url: sound.url })))));





  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("machine"));