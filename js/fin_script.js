    function myFunction(){
      let x = document.getElementById("Fin_form");
      let text = "";
      let i;
      for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
      }
      let input = Number(text);
      document.getElementById("res").innerHTML = input;
      const numbers = []
      numbers.push("нуль","один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять","десять","одинадцять","дванадцять",
        "тринадцять","чотирнадцять","п'ятнадцять","шістнадцять","сімнадцять","вісімнадцять","дев'ятнадцять"
      );
      const desnum = ["двадцять", "тридцять","сорок", "п'ятдесят","шістдесят","сімдесят","вісімдесят","дев'яносто"];
      text="";
      if(input>=20){
      let des=desnum[Math.floor(input/10)-2];
      //document.getElementById("res").innerHTML = Math.floor(input/10)-2;
      let num;
      if(input%10!=0){
      num=numbers[input%10];
      }else{
        num="";
      }
      if(des!=undefined){
        text+=des+" ";
      }
      text+=num;
    } else{
      text+=numbers[input];
    }
      document.getElementById("res").innerHTML = text;
    }
