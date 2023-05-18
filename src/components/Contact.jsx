import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen bg-gray-900 text-gray-300">
        <form action="htt://getform.io/forms" className='flex flex-col max-w-[600px] w-full mx-auto p-4 justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-500'>
                    Contact
                </p>
                <p className='py-4'>Submit the form below or shoot me at email</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6] rounded-md'/>
            <input type="email" placeholder='email' name='email' className='my-4 p-2 bg-[#ccd6f6] rounded-md'/>
            <textarea name="message" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6] rounded-md'></textarea>
            <button className='text-white border-2 hover:bg-teal-500 hover:border-teal-700 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact