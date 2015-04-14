var CBBodyTemperatures = React.createClass({displayName: "CBBodyTemperatures",

  render: function() {

    return (
		React.createElement("div", {className: "panel panel-yellow"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						React.createElement("div", {className: "small"}, "Body Temperature: 99.7")
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

