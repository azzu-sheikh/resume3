function addNewWEField() {
 //   console.log("Adding New Field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder","Enter here" )

    let weob=document.getElementById("we");
    let weAddButtonob=document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonob);
}
function addNewAQField() {
    //   console.log("Adding New Field");
       let newNode = document.createElement("textarea");
       newNode.classList.add("form-control");
       newNode.classList.add("eqField");
       newNode.classList.add("mt-2");
       newNode.setAttribute("rows", 3)
       newNode.setAttribute("placeholder","Enter here" )
   
       let aqob=document.getElementById("aq");
       let aqAddButtonob=document.getElementById("aqAddButton");
   
       aqob.insertBefore(newNode, aqAddButtonob);
   }
//generating resume
function generate(){
   // console.log("Generating");
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML= nameField;

    document.getElementById("nameT2").innerHTML = nameField;
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
     //address
     document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
     //contact
     document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
     //contact
     document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
     //contact
     document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    
     //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

     //work experience
     let wes= document.getElementsByClassName("weField");
    let str ="";
    for(let e of wes){
        str += `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
    
    //academic qualification
    let aqs= document.getElementsByClassName("eqField");
    let str1 ="";
    for(let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
//printing resume
function Download(){
    window.print();
}