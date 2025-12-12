const course = {
    name: "JS",
    price: "999",
    courseInstructor: "Umar"
}
// console.log(course.courseInstructor);
// object destructing
const {courseInstructor:instructor} =course
console.log(instructor);

