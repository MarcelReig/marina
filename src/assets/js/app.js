$(document).foundation();


/* Sticky footer */

 $(window).bind("load", function () {
    var footer = $("footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});

/* absoluteBox */

var $grid = $( ".masonry" ).imagesLoaded( function() {
  $grid.masonry({
    itemSelector: ".item-selector",
    fitWidth: true
  });
} );

$( ".gallery" ).absoluteBox( {
  icons: {
    quitter: "<i class='material-icons'>&#xE5CD;</i>",
    prev: "<i class='material-icons'>&#xE5CB;</i>",
    next: "<i class='material-icons'>&#xE5CC;</i>"
  }
} );
