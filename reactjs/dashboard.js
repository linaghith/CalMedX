var CMDashboard = React.createClass({

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
            <div className="col-lg-12"> <CBComplaints complaints={this.complaintsdata.complaints} /> </div>
		</div>
		<div className="row">
			<h4>Current Vitals</h4>
		</div>
		<div className="row">
            <div className="col-md-3 col-sm-6"> <CBBloodPressures bloodPressures={this.data.bloodPressures} /> </div>
            <div className="col-md-3 col-sm-6"> <CBBodyTemperatures bodyTemperatures={this.data.bodyTemperatures} /> </div>
            <div className="col-md-3 col-sm-6"> <CBBodyWeights bodyWeights={this.data.bodyWeights} /> </div>
            <div className="col-md-3 col-sm-6"> <CBHeartRates heartRates={this.data.heartRates} /> </div>
		</div>

        <div className="row">
            <div className="col-lg-2 col-md-4"> <CBMedications medications={this.medicationsdata.medications} /> </div>
            <div className="col-lg-2 col-md-4"> <CBAllergies allergies={this.allergiesdata.allergies} /> </div>
            <div className="col-lg-2 col-md-4"> <CBProcedures procedures={this.proceduresdata.procedures} /> </div>
            <div className="col-lg-2 col-md-4"> <CBConditions conditions={this.conditionsdata.conditions} /> </div>
            <div className="col-lg-2 col-md-4"> <CBImmunizations immunizations={this.immunizationsdata.immunizations} /> </div>
            <div className="col-lg-2 col-md-4"> <CBFamilyHistories familyHistories={this.familyhistorydata.familyHistories} /> </div>
        </div>

		<div className="row">
			<div className="col-lg-12 col-md-6"> <CBPatientVisitSummaries patientVisitSummaries={this.patientvisitsummarydata.patientVisitSummaries} /> </div>
			<div className="col-lg-12 col-md-6"> <CBPatientVisitHistories patientVisitHistories={this.patientvisithistorydata.patientVisitHistories} /> </div>
		</div>


      </div>

    );
  }
});

