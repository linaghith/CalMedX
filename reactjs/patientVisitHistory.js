var CBPatientVisitHistories = React.createClass({

  render: function() {

    var patientVisitHistoryList = this.props.patientVisitHistories.map(function(patientVisitHistory, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{patientVisitHistory.dateString} : {patientVisitHistory.physician}</dt>
          <dl>{patientVisitHistory.notes}</dl>
        </div>
      );
    });

    return (

      <div className="panel panel-info">

        <div className="panel-heading">
          Patient Visit History
        </div>

        <div className="list-group">
          {patientVisitHistoryList}
        </div>

      </div>

    );
  }
});

