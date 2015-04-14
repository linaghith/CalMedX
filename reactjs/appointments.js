var CMAppointments = React.createClass({
	
  getInitialState: function() {
    return {
		patientsdata: PATIENTSDATA,
		
	};
  },

  render: function() {
  
    var wrapperStyle = {
      minHeight: '419px'
    };

    return (
      <div className="container">
          <div className="row name-header">
              <CBPatientAppointments patients={this.state.patientsdata.patients} />
          </div>
	  </div>
	)
  }	
});
