import './Home.css';
import {useSelector, useDispatch} from 'react-redux';


const Home = (props) => {
  const {users, isLoading, error} = useSelector((state) => state.users);
  return (
    <div>
      {
        isLoading &&
        <h2>Loading...</h2>
      }
      
    </div>
  );
}