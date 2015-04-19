var CBBloodPressures = React.createClass({displayName: "CBBloodPressures",
 render: function() {

    var bloodpressure = this.props.bloodPressures.map(function(bpressure, index) {
      return (
        React.createElement("div", {className: "small"}, "Blood Pressure:", bpressure.bloodPressure)
      );
    });

    return (
		React.createElement("div", {className: "panel panel-primary"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						bloodpressure
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});