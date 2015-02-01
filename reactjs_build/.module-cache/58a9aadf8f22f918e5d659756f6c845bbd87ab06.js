var CMNavigationBar = React.createClass({displayName: "CMNavigationBar",
  render: function() {
    return (
        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("a", {className: "navbar-brand", href: "index.html"}, "SB Admin v2.0")
        )
      //<nav className="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      //</nav>
    );
  }
});


var CMBase = React.createClass({displayName: "CMBase",
  render: function() {
    return (
      React.createElement("div", {id: "wrapper"}, 
        "123" + ' ' +
        "//", React.createElement(CMNavigationBar, null)
      )
    );
  }
});

React.render(
  React.createElement(CMBase, null), 
  document.getElementsByTagName('body')
);
