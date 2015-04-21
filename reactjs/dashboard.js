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
	  therapiesdata: THERAPIESDATA,
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

	// fetching vitals and chief complaint 
     var vital_url = "fhir_proxy.php?json_url=baseDstu1/Encounter?subject=" + patient_id + "&_format=json";
	  $.get(vital_url, function(result) {

		//var result= '{ "entry":[  { "content":{  "reason":{ "text":"patient presents with 5 weeks history of severe cough. pt also reports severe shortness of breath, severe fever. --She is a 42 year old white f maid.she denies ever using cigarettes. describes drinking an average of 12 beers a week for about 4 years in her past. Respiration 16, Heart = RRR, Normal S1/S2, no murmurs, actively coughing with sputum production - dark yellow, Neck = no JVD a:Chronic Obstructive Pulmonary Disease p:performed E/M Level 3 (established patient) - Completed, and referred patient to pulmonary disease. o:Height: 170 cm--Weight: 95.25 kg--Temperature: 99.7 F--Pulse: 71--SystolicBP: 1609--DiastolicBP: 67"}}}]}';
   
		var dat = JSON.parse(result);
		var entries = dat['entry'][0]['content'];
		var entry= entries['reason'];
		
		
		var content = entry['text'];
		var contentarray= new Array();
		contentarray = content.split('--');
		
		var cheif_complient=contentarray[0];
		
		var vitals_data =[];
		var helparray= new Array();

		helparray=contentarray[2].split(':');
		var bodyweight= helparray[1];
		
		helparray=contentarray[3].split(':');
		var bodyTemperature = helparray[1];
		
		helparray=contentarray[4].split(':');
		var heartRate = helparray[1];
		
		
		helparray=contentarray[5].split(':');
		var SystolicBP=helparray[1];
		
		helparray=contentarray[6].split(':');
		var DiastolicBP=helparray[1];
				
		var blood_pressure = SystolicBP+ '/'+ DiastolicBP;
		vitals_data.push({
			bloodPressure: blood_pressure,
			heartRate: heartRate,
			bodyTemperature: bodyTemperature,
			bodyWeight: bodyweight
		});
      	
       	this.setState({ 
     	  				data: {'vitals': vitals_data}
     	 });
     	     	
      	var complaint_data = [];
		complaint_data.push({reason: cheif_complient});
     	this.setState({ 
     			complaintsdata: { 'complaints' :complaint_data }
     	});
     	
 		
 		var visitsummarynotes_str = contentarray[1];
     	
     	var visitsummary_data = [];
    
     	visitsummary_data.push({
          reason: '',
          dateString: '',
          notes: visitsummarynotes_str,
        });
 		this.setState({ 
     	  				patientvisitsummarydata: {'patientVisitSummaries' : visitsummary_data}
     	 });
      
    }.bind(this));	 


	//--------------------------	 
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

	  // fetching condition data
    var med_url = "fhir_proxy.php?json_url=baseDstu1/Condition?subject=" + patient_id + "&_format=json";
    $.get(med_url, function(result) {
      var dat = JSON.parse(result);
      var entries = dat['entry'];
      cond_data = [];

      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var content = entry['content'];
        cond_data.push({
          displayName: content['code']['coding'][0]['display'],
          onSetAge: content['onsetAge']['value'] + " "+ content['onsetAge']['units']	
        });
      }
      this.setState({
        conditionsdata: {'conditions': cond_data}
      });
    }.bind(this));

  },

  render: function() {
  
    var wrapperStyle = {
      minHeight: '609px'
    };

    return (
      
      <div>

        <div id="page-wrapper" style={wrapperStyle}>

          <div className="row name-header">
              <CBNameHeader patientData={this.state.patientData} />
          </div>
			
		  <div className="col-lg-12"> <CBComplaints complaints={this.state.complaintsdata.complaints} /> </div>
		 
		 <div className="col-lg-12"> <CBPatientVisitSummaries patientVisitSummaries={this.state.patientvisitsummarydata.patientVisitSummaries} /> </div>

          <div className="row name-header">
            <div className="col-md-6"><h4 className="current-vitals">Current Vitals</h4></div>
          </div>

          <div className="row col-lg-12 col-md-6">
              <div className="col-md-3 col-sm-6"> <CBBloodPressures bloodPressures={this.state.data.vitals} /> </div>
              <div className="col-md-3 col-sm-6"> <CBBodyTemperatures bodyTemperatures={this.state.data.vitals} /> </div>
              
              <div className="col-md-3 col-sm-6"> <CBBodyWeights bodyWeights={this.state.data.vitals} /> </div>
              <div className="col-md-3 col-sm-6"> <CBHeartRates heartRates={this.state.data.vitals} /> </div>
          </div>
          
          <div className="row col-lg-12">
            <h4 className="current-vitals">Vitals History</h4>
             <div className="col-md-3 col-sm-6"> <CBBloodPressuresHistory bloodPressuresHistory={this.state.data.bloodPressuresHistory} /> </div>
             <div className="col-md-3 col-sm-6"></div>
             <div className="col-md-3 col-sm-6"> <CBWeightHistory weightHistory={this.state.data.weightHistory} /> </div>
          </div>
          
          <div className="row col-lg-12 col-md-6">
              <div className="col-md-4"> <CBMedications medications={this.state.medicationsdata.medications} /> </div>
              <div className="col-md-4"> <CBAllergies allergies={this.state.allergiesdata.allergies} /> </div>
              <div className="col-md-4"> <CBConditions conditions={this.state.conditionsdata.conditions} /> </div>
          </div>

          <div className="row col-lg-12 col-md-6">
              <div className="col-md-4"> <CBProcedures procedures={this.state.proceduresdata.procedures} /> </div>
              <div className="col-md-4"> <CBImmunizations immunizations={this.state.immunizationsdata.immunizations} /> </div>
              <div className="col-md-4"> <CBFamilyHistories familyHistories={this.state.familyhistorydata.familyHistories} /> </div>
          </div>

           <div className="row col-lg-12 col-md-6">
              <div className="col-md-4"> <CBLabTest labTests={this.state.labsdata.labTests} /> </div>
              <div className="col-md-4"> <CBTherapies therapies={this.state.therapiesdata.therapies} /> </div>
          </div>
   
          <div className="row col-md-6">
            <div className="col-lg-12 col-md-6"> <CBPatientVisitHistories patientVisitHistories={this.state.patientvisithistorydata.patientVisitHistories} /> </div>
          </div>


        </div>
      </div>
    );
  }
});

