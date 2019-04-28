window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recording = false
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList

const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.interimResults = true;
recognition.lang = 'en-US';


let p = document.createElement('p');
const words = document.querySelector('.textbox');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = transcript;

    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
});

function start() {
  recording = true;
  recognition.addEventListener('end', recognition.start);
  recognition.start();
}

function colorChanger() {
  var currentClass = words.className;
  switch (currentClass) {
    case 'textbox dark':
      words.className = currentClass = 'textbox light'
      break
      case 'textbox light':
      words.className = currentClass = 'textbox red'
      break;
      case 'textbox red':
      words.className = currentClass = 'textbox orange'
      break;
      case 'textbox orange':
      words.className = currentClass = 'textbox yellow'
      break;
      case 'textbox yellow':
      words.className = currentClass = 'textbox green'
      break;
      case 'textbox green':
      words.className = currentClass = 'textbox blue'
      break;
      case 'textbox blue':
      words.className = currentClass = 'textbox navy'
      break;
      case 'textbox navy':
      words.className = currentClass = 'textbox purple'
      break;
      case 'textbox purple':
      words.className = currentClass = 'textbox dark'
      break;
  }
}

function fontChanger() {
  var currentSize = window.getComputedStyle(words).fontSize;
  switch (currentSize) {
    case '25px':
      words.style.fontSize = '50px';
      break;
    case '50px':
      words.style.fontSize = '75px';
      break;
    case '75px':
      words.style.fontSize = '25px';
      break;
  }
}

function exporter() {

}

const micButton = document.querySelector('#mic')
micButton.addEventListener('click', () => {
  if (recording == false) {
    start()
  } else {
    recording = false;
  }
})

const colorButton = document.querySelector('#color')
colorButton.addEventListener('click', (e) => {
  colorChanger()
})

const fontButton = document.querySelector('#fontSize')
fontButton.addEventListener('click', (e) => {
  fontChanger()
})

const exportButton = document.querySelector('#export')
exportButton.addEventListener('click', (e) => {
  console.log(e)
})

const aboutButton = document.querySelector('.about')
aboutButton.addEventListener('click', (e) => {
  console.log(e)
})