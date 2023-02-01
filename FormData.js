/**
 * FormData class creates a form data object to be used for sending data in a multipart/form-data format.
 * 
 * @class FormData
 * 
 * @constructor
 * Initializes the boundary and payload properties. The boundary is a string that separates the different parts of the form data.
 * 
 * @method append
 * Adds a new field with the given name and value to the form data. If the value is a Blob object, the field is treated as a file and its content type is set accordingly.
 * 
 * @method getBoundary
 * Returns the boundary string.
 * 
 * @method getPayload
 * Returns the payload of the form data.
 */
class FormData {
  constructor() {
    this.boundary = "---------------------------" + Date.now().toString(16);
    this.payload = [];
  }
  /**
   * Returns the boundary string.
   * 
   * @method getBoundary
   * 
   * @return {string} boundary
   */
  getBoundary() { return this.boundary; }

  /**
   * Returns the payload of the form data.
   * 
   * @method getPayload
   * 
   * @return {Array} payload
   */
  getPayload() { return this.payload }
  /**
   * Adds a new field with the given name and value to the form data.
   * If the value is a Blob object, the field is treated as a file and its content type is set accordingly.
   *
   * @method append
   * 
   * @param {string} name - The name of the field.
   * @param {(string|Blob)} value - The value of the field. Can be a string or a Blob object.
   */
  append(name, value) {
    try {
      const data = "--" + this.getBoundary() + "\r\n" +
      "Content-Disposition: form-data; name=\"" + name + "\"; filename=\"" + value.getName() + "\"\r\n" +
      "Content-Type:" + value.getMimeType() + "\r\n\r\n";
  
      this.payload = this.payload.concat(Utilities.newBlob(data).getBytes())
      .concat(value.getBlob().getBytes())
      .concat(Utilities.newBlob("\r\n--" + this.getBoundary() + "--").getBytes());

    } catch (err) {
      const data = "--" + this.getBoundary() + "\r\n" + "Content-Disposition: form-data; name=\"" + name + "\"; \r\n\r\n" + value + "\r\n";
      this.payload = this.payload.concat(Utilities.newBlob(data).getBytes())
    }
  }
}

function newFormData() {
  return new FormData()
}
