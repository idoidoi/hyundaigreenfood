

$(window).resize(function(){ 
	if (window.innerWidth > 1122) { 
	
		$(function(){
			var $firstMenu = $('.header-conteiner .gnb > ul > li '),
					$header_cnt = $('header .header-conteiner .gnb');
					$header = $('header')
			
			$firstMenu.mouseenter(function(){
				$header_cnt.css({height:'auto'})
				$('.header-conteiner h1 a').css({'filter': 'invert(36%) sepia(0%) saturate(1%) hue-rotate(96deg) brightness(94%) contrast(94%)'})
				$('.header-conteiner > ul > li').css({ 'border-color': '#595757'})
				$('header a').css({'color':'#595757'})
				$('.bg').stop().animate({height:'100%', opacity: '1'}, 200, 'swing');
			})
			$header_cnt.mouseleave(function(){
				$header_cnt.css({height:'7.5rem'})
				$('.header-conteiner h1 a').css({'filter': 'none'})
				$('.header-conteiner > ul > li').css({ 'border-color': '#fff'})
				$('header a').css({'color':'#fff'})
				$('.bg').stop().animate({height:'0', opacity: '0'}, 200, 'swing');
			});
			$('.header-conteiner > ul > li').hover(function() {
				$(this).find('a').css('color','#595757');
			}, function() {
				$(this).find('a').css('color','#fff');
			})
		
			$('.slider').slick({
				centerMode: true,
				variableWidth: true,
				dots: true,
				arrows: false,
			});
			
		// $('.slider').on('afterChange', function(event, slick, currentSlide){
		// 			$(".slick-active").find("figcaption").addClass('active')
		// 			$(".slick-active").siblings().find(".active").removeClass('active')
		// 	});
		
		// $('.slick-track li').each(function(){
		// 		if( $(this).hasClass('.slick-active')){
		// 			$(this).find('figcaption').addClass('active');
		// 		}
		// 		console.log($(this))
		// 	})
		
			$('.slider li').on('mousemove',function(){
					$(".slick-active").find("div").addClass('active')
					$(".slick-active").siblings().find(".active").removeClass('active')
			})
		 
		});
		
		window.addEventListener("scroll", () => { 
			this.scrollY > 330 ? $('.slider').addClass('active') : $('.slider').removeClass('active');
			this.scrollY > 1200 ? $('.management p span:nth-child(1)').addClass('fio') : $('.management p span:nth-child(1)').removeClass('fio');
			this.scrollY > 1240 ? $('.management p span:nth-child(2)').addClass('fio') : $('.management p span:nth-child(2)').removeClass('fio');
			this.scrollY > 1380 ? $('.management ul li:nth-child(1)').addClass('dtu') : $('.management ul li:nth-child(1)').removeClass('dtu');
			this.scrollY > 1390 ? $('.management ul li:nth-child(2)').addClass('dtu') : $('.management ul li:nth-child(2)').removeClass('dtu');
			this.scrollY > 1620 ? $('.management ul li:nth-child(3)').addClass('dtu') : $('.management ul li:nth-child(3)').removeClass('dtu');
			this.scrollY > 1990 ? $('.news p span:nth-child(1)').addClass('fio') : $('.news p span:nth-child(1)').removeClass('fio');
			this.scrollY > 2150 ? $('.news ul li:nth-child(1)').addClass('dtu') : $('.news ul li:nth-child(1)').removeClass('dtu');
			this.scrollY > 2250 ? $('.news ul li:nth-child(2)').addClass('dtu') : $('.news ul li:nth-child(2)').removeClass('dtu');
		});
		
		

	} else if( window.innerWidth > 766) {
	
	} else {


	}
	
	}).resize();
// $(function(){
// 	var $firstMenu = $('.header-conteiner .gnb > ul > li '),
// 			$header_cnt = $('header .header-conteiner .gnb');
// 			$header = $('header')
	
// 	$firstMenu.mouseenter(function(){
// 		$header_cnt.css({height:'auto'})
// 		$('.header-conteiner h1 a').css({'filter': 'invert(36%) sepia(0%) saturate(1%) hue-rotate(96deg) brightness(94%) contrast(94%)'})
// 		$('.header-conteiner > ul > li').css({ 'border-color': '#595757'})
// 		$('header a').css({'color':'#595757'})
// 		$('.bg').stop().animate({height:'100%', opacity: '1'}, 200, 'swing');
// 	})
//   $header_cnt.mouseleave(function(){
// 		$header_cnt.css({height:'7.5rem'})
// 		$('.header-conteiner h1 a').css({'filter': 'none'})
// 		$('.header-conteiner > ul > li').css({ 'border-color': '#fff'})
// 		$('header a').css({'color':'#fff'})
// 		$('.bg').stop().animate({height:'0', opacity: '0'}, 200, 'swing');
// 	});
// 	$('.header-conteiner > ul > li').hover(function() {
// 		$(this).find('a').css('color','#595757');
// 	}, function() {
// 		$(this).find('a').css('color','#fff');
// 	})

// 	$('.slider').slick({
//     centerMode: true,
// 		variableWidth: true,
// 		dots: true,
// 		arrows: false,
//   });
  
// // $('.slider').on('afterChange', function(event, slick, currentSlide){
// // 			$(".slick-active").find("figcaption").addClass('active')
// // 			$(".slick-active").siblings().find(".active").removeClass('active')
// // 	});

// // $('.slick-track li').each(function(){
// // 		if( $(this).hasClass('.slick-active')){
// // 			$(this).find('figcaption').addClass('active');
// // 		}
// // 		console.log($(this))
// // 	})

// 	$('.slider li').on('mousemove',function(){
// 			$(".slick-active").find("div").addClass('active')
// 			$(".slick-active").siblings().find(".active").removeClass('active')
// 	})
 
// });

// window.addEventListener("scroll", () => { 
// 	this.scrollY > 330 ? $('.slider').addClass('active') : $('.slider').removeClass('active');
// 	this.scrollY > 1200 ? $('.management p span:nth-child(1)').addClass('fio') : $('.management p span:nth-child(1)').removeClass('fio');
// 	this.scrollY > 1240 ? $('.management p span:nth-child(2)').addClass('fio') : $('.management p span:nth-child(2)').removeClass('fio');
// 	this.scrollY > 1380 ? $('.management ul li:nth-child(1)').addClass('dtu') : $('.management ul li:nth-child(1)').removeClass('dtu');
// 	this.scrollY > 1390 ? $('.management ul li:nth-child(2)').addClass('dtu') : $('.management ul li:nth-child(2)').removeClass('dtu');
// 	this.scrollY > 1620 ? $('.management ul li:nth-child(3)').addClass('dtu') : $('.management ul li:nth-child(3)').removeClass('dtu');
// 	this.scrollY > 1990 ? $('.news p span:nth-child(1)').addClass('fio') : $('.news p span:nth-child(1)').removeClass('fio');
// 	this.scrollY > 2150 ? $('.news ul li:nth-child(1)').addClass('dtu') : $('.news ul li:nth-child(1)').removeClass('dtu');
// 	this.scrollY > 2250 ? $('.news ul li:nth-child(2)').addClass('dtu') : $('.news ul li:nth-child(2)').removeClass('dtu');
// });

