import { Router, Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';

const UserRoutes = Router();

UserRoutes.post('/user', (request: Request, response: Response) => {
    const bodyUser = request.body;

    const createUserService = new CreateUserService(bodyUser);

    const userCreated = createUserService.execute();

    if (!userCreated) {
        return response.status(500).json({ message: 'Error creating user' });
    }

    return response.status(200).send(userCreated);
});

export { UserRoutes };
