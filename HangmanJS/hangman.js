window.onload = oppstart;
function oppstart() {
    background();

    
    var randomWord = "";
    var randomWordCorr = [];
    
    document.getElementById("boxBtn").style.display = "none";
    document.getElementById("btnRest").style.display = "none";
    document.getElementById("tryAgain").onclick = restart;
    
    document.getElementById("btnEasy").onclick = easy;
    document.getElementById("btnMedium").onclick = medium;
    document.getElementById("btnHard").onclick = hard;
    
function easy() {
    var words = ["eple", "drue", "kiwi", "tomat", "løk", "guava"];
    document.getElementById("btnEasy").disabled = true;
    document.getElementById("btnMedium").disabled = true;
    document.getElementById("btnHard").disabled = true;
    document.getElementById("boxBtn").style.display = "block";
    findRandomWord(words)
}
function medium() {
    var words = ["brokkoli", "rosenkål", "squash", "søtpotet", "paprika", "spinat", "rønnkål", "avokado", "jordbær", "appelsin", "vannmelon", "papaya", "granateple", "Kiwano", "bønner", "potet", "fersken", "aprikos"];
    document.getElementById("btnEasy").disabled = true;
    document.getElementById("btnMedium").disabled = true;
    document.getElementById("btnHard").disabled = true;
    document.getElementById("boxBtn").style.display = "block";
    findRandomWord(words)
}
function hard() {
    var words = ["aubergine", "isbergsalat", "grapefrukt", "gulrøtter", "pitahaya", "cantaloupemelon", "honningmelon", "passjonsfrukt"];
    document.getElementById("btnEasy").disabled = true;
    document.getElementById("btnMedium").disabled = true;
    document.getElementById("btnHard").disabled = true;
    document.getElementById("boxBtn").style.display = "block";
    findRandomWord(words)
}

function findRandomWord (words) {       //Find random word
    var random = words[ Math.floor((Math.random() * words.length))];   
    randomWord = random;
    randowmWcorr(random)
}

function randowmWcorr(word) {
    for(var f = 0; f < word.length; f++)  {
        randomWordCorr.push(false);
    }
    answer(randomWord, randomWordCorr);  //Skriver ut "-", antall tegn ordet er.
}
    
    //buttons
    document.getElementById("btnA").onclick = btnA;
    document.getElementById("btnB").onclick = btnB;
    document.getElementById("btnC").onclick = btnC;
    document.getElementById("btnD").onclick = btnD;
    document.getElementById("btnE").onclick = btnE;
    document.getElementById("btnF").onclick = btnF;
    document.getElementById("btnG").onclick = btnG;
    document.getElementById("btnH").onclick = btnH;
    document.getElementById("btnI").onclick = btnI;
    document.getElementById("btnJ").onclick = btnJ;
    document.getElementById("btnK").onclick = btnK;
    document.getElementById("btnL").onclick = btnL;
    document.getElementById("btnM").onclick = btnM;
    document.getElementById("btnN").onclick = btnN;
    document.getElementById("btnO").onclick = btnO;
    document.getElementById("btnP").onclick = btnP;
    document.getElementById("btnQ").onclick = btnQ;
    document.getElementById("btnR").onclick = btnR;
    document.getElementById("btnS").onclick = btnS;
    document.getElementById("btnT").onclick = btnT;
    document.getElementById("btnU").onclick = btnU;
    document.getElementById("btnV").onclick = btnV;
    document.getElementById("btnW").onclick = btnW;
    document.getElementById("btnX").onclick = btnX;
    document.getElementById("btnY").onclick = btnY;
    document.getElementById("btnZ").onclick = btnZ;
    document.getElementById("btnAE").onclick = btnAE;
    document.getElementById("btnOO").onclick = btnOO;
    document.getElementById("btnAA").onclick = btnAA;
        
function btnA() { 
    document.getElementById("btnA").disabled = true;
    find("a")   }
function btnB() {
    document.getElementById("btnB").disabled = true;
    find("b")   }    
function btnC() {
    document.getElementById("btnC").disabled = true;
    find("c")   }    
function btnD() {
    document.getElementById("btnD").disabled = true;
    find("d")   }    
function btnE() {
    document.getElementById("btnE").disabled = true;
    find("e")   }
function btnF() {
    document.getElementById("btnF").disabled = true;
    find("f")   }    
function btnG() {
    document.getElementById("btnG").disabled = true;
    find("g")   }    
function btnH() {
    document.getElementById("btnH").disabled = true;
    find("h")   }    
function btnI() {
    document.getElementById("btnI").disabled = true;
    find("i")   }    
function btnJ() {
    document.getElementById("btnJ").disabled = true;
    find("j")   }    
function btnK() {
    document.getElementById("btnK").disabled = true;
    find("k")   }    
function btnL() {
    document.getElementById("btnL").disabled = true;
    find("l")   }    
function btnM() {
    document.getElementById("btnM").disabled = true;
    find("m")   }    
function btnN() {
    document.getElementById("btnN").disabled = true;
    find("n")   }    
function btnO() {
    document.getElementById("btnO").disabled = true;
    find("o")   }    
function btnP() {
    document.getElementById("btnP").disabled = true;
    find("p")   }    
function btnQ() {
    document.getElementById("btnQ").disabled = true;
    find("q")   }    
function btnR() {
    document.getElementById("btnR").disabled = true;
    find("r")   }    
function btnS() {
    document.getElementById("btnS").disabled = true;
    find("s")   }    
function btnT() {
    document.getElementById("btnT").disabled = true;
    find("t")   }    
function btnU() {
    document.getElementById("btnU").disabled = true;
    find("u")   }    
function btnV() {
    document.getElementById("btnV").disabled = true;
    find("v")   }    
function btnW() {
    document.getElementById("btnW").disabled = true;
    find("w")   }    
function btnX() {
    document.getElementById("btnX").disabled = true;
    find("x")   }    
function btnY() {
    document.getElementById("btnY").disabled = true;
    find("y")   }    
function btnZ() {
    document.getElementById("btnZ").disabled = true;
    find("z")   }    
function btnAE() {
    document.getElementById("btnAE").disabled = true;
    find("æ")    }    
function btnOO() {
    document.getElementById("btnOO").disabled = true;
    find("ø")    }    
function btnAA() {
    document.getElementById("btnAA").disabled = true;
    find("å")    }    
    
function find(input) {    
    document.getElementById("letter").innerHTML += input + ", ";
    var corr = [];
        for (var j = 0; j < randomWord.length; j++)    {
            
                if  (input == randomWord.charAt(j)) {
                    corr.push(true);
                }
                else {
                    corr.push(false);
                }
            }
        //Skriver verdiene true false i riktig rekkefølge.
        for (var g = 0; g < randomWord.length; g++) {
            if (randomWordCorr[g] == true || corr[g] == true)   {
                randomWordCorr.splice(g, 1, true);
            }
            else    {
                randomWordCorr.splice(g, 1, false);
            }
        }
        
        var m = 0;
        for(var h = 0; h < randomWord.length; h++)  {
            if(corr[h] == true)  {
                m++
            }
        }
        if (m < 1)  {
            counter();
            corr = [];
        }
    answer(randomWord, randomWordCorr)
    finish(randomWord, randomWordCorr)
}
    
function finish(randomWord, randomWordCorr)   {
    var trueCount = 0;
    var falseCount = 0;
    for(var s = 0; s < randomWord.length; s++)  {
        if(randomWordCorr[s] == true)  {
            trueCount++
        }
        if(randomWordCorr[s] == false)  {
            falseCount++
        }
    }
    if (trueCount == randomWord.length) {  
        won();
    }
}

function answer(randomWord, randomWordCorr) {
    document.getElementById("answer").innerHTML = "";
    for (var w = 0; w < randomWord.length; w++) {
        if(randomWordCorr[w] == true)    {
            document.getElementById("answer").innerHTML += randomWord.charAt(w);
        }
        else    {
            document.getElementById("answer").innerHTML += "-";
        }
    }
    
}

    var failCount = 0;
    function counter()  {
        failCount++;
        if(failCount == 1){
            base();
        }        
        if(failCount == 2){
            head();
        }
        if(failCount == 3){
            body();
        }
        if(failCount == 4){
            rhand();
        }
        if(failCount == 5){
            lhand();
        }
        if(failCount == 6){
            rleg();
        }
        if(failCount == 7){
            lleg();
        }   
        if(failCount >= 7){
            lose();
        }
    }
}

    //Canvas
