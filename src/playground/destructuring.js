// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName); // Penguin, default = self published


const item = ['Coffee (hot)', '$2,00', '$2.50', '$2,75']

const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`)