declare namespace Ext.device.device {
	/** 
	 * @private (class)
	 */
	class Abstract extends Ext.Base {}
	/** 
	 * @private (class)
	 */
	class Cordova extends Ext.device.device.Abstract {}
	/** 
	 * @private (class)
	 */
	class Simulator extends Ext.device.device.Abstract {}
	class PhoneGap extends Ext.device.device.Cordova {}
}
declare namespace Ext.device.device.Abstract.eventsParams.schemeupdate {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.device.Abstract.schemeupdate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.device.Abstract.html#event-schemeupdate)
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
declare namespace Ext.device.device.Cordova.eventsParams.schemeupdate {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.device.Cordova.schemeupdate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.device.Cordova.html#event-schemeupdate)
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
declare namespace Ext.device.device.Simulator.eventsParams.schemeupdate {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.device.Simulator.schemeupdate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.device.Simulator.html#event-schemeupdate)
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
