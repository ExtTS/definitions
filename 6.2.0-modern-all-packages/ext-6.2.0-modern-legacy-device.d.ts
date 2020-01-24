declare namespace Ext.device {
	/** 
	 * [Ext.device.Accelerometer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Accelerometer.html)
	 * Provides access to the native Accelerometer API when running on a device. There are three implementations of this API:
	 * 
	 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_accelerometer_accelerometer.md.html#Accelerometer)
	 * 
	 * This class will automatically select the correct implementation depending on the device your application is running on.
	 * 
	 * ## Examples
	 * 
	 * Getting the current location:
	 * 
	 *    Ext.device.Accelerometer.getCurrentAcceleration({
	 *        success: function(acceleration) {
	 *                     alert('Acceleration X: ' + acceleration.x + '\n' +
	 *                     'Acceleration Y: ' + acceleration.y + '\n' +
	 *                     'Acceleration Z: ' + acceleration.z + '\n' +
	 *                     'Timestamp: '      + acceleration.timestamp + '\n');
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * Watching the current acceleration:
	 * 
	 *    Ext.device.Accelerometer.watchAcceleration({
	 *        frequency: 500, // Update every 1/2 second
	 *        callback: function(acceleration) {
	 *                     console.log('Acceleration X: ' + acceleration.x + '\n' +
	 *                     'Acceleration Y: ' + acceleration.y + '\n' +
	 *                     'Acceleration Z: ' + acceleration.z + '\n' +
	 *                     'Timestamp: '      + acceleration.timestamp + '\n');
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * @singleton (definition)
	 */
	interface Accelerometer extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Returns the value of [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.accelerometer.Abstract.html#cfg-frequency).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getFrequency? (): number;
		/** 
		 * Sets the value of [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.accelerometer.Abstract.html#cfg-frequency).
		 * @method
		 * @public (method)
		 * @param   {number} frequency The new value.
		 * @returns {void}             
		 */
		setFrequency? (frequency: number): void;
	}
	/** 
	 * [Ext.device.Analytics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Analytics.html)
	 * Allows you to use Google Analytics within your Cordova application.
	 * 
	 * For setup information, please read the [plugin documentation](https://github.com/phonegap/phonegap-facebook-plugin).
	 * @singleton (definition)
	 */
	interface Analytics extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Returns the value of [accountID](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.analytics.Abstract.html#cfg-accountID).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAccountID? (): object;
		/** 
		 * Registers yur Google Analytics account.
		 * @method
		 * @public (method)
		 * @param   {string} accountID Your Google Analytics account ID
		 * @returns {void}             
		 */
		registerAccount? (accountID: string): void;
		/** 
		 * Sets the value of [accountID](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.analytics.Abstract.html#cfg-accountID).
		 * @method
		 * @public (method)
		 * @param   {object} accountID The new value.
		 * @returns {void}             
		 */
		setAccountID? (accountID: object): void;
		/** 
		 * Track an event in your application.
		 * 
		 * More information here: http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Analytics.methodParams.trackEvent.Config} config
		 * @returns {void}                                                              
		 */
		trackEvent? (config: object | Ext.device.Analytics.methodParams.trackEvent.Config): void;
		/** 
		 * Track an pageview in your application.
		 * @method
		 * @public (method)
		 * @param   {string} config The page you want to track (must start with a slash).
		 * @returns {void}          
		 */
		trackPageview? (config: string): void;
	}
	/** 
	 * [Ext.device.Browser](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Browser.html)
	 * @singleton (definition)
	 */
	interface Browser extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Used to close the browser, if one is opened.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		close? (): void;
		/** 
		 * Used to open a new browser window.
		 * 
		 * When used with Cordova, a new InAppBrowser window opens. With Cordova, you also have the ability
		 * to listen when the window starts loading, is finished loading, fails to load, and when it is closed.
		 * You can also use the [close](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.browser.Abstract.html#method-close) method to close the window, if opened.
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Browser.methodParams.open.Options} options The options to use when opening a new browser window.
		 * @returns {void}                                                        
		 */
		open? (options: object | Ext.device.Browser.methodParams.open.Options): void;
	}
	/** 
	 * [Ext.device.Camera](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html)
	 * This class allows you to use native APIs to take photos using the device camera.
	 * 
	 * When this singleton is instantiated, it will automatically select the correct implementation depending on the
	 * current device:
	 * 
	 * - Sencha Packager
	 * - Cordova
	 * - Simulator
	 * 
	 * Both the Sencha Packager and Cordova implementations will use the native camera functionality to take or select
	 * a photo. The Simulator implementation will simply return fake images.
	 * 
	 * ## Example
	 * 
	 * You can use the [capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html#method-capture) function to take a photo:
	 * 
	 *    Ext.device.Camera.capture({
	 *        success: function(image) {
	 *            imageView.setSrc(image);
	 *        },
	 *        quality: 75,
	 *        width: 200,
	 *        height: 200,
	 *        destination: 'data'
	 *    });
	 * 
	 * See the documentation for [capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html#method-capture) all available configurations.
	 * @singleton (definition)
	 */
	interface Camera extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Allows you to capture a photo.
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Camera.methodParams.capture.Options} options     The options to use when taking a photo.
		 * @param   {object}                                                scope       The scope in which to call the `success` and `failure` functions, if specified.
		 * @param   {string}                                                destination
		 * The destination of the image which is returned. Available options are:
		 * 
		 * - **data** - returns a base64 encoded string
		 * - **file** - returns the file's URI
		 * @param   {string}                                                encoding
		 * The encoding of the returned image. Available options are:
		 * 
		 * - **jpg**
		 * - **png**
		 * @param   {number}                                                width       The width of the image to return
		 * @param   {number}                                                height      The height of the image to return
		 * @returns {void}                                                              
		 */
		capture? (options: object | Ext.device.Camera.methodParams.capture.Options, scope: object, destination: string, encoding: string, width: number, height: number): void;
	}
	/** 
	 * [Ext.device.Capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Capture.html)
	 * Provides access to the audio and video capture capabilities of the device.
	 * @singleton (definition)
	 */
	interface Capture extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Start the audio recorder application and return information about captured audio clip file(s).
		 * 
		 *    Ext.device.Capture.captureAudio({
		 *        limit: 2, // limit to 2 recordings
		 *        maximumDuration: 10, // limit to 10 seconds per recording
		 *        success: function(files) {
		 *            for (var i = 0; i &lt; files.length; i++) {
		 *                console.log('Captured audio path: ', files[i].fullPath);
		 *            };
		 *        },
		 *        failure: function() {
		 *            console.log('Something went wrong!');
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Capture.methodParams.captureAudio.Config} config The configuration object to be passed:
		 * @returns {void}                                                              
		 */
		captureAudio? (config: object | Ext.device.Capture.methodParams.captureAudio.Config): void;
		/** 
		 * Start the video recorder application and return information about captured video clip file(s).
		 * 
		 *    Ext.device.Capture.captureVideo({
		 *        limit: 2, // limit to 2 recordings
		 *        maximumDuration: 10, // limit to 10 seconds per recording
		 *        success: function(files) {
		 *            for (var i = 0; i &lt; files.length; i++) {
		 *                console.log('Captured video path: ', files[i].fullPath);
		 *            };
		 *        },
		 *        failure: function() {
		 *            console.log('Something went wrong!');
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Capture.methodParams.captureVideo.Config} config The configuration object to be passed:
		 * @returns {void}                                                              
		 */
		captureVideo? (config: object | Ext.device.Capture.methodParams.captureVideo.Config): void;
	}
	/** 
	 * @private (class)
	 * @singleton (definition)
	 */
	interface Communicator extends Ext.Base {}
	/** 
	 * [Ext.device.Compass](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Compass.html)
	 * Provides access to the native Compass API when running on a device. There are three implementations of this API:
	 * 
	 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_compass_compass.md.html#Compass)
	 * 
	 * This class will automatically select the correct implementation depending on the device your application is running on.
	 * 
	 * ## Examples
	 * 
	 * Getting the current location:
	 * 
	 *    Ext.device.Compass.getCurrentHeading({
	 *        success: function(heading) {
	 *                     alert('Heading: ' + heading.magneticHeading);
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * Watching the current compass:
	 * 
	 *    Ext.device.Compass.watchHeading({
	 *        frequency: 500, // Update every 1/2 second
	 *        callback: function(heading) {
	 *                     console.log('Heading: ' + heading.magneticHeading);
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * @singleton (definition)
	 */
	interface Compass extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Returns the value of [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.compass.Abstract.html#cfg-frequency).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getFrequency? (): number;
		/** 
		 * Sets the value of [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.compass.Abstract.html#cfg-frequency).
		 * @method
		 * @public (method)
		 * @param   {number} frequency The new value.
		 * @returns {void}             
		 */
		setFrequency? (frequency: number): void;
	}
	/** 
	 * [Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)
	 * This class is used to check if the current device is currently online or not. It has three different implementations:
	 * 
	 * - Sencha Packager
	 * - Cordova
	 * - Simulator
	 * 
	 * Both the Sencha Packager and Cordova implementations will use the native functionality to determine if the current
	 * device is online. The Simulator version will simply use `navigator.onLine`.
	 * 
	 * When this singleton ([Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)) is instantiated, it will automatically decide which version to
	 * use based on the current platform.
	 * 
	 * ## Examples
	 * 
	 * Determining if the current device is online:
	 * 
	 *    alert(Ext.device.Connection.isOnline());
	 * 
	 * Checking the type of connection the device has:
	 * 
	 *    alert('Your connection type is: ' + Ext.device.Connection.getType());
	 * 
	 * The available connection types are:
	 * 
	 * - [UNKNOWN](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-UNKNOWN) - Unknown connection
	 * - [ETHERNET](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-ETHERNET) - Ethernet connection
	 * - [WIFI](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-WIFI) - WiFi connection
	 * - [CELL_2G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_2G) - Cell 2G connection
	 * - [CELL_3G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_3G) - Cell 3G connection
	 * - [CELL_4G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_4G) - Cell 4G connection
	 * - [NONE](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-NONE) - No network connection
	 * @singleton (definition)
	 */
	interface Connection extends Ext.Base {
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'Cell 2G connection'
		 * @type {string}
		 */
		CELL_2G?: string;
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'Cell 3G connection'
		 * @type {string}
		 */
		CELL_3G?: string;
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'Cell 4G connection'
		 * @type {string}
		 */
		CELL_4G?: string;
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'Ethernet connection'
		 * @type {string}
		 */
		ETHERNET?: string;
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'No network connection'
		 * @type {string}
		 */
		NONE?: string;
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'Unknown connection'
		 * @type {string}
		 */
		UNKNOWN?: string;
		/** 
		 * Text label for a connection type.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'WiFi connection'
		 * @type {string}
		 */
		WIFI?: string;
		/** 
		 * Returns the value of [online](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.connection.Abstract.html#cfg-online).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getOnline? (): boolean;
		/** 
		 * Returns the current connection type.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * True if the device is currently online
		 * @method
		 * @public (method)
		 * @returns {boolean}  online
		 */
		isOnline? (): boolean;
		/** 
		 * Sets the value of [online](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.connection.Abstract.html#cfg-online).
		 * @method
		 * @public (method)
		 * @param   {boolean} online The new value.
		 * @returns {void}           
		 */
		setOnline? (online: boolean): void;
		/** 
		 * Sets the value of [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.connection.Abstract.html#cfg-type).
		 * @method
		 * @public (method)
		 * @param   {object} type The new value.
		 * @returns {void}        
		 */
		setType? (type: object): void;
	}
	/** 
	 * [Ext.device.Contacts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html)
	 * This device API allows you to access a users contacts using a Ext.data.Store. This allows you to search, filter
	 * and sort through all the contacts using its methods.
	 * 
	 * To use this API, all you need to do is require this class ([`Ext.device.Contacts`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html)) and then use [`Ext.device.Contacts.getContacts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html#method-getContacts)()`
	 * to retrieve an array of contacts.
	 * 
	 * **Please note that getThumbnail and getLocalizedLabel are _only_ for the Sencha Native Packager.**
	 * **Both Cordova/PhoneGap and Sencha Native Packager can access the find method though properties of returned contacts will differ.**
	 * 
	 * # Example
	 * 
	 *    Ext.application({
	 *        name: 'Sencha',
	 *        requires: 'Ext.device.Contacts',
	 *    
	 *        launch: function() {
	 *            Ext.Viewport.add({
	 *                xtype: 'list',
	 *                itemTpl: '{First} {Last}',
	 *                store: {
	 *                    fields: ['First', 'Last'],
	 *                    data: Ext.device.Contacts.getContacts()
	 *                }
	 *            });
	 *        }
	 *    });
	 * 
	 * @singleton (definition)
	 */
	interface Contacts extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Returns an Array of contact objects.
		 * @method
		 * @public (method)
		 * @param   {object}   config
		 * @returns {object[]}        An array of contact objects.
		 */
		getContacts? (config: object): object[];
		/** 
		 * Returns the value of [includeImages](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.contacts.Abstract.html#cfg-includeImages).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getIncludeImages? (): boolean;
		/** 
		 * Returns localized, user readable label for a contact field (i.e. "Mobile", "Home")
		 * **This method is for Sencha Native Packager only**
		 * @method
		 * @public (method)
		 * @param   {object} config
		 * @returns {string}        user readable string
		 */
		getLocalizedLabel? (config: object): string;
		/** 
		 * Returns base64 encoded image thumbnail for a contact specified in config.id
		 * **This method is for Sencha Native Packager only**
		 * @method
		 * @public (method)
		 * @param   {object} config
		 * @returns {string}        base64 string
		 */
		getThumbnail? (config: object): string;
		/** 
		 * Sets the value of [includeImages](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.contacts.Abstract.html#cfg-includeImages).
		 * @method
		 * @public (method)
		 * @param   {boolean} includeImages The new value.
		 * @returns {void}                  
		 */
		setIncludeImages? (includeImages: boolean): void;
	}
	/** 
	 * [Ext.device.Device](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Device.html)
	 * Provides a cross device way to get information about the device your application is running on. There are 3 different implementations:
	 * 
	 * - Sencha Packager
	 * - [Cordova](http://cordova.apache.org/docs/en/2.5.0/cordova_device_device.md.html#Device)
	 * - Simulator
	 * 
	 * ## Examples
	 * 
	 * #### Device Information
	 * 
	 * Getting the device information:
	 * 
	 *    Ext.application({
	 *        name: 'Sencha',
	 *    
	 *        // Remember that the Ext.device.Device class *must* be required
	 *        requires: ['Ext.device.Device'],
	 *    
	 *        launch: function() {
	 *            alert([
	 *                'Device name: ' + Ext.device.Device.name,
	 *                'Device platform: ' + Ext.device.Device.platform,
	 *                'Device UUID: ' + Ext.device.Device.uuid
	 *            ].join('\n'));
	 *        }
	 *    });
	 * 
	 * ### Custom Scheme URL
	 * 
	 * Using custom scheme URL to application your application from other applications:
	 * 
	 *    Ext.application({
	 *        name: 'Sencha',
	 *        requires: ['Ext.device.Device'],
	 *        launch: function() {
	 *            if (Ext.device.Device.scheme) {
	 *                // the application was opened via another application. Do something:
	 *                alert('Applicaton pened via another application: ' + Ext.device.Device.scheme.url);
	 *            }
	 *    
	 *            // Listen for future changes
	 *            Ext.device.Device.on('schemeupdate', function(device, scheme) {
	 *                // the application was launched, closed, and then launched another from another application
	 *                // this means onReady wont be called again ('cause the application is already running in the 
	 *                // background) - but this event will be fired
	 *                alert('Applicated reopened via another application: ' + scheme.url);
	 *            }, this);
	 *        }
	 *    });
	 * 
	 * Of course, you must add the custom scheme URL you would like to use when packaging your application.
	 * You can do this by setting the `URLScheme` property inside your `package.json` file (Sencha Native Packager configuration file):
	 * 
	 *    {
	 *        ...
	 *        "URLScheme": "sencha",
	 *        ...
	 *    }
	 * 
	 * You can change the available URL scheme.
	 * 
	 * You can then test it by packaging and installing the application onto a device/iOS Simulator, opening Safari and typing: `sencha:testing`.
	 * The application will launch and it will `alert` the URL you specified.
	 * 
	 * **PLEASE NOTE: This currently only works with the Sencha Native Packager. If you attempt to listen to this event when packaged with
	 * PhoneGap or simply in the browser, it will not function.**
	 * @singleton (definition)
	 */
	interface Device extends Ext.Base {
		/** 
		 * Returns the name of the current device. If the current device does not have a name (for example, in a browser), it will
		 * default to `not available`.
		 * 
		 *    alert('Device name: ' + Ext.device.Device.name);
		 * 
		 * @property
		 * @public (property)
		 * @default 'not available'
		 * @type {string}
		 */
		name?: string;
		/** 
		 * The current platform the device is running on.
		 * 
		 *    alert('Device platform: ' + Ext.device.Device.platform);
		 * 
		 * @property
		 * @public (property)
		 * @type {string}
		 */
		platform?: string;
		/** 
		 * @property
		 * @public (property)
		 * @default false
		 * @type {object|boolean}
		 */
		scheme?: object | boolean;
		/** 
		 * Returns a unique identifier for the current device. If the current device does not have a unique identifier (for example,
		 * in a browser), it will default to `anonymous`.
		 * 
		 *    alert('Device UUID: ' + Ext.device.Device.uuid);
		 * 
		 * @property
		 * @public (property)
		 * @default 'anonymous'
		 * @type {string}
		 */
		uuid?: string;
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Opens a specified URL. The URL can contain a custom URL Scheme for another app or service:
		 * 
		 *    // Safari
		 *    Ext.device.Device.openURL('http://sencha.com');
		 *    
		 *    // Telephone
		 *    Ext.device.Device.openURL('tel:6501231234');
		 *    
		 *    // SMS with a default number
		 *    Ext.device.Device.openURL('sms:+12345678901');
		 *    
		 *    // Email client
		 *    Ext.device.Device.openURL('mailto:rob@sencha.com');
		 * 
		 * You can find a full list of available URL schemes here: [http://wiki.akosma.com/IPhone_URL_Schemes](http://wiki.akosma.com/IPhone_URL_Schemes).
		 * 
		 * **Note:** This currently only works with the Sencha Native Packager. Attempting to use this on PhoneGap, iOS Simulator
		 * or the browser will simply result in the current window location changing.**
		 * 
		 * If successful, this will close the application (as another one opens).
		 * @method
		 * @public (method)
		 * @param   {string} url The URL to open
		 * @returns {void}       
		 */
		openURL? (url: string): void;
	}
	/** 
	 * [Ext.device.FileSystem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.FileSystem.html)
	 * Provides an API to navigate file system hierarchies.
	 * @singleton (definition)
	 */
	interface FileSystem extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
	}
	/** 
	 * [Ext.device.Geolocation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html)
	 * Provides access to the native Geolocation API when running on a device. There are three implementations of this API:
	 * 
	 * - Sencha Packager
	 * - [PhoneGap](http://docs.phonegap.com/en/1.4.1/phonegap_device_device.md.html)
	 * - Browser
	 * 
	 * This class will automatically select the correct implementation depending on the device your application is running on.
	 * 
	 * ## Examples
	 * 
	 * Getting the current location:
	 * 
	 *    Ext.device.Geolocation.getCurrentPosition({
	 *        success: function(position) {
	 *            console.log(position.coords);
	 *        },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * Watching the current location:
	 * 
	 *    Ext.device.Geolocation.watchPosition({
	 *        frequency: 3000, // Update every 3 seconds
	 *        callback: function(position) {
	 *            console.log('Position updated!', position.coords);
	 *        },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * @singleton (definition)
	 */
	interface Geolocation extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * If you are currently watching for the current position, this will stop that task.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearWatch? (): void;
		/** 
		 * Returns the value of [allowHighAccuracy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-allowHighAccuracy).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAllowHighAccuracy? (): boolean;
		/** 
		 * Attempts to get the current position of this device.
		 * 
		 *    Ext.device.Geolocation.getCurrentPosition({
		 *        success: function(position) {
		 *            console.log(position);
		 *        },
		 *        failure: function() {
		 *            Ext.Msg.alert('Geolocation', 'Something went wrong!');
		 *        }
		 *    });
		 * 
		 * _Note:_ If you want to watch the current position, you could use [Ext.device.Geolocation.watchPosition](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html#method-watchPosition) instead.
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Geolocation.methodParams.getCurrentPosition.Config} config An object which contains the following config options:
		 * @returns {void}                                                                        
		 */
		getCurrentPosition? (config: object | Ext.device.Geolocation.methodParams.getCurrentPosition.Config): void;
		/** 
		 * Returns the value of [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-frequency).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getFrequency? (): number;
		/** 
		 * Returns the value of [maximumAge](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-maximumAge).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximumAge? (): number;
		/** 
		 * Returns the value of [timeout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-timeout).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTimeout? (): number;
		/** 
		 * Sets the value of [allowHighAccuracy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-allowHighAccuracy).
		 * @method
		 * @public (method)
		 * @param   {boolean} allowHighAccuracy The new value.
		 * @returns {void}                      
		 */
		setAllowHighAccuracy? (allowHighAccuracy: boolean): void;
		/** 
		 * Sets the value of [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-frequency).
		 * @method
		 * @public (method)
		 * @param   {number} frequency The new value.
		 * @returns {void}             
		 */
		setFrequency? (frequency: number): void;
		/** 
		 * Sets the value of [maximumAge](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-maximumAge).
		 * @method
		 * @public (method)
		 * @param   {number} maximumAge The new value.
		 * @returns {void}              
		 */
		setMaximumAge? (maximumAge: number): void;
		/** 
		 * Sets the value of [timeout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-timeout).
		 * @method
		 * @public (method)
		 * @param   {number} timeout The new value.
		 * @returns {void}           
		 */
		setTimeout? (timeout: number): void;
		/** 
		 * Watches for the current position and calls the callback when successful depending on the specified [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-frequency).
		 * 
		 *    Ext.device.Geolocation.watchPosition({
		 *        callback: function(position) {
		 *            console.log(position);
		 *        },
		 *        failure: function() {
		 *            Ext.Msg.alert('Geolocation', 'Something went wrong!');
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Geolocation.methodParams.watchPosition.Config} config An object which contains the following config options:
		 * @returns {void}                                                                   
		 */
		watchPosition? (config: object | Ext.device.Geolocation.methodParams.watchPosition.Config): void;
	}
	/** 
	 * [Ext.device.Globalization](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Globalization.html)
	 * Provides access to the native Globalization API
	 * 
	 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_globalization_globalization.md.html)
	 * 
	 * Class currently only works with Cordova and does not have a simulated HTML counter part.
	 * Please see notes on Cordova Docs for more information.
	 * 
	 * http://docs.phonegap.com/en/2.6.0/cordova_globalization_globalization.md.html
	 * @singleton (definition)
	 */
	interface Globalization extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
	}
	/** 
	 * [Ext.device.Media](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Media.html)
	 * @singleton (definition)
	 */
	interface Media extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Returns the value of [src](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.media.Abstract.html#cfg-src).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getSrc? (): object;
		/** 
		 * Sets the value of [src](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.media.Abstract.html#cfg-src).
		 * @method
		 * @public (method)
		 * @param   {object} src The new value.
		 * @returns {void}       
		 */
		setSrc? (src: object): void;
	}
	/** 
	 * [Ext.device.Notification](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html)
	 * Provides a cross device way to show notifications. There are three different implementations:
	 * 
	 * - Sencha Packager
	 * - Cordova
	 * - Simulator
	 * 
	 * When this singleton is instantiated, it will automatically use the correct implementation depending on the current device.
	 * 
	 * Both the Sencha Packager and Cordova versions will use the native implementations to display the notification. The
	 * Simulator implementation will use Ext.MessageBox for [show](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html#method-show) and a simply animation when you call [vibrate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html#method-vibrate).
	 * 
	 * ## Examples
	 * 
	 * To show a simple notification:
	 * 
	 *    Ext.device.Notification.show({
	 *        title: 'Verification',
	 *        message: 'Is your email address: test@sencha.com',
	 *        buttons: Ext.MessageBox.OKCANCEL,
	 *        callback: function(button) {
	 *            if (button === "ok") {
	 *                console.log('Verified');
	 *            } else {
	 *                console.log('Nope');
	 *            }
	 *        }
	 *    });
	 * 
	 * To make the device vibrate:
	 * 
	 *    Ext.device.Notification.vibrate();
	 * 
	 * @singleton (definition)
	 */
	interface Notification extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * A simple way to show a notification.
		 * 
		 *    Ext.device.Notification.show({
		 *       title: 'Verification',
		 *       message: 'Is your email address is: test@sencha.com',
		 *       buttons: Ext.MessageBox.OKCANCEL,
		 *       callback: function(button) {
		 *           if (button == "ok") {
		 *               console.log('Verified');
		 *           } else {
		 *               console.log('Nope.');
		 *           }
		 *       }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Notification.methodParams.show.Config} config An object which contains the following config options:
		 * @returns {void}                                                           
		 */
		show? (config: object | Ext.device.Notification.methodParams.show.Config): void;
		/** 
		 * Vibrates the device.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		vibrate? (): void;
	}
	/** 
	 * [Ext.device.Orientation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html)
	 * This class provides you with a cross platform way of listening to when the the orientation changes on the
	 * device your application is running on.
	 * 
	 * The [orientationchange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html#event-orientationchange) event gets passes the `alpha`, `beta` and
	 * `gamma` values. ** These properties only exist when packaging with the Sencha Native Packager. **
	 * 
	 * You can find more information about these values and how to use them on the [W3C device orientation specification](http://dev.w3.org/geo/api/spec-source-orientation.html#deviceorientation).
	 * 
	 * ## Example
	 * 
	 * To listen to the device orientation, you can do the following:
	 * 
	 *    Ext.device.Orientation.on({
	 *        scope: this,
	 *        orientationchange: function(e) {
	 *            console.log('Alpha: ', e.alpha);
	 *            console.log('Beta: ', e.beta);
	 *            console.log('Gamma: ', e.gamma);
	 *        }
	 *    });
	 * 
	 * @singleton (definition)
	 */
	interface Orientation extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
	}
	/** 
	 * [Ext.device.Push](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html)
	 * Provides a way to send push notifications to a device.
	 * 
	 * # Example
	 * 
	 *    Ext.device.Push.register({
	 *        type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,
	 *        success: function(token) {
	 *            console.log('# Push notification registration successful:');
	 *            console.log('    token: ' + token);
	 *        },
	 *        failure: function(error) {
	 *            console.log('# Push notification registration unsuccessful:');
	 *            console.log('     error: ' + error);
	 *        },
	 *        received: function(notifications) {
	 *            console.log('# Push notification received:');
	 *            console.log('    ' + JSON.stringify(notifications));
	 *        }
	 *    });
	 * 
	 * ## Sencha Cmd
	 * 
	 * Currently only available on iOS for apps packaged with Sencha Cmd.
	 * 
	 * ## Cordova / PhoneGap
	 * 
	 * For apps packaged with Cordova or PhoneGap, [Ext.device.Push](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html) currently supports iOS and
	 * Android via the [PushPlugin](https://github.com/phonegap-build/PushPlugin).
	 * 
	 * Be sure to include that plugin in your project; [Ext.device.Push](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html) simply normalizes the
	 * interface for using notifications in your application.
	 * @singleton (definition)
	 */
	interface Push extends Ext.Base {
		/** 
		 * Notification type: alert.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 1
		 * @type {number}
		 */
		ALERT?: number;
		/** 
		 * Notification type: badge.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 2
		 * @type {number}
		 */
		BADGE?: number;
		/** 
		 * Notification type: sound.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 4
		 * @type {number}
		 */
		SOUND?: number;
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Registers a push notification.
		 * 
		 *    Ext.device.Push.register({
		 *        type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,
		 *        success: function(token) {
		 *            console.log('# Push notification registration successful:');
		 *            console.log('    token: ' + token);
		 *        },
		 *        failure: function(error) {
		 *            console.log('# Push notification registration unsuccessful:');
		 *            console.log('     error: ' + error);
		 *        },
		 *        received: function(notifications) {
		 *            console.log('# Push notification received:');
		 *            console.log('    ' + JSON.stringify(notifications));
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Push.methodParams.register.Config} config The configuration for to pass when registering this push notification service.
		 * @returns {void}                                                       
		 */
		register? (config: object | Ext.device.Push.methodParams.register.Config): void;
	}
	/** 
	 * [Ext.device.Splashscreen](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Splashscreen.html)
	 * Provides access to the native Splashscreen API
	 * 
	 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_splashscreen_splashscreen.md.html#Splashscreen)
	 * 
	 * Class currently only works with Cordova and does not have a simulated HTML counter part.
	 * Please see notes on Cordova Docs for proper Native project code changes that
	 * will need to be made to use this plugin.
	 * 
	 * http://docs.phonegap.com/en/2.6.0/cordova_splashscreen_splashscreen.md.html#Splashscreen
	 * @singleton (definition)
	 */
	interface Splashscreen extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
	}
	/** 
	 * [Ext.device.Storage](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Storage.html)
	 * @singleton (definition)
	 */
	interface Storage extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
	}
	/** 
	 * [Ext.device.Twitter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html)
	 * Allows you to interact with the Twitter API on iOS devices from within your Cordova application.
	 * 
	 * For setup information, please read the [plugin guide](https://github.com/phonegap/phonegap-plugins/tree/master/iOS/Twitter).
	 * @singleton (definition)
	 */
	interface Twitter extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Pops up a Twitter compose sheet view with your specified tweet.
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Twitter.methodParams.compose.Config} config An object which contains the following config options:
		 * @returns {void}                                                         
		 */
		compose? (config: object | Ext.device.Twitter.methodParams.compose.Config): void;
		/** 
		 * Gets Tweets from Twitter Mentions
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Twitter.methodParams.getMentions.Config} config An object which contains the following config options:
		 * @returns {void}                                                             
		 */
		getMentions? (config: object | Ext.device.Twitter.methodParams.getMentions.Config): void;
		/** 
		 * Gets Tweets from Twitter Timeline
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Twitter.methodParams.getPublicTimeline.Config} config An object which contains the following config options:
		 * @returns {void}                                                                   
		 */
		getPublicTimeline? (config: object | Ext.device.Twitter.methodParams.getPublicTimeline.Config): void;
		/** 
		 * Gets a specific Twitter user info
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Twitter.methodParams.getTwitterRequest.Config} config An object which contains the following config options:
		 * @returns {void}                                                                   
		 */
		getTwitterRequest? (config: object | Ext.device.Twitter.methodParams.getTwitterRequest.Config): void;
		/** 
		 * Gets a specific Twitter user info
		 * @method
		 * @public (method)
		 * @param   {object|Ext.device.Twitter.methodParams.getTwitterUsername.Config} config An object which contains the following config options:
		 * @returns {void}                                                                    
		 */
		getTwitterUsername? (config: object | Ext.device.Twitter.methodParams.getTwitterUsername.Config): void;
	}
}
declare namespace Ext {
	class device {
		/** 
		 * [Ext.device.Accelerometer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Accelerometer.html)
		 * Provides access to the native Accelerometer API when running on a device. There are three implementations of this API:
		 * 
		 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_accelerometer_accelerometer.md.html#Accelerometer)
		 * 
		 * This class will automatically select the correct implementation depending on the device your application is running on.
		 * 
		 * ## Examples
		 * 
		 * Getting the current location:
		 * 
		 *    Ext.device.Accelerometer.getCurrentAcceleration({
		 *        success: function(acceleration) {
		 *                     alert('Acceleration X: ' + acceleration.x + '\n' +
		 *                     'Acceleration Y: ' + acceleration.y + '\n' +
		 *                     'Acceleration Z: ' + acceleration.z + '\n' +
		 *                     'Timestamp: '      + acceleration.timestamp + '\n');
		 *         },
		 *        failure: function() {
		 *            console.log('something went wrong!');
		 *        }
		 *    });
		 * 
		 * Watching the current acceleration:
		 * 
		 *    Ext.device.Accelerometer.watchAcceleration({
		 *        frequency: 500, // Update every 1/2 second
		 *        callback: function(acceleration) {
		 *                     console.log('Acceleration X: ' + acceleration.x + '\n' +
		 *                     'Acceleration Y: ' + acceleration.y + '\n' +
		 *                     'Acceleration Z: ' + acceleration.z + '\n' +
		 *                     'Timestamp: '      + acceleration.timestamp + '\n');
		 *         },
		 *        failure: function() {
		 *            console.log('something went wrong!');
		 *        }
		 *    });
		 * 
		 * @singleton (instance)
		 */
		static readonly Accelerometer?: Ext.device.Accelerometer;
		/** 
		 * [Ext.device.Analytics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Analytics.html)
		 * Allows you to use Google Analytics within your Cordova application.
		 * 
		 * For setup information, please read the [plugin documentation](https://github.com/phonegap/phonegap-facebook-plugin).
		 * @singleton (instance)
		 */
		static readonly Analytics?: Ext.device.Analytics;
		/** 
		 * [Ext.device.Browser](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Browser.html)
		 * @singleton (instance)
		 */
		static readonly Browser?: Ext.device.Browser;
		/** 
		 * [Ext.device.Camera](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html)
		 * This class allows you to use native APIs to take photos using the device camera.
		 * 
		 * When this singleton is instantiated, it will automatically select the correct implementation depending on the
		 * current device:
		 * 
		 * - Sencha Packager
		 * - Cordova
		 * - Simulator
		 * 
		 * Both the Sencha Packager and Cordova implementations will use the native camera functionality to take or select
		 * a photo. The Simulator implementation will simply return fake images.
		 * 
		 * ## Example
		 * 
		 * You can use the [capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html#method-capture) function to take a photo:
		 * 
		 *    Ext.device.Camera.capture({
		 *        success: function(image) {
		 *            imageView.setSrc(image);
		 *        },
		 *        quality: 75,
		 *        width: 200,
		 *        height: 200,
		 *        destination: 'data'
		 *    });
		 * 
		 * See the documentation for [capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html#method-capture) all available configurations.
		 * @singleton (instance)
		 */
		static readonly Camera?: Ext.device.Camera;
		/** 
		 * [Ext.device.Capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Capture.html)
		 * Provides access to the audio and video capture capabilities of the device.
		 * @singleton (instance)
		 */
		static readonly Capture?: Ext.device.Capture;
		/** 
		 * @private (class)
		 * @singleton (instance)
		 */
		static readonly Communicator?: Ext.device.Communicator;
		/** 
		 * [Ext.device.Compass](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Compass.html)
		 * Provides access to the native Compass API when running on a device. There are three implementations of this API:
		 * 
		 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_compass_compass.md.html#Compass)
		 * 
		 * This class will automatically select the correct implementation depending on the device your application is running on.
		 * 
		 * ## Examples
		 * 
		 * Getting the current location:
		 * 
		 *    Ext.device.Compass.getCurrentHeading({
		 *        success: function(heading) {
		 *                     alert('Heading: ' + heading.magneticHeading);
		 *         },
		 *        failure: function() {
		 *            console.log('something went wrong!');
		 *        }
		 *    });
		 * 
		 * Watching the current compass:
		 * 
		 *    Ext.device.Compass.watchHeading({
		 *        frequency: 500, // Update every 1/2 second
		 *        callback: function(heading) {
		 *                     console.log('Heading: ' + heading.magneticHeading);
		 *         },
		 *        failure: function() {
		 *            console.log('something went wrong!');
		 *        }
		 *    });
		 * 
		 * @singleton (instance)
		 */
		static readonly Compass?: Ext.device.Compass;
		/** 
		 * [Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)
		 * This class is used to check if the current device is currently online or not. It has three different implementations:
		 * 
		 * - Sencha Packager
		 * - Cordova
		 * - Simulator
		 * 
		 * Both the Sencha Packager and Cordova implementations will use the native functionality to determine if the current
		 * device is online. The Simulator version will simply use `navigator.onLine`.
		 * 
		 * When this singleton ([Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)) is instantiated, it will automatically decide which version to
		 * use based on the current platform.
		 * 
		 * ## Examples
		 * 
		 * Determining if the current device is online:
		 * 
		 *    alert(Ext.device.Connection.isOnline());
		 * 
		 * Checking the type of connection the device has:
		 * 
		 *    alert('Your connection type is: ' + Ext.device.Connection.getType());
		 * 
		 * The available connection types are:
		 * 
		 * - [UNKNOWN](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-UNKNOWN) - Unknown connection
		 * - [ETHERNET](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-ETHERNET) - Ethernet connection
		 * - [WIFI](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-WIFI) - WiFi connection
		 * - [CELL_2G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_2G) - Cell 2G connection
		 * - [CELL_3G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_3G) - Cell 3G connection
		 * - [CELL_4G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_4G) - Cell 4G connection
		 * - [NONE](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-NONE) - No network connection
		 * @singleton (instance)
		 */
		static readonly Connection?: Ext.device.Connection;
		/** 
		 * [Ext.device.Contacts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html)
		 * This device API allows you to access a users contacts using a Ext.data.Store. This allows you to search, filter
		 * and sort through all the contacts using its methods.
		 * 
		 * To use this API, all you need to do is require this class ([`Ext.device.Contacts`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html)) and then use [`Ext.device.Contacts.getContacts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html#method-getContacts)()`
		 * to retrieve an array of contacts.
		 * 
		 * **Please note that getThumbnail and getLocalizedLabel are _only_ for the Sencha Native Packager.**
		 * **Both Cordova/PhoneGap and Sencha Native Packager can access the find method though properties of returned contacts will differ.**
		 * 
		 * # Example
		 * 
		 *    Ext.application({
		 *        name: 'Sencha',
		 *        requires: 'Ext.device.Contacts',
		 *    
		 *        launch: function() {
		 *            Ext.Viewport.add({
		 *                xtype: 'list',
		 *                itemTpl: '{First} {Last}',
		 *                store: {
		 *                    fields: ['First', 'Last'],
		 *                    data: Ext.device.Contacts.getContacts()
		 *                }
		 *            });
		 *        }
		 *    });
		 * 
		 * @singleton (instance)
		 */
		static readonly Contacts?: Ext.device.Contacts;
		/** 
		 * [Ext.device.Device](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Device.html)
		 * Provides a cross device way to get information about the device your application is running on. There are 3 different implementations:
		 * 
		 * - Sencha Packager
		 * - [Cordova](http://cordova.apache.org/docs/en/2.5.0/cordova_device_device.md.html#Device)
		 * - Simulator
		 * 
		 * ## Examples
		 * 
		 * #### Device Information
		 * 
		 * Getting the device information:
		 * 
		 *    Ext.application({
		 *        name: 'Sencha',
		 *    
		 *        // Remember that the Ext.device.Device class *must* be required
		 *        requires: ['Ext.device.Device'],
		 *    
		 *        launch: function() {
		 *            alert([
		 *                'Device name: ' + Ext.device.Device.name,
		 *                'Device platform: ' + Ext.device.Device.platform,
		 *                'Device UUID: ' + Ext.device.Device.uuid
		 *            ].join('\n'));
		 *        }
		 *    });
		 * 
		 * ### Custom Scheme URL
		 * 
		 * Using custom scheme URL to application your application from other applications:
		 * 
		 *    Ext.application({
		 *        name: 'Sencha',
		 *        requires: ['Ext.device.Device'],
		 *        launch: function() {
		 *            if (Ext.device.Device.scheme) {
		 *                // the application was opened via another application. Do something:
		 *                alert('Applicaton pened via another application: ' + Ext.device.Device.scheme.url);
		 *            }
		 *    
		 *            // Listen for future changes
		 *            Ext.device.Device.on('schemeupdate', function(device, scheme) {
		 *                // the application was launched, closed, and then launched another from another application
		 *                // this means onReady wont be called again ('cause the application is already running in the 
		 *                // background) - but this event will be fired
		 *                alert('Applicated reopened via another application: ' + scheme.url);
		 *            }, this);
		 *        }
		 *    });
		 * 
		 * Of course, you must add the custom scheme URL you would like to use when packaging your application.
		 * You can do this by setting the `URLScheme` property inside your `package.json` file (Sencha Native Packager configuration file):
		 * 
		 *    {
		 *        ...
		 *        "URLScheme": "sencha",
		 *        ...
		 *    }
		 * 
		 * You can change the available URL scheme.
		 * 
		 * You can then test it by packaging and installing the application onto a device/iOS Simulator, opening Safari and typing: `sencha:testing`.
		 * The application will launch and it will `alert` the URL you specified.
		 * 
		 * **PLEASE NOTE: This currently only works with the Sencha Native Packager. If you attempt to listen to this event when packaged with
		 * PhoneGap or simply in the browser, it will not function.**
		 * @singleton (instance)
		 */
		static readonly Device?: Ext.device.Device;
		/** 
		 * [Ext.device.FileSystem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.FileSystem.html)
		 * Provides an API to navigate file system hierarchies.
		 * @singleton (instance)
		 */
		static readonly FileSystem?: Ext.device.FileSystem;
		/** 
		 * [Ext.device.Geolocation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html)
		 * Provides access to the native Geolocation API when running on a device. There are three implementations of this API:
		 * 
		 * - Sencha Packager
		 * - [PhoneGap](http://docs.phonegap.com/en/1.4.1/phonegap_device_device.md.html)
		 * - Browser
		 * 
		 * This class will automatically select the correct implementation depending on the device your application is running on.
		 * 
		 * ## Examples
		 * 
		 * Getting the current location:
		 * 
		 *    Ext.device.Geolocation.getCurrentPosition({
		 *        success: function(position) {
		 *            console.log(position.coords);
		 *        },
		 *        failure: function() {
		 *            console.log('something went wrong!');
		 *        }
		 *    });
		 * 
		 * Watching the current location:
		 * 
		 *    Ext.device.Geolocation.watchPosition({
		 *        frequency: 3000, // Update every 3 seconds
		 *        callback: function(position) {
		 *            console.log('Position updated!', position.coords);
		 *        },
		 *        failure: function() {
		 *            console.log('something went wrong!');
		 *        }
		 *    });
		 * 
		 * @singleton (instance)
		 */
		static readonly Geolocation?: Ext.device.Geolocation;
		/** 
		 * [Ext.device.Globalization](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Globalization.html)
		 * Provides access to the native Globalization API
		 * 
		 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_globalization_globalization.md.html)
		 * 
		 * Class currently only works with Cordova and does not have a simulated HTML counter part.
		 * Please see notes on Cordova Docs for more information.
		 * 
		 * http://docs.phonegap.com/en/2.6.0/cordova_globalization_globalization.md.html
		 * @singleton (instance)
		 */
		static readonly Globalization?: Ext.device.Globalization;
		/** 
		 * [Ext.device.Media](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Media.html)
		 * @singleton (instance)
		 */
		static readonly Media?: Ext.device.Media;
		/** 
		 * [Ext.device.Notification](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html)
		 * Provides a cross device way to show notifications. There are three different implementations:
		 * 
		 * - Sencha Packager
		 * - Cordova
		 * - Simulator
		 * 
		 * When this singleton is instantiated, it will automatically use the correct implementation depending on the current device.
		 * 
		 * Both the Sencha Packager and Cordova versions will use the native implementations to display the notification. The
		 * Simulator implementation will use Ext.MessageBox for [show](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html#method-show) and a simply animation when you call [vibrate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html#method-vibrate).
		 * 
		 * ## Examples
		 * 
		 * To show a simple notification:
		 * 
		 *    Ext.device.Notification.show({
		 *        title: 'Verification',
		 *        message: 'Is your email address: test@sencha.com',
		 *        buttons: Ext.MessageBox.OKCANCEL,
		 *        callback: function(button) {
		 *            if (button === "ok") {
		 *                console.log('Verified');
		 *            } else {
		 *                console.log('Nope');
		 *            }
		 *        }
		 *    });
		 * 
		 * To make the device vibrate:
		 * 
		 *    Ext.device.Notification.vibrate();
		 * 
		 * @singleton (instance)
		 */
		static readonly Notification?: Ext.device.Notification;
		/** 
		 * [Ext.device.Orientation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html)
		 * This class provides you with a cross platform way of listening to when the the orientation changes on the
		 * device your application is running on.
		 * 
		 * The [orientationchange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html#event-orientationchange) event gets passes the `alpha`, `beta` and
		 * `gamma` values. ** These properties only exist when packaging with the Sencha Native Packager. **
		 * 
		 * You can find more information about these values and how to use them on the [W3C device orientation specification](http://dev.w3.org/geo/api/spec-source-orientation.html#deviceorientation).
		 * 
		 * ## Example
		 * 
		 * To listen to the device orientation, you can do the following:
		 * 
		 *    Ext.device.Orientation.on({
		 *        scope: this,
		 *        orientationchange: function(e) {
		 *            console.log('Alpha: ', e.alpha);
		 *            console.log('Beta: ', e.beta);
		 *            console.log('Gamma: ', e.gamma);
		 *        }
		 *    });
		 * 
		 * @singleton (instance)
		 */
		static readonly Orientation?: Ext.device.Orientation;
		/** 
		 * [Ext.device.Push](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html)
		 * Provides a way to send push notifications to a device.
		 * 
		 * # Example
		 * 
		 *    Ext.device.Push.register({
		 *        type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,
		 *        success: function(token) {
		 *            console.log('# Push notification registration successful:');
		 *            console.log('    token: ' + token);
		 *        },
		 *        failure: function(error) {
		 *            console.log('# Push notification registration unsuccessful:');
		 *            console.log('     error: ' + error);
		 *        },
		 *        received: function(notifications) {
		 *            console.log('# Push notification received:');
		 *            console.log('    ' + JSON.stringify(notifications));
		 *        }
		 *    });
		 * 
		 * ## Sencha Cmd
		 * 
		 * Currently only available on iOS for apps packaged with Sencha Cmd.
		 * 
		 * ## Cordova / PhoneGap
		 * 
		 * For apps packaged with Cordova or PhoneGap, [Ext.device.Push](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html) currently supports iOS and
		 * Android via the [PushPlugin](https://github.com/phonegap-build/PushPlugin).
		 * 
		 * Be sure to include that plugin in your project; [Ext.device.Push](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html) simply normalizes the
		 * interface for using notifications in your application.
		 * @singleton (instance)
		 */
		static readonly Push?: Ext.device.Push;
		/** 
		 * [Ext.device.Splashscreen](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Splashscreen.html)
		 * Provides access to the native Splashscreen API
		 * 
		 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_splashscreen_splashscreen.md.html#Splashscreen)
		 * 
		 * Class currently only works with Cordova and does not have a simulated HTML counter part.
		 * Please see notes on Cordova Docs for proper Native project code changes that
		 * will need to be made to use this plugin.
		 * 
		 * http://docs.phonegap.com/en/2.6.0/cordova_splashscreen_splashscreen.md.html#Splashscreen
		 * @singleton (instance)
		 */
		static readonly Splashscreen?: Ext.device.Splashscreen;
		/** 
		 * [Ext.device.Storage](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Storage.html)
		 * @singleton (instance)
		 */
		static readonly Storage?: Ext.device.Storage;
		/** 
		 * [Ext.device.Twitter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html)
		 * Allows you to interact with the Twitter API on iOS devices from within your Cordova application.
		 * 
		 * For setup information, please read the [plugin guide](https://github.com/phonegap/phonegap-plugins/tree/master/iOS/Twitter).
		 * @singleton (instance)
		 */
		static readonly Twitter?: Ext.device.Twitter;
	}
}
declare namespace Ext.ux.device {
	interface Analytics extends Ext.device.Analytics {}
	interface Twitter extends Ext.device.Twitter {}
}
declare namespace Ext.device.Analytics.methodParams.trackEvent {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Analytics.trackEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Analytics.html#method-trackEvent)
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The name you supply for the group of objects you want to track
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		category?: string;
		/** 
		 * A string that is uniquely paired with each category, and commonly
		 * used to define the type of user interaction for the web object.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		action?: string;
		/** 
		 * An optional string to provide additional dimensions to the event data.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		label?: string;
		/** 
		 * An integer that you can use to provide numerical data about the user event
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		value?: string;
		/** 
		 * A boolean that when set to true, indicates that the event hit will
		 * not be used in bounce-rate calculation.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		nonInteraction?: boolean;
	}
}
declare namespace Ext.device.Browser.methodParams.open {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Browser.open](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Browser.html#method-open)
	 * The options to use when opening a new browser window.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The URL to open.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The listeners you want to add onto the window. Available events are:
		 * 
		 * - `loadstart` - when the window starts loading the URL
		 * - `loadstop` - when the window is finished loading the URL
		 * - `loaderror` - when the window encounters an error loading the URL
		 * - `close` - when the window is closed
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * True to show the toolbar in the browser window.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		showToolbar?: boolean;
		/** 
		 * A string of options which are used when using Cordova. For a full list of options, visit the
		 * [PhoneGap documention](http://docs.phonegap.com/en/2.6.0/cordova_inappbrowser_inappbrowser.md.html#window.open).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		options?: string;
	}
}
declare namespace Ext.device.Camera.methodParams.capture {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Camera.capture](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Camera.html#method-capture)
	 * The options to use when taking a photo.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The success callback which is called when the photo has been taken.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Camera.methodParams.capture.Options.success}
		 */
		success?: ((image?: string) => void) | ExtGlobalFunction;
		/** 
		 * The function which is called when something goes wrong.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		failure?: ExtGlobalFunction;
		/** 
		 * The quality of the image which is returned in the callback. This should be a percentage.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		quality?: number;
		/** 
		 * The source of where the image should be taken. Available options are:
		 * 
		 * - **album** - prompts the user to choose an image from an album
		 * - **camera** - prompts the user to take a new photo
		 * - **library** - prompts the user to choose an image from the library
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		source?: string;
	}
}
declare namespace Ext.device.Capture.methodParams.captureAudio {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Capture.captureAudio](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Capture.html#method-captureAudio)
	 * The configuration object to be passed:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The maximum number of recordings allowed (defaults to 1).
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		limit?: number;
		/** 
		 * The maximum duration of the capture, in seconds.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximumDuration?: number;
		/** 
		 * The maximum duration of the capture, in seconds.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		duration?: number;
		/** 
		 * Called if the capture is successful.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Capture.methodParams.captureAudio.Config.success}
		 */
		success?: ((files?: any[]) => void) | ExtGlobalFunction;
		/** 
		 * Called if the capture is unsuccessful.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		failure?: ExtGlobalFunction;
	}
}
declare namespace Ext.device.Capture.methodParams.captureVideo {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Capture.captureVideo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Capture.html#method-captureVideo)
	 * The configuration object to be passed:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The maximum number of recordings allowed (defaults to 1).
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		limit?: number;
		/** 
		 * The maximum duration of the capture, in seconds.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximumDuration?: number;
		/** 
		 * The maximum duration of the capture, in seconds.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		duration?: number;
		/** 
		 * Called if the capture is successful.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Capture.methodParams.captureVideo.Config.success}
		 */
		success?: ((files?: any[]) => void) | ExtGlobalFunction;
		/** 
		 * Called if the capture is unsuccessful.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		failure?: ExtGlobalFunction;
	}
}
declare namespace Ext.device.Device.eventsParams.schemeupdate {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Device.schemeupdate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Device.html#event-schemeupdate)
	 * The scheme information, if opened via another application
	 */
	interface Scheme extends Ext.base.Params {
		/** 
		 * The URL that was opened, if this application was opened via another application. Example: `sencha:`
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The source application that opened this application. Example: `com.apple.safari`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		sourceApplication?: string;
	}
}
declare namespace Ext.device.Geolocation.methodParams.getCurrentPosition {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Geolocation.getCurrentPosition](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html#method-getCurrentPosition)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The function to call when the location of the current device has been received.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Geolocation.methodParams.getCurrentPosition.Config.success}
		 */
		success?: ((position?: object) => void) | ExtGlobalFunction;
		/** 
		 * The function that is called when something goes wrong.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		failure?: ExtGlobalFunction;
		/** 
		 * The scope of the `success` and `failure` functions.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The maximum age of a cached location. If you do not enter a value for this, the value of [maximumAge](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-maximumAge)
		 * will be used.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximumAge?: number;
		/** 
		 * The timeout for this request. If you do not specify a value, it will default to [timeout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-timeout).
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		timeout?: number;
		/** 
		 * True to enable allow accuracy detection of the location of the current device. If you do not specify a value, it will
		 * default to [allowHighAccuracy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-allowHighAccuracy).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		allowHighAccuracy?: boolean;
	}
}
declare namespace Ext.device.Geolocation.methodParams.watchPosition {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Geolocation.watchPosition](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html#method-watchPosition)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The function to be called when the position has been updated.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		callback?: ExtGlobalFunction;
		/** 
		 * The function that is called when something goes wrong.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		failure?: ExtGlobalFunction;
		/** 
		 * The scope of the `success` and `failure` functions.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The frequency in which to call the supplied callback. Defaults to [frequency](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-frequency) if you do not specify a value.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		frequency?: boolean;
		/** 
		 * True to enable allow accuracy detection of the location of the current device. If you do not specify a value, it will
		 * default to [allowHighAccuracy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.geolocation.Abstract.html#cfg-allowHighAccuracy).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		allowHighAccuracy?: boolean;
	}
}
declare namespace Ext.device.Notification.methodParams.show {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Notification.show](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Notification.html#method-show)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The title of the notification
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		title?: string;
		/** 
		 * The message to be displayed on the notification
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		message?: string;
		/** 
		 * The buttons to be displayed on the notification. It can be a string, which is the title of the button, or an array of multiple strings.
		 * Please not that you should not use more than 2 buttons, as they may not be displayed correct on all devices.
		 * @configuration
		 * @optional
		 * @default "OK"
		 * @type {string|string[]}
		 */
		buttons?: string | string[];
		/** 
		 * A callback function which is called when the notification is dismissed by clicking on the configured buttons.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Notification.methodParams.show.Config.callback}
		 */
		callback?: ((buttonId?: string) => void) | ExtGlobalFunction;
		/** 
		 * The scope of the callback function
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
	}
}
declare namespace Ext.device.Orientation.eventsParams.orientationchange {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Orientation.orientationchange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html#event-orientationchange)
	 * The event object
	 */
	interface Event extends Ext.base.Params {
		/** 
		 * The alpha value of the orientation event
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		alpha?: object;
		/** 
		 * The beta value of the orientation event
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		beta?: object;
		/** 
		 * The gamma value of the orientation event
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		gamma?: object;
	}
}
declare namespace Ext.device.Push.methodParams.register {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Push.register](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html#method-register)
	 * The configuration for to pass when registering this push notification service.
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The type(s) of notifications to enable. Available options are:
		 * 
		 * - [Ext.device.Push.ALERT](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html#property-ALERT)
		 * - [Ext.device.Push.BADGE](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html#property-BADGE)
		 * - [Ext.device.Push.SOUND](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Push.html#property-SOUND)
		 * 
		 * **Usage**
		 * 
		 * Enable alerts and badges:
		 * 
		 *    Ext.device.Push.register({
		 *        type: Ext.device.Push.ALERT|Ext.device.Push.BADGE
		 *        // ...
		 *    });
		 * 
		 * Enable alerts, badges and sounds:
		 * 
		 *    Ext.device.Push.register({
		 *        type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND
		 *        // ...
		 *    });
		 * 
		 * Enable only sounds:
		 * 
		 *    Ext.device.Push.register({
		 *        type: Ext.device.Push.SOUND
		 *        // ...
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		type?: number;
		/** 
		 * The callback to be called when registration is complete.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Push.methodParams.register.Config.success}
		 */
		success?: ((token?: string) => void) | ExtGlobalFunction;
		/** 
		 * The callback to be called when registration fails.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Push.methodParams.register.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
		/** 
		 * The callback to be called when a push notification is received on this device.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Push.methodParams.register.Config.received}
		 */
		received?: ((notifications?: object) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.Twitter.methodParams.compose {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Twitter.compose](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html#method-compose)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The default tweet text to add to the compose window.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		tweet?: string;
		/** 
		 * An optional URL to attatch to the Tweet.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * An optional image URL to attatch to the Tweet.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		image?: string;
		/** 
		 * The callback when the Tweet is successfully posted.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		success?: ExtGlobalFunction;
		/** 
		 * The callback when the Tweet is unsuccessfully posted.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		failure?: ExtGlobalFunction;
	}
}
declare namespace Ext.device.Twitter.methodParams.getMentions {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Twitter.getMentions](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html#method-getMentions)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getMentions.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getMentions.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.Twitter.methodParams.getPublicTimeline {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Twitter.getPublicTimeline](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html#method-getPublicTimeline)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getPublicTimeline.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getPublicTimeline.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.Twitter.methodParams.getTwitterRequest {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Twitter.getTwitterRequest](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html#method-getTwitterRequest)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * of [Twitter API Endpoint]
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * key-value map, matching [Twitter API Endpoint]
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		params?: object;
		/** 
		 * other options for the HTTP request
		 * @configuration
		 * @optional
		 * @type {object|Ext.device.Twitter.methodParams.getTwitterRequest.Config.options}
		 */
		options?: object | Ext.device.Twitter.methodParams.getTwitterRequest.Config.options;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getTwitterRequest.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getTwitterRequest.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.Twitter.methodParams.getTwitterUsername {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.Twitter.getTwitterUsername](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Twitter.html#method-getTwitterUsername)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getTwitterUsername.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.Twitter.methodParams.getTwitterUsername.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.Accelerometer {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Accelerometer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Accelerometer.html)
	 * Provides access to the native Accelerometer API when running on a device. There are three implementations of this API:
	 * 
	 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_accelerometer_accelerometer.md.html#Accelerometer)
	 * 
	 * This class will automatically select the correct implementation depending on the device your application is running on.
	 * 
	 * ## Examples
	 * 
	 * Getting the current location:
	 * 
	 *    Ext.device.Accelerometer.getCurrentAcceleration({
	 *        success: function(acceleration) {
	 *                     alert('Acceleration X: ' + acceleration.x + '\n' +
	 *                     'Acceleration Y: ' + acceleration.y + '\n' +
	 *                     'Acceleration Z: ' + acceleration.z + '\n' +
	 *                     'Timestamp: '      + acceleration.timestamp + '\n');
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * Watching the current acceleration:
	 * 
	 *    Ext.device.Accelerometer.watchAcceleration({
	 *        frequency: 500, // Update every 1/2 second
	 *        callback: function(acceleration) {
	 *                     console.log('Acceleration X: ' + acceleration.x + '\n' +
	 *                     'Acceleration Y: ' + acceleration.y + '\n' +
	 *                     'Acceleration Z: ' + acceleration.z + '\n' +
	 *                     'Timestamp: '      + acceleration.timestamp + '\n');
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The default frequency to get the current acceleration when using [Ext.device.Accelerometer.watchAcceleration](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Accelerometer.html#method-watchAcceleration).
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		frequency?: number;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Analytics {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Analytics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Analytics.html)
	 * Allows you to use Google Analytics within your Cordova application.
	 * 
	 * For setup information, please read the [plugin documentation](https://github.com/phonegap/phonegap-facebook-plugin).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		accountID?: object;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Compass {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Compass](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Compass.html)
	 * Provides access to the native Compass API when running on a device. There are three implementations of this API:
	 * 
	 * - [PhoneGap](http://docs.phonegap.com/en/2.6.0/cordova_compass_compass.md.html#Compass)
	 * 
	 * This class will automatically select the correct implementation depending on the device your application is running on.
	 * 
	 * ## Examples
	 * 
	 * Getting the current location:
	 * 
	 *    Ext.device.Compass.getCurrentHeading({
	 *        success: function(heading) {
	 *                     alert('Heading: ' + heading.magneticHeading);
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * Watching the current compass:
	 * 
	 *    Ext.device.Compass.watchHeading({
	 *        frequency: 500, // Update every 1/2 second
	 *        callback: function(heading) {
	 *                     console.log('Heading: ' + heading.magneticHeading);
	 *         },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The default frequency to get the current heading when using [Ext.device.Compass.watchHeading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Compass.html#method-watchHeading).
		 * @configuration
		 * @optional
		 * @default 100
		 * @type {number}
		 */
		frequency?: number;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Connection {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)
	 * This class is used to check if the current device is currently online or not. It has three different implementations:
	 * 
	 * - Sencha Packager
	 * - Cordova
	 * - Simulator
	 * 
	 * Both the Sencha Packager and Cordova implementations will use the native functionality to determine if the current
	 * device is online. The Simulator version will simply use `navigator.onLine`.
	 * 
	 * When this singleton ([Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)) is instantiated, it will automatically decide which version to
	 * use based on the current platform.
	 * 
	 * ## Examples
	 * 
	 * Determining if the current device is online:
	 * 
	 *    alert(Ext.device.Connection.isOnline());
	 * 
	 * Checking the type of connection the device has:
	 * 
	 *    alert('Your connection type is: ' + Ext.device.Connection.getType());
	 * 
	 * The available connection types are:
	 * 
	 * - [UNKNOWN](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-UNKNOWN) - Unknown connection
	 * - [ETHERNET](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-ETHERNET) - Ethernet connection
	 * - [WIFI](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-WIFI) - WiFi connection
	 * - [CELL_2G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_2G) - Cell 2G connection
	 * - [CELL_3G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_3G) - Cell 3G connection
	 * - [CELL_4G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_4G) - Cell 4G connection
	 * - [NONE](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-NONE) - No network connection
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		online?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		type?: object;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Contacts {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Contacts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html)
	 * This device API allows you to access a users contacts using a Ext.data.Store. This allows you to search, filter
	 * and sort through all the contacts using its methods.
	 * 
	 * To use this API, all you need to do is require this class ([`Ext.device.Contacts`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html)) and then use [`Ext.device.Contacts.getContacts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Contacts.html#method-getContacts)()`
	 * to retrieve an array of contacts.
	 * 
	 * **Please note that getThumbnail and getLocalizedLabel are _only_ for the Sencha Native Packager.**
	 * **Both Cordova/PhoneGap and Sencha Native Packager can access the find method though properties of returned contacts will differ.**
	 * 
	 * # Example
	 * 
	 *    Ext.application({
	 *        name: 'Sencha',
	 *        requires: 'Ext.device.Contacts',
	 *    
	 *        launch: function() {
	 *            Ext.Viewport.add({
	 *                xtype: 'list',
	 *                itemTpl: '{First} {Last}',
	 *                store: {
	 *                    fields: ['First', 'Last'],
	 *                    data: Ext.device.Contacts.getContacts()
	 *                }
	 *            });
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to include images when you get the contacts store. Please beware that this can be very slow.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		includeImages?: boolean;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Geolocation {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Geolocation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html)
	 * Provides access to the native Geolocation API when running on a device. There are three implementations of this API:
	 * 
	 * - Sencha Packager
	 * - [PhoneGap](http://docs.phonegap.com/en/1.4.1/phonegap_device_device.md.html)
	 * - Browser
	 * 
	 * This class will automatically select the correct implementation depending on the device your application is running on.
	 * 
	 * ## Examples
	 * 
	 * Getting the current location:
	 * 
	 *    Ext.device.Geolocation.getCurrentPosition({
	 *        success: function(position) {
	 *            console.log(position.coords);
	 *        },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 * Watching the current location:
	 * 
	 *    Ext.device.Geolocation.watchPosition({
	 *        frequency: 3000, // Update every 3 seconds
	 *        callback: function(position) {
	 *            console.log('Position updated!', position.coords);
	 *        },
	 *        failure: function() {
	 *            console.log('something went wrong!');
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to allow high accuracy when getting the current position.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowHighAccuracy?: boolean;
		/** 
		 * The default frequency to get the current position when using [Ext.device.Geolocation.watchPosition](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Geolocation.html#method-watchPosition).
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		frequency?: number;
		/** 
		 * This option indicates that the application is willing to accept cached location information whose age
		 * is no greater than the specified time in milliseconds. If maximumAge is set to 0, an attempt to retrieve
		 * new location information is made immediately.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		maximumAge?: number;
		/** 
		 * The maximum number of milliseconds allowed to elapse between a location update operation.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		timeout?: number;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Media {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.device.Media](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Media.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		src?: object;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-clearPropertiesOnDestroy)
		 * is set to `false`.
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#property-self),
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
declare namespace Ext.device.Connection {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)
	 * This class is used to check if the current device is currently online or not. It has three different implementations:
	 * 
	 * - Sencha Packager
	 * - Cordova
	 * - Simulator
	 * 
	 * Both the Sencha Packager and Cordova implementations will use the native functionality to determine if the current
	 * device is online. The Simulator version will simply use `navigator.onLine`.
	 * 
	 * When this singleton ([Ext.device.Connection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html)) is instantiated, it will automatically decide which version to
	 * use based on the current platform.
	 * 
	 * ## Examples
	 * 
	 * Determining if the current device is online:
	 * 
	 *    alert(Ext.device.Connection.isOnline());
	 * 
	 * Checking the type of connection the device has:
	 * 
	 *    alert('Your connection type is: ' + Ext.device.Connection.getType());
	 * 
	 * The available connection types are:
	 * 
	 * - [UNKNOWN](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-UNKNOWN) - Unknown connection
	 * - [ETHERNET](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-ETHERNET) - Ethernet connection
	 * - [WIFI](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-WIFI) - WiFi connection
	 * - [CELL_2G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_2G) - Cell 2G connection
	 * - [CELL_3G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_3G) - Cell 3G connection
	 * - [CELL_4G](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-CELL_4G) - Cell 4G connection
	 * - [NONE](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Connection.html#property-NONE) - No network connection
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the device goes offline
		 * @event
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		offline? (eOpts: object): void;
		/** 
		 * Fires when the device goes online
		 * @event
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		online? (eOpts: object): void;
		/** 
		 * @event
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		onlinechange? (eOpts: object): void;
	}
}
declare namespace Ext.device.Device {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.device.Device](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Device.html)
	 * Provides a cross device way to get information about the device your application is running on. There are 3 different implementations:
	 * 
	 * - Sencha Packager
	 * - [Cordova](http://cordova.apache.org/docs/en/2.5.0/cordova_device_device.md.html#Device)
	 * - Simulator
	 * 
	 * ## Examples
	 * 
	 * #### Device Information
	 * 
	 * Getting the device information:
	 * 
	 *    Ext.application({
	 *        name: 'Sencha',
	 *    
	 *        // Remember that the Ext.device.Device class *must* be required
	 *        requires: ['Ext.device.Device'],
	 *    
	 *        launch: function() {
	 *            alert([
	 *                'Device name: ' + Ext.device.Device.name,
	 *                'Device platform: ' + Ext.device.Device.platform,
	 *                'Device UUID: ' + Ext.device.Device.uuid
	 *            ].join('\n'));
	 *        }
	 *    });
	 * 
	 * ### Custom Scheme URL
	 * 
	 * Using custom scheme URL to application your application from other applications:
	 * 
	 *    Ext.application({
	 *        name: 'Sencha',
	 *        requires: ['Ext.device.Device'],
	 *        launch: function() {
	 *            if (Ext.device.Device.scheme) {
	 *                // the application was opened via another application. Do something:
	 *                alert('Applicaton pened via another application: ' + Ext.device.Device.scheme.url);
	 *            }
	 *    
	 *            // Listen for future changes
	 *            Ext.device.Device.on('schemeupdate', function(device, scheme) {
	 *                // the application was launched, closed, and then launched another from another application
	 *                // this means onReady wont be called again ('cause the application is already running in the 
	 *                // background) - but this event will be fired
	 *                alert('Applicated reopened via another application: ' + scheme.url);
	 *            }, this);
	 *        }
	 *    });
	 * 
	 * Of course, you must add the custom scheme URL you would like to use when packaging your application.
	 * You can do this by setting the `URLScheme` property inside your `package.json` file (Sencha Native Packager configuration file):
	 * 
	 *    {
	 *        ...
	 *        "URLScheme": "sencha",
	 *        ...
	 *    }
	 * 
	 * You can change the available URL scheme.
	 * 
	 * You can then test it by packaging and installing the application onto a device/iOS Simulator, opening Safari and typing: `sencha:testing`.
	 * The application will launch and it will `alert` the URL you specified.
	 * 
	 * **PLEASE NOTE: This currently only works with the Sencha Native Packager. If you attempt to listen to this event when packaged with
	 * PhoneGap or simply in the browser, it will not function.**
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Event which is fired when your Sencha Native packaged application is opened from another application using a custom URL scheme.
		 * 
		 * This event will only fire if the application was already open (in other words; `onReady` was already fired). This means you should check
		 * if [Ext.device.Device.scheme](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Device.html#property-scheme) is set in your Application `launch`/`onReady` method, and perform any needed changes for that URL (if defined).
		 * Then listen to this event for future changed.
		 * 
		 * ## Example
		 * 
		 *    Ext.application({
		 *        name: 'Sencha',
		 *        requires: ['Ext.device.Device'],
		 *        launch: function() {
		 *            if (Ext.device.Device.scheme) {
		 *                // the application was opened via another application. Do something:
		 *                console.log('Applicaton opened via another application: ' + Ext.device.Device.scheme.url);
		 *            }
		 *    
		 *            // Listen for future changes
		 *            Ext.device.Device.on('schemeupdate', function(device, scheme) {
		 *                // the application was launched, closed, and then launched another from another application
		 *                // this means onReady wont be called again ('cause the application is already running in the 
		 *                // background) - but this event will be fired
		 *                console.log('Applicated reopened via another application: ' + scheme.url);
		 *            }, this);
		 *        }
		 *    });
		 * 
		 * **Note:** This currently only works with the Sencha Native Packager. If you attempt to listen to this event when packaged with
		 * PhoneGap or simply in the browser, it will never fire.**
		 * @event
		 * @param   {Ext.device.Device}                                                 _this  The instance of [Ext.device.Device](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Device.html)
		 * @param   {object|boolean|Ext.device.Device.eventsParams.schemeupdate.Scheme} scheme The scheme information, if opened via another application
		 * @param   {object}                                                            eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                                                              
		 */
		schemeupdate? (_this: Ext.device.Device, scheme: object | boolean | Ext.device.Device.eventsParams.schemeupdate.Scheme, eOpts: object): void;
	}
}
declare namespace Ext.device.Orientation {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.device.Orientation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html)
	 * This class provides you with a cross platform way of listening to when the the orientation changes on the
	 * device your application is running on.
	 * 
	 * The [orientationchange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.Orientation.html#event-orientationchange) event gets passes the `alpha`, `beta` and
	 * `gamma` values. ** These properties only exist when packaging with the Sencha Native Packager. **
	 * 
	 * You can find more information about these values and how to use them on the [W3C device orientation specification](http://dev.w3.org/geo/api/spec-source-orientation.html#deviceorientation).
	 * 
	 * ## Example
	 * 
	 * To listen to the device orientation, you can do the following:
	 * 
	 *    Ext.device.Orientation.on({
	 *        scope: this,
	 *        orientationchange: function(e) {
	 *            console.log('Alpha: ', e.alpha);
	 *            console.log('Beta: ', e.beta);
	 *            console.log('Gamma: ', e.gamma);
	 *        }
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the orientation has been changed on this device.
		 * 
		 *    Ext.device.Orientation.on({
		 *        scope: this,
		 *        orientationchange: function(e) {
		 *            console.log('Alpha: ', e.alpha);
		 *            console.log('Beta: ', e.beta);
		 *            console.log('Gamma: ', e.gamma);
		 *        }
		 *    });
		 * 
		 * @event
		 * @param   {object|Ext.device.Orientation.eventsParams.orientationchange.Event} event The event object
		 * @param   {object}                                                             eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                                                               
		 */
		orientationchange? (event: object | Ext.device.Orientation.eventsParams.orientationchange.Event, eOpts: object): void;
	}
}
