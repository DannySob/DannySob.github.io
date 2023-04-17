let emp = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}';

const employ = JSON.parse(emp);

console.log("Problem 1");
console.log(employ);

let com = '{"company": [' +
' {"companyname": "Tech Stars", "website": "www.techstars.site", "employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise_eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise_eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise_eligable": "False"} ]}]}';

const company = JSON.parse(com);

console.log("Problem 2");
console.log(company);

let emp2 = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise_eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise_eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise_eligable": "False"},' +
' {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise_eligable": "False"} ]}';

const employ2 = JSON.parse(emp2);

console.log("Problem 3");
console.log(employ2);

let sal = employ2["employees"][0].salary + employ2["employees"][1].salary + employ2["employees"][2].salary + employ2["employees"][3].salary;

console.log("Problem 4");
console.log(sal); 

function salaryUpdate() {
    for (let i = 0; i < employ2["employees"][i].salary.length; i++) {
        if (employ2["employees"][i].raise_eligable === 'True') {
            employ2["employees"][i].salary *= 1.1;
            employ2["employees"][i].raise_eligable = 'False';
            return;
        }
    }
}

salaryUpdate();

console.log("Problem 5");
console.log(employ2);