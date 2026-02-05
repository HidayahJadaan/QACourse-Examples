// Testing Async Code

const getOrders = async ()=>{

    return[
        {id:1, price:10},
        {id:2, price:20},
    ]
}

// Testing MOCKS
const applyDiscount= (orderId)=>{

    const order = db.getOrder(orderId) 

    if(order.price >= 10){
        order.price -= order.price * 0.1
    }

    return order
}


module.exports = {
getOrders,
getOrder
}