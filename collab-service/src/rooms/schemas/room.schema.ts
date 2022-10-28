import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Room {
  @Prop()
  roomId: string;

  @Prop()
  users: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
