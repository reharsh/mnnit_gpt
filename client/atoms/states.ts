import { atom } from "recoil";

interface UserProps {
  name: string;
  email: string;
  password: string;
  profileImage: string;
}

export const userState = atom<UserProps>({
  key: "userState",
  default: {
    name: "",
    email: "",
    password: "",
    profileImage: "",
  },
});
