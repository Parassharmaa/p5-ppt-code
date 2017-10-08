window.addEventListener('load', function() {
  var preventPullToRefreshCheckbox = true
  var preventOverscrollGlowCheckbox = true
  var preventScrollCheckbox = true

  var maybePreventPullToRefresh = true;
  var lastTouchY = 0;
  var touchstartHandler = function(e) {
    if (e.touches.length != 1) return;
    lastTouchY = e.touches[0].clientY;
    maybePreventPullToRefresh =
        preventPullToRefreshCheckbox &&
        window.pageYOffset == 0;
  }

  var touchmoveHandler = function(e) {
    var touchY = e.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (maybePreventPullToRefresh) {
      maybePreventPullToRefresh = false;
      if (touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }

    if (preventScrollCheckbox) {
      e.preventDefault();
      return;
    }

    if (preventOverscrollGlowCheckbox) {
      if (window.pageYOffset == 0 && touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }
  }

  document.addEventListener('touchstart', touchstartHandler, {passive: false });
  document.addEventListener('touchmove', touchmoveHandler, {passive: false });
});