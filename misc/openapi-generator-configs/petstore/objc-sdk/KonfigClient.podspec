#
# Be sure to run `pod lib lint KonfigClient.podspec' to ensure this is a
# valid spec and remove all comments before submitting the spec.
#
# Any lines starting with a # are optional, but encouraged
#
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
    s.name             = "KonfigClient"
    s.version          = "1.0.1"

    s.summary          = "OpenAPI Petstore"
    s.description      = <<-DESC
                         This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
                         DESC

    s.platform     = :ios, '7.0'
    s.requires_arc = true

    s.framework    = 'SystemConfiguration'

    s.homepage     = "https://github.com/openapitools/openapi-generator"
    s.license      = "Proprietary"
    s.source       = { :git => "https://github.com/openapitools/openapi-generator.git", :tag => "#{s.version}" }
    s.author       = { "Konfig" => "engineering@konfigthis.com" }

    s.source_files = 'KonfigClient/**/*.{m,h}'
    s.public_header_files = 'KonfigClient/**/*.h'


    s.dependency 'AFNetworking', '~> 3'
    s.dependency 'JSONModel', '~> 1.2'
    s.dependency 'ISO8601', '~> 0.6'
end
