# read
# column name	data type	details
# id	integer	not null, primary key
# student_id	integer	not null, unique
# book_id	integer	not null, unique
# created_at	datetime	not null

class Read < ApplicationRecord
  belongs_to :student,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: 'Student'

  belongs_to :book,
    primary_key: :id,
    foreign_key: :book_id,
    class_name: 'Book'
end
