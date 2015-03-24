var CBComplaints = React.createClass({displayName: "CBComplaints",

  render: function() {

    var complaintList = this.props.complaints.map(function(complaint, index) {
      return (
        React.createElement("div", {key: index, className: "list-group-item"}, 
          React.createElement("dt", null, complaint.reason)
        )
      );
    });

    return (

	  React.createElement("div", {class: "well well-sm"}, 
         React.createElement("h4", null, " Chief Complaints "), 
        React.createElement("p", null, 
          complaintList
        )
      )

    );
  }
});

