export type TodoType = "once" | "weekly";

export type Todo = {
  id: string;
  date: Date;
  content: string;
  isDone: boolean;
  type: TodoType;
};
