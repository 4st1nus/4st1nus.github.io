import { UserGeoLocation } from './user-geo-location';

export class UserAddress {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: UserGeoLocation;
}
