// Dropdown Logic
$(document).ready(() => {
	createAll()
})

function screenshot() {
	html2canvas(document.getElementById('screenshot'), {
		useCORS: true,
	}).then(function (canvas) {
		var imageURL = canvas.toDataURL('image/png')
		let a = document.createElement('a')
		a.href = imageURL
		a.download = 'MyAffirmations'
		a.click()
	})
}

function createForm(template, templateNum) {
	let affirmations = $('#affirmations')
	// create a standard new form
	let newForm = $(
		"<form><div class='form-group'>\
            <label for='templateX' id='new'>Template X</label>\
            <input type='text' class='form-control new' placeholder='default'>\
            </div></form>"
	)
	affirmations.append(newForm)
	$('label#new').attr('for', template)
	$('label#new').text(template.text())
	console.log(templateNum)
	$('input.new').attr('placeholder', getPlaceHolder(templateNum))
	$('input.new').attr('id', template)

	$('label#new').attr('id', '')
	$('input.new').removeClass('new')
}

function clicker(template, templateNum) {
	template.on('click', () => {
		createForm(template, templateNum)
	})
}

function getPlaceHolder(templateNum) {
	var placeholders = [
		'ex. I have a closer relationship with myself and I have learned new skills.',
		'ex. getting a job, changing my routine, or changing my major.',
		'ex. optimistic, honest, and kind.',
		'ex. going for more walks, getting out of my bubble, and journaling.',
		'ex. present myself, spend my free time, and communicate with others.',
		'ex. by making a conscious effort to smile more.',
		'ex. changing my routine and talking to more people',
		'ex. meditating more and being more positive.  ',
		'ex. my patience and ability to get along with others',
		'ex. maintaining above a 3.0 GPA while working and being proactive about my mental health',
	]
	return placeholders[templateNum]
}

function createAll() {
	const template1 = $('a.template1')
	const template2 = $('a.template2')
	const template3 = $('a.template3')
	const template4 = $('a.template4')
	const template5 = $('a.template5')
	const template6 = $('a.template6')
	const template7 = $('a.template7')
	const template8 = $('a.template8')
	const template9 = $('a.template9')
	const template10 = $('a.template10')
	clicker(template1, 0)
	clicker(template2, 1)
	clicker(template3, 2)
	clicker(template4, 3)
	clicker(template5, 4)
	clicker(template6, 5)
	clicker(template7, 6)
	clicker(template8, 7)
	clicker(template9, 8)
	clicker(template10, 9)
}

function getScreenshotOfElement(element, posX, posY, width, height, callback) {
	html2canvas(element, {
		onrendered: function (canvas) {
			var context = canvas.getContext('2d')
			var imageData = context.getImageData(posX, posY, width, height).data
			var outputCanvas = document.createElement('canvas')
			var outputContext = outputCanvas.getContext('2d')
			outputCanvas.width = width
			outputCanvas.height = height

			var idata = outputContext.createImageData(width, height)
			idata.data.set(imageData)
			outputContext.putImageData(idata, 0, 0)
			callback(outputCanvas.toDataURL().replace('data:image/png;base64,', ''))
		},
		width: width,
		height: height,
		useCORS: true,
		taintTest: false,
		allowTaint: false,
	})
}