function background()   {
    var back = document.getElementById("tegneflate").getContext("2d");  
    back.beginPath();
    back.fillStyle = "#84a4fc";
    back.fillRect(0, 0, 700, 500);
    back.closePath();
        
    back.beginPath();
    back.fillStyle = "#00ff1d";
    back.fillRect(0, 450, 700, 50);
    back.closePath();
        
    var img = document.getElementById("sun");
    back.drawImage(img, 500, 0, 200, 200);
}
    
    
    
function base()   {    
    var base = document.getElementById("tegneflate").getContext("2d");
    base.strokeStyle = "black";
    base.lineWidth = 5;

    base.beginPath();
    base.moveTo(50, 450);
    base.lineTo(250, 450);
    base.moveTo(150, 450);
    base.lineTo(150, 50);
    base.lineTo(353, 50);
    base.lineTo(353, 100);
    base.lineTo(353, 50);
    base.lineTo(150, 50);
    base.closePath();
    base.stroke();
}
    
function head() {
    var head = document.getElementById("tegneflate").getContext("2d");
        //Laster bilde fra HTML, fungerer, men ikke optimalt.
    var img = document.getElementById("asian");
    head.drawImage(img, 275, 70, 153, 184);
}
        //Laster bilde filen med JS, men skrives ut når hele koden er ferdig!
        //Prøvd andre alt, men bare når den henter elem fra html funker.
    //Tegning
