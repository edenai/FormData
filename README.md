# FormData

## Overview

**This is a Google Apps Script library which enhances Class FormData to create a multipart/form-data.**


## Functions

| Function                                | Description                                                                                                                                                                                                                                                                                                                                               |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| newFormData()          | This method return a new `FormData`'s instance |

## FormData class

| Methods                                | Description                                                                                                                                                                                                                                                                                                                                               |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| append(name, value)        | Adds a new field with the given name and value to the form data. If the value is a `Blob` object, the field is treated as a file and its content type is set accordingly.
| getBoundary() | Returns the boundary string. the boudary are initialize with `Date.now().toString(16)`
| getPayload() | Returns the payload format for send in multipart/form-data request |


## Library ID
You can add FormData in your script GAS with the following id: `1prPsBOOqOjDT5L_RFyv7MQp7pz1e1KU2c9UN8aoqzvvHqZSavuUFjeOc`


## Example

```js
const formData = FormData.newFormData();
const file = DriveApp.getFileById("<YOUR_FILE_ID>")

formData.append("file", file)
formData.append("language", "en")

const payload = formData.getPayload();

const headers = {
    "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`

// Now you can make a call
}
```
