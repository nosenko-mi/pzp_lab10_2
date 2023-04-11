class Calculator {
    _a = 0;
    _b = 0;
    result = 0;

    constructor() { }

    read() {
        this._a = parseFloat(prompt('Enter first number'))
        this._b = parseFloat(prompt('Enter second number'))
        console.log(`read: a = ${this._a}; b = ${this._b}`)
        return this
    }

    sum() {
        this.result = this._a + this._b
        alert(this.result)
        console.log(`sum: ${this.result}`)
        return this
    }

    sub() {
        this.result = this._a - this._b
        alert(this.result)
        console.log(`sub: ${this.result}`)
        return this
    }

    mul() {
        this.result = this._a * this._b
        alert(this.result)
        console.log(`mul: ${this.result}`)
        return this
    }

    div() {
        this.result = this._a / this._b
        alert(this.result)
        console.log(`div: ${this.result}`)
        return this
    }
}


function task7() {
    let calc = new Calculator();
    calc.read().sum().sub().mul().read().div();
}


task7()