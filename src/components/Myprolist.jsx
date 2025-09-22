import React from 'react'

const my_pro_list = ({ tittle, desc, stack_array }) => {
    return (
        <div className='h-[25%] w-full p-2 backdrop-blur-md bg-blue-200/1 hover:bg-blue-200/20 hover:cursor-pointer shadow-xl rounded-[20px]
        '>
            <ul className='flex flex-col gap-0.5 '>
                <li className='font-bold text-2xl text-white'>{tittle}</li>
                <li className='text-gray-200 font-light '>{desc}</li>
                <li className='text-gray-400'>{stack_array.map((item, index) => (
                    <span key={index}>{item}{index < stack_array.length - 1 && ', '}</span>
                ))}</li>

            </ul>
        </div>
    )
}

export default my_pro_list
