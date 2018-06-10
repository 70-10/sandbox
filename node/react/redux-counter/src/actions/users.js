export const Type = {
  GetUsers: "@redux-counter/get-users",
  GetUsersSuccess: "@redux-counter/get-users-success",
  GetUserFail: "@redux-counter/get-users-fail",
};

export const Creator = {
  getUsers() {
    return { type: Type.GetUsers };
  },
  getUsersSucces(users) {
    return { type: Type.GetUsersSuccess, users };
  },
  getUsersFail(error) {
    return { type: Type.getUsersFail, error };
  },
};
