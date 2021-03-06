import React from "react";
import Anchor from "react-anchor-without-hash";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "scrollIntoView",
      interval: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTopChange = this.handleTopChange.bind(this);
  }

  handleChange() {
    const radios = [...document.getElementsByName("type")];

    radios.forEach(item => {
      if (item.checked) {
        this.setState({
          type: item.value
        });
        return;
      }
    });
  }

  handleTopChange(e) {
    this.setState({
      interval: Number(e.target.value)
    });
  }

  render() {
    const { type, interval } = this.state;
    const { pathname } = window.location;
    const anchorProps =
      type === "scrollIntoView"
        ? {
            type
          }
        : {
            type,
            interval
          };

    return (
      <div>
        <h1 className="title">
          <a
            href="https://github.com/kwzm/react-anchor-without-hash"
            target="_blank"
          >
            react-anchor-without-hash
          </a>
        </h1>
        <div className="types">
          <span>Which type do you want?</span>
          <label id="scrollIntoView">
            <input
              name="type"
              type="radio"
              value="scrollIntoView"
              checked={type === "scrollIntoView"}
              onChange={this.handleChange}
            />
            scrollIntoView
          </label>
          <label id="scrollTop">
            <input
              name="type"
              type="radio"
              value="scrollTop"
              checked={type === "scrollTop"}
              onChange={this.handleChange}
            />
            scrollTop
          </label>
        </div>
        {type === "scrollTop" && (
          <div className="interval-top">
            <label>interval:</label>
            <input
              id="interval"
              value={interval}
              type="number"
              onChange={this.handleTopChange}
            />
          </div>
        )}
        <div className="navbar">
          <a id="a1" href={`${pathname}#demo?_to=section1`}>
            section1
          </a>
          <a id="a2" href={`${pathname}#demo?_to=section2`}>
            section2
          </a>
          <a id="a3" href={`${pathname}#demo?_to=section3`}>
            section3
          </a>
          <a id="a4" href={`${pathname}#demo?_to=section4`}>
            section4
          </a>
        </div>
        <Anchor name="section1" {...anchorProps}>
          <div id="section1" className="section section1">
            <h2>This is section1</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section2" {...anchorProps}>
          <div id="section2" className="section section2">
            <h2>This is section2</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section3" {...anchorProps}>
          <div id="section3" className="section section3">
            <h2>This is section3</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section4" {...anchorProps}>
          <div id="section4" className="section section4">
            <h2>This is section4</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
      </div>
    );
  }
}

export default App;
