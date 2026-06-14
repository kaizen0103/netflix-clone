import React from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
const Login = () => (
    <>
        
        <div className='min-h-screen bg-linear-to-b from-red-950 via-black/90 to-black flex items-center justify-center'>
             <div className='absolute top-4 left-4 z-50 '>
                 <Logo/>
            </div>
            <div className='bg-transparent p-12 rounded-md w-450px'>
                <h1 className='text-white text-4xl font-bold mb-2'>Enter your info to sign in</h1>
                <p className="mb-2 text-zinc-500 text-xl">Or get started with a new account.</p>
                <form className='flex flex-col gap-4'>
                    <input
                        type="email"
                        placeholder='Email or mobile number'
                        className='p-4 rounded bg-zinc-800 text-white outline-none' />
                    <button className='bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-500'>
                        Sign In
                    </button>

                </form>

            </div>
            
        </div>
        <Footer/>
    </>
)

export default Login
