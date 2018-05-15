
window.onload = slides();
function slides() {
	slider1()
	slider2();
}
function slider1() {
	let textSlides = document.querySelectorAll('.slide-text-wrap .slide');
	let imgSlides = document.querySelectorAll('.promo-slider .right .slide');
	setInterval(function(){
		if(textSlides[0].classList.contains('active')) {
			textSlides[0].classList.remove('op');
			imgSlides[0].classList.remove('op');
			setTimeout(function(){
				textSlides[0].classList.remove('active');
				imgSlides[0].classList.remove('active');
				textSlides[1].classList.add('active');
				imgSlides[1].classList.add('active');
				setTimeout(function(){
					textSlides[1].classList.add('op');
					imgSlides[1].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[1].classList.contains('active')) {
			textSlides[1].classList.remove('op');
			imgSlides[1].classList.remove('op');
			setTimeout(function(){
				textSlides[1].classList.remove('active');
				imgSlides[1].classList.remove('active');
				textSlides[2].classList.add('active');
				imgSlides[2].classList.add('active');
				setTimeout(function(){
					textSlides[2].classList.add('op');
					imgSlides[2].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[2].classList.contains('active')) {
			textSlides[2].classList.remove('op');
			imgSlides[2].classList.remove('op');
			setTimeout(function(){
				textSlides[2].classList.remove('active');
				imgSlides[2].classList.remove('active');
				textSlides[3].classList.add('active');
				imgSlides[3].classList.add('active');
				setTimeout(function(){
					textSlides[3].classList.add('op');
					imgSlides[3].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[3].classList.contains('active')) {
			textSlides[3].classList.remove('op');
			imgSlides[3].classList.remove('op');
			setTimeout(function(){
				textSlides[3].classList.remove('active');
				imgSlides[3].classList.remove('active');
				textSlides[4].classList.add('active');
				imgSlides[4].classList.add('active');
				setTimeout(function(){
					textSlides[4].classList.add('op');
					imgSlides[4].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[4].classList.contains('active')) {
			textSlides[4].classList.remove('op');
			imgSlides[4].classList.remove('op');
			setTimeout(function(){
				textSlides[4].classList.remove('active');
				imgSlides[4].classList.remove('active');
				textSlides[1].classList.add('active');
				imgSlides[1].classList.add('active');
				setTimeout(function(){
					textSlides[1].classList.add('op');
					imgSlides[1].classList.add('op');
				},200);
			},200);
		}
	},speedOfRotate);
	document.querySelector('.promo-slider .left .arrow').onclick = function() {
		if(textSlides[0].classList.contains('active')) {
			textSlides[0].classList.remove('op');
			imgSlides[0].classList.remove('op');
			setTimeout(function(){
				textSlides[0].classList.remove('active');
				imgSlides[0].classList.remove('active');
				textSlides[1].classList.add('active');
				imgSlides[1].classList.add('active');
				setTimeout(function(){
					textSlides[1].classList.add('op');
					imgSlides[1].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[1].classList.contains('active')) {
			textSlides[1].classList.remove('op');
			imgSlides[1].classList.remove('op');
			setTimeout(function(){
				textSlides[1].classList.remove('active');
				imgSlides[1].classList.remove('active');
				textSlides[2].classList.add('active');
				imgSlides[2].classList.add('active');
				setTimeout(function(){
					textSlides[2].classList.add('op');
					imgSlides[2].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[2].classList.contains('active')) {
			textSlides[2].classList.remove('op');
			imgSlides[2].classList.remove('op');
			setTimeout(function(){
				textSlides[2].classList.remove('active');
				imgSlides[2].classList.remove('active');
				textSlides[3].classList.add('active');
				imgSlides[3].classList.add('active');
				setTimeout(function(){
					textSlides[3].classList.add('op');
					imgSlides[3].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[3].classList.contains('active')) {
			textSlides[3].classList.remove('op');
			imgSlides[3].classList.remove('op');
			setTimeout(function(){
				textSlides[3].classList.remove('active');
				imgSlides[3].classList.remove('active');
				textSlides[4].classList.add('active');
				imgSlides[4].classList.add('active');
				setTimeout(function(){
					textSlides[4].classList.add('op');
					imgSlides[4].classList.add('op');
				},200);
			},200);
		}
		if(textSlides[4].classList.contains('active')) {
			textSlides[4].classList.remove('op');
			imgSlides[4].classList.remove('op');
			setTimeout(function(){
				textSlides[4].classList.remove('active');
				imgSlides[4].classList.remove('active');
				textSlides[1].classList.add('active');
				imgSlides[1].classList.add('active');
				setTimeout(function(){
					textSlides[1].classList.add('op');
					imgSlides[1].classList.add('op');
				},200);
			},200);
		}
	}
}
// menu mobile 

document.querySelector('.menu .nav .sandw').onclick = function() {
	if (!document.querySelector('.menu .nav .sandw').classList.contains('active')) {
		document.querySelector('.menu .nav ul').classList.add('active');
		document.querySelector('.menu .nav .sandw').classList.add('active')
		setTimeout(function(){
			document.querySelector('.menu .nav ul').classList.add('op');
		})
	}
	else if (document.querySelector('.menu .nav .sandw').classList.contains('active')) {
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')
		setTimeout(function(){
			document.querySelector('.menu .nav ul').classList.remove('active');
		})
	}
}
// menu switcher
if(document.querySelector('.menu')) {
	let menuTabs = document.querySelectorAll('.menu .tab');
	let menuButts = document.querySelectorAll('.menu .nav li');

	menuButts[0].onclick = function() {
		for(i=0;i<menuButts.length;i++){
			menuButts[i].classList.remove('active');
		}
		menuTabs[0].classList.remove('op');
		menuTabs[2].classList.remove('op');
		menuTabs[3].classList.remove('op');
		menuTabs[4].classList.remove('op');
		menuTabs[5].classList.remove('op');
		menuTabs[6].classList.remove('op');
		menuButts[0].classList.add('active');
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')

		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[1].classList.add('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[1].classList.add('op');
			},200);
		},200);
	}
	menuButts[1].onclick = function() {
		for(i=0;i<menuButts.length;i++){
			menuButts[i].classList.remove('active');
		}
		menuTabs[0].classList.remove('op');
		menuTabs[1].classList.remove('op');
		menuTabs[3].classList.remove('op');
		menuTabs[4].classList.remove('op');
		menuTabs[5].classList.remove('op');
		menuTabs[6].classList.remove('op');
		menuButts[1].classList.add('active');
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')

		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[2].classList.add('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[2].classList.add('op');
			},200);
		},200);
	}
	menuButts[2].onclick = function() {
		for(i=0;i<menuButts.length;i++){
			menuButts[i].classList.remove('active');
		}
		menuTabs[0].classList.remove('op');
		menuTabs[1].classList.remove('op');
		menuTabs[2].classList.remove('op');
		menuTabs[4].classList.remove('op');
		menuTabs[5].classList.remove('op');
		menuTabs[6].classList.remove('op');
		menuButts[2].classList.add('active');
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')

		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[3].classList.add('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[3].classList.add('op');
			},200);
		},200);
	}
	menuButts[3].onclick = function() {
		for(i=0;i<menuButts.length;i++){
			menuButts[i].classList.remove('active');
		}
		menuTabs[0].classList.remove('op');
		menuTabs[1].classList.remove('op');
		menuTabs[2].classList.remove('op');
		menuTabs[3].classList.remove('op');
		menuTabs[5].classList.remove('op');
		menuTabs[6].classList.remove('op');
		menuButts[3].classList.add('active');
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')

		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[4].classList.add('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[4].classList.add('op');
			},200);
		},200);
	}
	menuButts[4].onclick = function() {
		for(i=0;i<menuButts.length;i++){
			menuButts[i].classList.remove('active');
		}
		menuTabs[0].classList.remove('op');
		menuTabs[1].classList.remove('op');
		menuTabs[2].classList.remove('op');
		menuTabs[3].classList.remove('op');
		menuTabs[4].classList.remove('op');
		menuTabs[6].classList.remove('op');
		menuButts[4].classList.add('active');
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')

		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[5].classList.add('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[5].classList.add('op');
			},200);
		},200);
	}
	menuButts[5].onclick = function() {
		for(i=0;i<menuButts.length;i++){
			menuButts[i].classList.remove('active');
		}
		menuTabs[0].classList.remove('op');
		menuTabs[1].classList.remove('op');
		menuTabs[2].classList.remove('op');
		menuTabs[3].classList.remove('op');
		menuTabs[4].classList.remove('op');
		menuTabs[5].classList.remove('op');
		menuButts[5].classList.add('active');
		document.querySelector('.menu .nav ul').classList.remove('op');
		document.querySelector('.menu .nav .sandw').classList.remove('active')

		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.add('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[6].classList.add('op');
			},200);
		},200);
	}
	let closesMenu = document.querySelectorAll('.menu .menuTab h2 .close');
	for(i=0;i<closesMenu.length;i++) {
		closesMenu[i].onclick = function() {
			for(i=0;i<menuButts.length;i++){
				menuButts[i].classList.remove('active');
			}
			menuTabs[0].classList.add('active');

			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			document.querySelector('.menu .nav ul').classList.remove('active');
			setTimeout(function(){
				menuTabs[0].classList.add('op');

			},200);
		}
	}
	
}
// google maps
google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 15,
		scrollwheel: false,
		disableDefaultUI: true,
		center: new google.maps.LatLng(50.4432151, 30.5281291),
		styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.4432151, 30.5201291),
		map: map,
		title: 'Tayger Pizza',
		icon: 'img/tiger-on-map.png'
	});
}

// scroll
let scroll = document.body.scrollTop;
window.addEventListener('scroll', function() {
	scroll = window.pageYOffset || document.documentElement.scroll;
	headerScrolled = scroll > 1 ? document.querySelector('.header').classList.add('fixed') : document.querySelector('.header').classList.remove('fixed');

});

// disables
if (document.body.clientWidth<660){
	document.querySelector('.video-title video').pause();
}
// placement slider

function slider2() {
	let imgPlaceSlides = document.querySelectorAll('.placement .slider .lines span');
	let lineSlides = document.querySelectorAll('.placement .slider .slide');
	setInterval(function(){
		if(lineSlides[0].classList.contains('active')) {
			lineSlides[0].classList.remove('op');
			imgPlaceSlides[0].classList.remove('op');
			setTimeout(function(){
				lineSlides[0].classList.remove('active');
				imgPlaceSlides[0].classList.remove('active');
				lineSlides[1].classList.add('active');
				imgPlaceSlides[1].classList.add('active');
				setTimeout(function(){
					lineSlides[1].classList.add('op');
					imgPlaceSlides[1].classList.add('op');
				},200);
			},200);
		}
		if(lineSlides[1].classList.contains('active')) {
			lineSlides[1].classList.remove('op');
			imgPlaceSlides[1].classList.remove('op');
			setTimeout(function(){
				lineSlides[1].classList.remove('active');
				imgPlaceSlides[1].classList.remove('active');
				lineSlides[2].classList.add('active');
				imgPlaceSlides[2].classList.add('active');
				setTimeout(function(){
					lineSlides[2].classList.add('op');
					imgPlaceSlides[2].classList.add('op');
				},200);
			},200);
		}
		if(lineSlides[2].classList.contains('active')) {
			lineSlides[2].classList.remove('op');
			imgPlaceSlides[2].classList.remove('op');
			setTimeout(function(){
				lineSlides[2].classList.remove('active');
				imgPlaceSlides[2].classList.remove('active');
				lineSlides[3].classList.add('active');
				imgPlaceSlides[3].classList.add('active');
				setTimeout(function(){
					lineSlides[3].classList.add('op');
					imgPlaceSlides[3].classList.add('op');
				},200);
			},200);
		}
		if(lineSlides[3].classList.contains('active')) {
			lineSlides[3].classList.remove('op');
			imgPlaceSlides[3].classList.remove('op');
			setTimeout(function(){
				lineSlides[3].classList.remove('active');
				imgPlaceSlides[3].classList.remove('active');
				lineSlides[0].classList.add('active');
				imgPlaceSlides[0].classList.add('active');
				setTimeout(function(){
					lineSlides[0].classList.add('op');
					imgPlaceSlides[0].classList.add('op');
				},200);
			},200);
		}
	},speedOfRotate);
	document.querySelector('.placement .control .arrow').onclick = function() {
		if(lineSlides[0].classList.contains('active')) {
			lineSlides[0].classList.remove('op');
			imgPlaceSlides[0].classList.remove('op');
			setTimeout(function(){
				lineSlides[0].classList.remove('active');
				imgPlaceSlides[0].classList.remove('active');
				lineSlides[1].classList.add('active');
				imgPlaceSlides[1].classList.add('active');
				setTimeout(function(){
					lineSlides[1].classList.add('op');
					imgPlaceSlides[1].classList.add('op');
				},200);
			},200);
		}
		if(lineSlides[1].classList.contains('active')) {
			lineSlides[1].classList.remove('op');
			imgPlaceSlides[1].classList.remove('op');
			setTimeout(function(){
				lineSlides[1].classList.remove('active');
				imgPlaceSlides[1].classList.remove('active');
				lineSlides[2].classList.add('active');
				imgPlaceSlides[2].classList.add('active');
				setTimeout(function(){
					lineSlides[2].classList.add('op');
					imgPlaceSlides[2].classList.add('op');
				},200);
			},200);
		}
		if(lineSlides[2].classList.contains('active')) {
			lineSlides[2].classList.remove('op');
			imgPlaceSlides[2].classList.remove('op');
			setTimeout(function(){
				lineSlides[2].classList.remove('active');
				imgPlaceSlides[2].classList.remove('active');
				lineSlides[3].classList.add('active');
				imgPlaceSlides[3].classList.add('active');
				setTimeout(function(){
					lineSlides[3].classList.add('op');
					imgPlaceSlides[3].classList.add('op');
				},200);
			},200);
		}
		if(lineSlides[3].classList.contains('active')) {
			lineSlides[3].classList.remove('op');
			imgPlaceSlides[3].classList.remove('op');
			setTimeout(function(){
				lineSlides[3].classList.remove('active');
				imgPlaceSlides[3].classList.remove('active');
				lineSlides[0].classList.add('active');
				imgPlaceSlides[0].classList.add('active');
				setTimeout(function(){
					lineSlides[0].classList.add('op');
					imgPlaceSlides[0].classList.add('op');
				},200);
			},200);
		}
	}
}
// first floor 
let leftContButts = document.querySelectorAll('.placement .control .buts div');
let firstFloorLay = document.querySelector('.placement .first-floor');
let firstFloorLayClose = document.querySelector('.placement .first-floor .close');
let secondFloorLay = document.querySelector('.placement .second-floor');
let secondFloorLayClose = document.querySelector('.placement .second-floor .close');
let thirdFloorLay = document.querySelector('.placement .third-floor');
let thirdFloorLayClose = document.querySelector('.placement .third-floor .close');

leftContButts[0].onclick = function() {
	leftContButts[1].classList.remove('active');
	leftContButts[2].classList.remove('active');
	leftContButts[0].classList.add('active');
	setTimeout(function(){
		firstFloorLay.classList.add('active');
		secondFloorLay.classList.remove('op');
		setTimeout(function(){
			firstFloorLay.classList.add('op');
			secondFloorLay.classList.remove('active');
		},200);
	},200);
}
firstFloorLayClose.onclick = function() {
	firstFloorLay.classList.remove('op');
	setTimeout(function(){
		firstFloorLay.classList.remove('active');
	},200);
}
// second

leftContButts[1].onclick = function() {
	leftContButts[0].classList.remove('active');
	leftContButts[2].classList.remove('active');
	leftContButts[1].classList.add('active');
	setTimeout(function(){
		secondFloorLay.classList.add('active');
		firstFloorLay.classList.remove('op');
		thirdFloorLay.classList.remove('op');
		setTimeout(function(){
			secondFloorLay.classList.add('op');
			firstFloorLay.classList.remove('active');
			thirdFloorLay.classList.remove('active');
		},200);
	},200);
}
secondFloorLayClose.onclick = function() {
	secondFloorLay.classList.remove('op');
	setTimeout(function(){
		secondFloorLay.classList.remove('active');
	},200);
}
// third
leftContButts[2].onclick = function() {
	leftContButts[1].classList.remove('active');
	leftContButts[0].classList.remove('active');
	leftContButts[2].classList.add('active');
	setTimeout(function(){
		thirdFloorLay.classList.add('active');
		firstFloorLay.classList.remove('op');
		secondFloorLay.classList.remove('op');
		setTimeout(function(){
			thirdFloorLay.classList.add('op');
			firstFloorLay.classList.remove('active');
			secondFloorLay.classList.remove('active');
		},200);
	},200);
}
thirdFloorLayClose.onclick = function() {
	thirdFloorLay.classList.remove('op');
	setTimeout(function(){
		thirdFloorLay.classList.remove('active');
	},200);
}
// page settings
	// video
	document.querySelector('.video-title video').setAttribute('src', headerVideo)
	// slider
	document.querySelector('.promo-slider .slide-text-wrap .slide1 h2').innerHTML=slide1title;
	document.querySelector('.promo-slider .slide-text-wrap .slide2 h2').innerHTML=slide2title;
	document.querySelector('.promo-slider .slide-text-wrap .slide3 h2').innerHTML=slide3title;
	document.querySelector('.promo-slider .slide-text-wrap .slide4 h2').innerHTML=slide4title;
	document.querySelector('.promo-slider .slide-text-wrap .slide5 h2').innerHTML=slide5title;

	document.querySelector('.promo-slider .slide-text-wrap .slide1 .desc').innerHTML=slide1descr;
	document.querySelector('.promo-slider .slide-text-wrap .slide2 .desc').innerHTML=slide2descr;
	document.querySelector('.promo-slider .slide-text-wrap .slide3 .desc').innerHTML=slide3descr;
	document.querySelector('.promo-slider .slide-text-wrap .slide4 .desc').innerHTML=slide4descr;
	document.querySelector('.promo-slider .slide-text-wrap .slide5 .desc').innerHTML=slide5descr;

	document.querySelector('.promo-slider .right .slide1').style.cssText=slide1img;
	document.querySelector('.promo-slider .right .slide2').style.cssText=slide2img;
	document.querySelector('.promo-slider .right .slide3').style.cssText=slide3img;
	document.querySelector('.promo-slider .right .slide4').style.cssText=slide4img;
	document.querySelector('.promo-slider .right .slide5').style.cssText=slide5img;

	document.querySelector('.promo-slider .left .double .timeline span').style.animation=`timeline ${speedOfRotate}ms ease-in-out infinite`;
	// promo in menu 
	document.querySelector('.menu .main .promo .item1').style.cssText=promo1img;
	document.querySelector('.menu .main .promo .item2').style.cssText=promo2img;
	document.querySelector('.menu .main .promo .item3').style.cssText=promo3img;

	document.querySelector('.menu .main .promo .item1 h3').innerHTML=promo1title;
	document.querySelector('.menu .main .promo .item2 h3').innerHTML=promo2title;
	document.querySelector('.menu .main .promo .item3 h3').innerHTML=promo3title;

	document.querySelector('.menu .main .promo .item1 .price .price-item').innerHTML=promo1price;
	document.querySelector('.menu .main .promo .item2 .price .price-item').innerHTML=promo2price;
	document.querySelector('.menu .main .promo .item3 .price .price-item').innerHTML=promo3price;

	document.querySelector('.menu .main .promo .item1 .price .weight').insertBefore(promo1weight,document.querySelector('.menu .main .promo .item1 .price .weight').childNodes[0]);
	document.querySelector('.menu .main .promo .item2 .price .weight').insertBefore(promo2weight,document.querySelector('.menu .main .promo .item2 .price .weight').childNodes[0]);
	document.querySelector('.menu .main .promo .item3 .price .weight').insertBefore(promo3weight,document.querySelector('.menu .main .promo .item3 .price .weight').childNodes[0]);
	// placement
	document.querySelector('.placement .wrap .control .double .timeline span').style.animation=`timeline ${speedOfRotate}ms ease-in-out infinite`;
	// placement slider
	document.querySelector('.placement .wrap .slide1').style.cssText=slidePlace1img;
	document.querySelector('.placement .wrap .slide2').style.cssText=slidePlace2img;
	document.querySelector('.placement .wrap .slide3').style.cssText=slidePlace3img;
	document.querySelector('.placement .wrap .slide4').style.cssText=slidePlace4img;

   