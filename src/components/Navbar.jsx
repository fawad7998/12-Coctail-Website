import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='font-semibold  navbar bg-slate-400  w-full'>
        <div className='flex justify-between w-full p-8 text-blue-900'>
            <Link to='/'>
                <h3 className='text-2xl text-slate-900'>The Coctail Hub</h3>
            </Link>
            <ul className='flex gap-9'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar