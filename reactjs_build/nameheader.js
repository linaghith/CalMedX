var CBNameHeader = React.createClass({displayName: "CBNameHeader",

  render: function() {

    var patientData = this.props.patientData;

    return (
        React.createElement("div", {className: "name-header"}, 
            React.createElement("div", {className: "pull-left"}, 
                React.createElement("h3", null, patientData.name, ", ", patientData.age, ", ", patientData.sex)
            ), 

            React.createElement("div", {className: "pull-right"}, 
                React.createElement("span", {className: "pull-right text-muted small"}, 
                    React.createElement("small", null, 
                       React.createElement("br", null, "DOB: ", patientData.dob), 
                       React.createElement("br", null, "MRN: ", patientData.mrn)
                    )
                )
            )
        )
    );
  }
});
