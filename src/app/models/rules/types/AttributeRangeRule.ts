import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class AttributeRangeRule extends StrictDataConstraint {
  private _rangeStart: number;
  private _rangeEnd: number;
  private _inRange: boolean;

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

    rangeStart: number,
    rangeEnd: number,
    inRange: boolean
  ) {
    super(id, type, description, example, name, triggerEvents, constraintPossible, column, table);
    this._rangeStart = rangeStart;
    this._rangeEnd = rangeEnd;
    this._inRange = inRange;
  }
  public get rangeStart(): number {
    return this._rangeStart;
  }

  public get rangeEnd(): number {
    return this._rangeEnd;
  }

  public get inRange(): boolean {
    return this._inRange;
  }

  public set rangeStart(value: number) {
    this._rangeStart = value;
  }

  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }

  public set inRange(value: boolean) {
    this._inRange = value;
  }
}
