import { useState } from 'react';
import Avatar from '../../assets/avatars/avatar-1.png';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false);
    const [isShowMainMenu, setIsShowMainMenu] = useState<boolean>(false);

    const toggleProfile = () => {
        setIsShowProfile(!isShowProfile);
    };

    const toggleMainMenu = () => {
        setIsShowMainMenu(!isShowMainMenu);
    };

    return (
        <header className='bg-white shadow-md relative'>
            <nav className='navbar w-4/5 m-auto flex justify-between items-center'>
                <button type="button" title='Toggle Sidebar' className='md:hidden' onClick={toggleMainMenu}>
                    <FontAwesomeIcon icon={faBars} className='text-2xl' />
                </button>
                <Link to='/' className='flex gap-4 items-center'>
                    <img src={Logo} alt="Logo" className='w-14' />
                    <span className='text-2xl font-bold'>Todo App</span>
                </Link>
                <div className={`md:flex justify-center items-center *:block *:p-5 *:hover:bg-[#33adff] *:hover:text-white ${isShowMainMenu ? 'block absolute top-full left-0 w-full bg-slate-50 *:border-b *:border-slate-200' : 'hidden'}`}>
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-[#33adff] text-white" : ""}`}>Home</NavLink>
                    <NavLink to="/admin" className={({ isActive }) => `${isActive ? "bg-[#33adff] text-white" : ""}`}>Dashboard</NavLink>
                    <NavLink to="/player" className={({ isActive }) => `${isActive ? "bg-[#33adff] text-white" : ""}`}>Player</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${isActive ? "bg-[#33adff] text-white" : ""}`}>Contact</NavLink>
                </div>
                <div className="profile-menu relative" onClick={toggleProfile} aria-hidden="true">
                    <div className="profile-avatar w-12 rounded-full border border-[#33adff] overflow-hidden cursor-pointer">
                        <img src={Avatar} title='Avatar' alt='avatar.png' className='' />
                    </div>
                    <div className={`dropdown-menu rounded-md absolute top-12 right-0 bg-white shadow-md w-[200px] ${isShowProfile ? 'block' : 'hidden'}`}>
                        <div className="dropdown-item border-b border-slate-100">
                            <NavLink to="/profile" className={({ isActive }) => `block p-4 hover:bg-[#33adff] hover:text-white hover:rounded-t-md ${isActive ? "bg-blue-500 text-white" : ""}`}>Profile</NavLink>
                        </div>
                        <div className="dropdown-item">
                            <button type='button' className='block w-full p-4 text-left hover:bg-[#33adff] hover:text-white hover:rounded-b-md cursor-pointer'>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;