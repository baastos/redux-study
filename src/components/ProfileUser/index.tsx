import { useSelector } from 'react-redux'
import { StoreProps } from '../../store';
import { User } from '../../store/modules/user/types';

export function ProfileUser() {

  const data = useSelector<StoreProps, User>(state => state.user);

  return (

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>name:{data.name}</label>
      <label>email:{data.email}</label>
    </div>
  )
}