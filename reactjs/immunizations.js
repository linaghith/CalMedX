var CBImmunizations = React.createClass({

  render: function() {

    var immunizationList = this.props.immunizations.map(function(immunization, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{immunization.displayName}</dt>
        </div>
      );
    });

    return (

      <div className="panel panel-red">

        <div className="panel-heading">
          <span className="icon-i-pharmacy"></span> 
          Immunization
        </div>

        <div className="list-group">
          {immunizationList}
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
