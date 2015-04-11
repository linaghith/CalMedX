var CMDashboard = React.createClass({displayName: "CMDashboard",
	
  getInitialState: function() {
    return {
      data: DATA,
      allergiesdata: ALLERGIESDATA,
      conditionsdata: CONDITIONSDATA,
      complaintsdata: COMPLAINTSDATA,
      familyhistorydata: FAMILYHISTORYDATA,
      medicationsdata: MEDICATIONSDATA,
      proceduresdata: PROCEDURESDATA,
      immunizationsdata: IMMUNIZATIONSDATA,
      patientvisitsummarydata: PATIENTVISITSUMMARYDATA,
      patientvisithistorydata: PATIENTVISITHISTORYDATA,
      labsdata: LABSDATA,
    };
  },

  componentDidMount: function() {
    var patient_id = "13123";

    var med_url = "fhir_proxy.php?json_url=baseDstu1/MedicationPrescription?patient=" + patient_id + "&_format=json&_pretty=true";
    $.get(med_url, function(result) {
      var dat = JSON.parse(result);
      var entries = dat['entry'];
      med_data = [];

      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var content = entry['content'];
        med_data.push({
          displayName: entry['title'],
          dosage: content['dosageInstruction'][0]['text'],
          dispense: content['dispense']['quantity']['value'] + " " + content['dispense']['quantity']['units']
        });
      }
      this.setState({
        medicationsdata: {'medications': med_data}
      });
    }.bind(this));

  },

  render: function() {
  
    var wrapperStyle = {
      minHeight: '419px'
    };

    return (
      
      React.createElement("div", {className: "container"}, 

        React.createElement("div", {id: "page-wrapper", style: wrapperStyle}, 

          React.createElement("div", {className: "row"}, 
              React.createElement("h3", null, "Marla Dixon 58, F, American", 
                  React.createElement("span", {className: "pull-right text-muted small"}, 
                      React.createElement("small", null, 
                         React.createElement("br", null, "DOB:  12/12/1956"), 
                         React.createElement("br", null, "MRN:  402500433")
                      )
                  ), React.createElement("br", null)
              )
          ), 

          React.createElement("div", {className: "row"}, 
                  React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBComplaints, {complaints: this.state.complaintsdata.complaints}), " ")
          ), 

          React.createElement("div", {className: "row"}, 
            React.createElement("h4", null, "Current Vitals")
          ), 

          React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBloodPressures, {bloodPressures: this.state.data.bloodPressures}), " "), 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBodyTemperatures, {bodyTemperatures: this.state.data.bodyTemperatures}), " "), 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBodyWeights, {bodyWeights: this.state.data.bodyWeights}), " "), 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBHeartRates, {heartRates: this.state.data.heartRates}), " ")
          ), 

          React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBMedications, {medications: this.state.medicationsdata.medications}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBAllergies, {allergies: this.state.allergiesdata.allergies}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBConditions, {conditions: this.state.conditionsdata.conditions}), " ")
          ), 

          React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBProcedures, {procedures: this.state.proceduresdata.procedures}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBImmunizations, {immunizations: this.state.immunizationsdata.immunizations}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBFamilyHistories, {familyHistories: this.state.familyhistorydata.familyHistories}), " ")
          ), 

           React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBLabTest, {labTests: this.state.labsdata.labTests}), " ")
          ), 
   
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-12 col-md-6"}, " ", React.createElement(CBPatientVisitSummaries, {patientVisitSummaries: this.state.patientvisitsummarydata.patientVisitSummaries}), " "), 
            React.createElement("div", {className: "col-lg-12 col-md-6"}, " ", React.createElement(CBPatientVisitHistories, {patientVisitHistories: this.state.patientvisithistorydata.patientVisitHistories}), " ")
          )


        )
      )
    );
  }
});

