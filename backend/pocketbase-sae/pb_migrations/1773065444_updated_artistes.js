/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("date472036676")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date472036676",
    "max": "",
    "min": "",
    "name": "date_fin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
