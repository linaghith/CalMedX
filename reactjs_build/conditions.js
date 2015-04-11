var CBConditions = React.createClass({displayName: "CBConditions",

  render: function() {

    var conditionList = this.props.conditions.map(function(condition, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, condition.displayName)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-warning"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("small", null, "Chronic Conditions")
        ), 

        React.createElement("div", {className: "list-group"}, 
          conditionList
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

