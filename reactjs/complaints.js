var CBComplaints = React.createClass({

  render: function() {

    var complaintList = this.props.complaints.map(function(complaint, index) {
      return (
        <p>{complaint.reason}</p>
      );
    });

    return (		
      <div className="panel panel-info">

        <div className="panel-heading">Chief Complaint</div>

        <div className="list-group"> {complaintList}</div>

      </div>
      		
    );
  }
});

