//XMLHttpRequest 

function reqListemer (){
    console.log(this.reponseText);
}


let req = new XMLHttpRequest();
req.onload = reqListemer;