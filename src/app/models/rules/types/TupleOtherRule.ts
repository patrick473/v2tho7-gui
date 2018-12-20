import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class TupleOtherRule extends StrictDataConstraint {
  private _statement: string;
  private _otherColumn: string;

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
    statement: string,
    otherColumn: string
  ) {
    super(id, type, description, example, name, triggerEvents, constraintPossible, column, table);
    this._statement = statement;
    this._otherColumn = otherColumn;
  }

  public get statement(): string {
    return this._statement;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public set statement(value: string) {
    this._statement = value;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }
}
