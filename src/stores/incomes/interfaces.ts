export default interface State {
    incomes: IncomeInfo[]
}

export interface IncomeInfo {
    id: string,
    name: string,
    value: number,
    incomeDate: number,
    created: number
}
