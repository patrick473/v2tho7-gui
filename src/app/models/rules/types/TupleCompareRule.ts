import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class extends StrictDataConstraint {
  private _otherColumn: string;
  private _comparisonType: string;

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
    otherColumn: string,
    comparisonType: string
  ) {
    super(id, type, description, example, name, triggerEvents, errorMessage, constraintPossible, column, table);
    this._otherColumn = otherColumn;
    this._comparisonType = comparisonType;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public get comparisonType(): string {
    return this._comparisonType;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }

  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
}
