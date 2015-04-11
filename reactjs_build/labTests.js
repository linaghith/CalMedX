
var CBLabTest = React.createClass({displayName: "CBLabTest",
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(divid) {
  	var newdivid = divid +'labdiv';
	if ($('#'+newdivid).hasClass('nodisplay')){
    	$('#'+newdivid).removeClass('nodisplay');
    	$('#'+divid+'lablink').html(' [-] ');
    }else{
    	$('#'+newdivid).addClass('nodisplay');
    	$('#'+divid+'lablink').html(' [+] ');
    }
  },
  
  
  render: function() {
	 var labTestList = this.props.labTests.map(function(labTest, index) {
	 var i =index+ 'lablink';
	 var divid =index+ 'labdiv';
      return (
				React.createElement("div", {key: index, className: "list-group-item"}, 
		          React.createElement("dt", null, labTest.testName, "-", labTest.DateColleted), 
		          React.createElement("dl", null, labTest.result, 
         				React.createElement("span", {className: "linkClass", onClick: this.handleClick.bind(this,index), id: i}, "[+]")
         		  ), 
         				React.createElement("div", {id: divid, className: "nodisplay"}, 
						  	React.createElement("p", null, "CollectionMethod: ", labTest.CollectionMethod), 
						  	React.createElement("p", null, "clinic: ", labTest.clinic), 
						  	React.createElement("p", null, "OrderProviderName: ", labTest.OrderProviderName), 
						  	React.createElement("p", null, "OrderDate: ", labTest.OrderDate), 
						  	React.createElement("p", null, "DateColleted: ", labTest.DateColleted), 
						  	React.createElement("p", null, "DateResult: ", labTest.DateResult), 
						  	React.createElement("p", null, "LOINC: ", labTest.Test_LOINC), 
						  	React.createElement("p", null, "resultStatus: ", labTest.resultStatus), 
						  	React.createElement("p", null, "result: ", labTest.result)
         				)
		         
		        )
        )},this
      );
       


  
 return (
      React.createElement("div", {className: "panel panel-default"}, 

        React.createElement("div", {className: "panel-heading"}, 
          "Lab Results"
        ), 

        React.createElement("div", {className: "list-group"}, labTestList
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
