var CMNavigationBar = React.createClass({

  render: function() {

    var topBarStyle = {
      "marginBottom": 0
    };

    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={topBarStyle}>

        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">eCalMedX</a>
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
                  <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                  </li>
              </ul>
          </li>
        </ul>


        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse active">
              <ul className="nav in" id="side-menu">
    
                  <li className="sidebar-search">
                      <div className="input-group custom-search-form">
                          <input type="text" className="form-control" placeholder="Search..." />
                          <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                              <i className="fa fa-search"></i>
                          </button>
                      </span>
                      </div>
                  </li>
      
                  <li>
                      <a href="#" className="active"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                  </li>
              
                  <li>
                      <a href="#" className="active"><i className="fa fa-files-o fa-fw"></i> Sample Pages</a>
                  </li>
              </ul>
            </div>
        </div>

    </nav>
    );
  }
});

