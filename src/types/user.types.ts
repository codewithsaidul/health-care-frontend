

export interface IUser {
  id: string;
  name: string;
  profilePhoto: string;
  email: string;
  role: "ADMIN" | "DOCTOR" | "PATIENT";
  exp: number;
  iat: number;
}