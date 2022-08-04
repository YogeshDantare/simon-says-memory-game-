var sequence=[];
var seqgen=[];
var userseq=[]; 
var y;
var d=document.getElementById("level-title").textContent;
var wrong = new Audio("sounds/wrong.mp3");
var a1= new Audio("sounds/green.mp3");
var a2= new Audio("sounds/red.mp3");
var a3= new Audio("sounds/yellow.mp3");
var a4= new Audio("sounds/blue.mp3");
var i = 0;
var j = 0;

function arraysAreIdentical(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
}


$(document).keypress(function(){
    if (document.getElementById("level-title").textContent==="Game Over , Press Any Key to Start"||document.getElementById("level-title").textContent==="Press Any Key to Start") {
        seqgen=[];
        seqgen.push(Math.floor((Math.random()*4) + 1));
        var c ;
        c= seqgen[0];
        $("."+c).addClass("pressed");
        setTimeout(function(){$("."+c).removeClass("pressed");}, 100);
        $("h1").text("LEVEL 1")
        if(c===1){
            a1.play();
        }
        if(c===2){
            a2.play();
        }
        if(c===3){
            a3.play();
        }
        if(c===4){
            a4.play();
        }
        console.log(seqgen);
        console.log(seqgen.length);
    }
    
})

$(".btn").click(function(event){
    console.log(event);
    var x = event.currentTarget;
    console.log(x.className);
    $(x).addClass("pressed");
    setTimeout(function(){$(x).removeClass("pressed");}, 100); 
    y=x.className;
    console.log(y);
    if(y === "btn green 1 pressed"){
            userseq.push(1);
            a1.play();
        }
    if(y === "btn red 2 pressed"){
            userseq.push(2);
            a2.play();
        }
    if(y === "btn yellow 3 pressed"){
            userseq.push(3);
            a3.play();
        }
    if(y === "btn blue 4 pressed"){
            userseq.push(4);
            a4.play();
        }
    console.log(userseq.length);

        
        if(userseq[j]==seqgen[j]){
            console.log("raam");
            console.log(userseq);
            if(j==seqgen.length-1){
               i++;
               console.log(i);
               console.log(j);
               seqgen.push(Math.floor((Math.random()*4) + 1));
               var c ;
               c= seqgen[i];
               setTimeout(function(){
               $("."+c).addClass("pressed");
               setTimeout(function(){$("."+c).removeClass("pressed");}, 100);
               $("h1").text("LEVEL "+(i+1));
               if(c===1){
                   a1.play();
               }
               if(c===2){
                   a2.play();
               }
               if(c===3){
                   a3.play();
               }
               if(c===4){
                   a4.play();
               }
               }, 500);
               
               
               console.log(seqgen);
               console.log(seqgen.length);
               userseq=[];
               console.log(userseq);
               j=0;
            }
            else{
                j++;
            }
        }
        else{
            var x = event.currentTarget;
            $(x).addClass("pressed");
            setTimeout(function(){$(x).removeClass("pressed");}, 100); 
            y=event.type;
            console.log(event)
            wrong.play();
            $("body").addClass("game-over");
            setTimeout(function(){$("body").removeClass("game-over");}, 100); 
            $("h1").text("Game Over , Press Any Key to Start");
            userseq=[];
            i=0;
            j=0;
        }
        
    
        
    
    
})






// $(document).keypress(function(event){
//      if(d==="Press a Key to Start" || d==="Game Over , Press Any Key to Start" )
//      {
//        console.log(event);
//        sequence=[]
//        seqgen=[]
//        console.log(sequence);
//        var i = 0;
//        while(sequence === seqgen) {
//            $("h1").text("LEVEL"+(i+1));
//            seqgen.push(seq);
//            $("div"+"."+seqgen[i]).addClass("pressed");
//            setTimeout(function(){$(x).removeClass("pressed");}, 100);
//            var au = "a"+seqgen[i];
//            au.play();
//            i++;
//        }
//      }
// })

// else if(d!="Press a Key to Start"){
//     if(x === "div#green.btn.green.1.pressed"){
//         userseq.push(1);
//     }
//     if(x === "div#green.btn.red.1.pressed"){
//         userseq.push(2);
//     }
//     if(x === "div#green.btn.yellow.1.pressed"){
//         userseq.push(3);
//     }
//     if(x === "div#green.btn.blue.1.pressed"){
//         userseq.push(4);
//     }
//     if(userseq === seqgen){
//         i++;
//         $("h1").text("LEVEL "+i+1);
//         seqgen.push(Math.floor((Math.random()*4) + 1));
//     }
//     else{

//     }
// }
// console.log(sequence);
// console.log(l);
// console.log(y)
    
 








// else if(l<=1){
    //     var x = event.currentTarget;
    //     $(x).addClass("pressed");
    //     setTimeout(function(){$(x).removeClass("pressed");}, 100); 
    //     y=x.className;
    //     console.log(y);
    //     if(y === "btn green 1 pressed"){
    //             userseq.push(1);
    //             a1.play();
    //         }
    //     if(y === "btn red 2 pressed"){
    //             userseq.push(2);
    //             a2.play();
    //         }
    //     if(y === "btn yellow 3 pressed"){
    //             userseq.push(3);
    //             a3.play();
    //         }
    //     if(y === "btn blue 4 pressed"){
    //             userseq.push(4);
    //             a4.play();
    //         } 
    // }






    // $(document).keypress(function(){

// })

// $(".btn").click(function(event){
//     var x = event.currentTarget;
//     $(x).addClass("pressed");
//     setTimeout(function(){$(x).removeClass("pressed");}, 100); 
//     y=event.type;
//     console.log(event)
//     if (y === "click") {
//         if (d==="Press a Key to Start") {
//             wrong.play();
//             $("body").addClass("game-over");
//             setTimeout(function(){$("body").removeClass("game-over");}, 100); 
//             $("h1").text("Game Over , Press Any Key to Start");
//         }
        
//     }

// }); 

