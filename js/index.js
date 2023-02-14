$(document).ready(function(){
	$('.slider').not('.slick-initialized').slick({
		centerMode: true,
		variableWidth: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		responsive: [{  
			breakpoint: 1023, 
			settings: {
				infinite : true, 
				centerMode: false,
				variableWidth: false,
				dots: false,
				arrows: false,
				centerPadding: '10px',
				slidesToShow: 2
			} 
		},{ 
			breakpoint: 768, //화면 사이즈 768px
			settings: {    
				centerMode: false,
				variableWidth: false,
				dots: false,
				arrows: false,
				infinite : true, 
				slidesToShow: 2.3
			}}]
		});

		// if(matchMedia("screen and (max-width: 767px)").matches){ 
		// 	//화면 크기가 767px이하일때
		// 	console.log("mobile");
		// }else if(matchMedia("(min-width: 767px) and (max-width: 1022px)").matches){
		// 	tebletMod();
		// 	console.log("tablet");
		// }else if(matchMedia("(min-width: 1023px)").matches){
		// 	pcMod();
		// 	console.log("pc");
		// }
		// if(width == 1022){
		// 	console.log("reload");
		// 	location.reload();
		// }
		$(window).resize(function(){
			let width = $(window).width()
			if( width > 1022 ) { 
				pcMod();
			}else if( width > 766 && width <= 1022) {
			 tebletMod();
			} 
		}).resize();
})



	function pcMod(){
		$('.header-conteiner .gnb > ul ').mouseenter(function(){
						$('.header-conteiner .gnb > ul > li > ul ').css({display: 'block'})
						// $('header .header-conteiner .gnb').css({height:'auto'});
					$('.header-conteiner h1 a').css({'filter': 'invert(36%) sepia(0%) saturate(1%) hue-rotate(96deg) brightness(94%) contrast(94%)'});
					$('.header-conteiner > ul > li').css({ 'border-color': '#595757'});
					$('header a').css({'color':'#595757'});
					// $('.bg').stop().animate({height:'100%', opacity: '1'}, 200, 'swing');
					$('.bg').addClass('active');
					$('.gnb').addClass('active');
		});
		$('.header-conteiner .gnb > ul ').mouseleave(function(){
				$('.header-conteiner .gnb > ul > li > ul ').css({display: 'none'})
				// $('header .header-conteiner .gnb').css({height:'7.5rem'});
				$('.header-conteiner h1 a').css({'filter': 'none'});
				$('.header-conteiner > ul > li').css({ 'border-color': '#fff'});
				$('header a').css({'color':'#fff'});
				// $('.bg').stop().animate({height:'0', opacity: '0'}, 200, 'swing');
				$('.bg').removeClass('active');
				$('.gnb').removeClass('active');
		});
			$('.header-conteiner > ul > li').hover(function() {
				$(this).find('a').css('color','#595757');
			}, function() {
				$(this).find('a').css('color','#fff');
			})
			$('.slider li').on('mousemove',function(){
					$(".slick-active").find("div").addClass('active');
					$(".slick-active").siblings().find(".active").removeClass('active');
			})
		 
			$(".header-conteiner .gnb").stop().animate({right: "-37rem"}, 200, 'swing');
			$(this).parent().css({position: 'absolute'});
			$('.bg2').removeClass('active');
			$('.header-conteiner .gnb a').css({color: '#fff'});
		
			window.addEventListener("scroll", function(){
				desktopScrollEvent();
			})
			
	}


function tebletMod(){
	  // hover 에 대한 이벤트를 취소함.
		$('.header-conteiner .gnb > ul ').unbind('mouseenter mouseleave')
		// $('.header-conteiner > ul > li').unbind('mouseenter mouseleave')
	
			// 데스크탑에서 생성된 인라인 스타일을 제거함.
		// $('.gnb').removeAttr('style');
		// $('.gnb a').removeAttr('style');
		// $('.bg').removeAttr('style');
		// $('header .header-conteiner .gnb').removeAttr('style');
		//  $('.header-conteiner h1 a').removeAttr('style');
		// $('.header-conteiner > ul > li').removeAttr('style');
	
	let tab = $('input[id=trigger]');
	tab.change(function(){
		if(tab.is(":checked")){
		 $(".header-conteiner .gnb").stop().animate({ right: "0"}, 200, 'swing');
		 $('.header-conteiner .gnb a').css({color: '#595757'})
		 $(this).parent().css({position: 'fixed'})
		 $('.bg2').addClass('active');
	 }else{
		 $(".header-conteiner .gnb").stop().animate({right: "-37rem"}, 200, 'swing');
		 $('.header-conteiner .gnb a').css({color: '#fff'})
		 $(this).parent().css({position: 'absolute'});
		 $('.bg2').removeClass('active');
	 }
 });
 $('.tab1 > li > a').on('click',function(){
	 $(this).siblings('ul').addClass('active');
	 $(this).siblings('ul').css({display: "block"});
	 $(this).parent().siblings().children('ul').removeClass('active')
	 $(this).parent().siblings().children('ul').css({display: "none"})
 })


	window.removeEventListener("scroll", desktopScrollEvent)

		// 스크롤 이벤트 클래스 제거
		desktopScrollEventReset();
}

function desktopScrollEvent() {

	console.log("Desktop scroll");

	this.scrollY > 330 ? $('.slider').addClass('active') : $('.slider').removeClass('active');
	this.scrollY > 1200 ? $('.management p span:nth-child(1)').addClass('fio') : $('.management p span:nth-child(1)').removeClass('fio');
	this.scrollY > 1240 ? $('.management p span:nth-child(2)').addClass('fio') : $('.management p span:nth-child(2)').removeClass('fio');
	this.scrollY > 1380 ? $('.management ul li:nth-child(1)').addClass('dtu') : $('.management ul li:nth-child(1)').removeClass('dtu');
	this.scrollY > 1390 ? $('.management ul li:nth-child(2)').addClass('dtu') : $('.management ul li:nth-child(2)').removeClass('dtu');
	this.scrollY > 1620 ? $('.management ul li:nth-child(3)').addClass('dtu') : $('.management ul li:nth-child(3)').removeClass('dtu');
	this.scrollY > 1990 ? $('.news p span:nth-child(1)').addClass('fio') : $('.news p span:nth-child(1)').removeClass('fio');
	this.scrollY > 2150 ? $('.news ul li:nth-child(1)').addClass('dtu') : $('.news ul li:nth-child(1)').removeClass('dtu');
	this.scrollY > 2250 ? $('.news ul li:nth-child(2)').addClass('dtu') : $('.news ul li:nth-child(2)').removeClass('dtu');
}

function desktopScrollEventReset () {

	$('.slider').removeClass('active');
	$('.management p span:nth-child(1)').removeClass('fio');
	$('.management p span:nth-child(2)').removeClass('fio');
	$('.management ul li:nth-child(1)').removeClass('dtu');
	$('.management ul li:nth-child(2)').removeClass('dtu');
	$('.management ul li:nth-child(3)').removeClass('dtu');
	$('.news p span:nth-child(1)').removeClass('fio');
	$('.news ul li:nth-child(1)').removeClass('dtu');
	$('.news ul li:nth-child(2)').removeClass('dtu');

}