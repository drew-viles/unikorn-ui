/* tslint:disable */
/* eslint-disable */
/**
 * Compute Service API
 * The Compute Service API provides services that allows provisioning and life cycle management of Compute clusters. Requests must specify the HTML content type header.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The provisioning state of a resource.
 * @export
 */
export const ResourceProvisioningStatus = {
    Unknown: 'unknown',
    Provisioning: 'provisioning',
    Provisioned: 'provisioned',
    Deprovisioning: 'deprovisioning',
    Error: 'error'
} as const;
export type ResourceProvisioningStatus = typeof ResourceProvisioningStatus[keyof typeof ResourceProvisioningStatus];


export function ResourceProvisioningStatusFromJSON(json: any): ResourceProvisioningStatus {
    return ResourceProvisioningStatusFromJSONTyped(json, false);
}

export function ResourceProvisioningStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceProvisioningStatus {
    return json as ResourceProvisioningStatus;
}

export function ResourceProvisioningStatusToJSON(value?: ResourceProvisioningStatus | null): any {
    return value as any;
}

