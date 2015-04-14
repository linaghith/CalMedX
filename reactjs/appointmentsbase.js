var CMAppointmentsBase = React.createClass({
  render: function() {
    return (
      <div id="wrapper">
        <CMAppointmentsNavi />
        <CMAppointments />
      </div>
    );
  }
});


React.render(
  <CMAppointmentsBase />, 
  document.getElementById("app_container")
);
