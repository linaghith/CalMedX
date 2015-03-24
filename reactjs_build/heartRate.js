var CBHeartRates = React.createClass({displayName: "CBHeartRates",

  render: function() {


    return (
		React.createElement("div", {className: "panel panel-red"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-left"}, 
						React.createElement("div", {className: "huge"}, "84"), 
						React.createElement("div", null, "Heart Rate")
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

