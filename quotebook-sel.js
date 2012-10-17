/*
Author: Sean Korzdorfer
Date:   2012-07-31_140805

Call using : 

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://source-url.foo';})();

*/

window.location='quotebook://add?quote=' + document.getSelection() +  '&source=' + encodeURIComponent(document.title) + ' ' + encodeURIComponent(document.location.href);
