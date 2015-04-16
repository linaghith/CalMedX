var CBBloodPressuresHistory = React.createClass({displayName: "CBBloodPressuresHistory",
  render: function() {
  	return(
      React.createElement("div", {className: "chart-container"}, 
		React.createElement("div", {id: "placeholder", className: "chart-placeholder"})
		
	  )
	
  );
  } , 
	componentDidMount: function() {
		var date = new Date();
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();	   
		var index=0;
		var loopyear=new Array();
		var monthIndex1 = monthIndex+1;
		for (i=monthIndex1 ; i>0 ;i--){
			var s= i+'/'+day+'/'+year;
			loopyear[index]=(new Date(s)).getTime();
			index= index +1;
		}
		year=year-1;
		for (i=12 ; i>= monthIndex ; i--){
			var s= i+'/'+day+'/'+year;
			loopyear[index]=(new Date(s)).getTime();
			index= index +1;
		}
		var systolic= new Array();
		var diastolic = new Array();
		
		for(k=0 ; k<= loopyear.length ; k++){
			systolic[k]= [loopyear[k], 132-k];
			diastolic[k] =[loopyear[k], 80-k];
		}

  		
  		$.plot("#placeholder", [
				{ data: systolic, label: "Systolic Blood Pressure " },
				{ data: diastolic, label: "Diastolic Blood Pressure ", yaxis: 2 }
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