var CBPatientVisitHistories = React.createClass({displayName: "CBPatientVisitHistories",

  render: function() {

    var patientVisitHistoryList = this.props.patientVisitHistories.map(function(patientVisitHistory, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, patientVisitHistory.dateString, " : ", patientVisitHistory.physician), 
          React.createElement("dl", null, patientVisitHistory.notes)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-info"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Patient Visit History"
        ), 

        React.createElement("div", {className: "list-group"}, 
          patientVisitHistoryList
        )

      )

    );
  }
});

