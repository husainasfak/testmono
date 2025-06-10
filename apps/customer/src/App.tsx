import { useState } from 'react'
import { Button } from '@univdiam/ui/components/button'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Added ${email} to waitlist`)
    setEmail('')
  }

  return (
    <div className="flex items-center justify-center min-h-svh">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Join the Waitlist</h1>
        {/* <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> */}
        <Button type="submit" className='border-4 border-red-500'>Join</Button>
      </form>
    </div>
  )
}

export default App
