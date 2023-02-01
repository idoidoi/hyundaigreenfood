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
  
	
});
