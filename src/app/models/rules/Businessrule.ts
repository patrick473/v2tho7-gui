import ITriggerEvents from './interfaces/ITriggerEvents';

export default abstract class BusinessRule {
  private _type: string;
  private _description: string;
  private _example: string;
  private _name: string;
  private _triggerEvents: ITriggerEvents;



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

  public set name(name: string) {
    this._name = name;
  }
  public set type(type: string) {
    this._type = type;
  }

  public set description(description: string) {
    this._description = description;
  }

  public set example(example: string) {
    this._example = example;
  }

  public set triggerEvents(triggerEvents: ITriggerEvents) {
    this._triggerEvents = triggerEvents;
  }
}
