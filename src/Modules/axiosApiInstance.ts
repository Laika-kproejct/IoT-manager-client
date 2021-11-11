import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//refresh 갱신 기능이 있는 axios 인스턴스
export const axiosApiInstance = axios.create({
  baseURL:"http://3.36.174.74:8080/", // 백엔드 마이크로들
});
//Request interceptor for API calls
//요청 전에 헤더에 엑세스 토큰을 넣는다.
axiosApiInstance.interceptors.request.use(
  async config => {
    
    const accessToken: any = await AsyncStorage.getItem('accessToken');
    config.headers = {
      "x-auth-token": accessToken,
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

// Response interceptor for API calls
// 엑세스 토큰이 만료된 경우 refresh토큰으로 엑세스토큰을 갱신하고 다시 요청보낸다
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    // accessToken 만료 시
    originalRequest._retry = true;
    const refreshToken: any = await AsyncStorage.getItem('refreshToken');

    const newAccessToken: any = await refreshAccessToken(refreshToken);

    originalRequest.headers['x-auth-token'] = newAccessToken;
    AsyncStorage.setItem('accessToken', newAccessToken);
    return axios(originalRequest);
  }
  return Promise.reject(error);
});

const refreshAccessToken = (refreshToken: string) => {
  //토큰 갱신해서 accessToken 반환
  return new Promise((succ, fail) => {
    axios.post('http://3.36.174.74:8080/manager/refreshToken',{refreshToken: refreshToken}).then((response: any) => {
      succ(response.data.list.accessToken);
    }).catch((error) => {
      fail(null);
    });
  });
}