const textArea = document.querySelector("textarea");
const voiceList = document.querySelector("select");
const speechBtn =  document.querySelector("button");

let synth = speechSynthesis;

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English " ? "selected" : "";
        let option = `<option value="${voice.name} ${selected}">${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML("beforeend", option)
    }
}
synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utterances = new SpeechSynthesisUtterance(text);
    synth.speak(utterances)  
}

speechBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(textArea.value !== ""){
        textToSpeech(textArea.value)
    }

})