class CreateSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :spaces do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.integer :capacity
      t.text :description

      t.timestamps null: false

    end
  end
end
