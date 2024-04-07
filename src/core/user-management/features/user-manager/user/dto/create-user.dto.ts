import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Matches,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { PASSWORD_REGEX, USERNAME_REGEX } from 'src/shared/constants/regexs';
import { STATUS, USER_TYPE } from 'src/shared/types/enums';

export class CreateUserDTO {
  @IsEmail(
    {},
    {
      message: i18nValidationMessage<I18nTranslations>(
        'errors.Validation_Errors.INVALID_EMAIL',
      ),
    },
  )
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>(
      'errors.Validation_Errors.REQUIRED',
    ),
  })
  email: string;

  @Matches(PASSWORD_REGEX, {
    message: i18nValidationMessage<I18nTranslations>(
      'errors.Validation_Errors.PASSWORD_REGEX',
    ),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>(
      'errors.Validation_Errors.REQUIRED',
    ),
  })
  password: string;

  @Matches(USERNAME_REGEX, {
    message: i18nValidationMessage<I18nTranslations>(
      'errors.Validation_Errors.USERNAME_REGEX',
    ),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>(
      'errors.Validation_Errors.REQUIRED',
    ),
  })
  username: string;

  @IsEnum(STATUS)
  @IsOptional()
  status: STATUS;

  @IsEnum(USER_TYPE)
  @IsOptional()
  type: USER_TYPE;
}
