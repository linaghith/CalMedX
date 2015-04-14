var CBBloodPressures = React.createClass({displayName: "CBBloodPressures",

  render: function() {

    return (
		React.createElement("div", {className: "panel panel-primary"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						React.createElement("div", {className: "small"}, "Blood Pressure: 120/80")
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

