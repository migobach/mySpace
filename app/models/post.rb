class Post < ApplicationRecord
  belongs_to :user

  def self.liked(me, friendId)
    me = me.friends.empty? ? [0] : friendId
    User.where("id IN (?)", me)
  end

  # add posts 

end
