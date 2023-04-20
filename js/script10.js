class Secretary {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
  
  let secretary = new Secretary("Влад", "Крамаренко", 18);
  
  console.log("Ім'я: " + secretary.firstName);
  console.log("Прізвище: " + secretary.lastName);
  console.log("Вік: " + secretary.age);
  