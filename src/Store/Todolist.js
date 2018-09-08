import { observable , action, computed } from 'mobx'
import Todo from './Todo'
import {arrayMove} from 'react-sortable-hoc';
class TodoList{
    @observable  todolist = [new Todo('learn redux','continue...'),new Todo('learn mobx','continue...')]
    @computed get unFinishedTodoCount () {
        return this.todolist.filter(todo => !todo.isFinished).length
    }
    @action addTodo = (option={title: 'unnamed', content: 'continue...'}) => {
        console.log(option)
        this.todolist.push(new Todo(option.title, option.content))
    }
    @action handleSort = ({oldIndex, newIndex}) => {
        this.todolist = arrayMove(this.todolist, oldIndex,newIndex)
    }
}

const todolist = new TodoList()
export default todolist