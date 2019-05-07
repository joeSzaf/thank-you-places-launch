class Api::V1::EventsController < ApiController
  def index
    render json: { events: serialized_events }
  end

  def serialized_events
    ActiveModel::Serializer::ArraySerializer.new(Event.all, each_serializer: EventSerializer)
  end
end
