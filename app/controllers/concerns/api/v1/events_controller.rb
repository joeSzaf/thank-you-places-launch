require "google/apis/calendar_v3"
require 'time'

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
    event = Event.create!(event_params)

    auth = Signet::OAuth2::Client.new(
      token_credential_uri: 'https://oauth2.googleapis.com/token',
      access_token: current_user.access_token,
      client_id: ENV["CLIENT_ID"],
      client_secret: ENV["CLIENT_SECRET"],
      refresh_token: current_user.refresh_token
    )
    auth.fetch_access_token!
    calendar = Google::Apis::CalendarV3::CalendarService.new
    calendar.authorization = auth
    summary = "#{params["name"]}"

    new_event = Google::Apis::CalendarV3::Event.new({
      'summary': summary,
      'start': {'date_time': "#{Time.parse(params['start_time']).utc.iso8601}"},
      'end': {'date_time': "#{Time.parse(params['end_time']).utc.iso8601}"}
    })

    calendar.insert_event('1ggtssc9ektnnke3fvn884ebdc@group.calendar.google.com', new_event)

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
