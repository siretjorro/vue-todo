export interface ITodo {
    id?: number,
    todoTaskName: string,
    todoTaskSort: number,
    createdDT: string,
    dueDT?: string,
    isCompleted: boolean,
    isArchived: boolean,
    todoCategoryId: number,
    todoPriorityId: number
}
