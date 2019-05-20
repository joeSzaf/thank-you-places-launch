class Api::V1::SpacesController < ApiController
  def index
    spaces = Space.all
    render json: { spaces: serialized_spaces }
  end

  def show
    render json: { space: Space.find(params[:id]) }
  end

  def create
    space = Space.new(space_params)
  end

  def update
    space = Space.find(params[:id])
    space.update!(space_params)
  end

  def space_params
    params.require(:space).permit(:name, :location, :capacity, :description)
  end

  def serialized_spaces
    ActiveModel::Serializer::ArraySerializer.new(Space.all, each_serializer: SpaceSerializer)
  end
end
