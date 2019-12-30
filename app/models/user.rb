# users
# column name	data type	details
# id	integer	not null, primary key
# username	string	not null, indexed, unique
# email	string	not null, indexed, unique
# img_url	string	not null
# elo_rating	string	not null
# player_url	string	not null
# password_digest	string	not null
# session_token	string	not null, indexed, unique
# created_at	datetime	not null
# updated_at	datetime	not null



class User < ApplicationRecord
  validates :session_token, :email, presence: true, uniqueness: true
	validates :password_digest, presence: true
	validates :password, length: {minimum: 6}, allow_nil: true

	after_initialize :ensure_session_token 
	
	attr_reader :password

	# has_many :books,
	# 	primary_key: :id,
	# 	foreign_key: :author_id,
	# 	class_name: 'Book'

	# has_many :studies,
	# 	primary_key: :id,
  #   foreign_key: :student_id,
	# 	class_name: 'Study'
		
	# has_many :reads,
	# 	primary_key: :id,
  #   foreign_key: :student_id,
  #   class_name: 'Read'

  # has_many :read_books,
  #   through: :reads,
  #   source: :book
  
  # has_many :notes,
	# 	primary_key: :id,
  #   foreign_key: :author_id,
  #   class_name: 'Note'
  
  # has_many :authored_moves,
	# 	primary_key: :id,
  #   foreign_key: :author_id,
  #   class_name: 'Move'
    
  # has_many :studied_moves,
	# 	primary_key: :id,
  #   foreign_key: :student_id,
  #   class_name: 'Move'
    
		

	def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end
		
	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
