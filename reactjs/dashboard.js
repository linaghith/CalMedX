var CMDashboard = React.createClass({
  render: function() {

    var wrapperStyle = {
      minHeight: '419px'
    };

    return (

      <div id="page-wrapper" style={wrapperStyle}>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
            </div>
        </div>
      </div>

    );
  }
});

