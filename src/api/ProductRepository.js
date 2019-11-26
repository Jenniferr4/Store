import axios from 'axios';
export class ProductRepository{
    
    url = "https://api.johnlawrimore.com/store/products";
    config = {
        headers: {
            Authorization: 'jennifer'
        }
    };


    getProductById(id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
                
        });
    });
    }

    getProduct(){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
                
        });
    });
    }


    addReview(productId, review){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/${productId}`, review, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            });
        });
    }




}

 
// getProducts
// getProductById(id)

// getProduct(productId)
// addReview(productId, review)
