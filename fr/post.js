var xhr = getXMLHttpRequest();

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      assert('SENDTEST', 'ECHOTEST', xhr.responseText);
    }else{
      assert('Error', 200, xhr.status);
    }
  }
};

xhr.open("POST", "/echo/html/");
xhr.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
xhr.send("html=ECHOTEST");

