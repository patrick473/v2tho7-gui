interface BusinessRuleType {
 name: string;
 nameCode: string;
 explanation: string;
 example: string;
 constraintPossible: boolean;
 possibleOperators: Array<{name: string; action: string}>;
 parameters: Array<{parameter: string; datatype: string}>;
 category: {name: string};
}
