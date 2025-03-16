import { Button, Drawer } from 'antd';
const DetailsUserDrawer = (props) => {

    const { isDetailsModalOpen, setIsDetailsModalOpen, dataDetails, setDataDetails } = props;

    const onClose = () => {
        setIsDetailsModalOpen(false);
        setDataDetails(null);
    };
    return (
        <>
            <Drawer title="User Details" onClose={onClose} open={isDetailsModalOpen} >
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    <p>ID: {dataDetails ? dataDetails._id : ""}</p>
                    <p>Full Name: {dataDetails ? dataDetails.fullName : ""}</p>
                    <p>Email: {dataDetails ? dataDetails.email : ""}</p>
                    <p>Phone: {dataDetails ? dataDetails.phone : ""}</p>
                </div>




            </Drawer>
        </>
    );
};
export default DetailsUserDrawer;