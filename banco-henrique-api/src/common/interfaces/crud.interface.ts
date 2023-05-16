export interface CRUD {
    list: () => Promise<any>,
    create: (resource:any) => Promise<any>,
    updateById: (resource:any) => Promise<any>,
    readById: (resourceId:any) => Promise<any>,
    deleteById: (resourceId:any) => Promise<void>,
}