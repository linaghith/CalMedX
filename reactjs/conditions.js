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

      <div className="panel panel-green">

        <div className="panel-heading">
          <span className="icon-i-pharmacy"></span> 
          Chronic Condition
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

