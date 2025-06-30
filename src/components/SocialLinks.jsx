import React from 'react'


const social = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hritik-kumar-7b0a1b1b6/',
    img: 'https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hritik-kumar',
    img: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hritik_kumar/',
    img: 'https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/hritik_kumar',
    img: 'https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000'
  }
]

const SocialLinks = () => {
  return (

    <div className="flex gap-1.5  " >

      {social.map(MySocial => (
        <div className="flex items-center gap-1.5" key={MySocial.name}>
          <a href={MySocial.url}><img className='w-10 h-10 ' src={MySocial.img} alt={MySocial.name} /></a>
        </div>
      ))}

    </div>
  )
}


export default SocialLinks

