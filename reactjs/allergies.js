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

      <div className="panel panel-red">

        <div className="panel-heading">
          <span className="icon-i-ear-nose-throat"></span> 
          Allergies
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

