import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return {
      message: 'Users endpoint working',
    };
  }
}
