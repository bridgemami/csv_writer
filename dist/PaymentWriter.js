"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const paymentWriter = new _1.default(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 3, amount: 25, to: 'yoshi', notes: 'clearing a debt' },
]);
paymentWriter.save('./data/payments.csv');
