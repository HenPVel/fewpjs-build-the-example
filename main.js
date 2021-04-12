// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorDiv = document.querySelector("#modal")

window.addEventListener('DOMContentLoaded', event => {
  errorDiv.hidden = true

  function heartChanger(event) {
    const aHeart = event.target
    console.log(aHeart)
    mimicServerCall(url="http://mimicServer.example.com", config={})
    .then(response => {
      if (response.ok && aHeart.textContent == EMPTY_HEART ) {
        aHeart.textContent = FULL_HEART
      } else if (response.ok && aHeart.textContent== FULL_HEART) {
        aHeart.textContent = EMPTY_HEART
      } else {
      throw new Error(`Your loss, my friend.`) }
    })
    .catch(error => {
      alert(error.message)
    })
    
     
  }
  
  const parentElmArticleList = document.querySelectorAll("article.media-post")
  
  
  
  for (i=0; i < parentElmArticleList.length; i++) {
    parentElmArticleList[i].addEventListener('click', heartChanger )
  }
}

)






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
