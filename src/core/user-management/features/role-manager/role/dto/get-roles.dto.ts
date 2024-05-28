import { IsOptional } from 'class-validator';
import { CustomReqQueryDTO } from 'src/shared/modules/repository/types/custom-req-query.types';

export class GetAllRolesDTO extends CustomReqQueryDTO {
  @IsOptional()
  status: string;

  @IsOptional()
  type: string;
}
