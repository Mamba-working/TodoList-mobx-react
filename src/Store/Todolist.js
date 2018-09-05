import { observable , action, computed } from 'mobx'
import Todo from './Todo'
class TodoList{
    @observable  todolist = [new Todo('learn redux','continue...'),new Todo('learn mobx','continue...')]
    @computed get unFinishedTodoCount () {
        return this.todolist.filter(todo => !todo.isFinished).length
    }
    @action addTodo = (option={title: 'unnamed', content: 'continue...'}) => {
        console.log(option)
        this.todolist.push(new Todo(option.title, option.content))
    }
}

const todolist = new TodoList()
export default todolist