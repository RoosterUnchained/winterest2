# book
# column name	data type	details
# id	integer	not null, primary key
# author_id	integer	not null, indexed, foreign key
# title	string	not null
# description	string	not null
# created_at	datetime	not null
# updated_at	datetime	not null

class Book < ApplicationRecord
end
