import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/auth.local-guard';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('auth/logout')
  async logout(@Request() req) {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
