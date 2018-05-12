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