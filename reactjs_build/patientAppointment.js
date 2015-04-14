
var CBPatientAppointments = React.createClass({displayName: "CBPatientAppointments",

  render: function() {

    var patientAppointmentList = this.props.patients.map(function(patient, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, patient.displayName, " : ", patient.age)
        )
      );
    });

    return (

      React.createElement("div", {className: "panel panel-info"}, 

        React.createElement("div", {className: "row name-header"}, 
          "Appointments Today"
        ), 

        React.createElement("div", {className: "list-group"}, 
          patientAppointmentList
        )

      )

    );
  }
});

