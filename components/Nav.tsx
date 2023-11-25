import { NavLink } from '@utils/SiteConfig';

const Nav = () => {
  return (
    <div className='flex flex-row text-none p-2 bg-[#0e0e0e] drop-shadow-md'>
      <ul className='flex flex-row'>
        {NavLink.map((link) => {
          return (<li key={link.name} className='p-2'><a href={link.path}>{link.name}</a></li>)
        })}
      </ul>
    </div>
  );
}

export default Nav;