import { Link } from 'react-router-dom'
const link = () => (
    <div>
        <nav>
            <ul>
                <li><Link to='/'></Link></li>
                <li><Link to='/universe'>About HSE</Link></li>
                <li><Link to='/who'>Who I am</Link></li>
                <li><Link to='/games'>play</Link></li>
                <li><Link to='/inuniverse'>You want to be HSE student</Link></li>
            </ul>
        </nav>
</div>)
export default link()