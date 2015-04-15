var CBPatientVisitSummaries = React.createClass({

  render: function() {

    var patientVisitSummaryList = this.props.patientVisitSummaries.map(function(patientVisitSummary, index) {
      return (
        <div key={index} className="list-group-item">
          <textarea className="form-control" rows="3">{patientVisitSummary.notes}</textarea>
        </div>
      );
    });

    return (

      <div className="panel panel-info">

        <div className="panel-heading">
          Patient Visit Summary
        </div>

        <div className="list-group">
          {patientVisitSummaryList}
        </div>

      </div>

    );
  }
});

