jQuery(function ($) {
    'use strict';
    $('body').append("<div id='cookie' class='cookie-box'><label id='cookie'><span>Utilizziamo i cookies per garantire la funzionalità del sito e per tenere conto delle vostre scelte di navigazione.<br>Continuando la navigazione, accetti di utilizzare i cookies.<br>Consulta la nostra <a href='privacy.html'>Informativa sulla privacy</a>.</span></label><div class='slider-btn text-center'><input type='button' class='box-btn-gray' value='Rifiuta' onclick='hideCookieMessage()'>   <input type='button' class='box-btn-selected' value='Accetta tutto' onclick='hideCookieMessage()'></div></div>");

}(jQuery));