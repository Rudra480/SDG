$(document).ready(function(){
	$('html, body').animate({scrollTop: 1}, 500);
	setTimeout(function(){ 
		$("#navigation").removeClass("fixed");
	}, 1000);
	setTimeout(function(){ 
		fn_menuhigh();
	}, 100);

	
scrnwdth = screen.width;

setTimeout(function(){ 
	$("#bestproj .fp-tableCell").css('max-width',scrnwdth);
	$("#prolocProject .fp-tableCell").css('max-width',scrnwdth);
	$("#clients .fp-tableCell").css('max-width',scrnwdth);
	$("#makingSconce .fp-tableCell").css('max-width',scrnwdth);
	$("#makingSconce .fp-tableCell .headline").css('max-width',scrnwdth);
	$("#makingSconce .fp-tableCell .storycontainer").css('max-width',scrnwdth);
 }, 1000);

if(scrnwdth<480){
	$(".logoAnimation").css('background',"none")
	$(".logoAnimation").css('display',"none")
	$("#video-section").html('<img src="images/video-img.jpg" width="100%" />')
	$("#corporate-vid").html('<img src="images/corporate-video.jpg" width="100%" />')
	$("#awards-imgm1").attr('src','images/awards/mobile/1.jpg')
	$("#awards-imgm2").attr('src','images/awards/mobile/2.jpg')
	$("#awards-imgm3").attr('src','images/awards/mobile/3-3.jpg')
	$("#awards-imgm4").attr('src','images/awards/mobile/awards-2017.jpg')
	$("#clients-imgm1").attr('src','images/clients/mobile/1.jpg')
	$("#clients-imgm2").attr('src','images/clients/mobile/2.jpg')
	$("#clients-imgm3").attr('src','images/clients/mobile/3.jpg')
	$("#clients-imgm4").attr('src','images/clients/mobile/4.jpg')
	$("#clients-imgm5").attr('src','images/clients/mobile/5.jpg')
	$("#clients-imgm6").attr('src','images/clients/mobile/6.jpg')

}else{
	$(".logoAnimation").css('background',"url('../images/sconce-logo.png') left center;")
	$("#video-section").html('<video  webkit-playsinline playsinline data-keepplaying autoplay loop muted style="width: 100%">\
	<source src="videos/Sconce-Global.mp4" type="video/mp4">\
	<source src="https://atthah.com/sconce/video/video.webm" type="video/ogg">\
		<source src="https://atthah.com/sconce/video/video.webm" type="video/ogg">\
	Your browser does not support the video tag.\
		</video>')
		$("#corporate-vid").html('<video  webkit-playsinline playsinline data-keepplaying autoplay muted loop class="fs-video" style="width: 80%" onclick="Story_open(2);">\
		<source src="videos/Sconce-Global.mp4" type="video/mp4">\
	  </video>')
	$("#awards-imgm1").attr('src','images/awards/1.jpg')
	$("#awards-imgm2").attr('src','images/awards/2.jpg')
	$("#awards-imgm3").attr('src','images/awards/3-3.jpg')
	$("#awards-imgm4").attr('src','images/awards/awards-2017.jpg')
	$("#clients-imgm1").attr('src','images/clients/1.jpg')
	$("#clients-imgm2").attr('src','images/clients/2.jpg')
	$("#clients-imgm3").attr('src','images/clients/3.jpg')
	$("#clients-imgm4").attr('src','images/clients/4.jpg')
	$("#clients-imgm5").attr('src','images/clients/5.jpg')
	$("#clients-imgm6").attr('src','images/clients/6.jpg')

}

$('#newsTicker14').breakingNews();

 // Wrap every letter in a span
 $('.ml3').each(function(){
	$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
	.add({
	  targets: '.ml3 .letter',
	  opacity: [0,1],
	  easing: "easeInOutQuad",
	  duration: 250,
	  delay: function(el, i) {
		return 150 * (i+1)
	  }
	}).add({
	  targets: '.ml3',
	  opacity: 0,
	  duration: 1000,
	  easing: "easeOutExpo",
	  delay: 100
	});
  $('.ml4').each(function(){
	$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
	.add({
	  targets: '.ml4 .letter',
	  opacity: [0,1],
	  easing: "easeInOutQuad",
	  duration: 250,
	  delay: function(el, i) {
		return 150 * (i+1)
	  }
	}).add({
	  targets: '.ml4',
	  opacity: 0,
	  duration: 1000,
	  easing: "easeOutExpo",
	  delay: 100
	});	
if(scrnwdth < 1000){
    $("#fullpagejs").html(" ");

	$(window).scroll(function (event) {
    var scrollval = $(window).scrollTop();
    console.log(scrollval);
	
	if (scrollval>1067 && scrollval<1967 ){
		fn_capanim("startanime");
	}
});
	
	
}else{
	$(window).scroll(function (event) {
		
		var bodyprop = $('#main').css('overflow');
		if(bodyprop == "hidden" ){
			console.log(bodyprop);
			$("#navigation").addClass("fixed");
		}
		
		
	});
    $("#fullpagejs").html("<div><script src='scripts/jquery.fullPage.min8406.js'></script></div>");

    if($('#fullpage').length)
	{
    $('#fullpage').fullpage({
				css3:false,
				autoScrolling: false,
		        scrollBar: false,
				fitToSection: false,
				navigation:false,
				onLeave: function(index, nextIndex, direction){
						
						console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
						
						if(index != 0 || index === 6){
							$("#navigation").addClass("fixed");
						}
						if(index === 2 && direction === "up" ){
							$("#navigation").removeClass("fixed");
						}
						
						if(index === 1 && direction === "down" || index === 3 && direction === "up" ){
							//setTimeout(function(){ 
								//var whtcrslwdth = $("#whtcrsl").width();
								//console.log(whtcrslwdth);
								//$("#whtcrsl").css('width',whtcrslwdth-15);
							   //}, 1000);
							  
						$("#countsys").html('<div class="col-lg-2 col-md-2 col2-3">\
             <h2><span class="count">20000</span><span class="orange">+</span></h2>\
             <h3>Total flora</h3>\
           </div>\
           <div class="col-lg-2 col-md-2">\
             <h2><span class="count">60000</span><span class="orange">+</span></h2>\
             <h3>Total fauna</h3>\
           </div>\
           <div class="col-lg-3 col-md-3">\
             <h2><span class="count">5</span><span class="orange">+</span></h2>\
             <h3>Total forest</h3>\
           </div>\
           <div class="col-lg-2 col-md-2">\
             <h2><span class="count">4.5</span><span class="orange">+</span></h2>\
             <h3>Forest distroyed</h3>\
		   </div>\
           </div>');
		   $("#countsys").show();
	  
					$('.count').each(function () {
						$(this).prop('Counter',0).animate({ 
							Counter: $(this).text()
						}, {
						duration: 10000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
						});
					});
	
						}
						
						else{
							
	  setTimeout(function(){  $("#countsys").hide(); }, 100);
	 
  }
  if(index === 2 && direction === "down" || index === 4 && direction === "up" ){
	fn_capanim("startanime");
  }else{
	fn_capanim("stopanime");  
  }
						
				},
				afterLoad: function(anchorLink, index){
					
					if (index === $('#fullpage .section').length)
					{
						$.fn.fullpage.setAutoScrolling(false);
					}
					
					$(document).scroll(function(){
          	
          	var last_section = $('#fullpage').find(".section").last();
          	var offset = last_section.offset();
            var w = $(window);
            
            if (offset.top - w.scrollTop() > 0)
            {
              $.fn.fullpage.setAutoScrolling(true);
            }
            
          });
            
		}
  
  	});
  	
}
}

		$('.owlcomncarousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
				responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                   
                  },
                  600: {
                    items: 2
                   
                  },
                  1000: {
                    items: 3
                 
                  }
                }
			  });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
			  
});

function fn_capanim(myvar){
	if(myvar == "startanime"){
$("#cap1 li:nth-child(1)").delay(600).animate({left: '20px', opacity:'1'},"slow");
	$("#cap1 li:nth-child(2)").delay(800).animate({left: '20px', opacity:'1'},"slow");
	$("#cap1 li:nth-child(3)").delay(1000).animate({left: '20px', opacity:'1'},"slow");
	$("#cap1 li:nth-child(4)").delay(1200).animate({left: '20px', opacity:'1'},"slow");
	$("#cap1 li:nth-child(5)").delay(1400).animate({left: '20px', opacity:'1'},"slow");	 
	$("#cap2 li:nth-child(1)").delay(1600).animate({left: '20px', opacity:'1'},"slow"); 
	$("#cap2 li:nth-child(2)").delay(1800).animate({left: '20px', opacity:'1'},"slow");
	$("#cap2 li:nth-child(3)").delay(2000).animate({left: '20px', opacity:'1'},"slow");
	$("#cap2 li:nth-child(4)").delay(2200).animate({left: '20px', opacity:'1'},"slow");
}
if(myvar=="stopanime" ){
	$("#cap1 li:nth-child(1)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
	$("#cap1 li:nth-child(2)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
	$("#cap1 li:nth-child(3)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
	$("#cap1 li:nth-child(4)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
	$("#cap1 li:nth-child(5)").delay(600).animate({left: '-100px', opacity:'0'},"slow");	 
	$("#cap2 li:nth-child(1)").delay(600).animate({left: '-100px', opacity:'0'},"slow"); 
	$("#cap2 li:nth-child(2)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
	$("#cap2 li:nth-child(3)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
	$("#cap2 li:nth-child(4)").delay(600).animate({left: '-100px', opacity:'0'},"slow");
}
}
 function fn_scrollto(myvar){

    var scrnwdth = screen.width;
      
    if (scrnwdth < 900){
      $('html, body').animate({
        scrollTop: $("#"+myvar).offset().top-20
      }, 1000);
    }
    else{
      
      $.fn.fullpage.moveTo(6);
      setTimeout(function(){ 
           $('html, body').animate({
         scrollTop: $("#"+myvar).offset().top
       }, 1000);
        
         }, 1000);
        
        }
    
    }
    
    function fn_menuhigh() {
      var sPath = window.top.location.href;
      var sPage = sPath.substring(sPath.lastIndexOf('#') + 1);
      if (sPage == 'contact') {
      
        var scrnwdth = screen.width;
      
        if (scrnwdth < 900){
          $('html, body').animate({
            scrollTop: $("#proloc").offset().top-20
          }, 1000);
        }
        else{
				$.fn.fullpage.moveTo(6);
			setTimeout(function(){ 
				$('html, body').animate({
						scrollTop: $("#proloc").offset().top
					}, 1000);
				$("body").css('overflow-y','scroll');
			}, 1200);
		}
	}
    
    
	}
	
	function fn_testimonial(myvar){
		$("#testimonial-modal").modal('show');
		
	if(myvar == 1){
		$("#testimonial-contnt").html("‘A big pat to Roop and his entire team for a wonderful show, great workmanship and creativity resulted in one of the best displays by Metso in many years.’")
		$("#testimonial-contnt-dn").html("DINESH SHARDA<br>MARKETING COMMUNICATIONS<br>METSO MINERALS INDIA")
	}
	if(myvar == 2){
		$("#testimonial-contnt").html("‘Roop we wanted to show our appreciation for the hard work and excellent design and concept as carried out by your team.’")
		$("#testimonial-contnt-dn").html("MISHA BAJAJ<br>UK TRADE & INVESTMENT<br>BRITISH HIGH COMMISSION")
	}
	if(myvar == 3){
		$("#testimonial-contnt").html("‘We appreciate the effort put in by your team in designing, detailing and coordination which showcases your good service standards.’")
		$("#testimonial-contnt-dn").html("P.S. SUNDARAM<br>MANAGING DIRECTOR<br>TECHNOMEDIA SOLUTIONS P LIMITED")
	}
	if(myvar == 4){
		$("#testimonial-contnt").html("‘Excellent effects was achieved thanks to responsible and careful specialists of Sconce Global. We are truly grateful to Roop for his management and supervision.’")
		$("#testimonial-contnt-dn").html("A.F. MAKHOVIK<br>FORMIKA<br>RUSSIA")
	}
	if(myvar == 5){
		$("#testimonial-contnt").html("‘We take this opportunity to express our gratitude for the outstanding work put by you and your team in putting up our stand at Auto Expo.’")
		$("#testimonial-contnt-dn").html("ASHISH JOSHI<br>MANAGING DIRECTOR-INDIA<br>TRIUMPH MOTORCYCLES LIMITED")
	}
	if(myvar == 6){
		$("#testimonial-contnt").html("‘We thank the entire team of Sconce Global for designing and building BEL stand also in handling the entire show smoothly and making Aero India for us a grand success.’")
		$("#testimonial-contnt-dn").html("KIRAN V<br>GENERAL MANAGER (INTERNATIONAL MARKETING) <br>BHARAT ELECTRONICS LIMITED")
	}
	if(myvar == 7){
		$("#testimonial-contnt").html("‘We are very pleased to say that the Light India show was a real success for us and we really want to thank the entire team of Sconce to make this a success story. We are very impressed with the kind of effort Sconce team have put in the entire show. You all deserve an applaud for the same.’")
		$("#testimonial-contnt-dn").html("TUHIN CHATTERJEE<br>SR. MANAGER, MARKETING<br>HALONIX.")
	}
	if(myvar == 8){
		$("#testimonial-contnt").html("‘We participated in the KisanMela 2014, at Punjab Agricultural University, Ludhiana and our stand was awarded the First Prize for Best display.’")
		$("#testimonial-contnt-dn").html("SEEMA SINGH<br>G. M., CORPORATE COMMUNICATIONS<br>NEW HOLLAND")
	}
	if(myvar == 9){
		$("#testimonial-contnt").html("‘We are very pleased to say that the Light India show was a real success for us and we really want to thank the entire team of Sconce.’")
		$("#testimonial-contnt-dn").html("TUHIN CHATTERJEE<br>SR. MANAGER, MARKETING<br>HALONIX.")
	}
	if(myvar == 10){
		$("#testimonial-contnt").html("‘We would like to thank you for the outstanding work that you and your team undertook in putting together the UK stand at Auto Expo 2008.’")
		$("#testimonial-contnt-dn").html("MISHA BAJAJ & ASIYA ASHRAFF<br>UK TRADE & INVESTMENT<br>BRITISH HIGH COMMISSION")
	}
	if(myvar == 11){
		$("#testimonial-contnt").html("‘We would like to thank you for the outstanding work that you and your team undertook in putting together the UK stand at Auto Expo 2008.’")
		$("#testimonial-contnt-dn").html("MISHA BAJAJ & ASIYA ASHRAFF<br>UK TRADE & INVESTMENT<br>BRITISH HIGH COMMISSION")
	}
	if(myvar == 12){
		$("#testimonial-contnt").html("‘We participated in the KisanMela 2014, at Punjab Agricultural University, Ludhiana and our stand was awarded the First Prize for Best display.’")
		$("#testimonial-contnt-dn").html("SEEMA SINGH<br>G. M., CORPORATE COMMUNICATIONS<br>NEW HOLLAND")
	}

	}