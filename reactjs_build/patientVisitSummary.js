var CBPatientVisitSummaries = React.createClass({displayName: "CBPatientVisitSummaries",

  render: function() {

    var patientVisitSummaryList = this.props.patientVisitSummaries.map(function(patientVisitSummary, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, patientVisitSummary.dateString, " : ", patientVisitSummary.reason), 
          React.createElement("dl", null, patientVisitSummary.notes)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-info"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Patient Visit Summary"
        ), 

        React.createElement("div", {className: "list-group"}, 
          patientVisitSummaryList
        )

      )

    );
  }
});

