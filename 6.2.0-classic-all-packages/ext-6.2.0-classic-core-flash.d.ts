declare namespace Ext.flash {
	/** 
	 * [Ext.flash.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html)
	 * A simple Component for displaying an Adobe Flash SWF movie. The movie will be sized and can participate
	 * in layout like any other Component.
	 * 
	 * This component requires the third-party SWFObject library version 2.2 or above. It is not included within
	 * the ExtJS distribution, so you will have to include it into your page manually in order to use this component.
	 * The SWFObject library can be downloaded from the [SWFObject project page](http://code.google.com/p/swfobject)
	 * and then simply import it into the head of your HTML document:
	 * 
	 *    &lt;script type="text/javascript" src="path/to/local/swfobject.js"&gt;&lt;/script&gt;
	 * 
	 * ## Configuration
	 * 
	 * This component allows several options for configuring how the target Flash movie is embedded. The most
	 * important is the required [url](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-url) which points to the location of the Flash movie to load. Other
	 * configurations include:
	 * 
	 * - [backgroundColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-backgroundColor)
	 * - [wmode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-wmode)
	 * - [flashVars](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashVars)
	 * - [flashParams](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashParams)
	 * - [flashAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashAttributes)
	 * 
	 * ## Example usage:
	 * 
	 *    var win = Ext.widget('window', {
	 *        title: "It's a tiger!",
	 *        layout: 'fit',
	 *        width: 300,
	 *        height: 300,
	 *        x: 20,
	 *        y: 20,
	 *        resizable: true,
	 *        items: {
	 *            xtype: 'flash',
	 *            url: 'tiger.swf'
	 *        }
	 *    });
	 *    win.show();
	 * 
	 * ## Express Install
	 * 
	 * Adobe provides a tool called [Express Install](http://www.adobe.com/devnet/flashplayer/articles/express_install.html)
	 * that offers users an easy way to upgrade their Flash player. If you wish to make use of this, you should set
	 * the static EXPRESS_INSTALL_URL property to the location of your Express Install SWF file:
	 * 
	 *    Ext.flash.Component.EXPRESS_INSTALL_URL = 'path/to/local/expressInstall.swf';
	 * 
	 */
	class Component extends Ext.Component {
		/** 
		 * The url for installing flash if it doesn't exist. This should be set to a local resource.
		 * See [http://get.adobe.com/flashplayer/](http://get.adobe.com/flashplayer/) for details.
		 * @property
		 * @public (property)
		 * @static
		 * @readonly
		 * @default 'http:/' + '/swfobject.googlecode.com/svn/trunk/swfobject/expressInstall.swf'
		 * @type {string}
		 */
		static readonly EXPRESS_INSTALL_URL?: string;
		/** 
		 * A reference to the object or embed element into which the SWF file is loaded. Only
		 * populated after the component is rendered and the SWF has been successfully embedded.
		 * @property
		 * @public (property)
		 * @type {Ext.dom.Element}
		 */
		swf?: Ext.dom.Element;
		/** 
		 * Setting this property to `false` will prevent nulling object references
		 * on a Class instance after destruction. Setting this to `"async"` will delay
		 * the clearing for approx 50ms.
		 * @property
		 * @protected (property)
		 * @default 'async'
		 * @type {boolean|'async'}
		 */
		clearPropertiesOnDestroy?: boolean | 'async';
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-statics)
		 * for a detailed comparison
		 * 
		 *    Ext.define('My.Cat', {
		 *        statics: {
		 *            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
		 *        },
		 *    
		 *        constructor: function() {
		 *            alert(this.self.speciesName); // dependent on 'this'
		 *        },
		 *    
		 *        clone: function() {
		 *            return new this.self();
		 *        }
		 *    });
		 *    
		 *    
		 *    Ext.define('My.SnowLeopard', {
		 *        extend: 'My.Cat',
		 *        statics: {
		 *            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
		 *        }
		 *    });
		 *    
		 *    var cat = new My.Cat();                     // alerts 'Cat'
		 *    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'
		 *    
		 *    var clone = snowLeopard.clone();
		 *    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.Base
		 * @type {Ext.flash.Component.Statics}
		 */
		self?: Ext.flash.Component.Statics | Ext.Component.Statics | Ext.Base.Statics;
		/** 
		 * We do not want "_hidden" style backing properties.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * We also want non-config system properties to go to the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     members    The members to add to this class.
		 * @param   {boolean}                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.flash.Component;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     members
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.flash.Component;
		static addStatics? (members: object): typeof Ext.Component;
		static addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		static createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		static getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		static override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		static callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		static addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} members
		 * @returns {void}           
		 */
		static addInheritableStatics? (members: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     name
		 * @param   {object}                                     member
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.flash.Component;
		static addMember? (name: object, member: object): typeof Ext.Component;
		static addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		static borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		static extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		static getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		static mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     fn
		 * @param   {object}                                     scope
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.flash.Component;
		static onExtended? (fn: object, scope: object): typeof Ext.Component;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Creates new Component.
		 * @method
		 * @public (method)
		 * @param   {Ext.dom.Element|string|object} config
		 * The configuration options may be specified as either:
		 * 
		 * - **an element** : it is set as the internal element and its id used as the component id
		 * - **a string** : it is assumed to be the id of an existing element and is used as the component id
		 * - **anything else** : it is assumed to be a standard config object and is applied to the component
		 */
		constructor (config: Ext.dom.Element | string | object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * Adds a CSS class to the top level element representing this component.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The CSS class name to add.
		 * @returns {Ext.Component}       Returns the Component to allow method chaining.
		 */
		addClass? (cls: string | string[]): Ext.Component;
		/** 
		 * Adds a CSS class to the top level element representing this component.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The CSS class name to add.
		 * @returns {Ext.Component}       Returns the Component to allow method chaining.
		 */
		addCls? (cls: string | string[]): Ext.Component;
		/** 
		 * Adds a `cls` to the `uiCls` array, which will also call [addUIClsToElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-addUIClsToElement) and adds to all elements of this
		 * component.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} classes A string or an array of strings to add to the `uiCls`.
		 * @param   {boolean}         [skip]  `true` to skip adding it to the class and do it later (via the return).
		 * @returns {void}                    
		 */
		addClsWithUI? (classes: string | string[], skip?: boolean): void;
		/** 
		 * The addManagedListener method is used when some object (call it "A") is listening
		 * to an event on another observable object ("B") and you want to remove that listener
		 * from "B" when "A" is destroyed. This is not an issue when "B" is destroyed because
		 * all of its listeners will be removed at that time.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Component',
		 *    
		 *        initComponent: function () {
		 *            this.addManagedListener(MyApp.SomeGlobalSharedMenu, 'show', this.doSomething);
		 *            this.callParent();
		 *        }
		 *    });
		 * 
		 * As you can see, when an instance of Foo is destroyed, it ensures that the 'show'
		 * listener on the menu (`MyApp.SomeGlobalSharedMenu`) is also removed.
		 * 
		 * As of version 5.1 it is no longer necessary to use this method in most cases because
		 * listeners are automatically managed if the scope object provided to
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) is an Observable instance.
		 * However, if the observable instance and scope are not the same object you
		 * still need to use `mon` or `addManagedListener` if you want the listener to be
		 * managed.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		addManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Add events that will trigger the state to be saved. If the first argument is an
		 * array, each element of that array is the name of a state event. Otherwise, each
		 * argument passed to this method is the name of a state event.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} events The event name or an array of event names.
		 * @returns {void}                   
		 */
		addStateEvents? (events: string | string[]): void;
		/** 
		 * Aligns the element with another element relative to the specified anchor points. If
		 * the other element is the document it aligns it to the viewport. The position
		 * parameter is optional, and can be specified in any one of the following formats:
		 * 
		 * - **Blank**: Defaults to aligning the element's top-left corner to the target's
		 *   bottom-left corner ("tl-bl").
		 * - **One anchor (deprecated)**: The passed anchor position is used as the target
		 *   element's anchor point.  The element being aligned will position its top-left
		 *   corner (tl) to that point. _This method has been deprecated in favor of the newer
		 *   two anchor syntax below_.
		 * - **Two anchors**: If two values from the table below are passed separated by a dash,
		 *   the first value is used as the element's anchor point, and the second value is
		 *   used as the target's anchor point.
		 * - **Two edge/offset descriptors:** An edge/offset descriptor is an edge initial
		 *   (`t`/`r`/`b`/`l`) followed by a percentage along that side. This describes a
		 *   point to align with a similar point in the target. So `'t0-b0'` would be
		 *   the same as `'tl-bl'`, `'l0-r50'` would place the top left corner of this item
		 *   halfway down the right edge of the target item. This allows more flexibility
		 *   and also describes which two edges are considered adjacent when positioning an anchor.
		 * 
		 * In addition to the anchor points, the position parameter also supports the "?"
		 * character. If "?" is passed at the end of the position string, the element will
		 * attempt to align as specified, but the position will be adjusted to constrain to
		 * the viewport if necessary. Note that the element being aligned might be swapped to
		 * align to a different position than that specified in order to enforce the viewport
		 * constraints. Following are all of the supported anchor positions:
		 * 
		 *     Value  Description
		 *     -----  -----------------------------
		 *     tl     The top left corner
		 *     t      The center of the top edge
		 *     tr     The top right corner
		 *     l      The center of the left edge
		 *     c      The center
		 *     r      The center of the right edge
		 *     bl     The bottom left corner
		 *     b      The center of the bottom edge
		 *     br     The bottom right corner
		 * 
		 * Example Usage:
		 * 
		 *    // align el to other-el using the default positioning
		 *    // ("tl-bl", non-constrained)
		 *    el.alignTo("other-el");
		 *    
		 *    // align the top left corner of el with the top right corner of other-el
		 *    // (constrained to viewport)
		 *    el.alignTo("other-el", "tr?");
		 *    
		 *    // align the bottom right corner of el with the center left edge of other-el
		 *    el.alignTo("other-el", "br-l?");
		 *    
		 *    // align the center of el with the bottom left corner of other-el and
		 *    // adjust the x position by -6 pixels (and the y position by 0)
		 *    el.alignTo("other-el", "c-bl", [-6, 0]);
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.util.Positionable|HTMLElement|string} element
		 * The Positionable,
		 * HTMLElement, or id of the element to align to.
		 * @param   {string}                                   [position] The position to align to
		 * @param   {number[]}                                 [offsets]
		 * Offset the positioning by [x, y]
		 * Element animation config object
		 * @returns {Ext.flash.Component|Ext.Component}                   this
		 */
		alignTo? (element: Ext.util.Positionable | HTMLElement | string, position?: string, offsets?: number[]): Ext.flash.Component;
		alignTo? (element: Ext.util.Positionable | HTMLElement | string, position?: string, offsets?: number[]): Ext.Component;
		/** 
		 * Performs custom animation on this object.
		 * 
		 * This method is applicable to both the [Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) class and the Sprite
		 * class. It performs animated transitions of certain properties of this object over a specified timeline.
		 * 
		 * ### Animating a [Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html)
		 * 
		 * When animating a Component, the following properties may be specified in `from`, `to`, and `keyframe` objects:
		 * 
		 * - `x` - The Component's page X position in pixels.
		 * - `y` - The Component's page Y position in pixels
		 * - `left` - The Component's `left` value in pixels.
		 * - `top` - The Component's `top` value in pixels.
		 * - `width` - The Component's `width` value in pixels.
		 * - `height` - The Component's `height` value in pixels.
		 * 
		 * The following property may be set on the animation config root:
		 * 
		 * - `dynamic` - Specify as true to update the Component's layout (if it is a Container) at every frame of the animation.
		 *   _Use sparingly as laying out on every intermediate size change is an expensive operation._
		 * 
		 * For example, to animate a Window to a new size, ensuring that its internal layout and any shadow is correct:
		 * 
		 *    myWindow = Ext.create('Ext.window.Window', {
		 *        title: 'Test Component animation',
		 *        width: 500,
		 *        height: 300,
		 *        layout: {
		 *            type: 'hbox',
		 *            align: 'stretch'
		 *        },
		 *        items: [{
		 *            title: 'Left: 33%',
		 *            margin: '5 0 5 5',
		 *            flex: 1
		 *        }, {
		 *            title: 'Left: 66%',
		 *            margin: '5 5 5 5',
		 *            flex: 2
		 *        }]
		 *    });
		 *    myWindow.show();
		 *    myWindow.header.el.on('click', function() {
		 *        myWindow.animate({
		 *            to: {
		 *                width: (myWindow.getWidth() == 500) ? 700 : 500,
		 *                height: (myWindow.getHeight() == 300) ? 400 : 300
		 *            }
		 *        });
		 *    });
		 * 
		 * For performance reasons, by default, the internal layout is only updated when the Window reaches its final `"to"`
		 * size. If dynamic updating of the Window's child Components is required, then configure the animation with
		 * `dynamic: true` and the two child items will maintain their proportions during the animation.
		 * @method
		 * @public (method)
		 * @param   {object} animObj
		 * @returns {object}         this
		 */
		animate? (animObj: object): object;
		/** 
		 * Applies the state to the object. This should be overridden in subclasses to do
		 * more complex state operations. By default it applies the state properties onto
		 * the current object.
		 * @method
		 * @public (method)
		 * @param   {object} state The state
		 * @returns {void}         
		 */
		applyState? (state: object): void;
		/** 
		 * Bubbles up the component/container hierarchy, calling the specified function with each component. The scope
		 * (_this_) of function call will be the scope provided or the current component. The arguments to the function will
		 * be the args provided or the current component. If the function returns false at any point, the bubble is stopped.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Function}                          fn      The function to call
		 * @param   {object}                            [scope] The scope of the function. Defaults to current node.
		 * @param   {any[]}                             [args]  The args to call the function with. Defaults to passing the current component.
		 * @returns {Ext.flash.Component|Ext.Component}         this
		 */
		bubble? (fn: ExtGlobalFunction, scope?: object, args?: any[]): Ext.flash.Component;
		bubble? (fn: ExtGlobalFunction, scope?: object, args?: any[]): Ext.Component;
		/** 
		 * Center this Component in its container.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  this
		 */
		center? (): Ext.Component;
		/** 
		 * Removes all listeners for this object including the managed listeners
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearListeners? (): void;
		/** 
		 * Removes all managed listeners for this object.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clearManagedListeners? (): void;
		/** 
		 * Clone the current component using the original config values passed into this instance by default.
		 * @method
		 * @public (method)
		 * @param   {object}        overrides
		 * A new config containing any properties to override in the cloned version.
		 * An id property can be passed on this object, otherwise one will be generated to avoid duplicates.
		 * @returns {Ext.Component}           clone The cloned copy of this component
		 */
		cloneConfig? (overrides: object): Ext.Component;
		/** 
		 * Destroys the Component. This method **must not** be overridden because Component
		 * destruction sequence is conditional; if a `beforedestroy` handler returns `false`
		 * we must abort destruction.
		 * 
		 * To add extra functionality to destruction time in a subclass, override the
		 * [doDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-doDestroy) method.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disable the component.
		 * @method
		 * @public (method)
		 * @param   {boolean} [silent] Passing `true` will suppress the `disable` event from being fired.
		 * @returns {void}             
		 */
		disable? (silent?: boolean): void;
		/** 
		 * This method needs to be called whenever you change something on this component that
		 * requires the Component's layout to be recalculated.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.flash.Component|Ext.Component}  this
		 */
		doComponentLayout? (): Ext.flash.Component;
		doComponentLayout? (): Ext.Component;
		/** 
		 * Moves this floating Component into a constrain region.
		 * 
		 * By default, this Component is constrained to be within the container it was added to, or the element it was
		 * rendered to.
		 * 
		 * An alternative constraint may be passed.
		 * @method
		 * @public (method)
		 * @param   {string|HTMLElement|Ext.dom.Element|Ext.util.Region} [constrainTo]
		 * The Element or [Region](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Region.html)
		 * into which this Component is to be constrained. Defaults to the element into which this floating Component
		 * was rendered.
		 * @returns {void}                                                             
		 */
		doConstrain? (constrainTo?: string | HTMLElement | Ext.dom.Element | Ext.util.Region): void;
		/** 
		 * Enable the component
		 * @method
		 * @public (method)
		 * @param   {boolean} [silent] Passing `true` will suppress the `enable` event from being fired.
		 * @returns {void}             
		 */
		enable? (silent?: boolean): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) returns the
		 * Component's immediate owner. But if a known target is required, this can be overridden to access the
		 * required target more quickly.
		 * 
		 * Example:
		 * 
		 *    Ext.define('Ext.overrides.form.field.Base', {
		 *        override: 'Ext.form.field.Base',
		 *    
		 *        //  Add functionality to Field's initComponent to enable the change event to bubble
		 *        initComponent: function () {
		 *            this.callParent();
		 *            this.enableBubble('change');
		 *        }
		 *    });
		 *    
		 *    var myForm = Ext.create('Ext.form.Panel', {
		 *        title: 'User Details',
		 *        items: [{
		 *            ...
		 *        }],
		 *        listeners: {
		 *            change: function() {
		 *                // Title goes red if form has been modified.
		 *                myForm.header.setStyle('color', 'red');
		 *            }
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|string[]} eventNames The event name to bubble, or an Array of event names.
		 * @returns {void}                       
		 */
		enableBubble? (eventNames: string | string[]): void;
		/** 
		 * Ensures that this component is attached to `document.body`. If the component was
		 * rendered to [Ext.getDetachedBody](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-getDetachedBody), then it will be appended to `document.body`.
		 * Any configured position is also restored.
		 * @method
		 * @public (method)
		 * @param   {boolean} [runLayout] True to run the component's layout.
		 * @returns {void}                
		 */
		ensureAttachedToBody? (runLayout?: boolean): void;
		/** 
		 * Find a container above this component at any level by a custom function. If the passed function returns true, the
		 * container will be returned.
		 * 
		 * See also the [up](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-up) method.
		 * @method
		 * @public (method)
		 * @param   {Function}                fn The custom function to call with the arguments (container, this component).
		 * @returns {Ext.container.Container}    The first Container for which the custom function returns true
		 */
		findParentBy? (fn: ExtGlobalFunction): Ext.container.Container;
		/** 
		 * Find a container above this component at any level by xtype or class
		 * 
		 * See also the [up](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-up) method.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Class}        xtype The xtype string for a component, or the class of the component directly
		 * @returns {Ext.container.Container}       The first Container which matches the given xtype or class
		 */
		findParentByType? (xtype: string | Ext.Class): Ext.container.Container;
		/** 
		 * Retrieves plugin from this component's collection by its `ptype`.
		 * 
		 *    var grid = Ext.create('Ext.grid.Panel', {
		 *        store: {
		 *            fields: ['name'],
		 *            data: [{
		 *                name: 'Scott Pilgrim'
		 *            }]
		 *        },
		 *        columns: [{
		 *            header: 'Name',
		 *            dataIndex: 'name',
		 *            editor: 'textfield',
		 *            flex: 1
		 *        }],
		 *        selType: 'cellmodel',
		 *        plugins: {
		 *            ptype: 'cellediting',
		 *            clicksToEdit: 1,
		 *            id: 'myplugin'
		 *        },
		 *        height: 200,
		 *        width: 400,
		 *        renderTo: Ext.getBody()
		 *    });
		 *    
		 *    grid.findPlugin('cellediting');  // the cellediting plugin
		 * 
		 * **Note:** See also [getPlugin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getPlugin)
		 * @method
		 * @public (method)
		 * @param   {string}              ptype
		 * The Plugin's `ptype` as specified by the class's
		 * [alias](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Class.html#cfg-alias) configuration.
		 * @returns {Ext.plugin.Abstract}       plugin instance or `undefined` if not found
		 */
		findPlugin? (ptype: string): Ext.plugin.Abstract;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener)), but before any other
		 * handlers are fired.  This gives the "before" handlers an opportunity to
		 * cancel the event by returning `false`, and prevent the action function from
		 * being called.
		 * 
		 * The action can also be configured to run after normal handlers, but before any "after"
		 * handlers (as specified using the `order` event option) by passing `'after'`
		 * as the `order` parameter.  This configuration gives any event handlers except
		 * for "after" handlers the opportunity to cancel the event and prevent the action
		 * function from being called.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {any[]}    args      Arguments to pass to handlers and to the action function.
		 * @param   {Function} fn        The action function.
		 * @param   {object}   [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object}   [options]
		 * Event options for the action function.  Accepts any
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}    eventName The name of the event to fire.
		 * @param   {...object} args      Variable number of parameters are passed to handlers.
		 * @returns {boolean}             returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string, ...args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameter list.
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The name of the event to fire.
		 * @param   {object[]} args      An array of parameters which are passed to handlers.
		 * @returns {boolean}            returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEventArgs? (eventName: string, args: object[]): boolean;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * Evented Actions will automatically dispatch a 'before' event passing. This event will
		 * be given a special controller that allows for pausing/resuming of the event flow.
		 * 
		 * By pausing the controller the updater and events will not run until resumed. Pausing,
		 * however, will not stop the processing of any other before events.
		 * @method
		 * @public (method)
		 * @param   {string}          eventName The name of the event to fire.
		 * @param   {any[]}           args      Arguments to pass to handlers and to the action function.
		 * @param   {Function|string} fn        The action function.
		 * @param   {object}          [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {any[]|boolean}   [fnArgs]
		 * Optional arguments for the action `fn`. If not
		 * given, the normal `args` will be used to call `fn`. If `false` is passed, the
		 * `args` are used but if the first argument is this instance it will be removed
		 * from the args passed to the action function.
		 * @returns {void}                      
		 */
		fireEventedAction? (eventName: string, args: any[], fn: ExtGlobalFunction | string, scope?: object, fnArgs?: any[] | boolean): void;
		/** 
		 * Try to focus this component.
		 * 
		 * If this component is disabled, a close relation will be targeted for focus instead
		 * to keep focus localized for keyboard users.
		 * @method
		 * @public (method)
		 * @param   {any}            [selectText] If applicable, `true` to also select all the text in this component, or an array consisting of start and end (defaults to start) position of selection.
		 * @param   {boolean|number} [delay]      Delay the focus this number of milliseconds (true for 10 milliseconds).
		 * @param   {Function}       [callback]   Only needed if the `delay` parameter is used. A function to call upon focus.
		 * @param   {Function}       [scope]      Only needed if the `delay` parameter is used. The scope (`this` reference) in which to execute the callback.
		 * @returns {Ext.Component}  
		 * The focused Component. Usually `this` Component. Some Containers may
		 * delegate focus to a descendant Component ([Window](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)s can do this through their
		 * [defaultFocus](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html#cfg-defaultFocus) config option. If this component is disabled, a closely
		 * related component will be focused and that will be returned.
		 */
		focus? (selectText?: any, delay?: boolean | number, callback?: ExtGlobalFunction, scope?: ExtGlobalFunction): Ext.Component;
		/** 
		 * Returns the current animation if this object has any effects actively running or queued, else returns false.
		 * @method
		 * @public (method)
		 * @returns {Ext.fx.Anim|boolean}  Anim if element has active effects, else false
		 */
		getActiveAnimation? (): Ext.fx.Anim | boolean;
		/** 
		 * Gets the x,y coordinates to align this element with another element. See
		 * [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-alignTo) for more info on the supported position values.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Positionable|HTMLElement|string} element
		 * The Positionable,
		 * HTMLElement, or id of the element to align to.
		 * @param   {string}                                   [position] The position to align to
		 * @param   {number[]}                                 [offsets]  Offset the positioning by [x, y]
		 * @returns {number[]}                                            [x, y]
		 */
		getAlignToXY? (element: Ext.util.Positionable | HTMLElement | string, position?: string, offsets?: number[]): number[];
		/** 
		 * Returns the value of [alwaysOnTop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#cfg-alwaysOnTop).
		 * @method
		 * @public (method)
		 * @returns {boolean|number}  
		 */
		getAlwaysOnTop? (): boolean | number;
		/** 
		 * Gets the x,y coordinates specified by the anchor position on the element.
		 * @method
		 * @public (method)
		 * @param   {string}   [anchor]
		 * The specified anchor position.
		 * See [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-alignTo) for details on supported anchor positions.
		 * @param   {boolean}  [local]
		 * True to get the local (element top/left-relative) anchor
		 * position instead of page coordinates
		 * @param   {object}   [size]
		 * An object containing the size to use for calculating anchor
		 * position {width: (target width), height: (target height)} (defaults to the
		 * element's current size)
		 * @returns {number[]}          [x, y] An array containing the element's x and y coordinates
		 */
		getAnchorXY? (anchor?: string, local?: boolean, size?: object): number[];
		/** 
		 * Returns the value of [ariaAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaAttributes).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAriaAttributes? (): object;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Return an object defining the area of this Element which can be passed to
		 * [setBox](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-setBox) to set another Element's size/location to match this element.
		 * @method
		 * @public (method)
		 * @param   {boolean} [contentBox]
		 * If true a box for the content of the element is
		 * returned.
		 * @param   {boolean} [local]
		 * If true the element's left and top relative to its
		 * `offsetParent` are returned instead of page x/y.
		 * @returns {object}               An object in the format
		 */
		getBox? (contentBox?: boolean, local?: boolean): object;
		/** 
		 * Returns the value of [childEls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.ElementContainer.html#cfg-childEls).
		 * @method
		 * @public (method)
		 * @returns {object|string[]|object[]}  
		 */
		getChildEls? (): object | string[] | object[];
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
		 * Returns the content region of this element for purposes of constraining or clipping floating
		 * children.  That is the region within the borders and scrollbars, but not within the padding.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		getConstrainRegion? (): void;
		/** 
		 * Returns the `[X, Y]` vector by which this Positionable's element must be translated to make a best
		 * attempt to constrain within the passed constraint. Returns `false` if the element
		 * does not need to be moved.
		 * 
		 * Priority is given to constraining the top and left within the constraint.
		 * 
		 * The constraint may either be an existing element into which the element is to be
		 * constrained, or a [Region](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Region.html) into which this element is to be
		 * constrained.
		 * 
		 * By default, any extra shadow around the element is **not** included in the constrain calculations - the edges
		 * of the element are used as the element bounds. To constrain the shadow within the constrain region, set the
		 * `constrainShadow` property on this element to `true`.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Positionable|HTMLElement|string|Ext.util.Region} [constrainTo]
		 * The
		 * Positionable, HTMLElement, element id, or Region into which the element is to be
		 * constrained.
		 * @param   {number[]}                                                 [proposedPosition]
		 * A proposed `[X, Y]` position to test for validity
		 * and to produce a vector for instead of using the element's current position
		 * @param   {number[]}                                                 [proposedSize]
		 * A proposed `[width, height]` size to constrain
		 * instead of using the element's current size
		 * @returns {number[]|boolean}                                         
		 * **If** the element _needs_ to be translated, an `[X, Y]`
		 * vector by which this element must be translated. Otherwise, `false`.
		 */
		getConstrainVector? (constrainTo?: Ext.util.Positionable | HTMLElement | string | Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]): number[] | boolean;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Retrieves the top level element representing this component.
		 * @method
		 * @public (method)
		 * @returns {Ext.dom.Element}  
		 */
		getEl? (): Ext.dom.Element;
		/** 
		 * Gets the current height of the component's underlying element.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getHeight? (): number;
		/** 
		 * Retrieves the `id` of this component. Will auto-generate an `id` if one has not already been set.
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getId? (): string;
		/** 
		 * This method returns an object containing the inherited properties for this instance.
		 * @method
		 * @public (method)
		 * @param   {boolean} [inner]
		 * Pass `true` to return `inheritedStateInner` instead
		 * of the normal `inheritedState` object. This is only needed internally and should
		 * not be passed by user code.
		 * @returns {object}          The `inheritedState` object containing inherited properties.
		 */
		getInherited? (inner?: boolean): object;
		/** 
		 * This method returns the value of a config property that may be inherited from some
		 * ancestor.
		 * 
		 * In some cases, a config may be explicitly set on a component with the intent of
		 * _only_ being presented to its children while that component should act upon the
		 * inherited value (see `referenceHolder` for example). In these cases the `skipThis`
		 * parameter should be specified as `true`.
		 * @method
		 * @public (method)
		 * @param   {string}  property   The name of the config property to return.
		 * @param   {boolean} [skipThis]
		 * Pass `true` if the property should be ignored if
		 * found on this instance. In other words, `true` means the property must be inherited
		 * and not explicitly set on this instance.
		 * @returns {any}                The value of the requested `property`.
		 */
		getInheritedConfig? (property: string, skipThis?: boolean): any;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) definition and instance:
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
		 * This function takes the position argument passed to onRender and returns a
		 * DOM element that you can use in the insertBefore.
		 * @method
		 * @public (method)
		 * @param   {string|number|Ext.dom.Element|HTMLElement} position
		 * Index, element id or element you want
		 * to put this component before.
		 * @returns {HTMLElement}                                        DOM element that you can use in the insertBefore
		 */
		getInsertPosition? (position: string | number | Ext.dom.Element | HTMLElement): HTMLElement;
		/** 
		 * Returns the value of [itemId](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-itemId) assigned to this component, or when that
		 * is not set, returns the value of [id](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-id).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getItemId? (): string;
		/** 
		 * Gets the [Ext.ComponentLoader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentLoader.html) for this Component.
		 * @method
		 * @public (method)
		 * @returns {Ext.ComponentLoader}  The loader instance, null if it doesn't exist.
		 */
		getLoader? (): Ext.ComponentLoader;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @public (method)
		 * @returns {number}  The local x coordinate
		 */
		getLocalX? (): number;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @public (method)
		 * @returns {number[]}  The local XY position of the element
		 */
		getLocalXY? (): number[];
		/** 
		 * Returns the y coordinate of this element reletive to its `offsetParent`.
		 * @method
		 * @public (method)
		 * @returns {number}  The local y coordinate
		 */
		getLocalY? (): number;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxHeight? (): number;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxWidth? (): number;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinHeight? (): number;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinWidth? (): number;
		/** 
		 * Returns the offsets of this element from the passed element. The element must both
		 * be part of the DOM tree and not have display:none to have page coordinates.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Positionable|HTMLElement|string} offsetsTo
		 * The Positionable,
		 * HTMLElement, or element id to get get the offsets from.
		 * @returns {number[]}                                           The XY page offsets (e.g. `[100, -200]`)
		 */
		getOffsetsTo? (offsetsTo: Ext.util.Positionable | HTMLElement | string): number[];
		/** 
		 * Retrieves a plugin from this component's collection by its `id`.
		 * 
		 *    var grid = Ext.create('Ext.grid.Panel', {
		 *        store: {
		 *            fields: ['name'],
		 *            data: [{
		 *                name: 'Scott Pilgrim'
		 *            }]
		 *        },
		 *        columns: [{
		 *            header: 'Name',
		 *            dataIndex: 'name',
		 *            editor: 'textfield',
		 *            flex: 1
		 *        }],
		 *        selType: 'cellmodel',
		 *        plugins: {
		 *            ptype: 'cellediting',
		 *            clicksToEdit: 1,
		 *            id: 'myplugin'
		 *        },
		 *        height: 200,
		 *        width: 400,
		 *        renderTo: Ext.getBody()
		 *    });
		 *    
		 *    grid.getPlugin('myplugin');  // the cellediting plugin
		 * 
		 * **Note:** See also [findPlugin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-findPlugin). Prior to 6.2.0 the plugin had to have a
		 * [`pluginId`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.plugin.Abstract.html#cfg-pluginId) property but this can now be just
		 * [`id`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.plugin.Abstract.html#cfg-id). Both are supported (so plugins with a
		 * matching `pluginId` are still found) but `id` is preferred.
		 * @method
		 * @public (method)
		 * @param   {string}              id The `id` set on the plugin config object.
		 * @returns {Ext.plugin.Abstract}    plugin instance or `null` if not found
		 */
		getPlugin? (id: string): Ext.plugin.Abstract;
		/** 
		 * Gets the current XY position of the component's underlying element.
		 * @method
		 * @public (method)
		 * @param   {boolean}  [local] If true the element's left and top are returned instead of page XY.
		 * @returns {number[]}         The XY position of the element (e.g., [100, 200])
		 */
		getPosition? (local?: boolean): number[];
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns a region object that defines the area of this element.
		 * @method
		 * @public (method)
		 * @param   {boolean}         [contentBox]
		 * If true a box for the content of the element is
		 * returned.
		 * @returns {Ext.util.Region}              A Region containing "top, left, bottom, right" properties.
		 */
		getRegion? (contentBox?: boolean): Ext.util.Region;
		/** 
		 * Returns the "x" scroll position for this component.  Only applicable for
		 * [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable) components
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getScrollX? (): number;
		/** 
		 * Returns the "y" scroll position for this component.  Only applicable for
		 * [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable) components
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getScrollY? (): number;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Gets the current size of the component's underlying element.
		 * @method
		 * @public (method)
		 * @param   {boolean} [contentSize] true to get the width/size minus borders and padding
		 * @returns {object}                An object containing the element's size:
		 */
		getSize? (contentSize?: boolean): object;
		/** 
		 * The supplied default state gathering method for the Component class.
		 * 
		 * This method returns dimension settings such as `flex`, `anchor`, `width` and `height` along with `collapsed`
		 * state.
		 * 
		 * Subclasses which implement more complex state should call the superclass's implementation, and apply their state
		 * to the result if this basic state is to be saved.
		 * 
		 * Note that Component state will only be saved if the Component has a [stateId](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-stateId) and there as a StateProvider
		 * configured for the document.
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getState? (): object;
		/** 
		 * Returns the value of [stateful](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateful).
		 * @method
		 * @public (method)
		 * @returns {boolean|object}  
		 */
		getStateful? (): boolean | object;
		/** 
		 * Retrieves the id of the SWF object/embed element.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		getSwfId? (): void;
		/** 
		 * Return the actual tabIndex for this Focusable.
		 * @method
		 * @public (method)
		 * @returns {number}  tabIndex attribute value
		 */
		getTabIndex? (): number;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns the **content** region of this element. That is the region within the borders
		 * and padding.
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Region}  A Region containing "top, left, bottom, right" member data.
		 */
		getViewRegion? (): Ext.util.Region;
		/** 
		 * Gets the current width of the component's underlying element.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getWidth? (): number;
		/** 
		 * Gets the current X position of the DOM element based on page coordinates.
		 * @method
		 * @public (method)
		 * @returns {number}  The X position of the element
		 */
		getX? (): number;
		/** 
		 * Gets the xtype for this component as registered with [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentManager.html). For a list of all available
		 * xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) header. Example usage:
		 * 
		 *    var t = new Ext.form.field.Text();
		 *    alert(t.getXType());  // alerts 'textfield'
		 * 
		 * @method
		 * @public (method)
		 * @returns {string}  The xtype
		 */
		getXType? (): string;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all available xtypes, see the
		 * [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) header.
		 * 
		 * **If using your own subclasses, be aware that a Component must register its own xtype to participate in
		 * determination of inherited xtypes.**
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.form.field.Text();
		 *    alert(t.getXTypes());  // alerts 'component/field/textfield'
		 * 
		 * @method
		 * @public (method)
		 * @returns {string}  The xtype hierarchy string
		 */
		getXTypes? (): string;
		/** 
		 * Gets the current position of the DOM element based on page coordinates.
		 * @method
		 * @public (method)
		 * @returns {number[]}  The XY position of the element
		 */
		getXY? (): number[];
		/** 
		 * Gets the current Y position of the DOM element based on page coordinates.
		 * @method
		 * @public (method)
		 * @returns {number}  The Y position of the element
		 */
		getY? (): number;
		/** 
		 * Returns the current animation if this object has any effects actively running or queued, else returns false.
		 * @method
		 * @public (method)
		 * @returns {Ext.fx.Anim|boolean}  Anim if element has active effects, else false
		 */
		hasActiveFx? (): Ext.fx.Anim | boolean;
		/** 
		 * Checks if the specified CSS class exists on this element's DOM node.
		 * @method
		 * @public (method)
		 * @param   {string}  className The CSS class to check for.
		 * @returns {boolean}           `true` if the class exists, else `false`.
		 */
		hasCls? (className: string): boolean;
		/** 
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Checks if there is currently a specified `uiCls`.
		 * @method
		 * @public (method)
		 * @param   {string} cls The `cls` to check.
		 * @returns {void}       
		 */
		hasUICls? (cls: string): void;
		/** 
		 * Hides this Component, setting it to invisible using the configured [hideMode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-hideMode).
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|Ext.dom.Element|Ext.Component} [animateTarget]
		 * **only valid for [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) Components
		 * such as [Window](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)s or [ToolTip](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tip.ToolTip.html)s, or regular Components which have
		 * been configured with `floating: true`.**. The target to which the Component should animate while hiding.
		 * @param   {Function}                             [callback]      A callback function to call after the Component is hidden.
		 * @param   {object}                               [scope]
		 * The scope (`this` reference) in which the callback is executed.
		 * Defaults to this Component.
		 * @returns {Ext.flash.Component|Ext.Component}                    this
		 */
		hide? (animateTarget?: string | Ext.dom.Element | Ext.Component, callback?: ExtGlobalFunction, scope?: object): Ext.flash.Component;
		hide? (animateTarget?: string | Ext.dom.Element | Ext.Component, callback?: ExtGlobalFunction, scope?: object): Ext.Component;
		/** 
		 * Tests whether this Component matches a [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html)
		 * selector string.
		 * @method
		 * @public (method)
		 * @param   {string}  selector The selector string to test against.
		 * @returns {boolean}          `true` if this Component matches the selector.
		 */
		is? (selector: string): boolean;
		/** 
		 * Determines whether **this Component** is an ancestor of the passed Component.
		 * This will return `true` if the passed Component is anywhere within the subtree
		 * beneath this Component.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} possibleDescendant
		 * The Component to test for presence
		 * within this Component's subtree.
		 * @returns {void}                             
		 */
		isAncestor? (possibleDescendant: Ext.Component): void;
		/** 
		 * Determines whether this component is the descendant of a passed component.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} ancestor A Component which may contain this Component.
		 * @returns {boolean}                `true` if the component is the descendant of the passed component, otherwise `false`.
		 */
		isDescendantOf? (ancestor: Ext.Component): boolean;
		/** 
		 * Method to determine whether this Component is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  the disabled state of this Component.
		 */
		isDisabled? (): boolean;
		/** 
		 * Method to determine whether this Component is draggable.
		 * @method
		 * @public (method)
		 * @returns {boolean}  the draggable state of this component.
		 */
		isDraggable? (): boolean;
		/** 
		 * Method to determine whether this Component is droppable.
		 * @method
		 * @public (method)
		 * @returns {boolean}  the droppable state of this component.
		 */
		isDroppable? (): boolean;
		/** 
		 * Method to determine whether this Component is floating.
		 * @method
		 * @public (method)
		 * @returns {boolean}  the floating state of this component.
		 */
		isFloating? (): boolean;
		/** 
		 * Determine if this Focusable can receive focus at this time.
		 * 
		 * Note that Containers can be non-focusable themselves while delegating
		 * focus treatment to a child Component; see
		 * [#defaultFocus](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html) for more information.
		 * @method
		 * @public (method)
		 * @param   {boolean} [deep]
		 * Optionally determine if the container itself
		 * is focusable, or if container's focus is delegated to a child component
		 * and that child is focusable.
		 * @returns {boolean}        True if component is focusable, false if not.
		 */
		isFocusable? (deep?: boolean): boolean;
		/** 
		 * Method to determine whether this Component is currently set to hidden.
		 * @method
		 * @public (method)
		 * @returns {boolean}  the hidden state of this Component.
		 */
		isHidden? (): boolean;
		/** 
		 * Returns `true` if layout is suspended for this component. This can come from direct
		 * suspension of this component's layout activity ([Ext.Container.suspendLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-suspendLayout)) or if one
		 * of this component's containers is suspended.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` layout of this component is suspended.
		 */
		isLayoutSuspended? (): boolean;
		/** 
		 * Returns masked state for this Component.
		 * @method
		 * @public (method)
		 * @param   {boolean} [deep] True to look up this Component's parent masked state.
		 * @returns {boolean}        True if masked, false otherwise.
		 */
		isMasked? (deep?: boolean): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Returns `true` if this component is visible.
		 * @method
		 * @public (method)
		 * @param   {boolean} [deep]
		 * Pass `true` to interrogate the visibility status of all parent Containers to
		 * determine whether this Component is truly visible to the user.
		 * 
		 * Generally, to determine whether a Component is hidden, the no argument form is needed. For example when creating
		 * dynamically laid out UIs in a hidden Container before showing them.
		 * @returns {boolean}        `true` if this component is visible, `false` otherwise.
		 */
		isVisible? (deep?: boolean): boolean;
		/** 
		 * Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
		 * from the xtype (default) or whether it is directly of the xtype specified (`shallow = true`).
		 * 
		 * **If using your own subclasses, be aware that a Component must register its own xtype to participate in
		 * determination of inherited xtypes.**
		 * 
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) header.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.form.field.Text();
		 *    var isText = t.isXType('textfield');        // true
		 *    var isBoxSubclass = t.isXType('field');       // true, descended from Ext.form.field.Base
		 *    var isBoxInstance = t.isXType('field', true); // false, not a direct Ext.form.field.Base instance
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}  xtype     The xtype to check for this Component
		 * @param   {boolean} [shallow]
		 * `true` to check whether this Component is directly of the specified xtype, `false` to
		 * check whether this Component is descended from the xtype.
		 * @returns {boolean}           `true` if this component descends from the specified xtype, `false` otherwise.
		 */
		isXType? (xtype: string, shallow?: boolean): boolean;
		/** 
		 * Gets the controller that controls this view. May be a controller that belongs
		 * to a view higher in the hierarchy.
		 * @method
		 * @public (method)
		 * @param   {boolean}                [skipThis]
		 * `true` to not consider the controller directly attached
		 * to this view (if it exists).
		 * @returns {Ext.app.ViewController}            The controller. `null` if no controller is found.
		 */
		lookupController? (skipThis?: boolean): Ext.app.ViewController;
		/** 
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Gets a named template instance for this class. See [Ext.XTemplate.getTpl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.XTemplate.html#static-method-getTpl).
		 * @method
		 * @public (method)
		 * @param   {string}        name The name of the property that holds the template.
		 * @returns {Ext.XTemplate}      The template, `null` if not found.
		 */
		lookupTpl? (name: string): Ext.XTemplate;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Masks this component with a semi-opaque layer and makes the contents unavailable to clicks.
		 * 
		 * See [unmask](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-unmask).
		 * @method
		 * @public (method)
		 * @param   {string} [msg]    A message to show in the center of the mask layer.
		 * @param   {string} [msgCls] A CSS class name to use on the message element in the center of the layer.
		 * @returns {void}            
		 */
		mask? (msg?: string, msgCls?: string): void;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-addManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item      The item to which to add a listener/listeners.
		 * @param   {object|string}                       ename     The event name, or an object containing event name properties.
		 * @param   {Function|string}                     [fn]
		 * If the `ename` parameter was an event
		 * name, this is the handler function or the name of a method on the specified
		 * `scope`.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @param   {object}                              [options]
		 * If the `ename` parameter was an event name, this is the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) options.
		 * @returns {object}                              
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes all listeners added in this call. For example:
		 * 
		 *    this.btnListeners = myButton.mon({
		 *        destroyable: true
		 *        mouseover:   function() { console.log('mouseover'); },
		 *        mouseout:    function() { console.log('mouseout'); },
		 *        click:       function() { console.log('click'); }
		 *    });
		 * 
		 * And when those listeners need to be removed:
		 * 
		 *    Ext.destroy(this.btnListeners);
		 * 
		 * or
		 * 
		 *    this.btnListeners.destroy();
		 * 
		 */
		mon? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction | string, scope?: object, options?: object): object;
		/** 
		 * Move the element relative to its current position.
		 * @method
		 * @public (method)
		 * @param   {string} direction
		 * Possible values are:
		 * 
		 * - `"l"` (or `"left"`)
		 * - `"r"` (or `"right"`)
		 * - `"t"` (or `"top"`, or `"up"`)
		 * - `"b"` (or `"bottom"`, or `"down"`)
		 * @param   {number} distance  How far to move the element in pixels
		 * @returns {void}             
		 */
		move? (direction: string, distance: number): void;
		/** 
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-removeManagedListener).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		mun? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Returns the next node in the Component tree in tree traversal order.
		 * 
		 * Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will walk the
		 * tree to attempt to find a match. Contrast with [nextSibling](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-nextSibling).
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] A [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html) selector to filter the following nodes.
		 * @returns {Ext.Component} 
		 * The next node (or the next node which matches the selector).
		 * Returns `null` if there is no matching node.
		 */
		nextNode? (selector?: string): Ext.Component;
		/** 
		 * Returns the next sibling of this Component.
		 * 
		 * Optionally selects the next sibling which matches the passed [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html) selector.
		 * 
		 * May also be referred to as **`next()`**
		 * 
		 * Note that this is limited to siblings, and if no siblings of the item match, `null` is returned. Contrast with
		 * [nextNode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-nextNode)
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] A [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html) selector to filter the following items.
		 * @returns {Ext.Component} 
		 * The next sibling (or the next sibling which matches the selector).
		 * Returns `null` if there is no matching sibling.
		 */
		nextSibling? (selector?: string): Ext.Component;
		/** 
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Appends a before-event handler.  Returning `false` from the handler will stop the event.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) with `order` set
		 * to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event to listen for.
		 * @param   {Function|string}        fn        The method the event invokes.
		 * @param   {object}                 [scope]   The scope for `fn`.
		 * @param   {object}                 [options] An object containing handler configuration.
		 * @returns {void}                             
		 */
		onBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Called when this Inheritable is added to a parent
		 * @method
		 * @public (method)
		 * @param   {boolean} instanced
		 * @returns {void}              
		 */
		onInheritedAdd? (instanced: boolean): void;
		/** 
		 * Called when this inheritable is removed from a parent
		 * @method
		 * @public (method)
		 * @param   {boolean} destroying `true` if this item will be destroyed by it's container
		 * @returns {void}               
		 */
		onInheritedRemove? (destroying: boolean): void;
		/** 
		 * Returns the previous node in the Component tree in tree traversal order.
		 * 
		 * Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will walk the
		 * tree in reverse order to attempt to find a match. Contrast with [previousSibling](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-previousSibling).
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] A [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html) selector to filter the preceding nodes.
		 * @returns {Ext.Component} 
		 * The previous node (or the previous node which matches the selector).
		 * Returns `null` if there is no matching node.
		 */
		previousNode? (selector?: string): Ext.Component;
		/** 
		 * Returns the previous sibling of this Component.
		 * 
		 * Optionally selects the previous sibling which matches the passed [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html)
		 * selector.
		 * 
		 * May also be referred to as **`prev()`**
		 * 
		 * Note that this is limited to siblings, and if no siblings of the item match, `null` is returned. Contrast with
		 * [previousNode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-previousNode)
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] A [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html) selector to filter the preceding items.
		 * @returns {Ext.Component} 
		 * The previous sibling (or the previous sibling which matches the selector).
		 * Returns `null` if there is no matching sibling.
		 */
		previousSibling? (selector?: string): Ext.Component;
		/** 
		 * Called by Component#doAutoRender
		 * 
		 * Register a Container configured `floating: true` with this Component's [ZIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ZIndexManager.html).
		 * 
		 * Components added in this way will not participate in any layout, but will be rendered
		 * upon first show in the way that [Window](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)s are.
		 * @method
		 * @public (method)
		 * @param   {object} cmp
		 * @returns {void}       
		 */
		registerFloatingItem? (cmp: object): void;
		/** 
		 * Relays selected events from the specified Observable as if the events were fired by `this`.
		 * 
		 * For example if you are extending Grid, you might decide to forward some events from store.
		 * So you can do this inside your initComponent:
		 * 
		 *    this.relayEvents(this.getStore(), ['load']);
		 * 
		 * The grid instance will then have an observable 'load' event which will be passed
		 * the parameters of the store's load event and any function fired with the grid's
		 * load event would have access to the grid using the this keyword (unless the event
		 * is handled by a controller's control/listen event listener in which case 'this'
		 * will be the controller rather than the grid).
		 * @method
		 * @public (method)
		 * @param   {object}          origin   The Observable whose events this object is to relay.
		 * @param   {string[]|object} events
		 * Array of event names to relay or an Object with key/value
		 * pairs translating to ActualEventName/NewEventName respectively. For example:
		 *     this.relayEvents(this, {add:'push', remove:'pop'});
		 * 
		 * Would now redispatch the add event of this as a push event and the remove event as a pop event.
		 * @param   {string}          [prefix]
		 * A common prefix to prepend to the event names. For example:
		 * 
		 *    this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Now the grid will forward 'load' and 'clear' events of store as 'storeload' and 'storeclear'.
		 * @returns {object}          
		 * A `Destroyable` object. An object which implements the `destroy` method which, when destroyed, removes all relayers. For example:
		 * 
		 *    this.storeRelayers = this.relayEvents(this.getStore(), ['load', 'clear'], 'store');
		 * 
		 * Can be undone by calling
		 * 
		 *    Ext.destroy(this.storeRelayers);
		 * 
		 * or
		 *     this.store.relayers.destroy();
		 */
		relayEvents? (origin: object, events: string[] | object, prefix?: string): object;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes a CSS class from the top level element representing this component.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The CSS class name to remove.
		 * @returns {Ext.Component}       Returns the Component to allow method chaining.
		 */
		removeClass? (cls: string | string[]): Ext.Component;
		/** 
		 * Removes a CSS class from the top level element representing this component.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The CSS class name to remove.
		 * @returns {Ext.Component}       Returns the Component to allow method chaining.
		 */
		removeCls? (cls: string | string[]): Ext.Component;
		/** 
		 * Removes a `cls` to the `uiCls` array, which will also call [removeUIClsFromElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-removeUIClsFromElement) and removes it from all
		 * elements of this component.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls A string or an array of strings to remove to the `uiCls`.
		 * @returns {void}                
		 */
		removeClsWithUI? (cls: string | string[]): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		removeListener? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-mon) method.
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Observable|Ext.dom.Element} item    The item from which to remove a listener/listeners.
		 * @param   {object|string}                       ename   The event name, or an object containing event name properties.
		 * @param   {Function}                            [fn]    If the `ename` parameter was an event name, this is the handler function.
		 * @param   {object}                              [scope]
		 * If the `ename` parameter was an event name, this is the scope (`this` reference)
		 * in which the handler function is executed.
		 * @returns {void}                                        
		 */
		removeManagedListener? (item: Ext.util.Observable | Ext.dom.Element, ename: object | string, fn?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Renders the Component into the passed HTML element.
		 * 
		 * **If you are using a [Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html) object to house this
		 * Component, then do not use the render method.**
		 * 
		 * A Container's child Components are rendered by that Container's
		 * [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-layout) manager when the Container is first rendered.
		 * 
		 * When creating complex UIs, it is important to remember that sizing and positioning
		 * of child items is the responsibility of the Container's [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-layout)
		 * manager.  If you expect child items to be sized in response to user interactions, you must
		 * configure the Container with a layout manager which creates and manages the type of layout you
		 * have in mind.
		 * 
		 * **Omitting the Container's [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-layout) config means that a basic
		 * layout manager is used which does nothing but render child components sequentially into the
		 * Container. No sizing or positioning will be performed in this situation.**
		 * @method
		 * @public (method)
		 * @param   {Ext.dom.Element|HTMLElement|string} [container]
		 * The element this Component should be
		 * rendered into. If it is being created from existing markup, this should be omitted.
		 * @param   {string|number}                      [position]
		 * The element ID or DOM node index within the container **before**
		 * which this component will be inserted (defaults to appending to the end of the container)
		 * @returns {void}                                           
		 */
		render? (container?: Ext.dom.Element | HTMLElement | string, position?: string | number): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeEvent? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Conditionally saves a single property from this object to the given state object.
		 * The idea is to only save state which has changed from the initial state so that
		 * current software settings do not override future software settings. Only those
		 * values that are user-changed state should be saved.
		 * @method
		 * @public (method)
		 * @param   {string}  propName    The name of the property to save.
		 * @param   {object}  state       The state object in to which to save the property.
		 * @param   {string}  [stateName] The name to use for the property in state.
		 * @returns {boolean}             True if the property was saved, false if not.
		 */
		savePropToState? (propName: string, state: object, stateName?: string): boolean;
		/** 
		 * Gathers additional named properties of the instance and adds their current values
		 * to the passed state object.
		 * @method
		 * @public (method)
		 * @param   {string|string[]} propNames The name (or array of names) of the property to save.
		 * @param   {object}          state     The state object in to which to save the property values.
		 * @returns {object}                    state
		 */
		savePropsToState? (propNames: string | string[], state: object): object;
		/** 
		 * Saves the state of the object to the persistence store.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		saveState? (): void;
		/** 
		 * Scrolls this Component by the passed delta values, optionally animating.
		 * 
		 * All of the following are equivalent:
		 * 
		 *     comp.scrollBy(10, 10, true);
		 *     comp.scrollBy([10, 10], true);
		 *     comp.scrollBy({ x: 10, y: 10 }, true);
		 * 
		 * @method
		 * @public (method)
		 * @param   {number|number[]|object} deltaX
		 * Either the x delta, an Array specifying x and y deltas or
		 * an object with "x" and "y" properties.
		 * @param   {number|boolean|object}  deltaY  Either the y delta, or an animate flag or config object.
		 * @param   {boolean|object}         animate Animate flag/config object if the delta values were passed separately.
		 * @returns {void}                           
		 */
		scrollBy? (deltaX: number | number[] | object, deltaY: number | boolean | object, animate: boolean | object): void;
		/** 
		 * Scrolls this component to the specified `x` and `y` coordinates.  Only applicable
		 * for [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable) components.
		 * @method
		 * @public (method)
		 * @param   {number}         x
		 * @param   {number}         y
		 * @param   {boolean|object} [animate]
		 * true for the default animation or a standard Element
		 * animation config object
		 * @returns {void}                     
		 */
		scrollTo? (x: number, y: number, animate?: boolean | object): void;
		/** 
		 * Ensures that all effects queued after sequenceFx is called on this object are run in sequence. This is the
		 * opposite of [syncFx](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Animate.html#method-syncFx).
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.flash.Component|Ext.Component}  this
		 */
		sequenceFx? (): Ext.flash.Component;
		sequenceFx? (): Ext.Component;
		/** 
		 * Sets the value of [alwaysOnTop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#cfg-alwaysOnTop).
		 * @method
		 * @public (method)
		 * @param   {boolean|number} alwaysOnTop The new value.
		 * @returns {void}                       
		 */
		setAlwaysOnTop? (alwaysOnTop: boolean | number): void;
		/** 
		 * Sets the value of [ariaAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaAttributes).
		 * @method
		 * @public (method)
		 * @param   {object} ariaAttributes The new value.
		 * @returns {void}                  
		 */
		setAriaAttributes? (ariaAttributes: object): void;
		/** 
		 * Sets the overflow on the content element of the component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                           scroll True to allow the Component to auto scroll.
		 * @returns {Ext.flash.Component|Ext.Component}        this
		 */
		setAutoScroll? (scroll: boolean): Ext.flash.Component;
		setAutoScroll? (scroll: boolean): Ext.Component;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {string|number} border
		 * The border, see [border](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-border). If a falsey value is passed
		 * the border will be removed.
		 * @returns {void}                 
		 */
		setBorder? (border: string | number): void;
		/** 
		 * Sets the element's box.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}                            box The box to fill {x, y, width, height}
		 * @returns {Ext.flash.Component|Ext.Component}     this
		 */
		setBox? (box: object): Ext.flash.Component;
		setBox? (box: object): Ext.Component;
		/** 
		 * Sets the value of [childEls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.ElementContainer.html#cfg-childEls).
		 * @method
		 * @public (method)
		 * @param   {object|string[]|object[]} childEls The new value.
		 * @returns {void}                              
		 */
		setChildEls? (childEls: object | string[] | object[]): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                     [value] The value to set for the name parameter.
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.flash.Component;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Enable or disable the component.
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled `true` to disable.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the dock position of this component in its parent panel. Note that this only has effect if this item is part
		 * of the `dockedItems` collection of a parent that has a DockLayout (note that any Panel has a DockLayout by default)
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}                            dock The dock position.
		 * @returns {Ext.flash.Component|Ext.Component}      this
		 */
		setDock? (dock: object): Ext.flash.Component;
		setDock? (dock: object): Ext.Component;
		/** 
		 * Sets the dock position of this component in its parent panel. Note that this only has effect if this item is part
		 * of the `dockedItems` collection of a parent that has a DockLayout (note that any Panel has a DockLayout by default)
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}                            dock The dock position.
		 * @returns {Ext.flash.Component|Ext.Component}      this
		 */
		setDocked? (dock: object): Ext.flash.Component;
		setDocked? (dock: object): Ext.Component;
		/** 
		 * Sets the height of the component. This method fires the [resize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-resize) event.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}                            height
		 * The new height to set. This may be one of:
		 * 
		 * - A Number specifying the new height in pixels.
		 * - A String used to set the CSS height style.
		 * - `undefined` to leave the height unchanged.
		 * - `null` to clear the height.
		 * @returns {Ext.flash.Component|Ext.Component}        this
		 */
		setHeight? (height: number): Ext.flash.Component;
		setHeight? (height: number): Ext.Component;
		/** 
		 * Sets the hidden state of this component. This is basically the same as
		 * [`setVisible`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setVisible) but the boolean parameter has the opposite meaning.
		 * @method
		 * @public (method)
		 * @param   {boolean}       hidden
		 * @returns {Ext.Component}        
		 */
		setHidden? (hidden: boolean): Ext.Component;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * This method allows you to show or hide a LoadMask on top of this component.
		 * 
		 * The mask will be rendered into the element returned by [getMaskTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getMaskTarget) which for most Components is the Component's
		 * element. See [getMaskTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getMaskTarget) and [maskElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maskElement).
		 * 
		 * Most Components will return `null` indicating that their LoadMask cannot reside inside their element, but must
		 * be rendered into the document body.
		 * 
		 * [Grid Views](https://docs.sencha.com/extjs/6.2.0/classic/Ext.view.Table.html) however will direct a LoadMask to be rendered into the owning [GridPanel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Table.html).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|string} load
		 * True to show the default LoadMask, a config object that will be passed to the
		 * LoadMask constructor, or a message String to show. False to hide the current LoadMask.
		 * @returns {Ext.LoadMask}               The LoadMask instance that has just been shown.
		 */
		setLoading? (load: boolean | object | string): Ext.LoadMask;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @public (method)
		 * @param   {object}                x
		 * @returns {Ext.util.Positionable}   this
		 */
		setLocalX? (x: object): Ext.util.Positionable;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @public (method)
		 * @param   {object}                x
		 * @param   {object}                y
		 * @returns {Ext.util.Positionable}   this
		 */
		setLocalXY? (x: object, y: object): Ext.util.Positionable;
		/** 
		 * Sets the local y coordinate of this element using CSS style. When used on an
		 * absolute positioned element this method is symmetrical with [getLocalY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getLocalY), but
		 * may not be symmetrical when used on a relatively positioned element.
		 * @method
		 * @public (method)
		 * @param   {object}                y
		 * @returns {Ext.util.Positionable}   this
		 */
		setLocalY? (y: object): Ext.util.Positionable;
		/** 
		 * Sets the margin on the target element.
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The margin to set. See the [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-margin) config.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number} maxHeight The new value.
		 * @returns {void}             
		 */
		setMaxHeight? (maxHeight: number): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number} maxWidth The new value.
		 * @returns {void}            
		 */
		setMaxWidth? (maxWidth: number): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number} minHeight The new value.
		 * @returns {void}             
		 */
		setMinHeight? (minHeight: number): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number} minWidth The new value.
		 * @returns {void}            
		 */
		setMinWidth? (minWidth: number): void;
		/** 
		 * Sets the overflow x/y on the content element of the component. The x/y overflow
		 * values can be any valid CSS overflow (e.g., 'auto' or 'scroll'). By default, the
		 * value is 'hidden'.  Passing `undefined` will preserve the current value.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                            overflowX The overflow-x value.
		 * @param   {string}                            overflowY The overflow-y value.
		 * @returns {Ext.flash.Component|Ext.Component}           this
		 */
		setOverflowXY? (overflowX: string, overflowY: string): Ext.flash.Component;
		setOverflowXY? (overflowX: string, overflowY: string): Ext.Component;
		/** 
		 * Sets the page XY position of the component. To set the left and top instead, use [setPosition](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setPosition).
		 * This method fires the [move](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-move) event.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number|number[]}                   x         The new x position or an array of `[x,y]`.
		 * @param   {number}                            [y]       The new y position.
		 * @param   {boolean|object}                    [animate]
		 * True to animate the Component into its new position. You may also pass an
		 * animation configuration.
		 * @returns {Ext.flash.Component|Ext.Component}           this
		 */
		setPagePosition? (x: number | number[], y?: number, animate?: boolean | object): Ext.flash.Component;
		setPagePosition? (x: number | number[], y?: number, animate?: boolean | object): Ext.Component;
		/** 
		 * Sets the left and top of the component. To set the page XY position instead, use [setPagePosition](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setPagePosition). This
		 * method fires the [move](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-move) event.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number|number[]|object}            x         The new left, an array of `[x,y]`, or animation config object containing `x` and `y` properties.
		 * @param   {number}                            [y]       The new top.
		 * @param   {boolean|object}                    [animate]
		 * If `true`, the Component is _animated_ into its new position. You may also pass an
		 * animation configuration.
		 * @returns {Ext.flash.Component|Ext.Component}           this
		 */
		setPosition? (x: number | number[] | object, y?: number, animate?: boolean | object): Ext.flash.Component;
		setPosition? (x: number | number[] | object, y?: number, animate?: boolean | object): Ext.Component;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * This method changes the `region` config property for this border region. This is
		 * only valid if this component is in a `border` layout ([`Ext.layout.container.Border`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html)).
		 * 
		 * **Defined in override Ext.layout.container.border.Region.**
		 * @method
		 * @public (method)
		 * @param   {string} region
		 * The new `region` value (`"north"`, `"south"`, `"east"` or
		 * `"west"`).
		 * @returns {string}        The previous value of the `region` property.
		 */
		setRegion? (region: string): string;
		/** 
		 * Sets the "x" scroll position for this component.  Only applicable for
		 * [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable) components
		 * @method
		 * @public (method)
		 * @param   {number}         x
		 * @param   {boolean|object} [animate]
		 * true for the default animation or a standard Element
		 * animation config object
		 * @returns {void}                     
		 */
		setScrollX? (x: number, animate?: boolean | object): void;
		/** 
		 * Sets the "y" scroll position for this component.  Only applicable for
		 * [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable) components
		 * @method
		 * @public (method)
		 * @param   {number}         y
		 * @param   {boolean|object} [animate]
		 * true for the default animation or a standard Element
		 * animation config object
		 * @returns {void}                     
		 */
		setScrollY? (y: number, animate?: boolean | object): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the width and height of this Component. This method fires the [resize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-resize) event. This method can accept
		 * either width and height as separate arguments, or you can pass a size object like `{width:10, height:20}`.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number|string|object}              width
		 * The new width to set. This may be one of:
		 * 
		 * - A Number specifying the new width in pixels.
		 * - A String used to set the CSS width style.
		 * - A size object in the format `{width: widthValue, height: heightValue}`.
		 * - `undefined` to leave the width unchanged.
		 * @param   {number|string}                     height
		 * The new height to set (not required if a size object is passed as the first arg).
		 * This may be one of:
		 * 
		 * - A Number specifying the new height in pixels.
		 * - A String used to set the CSS height style. Animation may **not** be used.
		 * - `undefined` to leave the height unchanged.
		 * @returns {Ext.flash.Component|Ext.Component}        this
		 */
		setSize? (width: number | string | object, height: number | string): Ext.flash.Component;
		setSize? (width: number | string | object, height: number | string): Ext.Component;
		/** 
		 * Sets the value of [stateful](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateful).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} stateful The new value.
		 * @returns {void}                    
		 */
		setStateful? (stateful: boolean | object): void;
		/** 
		 * Sets the style for this Component's primary element.
		 * 
		 * Styles should be a valid DOM element style property.
		 * [Valid style property names](http://www.w3schools.com/jsref/dom_obj_style.asp)
		 * (_along with the supported CSS version for each_)
		 * 
		 *    var name = Ext.create({
		 *        xtype: 'component',
		 *        renderTo: Ext.getBody(),
		 *        html: 'Phineas Flynn'
		 *    });
		 *    
		 *    // two-param syntax
		 *    name.setStyle('color', 'white');
		 *    
		 *    // single-param syntax
		 *    name.setStyle({
		 *        fontWeight: 'bold',
		 *        backgroundColor: 'gray',
		 *        padding: '10px'
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                     property
		 * The style property to be set, or an object of
		 * multiple styles.
		 * @param   {string}                            [value]
		 * The value to apply to the given property, or null if an
		 * object was passed.
		 * @returns {Ext.flash.Component|Ext.Component}          this
		 */
		setStyle? (property: string | object, value?: string): Ext.flash.Component;
		setStyle? (property: string | object, value?: string): Ext.Component;
		/** 
		 * Set the tabIndex property for this Focusable. If the focusEl
		 * is available, set tabIndex attribute on it, too.
		 * @method
		 * @public (method)
		 * @param   {number} newTabIndex new tabIndex to set
		 * @returns {void}               
		 */
		setTabIndex? (newTabIndex: number): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the UI for the component. This will remove any existing UIs on the component. It will also loop through any
		 * `uiCls` set on the component and rename them so they include the new UI.
		 * @method
		 * @public (method)
		 * @param   {string} ui The new UI for the component.
		 * @returns {void}      
		 */
		setUI? (ui: string): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Convenience function to hide or show this component by Boolean.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                           visible `true` to show, `false` to hide.
		 * @returns {Ext.flash.Component|Ext.Component}         this
		 */
		setVisible? (visible: boolean): Ext.flash.Component;
		setVisible? (visible: boolean): Ext.Component;
		/** 
		 * Sets the `weight` config property for this component. This is only valid if this
		 * component is in a `border` layout ([`Ext.layout.container.Border`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html)).
		 * 
		 * **Defined in override Ext.layout.container.border.Region.**
		 * @method
		 * @public (method)
		 * @param   {number} weight The new `weight` value.
		 * @returns {number}        The previous value of the `weight` property.
		 */
		setWeight? (weight: number): number;
		/** 
		 * Sets the width of the component. This method fires the [resize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-resize) event.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}                            width
		 * The new width to set. This may be one of:
		 * 
		 * - A Number specifying the new width in pixels.
		 * - A String used to set the CSS width style.
		 * - `undefined` to leave the width unchanged.
		 * - `null` to clear the width.
		 * @returns {Ext.flash.Component|Ext.Component}       this
		 */
		setWidth? (width: number): Ext.flash.Component;
		setWidth? (width: number): Ext.Component;
		/** 
		 * Sets the X position of the DOM element based on page coordinates.
		 * @method
		 * @public (method)
		 * @param   {object}                x
		 * @param   {object}                animate
		 * @returns {Ext.util.Positionable}         this
		 */
		setX? (x: object, animate: object): Ext.util.Positionable;
		/** 
		 * Sets the position of the DOM element in page coordinates.
		 * @method
		 * @public (method)
		 * @param   {object}                xy
		 * @param   {object}                animate
		 * @returns {Ext.util.Positionable}         this
		 */
		setXY? (xy: object, animate: object): Ext.util.Positionable;
		/** 
		 * Sets the Y position of the DOM element based on page coordinates.
		 * @method
		 * @public (method)
		 * @param   {object}                y
		 * @param   {object}                animate
		 * @returns {Ext.util.Positionable}         this
		 */
		setY? (y: object, animate: object): Ext.util.Positionable;
		/** 
		 * Shows this Component, rendering it first if [autoRender](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-autoRender) or [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) are `true`.
		 * 
		 * After being shown, a [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) Component (such as a [Ext.window.Window](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)), is activated it and
		 * brought to the front of its [z-index stack](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-zIndexManager).
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|Ext.dom.Element}            [animateTarget]
		 * **only valid for [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) Components such as [Window](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)s or [ToolTip](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tip.ToolTip.html)s, or regular Components which have been configured
		 * with `floating: true`.** The target from which the Component should animate from while opening.
		 * @param   {Function}                          [callback]
		 * A callback function to call after the Component is displayed.
		 * Only necessary if animation was specified.
		 * @param   {object}                            [scope]
		 * The scope (`this` reference) in which the callback is executed.
		 * Defaults to this Component.
		 * @returns {Ext.flash.Component|Ext.Component}                 this
		 */
		show? (animateTarget?: string | Ext.dom.Element, callback?: ExtGlobalFunction, scope?: object): Ext.flash.Component;
		show? (animateTarget?: string | Ext.dom.Element, callback?: ExtGlobalFunction, scope?: object): Ext.Component;
		/** 
		 * Displays component at specific xy position.
		 * A floating component (like a menu) is positioned relative to its ownerCt if any.
		 * Useful for popping up a context menu:
		 * 
		 *    listeners: {
		 *        itemcontextmenu: function(view, record, item, index, event, options) {
		 *            Ext.create('Ext.menu.Menu', {
		 *                width: 100,
		 *                height: 100,
		 *                margin: '0 0 10 0',
		 *                items: [{
		 *                    text: 'regular item 1'
		 *                },{
		 *                    text: 'regular item 2'
		 *                },{
		 *                    text: 'regular item 3'
		 *                }]
		 *            }).showAt(event.getXY());
		 *        }
		 *    }
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number|number[]}                   x         The new x position or array of `[x,y]`.
		 * @param   {number}                            [y]       The new y position
		 * @param   {boolean|object}                    [animate]
		 * True to animate the Component into its new position. You may also pass an
		 * animation configuration.
		 * @returns {Ext.flash.Component|Ext.Component}           this
		 */
		showAt? (x: number | number[], y?: number, animate?: boolean | object): Ext.flash.Component;
		showAt? (x: number | number[], y?: number, animate?: boolean | object): Ext.Component;
		/** 
		 * Shows this component by the specified [Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) or [Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).
		 * Used when this component is [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.Component|Ext.dom.Element}     component  The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) or [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) to show the component by.
		 * @param   {string}                            [position]
		 * Alignment position as used by [Ext.util.Positionable.getAlignToXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-getAlignToXY).
		 * Defaults to [`defaultAlign`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-defaultAlign). See [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-alignTo) for possible values.
		 * @param   {number[]}                          [offsets]  Alignment offsets as used by [Ext.util.Positionable.getAlignToXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-getAlignToXY). See [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-alignTo) for possible values.
		 * @returns {Ext.flash.Component|Ext.Component}            this
		 */
		showBy? (component: Ext.Component | Ext.dom.Element, position?: string, offsets?: number[]): Ext.flash.Component;
		showBy? (component: Ext.Component | Ext.dom.Element, position?: string, offsets?: number[]): Ext.Component;
		/** 
		 * Stops any running effects and clears this object's internal effects queue if it contains any additional effects
		 * that haven't started yet.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}                            suppressEvent
		 * @returns {Ext.flash.Component|Ext.Component}               The Element
		 */
		stopAnimation? (suppressEvent: object): Ext.flash.Component;
		stopAnimation? (suppressEvent: object): Ext.Component;
		/** 
		 * Stops any running effects and clears this object's internal effects queue if it contains any additional effects
		 * that haven't started yet.
		 * @method
		 * @public (method)
		 * @returns {Ext.dom.Element}  The Element
		 */
		stopFx? (): Ext.dom.Element;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendEvent? (): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Ensures that all effects queued after syncFx is called on this object are run concurrently. This is the opposite
		 * of [sequenceFx](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Animate.html#method-sequenceFx).
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.flash.Component|Ext.Component}  this
		 */
		syncFx? (): Ext.flash.Component;
		syncFx? (): Ext.Component;
		/** 
		 * Sends this Component to the back of (lower z-index than) any other visible windows
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.flash.Component|Ext.Component}  this
		 */
		toBack? (): Ext.flash.Component;
		toBack? (): Ext.Component;
		/** 
		 * Brings this floating Component to the front of any other visible, floating Components managed by the same
		 * [ZIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ZIndexManager.html)
		 * 
		 * If this Component is modal, inserts the modal mask just below this Component in the z-index stack.
		 * @method
		 * @public (method)
		 * @param   {boolean}       [preventFocus] Specify `true` to prevent the Component from being focused.
		 * @returns {Ext.Component}                this
		 */
		toFront? (preventFocus?: boolean): Ext.Component;
		/** 
		 * Toggles the specified CSS class on this component (removes it if it already exists,
		 * otherwise adds it).
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                            className The CSS class to toggle.
		 * @param   {boolean}                           [state]
		 * If specified as `true`, causes the class to be added. If
		 * specified as `false`, causes the class to be removed.
		 * @returns {Ext.flash.Component|Ext.Component}           Returns the Component to allow method chaining.
		 */
		toggleCls? (className: string, state?: boolean): Ext.flash.Component;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		/** 
		 * Translates the passed page coordinates into left/top css values for the element
		 * @method
		 * @public (method)
		 * @param   {number|any[]} x   The page x or an array containing [x, y]
		 * @param   {number}       [y] The page y, required if x is not an array
		 * @returns {object}       
		 * An object with left and top properties. e.g.
		 * {left: (value), top: (value)}
		 */
		translatePoints? (x: number | any[], y?: number): object;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener)
		 * `destroyable: true` config option in place of calling un().  For example:
		 * 
		 *    var listeners = cmp.on({
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide,
		 *        destroyable: true
		 *    });
		 *    
		 *    // Remove listeners
		 *    listeners.destroy();
		 *    // or
		 *    cmp.un(
		 *        scope: cmp,
		 *        afterrender: cmp.onAfterrender,
		 *        beforehide: cmp.onBeforeHide
		 *    );
		 * 
		 * **Exception - DOM event handlers using the element config option**
		 * 
		 * You must go directly through the element to detach an event handler attached using
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) _element_ option.
		 * 
		 *    panel.on({
		 *        element: 'body',
		 *        click: 'onBodyCLick'
		 *    });
		 *    
		 *    panel.body.un({
		 *        click: 'onBodyCLick'
		 *    });
		 * 
		 * @returns {void}               
		 */
		un? (eventName: string, fn: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unAfter? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes a before-event handler.
		 * 
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} eventName The name of the event the handler was associated with.
		 * @param   {Function|string}        fn        The handler to remove.
		 * @param   {object}                 [scope]   The scope originally specified for `fn`.
		 * @param   {object}                 [options] Extra options object.
		 * @returns {void}                             
		 */
		unBefore? (eventName: string | string[] | object, fn: ExtGlobalFunction | string, scope?: object, options?: object): void;
		/** 
		 * Removes the mask applied by [mask](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-mask)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		unmask? (): void;
		/** 
		 * Navigates up the ownership hierarchy searching for an ancestor Container which matches any passed selector or component.
		 * 
		 * _Important._ There is not a universal upwards navigation pointer. There are several upwards relationships
		 * such as the [button](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) which activates a [menu](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html#cfg-menu), or the
		 * [menu item](https://docs.sencha.com/extjs/6.2.0/classic/Ext.menu.Item.html) which activated a [submenu](https://docs.sencha.com/extjs/6.2.0/classic/Ext.menu.Item.html#cfg-menu), or the
		 * [column header](https://docs.sencha.com/extjs/6.2.0/classic/Ext.grid.column.Column.html) which activated the column menu.
		 * 
		 * These differences are abstracted away by this method.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Component}        [selector] The selector component or actual component to test. If not passed the immediate owner/activator is returned.
		 * @param   {string|number|Ext.Component} [limit]    This may be a selector upon which to stop the upward scan, or a limit of the number of steps, or Component reference to stop on.
		 * @returns {Ext.container.Container}                The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string | Ext.Component, limit?: string | number | Ext.Component): Ext.container.Container;
		/** 
		 * Update the content area of a component.
		 * @method
		 * @public (method)
		 * @param   {string|object} htmlOrData
		 * If this component has been configured with a
		 * template via the tpl config then it will use this argument as data to populate the
		 * template. If this component was not configured with a template, the components
		 * content area will be updated via [Ext.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) update.
		 * @param   {boolean}       [loadScripts]
		 * Only legitimate when using the `html`
		 * configuration. Causes embedded script tags to be executed. Inline source will be executed
		 * with this Component as the scope (`this` reference).
		 * @param   {Function}      [callback]
		 * Only legitimate when using the `html` configuration.
		 * Callback to execute when scripts have finished loading.
		 * @param   {object}        [scriptScope]
		 * The scope (`this` reference) in which to
		 * execute _inline_ script elements content. Scripts with a `src` attribute cannot
		 * be executed with this scope.
		 * @returns {void}                        
		 */
		update? (htmlOrData: string | object, loadScripts?: boolean, callback?: ExtGlobalFunction, scriptScope?: object): void;
		/** 
		 * Sets the current box measurements of the component's underlying element.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}                            box An object in the format {x, y, width, height}
		 * @returns {Ext.flash.Component|Ext.Component}     this
		 */
		updateBox? (box: object): Ext.flash.Component;
		updateBox? (box: object): Ext.Component;
		/** 
		 * Method which adds a specified UI + `uiCls` to the components element. Can be overridden
		 * to add the UI to more than just the component's element.
		 * @method
		 * @protected (method)
		 * @param   {string} uiCls The UI class to add to the element.
		 * @returns {void}         
		 */
		addUIClsToElement? (uiCls: string): void;
		/** 
		 * Called by the layout system after the Component has been laid out.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number}           width     The width that was set
		 * @param   {number}           height    The height that was set
		 * @param   {number|undefined} oldWidth  The old width, or `undefined` if this was the initial layout.
		 * @param   {number|undefined} oldHeight The old height, or `undefined` if this was the initial layout.
		 * @returns {void}                       
		 */
		afterComponentLayout? (width: number, height: number, oldWidth: number | undefined, oldHeight: number | undefined): void;
		/** 
		 * Invoked after the Component is shown (after [onShow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onShow) is called).
		 * 
		 * Gets passed the same parameters as [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-show).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {string|Ext.dom.Element} [animateTarget]
		 * @param   {Function}               [callback]
		 * @param   {object}                 [scope]
		 * @returns {void}                                   
		 */
		afterShow? (animateTarget?: string | Ext.dom.Element, callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Invoked before the Component is shown.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeShow? (): void;
		/** 
		 * Allows addition of behavior to the disable operation.
		 * After calling the superclass's `onDisable`, the Component will be disabled.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDisable? (): void;
		/** 
		 * Allows addition of behavior to the enable operation.
		 * After calling the superclass's `onEnable`, the Component will be enabled.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onEnable? (): void;
		/** 
		 * Method to manage awareness of when components are removed from their
		 * respective Container, firing a [removed](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-removed) event. References are properly
		 * cleaned up after removing a component from its owning container.
		 * 
		 * Allows addition of behavior when a Component is removed from
		 * its parent Container. At this stage, the Component has been
		 * removed from its parent Container's collection of child items,
		 * but has not been destroyed (It will be destroyed if the parent
		 * Container's `autoDestroy` is `true`, or if the remove call was
		 * passed a truthy second parameter). After calling the
		 * superclass's `onRemoved`, the `ownerCt` and the `refOwner` will not
		 * be present.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {boolean} destroying
		 * Will be passed as `true` if the Container performing the remove operation will delete this
		 * Component upon remove.
		 * @returns {void}               
		 */
		onRemoved? (destroying: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} name
		 * @returns {void}        
		 */
		getTpl? (name: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		onBlur? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		onFocus? (e: object): void;
		/** 
		 * Adds a plugin. May be called at any time in the component's life cycle.
		 * @method
		 * @protected (method)
		 * @param   {object} plugin
		 * @returns {void}          
		 */
		addPlugin? (plugin: object): void;
		/** 
		 * Save a property to the given state object if it is not its default or configured
		 * value.
		 * @method
		 * @protected (method)
		 * @param   {object} state    The state object.
		 * @param   {string} propName The name of the property on this object to save.
		 * @param   {string} [value]  The value of the state property (defaults to `this[propName]`).
		 * @returns {object} 
		 * The state object or a new object if state was `null` and the property
		 * was saved.
		 */
		addPropertyToState? (state: object, propName: string, value?: string): object;
		/** 
		 * Invoked after the Component has been hidden.
		 * 
		 * Gets passed the same `callback` and `scope` parameters that [onHide](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onHide) received.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Function} [callback]
		 * @param   {object}   [scope]
		 * @returns {void}                
		 */
		afterHide? (callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Allows additional behavior after rendering is complete. At this stage, the
		 * [Component's](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) [Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getEl) will have
		 * been styled according to the configuration, will have had any configured CSS
		 * class names added, and will be in the configured visibility and configured enable
		 * state.
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * and the controller has an afterRender
		 * method it will be called passing the Component as the single param.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		afterRender? (): void;
		/** 
		 * Template method called after a Component has been positioned.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {void}     
		 */
		afterSetPosition? (x: number, y: number): void;
		/** 
		 * Template method to do any pre-blur processing.
		 * @method
		 * @protected (method)
		 * @param   {Ext.event.Event} e The event object
		 * @returns {void}              
		 */
		beforeBlur? (e: Ext.event.Event): void;
		/** 
		 * Invoked before the Component is destroyed.
		 * This method is deprecated, override [onDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onDestroy) instead.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeDestroy? (): void;
		/** 
		 * Template method to do any pre-focus processing.
		 * @method
		 * @protected (method)
		 * @param   {Ext.event.Event} e The event object
		 * @returns {void}              
		 */
		beforeFocus? (e: Ext.event.Event): void;
		/** 
		 * Occurs before componentLayout is run. In previous releases, this method could
		 * return `false` to prevent its layout but that is not supported in Ext JS 4.1 or
		 * higher. This method is simply a notification of the impending layout to give the
		 * component a chance to adjust the DOM. Ideally, DOM reads should be avoided at this
		 * time to reduce expensive document reflows.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeLayout? (): void;
		/** 
		 * Allows additional behavior before rendering.
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * and the controller has a beforeRender
		 * method it will be called passing the Component as the single param.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeRender? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Cancel any deferred focus on this component
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		cancelFocus? (): void;
		/** 
		 * Implements an upward event bubbling policy. By default a Component bubbles events up to its [reference owner](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getRefOwner).
		 * 
		 * Component subclasses may implement a different bubbling strategy by overriding this method.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		getBubbleTarget? (): void;
		/** 
		 * Returns the focus styling holder element associated with this Focusable.
		 * By default it is the same element as [getFocusEl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Focusable.html#method-getFocusEl).
		 * @method
		 * @protected (method)
		 * @returns {Ext.Element}  The focus styling element.
		 */
		getFocusClsEl? (): Ext.Element;
		/** 
		 * Returns the focus holder element associated with this Focusable. At the
		 * level of the Focusable base, this function returns `this.el` (or for Widgets,
		 * `this.element`).
		 * 
		 * Subclasses with embedded focusable elements (such as Window, Field and Button)
		 * should override this for use by [focus](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Focusable.html#method-focus)
		 * method.
		 * @method
		 * @protected (method)
		 * @returns {Ext.Element}  
		 */
		getFocusEl? (): Ext.Element;
		/** 
		 * Returns the element which is masked by the [mask](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-mask) method, or into which the [LoadMask](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setLoading) is rendered into.
		 * 
		 * The default implementation uses the [maskElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maskElement) configuration to access the Component's child element by name. By default, [maskElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maskElement)
		 * is `null` which means that `null` is returned from this method indicating that the mask needs to be rendered into the document because
		 * component structure should not be contaminated by mask elements.
		 * 
		 * Some subclasses may override this method if they have knowledge about external structures where a mask could usefully be rendered.
		 * 
		 * For example a [GridView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.view.Table.html) will request that its owning [GridPanel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Table.html) be masked. The
		 * GridPanel will have its own implementation of `getMaskTarget` which will return the element dictated by its own [maskElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maskElement)
		 * Panels use `"el"` as their [maskElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-maskElement) by default, but that could be overridden to be `"body"` to leave toolbars and the header
		 * mouse-accessible.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		getMaskTarget? (): void;
		/** 
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-up)
		 * method to find the owning Component in the linkage hierarchy.
		 * 
		 * By default this returns the Container which contains this Component.
		 * 
		 * This may be overridden by Component authors who implement ownership hierarchies
		 * which are not based upon ownerCt, such as BoundLists being owned by Fields or Menus
		 * being owned by Buttons.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		getRefOwner? (): void;
		/** 
		 * Returns an object that describes how this component's width and height are managed.
		 * All of these objects are shared and should not be modified.
		 * @method
		 * @protected (method)
		 * @param   {object} ownerCtSizeModel
		 * @returns {object}                  The size model for this component.
		 */
		getSizeModel? (ownerCtSizeModel: object): object;
		/** 
		 * The initComponent template method is an important initialization step for a Component. It is intended to be
		 * implemented by each subclass of [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) to provide any needed constructor logic. The
		 * initComponent method of the class being created is called first, with each initComponent method
		 * up the hierarchy to [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) being called thereafter. This makes it easy to implement and,
		 * if needed, override the constructor logic of the Component at any step in the hierarchy.
		 * 
		 * The initComponent method **must** contain a call to [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent) in order
		 * to ensure that the parent class' initComponent method is also called.
		 * 
		 * All config options passed to the constructor are applied to `this` before initComponent is called,
		 * so you can simply access them with `this.someOption`.
		 * 
		 * The following example demonstrates using a dynamic string for the text of a button at the time of
		 * instantiation of the class.
		 * 
		 *    Ext.define('DynamicButtonText', {
		 *        extend: 'Ext.button.Button',
		 *    
		 *        initComponent: function() {
		 *            this.text = new Date();
		 *            this.renderTo = Ext.getBody();
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    Ext.onReady(function() {
		 *        Ext.create('DynamicButtonText');
		 *    });
		 * 
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initComponent? (): void;
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
		 * @param   {object}                                     config
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.flash.Component;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initialize any events on this component
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initEvents? (): void;
		/** 
		 * Template method to do any Focusable related initialization that
		 * does not involve event listeners creation.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initFocusable? (): void;
		/** 
		 * Template method to do any event listener initialization for a Focusable.
		 * This generally happens after the focusEl is available.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initFocusableEvents? (): void;
		/** 
		 * Called by `getInherited` to initialize the inheritedState the first time it is
		 * requested.
		 * 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @protected (method)
		 * @param   {object} inheritedState
		 * @returns {void}                  
		 */
		initInheritedState? (inheritedState: object): void;
		/** 
		 * This method should be called when the instance is ready to start listening for
		 * keyboard events. This is called automatically for [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) and derived
		 * classes. In Classic Toolkit, this is done after the component is rendered.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initKeyMap? (): void;
		/** 
		 * Initialized the renderData to be used when rendering the renderTpl.
		 * @method
		 * @protected (method)
		 * @returns {object}  Object with keys and values that are going to be applied to the renderTpl
		 */
		initRenderData? (): object;
		/** 
		 * Determines whether this Component is the root of a layout. This returns `true` if
		 * this component can run its layout without assistance from or impact on its owner.
		 * If this component cannot run its layout given these restrictions, `false` is returned
		 * and its owner will be considered as the next candidate for the layout root.
		 * 
		 * Setting the [_isLayoutRoot](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-_isLayoutRoot) property to `true` causes this method to always
		 * return `true`. This may be useful when updating a layout of a Container which shrink
		 * wraps content, and you know that it will not change size, and so can safely be the
		 * topmost participant in the layout run.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		isLayoutRoot? (): void;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Method to manage awareness of when components are added to their
		 * respective Container, firing an [added](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-added) event. References are
		 * established at add time rather than at render time.
		 * 
		 * Allows addition of behavior when a Component is added to a
		 * Container. At this stage, the Component is in the parent
		 * Container's collection of child items. After calling the
		 * superclass's `onAdded`, the `ownerCt` reference will be present,
		 * and if configured with a ref, the `refOwner` will be set.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.container.Container} container Container which holds the component.
		 * @param   {number}                  pos       Position at which the component was added.
		 * @param   {boolean}                 instanced
		 * `false` if this component was instanced by the parent
		 * container. `true` if the instance already existed when it was passed to the container.
		 * @returns {void}                              
		 */
		onAdded? (container: Ext.container.Container, pos: number, instanced: boolean): void;
		/** 
		 * Invoked when this component has first achieved size. This occurs after the
		 * [componentLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-componentLayout) has completed its initial run.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * and the controller has a boxReady method
		 * it will be called passing the Component and its width and height.
		 * 
		 *     boxReady: function (view, width, height) {
		 *         // ...
		 *     }
		 * 
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width  The width of this component
		 * @param   {number} height The height of this component
		 * @returns {void}          
		 */
		onBoxReady? (width: number, height: number): void;
		/** 
		 * Allows addition of behavior to the destroy operation.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDestroy? (): void;
		/** 
		 * Allows addition of behavior to the hide operation. After
		 * calling the superclass's onHide, the Component will be hidden.
		 * 
		 * Gets passed the same parameters as [hide](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-hide).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {string|Ext.dom.Element|Ext.Component} [animateTarget]
		 * @param   {Function}                             [callback]
		 * @param   {object}                               [scope]
		 * @returns {void}                                                 
		 */
		onHide? (animateTarget?: string | Ext.dom.Element | Ext.Component, callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Called after the component is moved, this method is empty by default but can be implemented by any
		 * subclass that needs to perform custom logic after a move occurs.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The new x position.
		 * @param   {number} y The new y position.
		 * @returns {void}     
		 */
		onPosition? (x: number, y: number): void;
		/** 
		 * Template method called when this Component's DOM structure is created.
		 * 
		 * At this point, this Component's (and all descendants') DOM structure _exists_ but it has not
		 * been layed out (positioned and sized).
		 * 
		 * Subclasses which override this to gain access to the structure at render time should
		 * call the parent class's method before attempting to access any child elements of the Component.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.dom.Element} parentNode   The parent Element in which this Component's encapsulating element is contained.
		 * @param   {number}          containerIdx The index within the parent Container's child collection of this Component.
		 * @returns {void}                         
		 */
		onRender? (parentNode: Ext.dom.Element, containerIdx: number): void;
		/** 
		 * Called when the component is resized.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width     The new width that was set
		 * @param   {number} height    The new height that was set
		 * @param   {number} oldWidth  The previous width
		 * @param   {number} oldHeight The previous height
		 * @returns {void}             
		 */
		onResize? (width: number, height: number, oldWidth: number, oldHeight: number): void;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
		/** 
		 * Allows addition of behavior to the show operation. After
		 * calling the superclass's onShow, the Component will be visible.
		 * 
		 * Override in subclasses where more complex behaviour is needed.
		 * 
		 * Gets passed the same parameters as [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-show).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {string|Ext.dom.Element} [animateTarget]
		 * @param   {Function}               [callback]
		 * @param   {object}                 [scope]
		 * @returns {void}                                   
		 */
		onShow? (animateTarget?: string | Ext.dom.Element, callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Invoked after the [afterShow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-afterShow) method is complete.
		 * 
		 * Gets passed the same `callback` and `scope` parameters that [afterShow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-afterShow) received.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Function} [callback]
		 * @param   {object}   [scope]
		 * @returns {void}                
		 */
		onShowComplete? (callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Template method to do any post-blur processing.
		 * @method
		 * @protected (method)
		 * @param   {Ext.event.Event} e The event object
		 * @returns {void}              
		 */
		postBlur? (e: Ext.event.Event): void;
		/** 
		 * Template method to do any post-focus processing.
		 * @method
		 * @protected (method)
		 * @param   {Ext.event.Event} e The event object
		 * @returns {void}              
		 */
		postFocus? (e: Ext.event.Event): void;
		/** 
		 * Publish this components state to the `ViewModel`. If no arguments are given (or if
		 * this is the first call), the entire state is published. This state is determined by
		 * the `publishes` property.
		 * 
		 * This method is called only by component authors.
		 * @method
		 * @protected (method)
		 * @param   {string} [property] The name of the property to update.
		 * @param   {object} [value]    The value of `property`. Only needed if `property` is given.
		 * @returns {void}              
		 */
		publishState? (property?: string, value?: object): void;
		/** 
		 * Method which removes a specified UI + `uiCls` from the components element. The `cls`
		 * which is added to the element will be: `this.baseCls + '-' + ui + uiCls`.
		 * @method
		 * @protected (method)
		 * @param   {string} uiCls The UI class to remove from the element.
		 * @returns {void}         
		 */
		removeUIClsFromElement? (uiCls: string): void;
		/** 
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object} [defaultScope] The default scope to return if none is found.
		 * @returns {object}                The default event scope
		 */
		resolveListenerScope? (defaultScope?: object): object;
		/** 
		 * Returns the default listener scope for a "satellite" of this component.
		 * Used for resolving scope for observable objects that are not part of the normal
		 * Container/Component hierarchy (for example, plugins)
		 * @method
		 * @protected (method)
		 * @param   {Ext.mixin.Observable} satellite
		 * @param   {object}               [defaultScope]
		 * @returns {object}                              The listener scope
		 */
		resolveSatelliteListenerScope? (satellite: Ext.mixin.Observable, defaultScope?: object): object;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.flash.Component.Statics|Ext.Component.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.flash.Component.Statics;
		statics? (): Ext.Component.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Adds declarative listeners as nested arrays of listener objects.
		 * @method
		 * @private (method)
		 * @param   {any[]}   listeners
		 * @returns {boolean}           `true` if any listeners were added
		 */
		_addDeclaredListeners? (listeners: any[]): boolean;
		/** 
		 * Ensures that the given property (if it is a Config System config) has a proper
		 * "updater" method on this instance to sync changes to the config.
		 * @method
		 * @private (method)
		 * @param   {string} property The name of the config property.
		 * @returns {void}            
		 */
		addBindableUpdater? (property: string): void;
		/** 
		 * Add a childEl specific to this instance. This must be called before render.
		 * @method
		 * @private (method)
		 * @param   {object} childEl
		 * @returns {void}           
		 */
		addChildEl? (childEl: object): void;
		/** 
		 * Adds a listeners with the "delegate" event option.  Users should not invoke this
		 * method directly.  Use the "delegate" event option of
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) instead.
		 * @method
		 * @private (method)
		 * @param   {object} eventName
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} options
		 * @param   {object} order
		 * @param   {object} caller
		 * @param   {object} manager
		 * @returns {void}             
		 */
		addDelegatedListener? (eventName: object, fn: object, scope: object, options: object, order: object, caller: object, manager: object): void;
		/** 
		 * This method applies a versioned, deprecation declaration to this class. This
		 * is typically called by the `deprecated` config.
		 * @method
		 * @private (method)
		 * @param   {object} deprecations
		 * @returns {void}                
		 */
		addDeprecations? (deprecations: object): void;
		/** 
		 * Method which adds a specified UI to the components element.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		addUIToElement? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xy
		 * @param   {object} parent
		 * @returns {void}          
		 */
		adjustForConstraints? (xy: object, parent: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} x
		 * @param   {object} y
		 * @returns {void}     
		 */
		adjustPosition? (x: object, y: object): void;
		/** 
		 * Called after the mixin is applied. We need to see if `childEls` were used by
		 * the `targetClass` and apply them to the config.
		 * @method
		 * @private (method)
		 * @param   {Ext.Class} targetClass
		 * @returns {void}                  
		 */
		afterClassMixedIn? (targetClass: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @returns {void}          
		 */
		afterFirstLayout? (width: object, height: object): void;
		/** 
		 * Process the passed fx configuration.
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		anim? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {string|object} binds
		 * @param   {object}        currentBindings
		 * @returns {object}                        
		 */
		applyBind? (binds: string | object, currentBindings: object): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		applyData? (data: object): void;
		/** 
		 * Sets references to elements inside the component. This applies [renderSelectors](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderSelectors)
		 * as well as [childEls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-childEls).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		applyRenderSelectors? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} scrollable
		 * @param   {object} oldScrollable
		 * @returns {void}                 
		 */
		applyScrollable? (scrollable: object, oldScrollable: object): void;
		/** 
		 * Transforms a Session config to a proper instance.
		 * @method
		 * @private (method)
		 * @param   {object}           session
		 * @returns {Ext.data.Session}         
		 */
		applySession? (session: object): Ext.data.Session;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @param   {object} oldTouchAction
		 * @returns {void}                  
		 */
		applyTouchAction? (touchAction: object, oldTouchAction: object): void;
		/** 
		 * Transforms a ViewModel config to a proper instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel
		 * @returns {Ext.app.ViewModel}                         
		 */
		applyViewModel? (viewModel: string | object | Ext.app.ViewModel): Ext.app.ViewModel;
		/** 
		 * Sets references to elements inside the component.
		 * @method
		 * @private (method)
		 * @param   {object} el
		 * @param   {object} owner
		 * @returns {void}         
		 */
		attachChildEls? (el: object, owner: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeInitConfig? (): void;
		/** 
		 * Template method called before a Component is positioned.
		 * 
		 * Ensures that the position is adjusted so that the Component is constrained if so configured.
		 * @method
		 * @private (method)
		 * @param   {object} x
		 * @param   {object} y
		 * @param   {object} animate
		 * @returns {void}           
		 */
		beforeSetPosition? (x: object, y: object, animate: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		blur? (): void;
		/** 
		 * Ensures that all elements with "data-ref" attributes get loaded into the cache.
		 * This really helps on IE8 where `getElementById` is a search not a lookup. By
		 * populating our cache with one search of the DOM we then have random access to
		 * the elements as we do our `childEls` wire up.
		 * @method
		 * @private (method)
		 * @param   {object} el
		 * @returns {void}      
		 */
		cacheRefEls? (el: object): void;
		/** 
		 * Calculates x,y coordinates specified by the anchor position on the element, adding
		 * extraX and extraY values.
		 * @method
		 * @private (method)
		 * @param   {string}   [anchor]
		 * The specified anchor position.
		 * See [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-alignTo) for details on supported anchor positions.
		 * @param   {number}   [extraX] value to be added to the x coordinate
		 * @param   {number}   [extraY] value to be added to the y coordinate
		 * @param   {object}   [size]
		 * An object containing the size to use for calculating anchor
		 * position {width: (target width), height: (target height)} (defaults to the
		 * element's current size)
		 * @returns {number[]}          [x, y] An array containing the element's x and y coordinates
		 */
		calculateAnchorXY? (anchor?: string, extraX?: number, extraY?: number, size?: object): number[];
		/** 
		 * Calculates the new [x,y] position to move this Positionable into a constrain region.
		 * 
		 * By default, this Positionable is constrained to be within the container it was added to, or the element it was
		 * rendered to.
		 * 
		 * Priority is given to constraining the top and left within the constraint.
		 * 
		 * An alternative constraint may be passed.
		 * @method
		 * @private (method)
		 * @param   {string|HTMLElement|Ext.dom.Element|Ext.util.Region} [constrainTo]
		 * The Element or [Region](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Region.html)
		 * into which this Component is to be constrained. Defaults to the element into which this Positionable
		 * was rendered, or this Component's {@link [Ext.Component.constrainTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-constrainTo).
		 * @param   {number[]}                                           [proposedPosition]
		 * A proposed `[X, Y]` position to test for validity
		 * and to coerce into constraints instead of using this Positionable's current position.
		 * @param   {boolean}                                            [local]            The proposedPosition is local _(relative to floatParent if a floating Component)_
		 * @param   {number[]}                                           [proposedSize]
		 * A proposed `[width, height]` size to use when calculating
		 * constraints instead of using this Positionable's current size.
		 * @returns {number[]}                                           
		 * **If** the element _needs_ to be translated, the new `[X, Y]` position within
		 * constraints if possible, giving priority to keeping the top and left edge in the constrain region.
		 * Otherwise, `false`.
		 */
		calculateConstrainedPosition? (constrainTo?: string | HTMLElement | Ext.dom.Element | Ext.util.Region, proposedPosition?: number[], local?: boolean, proposedSize?: number[]): number[];
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} skipVisibility
		 * @param   {object} includeFocusTarget
		 * @returns {void}                      
		 */
		canFocus? (skipVisibility: object, includeFocusTarget: object): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 * @type {object}
		 */
		captureArgs?: ((o: object, fn: object, scope: object) => void) | object | any;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newValue
		 * @param   {object} oldValue
		 * @param   {object} constrainMethod
		 * @param   {object} styleName
		 * @param   {object} sizeName
		 * @returns {void}                   
		 */
		changeConstraint? (newValue: object, oldValue: object, constrainMethod: object, styleName: object, sizeName: object): void;
		/** 
		 * Clears any clipping applied to this component by [clipTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-clipTo).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearClip? (): void;
		/** 
		 * Clears all listeners that were attached using the "delegate" event option.
		 * Users should not invoke this method directly.  It is called automatically as
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * Clips this Component/Element to fit within the passed element's or component's view area
		 * @method
		 * @private (method)
		 * @param   {Ext.Component|Ext.Element|Ext.util.Region} clippingEl
		 * The Component or element or Region which should
		 * clip this element even if this element is outside the bounds of that region.
		 * @param   {number}                                    sides
		 * The sides to clip 1=top, 2=right, 4=bottom, 8=left.
		 * 
		 * This is to support components being clipped to their logical owner, such as a grid row editor when the
		 * row being edited scrolls out of sight. The editor should be clipped at the edge of the scrolling element.
		 * @returns {void}                                                 
		 */
		clipTo? (clippingEl: Ext.Component | Ext.Element | Ext.util.Region, sides: number): void;
		/** 
		 * Clips this floating element to the scrolling element in line with how
		 * its topmost anchoring element is clipped.
		 * @method
		 * @private (method)
		 * @param   {object} scroller
		 * @returns {void}            
		 */
		clipToScroller? (scroller: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} box
		 * @returns {void}       
		 */
		constrainBox? (box: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {string|object} ptype
		 * string or config object containing a ptype property.
		 * 
		 * Constructs a plugin according to the passed config object/ptype string.
		 * 
		 * Ensures that the constructed plugin always has a `cmp` reference back to this component.
		 * The setting up of this is done in PluginManager. The PluginManager ensures that a reference to this
		 * component is passed to the constructor. It also ensures that the plugin's `setCmp` method (if any) is called.
		 * @returns {void}                
		 */
		constructPlugin? (ptype: string | object): void;
		/** 
		 * Returns an array of fully constructed plugin instances. This converts any configs into their
		 * appropriate instances.
		 * 
		 * It does not mutate the plugins array. It creates a new array.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		constructPlugins? (): void;
		/** 
		 * **Defined in override Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @param   {object} posSpec
		 * @returns {void}           
		 */
		convertPositionSpec? (posSpec: object): void;
		/** 
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroyFocusable? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		disableFocusable? (): void;
		/** 
		 * Called from the selected frame generation template to insert this Component's inner structure inside the framing structure.
		 * 
		 * When framing is used, a selected frame generation template is used as the primary template of the [getElConfig](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Renderable.html#method-getElConfig) instead
		 * of the configured [renderTpl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTpl). The renderTpl is invoked by this method which is injected into the framing template.
		 * @method
		 * @private (method)
		 * @param   {object} out
		 * @param   {object} values
		 * @returns {void}          
		 */
		doApplyRenderTpl? (out: object, values: object): void;
		/** 
		 * Handles autoRender.
		 * Floating Components may have an ownerCt. If they are asking to be constrained, constrain them within that
		 * ownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doAutoRender? (): void;
		/** 
		 * Perform the actual destruction sequence.
		 * 
		 * As a rule of thumb, subclasses should destroy their child Components and/or other objects
		 * before calling parent method. Any object references will be nulled after this method
		 * has finished, to prevent the possibility of memory leaks.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doDestroy? (): void;
		/** 
		 * Fires a delegated event.  Users should not invoke this method directly.  It
		 * is called automatically by the framework as needed (see the "delegate" event
		 * option of [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) for more
		 * details.
		 * @method
		 * @private (method)
		 * @param   {object} eventName
		 * @param   {object} args
		 * @returns {void}             
		 */
		doFireDelegatedEvent? (eventName: object, args: object): void;
		/** 
		 * Continue to fire event.
		 * @method
		 * @private (method)
		 * @param   {string}  eventName
		 * @param   {any[]}   args
		 * @param   {boolean} bubbles
		 * @returns {void}              
		 */
		doFireEvent? (eventName: string, args: any[], bubbles: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		enableFocusable? (): void;
		/** 
		 * Finds an alternate Component to focus if this Component is disabled while focused, or
		 * focused while disabled, or otherwise unable to focus.
		 * 
		 * In both cases, focus must not be lost to document.body, but must move to an intuitively
		 * connectible Component, either a sibling, or uncle or nephew.
		 * 
		 * This is both for the convenience of keyboard users, and also for when focus is tracked
		 * within a Component tree such as for ComboBoxes and their dropdowns.
		 * 
		 * For example, a ComboBox with a PagingToolbar in is BoundList. If the "Next Page"
		 * button is hit, the LoadMask shows and focuses, the next page is the last page, so
		 * the "Next Page" button is disabled. When the LoadMask hides, it attempt to focus the
		 * last focused Component which is the disabled "Next Page" button. In this situation,
		 * focus should move to a sibling within the PagingToolbar.
		 * @method
		 * @private (method)
		 * @returns {Ext.Component}  A closely related focusable Component to which focus can move.
		 */
		findFocusTarget? (): Ext.Component;
		/** 
		 * This method visits the rendered component tree in a "top-down" order. That is, this
		 * code runs on a parent component before running on a child. This method calls the
		 * [onRender](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Renderable.html#method-onRender) method of each component.
		 * @method
		 * @private (method)
		 * @param   {number} containerIdx The index into the Container items of this Component.
		 * @returns {void}                
		 */
		finishRender? (containerIdx: number): void;
		/** 
		 * This method fires an event on [`Ext.GlobalEvents`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.GlobalEvents.html) allowing interested parties to know
		 * of certain critical events for this component. This is done globally because the
		 * (few) listeners can immediately receive the event rather than bubbling the event
		 * only to reach the top and have no listeners.
		 * 
		 * The main usage for these events is to do with floating components. For example, the
		 * load mask is a floating component. The component it is masking may be inside several
		 * containers. As such, they need to know when component is hidden, either directly, or
		 * via a parent container being hidden. To do this they subscribe to these events and
		 * filter out the appropriate container.
		 * 
		 * This functionality is contained in Component (as opposed to Container) because a
		 * Component can be the ownerCt for a floating component (loadmask), and the loadmask
		 * needs to know when its owner is shown/hidden so that its hidden state can be
		 * synchronized.
		 * @method
		 * @private (method)
		 * @param   {string} eventName The event name.
		 * @returns {void}             
		 */
		fireHierarchyEvent? (eventName: string): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animate
		 * @returns {void}           
		 */
		fitContainer? (animate: object): void;
		/** 
		 * Sets up a reference on our current reference holder.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		fixReference? (): void;
		/** 
		 * Returns the value of [activeCounter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#cfg-activeCounter).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getActiveCounter? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} alignToEl
		 * @param   {object} posSpec
		 * @param   {object} offset
		 * @param   {object} minHeight
		 * @returns {void}             
		 */
		getAlignToRegion? (alignToEl: object, posSpec: object, offset: object, minHeight: object): void;
		/** 
		 * "></editor>
		 * 
		 * ---
		 * 
		 *  Begin Positionable methods
		 * 
		 * ---
		 * 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @param   {Ext.dom.Element} el       The element
		 * @param   {string}          [anchor]
		 * The specified anchor position.
		 * See [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-alignTo) for details on supported anchor positions.
		 * @param   {boolean}         [local]
		 * True to get the local (element top/left-relative) anchor
		 * position instead of page coordinates
		 * @param   {object}          [size]
		 * An object containing the size to use for calculating anchor
		 * position {width: (target width), height: (target height)} (defaults to the
		 * element's current size)
		 * @returns {number[]}                 [x, y] An array containing the element's x and y coordinates
		 */
		getAnchorToXY? (el: Ext.dom.Element, anchor?: string, local?: boolean, size?: object): number[];
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} target
		 * @returns {void}          
		 */
		getAnimateTarget? (target: object): void;
		/** 
		 * Get animation properties
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimationProps? (): void;
		/** 
		 * Find component(s) that label or describe this component,
		 * and return the id(s) of their ariaEl elements.
		 * @method
		 * @private (method)
		 * @param   {Function|string|string[]} [reference]
		 * Component reference,
		 * or array of component references, or a function that should return
		 * the proper attribute string. The function will be called in the
		 * context of the labelled component.
		 * @returns {Ext.Element}                          Element id string, or null
		 */
		getAriaLabelEl? (reference?: ExtGlobalFunction | string | string[]): Ext.Element;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAutoId? (): void;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @returns {object} 
		 * an object with the following numeric properties
		 * 
		 * - beforeX
		 * - afterX
		 * - beforeY
		 * - afterY
		 */
		getBorderPadding? (): object;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * Returns the **client** region of this element, i.e. the content region excluding
		 * horizontal and/or vertical scrollbars.
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Region}  Region containing "top, left, bottom, right" member data.
		 */
		getClientRegion? (): Ext.util.Region;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getComponentLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getContentTarget? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getElConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFocusTask? (): void;
		/** 
		 * On render, reads an encoded style attribute, "filter" from the style of this Component's element.
		 * This information is memoized based upon the CSS class name of this Component's element.
		 * Because child Components are rendered as textual HTML as part of the topmost Container, a dummy div is inserted
		 * into the document to receive the document element's CSS class name, and therefore style attributes.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFrameInfo? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} table
		 * @returns {void}         
		 */
		getFrameTpl? (table: object): void;
		/** 
		 * Get an el for overflowing, defaults to the target el
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getOverflowEl? (): void;
		/** 
		 * Returns the CSS style object which will set the Component's scroll styles.
		 * This must be applied to the [target element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getTargetEl).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getOverflowStyle? (): void;
		/** 
		 * Returns the owning container if that container uses `border` layout. Otherwise
		 * this method returns `null`.
		 * 
		 * **Defined in override Ext.layout.container.border.Region.**
		 * @method
		 * @private (method)
		 * @returns {Ext.container.Container}  The owning border container or `null`.
		 */
		getOwningBorderContainer? (): Ext.container.Container;
		/** 
		 * Returns the owning `border` ([`Ext.layout.container.Border`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html)) instance if there is
		 * one. Otherwise this method returns `null`.
		 * 
		 * **Defined in override Ext.layout.container.border.Region.**
		 * @method
		 * @private (method)
		 * @returns {Ext.layout.container.Border}  The owning border layout or `null`.
		 */
		getOwningBorderLayout? (): Ext.layout.container.Border;
		/** 
		 * Returns an array of current fully constructed plugin instances.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getPlugins? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getRenderTree? (): void;
		/** 
		 * Gets the state id for this object.
		 * @method
		 * @private (method)
		 * @returns {string}  The 'stateId' or the implicit 'id' specified by component configuration.
		 */
		getStateId? (): string;
		/** 
		 * Returns an offscreen div with the same class name as the element this is being rendered.
		 * This is because child item rendering takes place in a detached div which, being not
		 * part of the document, has no styling.
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		getStyleProxy? (cls: object): void;
		/** 
		 * This is used to determine where to insert the 'html', 'contentEl' and 'items' in this component.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTargetEl? (): void;
		/** 
		 * Needed for when widget is rendered into a grid cell. The class to add to the cell element.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTdCls? (): void;
		/** 
		 * Partner method to [getTdCls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getTdCls).
		 * 
		 * Returns the base type for the component. Defaults to return `this.xtype`, but
		 * All derived classes of [TextField](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html) can return the type 'textfield',
		 * and all derived classes of [Button](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) can return the type 'button'
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTdType? (): void;
		/** 
		 * Gets the topmost _non floating_ alignTo target if there are multiple aligns
		 * such as a menu stack hanging off a button or grid column header.
		 * @method
		 * @private (method)
		 * @returns {Ext.Element|Ext.Component}  The topmost, _non floating_ alignTo target.
		 */
		getTopAlignTarget? (): Ext.Element | Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getUserCls? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		handleBlurEvent? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		handleFocusEvent? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * This method triggers the lazy configs and must be called when it is time to
		 * fully boot up. The configs that must be initialized are: `bind`, `publishes`,
		 * `session`, `twoWayBindable` and `viewModel`.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initBindable? (): void;
		/** 
		 * This method is called by the [`Ext.layout.container.Border`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html) class when instances are
		 * added as regions to the layout. Since it is valid to add any component to a border
		 * layout as a region, this method must be added to [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) but is only ever
		 * called when that component is owned by a `border` layout.
		 * 
		 * **Defined in override Ext.layout.container.border.Region.**
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initBorderRegion? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initFloatConstrain? (): void;
		/** 
		 * Sets up the focus listener on this Component's [focusEl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Focusable.html#method-getFocusEl) if it has one.
		 * 
		 * Form Components which must implicitly participate in tabbing order usually have a naturally
		 * focusable element as their [focusEl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Focusable.html#method-getFocusEl), and it is the DOM event of that
		 * receiving focus which drives the Component's `onFocus` handling, and the DOM event of it
		 * being blurred which drives the `onBlur` handling.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initFocusableElement? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initHierarchyEvents? (): void;
		/** 
		 * Initializes padding by applying it to the target element, or if the layout manages
		 * padding ensures that the padding on the target element is "0".
		 * @method
		 * @private (method)
		 * @param   {object} targetEl
		 * @returns {void}            
		 */
		initPadding? (targetEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} plugin
		 * @returns {void}          
		 */
		initPlugin? (plugin: object): void;
		/** 
		 * Initializes the renderTpl.
		 * @method
		 * @private (method)
		 * @returns {Ext.XTemplate}  The renderTpl XTemplate instance.
		 */
		initRenderTpl? (): Ext.XTemplate;
		/** 
		 * Initializes the state of the object upon construction.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initState? (): void;
		/** 
		 * Applies padding, margin, border, top, left, height, and width configs to the
		 * appropriate elements.
		 * @method
		 * @private (method)
		 * @param   {object} targetEl
		 * @returns {void}            
		 */
		initStyles? (targetEl: object): void;
		/** 
		 * This method marks the current inherited state as invalid. The next time a call is
		 * made to `getInherited` the objects will be recreated and initialized.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		invalidateInheritedState? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		isBlurring? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		isFocusing? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isHierarchicallyHidden? (): void;
		/** 
		 * Checks if this component will be contained by the passed component as part of its
		 * layout run. If `true`, then the layout on `this` can be skipped because it will be
		 * encompassed when the layout for `comp` runs. Typical cases where this may be be `false`
		 * is when asking about floaters nested in containers.
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} comp The potential owner.
		 * @returns {boolean}            `true` if this component is a layout child of `comp`.
		 */
		isLayoutChild? (comp: Ext.Component): boolean;
		/** 
		 * Returns true if this component's local coordinate system is rtl. For normal
		 * components this equates to the value of isParentRtl().  Floaters are a bit different
		 * because a floater's element can be a childNode of something other than its
		 * parent component's element.  For floaters we have to read the dom to see if the
		 * component's element's parentNode has a css direction value of "rtl".
		 * 
		 * **Defined in override Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isLocalRtl? (): boolean;
		/** 
		 * **Defined in override Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isOppositeRootDirection? (): void;
		/** 
		 * Returns true if this component's parent container is rtl. Used by rtl positioning
		 * methods to determine if the component should be positioned using a right-to-left
		 * coordinate system.
		 * 
		 * **Defined in override Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isParentRtl? (): boolean;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Gets the Controller or Component that is used as the reference holder for this view.
		 * @method
		 * @private (method)
		 * @param   {boolean}                                        [skipThis]
		 * `false` to return this as the reference holder if
		 * this instance has set `referenceHolder`. Unlike `getInheritedConfig` this method
		 * defaults to `true` because it is possible that a `reference` property set by the
		 * owner of a component that is also a `referenceHolder` itself. In this case, the
		 * `reference` connects not to this component but to the parent referenceHolder.
		 * @returns {Ext.app.ViewController|Ext.container.Container}            The reference holder.
		 */
		lookupReferenceHolder? (skipThis?: boolean): Ext.app.ViewController | Ext.container.Container;
		/** 
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#method-publishState)
		 * to ensure two-way bindings (via `bind`) as well as any `publishes` are updated.
		 * This method is cached on the `cfg` instance for re-use.
		 * @method
		 * @private (method)
		 * @param   {Ext.Config} cfg
		 * @returns {Function}       The updater function.
		 */
		makeBindableUpdater? (cfg: Ext.Config): ExtGlobalFunction;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAfterFloatLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onBeforeFloatLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFloatShow? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} c
		 * @returns {void}     
		 */
		onGlobalShow? (c: object): void;
		/** 
		 * Mousedown brings to front, and programmatically grabs focus
		 * unless the mousedown was on a focusable element
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		onMouseDown? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onShowVeto? (): void;
		/** 
		 * This method is called when any of the [stateEvents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateEvents) are fired.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onStateChange? (): void;
		/** 
		 * Returns `true` if the passed element is within the container tree of this component.
		 * 
		 * For example if a menu's submenu contains an [Ext.form.field.Date](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Date.html), that top level
		 * menu owns the elements of the date picker. Using this method, you can tell if an event took place
		 * within a certain component tree.
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		owns? (element: object): void;
		/** 
		 * Prepares a given class for observable instances. This method is called when a
		 * class derives from this class or uses this class as a mixin.
		 * @method
		 * @private (method)
		 * @param   {Function}            T     The class constructor to prepare.
		 * @param   {Ext.util.Observable} mixin The mixin if being used as a mixin.
		 * @param   {object}              data  The raw class creation data if this is an extend.
		 * @returns {void}                      
		 */
		prepareClass? (T: ExtGlobalFunction, mixin: Ext.util.Observable, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		registerWithOwnerCt? (): void;
		/** 
		 * Removes delegated listeners for a given eventName, function, and scope.
		 * Users should not invoke this method directly.  It is called automatically by
		 * the framework as part of removeListener processing.
		 * @method
		 * @private (method)
		 * @param   {object} eventName
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}             
		 */
		removeDelegatedListener? (eventName: object, fn: object, scope: object): void;
		/** 
		 * Remove a single managed listener item
		 * @method
		 * @private (method)
		 * @param   {boolean} isClear         True if this is being called during a clear
		 * @param   {object}  managedListener
		 * The managed listener item
		 * See removeManagedListener for other args
		 * @returns {void}                    
		 */
		removeManagedListenerItem? (isClear: boolean, managedListener: object): void;
		/** 
		 * Method which removes a specified UI from the components element.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		removeUIFromElement? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} flushOptions
		 * @returns {void}                
		 */
		resumeLayouts? (flushOptions: object): void;
		/** 
		 * Converts local coordinates into page-level coordinates
		 * @method
		 * @private (method)
		 * @param   {number[]} xy The local x and y coordinates
		 * @returns {number[]}    The translated coordinates
		 */
		reverseTranslateXY? (xy: number[]): number[];
		/** 
		 * Returns focus to the Component or element found in the cached
		 * focusEnterEvent.
		 * 
		 * Usually called by onHide.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		revertFocus? (): void;
		/** 
		 * This method is called internally by [Ext.ZIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ZIndexManager.html) to signal that a floating Component has either been
		 * moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.
		 * 
		 * If a _Window_ is superceded by another Window, deactivating it hides its shadow.
		 * 
		 * This method also fires the [activate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-activate) or
		 * [deactivate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-deactivate) event depending on which action occurred.
		 * @method
		 * @private (method)
		 * @param   {boolean} [active]  True to activate the Component, false to deactivate it.
		 * @param   {boolean} [doFocus]
		 * When activating, set to true to focus the component;
		 * when deactivating, set to false to avoid returning focus to previous element.
		 * @returns {void}              
		 */
		setActive? (active?: boolean, doFocus?: boolean): void;
		/** 
		 * Sets the value of [activeCounter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#cfg-activeCounter).
		 * @method
		 * @private (method)
		 * @param   {number} activeCounter The new value.
		 * @returns {void}                 
		 */
		setActiveCounter? (activeCounter: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @returns {void}          
		 */
		setComponentLayout? (layout: object): void;
		/** 
		 * Sets the flex property of this component. Only applicable when this component is
		 * an item of a box layout
		 * @method
		 * @private (method)
		 * @param   {number} flex
		 * @returns {void}        
		 */
		setFlex? (flex: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} html
		 * @param   {object} loadScripts
		 * @param   {object} scriptScope
		 * @returns {void}               
		 */
		setHtml? (html: object, loadScripts: object, scriptScope: object): void;
		/** 
		 * Set masked state for this Component.
		 * @method
		 * @private (method)
		 * @param   {boolean} isMasked True if masked, false otherwise.
		 * @returns {void}             
		 */
		setMasked? (isMasked: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		setUserCls? (cls: object): void;
		/** 
		 * z-index is managed by the zIndexManager and may be overwritten at any time.
		 * Returns the next z-index to be used.
		 * 
		 * If this is a Container, then it will have rebased any managed floating Components,
		 * and so the next available z-index will be approximately 10000 above that.
		 * @method
		 * @private (method)
		 * @param   {object} index
		 * @returns {void}         
		 */
		setZIndex? (index: object): void;
		/** 
		 * Inject a reference to the function which applies the render template into the framing template. The framing template
		 * wraps the content.
		 * @method
		 * @private (method)
		 * @param   {object} frameTpl
		 * @returns {void}            
		 */
		setupFramingTpl? (frameTpl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		suspendLayouts? (): void;
		/** 
		 * synchronizes the hidden state of this component with the state of its hierarchy
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		syncHidden? (): void;
		/** 
		 * Translates the passed page coordinates into x and y css values for the element
		 * @method
		 * @private (method)
		 * @param   {number|any[]} x   The page x or an array containing [x, y]
		 * @param   {number}       [y] The page y, required if x is not an array
		 * @returns {object}       
		 * An object with x and y properties. e.g.
		 * {x: (value), y: (value)}
		 */
		translateXY? (x: number | any[], y?: number): object;
		/** 
		 * **Overridden in Ext.rtl.Component.**
		 * @method
		 * @private (method)
		 * @param   {object} box
		 * @returns {void}       
		 */
		unitizeBox? (box: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                   names The names of the linked objects to destroy.
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.flash.Component;
		unlink? (names: string[]): Ext.Component;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cmp
		 * @returns {void}       
		 */
		unregisterFloatingItem? (cmp: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} activeCounter
		 * @returns {void}                 
		 */
		updateActiveCounter? (activeCounter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} alwaysOnTop
		 * @returns {void}               
		 */
		updateAlwaysOnTop? (alwaysOnTop: object): void;
		/** 
		 * Updates the frame elements to match new framing. The current `frameBody` is
		 * preserved by transplanting it into the new frame. All other frame `childEls`
		 * are destroyed and recreated if needed by the new frame. This method cannot
		 * transition from framed to non-framed or vise-versa or between table and div
		 * based framing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateFrame? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} maxHeight
		 * @param   {object} oldMaxHeight
		 * @returns {void}                
		 */
		updateMaxHeight? (maxHeight: object, oldMaxHeight: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} maxWidth
		 * @param   {object} oldMaxWidth
		 * @returns {void}               
		 */
		updateMaxWidth? (maxWidth: object, oldMaxWidth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minHeight
		 * @param   {object} oldMinHeight
		 * @returns {void}                
		 */
		updateMinHeight? (minHeight: object, oldMinHeight: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minWidth
		 * @param   {object} oldMinWidth
		 * @returns {void}               
		 */
		updateMinWidth? (minWidth: object, oldMinWidth: object): void;
		/** 
		 * Updates the session config.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Session} session
		 * @returns {void}                     
		 */
		updateSession? (session: Ext.data.Session): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @returns {void}               
		 */
		updateTouchAction? (touchAction: object): void;
		/** 
		 * Updates the viewModel config.
		 * @method
		 * @private (method)
		 * @param   {Ext.app.ViewModel} viewModel
		 * @param   {Ext.app.ViewModel} oldViewModel
		 * @returns {void}                           
		 */
		updateViewModel? (viewModel: Ext.app.ViewModel, oldViewModel: Ext.app.ViewModel): void;
	}
}
declare namespace Ext {
	class FlashComponent extends Ext.flash.Component {}
}
declare namespace Ext.flash.Component {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.flash.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html)
	 * A simple Component for displaying an Adobe Flash SWF movie. The movie will be sized and can participate
	 * in layout like any other Component.
	 * 
	 * This component requires the third-party SWFObject library version 2.2 or above. It is not included within
	 * the ExtJS distribution, so you will have to include it into your page manually in order to use this component.
	 * The SWFObject library can be downloaded from the [SWFObject project page](http://code.google.com/p/swfobject)
	 * and then simply import it into the head of your HTML document:
	 * 
	 *    &lt;script type="text/javascript" src="path/to/local/swfobject.js"&gt;&lt;/script&gt;
	 * 
	 * ## Configuration
	 * 
	 * This component allows several options for configuring how the target Flash movie is embedded. The most
	 * important is the required [url](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-url) which points to the location of the Flash movie to load. Other
	 * configurations include:
	 * 
	 * - [backgroundColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-backgroundColor)
	 * - [wmode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-wmode)
	 * - [flashVars](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashVars)
	 * - [flashParams](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashParams)
	 * - [flashAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashAttributes)
	 * 
	 * ## Example usage:
	 * 
	 *    var win = Ext.widget('window', {
	 *        title: "It's a tiger!",
	 *        layout: 'fit',
	 *        width: 300,
	 *        height: 300,
	 *        x: 20,
	 *        y: 20,
	 *        resizable: true,
	 *        items: {
	 *            xtype: 'flash',
	 *            url: 'tiger.swf'
	 *        }
	 *    });
	 *    win.show();
	 * 
	 * ## Express Install
	 * 
	 * Adobe provides a tool called [Express Install](http://www.adobe.com/devnet/flashplayer/articles/express_install.html)
	 * that offers users an easy way to upgrade their Flash player. If you wish to make use of this, you should set
	 * the static EXPRESS_INSTALL_URL property to the location of your Express Install SWF file:
	 * 
	 *    Ext.flash.Component.EXPRESS_INSTALL_URL = 'path/to/local/expressInstall.swf';
	 * 
	 */
	interface Def extends Ext.flash.Component {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.flash.Component.Cfg}
		 */
		config?: Ext.flash.Component.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define) for additional usage examples.
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
		 * no cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.flash.Component.Statics|Ext.Component.Statics|Ext.Base.Statics}  
		 * @type {Ext.flash.Component.Statics}
		 */
		statics?: (() => Ext.flash.Component.Statics | Ext.Component.Statics | Ext.Base.Statics) | Ext.flash.Component.Statics | any;
	}
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.flash.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html)
	 * A simple Component for displaying an Adobe Flash SWF movie. The movie will be sized and can participate
	 * in layout like any other Component.
	 * 
	 * This component requires the third-party SWFObject library version 2.2 or above. It is not included within
	 * the ExtJS distribution, so you will have to include it into your page manually in order to use this component.
	 * The SWFObject library can be downloaded from the [SWFObject project page](http://code.google.com/p/swfobject)
	 * and then simply import it into the head of your HTML document:
	 * 
	 *    &lt;script type="text/javascript" src="path/to/local/swfobject.js"&gt;&lt;/script&gt;
	 * 
	 * ## Configuration
	 * 
	 * This component allows several options for configuring how the target Flash movie is embedded. The most
	 * important is the required [url](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-url) which points to the location of the Flash movie to load. Other
	 * configurations include:
	 * 
	 * - [backgroundColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-backgroundColor)
	 * - [wmode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-wmode)
	 * - [flashVars](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashVars)
	 * - [flashParams](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashParams)
	 * - [flashAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashAttributes)
	 * 
	 * ## Example usage:
	 * 
	 *    var win = Ext.widget('window', {
	 *        title: "It's a tiger!",
	 *        layout: 'fit',
	 *        width: 300,
	 *        height: 300,
	 *        x: 20,
	 *        y: 20,
	 *        resizable: true,
	 *        items: {
	 *            xtype: 'flash',
	 *            url: 'tiger.swf'
	 *        }
	 *    });
	 *    win.show();
	 * 
	 * ## Express Install
	 * 
	 * Adobe provides a tool called [Express Install](http://www.adobe.com/devnet/flashplayer/articles/express_install.html)
	 * that offers users an easy way to upgrade their Flash player. If you wish to make use of this, you should set
	 * the static EXPRESS_INSTALL_URL property to the location of your Express Install SWF file:
	 * 
	 *    Ext.flash.Component.EXPRESS_INSTALL_URL = 'path/to/local/expressInstall.swf';
	 * 
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * The url for installing flash if it doesn't exist. This should be set to a local resource.
		 * See [http://get.adobe.com/flashplayer/](http://get.adobe.com/flashplayer/) for details.
		 * @property
		 * @public (property)
		 * @static
		 * @readonly
		 * @default 'http:/' + '/swfobject.googlecode.com/svn/trunk/swfobject/expressInstall.swf'
		 * @type {string}
		 */
		EXPRESS_INSTALL_URL?: string;
		/** 
		 * Add methods / properties to the prototype of this class.
		 * 
		 *    Ext.define('My.awesome.Cat', {
		 *        constructor: function() {
		 *            ...
		 *        }
		 *    });
		 *    
		 *     My.awesome.Cat.addMembers({
		 *         meow: function() {
		 *            alert('Meowww...');
		 *         }
		 *     });
		 *    
		 *     var kitty = new My.awesome.Cat();
		 *     kitty.meow();
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     members    The members to add to this class.
		 * @param   {boolean}                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.flash.Component;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Base;
		/** 
		 * Add / override static properties of this class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.addStatics({
		 *        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
		 *        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
		 *        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     members
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.flash.Component;
		addStatics? (members: object): typeof Ext.Component;
		addStatics? (members: object): typeof Ext.Base;
		/** 
		 * Create a new instance of this Class.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        ...
		 *    });
		 *    
		 *    My.cool.Class.create({
		 *        someConfig: true
		 *    });
		 * 
		 * All parameters are passed to the constructor of the class.
		 * @method
		 * @public (method)
		 * @static
		 * @returns {object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Create aliases for existing prototype methods. Example:
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        method1: function() { ... },
		 *        method2: function() { ... }
		 *    });
		 *    
		 *    var test = new My.cool.Class();
		 *    
		 *    My.cool.Class.createAlias({
		 *        method3: 'method1',
		 *        method4: 'method2'
		 *    });
		 *    
		 *    test.method3(); // test.method1()
		 *    
		 *    My.cool.Class.createAlias('method5', 'method3');
		 *    
		 *    test.method5(); // test.method3() -&gt; test.method1()
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object} alias
		 * The new method name, or an object to set multiple aliases. See
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
		 * @param   {string|object} origin The original method name
		 * @returns {void}                 
		 */
		createAlias? (alias: string | object, origin: string | object): void;
		/** 
		 * Get the current class' name in string format.
		 * 
		 *    Ext.define('My.cool.Class', {
		 *        constructor: function() {
		 *            alert(this.self.getName()); // alerts 'My.cool.Class'
		 *        }
		 *    });
		 *    
		 *    My.cool.Class.getName(); // 'My.cool.Class'
		 * 
		 * @method
		 * @public (method)
		 * @static
		 * @returns {string}  className
		 */
		getName? (): string;
		/** 
		 * Override members of this class. Overridden methods can be invoked via
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 *    
		 *    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
		 *                              // alerts "I'm a cat!"
		 *                              // alerts "Meeeeoooowwww"
		 * 
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
		 * instead:
		 * 
		 *    Ext.define('My.CatOverride', {
		 *        override: 'My.Cat',
		 *        constructor: function() {
		 *            alert("I'm going to be a cat!");
		 *    
		 *            this.callParent(arguments);
		 *    
		 *            alert("Meeeeoooowwww");
		 *        }
		 *    });
		 * 
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
		 * which can properly order the override and its target class and the build process
		 * can determine whether the override is needed based on the required state of the
		 * target class (My.Cat).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}   members
		 * The properties to add to this class. This should be
		 * specified as an object literal containing one or more properties.
		 * @returns {Ext.Base}         this class
		 */
		override? (members: object): Ext.Base;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callParent? (args: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @static
		 * @param   {object} args
		 * @returns {void}        
		 */
		callSuper? (args: object): void;
		/** 
		 * Adds new config properties to this class. This is called for classes when they
		 * are declared, then for any mixins that class may define and finally for any
		 * overrides defined that target the class.
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object}    config
		 * @param   {Ext.Class} [mixinClass] The mixin class if the configs are from a mixin.
		 * @returns {void}                   
		 */
		addConfig? (config: object, mixinClass?: Ext.Class): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} members
		 * @returns {void}           
		 */
		addInheritableStatics? (members: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     name
		 * @param   {object}                                     member
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.flash.Component;
		addMember? (name: object, member: object): typeof Ext.Component;
		addMember? (name: object, member: object): typeof Ext.Base;
		/** 
		 * Borrow another class' members to the prototype of this class.
		 * 
		 *    Ext.define('Bank', {
		 *        money: '$$$',
		 *        printMoney: function() {
		 *            alert('$$$$$$$');
		 *        }
		 *    });
		 *    
		 *    Ext.define('Thief', {
		 *        ...
		 *    });
		 *    
		 *    Thief.borrow(Bank, ['money', 'printMoney']);
		 *    
		 *    var steve = new Thief();
		 *    
		 *    alert(steve.money); // alerts '$$$'
		 *    steve.printMoney(); // alerts '$$$$$$$'
		 * 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {Ext.Base}     fromClass The class to borrow members from
		 * @param   {any[]|string} members   The names of the members to borrow
		 * @returns {Ext.Base}               this
		 */
		borrow? (fromClass: Ext.Base, members: any[] | string): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} config
		 * @returns {void}          
		 */
		extend? (config: object): void;
		/** 
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
		 * @method
		 * @private (method)
		 * @static
		 * @returns {Ext.Configurator}  
		 */
		getConfigurator? (): Ext.Configurator;
		/** 
		 * Used internally by the mixins pre-processor
		 * @method
		 * @private (method)
		 * @static
		 * @param   {object} name
		 * @param   {object} mixinClass
		 * @returns {void}              
		 */
		mixin? (name: object, mixinClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                     fn
		 * @param   {object}                                     scope
		 * @returns {Ext.flash.Component|Ext.Component|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.flash.Component;
		onExtended? (fn: object, scope: object): typeof Ext.Component;
		onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		triggerExtended? (): void;
	}
}
declare namespace Ext.flash.Component.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.flash.Component.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#method-addListener)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * When set to `true`, the listener is fired in the capture phase of the event propagation
		 *  sequence, instead of the default bubble phase.
		 * 
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.flash.Component.methodParams.forceComponentLayout {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.flash.Component.forceComponentLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#method-forceComponentLayout)
	 * An object with layout options.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` if this layout should be deferred.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		defer?: boolean;
		/** 
		 * `true` if this layout should be the root of the layout.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		isRoot?: boolean;
	}
}
declare namespace Ext.flash.Component.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.flash.Component.on](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#method-on)
	 * An object containing handler configuration.
	 * 
	 * **Note:** The options object will also be passed as the last argument to every
	 * event handler.
	 * 
	 * This object may contain any of the following properties:
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * The scope (`this` reference) in which the handler function is executed. **If omitted,
		 *   defaults to the object which fired the event.**
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * The number of milliseconds to delay the invocation of the handler after the event
		 *   fires.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * True to add a handler to handle just the next firing of the event, and then remove
		 *   itself.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-requestAnimationFrame). If the
		 *   event fires again before that time, the handler is not rescheduled - the handler
		 *   will only be called once when the next animation frame is fired, with the last set
		 *   of arguments passed.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		onFrame?: number;
		/** 
		 * Only call the handler if the event was fired on the target Observable, _not_ if the
		 *   event was bubbled up from a child Observable.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Observable}
		 */
		target?: Ext.util.Observable;
		/** 
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) which will exist only after the
		 *   Component is rendered.
		 * 
		 *   For example, to add a click listener to a Panel's body:
		 * 
		 *      var panel = new Ext.panel.Panel({
		 *          title: 'The title',
		 *          listeners: {
		 *              click: this.handlePanelClick,
		 *              element: 'body'
		 *          }
		 *      });
		 * 
		 * In order to remove listeners attached using the element, you'll need to reference
		 * the element itself as seen below.
		 * 
		 *     panel.body.un(...)
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		element?: string;
		/** 
		 * A simple selector to filter the event target or look for a descendant of the target.
		 * 
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * When set to `true`, the listener is fired in the capture phase of the event propagation
		 *  sequence, instead of the default bubble phase.
		 * 
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
		 *   _element_ config.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		destroyable?: boolean;
		/** 
		 * An optional numeric priority that determines the order in which event handlers
		 *   are run. Event handlers with no priority will be run as if they had a priority
		 *   of 0. Handlers with a higher priority will be prioritized to run sooner than
		 *   those with a lower priority.  Negative numbers can be used to set a priority
		 *   lower than the default. Internally, the framework uses a range of 1000 or
		 *   greater, and -1000 or lesser for handlers that are intended to run before or
		 *   after all others, so it is recommended to stay within the range of -999 to 999
		 *   when setting the priority of event handlers in application-level code.
		 *   A priority must be an integer to be valid.  Fractional values are reserved for
		 *   internal framework use.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * A legacy option that is provided for backward compatibility.
		 *   It is recommended to use the `priority` option instead.  Available options are:
		 * 
		 * - `'before'`: equal to a priority of `100`
		 * - `'current'`: equal to a priority of `0` or default priority
		 * - `'after'`: equal to a priority of `-100`
		 * @configuration
		 * @optional
		 * @default 'current'
		 * @type {string}
		 */
		order?: string;
	}
}
declare namespace Ext.flash.Component.methodParams.onFocusEnter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.flash.Component.onFocusEnter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#method-onFocusEnter)
	 */
	interface E extends Ext.base.Params {
		/** 
		 * The underlying DOM event.
		 * @configuration
		 * @optional
		 * @type {Ext.event.Event}
		 */
		event?: Ext.event.Event;
		/** 
		 * The element gaining focus.
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		target?: HTMLElement;
		/** 
		 * The element losing focus.
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		relatedTarget?: HTMLElement;
		/** 
		 * The Component gaining focus.
		 * @configuration
		 * @optional
		 * @type {Ext.Component}
		 */
		toComponent?: Ext.Component;
		/** 
		 * The Component losing focus.
		 * @configuration
		 * @optional
		 * @type {Ext.Component}
		 */
		fromComponent?: Ext.Component;
	}
}
declare namespace Ext.flash.Component.methodParams.onFocusLeave {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.flash.Component.onFocusLeave](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#method-onFocusLeave)
	 */
	interface E extends Ext.event.Event {
		/** 
		 * The underlying DOM event.
		 * @configuration
		 * @optional
		 * @type {Ext.event.Event}
		 */
		event?: Ext.event.Event;
		/** 
		 * The element gaining focus.
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		target?: HTMLElement;
		/** 
		 * The element losing focus.
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		relatedTarget?: HTMLElement;
		/** 
		 * The Component gaining focus.
		 * @configuration
		 * @optional
		 * @type {Ext.Component}
		 */
		toComponent?: Ext.Component;
		/** 
		 * The Component losing focus.
		 * @configuration
		 * @optional
		 * @type {Ext.Component}
		 */
		fromComponent?: Ext.Component;
	}
}
declare namespace Ext.flash.Component.methodParams.updateLayout {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.flash.Component.updateLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#method-updateLayout)
	 * An object with layout options.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` if this layout should be deferred.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		defer?: boolean;
		/** 
		 * `true` if this layout should be the root of the layout.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		isRoot?: boolean;
	}
}
declare namespace Ext.flash.Component {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.flash.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html)
	 * A simple Component for displaying an Adobe Flash SWF movie. The movie will be sized and can participate
	 * in layout like any other Component.
	 * 
	 * This component requires the third-party SWFObject library version 2.2 or above. It is not included within
	 * the ExtJS distribution, so you will have to include it into your page manually in order to use this component.
	 * The SWFObject library can be downloaded from the [SWFObject project page](http://code.google.com/p/swfobject)
	 * and then simply import it into the head of your HTML document:
	 * 
	 *    &lt;script type="text/javascript" src="path/to/local/swfobject.js"&gt;&lt;/script&gt;
	 * 
	 * ## Configuration
	 * 
	 * This component allows several options for configuring how the target Flash movie is embedded. The most
	 * important is the required [url](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-url) which points to the location of the Flash movie to load. Other
	 * configurations include:
	 * 
	 * - [backgroundColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-backgroundColor)
	 * - [wmode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-wmode)
	 * - [flashVars](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashVars)
	 * - [flashParams](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashParams)
	 * - [flashAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashAttributes)
	 * 
	 * ## Example usage:
	 * 
	 *    var win = Ext.widget('window', {
	 *        title: "It's a tiger!",
	 *        layout: 'fit',
	 *        width: 300,
	 *        height: 300,
	 *        x: 20,
	 *        y: 20,
	 *        resizable: true,
	 *        items: {
	 *            xtype: 'flash',
	 *            url: 'tiger.swf'
	 *        }
	 *    });
	 *    win.show();
	 * 
	 * ## Express Install
	 * 
	 * Adobe provides a tool called [Express Install](http://www.adobe.com/devnet/flashplayer/articles/express_install.html)
	 * that offers users an easy way to upgrade their Flash player. If you wish to make use of this, you should set
	 * the static EXPRESS_INSTALL_URL property to the location of your Express Install SWF file:
	 * 
	 *    Ext.flash.Component.EXPRESS_INSTALL_URL = 'path/to/local/expressInstall.swf';
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * An incrementing numeric counter indicating activation index for use by the [zIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#property-zIndexManager)
		 * to sort its stack.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		activeCounter?: number;
		/** 
		 * By default, when the [alignTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-alignTo) method is called, a floating component will
		 * scroll to keep aligned with the anchoring element if the anchoring element is part of the scroll.
		 * 
		 * If this is not necessary, and the `alignTo` is a one-off operation then set this config to `false`.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		alignOnScroll?: boolean;
		/** 
		 * A Component or Element by which to position this component according to the [defaultAlign](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-defaultAlign).
		 * Defaults to the owning Container.
		 * 
		 * _Only applicable if this component is [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating)_
		 * 
		 * _Used upon first show_.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		alignTarget?: string;
		/** 
		 * A flag indicating that this component should be on the top of the z-index stack for use by the [zIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#property-zIndexManager)
		 * to sort its stack.
		 * 
		 * This may be a positive number to prioritize the ordering of multiple visible always on top components.
		 * 
		 * This may be set to a _negative_ number to prioritize a component to the _bottom_ of the z-index stack.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean|number}
		 */
		alwaysOnTop?: boolean | number;
		/** 
		 * This configuration option is to be applied to **child `items`** of a container managed
		 * by an [Anchor Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Anchor.html).
		 * 
		 * This value is what tells the layout how an item should be anchored to the container. `items`
		 * added to an AnchorLayout accept an anchoring-specific config property of **anchor** which is a string
		 * containing two values: the horizontal anchor value and the vertical anchor value (for example, '100% 50%').
		 * The following types of anchor values are supported:
		 * 
		 * <ul>
		 * <li>
		 * 
		 * **Percentage** : Any value between 1 and 100, expressed as a percentage.
		 * 
		 * The first anchor is the percentage width that the item should take up within the container, and the
		 * second is the percentage height.  For example:
		 * 
		 *    // two values specified
		 *    anchor: '100% 50%' // render item complete width of the container and
		 *                       // 1/2 height of the container
		 *    // one value specified
		 *    anchor: '100%'     // the width value; the height will default to auto
		 * 
		 * </li>
		 * <li>
		 * 
		 * **Offsets** : Any positive or negative integer value.
		 * 
		 * This is a raw adjustment where the first anchor is the offset from the right edge of the container,
		 * and the second is the offset from the bottom edge. For example:
		 * 
		 *    // two values specified
		 *    anchor: '-50 -100' // render item the complete width of the container
		 *                       // minus 50 pixels and
		 *                       // the complete height minus 100 pixels.
		 *    // one value specified
		 *    anchor: '-50'      // anchor value is assumed to be the right offset value
		 *                       // bottom offset will default to 0
		 * 
		 * </li>
		 * <li>
		 * 
		 * **Sides** : Valid values are `right` (or `r`) and `bottom` (or `b`).
		 * 
		 * Either the container must have a fixed size or an anchorSize config value defined at render time in
		 * order for these to have any effect.
		 * </li>
		 * <li>
		 * 
		 * **Mixed** :
		 * 
		 * Anchor values can also be mixed as needed.  For example, to render the width offset from the container
		 * right edge by 50 pixels and 75% of the container's height use:
		 * 
		 *    anchor:   '-50 75%'
		 * 
		 * </li>
		 * </ul>
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		anchor?: string;
		/** 
		 * `true` to animate the shadow along with the component while the component is animating.
		 * By default the shadow is hidden while the component is animating
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		animateShadow?: boolean;
		/** 
		 * An object containing ARIA attributes to be set
		 * on this Component's ARIA element. Use this to set the attributes that cannot be
		 * determined by the Component's state, such as `aria-live`, `aria-flowto`, etc.
		 * 
		 * **Note** that this config is only meaningful at the Component rendering time,
		 * and setting it after that will do nothing.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {object}
		 */
		ariaAttributes?: object;
		/** 
		 * DOM selector for a child element that is to be used
		 * as description for this Component, set in `aria-describedby` attribute.
		 * The selector works the same way as [ariaLabelledBy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ariaDescribedBy?: string;
		/** 
		 * ARIA label for this Component. It is best to use
		 * [ariaLabelledBy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy) option instead, because screen readers prefer
		 * `aria-labelledby` attribute to `aria-label`. [ariaLabel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaLabel) and
		 * [ariaLabelledBy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy) config options are mutually exclusive.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ariaLabel?: string;
		/** 
		 * DOM selector for a child element that is to be used
		 * as label for this Component, set in `aria-labelledby` attribute.
		 * If the selector is by `#id`, the label element can be any existing element,
		 * not necessarily a child of the main Component element.
		 * 
		 * [ariaLabelledBy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy) and [ariaLabel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Accessible.html#cfg-ariaLabel) config options are
		 * mutually exclusive, and `ariaLabelledBy` has the higher precedence.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ariaLabelledBy?: string;
		/** 
		 * A tag name or [DomHelper](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Helper.html) spec used to create the [Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getEl) which will
		 * encapsulate this Component.
		 * 
		 * You do not normally need to specify this. For the base classes [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) and
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html), this defaults to **'div'**. The more complex Sencha classes use a more
		 * complex DOM structure specified by their own [renderTpl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTpl)s.
		 * 
		 * This is intended to allow the developer to create application-specific utility Components encapsulated by
		 * different DOM elements. Example usage:
		 * 
		 *    {
		 *        xtype: 'component',
		 *        autoEl: {
		 *            tag: 'img',
		 *            src: 'http://www.example.com/example.jpg'
		 *        }
		 *    }, {
		 *        xtype: 'component',
		 *        autoEl: {
		 *            tag: 'blockquote',
		 *            html: 'autoEl is cool!'
		 *        }
		 *    }, {
		 *        xtype: 'container',
		 *        autoEl: 'ul',
		 *        cls: 'ux-unordered-list',
		 *        items: {
		 *            xtype: 'component',
		 *            autoEl: 'li',
		 *            html: 'First list item'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		autoEl?: string | object;
		/** 
		 * This config is intended mainly for non-[floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) Components which may or may not be shown. Instead of using
		 * [renderTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTo) in the configuration, and rendering upon construction, this allows a Component to render itself
		 * upon first _[show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-show)_. If [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) is `true`, the value of this config is omitted as if it is `true`.
		 * 
		 * Specify as `true` to have this Component render to the document body upon first show.
		 * 
		 * Specify as an element, or the ID of an element to have this Component render to a specific element upon first
		 * show.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean|string|HTMLElement|Ext.dom.Element}
		 */
		autoRender?: boolean | string | HTMLElement | Ext.dom.Element;
		/** 
		 * `true` to use overflow:'auto' on the components layout element and show scroll bars automatically when necessary,
		 * `false` to clip any overflowing content.
		 * 
		 * This should not be combined with [overflowX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-overflowX) or  [overflowY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-overflowY).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoScroll?: boolean;
		/** 
		 * `true` to automatically show the component upon creation. This config option may only be used for
		 * [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) components or components that use [autoRender](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-autoRender).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoShow?: boolean;
		/** 
		 * The background color of the SWF movie.
		 * @configuration
		 * @optional
		 * @default "#ffffff"
		 * @type {string}
		 */
		backgroundColor?: string;
		/** 
		 * The base CSS class to apply to this component's element. This will also be prepended to elements within this
		 * component like Panel's body will get a class `x-panel-body`. This means that if you create a subclass of Panel, and
		 * you want it to get all the Panels styling for the element and the body, you leave the `baseCls` `x-panel` and use
		 * `componentCls` to add specific styling for this component.
		 * @configuration
		 * @optional
		 * @default 'x-component'
		 * @type {string}
		 */
		baseCls?: string;
		/** 
		 * Setting this config option adds or removes data bindings for other configs.
		 * For example, to bind the `title` config:
		 * 
		 *     var panel = Ext.create({
		 *         xtype: 'panel',
		 *         bind: {
		 *             title: 'Hello {user.name}'
		 *         }
		 *     });
		 * 
		 * To dynamically add bindings:
		 * 
		 *     panel.setBind({
		 *         title: 'Greetings {user.name}!'
		 *     });
		 * 
		 * To remove bindings:
		 * 
		 *     panel.setBind({
		 *         title: null
		 *     });
		 * 
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind). The
		 * `ViewModel` instance is determined by `lookupViewModel`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {object}
		 */
		bind?: object;
		/** 
		 * Specifies the border size for this component. The border can be a single numeric value to apply to all sides or it can
		 * be a CSS style specification for each style, for example: '10 5 3 10' (top, right, bottom, left).
		 * 
		 * For components that have no border by default, setting this won't make the border appear by itself.
		 * You also need to specify border color and style:
		 * 
		 *    border: 5,
		 *    style: {
		 *        borderColor: 'red',
		 *        borderStyle: 'solid'
		 *    }
		 * 
		 * To turn off the border, use `border: false`.
		 * @configuration
		 * @optional
		 * @type {number|string|boolean}
		 */
		border?: number | string | boolean;
		/** 
		 * The canonical form of `childEls` is an object keyed by child's property name
		 * with values that are objects with the following properties.
		 * 
		 * - `itemId` - The id to combine with the Component's id that is the id of the
		 *   child element.
		 * - `id` - The id of the child element.
		 * - `leaf` - Set to `true` to ignore content when scanning for childEls. This
		 *   should be set on things like the generated content for an [`Ext.view.View`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.view.View.html).
		 * - `select`: A selector that will be passed to [Ext.dom.Element.select](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html#method-select).
		 * - `selectNode`: A selector that will be passed to [Ext.dom.Element.selectNode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html#method-selectNode).
		 * 
		 * For example:
		 * 
		 *     childEls: {
		 *         button: true,
		 *         buttonText: 'text',
		 *         buttonImage: {
		 *             itemId: 'image'
		 *         }
		 *     }
		 * 
		 * The above is translated into the following complete form:
		 * 
		 *     childEls: {
		 *         button: {
		 *             name: 'button',
		 *             itemId: 'button'
		 *         },
		 *         buttonText: {
		 *             name: 'buttonText',
		 *             itemId: 'text'
		 *         },
		 *         buttonImage: {
		 *             name: 'buttonImage',
		 *             itemId: 'image'
		 *         }
		 *     }
		 * 
		 * The above can be provided as an array like so:
		 * 
		 *     childEls: [
		 *         'button',
		 *         { name: 'buttonText', itemId: 'text' },
		 *         { name: 'buttonImage', itemId: 'image' }
		 *     }
		 * 
		 * For example, a Component which renders a title and body text:
		 * 
		 *    Ext.create('Ext.Component', {
		 *        renderTo: Ext.getBody(),
		 *        renderTpl: [
		 *            '&lt;h1 id="{id}-title" data-ref="title"&gt;{title}&lt;/h1&gt;',
		 *            '&lt;p&gt;{msg}&lt;/p&gt;',
		 *        ],
		 *        renderData: {
		 *            title: "Error",
		 *            msg: "Something went wrong"
		 *        },
		 *        childEls: ["title"],
		 *        listeners: {
		 *            afterrender: function(cmp){
		 *                // After rendering the component will have a title property
		 *                cmp.title.setStyle({color: "red"});
		 *            }
		 *        }
		 *    });
		 * 
		 * **Note:** `childEl`s in the [renderTpl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTpl)
		 * must be referenced in a **data-ref** attribute.  Notice in the above example
		 * that the "title" `childEl` is set in the `renderTpl` using
		 * **data-ref="title"**.
		 * 
		 * When using `select`, the property will be an instance of [Ext.CompositeElement](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.CompositeElement.html).
		 * In all other cases, the property will be an [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html) or `null`
		 * if not found.
		 * 
		 * Care should be taken when using `select` or `selectNode` to find child elements.
		 * The following issues should be considered:
		 * 
		 * - Performance: using selectors can be 10x slower than id lookup.
		 * - Over-selecting: selectors are applied after the DOM elements for all children
		 *   have been rendered, so selectors can match elements from child components
		 *   (including nested versions of the same component) accidentally.
		 * 
		 * This above issues are most important when using `select` since it returns multiple
		 * elements.
		 * @configuration
		 * @optional
		 * @default {frameTable: {frame: true}, frameTL: {frame: 'tl'}, frameTC: {frame: 'tc'}, frameTR: {frame: 'tr'}, frameML: {frame: 'ml'}, frameBody: {frame: 'mc'}, frameMR: {frame: 'mr'}, frameBL: {frame: 'bl'}, frameBC: {frame: 'bc'}, frameBR: {frame: 'br'}}
		 * @type {object|string[]|object[]}
		 */
		childEls?: object | string[] | object[];
		/** 
		 * An optional extra CSS class that will be added to this component's Element.
		 * The value can be a string, a list of strings separated by spaces, or an array of strings. This can be useful
		 * for adding customized styles to the component or any of its children using standard CSS rules.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string|string[]}
		 */
		cls?: string | string[];
		/** 
		 * Defines the column width inside [column layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Column.html).
		 * 
		 * The columnWidth property is always evaluated as a percentage and must be a decimal value greater than 0 and
		 * less than 1 (e.g., .25).  See the description at the top of [column layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Column.html) for
		 * additional usage details when combining width and columnWidth configs within the layout.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		columnWidth?: number;
		/** 
		 * CSS Class to be added to a components root level element to give distinction to it via styling.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		componentCls?: string;
		/** 
		 * The sizing and positioning of a Component's internal Elements is the responsibility of the Component's layout
		 * manager which sizes a Component's internal structure in response to the Component being sized.
		 * 
		 * Generally, developers will not use this configuration as all provided Components which need their internal
		 * elements sizing (Such as [input fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html)) come with their own componentLayout managers.
		 * 
		 * The [default layout manager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Auto.html) will be used on instances of the base [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html)
		 * class which simply sizes the Component's encapsulating element to the height and width specified in the
		 * [setSize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setSize) method.
		 * @configuration
		 * @optional
		 * @default 'autocomponent'
		 * @type {string|object}
		 */
		componentLayout?: string | object;
		/** 
		 * True to constrain this Components within its containing element, false to allow it to fall outside of its containing
		 * element. By default this Component will be rendered to `document.body`. To render and constrain this Component within
		 * another element specify [renderTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTo).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		constrain?: boolean;
		/** 
		 * A [Region](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Region.html) (or an element from which a Region measurement will be read) which is used
		 * to constrain the component. Only applies when the component is floating.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Region|Ext.dom.Element}
		 */
		constrainTo?: Ext.util.Region | Ext.dom.Element;
		/** 
		 * An object or a string (in TRBL order) specifying insets from the configured [constrain region](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-constrainTo)
		 * within which this component must be constrained when positioning or sizing.
		 * example:
		 * 
		 *    constraintInsets: '10 10 10 10' // Constrain with 10px insets from parent
		 * @configuration
		 * @optional
		 * @type {object|string}
		 */
		constraintInsets?: object | string;
		/** 
		 * Specify an existing HTML element, or the `id` of an existing HTML element to use as the content for this component.
		 * 
		 * This config option is used to take an existing HTML element and place it in the layout element of a new component
		 * (it simply moves the specified DOM element _after the Component is rendered_ to use as the content.
		 * 
		 * **Notes:**
		 * 
		 * The specified HTML element is appended to the layout element of the component _after any configured
		 * [HTML](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-html) has been inserted_, and so the document will not contain this element at the time
		 * the [render](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-render) event is fired.
		 * 
		 * The specified HTML element used will not participate in any **[`layout`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-layout)**
		 * scheme that the Component may use. It is just HTML. Layouts operate on child
		 * **[`items`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-items)**.
		 * 
		 * Add either the `x-hidden` or the `x-hidden-display` CSS class to prevent a brief flicker of the content before it
		 * is rendered to the panel.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		contentEl?: string;
		/** 
		 * A string alias, a configuration object or an instance of a `ViewController` for
		 * this container. Sample usage:
		 * 
		 *    Ext.define('MyApp.UserController', {
		 *        alias: 'controller.user'
		 *    });
		 *    
		 *    Ext.define('UserContainer', {
		 *        extend: 'Ext.container.container',
		 *        controller: 'user'
		 *    });
		 *    // Or
		 *    Ext.define('UserContainer', {
		 *        extend: 'Ext.container.container',
		 *        controller: {
		 *            type: 'user',
		 *            someConfig: true
		 *        }
		 *    });
		 *    
		 *    // Can also instance at runtime
		 *    var ctrl = new MyApp.UserController();
		 *    var view = new UserContainer({
		 *        controller: ctrl
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object|Ext.app.ViewController}
		 */
		controller?: string | object | Ext.app.ViewController;
		/** 
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-tpl) to update the content
		 * area of the Component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		data?: object;
		/** 
		 * The default [Ext.dom.Element#getAlignToXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Positionable.html#method-getAlignToXY) anchor position value for this component
		 * relative to its [alignTarget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-alignTarget) (which defaults to its owning Container).
		 * 
		 * _Only applicable if this component is [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating)_
		 * 
		 * _Used upon first show_.
		 * @configuration
		 * @optional
		 * @default "c-c"
		 * @type {string}
		 */
		defaultAlign?: string;
		/** 
		 * If `true`, this component will be the default scope (this pointer) for events
		 * specified with string names so that the scope can be dynamically resolved. The
		 * component will automatically become the defaultListenerScope if a
		 * [controller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html) for some sample
		 * usages.
		 * 
		 * **NOTE**: This value can only be reliably set at construction time. Setting it
		 * after that time may not correctly rewire all of the potentially effected
		 * listeners.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		defaultListenerScope?: boolean;
		/** 
		 * `true` to disable the component.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		disabled?: boolean;
		/** 
		 * CSS class to add when the Component is disabled.
		 * @configuration
		 * @optional
		 * @default 'x-item-disabled'
		 * @type {string}
		 */
		disabledCls?: string;
		/** 
		 * The side of the [panel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html) where this component is to be
		 * docked when specified in the panel's
		 * [dockedItems](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#cfg-dockedItems) config.
		 * 
		 * Possible values are:
		 * 
		 * - top
		 * - bottom
		 * - left
		 * - right
		 * @configuration
		 * @optional
		 * @type {'top'|'bottom'|'left'|'right'}
		 */
		dock?: 'top' | 'bottom' | 'left' | 'right';
		/** 
		 * Specify as true to make a [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-floating) Component draggable using the Component's encapsulating element as
		 * the drag handle.
		 * 
		 * This may also be specified as a config object for the [ComponentDragger](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.ComponentDragger.html) which is
		 * instantiated to perform dragging.
		 * 
		 * For example to create a Component which may only be dragged around using a certain internal element as the drag
		 * handle, use the delegate option:
		 * 
		 *    new Ext.Component({
		 *        constrain: true,
		 *        floating: true,
		 *        style: {
		 *            backgroundColor: '#fff',
		 *            border: '1px solid black'
		 *        },
		 *        html: '&lt;h1 style="cursor:move"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',
		 *        draggable: {
		 *            delegate: 'h1'
		 *        }
		 *    }).show();
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean|object}
		 */
		draggable?: boolean | object;
		/** 
		 * True to prompt the user to install flash if not installed. Note that this uses
		 * [Ext.FlashComponent.EXPRESS_INSTALL_URL](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#static-property-EXPRESS_INSTALL_URL), which should be set to the local resource.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expressInstall?: boolean;
		/** 
		 * Configure as `true` to have this Component fixed at its `X, Y` coordinates in the browser viewport, immune
		 * to scrolling the document.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		fixed?: boolean;
		/** 
		 * A set of key value pairs to be passed to the flash object as attributes.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		flashAttributes?: object;
		/** 
		 * A set of key value pairs to be passed to the flash object as parameters. Possible parameters can be found here:
		 * http://kb2.adobe.com/cps/127/tn_12701.html
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		flashParams?: object;
		/** 
		 * A set of key value pairs to be passed to the flash object as flash variables.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		flashVars?: object;
		/** 
		 * Indicates the version the flash content was published for.
		 * @configuration
		 * @optional
		 * @default "9.0.115"
		 * @type {string}
		 */
		flashVersion?: string;
		/** 
		 * Flex may be applied to **child items** of a box layout ([vbox](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.VBox.html) or
		 * [hbox](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.HBox.html)). Each child item with a flex property will
		 * fill space (horizontally in `hbox`, vertically in `vbox`) according to that item's
		 * **relative** flex value compared to the sum of all items with a flex value specified.
		 * 
		 * Any child items that have either a `flex` of `0` or `undefined`
		 * will not be 'flexed' (the initial size will not be changed).
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		flex?: number;
		/** 
		 * Specify as true to float the Component outside of the document flow using CSS absolute positioning.
		 * 
		 * Components such as [Window](https://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)s and [Menu](https://docs.sencha.com/extjs/6.2.0/classic/Ext.menu.Menu.html)s are floating by default.
		 * 
		 * Floating Components that are programmatically [rendered](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-render) will register
		 * themselves with the global [ZIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.WindowManager.html)
		 * 
		 * ### Floating Components as child items of a Container
		 * 
		 * A floating Component may be used as a child item of a Container. This just allows the floating Component to seek
		 * a ZIndexManager by examining the ownerCt chain.
		 * 
		 * When configured as floating, Components acquire, at render time, a [ZIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ZIndexManager.html) which
		 * manages a stack of related floating Components. The ZIndexManager sorts its stack according to
		 * an incrementing access counter and the [alwaysOnTop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#cfg-alwaysOnTop) config when the Component's [toFront](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-toFront) method is called.
		 * 
		 * The ZIndexManager is found by traversing up the [ownerCt](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-ownerCt) chain to find an ancestor which itself is
		 * floating. This is so that descendant floating Components of floating _Containers_ (Such as a ComboBox dropdown
		 * within a Window) can have its zIndex managed relative to any siblings, but always **above** that floating
		 * ancestor Container.
		 * 
		 * If no floating ancestor is found, a floating Component registers itself with the default [ZIndexManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.WindowManager.html).
		 * 
		 * Floating components _do not participate in the Container's layout_. Because of this, they are not rendered until
		 * you explicitly [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-show) them.
		 * 
		 * After rendering, the ownerCt reference is deleted, and the [floatParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-floatParent) property is set to the found
		 * floating ancestor Container. If no floating ancestor Container was found the [floatParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-floatParent) property will
		 * not be set.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		floating?: boolean;
		/** 
		 * CSS class that will be added to focused
		 * Component, and removed when Component blurs.
		 * @configuration
		 * @optional
		 * @default 'x-focus'
		 * @type {string}
		 */
		focusCls?: string;
		/** 
		 * Specifies whether the floated component should be automatically [focused](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-focus) when
		 * it is [brought to the front](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Floating.html#method-toFront).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		focusOnToFront?: boolean;
		/** 
		 * When inside FormPanel, any component configured with `formBind: true` will
		 * be enabled/disabled depending on the validity state of the form.
		 * See [Ext.form.Panel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.Panel.html) for more information and example.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		formBind?: boolean;
		/** 
		 * Specify as `true` to have the Component inject framing elements within the Component at render time to provide a
		 * graphical rounded frame around the Component content.
		 * 
		 * This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet
		 * Explorer prior to version 9 which do not support rounded corners natively.
		 * 
		 * The extra space taken up by this framing is available from the read only property [frameSize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-frameSize).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		frame?: boolean;
		/** 
		 * The height of this component. A numeric value will be interpreted as the number of
		 * pixels; a string value will be treated as a CSS value with units.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		height?: number | string;
		/** 
		 * `true` to hide the component.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * A String which specifies how this Component's encapsulating DOM element will be hidden. Values may be:
		 * 
		 * - `'display'` : The Component will be hidden using the `display: none` style.
		 * - `'visibility'` : The Component will be hidden using the `visibility: hidden` style.
		 * - `'offsets'` : The Component will be hidden by absolutely positioning it out of the visible area of the document.
		 *   This is useful when a hidden Component must maintain measurable dimensions. Hiding using `display` results in a
		 *   Component having zero dimensions.
		 * @configuration
		 * @optional
		 * @default 'display'
		 * @type {string}
		 */
		hideMode?: string;
		/** 
		 * An HTML fragment, or a [DomHelper](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Helper.html) specification to use as the layout element content.
		 * The HTML content is added after the component is rendered, so the document will not contain this HTML at the time
		 * the [render](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-render) event is fired. This content is inserted into the body _before_ any configured [contentEl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-contentEl)
		 * is appended.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string|object}
		 */
		html?: string | object;
		/** 
		 * The **unique** id of this component instance.
		 * 
		 * Use of this config should be considered carefully as this value must be unique across
		 * all existing components. Components created with an `id` may be accessed globally
		 * using [Ext.getCmp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-getCmp).
		 * 
		 * Instead of using assigned ids, consider a [reference](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-reference) config and a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * to respond to events and perform processing upon this Component.
		 * 
		 * Alternatively, [itemId](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-itemId) and [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html) can be
		 * used to perform selector-based searching for Components analogous to DOM querying.
		 * The [Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html) class contains several helpful
		 * [shortcut methods](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-down) to query its descendant
		 * Components by selector.
		 * 
		 * Note that this `id` will also be used as the element id for the containing HTML
		 * element that is rendered to the page for this component. This allows you to write
		 * id-based CSS rules to style the specific instance of this component uniquely, and
		 * also to select sub-elements using this component's `id` as the parent.
		 * 
		 * Defaults to an [auto-assigned id](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getId).
		 * 
		 * **Note**: Valid identifiers start with a letter or underscore and are followed by
		 * (optional) additional letters, underscores, digits or hyphens.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		id?: string;
		/** 
		 * The **unique** id of this component instance within its container. See also the
		 * [reference](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-reference) config.
		 * 
		 * An `itemId` can be used as an alternative way to get a reference to a component when no object reference is
		 * available. Instead of using an [`id`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-id) with [getCmp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-getCmp), use
		 * `itemId` with [getComponent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-getComponent) which will
		 * retrieve `itemId`'s or [id](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-id)'s. Since `itemId`'s are an index to the container's
		 * internal collection, the `itemId` is scoped locally to the container -- avoiding
		 * potential conflicts with [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentManager.html) which requires a **unique**
		 * [`id`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-id) values.
		 * 
		 *    var c = new Ext.panel.Panel({ //
		 *        height: 300,
		 *        renderTo: document.body,
		 *        layout: 'auto',
		 *        items: [{
		 *            itemId: 'p1',
		 *            title: 'Panel 1',
		 *            height: 150
		 *        },{
		 *            itemId: 'p2',
		 *            title: 'Panel 2',
		 *            height: 150
		 *        }]
		 *    });
		 *    
		 *    p1 = c.getComponent('p1'); // not the same as Ext.getCmp()
		 *    console.log(p1);
		 *    p2 = p1.ownerCt.getComponent('p2'); // reference via a sibling
		 *    console.log(p2);
		 * 
		 * Also see [id](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-id), [`Ext.container.Container.query`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-query), [`Ext.container.Container.down`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-down) and
		 * [`Ext.container.Container.child`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-child).
		 * 
		 * **Note**: Valid identifiers start with a letter or underscore and are followed by
		 * (optional) additional letters, underscores, digits or hyphens.
		 * 
		 * **Note**: to access the container of an item see [ownerCt](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-ownerCt).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		itemId?: string;
		/** 
		 * An object containing handlers for keyboard events. The property names of this
		 * object are the key name and any modifiers. The values of the properties are the
		 * descriptors of how to handle each event.
		 * 
		 * The handler descriptor can be simply the handler function (either the
		 * literal function or the method name), or it can be an object with these
		 * properties:
		 * 
		 * - `handler`: The function or its name to call to handle the event.
		 * - `scope`: The this pointer context (can be "this" or "controller").
		 * - `event`: An optional override of the key event to which to listen.
		 * 
		 * **Important:** Calls to `setKeyMap` do not replace the entire `keyMap` but
		 * instead update the provided mappings. That is, unless `null` is passed as the
		 * value of the `keyMap` which will clear the `keyMap` of all entries.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		keyMap?: object;
		/** 
		 * Enables or disables processing keys in the `keyMap`. This value starts as
		 * `null` and if it is `null` when `initKeyMap` is called, it will automatically
		 * be set to `true`. Since `initKeyMap` is called by [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) at the
		 * proper time, this is not something application code normally handles.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		keyMapEnabled?: boolean;
		/** 
		 * The name of the member that should be used to listen for keydown/keypress events.
		 * This is intended to be controlled at the class level not per instance.
		 * @configuration
		 * @optional
		 * @default 'el'
		 * @type {boolean}
		 */
		keyMapTarget?: boolean;
		/** 
		 * Components that achieve their internal layout results using solely CSS with no JS
		 * intervention must set this to true.  This allows the component to opt out of the
		 * layout run when used inside certain container layouts such as [Form](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Form.html) and [Auto](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Auto.html)
		 * resulting in a performance gain. The following components currently use liquid
		 * layout (`liquidLayout: true`):
		 * 
		 * - All Form Fields (subclasses of [Ext.form.field.Base](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html))
		 * - [Ext.button.Button](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html)
		 * 
		 * It is important to keep in mind that components using liquidLayout do not fire
		 * the following events:
		 * 
		 * - [resize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-resize)
		 * - [boxready](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-boxready)
		 * 
		 * In addition liquidLayout components do not call the following template methods:
		 * 
		 * - [afterComponentLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-afterComponentLayout)
		 * - [onBoxReady](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onBoxReady)
		 * - [onResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onResize)
		 * 
		 * Any component that needs to fire these events or to have these methods called during
		 * its life cycle needs to set `liquidLayout` to `false`.  The following example
		 * demonstrates how to enable the resize event for a
		 * [TextArea Field](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.TextArea.html):
		 * 
		 *    var win = Ext.create({
		 *            xtype: 'window',
		 *            title: 'Resize This Window!',
		 *            height: 100,
		 *            width: 200,
		 *            layout: 'anchor',
		 *            items: [{
		 *                xtype: 'textarea',
		 *                anchor: '0 0',
		 *                liquidLayout: false // allows the textarea to fire "resize"
		 *            }]
		 *        }),
		 *        textfield = win.items.getAt(0);
		 *    
		 *    win.show();
		 *    
		 *    textfield.on('resize', function(textfield, width, height) {
		 *        Ext.Msg.alert('Text Field Resized', 'width: ' + width + ', height: ' + height);
		 *    });
		 * 
		 * Use caution when setting `liquidLayout` to `false` as it carries a performance penalty
		 * since it means the layout system must perform expensive DOM reads to determine the
		 * Component's size.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		liquidLayout?: boolean;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
		 * child element of a Component, we need to specify the `element` option to identify the Component property to add a
		 * DOM listener to:
		 * 
		 *    new Ext.panel.Panel({
		 *        width: 400,
		 *        height: 200,
		 *        dockedItems: [{
		 *            xtype: 'toolbar'
		 *        }],
		 *        listeners: {
		 *            click: {
		 *                element: 'el', //bind to the underlying el property on the panel
		 *                fn: function(){ console.log('click el'); }
		 *            },
		 *            dblclick: {
		 *                element: 'body', //bind to the underlying body property on the panel
		 *                fn: function(){ console.log('dblclick body'); }
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		listeners?: object;
		/** 
		 * True to drag the component itself.  Else a lightweight version of the component
		 * will be shown (_using the component's ghost() method_).
		 * 
		 * **Note:** This config is only relevant when used with dragging implemented via
		 * [Ext.util.ComponentDragger](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.ComponentDragger.html).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		liveDrag?: boolean;
		/** 
		 * A configuration object or an instance of a [Ext.ComponentLoader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentLoader.html) to load remote content
		 * for this Component.
		 * 
		 *    Ext.create('Ext.Component', {
		 *        loader: {
		 *            url: 'content.html',
		 *            autoLoad: true
		 *        },
		 *        renderTo: Ext.getBody()
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {Ext.ComponentLoader|object}
		 */
		loader?: Ext.ComponentLoader | object;
		/** 
		 * Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or it can
		 * be a CSS style specification for each style, for example: '10 5 3 10' (top, right, bottom, left).
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		margin?: number | string;
		/** 
		 * Related to the [childEls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-childEls) configuration which specifies named properties which correspond to component sub-elements.
		 * 
		 * The name of the element property in this component to mask when masked by a LoadMask.
		 * 
		 * Defaults to `null` to indicate that Components cannot by default contain a LoadMask, and that any LoadMask should be rendered into the document body.
		 * 
		 * For example, Panels use `"el"` to indicate that the whole panel should be masked. This could be configured to be
		 * `"body"` so that only the body is masked and toolbars and the header are still mouse-accessible.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {string}
		 */
		maskElement?: string;
		/** 
		 * The maximum value in pixels which this Component will set its height to.
		 * 
		 * **Warning:** This will override any size management applied by layout managers.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maxHeight?: number;
		/** 
		 * The maximum value in pixels which this Component will set its width to.
		 * 
		 * **Warning:** This will override any size management applied by layout managers.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maxWidth?: number;
		/** 
		 * The minimum value in pixels which this Component will set its height to.
		 * 
		 * **Warning:** This will override any size management applied by layout managers.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minHeight?: number;
		/** 
		 * The minimum value in pixels which this Component will set its width to.
		 * 
		 * **Warning:** This will override any size management applied by layout managers.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minWidth?: number;
		/** 
		 * True to make the floated component modal and mask everything behind it when displayed, false to display it without
		 * restricting access to other UI elements.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		modal?: boolean;
		/** 
		 * This config enables binding to your [`Ext.data.Model.validators`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html#cfg-validators). This
		 * is only processed by form fields (e.g., [`Ext.form.field.Text`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html)) at present, but
		 * this setting is inherited and so can be set on a parent container.
		 * 
		 * When set to `true` by a component or not set by a component but inherited from
		 * an ancestor container, [`Ext.data.Validation`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Validation.html) records are used to automatically
		 * bind validation results for any form field to which a `value` is bound.
		 * 
		 * While this config can be set arbitrarily high in the component hierarchy, doing
		 * so can create a lot overhead if most of your form fields do not actually rely on
		 * `validators` in your data model.
		 * 
		 * Using this setting for a form that is bound to an [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html) might look
		 * like this:
		 * 
		 *     {
		 *         xtype: 'panel',
		 *         modelValidation: true,
		 *         items: [{
		 *             xtype: 'textfield',
		 *             bind: '{theUser.firstName}'
		 *         },{
		 *             xtype: 'textfield',
		 *             bind: '{theUser.lastName}'
		 *         },{
		 *             xtype: 'textfield',
		 *             bind: '{theUser.phoneNumber}'
		 *         },{
		 *             xtype: 'textfield',
		 *             bind: '{theUser.email}'
		 *         }]
		 *     }
		 * 
		 * The above is equivalent to the following manual binding of validation:
		 * 
		 *     {
		 *         xtype: 'panel',
		 *         items: [{
		 *             xtype: 'textfield',
		 *             bind: {
		 *                 value:      '{theUser.firstName}'
		 *                 validation: '{theUser.validation.firstName}'
		 *             }
		 *         },{
		 *             xtype: 'textfield',
		 *             bind: {
		 *                 value:      '{theUser.lastName}'
		 *                 validation: '{theUser.validation.lastName}'
		 *             }
		 *         },{
		 *             xtype: 'textfield',
		 *             bind: {
		 *                 value:      '{theUser.phoneNumber}'
		 *                 validation: '{theUser.validation.phoneNumber}'
		 *             }
		 *         },{
		 *             xtype: 'textfield',
		 *             bind: {
		 *                 value:      '{theUser.email}'
		 *                 validation: '{theUser.validation.email}'
		 *             }
		 *         }]
		 *     }
		 * 
		 * Notice that "validation" is a pseudo-association defined for all entities. See
		 * [`Ext.data.Model.getValidation`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html#method-getValidation) for further details.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		modelValidation?: boolean;
		/** 
		 * An optional extra CSS class that will be added to this component's Element when the mouse moves over the Element,
		 * and removed when the mouse moves out. This can be useful for adding customized 'active' or 'hover' styles to the
		 * component or any of its children using standard CSS rules.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		overCls?: string;
		/** 
		 * Possible values are:
		 * 
		 * - `'auto'` to enable automatic horizontal scrollbar (Style overflow-x: 'auto').
		 * - `'scroll'` to always enable horizontal scrollbar (Style overflow-x: 'scroll').
		 * 
		 * The default is overflow-x: 'hidden'. This should not be combined with [autoScroll](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-autoScroll).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		overflowX?: string;
		/** 
		 * Possible values are:
		 * 
		 * - `'auto'` to enable automatic vertical scrollbar (Style overflow-y: 'auto').
		 * - `'scroll'` to always enable vertical scrollbar (Style overflow-y: 'scroll').
		 * 
		 * The default is overflow-y: 'hidden'. This should not be combined with [autoScroll](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-autoScroll).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		overflowY?: string;
		/** 
		 * Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or it
		 * can be a CSS style specification for each style, for example: '10 5 3 10' (top, right, bottom, left).
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An array of plugins to be added to this component. Can also be just a single plugin instead of array.
		 * 
		 * Plugins provide custom functionality for a component. The only requirement for
		 * a valid plugin is that it contain an `init` method that accepts a reference of type [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html). When a component
		 * is created, if any plugins are available, the component will call the init method on each plugin, passing a
		 * reference to itself. Each plugin can then call methods or respond to events on the component as needed to provide
		 * its functionality.
		 * 
		 * Plugins can be added to component by either directly referencing the plugin instance:
		 * 
		 *    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],
		 * 
		 * By using config object with ptype:
		 * 
		 *    plugins: {ptype: 'cellediting', clicksToEdit: 1},
		 * 
		 * Or with just a ptype:
		 * 
		 *    plugins: ['cellediting', 'gridviewdragdrop'],
		 * 
		 * See [Ext.enums.Plugin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.enums.Plugin.html) for list of all ptypes.
		 * @configuration
		 * @optional
		 * @type {Ext.plugin.Abstract[]|Ext.plugin.Abstract|object[]|object|Ext.enums.Plugin[]|Ext.enums.Plugin}
		 */
		plugins?: Ext.plugin.Abstract[] | Ext.plugin.Abstract | object[] | object | Ext.enums.Plugin[] | Ext.enums.Plugin;
		/** 
		 * One or more names of config properties that this component should publish
		 * to its ViewModel. Generally speaking, only properties defined in a class config
		 * block (including ancestor config blocks and mixins) are eligible for publishing
		 * to the viewModel. Some components override this and publish their most useful
		 * configs by default.
		 * 
		 * **Note:** We'll discuss publishing properties **not** found in the config block below.
		 * 
		 * Values determined to be invalid by component (often form fields and model validations)
		 * will not be published to the ViewModel.
		 * 
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
		 * components. For example:
		 * 
		 *     ...
		 *         items: [{
		 *             xtype: 'textfield',
		 *             reference: 'somefield',  // component's name in the ViewModel
		 *             publishes: 'value' // value is not published by default
		 *         },{
		 *             ...
		 *         },{
		 *             xtype: 'displayfield',
		 *             bind: 'You have entered "{somefield.value}"'
		 *         }]
		 *     ...
		 * 
		 * Classes must provide this config as an Object:
		 * 
		 *     Ext.define('App.foo.Bar', {
		 *         publishes: {
		 *             foo: true,
		 *             bar: true
		 *         }
		 *     });
		 * 
		 * This is required for the config system to properly merge values from derived
		 * classes.
		 * 
		 * For instances this value can be specified as a value as show above or an array
		 * or object as follows:
		 * 
		 *     {
		 *         xtype: 'textfield',
		 *         reference: 'somefield',
		 *         publishes: [
		 *             'value',
		 *             'rawValue',
		 *             'dirty'
		 *         ]
		 *     }
		 *    
		 *     // This achieves the same result as the above array form.
		 *     {
		 *         xtype: 'textfield',
		 *         reference: 'somefield',
		 *         publishes: {
		 *             value: true,
		 *             rawValue: true,
		 *             dirty: true
		 *         }
		 *     }
		 * 
		 * In some cases, users may want to publish a property to the viewModel that is not found in a class
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#method-publishState) if the property has a
		 * setter method.  Let's use [setFieldLabel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.Labelable.html#method-setFieldLabel) as an example:
		 * 
		 *      setFieldLabel: function(fieldLabel) {
		 *          this.callParent(arguments);
		 *          this.publishState('fieldLabel', fieldLabel);
		 *      }        
		 * 
		 * With the above chunk of code, fieldLabel may now be published to the viewModel.
		 * @configuration
		 * @optional
		 * @type {string|string[]|object}
		 */
		publishes?: string | string[] | object;
		/** 
		 * Specifies a name for this component inside its component hierarchy. This name
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html) for more information about references.
		 * 
		 * **Note**: Valid identifiers start with a letter or underscore and are followed
		 * by zero or more additional letters, underscores or digits. References are case
		 * sensitive.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		reference?: string;
		/** 
		 * Defines the region inside [border layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html).
		 * 
		 * Possible values:
		 * 
		 * - north - Positions component at top.
		 * - south - Positions component at bottom.
		 * - east - Positions component at right.
		 * - west - Positions component at left.
		 * - center - Positions component at the remaining space.
		 *   There **must** be a component with `region: "center"` in every border layout.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {'north'|'south'|'east'|'west'|'center'}
		 */
		region?: 'north' | 'south' | 'east' | 'west' | 'center';
		/** 
		 * The data used by [renderTpl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTpl) in addition to the following property values of the component:
		 * 
		 * - id
		 * - ui
		 * - uiCls
		 * - baseCls
		 * - componentCls
		 * - frame
		 * 
		 * See [renderSelectors](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderSelectors) and [childEls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-childEls) for usage examples.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		renderData?: object;
		/** 
		 * An object containing properties specifying CSS selectors which identify child elements
		 * created by the render process.
		 * 
		 * After the Component's internal structure is rendered according to the [renderTpl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-renderTpl), this object is iterated through,
		 * and the found Elements are added as properties to the Component using the `renderSelector` property name.
		 * 
		 * For example, a Component which renders a title and description into its element:
		 * 
		 *     Ext.create('Ext.Component', {
		 *         renderTo: Ext.getBody(),
		 *         renderTpl: [
		 *             '&lt;h1 class="title"&gt;{title}&lt;/h1&gt;',
		 *             '&lt;p&gt;{desc}&lt;/p&gt;'
		 *         ],
		 *         renderData: {
		 *             title: "Error",
		 *             desc: "Something went wrong"
		 *         },
		 *         renderSelectors: {
		 *             titleEl: 'h1.title',
		 *             descEl: 'p'
		 *         },
		 *         listeners: {
		 *             afterrender: function(cmp){
		 *                 // After rendering the component will have a titleEl and descEl properties
		 *                 cmp.titleEl.setStyle({color: "red"});
		 *             }
		 *         }
		 *     });
		 * 
		 * The use of `renderSelectors` is deprecated (for performance reasons). The above
		 * code should be refactored into something like this:
		 * 
		 *     Ext.create('Ext.Component', {
		 *         renderTo: Ext.getBody(),
		 *         renderTpl: [
		 *             '&lt;h1 class="title" id="{id}-titleEl" data-ref="titleEl"&gt;{title}&lt;/h1&gt;',
		 *             '&lt;p id="{id}-descEl" data-ref="descEl"&gt;{desc}&lt;/p&gt;'
		 *         ],
		 *         renderData: {
		 *             title: "Error",
		 *             desc: "Something went wrong"
		 *         },
		 *         childEls: [
		 *             'titleEl',
		 *             'descEl'
		 *         ]
		 *     });
		 * 
		 * To use `childEls` yet retain the use of selectors (which remains as expensive as
		 * `renderSelectors`):
		 * 
		 *     Ext.create('Ext.Component', {
		 *         renderTo: Ext.getBody(),
		 *         renderTpl: [
		 *             '&lt;h1 class="title"&gt;{title}&lt;/h1&gt;',
		 *             '&lt;p&gt;{desc}&lt;/p&gt;'
		 *         ],
		 *         renderData: {
		 *             title: "Error",
		 *             desc: "Something went wrong"
		 *         },
		 *         childEls: {
		 *             titleEl: { selectNode: 'h1.title' },
		 *             descEl: { selectNode: 'p' }
		 *         }
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		renderSelectors?: object;
		/** 
		 * Specify the `id` of the element, a DOM element or an existing Element that this component will be rendered into.
		 * 
		 * **Notes:**
		 * 
		 * Do _not_ use this option if the Component is to be a child item of a [Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html).
		 * It is the responsibility of the [Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html)'s
		 * [layout manager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-layout) to render and manage its child items.
		 * 
		 * When using this config, a call to `render()` is not required.
		 * 
		 * See also: [render](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-render).
		 * @configuration
		 * @optional
		 * @type {string|HTMLElement|Ext.dom.Element}
		 */
		renderTo?: string | HTMLElement | Ext.dom.Element;
		/** 
		 * Have to create a placeholder div with the swfId, which SWFObject will replace with the object/embed element.
		 * @configuration
		 * @optional
		 * @default ['<div id="{swfId}" role="application"></div>']
		 * @type {Ext.XTemplate|string|string[]}
		 */
		renderTpl?: Ext.XTemplate | string | string[];
		/** 
		 * Specify as `true` to apply a [Resizer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.resizer.Resizer.html) to this Component after rendering.
		 * 
		 * May also be specified as a config object to be passed to the constructor of [Resizer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.resizer.Resizer.html)
		 * to override any defaults. By default the Component passes its minimum and maximum size, and uses
		 * [`Ext.resizer.Resizer.dynamic](https://docs.sencha.com/extjs/6.2.0/classic/Ext.resizer.Resizer.html#cfg-dynamic): false`
		 * @configuration
		 * @optional
		 * @type {boolean|object}
		 */
		resizable?: boolean | object;
		/** 
		 * A valid [Ext.resizer.Resizer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.resizer.Resizer.html) handles config string. Only applies when resizable = true.
		 * @configuration
		 * @optional
		 * @default 'all'
		 * @type {string}
		 */
		resizeHandles?: string;
		/** 
		 * True to layout this component and its descendants in "rtl" (right-to-left) mode.
		 * Can be explicitly set to false to override a true value inherited from an ancestor.
		 * 
		 * **Defined in override Ext.rtl.Component.**
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		rtl?: boolean;
		/** 
		 * A buffer to be applied if many state events are fired within a short period.
		 * @configuration
		 * @optional
		 * @default 100
		 * @type {number}
		 */
		saveDelay?: number;
		/** 
		 * Configuration options to make this Component scrollable. Acceptable values are:
		 * 
		 * - `true` to enable auto scrolling.
		 * - `false` (or `null`) to disable scrolling - this is the default.
		 * - `x` or `horizontal` to enable horizontal scrolling only
		 * - `y` or `vertical` to enable vertical scrolling only
		 * 
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.scroll.Scroller.html)
		 * instance.  You can use the Scroller API to read or manipulate the scroll position:
		 * 
		 *    // scrolls the component to 5 on the x axis and 10 on the y axis
		 *    component.getScrollable().scrollTo(5, 10);
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean|string|object}
		 */
		scrollable?: boolean | string | object;
		/** 
		 * If provided this creates a new `Session` instance for this component. If this
		 * is a `Container`, this will then be inherited by all child components.
		 * 
		 * To create a new session you can specify `true`:
		 * 
		 *     Ext.create({
		 *         xtype: 'viewport',
		 *         session: true,
		 *    
		 *         items: [{
		 *             ...
		 *         }]
		 *     });
		 * 
		 * Alternatively, a config object can be provided:
		 * 
		 *     Ext.create({
		 *         xtype: 'viewport',
		 *         session: {
		 *             ...
		 *         },
		 *    
		 *         items: [{
		 *             ...
		 *         }]
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @default null
		 * @type {boolean|object|Ext.data.Session}
		 */
		session?: boolean | object | Ext.data.Session;
		/** 
		 * Specifies whether the floating component should be given a shadow. Set to true to automatically create an
		 * [Ext.Shadow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Shadow.html), or a string indicating the shadow's display [Ext.Shadow.mode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Shadow.html#cfg-mode). Set to false to
		 * disable the shadow.
		 * @configuration
		 * @optional
		 * @default 'sides'
		 * @type {string|boolean}
		 */
		shadow?: string | boolean;
		/** 
		 * Number of pixels to offset the shadow.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		shadowOffset?: number;
		/** 
		 * `true` to enable an iframe shim for this Component to keep
		 * windowed objects from showing through.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		shim?: boolean;
		/** 
		 * The possible values for shrinkWrap are:
		 * 
		 * - 0 (or `false`): Neither width nor height depend on content.
		 * - 1: Width depends on content (shrink wraps), but height does not.
		 * - 2: Height depends on content (shrink wraps), but width does not.
		 * - 3 (or `true`): Both width and height depend on content (shrink wrap).
		 * 
		 * In CSS terms, shrink-wrap width is analogous to an inline-block element as opposed
		 * to a block-level element.
		 * @configuration
		 * @optional
		 * @default 2
		 * @type {boolean|number}
		 */
		shrinkWrap?: boolean | number;
		/** 
		 * An array of events that, when fired, should trigger this object to
		 * save its state. Defaults to none. `stateEvents` may be any type
		 * of event supported by this object, including browser or custom events
		 * (e.g., `['click', 'customerchange']`).
		 * 
		 * See [`stateful`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-stateful) for an explanation of saving and
		 * restoring object state.
		 * @configuration
		 * @optional
		 * @type {string[]}
		 */
		stateEvents?: string[];
		/** 
		 * The unique id for this object to use for state management purposes.
		 * 
		 * See [stateful](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateful) for an explanation of saving and restoring state.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		stateId?: string;
		/** 
		 * A flag which causes the object to attempt to restore the state of
		 * internal properties from a saved state on startup. The object must have
		 * a [stateId](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateId) for state to be managed.
		 * 
		 * Auto-generated ids are not guaranteed to be stable across page loads and
		 * cannot be relied upon to save and restore the same state for a object.
		 * 
		 * For state saving to work, the state manager's provider must have been
		 * set to an implementation of [Ext.state.Provider](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Provider.html) which overrides the
		 * [set](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Provider.html#method-set) and [get](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Provider.html#method-get)
		 * methods to save and recall name/value pairs. A built-in implementation,
		 * [Ext.state.CookieProvider](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.CookieProvider.html) is available.
		 * 
		 * To set the state provider for the current page:
		 * 
		 *     Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
		 *         expires: new Date(new Date().getTime()+(1000<em>60</em>60<em>24</em>7)), //7 days from now
		 *     }));
		 * 
		 * A stateful object attempts to save state when one of the events
		 *  listed in the [stateEvents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateEvents) configuration fires.
		 *  
		 *  
		 *  
		 *  
		 *  To save state, a stateful object first serializes its state by
		 *  calling _[getState](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#method-getState)_.
		 *  
		 *  
		 *  
		 *  
		 *  The Component base class implements [getState](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#method-getState) to save its width and
		 *  height within the state only if they were initially configured, and have
		 *  changed from the configured value.
		 *  
		 *  
		 *  
		 *  
		 *  The Panel class saves its collapsed state in addition to that.
		 *  
		 *  
		 *  
		 *  
		 *  The Grid class saves its column state and store state (sorters and filters and grouper) in addition to its superclass state.
		 *  
		 *  
		 *  
		 *  
		 *  If there is more application state to be save, the developer must provide an implementation which
		 *  first calls the superclass method to inherit the above behaviour, and then injects new properties
		 *  into the returned object.
		 *  
		 *  
		 *  
		 *  
		 *  The value yielded by `getState` is passed to [Ext.state.Manager.set](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Manager.html#method-set)
		 *  which uses the configured [Ext.state.Provider](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Provider.html) to save the object
		 *  keyed by the [stateId](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateId).
		 *  
		 *  
		 *  
		 *  
		 *  During construction, a stateful object attempts to _restore_ its state by calling
		 *  [Ext.state.Manager.get](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Manager.html#method-get) passing the [stateId](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#cfg-stateId)
		 *  
		 *  
		 *  
		 *  
		 *  The resulting object is passed to [applyState](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#method-applyState)*. The default implementation of
		 *  [applyState](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#method-applyState) simply copies properties into the object, but a developer may
		 *  override this to support restoration of more complex application state.
		 *  
		 *  
		 *  
		 *  
		 *  You can perform extra processing on state save and restore by attaching
		 *  handlers to the [beforestaterestore](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#event-beforestaterestore), [staterestore](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#event-staterestore),
		 *  [beforestatesave](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#event-beforestatesave) and [statesave](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html#event-statesave) events. In some simple cases,
		 *  passing an object for the `stateful` config may suffice. If an object is
		 *  provided, the properties of that object are used to include or exclude stateful
		 *  properties returned by `getState`. For example:
		 * 
		 *     stateful: {
		 *         height: false, // never persist the height
		 *         width: true    // always persist the width
		 *     }
		 * 
		 * The above is roughly equivalent to the following:
		 * 
		 *     getState: function () {
		 *         var state = this.callParent();
		 *    
		 *         delete state.height;
		 *         state.width = this.width;
		 *    
		 *         return state;
		 *     }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean|object}
		 */
		stateful?: boolean | object;
		/** 
		 * A custom style specification to be applied to this component's Element. Should be a valid argument to
		 * [Ext.dom.Element.applyStyles](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dom.Element.html#method-applyStyles).
		 * 
		 *    new Ext.panel.Panel({
		 *        title: 'Some Title',
		 *        renderTo: Ext.getBody(),
		 *        width: 400, height: 300,
		 *        layout: 'form',
		 *        items: [{
		 *            xtype: 'textarea',
		 *            style: {
		 *                width: '95%',
		 *                marginBottom: '10px'
		 *            }
		 *        },
		 *        new Ext.button.Button({
		 *            text: 'Send',
		 *            minWidth: '100',
		 *            style: {
		 *                marginBottom: '10px'
		 *            }
		 *        })
		 *        ]
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		style?: string | object;
		/** 
		 * The height of the embedded SWF movie inside the component.
		 * 
		 * Defaults to "100%" so that the movie matches the height of the component.
		 * @configuration
		 * @optional
		 * @default "100%"
		 * @type {string|number}
		 */
		swfHeight?: string | number;
		/** 
		 * The width of the embedded SWF movie inside the component.
		 * 
		 * Defaults to "100%" so that the movie matches the width of the component.
		 * @configuration
		 * @optional
		 * @default "100%"
		 * @type {string|number}
		 */
		swfWidth?: string | number;
		/** 
		 * DOM tabIndex attribute for this Focusable's
		 * focusEl.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		tabIndex?: number;
		/** 
		 * True to automatically call [toFront](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-toFront) when the [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-show) method is called on an already visible,
		 * floating component.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		toFrontOnShow?: boolean;
		/** 
		 * Emulates the behavior of the CSS
		 * touch-action
		 * property in a cross-browser compatible manner.
		 * 
		 * Keys in this object are touch action names, and values are `false` to disable
		 * a touch action or `true` to enable it.  Accepted keys are:
		 * 
		 * - `panX`
		 * - `panY`
		 * - `pinchZoom`
		 * - `doubleTapZoom`
		 * 
		 * All touch actions are enabled (`true`) by default, so it is usually only necessary
		 * to specify which touch actions to disable.  For example, the following disables
		 * only horizontal scrolling and pinch-to-zoom on the component's main element:
		 * 
		 *    touchAction: {
		 *        panX: false,
		 *        pinchZoom: false
		 *    }
		 * 
		 * Touch actions can be specified on child elements using the child element name,
		 * for example:
		 * 
		 *    // disables horizontal scrolling on the main element, and double-tap-zoom
		 *    // on the child element named "body"
		 *    touchAction: {
		 *        panY: false
		 *        body: {
		 *            doubleTapZoom: false
		 *        }
		 *    }
		 * 
		 * The primary motivation for setting the touch-action of an element is to prevent
		 * the browser's default handling of a gesture such as pinch-to-zoom, or
		 * drag-to-scroll, so that the application can implement its own handling of that
		 * gesture on the element.  Suppose, for example, a component has a custom drag
		 * handler on its element and wishes to prevent horizontal scrolling of its container
		 * while it is being dragged:
		 * 
		 *    Ext.create('Ext.Component', {
		 *        touchAction: {
		 *            panX: false
		 *        },
		 *        listeners: {
		 *            drag: function(e) {
		 *                // implement drag logic
		 *            }
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		touchAction?: object;
		/** 
		 * An [Ext.Template](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.XTemplate.html) or an array of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.XTemplate.html). Used in
		 * conjunction with the [`data`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-data) and [`tplWriteMode`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * @configuration
		 * @optional
		 * @type {Ext.XTemplate|Ext.Template|string|string[]}
		 */
		tpl?: Ext.XTemplate | Ext.Template | string | string[];
		/** 
		 * The Ext.(X)Template method to use when updating the content area of the Component.
		 * See [`Ext.XTemplate.overwrite`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.XTemplate.html#method-overwrite) for information on default mode.
		 * @configuration
		 * @optional
		 * @default 'overwrite'
		 * @type {string}
		 */
		tplWriteMode?: string;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.mixin.Bindable.html#cfg-publishes).
		 * 
		 * This config is defined so that updaters are not created and added for all
		 * bound properties since most cannot be modified by the end-user and hence are
		 * not appropriate for two-way binding.
		 * @configuration
		 * @optional
		 * @type {string|string[]|object}
		 */
		twoWayBindable?: string | string[] | object;
		/** 
		 * A UI style for a component.
		 * @configuration
		 * @optional
		 * @default 'default'
		 * @type {string}
		 */
		ui?: string;
		/** 
		 * An array of of `classNames` which are currently applied to this component.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {string[]}
		 */
		uiCls?: string[];
		/** 
		 * The URL of the SWF file to include.
		 * @configuration
		 * @required
		 * @type {string}
		 */
		url: string;
		/** 
		 * One or more CSS classes to add to the component's primary element. This config
		 * is intended solely for use by the component instantiator (the "user"), not by
		 * derived classes.
		 * 
		 * For example:
		 * 
		 *     items: [{
		 *         xtype: 'button',
		 *         userCls: 'my-button'
		 *     ...
		 *     }]
		 * 
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		userCls?: string | string[];
		/** 
		 * The `ViewModel` is a data provider for this component and its children. The
		 * data contained in the `ViewModel` is typically used by adding `bind` configs
		 * to the components that want present or edit this data.
		 * 
		 * When set, the `ViewModel` is created and links to any inherited `viewModel`
		 * instance from an ancestor container as the "parent". The `ViewModel` hierarchy,
		 * once established, only supports creation or destruction of children. The
		 * parent of a `ViewModel` cannot be changed on the fly.
		 * 
		 * If this is a root-level `ViewModel`, the data model connection is made to this
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Session.html). This is
		 * determined by calling `getInheritedSession`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {string|object|Ext.app.ViewModel}
		 */
		viewModel?: string | object | Ext.app.ViewModel;
		/** 
		 * A value to control how Components are laid out in a [Border](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html) layout or as docked items.
		 * 
		 * In a Border layout, this can control how the regions (not the center) region lay out if the west or east take full height
		 * or if the north or south region take full width. Also look at the [Ext.layout.container.Border.regionWeights](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Border.html#cfg-regionWeights) on the Border layout. An example to show how you can
		 * take control of this is:
		 * 
		 *    Ext.create('Ext.container.Viewport', {
		 *        layout      : 'border',
		 *        defaultType : 'panel',
		 *        items       : [
		 *            {
		 *                region : 'north',
		 *                title  : 'North',
		 *                height : 100
		 *            },
		 *            {
		 *                region : 'south',
		 *                title  : 'South',
		 *                height : 100,
		 *                weight : -25
		 *            },
		 *            {
		 *                region : 'west',
		 *                title  : 'West',
		 *                width  : 200,
		 *                weight : 15
		 *            },
		 *            {
		 *                region : 'east',
		 *                title  : 'East',
		 *                width  : 200
		 *            },
		 *            {
		 *                region : 'center',
		 *                title  : 'center'
		 *            }
		 *        ]
		 *    });
		 * 
		 * If docked items, the weight will order how the items are laid out. Here is an example to put a [Ext.toolbar.Toolbar](https://docs.sencha.com/extjs/6.2.0/classic/Ext.toolbar.Toolbar.html) above
		 * a [Ext.panel.Panel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html)'s header:
		 * 
		 *    Ext.create('Ext.panel.Panel', {
		 *        renderTo    : document.body,
		 *        width       : 300,
		 *        height      : 300,
		 *        title       : 'Panel',
		 *        html        : 'Panel Body',
		 *        dockedItems : [
		 *            {
		 *                xtype : 'toolbar',
		 *                items : [
		 *                    {
		 *                        text : 'Save'
		 *                    }
		 *                ]
		 *            },
		 *            {
		 *                xtype  : 'toolbar',
		 *                weight : -10,
		 *                items  : [
		 *                    {
		 *                        text : 'Remove'
		 *                    }
		 *                ]
		 *            }
		 *        ]
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		weight?: number;
		/** 
		 * The width of this component. A numeric value will be interpreted as the number of
		 * pixels; a string value will be treated as a CSS value with units.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		width?: number | string;
		/** 
		 * The wmode of the flash object. This can be used to control layering.
		 * Set to 'transparent' to ignore the [backgroundColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-backgroundColor) and make the background of the Flash
		 * movie transparent.
		 * @configuration
		 * @optional
		 * @default "opaque"
		 * @type {string}
		 */
		wmode?: string;
		/** 
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define).
		 * 
		 * This property provides a shorter alternative to creating objects than using a full
		 * class name. Using `xtype` is the most common way to define component instances,
		 * especially in a container. For example, the items in a form containing text fields
		 * could be created explicitly like so:
		 * 
		 *     items: [
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Foo'
		 *         }),
		 *         Ext.create('Ext.form.field.Text', {
		 *             fieldLabel: 'Bar'
		 *         }),
		 *         Ext.create('Ext.form.field.Number', {
		 *             fieldLabel: 'Num'
		 *         })
		 *     ]
		 * 
		 * But by using `xtype`, the above becomes:
		 * 
		 *     items: [
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Foo'
		 *         },
		 *         {
		 *             xtype: 'textfield',
		 *             fieldLabel: 'Bar'
		 *         },
		 *         {
		 *             xtype: 'numberfield',
		 *             fieldLabel: 'Num'
		 *         }
		 *     ]
		 * 
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-defaultType)
		 * is another way to specify the `xtype` for all items that don't have an explicit `xtype`:
		 * 
		 *     defaultType: 'textfield',
		 *     items: [
		 *         { fieldLabel: 'Foo' },
		 *         { fieldLabel: 'Bar' },
		 *         { fieldLabel: 'Num', xtype: 'numberfield' }
		 *     ]
		 * 
		 * Each member of the `items` array is now just a "configuration object". These objects
		 * are used to create and configure component instances. A configuration object can be
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-widget):
		 * 
		 *     var text1 = Ext.create('Ext.form.field.Text', {
		 *         fieldLabel: 'Foo'
		 *     });
		 *    
		 *     // or alternatively:
		 *    
		 *     var text1 = Ext.widget({
		 *         xtype: 'textfield',
		 *         fieldLabel: 'Foo'
		 *     });
		 * 
		 * This conversion of configuration objects into instantiated components is done when
		 * a container is created as part of its {Ext.container.AbstractContainer#initComponent}
		 * process. As part of the same process, the `items` array is converted from its raw
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define). For example:
		 * 
		 *    Ext.define('MyApp.PressMeButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'pressmebutton',
		 *        text: 'Press Me'
		 *    });
		 * 
		 * Care should be taken when naming an `xtype` in a custom component because there is
		 * a single, shared scope for all xtypes. Third part components should consider using
		 * a prefix to avoid collisions.
		 * 
		 *    Ext.define('Foo.form.CoolButton', {
		 *        extend: 'Ext.button.Button',
		 *        xtype: 'ux-coolbutton',
		 *        text: 'Cool!'
		 *    });
		 * 
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.2.0/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @configuration
		 * @optional
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * Called by the layout system after the Component has been laid out.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number}           width     The width that was set
		 * @param   {number}           height    The height that was set
		 * @param   {number|undefined} oldWidth  The old width, or `undefined` if this was the initial layout.
		 * @param   {number|undefined} oldHeight The old height, or `undefined` if this was the initial layout.
		 * @returns {void}                       
		 */
		afterComponentLayout? (width: number, height: number, oldWidth: number | undefined, oldHeight: number | undefined): void;
		/** 
		 * Invoked after the Component has been hidden.
		 * 
		 * Gets passed the same `callback` and `scope` parameters that [onHide](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onHide) received.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Function} [callback]
		 * @param   {object}   [scope]
		 * @returns {void}                
		 */
		afterHide? (callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Allows additional behavior after rendering is complete. At this stage, the
		 * [Component's](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) [Element](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getEl) will have
		 * been styled according to the configuration, will have had any configured CSS
		 * class names added, and will be in the configured visibility and configured enable
		 * state.
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * and the controller has an afterRender
		 * method it will be called passing the Component as the single param.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		afterRender? (): void;
		/** 
		 * Template method called after a Component has been positioned.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {void}     
		 */
		afterSetPosition? (x: number, y: number): void;
		/** 
		 * Invoked after the Component is shown (after [onShow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onShow) is called).
		 * 
		 * Gets passed the same parameters as [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-show).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {string|Ext.dom.Element} [animateTarget]
		 * @param   {Function}               [callback]
		 * @param   {object}                 [scope]
		 * @returns {void}                                   
		 */
		afterShow? (animateTarget?: string | Ext.dom.Element, callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Invoked before the Component is destroyed.
		 * This method is deprecated, override [onDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-onDestroy) instead.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeDestroy? (): void;
		/** 
		 * Occurs before componentLayout is run. In previous releases, this method could
		 * return `false` to prevent its layout but that is not supported in Ext JS 4.1 or
		 * higher. This method is simply a notification of the impending layout to give the
		 * component a chance to adjust the DOM. Ideally, DOM reads should be avoided at this
		 * time to reduce expensive document reflows.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeLayout? (): void;
		/** 
		 * Allows additional behavior before rendering.
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * and the controller has a beforeRender
		 * method it will be called passing the Component as the single param.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeRender? (): void;
		/** 
		 * Invoked before the Component is shown.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		beforeShow? (): void;
		/** 
		 * The initComponent template method is an important initialization step for a Component. It is intended to be
		 * implemented by each subclass of [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) to provide any needed constructor logic. The
		 * initComponent method of the class being created is called first, with each initComponent method
		 * up the hierarchy to [Ext.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html) being called thereafter. This makes it easy to implement and,
		 * if needed, override the constructor logic of the Component at any step in the hierarchy.
		 * 
		 * The initComponent method **must** contain a call to [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent) in order
		 * to ensure that the parent class' initComponent method is also called.
		 * 
		 * All config options passed to the constructor are applied to `this` before initComponent is called,
		 * so you can simply access them with `this.someOption`.
		 * 
		 * The following example demonstrates using a dynamic string for the text of a button at the time of
		 * instantiation of the class.
		 * 
		 *    Ext.define('DynamicButtonText', {
		 *        extend: 'Ext.button.Button',
		 *    
		 *        initComponent: function() {
		 *            this.text = new Date();
		 *            this.renderTo = Ext.getBody();
		 *            this.callParent();
		 *        }
		 *    });
		 *    
		 *    Ext.onReady(function() {
		 *        Ext.create('DynamicButtonText');
		 *    });
		 * 
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initComponent? (): void;
		/** 
		 * Method to manage awareness of when components are added to their
		 * respective Container, firing an [added](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-added) event. References are
		 * established at add time rather than at render time.
		 * 
		 * Allows addition of behavior when a Component is added to a
		 * Container. At this stage, the Component is in the parent
		 * Container's collection of child items. After calling the
		 * superclass's `onAdded`, the `ownerCt` reference will be present,
		 * and if configured with a ref, the `refOwner` will be set.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.container.Container} container Container which holds the component.
		 * @param   {number}                  pos       Position at which the component was added.
		 * @param   {boolean}                 instanced
		 * `false` if this component was instanced by the parent
		 * container. `true` if the instance already existed when it was passed to the container.
		 * @returns {void}                              
		 */
		onAdded? (container: Ext.container.Container, pos: number, instanced: boolean): void;
		/** 
		 * Invoked when this component has first achieved size. This occurs after the
		 * [componentLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-componentLayout) has completed its initial run.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-controller)
		 * and the controller has a boxReady method
		 * it will be called passing the Component and its width and height.
		 * 
		 *     boxReady: function (view, width, height) {
		 *         // ...
		 *     }
		 * 
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width  The width of this component
		 * @param   {number} height The height of this component
		 * @returns {void}          
		 */
		onBoxReady? (width: number, height: number): void;
		/** 
		 * Allows addition of behavior to the destroy operation.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDestroy? (): void;
		/** 
		 * Allows addition of behavior to the disable operation.
		 * After calling the superclass's `onDisable`, the Component will be disabled.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDisable? (): void;
		/** 
		 * Allows addition of behavior to the enable operation.
		 * After calling the superclass's `onEnable`, the Component will be enabled.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onEnable? (): void;
		/** 
		 * Called when focus enters this Component's hierarchy
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object|Ext.flash.Component.methodParams.onFocusEnter.E} e
		 * @returns {void}                                                     
		 */
		onFocusEnter? (e: object | Ext.flash.Component.methodParams.onFocusEnter.E): void;
		/** 
		 * Called when focus exits from this Component's hierarchy
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event|Ext.flash.Component.methodParams.onFocusLeave.E} e
		 * @returns {void}                                                              
		 */
		onFocusLeave? (e: Ext.event.Event | Ext.flash.Component.methodParams.onFocusLeave.E): void;
		/** 
		 * Allows addition of behavior to the hide operation. After
		 * calling the superclass's onHide, the Component will be hidden.
		 * 
		 * Gets passed the same parameters as [hide](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-hide).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {string|Ext.dom.Element|Ext.Component} [animateTarget]
		 * @param   {Function}                             [callback]
		 * @param   {object}                               [scope]
		 * @returns {void}                                                 
		 */
		onHide? (animateTarget?: string | Ext.dom.Element | Ext.Component, callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Called after the component is moved, this method is empty by default but can be implemented by any
		 * subclass that needs to perform custom logic after a move occurs.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The new x position.
		 * @param   {number} y The new y position.
		 * @returns {void}     
		 */
		onPosition? (x: number, y: number): void;
		/** 
		 * Method to manage awareness of when components are removed from their
		 * respective Container, firing a [removed](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-removed) event. References are properly
		 * cleaned up after removing a component from its owning container.
		 * 
		 * Allows addition of behavior when a Component is removed from
		 * its parent Container. At this stage, the Component has been
		 * removed from its parent Container's collection of child items,
		 * but has not been destroyed (It will be destroyed if the parent
		 * Container's `autoDestroy` is `true`, or if the remove call was
		 * passed a truthy second parameter). After calling the
		 * superclass's `onRemoved`, the `ownerCt` and the `refOwner` will not
		 * be present.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {boolean} destroying
		 * Will be passed as `true` if the Container performing the remove operation will delete this
		 * Component upon remove.
		 * @returns {void}               
		 */
		onRemoved? (destroying: boolean): void;
		/** 
		 * Template method called when this Component's DOM structure is created.
		 * 
		 * At this point, this Component's (and all descendants') DOM structure _exists_ but it has not
		 * been layed out (positioned and sized).
		 * 
		 * Subclasses which override this to gain access to the structure at render time should
		 * call the parent class's method before attempting to access any child elements of the Component.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.dom.Element} parentNode   The parent Element in which this Component's encapsulating element is contained.
		 * @param   {number}          containerIdx The index within the parent Container's child collection of this Component.
		 * @returns {void}                         
		 */
		onRender? (parentNode: Ext.dom.Element, containerIdx: number): void;
		/** 
		 * Called when the component is resized.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width     The new width that was set
		 * @param   {number} height    The new height that was set
		 * @param   {number} oldWidth  The previous width
		 * @param   {number} oldHeight The previous height
		 * @returns {void}             
		 */
		onResize? (width: number, height: number, oldWidth: number, oldHeight: number): void;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
		/** 
		 * Allows addition of behavior to the show operation. After
		 * calling the superclass's onShow, the Component will be visible.
		 * 
		 * Override in subclasses where more complex behaviour is needed.
		 * 
		 * Gets passed the same parameters as [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-show).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {string|Ext.dom.Element} [animateTarget]
		 * @param   {Function}               [callback]
		 * @param   {object}                 [scope]
		 * @returns {void}                                   
		 */
		onShow? (animateTarget?: string | Ext.dom.Element, callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Invoked after the [afterShow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-afterShow) method is complete.
		 * 
		 * Gets passed the same `callback` and `scope` parameters that [afterShow](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-afterShow) received.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Function} [callback]
		 * @param   {object}   [scope]
		 * @returns {void}                
		 */
		onShowComplete? (callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#property-clearPropertiesOnDestroy)
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                      config
		 * @returns {Ext.flash.Component.Statics}        this
		 */
		initConfig? (config: object): Ext.flash.Component.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                      [value] The value to set for the name parameter.
		 * @returns {Ext.flash.Component.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.flash.Component.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.flash.Component.Statics}  
		 */
		statics? (): Ext.flash.Component.Statics;
	}
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.flash.Component](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html)
	 * A simple Component for displaying an Adobe Flash SWF movie. The movie will be sized and can participate
	 * in layout like any other Component.
	 * 
	 * This component requires the third-party SWFObject library version 2.2 or above. It is not included within
	 * the ExtJS distribution, so you will have to include it into your page manually in order to use this component.
	 * The SWFObject library can be downloaded from the [SWFObject project page](http://code.google.com/p/swfobject)
	 * and then simply import it into the head of your HTML document:
	 * 
	 *    &lt;script type="text/javascript" src="path/to/local/swfobject.js"&gt;&lt;/script&gt;
	 * 
	 * ## Configuration
	 * 
	 * This component allows several options for configuring how the target Flash movie is embedded. The most
	 * important is the required [url](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-url) which points to the location of the Flash movie to load. Other
	 * configurations include:
	 * 
	 * - [backgroundColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-backgroundColor)
	 * - [wmode](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-wmode)
	 * - [flashVars](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashVars)
	 * - [flashParams](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashParams)
	 * - [flashAttributes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.flash.Component.html#cfg-flashAttributes)
	 * 
	 * ## Example usage:
	 * 
	 *    var win = Ext.widget('window', {
	 *        title: "It's a tiger!",
	 *        layout: 'fit',
	 *        width: 300,
	 *        height: 300,
	 *        x: 20,
	 *        y: 20,
	 *        resizable: true,
	 *        items: {
	 *            xtype: 'flash',
	 *            url: 'tiger.swf'
	 *        }
	 *    });
	 *    win.show();
	 * 
	 * ## Express Install
	 * 
	 * Adobe provides a tool called [Express Install](http://www.adobe.com/devnet/flashplayer/articles/express_install.html)
	 * that offers users an easy way to upgrade their Flash player. If you wish to make use of this, you should set
	 * the static EXPRESS_INSTALL_URL property to the location of your Express Install SWF file:
	 * 
	 *    Ext.flash.Component.EXPRESS_INSTALL_URL = 'path/to/local/expressInstall.swf';
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires after a Component has been visually activated.
		 * 
		 * **Note** This event is only fired if this Component is a child of a [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html)
		 * that uses [Ext.layout.container.Card](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Card.html) as it's layout or this Component is a floating Component.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		activate? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after a Component had been added to a Container.
		 * @event
		 * @param   {Ext.Component}           _this
		 * @param   {Ext.container.Container} container Parent Container
		 * @param   {number}                  pos       position of Component
		 * @param   {object}                  eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                    
		 */
		added? (_this: Ext.Component, container: Ext.container.Container, pos: number, eOpts: object): void;
		/** 
		 * This event first after a component's layout has been updated by a layout that
		 * included animation (e.g., a [panel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html) in an
		 * [accordion](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Accordion.html) layout).
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		afterlayoutanimation? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the component rendering is finished.
		 * 
		 * The `afterrender` event is fired after this Component has been [rendered](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-rendered), been post-processed by any
		 * `afterRender` method defined for the Component.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		afterrender? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before a Component has been visually activated. Returning `false` from an event listener can prevent
		 * the activate from occurring.
		 * 
		 * **Note** This event is only fired if this Component is a child of a [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html)
		 * that uses [Ext.layout.container.Card](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Card.html) as it's layout.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforeactivate? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before a Component has been visually deactivated. Returning `false` from an event listener can
		 * prevent the deactivate from occurring.
		 * 
		 * **Note** This event is only fired if this Component is a child of a [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html)
		 * that uses [Ext.layout.container.Card](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Card.html) as it's layout.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforedeactivate? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before the component is [destroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-destroy)ed. Return `false` from an event handler to stop the
		 * [destroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-destroy).
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforedestroy? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before the component is hidden when calling the [hide](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-hide) method. Return `false` from an event
		 * handler to stop the hide.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforehide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before the component is [rendered](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-rendered). Return `false` from an event handler to stop the
		 * [render](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-render).
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforerender? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before the component is shown when calling the [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-show) method. Return `false` from an event
		 * handler to stop the show.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforeshow? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before the state of the object is restored. Return false from an event handler to stop the restore.
		 * @event
		 * @param   {Ext.state.Stateful} _this
		 * @param   {object}             state
		 * The hash of state values returned from the StateProvider. If this
		 * event is not vetoed, then the state object is passed to _`applyState`_. By default,
		 * that simply copies property values into this object. The method maybe overriden to
		 * provide custom state restoration.
		 * @param   {object}             eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}               
		 */
		beforestaterestore? (_this: Ext.state.Stateful, state: object, eOpts: object): void;
		/** 
		 * Fires before the state of the object is saved to the configured state provider. Return false to stop the save.
		 * @event
		 * @param   {Ext.state.Stateful} _this
		 * @param   {object}             state
		 * The hash of state values. This is determined by calling
		 * _`getState()`_ on the object. This method must be provided by the
		 * developer to return whatever representation of state is required, by default, [Ext.state.Stateful](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html)
		 * has a null implementation.
		 * @param   {object}             eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}               
		 */
		beforestatesave? (_this: Ext.state.Stateful, state: object, eOpts: object): void;
		/** 
		 * Fires when this Component loses focus.
		 * @event
		 * @param   {Ext.Component}   _this
		 * @param   {Ext.event.Event} event The blur event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		blur? (_this: Ext.Component, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires _one time_ - after the component has been laid out for the first time at its initial size.
		 * 
		 * This event does not fire on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {number}        width  The initial width.
		 * @param   {number}        height The initial height.
		 * @param   {object}        eOpts  The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		boxready? (_this: Ext.Component, width: number, height: number, eOpts: object): void;
		/** 
		 * Fires after a Component has been visually deactivated.
		 * 
		 * **Note** This event is only fired if this Component is a child of a [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html)
		 * that uses [Ext.layout.container.Card](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Card.html) as it's layout or this Component is a floating Component.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		deactivate? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the component is [destroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-destroy)ed.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		destroy? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the component is disabled.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disable? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the component is enabled.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		enable? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fired when the Flash movie embedding fails
		 * @event
		 * @param   {Ext.flash.Component} _this
		 * @param   {object}              eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                
		 */
		failure? (_this: Ext.flash.Component, eOpts: object): void;
		/** 
		 * Fires when this Component receives focus.
		 * @event
		 * @param   {Ext.Component}   _this
		 * @param   {Ext.event.Event} event The focus event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		focus? (_this: Ext.Component, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires when focus enters this Component's hierarchy.
		 * @event
		 * @param   {Ext.Component}   _this
		 * @param   {Ext.event.Event} event The focusenter event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		focusenter? (_this: Ext.Component, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires when focus leaves this Component's hierarchy.
		 * @event
		 * @param   {Ext.Component}   _this
		 * @param   {Ext.event.Event} event The focusleave event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		focusleave? (_this: Ext.Component, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires after the component is hidden. Fires after the component is hidden when calling the [hide](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-hide)
		 * method.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the component is moved.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {number}        x     The new x position.
		 * @param   {number}        y     The new y position.
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		move? (_this: Ext.Component, x: number, y: number, eOpts: object): void;
		/** 
		 * Fires when a component is removed from an [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html)
		 * @event
		 * @param   {Ext.Component}           _this
		 * @param   {Ext.container.Container} ownerCt Container which holds the component
		 * @param   {object}                  eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                    
		 */
		removed? (_this: Ext.Component, ownerCt: Ext.container.Container, eOpts: object): void;
		/** 
		 * Fires after the component markup is [rendered](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#property-rendered).
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		render? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the component is resized. Note that this does _not_ fire when the component is first laid out at its initial
		 * size. To hook that point in the life cycle, use the [boxready](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#event-boxready) event.
		 * 
		 * This event does not fire on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {number}        width     The new width that was set.
		 * @param   {number}        height    The new height that was set.
		 * @param   {number}        oldWidth  The previous width.
		 * @param   {number}        oldHeight The previous height.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		resize? (_this: Ext.Component, width: number, height: number, oldWidth: number, oldHeight: number, eOpts: object): void;
		/** 
		 * Fires after the component is shown when calling the [show](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-show) method.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires after the state of the object is restored.
		 * @event
		 * @param   {Ext.state.Stateful} _this
		 * @param   {object}             state
		 * The hash of state values returned from the StateProvider. This is passed
		 * to _`applyState`_. By default, that simply copies property values into this
		 * object. The method maybe overridden to provide custom state restoration.
		 * @param   {object}             eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}               
		 */
		staterestore? (_this: Ext.state.Stateful, state: object, eOpts: object): void;
		/** 
		 * Fires after the state of the object is saved to the configured state provider.
		 * @event
		 * @param   {Ext.state.Stateful} _this
		 * @param   {object}             state
		 * The hash of state values. This is determined by calling
		 * _`getState()`_ on the object. This method must be provided by the
		 * developer to return whatever representation of state is required, by default, [Ext.state.Stateful](https://docs.sencha.com/extjs/6.2.0/classic/Ext.state.Stateful.html)
		 * has a null implementation.
		 * @param   {object}             eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}               
		 */
		statesave? (_this: Ext.state.Stateful, state: object, eOpts: object): void;
		/** 
		 * Fired when the Flash movie has been successfully embedded
		 * @event
		 * @param   {Ext.flash.Component} _this
		 * @param   {object}              eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                
		 */
		success? (_this: Ext.flash.Component, eOpts: object): void;
	}
}
