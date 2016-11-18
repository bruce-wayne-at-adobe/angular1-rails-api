class DemoController < ApplicationController
  def index
  	@image = Image.all
  	render :index
  end

  def new
  end

  def show
  end

  def create
  end

  def test1
  	@image = Image.all
  	render :test1
  end
end
