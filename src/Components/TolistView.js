import React from 'react'
import { observer, inject } from 'mobx-react'
import TodolistIterm from './TodolistIterm'
// import { toJS } from 'mobx'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { Icon, Button } from 'antd'
const StyledRow = styled(Row)`
    background: #fafafa;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    padding: 16px;
    font-size: 16px;
    border-bottom: 1px solid #e8e8e8;
`
@inject(store => {
    return {
       store: store
    }
})
@observer
export default
class TodolistView extends React.Component {
    render () {
        const {store} = this.props.store
        return (
            <div style={{textAlign: 'center'}}>
                <StyledRow>
                    <Col span={8}>Title</Col>
                    <Col span={8}>Content</Col>
                    <Col span={8}>IsFinished</Col>
                </StyledRow>
                {store.todolist.map(iterm => <TodolistIterm todo={iterm} key={iterm.id} />)}
                <Icon
                    type="plus-circle" 
                    theme="twoTone" 
                    style={{fontSize: '28px', cursor: 'pointer'}}  
                    onClick={() => {
                        store.addTodo()
                    }} 
                    />
            </div>
            
        )
    }
}
