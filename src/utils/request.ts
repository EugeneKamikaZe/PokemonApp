import Url from 'url'
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

async function req <T>(endpoint: string): Promise<T> {
    const uri = Url.format(getUrlWithParamsConfig(endpoint))

    return await fetch(uri).then((res) => res.json())
}

export default req