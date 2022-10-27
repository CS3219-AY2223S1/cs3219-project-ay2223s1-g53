import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { JoinRoomInfo } from 'src/types/room';
import { RoomsService } from './rooms.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RoomsGateway {
  constructor(private readonly roomService: RoomsService) {}

  @SubscribeMessage('joinRoom')
  async joinRoom(@MessageBody() data: JoinRoomInfo) {
    const { username, roomId } = data;
    this.roomService.joinRoom(roomId, username);
  }
}
