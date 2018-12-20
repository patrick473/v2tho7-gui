import ITriggerEvents from './interfaces/ITriggerEvents';

export default abstract class BusinessRule {
  private _id: number;
  private _type: string;
  private _description: string;
  private _example: string;
  private _name: string;
  private _triggerEvents: ITriggerEvents;

  constructor(
    id: number,
    type: string,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents
  ) {
    this._id = id;
    this._type = type;
    this._description = description;
    this._example = example;
    this._name = name;
    this._triggerEvents = triggerEvents;
  }

  public get id(): number {
    return this._id;
  }
  public get type(): string {
    return this._type;
  }

  public get description(): string {
    return this._description;
  }

  public get example(): string {
    return this._example;
  }

  public get triggerEvents(): ITriggerEvents {
    return this._triggerEvents;
  }

  public get name(): string {
    return this._name;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set type(value: string) {
    this._type = value;
  }

  public set description(value: string) {
    this._description = value;
  }

  public set example(value: string) {
    this._example = value;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set triggerEvents(value: ITriggerEvents) {
    this._triggerEvents = value;
  }
}
