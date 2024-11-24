function modFunction() {
    console.log('My modeule')
}
function exampleFunction() {
    console.log("This is a default export!");
}

module.exports = {
    modFunction,
    exampleFunction,
};