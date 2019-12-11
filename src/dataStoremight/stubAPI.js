import _ from "lodash";


class StubAPI {
    constructor(){
        this.businesses = [
            { 
           "id": 1,
            "name": "Munster Bar",
            "image_url":
             "https://s3-media3.fl.yelpcdn.com/bphoto/jiIa-2DLja4M2IFOBwrgQA/o.jpg",
            "url":
             "https://www.yelp.com/biz/munster-bar-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 39,
            "rating": 4.5,
            "display_phone": "+353 51 874 656"
        },
          { "id": 2,
            "name": "Bodéga!",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/7Ohdni6rCXUyjTSPC67c3w/o.jpg",
            "url":
             "https://www.yelp.com/biz/bod%C3%A9ga-waterford-2?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 30,
            "rating": 4.5,
            "display_phone": "+353 51 844 177"
          },
          { "id": 3,
            "name": "Momo",
            "image_ur":
             "https://s3-media4.fl.yelpcdn.com/bphoto/7Kvfji75cUDP8uxI_yh2zA/o.jpg",
            "url":
             "https://www.yelp.com/biz/momo-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 15,
            "rating": 5,
            "display_phone": "+353 51 581 509"
         },
          { "id": 4,
            "name": "Emiliano s Italian Restaurant",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/bLlZn122LntzbtK3_OhMDA/o.jpg",
            "url":
             "https://www.yelp.com/biz/emilianos-italian-restaurant-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 17,
            "rating": 5,
            "display_phone": "+353 51 820 333"
          },
          { "id": 5,
            "name": "Burzza",
            "image_url":
             "https://s3-media3.fl.yelpcdn.com/bphoto/qO4dcwM9wWCbxSrVEhoWXg/o.jpg",
            "url":
             "https://www.yelp.com/biz/burzza-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 13,
            "rating": 5,
            "display_phone": "+353 51 844 969"
          },
          { "id": 6,
            "name": "Antichi Sapori",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/70RPFS9ciNeCfmoKoHxSyQ/o.jpg",
            "url":
             "https://www.yelp.com/biz/antichi-sapori-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 9,
            "rating": 5,
            "display_phone": "+353 51 581 034"
          },
          { "id": 7,
            "name": "The Reg Waterford",
            "image_url":
             "https://s3-media3.fl.yelpcdn.com/bphoto/L4SBcvWbErEOb1bzTslI4g/o.jpg",
            "url":
             "https://www.yelp.com/biz/the-reg-waterford-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 26,
            "rating": 4,
            "display_phone": "+353 51 583 000"
          },
          { "id": 8,
            "name": "Blackfriars",
            "image_url":
             "https://s3-media4.fl.yelpcdn.com/bphoto/_V15kUHbYcwfut8z_X7UeA/o.jpg",
            "url":
             "https://www.yelp.com/biz/blackfriars-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 9,
            "rating": 5,
            "display_phone": "+353 86 809 6375"
         },
          { "id": 9,
            "name": "Geoffs Cafe Bar",
            "image_url":
             "https://s3-media4.fl.yelpcdn.com/bphoto/aYHTQcM4_kWbIJyOcjloBw/o.jpg",
            "url":
             "https://www.yelp.com/biz/geoffs-cafe-bar-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 10,
            "rating": 4.5,
            "display_phone": "+353 51 874 787"
          },
          { "id": 10,
            "name": "The Gratten Bar",
            "image_url":
             "https://s3-media2.fl.yelpcdn.com/bphoto/X0_ytjpVYj9vt7f8D_7sjg/o.jpg",
            "url":
             "https://www.yelp.com/biz/the-gratten-bar-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 7,
            "rating": 5,
            "display_phone": "+353 51 324 100"
         },
          { "id": 11,
            "name": "Mclearys",
            "image_url":
             "https://s3-media4.fl.yelpcdn.com/bphoto/MwO2iVwtZxWBWsxxIP-o1g/o.jpg",
            "url":
             "https://www.yelp.com/biz/mclearys-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 6,
            "rating": 5,
            "display_phone": ""
         },
          { "id": 12,
            "name": "Peppers",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/ZnhJ6TPaxtl6aQ-SPiogwQ/o.jpg",
            "url":
             "https://www.yelp.com/biz/peppers-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 7,
            "rating": 4.5,
            "display_phone": "+353 51 853 739"
         },
          { "id": 13,
            "name": "La Boheme Restaurant & Wine Bar",
            "image_url":
             "https://s3-media4.fl.yelpcdn.com/bphoto/vRZDlco17WxXx6xW9TSCcA/o.jpg",
            "url":
             "https://www.yelp.com/biz/la-boheme-restaurant-and-wine-bar-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 8,
            "rating": 4.5,
            "display_phone": "+353 51 875 645"
         },
          { "id": 14,
            "name": "Cafe Goa",
            "image_url":
             "https://s3-media3.fl.yelpcdn.com/bphoto/-ieduVGkBSao360FitUG5A/o.jpg",
            "url":
             "https://www.yelp.com/biz/cafe-goa-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 5,
            "rating": 5,
            "display_phone": "+353 51 304 970"
         },
          { "id": 15,
            "name": "The Gingerman",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/IpsR9Z8iPomRkrmIPREMmA/o.jpg",
            "url":
             "https://www.yelp.com/biz/the-gingerman-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 6,
            "rating": 4.5,
            "display_phone": "+353 51 879 522"
         },
          { "id": 16,
            "name": "The Granary Cafe",
            "image_url":
             "https://s3-media3.fl.yelpcdn.com/bphoto/GD3lTSXRaeT9xTvDOx7-ow/o.jpg",
            "url":
             "https://www.yelp.com/biz/the-granary-cafe-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 8,
            "rating": 4.5,
            "display_phone": "+353 51 854 428"
         },
          { "id": 17,
            "name": "LAtmosphere",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/SnvZ4ja5HKaIata4FAWWXg/o.jpg",
            "url":
             "https://www.yelp.com/biz/l-atmosphere-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 8,
            "rating": 4.5,
            "display_phone": "+353 51 858 426"
         },
          { "id": 18,
            "name": "Dry Dock Bar And Grill Dooleys Hotel",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/agMZjjyL859XOJUD7FfRUg/o.jpg",
            "url":
             "https://www.yelp.com/biz/dry-dock-bar-and-grill-dooleys-hotel-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 5,
            "rating": 4.5,
            "display_phone": ""
         },
          { "id": 19,
            "name": "Waterford Museum of Treasures",
            "image_url":
             "https://s3-media2.fl.yelpcdn.com/bphoto/RvwwM2ii29HbZPFuNNpiLA/o.jpg",
            "url":
             "https://www.yelp.com/biz/waterford-museum-of-treasures-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 5,
            "rating": 4.5,
            "display_phone": "+353 51 304 500"
         },
          { "id": 20,
            "name": "Phil Grimes",
            "image_url":
             "https://s3-media1.fl.yelpcdn.com/bphoto/PlVB4rXIiUGQHMHvmCfIxQ/o.jpg",
            "url":
             "https://www.yelp.com/biz/phil-grimes-waterford?adjust_creative=6xVFCKS-B8u36iyACUu3rA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=6xVFCKS-B8u36iyACUu3rA",
            "review_count": 3,
            "rating": 5,
            "display_phone": "+353 51 875 759"
            }
           ];
    }

