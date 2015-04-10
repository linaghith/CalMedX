
var CBLabTest = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(divid) {
  	var newdivid = divid +'labdiv';
	if ($('#'+newdivid).hasClass('nodisplay')){
    	$('#'+newdivid).removeClass('nodisplay');
    	$('#'+divid+'lablink').html('[-]');
    }else{
    	$('#'+newdivid).addClass('nodisplay');
    	$('#'+divid+'lablink').html('[+]');
    }
  },
  
  
  render: function() {
	 var labTestList = this.props.labTests.map(function(labTest, index) {
	 var i =index+ 'lablink';
	 var divid =index+ 'labdiv';
      return (
				<div key={index} className="list-group-item">
		          <dt>{labTest.testName}-{labTest.DateColleted}</dt>
		          <dl>{labTest.result}
         				<span className='linkClass' onClick={this.handleClick.bind(this,index)} id={i}>[+]</span>
         		  </dl>
         				<div id={divid} className='nodisplay'>
						  	<p>CollectionMethod: {labTest.CollectionMethod}</p>
						  	<p>clinic: {labTest.clinic}</p>
						  	<p>OrderProviderName: {labTest.OrderProviderName}</p>
						  	<p>OrderDate: {labTest.OrderDate}</p>
						  	<p>DateColleted: {labTest.DateColleted}</p>
						  	<p>DateResult: {labTest.DateResult}</p>
						  	<p>LOINC: {labTest.Test_LOINC}</p>
						  	<p>resultStatus: {labTest.resultStatus}</p>
						  	<p>result: {labTest.result}</p>
         				</div>
		         
		        </div>
        )},this
      );
       


  
 return (
      <div className="panel panel-default">

        <div className="panel-heading">
          Lab Results
        </div>

        <div className="list-group">{labTestList}<input type='button' value='Click me'  onClick={this.handleClick} />
        </div>
    
        <a href="#">
        <div className="panel-footer">
          <div className="text-center">
            Add <i className="fa fa-plus"></i>
          </div>
        </div>
        </a>

      </div>     
  
  );
  }
  
  

  
  
});