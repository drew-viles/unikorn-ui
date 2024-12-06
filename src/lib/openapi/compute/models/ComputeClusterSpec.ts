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

import { exists, mapValues } from '../runtime';
import type { ComputeClusterWorkloadPool } from './ComputeClusterWorkloadPool';
import {
    ComputeClusterWorkloadPoolFromJSON,
    ComputeClusterWorkloadPoolFromJSONTyped,
    ComputeClusterWorkloadPoolToJSON,
} from './ComputeClusterWorkloadPool';

/**
 * Compute cluster creation parameters.
 * @export
 * @interface ComputeClusterSpec
 */
export interface ComputeClusterSpec {
    /**
     * The region to provision the cluster in.
     * @type {string}
     * @memberof ComputeClusterSpec
     */
    regionId: string;
    /**
     * A list of Compute cluster workload pools.
     * @type {Array<ComputeClusterWorkloadPool>}
     * @memberof ComputeClusterSpec
     */
    workloadPools: Array<ComputeClusterWorkloadPool>;
}

/**
 * Check if a given object implements the ComputeClusterSpec interface.
 */
export function instanceOfComputeClusterSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "regionId" in value;
    isInstance = isInstance && "workloadPools" in value;

    return isInstance;
}

export function ComputeClusterSpecFromJSON(json: any): ComputeClusterSpec {
    return ComputeClusterSpecFromJSONTyped(json, false);
}

export function ComputeClusterSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeClusterSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regionId': json['regionId'],
        'workloadPools': ((json['workloadPools'] as Array<any>).map(ComputeClusterWorkloadPoolFromJSON)),
    };
}

export function ComputeClusterSpecToJSON(value?: ComputeClusterSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'regionId': value.regionId,
        'workloadPools': ((value.workloadPools as Array<any>).map(ComputeClusterWorkloadPoolToJSON)),
    };
}

