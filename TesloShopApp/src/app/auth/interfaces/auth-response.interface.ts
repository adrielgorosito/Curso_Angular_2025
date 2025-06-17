import { User } from '../../products/interfaces/interfaces/user.interface';

export interface AuthResponse {
  user: User;
  token: string;
}
