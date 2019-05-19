class AddTechDirectorToEvents < ActiveRecord::Migration[5.2]
  def up
    add_reference :events, :tech_director, foreign_key: true
    remove_column :events, :tech_name
  end
  def down
    remove_column :events, :tech_director_id
    add_column :events, :tech_name, :string
  end
end
