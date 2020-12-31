// https://raw.githubusercontent.com/soniasargol/d3-practice/main/data.tsv

var parseDate = d3.timeParse('%m/%d/%Y')

d3.csv('https://raw.githubusercontent.com/soniasargol/d3-practice/main/prices.csv')
    .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
    .get(function(error,data){
        // console.log(data);


});

d3.tsv('https://raw.githubusercontent.com/soniasargol/d3-practice/main/data.tsv')
    .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
    .get(function(error,data){
        console.log(data);


});
