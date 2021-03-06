import Requests from './requests'

export default class UserService{

    static async login(body){
        return new Promise((resolve, reject) => {
            Requests.get("/user/login", body)
                .then(res => {
                    if(res.status >= 200 && res.status < 300){
                        resolve(res);
                    }else{
                        reject(res.status);
                    }
                });
        });
    }
}