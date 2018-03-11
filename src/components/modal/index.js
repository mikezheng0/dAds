import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { HoverButton } from '../../styles/card'
import { hoverColor } from '../../styles/constants/colors';

const modalRoot = document.getElementById('modal-root');

const ModalContainer = styled.div`
  background: rgba(0,0,0,0.4);
  position:fixed;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: 1050;
`

const ModalContent = styled.div`
  background: white;
  position: fixed;
  border-radius: 8px;
  min-width: 300px;
  min-height: 400px;
  padding: 50px 35px;
  box-sizing: border-box;
`

const ModalCloseButton = styled.button`
  border: 0;
  background: none;
  font-size: 20px;
  position: absolute;
  right: 16px;
  line-height: 1.3;
  top: 16px;
  cursor: pointer;
  color: grey;
  opacity: 0.4;
  &:hover {
    color: black;
    border-radius: 100%;
    background-color:${hoverColor};
  }
`

class Modal extends Component {
  
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.preventAction = this.preventAction.bind(this)
    this.el = document.createElement('div');
    this.state = {
      shouldShowModal: false
    }
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }


  openModal(event) {
    event.preventDefault()
    this.props.handleClick()
    this.setState((state)=>state.shouldShowModal = true)
  }

  preventAction(event) {
    event.preventDefault()
    event.stopPropagation()
  }

  showModal() {
    if(this.state.shouldShowModal){
      return ReactDOM.createPortal( <ModalContainer onClick={this.closeModal}>
          <ModalContent onClick={this.preventAction}>
            <ModalCloseButton onClick={this.closeModal}>✖</ModalCloseButton>
              {this.props.children}          
            </ModalContent>
      </ModalContainer>,
      this.el,
      )
    }
    return;
  }

  closeModal(event) {
    event.preventDefault()
    event.stopPropagation()
    this.setState({shouldShowModal: false})
  }

  render() {
    return <div>
      <HoverButton onClick={this.openModal}>{this.props.buttonName}</HoverButton>
      {this.showModal()}
    </div>
  }
} 

export default Modal