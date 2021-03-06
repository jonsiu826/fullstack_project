import React from 'react';
import EditReviewForm from "./edit_review_form_index_item"

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        if (!this.props.users) return null;
        let user;
        if (!this.props.review) return null;
        user = this.props.users[this.props.review.user_id]
        let deleteButton;
        if (this.props.currentUser && this.props.currentUser.id === user.id) {
            deleteButton = <button className="review-button" onClick={() => this.props.deleteReview(this.props.review.id)}>Delete Review</button>
        } else {
            deleteButton = null
        }

          let editButton;
        if (this.props.currentUser && this.props.currentUser.id === user.id) {
            editButton = <button className="review-button" onClick={() => this.props.openModal('edit_review')}>Edit Review</button>
        } else {
            editButton = null
        }
    
        return(
            <div className="single-review-container">
                <ul className="right-pane-review">
                    <li className="single-review-username">User: {user.username}</li>
                    <li className="single-review-desc">Description: {this.props.review.description}</li>  
                    <li className="single-review-rating">Rating: {this.props.review.rating}/5</li>
                </ul>
                <div className="review-buttons">
                    <div className="review-delete">{deleteButton}</div>
                    <div className="review-edit">{editButton}</div>
                </div>
                    {/* <EditReviewForm closeModal={this.props.closeModal} review={this.props.review} updateReview={this.props.updateReview} currentUser={this.props.currentUser} user={this.props.user}/> */}
            </div>
        )
    }
}

export default ReviewIndexItem;