onReady ->

  href = window.favicon
  if href
    links = getElementsByTagName 'link'
    forEach links, (link) ->
      if contains(link.rel, 'icon')
        parent = getParent link
        removeElement link
        link = addElement(parent, 'link?rel=shortcut icon&href=' + href)
