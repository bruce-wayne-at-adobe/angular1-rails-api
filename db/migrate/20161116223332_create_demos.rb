class CreateDemos < ActiveRecord::Migration[5.0]
  def change
    create_table :demos do |t|
      t.string :title
      t.integer :image_file_size
      t.string :image_content_type
      t.string :image

      t.timestamps
    end
  end
end
