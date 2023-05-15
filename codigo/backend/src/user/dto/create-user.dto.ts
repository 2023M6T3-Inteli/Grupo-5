import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsNumber()
  points: number;
  @IsString()
  description: string;
  @IsString({ each: true })
  interests: string[];
  @IsString({ each: true })
  projects: string[];
  @IsString({ each: true })
  publications: string[];
}
