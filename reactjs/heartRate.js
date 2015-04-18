var CBHeartRates = React.createClass({
 render: function() {

    var heartRate = this.props.heartRates.map(function(hrate, index) {
      return (
        <div className="small">Blood Pressure:{hrate.heartRate}</div>
      );
    });

    return (
		<div className="panel panel-red">
			<div className="panel-heading">
				<div className="row">
					<div className="col-xs-9 text-center">
						{heartRate}
					</div>
					<div className="col-xs-3"></div>
				</div>
			</div>
		</div>
    );
  }
});