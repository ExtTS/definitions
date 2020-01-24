declare namespace Ext.device.filesystem.DirectoryEntry.methodParams.getEntry.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.DirectoryEntry.methodParams.getEntry.Config.getEntry](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.DirectoryEntry.methodParams.getEntry.Config.html#method-getEntry)
	 * File creation options {create:true, exclusive:false}
	 */
	interface options extends Ext.base.Params {
		/** 
		 * Indicates if the directory should be created if it doesn't exist
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		create?: boolean;
		/** 
		 * Used with the create option only indicates whether a creation causes an error if the directory already exists
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		exclusive?: boolean;
	}
}
declare namespace Ext.device.filesystem.DirectoryEntry.methodParams.getFile.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.DirectoryEntry.methodParams.getFile.Config.getFile](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.DirectoryEntry.methodParams.getFile.Config.html#method-getFile)
	 * This is optional.
	 * The object which contains the following options:
	 */
	interface options extends Ext.base.Params {
		/** 
		 * This is optional.
		 * Indicates whether to create a file, if path does not exist.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		create?: boolean;
		/** 
		 * This is optional. Used with 'create', by itself has no effect.
		 * Indicates that method should fail, if path already exists.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		exclusive?: boolean;
	}
}
