class CreateTechDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :tech_directors do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :phone_number

      t.timestamps null: false
    end
  end
end
