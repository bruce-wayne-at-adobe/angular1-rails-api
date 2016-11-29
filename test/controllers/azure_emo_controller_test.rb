require 'test_helper'

class AzureEmoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get azure_emo_index_url
    assert_response :success
  end

  test "should get show" do
    get azure_emo_show_url
    assert_response :success
  end

end
