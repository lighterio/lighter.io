$ ->
	$document = $(document)
	$document.on 'keydown keyup', 'textarea._TEMPLATE,textarea._CONTEXT', ->
		$panel = $(this).closest '._PANEL'
		template = $panel.find('._TEMPLATE').val()
		context = JSON.parse $panel.find('._CONTEXT').val()
		compiled = ltl.compile template
		output = compiled context
		$panel.find('._COMPILED').val compiled.toString()
		$panel.find('._OUTPUT').val output

	$('textarea._TEMPLATE').keyup()

	createEditor 'jade', $('textarea._TEMPLATE')[0]



createEditor = (mode, textarea) ->
	editor = CodeMirror.fromTextArea textarea,
		mode: mode
		tabSize: 4
		theme: 'blackboard'
		lineNumbers: true

	editor.on 'change', ->
		editor.save()
		$(textarea).keyup()
