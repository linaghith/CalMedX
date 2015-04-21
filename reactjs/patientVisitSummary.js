var CBPatientVisitSummaries = React.createClass({

  render: function() {

    var patientVisitSummaryList = this.props.patientVisitSummaries.map(function(patientVisitSummary, index) {
      return (
        <div key={index} className="list-group-item">
          {patientVisitSummary.notes}<textarea className="form-control" rows="3"></textarea>
          
        </div>
      );
    });

    return (

      <div className="panel panel-info">

        <div className="panel-heading">
          Patient Visit Summary      <input type='button' value='Save' />
        </div>

        <div className="list-group">
          {patientVisitSummaryList}
        </div>

      </div>

    );
  }
});

