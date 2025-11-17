import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface User {
    id: string;
    username?: string;
    email: string;
    userName: string;
    lastName: string;
    firstName: string;
    avatar: string;
    roles: string[];
}

interface ResponseData {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export const useAuthStore = defineStore("auth", () => {
    const STORAGE_KEY = "kp-auth-store"; // Single key for storing auth data
    const user = ref<User | null>(null);
    const accessToken = ref<string | null>(null);
    const refreshToken = ref<string | null>(null);
    const router = useRouter();

    const isAuthenticated = computed(() => !!user.value && !!accessToken.value);

    function signIn(responseData: ResponseData, rememberMe: boolean = false) {

        // Retrieve the cookie object
        const userCookie = useCookie(STORAGE_KEY, {
            // `httpOnly: true` should only be used for server-side handling, not on the client-side
            httpOnly: false, // You can choose to omit this if the cookie needs to be accessible by JavaScript
            expires: rememberMe
                ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                : undefined, // Cookie expires in 30 days if 'rememberMe' is true
        });

        // Set the cookie value with the authentication data
        userCookie.value = JSON.stringify(responseData);

        // Set individual state variables in Pinia store
        user.value = responseData.user;
        accessToken.value = responseData.accessToken;
        refreshToken.value = responseData.refreshToken;
    }

    function signOut(returnUrl: string = "/auth/login") {
        // Clear the user data in the store
        user.value = null;
        accessToken.value = null;
        refreshToken.value = null;

        if (import.meta.client) {
            // Remove data from cookies (if you're using cookies to store auth data)
            const userCookie = useCookie(STORAGE_KEY); // Access the cookie
            userCookie.value = ""; // Remove the cookie value by setting it to an empty string

            // Optionally, set the cookie expiry date to the past to ensure it gets deleted
            //   userCookie.value = new Date(0);
        }

        router.push(returnUrl);
    }

    function init() {
        // Retrieving data from the cookie
        const userCookie = useCookie(STORAGE_KEY);

        // Check if the cookie is not empty
        if (userCookie.value) {
            // Assert that userCookie.value is of type AuthStorage
            const storedData = userCookie.value as unknown as ResponseData;
            // Destructure the values into the required variables
            const {
                user: storedUser,
                accessToken: storedAccessToken,
                refreshToken: storedRefreshToken,
            } = storedData;
            // Assign the values to the store
            user.value = storedUser;
            accessToken.value = storedAccessToken;
            refreshToken.value = storedRefreshToken;
        }
    }

    return {
        user,
        accessToken,
        refreshToken,
        isAuthenticated,
        init,
        signIn,
        signOut,
    };
});