import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../../store/modals'
import './Modal.css'


const Modal = () => {
  const dispatch = useDispatch()
  const mount = useSelector(state => state.modal.mount)
  const display = useSelector(state => state.modal.display)
  const Current = useSelector(state => state.modal.current)


  const onClose = () => {
    dispatch(hideModal())
  }

  useEffect(() => {
    if (display) {
      document.body.style.overflowY = 'hidden'
      document.getElementById('root').style.overflowY = 'hidden'
    }

    return () => {
      document.body.style.overflowY = ''
      document.getElementById('root').style.overflowY = ''
    }

  }, [display])

  return mount && display && ReactDOM.createPortal(
    <div className='modal-background' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <Current />
      </div>
    </div>
    ,
    mount);

}

export default Modal