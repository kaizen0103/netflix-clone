import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='bg-black/80 p-12 rounded-md w-[450px]'>
        <h1 className='text-white text-4xl font-bold mb-8'>Enter your info to sign in</h1>
        <p>Or get started with a new account.</p>
       <form className='flex flex-col gap-4' >
        <input 
        type="email" 
        placeholder='Email or mobile number'
        className='p-4 rounded bg-zinc-800 text-white outline-none'
        />
        <button className='bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-500'>
            Sign In
        </button>

       </form>
        
      </div>
    </div>
  )
}

export default Login
