# study
# column name	data type	details
# id	integer	not null, primary key
# book_id	integer	not null, indexed, foreign key
# student_id	integer	not null, indexed, foreign key
# created_at	datetime	not null

class Study < ApplicationRecord
  belongs_to :student,
  primary_key: :id,
  foreign_key: :student_id,
  class_name: 'User'

  belongs_to :book,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: 'Book'


end
