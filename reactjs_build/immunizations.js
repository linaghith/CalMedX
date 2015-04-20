var CBImmunizations = React.createClass({displayName: "CBImmunizations",

  render: function() {

    var immunizationList = this.props.immunizations.map(function(immunization, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, immunization.displayName), 
		  React.createElement("dl", null, immunization.date), 
		  React.createElement("dl", null, "CVX: ", immunization.cvx)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-danger"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("small", null, "Immunization")
        ), 

        React.createElement("div", {className: "list-group"}, 
          immunizationList
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

