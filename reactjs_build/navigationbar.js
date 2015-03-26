var CMNavigationBar = React.createClass({displayName: "CMNavigationBar",

  render: function() {

    var topBarStyle = {
      "marginBottom": 0
    };

    return (
      React.createElement("nav", {className: "navbar navbar-default navbar-static-top", role: "navigation", style: topBarStyle}, 

        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("a", {className: "navbar-brand", href: "index.html"}, "eCalMedX")
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
        ), 


        React.createElement("div", {className: "navbar-default sidebar", role: "navigation"}, 
          React.createElement("div", {className: "sidebar-nav navbar-collapse active"}, 
              React.createElement("ul", {className: "nav in", id: "side-menu"}, 
    
                  React.createElement("li", {className: "sidebar-search"}, 
                      React.createElement("div", {className: "input-group custom-search-form"}, 
                          React.createElement("input", {type: "text", className: "form-control", placeholder: "Search..."}), 
                          React.createElement("span", {className: "input-group-btn"}, 
                          React.createElement("button", {className: "btn btn-default", type: "button"}, 
                              React.createElement("i", {className: "fa fa-search"})
                          )
                      )
                      )
                  ), 
      
                  React.createElement("li", null, 
                      React.createElement("a", {href: "#", className: "active"}, React.createElement("i", {className: "fa fa-dashboard fa-fw"}), " Dashboard")
                  ), 
              
                  React.createElement("li", null, 
                      React.createElement("a", {href: "#", className: "active"}, React.createElement("i", {className: "fa fa-files-o fa-fw"}), " Sample Pages")
                  )
              )
            )
        )

    )
    );
  }
});

