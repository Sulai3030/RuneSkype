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
        //     //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
        // });
    
    
        // Lead Gen Subscribe Form
    
        // $('#mc-lead-form').ajaxchimp({
        //     language: 'ft',
        //     url: '//fifothemes.us11.list-manage.com/subscribe/post?u=3b20d04261686076af5d7eb47&amp;id=74f3ddd5e8',
        //     fields: {mc_name: "Name", mc_email: "Email", mc_message: "Message"},
        //     callback: clearLeadSubsForm
        //     //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
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
    
        $('.icon-arrow-down').on('click', function () {
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

      render() {
          return( 
                <div className="App">
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
          
          <nav>
              <ul className="cd-primary-nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="/play">Play</a></li>
                  <li><a href="#create">Create a Chat</a></li>
                  <li><a href="#join-chat">Join A Chat</a></li>
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
          
          <main className="cd-main-content" id="main-content">
          
              <div className="promo-feature-area section">
                  <div className="container">
          
                      <div className="row">
                          <div className="col-sm-4">
                              <div className="promo-inner-area-gym">
                                  <img src="img/gym/gym-1.jpg" alt="Gym" />
          
                                  <h4>Play</h4>
          
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptas, placeat cum eos
                                      dignissimos, hic quos enim, qui quisquam sint illo.</p>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="promo-inner-area-gym">
                                  <img src="img/gym/gym-2.jpg" alt="Gym" />
          
                                  <h4>Chat</h4>
          
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptas, placeat cum eos
                                      dignissimos, hic quos enim, qui quisquam sint illo.</p>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="promo-inner-area-gym">
                                  <img src="img/gym/gym-3.jpg" alt="Gym"/>
          
                                  <h4>Record Your Stats</h4>
          
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptas, placeat cum eos
                                      dignissimos, hic quos enim, qui quisquam sint illo.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          
              <div className="play-section-agency" id="play">
                  <div className="container">
                      <div className="row text-center">
                          <div className="play-heading">
                              <h2>Play Game</h2>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-5 col-sm-6">
                              <div className="play-icon-box">
                              </div>
                              
                      </div>
                  </div>
                  </div>
                  </div>
          
              <div className="section create" id="create">
                  <div className="container">
                      <div className="row text-center">
                          <div className="play-heading">
                              <h2>Create A Chat</h2>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-5 col-sm-6">
                              <div className="play-icon-box">
                              </div>
                              
                      </div>
                  </div>
                  </div>
              </div>
          
              <div className="join-chat section" id="join-chat">
                  <div className="container">
                      <div className="row text-center">
                          <div className="play-heading">
                              <h2>Join A Chat</h2>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-5 col-sm-6">
                              <div className="play-icon-box">
                              </div>
                              
                      </div>
                  </div>
                  </div>
              </div>
          
              <div className="profile section">
                  <div className="container">
                      <div className="row text-center">
                          <div className="play-heading">
                              <h2>Profile</h2>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-5 col-sm-6">
                              <div className="play-icon-box">
                              </div>
                              
                      </div>
                  </div>
                  </div>
              </div>
          
              <div className="contact-us-area section" id="contact">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-10 col-md-offset-1 text-center">
                              <div className="contact-header">
                                  <h2 className="section-title">CONTACT US</h2>
                              </div>
                          </div>
                       
                      </div>
                   
                      <div className="row">
                          <div className="contact-info">
                              <div className="input-form">
                                  <form action="#" id="contact-form">
                                      <div className="row">
                                          <div className="col-md-6 col-xs-12">
          
                                          <span className="input input--chisato">
                                              <input className="input__field input__field--chisato" type="text" id="name"/>
                                              <label className="input__label input__label--chisato" htmlFor="name">
                                                  <span className="input__label-content input__label-content--chisato"
                                                        data-content="Your Name">Your Name</span>
                                              </label>
                                          </span>
                                          </div>
                                      
                                          <div className="col-md-6">
                                          <span className="input input--chisato">
                                              <input className="input__field input__field--chisato" type="text" id="email"/>
                                              <label className="input__label input__label--chisato" htmlFor="email">
                                                  <span className="input__label-content input__label-content--chisato"
                                                        data-content="Your Email">Your Email</span>
                                              </label>
                                          </span>
                                          </div>
          
                                     
                                      </div>
                                      <div className="row">
                                          <div className="form-group col-md-12">
          
                                          <span className="input input--chisato">
                                              <textarea name="message" id="message" cols="30" rows="10"
                                                        className="input__field input__field--chisato"></textarea>
                                              <label className="input__label input__label--chisato" htmlFor="message">
                                                  <span className="input__label-content input__label-content--chisato"
                                                        data-content="Your Message">Your Message</span>
                                              </label>
                                          </span>
                                          </div>
                                  
                                      </div>
                                      <div className="row">
                                          <div className="form-group no-margin-btm col-md-12 text-center">
                                              <input type="submit" className="btn btn-send" value="Send" />
                                          </div>
                                    
                                      </div>
                                      <div className="row">
                                          <div className="col-md-12">
                                              <div className="form-message">
                                                  <div className="success" style={{display : 'none'}}>Your message has been sent successfully.</div>
                                                  <div className="error" style={{display : 'none'}}>E-mail must be valid and message must be longer than 100 characters.</div>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                    
                          </div>
                    
                      </div>
                
                  </div>
               
          
              </div>
          
          
          <section id="modals">
          
              <div className="modal login fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal"
                   aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h2 className="form-signin-heading modal-title" id="myModalLabel">Login</h2>
                          </div>
                          <form method="post" id="login">
                              <div className="modal-body">
                                  <fieldset>
                                      <div className="row">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="text" name="username"
                                                         id="username"/>
                                                  <label className="input__label input__label--chisato" htmlFor="username">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="Username">Username</span>
                                                  </label>
                                              </span>
          
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="password"
                                                         name="password" id="password"/>
                                                  <label className="input__label input__label--chisato" htmlFor="password">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="Password">Password </span>
                                                  </label>
                                              </span>
                                          </div>
                                      </div>
                                  </fieldset>
                              </div>
                              <div className="modal-footer">
                                  <a href="#" className="pull-left lost-pwd">(Lost Password?)</a>
                                  <button type="button" className="btn btn-default btn-border" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-color">Login</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          
              <div className="modal register fade" id="registrationModal" tabIndex="-1" role="dialog"
                   aria-labelledby="registrationModal" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h2 className="form-signin-heading modal-title" id="registrationModalLabel">Create a new account</h2>
                          </div>
                          <form method="post" id="registration">
                              <div className="modal-body">
                                  <div className="row">
                                      <div className="form-group">
                                          <div className="col-md-6">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="text" name="firstname"
                                                         id="firstname"/>
                                                  <label className="input__label input__label--chisato" htmlFor="firstname">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="First Name">First Name</span>
                                                  </label>
                                              </span>
          
                                          </div>
                                          <div className="col-md-6">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="text" name="lastname"
                                                         id="lastname"/>
                                                  <label className="input__label input__label--chisato" htmlFor="lastname">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="Last Name">Last Name</span>
                                                  </label>
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="form-group">
                                          <div className="col-md-6">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="password"
                                                         name="reg_password" id="reg_password"/>
                                                  <label className="input__label input__label--chisato" htmlFor="reg_password">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="Password">Password</span>
                                                  </label>
                                              </span>
                                          </div>
                                          <div className="col-md-6">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="password"
                                                         name="re_reg_password" id="re_reg_password"/>
                                                  <label className="input__label input__label--chisato" htmlFor="re_reg_password">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="Re-enter Password">Re-enter Password</span>
                                                  </label>
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="form-group">
                                          <div className="col-md-12">
                                              <span className="input input--chisato">
                                                  <input className="input__field input__field--chisato" type="email" name="reg_email"
                                                         id="reg_email"/>
                                                  <label className="input__label input__label--chisato" htmlFor="reg_email">
                                                      <span className="input__label-content input__label-content--chisato"
                                                            data-content="Email">Email</span>
                                                  </label>
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-default btn-border" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-color">Register</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              
          </section>
          </main>
                </div>
          );
      }


}

export default Home