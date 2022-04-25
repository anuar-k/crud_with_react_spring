import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "76a9beb6-bd24-44f0-ad24-bc8b6c99ba3c"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize = 2) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        // return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(profileId) {
        console.warn("Using deprecated usersAPI method. Please use profileAPI method")
        return profileAPI.getProfile(profileId)
    }
}

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    saveProfileInfo(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaURI() {
        return instance.get('security/get-captcha-url')
    }
}