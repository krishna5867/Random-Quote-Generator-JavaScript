let quote = document.querySelector("p");
let author = document.querySelector("#author");
let vol = document.querySelector(".vol");
let copy = document.querySelector(".copy");
let linkedin = document.querySelector(".linkedin");


let btn = document.querySelector("#btn");

function newQuote(){
    btn.innerText = "Loading..."
    btn.classList.add("loadQuote");
    fetch("http://api.quotable.io/random").then(e=>e.json()).then(result =>{
        quote.innerText = result.content;
        author.innerText = result.author;
        btn.innerText = "New Quote"
    btn.classList.remove("loadQuote");

    })
}

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerText);
    alert("Text copied")
});

vol.addEventListener("click", ()=>{
    if(!btn.classList.contains("loadQuote")){
        let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
        speechSynthesis.speak(utterance);
        console.log(utterance);
        setInterval(()=>{
            !synth.speaking ? vol.classList.remove("active") : vol.classList.add("active");
        }, 10);
    }
});

linkedin.addEventListener("click", ()=>{
    let linkedinUrl = `https://linkedin.com/feed/?trk=${quote.innerText}`;
    window.open(linkedinUrl, "_blank");
    // https://www.linkedin.com/feed/?trk=404_page
});











btn.addEventListener("click", newQuote);
