import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react'
import { fetchAllUsers } from "../services/api.service";
import UpdateUserModal from "../components/user/update.user.modal";

const UserPage = () => {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        loadUser()
    }, [])


    const loadUser = async () => {
        const res = await fetchAllUsers()
        setDataUser(res.data)
        console.log("load User")
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <hr></hr>
            <UserTable dataUser={dataUser} loadUser={loadUser} />
        </div>
    );
}

export default UserPage;