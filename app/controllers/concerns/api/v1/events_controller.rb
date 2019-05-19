class Api::V1::EventsController < ApiController
  def index
    render json: { events: serialized_events }
  end

  def show
    if params[:id] == "now"
      now = Time.now.utc.iso8601
      current_events = Event.where("start_time <= ? AND end_time >= ?", now, now)
      render json: {
        current_events: current_events,
        locations: serialized_spaces
      }
    else
      render json: { event: Event.find(params[:id]) }
    end
  end

  def create
    event = Event.new(event_params)

    if event.save
      render json: { event: event }
    else
      render json: { event: event }
    end
  end

  def update
    event = Event.find(params[:id])
    event.update!(event_params)
  end

  def event_params
    params.require(:event).permit(:name, :space_id, :start_time, :end_time, :description, :contact_name, :tech_director_id, :md_name)
  end

  def serialized_events
    ActiveModel::Serializer::ArraySerializer.new(Event.all, each_serializer: EventSerializer)
  end
  def serialized_spaces
    ActiveModel::Serializer::ArraySerializer.new(Space.all, each_serializer: SpaceSerializer)
  end
end
