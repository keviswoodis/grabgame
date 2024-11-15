"use strict";

const words = ["apples", "bananas", "pineapple", "grapes", "blueberry", "strawberry", 
                "burritos", "batter", "racket", "helmet", "mitt", "goalpost",
                "plantaine", "pear", "peach", "kiwi", "cherry", "mango", "orange",
                "pants", "socks", "jacket", "tie", "vest", "skirt", "cardigan", 
                "jeans", "underwear", "shorts", "bra", "flannel", "coat", "cat",
                "dog", "ape", "monkey", "zebra", "gorilla", "giraffe", "elephant",
                "lizard", "iguana", "tiger", "lion", "bear", "eagle", "pig", "warthog",
                "meercat", "football", "baseball", "basketball", "soccer", "golf",
                "hockey", "polo", "bacon", "eggs", "toast", "sausage", "waffles", "pancakes",
                "cereal", "oatmeal", "omelette", "hashbrowns", "biscuit", "muffin", 
                "coffee", "tea", "beer", "soda", "cocktail", "martini", "water", "lemonade",
                "juice", "milk", "punch", "margarita", "mai tai", "ginger ale", "piano",
                "flute", "clarinet", "saxophone", "violin", "guitar", "viola", "oboe",
                "bass", "drums", "keyboard", "tuba", "trumpet", "fiddle", "cornet",
                "cello", "dumbells", "barbells", "weights", "treadmill", "elyptical", "trainer", 
                "sweat", "stretch", "lift", "curls", "deadlift", "squats", "bench",
                "arm", "leg", "hair", "head", "neck", "shoulders", "knees", "toes", "fingers",
                "hands", "butt", "ankles", "chin", "elbows", "eyes", "ears", "mouth", "nose",
                 "prices", "cashier", "checkout", "aisle", "sales", "discount", "store",
                 "customer", "register", "receipt", "bargain", "markdowns", "savings",
                 "wheels", "steering", "dashboard", "headlights", "trunk", "windshield", "wipers",
                 "hood", "bumper", "tires", "brakes", "engine", "gas tank", "cupholder",
                 "actor", "actress", "films", "script", "agent", "camera", "oscars", "producers",
                 "directors", "glamour", "casting", "stapler", "copier", "cubicle", "printer", 
                 "desk", "hole punch", "shredder", "computers", "fax", "paperclip", 
                 "carrot", "peas", "broccoli", "mushroom", "lettuce", "onion", "peppers", "beans",
                 "beet", "potato", "olives", "celery", "corn", "radish", "squash", "zucchini",
                 "computer", "smart tv", "smartphone", "laptop", "tablet", "e-reader", "video game",
                 "smart speaker", "stereo", "router", "mp3 player", "oven", "washer", "dryer",
                 "blender", "toaster", "microwave", "dish washer", "air fryer", "deep fryer", "juicer", 
                 "freezer", "fridge", "toaster oven", "coffee maker", "apple cider", "hot cocoa"];

