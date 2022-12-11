class User {
    constructor(username, email, password, hashCode) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.hashCode=hashCode;
    }

    // Getter
    get username() {
        return this.greetings();
    }
    // Method
    calculAge() {
        alert("Hello ",this.username,"!");
    }

  }

const user = new User("Mariem","mariem@gmail.com","123456","hashCode");

user.username;