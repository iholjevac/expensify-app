console.log('utils.js is running');
export const square = (x) => {
    return x*x
};
export const add = (a,b) => a+b;

//const subtract = (a,b) => a - b;
export default (a,b) => a - b;
// export default subtract;

//export { square, add, subtract as default }