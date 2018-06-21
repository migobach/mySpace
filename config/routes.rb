Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :posts, only: [:index, :update]
    resources :users, only: [:index, :update]
    get 'add_friends/:id', to: 'posts#add_friends'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
