/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { usageRecord } from '../models/usageRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsageService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List subscription usage records
     * Lists usage records in ascending order for a subscription, defaulting to `daily` aggregation for the latest subscription period.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the subscription.
     * @param period Limits the usage data returned to the subscription period provided. This option is incompatible with the `start` and `end` parameters.
     * @param start Limits the usage data to dates greater than or equal to the provided date. Can only be used in combination with `end`.
     * @param end Limits the usage data to dates up to and including the provided date. Can only be used in combination with `start`.
     * @param aggregation Determines the aggregation method used, defaulting to `daily`. `period` provides a single aggregated value for the time range or period requested.
     * @returns any Returns the list of usage records.
     * @throws ApiError
     */
    public subscriptionUsageRecordList(
        project: string,
        id: string,
        period?: number,
        start?: string,
        end?: string,
        aggregation?: 'daily' | 'period',
    ): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `usageRecord`.
         */
        items: Array<usageRecord>;
        /**
         * A unique identifier to be used as `after` pagination parameter if more items are available sorted after the current batch of items.
         */
        moreItemsAfter: string | null;
        /**
         * A unique identifier to be used as `before` pagination parameter if more items are available sorted before the current batch of items.
         */
        moreItemsBefore: string | null;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/subscriptions/{id}/usage',
            path: {
                'project': project,
                'id': id,
            },
            query: {
                'period': period,
                'start': start,
                'end': end,
                'aggregation': aggregation,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

}
