export interface Quote {
    userid: number;
    id: number;
    title: string;
    body: string;
}

export interface AuthContextType {
    user: User | null;
    token: string;
}

export interface PostQuote {
    quote: string;
    author: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
    phone_number: string;
}