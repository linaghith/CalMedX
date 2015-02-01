var CMDashboard = React.createClass({displayName: "CMDashboard",

  data: function() {
    return {
      'medications': [
        {
          displayName: 'Lasix',
          dosage: '40 mg',
          dateString: 'May 1, 2005 – Jul 1, 2014'
        },
        {
          displayName: 'Propranolol Extended Release 60 mg',
          dosage: '60 mg',
          dateString: 'May 1, 2005'
        },
      ]
    };
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
            React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBMedications, {medications: this.data.medications}), " "), 
            React.createElement("div", {className: "col-lg-12"}, " ", React.createElement(CBMedications, {medications: this.data.medications}), " ")
        )

      )

    );
  }
});

