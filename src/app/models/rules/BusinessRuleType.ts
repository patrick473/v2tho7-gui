export default interface BusinessRuleType {
  id?: number;
 name: string;
 nameCode: string;
 explanation: string;
 example: string;
 constraintPossible: boolean;
 possibleOperators: Array<{name: string; action: string}>;
 parameters: Array<{parameter: string; datatype: string}>;
 category: {name: string, id: number};
}
