import React from 'react'


const social = [
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/hritik-kumar-a05b572a9',
    img: 'https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Hritik-Kumar-dev',
    img: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hritikkumar3972/?next=%2F',
    img: 'https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/HritikKuma22829',
    img: 'https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000'
  }
]

const SocialLinks = () => {
  return (

    <div className="flex gap-1.5  " >

      {social.map(MySocial => (
        <div className="flex items-center mx-2  gap-1.5" key={MySocial.name}>
          <a href={MySocial.url}><img className='w-13 h-13 ' src={MySocial.img} alt={MySocial.name} /></a>
        </div>
      ))}

    </div>
  )
}


export default SocialLinks

