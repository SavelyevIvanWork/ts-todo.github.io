import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {fetchUsers} from "../store/action/user";
import {useActions} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <>
            {loading && <h1>Идёт загрузка...</h1>}
            {error && <h1>{error}</h1>}

            <div className="user-list">
                {users.map(user =>
                    <div key={user.id}>{user.name}</div>
                )}
            </div>
        </>
    )
}

export default UserList