require 'net/http'

class Api::V1::PmeventsController < ApiController
  def events
    uri = URI('https://improvboston.secure.force.com/ticket/PatronTicket__PublicApiEventList')
    response = Net::HTTP.get(uri)
    info = JSON.parse(response)
    render json: { events: info["events"], venues: info["venues"] }
  end
end
