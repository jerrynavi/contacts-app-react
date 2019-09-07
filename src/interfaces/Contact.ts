export interface Contact {
    [x: string]: string | number | undefined | string[];
    id?: number;
    name: string;
    birthday: string;
    phone: string;
    email: string;
    additionalEmails?: string[];
}
