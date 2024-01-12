function addObjectFieldsWithNull(obj, fieldsToNull) {
  Object.assign(obj, Object.fromEntries(fieldsToNull.map((field) => [field, obj[field] || null])));
}

export {addObjectFieldsWithNull};
