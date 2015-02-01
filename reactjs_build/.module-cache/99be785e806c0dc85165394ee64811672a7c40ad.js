var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {
    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("span", {className: "v-center"}, "Medication History")
        ), 

        React.createElement("div", {className: "panel-body"}
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

