var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {

    var medicationList = this.props.medications.map(function(medication, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, medication.displayName), 
          React.createElement("dl", {className: "pull-right"}, medication.dateString), 
          React.createElement("dl", null, medication.dosage)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Medications"
        ), 

        React.createElement("div", {className: "list-group"}, 
          medicationList
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

