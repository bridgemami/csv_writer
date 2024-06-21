import { appendFileSync } from 'fs'
import CSVWriter from '.'

interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string
    }
    
const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
	{ id: 2, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 3, amount: 25, to: 'yoshi', notes: 'clearing a debt' },
])

paymentWriter.save('./data/payments.csv')