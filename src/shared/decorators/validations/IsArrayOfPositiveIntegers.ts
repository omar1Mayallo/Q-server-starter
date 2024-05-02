import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
class IsArrayOfPositiveIntegersConstraint
  implements ValidatorConstraintInterface
{
  validate(propertyValue: any, _: ValidationArguments) {
    if (!Array.isArray(propertyValue)) {
      return false;
    }

    return propertyValue.every(
      (element) =>
        typeof element === 'number' && element > 0 && element % 1 === 0,
    );
  }

  defaultMessage(_: ValidationArguments) {
    return 'All elements in the array must be positive integers.';
  }
}

export function IsArrayOfPositiveIntegers(
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsArrayOfPositiveIntegersConstraint,
    });
  };
}
