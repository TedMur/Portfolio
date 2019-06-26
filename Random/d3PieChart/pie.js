// set up margin and radius
var margin = {top: 20, right:20, buttom: 20, left: 20},
    width = 500 - margin.right - margin.left,
    height =500 - margin.top - margin.buttom,
    radius = width/2;

// arc generator to set up shape of a pie chart
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.arc()
    .outerRadius(radius - 50)
    .innerRadius(radius - 50)

// set up pie generator which take in value. "d.count"
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.count; });

// define svg
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width/2 + "," + height/2 +")");

//import data
d3.csv("data.csv", function(error, data){
    if (error) throw error;
    
    // pase the data
    data.forEach(function(d) {
        d.count = +d.count; //"+" converts data type to int
        d.fruit = d.fruit;  //
    });
    
    // append g elements
    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc")
    // append path of the arc
    g.append("path")
        .attr("d", arc)
        .style("fill", "blue")
    
    // append the text (labels)
    g.append("text")
        .attr("transform", function(d) {return "translate(" + labelArc.centroid(d) + ")";})
        .attr("dy", ".35em")
        .text(function(d) { return d.data.ftrut;});
    
})