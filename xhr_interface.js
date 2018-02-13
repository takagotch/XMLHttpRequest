[]
interface XMLHttpRequestEventTarget : EventTarget {
  attribute EventHandler onloadstart;
  attribute EventHandler onprogress;
  attribute EventHandler onabort;
  attribute EventHandler onload;
  attribute EvnetHandler ontimeout;
  attribute EventHandler onloadend;
}

[]
interface XMLHttpRequestUpload : XMLHttpRequestEventTarget {
};

enum XMLHttpRequestResponseType {
  "",
  "arraybuffer",
  "blob",
  "document",
  "json",
  "text",
};

[Constructor,
Exposed=(Window,DedicatedWorker,SharedWorker)]
intergace XMLHttpRequest : XMLHttpRequestEventTarget{
//event handler
  attribute EventHandler onreadystatechange;
//states
  const unsigned short UNSENT = 0;
  const unsigned short OPENED = 1;
  const unsigned short HEADERS_RECEIVED = 2;
  const unsigned short LOADING = 3;
  const unsigned short DONE = 4;
  readonly attribute unsigned short readyState;
//req
  void open(ByteString method, USVString url);
  void open(ByteString method, USVStirng url, boolean async, optional USVString? username = null, optional USVString? password = null);
  void setReqHeader(ByteString name, ByteString value);
	attribute unsigned long timeout;
	attribute boolean withCreadentials;
  [Sameobject] readonly attribute XMLHttpRequestUpload upload;
  void send();
  void abort();
//res
  readonly attribute USVString resURL;
  readonly attribute unsigned short status;
  readonly attribute ByteString statusText;
  ByteString? getResHeader(ByteString name);
  ByteString getAllResponseheaders();
  void overrideMimeType(DOMString mime);
    attribute XMLHttpReqResType resType;
  readonly attribute any res;
  readonly attribute USVString resText;
  [Exporsed=Window] readonly attribute Document? resXML;
};


//FormData
typedef(File or USVString) FormDataEntryValue;
[Constructor(optional HTLMFormElement foem),
  Exposed=(Window, Worker)]
interface FormData{
  void append(USVString name, USVString value);
  void append(USVString name, Blob blobValue, optional USVString filename);
  void delete(USVString name);
  FormDtaEntryValue? get(USVString name);
  sequence<FormDataEntryValue> getAll(USVString name);
  boolean has(USVString name);
  void set(USVString name);
  void set(USVString name, Blob blobValue, optional USVString filename);
  iterable<USVString, FormDataEntryValue>;
};


//ProgressEvent
[Constructor(DOMString type, optional ProgressEventInit eventInitDict),
  Exposed=(Winsow,DedicatedWorker, SharedWorker)]
interface ProgressEvent : Event{
  readonly attribute boolean lengthComputable;
  readonly attribute unsigned long long loaded;
  readonly attribute unsigned long long total;
}

