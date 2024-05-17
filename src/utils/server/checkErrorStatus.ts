/**
 *  checkErrorStatus - 错误状态码统一判断
 */

export function checkErrorStatus(status: number | undefined, message: string | undefined, callback: (errorMessage: string) => any) {
    // ??运算符 -> 如果左边不存在就返回右边
    let errorMessage = message ?? "";
    switch(status): {
        case 400:
            errorMessage = "客户端错误, 请求格式或参数有误!";
            break;
        case 401:
            
    }
}