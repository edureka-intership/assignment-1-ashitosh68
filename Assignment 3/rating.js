const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

// a.

console.log(Object.entries(ratingData));

console.log(ratingData.map(({ restaurant }) => restaurant));

console.log(ratingData.map(({ rating }) => rating));

const container = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant)));

let ar = []

container.map((value) => {
    let count = 0;
    let total = 0;

    const filterData = ratingData.filter(obj => obj.restaurant == value);
    filterData.map((item) => {
        total = filterData.reduce((prev, next) => prev + next.rating, 0);
        count++;
    })

    ar.push({ 'restaurant': value, 'avarageRating': (total / count) });
    return ar;

})
console.log(ar);

// b.

console.log(ar.filter(item => item.avarageRating >= 4));
