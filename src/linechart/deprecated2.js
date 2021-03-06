import React from 'react'
import { Group } from '@vx/group'
import { LinePath } from '@vx/shape'
import { AxisLeft, AxisBottom } from '@vx/axis'
import * as d3 from 'd3'

// Variables which change with props later
const width = 750
const height = 400

// Bounds

const margin = {
    top : 60,
    bottom : 60,
    left: 80,
    right : 80
}

const xMax = width - margin.left - margin.right
const yMax = height - margin.top - margin.bottom


export default class JiggleLineStatic {

    renderChartStatic(config) {
        let dataSet = config.dataSet;

        let data = dataSet.reduce((rec, d) => {
            return rec.concat(d)
        }, [])
        /**
         * Temporal scale and accessor
         */
        const x = d => new Date(d.date)
        const y = d => d.close
        const xScale = d3.scaleTime()
                .range([0, xMax])
                .domain(d3.extent(data, x))

        const yScale = d3.scaleLinear()
                .range([yMax, 0])
                .domain([0, d3.max(data, y)])

        return (
            <g width={width} height={height}>
                <rect x={0} y = {0} 
                    width={width}
                    height={height}
                    fill="#eeeeee"/>
                <Group top={margin.top} left={margin.left}>
                    {dataSet.map((d, i) => {
                        return (
                            <LinePath 
                                key={i}
                                data={d}
                                xScale={xScale}
                                yScale={yScale}
                                x={x}
                                y={y}
                                stroke={"#A2fa2f"}
                            />
                        )
                    })}
                    <AxisLeft
                    scale={yScale}
                    top={0}
                    left={0}
                    label={'세로축'}
                    stroke={'yellow'}
                    tickStroke='#f8f8f8'
                    numTicks={4}
                    labelProps = {{
                        textAnchor: 'middle',
                        fontFamily: 'Arial',
                        fontSize: 10,
                        fill: 'white',
                    }}
                    tickLabelProps = {(tickValue, index) => ({
                        textAnchor: 'end',
                        fontFamily: 'Arial',
                        fontSize: 10,
                        fill: 'white',
                        dx: '-0.25em',
                        dy: '-0.25em'
                    })}
                    />
            
                    <AxisBottom
                        scale={xScale}
                        top={yMax}
                        label={'시간'}
                        stroke={'#f8f8f8'}
                        tickTextFill={'#f8f8f8'}
                    />
            
                </Group>
            </g> 
        )
    }
}
