/** nestjs */
import { Test } from "@nestjs/testing";

/** controllers */
import { ProjectController } from "./project.controller";

/** providers */
import { ProjectService } from "./project.service";

/** dependencies */
import { Project } from "./entities/project.entity";
import { AuthGuard } from "../user/guards/auth.guard";
import { JwtService } from "@nestjs/jwt";
import { CreateApplyDto } from "src/applies/dto/create-apply.dto";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import exp from "constants";

// global test variables
let controller: ProjectController;

beforeAll(async () => {
    //mockProjectService
    const mockProjectService: Partial<ProjectService> = {
        create: jest.fn().mockResolvedValue(Promise.resolve([])),
        update: jest.fn().mockResolvedValue(Promise.resolve([])),
        delete: jest.fn().mockResolvedValue(Promise.resolve([])),
        getAll: jest.fn().mockResolvedValue(Promise.resolve([])),
        getOne: jest.fn().mockResolvedValue(Promise.resolve([])),
        filter: jest.fn().mockResolvedValue(Promise.resolve([])),
        finalize: jest.fn().mockResolvedValue(Promise.resolve([])),
    };

    const mockAuthGuard: Partial<AuthGuard> = {}
    const mockJwtService: Partial<JwtService> = {}

    // initialize test module
    const moduleRef = await Test.createTestingModule({
        controllers: [ProjectController],
        providers: [{
            provide: ProjectService,
            useValue: mockProjectService,
        },
        {
            provide: AuthGuard,
            useValue: mockAuthGuard
        },
        {
            provide: JwtService,
            useValue: mockJwtService
        }]
    }).compile();

    controller = moduleRef.get<ProjectController>(ProjectController);
})

describe("ProjectController", () => {
    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    describe("create method", () => {
        it(" should", async () => {
            const response = await controller.create("headerParam", { name: " nameProject " } as CreateProjectDto);
            expect(response).toBeDefined();
        })
    })

    describe("update method", () => {
        it("should update a project", async () => {
            const response = await controller.update(1, "headerParam", { name: " nameProject " } as UpdateProjectDto);
            expect(response).toBeDefined();
        });
    });

    describe("delete method", () => {
        it("should delete a project", async () => {
            const response = await controller.delete(1, "headerParam");
            expect(response).toBeDefined()
        })
    })

    describe("get all projects", () => {    
        it("should get all projects", async () => {
            const response = await controller.getAll("headerParam")
            expect(response).toBeDefined();
        })
    })

    describe("get one project", () => {
        it("should get one project", async () => {
            const response = await controller.getOne(1, "headerParam")
            expect(response).toBeDefined();
        })
    })

    describe("method filter", () => {
        it("should filter projects", async () => {
            const response = await controller.filter("headerParam", { name: " nameProject " } as UpdateProjectDto);
            expect(response).toBeDefined();
        })
    })

    describe("method finalize", () => {
        it("should finalize projects", async () => {
            const response = await controller.finalize(1, {})
            expect(response).toBeDefined();
        })
    })
})
