let emp = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}';

const employees = JSON.parse(emp);

console.log("Problem 1");
console.log(employees);

let com = '{"company": [' +
' {"companyname": "Tech Stars", "website": "www.techstars.site", "employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}]}';

const company = JSON.parse(com);

console.log("Problem 2");
console.log(company);

let emp2 = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"},' +
' {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": "25,600", "raise eligable": "False"} ]}';

const employees2 = JSON.parse(emp2);

console.log("Problem 3");
console.log(employees2);