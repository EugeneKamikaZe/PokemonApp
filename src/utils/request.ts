import Url from 'url'
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

interface IOptions {
    method: string,
    body?: string,
}

interface IGetUrlWithParamasConfig {
    method: string,
    uri: Partial<URL>,
    body: object
}

async function req <T>(endpoint: string, query: object): Promise<T> {
    const {method, uri, body}: IGetUrlWithParamasConfig = getUrlWithParamsConfig(endpoint, query)

    let options: IOptions = {
        method
    }

    if (Object.keys(body).length > 0) {
        options.body = JSON.stringify(body)
    }

    return await fetch(Url.format(uri),options).then((res) => res.json())
}

export default req