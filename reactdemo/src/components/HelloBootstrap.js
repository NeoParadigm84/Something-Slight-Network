import React from "react";

function HelloBootstrap() {
  return (
    <html lang="en">

    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <title>Something Slight</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <link href="assets/css/bootstrap.css" rel="stylesheet">

      <link href="../assets/css/facebook.css" rel="stylesheet">
    </head>

    <body>

      <div className="wrapper">
        <div className="box">
          <div className="row row-offcanvas row-offcanvas-left">

            {/* sidebar */}
            <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">

              <ul className="nav">
                <li><a href="#" data-toggle="offcanvas" className="visible-xs text-center"><i
                      className="glyphicon glyphicon-chevron-right"></i></a></li>
              </ul>

              <ul className="nav hidden-xs" id="lg-menu">
                <li className="active"><a href="#featured"><i className="glyphicon glyphicon-list-alt"></i> Featured</a>
                </li>
                <li><a href="#stories"><i className="glyphicon glyphicon-list"></i> Stories</a></li>
                <li><a href="#"><i className="glyphicon glyphicon-paperclip"></i> Saved</a></li>
                <li><a href="#"><i className="glyphicon glyphicon-refresh"></i> Refresh</a></li>
              </ul>


              {/* <!-- tiny only nav--> */}
              <ul className="nav visible-xs" id="xs-menu">
                <li><a href="#featured" className="text-center"><i className="glyphicon glyphicon-list-alt"></i></a>
                </li>
                <li><a href="#stories" className="text-center"><i className="glyphicon glyphicon-list"></i></a></li>
                <li><a href="#" className="text-center"><i className="glyphicon glyphicon-paperclip"></i></a></li>
                <li><a href="#" className="text-center"><i className="glyphicon glyphicon-refresh"></i></a></li>
              </ul>

            </div>
            {/* <!-- /sidebar --> */}

            {/* <!-- main right col --> */}
            <div className="column col-sm-10 col-xs-11" id="main">

              {/* <!-- top nav --> */}
              <div className="navbar navbar-blue navbar-static-top">
                <div className="navbar-header">
                  <button className="navbar-toggle" type="button" data-toggle="collapse"
                    data-target=".navbar-collapse">
                    <span className="sr-only">Toggle</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a href="./assets/img/ss.png" className="navbar-brand logo">SS</a>
                </div>
                <nav className="collapse navbar-collapse" role="navigation">
                  <form className="navbar-form navbar-left">
                    <div className="input-group input-group-sm" style="max-width:360px;">
                      <input className="form-control" placeholder="Search" name="srch-term" id="srch-term"
                        type="text">
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i
                            className="glyphicon glyphicon-search"></i></button>
                      </div>
                    </div>
                  </form>
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="#"><i className="glyphicon glyphicon-home"></i> Home</a>
                    </li>
                    <li>
                      <a href="#postModal" role="button" data-toggle="modal"><i
                          className="glyphicon glyphicon-plus"></i> Post</a>
                    </li>
                    <li>
                      <a href="#"><span className="badge">badge</span></a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                          className="glyphicon glyphicon-user"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="">More</a></li>
                        <li><a href="">More</a></li>
                        <li><a href="">More</a></li>
                        <li><a href="">More</a></li>
                        <li><a href="">More</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- /top nav --> */}

              <div className="padding">
                <div className="full col-sm-9">

                  {/* <!-- content --> */}
                  <div className="row">

                    {/* <!-- main col left --> */}
                    <div className="col-sm-5">

                      <div className="panel panel-default">
                        <div className="panel-thumbnail"><img src="assets/img/bg_5.jpg"
                            className="img-responsive"></div>
                        <div className="panel-body">
                          <p className="lead">User Name</p>
                          <p>45 Followers, 13 Posts</p>

                          <p>
                            <img src="assets/img/uFp_tsTJboUY7kue5XAsGAs28.png" height="28px"
                              width="28px">
                          </p>
                        </div>
                      </div>


                      <div className="panel panel-default">
                        <div className="panel-heading"><a href="#" className="pull-right">View all</a>
                          <h4>Bootstrap Examples</h4>
                        </div>
                        <div className="panel-body">
                          <div className="list-group">
                            <a href="http://usebootstrap.com/theme/facebook"
                              className="list-group-item">Modal / Dialog</a>
                            <a href="http://usebootstrap.com/theme/facebook"
                              className="list-group-item">Datetime Examples</a>
                            <a href="http://usebootstrap.com/theme/facebook"
                              className="list-group-item">Data Grids</a>
                          </div>
                        </div>
                      </div>

                      <div className="well">
                        <form className="form-horizontal" role="form">
                          <h4>What's New</h4>
                          <div className="form-group" style="padding:14px;">
                            <textarea className="form-control"
                              placeholder="Update your status"></textarea>
                          </div>
                          <button className="btn btn-primary pull-right" type="button">Post</button>
                          <ul className="list-inline">
                            <li><a href=""><i className="glyphicon glyphicon-upload"></i></a></li>
                            <li><a href=""><i className="glyphicon glyphicon-camera"></i></a></li>
                            <li><a href=""><i className="glyphicon glyphicon-map-marker"></i></a></li>
                          </ul>
                        </form>
                      </div>
    {/************************SCRAPING CODE***********************************/}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          {/* <!-- <a href="#" className="pull-right">View all</a> --> */}
                          <h4>POP CULTURE SECTION</h4>
                        </div>
                        <div className="nav-link active show" data-toggle="tab"></div>
                        <div className="panel-body">

                          <div className="clearfix">
                            <ul className="nav nav-pills ">
                                <li className="nav-item">
                                  <a className="nav-link active" href="/controllers/api/articles/scrape">MTV</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/controllers/api/articles/scrape">ESPN</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/controllers/api/articles/scrape">NPR</a>
                                </li>
                            </ul>
                          </div>
                          <hr>
                          <ul className="list-unstyled">
    {/*////////////////////////////GEORGE: INSERT CODE HERE TO DISPLAY SCRAPE RESULT////////////////////////////////*/}
                            <div id="articles">
                              {{#each articles}}
                                <div className="well">
                                  <div className="row">
                                    <div className="col col-md-8">
                                      <h4><a href="{{this.link}}">{{this.title}}</a></h4>
                                    </div>
                                  </div>
                                </div>
                              {{/each}}
                            </div>
                          </ul>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4>ANOTHER RANDOM DIV</h4>
                        </div>
                        <div className="panel-body">
                          TBD</div>
                      </div>



                    </div>

                    {/* <!-- main col right --> */}
                    <div className="col-sm-7">

                      <div className="well">
                        <form className="form">
                          <h4>Sign-up</h4>
                          <div className="input-group text-center">
                            <input className="form-control input-lg"
                              placeholder="Enter your email address" type="text">
                            <span className="input-group-btn"><button className="btn btn-lg btn-primary"
                                type="button">OK</button></span>
                          </div>
                        </form>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading"><a href="#" className="pull-right">View all</a>
                          <h4>Useful Links</h4>
                        </div>
                        <div className="panel-body">
                          <div className="clearfix"></div>
                          <hr>
                          This section is for Lib, Google, Educational links
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading"><a href="#" className="pull-right">View all</a>
                          <h4>MY CREW</h4>
                        </div>
                        <div className="panel-body">
                          <div className="clearfix"></div>
                          <hr>

                          <p>FRIENDS LIST</p>

                          <hr>
                          <form>
                            <div className="input-group">
                              <div className="input-group-btn">
                                <button className="btn btn-default">+1</button><button
                                  className="btn btn-default"><i
                                    className="glyphicon glyphicon-share"></i></button>
                              </div>
                              <input className="form-control" placeholder="Add a comment.."
                                type="text">
                            </div>
                          </form>

                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading"><a href="#" className="pull-right">View all</a>
                          <h4>Portlet Heading</h4>
                        </div>
                        <div className="panel-body">
                          <ul className="list-group">
                            <li className="list-group-item">Modals</li>
                            <li className="list-group-item">Sliders / Carousel</li>
                            <li className="list-group-item">Thumbnails</li>
                          </ul>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-thumbnail"><img src="assets/img/bg_4.jpg"
                            className="img-responsive"></div>
                        <div className="panel-body">
                          <p className="lead">Social Good</p>
                          <p>1,200 Followers, 83 Posts</p>

                          <p>
                            <img src="assets/img/photo.jpg" height="28px" width="28px">
                            <img src="assets/img/photo.png" height="28px" width="28px">
                            <img src="assets/img/photo_002.jpg" height="28px" width="28px">
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* <!--/row--> */}

                  <div className="row">
                    <div className="col-sm-6">
                      <a href="#">Twitter</a> <small className="text-muted">|</small> <a href="#">Facebook</a>
                      <small className="text-muted">|</small> <a href="#">Google+</a>
                    </div>
                  </div>

                  <div className="row" id="footer">
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-6">
                      
                    </div>
                  </div>

                  <hr>


                  <hr>

                {/* <!-- /col-9 --> */}
                </div> 
              {/* <!-- /padding --> */}
              </div>
            </div>
            {/* <!-- /main --> */}

          </div>
        </div>
      </div>


      {/* <!--post modal--> */}
      <div id="postModal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">�</button>
              Update Status
            </div>
            <div className="modal-body">
              <form className="form center-block">
                <div className="form-group">
                  <textarea className="form-control input-lg" autofocus=""
                    placeholder="What do you want to share?"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div>
                <button className="btn btn-primary btn-sm" data-dismiss="modal" aria-hidden="true">Post</button>
                <ul className="pull-left list-inline">
                  <li><a href=""><i className="glyphicon glyphicon-upload"></i></a></li>
                  <li><a href=""><i className="glyphicon glyphicon-camera"></i></a></li>
                  <li><a href=""><i className="glyphicon glyphicon-map-marker"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="assets/js/jquery.js"></script>
      <script type="text/javascript" src="assets/js/bootstrap.js"></script>
      <script type="text/javascript">
        $(document).ready(function () {
          $('[data-toggle=offcanvas]').click(function () {
            $(this).toggleclassName('visible-xs text-center');
            $(this).find('i').toggleclassName('glyphicon-chevron-right glyphicon-chevron-left');
            $('.row-offcanvas').toggleclassName('active');
            $('#lg-menu').toggleclassName('hidden-xs').toggleclassName('visible-xs');
            $('#xs-menu').toggleclassName('visible-xs').toggleclassName('hidden-xs');
            $('#btnShow').toggle();
          });
        });
      </script>



  );
}

export default HelloBootstrap;
