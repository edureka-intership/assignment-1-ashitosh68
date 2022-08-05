class restaurantManager {
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Malad west',
        city: 'Mumbai'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Punestation',
        city: 'Pune'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Ghansoli',
        city: 'Navi Mumbai'
    },
    {
        id: 4,
        restaurantName: 'Pizza hut',
        address: 'Andheri',
        city: 'Mumbai'
    },
    {
        id: 5,
        restaurantName: 'Subway',
        address: 'Goregaon',
        city: 'Mumbai'
    }]

    printAllRestaurantNames = () => {

        return this.restaurantList.map(item => item.restaurantName)

    }
    filterRestaurantByCity = (cityname) => {

        return this.restaurantList.filter(item => item.city.toLowerCase() == cityname.toLowerCase())
        
    }
}

const rm = new restaurantManager()

console.log(rm.printAllRestaurantNames())

console.log(rm.filterRestaurantByCity("mumbai"))