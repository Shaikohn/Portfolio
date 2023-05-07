import React from 'react'

const ContactEspañol = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/5383a8c5-069e-4adc-9d1a-f64232b81033' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacto</p>
                    <p className='text-gray-300 py-4'>Envíe el formulario a continuación o envíeme un correo electrónico - shaicokohn@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name="name" />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name="email" />
                <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Mensaje' />
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Colaboremos!</button>
            </form>
        </div>
    )
}

export default ContactEspañol