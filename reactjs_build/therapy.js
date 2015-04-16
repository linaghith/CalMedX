var CBTherapies = React.createClass({displayName: "CBTherapies",

  render: function() {

    var therapyList = this.props.therapies.map(function(therapy, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, therapy.displayName, ":", therapy.date), 
          React.createElement("dl", null, "Result: ", therapy.result, ", Target Area: ", therapy.targetArea)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("small", null, "Therapy")
        ), 

        React.createElement("div", {className: "list-group"}, 
          therapyList
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

