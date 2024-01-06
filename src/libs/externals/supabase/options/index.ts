import { PostgrestFilterBuilder } from '@supabase/postgrest-js';

export interface QueryOptions {
    eq?: Array<{ field: string, value: any }>;
    lt?: Array<{ field: string, value: any }>;
    gt?: Array<{ field: string, value: any }>;
    order?: Array<{ field: string, ascending?: boolean }>;
    like?: Array<{ field: string, value: string }>;
    range?: { start: number, end: number }
    limit?: number;
}

export const applyQueryOptions = (query: PostgrestFilterBuilder<any, any, any[], unknown, unknown>, options?: QueryOptions) => {
    if (options?.eq) {
        options.eq.forEach(condition => {
            query = query.eq(condition.field, condition.value);
        });
    }

    if (options?.lt) {
        options.lt.forEach(condition => {
            query = query.lt(condition.field, condition.value);
        });
    }

    if (options?.gt) {
        options.gt.forEach(condition => {
            query = query.gt(condition.field, condition.value);
        });
    }

    if (options?.like) {
        options.like.forEach(condition => {
            query = query.like(condition.field, `%${condition.value}%`);
        });
    }

    if (options?.order) {
        options.order.forEach(condition => {
            query = query.order(condition.field, { ascending: condition.ascending ?? true });
        });
    }

    if (options?.range) {
        query = query.range(options.range.start, options.range.end);
    }

    query = query.limit(options?.limit || 8);

    return query;
}

// TODO 上に統合させる
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
