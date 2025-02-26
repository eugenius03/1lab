
    function count_words(){
      let x = document.getElementById("Red_form");
      let text = "";
      let i;
      for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
      }
      text = text.split(" ")
      document.getElementById("res").innerHTML = text.length;
    }