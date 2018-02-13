function processData(data){
  //
}

function handler(){
  if(this.status == 200 &&
     this.resXML != null &&
     this.resXML.getElementById('test').textContent) {
     //success
  processData(this.resXML.getElementById('text').textContent
  );
    } else{
      //wrong
    }
}
var client = new XMLHttpRequest();
client.onload = handler;
client.open("GET", "unicorn.xml");
client.send();

//check msg
function log(message){
  var client = new XMLHttpRequest();
  client.open("POST", "/log");
  client.setRequestHeader("Content-Type",
"text/plain;charset=UTF-8");
  client.send(msg);
}

//server status
function fetchStatus(adress){
  var client = new XMLHttpRequest();
  client.onlod = function(){
    //EER
    returnStatus(this.status);
  }
  client.open("HEAD", address);
  client.send();
}




