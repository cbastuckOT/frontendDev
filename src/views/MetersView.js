import React, { Component } from "react";

import AppContext from "../AppContext";

function Meter({ value = 0, height = 100, width = 30 }) {
  return (
    <div
      style={{
        width,
        height,
        border: "solid 1px gray",
        backgroundColor: `rgb(${value * 255}, 100, 100)`,
        margin: "0px 5px",
      }}
    >
      <div
        style={{
          height: Math.floor((1 - value) * height),
          backgroundColor: "white",
        }}
      />
    </div>
  );
}

export default class MetersView extends Component {
  componentDidMount() {
    this.subscription = this.context.subscribe("meters");
  }

  render() {
    const { meters } = this.context;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {meters.map((value, idx) => (
          <Meter key={`meter-${idx}`} value={value} />
        ))}
      </div>
    );
  }
}

MetersView.contextType = AppContext;
