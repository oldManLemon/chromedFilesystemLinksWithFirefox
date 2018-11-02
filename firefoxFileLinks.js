
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

if (isFirefox || isChrome) {
    //You can use what ever to detect links, you can do it by tag and get every link. 
    var linkmodify = document.getElementsByClassName("list class");
    for (var i = 0; i < linkmodify.length; i++) {
        var replacementLink = "";
        link = linkmodify[i].href;
        for (var j = 0; j < link.length; j++) {
            if (j == 5) {
                replacementLink += '//';
            }
            replacementLink += link[j];
        }
        linkmodify[i].href = replacementLink;
    }
}