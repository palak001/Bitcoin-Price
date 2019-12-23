window.onload = function(){
  var price = document.querySelector("#price");
  var bttn = document.querySelector("#bttn");
  var heading = document.querySelector("#heading");
  var text = document.querySelector("#text");
  bttn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
      if(XHR.readyState == 4 && XHR.status == 200){
        price.innerText = JSON.parse(XHR.responseText).bpi.GBP.rate + ' GDP';
        heading.innerText = "Current Bitcoin Price : ";
        text.innerText = "Refresh Data"; 
        console.log(JSON.parse(XHR.responseText).bpi.GBP.rate)
      }
    }


    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
  })

}
