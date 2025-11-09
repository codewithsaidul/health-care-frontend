
export type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

export interface IUser {
  id: string;
  name: string;
  profilePhoto: string;
  email: string;
  role: UserRole;
  exp: number;
  iat: number;
}