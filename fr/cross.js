function getXMLHttpRequest(){
  if(window.XMLHttpRequest){
    return new window.XMLHttpRequest();
  }else{
    try{
      return new ActiveObject("MSXML2.XMLHTTP.6.0");
    }
    catch(ex){
      try{
        return new ActiveObject("MSXML2.XMLHTTP.3.0");
      }
      catch(e){
        return null;
      }
    }
  }
}