    addBusiness(name, review_count, rating, display_phone,) {
        let id = 1;
        let last = _.last(this.businesses);
        if (last) {
        id = last.id + 1;
        }
        let len = this.businesses.length;
        let newLen = this.businesses.push({
        id,
        review_count,
        name,
        rating,
        display_phone
        });
        return newLen > len;
    }

    

    findBusiness(id) {
        let index = _.findIndex(
        this.businesses,
        businesses => `${businesses.name}` === id
        );
        if (index !== -1) {
        return this.businesses[index];
        }
        return null;
    }

  

    deleteBusiness(k) {
        let elements = _.remove(this.businesses, businesses => businesses.name === k);
        return elements;
    }

    

    initialize(businesses) {
        this.businesses = businesses; 
    }

    getAll() {
        return this.businesses;
    }

    getBusiness(id) {
        let index = _.findIndex(this.businesses, businesses => businesses.id === id);
        let result = index !== -1 ? this.businesses[index] : null;
        return result;
    }

    updateBusiness(key, name, review_count, rating,display_phone) {
        let index = _.findIndex(this.businesses, businesses => businesses.name === key);
        if (index !== -1) {
        this.businesses[index].name = name;
        this.businesses[index].review_count = review_count;
        this.businesses[index].rating = rating;
        this.businesses[index].display_phone = display_phone;
        return true;
        }
        return false;
    }
}

export default new StubAPI();