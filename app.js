const button = document.getElementById('button')
const content = document.querySelector('.content')

//arrays of replies

const greetings = [
    'im good you little piece of sugar crush',
    'i will be good. care about yourself',
    'leave me alone',
    'well bitter and too hot for you'
]

const weather = [
    'why do you even care all you do is stay at home and eat',
    'weather is great but you will stay at home so why do you care',
    'weather is pretty. by the way You are looking so pretty! You will get a boyfriend! Your life isn’t absolute shit!'
]
const work =
    'you should work now and build something real intead of doing meaningless work and being a burden on earth. you little piece of shit'


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice activated')
}

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript

    content.textContent = transcript;
    readOutLoud(transcript)
}

button.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you are saying'
    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        speech.text = finalText;
    }
    else if (message.includes('weather')) {
        const weatherText = weather[Math.floor(Math.random() * weather.length)]
        speech.text = weatherText;
    }
    else if (message.includes('are you working')) {
        const finalText = work
        speech.text = finalText;
    }


    speech.volume = 1;
    speech.rate = 0.8;
    window.speechSynthesis.speak(speech)
}

//