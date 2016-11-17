class ImagesController < ApplicationController
	def index
		@image = Image.all
		render :index
	end

	def new
		@image = Image.new
	end

	def show
		@image = Image.find(params[:id])
	end

	def create
		@image = Image.new(image_params)
		if @image.save
			redirect_to demo_index_path
		else
			render 'new'
		end
	end

	private

	def image_params
		params.require(:image).permit(:title, :image)
	end
end
 
