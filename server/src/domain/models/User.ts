export interface UserModel {
  id: string;
  email: string;
  password: string;
  rememberMeToken: string | null;
  createdAt: Date;
}
