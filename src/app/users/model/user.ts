import { UserAddress } from './user-address';
import { UserCompany } from './user-company';

export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: UserAddress;
    public phone: string;
    public website: string;
    public company: UserCompany;
}

