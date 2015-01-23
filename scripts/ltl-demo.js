var createEditor;

onReady(function () {
  window['coffee-script'] = window.CoffeeScript;
  window.markdown = window.marked;
  all('textarea', function (textarea) {
    if (hasClass(textarea, '_TEMPLATE')) {
      createEditor('jade', textarea);
    }
    else if (hasClass(textarea, '_OUTPUT')) {
      createEditor('htmlmixed', textarea);
    }
  });
  on('b._CODE_TAB', 'click', function (tab) {
    var strip = getParent(tab);
    var tabs = getChildren(strip);
    all(strip, '._ON', function (tab) {
      removeClass(tab, '_ON');
    });
    addClass(tab, '_ON');
  });
});

ltl.setOption('tabWidth', 2);

function createEditor(mode, textarea) {
  var $panel, change, editor, isLtl, panel;
  isLtl = mode === 'jade';
  editor = CodeMirror.fromTextArea(textarea, {
    mode: mode,
    tabSize: 2,
    theme: 'blackboard',
    lineNumbers: isLtl,
    indentWithTabs: true,
    readOnly: !isLtl,
    lineWrapping: mode === 'javascript',
    cursorBlinkRate: 400
  });
  $panel = $(textarea).closest('._PANEL');
  panel = $panel[0];
  panel[textarea.className] = editor;
  change = function() {
    var compiled, spaced, context, output, $template, value, spaces;
    editor.save();
    $template = $panel.find('textarea._TEMPLATE');
    value = $template.val();
    spaces = 0;
    value = value.replace(/(^|\n)(\s+)/g, function (match, br, space) {
      if (!br) {
        spaces = space.length;
      }
      return br + space.substr(spaces);
    });
    $template.val(value);
    context = JSON.parse($panel.find('textarea._CONTEXT').val());
    spaced = ltl.compile(value, {
      space: '\t'
    });
    compiled = ltl.compile(value);
    output = spaced(context);
    $panel.find('textarea._COMPILED').val(compiled.toString());
    panel._OUTPUT.doc.setValue(output);
  };
  if (isLtl) {
    editor.on('change', change);
    return setTimeout(change, 10);
  }
};