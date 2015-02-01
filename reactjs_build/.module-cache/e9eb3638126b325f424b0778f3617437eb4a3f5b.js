var CMNavigationBar = React.createClass({displayName: "CMNavigationBar",
  render: function() {
    return (
      React.createElement("nav", {className: "navbar navbar-default navbar-static-top", role: "navigation"}, 
        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("a", {className: "navbar-brand", href: "index.html"}, "CalMedX")
        )
      )
    );
  }
});


var CMBase = React.createClass({displayName: "CMBase",
  render: function() {
    return (
      React.createElement("div", {id: "wrapper"}, 
        React.createElement(CMNavigationBar, null)
      )
    );
  }
});

React.render(
  React.createElement(CMBase, null), 
  document.getElementById("app_container")
);
