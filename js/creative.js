(function($) {
  "use strict";

  $(function() {
    return $('.carousel.lazy').on('slide.bs.carousel', function(event) {
      var $lazy;
      $lazy = $(event.relatedTarget).find('img[data-src]');
      $lazy.attr('src', $lazy.data('src'));
      $lazy.removeAttr('data-src');
      $('.carousel-caption').show();
    });

    $('video').each(function () { enableInlineVideo(this); });
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    var offset = $($anchor.attr('href')).offset();
    if (!offset) { return; }

    $('html, body').stop().animate({ scrollTop: (offset.top - 50) }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  });

  // Initialize and Configure Scroll Reveal Animation
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
})(jQuery); // End of use strict

function initMap() {
  var MAP_STYLE_OPTIONS = [{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"lightness": 100}, {"visibility": "simplified"}]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"visibility": "on"}, {"color": "#C6E2FF"}]
  }, {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#C5E3BF"}]
  }, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#D1D1B8"}]
  }];

  var MAP_OPTIONS = {
    center: {lat: -26.33174875581043, lng: -48.904978625378405 },
    zoom: 15,
    disableDefaultUI: true,
    scrollwheel: false,
    zoomControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  };

  var $mapContainer = $('.js-map')[0];
  var styledMapType = new google.maps.StyledMapType(MAP_STYLE_OPTIONS);
  var map = new google.maps.Map($mapContainer, MAP_OPTIONS);

  new google.maps.Marker({position: MAP_OPTIONS['center'], map: map});
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}
