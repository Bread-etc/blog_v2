/**
 *  axiosRetry - 重复请求方法[请求超市报错重发]
 */
import { AxiosError, AxiosInstance } from "axios";

export function retry(instance: AxiosInstance, err: AxiosError) {
    const config: any = err.config;
    // 获取配置项内容
    const { waitTime, count } = config.retryConfig ?? {};
    console.log(`第${config.currentCount}次重连`);

    // 如果当前的重复请求已经大于规定次数,则返回Promise
    if (config.currentCount >= count) {
        return Promise.reject(err);
    }
    config.currentCount++;

    // 等待间隔时间结束后再执行请求
    return wait(waitTime).then(() => instance(config));
}

function wait(waitTime: number) {
    return new Promise(resolve => setTimeout(resolve, waitTime));
}