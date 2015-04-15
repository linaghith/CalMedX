var CBWeightHistory = React.createClass({
  render: function() {
  	return(
      <div className="chart-container">
		<div id="weightPlaceholder" className="chart-placeholder"></div>
	  </div>
	
  );
  } , 
	componentDidMount: function() {
		var weight= new Array();
		var d= new Date('4/1/2015');
		weight[1]= [d.getTime(), 160];
		
		d= new Date('1/1/2015');
		weight[2]= [d.getTime(), 162];	
		
		d= new Date('6/1/2014');
		weight[3]= [d.getTime(), 163];	
		
		d= new Date('1/1/2014');
		weight[4]= [d.getTime(), 160];
			
		d= new Date('6/1/2013');
		weight[5]= [d.getTime(), 155];
			
		d= new Date('1/1/2013');
		weight[6]= [d.getTime(), 177];	
		
		d= new Date('6/1/2012');
		weight[7]= [d.getTime(), 188];	
  		
		d= new Date('1/1/2012');
		weight[8]= [d.getTime(), 190];	

		d= new Date('6/1/2011');
		weight[9]= [d.getTime(), 180];	

		d= new Date('1/1/2011');
		weight[10]= [d.getTime(), 170];	

		d= new Date('6/1/2010');
		weight[11]= [d.getTime(), 260];	

  		$.plot("#weightPlaceholder", [
				{ data: weight, label: "Weight History Chart" }
			], {
		xaxes: [ { mode: "time" } ],
		yaxes: [ { min: 0 }, {
			// align if we are to the right
			alignTicksWithAxis: 1,
			position: 'right'
		} ],
		legend: { position: "se" }
	});
	
  	}



});