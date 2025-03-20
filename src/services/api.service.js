import axios from './axios.customize';

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

const updateUserApi = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)
}

const fetchAllUsers = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND)
}

const deleteUserById = (_id) => {
    const URL_BACKEND = "/api/v1/user/" + _id;
    return axios.delete(URL_BACKEND)
}

const uploadImageFile = (file, folder) => {
    const URL_BACKEND = "/api/v1/file/upload";

    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data",
        }
    }
    const bodyFormData = new FormData()
    bodyFormData.append("fileImg", file)
    return axios.post(URL_BACKEND, bodyFormData, config);
}

const updateUserAvatar = (_id, avatar, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        avatar: avatar,
        fullName: fullName,
        phone: phone,
    }
    return axios.put(URL_BACKEND, data)
}

const registerUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

export {
    createUserApi, updateUserApi, fetchAllUsers, deleteUserById, uploadImageFile, updateUserAvatar, registerUserApi
}