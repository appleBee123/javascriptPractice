var employee1 = {
  fName: "Neetu", // first name
  lName: "Sharma", // last name
  desig: "Receptionist", // designation
  salary: 20000,
  exp: 3, // work experience
};

var employee2 = {
  fName: "Neha",
  lName: "Verma",
  desig: "Clerk",
  salary: 20000,
  exp: 5,
};

var employee3 = {
  fName: "Simran",
  lName: "Kaur",
  desig: "Senior Clerk",
  salary: 30000,
  exp: 4,
};

var employee4 = {
  fName: "Saroj",
  lName: "Sharma",
  desig: "Senior Clerk",
  salary: 30000,
  exp: 7,
};

var employee5 = {
  fName: "Neetu",
  lName: "Sharma",
  desig: "Cleaner",
  salary: 10000,
  exp: 2,
};

function getFullName() {
  return `${this.fName} ${this.lName}`;
}

function promote() {
  if (this.desig == "Clerk" && this.exp > 3) {
    this.desig = "Senior Clerk";
    this.salary = this.salary / 10 + this.salary;
    console.log(
      `Congratulations ${this.fName}! You're a ${this.desig} now and your salary is ${this.salary}`
    );
  } else if (this.desig == "Senior Clerk" && this.exp > 6) {
    this.desig = "Manager";
    this.salary = this.salary / 5 + this.salary;
    console.log(
      `Congratulations ${this.fName}! You're a ${this.desig} now and your salary is ${this.salary}`
    );
  } else {
    console.log(
      `Hello ${this.fName} .Keep working hard and you will reach your goals.`
    );
  }

  return "";
}

console.log(promote.call(employee1));

console.log(promote.call(employee2)); // Neha gets promoted

console.log(promote.call(employee3));

console.log(promote.call(employee4)); // Saroj gets promoted

console.log(promote.call(employee5));

console.log(getFullName.call(employee1));

console.log(getFullName.call(employee2));

console.log(getFullName.call(employee3));

console.log(getFullName.call(employee4));

console.log(getFullName.call(employee5));
