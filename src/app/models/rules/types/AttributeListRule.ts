import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class AttributeListRule extends StrictDataConstraint {
  private _list: string[];
  private _inList: boolean;

  constructor(
    id: number,
    type: string,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents,
    constraintPossible: boolean,
    column: string,
    table: string,

    list: string[],
    inList: boolean
  ) {
    super(id, type, description, example, name, triggerEvents, constraintPossible, column, table);
    this._list = list;
    this._inList = inList;
  }

  public get list(): string[] {
    return this._list;
  }

  public get inList(): boolean {
    return this._inList;
  }

  public set list(value: string[]) {
    this._list = value;
  }

  public set inList(value: boolean) {
    this._inList = value;
  }
}
