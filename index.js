var rock=document.getElementById('first')
var scissor=document.getElementById('second')
var paper=document.getElementById('third')





var userchoice="rock";
var userchoice ="scissor"
var userchoice = "paper"

rock.addEventListener('click',rock1)



function rock1(){
    var arr= ["rock","paper","scissor"]

let compchoice=arr[Math.floor(Math.random() * arr.length)];
// alert(compchoice)
    if(compchoice=="rock"){
        alert("computer chose "+compchoice +"  it's a tie")
    }

    else if(compchoice=="paper"){
        alert("computer chose "+compchoice +"  you lose")
    }
    else if(compchoice=="scissor"){
        alert("computer chose "+compchoice +"  you win")
    }
}

scissor.addEventListener('click',scissor1)

function scissor1(){
    var arr= ["rock","paper","scissor"]

    let compchoice=arr[Math.floor(Math.random() * arr.length)];
     console.log(compchoice)



if(compchoice=="scissor"){
    alert("computer chose "+compchoice +"  its a tie")
}

else if(compchoice=="paper"){
    alert("computer chose "+compchoice +"  you win")
}
else if(compchoice=="rock"){
    alert("computer chose "+compchoice +"  you lost")
}

}

paper.addEventListener('click',paper1)

function paper1(){
    var arr= ["rock","paper","scissor"]

    let compchoice=arr[Math.floor(Math.random() * arr.length)];
    // alert(compchoice)


if(compchoice=="paper"){
    alert("computer chose "+compchoice +"  its a tie")
}

else if(compchoice=="rock"){
    alert("computer chose "+compchoice + "  you win")
}
else if(compchoice=="scissor"){
    alert("computer chose "+compchoice + "  you lose")
}

}
