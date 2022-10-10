import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types/payload';

export default function signPayload(payload: Payload, expiry: string): string {
  return sign(payload, process.env.SECRET_KEY, {
    expiresIn: expiry,
  });
}
