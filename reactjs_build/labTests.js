var CBLabTest = React.createClass({displayName: "CBLabTest",
  render: function() {
    var labTestList = this.props.labTests.map(function(labTest, index) {
      return (
				React.createElement("div", {key: index, className: "list-group-item"}, 
		          
		          React.createElement("dt", null, labTest.description, 
		          		React.createElement("dl", {className: "pull-right"}, labTest.dateTaken)
		          )
		        )			        		
        )
    });
    return (
      React.createElement("div", {className: "panel panel-default"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Lab Results"
        ), 

        React.createElement("div", {className: "list-group"}, 
          labTestList
        ), 
    
        React.createElement("a", {href: "#"}, 
        React.createElement("div", {className: "panel-footer"}, 
          React.createElement("div", {className: "text-center"}, 
            "Add ", React.createElement("i", {className: "fa fa-plus"})
          )
        )
        )

      )   
  );
  }
});

