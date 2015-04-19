var CBBodyTemperatures = React.createClass({
 render: function() {

    var bodytemp = this.props.bodyTemperatures.map(function(btemp, index) {
      return (
        <div className="small">Body Temperature:{btemp.bodyTemperature}</div>
      );
    });

    return (
		<div className="panel panel-yellow">
			<div className="panel-heading">
				<div className="row">
					<div className="col-xs-9 text-center">
						{bodytemp}
					</div>
					<div className="col-xs-3"></div>
				</div>
			</div>
		</div>
    );
  }
});