// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']
let studentRecords = [
{ name: 'John', id: 123, marks: 98 }, 
{ name: 'Baba', id: 101, marks: 23 }, 
{ name: 'yaga', id: 200, marks: 45 }, 
{ name: 'Wick', id: 115, marks: 75 }
];
let Caps = studentRecords.map(a => (a.name).toUpperCase());
    console.log(Caps);
//Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let dataSet = [];
for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
        dataSet.push(Object.assign(studentRecords[i]));
    }
}
console.log(dataSet);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let students = [];
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120 && studentRecords[i].marks > 50) {
    students.push(Object.assign(studentRecords[i]));
  }
}
console.log(students);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let Sum = 0;
for (let i = 0; i < studentRecords.length; i++) {
  Sum += studentRecords[i].marks;
}
console.log(Sum);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let names = [];
for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
      names.push(studentRecords[i].name);
    }
  }
  console.log(names);
//Question 6: This time we are required to print the sum of marks of the students with id > 120.
let marks = 0;
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120) {
    marks += studentRecords[i].marks;
  }
}
console.log(marks);
// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let lessThan = 0;
for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks < 50) {
    lessThan += studentRecords[i].marks + 15;
  }
}
console.log(lessThan);
// Question 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
const One = {name: 'John', class: 1, rollNo : 1 };
const Two = {name: 'Baba', class: 2, rollNo : 2 };
const Three = {name: 'yaga', class: 3, rollNo : 3 };
const Four = {name: 'Wick', class: 4, rollNo : 4 };
const Five = {name: 'Ravi', class: 5, rollNo : 5 };
const Six = {name: 'Hari', class: 6, rollNo : 6 };
const displayInfo = [One,Two,Three,Four,Five,Six];
console.log(displayInfo);