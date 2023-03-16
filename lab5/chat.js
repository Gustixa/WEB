// HTML values
const form = document.createElement('form')
const input = document.createElement('input')
const button = document.createElement('button')
const iframe = document.createElement('iframe')

const regex = /https?:\/\/[^\s]+/

button.append('SEND')
form.append(input)
form.append(button)

// Position for the input field and button
button.style.transform = 'translate(460px,0px)'
input.style.transform = 'translate(450px,0px)'

// Image preview style
iframe.style.height = '200'
iframe.style.width = '300'
iframe.name = 'preview'


// Limit the amount of characters in a message
input.maxLength = 140

//Appearence to the input field
input.style.width = '500px'
button.style.width = '100px'

const ul = document.createElement('ul')

// Position for the text
//ul.style.marginLeft = '400px'

function updatePreview(){
	let file = input.files[0]
	let reader = new FileReader()

	reader.readAsDataURL(file)
	reader.onload = function () {
		let img = input.value
		img.src = reader.result
	}
}

const Message = (text, user) => {
  	const li = document.createElement('li')
  	const userSpan = document.createElement('span')

  	userSpan.append(`${user}:`)
  	userSpan.style.fontWeight = 'bold'
	
	// Obtener el enlace del texto que se ingresa
	let enlace = null
	if(regex.test(text)){
		enlace = text.match(regex)[0]
		iframe.src = enlace
	}
	
    if(user === "Me"){
		if(enlace != null){
			li.append(iframe)
		}else{
			li.append(text)
		}
        li.style.alignSelf = 'end'
        li.style.textAlign = 'center'
    }else{
		li.append(userSpan)
		if(enlace != null){
			li.append(iframe)
		}else{
			li.append(text)
		}		
    }
  	return li
}



const getMessages = async () => {
	const response = await fetch('http://uvgenios.online/api/messages')
  	const messages = await response.json()

	const lis = messages.map((message) => Message(message.text, message.user))
	lis.forEach((li) => {
		ul.append(li)
		})
	ul.style.display = 'flex'
	ul.style.flexDirection = 'column'
	ul.style.listStyle = 'none'
	ul.style.alignItems = 'baseline'
}

const postMessage = async (text) => {
	const body = {
		text,
		user: 'Me'
	}
	const response = await fetch('http://uvgenios.online/api/messages', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
		'Content-Type': 'application/json'
		}
	})
	return response
}

getMessages()

button.addEventListener('click', async (event) => {
    event.preventDefault()

    await postMessage(input.value)
    ul.innerHTML = ""
    getMessages()
    input.value = ""
})

// Press enter key
button.addEventListener('keydown', async (key) =>{
    if(key.code === 13){
        key.preventDefault()
        postMessage(input.value)
        ul.innerHTML = ""
        getMessages()
        input.value = ""
    }
})

// Reload automatically the page.
setTimeout(() =>{
	document.location.reload()
}, 10000)

document.body.append(ul)
document.body.append(form)
document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'
document.body.style.backgroundImage = 'url(./imgs/fondoChat.jpg)'