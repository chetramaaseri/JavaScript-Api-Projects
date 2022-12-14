
const serachBtn = document.getElementById("search-btn");
const wordInput = document.getElementById("word-input");
const result = document.getElementById("result");
const audio = document.getElementById("sound");

serachBtn.addEventListener('click',()=>{
    let word = wordInput.value;
    let finalURL=  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(finalURL)
    .then(response => response.json())
    .then(data =>{
        result.innerHTML = `
        <div class="word">
                <h3>${data[0].word}</h3>
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[0].text}</p>
            </div>
            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="word-example">${data[0].meanings[0].definitions[0].example || " "}</p>
            `;
            sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
    })
    .catch(()=>{

        result.innerHTML = `<h3 class="error">Couldn't Find The Word </h3>`;
    });

});

function playSound(){
    audio.play();
}