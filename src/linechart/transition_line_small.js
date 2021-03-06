/* Although its name is linechart_transition
 * Its role is to take two data input and make it transition.
 * Maybe it is proper to name it as *transition linepath*
 */
import React from "react";
import ReactDOM from "react-dom";
import { Group } from "@vx/group";
import { LinePath } from "@vx/shape";
import JiggleGlyph from "./jiggle_glyph";
import _ from "lodash";
import * as d3 from "d3";

export default class SmallTransitionLinePath extends React.Component {
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
    componentWillUpdate() {
        this.glyphList = []
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
        this.glyphCountList = _.map(this.props.dataList, (d, i) => {
            return d.length;
        });
        console.log(this.glyphCountList)
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
        console.log(that.glyphCountList)
        let glyph_start = that.glyphCountList[idx - 1];
        let glyph_end = that.glyphCountList[idx];
        let duration = that.durationList[idx] || 1000
        let delay = that.durationList[idx] || 1000
        g.call(
            that._glyphTransition,
            that,
            glyph_start,
            glyph_end,
            delay
        );
        
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
    _glyphTransition(g, that, start, end, _delay) {
        console.log(that.glyphList, start, end)
        let prevGlyphs = that.glyphList.slice(0, start - 1);
        prevGlyphs.forEach((d, i) => {
            d3
                .select(d)
                .style("opacity", 1)
                .attr("r", 3);
        });
        let glyphs = that.glyphList.slice(start - 1, end);
        let single_delay = _delay / (end - start + 1);
        glyphs.forEach((d, i) => {
            d3
                .select(d)
                .transition()
                .duration(500)
                .delay(single_delay * i - 100)
                .style("opacity", 1)
                .attr("r", 3);
        });
    }

    

    render() {
        const props = this.props;
        return (
            <Group>
                <LinePath
                    innerRef={node => (this.transPath = node)}
                    data={this.props.dataList[this.props.dataList.length - 1]}
                    xScale={props.xScale}
                    yScale={props.yScale}
                    x={props.x}
                    y={props.y}
                    stroke={props.color}
                    strokeWidth={3}
                    glyph={(d, i) => {
                        let dot = (
                            <JiggleGlyph
                                innerRef={node => {
                                    if (node) {this.glyphList.push(node)
                                }}}
                                className={"glyph-dots"}
                                key={`line-dot-${i}`}
                                cx={props.xScale(props.x(d))}
                                cy={props.yScale(props.y(d))}
                                r={3}
                                stroke={props.color}
                                strokeWidth={2}
                                fill={
                                    i == 0 || i == this.glyphList.length
                                        ? "white"
                                        : props.color
                                }
                                labelText={"TEXT"}
                                dx={3}
                                style={{ opacity: 0 }}
                            />
                        );
                        return dot;
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
