export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`his name is ${this.name}. the current age  ${this.age} and he from  ${this.country}`);
    }
}
