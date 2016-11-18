require 'test_helper'

class DemoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get demo_index_url
    assert_response :success
  end

  test "should get new" do
    get demo_new_url
    assert_response :success
  end

  test "should get show" do
    get demo_show_url
    assert_response :success
  end

  test "should get create" do
    get demo_create_url
    assert_response :success
  end

end
