function visitorCounter(){
  fetch("https://qbb6k4ig80.execute-api.us-east-2.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => { 
      document.getElementById("visitor-counter").innerHTML=body
    })

}