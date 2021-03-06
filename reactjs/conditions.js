var CBConditions = React.createClass({

  render: function() {

    var conditionList = this.props.conditions.map(function(condition, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{condition.displayName}: Onset Age: {condition.onSetAge}</dt>
        </div>
      );
    });

    return (

      <div className="panel panel-warning">

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

