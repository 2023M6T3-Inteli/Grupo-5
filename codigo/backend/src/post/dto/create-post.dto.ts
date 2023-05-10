import { IsString } from "class-validator";
////////////////////////////////////////////////////////////////////////////////

//Validações

export class CreatePostDto {
  @IsString()
  content: string;
  image: string;
  tags: string[]
}


