import { Observable } from "rxjs";
import { Todo } from "./modals/modals.module";

export interface ITodoService{
    getBookDetails(): Observable<Todo[]>;
}