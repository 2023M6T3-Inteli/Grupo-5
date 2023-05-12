import { IsString } from "class-validator";
////////////////////////////////////////////////////////////////////////////////

//Validações

export class CreateProjectDto {
  @IsString()
  name: string;
  @IsString({each: true})
  tags: string[];
}