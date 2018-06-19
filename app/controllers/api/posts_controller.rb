class Api::PostsController < ApplicationController
  def index
    render json: User.friend_posts(current_user.friends)
  end

  def my_friends
    render json: User.friends(current_user.friends)
  end

  def update
    current_user.friends << params[:id].to_i
    current_user.save
  end
end


