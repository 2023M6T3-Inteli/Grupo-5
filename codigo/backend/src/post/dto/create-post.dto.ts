import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  @IsString()
  content: string;

  @IsString()
  role: string;

  @IsOptional()
  @IsNumber()
  likes: number;

  @IsString({ each: true })
  comments: string[];

  @IsOptional()
  @IsNumber()
  saves: number;

  @IsOptional()
  @IsString()
  imgURL: string;

  @IsString({ each: true })
  tags: string[];
}
