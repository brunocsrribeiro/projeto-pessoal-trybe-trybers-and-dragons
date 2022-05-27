import Race from './Race';

export default class Halfling extends Race {
  private static _instanceCount = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 60,
  ) {
    super(name, dexterity);
    Halfling._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._instanceCount;
  }
}
