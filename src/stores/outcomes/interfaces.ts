export default interface State {
    outcomes: OutcomeInfo[]
}

export interface OutcomeInfo {
    id: string,
    name: string,
    toPay: number,
    paid?: number,
    categoryId: string,
    typeId: string,
    comments?: CommentsInfo[] | null,
    created: number,
    outcomeDate: number,
    status: OutcomeStatus
}

export type OutcomeStatus = 'unpaid' | 'paid' | 'partialPaid' | 'onHold' | 'warning';

export interface CommentsInfo {
    id: string,
    created: number,
    modified: number,
    text: string
}
