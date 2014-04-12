$ ->
	$document = $(document)
	$document.on 'keyup', 'textarea._TEMPLATE,textarea._CONTEXT', ->
		$panel = $(this).closest '._PANEL'
		template = $panel.find('._TEMPLATE').val()
		context = $panel.find('._CONTEXT').val()
		compiled = ltl.compile template
		output = compiled context
		$panel.find('._COMPILED').val compiled.toString()
		$panel.find('._OUTPUT').val output

	$('textarea._TEMPLATE').keyup()


setTimeout ->
	location.reload();
, 60000