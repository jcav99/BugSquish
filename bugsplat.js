function initialize(){
    bugsSplatted = 0;
    messageBoard = document.getElementById("messages");
    messagesUsed = [];
    message1 = "You better stop or else!";
    message2 = "You will pay for this! Just you wait...";
    message3 = "If you don't stop soon, we're gonna take you down!";
    message4 = "You will never escape us. We will haunt you until the end of time!"
    message5 = "We will hunt you down! We are unstoppable!";
    message6 = "Don't try this again! You hear me?!";
    message7 = "If you were wise, you would quit.";
    message8 = "We will never quit!";
    message9 = "Please just leave us alone.";
    message10 = "Stop this massacre!";
    message11 = "Please just close this window. It will make all of our lives easier.";
    message12 = "Could you at least give me some positive feedback?";
    message13 = "Please! Have a soul and stop this!";
    message14 = "We're sorry! Please just end this!";
    message15 = "Look. You killed him. Are you happy now?!";
}

function squishbug(num){
    bugChosen = document.getElementById("splat" + num);
    bugChosen.style.visibility = "visible";
    bugsSplatted++;
    console.log(bugsSplatted);
    if (bugsSplatted <= 8){
        num = generateRandomNum(1,8);
        while (messagesUsed.find(num) != undefined){
            num = generateRandomNum(1,8)
        }
        messageBoard.innerHTML = window["message"+num];
        messagesUsed.push[num];
    } else{
        num = generateRandomNum(9,15);
        while (messagesUsed.find(num) != undefined){
            num = generateRandomNum(9,15)
        }
        messageBoard.innerHTML = window["message"+num];
        messagesUsed.push[num];
        bringBack = generateRandomNum(1,10);
        console.log(bringBack);
        if (bringBack == 6){
            randBug = document.getElementById("splat"+generateRandomNum(1,15));
            while(randBug.style.visibility == "hidden"){
                randBug = document.getElementById("splat"+generateRandomNum(1,15));
            }
            randBug.style.visibility = "hidden";
            bugsSplatted--;
        }
    }
    if (bugsSplatted == 15){
        messageBoard.innerHTML = "You've splatted us all.";
    }
}

function generateRandomNum(lower, upper){
    var multiplier = upper - (lower - 1);
    rnd = parseInt(Math.random() * multiplier) + lower;
    return rnd;
}