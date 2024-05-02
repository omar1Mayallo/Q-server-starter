import { IsEnum, IsOptional } from 'class-validator';
import { CustomReqQueryDTO } from 'src/shared/modules/repository/types/custom-req-query.types';
import { STATUS, USER_TYPE } from 'src/shared/types/enums';

export class GetAllRolesDTO extends CustomReqQueryDTO {
  @IsEnum(USER_TYPE)
  @IsOptional()
  type: USER_TYPE;

  @IsEnum(STATUS)
  @IsOptional()
  status: STATUS;
}
