class Api::ShowsController < ApplicationController
    before_action :set_show, only: [:update, :destroy]

    def index
        binding.pry
        render json: Show.all
    end

    def create
        show = Show.new(show_params)

        if show.save
            render json: show
        else
            render json: show.errors, status: 422
        end
    end

    def update
        if @show.update(show_params)
            render json: @show
        else
            render json: @show.errors, status: 422
        end
    end

    def destroy
        @show.destroy
    end

    private
        def show_params
            params.require(:show).permit(:name, :date, :address, :price)
        end

        def set_show
            @show = Show.find(params[:id])
        end
end
