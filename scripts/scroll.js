// @use jymin/jymin.js

Jymin.bind(window, 'scroll', function () {
  var body = document.body;
  body._offsetTop = 35;
  var top = body.scrollTop || document.documentElement.scrollTop;
  var start = 6;
  var end = 80;
  body.id = top > start ? '_scrolled' : '';
  var fraction = Math.max(0, Math.min(1, (top - start) / (end - start)));
  Jymin.all('#_head,#_fork', function (element) {
    element.style.fontSize = (1 - fraction * 0.5) + 'em';
  });
  Jymin.one('#_head ._panel', function (element) {
    element.style.padding = (0.5 - fraction * 0.4) + 'em 1em';
  });
  Jymin.one('#_logo img', function (element) {
    element.style.width = element.style.height = (2 - fraction / 2) + 'em';
  });
  Jymin.one('#_docentFix', function (element) {
    element.className = (top > end) ? '_fixed' : '';
  });
});
