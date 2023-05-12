import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  private profile: Profile[] = [];

  @Get()
  findAll() {
    return this.profile;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profile.find((profile) => profile.id === +id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
  //   return this.profileService.update(+id, updateProfileDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(+id);
  // }
}
