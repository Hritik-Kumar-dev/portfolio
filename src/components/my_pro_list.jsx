import React from 'react'

const my_pro_list = ({ tittle, desc, stack_array }) => {
    return (
        <div>
            <ul className='flex flex-col gap-2.5 text-lg'>
                <li className='font-bold text-2xl text-white'>{tittle}</li>
                <li className='text-gray-200'>{desc}</li>
            <li className='text-gray-400'>{stack_array.map((item, index) => (
                    <span key={index}>{item}{index < stack_array.length - 1 && ', '}</span>
                ))}</li>
                <li>Project 3</li>
            </ul>
        </div>
    )
}

export default my_pro_list
