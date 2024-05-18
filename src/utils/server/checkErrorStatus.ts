/**
 *  checkErrorStatus - 错误状态码统一判断
 */

export function checkErrorStatus(status: number | undefined, message: string | undefined, callback: (errorMessage: string) => any) {
    // ??运算符 -> 如果左边不存在就返回右边
    let errorMessage = message ?? "";
    switch(status) {
        case 400:
            errorMessage = "400 Bad Request";
            break;
        case 401:
            errorMessage = "401 Unauthorized";
            break;
        case 403:
            errorMessage = "403 Forbidden";
            break;
        case 404:
            errorMessage = "404 Not Found";
            break;
        case 405:
            errorMessage = "405 Method Not Allowed";
            break;
        case 408:
            errorMessage = "408 Request Timeout";
            break;
        case 500:
            errorMessage = "500 Internal Server Error";
            break;
        case 501:
            errorMessage = "501 Not Implemented";
            break;
        case 502:
            errorMessage = "502 Bad Gateway";
            break;
        case 503:
            errorMessage = "503 Service Unavailable:";
            break;
        case 504:
            errorMessage = "504 Gateway Timeout";
            break;
        case 505:
            errorMessage = "505 HTTP Version Not Supported";
            break;
    }

    if (errorMessage.length > 0) {
        callback(`checkErrorStatus:${errorMessage}`);
    }
}