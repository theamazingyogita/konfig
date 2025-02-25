/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An order for a pets from the pet store
 */
export type Order = {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /**
     * Order Status
     */
    status?: Order.status;
    complete?: boolean;
};

export namespace Order {

    /**
     * Order Status
     */
    export enum status {
        PLACED = 'placed',
        APPROVED = 'approved',
        DELIVERED = 'delivered',
    }


}

