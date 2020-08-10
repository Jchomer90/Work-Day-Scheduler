var today = moment();
var currentHour = "";

// var nineAm = document.getElementById("9am");
// var tenAm = document.getElementById("10am");
// var elevenAm = document.getElementById("11am");
// var twelvePm = document.getElementById("12pm");
// var onePm = document.getElementById("1pm");
// var twoPm = document.getElementById("2pm");
// var threePm = document.getElementById("3pm");
// var fourPm = document.getElementById("4pm");
// var fivePm = document.getElementById("5pm");
          

today = today.format('dddd MMM DD, YYYY');
today = today.toString();
// console.log(today);
var displayDate = $("displayMoment");
$("#displayMoment").append(today);

currentHour = parseInt(moment().format('H'));
console.log(currentHour);

blockColor = [
    { name: "9am", value: 9 },
    { name: "10am", value: 10 },
    { name: "11am", value: 11 },
    { name: "12pm", value: 12},
    { name: "1pm", value: 13 },
    { name: "2pm", value: 14 },
    { name: "3pm", value: 15 },
    { name: "4pm", value: 16 },
    { name: "5pm", value: 17 },
];

function renderColor() {
    if (currentHour > blockColor[0].value) {
        document.getElementById("9").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[0].value){
        document.getElementById("9").style.backgroundColor = "red";
    }else {
        document.getElementById("9").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[1].value) {
        document.getElementById("10").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[1].value){
        document.getElementById("10").style.backgroundColor = "red";
    }else {
        document.getElementById("10").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[2].value) {
        document.getElementById("11").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[2].value){
        document.getElementById("11").style.backgroundColor = "red";
    }else {
        document.getElementById("11").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[3].value) {
        document.getElementById("12").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[3].value){
        document.getElementById("12").style.backgroundColor = "red";
    }else {
        document.getElementById("12").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[4].value) {
        document.getElementById("1").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[4].value){
        document.getElementById("1").style.backgroundColor = "red";
    }else {
        document.getElementById("1").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[5].value) {
        document.getElementById("2").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[5].value){
        document.getElementById("2").style.backgroundColor = "red";
    }else {
        document.getElementById("2").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[6].value) {
        document.getElementById("3").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[6].value){
        document.getElementById("3").style.backgroundColor = "red";
    }else {
        document.getElementById("3").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[7].value) {
        document.getElementById("4").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[7].value){
        document.getElementById("4").style.backgroundColor = "red";
    }else {
        document.getElementById("4").style.backgroundColor = "green";
    }

    if (currentHour > blockColor[8].value) {
        document.getElementById("5").style.backgroundColor = "grey";
    } else if (currentHour === blockColor[8].value){
        document.getElementById("5").style.backgroundColor = "red";
    }else {
        document.getElementById("5").style.backgroundColor = "green";
    }
}
 renderColor();