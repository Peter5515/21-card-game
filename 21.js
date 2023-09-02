var card=document.getElementById("cards")
var total=document.getElementById("total")
var message=document.getElementById("message")
var ctotal=document.getElementById("ctotal")
var result=document.getElementById("result")
 
var pcard=[]
var sum=0
var sum1=0
var win=false
var game=true
var sgame=false
var player=prompt("enter player name")
var amount=prompt("enter the amount")

function getrandom(){
    var ran=Math.floor(Math.random()*11+1)
    if(ran>10){
    return  10
} else if(ran==1){
    return 11
}else {
    return ran
}
}
function start(){
    sgame=true
    var num1=getrandom()
    var num2=getrandom()
    var num3=getrandom()
    var num4=getrandom()
    sum=num1+num2
    sum1=num3+num4

//    card.innerHTML="Cards : "
    pcard=[num1,num2]
    

//     for(var i=0;i<pcard.length;i++){
//         card.innerHTML += ` ${pcard[i]}  `  
//     }
// total.innerHTML =`total : ${sum}`
// if(sum<21){
//     message.innerHTML="Do you Want Another Card"
// }else if(sum==21){
//     message.innerHTML=" you won the game"
  
// }else if(sum>21){
//     message.innerHTML=" you Loss the game"
  
// }
render()
}
function render(){
    card.innerHTML="Cards : "
    for(var i=0;i<pcard.length;i++){
        card.innerHTML += ` ${pcard[i]}  `  
    }
total.innerHTML =`total : ${sum}`
ctotal.innerHTML=`Computer total :  ${sum1}`
if(sum<21){
    message.innerHTML="Do you Want Another Card"
}else if(sum==21 && sum1<21){

    amount*=2
    message.innerHTML=`Congrates ${player}. you won  RS ${amount}`
    win=true 
  
}else if(sum>21){
    message.innerHTML=`sorry ${player}, your Rs.${amount} is gaya`

  game=false

}
else{
    message.innerHTML=" game end "

}
}

function newcard(){
    if(win==false && game==true  && sgame==true){
var num=getrandom()
pcard.push(num)
sum+=num

while(sum1<17){
    var cnum=getrandom()
    sum1+=cnum
}


render()
if(sum>21){
winner()
}
}
}
function winner(){
    if(sgame==true){
    while(sum1<17 || sum1<sum1){
        var cnum=getrandom()
        sum1+=cnum
    }

    ctotal.innerHTML=`Computer total :  ${sum1}`
    if(sum>21 || sum<=21 &&  sum1>sum){
        message.innerHTML=`sorry ${player}, your Rs.${amount} is gaya`

    }else if(sum==sum1){
        message.innerHTML=" game Draw"

    }else{
        amount*=2
        message.innerHTML=`Congrates ${player}. you won  RS ${amount}`
    }
    game=false

}
}
