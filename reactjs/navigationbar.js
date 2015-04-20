var CMNavigationBar = React.createClass({
  render: function() {
	var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
	var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
	var minutes= date.getMinutes();
	var hours= date.getHours();
	var seconds= date. getSeconds();
	
    var n=day+' '+ monthNames[monthIndex]+' '+ year+ ' '+hours+':'+minutes+':'+seconds;
    
    var topBarStyle = {
      "marginBottom": 0
    };

    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={topBarStyle}>

        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">eCalMedX-{n}</a>
          
        </div>


        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-user fa-fw"></i>  <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-user">
                  <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                  </li>
                  <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                  </li>
                  <li className="divider"></li>
                  <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                  </li>
              </ul>
          </li>
        </ul>
    </nav>
    );
  }
});

