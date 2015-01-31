var CMDashboard = React.createClass({

  data: DATA,

  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      <div id="page-wrapper" style={wrapperStyle}>

        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Marla Dixon</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-md-6"> <CBMedications medications={this.data.medications} /> </div>
            <div className="col-lg-3 col-md-6"> <CBAllergies allergies={this.data.allergies} /> </div>
        </div>

      </div>

    );
  }
});

