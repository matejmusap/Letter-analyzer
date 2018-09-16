var width = 800;
var height = 400;
var barPadding = 10;
var svg = d3.select("svg")
            .attr("width", width)
            .attr("heigth", height);

d3.select("#reset")
    .on("click", function() {
        d3.selectAll(".letter")
        .remove();
        d3.select("phrase")
        .text("");
        d3.select("#count")
        .text("");
    });

d3.select("form").on("submit", function() {
    d3.event.preventDefault();
    var input = d3.select("input");
    var text = input.property("value");
    var data = getFrequencies(text);
    var barWidth = width/data.length - barPadding;
    var letters = svg
                .selectAll(".letter")
                .data(data, function(d) {
                    return d.character;
                })
});

function getFrequencies(str) {
    var sorted = str.split("").sort();
    var data = [];
    for(var i = 0; i < sorted.length; i++) {
        var last = data[data.length -1];
        if(last && last.character === sorted[i]) {
            last.count++
        } else {
            data.push({character: sorted[i], count: 1})
        }
    }
    return data
}








