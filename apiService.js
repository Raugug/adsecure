const axios = require('axios');

class apiService {
    constructor(){
        this.flats = []
        this.service = axios.create({
            baseURL: 'https://api.nestoria.es',
            withCredentials: true
          });
    }

    get_page(page) {
        return this.service.get(`/api?action=search_listings&country=es&encoding=json&listing_type=rent&page=${page}&
                                place_name=Barcelona&pretty=1&number_of_results=50`)
        .then(res => {
            res.data.response.listings.forEach((flat, index) =>{
                this.flats.push({rooms: flat.room_number, size: flat.size, price: flat.price, title: flat.title})
            })
        })
        .catch (err => console.log(err))
    }   
}

module.exports = apiService;