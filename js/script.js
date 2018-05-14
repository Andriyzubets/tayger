if(document.querySelector('.promo-slider')) {
	window.onload = function() {
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
		},4000);
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
}
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
		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[1].classList.add('active');
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
		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[2].classList.add('active');
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
		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[3].classList.add('active');
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
		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[4].classList.add('active');
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
		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[6].classList.remove('active');
			menuTabs[5].classList.add('active');
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
		setTimeout(function(){
			menuTabs[0].classList.remove('active');
			menuTabs[1].classList.remove('active');
			menuTabs[2].classList.remove('active');
			menuTabs[3].classList.remove('active');
			menuTabs[4].classList.remove('active');
			menuTabs[5].classList.remove('active');
			menuTabs[6].classList.add('active');
			setTimeout(function(){
				menuTabs[6].classList.add('op');
			},200);
		},200);
	}
}
// google maps
google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(50.4432151, 30.5201291),
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