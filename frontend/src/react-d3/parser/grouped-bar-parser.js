import * as d3 from "d3";

export function parseGroupedBar(chart) {
  // chart.shouldTransposed = true;
  if (chart.shouldTransposed) {
    chart.rawData = transposeDsv(chart.rawData, ",");
  }
  chart.data = d3.csvParse(chart.rawData, (d, i, columns) => {
    for (let i = 1; i < columns.length; i++) d[columns[i]] = +d[columns[i]];
    return d;
  });
  chart.xLabel = chart.data.columns[0];
  chart.dataKey = d => d[chart.xLabel];
  chart.keys = chart.data.columns.slice(1);
  chart.width_g = chart.width_svg - chart.margins.left - chart.margins.right;
  chart.height_g = chart.height_svg - chart.margins.top - chart.margins.bottom;
  chart.x0 = d3
    .scaleBand()
    .domain(chart.data.map(d => d[chart.xLabel]))
    .rangeRound([0, chart.width_g])
    .paddingInner(0.1);
  chart.x1 = d3
    .scaleBand()
    .domain(chart.keys)
    .rangeRound([0, chart.x0.bandwidth()])
    .padding(0.05);
  chart.y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(chart.data, d => {
        return d3.max(chart.keys, function(key) {
          return d[key];
        });
      })
    ])
    .nice()
    .rangeRound([chart.height_g, 0]);
  chart.z = d3
    .scaleOrdinal()
    .range([
      "#98abc5",
      "#8a89a6",
      "#7b6888",
      "#6b486b",
      "#a05d56",
      "#d0743c",
      "#ff8c00"
    ]);
}

function transposeDsv(dsv, delimeter = ",") {
  const rows = dsv.split("\n");
  let newStrs = [];
  rows.forEach((row, i) => {
    const columns = row.split(delimeter);
    if (i === 0) {
      for (let k = 0; k < columns.length; k++) {
        newStrs.push("");
      }
    }
    columns.forEach((col, j) => {
      newStrs[j] += col;
      if (i !== rows.length - 1) {
        newStrs[j] += delimeter;
      }
    });
  });
  const newDsv = newStrs.join("\n");
  return newDsv;
}
