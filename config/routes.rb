Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :spaces, only: [:index, :show, :new]
  resources :events, only: [:index, :show, :new]
  resources :homes, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :spaces, only: [:index, :show, :create, :update]
      resources :tech_directors, only: [:index, :show, :create, :update]
      resources :events, only: [:index, :show, :create, :update]
      resources :events, only: [:index, :show, :create, :update]
      get 'pmevents', to: 'pmevents#events'
    end
  end

end
