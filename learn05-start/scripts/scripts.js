const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Relaxing",
    image: "images/gold-dog.jpg",
    caption: "Sitting in the grass",
    altTag: "Gold dog in the grass."
};

const dog3 = {
    heading: "Snow Fight",
    image: "images/snow-dog.jpg",
    caption: "Fighting a snowman",
    altTag: "Little dog fighting."
};

const dog4 = {
    heading: "Love",
    image: "images/white-dogs.jpg",
    caption: "Two dogs loving each other",
    altTag: "White dogs loving each other."
};

function chooseDog(dog){
    if (dog == 1){
        loadMe(dog1, 1);
    } else if(dog == 2){
        loadMe(dog2, 2);
    } else if (dog == 3){
        loadMe(dog3, 3);
    } else if (dog == 4){
        loadMe(dog4, 4)
    }
}

function loadMe(dog, dogNum){
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}

