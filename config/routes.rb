Rails.application.routes.draw do
  root 'spaces#index'
  devise_for :users

  resources :spaces, only: [:index, :show, :new]
  resources :events, only: [:index, :show, :new]

end
