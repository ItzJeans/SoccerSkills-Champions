/* Fullscreen toggle from the supplied Heaven For Death launcher. */
function toggleFullScreen() {
    var element = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    setTimeout(function() {
        if (typeof Graphics !== 'undefined' && Graphics._updateAllElements) {
            Graphics._updateAllElements();
        }
    }, 100);
}
