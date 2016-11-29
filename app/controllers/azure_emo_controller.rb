class AzureEmoController < ApplicationController
  def index
  	@images = Image.all
  	render :index
  end

  def show
  end
end
