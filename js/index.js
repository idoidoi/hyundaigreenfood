$(document).ready(function(){
	// jQuery.noConflict(); // 충돌방지
	$('.slider').not('.slick-initialized').slick({
		centerMode: true,
		variableWidth: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		responsive: [ // 반응형 웹 구현 옵션
		{  
			breakpoint: 1022, //화면 사이즈 960px
			settings: {
				centerMode: false,
				variableWidth: false,
				dots: false,
				arrows: false,
				slidesToShow: 2
			} 
		},
		{ 
			breakpoint: 768, //화면 사이즈 768px
			settings: {    
				centerMode: false,
				variableWidth: false,
				dots: false,
				arrows: false,
				slidesToShow: 3
			} 
		}
		]
		});
		// var mql = window.matchMedia("(min-width: 1023px)");
		// if (mql.matches) {
		// 	pcMod();
		// } else {
		// 	tebletMod();
		// }
		$(window).on('resize load', resize);

		function resize() {
		if( $(window).width() > 1022) {
			pcMod();
		} else if($(window).width() <= 1022 && $(window).width() > 778 ) { 
			tebletMod();
		} 
	}; 
function pcMod(){
	let firstMenu = $('.header-conteiner .gnb > ul '),
					header_cnt = $('header .header-conteiner .gnb');
					header = $('header')
			// firstMenu.hover(function(){
			// 	header_cnt.css({height:'auto'})
			// 	$(".tab2 li").css({ display: 'block'})
			// 	$('.header-conteiner h1 a').css({'filter': 'invert(36%) sepia(0%) saturate(1%) hue-rotate(96deg) brightness(94%) contrast(94%)'})
			// 	$('.header-conteiner > ul > li').css({ 'border-color': '#595757'})
			// 	$('header a').css({'color':'#595757'})
			// 	$('.bg').stop().animate({height:'100%', opacity: '1'}, 200, 'swing');
			// }, function() {
			// 	header_cnt.css({height:'7.5rem'})
			// 	$('.header-conteiner h1 a').css({'filter': 'none'})
			// 	$('.header-conteiner > ul > li').css({ 'border-color': '#fff'})
			// 	$('header a').css({'color':'#fff'})
			// 	$('.bg').stop().animate({height:'0', opacity: '0'}, 200, 'swing');
			// });
			$('.header-conteiner > ul > li').hover(function() {
				$(this).find('a').css('color','#595757');
			}, function() {
				$(this).find('a').css('color','#fff');
			})
		
			// $('.slider').not('.slick-initialized').slick({
			// 	centerMode: true,
			// 	variableWidth: true,
			// 	dots: true,
			// 	arrows: false,
			// 	slidesToShow: 1
			// });
			
		// $('.slider').on('afterChange', function(event, slick, currentSlide){
		// 			$(".slick-active").find("figcaption").addClass('active')
		// 			$(".slick-active").siblings().find(".active").removeClass('active')
		// 	});
		
			$('.slider li').on('mousemove',function(){
					$(".slick-active").find("div").addClass('active')
					$(".slick-active").siblings().find(".active").removeClass('active')
			})
		 
		
		
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
}
function tebletMod(){
	let tab = $('input[id=trigger]');
	tab.change(function(){
	 if(tab.is(":checked")){
		 $(".header-conteiner .gnb").stop().animate({ right: "0"}, 200, 'swing');
		 $(this).parent().css({position: 'fixed'})
	 }else{
		 $(".header-conteiner .gnb").stop().animate({right: "-37rem"}, 200, 'swing');
		 $(this).parent().css({position: 'absolute'})
	 }
 });
 $('.tab1 > li > a').on('click',function(){
	 console.log('ehlsknds')
	 $(this).siblings('ul').addClass('active');
	 $(this).parent().siblings().children('ul').removeClass('active')
 })
 
}
});