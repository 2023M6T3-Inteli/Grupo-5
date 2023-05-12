import { IsString, IsNumber } from 'class-validator';
////////////////////////////////////////////////////////////////////////////////

export class CreateUserDto {
  @IsString()
  name: string;
  @IsNumber()
  points: number;
  @IsString()
  description: String;
  @IsString({ each: true })
  interests: String[];
  @IsString({ each: true })
  projects: String[];
  @IsString({ each: true })
  publications: String[];
}
