import { UserBuilder } from '../builders/UserBuilder';

interface IUser {
    name: string;
    email: string;
    phone: string;
    role: string;
}

export class CreateUserService {
    constructor(private user: IUser) {}

    execute() {
        if (this.user.role === 'admin') {
            const newAdminUser = new UserBuilder(this.user.role)
                .setName(this.user.name)
                .setEmail(this.user.email)
                .setPhone(this.user.phone)
                .setPermissionToSave()
                .build();

            return newAdminUser;
        } else {
            const newUser = new UserBuilder(this.user.role)
                .setName(this.user.name)
                .setEmail(this.user.email)
                .setPhone(this.user.phone)
                .build();

            return newUser;
        }
    }
}
