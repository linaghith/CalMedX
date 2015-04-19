var CBPatientVisitSummaries = React.createClass({displayName: "CBPatientVisitSummaries",

  render: function() {

    var patientVisitSummaryList = this.props.patientVisitSummaries.map(function(patientVisitSummary, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("textarea", {className: "form-control", rows: "3"}, patientVisitSummary.notes)
          
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-info"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Patient Visit Summary      ", React.createElement("input", {type: "button", value: "Save"})
        ), 

        React.createElement("div", {className: "list-group"}, 
          patientVisitSummaryList
        )

      )

    );
  }
});

