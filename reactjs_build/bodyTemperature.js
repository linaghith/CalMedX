var CBBodyTemperatures = React.createClass({displayName: "CBBodyTemperatures",
 render: function() {

    var bodytemp = this.props.bodyTemperatures.map(function(btemp, index) {
      return (
        React.createElement("div", {className: "small"}, "Body Temperature:", btemp.bodyTemperature)
      );
    });

    return (
		React.createElement("div", {className: "panel panel-yellow"}, 
			React.createElement("div", {className: "panel-heading"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-9 text-center"}, 
						bodytemp
					), 
					React.createElement("div", {className: "col-xs-3"})
				)
			)
		)
    );
  }
});