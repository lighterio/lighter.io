$ ->

	$('textarea').each (index, textarea) ->
		className = textarea.className
		if className is '_TEMPLATE'
			createEditor 'jade', textarea
		#else if className is '_CONTEXT'
		#	createEditor 'json', textarea
		#else if className is '_COMPILED'
		#	createEditor 'javascript', textarea
		else if className is '_OUTPUT'
			createEditor 'htmlmixed', textarea

	$(document).on 'click', 'b._CODE_TAB', ->
		className = this.className.split(' ')[1]
		$(this)
			.parent().children().filter('div').addClass('_HIDDEN')
			.filter('.' + className).removeClass('_HIDDEN')
		  .parent().find('._ON').removeClass('_ON')
		$(this).addClass('_ON')

createEditor = (mode, textarea) ->
	isLtl = mode is 'jade'

	editor = CodeMirror.fromTextArea textarea,
		mode: mode
		tabSize: 2
		theme: 'blackboard'
		lineNumbers: isLtl,
	  smartIndent: true,
		readOnly: not isLtl
		lineWrapping: mode is 'javascript'

  $panel = $(textarea).closest('._PANEL')
  panel = $panel[0]
	panel[textarea.className] = editor

	change = ->
		editor.save()
		template = $panel.find('textarea._TEMPLATE').val()
		context = JSON.parse $panel.find('textarea._CONTEXT').val()
		compiled = ltl.compile template, {space: '  '}
		cleanCompiled = ltl.compile template
		output = compiled context
		#panel['_COMPILED'].doc.setValue compiled.toString()
		$panel.find('textarea._COMPILED').val cleanCompiled.toString()
		panel['_OUTPUT'].doc.setValue output


	if isLtl
	  editor.on 'change', change
		setTimeout change, 10