const categories = [
    //0 index is the name of the category.
    ["Fruit","apples", "bananas", "pineapple", "grapes", "blueberry", "strawberry",
                "plantaine", "pear", "peach", "kiwi", "cherry", "mango", "orange"],

    ["Clothing", "pants", "socks", "jacket", "tie", "vest", "skirt", "cardigan", 
                  "jeans", "underwear", "shorts", "bra", "flannel", "coat", "polo"],

    ["Animals", "cat", "dog", "ape", "monkey", "zebra", "gorilla", "giraffe", "elephant",
     "lizard", "iguana", "tiger", "lion", "bear", "eagle", "pig", "warthog",
     "meercat"],

    ["Sports", "batter", "racket", "helmet", "mitt", "goalpost",
     "football", "baseball", "basketball", "soccer", "golf", "hockey", "polo"],

    ["Breakfast", "bacon", "eggs", "toast", "sausage", "waffles", "pancakes",
    "cereal", "oatmeal", "omelette", "hashbrowns", "biscuit", "muffin"],

    ["Beverages", "coffee", "tea", "beer", "soda", "cocktail", "martini", "water", "lemonade",
    "juice", "milk", "punch", "margarita", "mai tai", "ginger ale", "apple cider", "hot cocoa"],

    ["Music", "piano", "flute", "clarinet", "saxophone", 
    "violin", "guitar", "viola", "oboe","bass", "drums", "keyboard", "tuba", 
    "trumpet", "fiddle", "cornet", "cello"], 

    ["The Gym", "dumbells", "barbells", "weights", "treadmill", "elyptical", "trainer", 
        "sweat", "stretch", "lift", "curls", "deadlift", "squats", "bench"],
    
    ["The Body", "arm", "leg", "hair", "head", "neck", "shoulders", "knees", "toes", "fingers",
        "hands", "butt", "ankles", "chin", "elbows", "eyes", "ears", "mouth", "nose"], 

    ["Cars", "wheels", "steering", "dashboard", "headlights", "trunk", "windshield", "wipers",
        "hood", "bumper", "tires", "brakes", "engine", "gas tank", "cupholder"],

    ["Shopping", "cart", "prices", "cashier", "checkout", "aisle", "sales", "discount", "store",
        "customer", "register", "receipt", "bargain", "markdowns", "savings"],

    ["Hollywood", "actor", "actress", "films", "script", "agent", "camera", "oscars", "producers",
        "directors", "glamour", "casting" ],
    
    ["Veggies", "carrot", "peas", "broccoli", "mushroom", "lettuce", "onion", "peppers", "beans",
        "beet", "potato", "olives", "celery", "corn", "radish", "squash", "zucchini"],
    
    ["Office", "stapler", "copier", "cubicle", "printer", "desk", "hole punch", "shredder", "computer",
        "fax", "paperclip"],
    
    ["Appliances", "oven", "washer", "dryer", "blender", "toaster", "microwave", "dish washer",
        "air fryer", "deep fryer", "juicer", "freezer", "fridge", "toaster oven", "coffee maker"],

    ["Electronics", "computer", "smart tv", "smartphone", "laptop", "tablet", "e-reader", "video game",
        "smart speaker", "stereo", "router", "mp3 player"]
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function yay(){
    let yaywords = ["Super!", "Neat!", "Great!", "Wow!", "Sweet!", "Woah!", "Boom!",
                    "Dang!", "Pow!", "Sick!", "Gnarly!", "Kudos!", "Ding!", "Shazam",
                    "Job Well Done!", "And boom goes the dynamite", "Whaaaat! Okay!"];
    
    $("body").removeClass("flash");  // Remove class first to reset the animation
    setTimeout(() => $("body").addClass("flash"), 10);
    let thisYay = yaywords[getRandomInt(yaywords.length)];
    $("#category").empty().append(`<div id="celebration"><h1>${thisYay}</h1></div>`); // Clear previous messages and append new
    // setTimeout(() => $("#celebration").remove(), 4000);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let timer;
let added = [];
let usedCategories = [];

function populateBoard(){
    let validCat = false;
    $("#start").remove();
    
    
    $("#category").removeClass("flash");
    let timer = startTimer();
    added = [];
    let thisBoard = []; //store all the words on this board. 
    //pick a category.
    let category;
    let categoryName;
    while(!validCat) {
        let categoryIndex = getRandomInt(categories.length);
        category = categories[categoryIndex];
        categoryName = category[0];
            if(!usedCategories.includes(categoryName)){
             validCat = true;
                usedCategories.push(categoryName);

            }else{
                continue;
            }
    }

    //put our correct answers in the board array. 
    while (thisBoard.length < 10) {
        let addIndex = getRandomInt(category.length);
        if (addIndex != 0 && !thisBoard.includes(category[addIndex])) {
            thisBoard.push(category[addIndex]);
        }
    }

    //add incorrect answers to the rest of the board array.
    while (thisBoard.length < 30) {
        let wordIndex = getRandomInt(words.length);
        if (!thisBoard.includes(words[wordIndex]) && !category.includes(words[wordIndex])) {
            thisBoard.push(words[wordIndex]);
        }
    }
    shuffle(thisBoard);

    $("#category").empty().append(`<h2>${categoryName}</h2>`);
    $("#wordbox").empty();

    thisBoard.forEach((word, index) => {
        setTimeout(() => {
            if (!added.includes(word)) {
                added.push(word);
                let divAlt = "wordcard" + added.length;
                let wordCard = $(`<div class="wordcard" id="${divAlt}"><h2>${(word).toUpperCase()}</h2></div>`);
                wordCard.click(function() {
                    checkWord(word, category, divAlt);
                });
                $("#wordbox").append(wordCard);
                $("#"+`${divAlt}` + " h2").css({"margin": "20% 10%"});
                console.log(divAlt + " appended.");
            }
        }, index * 25);
    });

    console.log("Added words:");
    console.log(added);
}
let incorrect = 0;
let correct = 0; 
let score = 0;

function checkWord(word, category, alt){
    
    if (category.includes(word)) {
        correct++;
        $("#" + alt).css({"box-shadow": "none"}).off('click');
        $("#" + alt + " h2").css({"color":"white"});
        
        if (correct > 9) {
            correct = 0;
            incorrect= 0;
            score++;
            yay();
            $("#score").empty().append(`<h4>Cleared: ${score}</h4>`);
            
            setTimeout(()=>populateBoard(), 1000);
        }
    } else {
        $("#wordbox").removeClass("rock");
        setTimeout(() => $("#wordbox").addClass("rock"), 10);
        $("#" + alt).css("box-shadow", "none");
        $("#" + alt).css({"background-color":"red"}).off('click');
        $("#" + alt + " h2").css({"color":"white"});
        
        incorrect++;
        
        if(incorrect > 2){
            gameOver("TOO MANY MISTAKES!");
           

        }
        console.log("Incorrect");

    }
}

function startTimer() {
    if(timer){
        clearInterval(timer)
    }
    let timeLeft = 25;
    $(".game-area").css("border", "none");
    $("#timer").text(timeLeft);

    timer = setInterval(function() {
       
        timeLeft--;
        $("#timer").text(timeLeft);

        if (timeLeft <= 10){
            $("#category h2").addClass("flash").css({"border-radius": "25px"});
            $(".game-area").css({"border": "red 3px solid"}
            );
           
        }

        if (timeLeft <= 0) {
            gameOver("TIME'S UP!");
            $("#category").removeClass("flash").css({"background-color":"white"});
        }
    }, 1000);
}



function gameOver(message){
    clearInterval(timer);
            $("#wordbox").hide();
            $("#category").empty().append(`<h2>GAME OVER!! ${message}</h2>`);
            $(".game-area").hide();
}

$(document).ready(function() {
    $("#start").click(function() {
        populateBoard();
    });
});
