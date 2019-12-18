# move
# column name	data type	details
# id	integer	not null, primary key
# author_id	integer	not null, indexed, unique
# img_url	string	not null
# caption	string	not null
# body	string	not null
# created_at	datetime	not null
# updated_at	datetime	not null



class Move < ApplicationRecord
end
