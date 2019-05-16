class Event < ApplicationRecord
  validates :name, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :contact_name, presence: true

  belongs_to :space

  def space_name
    self.space.name
  end
end
