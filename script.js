
// This part initializes the "SpeechSynthesisUtterance" object and creates an empty array to store available voices.
//  It also selects the <select> element from the HTML.

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselector = document.getElementById("manu"); 
let textarea = document.getElementById("text"); 



// Here you can see all the voice avaliable in the device or brouser and use them

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceselector.options[i] = new Option(voice.name, i)));
}

// the function is use to select the voice that are avalable

voiceselector.addEventListener("change", () => {
    speech.voice = voices[voiceselector.value];
});

// Finally, this code sets up a click event listener on a <button> element. When the button is clicked, 
// it sets the text of the SpeechSynthesisUtterance object to the content of the <textarea> 
// element and then speaks the text using the selected voice.

document.getElementById("speakButton").addEventListener("click", () => {
    speech.text = textarea.value; 
    window.speechSynthesis.speak(speech);
    
});

