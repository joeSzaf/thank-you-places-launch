class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  devise :omniauthable, omniauth_providers: [:google_oauth2]
  def self.from_omniauth(auth)
   # Either create a User record or update it based on the provider (Google) and the UID
     where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
       # user.name = auth.info.name
       user.email = auth.info.email
       user.password = Devise.friendly_token[0, 20]
       user.access_token = auth.credentials.token
       user.refresh_token = auth.credentials.refresh_token
     end
   end


end
