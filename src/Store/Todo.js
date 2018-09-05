import { observable , action } from 'mobx'

class Todo {
    constructor(title, content){
        this.id = Date.now()
        this.title = title
        this.content = content
    }
    @observable  title
    @observable  content
    @observable  isFinished = false
    @action onChangeTitle = (title) => {
        this.title = title
    }
    @action onChangeContent = (content) => {
        this.content = content
    }
    @action onChangeFinished = () => {
        this.isFinished = !this.isFinished
    }
}
export default Todo