var form1 = document.getElementById("one");
var form2 = document.getElementById("two");
var form3 = document.getElementById("three");
var form4 = document.getElementById("four");
var form5 = document.getElementById("five");
var render = document.getElementById("render");
var render2 = document.getElementById("render2");
var grade = document.getElementById("graderender");


function presscheck() {
    if(form1.value,form2.value, form3.value, form4.value, form5.value != "" ){
        var result = +form1.value + +form2.value + +form3.value + +form4.value + +form5.value;
        render.innerHTML = result;
    }else{
        alert("Enter your Marks");
    }
    form1.value="";
    form2.value="";
    form3.value="";
    form4.value="";
    form5.value="";
    if(form1.value > 100){
        alert("donot enter above 100");
    }
    if (form2.value  > 100){
        alert("donot enter above 100");

    }
     if (form3.value  > 100){
        alert("donot enter above 100");

    } 
    if (form4.value  > 100){
        alert("donot enter above 100");
        
    }
    



    var totalMarks =500;
    var setResult = (result * 100)/totalMarks;
    render2.innerHTML = setResult ;
    if (setResult >= 80) {
        grade.innerHTML = "Grade A+";
        
    }else if(setResult <= 80 && setResult>= 70){
        grade.innerHTML = "Grade B";
        
    }else if(setResult <= 70 && setResult >= 60){
        grade.innerHTML = "Grade B";
        
    }else if(setResult <= 60 && setResult >= 50){
        grade.innerHTML = "Grade C";
        
    }else{
        grade.innerHTML= "Fail";
        grade.innerHTML="";
    }
    
    
    
}