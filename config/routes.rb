Rails.application.routes.draw do
 
  resources :azure_emo

  

	resources :demo

	resources :images
	root 'images#index'

	get ':path', to: 'images#index', format: false
end
