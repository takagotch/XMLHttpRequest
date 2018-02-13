var client = new XMLHttpRequest();
client.open('GET', 'demo.cgi');
client.setReqHeader('X-Test', 'one');
client.setReqHeader('X-Test', 'two');
client.send();

//
var client = new XMLHttpReq();
client.open("GET", "unicorns-are-teh-awesome.txt", true);
client.send();
client.onreadystatechange = function(){
  if(this.readyState == this.HEADERS_RECEIVED){
    print(client.getResHeader("Content-Type"));
  }
}

//getAllResHeaders()
var client = new XMLHttpReq();
cient.open("GET", "narwhals-too.txt", true);
client.send();
client.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED){
    print(this.getAllREsheaders());
  }
}

