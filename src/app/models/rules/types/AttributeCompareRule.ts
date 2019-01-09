import StrictDataConstraint from '../StrictDataConstraint';
import ITriggerEvents from '../interfaces/ITriggerEvents';

export default class AttributeCompareRule extends StrictDataConstraint {
  private _comparisonType: string;
  private _value: string;

  constructor(
    id: number,
    description: string,
    example: string,
    name: string,
    triggerEvents: ITriggerEvents,
    errorMessage: string,
    constraintPossible: boolean,
    column: string,
    table: string,
    comparisonType: string,
    value: string
  ) {
    super(id, 'acmp', description, example, name, triggerEvents, errorMessage, constraintPossible, column, table);
    this._comparisonType = comparisonType;
    this._value = value;
  }

  public get comparisonType(): string {
    return this._comparisonType;
  }

  public get value(): string {
    return this._value;
  }

  public set comparisonType(value: string) {
    this._comparisonType = value;
  }

  public set value(value: string) {
    this._value = value;
  }
}
