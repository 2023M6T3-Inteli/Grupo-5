import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    private profile;
    findAll(): Profile[];
    findOne(id: string): Profile;
}
