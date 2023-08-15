
import type { CodegenConfig } from '@graphql-codegen/cli';
// ACOMODAR IP SERVER

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://192.168.0.120:3000/graphql",
  documents: "./src/backend-tfm",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
