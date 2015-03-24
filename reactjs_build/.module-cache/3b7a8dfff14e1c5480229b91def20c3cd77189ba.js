var CBBloodPressures = React.createClass({displayName: "CBBloodPressures",

  render: function() {

    return (
		React.createElement("div", {className: "panel panel-primary"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-left"}, 
						React.createElement("div", {className: "huge"}, "120/80"), 
						React.createElement("div", null, "Blood Pressure")
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

