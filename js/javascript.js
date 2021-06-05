  var slider = tns({
    container: '.my-slider',
    items: 2,
    gutter: 5,
    edgePadding: 20,
    slideBy: 'page',
    controls: false,
    controlsPosition: 'bottom',
    controlsContainer: false,
    nav: true,
    navPosition: 'bottom',
    arrowKeys: true,
    mouseDrag: true,
    swipeAngle: false,
    responsive: {
      640: {

          gutter: 10,
          items: 3
      },
      700: {
          gutter: 10
      },
      900: {
          items: 6,
          edgePadding: 60,
          gutter: 10
      }
    }
  });