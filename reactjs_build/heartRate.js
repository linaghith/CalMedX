var CBHeartRates = React.createClass({displayName: "CBHeartRates",
 render: function() {

    var heartRate = this.props.heartRates.map(function(hrate, index) {
      return (
        React.createElement("div", {className: "small"}, "Blood Pressure:", hrate.heartRate)
      );
    });

    return (
		React.createElement("div", {className: "panel panel-red"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						heartRate
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});