//
// Model400FailedRequestResponse.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Example for failed request response */
public struct Model400FailedRequestResponse: Codable, JSONEncodable, Hashable {

    public var defaultDetail: AnyCodable?
    public var defaultCode: AnyCodable?

    public init(defaultDetail: AnyCodable? = nil, defaultCode: AnyCodable? = nil) {
        self.defaultDetail = defaultDetail
        self.defaultCode = defaultCode
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case defaultDetail = "default_detail"
        case defaultCode = "default_code"
    }

    public var additionalProperties: [String: AnyCodable] = [:]

    public subscript(key: String) -> AnyCodable? {
        get {
            if let value = additionalProperties[key] {
                return value
            }
            return nil
        }

        set {
            additionalProperties[key] = newValue
        }
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(defaultDetail, forKey: .defaultDetail)
        try container.encodeIfPresent(defaultCode, forKey: .defaultCode)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        defaultDetail = try container.decodeIfPresent(AnyCodable.self, forKey: .defaultDetail)
        defaultCode = try container.decodeIfPresent(AnyCodable.self, forKey: .defaultCode)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("default_detail")
        nonAdditionalPropertyKeys.insert("default_code")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}

