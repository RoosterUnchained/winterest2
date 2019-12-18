Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index, :show, :create]
    resources :reads, only: [:create, :destroy]
    resources :studies, only: [:create, :destroy]
    resources :moves, only: [:create, :destroy, :show]
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :favorites, only: [:create, :destroy]
  end

  root "static_pages#root"
end
