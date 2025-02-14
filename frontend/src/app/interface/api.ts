export interface Response<T> {
    body: T;
    status: number;
    error: boolean;
}



export interface DataState<T> {
    loading: boolean;
    data: T;
    error: string | null;
}