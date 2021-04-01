// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll("span.like-glyph")


function like(e){
  const heartEvent = e.target
  mimicServerCall()
  .then(data => {
    alert(data)
     if(heartEvent.innerText === EMPTY_HEART){
        heartEvent.innerText = FULL_HEART
        heartEvent.classList.add("activated-heart")
     }else{
       heartEvent.innerText= EMPTY_HEART
       heartEvent.classList.remove("activated-heart")

     }
      
  })
  .catch((error)=>{
    alert(error)
    const errorModal = document.querySelector("div")
    errorModal.innerHTML = `<h2>${error}</h2>`
    errorModal.hidden = false
    setTimeout(()=>{errorModal.hidden = true}, 3000)
  })
}

for (const key of hearts){
  key.addEventListener("click", like)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
