
// 1. Consider the following code:

//console.log('BEFORE');

//setTimeout(function() {
    //console.log('INSIDE')
//}, 1000);

//console.log('AFTER');

// In what order with the words BEFORE, INSIDE, and AFTER be logged to the
// console?
//
// A: BEFORE, INSIDE, AFTER
// B: BEFORE, AFTER, INSIDE
// C: INSIDE, BEFORE, AFTER







// 2. Consider the following code:

//console.log('BEFORE');

//setTimeout(function() {
    //console.log('INSIDE')
//}, 0);

//console.log('AFTER');

// In what order with the words BEFORE, INSIDE, and AFTER be logged to the
// console?
//
// A: BEFORE, INSIDE, AFTER
// B: BEFORE, AFTER, INSIDE
// C: INSIDE, BEFORE, AFTER






// 3. Consider the following code:

//let number = 1;
//console.log(`BEFORE: ${number}`);

//setTimeout(function() {
    //number = 2;
    //console.log(`INSIDE A: ${number}`);
//}, 0);

//console.log(`AFTER: ${number}`);

//setTimeout(function() {
    //console.log(`INSIDE B: ${number}`);
//}, 2000);

// What will be printed to the console?
//
// A:
//
//      BEFORE: 1
//      AFTER: 1
//      INSIDE A: 2
//      INSIDE B: 2
//
// B:
//      BEFORE: 1
//      INSIDE A: 2
//      AFTER: 2
//      INSIDE B: 2
//
// C:   
//      INSIDE A: 2
//      BEFORE: 2
//      AFTER: 2
//      INSIDE B: 2









// 4. Consider the following code:

const writers = ['Toni', 'James', 'Waldo', 'Zora'];

const lookForWaldo = function(people, cb) {
    people.forEach(function(person, index) {
        if (person === 'Waldo') {
            return index;
        }
    });
}

const foundWaldo = function(index) {
    console.log(`Found Waldo at index ${index}`);
};

lookForWaldo(writers, foundWaldo);

// What will be printed to the console?
//
// A: undefined
// B: Found Waldo at index 2
// C: Found Waldo at index undefined
// D: Nothing will be printed to the console



