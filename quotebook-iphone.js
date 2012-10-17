/*
Author: Sean Korzdorfer
Date:   2012-07-31_140805

Call using : 

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://dl.dropbox.com/u/5591113/bin/quotebook-sel.js';})();

*/





window.location='quotebook://add?quote=tmp' + '&source=' + encodeURIComponent(document.title) + ' ' + encodeURIComponent(document.location.href);



