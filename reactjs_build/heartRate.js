var CBHeartRates = React.createClass({displayName: "CBHeartRates",

  render: function() {


    return (
		React.createElement("div", {className: "panel panel-red"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						React.createElement("div", {className: "small"}, "Heart Rate: 84")
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

