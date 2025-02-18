async function fetchJson(url:string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`网络请求错误，状态码: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        // 可以在此处添加日志、错误上报等处理
        throw error;
    }
}

export { fetchJson };