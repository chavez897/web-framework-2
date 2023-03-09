import axios from '../lib/axios';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authentication/store/authenticationSlice";
import { API_ENDPOINTS } from '../utils/apiEndpoints';

const useRefreshToken = () => {
    const dispatch = useDispatch();
    //Get the user session from the redux store
    const user = useSelector((state) => state.session);

    const refresh = async () => {
        const response = await axios.get(API_ENDPOINTS.REFRESH, {
            //To send the HTTP Cookie with the refresh token in the request
            withCredentials: true,
        });
        console.log('Previous access token: ', user.accessToken);
        console.log('New access token: ', response?.data?.accessToken);
        //If the refresh token is valid, update the user session in the redux store
        if (response?.data?.accessToken) {
            //Update the user session in the redux store
            dispatch(login({...user, accessToken: response.data.accessToken}));
        }
        return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
        

