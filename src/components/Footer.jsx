import React from 'react'

const Footer = () => {
    const links = [
        "FAQ",
        "Help Centre",
        "Account",
        "Media Centre",
        "Investor Relations",
        "Jobs",
        "Ways to Watch",
        "Terms of Use",
        "Privacy",
        "Cookie Preferences",
        "Corporate Information",
        "Contact UUs"
    ];
  return (
    <footer className='bg-black text-gray-400 px-10 py-16 border-t border-gray-800'>
        <div className='max-w-6xl mx-auto'>
            <p className='mb-8'>Questions? Call 000-800-919-1694</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>{links.map((link, index)=> (
                <a 
                key={index}    
                href="a"
                className='underline hover:text-white'>
                    {link}
                </a>
            ))}
            </div>
            <p className='mt-10'>Netflix India</p>
        </div>
    </footer>
  )
}

export default Footer
