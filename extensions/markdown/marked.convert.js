(function($) {
  var $d = $(document);
  $d.bind('deck.init', function() {
    $.each($.deck("getSlides"), function(index, value) {
      var cssClass = value.attr('class');
      if (!cssClass || cssClass.indexOf('no-md') < 0) {
        var tokens = marked.lexer(value.html());
        tokens.forEach(function( token ) {
          if ( token.type === "code" ) {
            token.escaped = true;
          }
        });
        value.html(marked.parser(tokens));
      }
    });
  });
})(jQuery);
