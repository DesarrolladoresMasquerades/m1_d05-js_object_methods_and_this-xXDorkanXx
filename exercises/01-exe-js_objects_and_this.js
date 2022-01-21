// TO-DO: write the methods getAge, addFriend and getRandomFriend

const chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    friends: [
      'Pablo',
      'Julie',
      'Yanis'
    ],
    displayInfo: function() {
      console.log(
        `My name is ${this.firstName} ${this.lastName} and I have ${this.friends.length} friends.`
      );
    },
    getAge() {
      const todaysYear = new Date();
      return todaysYear.getFullYear() - this.birthDate.getFullYear(); // TO-DO: return the age in this function
      // Hint: to get the current time, you can do: new Date()
      // Hint: to get the birthDate, you can do: this.birthDate
      // Hint: you can subtract 2 dates and you get the number of milliseconds
      // Hint: convert the milliseconds to years 
    },
    addFriend(name) {
      this.friends.push(name); // TO-DO (don't use return statement)
      // add a name to the friends array. The friend name is passed as a parameter to the function
    },
    getRandomFriend() {
      return this.friends[Math.floor(Math.random() * this.friends.length)];// TO-DO. return a random friend name from the friends array
    }
  };
  
  chuck.displayInfo();
  
  console.log('getAge', chuck.getAge()); // Should return 81 if you are in 2021
  
  chuck.addFriend('Jorge');
  console.log('getRandomFriend', chuck.getRandomFriend());
  chuck.addFriend('Helena');
  console.log('getRandomFriend', chuck.getRandomFriend());
  chuck.addFriend('Manish');
  console.log('getRandomFriend', chuck.getRandomFriend());
  
  chuck.displayInfo();