import { UserBuilder } from '../builders/UserBuilder';

export class User {
    private name: string;
    private email: string;
    private phone: string;
    private role: string;

    private token?: string;
    private permissionToSave: boolean;

    constructor(builder: UserBuilder) {
        this.name = builder.Name;
        this.email = builder.Email;
        this.phone = builder.Phone;
        this.role = builder.Role;
        if (builder.Role === 'admin') {
            this.token = builder.Token;
        }
        this.permissionToSave = builder.PermissionToSave;
    }

    get Name() {
        return this.name;
    }
    get Email() {
        return this.email;
    }
    get Phone() {
        return this.phone;
    }
    get Role() {
        return this.role;
    }
    get Token() {
        return this.token;
    }
    get PermissionToSave() {
        return this.permissionToSave;
    }
}
