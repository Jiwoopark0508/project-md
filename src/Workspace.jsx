import React from "react";

import BarFactory from "./factory/bar-factory";
import HorizontalBarFactory from "./factory/horizontal-bar-factory";
import GroupedBarFactory from "./factory/grouped-bar-factory";
import parseBar from "./parser/bar-parser";
import parseHorizontalBar from "./parser/horizontal-bar-parser";
import parseGroupedBar from "./parser/grouped-bar-parser";
import SmallDataLineFactory from "./factory/small-line-factory";
import LargeDataLineFactory from "./factory/large-line-factory";
import { getImageUrlFromBase64 } from "./common/utils";

import mario from "./data/image-mario";
import kai from "./data/image-kai";
import bonobono from "./data/image-bonobono";
import { getChildG } from "./common/utils";

export default class Workspace extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const props = this.props;
    // const imgs = null;
    // const imgs = mario;
    // const imgs = kai;
    const imgs = bonobono;

    let flag;
    // flag = "Static";
    // flag = "Transition";
    // flag = "Recording";

    // flag = "Grouped Static";
    // flag = "Grouped Transition";

    // flag = "Horizontal Static";
    // flag = "Horizontal Transition";
    flag = "Horizontal Recording";

    // flag = "jiwoo";

    // horizontal single bar
    const horizontalBar = new HorizontalBarFactory();
    if (flag === "Horizontal Static") {
      props.charts.forEach(chart => parseHorizontalBar(chart));
      const renderer = horizontalBar.renderChart();
      renderer(this.node, props.charts[0], imgs);
    }
    if (flag === "Horizontal Transition") {
      props.charts.forEach(chart => parseHorizontalBar(chart));
      const renderer = horizontalBar.renderTransition();
      renderer(this.node, [...props.charts], imgs);
    }
    if (flag === "Horizontal Recording") {
      props.charts.forEach(chart => parseHorizontalBar(chart));
      const gifDiv = document.getElementById("gif");
      const onProcess = function(progress) {
        gifDiv.textContent = progress * 100 + "% rendered";
      };
      const onFinished = function(blob) {
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(blob);
        gifDiv.appendChild(imgElement);
      };

      const record = horizontalBar.recordTransition(
        this.node,
        [...props.charts],
        onProcess,
        onFinished,
        imgs
      );
    }

    // group bar
    const groupBar = new GroupedBarFactory();

    if (flag === "Grouped Static") {
      props.charts.forEach(chart => parseGroupedBar(chart));
      const renderer = groupBar.renderChart();
      const gTotal = renderer(this.node, props.charts[0], imgs);
      // const gList = getChildG(gTotal);
      // console.log(gList);
    }
    if (flag === "Grouped Transition") {
      props.charts.forEach(chart => parseGroupedBar(chart));
      const renderer = groupBar.renderChart();
      const gTotal = renderer(this.node, props.charts[0], imgs, true);
    }

    // single bar
    const bar = new BarFactory();

    if (flag === "Static") {
      props.charts.forEach(chart => parseBar(chart));
      const onFinished = function(blob) {
        const gifDiv = document.getElementById("gif");
        const imgElement = document.createElement("img");
        imgElement.onload = function() {
          gifDiv.appendChild(imgElement);
        };
        imgElement.src = URL.createObjectURL(blob);
      };
      const renderer = bar.renderChart();
      const gTotal = renderer(
        this.node,
        props.charts[0],
        imgs,
        false,
        onFinished
      );
      // const gList = getChildG(gTotal);
      // console.log(gList);
    }

    if (flag === "Transition") {
      props.charts.forEach(chart => parseBar(chart));
      const renderTransition = bar.renderTransition();
      renderTransition(this.node, props.charts, imgs);
    }

    if (flag === "Recording") {
      props.charts.forEach(chart => parseBar(chart));
      const gifDiv = document.getElementById("gif");
      const onProcess = function(progress) {
        gifDiv.textContent = progress * 100 + "% rendered";
      };
      const onFinished = function(blob) {
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(blob);
        gifDiv.appendChild(imgElement);
      };
      // const onFinished = function(image) {
      //   const imgElement = document.createElement("img");
      //   imgElement.src = image;
      //   gifDiv.appendChild(imgElement);
      // };

      const record = bar.recordTransition(
        this.node,
        [...props.charts],
        onProcess,
        onFinished,
        imgs
      );
    }

    if (flag === "jiwoo") {
      const factory = new SmallDataLineFactory();
      const gifDiv = document.getElementById("gif");
      const onProcess = function(progress) {
        gifDiv.textContent = progress * 100 + "% 됐다";
      };
      const onFinished = function(blob) {
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(blob);
        gifDiv.appendChild(imgElement);
      };
      // const renderer = factory.renderChart();
      // renderer(this.node, [...props.charts][2], kai);
      // const renderer = factory.renderTransition()
      // renderer(this.node, [...props.charts], kai)
      // factory.recordTransition(
      //   this.node,
      //   [...props.charts],
      //   onProcess,
      //   onFinished,
      //   kai
      // );

      // const renderer = factory.renderTransition();
      // renderer(this.node, [...props.charts], kai);
      factory.recordTransition(
        this.node,
        [...props.charts],
        onProcess,
        onFinished,
        kai
      );
    }
  }
  // click() {
  //   console.log("!")
  //   const factory = new SmallDataLineFactory();
  //   const renderer = factory.renderTransition()
  //   renderer(document.getElementsByTagName("svg")[0], [...this.props.charts].slice(0, 2), kai)
  // }

  render() {
    // const customWidth = 700;
    // const customWidth = 1000;
    const customWidth = 560;
    return (
      <div>
        <svg
          width={customWidth}
          height={customWidth * 9 / 16}
          // transform="translate(40, 60)"
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}
