import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { Table, Divider, Tag } from 'antd';
import styled from 'styled-components'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
const StyledRow = styled(Row)`
    color: rgba(0, 0, 0, 0.85);
    padding: 16px;
    transition: 0.3s background;
    border-bottom: 1px solid #e8e8e8;
    &:hover {
        background: #e6f7ff;
    }
    user-select: none;
`

@observer
class TodolistIterm extends React.Component {
    render () {
        const { todo } = this.props
        return(
        <div>
            <StyledRow>
                <Col span={8}>{todo.title}</Col>
                <Col span={8}>{todo.content}</Col>
                <Col span={8}>                  
                    { todo.isFinished ? <Tag color="blue" onClick={todo.onChangeFinished}>已完成</Tag> : <Tag color="red" onClick={todo.onChangeFinished}>未完成</Tag> }
                </Col>
            </StyledRow>
        </div>            
        )

    }
}

TodolistIterm.propTypes = {
    todo: PropTypes.any
  };
  export default SortableElement(TodolistIterm)