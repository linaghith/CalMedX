var CBComplaints = React.createClass({displayName: "CBComplaints",

  render: function() {

    var complaintList = this.props.complaints.map(function(complaint, index) {
      return (
        React.createElement("p", null, complaint.reason)
      );
    });

    return (
		React.createElement("div", {className: "col-lg-12"}, 
		    React.createElement("div", {className: "well well-sm"}, 
		        React.createElement("h4", null, "Chief Complaint"), 
		        complaintList
		    )
		) 
    );
  }
});

