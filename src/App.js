import React from 'react'
import Navbar from './componenet/Navbar';
import { auth } from './firebase';
import Chat from './componenet/Chat';
import {useAuthState} from "react-firebase-hooks/auth"

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};


const App = () => {
  const [user]=useAuthState(auth)
  return (
    <div className={style.appContainer}>
    <section className={style.sectionContainer}>
      {/* Navbar */}
      <Navbar  user={user}/>
     <Chat />
    </section>
  </div>
  )
}

export default App