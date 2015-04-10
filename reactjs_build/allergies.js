var CBAllergies = React.createClass({displayName: "CBAllergies",
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
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, allergy.Allergen, "-", allergy.Severity_Description), 
          React.createElement("dl", null, allergy.Reaction, 
 				React.createElement("span", {className: "linkClass", onClick: this.handleClick.bind(this,index), id: i}, "[+]")
 		  ), 
 				React.createElement("div", {id: divid, className: "nodisplay"}, 
			          React.createElement("p", null, allergy.Onset_Date), 
			          React.createElement("p", null, allergy.Allergy_Type), 
			          React.createElement("p", null, allergy.Drug_Vocab), 
			          React.createElement("p", null, allergy.Drug_Code), 
			          React.createElement("p", null, allergy.Information_Source)
			    )
        )
        )},this
      );

    return (

      React.createElement("div", {className: "panel panel-warning"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Known Allergies"
        ), 

        React.createElement("div", {className: "list-group"}, 
          allergyList
        ), 

        React.createElement("a", {href: "#"}, 
        React.createElement("div", {className: "panel-footer"}, 
          React.createElement("div", {className: "text-center"}, 
            "Add ", React.createElement("i", {className: "fa fa-plus"})
          )
        )
        )

      )

    );
  }
});

