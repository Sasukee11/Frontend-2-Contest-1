'use strict';

/** @format */

let arr = [
  { id: 1, name: 'john', age: '18', profession: 'developer' },
  { id: 2, name: 'jack', age: '20', profession: 'developer' },
  { id: 3, name: 'karen', age: '19', profession: 'admin' },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr
    .filter((mov) => mov.profession === 'developer')
    .map((mov) => mov.name);
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === 'developer') {
      developers.push(employee.name);
    }
  });

  console.log(developers);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: 'susan', age: '20', profession: 'intern' };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = arr.filter(
    (employee) => employee.profession !== 'admin'
  );
  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalEmployees = [
    { id: 5, name: 'alex', age: '22', profession: 'developer' },
    { id: 6, name: 'emma', age: '21', profession: 'designer' },
    { id: 7, name: 'mike', age: '25', profession: 'manager' },
  ];

  const concatenatedArray = arr.concat(additionalEmployees);
  console.log(concatenatedArray);
}
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
