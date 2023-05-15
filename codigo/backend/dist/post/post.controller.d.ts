import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";
export declare class PostController {
    private posts;
    create(createPostDto: CreatePostDto): Post;
    findAll(): Post[];
    findOne(id: string): Post;
    update(id: string, updatePostDto: UpdatePostDto): Post;
    remove(id: string): void;
}
