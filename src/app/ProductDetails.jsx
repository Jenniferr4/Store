import {ProductRepository} from '../api';
import React from 'react';


export class ProductDetails extends React.Component {
    productRepository = new ProductRepository();


    state = {
        

    };


    render() {
        // if (!this.state.product) {
        //     return <div>Loading...</div>;
        // }
        return <>
            <div>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">
                                Tasty Snacks
                            </a>
                        </li>
                        <li
                         class="breadcrumb-item active">
                            {this.state.name}
                        </li>
                    </ol>
                </nav>
                <div class="container p-5 bg-light">
                    <div class="d-flex">
                        <div class="mr-4">
                            <img class="product-image" src="[[PRODUCT_IMAGE_URL]]" />
                        </div>
                        <div>
                            <h1 class="font-weight-light">{this.state.name}</h1>
                            <span class="badge badge-primary badge-lg">
                                [[PRODUCT_PRICE]]
                            </span>
                            <p class="text-muted mt-4">
                                [[PRODUCT_DESCRIPTION]] {this.state.description}
                            </p>
                        </div>
                    </div>
                </div>
                [[REVIEW_LIST]]
                [[REVIEW_FORM]]
            </div>
        </>;
    }

    componentDidMount(){
        let productId = this.props.match.params.productId;
        if(productId){
            this.productRepository.getProductById(productId)
        .then(product => this.setState(product));
        }
        
    }

}