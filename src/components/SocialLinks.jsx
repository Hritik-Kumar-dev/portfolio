import React from 'react'


const social = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hritik-kumar-7b0a1b1b6/',
    img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hritik-kumar',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hritik-kumar',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hritik-kumar',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
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

