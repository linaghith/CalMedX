var CBNameHeader = React.createClass({

  render: function() {

    var patientData = this.props.patientData;

    return (
        <div className="name-header">        
            <div className="pull-left">
                <h3>{patientData.name}, {patientData.age}, {patientData.sex}</h3>
            </div>

            <div className="pull-right">
                <span className="pull-right text-muted small">
                    <small>
                       <br>DOB: {patientData.dob}</br>
                       <br>MRN: {patientData.mrn}</br>
                    </small>
                </span>
            </div>
        </div>
    );
  }
});
