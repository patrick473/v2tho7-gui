import { FormGroup } from '@angular/forms';

export function validateRange (group: FormGroup) {
  if (group.value.rangeStart > group.value.rangeEnd) {
    return {
      invalidrange: true
    };
  }
}
