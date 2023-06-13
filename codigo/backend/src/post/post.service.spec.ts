import { Test } from "@nestjs/testing";
import { PostService } from "./post.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

describe("PostService", () => {
  let service: PostService;
  let repository: Repository<Post>;
  let userService: UserService;

  const mockPostRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
    remove: jest.fn(),
  };

  const mockUserService = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useValue: mockPostRepository,
        },
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    service = moduleRef.get<PostService>(PostService);
    repository = moduleRef.get<Repository<Post>>(getRepositoryToken(Post));
    userService = moduleRef.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("create", () => {
    it("deve criar um novo post", async () => {
      const createPostDto: CreatePostDto = {
        content: "Teste",
        imgURL: "imagem.jpg",
        tags: ["tag1", "tag2"],
      };

      const mockUser: User = {
        id: 1,
        name: "Nome do Usuário",
        email: "test@example.com",
        userIdLegacy: "12345",
        posts: Promise.resolve([]),
      };

      const mockPost: Post = {
        id: 1,
        content: createPostDto.content,
        imgURL: createPostDto.imgURL,
        tags: createPostDto.tags,
        likes: 0,
        saves: 0,
        comments: [],
        user: Promise.resolve(mockUser),
      };

      mockUserService.findOne.mockResolvedValue(mockUser);
      mockPostRepository.create.mockReturnValue(mockPost);
      mockPostRepository.save.mockResolvedValue(mockPost);

      const result = await service.create(createPostDto, "1");

      expect(mockUserService.findOne).toHaveBeenCalledWith("1");
      expect(mockPostRepository.create).toHaveBeenCalledWith(createPostDto);
      expect(mockPostRepository.save).toHaveBeenCalledWith(mockPost);
      expect(result).toEqual(mockPost);
    });
  });

  describe("findAll", () => {
    it("deve retornar uma lista de posts", async () => {
      const mockPosts: Post[] = [
        {
          id: 1,
          content: "Teste 1",
          imgURL: "imagem1.jpg",
          tags: ["tag1"],
          likes: 0,
          saves: 0,
          comments: [],
          user: null,
        },
        {
          id: 2,
          content: "Teste 2",
          imgURL: "imagem2.jpg",
          tags: ["tag2"],
          likes: 0,
          saves: 0,
          comments: [],
          user: null,
        },
      ];

      mockPostRepository.find.mockResolvedValue(mockPosts);

      const result = await service.findAll();

      expect(mockPostRepository.find).toHaveBeenCalled();
      expect(result).toEqual(mockPosts);
    });
  });

  describe("findOne", () => {
    it("deve retornar um post pelo ID", async () => {
      const postId = 1;
      const mockPost: Post = {
        id: postId,
        content: "Teste",
        imgURL: "imagem.jpg",
        tags: ["tag1", "tag2"],
        likes: 0,
        saves: 0,
        comments: [],
        user: null,
      };

      mockPostRepository.findOne.mockResolvedValue(mockPost);

      const result = await service.findOne(postId);

      expect(mockPostRepository.findOne).toHaveBeenCalledWith(postId);
      expect(result).toEqual(mockPost);
    });
  });

  describe("remove", () => {
    it("deve remover um post pelo ID", async () => {
      const postId = 1;

      mockPostRepository.remove.mockResolvedValue(undefined);

      await expect(service.remove(postId)).resolves.toBeUndefined();

      expect(mockPostRepository.remove).toHaveBeenCalledWith(postId);
    });
  });
});
