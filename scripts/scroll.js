bind(window, 'scroll', function () {
  var body = document.body;
  body._OFFSET_TOP = 35;
  var top = body.scrollTop || document.documentElement.scrollTop;
  var start = 6;
  var end = 80;
  body.id = top > start ? '_SCROLLED' : '';
  var fraction = Math.max(0, Math.min(1, (top - start) / (end - start)));
  all('#_HEAD,#_FORK', function (element) {
    element.style.fontSize = (1 - fraction * 0.5) + 'em';
  });
  one('#_HEAD ._PANEL', function (element) {
    element.style.padding = (0.5 - fraction * 0.4) + 'em 1em';
  });
  one('#_LOGO img', function (element) {
    element.style.width = element.style.height = (2 - fraction / 2) + 'em';
  });
  one('#_DOCENT_FIX', function (element) {
    element.className = (top > end) ? '_FIXED' : '';
  });
});