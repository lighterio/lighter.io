$ ->
	$document = $(document)
	$document.on 'keyup', 'textarea._TEMPLATE,textarea._CONTEXT', ->
		$table = $(this).closest 'table'
		template = $table.find('._TEMPLATE').val()
		context = $table.find('._CONTEXT').val()
		compiled = ltl.compile template
		output = compiled context
		$table.find('._COMPILED').val compiled.toString()
		$table.find('._OUTPUT').val output

	$('textarea._TEMPLATE').keyup()


setTimeout ->
	location.reload();
, 60000