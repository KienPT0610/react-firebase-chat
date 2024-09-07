import './chat.css'
import { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [])

  const handleEmoji = (e) => {
    // console.log(e)
    setText((prev) => prev + e.emoji)
    setOpenEmoji(false)
  }

  console.log(text)

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Belus</span>
            <p>Connecting...</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab molestiae aperiam odit perspiciatis doloribus debitis dolores velit enim. Expedita incidunt quidem laudantium magni libero quos dolorem praesentium dignissimos in!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab molestiae aperiam odit perspiciatis doloribus debitis dolores velit enim. Expedita incidunt quidem laudantium magni libero quos dolorem praesentium dignissimos in!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab molestiae aperiam odit perspiciatis doloribus debitis dolores velit enim. Expedita incidunt quidem laudantium magni libero quos dolorem praesentium dignissimos in!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab molestiae aperiam odit perspiciatis doloribus debitis dolores velit enim. Expedita incidunt quidem laudantium magni libero quos dolorem praesentium dignissimos in!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpenEmoji((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} width={"300px"} height={"400px"} />
          </div>
        </div>
        <button className="sendButtom">Send</button>
      </div>
    </div>
  )
}

export default Chat;