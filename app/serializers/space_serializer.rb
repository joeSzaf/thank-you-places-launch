class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :capacity, :description
end
