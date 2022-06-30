import axios from 'axios';

const token = localStorage.getItem('token');

const headerConfig = {
    headers: {
        "Authorization" : `Bearer ${token}`
    }
}

export const addNote = (noteObj) => {
    console.log(headerConfig,'abc...',noteObj);
    let response = axios.post('http://localhost:4000/api/v1/notes',noteObj,headerConfig);
    return response;
}

export const getAllNotes = () => {
    let response = axios.get('http://localhost:4000/api/v1/notes',headerConfig);
    return response;
}

export const updateNote = (updateObj,id) => {
    let response = axios.put(`http://localhost:4000/api/v1/notes/${id}`,updateObj,headerConfig);
    return response;
}

export const archiveTheNote = (id) => {
    let response = axios.put(`http://localhost:4000/api/v1/notes/isArchived/${id}`,null,headerConfig);
    return response;
}