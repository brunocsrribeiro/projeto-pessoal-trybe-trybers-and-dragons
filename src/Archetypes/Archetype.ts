import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(
    private _name: string,
    special = 0,
    cost = 0,
  ) {
    this._special = special;
    this._cost = cost;
  }

  get name(): string { return this._name; }
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }

  abstract get energyType(): EnergyType;

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented'); 
  }
}