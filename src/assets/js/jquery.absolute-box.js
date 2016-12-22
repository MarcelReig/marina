/*!
 * absolute-box - A simple jquery lightbox plugin
 * @version v0.11.0
 * @link https://github.com/dcdeiv/absolute-box#readme
 * @copyright (c) 2014 - 2016 Davide Di Criscito
 * @license MIT AND GPL-2.0
 */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery" ], factory );
	} else if ( typeof module === "object" && module.exports ) {

		// Node/CommonJS
		module.exports = function( root, jQuery ) {
			if ( jQuery === undefined ) {

				if ( typeof window !== "undefined" ) {
					jQuery = require( "jquery" );
				}			else {
					jQuery = require( "jquery" )( root );
				}
			}
			factory( jQuery );
			return jQuery;
		};
	} else {
		factory( jQuery );
	}
}( function( $ ) {
	var pluginName = "absoluteBox";

	$.fn[ pluginName ] = function( options ) {

		// Defining the main options and extending them directly
		var cfg = $.extend( true, {
			attr: "absolutebox", /* the attribute of the plugin */
			caption: {
				enabled: true,
				selector: "figcaption",
				init: "compressed", // or "expaded"
				toggler: true
			},
			icons: {
				quitter: "x",
				prev: "<",
				next: ">",
				expand: "↥",
				compress: "↧"
			},
			style: {
				lightbox: {
					position: "fixed",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					backgroundColor: "black",
					display: "none",
					color: "white",
					zIndex: 50000
				},
				figure: {
					position: "relative",
					width: "100%",
					maxWidth: "100%",
					height: "100%",
					maxHeight: "100%",
					margin: 0,
					padding: 0,
					textAlign: "center"
				},
				figcaption: {
					common: {
						position: "absolute",
						right: 0,
						left: 0,
						bottom: 0,
						padding: "0.5em",
						backgroundColor: "rgba(0,0,0,0.5)",
						zIndex: 50005,
						overflow: "auto",
						height: "auto"
					},
					expanded: {
						maxHeight: "30%"
					},
					compressed: {
						maxHeight: 32
					}
				},
				img: {
					width: "auto",
					maxHeight: "100%",
					maxWidth: "100%"
				},
				icons: {
					common: {
						position: "absolute",
						margin: 8,
						padding: 8,
						fontSize: 24,
						lineHeight: 0,
						verticalAlign: "middle",
						color: "FFF",
						cursor: "pointer",
						backgroundColor: "rgba(0,0,0,0.5)",
						zIndex: 50005
					},
					quitter: {
						top: 0,
						right: 0
					},
					prev: {
						top: "50%",
						left: 0,
						marginTop: -24
					},
					next: {
						top: "50%",
						right: 0,
						marginTop: -24
					},
					captionToggler: {
						cursor: "pointer",
						marginBottom: 8
					}
				}
			}
		}, options );

		return this.each( function() {

			// Defining global variables
			var index, $img,

				// Defining current plugin data attribute
				attr = "data-" + cfg.attr,
				attrFull = attr + "-full",
				captionStatus = attr + "-caption-status",

				// Defining DOM elements
				$this = $( this ),
				$children = $this.find( "img" ),
				$prev = $( "<div>" + cfg.icons.prev + "</div>" )
					.attr( attr, "prev" )
					.css( cfg.style.icons.common )
					.css( cfg.style.icons.prev ),
				$next = $( "<div>" + cfg.icons.next + "</div>" )
					.attr( attr, "next" )
					.css( cfg.style.icons.common )
					.css( cfg.style.icons.next ),
				$captionToggler = $( "<div>" )
					.attr( attr, "caption-toggler" )
					.css( cfg.style.icons.captionToggler ),
				$quitter = $( "<div>" + cfg.icons.quitter + "</div>" )
					.attr( attr, "quitter" )
					.css( cfg.style.icons.common )
					.css( cfg.style.icons.quitter ),
				$figure = $( "<figure>" ).attr( attr, "figure" )
					.css( cfg.style.figure ),
				$figcaption = $( "<figcaption>" ).attr( attr, "figcaption" )
					.css( cfg.style.figcaption.common ),
				$lightbox = $( "<div>" ).attr( attr, "lightbox" )
					.css( cfg.style.lightbox ),

				/*
				** @desc: get the src attribute of an image
				** @param: object img - the image from which you want to return the src
				** @return the src attribute or the data attribute provided for the full-size image
				*/
				getSrc = function( img ) {
					if ( img.attr( attrFull ) ) {
						return img.attr( attrFull );
					} else {
						return img.attr( "src" );
					}
				},

				/*
				** @desc: display the next or the previous image
				** @param: int i - the index of the previous or next image
				** @do:
				*/
				displayNewImage = function( i ) {

					// Check current index and fix navigation
					isEndless( i );

					// Destroy current image and append the previous or the next one
					$figure.children().filter( "img" ).fadeOut( "fast", function() {

						// Destroy current image
						$( this ).detach();

						// Override current image object
						$img = $( "<img>" ).attr( "src", getSrc( $( $children[ i ] ) ) )
							.css( cfg.style.img ).hide();

						// Append the new image to $figure
						// Make the new image vertically and horizontally centered
						$img.appendTo( $figure ).toDeadCenter();

						isCaptionEnabled( i );
					} );
				},

				/*
				** @desc: Controls the navigation.
				** @param: int i - the $children's index
				*/
				isEndless = function( i ) {
					if ( !cfg.endless ) {
						switch ( i ) {
						case 0:
							$prev.fadeOut();
							$next.fadeIn();
							break;
						case $children.index( $children.last() ):
							$prev.fadeIn();
							$next.fadeOut();
							break;
						default:
							$prev.fadeIn();
							$next.fadeIn();
						}
					}
				},

				/*
				** @desc: checks if the caption is enabled
				** @param: int i - the $children's index
				** @do: hides or shows caption if enabled
				*/
				isCaptionEnabled = function( i ) {

					// Check if the caption option is enabled
					if ( cfg.caption.enabled ) {

						// Store the original caption
						var $caption = $( $children[ i ] ).siblings( cfg.caption.selector );

						if ( $caption.length > 0 ) {

							/* If there is an actual caption it will copy its html
							and paste it into the new one */
							$figure.append(
								$figcaption.hide()
									.html(
										$caption.html()
									)
									.initCaption()
									.fadeIn()
							);
						} else {

							// Hide the lightbox's caption if the function won't find any
							$figcaption.fadeOut( function() {
								$figcaption.detach();
							} );
						}
					}
				};

			/*
			** @desc: vertically and horizontally center the selected images
			** @chain-to: $img
			*/
			$.fn.toDeadCenter = function() {
				return this.each( function() {

					// Store the function object
					var $img = $( this );

					// Wait for the image to be loaded
					$img.on( "load", function() {

						// Bind the methods to the window's resize event
						$( window ).resize( function() {
							var imgh = $img.height(),
								boxh = $( window ).height(),
								mt = ( boxh / 2 ) - ( imgh / 2 ); /* Calculate the margin top */

							// Apply new margin and then show the image
							$img.css( "marginTop", mt ).fadeIn();
						} );

						/*
						** Trigger the window's resize event
						** This will make the previous methods always available
						*/
						$( window ).resize();
					} );
				} );
			};

			/*
			** @desc: checks if caption is compressed or expanded in options
			** @do: on image load compress or expand caption
			** @chain-to: $figcaption
			*/
			$.fn.initCaption = function() {
				return this.each( function() {
					switch ( cfg.caption.init ) {
					case "compressed":
						$( this ).css( cfg.style.figcaption.compressed )
								.attr( captionStatus, "compressed" );

						if ( cfg.caption.toggler ) {
							$( this ).prepend( $captionToggler.html( cfg.icons.expand ) );
						}
						break;
					case "expanded":
						$( this ).css( cfg.style.figcaption.expanded )
								.attr( captionStatus, "expanded" );

						if ( cfg.caption.toggler ) {
							$( this ).prepend( $captionToggler.html( cfg.icons.compress ) );
						}
						break;
					}
				} );
			};

			/*
			** @desc: expands or compresses caption
			** @chain-to: $figcaption
			*/
			$.fn.captionController = function() {
				return this.each( function() {
					switch ( $( this ).attr( captionStatus ) ) {
					case "compressed":
						$( this ).animate( cfg.style.figcaption.compressed, function() {
							$captionToggler.html( cfg.icons.expand );
						} );
						break;
					case "expanded":
						$( this ).animate( cfg.style.figcaption.expanded, function() {
							$captionToggler.html( cfg.icons.compress );
						} );
						break;
					}
				} );
			};

			// Init lightbox when one of the $children (img object) is clicked
			$children.on( "click", function() {

				// Set index to the selected image index
				index = $children.index( this );

				// Define the selected image
				// Copy the src attribute from the original one
				// Apply styles and hide it
				$img = $( "<img>" ).attr( "src", getSrc( $( $children[ index ] ) ) )
					.css( cfg.style.img ).hide();

				// Creating the lightbox and all of it's element
				$lightbox.appendTo( "body" )
					.append( $quitter )
					.append( $next )
					.append( $prev )
					.fadeIn( "fast" )
					.append( $figure.append(
						$img.toDeadCenter()
						)
					);

				// Check current index and fix navigation
				isEndless( index );

				isCaptionEnabled( index );
			} );

			// Display next image
			$next.on( "click", function() {

				// Override index
				if ( index === $children.index( $children.last() ) ) {
					index = 0;
				} else {
					index += 1;
				}

				// Display the next image
				displayNewImage( index );
			} );

			// Display previous image
			$prev.on( "click", function() {

				// Override index
				if ( index === $children.index( $children.first() ) ) {
					index = $children.index( $children.last() );
				} else {
					index -= 1;
				}

				// Display the previous image
				displayNewImage( index );
			} );

			$figcaption.on( "click", function() {
				switch ( $( this ).attr( captionStatus ) ) {
				case "expanded":
					$( this ).attr( captionStatus, "compressed" ).captionController();
					break;
				case "compressed":
					$( this ).attr( captionStatus, "expanded" ).captionController();
					break;
				}
			} );

			// Destroy lightbox
			$quitter.on( "click", function() {
				$lightbox.fadeOut( "fast", function() {
					$figure.children().detach();
					$( this ).detach();
				} );
			} );
		} );
	};
} ) );