function body() {
    var body = document.getElementById("tegneflate").getContext("2d");
    body.strokeStyle = "black";
    body.lineWidth = 4;
        
    body.beginPath();
    body.moveTo(350, 210);
    body.lineTo(350, 320);
    body.closePath();
    body.stroke();
}

function rhand()    {
    var rhand = document.getElementById("tegneflate").getContext("2d");
    rhand.strokeStyle = "black";
    rhand.lineWidth = 4;
    
    rhand.beginPath();
    rhand.moveTo(350, 230);
    rhand.lineTo(430, 290);
    rhand.closePath();
    rhand.stroke();
}
function lhand()    {
    var lhand = document.getElementById("tegneflate").getContext("2d");
    lhand.strokeStyle = "black";
    lhand.lineWidth = 4;
    
    lhand.beginPath();
    lhand.moveTo(350, 230);
    lhand.lineTo(270, 290);
    lhand.closePath();
    lhand.stroke();
    
    var img = document.getElementById("sushi");
    lhand.drawImage(img, 245, 250, 52, 52);
}
function rleg() {
    var rleg = document.getElementById("tegneflate").getContext("2d");
    rleg.strokeStyle = "black";
    rleg.lineWidth = 4;

    rleg.beginPath();
    rleg.moveTo(350, 320)
    rleg.lineTo(420, 420);
    rleg.moveTo(350, 320);
    rleg.closePath();
    rleg.stroke();
}
function lleg() {
    var lleg = document.getElementById("tegneflate").getContext("2d");
    lleg.strokeStyle = "black";
    lleg.lineWidth = 4;
    
    lleg.beginPath();
    lleg.moveTo(350, 320)*
    lleg.lineTo(280, 420);
    lleg.closePath();
    lleg.stroke();
}	
    
function won()  {
    var tom = document.getElementById("tegneflate").getContext("2d");
    var img = document.getElementById("tomtumbs");
    tom.fillStyle = "rgba(0, 255, 49, 0.75)";
    tom.fillRect(0, 0, 700, 500);
    tom.drawImage(img, 00, 000, 800, 500);
    tom.font = "70px Arial black";
    tom.strokeText("Gratulerer",285,200);
    tom.strokeText("du vant",285,300);
    document.getElementById("btnRest").style.display = "block";
    document.getElementById("boxBtn").style.display = "none";  
    
    setInterval(function(){ confetti(); }, 400);
}
function lose() {
    var lose = document.getElementById("tegneflate").getContext("2d");
    var img = document.getElementById("head");
    lose.fillStyle = "rgba(255, 0, 0, 0.75)";
    lose.fillRect(0, 0, 700, 500);
    lose.drawImage(img, 300, 140, 350, 220);
    lose.font = "60px Arial";
    lose.strokeText("GAME",100,250);
    lose.strokeText("OVER",440,250);
    
    document.getElementById("btnRest").style.display = "block";
    document.getElementById("boxBtn").style.display = "none";    
}

function confetti(){
    var ctx = document.getElementById("tegneflate2").getContext("2d");
    var color = ["red", "ble", "yellow", "green", "pink", "orange", "white", "purplue"];
    for(var i = 0; i < 800; i++) {
        var randomA = Math.floor((Math.random() * 700));
        var randomB = Math.floor((Math.random() * 700));
        var randomX = Math.floor((Math.random() * 10));
        var randomY = Math.floor((Math.random() * 10));
        var randomcolor = color[Math.floor((Math.random() * color.length))];
    ctx.fillStyle = randomcolor;
    ctx.fillRect(randomA, randomB, randomX, randomY)
    setInterval(function(){ clear(); }, 2000);
    function clear(){
        ctx.clearRect(0, 0, 700, 500);
    }
    }
    
}
	
function restart()  {
    document.location.reload(true);
}