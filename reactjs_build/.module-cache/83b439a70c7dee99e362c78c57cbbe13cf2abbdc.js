var CMDashboard = React.createClass({displayName: "CMDashboard",

  data: DATA,

  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      React.createElement("div", {id: "page-wrapper", style: wrapperStyle}, 

        React.createElement("div", {className: "row"}, 
			React.createElement("h3", null, "Marla Dixon", 
                React.createElement("span", {className: "pull-right text-muted small"}, 
                    React.createElement("small", null, 
                       React.createElement("br", null, "DOB:  12/12/1956"), 
                       React.createElement("br", null, "MRN:  402500433")
                    )
                ), React.createElement("br", null)
            )
        ), 
		React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBBloodPressures, {bloodPressures: this.data.bloodPressures}), " "), 
            React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBBodyTemperatures, {bodyTemperatures: this.data.bodyTemperatures}), " "), 
            React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBBodyWeights, {bodyWeights: this.data.bodyWeights}), " "), 
            React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBHeartRates, {heartRates: this.data.heartRates}), " ")
		), 

		React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBComplaints, {complaints: this.data.complaints}), " ")
		), 

        React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-2 col-md-6"}, " ", React.createElement(CBMedications, {medications: this.data.medications}), " "), 
            React.createElement("div", {className: "col-lg-2 col-md-6"}, " ", React.createElement(CBAllergies, {allergies: this.data.allergies}), " "), 
            React.createElement("div", {className: "col-lg-2 col-md-6"}, " ", React.createElement(CBProcedures, {procedures: this.data.procedures}), " "), 
            React.createElement("div", {className: "col-lg-2 col-md-6"}, " ", React.createElement(CBConditions, {conditions: this.data.conditions}), " "), 
            React.createElement("div", {className: "col-lg-2 col-md-6"}, " ", React.createElement(CBImmunizations, {immunizations: this.data.immunizations}), " "), 
            React.createElement("div", {className: "col-lg-2 col-md-6"}, " ", React.createElement(CBFamilyHistories, {familyHistories: this.data.familyHistories}), " ")
        ), 

		React.createElement("div", {className: "row"}, 
			React.createElement("div", {className: "col-lg-12 col-md-6"}, " ", React.createElement(CBPatientVisitSummaries, {patientVisitSummaries: this.data.patientVisitSummaries}), " "), 
			React.createElement("div", {className: "col-lg-12 col-md-6"}, " ", React.createElement(CBPatientVisitHistories, {patientVisitHistories: this.data.patientVisitHistories}), " ")
		)


      )

    );
  }
});

