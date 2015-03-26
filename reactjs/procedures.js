var CBProcedures = React.createClass({

  render: function() {

    var procedureList = this.props.procedures.map(function(procedure, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{procedure.displayName}</dt>
          <dl>{procedure.dateString}</dl>
          <dl>{procedure.result}</dl>
        </div>
      );
    });

    return (

      <div className="panel panel-green">

        <div className="panel-heading">
          <small>Procedures</small>
        </div>

        <div className="list-group">
          {procedureList}
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

