import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

async function exampleAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}

export class FormUtils {
  static namePattern = '^([a-zA-Z]+) ([a-zA-Z]+)$';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

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

  private static getTextError(control: AbstractControl | null) {
    if (!control || !control.errors) return null;

    for (const key of Object.keys(control.errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';

        case 'minlength':
          return `Debe ingresar mínimo ${control.errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Debe tener un valor mínimo de ${control.errors['min'].min}.`;

        case 'pattern':
          if (
            control.errors['pattern'].requiredPattern == FormUtils.namePattern
          )
            return 'El nombre y apellido ingresado no es valido.';
          else if (
            control.errors['pattern'].requiredPattern == FormUtils.emailPattern
          )
            return 'El correo electrónico ingresado no es valido.';
          else if (
            control.errors['pattern'].requiredPattern ==
            FormUtils.notOnlySpacesPattern
          )
            return 'El nombre de usuario ingresado no es valido.';
          return 'Error de patrón contra expresión regular';

        case 'emailTaken':
          return 'Ya existe una cuenta con el email ingresado.';

        case 'notStrider':
          return 'No se puede crear un usuario con el nombre "Strider"';

        default:
          return `Error de validación no controlado: ${key}`;
      }
    }

    return null;
  }

  static isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formGroup: AbstractControl) => {
      const fieldOneValue = formGroup.get(fieldOne)!.value;
      const fieldTwoValue = formGroup.get(fieldTwo)!.value;

      console.log(fieldOneValue.value);
      console.log(fieldTwoValue);

      if (fieldOneValue == fieldTwoValue) return null;
      else return { passwordsNotEqual: true };
    };
  }

  static async checkingServerResponse(control: AbstractControl) {
    await exampleAsyncFunction();

    const formValue = control.value;

    if (formValue == 'hola@mundo.com') {
      return {
        emailTaken: true,
      };
    }

    return null;
  }

  static notStrider(control: AbstractControl) {
    if (control.value == 'Strider') return { notStrider: true };
    return null;
  }
}
