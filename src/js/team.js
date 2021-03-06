import Person from './person';

class Team {
  constructor(...args) {
    this.team = [...args];
  }

  *[Symbol.iterator]() {
    for (let value = 0; value < this.team.length; value++) {
      yield value; 
    };
  }
}

const bowman = new Person('Oleg', 'Bowman', 100, 10, 20, 10);
const daemon = new Person('Stas', 'Daemon', 100, 5, 40, 20);
const magician = new Person('Ivan', 'Magician', 100, 10, 15, 30);
const team = new Team(bowman, daemon, magician);
