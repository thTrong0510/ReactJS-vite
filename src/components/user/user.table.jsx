import { DeleteOutlined, EditOutlined, FastBackwardFilled } from '@ant-design/icons';
import { Table, Button, message, Popconfirm } from 'antd';
import { useState } from 'react';
import UpdateUserModal from './update.user.modal';
import DetailsUserDrawer from './details.user.drawer';
import DeleteUserPopConfirm from './delete.user.popconfirm';
const UserTable = (props) => {
    const { dataUser, loadUser } = props
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
    const [dataDetails, setDataDetails] = useState(null)

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a onClick={() => { setDataDetails(record); setIsDetailsModalOpen(true) }}>{record._id}</a>
                    </>
                );
            },
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            // key: 'age',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            // key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <EditOutlined onClick={() => { setDataUpdate(record); setIsUpdateModalOpen(true); }} style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteUserPopConfirm id={record._id} loadUser={loadUser} />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table dataSource={dataUser} columns={columns} rowKey={'_id'} />
            <UpdateUserModal
                isUpdateModalOpen={isUpdateModalOpen} setIsUpdateModalOpen={setIsUpdateModalOpen}
                dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}
                loadUser={loadUser} />
            <DetailsUserDrawer isDetailsModalOpen={isDetailsModalOpen} setIsDetailsModalOpen={setIsDetailsModalOpen} dataDetails={dataDetails} setDataDetails={setDataDetails} />
        </>
    );

}
export default UserTable;