import Menu from './Menu'
import Link from 'next/link'
const Navbar = () => {
    


  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* logo */}
      <div className='text-xl'>
        <Link href="/">FoodMandu</Link>
      </div>

      {/* mobile menu */}
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar
