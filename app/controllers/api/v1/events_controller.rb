class Api::V1::EventsController < ApiController
  def index
    render json: { events: serialized_events }
  end

  def show
    render json: { event: Event.find(params[:id]) }
  end

  def create
    event = Event.new(event_params)

    if event.save
      render json: { event: event }
    else
      render json: { event: event }
    end
  end

  def event_params
    params.require(:event).permit(:name, :space_id, :start_time, :end_time, :description)
  end

  def serialized_events
    ActiveModel::Serializer::ArraySerializer.new(Event.all, each_serializer: EventSerializer)
  end
end
