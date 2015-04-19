var CBBodyWeights = React.createClass({displayName: "CBBodyWeights",
  render: function() {

    var bodyweight = this.props.bodyWeights.map(function(bweight, index) {
      return (
        React.createElement("div", {className: "small"}, "Body Weight:", bweight.bodyWeight)
      );
    });

    return (
		React.createElement("div", {className: "panel panel-green"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						bodyweight
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});

