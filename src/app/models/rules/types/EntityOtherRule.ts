import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class EntityOtherRule extends StrictDataConstraint {
  private _statement: string;
  private _otherColumn: string;
  private _otherTable: string;

  constructor(
    id: number,
    type: string,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents,
    errorMessage: string,
    constraintPossible: boolean,
    column: string,
    table: string,

    statement: string,
    otherColumn: string,
    otherTable: string
  ) {
    super(id, type, description, example, name, triggerEvents, errorMessage, constraintPossible, column, table);
    this._statement = statement;
    this._otherColumn = otherColumn;
    this._otherTable = otherTable;
  }

  public get statement(): string {
    return this._statement;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public get otherTable(): string {
    return this._otherTable;
  }

  public set statement(value: string) {
    this._statement = value;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }

  public set otherTable(value: string) {
    this._otherTable = value;
  }
}
