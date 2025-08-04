import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('token'),
      secretOrKey: process.env.JWT_REFRESH_SECRET
    });
  }

  validate(payload: any) {
    return { userId: payload.sub, role: payload.role };
  }
}
