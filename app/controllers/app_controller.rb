class AppController < ApplicationController
  # before_action :authorize_user

  def show
    render template: "app/index"
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not authorized to view this page. :[")
    end
  end
end
