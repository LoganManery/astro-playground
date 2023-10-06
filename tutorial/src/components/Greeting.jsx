import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="w-full">
      <p class="font-pixelify text-2xl text-center cursor-pointer" onClick={() => setGreeting(() => messages[(Math.floor(Math.random() * messages.length))])}>{greeting}! Thank you for visiting!</p>
    </div>
  )
}