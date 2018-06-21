class Api::PostsController < ApplicationController

  def index
    # binding.pry
    render json: Post.all
    # render json: Post.all.where(index_posts_on_user_id == id)
    # render json: User.(current_user.posts)
  end

  def add_friends
    # binding.pry
    add_friends = current_user.friends << params[:id]
    current_user.update(friends: add_friends)
    render json: current_user
  end

  # def my_friends
  #   # put in my sql method here to show my friends on the page
  # end

  def update
    current_user.save
  end
end


