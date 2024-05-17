/**
 *  Axios.ts 封装请求实体类
 */

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { AxiosOptions, RequestInterceptors } from "./type";

class AxiosMax {
    // axios实例, 通过axios.create()方法创建
    private axiosInstance: AxiosInstance;
    // 传入配置
    private options: AxiosOptions;
    // 拦截器
    private interceptors: RequestInterceptors | undefined;

    constructor(options: AxiosOptions) {
        this.axiosInstance = axios.create(options);
        this.options = options;
        this.interceptors = options.interceptors;
        // 对拦截器进行初始化注册
        this.setInterceptors();
    }

    /**
     *  统一请求方法
     */
    request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.request<any, AxiosResponse<Response>>(config).then(res => {
                return resolve(res as unknown as Promise<T>);
            }).catch(err => {
                return reject(err);
            })
        })
    }

    get<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'GET' });
    }

    post<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'POST' });
    }

    delete<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'PUT' });
    }

    put<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'DELETE' });
    }

    /**
     *  注册拦截器方法
     */
    setInterceptors() {
        // 如果配置中并没有传入拦截器, 则直接返回
        if (!this.interceptors) return;

        // 解构各个拦截器
        const {
            requestInterceptors,
            requestInterceptorsCatch,
            responseInterceptor,
            responseInterceptorsCatch
        } = this.interceptors;

        // 挂载请求拦截器
        this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            if (requestInterceptors) {
                // 先交给 requestInterceptors 做相应的配置
                config = requestInterceptors(config);
            }
            return config;
        }, requestInterceptorsCatch ?? undefined);

        // 挂载响应拦截器
        this.axiosInstance.interceptors.response.use((res: AxiosResponse) => {
            if (responseInterceptor) {
                res = responseInterceptor(res);
            }

            // 根据 options.directlyGetData 配置选项是否直接取得 data 值
            if (this.options.directlyGetData) {
                res = res.data;
            }
            return res;
        }, (err: AxiosError) => {
            if (responseInterceptorsCatch) {
                // 如果存在响应错误拦截器, 则将返回值交给 responseInterceptorsCatch
                return responseInterceptorsCatch(this.axiosInstance, err);
            }
            return err;
        })
    }
}