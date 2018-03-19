import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { HoverButton } from '../../styles/card'
import { hoverColor } from '../../styles/constants/colors';

const modalRoot = document.getElementById('modal-root');

const ModalOverlay = styled.div`
  background: rgba(0,0,0,0.4);
  position:fixed;
  display:flex;
  justify-content: center;
  align-items: flex-start;
  top:0;
  left:0;
  bottom:0;
  right:0;
  overflow-y: auto;
  width:100%;
  height:100%;
  z-index: 1050;
`

const ModalContent = styled.div`
  margin-top: 5%;
  background: white;
  position: relative;
  border-radius: 8px;
  min-width: 50%;
  min-height: 400px;
  padding: 20px 35px 30px 35px;
`

const ModalHeader = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`

const ModalTitle = styled.h2`
  font-variant-caps: small-caps;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 300;
`
const ModalCloseButton = styled.button`
  border: 0;
  background: none;
  font-size: 20px;
  line-height: 1.3;
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
    this.setState((state)=>state.shouldShowModal = true)
  }

  preventAction(event) {
    event.stopPropagation()
  }

  showModal() {
    if(this.state.shouldShowModal){
      document.getElementById('main-body').classList.add('ReactModal__Body--open')
      return ReactDOM.createPortal( <ModalOverlay className="open-modal" onClick={this.closeModal}>
          <ModalContent onClick={this.preventAction}>
            <ModalHeader>
              <ModalTitle>{this.props.title}</ModalTitle> 
              <ModalCloseButton onClick={this.closeModal}>✖</ModalCloseButton>
            </ModalHeader>
              {this.props.children}          
          </ModalContent>
      </ModalOverlay>,
      this.el,
      )
    }
    document.getElementById('main-body').classList.remove('ReactModal__Body--open')
    return;
  }

  closeModal(event) {
    event.preventDefault()
    event.stopPropagation()
    this.setState({shouldShowModal: false})
  }

  render() {
    return <div>
      <HoverButton className={this.props.className} onClick={this.openModal}>{this.props.buttonName}</HoverButton>
      {this.showModal()}
    </div>
  }
} 

export default Modal