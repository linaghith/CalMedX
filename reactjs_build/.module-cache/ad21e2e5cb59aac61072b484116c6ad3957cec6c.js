var CMDashboard = React.createClass({displayName: "CMDashboard",

  data: function() {
    return {
    }
  },


  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      React.createElement("div", {id: "page-wrapper", style: wrapperStyle}, 

        React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-12"}, 
                React.createElement("h1", {className: "page-header"}, "Dashboard")
            )
        ), 

        React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-12"}, 
              React.createElement(CBMeications, {medications: medications})
            )
        )

      )

    );
  }
});

