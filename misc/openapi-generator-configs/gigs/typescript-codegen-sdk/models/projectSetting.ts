/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type projectSetting = {
    /**
     * Type of object is always `projectSetting`.
     */
    object: string;
    /**
     * Object containing application configuration.
     */
    config: any;
    /**
     * Name of application that the setting apply to.
     */
    name: projectSetting.name;
    /**
     * Time when the project setting was created.
     */
    createdAt: string;
    /**
     * Time when the project setting was last updated.
     */
    updatedAt: string;
};

export namespace projectSetting {

    /**
     * Name of application that the setting apply to.
     */
    export enum name {
        ACCESS = 'access',
        CONNECT = 'connect',
        EMAILS = 'emails',
        LEGAL = 'legal',
        PAYMENTS = 'payments',
    }


}

