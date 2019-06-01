Rails.application.routes.draw do
  namespace :api do
    resources :shows
  end
end
