class CreateAzureEmos < ActiveRecord::Migration[5.0]
  def change
    create_table :azure_emos do |t|

      t.timestamps
    end
  end
end
