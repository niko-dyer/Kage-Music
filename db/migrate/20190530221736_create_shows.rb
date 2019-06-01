class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :date
      t.string :address
      t.string :price

      t.timestamps
    end
  end
end
