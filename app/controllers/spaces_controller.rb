class SpacesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
  end

  def show
  end

  def new
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not authorized to view this page. :[")
    end
  end
end
