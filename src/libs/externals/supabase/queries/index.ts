import { SupabaseClient } from "@supabase/supabase-js";
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

    query = query.limit(options?.limit || 6);

    return query;

}
