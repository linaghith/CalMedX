var CBBodyWeights = React.createClass({displayName: "CBBodyWeights",

  render: function() {

    return (
		React.createElement("div", {className: "panel panel-green"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						React.createElement("div", {className: "small"}, "210 lbs"), 
						React.createElement("div", {className: "small"}, "Body Weight")
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

