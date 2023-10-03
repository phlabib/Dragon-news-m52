
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto m-4' src= {logo} alt="" />
            <p className='mb-4'>Journalism Without Fear or Favour</p>
            <p className="text-xl md-4">{moment().format("dddd, MMMM D, YYYY")}</p>

        </div>
    );
};

export default Header;                   