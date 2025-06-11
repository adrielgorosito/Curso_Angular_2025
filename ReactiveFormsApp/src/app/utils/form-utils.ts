import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export class FormUtils {
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const control = form.controls[fieldName];

    if (!control || !control.errors) return null;

    return FormUtils.getTextError(control);
  }

  static isValidFieldInArray(formArray: FormArray, i: number) {
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  static getFieldErrorInArray(formArray: FormArray, i: number): string | null {
    const control = formArray.controls[i];

    if (!control.errors) return null;

    return FormUtils.getTextError(control);
  }

  static getTextError(control: AbstractControl | null) {
    if (!control || !control.errors) return null;

    for (const key of Object.keys(control.errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Debe ingresar mínimo ${control.errors['minlength'].requiredLength} caracteres`;

        case 'min':
          return `Debe tener un valor mínimo de ${control.errors['min'].min}`;
      }
    }

    return null;
  }
}
