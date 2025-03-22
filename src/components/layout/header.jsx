import { Link, Navigate } from 'react-router-dom';
import { BookOutlined, HomeOutlined, SettingOutlined, UserOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu, notification } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { getAccountApi, logoutApi } from '../../services/api.service';

const Header = () => {

    const { user, setUser } = useContext(AuthContext)

    const logout = async () => {
        setUser({
            "email": "",
            "phone": "",
            "fullName": "",
            "role": "",
            "avatar": "",
            "id": ""
        })

        const res = await logoutApi();
        if (res?.data) {
            notification.success({
                message: "Logout",
                description: "Logout successful"
            })
            Navigate("/")
        }
        else {
            notification.error({
                message: "Logout",
                description: "Logout fail"
            })
        }

        localStorage.removeItem("access_token")
    }

    const items = [
        {
            label: (
                <Link to={"/"}>
                    Home
                </Link>
            ),
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: (
                <Link to={"/users"}>
                    Users
                </Link>
            ),
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: (
                <Link to={"/books"}>
                    Books
                </Link>
            ),
            key: 'books',
            icon: <BookOutlined />,
        },
        ...(!user["id"] ? [{
            label: (
                <Link to={"/login"}>
                    Login
                </Link>
            ),
            key: 'login',
            icon: <LoginOutlined />,
        }] : [{
            label: (
                `Welcome ${user["email"]}`
            ),
            key: 'welcome',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    key: 'logout',
                    label: <Link onClick={logout}>Logout</Link>,
                },
            ],
        }]),
    ];

    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    );
}

export default Header;