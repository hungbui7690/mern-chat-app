import { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useStore from '../zustand/useStore'
import notificationSound from '../asset/notification.mp3'

const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useStore()

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true // add shake effect to new message -> check css
      const sound = new Audio(notificationSound)
      sound.play()
      setMessages([...messages, newMessage])
    })

    return () => socket?.off('newMessage')
  }, [socket, setMessages, messages])
}

export default useListenMessages
