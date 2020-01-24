declare namespace Ext.device.filesystem.FileEntry.methodParams.getEntry.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.FileEntry.methodParams.getEntry.Config.getEntry](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.FileEntry.methodParams.getEntry.Config.html#method-getEntry)
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
declare namespace Ext.device.filesystem.FileEntry.methodParams.read.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.FileEntry.methodParams.read.Config.read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.FileEntry.methodParams.read.Config.html#method-read)
	 * Optional config params to be applied to a File Reader
	 */
	interface reader extends Ext.base.Params {
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onloadstart?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onloadprogress?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onload?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onabort?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onerror?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onloadend?: ExtGlobalFunction;
	}
}
declare namespace Ext.device.filesystem.FileEntry.methodParams.write.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.filesystem.FileEntry.methodParams.write.Config.write](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.filesystem.FileEntry.methodParams.write.Config.html#method-write)
	 * Optional config params to be applied to a File Reader
	 */
	interface writer extends Ext.base.Params {
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onwritestart?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onprogress?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onwrite?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onabort?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onerror?: ExtGlobalFunction;
		/** 
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		onwriteend?: ExtGlobalFunction;
	}
}
