export const AUTH_USER = 'AUTH_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const MESSAGE_AUTH = 'MESSAGE_AUTH';

export type Action =
    | { type: 'AUTH_USER'; payload: {
        user: Object,
        tokenUser: string
    } }
    | { type: 'CLEAR_USER' }
    | { type: 'MESSAGE_AUTH'; payload: { message: string } };
