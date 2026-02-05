// Testing Objects

const getOrderById = (id)=>{

    return {id:1, price:10}
}
const getOrderByIdWithError = (id)=>{

    if(!id){
        throw new Error('id is not defined')
    }
    return {id:1, price:10}
}

module.exports ={
    getOrderById,
    getOrderByIdWithError
}