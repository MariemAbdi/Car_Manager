class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
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

const user = new User("Mariem","mariem@gmail.com","123456");

user.username;