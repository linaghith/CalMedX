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
          <dt>{allergy.Allergen}-{allergy.Severity_Description}</dt>
          <dl>{allergy.Reaction}
 				<span className='linkClass' onClick={this.handleClick.bind(this,index)} id={i}>[+]</span>
 		  </dl>
 				<div id={divid} className='nodisplay'>
			          <p>{allergy.Onset_Date}</p>
			          <p>{allergy.Allergy_Type}</p>
			          <p>{allergy.Drug_Vocab}</p>
			          <p>{allergy.Drug_Code}</p>
			          <p>{allergy.Information_Source}</p>
			    </div>      
        </div>
        )},this
      );

    return (

      <div className="panel panel-warning">

        <div className="panel-heading">
          Known Allergies
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

