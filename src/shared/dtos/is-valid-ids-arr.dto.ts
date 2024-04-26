import { ArrayMinSize, IsArray, IsInt, IsOptional, Min } from 'class-validator';

export class IsValidArrayIdsDTO {
  @IsOptional()
  @IsArray({ message: 'Must be an array' })
  @ArrayMinSize(1, { message: 'At least one ID is required' })
  @IsInt({
    each: true,
    message: 'Each element in the array must be a valid integer',
  })
  @Min(1, {
    each: true,
    message: 'Each element in the array must be at least 0',
  })
  ids: number[];
}
