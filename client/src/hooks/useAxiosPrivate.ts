import {axiosPrivate} from "../lib/axios";
import {useEffect, useState} from "react";
import useRefreshToken from "./useRefreshToken";
import { useDispatch, useSelector } from "react-redux";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    
      //Get the user session from the redux store
  const user = useSelector((state) => state.session);

  useEffect(() => {

    const requestIntercept = axiosPrivate.interceptors.request.use(
        (config) => {
            if(!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${user.accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )


    const responseIntercept = axiosPrivate.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error?.response?.status === 403 && !originalRequest.sent) {
                originalRequest.sent = true;
                const accessToken = await refresh();
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return axiosPrivate(originalRequest);
            }
            return Promise.reject(error);
        }
    )
    return () => {
        axiosPrivate.interceptors.request.eject(requestIntercept);
        axiosPrivate.interceptors.response.eject(responseIntercept);
    }
  }, [user, refresh]);

    return axiosPrivate;
};

export default useAxiosPrivate;