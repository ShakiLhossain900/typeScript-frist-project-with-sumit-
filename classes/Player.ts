export class Player {
  public name: string; //bahir theke access korte parbu na
  public age: number; //amara bahir theke change korte parbu
  public country: string; // amara modify korte parbu na only dekle dekte parbu

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  play() {
    console.log(
      `his name is ${this.name}. the current age  ${this.age} and he from  ${this.country}`
    );
  }
}
