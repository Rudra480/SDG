jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);

 

   /* ------- Menu sticky ------- */
   $window.scroll(function () {
      var $scroll = $window.scrollTop();
      var $navbar = $("#navigation");
      if ($scroll > 50) {
         $navbar.addClass("fixed");
      } else {
         $navbar.removeClass("fixed");
      }
   });

   /* ------- Smooth scroll ------- */
   $(".scrollings").on("click", function (event) {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $("html, body").animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            window.location.hash = hash;
         });
      }
   });
	
   /* ----- Full Screen ----- */
   function resizebanner() {
      var $fullscreen = $(".full-screen");
      $fullscreen.css("height", $window.height());
      $fullscreen.css("width", $window.width());
   }
   resizebanner();
   $window.resize(resizebanner);

   /*for Just Height Solution*/
   function resizeheight() {
      var $fullscreen = $(".full-height");
      $fullscreen.css("height", $window.height());
   }
   resizeheight();
   $window.resize(resizeheight);




});



window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("AwardsVideo");

  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}
function lightbox_close() {
  var lightBoxVideo = document.getElementById("AwardsVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
function lightbox_open2() {
  var lightBoxVideo = document.getElementById("AwardsVideo2");

  document.getElementById('light2').style.display = 'block';
  document.getElementById('fade2').style.display = 'block';
  lightBoxVideo.play();
}
function lightbox_close2() {
  var lightBoxVideo = document.getElementById("AwardsVideo2");
  document.getElementById('light2').style.display = 'none';
  document.getElementById('fade2').style.display = 'none';
  lightBoxVideo.pause();
}
function lightbox_open3() {
  var lightBoxVideo = document.getElementById("DigitalVideo");

  document.getElementById('light3').style.display = 'block';
  document.getElementById('fade3').style.display = 'block';
  lightBoxVideo.play();
}
function lightbox_close3() {
  var lightBoxVideo = document.getElementById("DigitalVideo");
  document.getElementById('light3').style.display = 'none';
  document.getElementById('fade3').style.display = 'none';
  lightBoxVideo.pause();
}



function Story_open(myvar) {

  if(myvar == 1){
    $("#light1").html('<a class="boxclose" id="boxclose1" onclick="Story_close();"></a>\
  <video id="StoryVideo" width="100%" controls>\
  <source src="videos/video.mp4" type="video/mp4">\
  </video>')
  }else{
    $("#light1").html('<a class="boxclose" id="boxclose1" onclick="Story_close();"></a>\
  <video id="StoryVideo" width="100%" controls>\
  <source src="videos/Sconce-Global.mp4" type="video/mp4">\
  </video>')
  }

  var lightBoxVideo = document.getElementById("StoryVideo");
  
  document.getElementById('light1').style.display = 'block';
  document.getElementById('fade1').style.display = 'block';
  lightBoxVideo.play();
}
function Story_close() {
  var lightBoxVideo = document.getElementById("StoryVideo");
  document.getElementById('light1').style.display = 'none';
  document.getElementById('fade1').style.display = 'none';
  lightBoxVideo.pause();
}




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



function fn_modalgallery(myvar, myvar2){

	  $("#GalleryImg").attr('src',myvar);
	  $("#GalleryImgTitle").html(myvar2);
	$("#myModalgallery").show();
	$("#myModalgallerybg").show();
	$("#myModalgalleryclose").show();
	
  }
  
function fn_myModalgalleryclose(){
	$("#myModalgallery").hide();
	$("#myModalgalleryclose").hide();
	$("#myModalgallerybg").hide();
  }
  
 