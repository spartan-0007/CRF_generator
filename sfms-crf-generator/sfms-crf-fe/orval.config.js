module.exports = {
  'CRFapi': {
    input: {
      target: './src/api-spec/openapi3_0.yaml',
    },
    output: {
      mode: 'tags-split',
      target: './src/lib/api',
      schemas: './src/lib/api/model',
      client: 'react-query',
      override: {
        query: {
          useQuery: true,
          options: {
            staleTime: 30000,
            cacheTime: 300000,
            refetchOnWindowFocus: false
          }
        },
        mutator: {
          path: './src/utils/mutator/axiosInstance.ts',
          name: 'customInstance',
        }
    
      },
    },
  },
};