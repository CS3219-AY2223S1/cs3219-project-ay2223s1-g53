import { Controller, Request, Post, Get, UseGuards, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { Public } from './auth/guards/setMetadata';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const resObject = await this.authService.login(req.user);
    res.cookie('jwt', resObject.jwt, { httpOnly: true });
    return { username: resObject.username };
  }

  @Public()
  @Get('auth/logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'The user session has ended' };
  }
}
