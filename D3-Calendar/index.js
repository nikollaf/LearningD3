// 
// 

var cal = new Calendar();
var date = new Date();

var month = date.getMonth() + 1;
var year = date.getFullYear();

var weeks = cal.monthDays(year, month);
var table = d3.select('#calendar');
var months = d3.select('#months');


var header = table.append('thead');
var body = table.append('tbody');




months
	.append('select')
	.selectAll('option')
	.data(consts.monthNames)
	.enter()
	.append('option')
	.text(function(d) {
		return d;
	})
	.attr('value', function(d, i) {
			return i;
		
	})
	.on("change", function(d, i) {
		month = i;
	});


header
	.append('tr')
	.selectAll('td')
	.data(consts.dayNames)
	.enter()
	.append('td')
	.style('text-align', 'center')
	.text(function(d) {
		return d;
	});

weeks.forEach(function(week) {

	body
		.append('tr')
		.selectAll('td')
		.data(week)
		.enter()
		.append('td')
		.text(function(d) {
			return d > 0 ? d : '';
		})
});