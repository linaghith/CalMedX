var CMBase = React.createClass({displayName: "CMBase",
  render: function() {
    return (
      React.createElement("div", {id: "wrapper"}, 
        React.createElement(CMDashboard, null)
      )
    );
  }
});


React.render(
  React.createElement(CMBase, null), 
  document.getElementById("app_container")
);
