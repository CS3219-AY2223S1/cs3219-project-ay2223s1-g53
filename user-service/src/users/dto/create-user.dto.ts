export class CreateUserDto {
  readonly username: string;
  readonly password: string;
}

export class FindUserDto {
  readonly username: string;
}
