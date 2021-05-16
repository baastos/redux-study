import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserCredentials } from "../../store/modules/user/action";
import { User } from "../../store/modules/user/types";

const INITIAL_STATE = {
  name: '',
  email: ''
}
export function Form() {
  const [user, setUser] = useState<User>(INITIAL_STATE)
  const dispatch = useDispatch()

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(addUserCredentials(user))

    setUser(INITIAL_STATE);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="name"
        onChange={e => setUser({
          ...user,
          name: e.target.value
        })}
        value={user.name}

      />
      <input
        type="text"
        placeholder="email"
        onChange={e => setUser({
          ...user,
          email: e.target.value
        })}
        value={user.email}
      />
      <button onClick={handleSubmit}>Salvar</button>
    </form>
  )
}