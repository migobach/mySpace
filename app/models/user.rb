class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :posts

  serialize :friends, Array

  def self.friend_list(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id NOT IN(?)", ids).order
  end
end


# User.find_by_sql("")

