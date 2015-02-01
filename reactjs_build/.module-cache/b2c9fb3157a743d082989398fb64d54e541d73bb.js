var CBAllergies = React.createClass({displayName: "CBAllergies",

  render: function() {

    var allergyList = this.props.allergies.map(function(medication, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, medication.displayName), 
          React.createElement("dl", {className: "pull-right"}, medication.dateString), 
          React.createElement("dl", null, medication.dosage)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-red"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "icon-i-pharmacy"}), 
          "Allergies"
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

