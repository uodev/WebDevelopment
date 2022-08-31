const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

// const mango = new Fruit({
//   name: "Mango",
//   rating: 6,
//   review: "Decent fruit.",
// });
// mango.save();

// Person.updateOne({ name: "John" }, { favouriteFruit: mango }, (err) => {
//   if (err) console.log(err);
//   else console.log("Updated!");
// });

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// person.save();

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit",
// });

//fruit.save();
//person.save();

// Fruit.find((err, fruits) => {
//   if (err) console.log(err);
//   else {
//     mongoose.connection.close();

//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   }
// });

// Person.deleteMany({ name: /John/, age: { $gte: 18 } }, (err) => {
//   if (err) console.log(err);
//   else console.log("Deleted All");
// });

// Fruit.updateOne(
//   { _id: "62ee4cd5fa5559e679aa9f54" },
//   { name: "Peach" },
//   (err) => {
//     if (err) console.log(err);
//     else console.log("Updated!");
//   }
// );

// Fruit.deleteOne({ _id: "62ee4cd5fa5559e679aa9f54" }, (err) => {
//   if (err) console.log(err);
//   else console.log("Deleted");
// });
