import type { TodoStatus } from "@enums/TodoEnums";

export interface Todo{
    id: number,
    title: string,
    description?: string,
    status: TodoStatus,
    created: Date
}