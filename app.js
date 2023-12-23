const users = [
  {
    name: "Yury",
    surname: "Kavalenka",
    age: 30,
    skills: ["Development", "DevOps"],
  },
  {
    name: "Yla",
    surname: "Katasa",
    age: 32,
    skills: ["Design"],
  },
];

const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    }
})

console.log(userData);


