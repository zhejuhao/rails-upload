class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.text :text
      t.timestamps null: false
    end
    add_index :articles, [:id, :created_at]
  end
end
