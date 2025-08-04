import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwt: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.users.findByEmail(email);
    if (!user) throw new UnauthorizedException();
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) throw new UnauthorizedException();
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, role: user.role };
    const accessToken = await this.jwt.signAsync(payload);
    const refreshToken = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d'
    });
    return { accessToken, refreshToken, role: user.role };
  }

  async refresh(token: string) {
    const payload = await this.jwt.verifyAsync(token, {
      secret: process.env.JWT_REFRESH_SECRET
    });
    const accessToken = await this.jwt.signAsync({ sub: payload.sub, role: payload.role });
    const refreshToken = await this.jwt.signAsync({ sub: payload.sub, role: payload.role }, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d'
    });
    return { accessToken, refreshToken };
  }
}
