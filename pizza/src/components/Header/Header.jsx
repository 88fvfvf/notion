import HeaderLeft from './Left/HeaderLeft'
import HeaderRight from './Right/HeaderRight'
import './headerStyles.css'

const Header = () => {
    return (
        <header className='header'>
            <HeaderLeft />
            {/* Header Right */}
            <HeaderRight/>
        </header >
    )
}

export default Header