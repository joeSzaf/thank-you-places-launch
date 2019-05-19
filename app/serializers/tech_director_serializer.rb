class TechDirectorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number
end
