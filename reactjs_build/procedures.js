var CBProcedures = React.createClass({displayName: "CBProcedures",

  render: function() {

    var procedureList = this.props.procedures.map(function(procedure, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, procedure.displayName), 
          React.createElement("dl", null, procedure.dateString), 
          React.createElement("dl", null, procedure.result)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-success"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("small", null, "Procedures")
        ), 

        React.createElement("div", {className: "list-group"}, 
          procedureList
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

