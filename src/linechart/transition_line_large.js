/* Although its name is linechart_transition
 * Its role is to take two data input and make it transition.
 * Maybe it is proper to name it as *transition linepath*
 */
import React from "react";
import ReactDOM from "react-dom";
import { Group } from "@vx/group";
import LinePath from "./meta-components/LinePath";
import { AnnotationLabel } from "react-annotation";
import JiggleGlyph from "./jiggle_glyph";
import _ from "lodash";
import * as d3 from "d3";

export default class LargeTransitionLinePath extends React.Component {
    constructor(props) {
        super(props);
        this.pathList = [];
        this.lengthList = [];
        this.glyphList = [];
        this.transPath = null;
        this._playLineTransition = this._playLineTransition.bind(this);
        this.playTransition = this.playTransition.bind(this);
        this.durationList = this.props.chartList.map(c => {
            return c.duration;
        });
        this.delayList = this.props.chartList.map(c => {
            return c.delay;
        });
        this.glyphCountList = _.map(this.props.dataList, (d, i) => {
            return d.length;
        });
    }
    componentDidUpdate() {
        this.pathList.forEach((p, i) => {
            if(!p) return;
            let length = p.getTotalLength();
            if(this.lengthList.indexOf(length) === -1) {
                this.lengthList.push(p.getTotalLength());
            }
        });
        this.lengthList.sort((a, b) => {return (a - b)})
    }
    componentDidMount() {
        this.pathList.forEach((p, i) => {
            this.lengthList.push(p.getTotalLength());
        });
        this.totalLength = this.lengthList[this.lengthList.length - 1];

        d3.select(this.transPath).attr("stroke-dasharray", this.totalLength);
    }

    playTransition(idx, partial) {
        if (!idx) idx = 1;
        let g = d3.select(this.transPath);
        this._playLineTransition(g, this, idx, partial);
    }

    _playLineTransition(g, that, idx, partial) {
        let startsAt = this.lengthList[idx - 1];
        let endsAt = this.lengthList[idx];
        if (!endsAt) return;
        let glyph_start = that.glyphCountList[idx - 1];
        let glyph_end = that.glyphCountList[idx];
        let duration = that.durationList[idx] || 1000
        let delay = that.durationList[idx] || 1000
        g
            .attr("stroke-dashoffset", this.totalLength - startsAt)
            .transition()
            .ease(d3.easeQuad)
            .duration(duration)
            .delay(delay)
            .attr("stroke-dashoffset", this.totalLength - endsAt)
            .on("end", function() {
                if (!partial) {
                    g.call(that._playLineTransition, that, idx + 1);
                }
            });
    }

    render() {
        const props = this.props;
        const indexLastGlyph = props.dataList[props.dataList.length - 1].length;
        let that = this;
        return (
            <Group>
                <LinePath
                    innerRef={node => (this.transPath = node)}
                    data={this.props.dataList[this.props.dataList.length - 1]}
                    xScale={props.xScale}
                    yScale={props.yScale}
                    annotations={props.annotations}
                    x={props.x}
                    y={props.y}
                    stroke={props.color}
                    strokeWidth={5}
                    strokeLinecap={"round"}
                    glyph={(d, i) => {
                        if (this.glyphCountList.indexOf(i + 1) == -1) return;
                        let dot = (
                            <JiggleGlyph // Refactoring 필요
                                innerRef={node => this.glyphList.push(node)}
                                className={"glyph-dots"}
                                cx={props.xScale(props.x(d))}
                                cy={props.yScale(props.y(d))}
                                r={3}
                                stroke={props.color}
                                strokeWidth={2}
                                fill={"white"}
                                config={props.config}
                                dx={3}
                                style={{ opacity: 0 }}
                            />
                        );
                        return (
                            <Group key={`line-dot-${i}`}>
                                {dot}
                                {/* {label} */}
                            </Group>
                        );
                    }}
                />
                {this.props.dataList.map((d, i) => {
                    return (
                        <LinePath
                            key={i}
                            innerRef={node => this.pathList.push(node)}
                            data={d}
                            xScale={props.xScale}
                            yScale={props.yScale}
                            x={props.x}
                            y={props.y}
                            style={{ display: "none" }}
                        />
                    );
                })}
            </Group>
        );
    }
}
