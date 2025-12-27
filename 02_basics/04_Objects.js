// object destructuring is a way to extract properties from an object and assign them to variables

const course = {
  title: "JavaScript Basics",
  lessons: 20,
  isPublished: true,
  cost: 1999,
  courseInstructor: "Hitesh Choudhry",
}

const {courseInstructor: instuctor} = course; // renaming while destructuring 
console.log(instuctor); // Hitesh Choudhry

const {title, lessons} = course; // destructuring
console.log(title); // JavaScript Basics
console.log(lessons); // 20

// destructuring with rest operator
const {title: courseTitle, ...restProps} = course;
console.log(courseTitle); // JavaScript Basics
console.log(restProps); // { lessons: 20, isPublished: true, cost: 1999, courseInstructor: 'Hitesh Choudhry' }    

