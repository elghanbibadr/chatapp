import React ,{useState,useEffect} from 'react'
import Message from './Message';

const style = {
    main: `flex flex-col p-[10px]`,
  };

const Chat = () => {
  return (
    <>
    <main className={style.main}>
        <Message/>
    {/* chat message componenet */}
    </main>
    {/* send message componenet */}
    <span></span>
    </>
  )
}

export default Chat