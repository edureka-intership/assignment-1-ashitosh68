const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

//2.a

console.log(Object.entries(orderData))

console.log(Object.values(orderData))

console.log(Object.keys(orderData))

const total = Object.values(orderData).reduce((total, num) => {
    return total += num;
}, 0)

console.log("Total number of orders placed = ", total);

//2.b

console.log("Total number of order proportions = ", Object.keys(orderData).length)

//2.c

const item = Object.keys(orderData).map((value, index) => {
    return {
        'id': index + 1,
        'order': value,
        'order percentage': ((orderData[value] / total) * 100),
        'restaurant': 'Punjabi Tadka'
    }
})

console.log(item)
