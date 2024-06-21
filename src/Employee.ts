import CSVWriter  from './index'

interface Employee {
    id: number,
    name: string,
    role: string,
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
	{ id: 1, name: 'shaun', salary: 50000, role: 'web developer' },
	{ id: 2, name: 'jay', salary: 50000, role: 'digital manager' },
	{ id: 3, name: 'toad', salary: 100000, role: 'director' },
    { id: 4, name: 'mike', salary: 200000, role: 'crew member' },
])

employeeWriter.save('./data/employee.csv')