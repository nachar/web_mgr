$( document ).ready(function() {
	resizeSliderImg();
	resizeListener();
	sliderChangeListener();
	centerDiv();

	//Centrar los titulos de las páginas
	pagesHeaderCenterHeightTitulo();

	//Actividades pages
	pagesGolfDetalleContenidoCenter();

	//Inmobiliaria
	animationInmobiliariaHover();

});

////Inmobiliaria 
function animationInmobiliariaHover (){
	if ($(window).width() >= 991) {
		$(".inmobiliariaDetalleImg").hover(function(){
			$(".inmobiliariaAnimation", this).addClass("inmobiliariaAnimationAction");					
			$(".inmobiliariaAnimationRight", this).addClass("inmobiliariaAnimationActionRight");				
		}, function(){
			$( ".inmobiliariaAnimation",this).removeClass( "inmobiliariaAnimationAction" );
			$( ".inmobiliariaAnimationRight",this).removeClass( "inmobiliariaAnimationActionRight" );
		});
	} else {
		$(".inmobiliariaAnimation").addClass("inmobiliariaAnimationAction");					
		$(".inmobiliariaAnimationRight").addClass("inmobiliariaAnimationActionRight");	
	}
}
function centerDiv (){
	setTimeout(
		function() {
			$('.centerDiv').each(function() {
				var inmobiliariaDetalleContenido = $(".centerDivContenido", this).height();
				var inmobiliariaDetalle = $(".centerDivAlto", this).height();
				var pageHeaderMarginTop = (inmobiliariaDetalle - inmobiliariaDetalleContenido) / 2 ;

				if ($(window).width() >= 991) {
					$(".centerDivContenido", this).css("paddingTop", pageHeaderMarginTop+"px");
					$(".centerDivContenido", this).css("paddingBottom", pageHeaderMarginTop+"px");
				} else {
					$(".centerDivContenido", this).css("paddingTop", "40px");
					$(".centerDivContenido", this).css("paddingBottom", "40px");
				}
			});
		}, 100);
}


//Pages
function pagesHeaderCenterHeightTitulo (){
	$('.pagesHeader').each(function() {
		var pageHeaderHeight = $(this).height();
		var pageHeaderTituloHeight = $('.pagesHeaderTitulo').height();
		var pageHeaderMarginTop = (pageHeaderHeight - pageHeaderTituloHeight) / 2 ;

		$('.pagesHeaderTitulo').css("paddingTop", pageHeaderMarginTop+"px");

	});
}



//Pages Actividades
function pagesGolfDetalleContenidoCenter (){
	$('.pagesDetalleGolf').each(function() {
		var detalleGolfContenidoWidth = $('.pagesDetalleGolfContenido').width();
		var pagesDetalleGolfWidth = $('.pagesDetalleGolf .row').width();
		var numItems = $('.pagesDetalleGolfContenido').length;

		console.log($(window).width());
		if ($(window).width() >= 991) {
			if (numItems == 1){
				$('.pagesDetalleGolfContenido').css("width", "100%");	
				$('.pagesDetalleGolfContenido p').css("paddingLeft", "25%");	
				$('.pagesDetalleGolfContenido p').css("paddingRight", "25%");	
			} else if (numItems >= 4){
				if (numItems % 4 == 0){
					$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/4.01)+"px");
				} else {
					$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/3.01)+"px");
				}
			}else if (numItems % 2 == 0){
				$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/2.01)+"px");
			} else {
				$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/3.01)+"px");
			}

		} else if ($(window).width() < 991 && $(window).width() >=  761){
			if (numItems == 1){
				$('.pagesDetalleGolfContenido').css("width", "100%");	
				$('.pagesDetalleGolfContenido p').css("paddingLeft", "0");	
				$('.pagesDetalleGolfContenido p').css("paddingRight", "0");
			} else if (numItems > 4){
				$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/3.01)+"px");
			}else if (numItems % 2 == 0){
				$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/2.1)+"px");
			} else {
				$('.pagesDetalleGolfContenido').css("width", (pagesDetalleGolfWidth/3.01)+"px");
			}
			
		} else if ($(window).width() < 767){
			$('.pagesDetalleGolfContenido').css("width", "100%");	
		}
	});
}


//Index
function resizeSliderImg(){
	$('.sliderImagenes').each(function() {
		var winWidth = $(window).width();
		var carouselHeight = $('.carousel-inner').height();
		var calculoWidth = carouselHeight * 3.4 ;
		var calculoHeight = calculoWidth / 3.4;

		if (winWidth < (carouselHeight * 3) + 250){
			var marginLeft = (calculoWidth - winWidth)/2;

			$(this).css("min-height", calculoHeight + "px");
			$(this).css("min-width", calculoWidth + "px");
			$(this).css("marginLeft", "-"+marginLeft + "px");
			$(this).css("marginTop", "0px");
		} else {
			var marginTop = ($(this).height() - carouselHeight)/2;

			$(this).css("min-width", "100%");
			$(this).css("min-height", carouselHeight + "px");
			$(this).css("marginLeft", "0px");
			$(this).css("marginTop", "-"+marginTop + "px");
		}
	});

}
function resizeListener (){
	$(window).resize(function() {
		resizeSliderImg();
		pagesHeaderCenterHeightTitulo();
		pagesGolfDetalleContenidoCenter();
		centerDiv();
		animationInmobiliariaHover();
	});
}
function sliderChangeListener (){
	$('#myCarousel').bind('slide.bs.carousel', function (e) {
		setTimeout(function(){
			resizeSliderImg();
		} , 300);
	});
}