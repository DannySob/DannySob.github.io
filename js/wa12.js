let emp1 = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}';

const employ1 = JSON.parse(emp1);

console.log("Problem 1");
console.log(employ1);

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

let emp3 = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise_eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise_eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise_eligable": "False"},' +
' {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise_eligable": "False"} ]}';

const employ3 = JSON.parse(emp3);

function salaryUpdate(employ) {
    for (let i = 0; i < employ["employees"].length; i++) {
        if (employ["employees"][i].raise_eligable === 'True') {
            employ["employees"][i].salary *= 1.1;
            employ["employees"][i].raise_eligable = 'False';
        }
    }
}

salaryUpdate(employ3);

console.log("Problem 5");
console.log(employ3);

let emp4 = '{"employees": [' + 
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise_eligable": "True", "work_from_home": "True"},' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise_eligable": "True", "work_from_home": "False"},' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise_eligable": "False", "work_from_home": "False"},' +
' {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise_eligable": "False", "work_from_home": "True"} ]}';

const employ4 = JSON.parse(emp4);

salaryUpdate(employ4);

console.log("Problem 6");
console.log(employ4);