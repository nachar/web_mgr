$( document ).ready(function() {
	bLazyImg();
	hamburguer();
	scapeKey();
	resizeListener();
});
/*********************************
			General
*********************************/
function hamburguer() {
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
}//hamburguer
function scapeKey() {
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			$("#bs-example-navbar-collapse-1").collapse('hide');
			$("#nav-icon1").removeClass('open');
		}
	});
}
function bLazyImg (){
	window.bLazy = new Blazy({
		offset: 0,
		success: function(ele){
            centerDiv();
        }
        , error: function(ele, msg){
        	if(msg === 'missing'){
                console.log("b-lazy ERROR: missing");
            }
            else if(msg === 'invalid'){
                console.log("b-lazy ERROR: invalid");
            }  
        },
        breakpoints: [{
	          width: 767 // max-width
	          , src: 'data-src-small'
	      }
	      , {
	          width: 991 // max-width
	          , src: 'data-src-medium'
	      }]
	  });

	centerDiv();
}
function resizeListener (){
	$(window).resize(function() {
		pagesHeaderCenterHeightTitulo();
		contenedorPersonalizado();
		centerDiv();
		animationInmobiliariaHover();
		centerDivNosotros();
	});
}
function centerDiv (){
	setTimeout(
		function() {
			$('.centerDiv').each(function() {
				var contenidoAlto = $(".centerDivContenido", this).height();
				var divAlto = $(".centerDivAlto", this).height();
				var pageHeaderMarginTop = (divAlto - contenidoAlto) / 2 ;

				if ($(window).width() >= 991) {
					$(".centerDivContenido", this).css("paddingTop", pageHeaderMarginTop+"px");
					$(".centerDivContenido", this).css("paddingBottom", pageHeaderMarginTop+"px");
					$(".centerDivContenido", this).css("opacity", "1");
				} else {
					$(".centerDivContenido", this).css("paddingTop", "40px");
					$(".centerDivContenido", this).css("paddingBottom", "40px");
					$(".centerDivContenido", this).css("opacity", "1");
				}
			});
		}, 1000);
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

//Index
function sliderChangeListener (){
	$('#myCarousel').bind('slide.bs.carousel', function (e) {
		setTimeout(function(){
			bLazyImg();
		} , 100);
	});
}


/*********************************
		  Inmobiliaria
*********************************/
function animationInmobiliariaHover (){
	if ($(window).width() >= 991) {
		$(".inmobiliariaAnimation").removeClass("inmobiliariaAnimationAction");					
		$(".inmobiliariaAnimationRight").removeClass("inmobiliariaAnimationActionRight");	

		$(".inmobiliariaDetalleImg").hover(function(){
			$(".inmobiliariaAnimation", this).addClass("inmobiliariaAnimationAction");					
			$(".inmobiliariaAnimationRight", this).addClass("inmobiliariaAnimationActionRight");	
		}, function(){
			$( ".inmobiliariaAnimation",this).removeClass( "inmobiliariaAnimationAction" );
			$( ".inmobiliariaAnimationRight",this).removeClass( "inmobiliariaAnimationActionRight" );
		});
	} else {
		$(".inmobiliariaDetalleImg").off( "mouseenter mouseleave" );
		$(".inmobiliariaAnimation").addClass("inmobiliariaAnimationAction");					
		$(".inmobiliariaAnimationRight").addClass("inmobiliariaAnimationActionRight");	
	}
}


/*********************************
		  Nosotros
*********************************/
function centerDivNosotros (){
	setTimeout(
		function() {
			$('.centerDivNosotros').each(function() {
				var contenidoAlto = $(".centerDivContenido", this).height();
				var divAlto = $(".centerDivAlto", this).height();
				var pageHeaderMarginTop = (divAlto - contenidoAlto) / 2 ;

				if ($(window).width() >= 700) {
					$(".centerDivContenido", this).css("paddingTop", pageHeaderMarginTop+"px");
					$(".centerDivContenido", this).css("paddingBottom", pageHeaderMarginTop+"px");
					$(".centerDivContenido", this).css("opacity", "1");
				} else {
					$(".centerDivContenido", this).css("paddingTop", "40px");
					$(".centerDivContenido", this).css("paddingBottom", "40px");
					$(".centerDivContenido", this).css("opacity", "1");
				}
			});
		}, 100);
}


/*********************************
		  Actividades
*********************************/
function contenedorPersonalizado (){
	$('.contenedorPersonalizado').each(function() {
		var contenedorPersonalizadoElementos = $('.contenedorPersonalizado .row').width();
		var numItems = $('.contenedorPersonalizadoContenido').length;

		if ($(window).width() >= 991) {
			if (numItems == 1){
				$('.contenedorPersonalizadoContenido').css("width", "100%");	
				$('.contenedorPersonalizadoContenido p').css("paddingLeft", "25%");	
				$('.contenedorPersonalizadoContenido p').css("paddingRight", "25%");	
			} else if (numItems >= 4){
				if (numItems % 4 == 0){
					$(this).removeClass("margenesBloquesHorizontal");
					$('.contenedorPersonalizadoContenido').css("width", ($(window).width()/4.01)+"px");
					$('.contenedorPersonalizadoContenido').css("padding", "35px");
				} else {
					$('.contenedorPersonalizadoContenido').css("width", (contenedorPersonalizadoElementos/3.01)+"px");
				}
			}else if (numItems % 2 == 0){
				$('.contenedorPersonalizadoContenido').css("width", (contenedorPersonalizadoElementos/2.01)+"px");
			} else {
				$('.contenedorPersonalizadoContenido').css("width", (contenedorPersonalizadoElementos/3.01)+"px");
			}

		} else if ($(window).width() < 991 && $(window).width() >=  761){
			if (numItems == 1){
				$('.contenedorPersonalizadoContenido').css("width", "100%");	
				$('.contenedorPersonalizadoContenido p').css("paddingLeft", "0");	
				$('.contenedorPersonalizadoContenido p').css("paddingRight", "0");
			} else if (numItems > 4){
				$('.contenedorPersonalizadoContenido').css("width", (contenedorPersonalizadoElementos/3.01)+"px");
			}else if (numItems % 2 == 0){
				$('.contenedorPersonalizadoContenido').css("width", (contenedorPersonalizadoElementos/2.1)+"px");
			} else {
				$('.contenedorPersonalizadoContenido').css("width", (contenedorPersonalizadoElementos/3.01)+"px");
			}
			
		} else if ($(window).width() < 767){
			$('.contenedorPersonalizadoContenido').css("width", "100%");	
		}
	});
}
