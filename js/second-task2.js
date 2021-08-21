const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = async (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  return updatedUsers;
};

// const logger = (updatedUsers) => console.table(updatedUsers);

console.log(toggleUserState(users, "Mango"));
console.log(toggleUserState(users, "Lux"));
