import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  _id: string;
}

export interface SanitizedUser {
  username: string;
  _id: string;
}
