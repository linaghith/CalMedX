var CBMedications = React.createClass({displayName: "CBMedications",

  render: function() {
    return (

      React.createElement("div", {className: "panel panel-primary"}, 
        React.createElement("div", {className: "panel-heading"}, 
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-xs-3"}, 
                    React.createElement("i", {className: "fa fa-comments fa-5x"})
                ), 
                React.createElement("div", {className: "col-xs-9 text-right"}, 
                    React.createElement("div", {className: "huge"}, "26"), 
                    React.createElement("div", null, "New Comments!")
                )
            )
        ), 
        React.createElement("a", {href: "#"}, 
            React.createElement("div", {className: "panel-footer"}, 
                React.createElement("span", {className: "pull-left"}, "View Details"), 
                React.createElement("span", {className: "pull-right"}, React.createElement("i", {className: "fa fa-arrow-circle-right"})), 
                React.createElement("div", {className: "clearfix"})
            )
        )
      )

    );
  }
});

