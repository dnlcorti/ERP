import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async create(dto: CreateUserDto) {
    const user = this.repo.create({
      email: dto.email,
      passwordHash: await bcrypt.hash(dto.password, 10),
      role: dto.role ?? 'MANAGER'
    });
    return this.repo.save(user);
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.repo.findOneBy({ id });
    if (!user) return null;
    if (dto.email) user.email = dto.email;
    if (dto.password) user.passwordHash = await bcrypt.hash(dto.password, 10);
    if (dto.role) user.role = dto.role;
    return this.repo.save(user);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
