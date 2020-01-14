export interface DataManager {
    setData(data: string, file?: string): Promise<any>;
    getData(file?: string): Promise<any>;
}