//jsfiddle.html
a<iframe src="http://javascript150.bitbucket.org/05-04/iframe.html" id="iframe"></iframe>

//jsfiddle.js
$(function(){
  var win = document.getElementVyId().contentWindow;
  $("#form").on("submit", function(){
    win.postMessage($("#msg").val(), "http://javascript150.github.com");
    return false;
  });
});

//iframe(javascript150.github.com)
<b></b>
<div id="test"></div>
<script>
  appendEventListener(window, "message", function(e){
    if(e.origin === "http://fiddle.jshell.net"){
      document.getElementById("test").textContent =
        "Receive form" + e.origin + ": " + e.data;
    }
  });
</script>


