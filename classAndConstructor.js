//
class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const Mazda = new Car('Mazda', 'Demoi', 2021, 'true')
console.log({Mazda});

class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const uber = new Rental ('Isuzu', 'Delux', "2023-9-28", "2024-9-28")
console.log(`the rental duration is ${uber.differenceInMilliseconds} days.`);



class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}
const sampleQuestion = new Question(
    "What is the capital of Kenya?",
    ["Kigali", "Kenya", "Berlin", "Uganda"],
);
console.log(sampleQuestion.checkAnswer("Kenya"));
console.log(sampleQuestion.checkAnswer("kenya"));
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}
const quiz = new Quiz();
const question1 = new Question("What is 2 + 2?", ["3", "4", "5"], "4");
const question2 = new Question("who is the author of Blossoms Of The Savannah", ["Noah", "Joseph", "Ogola"], "Trevor");
quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.submitAnswer("4");
quiz.submitAnswer("Joseph");
console.log("Score:", quiz.score);