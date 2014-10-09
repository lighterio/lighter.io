onReady(function() {
  var href, links;
  href = window.favicon;
  if (href) {
    links = getElementsByTagName('link');
    forEach(links, function(link) {
      var parent;
      if (contains(link.rel, 'icon')) {
        parent = getParent(link);
        removeElement(link);
        return link = addElement(parent, 'link?rel=shortcut icon&href=' + href);
      }
    });
  }
});
