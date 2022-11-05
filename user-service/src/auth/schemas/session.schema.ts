import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Session {
  @Prop()
  username: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
