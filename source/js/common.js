



$(function(){

    menu();
    coverimage();
    maintab();
    outlink();










    const swiper = new Swiper('.main-swiper', {

        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        loop:true,
        pagination: {
            el: ".main-pagination",
        },

        navigation: {
            nextEl: '.main-next',
            prevEl: '.main-prev',
        },

        breakpoints: {
          1029: {
            creativeEffect: {
              prev: {
                shadow: true,
                translate: [-210, 0, -360],
              },
              next: {
                translate: ["10%", 0, 0],
                opacity:0,
              },
            },
            limitProgress:3,
          }
        }
      });




      const swiper2 = new Swiper('.banner-swiper', {
        autoplay:true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop:true,

        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        }
      });


      $('.banner-pause').on('click',function(){
        swiper2.autoplay.stop();
        $(this).removeClass("active");
        $('.banner-play').addClass("active");
        
        return false;
       });

       $('.banner-play').on('click',function(){
         swiper2.autoplay.stop();
         $(this).removeClass("active");
         $('.banner-pause').addClass("active");
         
         return false;
        });
    
    


        const swiper3 = new Swiper('.link-swiper', {
          autoplay:false,
          slidesPerView: 4,
          spaceBetween: 20,
          loop:true,
  
          navigation: {
              nextEl: '.link-next',
              prevEl: '.link-prev',
          }
        });

});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on("resize", function(){
    windowh = $(window).height();
    windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {


    $("button.main-menu").on("click", function () {

        if (windowW < 1029) {

            $("nav#main-menu").toggleClass("menu");
            $("nav#main-menu").toggleClass("allMenu");
            $("div.shadow").addClass("on");

        }
        else {
            
            $("header").addClass("on");
            $("nav#main-menu ul ul").addClass("on");
        }

    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("menu");
        $("nav#main-menu").toggleClass("allMenu");
        $("div.shadow").removeClass("on");
    });

    $("nav#main-menu h3 a").on("click", function (e) {
        
        $("nav#main-menu div.menus>ul>li").removeClass("on");



        if (windowW < 1029 && $(this).parent().parent().find("ul").length) {

            $(this).parent().parent().addClass("on");
            e.preventDefault();

        }
        else {
            $("nav#main-menu h3 a").unbind();

        }
    });

    $("nav#main-menu").on("mouseenter", function(){
        $("header").addClass("on");
        $("nav#main-menu ul ul").addClass("on");
    });

    $("nav#main-menu").on("mouseleave", function(){
        $("header").removeClass("on");
        $("nav#main-menu ul ul").removeClass("on");
    });

    $(".main-schedule button.show-all").on("click", function(){
        $(".list-outline").toggleClass("open");
    });



    $(".map-check .outline p").on("click", function(){

      if ($(this).is(".seat-r, .seat-s, .seat-n, .seat-disabled")) {

        $(this).toggleClass("checked");

      }
    });



    $("div.tabs button").on("click", function(){
      $("div.tabs button").removeClass("on");
      $(this).addClass("on");
      $(".tab-data").removeClass("on");
      $("."+ $(this).attr("data")).addClass("on");
    });

    $(".sub-navigation button").on("click", function(){
      $(".sub-navigation div div").removeClass("on");
      $(this).parent().addClass("on");
    });

    $(".sub-navigation").on("mouseleave", function(){
      $(".sub-navigation div div").removeClass("on");

    });

    $(".select-option h5").on("click", function(){
      // $(".select-option>div").removeClass("on");
      $(this).parent().addClass("on");
    });

    $(".input-form h5").on("click", function(){
      // $(".select-option>div").removeClass("on");
      $(this).parent().addClass("on");
    });

    $(".map-image button.zoom").on('click', function(){
      simpleLightbox($(this).parent().find("img").attr('src'),);
  });



  $(".faqList li h5").on("click", function(){
    $(".faqList li h5").removeClass("on");
    $(this).addClass("on");
});


}


function simpleLightbox(imageUrl, bgColor, maxWidth){
  if(typeof bgColor === 'undefined'){
      bgColor = 'background-color:rgba(0,0,0,.5)';
  }
  if(typeof maxWidth === 'undefined'){
      maxWidth = '1100px';
  }
  window.open('', 'simpleLightbox').document.write('<html><head><meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, width=device-width, height=device-height" /></head><body style="margin:0;'+bgColor+';height:100%;" onclick="javascript:window.close(\'simpleLightbox\');"><strong style="display:block;position:devide-fixed;left:0;top:0;background:rgba(0,0,0,.5);padding:10px;color:#fff;">이미지를 터치하시면 창이 닫힙니다.</strong><table border="0" width="100%" height="100%"><tr><td valign="middle" align="center"><img style="position:relative;z-index:2;width:100%;max-width:'+maxWidth+';" src="'+imageUrl+'"/></td></tr></table></body></html>');
}


/* ----- cover image ----- */ 
function coverimage() {


    $(".gallery-list div.pics").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
}

/* ----- main tab ----- */ 
function maintab() {

    $(".main-info .tab-outline h3").on("click", function(){

        $(".main-info .tab-outline h3").removeClass("active");
        $(this).addClass("active");

        $(".main-info .tab-outline .tab-data").removeClass("active");
        $(".main-info .tab-outline ."+ $(this).attr("data") +"").addClass("active");

    });
}
/* ----- outlink ----- */ 
function outlink() {
    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });
}



