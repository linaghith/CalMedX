var CMBase = React.createClass({
  render: function() {
    return (
      <div id="wrapper">
        <CMNavigationBar />
        <CMDashboard />
      </div>
    );
  }
});


React.render(
  <CMBase />, 
  document.getElementById("app_container")
);
