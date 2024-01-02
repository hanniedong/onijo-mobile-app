SWAGGER_FILE=http://localhost:3000/docs-json
npx @openapitools/openapi-generator-cli generate -i $SWAGGER_FILE -g typescript-axios -o ./src/generated-api
