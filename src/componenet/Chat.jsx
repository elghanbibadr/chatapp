import React ,{useState,useEffect,useRef} from 'react'
import Message from './Message';
import { collection,onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';
import { db } from '../firebase';

const style = {
    main: `flex flex-col p-[10px]`,
  };

const Chat = () => {
    const [messages,setMessages]=useState([])
    const scroll = useRef();


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
  
    return () => {
      // Cleanup the listener when the component unmounts
      unsubscribe();
    };
  }, []);
  

    return (
    <>
    <main className={style.main}>
        {/* chat message componenet */}
        {messages && messages.map((message) => {
        return  <Message key={message.id} message={message}/>
        })}
    </main>
    {/* send message componenet */}
    <SendMessage scroll={scroll} />
    <span ref={scroll}></span>
    <span></span>
    </>
  )
}

export default Chat