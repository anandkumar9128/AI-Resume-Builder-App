import axios from 'axios'

const api=axios.create({
    baseURL:"https://ai-resume-builder-app-backend.onrender.com"
})

export default api;
