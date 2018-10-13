var targetNumber = "";
var wincount = 0;
var losscount = 0;
var totalscore = 0;

var targetNumber = Math.floor(Math.random() * 100) + 10;
console.log("Target number is " + targetNumber);

var arr = []
while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
console.log(arr);

$("#crystal1").click(function() {
console.log(arr[0]);
totalscore+=(arr[0]);
$( "#totalscorebox" ).html(totalscore);
console.log("Total score is " + totalscore);

if (totalscore === targetNumber) {
    wincount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#winsdiv" ).html("<P>Wins: </P>" + wincount);
}
if (totalscore > targetNumber) {
    losscount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#lossdiv" ).html("<P>Losses: </P>" + losscount);
}

});
$("#crystal2").click(function() {
console.log(arr[1]);
totalscore+=(arr[1]);
$( "#totalscorebox" ).html(totalscore);
console.log("Total score is " + totalscore);

if (totalscore === targetNumber) {
    wincount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#winsdiv" ).html("<P>Wins: </P>" + wincount);
}
if (totalscore > targetNumber) {
    losscount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#lossdiv" ).html("<P>Losses: </P>" + losscount);
}

});
$("#crystal3").click(function() {
console.log(arr[2]);
totalscore+=(arr[2]);
$( "#totalscorebox" ).html(totalscore);
console.log("Total score is " + totalscore);

if (totalscore === targetNumber) {
    wincount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#winsdiv" ).html("<P>Wins: </P>" + wincount);
}
if (totalscore > targetNumber) {
    losscount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#lossdiv" ).html("<P>Losses: </P>" + losscount);
}

});
$("#crystal4").click(function() {
console.log(arr[3]);
totalscore+=(arr[3]);
$( "#totalscorebox" ).html(totalscore);
console.log("Total score is " + totalscore);

if (totalscore === targetNumber) {
    wincount++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#winsdiv" ).html("<P>Wins: </P>" + wincount);
}
if (totalscore > targetNumber) {
    losscount ++;
    targetNumber = Math.floor(Math.random() * 100) + 10;
    console.log("New target number is " + targetNumber);
    arr = []
    while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*20) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    }
    console.log("New array is " + arr);
    totalscore = 0;
    $( "#targetnumdiv" ).html(targetNumber);
    $( "#totalscorebox" ).html(totalscore);
    $( "#lossdiv" ).html("<P>Losses: </P>" + losscount);
}

});
$( "#targetnumdiv" ).html(targetNumber);
$( "#winsdiv" ).html("<P>Wins: </P>" + wincount);
$( "#lossdiv" ).html("<P>Losses: </P>" + losscount);