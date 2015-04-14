var CBComplaints = React.createClass({displayName: "CBComplaints",

  render: function() {

    var complaintList = this.props.complaints.map(function(complaint, index) {
      return (
        React.createElement("p", null, complaint.reason)
      );
    });

    return (		
      React.createElement("div", {className: "panel panel-info"}, 

        React.createElement("div", {className: "panel-heading"}, "Chief Complaint"), 

        React.createElement("div", {className: "list-group"}, " ", complaintList)

      )
      		
    );
  }
});

