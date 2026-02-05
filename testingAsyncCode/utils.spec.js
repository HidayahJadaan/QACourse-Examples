// Testing Async Code
const {getOrders, getOrder}=require('./utils')

describe('getOrders', ()=>{
    it('should return some orders', async()=>{
        const orders = await getOrders()

        expect(orders.length).toBe(2)

        await expect(getOrders()).resolves.toContainEqual({id:1, price:10})
        // await expect(getOrders()).rejects.toContainEqual({id:1, price:10})
    })
})
describe('getOrder', ()=>{
    it('should return 1 order', async()=>{

        
     
    })
})