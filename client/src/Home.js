import React, { Component } from "react";
import $ from 'jquery';
import "./App.css";


class Home extends Component {

    componentDidMount() {
        $('#preloader').fadeOut('slow', function () {
          $(this).remove();
      });
    
    
      let location = window.location;
    
      var MQL = 1170;
    
        //primary navigation slide-in effect
        if ($(window).width() > MQL) {
            var headerHeight = $('.cd-header').height();
            $(window).on('scroll',
                {
                    previousTop: 0
                },
                function () {
                    var currentTop = $(window).scrollTop();
                    //check if user is scrolling up
                    if (currentTop < this.previousTop) {
                        //if scrolling up...
                        if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
                            $('.cd-header').addClass('is-visible');
    
                        } else {
                            $('.cd-header').removeClass('is-visible is-fixed');
                        }
                    } else {
                        //if scrolling down...
                        $('.cd-header').removeClass('is-visible');
                        if (currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
                    }
                    this.previousTop = currentTop;
                });
        }
    
        /* --------------------------------
         open/close primary navigation
         -------------------------------- */
    
        // $('.cd-primary-nav li a').smoothScroll();
    
    
        $('.cd-primary-nav-trigger').on('click', function () {
            $('.cd-menu-icon').toggleClass('is-clicked');
            $('.cd-header').toggleClass('menu-is-open');
    
            //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            if ($('.cd-primary-nav').hasClass('is-visible')) {
                $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').removeClass('overflow-hidden');
                });
            } else {
                $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').addClass('overflow-hidden');
                    console.log("adding visible");
                });
            }
        });
    
        $('.cd-primary-nav li a').on('click', function () {
            if ($('.cd-primary-nav').hasClass('is-visible')) {
                $('.cd-menu-icon').toggleClass('is-clicked');
                $('.cd-header').toggleClass('menu-is-open');
    
                $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').removeClass('overflow-hidden');
                });
            }
        });
    
        /* --------------------------------
         swipebox video light box
         -------------------------------- */
    
    
        // $('.swipebox-video').swipebox();
    
    
    
        /* --------------------------------
         Ajax MailChimp Integration
         -------------------------------- */
    
    
    
        // $('#mc-form').ajaxchimp({
        //     language: 'ft',
        //     url: '//fifothemes.us11.list-manage.com/subscribe/post?u=3b20d04261686076af5d7eb47&amp;id=b1e189e232',
        //     fields: { mc_email: "Email"},
        //     callback: clearSubsForm
        //     //https://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
        // });
    
    
        // Lead Gen Subscribe Form
    
        // $('#mc-lead-form').ajaxchimp({
        //     language: 'ft',
        //     url: '//fifothemes.us11.list-manage.com/subscribe/post?u=3b20d04261686076af5d7eb47&amp;id=74f3ddd5e8',
        //     fields: {mc_name: "Name", mc_email: "Email", mc_message: "Message"},
        //     callback: clearLeadSubsForm
        //     //https://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
        // });
    
    
        // $.ajaxchimp.translations.ft = {
        //     'submit': 'Submitting...',
        //     0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        //     1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        //     2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        //     3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        //     4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        //     5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
        // };
    
        //Clear subscription form input field
        function clearSubsForm(ev) {
            if (ev.result === 'success') {
                $("#mc-email").val('');
            }
        }
    
        //Clear subscription form input field
        function clearLeadSubsForm(ev) {
            if (ev.result === 'success') {
                $("#mc-email").val('');
                $("#mc-name").val('');
                $("#mc-message").val('');
            }
        }
    
    
        /* --------------------------------
         Carousel
         -------------------------------- */
    
        // $('#Carousel').carousel({
        //     interval: 5000
        // })
    
        /* --------------------------------
         Our Stats
         -------------------------------- */
    
        $('.our-stats-box').each(function () {
            $('.our-stat-info').fappear(function (direction) {
                $('.stats').countTo();
            }, {offset: "100px"});
        });
    
        /* --------------------------------
         screenshot carousel
         -------------------------------- */
    
        $('.carousel[data-type="multi"] .item').each(function(){
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
    
            for (var i=0;i<2;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
    
                next.children(':first-child').clone().appendTo($(this));
            }
        });
    
    
        //Enable touch swiping for carousel
        // $(".carousel-inner").swipe( {
        //     //Generic swipe handler for all directions
        //     swipeLeft:function(event, direction, distance, duration, fingerCount) {
        //         $(this).parent().carousel('prev');
        //     },
        //     swipeRight: function() {
        //         $(this).parent().carousel('next');
        //     },
        //     //Default is 75px, set to 0 for demo so any distance triggers swipe
        //     threshold:0
        // });
    
    
        /* --------------------------------
         Typer.js is built by Layervault
         -------------------------------- */
    
        // $('[data-typer-targets]').typer();
    
        /*----------------------------------------------------*/
        /*  Intro page jquery
         /*----------------------------------------------------*/
    
        $('.footer-nav-inner').on('click', function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    
    
        /*----------------------------------------------------*/
        /*  Scroll Down
         /*----------------------------------------------------*/
    
        // $('.icon-arrow-down').on('click', function () {
        //     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        //         var target = $(this.hash);
        //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        //         if (target.length) {
        //             $('html,body').animate({
        //                 scrollTop: target.offset().top
        //             }, 1000);
        //             return false;
        //         }
        //     }
        // });
    
    
        //How it works tooltips
    
        // if (!('ontouchstart' in window))
        // {
        //     $('a').tooltip();
        // }
    
    
    
    
    
        /*----------------------------------------------------*/
        /*  Contact Form Section
         /*----------------------------------------------------*/
        $("#contact-form").on('submit', function (e) {
            e.preventDefault();
            var name = $("#name").val();
            var email = $("#email").val();
            var text = $("#message").val();
            var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
    
    
            function isValidEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };
    
            if (isValidEmail(email) && (text.length > 100) && (name.length > 1)) {
                $.ajax({
                    type: "POST",
                    url: "ajax/process.php",
                    data: dataString,
                    success: function () {
                        $('.success').fadeIn(1000).delay(3000).fadeOut(1000);
                        $('#contact-form')[0].reset();
                    }
                });
            } else {
                $('.error').fadeIn(1000).delay(5000).fadeOut(1000);
    
            }
    
            return false;
        });
    
    
    
    
        /*----------------------------------------------------*/
        /*  Input field animation
         /*----------------------------------------------------*/
    
        (function () {
            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function () {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function () {
                        return this.replace(rtrim, '');
                    };
                })();
            }
    
            [].slice.call(document.querySelectorAll('input.input__field, textarea.input__field')).forEach(function (inputEl) {
                // in case the input is already filled..
                if (inputEl.value.trim() !== '') {
                   inputEl.parentNode.addClass('input--filled');
                }
    
                // events:
                inputEl.addEventListener('focus', onInputFocus);
                inputEl.addEventListener('blur', onInputBlur);
            });
    
            function onInputFocus(ev) {
                ev.target.parentNode.addClass('input--filled');
            }
    
            function onInputBlur(ev) {
                if (ev.target.value.trim() === '') {
                    ev.target.parentNode.removeClass('input--filled');
                }
            }
        })();
    
    
        /*----------------------------------------------------*/
        /*  Remove # tags from URL
         /*----------------------------------------------------*/
        // $(window).on('hashchange', function (e) {
        //     history.replaceState("", document.title, e.originalEvent.oldURL);
        // });
    
        /**
         * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
         */
        $(function () {
            function reposition() {
                var modal = $(this),
                    dialog = modal.find('.modal-dialog');
                modal.css('display', 'block');
    
                // Dividing by two centers the modal exactly, but dividing by three
                // or four works better for larger screens.
                dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
            }
    
            // Reposition when a modal is shown
            $('.modal').on('show.bs.modal', reposition);
            // Reposition when the window is resized
            $(window).on('resize', function () {
                $('.modal:visible').each(reposition);
            });
        });
    
    
        /*----------------------------------------------------*/
        /*	Scroll To Top Section
         /*----------------------------------------------------*/
    
        $(window).on('scroll', function() {
            var windowH = $(window).width();
            if ($(this).scrollTop() > 100 && windowH > 767) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
    
        $('.scrollup').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    
    
        /*----------------------------------------------------*/
        /*	Lead Gen Character Left Plugin
         /*----------------------------------------------------*/
    
        $('#characterLeft').text('140 characters left');
        $('#mc_message').keydown(function () {
            var max = 140;
            var len = $(this).val().length;
            if (len >= max) {
                $('#characterLeft').text('Character limit reached');
                $('#characterLeft').addClass('red');
                $('#btnSubmit').addClass('disabled');
            }
            else {
                var ch = max - len;
                $('#characterLeft').text(ch + ' characters left');
                $('#btnSubmit').removeClass('disabled');
                $('#characterLeft').removeClass('red');
            }
        });
    
    
      }

    
    

      render( ) {
        return(

          <div id="wrapper">
                      <div id="preloader">
              <div className="loader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          <header className="cd-header">
              <div className="cd-logo"><i className="fa fa-gamepad"></i></div>
          
              <nav>
                  <ul className="cd-secondary-nav">
                      <li><a href="#" data-toggle="modal" data-target="#loginModal">Log In</a></li>
                      <li><a href="#" data-toggle="modal" data-target="#registrationModal">Register</a></li>
                  </ul>
              </nav>
             
          
              <a className="cd-primary-nav-trigger" href="#">
                  <span className="cd-menu-text"></span><span className="cd-menu-icon"></span>
              </a> 
          </header>
          {/* {/* <!-- Navigation --> */} 
          <nav>
              <ul className="cd-primary-nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="/play">Join A Game</a></li>
                  <li><a href="#create">Create A Game</a></li>
                  <li><a href="#join-chat">Register</a></li>
                  <li><a href="#profile">Profile</a></li>
          
                  <li className="cd-label">Follow us</li>
          
                  <li className="cd-social cd-facebook"><a href="#">Facebook</a></li>
                  <li className="cd-social cd-instagram"><a href="#">Instagram</a></li>
                  <li className="cd-social cd-dribbble"><a href="#">Dribbble</a></li>
                  <li className="cd-social cd-twitter"><a href="#">Twitter</a></li>
              </ul>
          </nav>
          
          <section className="cd-intro" id="home">
              <div className="intro-wrapper">
                  <div className="hero-content">
                      <div className="align-center">
                          <h1>RuneSkype</h1>
          
                          <p>Join us for a game, complete with live chat.</p>
          
                          <div className="modal-video-container">
                              <a className="swipebox-video btn btn-radius" href="https://www.youtube.com/watch?v=mdfMT5Zi8Eo"><span
                                      className="glyphicon glyphicon-play"></span></a>
                          </div>
          
                          <div className="icon-arrow-down scroll-down-anim">
                              <a href="#main-content"><img src="img/icon-arrow-down.svg" alt="down-arrow" /></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div id="mainbody page-wrapper">
              {/* <!-- /.row --> */}
              <div className="firstrow row">
                  {/* <div className="col-lg-4">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              Default Panel
                          </div>
                          <div className="panel-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                          </div>
                          <div className="panel-footer">
                              Panel Footer
                          </div>
                      </div>
                  </div> */}
                  {/* <!-- /.col-lg-4 --> */}
                  <div className="col-lg-6">
                      <div className="panel panel-primary">
                          <div className="panel-heading">
                              Primary Panel
                          </div>
                          <div className="panel-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                          </div>
                      </div>
                  </div>
                  {/* <!-- /.col-lg-4 --> */}
                  <div className="col-lg-6">
                    
                  </div>
                  {/* <!-- /.col-lg-4 --> */}
              </div>
              <div className="row secondrow">
                  <div className="col-lg-6">
                      <div className="panel panel-default">
                          <div className="panel-heading">
      <ul className="nav nav-pills">
                                  <li className=" panelnav-item active"><a href="#home-pills" data-toggle="tab">Home</a>
                                  </li>
                                  <li className='panelnav-item' ><a href="#profile-pills" data-toggle="tab">Profile</a>
                                  </li>
                                  <li className='panelnav-item' ><a href="#messages-pills" data-toggle="tab">Messages</a>
                                  </li>
                                  <li className='panelnav-item' ><a href="#settings-pills" data-toggle="tab">Settings</a>
                                  </li>
                              </ul>
                          </div>
                          {/* <!-- /.panel-heading --> */}
                          <div className="panel-body">
                              {/* <!-- Nav tabs --> */}
                              
    
                              {/* <!-- Tab panes --> */}
                              <div className="tab-content">
                                  <div className="tab-pane fade in active" id="home">
                                      </div>
                                  <div className="tab-pane fade" id="profile">
                                      </div>
                                  <div className="tab-pane fade" id="messages">
                                      </div>
                                  <div className="tab-pane fade" id="settings">
                                      </div>
                              </div>
                          </div>
                          {/* <!-- /.panel-body --> */}
                      </div>
                      {/* <!-- /.panel --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                          <ul className="nav nav-pills">
                                  <li className="panelnav-item active"><a href="#home-pills" data-toggle="tab">Home</a>
                                  </li>
                                  <li className='panelnav-item' ><a href="#profile-pills" data-toggle="tab">Profile</a>
                                  </li>
                                  <li className='panelnav-item' ><a href="#messages-pills" data-toggle="tab">Messages</a>
                                  </li>
                                  <li className='panelnav-item' ><a href="#settings-pills" data-toggle="tab">Settings</a>
                                  </li>
                              </ul>
                          </div>
                          {/* <!-- /.panel-heading --> */}
                          <div className="panel-body">
                              {/* <!-- Nav tabs --> */}
    
    
                              {/* <!-- Tab panes --> */}
                              <div className="tab-content">
                                  <div className="tab-pane fade in active" id="home-pills">
                                      </div>
                                  <div className="tab-pane fade" id="profile-pills">
                                     </div>
                                  <div className="tab-pane fade" id="messages-pills">
                                       </div>
                                  <div className="tab-pane fade" id="settings-pills">
                                       </div>
                              </div>
                          </div>
                          {/* <!-- /.panel-body --> */}
                      </div>
                      {/* <!-- /.panel --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
              </div>
          </div>
          {/* <!-- /#page-wrapper --> */}
    
      </div>
      /* <!-- /#wrapper --> */
    
    
    
    
    
    
        //     <div className="app playfield container-flex">
          
        //                 <div className="row boardrow">
        //                 <div className='col-1'></div>
        //                 <div className='col-5 '>
    
        //                 </div>
        //                 <div className='col-1'></div>
        //                 <div className='col-1'></div>
        //                 <div className='col-4'>
        //                 <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        //     <div>
        //         <VideoComponent />
        //     </div>
        // </MuiThemeProvider>
        //                 </div>                  
        //                 </div>
    
        //                 <div className='row chatdicediv'>
                        
        //                 <div className='col-3'>
        //                 <div className='chat' id='chat'>
        //     <div id="chat-messages"></div>
        //     <div id="chat-bar">
        //       <input id="chat-input"
        //       type="text"
        //       value={this.state.chat}
        //       name="name"
        //       onChange={this.handleInputChange}
        //       placeholder="Chat"
        //     required="required" />
        //       <button id="chat-send" onClick={(e) => this.clickHandler(e)}>Send</button>
        //     </div>
        //     </div>
        //                 </div>
        //                 <div className='col-4'>
        //                 <div className='characterinfo'>
                        
                        
        //                 </div>
        //                 </div>
        //                 <div className='col-5'>
        //                 <div className='dice'>
        //                 <div className='dicebuttons'>
        //                 <button type="button" data="d4" className="btn rollbtn btn-primary" onClick={(e) => this.diceRoller(e)}>D4</button>
        //                         <button type="button" data="d6" className="btn rollbtn btn-secondary" onClick={(e) => this.diceRoller(e)}>D6</button>
        //                         <button type="button" data="d8" className="btn rollbtn btn-success" onClick={(e) => this.diceRoller(e)}>D8</button>
        //                         <button type="button" data="d10" className="btn rollbtn btn-danger" onClick={(e) => this.diceRoller(e)}>D10</button>
        //                         <button type="button" data="d12" className="btn rollbtn btn-warning" onClick={(e) => this.diceRoller(e)}>D12</button>
        //                         <button type="button" data="d20" className="btn rollbtn btn-info" onClick={(e) => this.diceRoller(e)}>D20</button></div>
        //                 <span className='diceresults' style={{backgroundImage : `url(./resources/${this.state.roll}.png)` }}>
        //                 <center><p>{this.state.rollResult}</p></center>
        //                 </span>
        //                 </div>
        //                 </div>                
                        
                    
        //                 </div>
    
    
        //               </div>
        )
    }
    
    }
    
    export default Home