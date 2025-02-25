//
// ManualTradeAndImpact.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Manual Trade and Impact object */
public struct ManualTradeAndImpact: Codable, JSONEncodable, Hashable {

    public var trade: ManualTrade?
    public var tradeImpacts: [ManualTrade]?
    public var combinedRemainingBalance: ManualTradeBalance?

    public init(trade: ManualTrade? = nil, tradeImpacts: [ManualTrade]? = nil, combinedRemainingBalance: ManualTradeBalance? = nil) {
        self.trade = trade
        self.tradeImpacts = tradeImpacts
        self.combinedRemainingBalance = combinedRemainingBalance
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case trade
        case tradeImpacts = "trade_impacts"
        case combinedRemainingBalance = "combined_remaining_balance"
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
        try container.encodeIfPresent(trade, forKey: .trade)
        try container.encodeIfPresent(tradeImpacts, forKey: .tradeImpacts)
        try container.encodeIfPresent(combinedRemainingBalance, forKey: .combinedRemainingBalance)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        trade = try container.decodeIfPresent(ManualTrade.self, forKey: .trade)
        tradeImpacts = try container.decodeIfPresent([ManualTrade].self, forKey: .tradeImpacts)
        combinedRemainingBalance = try container.decodeIfPresent(ManualTradeBalance.self, forKey: .combinedRemainingBalance)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("trade")
        nonAdditionalPropertyKeys.insert("trade_impacts")
        nonAdditionalPropertyKeys.insert("combined_remaining_balance")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}

