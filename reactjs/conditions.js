var CBConditions = React.createClass({

  render: function() {

    var conditionList = this.props.conditions.map(function(condition, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{condition.displayName}</dt>
        </div>
      );
    });

    return (

      <div className="panel panel-yellow">

        <div className="panel-heading">
          <small>Chronic Conditions</small>
        </div>

        <div className="list-group">
          {conditionList}
        </div>

        <a href="#">
        <div className="panel-footer">
          <div className="text-center">
            Add <i className="fa fa-plus"></i>
          </div>
        </div>
        </a>

      </div>

    );
  }
});

