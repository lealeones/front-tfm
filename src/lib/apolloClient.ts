import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

export default function inicializarApollo(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
        uri: process.env.NEXT_PUBLIC_BACKEND_APP + '/graphql',
        cache: new InMemoryCache().restore({}),
    });
}