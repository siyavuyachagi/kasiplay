import type { UseFetchOptions } from 'nuxt/app'

export function useApi<T>(
    key: string,
    url: MaybeRef<string>,
    options: {
        method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
        body?: MaybeRef<any>
        query?: MaybeRef<Record<string, any>>
        headers?: Record<string, string>
        transform?: (res: T) => any
        immediate?: boolean
        authenticate?: boolean
        watch?: boolean // Watch for URL/body/query changes
        lazy?: boolean // Use useLazyFetch instead
        server?: boolean // Enable SSR fetch
        dedupe?: 'cancel' | 'defer' // Deduplication strategy
    } = {}
) {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()

    // Build headers with authentication
    const requestHeaders = computed(() => {
        const headers: Record<string, string> = { ...options.headers }

        // Attach token if requested (default true)
        if ((options.authenticate ?? true) && authStore?.accessToken) {
            headers.Authorization = `Bearer ${authStore.accessToken}`
        }

        return headers
    })

    // Construct fetch options
    const fetchOptions: UseFetchOptions<T> = {
        key,
        baseURL: config.public.apiBase as string,
        method: options.method ?? 'GET',
        body: options.body,
        query: options.query,
        headers: requestHeaders,
        transform: options.transform,
        immediate: options.immediate ?? true,
        watch: options.watch !== false ? [
            () => unref(url),
            () => unref(options.body),
            () => unref(options.query)
        ] : false,
        server: options.server ?? true,
        lazy: options.lazy ?? false,
        dedupe: options.dedupe ?? 'cancel',

        // Error handling
        onResponse({ response }) {
            // Optional: Handle successful responses
            if (response.status === 401) {
                // Token expired, redirect to login
                // navigateTo('/login')
            }
        },

        onResponseError({ response }) {
            // Optional: Global error handling
            console.error(`API Error [${response.status}]:`, response._data)
        }
    }

    // Use lazy or standard fetch
    if (options.lazy) {
        return useLazyFetch<T>(unref(url), fetchOptions as any)
    }

    return useFetch<T>(unref(url), fetchOptions as any)
}