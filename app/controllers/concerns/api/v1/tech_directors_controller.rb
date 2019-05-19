class Api::V1::TechDirectorsController < ApiController
  def index
    render json: { techs: serialized_techs }
  end

  def show
    render json: { tech: TechDirector.find(params[:id]), events: Event.where(tech_director_id: params[:id]) }
  end

  def create
    tech = TechDirector.new(tech_params)
  end

  def update
    tech = TechDirector.find(params[:id])
    tech.update!(tech_params)
  end

  def tech_params
    params.require(:space).permit(:first_name, :last_name, :email, :phone_number)
  end

  def serialized_techs
    ActiveModel::Serializer::ArraySerializer.new(TechDirector.all, each_serializer: TechDirectorSerializer)
  end
end
