import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";


export const AuthAPI = {

    postRegister: async (login, cancel = false) => {
        const response = await api.request({
            url: "api/Team/",
            method: "POST",
            data: login,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


}

const cancelApiObject = defineCancelApiObject(AuthAPI);