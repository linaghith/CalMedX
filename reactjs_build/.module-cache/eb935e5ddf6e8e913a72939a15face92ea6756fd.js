var CMNavigationBar = React.createClass({displayName: "CMNavigationBar",
  render: function() {
    return (
      React.createElement("nav", {className: "navbar navbar-default navbar-static-top", role: "navigation"}, 
        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("a", {className: "navbar-brand", href: "index.html"}, "CalMedX")
        ), 

        React.createElement("ul", {className: "nav navbar-top-links navbar-right"}, 
          React.createElement("li", {className: "dropdown"}, 
              React.createElement("a", {className: "dropdown-toggle", "data-toggle": "dropdown", href: "#"}, 
                  React.createElement("i", {className: "fa fa-user fa-fw"}), "  ", React.createElement("i", {className: "fa fa-caret-down"})
              ), 
              React.createElement("ul", {className: "dropdown-menu dropdown-user"}, 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-user fa-fw"}), " User Profile")
                  ), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-gear fa-fw"}), " Settings")
                  ), 
                  React.createElement("li", {className: "divider"}), 
                  React.createElement("li", null, React.createElement("a", {href: "login.html"}, React.createElement("i", {className: "fa fa-sign-out fa-fw"}), " Logout")
                  )
              )
          )
        )

      )
    );
  }
});

