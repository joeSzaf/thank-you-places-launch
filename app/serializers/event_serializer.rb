class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :space_id, :start_time, :end_time, :description, :space_name, :contact_name, :tech_name, :md_name
end
