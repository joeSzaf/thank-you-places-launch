class AddEmployeesAndContactToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :contact_name, :string, null: false
    add_column :events, :tech_name, :string
    add_column :events, :md_name, :string
  end
end
