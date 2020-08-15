function result()
{
    var marks=0;
    var correct=document.getElementById("1b")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans1").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans1").innerHTML="wrong"
       //alert("wrong");
    }
    var correct=document.getElementById("2c")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans2").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans2").innerHTML="wrong"
       //alert("wrong");
    }

    var correct=document.getElementById("3a")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans3").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans3").innerHTML="wrong"
       //alert("wrong");
    }

    var correct=document.getElementById("4b")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans4").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans4").innerHTML="wrong"
       //alert("wrong");
    }
       var correct=document.getElementById("5a")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans5").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans5").innerHTML="wrong"
       //alert("wrong");
    }

    var correct=document.getElementById("6a")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans6").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans6").innerHTML="wrong"
       //alert("wrong");
    }

    var correct=document.getElementById("7b")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans7").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans7").innerHTML="wrong"
       //alert("wrong");
    }
    var correct=document.getElementById("8c")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans8").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans8").innerHTML="wrong"
       //alert("wrong");
    }
    var correct=document.getElementById("9c")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans9").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans9").innerHTML="wrong"
       //alert("wrong");
    }
    var correct=document.getElementById("10a")
    if(correct.checked==true)
    {
        marks++
        document.getElementById("ans10").innerHTML= "correct"
       //alert("Correct")
    }
    else{
        document.getElementById("ans10").innerHTML="wrong"
       //alert("wrong");
    }

    document.getElementById("show").innerHTML="Total marks = " +marks
   
    
}

