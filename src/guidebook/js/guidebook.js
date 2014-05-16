$( window ).bind( "create.xrayhtml", function( e ) {
  var prism = !!~e.target.getAttribute( "class" ).indexOf( "prism" ),
      zeroclip = !!~e.target.getAttribute( "class" ).indexOf( "zeroclip" ),
      flash = !!( navigator.mimeTypes[ "application/x-shockwave-flash" ] || "ActiveXObject" in window );

  if( prism && "Prism" in window ) {
    $( ".prism" ).find( "code" ).addClass( "language-markup" );
    Prism.highlightAll();
  }

  if( zeroclip && "ZeroClipboard" in window && flash ) {
    ZeroClipboard.config({ debug: false });
    $( e.target ).each(function() {
      var copy = $( "<a/>", {
          "class" : "sg-btn sg-btn-copy",
          "href" : "#",
          "text" : "Copy to Clipboard"
          }),
          code = $( this ).find( "code" ).text(),
          clip = new ZeroClipboard( copy, {
            moviePath: "guidebook/js/vendor/zeroclipboard/ZeroClipboard.swf",
          });

      clip.on( "load", function(clip) {
        // console.log( "movie is loaded" );

        clip.on( 'datarequested', function(clip) {
          clip.setText(code);
        } );

        clip.on( "complete", function(clip, args) {
          // alert("Copied text to clipboard: " + code );
        });
      });

      $( this ).find( ".sg-example-code" ).append( copy );
    });
  }
});
