import { PostgrestFilterBuilder } from '@supabase/postgrest-js';

export interface QueryOptions {
    eq?: Array<{ field: string, value: any }>;
    order?: Array<{ field: string, ascending?: boolean }>;
    limit?: number;
}

export const applyQueryOptions = (query: PostgrestFilterBuilder<any, any, any[], unknown, unknown>, options?: QueryOptions) => {
    if (options?.eq) {
        options.eq.forEach(condition => {
            query = query.eq(condition.field, condition.value);
        });
    }

    if (options?.order) {
        options.order.forEach(condition => {
            query = query.order(condition.field, { ascending: condition.ascending ?? true });
        });
    }

    query = query.limit(options?.limit || 4);

    return query;
}

export const applyOrderBy = (query: PostgrestFilterBuilder<any, any, any[], unknown, unknown>, options?: QueryOptions) => {
    if (options?.order) {
        options.order.forEach(condition => {
            query = query.order(condition.field, { ascending: condition.ascending ?? true });
        });
    }

    return query;
}


export const createEqConditions = (conditions: Array<{ field: string, value: any }>) => {
    return conditions.map(condition => ({ field: condition.field, value: condition.value }));
}

export const createEqCondition = (field: string, value: any) => {
    return { field, value };
}

export const createOrderCondition = (field: string, ascending?: boolean) => {
    return { field, ascending };
}