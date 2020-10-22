import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        let review = { description: this.state.description, rating: this.state.rating, user_id: this.props.currentUser.id, product_id: this.props.match.params.productId}
        this.props.createReview(review);
    }

    render() {
        const signin = (
            <p className="signin-review">Please sign in to leave a review</p>
        )

        let leavereview;
        if (this.props.currentUser) {
            leavereview = (
                <div className="create-review-container">
                   
                    <form className="create-review-form">
                        <div className="review-wrapper">
                            <h1 className="form-title">Create a Review</h1>
                            <h3 className="form-desc">Description</h3>
                            <textarea className="form-desc-input" type="text" onChange={this.handleChange("description")} value={this.state.description} />
                            <h3 className="form-rating">Rating</h3>
                            <label> 1
                                <input type="radio" className="form-rating-input"  name="rating" onChange={this.handleChange("rating")} value= "1" />
                            </label>  
                             <label> 2
                                <input type="radio" className="form-rating-input" name="rating" onChange={this.handleChange("rating")} value= "2" />
                            </label>  
                            <label> 3
                                <input type="radio" className="form-rating-input" name="rating" onChange={this.handleChange("rating")} value="3" />
                            </label> 
                            <label> 4
                                <input type="radio" className="form-rating-input" name="rating" onChange={this.handleChange("rating")} value="4" />
                            </label> 
                            <label> 5
                                <input type="radio" className="form-rating-input" name="rating" onChange={this.handleChange("rating")} value="5" />
                            </label> 
                        </div>
                        {/* <textarea onChange={(e) => this.setState({body: e.currentTarget.value})} value={this.state.body}/> */}
                        <button className="form-button"onClick={this.handleSubmit}>Add Review</button>
                    </form>
                </div>
            )
        }
        // debugger
        return (
          this.props.currentUser ? leavereview : signin
        )
    }
}
export default ReviewForm;