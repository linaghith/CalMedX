var CBComplaints = React.createClass({

  render: function() {

    var complaintList = this.props.complaints.map(function(complaint, index) {
      return (
        <p>{complaint.reason}</p>
      );
    });

    return (
		<div className="col-lg-12">
		    <div className="well well-sm">
		        <h4>Chief Complaint</h4>
		        {complaintList}
		    </div>
		</div> 
    );
  }
});

