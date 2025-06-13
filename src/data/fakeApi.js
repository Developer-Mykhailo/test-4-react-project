export const users = [
  { id: "1", name: "Іван", descr: "Good" },
  { id: "2", name: "Олена", descr: "Normal" },
  { id: "3", name: "Михайло", descr: "Bad" },
];

export const getUserById = (userId) => {
  return users.find((el) => el.id === userId);
};
