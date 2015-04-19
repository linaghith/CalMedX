var CBAllergies = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(divid) {
  	var newdivid= divid +'allergydiv'
	if ($('#'+newdivid).hasClass('nodisplay')){
    	$('#'+newdivid).removeClass('nodisplay');
    	$('#'+divid+'allergylink').html('[-]');
    }else{
    	$('#'+newdivid).addClass('nodisplay');
    	$('#'+divid+'allergylink').html('[+]');
    }
  },
  render: function() {
    var allergyList = this.props.allergies.map(function(allergy, index) {
   	var i =index+ 'allergylink';
   	var divid =index+ 'allergydiv';
      return (
        <div key={index} className="list-group-item">
          <dt>Allergen: {allergy.Allergen}, Severity Description: {allergy.Severity_Description}</dt>
          <dl><b>Reaction:</b> {allergy.Reaction}
 				<span className='linkClass' onClick={this.handleClick.bind(this,index)} id={i}>[+]</span>
 		  </dl>
 				<div id={divid} className='nodisplay'>
			          <p><b>Onset Date:</b> {allergy.Onset_Date}, <b>Allergy Type:</b> {allergy.Allergy_Type}, <b>Drug Vocab:</b> {allergy.Drug_Vocab}, <b>Drug Code:</b> {allergy.Drug_Code}, 
			          <b>Information Source:</b> {allergy.Information_Source}</p>
			    </div>      
        </div>
        )},this
      );

    return (

      <div className="panel panel-danger">

        <div className="panel-heading">
          <small>Allergies</small>
        </div>

        <div className="list-group">
          {allergyList}
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

