import { TAuthUser } from "@features/auth/authSlice"; 
import { User } from "firebase/auth";

export const mapFirebaseUser = (user: User): TAuthUser => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});