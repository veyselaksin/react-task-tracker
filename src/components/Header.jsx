import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, state }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={`${state ? '#BF3945' : '#127369'}`} text={`${state ? 'Close' : 'Add'}`} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'white',
//     backgroundColor: '#262626'
// }

export default Header
