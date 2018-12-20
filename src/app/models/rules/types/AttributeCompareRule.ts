import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class AttributeCompareRule extends StrictDataConstraint {
  private _comparisonType: string;
  private _otherColumn: string;

  constructor(
    id: number,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents,
    constraintPossible: boolean,
    column: string,
    table: string,
    comparisonType: string,
    otherColumn: string
  ) {
    super(id, 'acmp', description, example, name, triggerEvents, constraintPossible, column, table);
    this._comparisonType = comparisonType;
    this._otherColumn = otherColumn;
  }

  public get comparisonType(): string {
    return this._comparisonType;
  }

  public get otherColumn(): string {
    return this._otherColumn;
  }

  public set comparisonType(value: string) {
    this._comparisonType = value;
  }

  public set otherColumn(value: string) {
    this._otherColumn = value;
  }
}
