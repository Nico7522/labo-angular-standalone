import { FormGroup } from '@angular/forms';

export function hasErrorAndTouched(
  form: FormGroup,
  input: string,
  valiator: string
): boolean | undefined {
  return (
    form.get(input)?.hasError(valiator) &&
    (form.get(input)?.touched || form.get(input)?.dirty)
  );
}
