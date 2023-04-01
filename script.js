const count = document.getElementById("counter");
update();
function update(){
  fetch("https://api.countapi.xyz/update/examday.w3spaces.com/website/?amount=1")
  .then(res => res.json())
  .then(res => {
    count.innerHTML= res.value;
  });
}
console.log(document.getElementById("wel").value);
function welcome(){
  var name=document.getElementById("cname").value;
  console.log(name);
  document.getElementById("wel").innerHTML="Welcome \n"+name;
  document.getElementById("callout").style.display="none";
 document.getElementById("login").style.display="none";
}
    function dark(){
      document.getElementById("styling").href="dark.css";
    }
     function shape(){
      document.getElementById("c1").innerHTML= new Date().getDate();
  }
  function shape1(){
      document.getElementById("c2").innerHTML= new Date().getFullYear();
  }
  function shape2(){
      document.getElementById("c3").innerHTML= new Date().getMonth()+1;
  }
    function menu(){
    var select = document.getElementById('selectmenu');
      var text = select.options[select.selectedIndex].text;
      console.log(text); 
    if (text=="4-1 sem") {
      console.log("working");
      document.getElementById("sem").innerHTML="4-1";
      document.getElementById("d1").href="https://docs.google.com/document/d/1R4dYOgynXaQJ6DTEpjTNv78D7PPrQUaF6PhKosq4W6Y/edit?usp=sharing";
     document.getElementById("title").innerHTML="4-1 CSE(R15)|subjects";   
     document.getElementById("s1").innerHTML="MS";
     document.getElementById("s2").innerHTML = "DS";
     document.getElementById("s3").innerHTML = "GCC";
     document.getElementById("s4").innerHTML = "IS";
     document.getElementById("s5").innerHTML = "MAD";
     document.getElementById("s6").innerHTML = "SA";

     document.getElementById("s1").href = "ms.html";
      document.getElementById("s2").href = "ds.html";
      document.getElementById("s3").href = "gcc.html";
      document.getElementById("s4").ihref= "is.html";
      document.getElementById("s5").href = "mad.html";
      document.getElementById("s6").href = "sa.html";
    }
    else if(text=="3-2 sem") {
      console.log("else part");
         document.getElementById("sem").innerHTML = "3-2";
          document.getElementById("d1").href = "https://drive.google.com/file/d/1NoXPCo8aU4REEwn2dtY8rf6gjyN2w21m/view?usp=sharing";
    document.getElementById("title").innerHTML = "3-2 CSE(R15)|subjects";
    document.getElementById("s1").innerHTML = "WT";
      document.getElementById("s2").innerHTML = "DM & DW";
      document.getElementById("s3").innerHTML = "DAA";
      document.getElementById("s4").innerHTML = "AI";
      document.getElementById("s5").innerHTML = "CD";
      document.getElementById("s6").innerHTML = "DP";      

       document.getElementById("s1").href = "wt.html";
      document.getElementById("s2").href = "dm.html";
      document.getElementById("s3").href = "daa.html";
      document.getElementById("s4").ihref = "ai.html";
      document.getElementById("s5").href = "cd.html";
      document.getElementById("s6").href = "dp.html";
  }
  else if (text=="4-2 sem") {
      console.log("working");
      document.getElementById("sem").innerHTML="4-2";
      document.getElementById("d1").href="https://docs.google.com/document/d/1R4dYOgynXaQJ6DTEpjTNv78D7PPrQUaF6PhKosq4W6Y/edit?usp=sharing";
     document.getElementById("title").innerHTML="4-2 CSE(R15)|subjects";   
     document.getElementById("s1").innerHTML="DA";
     document.getElementById("s2").innerHTML = "CS";
     document.getElementById("s3").innerHTML="";
     document.getElementById("s4").innerHTML="";
     document.getElementById("s5").innerHTML="";
     document.getElementById("s6").innerHTML="";

     document.getElementById("s1").href = "da.html";
      document.getElementById("s2").href = "cs.html";
    }
 
    }