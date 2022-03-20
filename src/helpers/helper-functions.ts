export const getEntityById = (id: number, entityList: any[]) => {
    let result = null;

    for (let i = 0; i < entityList.length; i++) {
        const entity = entityList[i];
        if (Number(entity.id) === id) {
            result = entity;
            break;
        }
    }
    
    return result;
}