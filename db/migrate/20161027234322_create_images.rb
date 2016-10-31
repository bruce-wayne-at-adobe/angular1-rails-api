class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :title
      t.integer :image_file_size
      t.string :image_content_type

      t.timestamps
    end
  end
end
