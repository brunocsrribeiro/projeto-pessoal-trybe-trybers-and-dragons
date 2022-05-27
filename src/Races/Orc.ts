import Race from './Race';

export default class Orc extends Race {
  private static _instanceCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 74,
  ) {
    super(name, dexterity);
    Orc._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._instanceCount;
  }
}
