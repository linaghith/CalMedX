var CBAllergies = React.createClass({displayName: "CBAllergies",

  render: function() {

    var allergyList = this.props.allergies.map(function(allergy, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, allergy.displayName), 
          React.createElement("dl", null, allergy.description)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-red"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "icon-i-ear-nose-throat"}), "  Allergies"
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

