import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdatePostDto } from "./dto/update-project.dto";
import { Project } from "./entities/project.entity";
export declare class ProjectController {
    private projects;
    create(createProjectDto: CreateProjectDto): Project;
    findAll(): Project[];
    findOne(id: string): Project;
    update(id: string, updatePostDto: UpdatePostDto): Project;
    remove(id: string): void;
}
