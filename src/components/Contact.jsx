import React from 'react'

export const Contact = () => {
  return (
   <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>

    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contact</p>
            <p className='py-6'>Get in touch with me!</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/bb5f53aa-5047-4389-a803-c9e8ab08b70d' method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2
                rounded-md text-white focus:outline'/>

            <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 my-4
                rounded-md text-white focus:outline'/>

               <textarea name='message' placeholder='Enter your message' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150'>Let's Talk</button>
          
            </form>
        </div>
    </div>

   </div>
  )
}
