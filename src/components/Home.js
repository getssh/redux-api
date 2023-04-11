import { useEffect } from 'react';
import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/users/userSlice';

const Home = () => {
  const {users, isLoading, error} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers()).then((result) => console.log(result));
  }, [dispatch])
  console.log(users);
  return (
    <div>
      {
        isLoading &&
        <h2>Loading...</h2>
      }
      {
        error &&
        <h2>Error</h2>
      }

      <div>
        <ul>
          {
            users.map((user, index) => {
              return (
                <li key={index}>
                  {`${user.name.first} ${user.name.last}`}
                </li>
              )
            })
          }
        </ul>
        <button>Add user</button>
      </div>
    </div>
  );
}

export default Home;