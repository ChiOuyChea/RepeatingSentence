function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
function clearOutput() {
    document.querySelector(".output").innerHTML = "";
  }
  
  function copyOutput(htmlElement) {
    if (!htmlElement) {
        return;
    } 
  
      let elementText = htmlElement.innerText;
  
      let inputElement = document.createElement('input');
      inputElement.setAttribute('value', elementText);
      document.body.appendChild(inputElement);
      inputElement.select();
      document.execCommand("copy");
      inputElement.parentNode.removeChild(inputElement);
  }
  
    document.querySelector('#copyOutput').onclick = function (){
    copyOutput(document.querySelector(".output"))
    {  
      if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        document.execCommand("copy");
        // This is the new line of code that shows the message
        alert("Copied to clipboard!");
      }
    }
  }


  function asciiToSentence(str, len) {
    let num = 0;
    for (let i = 0; i < len; i++) {
      num = num * 10 + (str[i] - '0');
      if (num >= 32 && num <= 122) {
        let ch = String.fromCharCode(num);
        document.querySelector(".output").innerHTML += ch;
        num = 0;
      }
    }
  }
  
  function translateSentence() {
      let str;    
      var sentence = document.getElementById("sentence").value;


      selectElement = document.querySelector('#ops');
      var ops = selectElement.value;
      
      if ( ops == "SentoNum")
      {
        document.querySelector(".output").innerHTML = "";
          for (const c of sentence) {
            document.querySelector(".output").innerHTML += (c.charCodeAt(0));
          }
      }
      else if ( ops == "NumtoSen")
      {
        document.querySelector(".output").innerHTML = "";
        str = document.getElementById("sentence").value;
        var len = str.length;
          asciiToSentence(str, len);
      }
      else
      {
        document.querySelector(".output").innerHTML = "";
          for (const c of sentence) {
            document.querySelector(".output").innerHTML += (c.charCodeAt(0));
          }
      }
    }
