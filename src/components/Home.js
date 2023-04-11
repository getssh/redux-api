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
                  {user.firstName} {user.lastName}
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