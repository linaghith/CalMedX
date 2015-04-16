var CBTherapies = React.createClass({

  render: function() {

    var therapyList = this.props.therapies.map(function(therapy, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{therapy.displayName}:{therapy.date}</dt>
          <dl>Result: {therapy.result}, Target Area: {therapy.targetArea}</dl>
        </div>
      );
    });

    return (

      <div className="panel panel-primary">

        <div className="panel-heading">
          <small>Therapy</small>
        </div>

        <div className="list-group">
          {therapyList}
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

