/**
 *  index -- 实例创建、拦截器实现
 */
import axios, { AxiosError } from "axios";
import { RequestInterceptors } from "./type";
import { checkErrorStatus } from "./checkErrorStatus";
import { retry } from "./axiosRetry";
import AxiosMax from "./Axios";
import staticAxiosConfig from "./config";

const _RequestInterceptors: RequestInterceptors = {

    requestInterceptors(config) { return config },

    requestInterceptorsCatch(err) { return err },

    responseInterceptor(config) { return config },

    responseInterceptorsCatch(axiosInstance, err: AxiosError) {
        let message = err.code === "ECONNABORTED" ? "请求超时" : "undefined";
        // 判断本次请求是否已经被取消
        if (axios.isCancel(err)) {
            return Promise.reject(err);
        }

        // 检查响应状态码
        checkErrorStatus((err as AxiosError).response?.status, message, (message) => console.log(message))

        // 响应错误实行重连功能
        return retry(axiosInstance, err as AxiosError);
    },
};

// 创建AxiosMax实例

const useRequest = new AxiosMax({
    directlyGetData: true,
    baseURL: staticAxiosConfig.baseUrl,
    timeout: 3000,
    interceptors: _RequestInterceptors,
    abortRepetitiveRequest: true,
    retryConfig: {
        count: 5,
        waitTime: 500
    }
});

export default useRequest;