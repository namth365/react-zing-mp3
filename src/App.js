// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Home, Login, Public } from './containers/public';
import { ToastContainer } from 'react-toastify';
// import toast
// toast.warn('cmt')
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import path from './ultis/path';
import { useEffect } from 'react'
import * as actions from './store/actions'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [dispatch])

  return (
    <>
      <div className="App">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />

            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
