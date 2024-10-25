const user = {
  name: "Иван", 
  lastname: "Иванов",
  id: "1",
  email: "ivan@mail.ru",
  about: "sdfsd",
  avatar:"https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
};

const users = {
  0: {name: "1", lastname: "1"},
  1: {name: "2", lastname: "2"},
  2: {name: "3", lastname: "3"},
  3: {name: "4", lastname: "4"},
  4: {name: "5", lastname: "5"},
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}