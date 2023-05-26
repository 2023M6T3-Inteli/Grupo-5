import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";
import { Repository } from "typeorm";
import { QueryRunnerFactory } from "../commom/queryRunner/query-runner.factory";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly repository: Repository<Post>,
    private readonly queryRunner: QueryRunnerFactory,
    private readonly userService: UserService
  ) {}

  async create(createPostDto: CreatePostDto, userId: string): Promise<Post> {
    const foundUser = await this.userService.findOne(userId);

    // create a query runner
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();

    // try to save post
    const post = this.repository.create(createPostDto);
    try {
      post.user = Promise.resolve(foundUser);
      await this.queryRunner.commitTransaction(post);
      return post;
    } catch (err) {
      // rollback changes made in case of error
      await this.queryRunner.rollbackTransaction();
      throw new Error("An error ocurred while creating the post.");
    } finally {
      // release queryRunner after transaction
      await this.queryRunner.release();
    }
  }

  async findAll(): Promise<Post[]> {
    return await this.repository.createQueryBuilder("post").getMany();
  }

  async findOne(id: number): Promise<Post | null> {
    // create queryBuilder with criteria
    const queryBuilder = this.repository
      .createQueryBuilder("post")
      .where("post.id = :id", { id })
      .leftJoinAndSelect("post.user", "user");
    // execute queryBuilder and return results
    return queryBuilder.getOne();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    // TODO: password update should be handled differently
    return "// TODO: implement update method";
  }

  remove(id: number) {
    return "// TODO: implement remove method";
  }
}
