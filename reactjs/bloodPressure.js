var CBBloodPressures = React.createClass({
 render: function() {

    var bloodpressure = this.props.bloodPressures.map(function(bpressure, index) {
      return (
        <div className="small">Blood Pressure:{bpressure.bloodPressure}</div>
      );
    });

    return (
		<div className="panel panel-primary">
			<div className="panel-heading">
				<div className="row">
					<div className="col-xs-9 text-center">
						{bloodpressure}
					</div>
					<div className="col-xs-3"></div>
				</div>
			</div>
		</div>
    );
  }
});