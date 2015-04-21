var CBBloodPressuresHistory = React.createClass({
  render: function() {
  	return(
      <div className="chart-container">
		<div id="placeholder" className="chart-placeholder"></div>
		
	  </div>
	
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
		var diastolicArray =new Array();
		diastolicArray[0]= 80;
		diastolicArray[1]= 81 ;
		diastolicArray[2]= 82 ;
		diastolicArray[3]= 80 ;
		diastolicArray[4]= 84;
		diastolicArray[5]= 82;
		diastolicArray[6]= 77;
		diastolicArray[7]= 82;
		diastolicArray[8]= 81;
		diastolicArray[9]= 82;
		diastolicArray[10]= 79;
		diastolicArray[11]= 80;
		diastolicArray[12]= 82;
		diastolicArray[13]= 77;
		diastolicArray[14]= 84;

		/*diastolicArray[0]= 77;
		diastolicArray[1]= 77 ;
		diastolicArray[2]= 77 ;
		diastolicArray[3]= 77 ;
		diastolicArray[4]= 77;
		diastolicArray[5]= 77;
		diastolicArray[6]= 77;
		diastolicArray[7]= 77;
		diastolicArray[8]= 77;
		diastolicArray[9]= 77;
		diastolicArray[10]= 77;
		diastolicArray[11]= 77;
		diastolicArray[12]= 77;
		diastolicArray[13]= 77;
		diastolicArray[14]= 77;	
		*/
		var systolic= new Array();
		var diastolic = new Array();
		for(k=0 ; k< loopyear.length ; k++){
			systolic[k]= [loopyear[k], 132-k];
			diastolic[k] =[loopyear[k], diastolicArray[k]];
		}

  		
  		$.plot("#placeholder", [
				{ data: systolic, label: "Systolic Blood Pressure " },
				{ data: diastolic, label: "Diastolic Blood Pressure ", yaxis: 2 }
			], {
		xaxes: [ { mode: "time" } ],
		yaxes: [ { min: 0 }, {
			// align if we are to the right
			alignTicksWithAxis: 2,
			position: 'right'
		} ],
		legend: { position: "se" }
	});
	
  	}



});