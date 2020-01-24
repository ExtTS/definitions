declare namespace Ext.ux.statusbar.StatusBar.methodParams.setStatus.Config {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.ux.statusbar.StatusBar.methodParams.setStatus.Config.setStatus](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.methodParams.setStatus.Config.html#method-setStatus)
	 * Allows you to set an internal callback that will
	 * automatically clear the status text and iconCls after a specified amount of time has passed. If clear is not
	 * specified, the new status will not be auto-cleared and will stay until updated again or cleared using
	 * [clearStatus](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#method-clearStatus). If `true` is passed, the status will be cleared using [autoClear](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-autoClear),
	 * [defaultText](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-defaultText) and [defaultIconCls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-defaultIconCls) via a fade out animation. If a numeric value is passed,
	 * it will be used as the callback interval (in milliseconds), overriding the [autoClear](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-autoClear) value.
	 * All other options will be defaulted as with the boolean option.  To customize any other options,
	 * you can pass an object in the format:
	 */
	interface clear extends Ext.base.Params {
		/** 
		 * The number of milliseconds to wait before clearing
		 * (defaults to [autoClear](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-autoClear)).
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		wait?: number;
		/** 
		 * False to clear the status immediately once the callback
		 * executes (defaults to true which fades the status out).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		anim?: boolean;
		/** 
		 * False to completely clear the status text and iconCls
		 * (defaults to true which uses [defaultText](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-defaultText) and [defaultIconCls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ux.statusbar.StatusBar.html#cfg-defaultIconCls)).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		useDefaults?: boolean;
	}
}
