class Person {
    firstName;
    secondName;
    lastName;

    constructor(firstName, secondName, lastName) {
        this.firstName = firstName
        this.secondName = secondName
        this.lastName = lastName
    }

    fullName() {
        return `${this.firstName} ${this.secondName} ${this.lastName} `
    }
}


function task6() {

    harry = new Person('Harry', 'Charles', 'Wales')
    william = new Person('William', 'Arthur', 'Wales')

    console.log(harry.fullName())
    console.log(william.fullName())
}

task6()