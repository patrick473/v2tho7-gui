export  interface BusinessRule {
  id?: number;
  name: string;
  applied: boolean;
  constraint: boolean;
  operator: number;
  bindings: Array<{key: string; value: string}>;
  type: number;
  table: number;
  insert: boolean;
  update: boolean;
  delete: boolean;
  error: string;
}

/*
 {
   "name": "br2",
   "applied": true,
   "constraint": false,
   "operator": 21,
   "bindings": [
       {
           "key": "column",
           "value": "testnumber"
       },
       {
           "key": "lowerrange",
           "value": "1"
       },
       {
           "key": "higherrange",
           "value": "5"
       }
   ],
   "type": 98,
   "table": 2,
   "insert": true,
   "update":true,
   "delete": true,
   "error": "errormessage must be between 1 and 10"
}
  */
