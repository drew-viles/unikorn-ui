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
import type { FirewallRule } from './FirewallRule';
import {
    FirewallRuleFromJSON,
    FirewallRuleFromJSONTyped,
    FirewallRuleToJSON,
} from './FirewallRule';

/**
 * A list of firewall rules applied to a workload pool.
 * @export
 * @interface Firewall
 */
export interface Firewall {
    /**
     * A list of firewall rules applied to a workload pool.
     * @type {Array<FirewallRule>}
     * @memberof Firewall
     */
    ingress?: Array<FirewallRule>;
}

/**
 * Check if a given object implements the Firewall interface.
 */
export function instanceOfFirewall(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FirewallFromJSON(json: any): Firewall {
    return FirewallFromJSONTyped(json, false);
}

export function FirewallFromJSONTyped(json: any, ignoreDiscriminator: boolean): Firewall {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ingress': !exists(json, 'ingress') ? undefined : ((json['ingress'] as Array<any>).map(FirewallRuleFromJSON)),
    };
}

export function FirewallToJSON(value?: Firewall | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ingress': value.ingress === undefined ? undefined : ((value.ingress as Array<any>).map(FirewallRuleToJSON)),
    };
}

