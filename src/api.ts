import { users, User } from "./usersData";

export type UserData = {
  [i: number]: {
    pageNumber: number;
    users: User[];
  };
};

export const getAllPages = (): UserData => {
  const pages: { [i: number]: { pageNumber: number; users: User[] } } = {};

  for (let i = 0; i < users.length; i += 10) {
    pages[i / 10] = { pageNumber: i, users: users.slice(i, i + 10) };
  }

  return pages;
};

export const usersApi = (pageNum: number): Promise<UserData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getAllPages()[pageNum]);
    }, 250);
  });
};
