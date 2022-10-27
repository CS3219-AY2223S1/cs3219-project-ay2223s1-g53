import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './schemas/room.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoomsService {
  constructor(@InjectModel('Room') private roomModel: Model<Room>) {}

  async joinRoom(roomId: string, username: string) {}
}
