var CBBodyWeights = React.createClass({
  render: function() {

    var bodyweight = this.props.bodyWeights.map(function(bweight, index) {
      return (
        <div className="small">Body Weight:{bweight.bodyWeight}</div>
      );
    });

    return (
		<div className="panel panel-green">
			<div className="panel-heading">
				<div className="row">
					<div className="col-xs-9 text-center">
						{bodyweight}
					</div>
					<div className="col-xs-3"></div>
				</div>
			</div>
		</div>
    );
  }
});

