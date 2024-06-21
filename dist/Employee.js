"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const employeeWriter = new index_1.default(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'shaun', salary: 50000, role: 'web developer' },
    { id: 2, name: 'jay', salary: 50000, role: 'digital manager' },
    { id: 3, name: 'toad', salary: 100000, role: 'director' },
    { id: 4, name: 'mike', salary: 200000, role: 'crew member' },
]);
employeeWriter.save('./data/employee.csv');
