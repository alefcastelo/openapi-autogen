// import { merge } from "lodash";
// import { oa } from "./openapi";

// const addRequiredPropertyToSchema = (schema, propertyName) => {
//   initializeRequiredPropertiesIfNotExists(schema)

//   if (oa.components.schemas[schema].required.indexOf(propertyName) !== -1) {
//     return
//   }

//   oa.components.schemas[schema].required.push(propertyName);
// }

// const initializeSchemaIfNotExists = (schema) => {
//   if (typeof oa.components.schemas[schema] !== 'undefined') {
//     return
//   }

//   oa.components.schemas[schema] = {
//     type: 'object',
//     properties: {}
//   };
// }

// const initializeRequiredPropertiesIfNotExists = (schema) => {
//   if (oa.components.schemas[schema].hasOwnProperty('required') === true) {
//     return
//   }

//   oa.components.schemas[schema] = { required: [], ...oa.components.schemas[schema] };
// }

// const addPropertyToSchemaType = (schema, propertyName, { required, type }) => {
//   initializeSchemaIfNotExists(schema)

//   if (required === true) {
//     addRequiredPropertyToSchema(schema, propertyName)
//   }

//   oa.components.schemas[schema].properties[propertyName] = { type };
// }

// interface PropertyParams {
//   required?: boolean
//   type?: 'string' | 'number' | 'interger' | 'boolean' | 'array' | 'object'
//   oneOf?: unknown[]
// }

// const isPrimitiveValue = (name) => {
//   return ['String', 'Number', 'Integer', 'Boolean'].includes(name)
// }

// export function OAProperty(params: PropertyParams = {}) {
//   return function (target: any, propertyName: string | symbol) {
//     const schema = target.constructor.name

//     const t = Reflect.getMetadata("design:type", target, propertyName);

//     const type = isPrimitiveValue(t.name) ? t.name.toLowerCase() : 'object'

//     const propertyDefinitions = merge({ required: false, type }, params)

//     addPropertyToSchemaType(schema, propertyName, propertyDefinitions)
//   }
// }
