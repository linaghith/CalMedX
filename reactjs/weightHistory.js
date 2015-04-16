function bmi(weight, height) {
          bmindx=weight/eval(height*height);
          return bmindx;
}
function computeform(form) {
    yourbmi=Math.round(bmi(form.weight.value, form.height.value/100));
    form.bmi.value=yourbmi;

    if (yourbmi >40) {
       form.my_comment.value="You are grossly obese, consult your physician!";
    }

    else if (yourbmi >30 && yourbmi <=40) {
       form.my_comment.value="Umm... You are obese, want some liposuction?";
    }

    else if (yourbmi >27 && yourbmi <=30) {
       form.my_comment.value="You are very fat, do something before it's too late";
    }

    else if (yourbmi >22 && yourbmi <=27) {
       form.my_comment.value="You are fat, need dieting and exercise";
    }

    else if (yourbmi >=21 && yourbmi <=22) {
       form.my_comment.value="I envy you. Keep it up!!";
    }

    else if (yourbmi >=18 && yourbmi <21) {
       form.my_comment.value="You are thin, eat more.";
    }

    else if (yourbmi >=16 && yourbmi <18) {
       form.my_comment.value="You are starving. Go Find some food!";
    }

    else if (yourbmi <16) {
       form.my_comment.value="You're grossly undernourished, need hospitalization ";
    }
}
var CBWeightHistory = React.createClass({
  render: function() {
  	return(
      <div className="chart-container">
		<div id="weightPlaceholder" className="chart-placeholder" ></div>
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

		var height=1.70;
		var bmiArray = new Array();
		var thisbmi=0;
		var weightKg=0
		for(k=1 ; k< weight.length ; k++){
			weightKg= weight[k][1]*0.453592;
			thisbmi = bmi(weightKg ,height);
			bmiArray[k]= [weight[k][0],thisbmi];
		}
		
  		$.plot("#weightPlaceholder", [
				{ data: bmiArray, label: "Body Mass Index (BMI) Chart" }
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