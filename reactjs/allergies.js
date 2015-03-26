var CBAllergies = React.createClass({

  render: function() {

    var allergyList = this.props.allergies.map(function(allergy, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{allergy.displayName}</dt>
          <dl>{allergy.description}</dl>
        </div>
      );
    });

    return (

      <div className="panel panel-warning">

        <div className="panel-heading">
          <small>Allergies</small>
        </div>

        <div className="list-group">
          {allergyList}
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

