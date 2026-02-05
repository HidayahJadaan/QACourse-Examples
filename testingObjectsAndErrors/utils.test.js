const {getOrderById,
    getOrderByIdWithError
}= require('./utils')


// TEsting Objects
describe('getOrderById', ()=>{
    
    it('should return an object', ()=>{

        const result = getOrderById(1)

        // exactly value+reference
        // expect(result).toBe({id:1, price:10})
        
        
        // value+reference
        expect(result).toEqual({id:1, price:10})
    })
})
// ===================================getOrderByIdWithError
describe('getOrderByIdWithError', ()=>{
    
    it('should return an object that contain error', ()=>{

        // const result = getOrderByIdWithError()
        // expect(result).toThrow()

        expect(()=>getOrderByIdWithError()).toThrow();


    })
    
    it('error 2', ()=>{

        expect(()=>getOrderByIdWithError()).toThrow('id is not defined');


    })
})