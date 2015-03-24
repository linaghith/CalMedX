var CBPatientVisitSummaries = React.createClass({

  render: function() {

    var patientVisitSummaryList = this.props.patientVisitSummaries.map(function(patientVisitSummary, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{patientVisitSummary.dateString} : {patientVisitSummary.reason}</dt>
          <dl>{patientVisitSummary.notes}</dl>
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

