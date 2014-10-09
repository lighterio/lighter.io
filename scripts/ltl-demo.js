var createEditor;

onReady(function() {
  window['coffee-script'] = window.CoffeeScript;
  window.markdown = window.marked;
  $('textarea').each(function(index, textarea) {
    var className;
    className = textarea.className;
    if (className === '_TEMPLATE') {
      return createEditor('jade', textarea);
    } else if (className === '_OUTPUT') {
      return createEditor('htmlmixed', textarea);
    }
  });
  return $(document).on('click', 'b._CODE_TAB', function() {
    var className;
    className = this.className.split(' ')[1];
    $(this).parent().children().filter('div').addClass('_HIDDEN').filter('.' + className).removeClass('_HIDDEN').parent().find('._ON').removeClass('_ON');
    return $(this).addClass('_ON');
  });
});

ltl.setOption('tabWidth', 2);

createEditor = function(mode, textarea) {
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
