import { IsString, IsNumber } from "class-validator";
////////////////////////////////////////////////////////////////////////////////

//Validações

export class CreatePostDto {
  @IsString()
  user: string;
  @IsString()
  content: string;
  @IsString()
  role: string;
  @IsString({each: true})
  likes: string[];
  @IsString({each: true})
  comments: string[];
  @IsString({each: true})
  saves: string[];
  @IsString()
  imgURL: string;
  tags: string[]
}