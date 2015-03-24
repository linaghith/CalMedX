var CMDashboard = React.createClass({

  data: DATA,

  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      <div id="page-wrapper" style={wrapperStyle}>

        <div className="row">
			<h3>Marla Dixon
                <span className="pull-right text-muted small">
                    <small>
                       <br>DOB:  12/12/1956</br>
                       <br>MRN:  402500433</br>
                    </small>
                </span><br></br>
            </h3>
        </div>
		<div className="row">
            <div className="col-lg-3 col-md-6"> <CBBloodPressures bloodPressures={this.data.bloodPressures} /> </div>
            <div className="col-lg-3 col-md-6"> <CBBodyTemperatures bodyTemperatures={this.data.bodyTemperatures} /> </div>
            <div className="col-lg-3 col-md-6"> <CBBodyWeights bodyWeights={this.data.bodyWeights} /> </div>
            <div className="col-lg-3 col-md-6"> <CBHeartRates heartRates={this.data.heartRates} /> </div>
		</div>

		<div className="row">
            <div className="col-lg-12"> <CBComplaints complaints={this.data.complaints} /> </div>
		</div>

        <div className="row">
            <div className="col-lg-2 col-md-6"> <CBMedications medications={this.data.medications} /> </div>
            <div className="col-lg-2 col-md-6"> <CBAllergies allergies={this.data.allergies} /> </div>
            <div className="col-lg-2 col-md-6"> <CBProcedures procedures={this.data.procedures} /> </div>
            <div className="col-lg-2 col-md-6"> <CBConditions conditions={this.data.conditions} /> </div>
            <div className="col-lg-2 col-md-6"> <CBImmunizations immunizations={this.data.immunizations} /> </div>
            <div className="col-lg-2 col-md-6"> <CBFamilyHistories familyHistories={this.data.familyHistories} /> </div>
        </div>

		<div className="row">
			<div className="col-lg-12 col-md-6"> <CBPatientVisitSummaries patientVisitSummaries={this.data.patientVisitSummaries} /> </div>
			<div className="col-lg-12 col-md-6"> <CBPatientVisitHistories patientVisitHistories={this.data.patientVisitHistories} /> </div>
		</div>


      </div>

    );
  }
});

