var CMAppointmentsBase = React.createClass({displayName: "CMAppointmentsBase",
  render: function() {
    return (
      React.createElement("div", {id: "wrapper"}, 
        React.createElement(CMAppointmentsNavi, null), 
        React.createElement(CMAppointments, null)
      )
    );
  }
});


React.render(
  React.createElement(CMAppointmentsBase, null), 
  document.getElementById("app_container")
);
