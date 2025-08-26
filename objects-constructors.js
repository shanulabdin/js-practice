class Car {
  constructor(brand, model){
    this.brand = brand,
    this.model = model
  }
  
  drive(){
    console.log(`Driving ${this.brand + ' ' + this.model}`)
  }
}

const car1 = new Car('Toyota', 'Corolla');
car1.drive();


class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
  describe(){
    return `The book "${this.title}" is written by ${this.author}`
  }
}
const book1 = new Book('Sapiens', 'Harari');
console.log(book1.describe());


class Student {
  constructor(name, score){
    this.name = name;
    this.score = score;
  }
  
  hasPassed(){
    return `${this.name} has ${this.score >= 50 ? 'Passed' : 'Failed'}`;
  }
}
const student1 = new Student('Shan', 49);
console.log(student1.hasPassed())