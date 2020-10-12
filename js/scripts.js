// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
$(function () {
	var location = window.location.href;
	var cur_url = location.split('/').pop();

	$('.top-nav li, .panel-nav li, .footer-nav li').each(function () {
		var link = $(this).find('a').attr('href');

		// console.log(link);

		if (cur_url == '') {
			cur_url = 'index.html';
		}

		if (cur_url == link)
		{
			$(this).addClass('current-menu-item');
			$(this).parents('li').addClass('current-menu-parent');
		}
	});
});


document.addEventListener('DOMContentLoaded', function(){
	$('[type="tel"]').mask("+7 (999) 999-99-99");

	$('input[type="file"]').on('change', function(){
		if ($(this)[0].files[0] !== undefined) {
			$(this).addClass('selected');
		} else{
			$(this).removeClass('selected');
		}
	});

	// Accordions
	$('.accordion').each(function(i, el){
		$(el).find('.ac-header, .ac-opener').click(function(e){
			e.preventDefault();
			e.stopPropagation();

			let ariaLabelEl = $(this).closest('.accordion').find('[aria-label]');
			let ariaLabelText = $(ariaLabelEl).attr('aria-label');

			if (ariaLabelText == 'Open accordion') {
				$(ariaLabelEl).attr('aria-label', 'Close accordion');
			} else {
				$(ariaLabelEl).attr('aria-label', 'Open accordion');
			}

			$(this).closest('.accordion').find('.ac-content').stop().slideToggle(300);
			$(this).closest('.accordion').toggleClass('opened');
		});
	});

	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 36"><path d="M23 4l-4-4L0 18l19 18 4-4L9 18 23 4z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><svg viewBox="0 0 433 514" fill="none" xmlns="http://www.w3.org/2000/svg"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 36"><path d="M0 4l4-4 19 18L4 36l-4-4 14-14L0 4z"/></svg></button>'
	}

	$('.projects-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 800,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	equalSlideHeight('.projects-slider');

	$('.products-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 800,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					arrows: false
				}
			}
		]
	});

	equalSlideHeight('.products-slider');

	$('.gallery-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 800,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					arrows: false
				}
			}
		]
	});

	equalSlideHeight('.gallery-slider');


	$('.instagram-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	equalSlideHeight('.instagram-slider');

	// Single project/work
	$('.single-project-slider').each(function(i, el){
		$(el).find('.big-image-slider').on('beforeChange', function(e, s, c, n){
			$(el).find('.preview-card').removeClass('current');
			$(el).find('.preview-card[data-slide='+(n+1)+']').addClass('current');
		});

		$(el).find('.preview-card').eq(0).addClass('current');

		$(el).find('.big-image-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: false,
			infinite: true,
			speed: 1000,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						arrows: false
					}
				}
			]
		});

		$(el).find('.js-project-gallery-trigger').click(function(e){
			e.preventDefault();

			$('.slider-fancybox-items-wrapper .fancybox:nth-child(5)').click();
		});

		$(el).find('.preview-card[data-slide]').click(function(){
			$(el).find('.big-image-slider').slick('slickGoTo', parseInt($(this).data('slide')) - 1)
		});
	});


	if ($(window).width() < 992) {
		$('.reviews-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			infinite: true,
			speed: 800,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

		equalSlideHeight('.reviews-slider');


		$('.materials-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			infinite: true,
			speed: 800,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

		equalSlideHeight('.materials-slider');
	}

	// Masonry
	if($(window).width() >= 576 && $('div').is('.blog-list') ){
		setTimeout(function(){
			$('.blog-list').masonry({
				// set itemSelector so .grid-sizer is not used in layout
				itemSelector: '.item',
				// use element for option
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		}, 300);
	}

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);
	});

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.panel').toggleClass('opened');
		$('body').toggleClass('panel-opened');
	});

	$('.panel-close').click(function(e){
		e.preventDefault();

		$('.menu-opener').trigger('click');
	});

	// Mobile nav
	// $('.mobile-top-nav a').click(function(e){
	// 	e.stopPropagation();
	// 	// $('.menu-opener').click();
	// });

	// $('.mobile-top-nav li').click(function(){
	// 	// $('.menu-opener').click();
	// 	$(this).find('.sub-menu').slideToggle(300);
	// });

	// Sticky Header
	window.addEventListener('scroll', function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	});

	setTimeout(function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	}, 100);

	// Modals
	$('.modal').css('display','block');

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('.modal-close, .js-modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		if ($(this).data('modal-tab') != undefined) {
			goToTab($(this).data('modal-tab'));
		}

		showModal( $(this).data('modal') );
	});

	// Tabs
	function goToTab(tabId, handler){
		if (handler == undefined) {
			handler = false;
		}

		let dest = $( tabId );
		dest.stop().fadeIn(300).siblings().hide(0);

		$('[data-tab="'+tabId+'"]').parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
	}

	$("[data-tab]").click(function(e){
		e.preventDefault();
		let dest = $(this).data('tab');

		goToTab(dest, $(this));

		$(dest).find('.slick-slider').slick('setPosition');
	});

	$(".filter-nav, .tabs-nav, .plans-block .block-nav").each(function(i, el){
		$(el).find('[data-tab]').eq(0).click();
	});

	$('.tabs-select').on('change', function(){
		goToTab($(this).val());
	});

	// Fancybox
	if ($('a, div').is('.fancybox')) {
		$(".fancybox").fancybox();
	}

	// Video
	$('.video-block:not([data-video-modal])').on('click', function () {
		$(this).addClass('playing');
		$(this).find('.block-overlay').fadeOut(300);

		let videoId = $(this).find('.play-btn').data('video-id');

		if (!videoId) {
			videoId = $(this).data('video-id');
		}

		if (videoId == undefined) {
			$(this).find('video')[0].play();
		} else{
			let videoType = $(this).data('video-type') ? $(this).data('video-type').toLowerCase() : 'youtube';

			if (videoType == 'youtube') {
				$(this).find('.block-video-container').append('<div class="video-iframe" id="'+videoId+'"></div>');
				createVideo(videoId, videoId);
			} else if(videoType == 'vimeo'){
				$(this).find('.block-video-container').append('<div class="video-iframe" id="'+videoId+'"><iframe allow="autoplay" class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=1&autoplay=1&transparent=0&app_id=122963"></div>');
			}
		}
	});

	$('[data-video-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		let videoId = $(this).data('video-modal');
		let videoType = $(this).data('video-type');

		if (videoType == 'youtube') {
			$('#modal-video-iframe').removeClass('vimeo youtube').addClass('youtube').append('<div class="video-iframe" id="'+videoId+'"></div>');
			createVideo(videoId, videoId);
		} else if(videoType == 'vimeo'){
			$('#modal-video-iframe').removeClass('vimeo youtube').addClass('vimeo').html('<iframe class="video-iframe" allow="autoplay" src="https://player.vimeo.com/video/'+videoId+'?playsinline=1&autoplay=1&transparent=1&app_id=122963">');
		}

		hideModal('.modal');

		showModal( "#video-modal" );
	});

	var player;
	function createVideo(videoBlockId, videoId) {
		player = new YT.Player(videoBlockId, {
			videoId: videoId,
			playerVars: {
				'autohide': 1,
				'showinfo' : 0,
				'rel': 0,
				'loop': 1,
				'playsinline': 1,
				'fs': 0,
				'allowsInlineMediaPlayback': true
			},
			events: {
				'onReady': function (e) {
					// e.target.mute();
					// if ($(window).width() > 991) {
						setTimeout(function(){
							e.target.playVideo();
						}, 200);
					// }
				}
			}
		});
	}
});

function getScrollWidth(){
	// create element with scroll
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	return scrollWidth;
}

let bodyScrolled = 0;
function showModal(modal){
	$(modal).addClass('visible');
	bodyScrolled = $(window).scrollTop();
	$('body, .header').addClass('modal-visible')
			 .scrollTop(bodyScrolled)
			 .css('padding-right', getScrollWidth());
}

function hideModal(modal){
	$(modal).removeClass('visible');
	bodyScrolled = $(window).scrollTop();
	$('body, .header').removeClass('modal-visible')
			 .scrollTop(bodyScrolled)
			 .css('padding-right', 0);
}