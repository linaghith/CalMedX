var CMNavigationBar = React.createClass({displayName: "CMNavigationBar",
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
	var minutes= date.getMinutes();
	var hours= date.getHours();
	var seconds= date. getSeconds();
	
    var n=day+' '+ monthNames[monthIndex]+' '+ year+ ' '+hours+':'+minutes+':'+seconds;
    
    var topBarStyle = {
      "marginBottom": 0
    };

    return (
      React.createElement("nav", {className: "navbar navbar-default navbar-static-top", role: "navigation", style: topBarStyle}, 

        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("a", {className: "navbar-brand", href: "index.html"}, "eCalMedX-", n)
          
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

