var CBFamilyHistories = React.createClass({displayName: "CBFamilyHistories",

  render: function() {

    var familyHistoryList = this.props.familyHistories.map(function(familyHistory, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, familyHistory.displayName), 
		  React.createElement("dl", null, familyHistory.relationship), 
		  React.createElement("dl", null, familyHistory.onsetAge)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-primary"}, 

        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("small", null, "Family History")
        ), 

        React.createElement("div", {className: "list-group"}, 
          familyHistoryList
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

