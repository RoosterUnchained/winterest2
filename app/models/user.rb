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
  validates :email, :session_token, :username, presence: true, uniqueness: true
	validates :password_digest, :img_url, :player_url, :elo_rating, presence: true
	validates :password, length: {minimum: 6}, allow_nil: true
	after_initialize :ensure_session_token 
	attr_reader :password

	has_many :books,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: 'Book'

	has_many :studies,
		primary_key: :id,
    foreign_key: :student_id,
		class_name: 'Study'
		
	has_many :reads,
		primary_key: :id,
    foreign_key: :student_id,
    class_name: 'Read'

  has_many :read_books,
    through: :reads,
    source: :book
  
  has_many :notes,
		primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Note'
  
  has_many :authored_moves,
		primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Move'
    
  has_many :studied_moves,
		primary_key: :id,
    foreign_key: :student_id,
    class_name: 'Move'
    
		
	def self.generate_session_token
		SecureRandom::urlsafe_base64
	end

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		if user && user.is_password?(password)
			user
		else
			nil
		end
	end
		
	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)

	end

end
