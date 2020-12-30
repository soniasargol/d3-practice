var dataArray = [5, 11, 18, 20];
var dataDays = ['Mon','Wed','Fri','Sat']

var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,10]);
var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0,4]);
var x = d3.scaleBand()
            .domain(dataDays)
            .range([0,230])
            .paddingInner(0.1176);

var xAxis = d3.axisBottom(x);

var svg = d3.select('body')
            .append('svg')
            .attr('height', '100%')
            .attr('width', '100%');

var cat20 = d3.schemeCategory20;
console.log(cat20);

svg.selectAll('rect')
    .data(dataArray)
    .enter().append('rect')
                .attr('fill', function(d,i){return rainbow(i);})
                .attr('height', function(d, i){return d*15;})
                .attr('width', '50')
                .attr('x', function(d, i){return i*60;})
                .attr('y', function(d, i){return 400-(d*15)});

svg.append('g')
    .attr('class','x axis hidden')
    .attr('transform','translate(0,400)')
    .call(xAxis)

var newX = 300;
svg.selectAll('circle.first')
    .data(dataArray)
    .enter().append('circle')
                .attr('class', 'first')
                .attr('fill',function(d,i){return rainbow2(i);})
                .attr('cx', function(d, i){newX+=(d*3)+i*20; return newX;})
                .attr('cy', '100')
                .attr('r', function(d){return d*3;});

var newX = 600;
svg.selectAll('ellipse')
    .data(dataArray)
    .enter().append('ellipse')
                .attr('class', 'second')
                .attr('fill',function(d,i){return cat20[i];})
                .attr('cx', function(d, i){newX+=(d*3)+i*20; return newX;})
                .attr('cy', '100')
                .attr('rx', function(d){return d*3;})
                .attr('ry', '30');

var newX = 900;
svg.selectAll('line')
    .data(dataArray)
    .enter().append('line')
                // .attr('stroke','blue')
                // .attr('stroke-width','2')
                // .style('stroke','green')
                // .attr('stroke','blue')
                .attr('x1', newX)
                .attr('y1', function(d, i){return 80+(i*20);})
                .attr('x2', function(d){return newX+(d*15);})
                .attr('y2', function(d, i){return 80+(i*20)});

var textArray = ['start','middle','end']
svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter().append('tspan')
    .attr('x',newX)
    .attr('y',function(d,i){return 150+(i*30);})
    .attr('fill','none')
    .attr('stroke','blue')
    .attr('stroke-width','2')
    .attr('text-anchor','start')
    .attr('dominant-baseline','middle')
    .attr('font-size', 30)
    .text(function(d){return d;})
// svg.append('text').text('start')
//                     .attr('x',newX)
//                     .attr('y','150')
//                     .attr('fill','none')
//                     .attr('stroke','blue')
//                     .attr('stroke-width','2')
//                     .attr('text-anchor','start')
//                     .attr('dominant-baseline','middle')
//                     .attr('font-size', 30)
// svg.append('text').text('middle')
//                     .attr('x',newX)
//                     .attr('y','180')
//                     .attr('fill','blue')
//                     .attr('stroke','none')
//                     .attr('text-anchor','middle')
//                     .attr('dominant-baseline','middle')
//                     .attr('font-size', 30)
// svg.append('text').text('end')
//                     .attr('x',newX)
//                     .attr('y','210')
//                     .attr('stroke','blue')
//                     .attr('fill','none')
//                     .attr('text-anchor','end')
//                     .attr('dominant-baseline','middle')
//                     .attr('font-size', 30)
svg.append('line')
    .attr('x1',newX)
    .attr('y1','150')
    .attr('x2',newX)
    .attr('y2','210')
