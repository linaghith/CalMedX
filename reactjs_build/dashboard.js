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

		//var result= '{"resourceType":"Bundle","entry":[{"reason":{"text":"patient presents with 5 weeks history of severe cough. pt also reports severe shortness of breath, severe fever. She is a 42 year old white f maid.she denies ever using cigarettes. describes drinking an average of 12 beers a week for about 4 years in her past. Respiration 16, Heart = RRR, Normal S1/S2, no murmurs, actively coughing with sputum production - dark yellow, Neck = no JVD a:Chronic Obstructive Pulmonary Disease p:performed E/M Level 3 (established patient) - Completed, and referred patient to pulmonary disease. o:Height: 170 cm--Weight: 95.25 kg--Temperature: 99.7 F--Pulse: 71--SystolicBP: 109--DiastolicBP: 67"}}]}';

		var dat = JSON.parse(result);
		var entries = dat['entry'][0];
		var entry= entries['reason'];
		var complaint_data = [];
		var content = entry['text'];
		var contentarray= new Array();
		contentarray = content.split('--');
		
		var cheif_complient=contentarray[0];
		
		var vitals_data =[];
		var helparray= new Array();

		helparray=contentarray[1].split(':');
		var bodyweight= helparray[1];
		
		helparray=contentarray[2].split(':');
		var bodyTemperature = helparray[1];
		
		helparray=contentarray[3].split(':');
		var heartRate = helparray[1];
		
		
		helparray=contentarray[4].split(':');
		var SystolicBP=helparray[1];
		
		helparray=contentarray[5].split(':');
		var DiastolicBP=helparray[1];
				
		var blood_pressure = SystolicBP+ '/'+ DiastolicBP;
		vitals_data.push({
			bloodPressure: blood_pressure,
			heartRate: heartRate,
			bodyTemperature: bodyTemperature,
			bodyWeight: bodyweight
		});
      
		complaint_data.push({reason: cheif_complient});
		
     	this.setState({ 
     			complaintsdata: { 'complaints' :complaint_data }
     	});
     	
     	
     	this.setState({ 
     	  				data: {'vitals': vitals_data}
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
      
      React.createElement("div", null, 

        React.createElement("div", {id: "page-wrapper", style: wrapperStyle}, 

          React.createElement("div", {className: "row name-header"}, 
              React.createElement(CBNameHeader, {patientData: this.state.patientData})
          ), 
			
		  React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBComplaints, {complaints: this.state.complaintsdata.complaints}), " "), 
		 
		 React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBPatientVisitSummaries, {patientVisitSummaries: this.state.patientvisitsummarydata.patientVisitSummaries}), " "), 

          React.createElement("div", {className: "row name-header"}, 
            React.createElement("div", {className: "col-md-6"}, React.createElement("h4", {className: "current-vitals"}, "Current Vitals"))
          ), 

          React.createElement("div", {className: "row col-lg-12 col-md-6"}, 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBloodPressures, {bloodPressures: this.state.data.vitals}), " "), 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBodyTemperatures, {bodyTemperatures: this.state.data.vitals}), " "), 
              
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBodyWeights, {bodyWeights: this.state.data.vitals}), " "), 
              React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBHeartRates, {heartRates: this.state.data.vitals}), " ")
          ), 
          
          React.createElement("div", {className: "row col-lg-12"}, 
            React.createElement("h4", {className: "current-vitals"}, "Vitals History"), 
             React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBBloodPressuresHistory, {bloodPressuresHistory: this.state.data.bloodPressuresHistory}), " "), 
             React.createElement("div", {className: "col-md-3 col-sm-6"}), 
             React.createElement("div", {className: "col-md-3 col-sm-6"}, " ", React.createElement(CBWeightHistory, {weightHistory: this.state.data.weightHistory}), " ")
          ), 
          
          React.createElement("div", {className: "row col-lg-12 col-md-6"}, 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBMedications, {medications: this.state.medicationsdata.medications}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBAllergies, {allergies: this.state.allergiesdata.allergies}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBConditions, {conditions: this.state.conditionsdata.conditions}), " ")
          ), 

          React.createElement("div", {className: "row col-lg-12 col-md-6"}, 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBProcedures, {procedures: this.state.proceduresdata.procedures}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBImmunizations, {immunizations: this.state.immunizationsdata.immunizations}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBFamilyHistories, {familyHistories: this.state.familyhistorydata.familyHistories}), " ")
          ), 

           React.createElement("div", {className: "row col-lg-12 col-md-6"}, 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBLabTest, {labTests: this.state.labsdata.labTests}), " "), 
              React.createElement("div", {className: "col-md-4"}, " ", React.createElement(CBTherapies, {therapies: this.state.therapiesdata.therapies}), " ")
          ), 
   
          React.createElement("div", {className: "row col-md-6"}, 
            React.createElement("div", {className: "col-lg-12 col-md-6"}, " ", React.createElement(CBPatientVisitHistories, {patientVisitHistories: this.state.patientvisithistorydata.patientVisitHistories}), " ")
          )


        )
      )
    );
  }
});

