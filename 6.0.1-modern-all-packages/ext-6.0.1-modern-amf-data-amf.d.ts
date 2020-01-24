declare namespace Ext.data.amf {
	/** 
	 * [Ext.data.amf.Encoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html)
	 * This class serializes data in the Action Message Format (AMF) format.
	 * It can write simple and complex objects, to be used in conjunction with an
	 * AMF-compliant server.
	 * To encode a byte array, first construct an Encoder, optionally setting the format:
	 * 
	 *    var encoder = Ext.create('Ext.data.amf.Encoder', {
	 *      format: 3
	 *    });
	 * 
	 * Then use the writer methods to out data to the :
	 * 
	 *    encoder.writeObject(1);
	 * 
	 * And access the data through the [bytes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html#property-bytes) property:
	 *     encoder.bytes;
	 * 
	 * You can also reset the class to start a new byte array:
	 * 
	 *    encoder.clear();
	 * 
	 * Current limitations:
	 * AMF3 format (format:3)
	 * 
	 * - writeObject will write out XML object, not legacy XMLDocument objects. A
	 *   writeXmlDocument method is provided for explicitly writing XMLDocument
	 *   objects.
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMF format. This means the function does NOT support
	 *   circular reference objects.
	 * - Array objects: only the numbered indices and data will be written out.
	 *   Associative values will be ignored.
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects with dynamic data.
	 * - There's no JavaScript equivalent to the ByteArray type in ActionScript,
	 *   hence data will never be searialized as ByteArrays by the writeObject
	 *   function. A writeByteArray method is provided for writing out ByteArray objects.
	 * 
	 * AMF0 format (format:0)
	 * 
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMF format. This means the function does NOT support
	 *   circular reference objects.
	 * - Array objects: the function always writes an associative array (following
	 *   the behavior of flex).
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects.
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	class Encoder extends Ext.Base {
		/** 
		 * The constructed byte array.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default []
		 * @type {any[]}
		 */
		readonly bytes?: any[];
		/** 
		 * Creates new Encoder.
		 * @method
		 * @public (method)
		 * @param   {object} config Configuration options
		 */
		constructor (config: object);
		/** 
		 * Sets the functions that will correctly serialize for the relevant
		 * protocol version.
		 * @method
		 * @public (method)
		 * @param   {number} protocol_version the protocol version to support
		 * @returns {void}                    
		 */
		applyFormat? (protocol_version: number): void;
		/** 
		 * Reset all class states and starts a new empty array for encoding data.
		 * The method generates a new array for encoding, so it's safe to keep a
		 * reference to the old one.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clear? (): void;
		/** 
		 * Convert a UTF 16 char to a UTF 8 char
		 * @method
		 * @public (method)
		 * @param   {number} c char 16-bit code to convert
		 * @returns {any[]}    byte array with the UTF 8 values
		 */
		encodeUtf8Char? (c: number): any[];
		/** 
		 * Encode 16- or 32-bit integers into big-endian (network order) bytes
		 * @method
		 * @public (method)
		 * @param   {number} value      the number to encode.
		 * @param   {number} byte_count 2 or 4 byte encoding
		 * @returns {any[]}             byte array with encoded number
		 */
		encodeXInt? (value: number, byte_count: number): any[];
		/** 
		 * Returns the value of [format](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html#cfg-format).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getFormat? (): number;
		/** 
		 * Tries to determine if an object is an XML document
		 * @method
		 * @public (method)
		 * @param   {object}  item to identify
		 * @returns {boolean}      true if it's an XML document, false otherwise
		 */
		isXmlDocument? (item: object): boolean;
		/** 
		 * Sets the value of [format](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html#cfg-format).
		 * @method
		 * @public (method)
		 * @param   {number} format The new value.
		 * @returns {void}          
		 */
		setFormat? (format: number): void;
		/** 
		 * Writes a key-value pair in AMF0 format.
		 * @method
		 * @public (method)
		 * @param   {string} key   the name of the property
		 * @param   {object} value to write in AMF0 format
		 * @returns {void}         
		 */
		write0ObjectProperty? (key: string, value: object): void;
		/** 
		 * Writes a short UTF8 string preceded with a 16-bit length.
		 * @method
		 * @public (method)
		 * @param   {string} str the string to write
		 * @returns {void}       
		 */
		write0ShortUtf8String? (str: string): void;
		/** 
		 * Writes a strict-array in AMF0 format. Unordered parts are ignored (e.g.
		 * a["hello"] will not be encoded). This function is included for
		 * completeness and will never be called by writeObject.
		 * @method
		 * @public (method)
		 * @param   {any[]} arr the array to serialize.
		 * @returns {void}      
		 */
		write0StrictArray? (arr: any[]): void;
		/** 
		 * Write a byte array in AMF3 format. This function is never called directly
		 * by writeObject since there's no way to distinguish a regular array from a
		 * byte array.
		 * @method
		 * @public (method)
		 * @param   {any[]} arr the object to serialize.
		 * @returns {void}      
		 */
		write3ByteArray? (arr: any[]): void;
		/** 
		 * Writes an Legacy XMLDocument (ActionScript Legacy XML object) in AMF3
		 * format. Must be called explicitly.
		 * The writeObject method will call writeXml and not writeXmlDocument.
		 * @method
		 * @public (method)
		 * @param   {object} xml XML document (type Document typically) to write
		 * @returns {void}       
		 */
		write3XmlDocument? (xml: object): void;
		/** 
		 * Writes an AMF packet to the byte array
		 * @method
		 * @public (method)
		 * @param   {any[]} headers
		 * the headers to serialize. Each item in the array
		 * 
		 *                 should be an object with three fields:
		 *                 name, mustUnderstand, value
		 * 
		 * @param   {any[]} messages
		 * the messages to serialize. Each item in the array
		 * 
		 *                 should be an object with three fields:
		 *                 targetUri, responseUri, body
		 * 
		 * @returns {void}           
		 */
		writeAmfPacket? (headers: any[], messages: any[]): void;
		/** 
		 * Write the appropriate data items to the byte array. Supported types:
		 * 
		 * - undefined
		 * - null
		 * - boolean
		 * - integer (if AMF3 - limited by 29-bit int, otherwise passed as double)
		 * - double
		 * - UTF-8 string
		 * - XML Document (identified by being instaneof Document. Can be generated with: new DOMParser()).parseFromString(xml, "text/xml");
		 * @method
		 * @public (method)
		 * @param   {object} item A primitive or object to write to the stream
		 * @returns {void}        
		 */
		writeObject? (item: object): void;
	}
	/** 
	 * [Ext.data.amf.Packet](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html)
	 * This class represents an Action Message Format (AMF) Packet.  It contains all
	 * the logic required to decode an AMF Packet from a byte array.
	 * To decode a Packet, first construct a Packet:
	 * 
	 *    var packet = Ext.create('Ext.data.amf.Packet');
	 * 
	 * Then use the decode method to decode an AMF byte array:
	 * 
	 *    packet.decode(bytes);
	 * 
	 * where "bytes" is a Uint8Array or an array of numbers representing the binary
	 * AMF data.
	 * 
	 * To access the decoded data use the [version](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-version), [headers](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-headers), and [messages](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-messages) properties:
	 * 
	 *    console.log(packet.version, packet.headers, packet.messages);
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	class Packet extends Ext.Base {
		/** 
		 * The decoded headers. Each header has the following properties:
		 * 
		 * - `name`: String
		 *   The header name. Typically identifies a remote operation or method to
		 *   be invoked by this context header.
		 * - `mustUnderstand`: Boolean
		 *   If `true` this flag instructs the endpoint to abort and generate an
		 *   error if the header is not understood.
		 * - `byteLength`: Number
		 *   If the byte-length of a header is known it can be specified to optimize
		 *   memory allocation at the remote endpoint.
		 * - `value`: Mixed
		 *   The header value
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {any[]}
		 */
		readonly headers?: any[];
		/** 
		 * The decoded messages. Each message has the following properties:
		 * 
		 * - `targetURI`: String
		 *   Describes which operation, function, or method is to be remotely
		 *   invoked.
		 * - `responseURI`: String
		 *   A unique operation name
		 * - `byteLength`: Number
		 *   Optional byte-length of the message body
		 * - `body`: Mixed
		 *   The message body
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {any[]}
		 */
		readonly messages?: any[];
		/** 
		 * The AMF version number (0 or 3)
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {number}
		 */
		readonly version?: number;
		/** 
		 * Decodes an AMF btye array and sets the decoded data as the
		 * Packet's [version](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-version), [headers](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-headers), and [messages](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-messages) properties
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}               byteArray A byte array containing the encoded AMF data.
		 * @returns {Ext.data.amf.Packet}           this AMF Packet
		 */
		decode? (byteArray: any[]): Ext.data.amf.Packet;
		/** 
		 * Decodes an AMF3 byte array and that has one value and returns it.
		 * Note: Destroys previously stored data in this Packet.
		 * @method
		 * @public (method)
		 * @param   {any[]}  byteArray A byte array containing the encoded AMF data.
		 * @returns {object}           the decoded object
		 */
		decodeValue? (byteArray: any[]): object;
	}
	/** 
	 * [Ext.data.amf.Proxy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Proxy.html)
	 * The AMF Proxy is an Ajax Proxy that requests
	 * binary data from a remote server and parses it into records using an
	 * [AMF Reader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Reader.html) for use in a
	 * Store.
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'Foo',
	 *        proxy: {
	 *            type: 'amf',
	 *            url: 'some/url'
	 *        }
	 *    });
	 * 
	 * For a detailed tutorial on using AMF data see the [AMF Guide](#/guide/amf).
	 * 
	 * **Note: **  _This functionality is only available with the purchase of
	 * Sencha Complete.  For more information about using this class, please visit
	 * our [Sencha Complete](https://www.sencha.com/products/complete/) product page._
	 */
	class Proxy extends Ext.data.proxy.Ajax {
	}
	/** 
	 * [Ext.data.amf.Reader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Reader.html)
	 * The AMF Reader is used by an [AMF Proxy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Proxy.html) to read
	 * records from a server response that contains binary data in either AMF0 or
	 * AMF3 format. AMF Reader constructs an [AMF Packet](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html)
	 * and uses it to decode the binary data into javascript objects, then simply
	 * allows its superclass (Ext.data.reader.Json) to handle converting the
	 * raw javascript objects into Ext.data.Model instances.
	 * 
	 * For a more detailed tutorial see the [AMF Guide](#/guide/amf).
	 */
	class Reader extends Ext.data.reader.Json {
	}
	/** 
	 * [Ext.data.amf.RemotingMessage](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.RemotingMessage.html)
	 * Represents a remote call to be sent to the server.
	 */
	class RemotingMessage extends Ext.Base {
		/** 
		 * - typically an array of parameters to pass to a method call
		 * @property
		 * @public (property)
		 * @default []
		 * @type {any[]}
		 */
		body?: any[];
		/** 
		 * - identifies the calling client.
		 * @property
		 * @public (property)
		 * @type {string}
		 */
		clientID?: string;
		/** 
		 * - the service destination on the server
		 * @property
		 * @public (property)
		 * @default ""
		 * @type {string}
		 */
		destination?: string;
		/** 
		 * - the headers to attach to the message.
		 *   Would typically contain the DSEndpoint and DSId fields.
		 * @property
		 * @public (property)
		 * @default []
		 * @type {object}
		 */
		headers?: object;
		/** 
		 * - message identifier
		 * @property
		 * @public (property)
		 * @default ""
		 * @type {string}
		 */
		messageId?: string;
		/** 
		 * - the method name to call
		 * @property
		 * @public (property)
		 * @default ""
		 * @type {string}
		 */
		operation?: string;
		/** 
		 * - should be empty for security purposes
		 * @property
		 * @public (property)
		 * @default ""
		 * @type {any[]}
		 */
		source?: any[];
		/** 
		 * - how long the message is still valid for passing
		 * @property
		 * @public (property)
		 * @default []
		 * @type {number}
		 */
		timeToLive?: number;
		/** 
		 * - when the message was created
		 * @property
		 * @public (property)
		 * @default []
		 * @type {number}
		 */
		timestamp?: number;
		/** 
		 * Creates new message.
		 * @method
		 * @public (method)
		 * @param   {object} config Configuration options
		 */
		constructor (config: object);
		/** 
		 * Returns an AMFX encoded version of the message.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		encodeMessage? (): void;
		/** 
		 * Returns the value of [$flexType](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.RemotingMessage.html#cfg-S-flexType).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		get$flexType? (): string;
		/** 
		 * Sets the value of [$flexType](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.RemotingMessage.html#cfg-S-flexType).
		 * @method
		 * @public (method)
		 * @param   {string} $flexType The new value.
		 * @returns {void}             
		 */
		set$flexType? ($flexType: string): void;
	}
	/** 
	 * [Ext.data.amf.XmlDecoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.XmlDecoder.html)
	 * This class parses an XML-based AMFX message and returns the deserialized
	 * objects. You should not need to use this class directly. It's mostly used by
	 * the AMFX Direct implementation.
	 * To decode a message, first construct a Decoder:
	 * 
	 *     decoder = Ext.create('Ext.data.amf.XmlDecoder');
	 * 
	 * Then ask it to read in the message :
	 * 
	 *    resp = decoder.readAmfxMessage(str);
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	class XmlDecoder extends Ext.Base {
		/** 
		 * Accepts Flex-style UID and decodes the number in the first four bytes (8 hex digits) of data.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string} messageId the message ID
		 * @returns {number}           the transaction ID
		 */
		static decodeTidFromFlexUID? (messageId: string): number;
		/** 
		 * Deserializes an AMF3 binary object from a byte array
		 * @method
		 * @public (method)
		 * @static
		 * @param   {any[]}  bytes the byte array containing one AMF3-encoded value
		 * @returns {object}       the decoded value
		 */
		static readAMF3Value? (bytes: any[]): object;
		/** 
		 * parses a node containing a byte array in hexadecimal format, returning the reconstructed array.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {HTMLElement|Element} node the node
		 * @returns {any[]}                    a byte array
		 */
		static readByteArray? (node: HTMLElement | ExtGlobalElement): any[];
		/** 
		 * Creates new encoder.
		 * @method
		 * @public (method)
		 * @param   {object} config Configuration options
		 */
		constructor (config: object);
		/** 
		 * Clears the accumulated data and reference tables
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clear? (): void;
		/** 
		 * Reads and returns a decoded AMFX packet.
		 * @method
		 * @public (method)
		 * @param   {string} xml the xml of the message
		 * @returns {object}     the response object containing the message
		 */
		readAmfxMessage? (xml: string): object;
		/** 
		 * Parses and returns an AMFX array.
		 * @method
		 * @public (method)
		 * @param   {HTMLElement|Element} node the array node
		 * @returns {any[]}                    the deserialized array
		 */
		readArray? (node: HTMLElement | ExtGlobalElement): any[];
		/** 
		 * Parses and returns an AMFX dictionary.
		 * @method
		 * @public (method)
		 * @param   {HTMLElement|Element} node the `&lt;dictionary&gt;` node
		 * @returns {object}                   a javascript object with the dictionary value-pair elements
		 */
		readDictionary? (node: HTMLElement | ExtGlobalElement): object;
		/** 
		 * Parses and returns an AMFX object.
		 * @method
		 * @public (method)
		 * @param   {HTMLElement|Element} node the `&lt;object&gt;` node to parse
		 * @returns {object}                   the deserialized object
		 */
		readObject? (node: HTMLElement | ExtGlobalElement): object;
		/** 
		 * Parses and return an object / array / dictionary / date from reference
		 * @method
		 * @public (method)
		 * @param   {HTMLElement|Element} node the ref node
		 * @returns {object}                   the previously instantiated object referred to by the ref node
		 */
		readObjectRef? (node: HTMLElement | ExtGlobalElement): object;
		/** 
		 * Reads a string or string reference and return the value
		 * @method
		 * @public (method)
		 * @param   {HTMLElement|Element} node the node containing a string object
		 * @returns {string}                   the parsed string
		 */
		readString? (node: HTMLElement | ExtGlobalElement): string;
		/** 
		 * Parses and returns an ordered list of trait names
		 * @method
		 * @public (method)
		 * @param   {HTMLElement|Element} node the traits node from the XML doc
		 * @returns {any[]}                    an array of ordered trait names or null if it's an externalizable object
		 */
		readTraits? (node: HTMLElement | ExtGlobalElement): any[];
		/** 
		 * Parses an HTML element returning the appropriate JavaScript value from the AMFX data.
		 * @method
		 * @public (method)
		 * @param   {HTMLElement} node The node to parse
		 * @returns {object}           a JavaScript object or value
		 */
		readValue? (node: HTMLElement): object;
	}
	/** 
	 * [Ext.data.amf.XmlEncoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.XmlEncoder.html)
	 * This class serializes data in the Action Message Format XML (AMFX) format.
	 * It can write simple and complex objects, to be used in conjunction with an
	 * AMFX-compliant server.
	 * To create an encoded XMl, first construct an Encoder:
	 * 
	 *    var encoder = Ext.create('Ext.data.amf.XmlEncoder');
	 * 
	 * Then use the writer methods to out data to the :
	 * 
	 *    encoder.writeObject(1);
	 *    encoder.writeObject({a: "b"});
	 * 
	 * And access the data through the #bytes property:
	 *     encoder.body;
	 * 
	 * You can also reset the class to start a new body:
	 * 
	 *    encoder.clear();
	 * 
	 * Current limitations:
	 * AMF3 format (format:3)
	 * 
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMFX format. This means the function does NOT support
	 *   circular reference objects.
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects with dynamic data.
	 * - If the object has a $flexType field, that field will be used in signifying
	 *   the object-type as an attribute, instead of being passed as data.
	 * - There's no JavaScript equivalent to the ByteArray type in ActionScript,
	 *   hence data will never be searialized as ByteArrays by the writeObject
	 *   function. A writeByteArray method is provided for writing out ByteArray objects.
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	class XmlEncoder extends Ext.Base {
		/** 
		 * - The output string
		 * @property
		 * @public (property)
		 * @default ""
		 * @type {string}
		 */
		body?: string;
		/** 
		 * Utility function to generate a flex-friendly UID
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number} id used in the first 8 chars of the id. If not provided, a random number will be used.
		 * @returns {string}    a string-encoded opaque UID
		 */
		static generateFlexUID? (id: number): string;
		/** 
		 * Creates new encoder.
		 * @method
		 * @public (method)
		 * @param   {object} config Configuration options
		 */
		constructor (config: object);
		/** 
		 * Clears the accumulated data, starting with an empty string
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clear? (): void;
		/** 
		 * Encodes an AMFX remoting message with the AMFX envelope.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.amf.RemotingMessage} message the message to pass on to serialize.
		 * @returns {void}                                 
		 */
		encodeAmfxRemotingPacket? (message: Ext.data.amf.RemotingMessage): void;
		/** 
		 * Encodes an array, marking it as an ECMA array if it has associative (non-ordinal) indices
		 * @method
		 * @public (method)
		 * @param   {any[]} array the array to encode
		 * @returns {void}        
		 */
		encodeArray? (array: any[]): void;
		/** 
		 * Returns an encoded boolean
		 * @method
		 * @public (method)
		 * @param   {boolean} val a boolean value
		 * @returns {void}        
		 */
		encodeBoolean? (val: boolean): void;
		/** 
		 * Encodes a byte arrat in AMFX format
		 * @method
		 * @public (method)
		 * @param   {any[]} array the byte array to encode
		 * @returns {void}        
		 */
		encodeByteArray? (array: any[]): void;
		/** 
		 * Encode a date
		 * @method
		 * @public (method)
		 * @param   {Date} date the date to encode
		 * @returns {void}      
		 */
		encodeDate? (date: ExtGlobalDate): void;
		/** 
		 * Returns an encoded double
		 * @method
		 * @public (method)
		 * @param   {number} num the double to encode
		 * @returns {void}       
		 */
		encodeDouble? (num: number): void;
		/** 
		 * Encodes a generic object into AMFX format. If a <tt>$flexType</tt> member is defined, list that as the object type.
		 * @method
		 * @public (method)
		 * @param   {object} obj the object to encode
		 * @returns {string}     the encoded text
		 */
		encodeGenericObject? (obj: object): string;
		/** 
		 * Returns an encoded int
		 * @method
		 * @public (method)
		 * @param   {number} num the integer to encode
		 * @returns {void}       
		 */
		encodeInt? (num: number): void;
		/** 
		 * Returns the encoding for null
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		encodeNull? (): void;
		/** 
		 * Returns an encoded number. Decides wheter to use int or double encoding.
		 * @method
		 * @public (method)
		 * @param   {number} num the number to encode
		 * @returns {void}       
		 */
		encodeNumber? (num: number): void;
		/** 
		 * encode the appropriate data item. Supported types:
		 * 
		 * - undefined
		 * - null
		 * - boolean
		 * - integer
		 * - double
		 * - UTF-8 string
		 * - XML Document (identified by being instaneof Document. Can be generated with: new DOMParser()).parseFromString(xml, "text/xml");
		 * - Date
		 * - Array
		 * - Generic object
		 * @method
		 * @public (method)
		 * @param   {object} item A primitive or object to write to the stream
		 * @returns {string}      the encoded object in AMFX format
		 */
		encodeObject? (item: object): string;
		/** 
		 * Returns an encoded string
		 * @method
		 * @public (method)
		 * @param   {string} str the string to encode
		 * @returns {void}       
		 */
		encodeString? (str: string): void;
		/** 
		 * Returns the encoding for undefined (which is the same as the encoding for null)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		encodeUndefined? (): void;
		/** 
		 * Encodes an xml document into a CDATA section
		 * @method
		 * @public (method)
		 * @param   {Element|HTMLElement} xml an XML document or element (Document type in some browsers)
		 * @returns {void}                    
		 */
		encodeXml? (xml: ExtGlobalElement | HTMLElement): void;
		/** 
		 * Tries to determine if an object is an XML document
		 * @method
		 * @public (method)
		 * @param   {object}  item to identify
		 * @returns {boolean}      true if it's an XML document, false otherwise
		 */
		isXmlDocument? (item: object): boolean;
		/** 
		 * Writes an AMFX remoting message with the AMFX envelope to the string.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.amf.RemotingMessage} message the message to pass on to serialize.
		 * @returns {void}                                 
		 */
		writeAmfxRemotingPacket? (message: Ext.data.amf.RemotingMessage): void;
		/** 
		 * Writes an array to the string, marking it as an ECMA array if it has associative (non-ordinal) indices
		 * @method
		 * @public (method)
		 * @param   {any[]} array the array to encode
		 * @returns {void}        
		 */
		writeArray? (array: any[]): void;
		/** 
		 * Writes a boolean value to the string
		 * @method
		 * @public (method)
		 * @param   {boolean} val a boolean value
		 * @returns {void}        
		 */
		writeBoolean? (val: boolean): void;
		/** 
		 * Writes an AMFX byte array to the string. This is for convenience only and is not called automatically by writeObject.
		 * @method
		 * @public (method)
		 * @param   {any[]} array the byte array to encode
		 * @returns {void}        
		 */
		writeByteArray? (array: any[]): void;
		/** 
		 * Write a date to the string
		 * @method
		 * @public (method)
		 * @param   {Date} date the date to encode
		 * @returns {void}      
		 */
		writeDate? (date: ExtGlobalDate): void;
		/** 
		 * Writes a double tag with the content.
		 * @method
		 * @public (method)
		 * @param   {number} num the double to encode
		 * @returns {void}       
		 */
		writeDouble? (num: number): void;
		/** 
		 * Writes a generic object to the string. If a <tt>$flexType</tt> member is defined, list that as the object type.
		 * @method
		 * @public (method)
		 * @param   {object} obj the object to encode
		 * @returns {void}       
		 */
		writeGenericObject? (obj: object): void;
		/** 
		 * Writes a int tag with the content.
		 * @method
		 * @public (method)
		 * @param   {number} num the integer to encode
		 * @returns {void}       
		 */
		writeInt? (num: number): void;
		/** 
		 * Writes the null value to the string
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		writeNull? (): void;
		/** 
		 * Writes a number, deciding if to use int or double as the tag
		 * @method
		 * @public (method)
		 * @param   {number} num the number to encode
		 * @returns {void}       
		 */
		writeNumber? (num: number): void;
		/** 
		 * Writes the appropriate data item to the string. Supported types:
		 * 
		 * - undefined
		 * - null
		 * - boolean
		 * - integer
		 * - double
		 * - UTF-8 string
		 * - XML Document (identified by being instaneof Document. Can be generated with: new DOMParser()).parseFromString(xml, "text/xml");
		 * - Date
		 * - Array
		 * - Generic object
		 * @method
		 * @public (method)
		 * @param   {object} item A primitive or object to write to the stream
		 * @returns {void}        
		 */
		writeObject? (item: object): void;
		/** 
		 * Writes a string tag with the string content.
		 * @method
		 * @public (method)
		 * @param   {string} str the string to encode
		 * @returns {void}       
		 */
		writeString? (str: string): void;
		/** 
		 * Writes the undefined value to the string
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		writeUndefined? (): void;
		/** 
		 * Write an XML document to the string
		 * @method
		 * @public (method)
		 * @param   {Element|HTMLElement} xml an XML document or element (Document type in some browsers)
		 * @returns {void}                    
		 */
		writeXml? (xml: ExtGlobalElement | HTMLElement): void;
	}
}
declare namespace Ext.data.amf.Encoder {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.Encoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html)
	 * This class serializes data in the Action Message Format (AMF) format.
	 * It can write simple and complex objects, to be used in conjunction with an
	 * AMF-compliant server.
	 * To encode a byte array, first construct an Encoder, optionally setting the format:
	 * 
	 *    var encoder = Ext.create('Ext.data.amf.Encoder', {
	 *      format: 3
	 *    });
	 * 
	 * Then use the writer methods to out data to the :
	 * 
	 *    encoder.writeObject(1);
	 * 
	 * And access the data through the [bytes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html#property-bytes) property:
	 *     encoder.bytes;
	 * 
	 * You can also reset the class to start a new byte array:
	 * 
	 *    encoder.clear();
	 * 
	 * Current limitations:
	 * AMF3 format (format:3)
	 * 
	 * - writeObject will write out XML object, not legacy XMLDocument objects. A
	 *   writeXmlDocument method is provided for explicitly writing XMLDocument
	 *   objects.
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMF format. This means the function does NOT support
	 *   circular reference objects.
	 * - Array objects: only the numbered indices and data will be written out.
	 *   Associative values will be ignored.
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects with dynamic data.
	 * - There's no JavaScript equivalent to the ByteArray type in ActionScript,
	 *   hence data will never be searialized as ByteArrays by the writeObject
	 *   function. A writeByteArray method is provided for writing out ByteArray objects.
	 * 
	 * AMF0 format (format:0)
	 * 
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMF format. This means the function does NOT support
	 *   circular reference objects.
	 * - Array objects: the function always writes an associative array (following
	 *   the behavior of flex).
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects.
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Def extends Ext.data.amf.Encoder {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.data.amf.Encoder.Cfg}
		 */
		config?: Ext.data.amf.Encoder.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.data.amf.Packet {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.Packet](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html)
	 * This class represents an Action Message Format (AMF) Packet.  It contains all
	 * the logic required to decode an AMF Packet from a byte array.
	 * To decode a Packet, first construct a Packet:
	 * 
	 *    var packet = Ext.create('Ext.data.amf.Packet');
	 * 
	 * Then use the decode method to decode an AMF byte array:
	 * 
	 *    packet.decode(bytes);
	 * 
	 * where "bytes" is a Uint8Array or an array of numbers representing the binary
	 * AMF data.
	 * 
	 * To access the decoded data use the [version](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-version), [headers](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-headers), and [messages](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html#property-messages) properties:
	 * 
	 *    console.log(packet.version, packet.headers, packet.messages);
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Def extends Ext.data.amf.Packet {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		config?: object;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.data.amf.Proxy {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.Proxy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Proxy.html)
	 * The AMF Proxy is an Ajax Proxy that requests
	 * binary data from a remote server and parses it into records using an
	 * [AMF Reader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Reader.html) for use in a
	 * Store.
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'Foo',
	 *        proxy: {
	 *            type: 'amf',
	 *            url: 'some/url'
	 *        }
	 *    });
	 * 
	 * For a detailed tutorial on using AMF data see the [AMF Guide](#/guide/amf).
	 * 
	 * **Note: **  _This functionality is only available with the purchase of
	 * Sencha Complete.  For more information about using this class, please visit
	 * our [Sencha Complete](https://www.sencha.com/products/complete/) product page._
	 */
	interface Def extends Ext.data.amf.Proxy {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.data.amf.Proxy.Cfg}
		 */
		config?: Ext.data.amf.Proxy.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.data.proxy.Ajax.Statics|Ext.data.proxy.Server.Statics|Ext.data.proxy.Proxy.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.data.proxy.Ajax.Statics | Ext.data.proxy.Server.Statics | Ext.data.proxy.Proxy.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.data.amf.Reader {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.Reader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Reader.html)
	 * The AMF Reader is used by an [AMF Proxy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Proxy.html) to read
	 * records from a server response that contains binary data in either AMF0 or
	 * AMF3 format. AMF Reader constructs an [AMF Packet](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html)
	 * and uses it to decode the binary data into javascript objects, then simply
	 * allows its superclass (Ext.data.reader.Json) to handle converting the
	 * raw javascript objects into Ext.data.Model instances.
	 * 
	 * For a more detailed tutorial see the [AMF Guide](#/guide/amf).
	 */
	interface Def extends Ext.data.amf.Reader {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.data.amf.Reader.Cfg}
		 */
		config?: Ext.data.amf.Reader.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.data.reader.Json.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.data.reader.Json.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.data.amf.RemotingMessage {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.RemotingMessage](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.RemotingMessage.html)
	 * Represents a remote call to be sent to the server.
	 */
	interface Def extends Ext.data.amf.RemotingMessage {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {Ext.data.amf.RemotingMessage.Cfg}
		 */
		config?: Ext.data.amf.RemotingMessage.Cfg;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.data.amf.XmlDecoder {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.XmlDecoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.XmlDecoder.html)
	 * This class parses an XML-based AMFX message and returns the deserialized
	 * objects. You should not need to use this class directly. It's mostly used by
	 * the AMFX Direct implementation.
	 * To decode a message, first construct a Decoder:
	 * 
	 *     decoder = Ext.create('Ext.data.amf.XmlDecoder');
	 * 
	 * Then ask it to read in the message :
	 * 
	 *    resp = decoder.readAmfxMessage(str);
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Def extends Ext.data.amf.XmlDecoder {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		config?: object;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.data.amf.XmlDecoder.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.data.amf.XmlDecoder.Statics | any;
	}
}
declare namespace Ext.data.amf.XmlEncoder {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.amf.XmlEncoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.XmlEncoder.html)
	 * This class serializes data in the Action Message Format XML (AMFX) format.
	 * It can write simple and complex objects, to be used in conjunction with an
	 * AMFX-compliant server.
	 * To create an encoded XMl, first construct an Encoder:
	 * 
	 *    var encoder = Ext.create('Ext.data.amf.XmlEncoder');
	 * 
	 * Then use the writer methods to out data to the :
	 * 
	 *    encoder.writeObject(1);
	 *    encoder.writeObject({a: "b"});
	 * 
	 * And access the data through the #bytes property:
	 *     encoder.body;
	 * 
	 * You can also reset the class to start a new body:
	 * 
	 *    encoder.clear();
	 * 
	 * Current limitations:
	 * AMF3 format (format:3)
	 * 
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMFX format. This means the function does NOT support
	 *   circular reference objects.
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects with dynamic data.
	 * - If the object has a $flexType field, that field will be used in signifying
	 *   the object-type as an attribute, instead of being passed as data.
	 * - There's no JavaScript equivalent to the ByteArray type in ActionScript,
	 *   hence data will never be searialized as ByteArrays by the writeObject
	 *   function. A writeByteArray method is provided for writing out ByteArray objects.
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Def extends Ext.data.amf.XmlEncoder {
		/** 
		 * List of short aliases for class names. An alias consists of a namespace and a name
		 * concatenated by a period as &#60;namespace&#62;.&#60;name&#62;
		 * 
		 * - **namespace** - The namespace describes what kind of alias this is and must be
		 *   all lowercase.
		 * - **name** - The name of the alias which allows the lazy-instantiation via the
		 *   alias. The name shouldn't contain any periods.
		 * 
		 * A list of namespaces and the usages are:
		 * 
		 * - **feature** - Grid features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
		 * - **widget** - Components
		 * 
		 * Most useful for defining xtypes for widgets:
		 * 
		 *    Ext.define('MyApp.CoolPanel', {
		 *        extend: 'Ext.panel.Panel',
		 *        alias: ['widget.coolpanel'],
		 *        title: 'Yeah!'
		 *    });
		 *    
		 *    // Using Ext.create
		 *    Ext.create('widget.coolpanel');
		 *    
		 *    // Using the shorthand for defining widgets by xtype
		 *    Ext.widget('panel', {
		 *        items: [
		 *            {xtype: 'coolpanel', html: 'Foo'},
		 *            {xtype: 'coolpanel', html: 'Bar'}
		 *        ]
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alias?: string | string[];
		/** 
		 * Defines alternate names for this class.  For example:
		 * 
		 *    Ext.define('Developer', {
		 *        alternateClassName: ['Coder', 'Hacker'],
		 *        code: function(msg) {
		 *            alert('Typing... ' + msg);
		 *        }
		 *    });
		 *    
		 *    var joe = Ext.create('Developer');
		 *    joe.code('stackoverflow');
		 *    
		 *    var rms = Ext.create('Hacker');
		 *    rms.code('hack hack');
		 * 
		 * @property
		 * @protected (property)
		 * @type {string|string[]}
		 */
		alternateClassName?: string | string[];
		/** 
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
		 * 
		 * This option is useful for expensive objects that can be shared across class instances.
		 * The class itself ensures that the creation only occurs once.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		cachedConfig?: object;
		/** 
		 * List of configuration options with their default values.
		 * 
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
		 * your own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter
		 * methods will not be initialized.
		 * 
		 * Each config item will have its own setter and getter method automatically generated inside the class prototype
		 * during class creation time, if the class does not have those methods explicitly defined.
		 * 
		 * As an example, let's convert the name property of a Person class to be a config item, then add extra age and
		 * gender items.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            name: 'Mr. Unknown',
		 *            age: 0,
		 *            gender: 'Male'
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *    
		 *            return this;
		 *        }
		 *    
		 *        // ...
		 *    });
		 * 
		 * Within the class, this.name still has the default value of "Mr. Unknown". However, it's now publicly accessible
		 * without sacrificing encapsulation, via setter and getter methods.
		 * 
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 35
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 35
		 *    alert(jacky.getGender());   // alerts "Male"
		 *    
		 *    jacky.walk(10);             // alerts "Jacky is walking 10 steps"
		 *    
		 *    jacky.setName("Mr. Nguyen");
		 *    alert(jacky.getName());     // alerts "Mr. Nguyen"
		 *    
		 *    jacky.walk(10);             // alerts "Mr. Nguyen is walking 10 steps"
		 * 
		 * Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.
		 * Two key things happened:
		 * 
		 * - The provided config object when the class is instantiated is recursively merged with the default config object.
		 * - All corresponding setter methods are called with the merged values.
		 * 
		 * Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:
		 * 
		 * - Filtering / validation / transformation of the given value before it's actually stored within the instance.
		 * - Notification (such as firing events) / post-processing after the value has been set, or changed from a
		 *   previous value.
		 * 
		 * By standardize this common pattern, the default generated setters provide two extra template methods that you
		 * can put your own custom logics into, i.e: an "applyFoo" and "updateFoo" method for a "foo" config item, which are
		 * executed before and after the value is actually set, respectively. Back to the example class, let's validate that
		 * age must be a valid positive number, and fire an 'agechange' if the value is modified.
		 * 
		 *    Ext.define('My.sample.Person', {
		 *        config: {
		 *            // ...
		 *        },
		 *    
		 *        constructor: {
		 *            // ...
		 *        },
		 *    
		 *        applyAge: function(age) {
		 *            if (typeof age !== 'number' || age &lt; 0) {
		 *                console.warn("Invalid age, must be a positive number");
		 *                return;
		 *            }
		 *    
		 *            return age;
		 *        },
		 *    
		 *        updateAge: function(newAge, oldAge) {
		 *            // age has changed from "oldAge" to "newAge"
		 *            this.fireEvent('agechange', this, newAge, oldAge);
		 *        }
		 *    
		 *        // ...
		 *    });
		 *    
		 *    var jacky = new Person({
		 *        name: "Jacky",
		 *        age: 'invalid'
		 *    });
		 *    
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(-100));  // alerts 0
		 *    alert(jacky.getAge());      // alerts 0
		 *    
		 *    alert(jacky.setAge(35));    // alerts 0
		 *    alert(jacky.getAge());      // alerts 35
		 * 
		 * In other words, when leveraging the config feature, you mostly never need to define setter and getter methods
		 * explicitly. Instead, "apply_" and "update_" methods should be implemented where necessary. Your code will be
		 * consistent throughout and only contain the minimal logic that you actually care about.
		 * 
		 * When it comes to inheritance, the default config of the parent class is automatically, recursively merged with
		 * the child's default config. The same applies for mixins.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		config?: object;
		/** 
		 * The parent class that this class extends. For example:
		 * 
		 *    Ext.define('Person', {
		 *        say: function(text) { alert(text); }
		 *    });
		 *    
		 *    Ext.define('Developer', {
		 *        extend: 'Person',
		 *        say: function(text) { this.callParent(["print "+text]); }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		extend?: string;
		/** 
		 * List of inheritable static methods for this class.
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		inheritableStatics?: object;
		/** 
		 * List of classes to mix into this class. For example:
		 * 
		 *    Ext.define('CanSing', {
		 *         sing: function() {
		 *             alert("For he's a jolly good fellow...")
		 *         }
		 *    });
		 *    
		 *    Ext.define('Musician', {
		 *         mixins: ['CanSing']
		 *    })
		 * 
		 * In this case the Musician class will get a `sing` method from CanSing mixin.
		 * 
		 * But what if the Musician already has a `sing` method? Or you want to mix
		 * in two classes, both of which define `sing`?  In such a cases it's good
		 * to define mixins as an object, where you assign a name to each mixin:
		 * 
		 *    Ext.define('Musician', {
		 *         mixins: {
		 *             canSing: 'CanSing'
		 *         },
		 *    
		 *         sing: function() {
		 *             // delegate singing operation to mixin
		 *             this.mixins.canSing.sing.call(this);
		 *         }
		 *    })
		 * 
		 * In this case the `sing` method of Musician will overwrite the
		 * mixed in `sing` method. But you can access the original mixed in method
		 * through special `mixins` property.
		 * @property
		 * @protected (property)
		 * @type {string[]|object}
		 */
		mixins?: string[] | object;
		/** 
		 * Overrides members of the specified `target` class.
		 * 
		 * **NOTE:** the overridden class must have been defined using
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		override?: string;
		/** 
		 * Allows setting config values for a class based on specific platforms. The value
		 * of this config is an object whose properties are "rules" and whose values are
		 * objects containing config values.
		 * 
		 * For example:
		 * 
		 *     Ext.define('App.view.Foo', {
		 *         extend: 'Ext.panel.Panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * In the above, "desktop" and "!desktop" are (mutually exclusive) rules. Whichever
		 * evaluates to `true` will have its configs applied to the class. In this case, only
		 * the "title" property, but the object can contain any number of config properties.
		 * In this case, the `platformConfig` is evaluated as part of the class and there is
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
		 * 
		 *     Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         platformConfig: {
		 *             desktop: {
		 *                 title: 'Some Rather Descriptive Title'
		 *             },
		 *    
		 *             '!desktop': {
		 *                 title: 'Short Title'
		 *             }
		 *         }
		 *     });
		 * 
		 * The following is equivalent to the above:
		 * 
		 *     if (Ext.platformTags.desktop) {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Some Rather Descriptive Title'
		 *         });
		 *     } else {
		 *         Ext.create({
		 *             xtype: 'panel',
		 *             title: 'Short Title'
		 *         });
		 *     }
		 * 
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		platformConfig?: object;
		/** 
		 * The `privates` config is a list of methods intended to be used internally by the
		 * framework.  Methods are placed in a `privates` block to prevent developers from
		 * accidentally overriding framework methods in custom classes.
		 * 
		 *    Ext.define('Computer', {
		 *        privates: {
		 *            runFactory: function(brand) {
		 *                // internal only processing of brand passed to factory
		 *                this.factory(brand);
		 *            }
		 *        },
		 *    
		 *        factory: function (brand) {}
		 *    });
		 * 
		 * In order to override a method from a `privates` block, the overridden method must
		 * also be placed in a `privates` block within the override class.
		 * 
		 *    Ext.define('Override.Computer', {
		 *        override: 'Computer',
		 *        privates: {
		 *            runFactory: function() {
		 *                // overriding logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * List of classes that have to be loaded before instantiating this class.
		 * For example:
		 * 
		 *    Ext.define('Mother', {
		 *        requires: ['Child'],
		 *        giveBirth: function() {
		 *            // we can be sure that child class is available.
		 *            return new Child();
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		requires?: string[];
		/** 
		 * When set to true, the class will be instantiated as singleton.  For example:
		 * 
		 *    Ext.define('Logger', {
		 *        singleton: true,
		 *        log: function(msg) {
		 *            console.log(msg);
		 *        }
		 *    });
		 *    
		 *    Logger.log('Hello');
		 * 
		 * @property
		 * @protected (property)
		 * @type {boolean}
		 */
		singleton?: boolean;
		/** 
		 * List of optional classes to load together with this class. These aren't neccessarily loaded before
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
		 * invoked. For example:
		 * 
		 *    Ext.define('Mother', {
		 *        uses: ['Child'],
		 *        giveBirth: function() {
		 *            // This code might, or might not work:
		 *            // return new Child();
		 *    
		 *            // Instead use Ext.create() to load the class at the spot if not loaded already:
		 *            return Ext.create('Child');
		 *        }
		 *    });
		 * 
		 * @property
		 * @protected (property)
		 * @type {string[]}
		 */
		uses?: string[];
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
		 * 
		 *    Ext.define('PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        alias: 'widget.pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Any Component can be created implicitly as an object config with an xtype specified, allowing it to be
		 * declared and passed into the rendering pipeline without actually being instantiated as an object. Not only is
		 * rendering deferred, but the actual creation of the object itself is also deferred, saving memory and resources
		 * until they are actually needed. In complex, nested layouts containing many Components, this can make a
		 * noticeable improvement in performance.
		 * 
		 *    // Explicit creation of contained Components:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [
		 *          Ext.create('Ext.button.Button', {
		 *             text: 'OK'
		 *          })
		 *       ]
		 *    });
		 *    
		 *    // Implicit creation using xtype:
		 *    var panel = new Ext.Panel({
		 *       // ...
		 *       items: [{
		 *          xtype: 'button',
		 *          text: 'OK'
		 *       }]
		 *    });
		 * 
		 * In the first example, the button will always be created immediately during the panel's initialization. With
		 * many added Components, this approach could potentially slow the rendering of the page. In the second example,
		 * the button will not be created or rendered until the panel is actually displayed in the browser. If the panel
		 * is never displayed (for example, if it is a tab that remains hidden) then the button will never be created and
		 * will never consume any resources whatsoever.
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @configuration
		 * List of static methods for this class. For example:
		 * 
		 *    Ext.define('Computer', {
		 *         statics: {
		 *             factory: function(brand) {
		 *                 // 'this' in static methods refer to the class itself
		 *                 return new this(brand);
		 *             }
		 *         },
		 *    
		 *         constructor: function() { ... }
		 *    });
		 *    
		 *    var dellComputer = Computer.factory('Dell');
		 * 
		 * @protected (method+configuration)
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.data.amf.XmlEncoder.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.data.amf.XmlEncoder.Statics | any;
	}
}
declare namespace Ext.data.amf.XmlDecoder {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.amf.XmlDecoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.XmlDecoder.html)
	 * This class parses an XML-based AMFX message and returns the deserialized
	 * objects. You should not need to use this class directly. It's mostly used by
	 * the AMFX Direct implementation.
	 * To decode a message, first construct a Decoder:
	 * 
	 *     decoder = Ext.create('Ext.data.amf.XmlDecoder');
	 * 
	 * Then ask it to read in the message :
	 * 
	 *    resp = decoder.readAmfxMessage(str);
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Accepts Flex-style UID and decodes the number in the first four bytes (8 hex digits) of data.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string} messageId the message ID
		 * @returns {number}           the transaction ID
		 */
		decodeTidFromFlexUID? (messageId: string): number;
		/** 
		 * Deserializes an AMF3 binary object from a byte array
		 * @method
		 * @public (method)
		 * @static
		 * @param   {any[]}  bytes the byte array containing one AMF3-encoded value
		 * @returns {object}       the decoded value
		 */
		readAMF3Value? (bytes: any[]): object;
		/** 
		 * parses a node containing a byte array in hexadecimal format, returning the reconstructed array.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {HTMLElement|Element} node the node
		 * @returns {any[]}                    a byte array
		 */
		readByteArray? (node: HTMLElement | ExtGlobalElement): any[];
	}
}
declare namespace Ext.data.amf.XmlEncoder {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.amf.XmlEncoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.XmlEncoder.html)
	 * This class serializes data in the Action Message Format XML (AMFX) format.
	 * It can write simple and complex objects, to be used in conjunction with an
	 * AMFX-compliant server.
	 * To create an encoded XMl, first construct an Encoder:
	 * 
	 *    var encoder = Ext.create('Ext.data.amf.XmlEncoder');
	 * 
	 * Then use the writer methods to out data to the :
	 * 
	 *    encoder.writeObject(1);
	 *    encoder.writeObject({a: "b"});
	 * 
	 * And access the data through the #bytes property:
	 *     encoder.body;
	 * 
	 * You can also reset the class to start a new body:
	 * 
	 *    encoder.clear();
	 * 
	 * Current limitations:
	 * AMF3 format (format:3)
	 * 
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMFX format. This means the function does NOT support
	 *   circular reference objects.
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects with dynamic data.
	 * - If the object has a $flexType field, that field will be used in signifying
	 *   the object-type as an attribute, instead of being passed as data.
	 * - There's no JavaScript equivalent to the ByteArray type in ActionScript,
	 *   hence data will never be searialized as ByteArrays by the writeObject
	 *   function. A writeByteArray method is provided for writing out ByteArray objects.
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Utility function to generate a flex-friendly UID
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number} id used in the first 8 chars of the id. If not provided, a random number will be used.
		 * @returns {string}    a string-encoded opaque UID
		 */
		generateFlexUID? (id: number): string;
	}
}
declare namespace Ext.data.amf.Encoder {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.amf.Encoder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html)
	 * This class serializes data in the Action Message Format (AMF) format.
	 * It can write simple and complex objects, to be used in conjunction with an
	 * AMF-compliant server.
	 * To encode a byte array, first construct an Encoder, optionally setting the format:
	 * 
	 *    var encoder = Ext.create('Ext.data.amf.Encoder', {
	 *      format: 3
	 *    });
	 * 
	 * Then use the writer methods to out data to the :
	 * 
	 *    encoder.writeObject(1);
	 * 
	 * And access the data through the [bytes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Encoder.html#property-bytes) property:
	 *     encoder.bytes;
	 * 
	 * You can also reset the class to start a new byte array:
	 * 
	 *    encoder.clear();
	 * 
	 * Current limitations:
	 * AMF3 format (format:3)
	 * 
	 * - writeObject will write out XML object, not legacy XMLDocument objects. A
	 *   writeXmlDocument method is provided for explicitly writing XMLDocument
	 *   objects.
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMF format. This means the function does NOT support
	 *   circular reference objects.
	 * - Array objects: only the numbered indices and data will be written out.
	 *   Associative values will be ignored.
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects with dynamic data.
	 * - There's no JavaScript equivalent to the ByteArray type in ActionScript,
	 *   hence data will never be searialized as ByteArrays by the writeObject
	 *   function. A writeByteArray method is provided for writing out ByteArray objects.
	 * 
	 * AMF0 format (format:0)
	 * 
	 * - Each object is written out explicitly, not using the reference tables
	 *   supported by the AMF format. This means the function does NOT support
	 *   circular reference objects.
	 * - Array objects: the function always writes an associative array (following
	 *   the behavior of flex).
	 * - Objects that aren't Arrays, Dates, Strings, Document (XML) or primitive
	 *   values will be written out as anonymous objects.
	 * 
	 * For more information on working with AMF data please refer to the
	 * [AMF Guide](#/guide/amf).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default 3
		 * @type {number}
		 */
		format?: number;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example Ext.button.Button definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.data.amf.Proxy {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.amf.Proxy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Proxy.html)
	 * The AMF Proxy is an Ajax Proxy that requests
	 * binary data from a remote server and parses it into records using an
	 * [AMF Reader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Reader.html) for use in a
	 * Store.
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'Foo',
	 *        proxy: {
	 *            type: 'amf',
	 *            url: 'some/url'
	 *        }
	 *    });
	 * 
	 * For a detailed tutorial on using AMF data see the [AMF Guide](#/guide/amf).
	 * 
	 * **Note: **  _This functionality is only available with the purchase of
	 * Sencha Complete.  For more information about using this class, please visit
	 * our [Sencha Complete](https://www.sencha.com/products/complete/) product page._
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		binary?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 'amf'
		 * @type {string}
		 */
		reader?: string;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example Ext.button.Button definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.data.amf.Reader {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.amf.Reader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Reader.html)
	 * The AMF Reader is used by an [AMF Proxy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Proxy.html) to read
	 * records from a server response that contains binary data in either AMF0 or
	 * AMF3 format. AMF Reader constructs an [AMF Packet](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.Packet.html)
	 * and uses it to decode the binary data into javascript objects, then simply
	 * allows its superclass (Ext.data.reader.Json) to handle converting the
	 * raw javascript objects into Ext.data.Model instances.
	 * 
	 * For a more detailed tutorial see the [AMF Guide](#/guide/amf).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * AMF Packets can contain multiple messages. This config specifies the
		 * 0-based index of the message that contains the record data.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		messageIndex?: number;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example Ext.button.Button definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.data.amf.RemotingMessage {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.amf.RemotingMessage](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.amf.RemotingMessage.html)
	 * Represents a remote call to be sent to the server.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default 'flex.messaging.messages.RemotingMessage'
		 * @type {string}
		 */
		$flexType?: string;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
		 * 
		 *    Ext.define('My.Cat', {
		 *        constructor: function() {
		 *            alert("I'm a cat!");
		 *        }
		 *    });
		 *    
		 *    My.Cat.override({
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callOverridden();
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callOverridden(arguments)`
		 * @returns {object}                Returns the result of calling the overridden method
		 */
		callOverridden? (args: any[] | IArguments): object;
		/** 
		 * Call the "parent" method of the current method. That is the method previously
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
		 * 
		 *     Ext.define('My.Base', {
		 *         constructor: function (x) {
		 *             this.x = x;
		 *         },
		 *    
		 *         statics: {
		 *             method: function (x) {
		 *                 return x;
		 *             }
		 *         }
		 *     });
		 *    
		 *     Ext.define('My.Derived', {
		 *         extend: 'My.Base',
		 *    
		 *         constructor: function () {
		 *             this.callParent([21]);
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // alerts 21
		 * 
		 * This can be used with an override as follows:
		 * 
		 *     Ext.define('My.DerivedOverride', {
		 *         override: 'My.Derived',
		 *    
		 *         constructor: function (x) {
		 *             this.callParent([x*2]); // calls original My.Derived constructor
		 *         }
		 *     });
		 *    
		 *     var obj = new My.Derived();
		 *    
		 *     alert(obj.x);  // now alerts 42
		 * 
		 * This also works with static and private methods.
		 * 
		 *     Ext.define('My.Derived2', {
		 *         extend: 'My.Base',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Base.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Base.method(10));     // alerts 10
		 *     alert(My.Derived2.method(10)); // alerts 20
		 * 
		 * Lastly, it also works with overridden static methods.
		 * 
		 *     Ext.define('My.Derived2Override', {
		 *         override: 'My.Derived2',
		 *    
		 *         // privates: {
		 *         statics: {
		 *             method: function (x) {
		 *                 return this.callParent([x*2]); // calls My.Derived2.method
		 *             }
		 *         }
		 *     });
		 *    
		 *     alert(My.Derived2.method(10); // now alerts 40
		 * 
		 * To override a method and replace it and also call the superclass method, use
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callParent(arguments)`
		 * @returns {object}                Returns the result of calling the parent method
		 */
		callParent? (args: any[] | IArguments): object;
		/** 
		 * This method is used by an **override** to call the superclass method but
		 * bypass any overridden method. This is often done to "patch" a method that
		 * contains a bug but for whatever reason cannot be fixed directly.
		 * 
		 * Consider:
		 * 
		 *     Ext.define('Ext.some.Class', {
		 *         method: function () {
		 *             console.log('Good');
		 *         }
		 *     });
		 *    
		 *     Ext.define('Ext.some.DerivedClass', {
		 *         extend: 'Ext.some.Class',
		 *    
		 *         method: function () {
		 *             console.log('Bad');
		 *    
		 *             // ... logic but with a bug ...
		 *    
		 *             this.callParent();
		 *         }
		 *     });
		 * 
		 * To patch the bug in `Ext.some.DerivedClass.method`, the typical solution is to create an
		 * override:
		 * 
		 *     Ext.define('App.patches.DerivedClass', {
		 *         override: 'Ext.some.DerivedClass',
		 *    
		 *         method: function () {
		 *             console.log('Fixed');
		 *    
		 *             // ... logic but with bug fixed ...
		 *    
		 *             this.callSuper();
		 *         }
		 *     });
		 * 
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
		 * `method` since that would call the overridden method containing the bug. In
		 * other words, the above patch would only produce "Fixed" then "Good" in the
		 * console log, whereas, using `callParent` would produce "Fixed" then "Bad"
		 * then "Good".
		 * @method
		 * @protected (method)
		 * @param   {any[]|IArguments} args
		 * The arguments, either an array or the `arguments` object
		 * from the current method, for example: `this.callSuper(arguments)`
		 * @returns {object}                Returns the result of calling the superclass method
		 */
		callSuper? (args: any[] | IArguments): object;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns a specified config property value. If the name parameter is not passed,
		 * all current configuration options will be returned as key value pairs.
		 * @method
		 * @public (method)
		 * @param   {string}  [name] The name of the config property to get.
		 * @param   {boolean} [peek] `true` to peek at the raw value without calling the getter.
		 * @returns {object}         The config property value.
		 */
		getConfig? (name?: string, peek?: boolean): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example Ext.button.Button definition and instance:
		 * 
		 *    Ext.define('MyApp.view.Button', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'mybutton',
		 *    
		 *        scale: 'large',
		 *        enableToggle: true
		 *    });
		 *    
		 *    var btn = Ext.create({
		 *        xtype: 'mybutton',
		 *        renderTo: Ext.getBody(),
		 *        text: 'Test Button'
		 *    });
		 * 
		 * Calling `btn.getInitialConfig()` would return an object including the config
		 * options passed to the `create` method:
		 * 
		 *    xtype: 'mybutton',
		 *    renderTo: // The document body itself
		 *    text: 'Test Button'
		 * 
		 * Calling `btn.getInitialConfig('text')`returns **'Test Button'**.
		 * @method
		 * @public (method)
		 * @param   {string}     [name] Name of the config option to return.
		 * @returns {object|any} 
		 * The full config object or a single config value
		 * when `name` parameter specified.
		 */
		getInitialConfig? (name?: string): object | any;
		/** 
		 * Initialize configuration for this class. a typical example:
		 * 
		 *    Ext.define('My.awesome.Class', {
		 *        // The default config
		 *        config: {
		 *            name: 'Awesome',
		 *            isAwesome: true
		 *        },
		 *    
		 *        constructor: function(config) {
		 *            this.initConfig(config);
		 *        }
		 *    });
		 *    
		 *    var awesome = new My.awesome.Class({
		 *        name: 'Super Awesome'
		 *    });
		 *    
		 *    alert(awesome.getName()); // 'Super Awesome'
		 * 
		 * @method
		 * @protected (method)
		 * @chainable
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
		 * `this.statics()` is scope-independent and it always returns the class from which it was called, regardless of what
		 * `this` points to during run-time
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            totalCreated: 0,
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            var statics = this.statics();
		 *    
		 *            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
		 *                                            // equivalent to: My.Cat.speciesName
		 *    
		 *            alert(this.self.speciesName);   // dependent on 'this'
		 *    
		 *            statics.totalCreated++;
		 *        },
		 *    
		 *        clone: function() {
		 *            var cloned = new this.self();   // dependent on 'this'
		 *    
		 *            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
		 *    
		 *            return cloned;
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *    
		 *        statics: {
		 *            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        },
		 *    
		 *        constructor: function() {
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'
		 *    
		 *    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
		 *    alert(clone.groupName);                 // alerts 'Cat'
		 *    
		 *    alert(My.Cat.totalCreated);             // alerts 3
		 * 
		 * @method
		 * @protected (method)
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
