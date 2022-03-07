import { Injectable } from '@nestjs/common';
import { UserRepository } from '@core/abstracts/user-repository.abstract';
import { User } from '@core/entities/user.entity';

@Injectable()
export class MemoryUserRepository implements UserRepository {
  users: User[] = [];
  currentId = 1;

  findAll(query?: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
      resolve(this.users);
    });
  }

  findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }

  findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }

  create(user: User): Promise<User> {
    user.id = this.currentId.toString();
    this.users.push(user);
    this.currentId++;
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }

  createMany(items: User[]): Promise<User[]> {
    const users = items.map(item => {
      item.id = this.currentId.toString();
      this.users.push(item);
      this.currentId++;
      return item;
    });
    return new Promise((resolve, reject) => {
      resolve(users);
    });
  }

  update(id: string, newUser: User): Promise<User> {
    let user = this.users.find(user => user.id === id);
    const index = this.users.indexOf(user);
    if (index > -1) {
      user = {
        ...user,
        ...newUser
      };
      this.users.splice(index, 1, user);
    }
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }

  delete(id: string) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
