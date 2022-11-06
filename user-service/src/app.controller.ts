import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  Res,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
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
    const sessionObj = await this.authService.checkSession(req.cookies['jwt']);
    if (sessionObj) {
      throw new BadRequestException({
        errorCode: 8,
        message: 'user is already logged in',
      });
    }
    const resObject = await this.authService.login(req.user);
    res.cookie('jwt', resObject.jwt, { httpOnly: true });
    return { username: resObject.username };
  }

  @Public()
  @Get('auth/logout')
  async logout(@Request() req) {
    this.authService.logout(req.cookies['jwt']);
    return { message: 'The user session has ended' };
  }

  @Public()
  @Get('auth/session')
  async isLoggedIn(@Request() req) {
    if (!req.cookies['jwt']) {
      throw new UnauthorizedException({
        errorCode: 7,
        message: 'user is not logged in',
      });
    }
    const res = await this.authService.checkSession(req.cookies['jwt']);

    if (res) {
      return { username: res.username, message: 'user is logged in' };
    } else {
      throw new UnauthorizedException({
        errorCode: 7,
        message: 'user is not logged in',
      });
    }
  }
}
