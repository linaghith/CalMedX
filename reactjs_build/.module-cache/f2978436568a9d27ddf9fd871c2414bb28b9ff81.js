var CMDashboard = React.createClass({displayName: "CMDashboard",
  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      React.createElement("div", {id: "page-wrapper", style: wrapperStyle}, 
        React.createElement("div", {class: "row"}, 
            React.createElement("div", {class: "col-lg-12"}, 
                React.createElement("h1", {class: "page-header"}, "Dashboard")
            )
        )
      )

    );
  }
});

