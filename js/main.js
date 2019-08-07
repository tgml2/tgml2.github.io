(function($) {
  "use strict"; // Start of use strict

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  // Add gallery images
  var ArrayPhotos = new Array(125)
  var carouselLinks = []
  var linksContainer = $('#links')
  var baseUrl
  $.each(ArrayPhotos, function (index) {
    index = index + 1
    baseUrl = "img/activities/"

    $('<a/>')
      .append(
        $('<img>').prop('src', baseUrl + 'small/' + 'image_' + index + '.jpg').prop('class', 'img-galleries')
      ).prop('href', baseUrl + 'image_' +index + '.jpg')
      .prop('title', 'Think Global Make Local 2')
      .prop('class', 'img-gallery-thumnail')
      .attr('data-gallery', '')
      .appendTo(linksContainer)
    carouselLinks.push({
      href: baseUrl + 'image_' + index + '.jpg',
      title: 'Think Global Make Local 2'
    })
  })
  // Initialize the Gallery as image carousel:
  blueimp.Gallery(carouselLinks, {
    container: '#blueimp-image-carousel',
    carousel: true
  })
})(jQuery); // End of use strict
