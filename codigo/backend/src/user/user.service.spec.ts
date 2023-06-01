import { Test } from "@nestjs/testing"
import { HttpService } from "@nestjs/axios";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { firstValueFrom } from "rxjs";
import { LoginDto } from "./dto/login.dto";
import { Post } from "src/post/entities/post.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

// general test variables
let userService: UserService;

// Mock data

// setup
beforeAll(async () => {
  const mockHttpService: Partial<HttpService> = {
    post: jest.fn(),
  };

  const mockRepository: Partial<Repository<User>> = {
    // create: jest.fn(),
    // save: jest.fn(),
    findOne: jest
      .fn()
      .mockResolvedValue(Promise.resolve({} as User)),
  };

  const moduleRef = await Test.createTestingModule({
    providers: [
      UserService,
      {
      provide: HttpService,
      useValue: mockHttpService
    },
  {
    provide: getRepositoryToken(User),
    useValue: mockRepository
  }]
  }).compile();

  userService = moduleRef.get<UserService>(UserService);
})


// Mock dos dados do usuário
// const mockUser: Partial<User> = {
//   id: 1,
//   userIdLegacy: "mockUserIdLegacy",
//   email: "mockEmail",
//   name: "mockName",
//   posts: Promise.resolve(<Post[]>[]),
// };



describe("UserService", () => {
  it("should be defined", () => {
    expect(userService).toBeDefined();
  })

  describe("login method", () => {
    it("should login a user", () => {
      // const mockUserLoginDto: LoginDto = {
      //   email: "test@example.com",
      //   password: 123456
      // }

      // const loginResponse = userService.login(mockUserLoginDto);
    })
  })

  describe("findOne method", () => {
    it("should find a user by id", async () => {
      const user = await userService.findOne("1");

      expect(user).toBeDefined();
    })
  })
});

  // beforeEach(() => {
  //   // Inicializando o UserService com os mocks
  //   userService = new UserService(
  //     mockHttpService as unknown as HttpService,
  //     mockRepository as unknown as Repository<User>
  //   );
  // });

  // afterEach(() => {
  //   // Limpando todos os mocks após cada teste
  //   jest.clearAllMocks();
  // });

  // describe("login", () => {
  //   it("should create a new user if it does not exist", async () => {
  //     // Mock da resposta do HttpService
  //     const mockResponse = {
  //       data: {
  //         user: {
  //           id: 1,
  //           email: "mockEmail",
  //           name: "mockName",
  //         },
  //         token: "mockToken",
  //       },
  //     };

  //     // Mock do findOne para retornar null, indicando que o usuário não existe
  //     mockRepository.findOne.mockResolvedValueOnce(null);

  //     // Mock do create para criar um novo usuário
  //     mockRepository.create.mockReturnValueOnce(mockUser);

  //     // Mock do save para retornar o usuário criado
  //     mockRepository.save.mockResolvedValueOnce(mockUser as User);

  //     // Mock do post do HttpService para retornar a resposta esperada
  //     mockHttpService.post.mockResolvedValueOnce(mockResponse);

  //     // Dados de login fictícios
  //     const loginDto: LoginDto = {
  //       email: "mockEmail@example.com",
  //       password: 123456,
  //     };

  //     // Chamar o método de login
  //     const resultPromise = userService.login(loginDto);
  //     const result = await firstValueFrom(resultPromise); // Aguardar a resolução do Observable

  //     // Verificar se o usuário foi criado e a resposta contém o token esperado
  //     expect(mockRepository.create).toHaveBeenCalledWith({
  //       userIdLegacy: mockResponse.data.user.id,
  //       email: mockResponse.data.user.email,
  //       name: mockResponse.data.user.name,
  //     });
  //     expect(mockRepository.save).toHaveBeenCalledWith(mockUser);
  //     expect(result.accessToken).toBe(mockResponse.data.token);
  //   });

  //   it("should not create a new user if it already exists", async () => {
  //     // Mock da resposta do HttpService
  //     const mockResponse = {
  //       data: {
  //         user: {
  //           id: 1,
  //           email: "mockEmail",
  //           name: "mockName",
  //         },
  //         token: "mockToken",
  //       },
  //     };

  //     // Mock do findOne para retornar o usuário existente
  //     mockRepository.findOne.mockResolvedValueOnce(mockUser as User);

  //     // Mock do post do HttpService para retornar a resposta esperada
  //     mockHttpService.post.mockResolvedValueOnce(mockResponse);

  //     // Dados de login fictícios
  //     const loginDto: LoginDto = {
  //       email: "mockEmail@example.com",
  //       password: 123456,
  //     };

  //     // Chamar o método de login
  //     const resultPromise = userService.login(loginDto);
  //     const result = await firstValueFrom(resultPromise); // Aguardar a resolução do Observable

  //     // Verificar se o usuário não foi criado e a resposta contém o token esperado
  //     expect(mockRepository.create).not.toHaveBeenCalled();
  //     expect(mockRepository.save).not.toHaveBeenCalled();
  //     expect(result.accessToken).toBe(mockResponse.data.token);
  //   });
  // });

  // describe("findOne", () => {
  //   it("should find a user by userIdLegacy", async () => {
  //     // Mock do findOne para retornar o usuário existente
  //     mockRepository.findOne.mockResolvedValueOnce(mockUser as User);

  //     // Chamar o método findOne com um userIdLegacy fictício
  //     const result = await userService.findOne("mockUserIdLegacy");

  //     // Verificar se o método findOne foi chamado corretamente e retornou o usuário esperado
  //     expect(mockRepository.findOne).toHaveBeenCalledWith({
  //       where: { userIdLegacy: "mockUserIdLegacy" },
  //     });
  //     expect(result).toBe(mockUser);
  //   });
  // });

  // describe("findByEmail", () => {
  //   it("should find a user by email", async () => {
  //     // Mock do findOne para retornar o usuário existente
  //     mockRepository.findOne.mockResolvedValueOnce(mockUser as User);

  //     // Chamar o método findByEmail com um email fictício
  //     const result = await userService.findByEmail("mockEmail");

  //     // Verificar se o método findOne foi chamado corretamente e retornou o usuário esperado
  //     expect(mockRepository.findOne).toHaveBeenCalledWith({
  //       where: { email: "mockEmail" },
  //     });
  //     expect(result).toBe(mockUser);
  //   });
  // });
// });
