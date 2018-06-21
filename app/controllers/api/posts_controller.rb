class Api::PostsController < ApplicationController
  def index
    render json: User.friend_posts(current_user.friends)
  end

  def add_friends
    add_friends = current_user.friends << params[:id]
    current_user.update(friends: add_friends)
    render json: current_user
  end

  def my_friends
    # put in my sql method, 
  end

  def update
    current_user.save
  end
end


