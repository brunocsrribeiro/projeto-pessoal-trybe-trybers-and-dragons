import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _playerOne: Character | Fighter,
    private _playerTwo: Character | Fighter,
  ) { super(_playerOne); }

  fight(): number {
    if (this._playerOne.lifePoints > 0
      && this._playerOne.strength > 0) {        
      this._playerOne.attack(this._playerTwo);
    }

    if (this._playerTwo.lifePoints > 0
      && this._playerTwo.strength > 0) {
      this._playerTwo.attack(this._playerOne);
    }

    return super.fight();
  }
}
