//req.method
open(/*String*/ method, /*String*/ url)
open(/*String*/ method, /*String*/ url, /*String*/ async, /*boolean*/ user)
open(/*String*/ method, /*String*/ url, /*String*/ async, /*boolean*/ user)
open(/*String*/ method, /*String*/ url, /*String*/ async, /*boolean*/ user, /*String*/ password)
setRequestHeader(/*String*/ header, /*String*/ value)
send()
send(/*Document*/ data)
send(/*String*/ data)
abort()

//res.property
status
statusText
responseText
responseXML

//res.method
getResponseHeader(/*String*/ header)
getAllResponseHeaders()

//event.method
onreadystatechange

//state [0-4]
readyState


