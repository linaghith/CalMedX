var CMDashboard = React.createClass({
	
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

      <div id="page-wrapper" style={wrapperStyle}>

        <div className="row">
			<h3>Marla Dixon 58, F, American
                <span className="pull-right text-muted small">
                    <small>
                       <br>DOB:  12/12/1956</br>
                       <br>MRN:  402500433</br>
                    </small>
                </span><br></br>
            </h3>
        </div>
		<div className="row">
            <div className="col-lg-12"> <CBComplaints complaints={this.state.complaintsdata.complaints} /> </div>
		</div>
		<div className="row">
			<h4>Current Vitals</h4>
		</div>
		<div className="row">
            <div className="col-md-3 col-sm-6"> <CBBloodPressures bloodPressures={this.state.data.bloodPressures} /> </div>
            <div className="col-md-3 col-sm-6"> <CBBodyTemperatures bodyTemperatures={this.state.data.bodyTemperatures} /> </div>
            <div className="col-md-3 col-sm-6"> <CBBodyWeights bodyWeights={this.state.data.bodyWeights} /> </div>
            <div className="col-md-3 col-sm-6"> <CBHeartRates heartRates={this.state.data.heartRates} /> </div>
		</div>

        <div className="row">
             <div className="col-lg-2 col-md-6"> <CBMedications medications={this.state.medicationsdata.medications} /> </div>
            <div className="col-lg-2 col-md-6"> <CBAllergies allergies={this.state.allergiesdata.allergies} /> </div>
            <div className="col-lg-2 col-md-6"> <CBProcedures procedures={this.state.proceduresdata.procedures} /> </div>
            <div className="col-lg-2 col-md-6"> <CBConditions conditions={this.state.conditionsdata.conditions} /> </div>
            <div className="col-lg-2 col-md-6"> <CBImmunizations immunizations={this.state.immunizationsdata.immunizations} /> </div>
            <div className="col-lg-2 col-md-6"> <CBFamilyHistories familyHistories={this.state.familyhistorydata.familyHistories} /> </div>
           
        </div>
         <div className="row">
 			<div className="col-lg-3 col-md-6"> <CBLabTest labTests={this.state.labsdata.labTests} /> </div>
 		</div>
 
		<div className="row">
			<div className="col-lg-12 col-md-6"> <CBPatientVisitSummaries patientVisitSummaries={this.state.patientvisitsummarydata.patientVisitSummaries} /> </div>
			<div className="col-lg-12 col-md-6"> <CBPatientVisitHistories patientVisitHistories={this.state.patientvisithistorydata.patientVisitHistories} /> </div>
		</div>


      </div>

    );
  }
});

