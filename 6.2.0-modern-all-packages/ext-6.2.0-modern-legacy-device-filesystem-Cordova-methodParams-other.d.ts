declare namespace Ext.device.filesystem.Cordova.methodParams.readMetadata.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.Cordova.methodParams.readMetadata.Config.readMetadata](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.Cordova.methodParams.readMetadata.Config.html#method-readMetadata)
	 * File creation options {create:true, exclusive:false}
	 */
	interface options extends Ext.base.Params {
		/** 
		 * Indicates if the file should be created if it doesn't exist
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		create?: boolean;
		/** 
		 * Used with the create option only indicates whether a creation causes an error if the file already exists
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		exclusive?: boolean;
	}
}
declare namespace Ext.device.filesystem.Cordova.methodParams.writeMetadata.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.Cordova.methodParams.writeMetadata.Config.writeMetadata](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.Cordova.methodParams.writeMetadata.Config.html#method-writeMetadata)
	 * File creation options {create:true, exclusive:false}
	 */
	interface options extends Ext.base.Params {
		/** 
		 * Indicates if the file should be created if it doesn't exist
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		create?: boolean;
		/** 
		 * Used with the create option only indicates whether a creation causes an error if the file already exists
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		exclusive?: boolean;
	}
}
