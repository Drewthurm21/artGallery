import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux'
import './index.css';

import { setModalMount } from './store/modals'
import App from './App';
import configureStore from './store'

const store = configureStore()

const Root = () => {
  const dispatch = useDispatch()
  const modalMooringRef = useRef(null)

  useEffect(() => {
    dispatch(setModalMount(modalMooringRef.current))
  }, [dispatch])

  return (
    <>
      <App />
      <div ref={modalMooringRef} className='modal' />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
