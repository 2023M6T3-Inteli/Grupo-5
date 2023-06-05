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

    // try to save the post
    const post = this.repository.create(createPostDto);
    try {
      post.user = Promise.resolve(foundUser);
      await this.queryRunner.commitTransaction(post);
      return post;
    } catch (err) {
      // undo changes made in case of error
      await this.queryRunner.rollbackTransaction();
      throw new Error("Ocorreu um erro ao criar o post.");
    } finally {
      // release the query runner after the transaction
      await this.queryRunner.release();
    }
  }

  async findAll(): Promise<Post[]> {
    const queryBuilder = this.repository
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user");
    return await queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Post | null> {
    // create a query builder with criteria
    const queryBuilder = this.repository
      .createQueryBuilder("post")
      .where("post.id = :id", { id })
      .leftJoinAndSelect("post.user", "user");
    // run the query builder and return the results
    let user = (await queryBuilder.getOne()).user;
    // return queryBuilder.getOne();
    console.log(user);
    return queryBuilder.getOne();
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post | null> {
    // find the post to be updated
    const post = await this.repository.findOne(({ where: { id: id } }));

    if (!post) {
      throw new Error("O post não foi encontrado.");
    }

    // update post fields based on provided DTO
    if (updatePostDto.imgURL) {
      post.imgURL = updatePostDto.imgURL;
    }
    if (updatePostDto.content) {
      post.content = updatePostDto.content;
    }
    if (updatePostDto.tags) {
      post.tags = updatePostDto.tags;
    }

    // save changes to database
    await this.repository.save(post);

    return post;
  }

async remove(id: number): Promise<void> {
  const post = await this.repository.findOne(({ where: { id: id } }));

  if (!post) {
    throw new Error("O post não foi encontrado.");
  }

  await this.repository.remove(post);
}

}
