import React from "react";
import BarFactory from "./factory/bar-factory";
import GroupedBarFactory from "./factory/grouped-bar-factory";
import StackedBarFactory from "./factory/stacked-bar-factory";
import { parseBar } from "./parser/bar-parser";
import { parseGroupedBar } from "./parser/grouped-bar-parser";
import { parseStackedBar } from "./parser/stacked-bar-parser";
import LineChartFactory from './factory/line-factory'

export default class Workspace extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const props = this.props;

    // // bar
    // props.charts.forEach(chart => parseBar(chart));
    const factory = new LineChartFactory();
    // const renderer = factory.renderChart();
    // renderer(this.node, props.charts[0]);
    const renderTransition = factory.renderTransition();
    renderTransition(this.node, [...props.charts]);
    // const record = factory.recordTransition(this.node, [...props.charts]);

    // grouped bar
    // props.charts.forEach(chart => parseGroupedBar(chart));
    // const factory = new GroupedBarFactory();
    // const renderer = factory.renderChart();
    // renderer(this.node, props.charts[0]);

    // stacked bar
    // props.charts.forEach(chart => parseStackedBar(chart));
    // const factory = new StackedBarFactory();
    // const renderer = factory.renderChart();
    // renderer(this.node, props.charts[0]);
  }

  render() {
    return (
      <div>
        <svg
          width={this.props.width}
          height={this.props.height}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}