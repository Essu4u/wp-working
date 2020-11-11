  const student = {
    fname: "Lamin",
    lname: "Jabbi",
    department: "ITC",
    program: "Computer Science",
    class: "21",
    admittedDate: "2017",
    completedDate: "2021",
  }
// add course to student
student.courses = ['Java', 'Web Programming', 'Database', 'Networking', 'PLD']
 //delete class
  delete student.class ;

  // update admittedDate to 2020
  student.admittedDate = "2020";

//   Add a new property key called grades
  const grades = [
    {
        code: "WP101",
      title: "Web Programming I",
      creditHrs: 2,
      grade: "C",  
  },
  {
        code: "DB101",
      title: "Database I",
      creditHrs: 2,
      grade: "A",  
  }
  ]

  //Create a method called `greetings
  var greetings = {
    fullName: function(student) {
      return "peace, i am " + this.fname + " " + this.lname  + " " + " How are you?" ;
    }
  }
  var x = greetings.fullName.call(student);
  
  alert(x) ;
  