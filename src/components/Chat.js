import React, { useRef, useState } from 'react';

import './Style.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import NaviBar from './NaviBar'
import Footer from './Footer'
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function Chat() {

  const [user] = useAuthState(auth);
   
  return (
    <>
    
    <div className="App">
      
      <div id="chat">
      
      <section>
      
        <ChatRoom /> 
        </section>
      </div>  
    </div>
    
    </>
  );
}




function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(100);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>
    
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form class="form" onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="napisz coś.." />

      <button type="submit" disabled={!formValue}>🛆</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<><div id="body">
    
    <div className={`message ${messageClass}`}>
     <img id="photoChat" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p class="p">{text}</p>
    </div>
    </div>
  </>)
}


export default Chat;

