class Api::V1::SpacesController < ApiController
  def index
    spaces = Space.all
    render json: { spaces: serialized_spaces }
  end

  def show
    render json: { space: Space.find(params[:id]) }
  end

  def serialized_spaces
    ActiveModel::Serializer::ArraySerializer.new(Space.all, each_serializer: SpaceSerializer)
  end
end
