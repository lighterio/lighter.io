// @use jymin/jymin.js
// @use codemirror/lib/codemirror.js
var createEditor;

Jymin.onReady(function () {
  window['coffee-script'] = window.CoffeeScript;
  window.markdown = window.marked;
  Jymin.all('textarea', function (textarea) {
    if (Jymin.hasClass(textarea, '_template')) {
      createEditor('jade', textarea);
    }
    else if (Jymin.hasClass(textarea, '_output')) {
      createEditor('htmlmixed', textarea);
    }
  });
  Jymin.on('b._codeTab', 'click', function (tab) {
    var strip = Jymin.getParent(tab);
    var tabs = Jymin.getChildren(strip);
    Jymin.all(strip, '._on', function (tab) {
      Jymin.removeClass(tab, '_on');
    });
    Jymin.addClass(tab, '_on');
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
  $panel = $(textarea).closest('._panel');
  panel = $panel[0];
  panel[textarea.className] = editor;
  change = function() {
    var compiled, spaced, context, output, $template, value, spaces;
    editor.save();
    $template = $panel.find('textarea._template');
    value = $template.val();
    spaces = 0;
    value = value.replace(/(^|\n)(\s+)/g, function (match, br, space) {
      if (!br) {
        spaces = space.length;
      }
      return br + space.substr(spaces);
    });
    $template.val(value);
    context = JSON.parse($panel.find('textarea._context').val());
    spaced = ltl.compile(value, {
      space: '\t'
    });
    compiled = ltl.compile(value);
    output = spaced(context);
    $panel.find('textarea._compiled').val(compiled.toString());
    panel._output.doc.setValue(output);
  };
  if (isLtl) {
    editor.on('change', change);
    return setTimeout(change, 10);
  }
};
