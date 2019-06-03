module.exports.schema = {
  "mainfield": "string",
  "optional": "string_nullable",
  "id": "uint32",
  "optional1": "string_nullable",
};

module.exports.items = [
    {"mainfield": "a", "id": 123, "optional": null, "optional1": null},
    {"mainfield": "d", "id": 123, "optional": null, "optional1": null},
    {"mainfield": "d", "id": 123, "optional": null, "optional1": "wat"}
];
