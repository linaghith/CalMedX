var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {

    var medicationList = this.props.medications.map(function(medication) {
      return (
        React.createElement("div", {className: "list-group-item"}, 
          medication.displayName
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "icon-i-pharmacy"}), 
          "Medication History"
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

