declare namespace Ext.device.twitter {
	/** 
	 * @private (class)
	 */
	class Abstract extends Ext.Base {}
	/** 
	 * @private (class)
	 */
	class Cordova extends Ext.Base {}
}
declare namespace Ext.device.twitter.Abstract.methodParams.compose {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.twitter.Abstract.compose](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.twitter.Abstract.html#method-compose)
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
declare namespace Ext.device.twitter.Abstract.methodParams.getMentions {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.twitter.Abstract.getMentions](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.twitter.Abstract.html#method-getMentions)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getMentions.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getMentions.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.twitter.Abstract.methodParams.getPublicTimeline {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.twitter.Abstract.getPublicTimeline](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.twitter.Abstract.html#method-getPublicTimeline)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getPublicTimeline.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getPublicTimeline.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.twitter.Abstract.methodParams.getTwitterRequest {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.twitter.Abstract.getTwitterRequest](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.twitter.Abstract.html#method-getTwitterRequest)
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
		 * @type {object|Ext.device.twitter.Abstract.methodParams.getTwitterRequest.Config.options}
		 */
		options?: object | Ext.device.twitter.Abstract.methodParams.getTwitterRequest.Config.options;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getTwitterRequest.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getTwitterRequest.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.device.twitter.Abstract.methodParams.getTwitterUsername {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.device.twitter.Abstract.getTwitterUsername](https://docs.sencha.com/extjs/6.2.0/modern/Ext.device.twitter.Abstract.html#method-getTwitterUsername)
	 * An object which contains the following config options:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getTwitterUsername.Config.success}
		 */
		success?: ((response?: object[]) => void) | ExtGlobalFunction;
		/** 
		 * callback
		 * @configuration
		 * @optional
		 * @type {Function|Ext.device.twitter.Abstract.methodParams.getTwitterUsername.Config.failure}
		 */
		failure?: ((error?: string) => void) | ExtGlobalFunction;
	}
}
