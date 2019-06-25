Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }, skip: [:sessions, :registrations, :passwords]

  devise_scope :user do
    get 'sign_in', to: "devise/sessions#new", as: :new_user_session
    delete 'sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

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

  get "/app" => "app#show"

end
