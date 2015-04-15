var CMDashboard = React.createClass({
	
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
    var get_params = window.location.search.replace("?", "");
    var patient_id = get_params.split('=')[1];

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
      
      <div>

        <div id="page-wrapper" style={wrapperStyle}>

          <div className="row name-header">
              <CBNameHeader patientData={this.state.patientData} />
          </div>

		<div className="col-lg-12"> <CBComplaints complaints={this.state.complaintsdata.complaints} /> </div>
		 
		 <div className="col-lg-12 col-md-6"> <CBPatientVisitSummaries patientVisitSummaries={this.state.patientvisitsummarydata.patientVisitSummaries} /> </div>

          <div className="row">
            <h4 className="current-vitals">Current Vitals</h4>
          </div>

          <div className="row">
              <div className="col-md-3 col-sm-6"> <CBBloodPressures bloodPressures={this.state.data.bloodPressures} /> </div>
              <div className="col-md-3 col-sm-6"> <CBBodyTemperatures bodyTemperatures={this.state.data.bodyTemperatures} /> </div>
              <div className="col-md-3 col-sm-6"> <CBBodyWeights bodyWeights={this.state.data.bodyWeights} /> </div>
              <div className="col-md-3 col-sm-6"> <CBHeartRates heartRates={this.state.data.heartRates} /> </div>
          </div>
          
          <div className="row">
            <h4 className="current-vitals">Vitals History</h4>
             <div className="col-md-3 col-sm-6"> <CBBloodPressuresHistory bloodPressuresHistory={this.state.data.bloodPressuresHistory} /> </div>
             <div className="col-md-3 col-sm-6"></div>
             <div className="col-md-3 col-sm-6"> <CBWeightHistory weightHistory={this.state.data.weightHistory} /> </div>
          </div>
          
          <div className="row">
              <div className="col-md-4"> <CBMedications medications={this.state.medicationsdata.medications} /> </div>
              <div className="col-md-4"> <CBAllergies allergies={this.state.allergiesdata.allergies} /> </div>
              <div className="col-md-4"> <CBConditions conditions={this.state.conditionsdata.conditions} /> </div>
          </div>

          <div className="row">
              <div className="col-md-4"> <CBProcedures procedures={this.state.proceduresdata.procedures} /> </div>
              <div className="col-md-4"> <CBImmunizations immunizations={this.state.immunizationsdata.immunizations} /> </div>
              <div className="col-md-4"> <CBFamilyHistories familyHistories={this.state.familyhistorydata.familyHistories} /> </div>
          </div>

           <div className="row">
              <div className="col-lg-3 col-md-6"> <CBLabTest labTests={this.state.labsdata.labTests} /> </div>
          </div>
   
          <div className="row">
            <div className="col-lg-12 col-md-6"> <CBPatientVisitHistories patientVisitHistories={this.state.patientvisithistorydata.patientVisitHistories} /> </div>
          </div>


        </div>
      </div>
    );
  }
});

