var CBLabTest = React.createClass({
  render: function() {
    var labTestList = this.props.labTests.map(function(labTest, index) {
      return (
				<div key={index} className="list-group-item">
		          
		          <dt>{labTest.description}
		          		<dl className="pull-right">{labTest.dateTaken}</dl>
		          </dt>
		        </div>			        		
        )
    });
    return (
      <div className="panel panel-default">

        <div className="panel-heading">
          Lab Results
        </div>

        <div className="list-group">
          {labTestList}
        </div>
    
        <a href="#">
        <div className="panel-footer">
          <div className="text-center">
            Add <i className="fa fa-plus"></i>
          </div>
        </div>
        </a>

      </div>   
  );
  }
});

