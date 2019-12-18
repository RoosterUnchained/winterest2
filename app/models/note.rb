# note
# column name	data type	details
# id	integer	not null, primary key
# parent_id	integer	not null, indexed, unique
# author_id	integer	not null
# comment	string	not null
# created_at	datetime	not null
# updated_at	datetime	not null

class Note < ApplicationRecord
end
