const person = {
  firstName: "Mahir",
  lastName: "Juma",
  age: 24,
  Hobbies: ["Coding", "Swimming", "Travelling"],
  Address: {
    City: "Zanzibar",
    State: "Fuoni",
  },
  getAge: function () {
    let ageStr;
    if (this.age < 28) {
      ageStr = `your to young ${this.firstName}`;
    } else {
      ageStr = `your to Old ${this.firstName}`;
    }
    return ageStr;
  },
};
val = person.getAge();
val = person.Hobbies.splice(2, 0, "Cooking");
val = person.Hobbies;
val = person.Hobbies.splice(3, 1);
val = person.Hobbies;
val = person.Hobbies.splice(2, 0, "Travelling");
val = person.Hobbies;
console.log(val);
