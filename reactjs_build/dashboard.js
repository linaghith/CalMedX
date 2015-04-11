var CMDashboard = React.createClass({displayName: "CMDashboard",
	
  getInitialState: function() {
    return {
      data: DATA,
      patientData: PATIENTDATA,
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

    // fetching patientData
    var patient_url = "fhir_proxy.php?json_url=baseDstu1/Patient?_id=" + patient_id + "&_format=json";
    $.get(patient_url, function(result) {
      var data = JSON.parse(result);
      var content = data['entry'][0]['content'];

      var birthYear = content['birthDate'].split('-')[0];
      var age = (new Date().getFullYear()) - birthYear;

      var patientData = {
        name: content['name'][0]['given'] + " " + content['name'][0]['family'],
        age: age,
        ethnicity: 'American',
        sex: content['gender']['coding'][0]['code'],
        dob: content['birthDate'],
        mrn: patient_id
      };

      this.setState({
        patientData: patientData
      });
    }.bind(this));


    // fetching medicationsdata
    var med_url = "fhir_proxy.php?json_url=baseDstu1/MedicationPrescription?patient=" + patient_id + "&_format=json";
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

          React.createElement("div", {className: "row name-header"}, 
              React.createElement(CBNameHeader, {patientData: this.state.patientData})
          ), 

          React.createElement("div", {className: "row"}, 
                  React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBComplaints, {complaints: this.state.complaintsdata.complaints}), " ")
          ), 

          React.createElement("div", {className: "row"}, 
            React.createElement("h4", {className: "current-vitals"}, "Current Vitals")
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

