import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            Authorization: 
            'Client-ID 228e24eb667e8b3b283d988e9e04086b9204e9fe8c609d24ce407ae6874b0567'}

});