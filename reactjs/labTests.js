
var CBLabTest = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(divid) {
  	var newdivid = divid +'labdiv';
	if ($('#'+newdivid).hasClass('nodisplay')){
    	$('#'+newdivid).removeClass('nodisplay');
    	$('#'+divid+'lablink').html(' [-] ');
    }else{
    	$('#'+newdivid).addClass('nodisplay');
    	$('#'+divid+'lablink').html(' [+] ');
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
						  	<p><b>CollectionMethod:</b> {labTest.CollectionMethod}</p>
						  	<p><b>clinic:</b> {labTest.clinic}</p>
						  	<p><b>OrderProviderName:</b> {labTest.OrderProviderName}</p>
						  	<p><b>OrderDate:</b> {labTest.OrderDate}</p>
						  	<p><b>DateColleted:</b> {labTest.DateColleted}</p>
						  	<p><b>DateResult:</b> {labTest.DateResult}</p>
						  	<p><b>LOINC:</b> {labTest.Test_LOINC}</p>
						  	<p><b>Result Status:</b> {labTest.resultStatus}</p>
						  	<p><b>Result:</b> {labTest.result}</p>
         				</div>
		         
		        </div>
        )},this
      );
       


  
 return (
      <div className="panel panel-danger">

        <div className="panel-heading">
          <small>Lab Results</small>
        </div>

        <div className="list-group">{labTestList}
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
