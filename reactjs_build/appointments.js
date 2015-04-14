var CMAppointments = React.createClass({displayName: "CMAppointments",
	
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
      React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row name-header"}, 
              React.createElement(CBPatientAppointments, {patients: this.state.patientsdata.patients})
          )
	  )
	)
  }	
});
