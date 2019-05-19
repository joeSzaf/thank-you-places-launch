class Event < ApplicationRecord
  validates :name, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :contact_name, presence: true

  belongs_to :space
  belongs_to :tech_director, optional: true

  def space_name
    self.space.name
  end

  def tech_name
    if self.tech_director
      "#{self.tech_director.first_name} #{self.tech_director.last_name}"
    else
      ""
    end
  end
end
