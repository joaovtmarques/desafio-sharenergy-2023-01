import Joi from 'joi';

interface CreateUserRequest {
  email: string;
  password: string;
}

export const validateCreateUserData = (createUser: CreateUserRequest) => {
  const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return createUserSchema.validate(createUser);
};
