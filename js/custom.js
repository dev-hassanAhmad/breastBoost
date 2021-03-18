(function($){
    "use strict";
    $(document).ready(function ($) {

        /*-----------------------------------------------------------------*/
        /* General Targets
         /*-----------------------------------------------------------------*/
        $('.appoint-widget p span:last-child').css('border-bottom', 'none');
        $('footer .appoint-widget p span:last-child').css('border-bottom', 'none');
        //$('.services-page .services-tabs .tab-main .tab-title:first-of-type').animate({borderTop: '1px solid #dcdee4', marginTop: '0'});


        /*-----------------------------------------------------------------*/
        /* Header Nav Animate
         /*-----------------------------------------------------------------*/
        if ($(window).width() >= '751') {
            $('#header nav li').hover(function () {
                $(this).children('ul').stop(true, true).slideDown(200);
            }, function () {
                $(this).children('ul').stop(true, true).slideUp(200);
            });
        }

        $('#header nav li ul li a').hover(function () {
            $(this).stop(true, true).velocity({paddingLeft: "23px"}, 150);
        }, function () {
            $(this).stop(true, true).velocity({paddingLeft: "20px"}, 150);
        });


        /*-----------------------------------------------------------------------------------*/
        /*	Responsive Nav
         /*  Using MeanMenu Plugin
         /*-----------------------------------------------------------------------------------*/
        if( jQuery().meanmenu ){
            jQuery('nav.main-menu').meanmenu({
                meanMenuClose: '<i class="fa fa-times"></i>', // single character you want to represent the close menu button
                meanExpand: "+", // single character you want to represent the expand for ULs
                meanContract: "-", // single character you want to represent the contract for ULs
                meanMenuContainer: '#responsive-menu-container', // Choose where meanmenu will be placed within the HTML
                meanScreenWidth: "767", // set the screen width you want meanmenu to kick in at
                meanRemoveAttrs: true // true to remove classes and IDs, false to keep them
            });
        }


        /*-----------------------------------------------------------------------------------*/
        /*	Flex Slider
         /*  You can learn more about its options from http://www.woothemes.com/flexslider/
         /*-----------------------------------------------------------------------------------*/
        if ( jQuery().flexslider ) {

            // Flex Slider for Home page
            $('.home-slider .flexslider').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: true,
                pauseOnHover: true,
                pauseOnAction: false,
                smoothHeight: false,
                start: function (slider) {
                    slider.removeClass('loading');
                }
            });

            // Flex Slider for gallery detail page
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                reverse: false,
                slideshow: false,
                itemWidth: 123,
                minItems: 4,
                itemMargin: 10,
                asNavFor: '#slider'
            });

            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel"
            });

            /* Gallery slider for home page blog section and blog page */
            $('.gallery-slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true,
                pauseOnHover: true,
                pauseOnAction: false,
                smoothHeight: true,
                start: function (slider) {
                    slider.removeClass('loading');
                }
            });

            // Flex Slider Three for home testimonial section
            $('.flexslider-three').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: true,
                pauseOnHover: true,
                pauseOnAction: false,
                smoothHeight: true
            });
        }
   
  
    });

})(jQuery);

  function add() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    
    if (name == "" || age == "" || country == "") {
      alert("Please fill all fields.")
    } else {
      document.getElementById("popup").style.display = "none";
      var newdiv = document.createElement("div");
      newdiv.className += "cont";
      newdiv.innerHTML = "Name: "+ name + "<br>Age: " + age + "<br>Country: " + country;
      document.getElementById("results").appendChild(newdiv);
      
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("country").value = "";
    }
  }

  var firebaseConfig = {
    apiKey: "AIzaSyCiQn8JJxPoJaIeeW9b_oeIFFvc_3xQN9E",
    authDomain: "vardaanayurveda-d920d.firebaseapp.com",
    projectId: "vardaanayurveda-d920d",
    storageBucket: "vardaanayurveda-d920d.appspot.com",
    messagingSenderId: "937246579401",
    appId: "1:937246579401:web:63ac3f481e8d128d548b18",
    measurementId: "G-C9CKJ0KECV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    let contactFormInfo = firebase.database().ref('contactdata')
    
    document.querySelector('#form').addEventListener('submit', submitForm)
    
    function submitForm(e){
      e.preventDefault()
    
      let fullname = document.querySelector(".fullname").value;
      let yourphone = document.querySelector(".yourphone").value;
      let product = document.querySelector(".product").value;
    
  
      console.log(fullname, yourphone, product)
  
      contactSubmit(fullname, yourphone, product)
    
      let contact = document.querySelector('#form').reset()
      if(!contact){
        window.location.href = "thank";

      }else{
        alert("not submit")
      }
    }
    
    function contactSubmit(fullname, yourphone, product){
      let newContactFornInfo = contactFormInfo.push()
    
      newContactFornInfo.set({
        fullname:fullname,
        yourphone: yourphone,
        product:product
      })
    }







    
    





