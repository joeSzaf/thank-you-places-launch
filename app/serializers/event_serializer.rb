class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :space_id, :start_time, :end_time, :description
end
