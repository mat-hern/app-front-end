import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:5261/'
})

const GetUrl = (entity: string, id?: string): string => {
    const url = id ? `${entity}/${id}` : entity
    return url
}

export const GetRequest = async <T>(entity:string, id?: string): Promise<T> => {
    const { data } = await api.get<T>(GetUrl(entity, id));
    return data;
}

export const PostRequest = async <TBody, TResponse>(entity: string, id?: string, body?: TBody): Promise<TResponse> => {
    const {data} =  await api.post<TResponse>(GetUrl(entity, id), body)
    return data
}