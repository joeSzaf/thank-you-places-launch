class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.belongs_to :space, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
