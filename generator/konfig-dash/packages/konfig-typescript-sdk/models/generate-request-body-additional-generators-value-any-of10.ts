/* tslint:disable */
/* eslint-disable */
/**
 * Konfig REST API
 * To help you generate SDKs with Konfig
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidCopyFilesInner } from './generate-request-body-generators-android-copy-files-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidFilesValue } from './generate-request-body-generators-android-files-value';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidGit } from './generate-request-body-generators-android-git';
// May contain unused imports in some cases
// @ts-ignore
import { GenerateRequestBodyGeneratorsAndroidTest } from './generate-request-body-generators-android-test';

/**
 * 
 * @export
 * @interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
 */
export interface GenerateRequestBodyAdditionalGeneratorsValueAnyOf10 {
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'generator': GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum;
    /**
     * 
     * @type {{ [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; }}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'files'?: { [key: string]: GenerateRequestBodyGeneratorsAndroidFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'version': string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidGit}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'git': GenerateRequestBodyGeneratorsAndroidGit;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'outputDirectory': string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'readmeSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'readmeSupportingDescriptionSnippet'?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'readmeDescriptionSnippet'?: string;
    /**
     * Configure copying a set of files from a source to a destination. This is useful if you have custom implementations that you would like duplicated across multiple SDK repos.
     * @type {Array<GenerateRequestBodyGeneratorsAndroidCopyFilesInner>}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'copyFiles'?: Array<GenerateRequestBodyGeneratorsAndroidCopyFilesInner>;
    /**
     * Filepath to file containing override for the section in generated documentation for setting up authentication in the SDK.
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'apiDocumentationAuthenticationPartial'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'defaultTimeout'?: number;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'userAgent'?: string;
    /**
     * 
     * @type {GenerateRequestBodyGeneratorsAndroidTest}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'test'?: GenerateRequestBodyGeneratorsAndroidTest;
    /**
     * 
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'language': GenerateRequestBodyAdditionalGeneratorsValueAnyOf10LanguageEnum;
    /**
     * Acme
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'projectName': string;
    /**
     * acme.com
     * @type {string}
     * @memberof GenerateRequestBodyAdditionalGeneratorsValueAnyOf10
     */
    'podAuthors': string;
}

type GenerateRequestBodyAdditionalGeneratorsValueAnyOf10GeneratorEnum = 'swift'
type GenerateRequestBodyAdditionalGeneratorsValueAnyOf10LanguageEnum = 'swift'


