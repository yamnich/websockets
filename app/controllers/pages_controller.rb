class PagesController < ApplicationController
  def index
    WebsocketRails[:index].trigger(:test, "test")
  end
end
