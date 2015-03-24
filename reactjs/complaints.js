var CBComplaints = React.createClass({

  render: function() {

    var complaintList = this.props.complaints.map(function(complaint, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{complaint.reason}</dt>
        </div>
      );
    });

    return (

	  <div class="well well-sm">
         <h4> Chief Complaints </h4>
        <p>
          {complaintList}
        </p>
      </div>

    );
  }
});

