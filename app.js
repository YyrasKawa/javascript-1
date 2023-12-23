const user = 
  {
    name: "Yury",
    surname: "Kavalenka",
    age: 24,
    getFullName: function () {
        return this.name + ' ' + this.surname;
    }
  };

  console.log(user.getFullName());


