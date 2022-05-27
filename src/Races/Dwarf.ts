import Race from './Race';

export default class Dwarf extends Race {
  private static _instanceCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 80,
  ) {
    super(name, dexterity);
    Dwarf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instanceCount;
  }
}
