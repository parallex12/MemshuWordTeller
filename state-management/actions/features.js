import axios from "axios"
import { GET_CATEGORIES } from "../types/types"

export const getCategories = () => dispatch => {
    return new Promise((resolve, reject) => {
        try {
            axios.get("/categories")
                .then((res) => {
                    let _categories = res?.data
                    if (_categories?.length > 0) {
                        dispatch({ type: GET_CATEGORIES, payload: _categories })
                        resolve(200)
                    } else {
                        reject(404)
                    }
                })
                .catch((e) => {
                    reject(e)
                })
        } catch (e) {
            reject(e)
        }
    })
}

export const checkForWord = (postData) => dispatch => {
    return new Promise((resolve, reject) => {
        try {
            var data = new FormData();
            data.append('category', postData?.category);
            data.append('language', postData?.language);
            data.append('file',
                {
                    uri: postData?.image?.uri,
                    name: 'word.jpg',
                    type: 'image/jpg'
                });
            axios.post("/upload", data)
                .then((res) => {
                    resolve(res)
                })
                .catch((e) => {
                    reject(e)
                })
        } catch (e) {
            reject(e)
        }
    })
}