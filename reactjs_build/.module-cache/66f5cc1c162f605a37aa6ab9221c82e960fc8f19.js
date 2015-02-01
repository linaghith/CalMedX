var CMDashboard = React.createClass({displayName: "CMDashboard",

  data: DATA,

  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      React.createElement("div", {id: "page-wrapper", style: wrapperStyle}, 

        React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-12"}, 
                React.createElement("h1", {className: "page-header"}, "Marla Dixon")
            )
        ), 

        React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBMedications, {medications: this.data.medications}), " "), 
            React.createElement("div", {className: "col-lg-3 col-md-6"}, " ", React.createElement(CBAllergies, {allergies: this.data.allergies}), " ")
        )

      )

    );
  }
});

