var CBPatientAppointments = React.createClass({

  render: function() {
	var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
	var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
	
    var today=monthNames[monthIndex]+' '+day+', '+ year;

    var patientAppointmentList = this.props.patients.map(function(patient, index) {
      return (
		  <tr className="success">	
          <td><a href="index.html">{patient.displayName}</a></td>
		  <td>{patient.appointmentType}</td> 
		  <td>{patient.appointmentReason}</td>
		  <td>{patient.status}</td>
		  </tr>
      );
    });

    return (
	 <div className="panel panel-default">
     	<div className="panel-heading">
			Dr Braustein's Appointments for {today}
        </div>
		<div className="panel-body">
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th>Patient Name</th>
							<th>Appointment Type</th>
							<th>Appointment Reason</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{patientAppointmentList}
					</tbody>
				</table>
			</div>
		</div>
	 </div>	
    );
  }
});

