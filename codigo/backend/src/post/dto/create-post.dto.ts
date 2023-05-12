import { IsString } from "class-validator";
////////////////////////////////////////////////////////////////////////////////

//Validações

export class CreatePostDto {
  @IsString()
  content: string;
  @IsString()
  image: string;
  @IsString({each: true})
  tags: string[]
}