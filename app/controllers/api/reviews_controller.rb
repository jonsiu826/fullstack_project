class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else 
            render json:["Must be signed in to leave a review"], status: 409
        end
    end 

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show 
        else
            render json: @review.errors.full_messages, status: 409
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render :show 
        else
            render json: @review.errors.full_messages, status: 409
        end
    end

    def review_params
        params.require(:review).permit(:description, :rating, :user_id, :product_id)
    end
end
