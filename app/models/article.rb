class Article < ActiveRecord::Base
  default_scope {order('id desc')}
  # 按ID倒序展示
end
