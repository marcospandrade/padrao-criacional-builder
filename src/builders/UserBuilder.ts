import { User } from '../models/User';
import { v4 } from 'uuid';

export class UserBuilder {
    private name!: string;
    private email!: string;
    private phone!: string;
    private role: string;

    //admin fields
    private token?: string;
    private permissionToSave?: boolean | false;

    constructor(role: string) {
        this.role = role;
    }

    setPermissionToSave(): UserBuilder {
        this.permissionToSave = true;
        this.setToken(v4());
        return this;
    }

    get PermissionToSave() {
        if (this.permissionToSave) {
            return this.permissionToSave;
        } else {
            return false;
        }
    }

    setToken(value: string): UserBuilder {
        this.token = value;
        return this;
    }

    get Token() {
        if (this.token) {
            return this.token;
        }
    }

    setName(value: string): UserBuilder {
        if (this.role === 'admin') {
            this.name = 'ADMIN-' + value;
        } else {
            this.name = value;
        }
        return this;
    }

    get Name() {
        return this.name;
    }

    setEmail(value: string): UserBuilder {
        this.email = value;
        return this;
    }
    get Email() {
        return this.email;
    }

    setPhone(value: string): UserBuilder {
        this.phone = value;
        return this;
    }
    get Phone() {
        return this.phone;
    }

    setRole(value: string): UserBuilder {
        this.role = value;
        return this;
    }
    get Role() {
        return this.role;
    }

    build(): User {
        return new User(this);
    }
}
