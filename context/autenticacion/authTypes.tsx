import { User } from "./authInterface";

export const AUTH_USER = 'AUTH_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const MESSAGE_AUTH = 'MESSAGE_AUTH';

export type Action =
    | { type: 'AUTH_USER'; payload: {
            user: User,
            tokenUser: string
            } 
      }
    | { type: 'REGISTER_USER'; payload: { status: boolean } }
    | { type: 'CLEAR_USER' }
    | { type: 'MESSAGE_AUTH'; payload: { message: string } };
