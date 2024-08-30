import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAll() {
    return {
      object1: 'Casa',
      object2: 123,
      object3: [1, 2, 3],
    };
  }
}
