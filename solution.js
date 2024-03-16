
// Task 1
// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const items of dairy) {
        console.log(items);
    }
}

// Call the function
logDairy();

// Task 2

// Step 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for(const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}

// Call the function
birdCan();


// Task 3
// Step 3
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }

    console.log("----");

    const birdPrototype = Object.getPrototypeOf(bird);
    for (const key in birdPrototype) {
        console.log(`${key}: ${birdPrototype[key]}`);
    }
}

// Call the function
animalCan();
