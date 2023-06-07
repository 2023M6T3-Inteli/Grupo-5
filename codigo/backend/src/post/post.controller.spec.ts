/** nestjs */
import { Test } from "@nestjs/testing";

/** controllers */
import { PostController } from "./post.controller";

/** providers */
import { PostService } from "./post.service";
import { QueryRunnerFactory } from "../commom/queryRunner/query-runner.factory";

/** dependencies */
import { Post } from "./entities/post.entity";
import { AuthGuard } from "../user/guards/auth.guard";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../user/entities/user.entity";
import { HttpService } from "@nestjs/axios";
////////////////////////////////////////////////////////////////////////////////

export interface PassportRequest extends Request {
  user?: User;
}

// global test variables
let controller: PostController;

// mock data
const mockPost: Partial<Post> = {
  id: 1,
};

const mockUser: PassportRequest = {
  user: {
    userIdLegacy: 1,
    email: "test",
  },
} as unknown as PassportRequest;

/* setup */
beforeAll(async () => {
  const mockPostService: Partial<PostService> = {
    // mock implementation of create method
    create: jest.fn().mockReturnValue(mockPost),
    findAll: jest.fn().mockReturnValue([mockPost]),
    findOne: jest.fn().mockReturnValue(mockPost),
    remove: jest.fn()
  };

  const mockQueryRunnerFactory: Partial<QueryRunnerFactory> = {
    // mock implementation of create method
    connect: jest.fn(),
    startTransaction: jest.fn(),
    commitTransaction: jest.fn(),
    rollbackTransaction: jest.fn(),
    release: jest.fn(),
  };

  const mockAuthGuard: Partial<AuthGuard> = {
    canActivate: jest.fn(),
  };

  const mockJwtService: Partial<JwtService> = {
    sign: jest.fn(),
  };

  const mockUserService: Partial<UserService> = {
    findOne: jest.fn(),
    findByEmail: jest.fn().mockReturnValue(mockUser.user),
  };

  // initialize test module
  const moduleRef = await Test.createTestingModule({
    controllers: [PostController],
    providers: [
      {
        provide: PostService,
        useValue: mockPostService,
      },
      {
        provide: QueryRunnerFactory,
        useValue: mockQueryRunnerFactory,
      },
      {
        provide: AuthGuard,
        useValue: mockAuthGuard,
      },
      {
        provide: JwtService,
        useValue: mockJwtService,
      },
      {
        provide: UserService,
        useValue: mockUserService,
      },
    ],
  }).compile();

  controller = moduleRef.get<PostController>(PostController);
});

/** test suite */
describe("PostController", () => {
  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create method", () => {
    it("should return a post", async () => {
      const mockCreatePostDto: CreatePostDto = {
        content: "test",
        imgURL: "test",
        tags: ["test"],
      };

      const post = await controller.create(mockUser, mockCreatePostDto);

      expect(post).toEqual(mockPost);
    });
  });

  describe("findAll method", () => {
    it("should return an array of posts", async () => {
      const posts = await controller.findAll();

      expect(posts).toEqual([mockPost]);
    });
  });

  describe("findOne method", () => {
    it("should return a post", async () => {
      const post = await controller.findOne(1);

      expect(post).toEqual(mockPost);
    });
  });


describe("remove method", () => {
  it("should remove the post", async () => {
    const postId = 1;

    

    expect(await controller.delete(postId)).resolves;
  });
});


  // describe("delete method", () => {
  //   it("should delete a post", async () => {
  //     const postId = 1;

  //     jest.spyOn(PostService, "remove").mockResolvedValueOnce();

  //     await expect(controller.delete(postId)).resolves.not.toThrow();

  //     expect(PostService.remove).toHaveBeenCalledWith(postId);
  //   });
  // });
});
