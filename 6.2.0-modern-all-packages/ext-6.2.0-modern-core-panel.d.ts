declare namespace Ext.panel {
	/** 
	 * [Ext.panel.Header](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html)
	 * This container class is used to manage the items (such as title and tools) for [`Ext.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html).
	 */
	class Header extends Ext.Container {
		/** 
		 * This property is used to determine the property of a `bind` config that is just
		 * the value. For example, if `defaultBindProperty="value"`, then this shorthand
		 * `bind` config:
		 * 
		 *     bind: '{name}'
		 * 
		 * Is equivalent to this object form:
		 * 
		 *     bind: {
		 *         value: '{name}'
		 *     }
		 * 
		 * The `defaultBindProperty` is set to "value" for form fields and to "store" for
		 * grids and trees.
		 * @property
		 * @public (property)
		 * @default 'html'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * `true` in this class to identify an object as an instantiated Header, or a subclass
		 * thereof.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default true
		 * @type {boolean}
		 */
		readonly isPanelHeader?: boolean;
		/** 
		 * A CSS class to apply to the main element that will be inherited down the class
		 * hierarchy.  Subclasses may override this property on their prototype to add their
		 * own CSS class in addition to the CSS classes inherited from ancestor classes via
		 * the prototype chain.  For example
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Widget',
		 *        classCls: 'foo'
		 *    });
		 *    
		 *    Ext.define('Bar', {
		 *        extend: 'Foo',
		 *        classCls: 'bar'
		 *    });
		 *    
		 *    var bar = new Bar();
		 *    
		 *    console.log(bar.element.className); // outputs 'foo bar'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.baseCSSPrefix + 'container'
		 * @type {object}
		 */
		classCls?: object;
		/** 
		 * Setting this property to `false` will prevent nulling object references
		 * on a Class instance after destruction. Setting this to `"async"` will delay
		 * the clearing for approx 50ms.
		 * @property
		 * @protected (property)
		 * @default true
		 * @type {boolean|'async'}
		 */
		clearPropertiesOnDestroy?: boolean | 'async';
		/** 
		 * A configuration object for [Ext.Element.create](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html#static-method-create)() that is used to create the Element
		 * template.  Supports all the standard options of a [Ext.Element.create](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html#static-method-create)() config and
		 * adds 2 additional options:
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `reference` - this option specifies a name for Element references.  These
		 * references names become properties of the Widget instance and refer to [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 * instances that were created using the template:
		 * 
		 *   element: {
		 * 
		 *        reference: 'element',
		 *        children: [{
		 *            reference: 'innerElement'
		 *        }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  After construction of a widget the reference elements are accessible as follows:
		 * 
		 *    var foo = new FooWidget(),
		 *        innerEl = foo.innerElement; // an Ext.Element that wraps the innerElement
		 * 
		 * The reference attribute is optional, but all Widgets must have a `'element'`
		 * reference on some element within the template (usually the outermost one).
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `listeners` - a standard listeners object as specified by [Ext.mixin.Observable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html).
		 * 
		 *  element: {
		 * 
		 *       reference: 'element',
		 *       listeners: {
		 *           click: 'onClick'
		 *       },
		 *       children: [{
		 *           reference: 'innerElement',
		 *           listeners: {
		 *               click: 'onInnerClick'
		 *           }
		 *       }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  Since listeners cannot be attached without an [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) reference the `reference`
		 *  property MUST be specified in order to use `listeners`.
		 *  
		 *  
		 *  
		 *  
		 *  The Widget instance is used as the scope for all listeners specified in this way,
		 *  so it is invalid to use the `scope` option in the `listeners` config since it will
		 *  always be overwritten using `this`.
		 * @property
		 * @protected (property)
		 * @default {reference: 'element', classList: [Ext.baseCSSPrefix + 'unsized']}
		 * @type {object}
		 */
		element?: object;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.panel.Header.Statics}
		 */
		self?: Ext.panel.Header.Statics | Ext.Container.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default {id: 'container'}
		 * @type {object}
		 */
		mixinConfig?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default 'queryable'
		 * @type {string}
		 */
		mixinId?: string;
		/** 
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
		 * @param   {object}                                                                       members    The members to add to this class.
		 * @param   {boolean}                                                                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.panel.Header;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Container;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Widget;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Evented;
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
		 * @param   {object}                                                                       members
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.panel.Header;
		static addStatics? (members: object): typeof Ext.Container;
		static addStatics? (members: object): typeof Ext.Component;
		static addStatics? (members: object): typeof Ext.Widget;
		static addStatics? (members: object): typeof Ext.Evented;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Loader.html)
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
		 * @param   {object}                                                                       name
		 * @param   {object}                                                                       member
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.panel.Header;
		static addMember? (name: object, member: object): typeof Ext.Container;
		static addMember? (name: object, member: object): typeof Ext.Component;
		static addMember? (name: object, member: object): typeof Ext.Widget;
		static addMember? (name: object, member: object): typeof Ext.Evented;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                       fn
		 * @param   {object}                                                                       scope
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.panel.Header;
		static onExtended? (fn: object, scope: object): typeof Ext.Container;
		static onExtended? (fn: object, scope: object): typeof Ext.Component;
		static onExtended? (fn: object, scope: object): typeof Ext.Widget;
		static onExtended? (fn: object, scope: object): typeof Ext.Evented;
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
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * Adds a CSS class (or classes) to this Component's rendered element.
		 * @method
		 * @public (method)
		 * @param   {string} cls      The CSS class to add.
		 * @param   {string} [prefix] Optional prefix to add to each class.
		 * @param   {string} [suffix] Optional suffix to add to each class.
		 * @returns {void}            
		 */
		addCls? (cls: string, prefix?: string, suffix?: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.addCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-addCls).
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) is an Observable instance.
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Adds a plugin. For example:
		 * 
		 *     list.addPlugin('pullrefresh');
		 * 
		 * Or:
		 * 
		 *     list.addPlugin({
		 *         type: 'pullrefresh',
		 *         pullRefreshText: 'Pull to refresh...'
		 *     });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|string|Ext.plugin.Abstract} plugin
		 * The plugin or config object or
		 * alias to add.
		 * @returns {void}                                     
		 */
		addPlugin? (plugin: object | string | Ext.plugin.Abstract): void;
		/** 
		 * Animates to the supplied `activeItem` with a specified animation. Currently this only works
		 * with a Card layout.  This passed animation will override any default animations on the
		 * container, for a single card switch. The animation will be destroyed when complete.
		 * @method
		 * @public (method)
		 * @param   {object|number}             activeItem The item or item index to make active.
		 * @param   {object|Ext.fx.layout.Card} animation  Card animation configuration or instance.
		 * @returns {void}                                 
		 */
		animateActiveItem? (activeItem: object | number, animation: object | Ext.fx.layout.Card): void;
		/** 
		 * Changes the [masked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-masked) configuration when its setter is called, which will convert the value
		 * into a proper object/instance of [Ext.Mask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Mask.html)/[Ext.LoadMask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.LoadMask.html). If a mask already exists,
		 * it will use that instead.
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.Mask|Ext.LoadMask} masked
		 * @returns {object}                                      
		 */
		applyMasked? (masked: boolean | object | Ext.Mask | Ext.LoadMask): object;
		/** 
		 * Center this _floated_ Component in its parent.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component}  this
		 */
		center? (): Ext.panel.Header;
		center? (): Ext.Container;
		center? (): Ext.Component;
		/** 
		 * Retrieves the first direct child of this container which matches the passed selector or component.
		 * The passed in selector must comply with an [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector, or it can be an actual [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Component} [selector]
		 * An [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector. If no selector is
		 * specified, the first child will be returned.
		 * @returns {Ext.Component}                   The matching child [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) (or `null` if no match was found).
		 */
		child? (selector?: string | Ext.Component): Ext.Component;
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
		 * Removes and destroys a plugin.
		 * 
		 * **Note:** Not all plugins are designed to be removable. Consult the documentation
		 * for the specific plugin in question to be sure.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.plugin.Abstract} plugin The plugin or its `id` to remove.
		 * @returns {Ext.plugin.Abstract}               plugin instance or `null` if not found.
		 */
		destroyPlugin? (plugin: string | Ext.plugin.Abstract): Ext.plugin.Abstract;
		/** 
		 * Disables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component.
		 * 
		 * If the Component is currently added to a Container it will first be removed
		 * from that Container. All [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) references are also deleted and
		 * the Component is de-registered from [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentManager.html).
		 * 
		 * As a rule of thumb, subclasses should destroy their child Components, Elements,
		 * and/or other objects before calling parent method. Any object references will be
		 * nulled after this method has finished, to prevent the possibility of memory leaks.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		doDestroy? (): void;
		/** 
		 * Retrieves the first descendant of this container which matches the passed selector.
		 * The passed in selector must comply with an [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector, or it can be an actual [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Component} [selector]
		 * An [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector or [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html). If no selector is
		 * specified, the first child will be returned.
		 * @returns {Ext.Component}                   The matching descendant [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) (or `null` if no match was found).
		 */
		down? (selector?: string | Ext.Component): Ext.Component;
		/** 
		 * Enables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) returns the
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
		 * Retrieves plugin by its `type` alias. For example:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: ['listpaging', 'pullrefresh']
		 *     });
		 *    
		 *     list.findPlugin('pullrefresh').setPullRefreshText('Pull to refresh...');
		 * 
		 * **Note:** See also [getPlugin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Pluggable.html#method-getPlugin).
		 * @method
		 * @public (method)
		 * @param   {string}              type
		 * The Plugin's `type` as specified by the class's
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) configuration.
		 * @returns {Ext.plugin.Abstract}      plugin instance or `null` if not found.
		 */
		findPlugin? (type: string): Ext.plugin.Abstract;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)), but before any other
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
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * Returns the value of [activeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-activeItem).
		 * @method
		 * @public (method)
		 * @returns {object|string|number}  
		 */
		getActiveItem? (): object | string | number;
		/** 
		 * Returns the Component for a given index in the Container's items.
		 * @method
		 * @public (method)
		 * @param   {number}        index The index of the Component to return.
		 * @returns {Ext.Component}       The item at the specified `index`, if found.
		 */
		getAt? (index: number): Ext.Component;
		/** 
		 * Returns the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoDestroy? (): boolean;
		/** 
		 * Returns the value of [axisLock](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-axisLock).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAxisLock? (): boolean;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getBorder? (): boolean;
		/** 
		 * Returns the value of [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getBottom? (): number | string;
		/** 
		 * Returns the value of [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCentered? (): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getCls? (): string | string[];
		/** 
		 * Examines this container's `items` property
		 * and gets a direct child component of this container.
		 * @method
		 * @public (method)
		 * @param   {string|number} component
		 * This parameter may be any of the following:
		 * 
		 * - {String} : representing the `itemId`
		 *   or `id` of the child component.
		 * - {Number} : representing the position of the child component
		 *   within the `items` property.
		 * 
		 * For additional information see [Ext.util.MixedCollection.get](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.MixedCollection.html#method-get).
		 * @returns {Ext.Component}           The component (if found).
		 */
		getComponent? (component: string | number): Ext.Component;
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
		 * Returns the value of [contentEl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element|HTMLElement|string}  
		 */
		getContentEl? (): Ext.Element | HTMLElement | string;
		/** 
		 * Returns the value of [control](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-control).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getControl? (): object;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [defaultType](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-defaultType).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDefaultType? (): string;
		/** 
		 * Returns the value of [defaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-defaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getDefaults? (): object;
		/** 
		 * Returns the value of [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDisabled? (): boolean;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Finds a docked item of this container using a reference, `id`or an `index` of its location
		 * in [getDockedItems](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-getDockedItems).
		 * @method
		 * @public (method)
		 * @param   {string|number}         component The `id` or `index` of the component to find.
		 * @returns {Ext.Component|boolean}           The docked component, if found.
		 */
		getDockedComponent? (component: string | number): Ext.Component | boolean;
		/** 
		 * Returns all the [Ext.Component.docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) items in this container.
		 * @method
		 * @public (method)
		 * @returns {any[]}  The docked items of this container.
		 */
		getDockedItems? (): any[];
		/** 
		 * Returns the value of [enterAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getEnterAnimation? (): string | any;
		/** 
		 * Returns the value of [exitAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getExitAnimation? (): string | any;
		/** 
		 * Returns the stack of floated components in which this Component resides.
		 * This Component and all siblings at this level are returned.
		 * @method
		 * @public (method)
		 * @param   {Function|string} selector
		 * A ComponentQuery selector, or
		 * a selection function which returns `true` to select a component.
		 * @returns {void}                     
		 */
		getFloatedStack? (selector: ExtGlobalFunction | string): void;
		/** 
		 * Returns the value of [glyph](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-glyph).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getGlyph? (): number | string;
		/** 
		 * Returns the value of [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getHeight? (): number | string;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getHideAnimation? (): string | any;
		/** 
		 * Returns the value of [hideOnMaskTap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideOnMaskTap).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHideOnMaskTap? (): boolean;
		/** 
		 * Returns the value of [html](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.Element|HTMLElement}  
		 */
		getHtml? (): string | Ext.Element | HTMLElement;
		/** 
		 * Returns the value of [icon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-icon).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIcon? (): string;
		/** 
		 * Returns the value of [iconAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-iconAlign).
		 * @method
		 * @public (method)
		 * @returns {'top'|'right'|'bottom'|'left'}  
		 */
		getIconAlign? (): 'top' | 'right' | 'bottom' | 'left';
		/** 
		 * Returns the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconCls? (): string;
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
		 * Returns all inner items of this container. `inner` means that the item is not `docked` or
		 * `positioned`.
		 * @method
		 * @public (method)
		 * @returns {any[]}  The inner items of this container.
		 */
		getInnerItems? (): any[];
		/** 
		 * Returns the value of [items](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-items).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getItems? (): any[] | object;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {object|void}  
		 */
		getLayout? (): object;
		getLayout? (): void;
		/** 
		 * Returns the value of [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getLeft? (): number | string;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMargin? (): number | string;
		/** 
		 * Returns the value of [masked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-masked).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.Mask|Ext.LoadMask}  
		 */
		getMasked? (): boolean | object | Ext.Mask | Ext.LoadMask;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxHeight? (): number | string;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxWidth? (): number | string;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinHeight? (): number | string;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinWidth? (): number | string;
		/** 
		 * Returns the value of [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getModal? (): boolean;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Retrieves a plugin by its `id`.
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: {
		 *             xclass: 'Ext.plugin.PullRefresh',
		 *             id: 'foo'
		 *         }
		 *     });
		 *    
		 *     list.getPlugin('foo').setPullRefreshText('Pull to refresh...');
		 * 
		 * **Note:** See also [findPlugin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Pluggable.html#method-findPlugin).
		 * @method
		 * @public (method)
		 * @param   {string}              id The `id` of the plugin.
		 * @returns {Ext.plugin.Abstract}    plugin instance or `null` if not found.
		 */
		getPlugin? (id: string): Ext.plugin.Abstract;
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Model}  
		 */
		getRecord? (): Ext.data.Model;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [referenceHolder](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Container.html#cfg-referenceHolder).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReferenceHolder? (): boolean;
		/** 
		 * Returns an object holding the descendants of this view keyed by their
		 * [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-reference). This object should not be held
		 * past the scope of the function calling this method. It will not be valid if items
		 * are added or removed from this or any sub-container.
		 * 
		 * The intended usage is shown here (assume there are 3 components with reference
		 * values of "foo", "bar" and "baz" at some level below this container):
		 * 
		 *     onClick: function () {
		 *         var refs = this.getReferences();
		 *    
		 *         // using "refs" we can access any descendant by its "reference"
		 *    
		 *         refs.foo.getValue() + refs.bar.getValue() + refs.baz.getValue();
		 *     }
		 * 
		 * If `this` component has a [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-reference) assigned
		 * to it, that is **not** included in this object. That reference is understood to
		 * belong to the ancestor container configured as the `referenceHolder`.
		 * @method
		 * @public (method)
		 * @returns {object} 
		 * An object with each child reference. This will be `null` if this
		 * container has no descendants with a [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-reference)
		 * specified.
		 */
		getReferences? (): object;
		/** 
		 * Returns the value of [renderTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element}  
		 */
		getRenderTo? (): Ext.Element;
		/** 
		 * Returns the value of [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getRight? (): number | string;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getShowAnimation? (): string | any;
		/** 
		 * Returns the height and width of the Component.
		 * @method
		 * @public (method)
		 * @returns {object}  The current `height` and `width` of the Component.
		 */
		getSize? (): object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStyleHtmlCls? (): string;
		/** 
		 * Returns the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getStyleHtmlContent? (): boolean;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.panel.Title}  
		 */
		getTitle? (): string | Ext.panel.Title;
		/** 
		 * Returns the value of [titleAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-titleAlign).
		 * @method
		 * @public (method)
		 * @returns {'left'|'center'|'right'}  
		 */
		getTitleAlign? (): 'left' | 'center' | 'right';
		/** 
		 * Returns the value of [tooltip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tooltip).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTooltip? (): string | object;
		/** 
		 * Returns the value of [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getTop? (): number | string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Returns the value of [tpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|Ext.Template|Ext.XTemplate[]}  
		 */
		getTpl? (): string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * Returns the value of [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTplWriteMode? (): string;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUi? (): string | string[];
		/** 
		 * Returns the value of [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUserCls? (): string | string[];
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns the value of [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getWidth? (): number | string;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
		 * available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) header.
		 * 
		 * **Note:** If using your own subclasses, be aware that a Component must register its own xtype
		 * to participate in determination of inherited xtypes.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.field.Text();
		 *    alert(t.getXTypes());  // alerts 'component/field/textfield'
		 * 
		 * @method
		 * @public (method)
		 * @returns {string}  The xtype hierarchy string.
		 */
		getXTypes? (): string;
		/** 
		 * Returns the value of [zIndex](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-zIndex).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getZIndex? (): number;
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
		 * Hides this Component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}   [animation] You can specify an animation here or a bool to use the [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation) config.
		 * @returns {Ext.panel.Header}             
		 */
		hide? (animation?: object | boolean): Ext.panel.Header;
		hide? (animation?: object | boolean): Ext.Container;
		hide? (animation?: object | boolean): Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|void}  
		 */
		hide? (): void;
		/** 
		 * Adds a child Component at the given index. For example, here's how we can add a new item, making it the first
		 * child Component of this Container:
		 * 
		 *    myContainer.insert(0, {xtype: 'panel', html: 'new item'});
		 * 
		 * @method
		 * @public (method)
		 * @param   {number} index The index to insert the Component at.
		 * @param   {object} item  The Component to insert.
		 * @returns {void}         
		 */
		insert? (index: number, item: object): void;
		/** 
		 * Tests whether this Widget matches a [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html)
		 * selector string.
		 * @method
		 * @public (method)
		 * @param   {string}  selector The selector string to test against.
		 * @returns {boolean}          `true` if this Widget matches the selector.
		 */
		is? (selector: string): boolean;
		/** 
		 * Returns `true` if this Component is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if currently disabled.
		 */
		isDisabled? (): boolean;
		/** 
		 * Returns `true` if this Component is currently hidden.
		 * @method
		 * @public (method)
		 * @param   {boolean|Ext.Widget} [deep]
		 * `true` to check if this component
		 * is hidden because a parent container is hidden. Alternatively, a reference to the
		 * top-most parent at which to stop climbing.
		 * @returns {boolean}                   `true` if currently hidden.
		 */
		isHidden? (deep?: boolean | Ext.Widget): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Returns `true` if this Component is currently visible.
		 * @method
		 * @public (method)
		 * @param   {boolean} [deep]
		 * `true` to check if this component
		 * is visible and all parents are also visible.
		 * @returns {boolean}        `true` if currently visible.
		 */
		isVisible? (deep?: boolean): boolean;
		/** 
		 * Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
		 * from the xtype (default) or whether it is directly of the xtype specified (`shallow = true`).
		 * **If using your own subclasses, be aware that a Component must register its own xtype
		 * to participate in determination of inherited xtypes.__
		 * 
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) header.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.field.Text();
		 *    var isText = t.isXType('textfield'); // true
		 *    var isBoxSubclass = t.isXType('field'); // true, descended from Ext.field.Field
		 *    var isBoxInstance = t.isXType('field', true); // false, not a direct Ext.field.Field instance
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}  xtype     The xtype to check for this Component.
		 * @param   {boolean} [shallow]
		 * `false` to check whether this Component is descended from the xtype (this is
		 * the default), or `true` to check whether this Component is directly of the specified xtype.
		 * @returns {boolean}           `true` if this component descends from the specified xtype, `false` otherwise.
		 */
		isXType? (xtype: string, shallow?: boolean): boolean;
		/** 
		 * Gets a reference to the component with the specified reference value.
		 * 
		 * The method is a short-hand for the [lookupReference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Container.html#method-lookupReference) method.
		 * @method
		 * @public (method)
		 * @param   {string}        key The name of the reference to lookup.
		 * @returns {Ext.Component}     The referenced component or `null` if it is not found.
		 */
		lookup? (key: string): Ext.Component;
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
		 * Gets a reference to the component with the specified reference value.
		 * 
		 * The [lookup](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Container.html#method-lookup) method is a short-hand version of this method.
		 * @method
		 * @public (method)
		 * @param   {string}        key The name of the reference to lookup.
		 * @returns {Ext.Component}     The referenced component or `null` if it is not found.
		 */
		lookupReference? (key: string): Ext.Component;
		/** 
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Gets a named template instance for this class. See [Ext.XTemplate.getTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html#static-method-getTpl).
		 * @method
		 * @public (method)
		 * @param   {string}        name The name of the property that holds the template.
		 * @returns {Ext.XTemplate}      The template, `null` if not found.
		 */
		lookupTpl? (name: string): Ext.XTemplate;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Convenience method which calls [setMasked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-setMasked) with a value of `true` (to show the mask). For additional
		 * functionality, call the [setMasked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-setMasked) function direction (See the [masked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-masked) configuration documentation
		 * for more information).
		 * @method
		 * @public (method)
		 * @param   {object} mask
		 * @returns {void}        
		 */
		mask? (mask: object): void;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-addManagedListener).
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeManagedListener).
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
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Retrieves all descendant components which match the passed selector.
		 * Executes an [Ext.ComponentQuery.query](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html#method-query) using this container as its root.
		 * @method
		 * @public (method)
		 * @param   {string}          [selector]
		 * Selector complying to an [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector.
		 * If no selector is specified all items will be returned.
		 * @returns {Ext.Component[]}            Components which matched the selector
		 */
		query? (selector?: string): Ext.Component[];
		/** 
		 * Retrieves all descendant components which match the passed function.
		 * The function should return false for components that are to be
		 * excluded from the selection.
		 * @method
		 * @public (method)
		 * @param   {Function}        fn
		 * The matcher function. It will be called with a single argument,
		 * the component being tested.
		 * @param   {object}          [scope]
		 * The scope in which to run the function. If not specified,
		 * it will default to the active component.
		 * @returns {Ext.Component[]}         Components matched by the passed function
		 */
		queryBy? (fn: ExtGlobalFunction, scope?: object): Ext.Component[];
		/** 
		 * Finds a component at any level under this container matching the id/itemId.
		 * This is a shorthand for calling ct.down('#' + id);
		 * @method
		 * @public (method)
		 * @param   {string}        id The id to find
		 * @returns {Ext.Component}    The matching id, null if not found
		 */
		queryById? (id: string): Ext.Component;
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
		 * Removes an item from this Container, optionally destroying it.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component|string|number} component The component instance or id or index to remove.
		 * @param   {boolean}                     [destroy]
		 * `true` to automatically call Component's
		 * [destroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-destroy) method.
		 * @returns {Ext.Component}                         The Component that was removed.
		 */
		remove? (component: Ext.Component | string | number, destroy?: boolean): Ext.Component;
		/** 
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Removes all items currently in the Container, optionally destroying them all.
		 * @method
		 * @public (method)
		 * @param   {boolean}         destroy
		 * If `true`, [destroys](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-destroy)
		 * each removed Component.
		 * @param   {boolean}         everything
		 * If `true`, completely remove all items including
		 * docked / centered and positioned items.
		 * @returns {Ext.Component[]}            Array of the removed Components
		 */
		removeAll? (destroy: boolean, everything: boolean): Ext.Component[];
		/** 
		 * Removes the Component at the specified index:
		 * 
		 *    myContainer.removeAt(0); // removes the first item
		 * 
		 * @method
		 * @public (method)
		 * @param   {number}        index The index of the Component to remove.
		 * @returns {Ext.Component}       The removed Component
		 */
		removeAt? (index: number): Ext.Component;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes the given CSS class(es) from this Component's rendered element.
		 * @method
		 * @public (method)
		 * @param   {string} cls      The class(es) to remove.
		 * @param   {string} [prefix] Optional prefix to prepend before each class.
		 * @param   {string} [suffix] Optional suffix to append to each class.
		 * @returns {void}            
		 */
		removeCls? (cls: string, prefix?: string, suffix?: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.removeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-removeCls).
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * Removes an inner Component at the specified index:
		 * 
		 *    myContainer.removeInnerAt(0); // removes the first item of the innerItems property
		 * 
		 * @method
		 * @public (method)
		 * @param   {number}        index The index of the Component to remove.
		 * @returns {Ext.Component}       The removed Component
		 */
		removeInnerAt? (index: number): Ext.Component;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-mon) method.
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
		 * Removes and (optionally) destroys a plugin.
		 * 
		 * **Note:** Not all plugins are designed to be removable. Consult the documentation
		 * for the specific plugin in question to be sure.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.plugin.Abstract} plugin    The plugin or its `id` to remove.
		 * @param   {boolean}                    [destroy] Pass `true` to not call `destroy()` on the plugin.
		 * @returns {Ext.plugin.Abstract}                  plugin instance or `null` if not found.
		 */
		removePlugin? (plugin: string | Ext.plugin.Abstract, destroy?: boolean): Ext.plugin.Abstract;
		/** 
		 * Replaces specified classes with the newly specified classes.
		 * It uses the [addCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-addCls) and [removeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-removeCls) methods, so if the class(es) you are removing don't exist, it will
		 * still add the new classes.
		 * @method
		 * @public (method)
		 * @param   {string} oldCls   The class(es) to remove.
		 * @param   {string} newCls   The class(es) to add.
		 * @param   {string} [prefix] Optional prefix to prepend before each class.
		 * @param   {string} [suffix] Optional suffix to append to each class.
		 * @returns {void}            
		 */
		replaceCls? (oldCls: string, newCls: string, prefix?: string, suffix?: string): void;
		/** 
		 * Resets [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will cause this component to stop being 'positioned' and to take its place in its owning container's
		 * layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetFloating? (): void;
		/** 
		 * Resets [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will cause this component to stop being 'positioned' and to take its place in its owning container's
		 * layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetPositioned? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
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
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets the value of [activeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-activeItem).
		 * @method
		 * @public (method)
		 * @param   {object|string|number} activeItem The new value.
		 * @returns {void}                            
		 */
		setActiveItem? (activeItem: object | string | number): void;
		/** 
		 * Sets the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoDestroy The new value.
		 * @returns {void}                
		 */
		setAutoDestroy? (autoDestroy: boolean): void;
		/** 
		 * Sets the value of [axisLock](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-axisLock).
		 * @method
		 * @public (method)
		 * @param   {boolean} axisLock The new value.
		 * @returns {void}             
		 */
		setAxisLock? (axisLock: boolean): void;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {boolean} border The new value.
		 * @returns {void}           
		 */
		setBorder? (border: boolean): void;
		/** 
		 * Sets the value of [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @param   {number|string} bottom The new value.
		 * @returns {void}                 
		 */
		setBottom? (bottom: number | string): void;
		/** 
		 * Sets the value of [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @param   {boolean} centered The new value.
		 * @returns {void}             
		 */
		setCentered? (centered: boolean): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The new value.
		 * @returns {void}                
		 */
		setCls? (cls: string | string[]): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                       [value] The value to set for the name parameter.
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.panel.Header;
		setConfig? (name: string | object, value?: object): Ext.Container;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [contentEl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element|HTMLElement|string} contentEl The new value.
		 * @returns {void}                                     
		 */
		setContentEl? (contentEl: Ext.Element | HTMLElement | string): void;
		/** 
		 * Sets the value of [control](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-control).
		 * @method
		 * @public (method)
		 * @param   {object} control The new value.
		 * @returns {void}           
		 */
		setControl? (control: object): void;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [defaultType](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-defaultType).
		 * @method
		 * @public (method)
		 * @param   {string} defaultType The new value.
		 * @returns {void}               
		 */
		setDefaultType? (defaultType: string): void;
		/** 
		 * Sets the value of [defaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-defaults).
		 * @method
		 * @public (method)
		 * @param   {object} defaults The new value.
		 * @returns {void}            
		 */
		setDefaults? (defaults: object): void;
		/** 
		 * Sets the value of [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled The new value.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [draggable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-draggable).
		 * @method
		 * @public (method)
		 * @param   {object} draggable The new value.
		 * @returns {void}             
		 */
		setDraggable? (draggable: object): void;
		/** 
		 * Sets the value of [enterAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} enterAnimation The new value.
		 * @returns {void}                      
		 */
		setEnterAnimation? (enterAnimation: string | any): void;
		/** 
		 * Sets the value of [exitAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} exitAnimation The new value.
		 * @returns {void}                     
		 */
		setExitAnimation? (exitAnimation: string | any): void;
		/** 
		 * Sets the value of [glyph](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-glyph).
		 * @method
		 * @public (method)
		 * @param   {number|string} glyph The new value.
		 * @returns {void}                
		 */
		setGlyph? (glyph: number | string): void;
		/** 
		 * Sets the value of [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @param   {number|string} height The new value.
		 * @returns {void}                 
		 */
		setHeight? (height: number | string): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} hideAnimation The new value.
		 * @returns {void}                     
		 */
		setHideAnimation? (hideAnimation: string | any): void;
		/** 
		 * Sets the value of [hideOnMaskTap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideOnMaskTap).
		 * @method
		 * @public (method)
		 * @param   {boolean} hideOnMaskTap The new value.
		 * @returns {void}                  
		 */
		setHideOnMaskTap? (hideOnMaskTap: boolean): void;
		/** 
		 * Sets the value of [html](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Element|HTMLElement} html The new value.
		 * @returns {void}                                
		 */
		setHtml? (html: string | Ext.Element | HTMLElement): void;
		/** 
		 * Sets the value of [icon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-icon).
		 * @method
		 * @public (method)
		 * @param   {string} icon The new value.
		 * @returns {void}        
		 */
		setIcon? (icon: string): void;
		/** 
		 * Sets the value of [iconAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-iconAlign).
		 * @method
		 * @public (method)
		 * @param   {'top'|'right'|'bottom'|'left'} iconAlign The new value.
		 * @returns {void}                                    
		 */
		setIconAlign? (iconAlign: 'top' | 'right' | 'bottom' | 'left'): void;
		/** 
		 * Sets the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @param   {string} iconCls The new value.
		 * @returns {void}           
		 */
		setIconCls? (iconCls: string): void;
		/** 
		 * Sets the value of [items](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-items).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} items The new value.
		 * @returns {void}               
		 */
		setItems? (items: any[] | object): void;
		/** 
		 * Sets the value of [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @param   {number|string} left The new value.
		 * @returns {void}               
		 */
		setLeft? (left: number | string): void;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The new value.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [masked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-masked).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.Mask|Ext.LoadMask} masked The new value.
		 * @returns {void}                                        
		 */
		setMasked? (masked: boolean | object | Ext.Mask | Ext.LoadMask): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxHeight The new value.
		 * @returns {void}                    
		 */
		setMaxHeight? (maxHeight: number | string): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxWidth The new value.
		 * @returns {void}                   
		 */
		setMaxWidth? (maxWidth: number | string): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} minHeight The new value.
		 * @returns {void}                    
		 */
		setMinHeight? (minHeight: number | string): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} minWidth The new value.
		 * @returns {void}                   
		 */
		setMinWidth? (minWidth: number | string): void;
		/** 
		 * Sets the value of [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal).
		 * @method
		 * @public (method)
		 * @param   {boolean} modal The new value.
		 * @returns {void}          
		 */
		setModal? (modal: boolean): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The new value.
		 * @returns {void}                  
		 */
		setRecord? (record: Ext.data.Model): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [referenceHolder](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Container.html#cfg-referenceHolder).
		 * @method
		 * @public (method)
		 * @param   {boolean} referenceHolder The new value.
		 * @returns {void}                    
		 */
		setReferenceHolder? (referenceHolder: boolean): void;
		/** 
		 * Sets the value of [renderTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element} renderTo The new value.
		 * @returns {void}                 
		 */
		setRenderTo? (renderTo: Ext.Element): void;
		/** 
		 * Sets the value of [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @param   {number|string} right The new value.
		 * @returns {void}                
		 */
		setRight? (right: number | string): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} showAnimation The new value.
		 * @returns {void}                     
		 */
		setShowAnimation? (showAnimation: string | any): void;
		/** 
		 * Sets the size of the Component.
		 * @method
		 * @public (method)
		 * @param   {number} width  The new width for the Component.
		 * @param   {number} height The new height for the Component.
		 * @returns {void}          
		 */
		setSize? (width: number, height: number): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @param   {string} styleHtmlCls The new value.
		 * @returns {void}                
		 */
		setStyleHtmlCls? (styleHtmlCls: string): void;
		/** 
		 * Sets the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @param   {boolean} styleHtmlContent The new value.
		 * @returns {void}                     
		 */
		setStyleHtmlContent? (styleHtmlContent: boolean): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.panel.Title} title The new value.
		 * @returns {void}                         
		 */
		setTitle? (title: string | Ext.panel.Title): void;
		/** 
		 * Sets the value of [titleAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-titleAlign).
		 * @method
		 * @public (method)
		 * @param   {'left'|'center'|'right'} titleAlign The new value.
		 * @returns {void}                               
		 */
		setTitleAlign? (titleAlign: 'left' | 'center' | 'right'): void;
		/** 
		 * Sets the value of [tooltip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tooltip).
		 * @method
		 * @public (method)
		 * @param   {string|object} tooltip The new value.
		 * @returns {void}                  
		 */
		setTooltip? (tooltip: string | object): void;
		/** 
		 * Sets the value of [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @param   {number|string} top The new value.
		 * @returns {void}              
		 */
		setTop? (top: number | string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Sets the value of [tpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|Ext.Template|Ext.XTemplate[]} tpl The new value.
		 * @returns {void}                                             
		 */
		setTpl? (tpl: string | string[] | Ext.Template | Ext.XTemplate[]): void;
		/** 
		 * Sets the value of [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @param   {string} tplWriteMode The new value.
		 * @returns {void}                
		 */
		setTplWriteMode? (tplWriteMode: string): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} ui The new value.
		 * @returns {void}               
		 */
		setUi? (ui: string | string[]): void;
		/** 
		 * Sets the value of [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} userCls The new value.
		 * @returns {void}                    
		 */
		setUserCls? (userCls: string | string[]): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Sets the value of [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @param   {number|string} width The new value.
		 * @returns {void}                
		 */
		setWidth? (width: number | string): void;
		/** 
		 * Sets the value of [zIndex](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-zIndex).
		 * @method
		 * @public (method)
		 * @param   {number} zIndex The new value.
		 * @returns {void}          
		 */
		setZIndex? (zIndex: number): void;
		/** 
		 * Shows this component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}   [animation] You can specify an animation here or a bool to use the [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation) config.
		 * @returns {Ext.panel.Header}             
		 */
		show? (animation?: object | boolean): Ext.panel.Header;
		show? (animation?: object | boolean): Ext.Container;
		show? (animation?: object | boolean): Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|void}  
		 */
		show? (): void;
		/** 
		 * Shows this component by another component. If you specify no alignment, it will automatically
		 * position this component relative to the reference component.
		 * 
		 * For example, say we are aligning a Panel next to a Button, the alignment string would look like this:
		 * 
		 *    [panel-vertical (t/b/c)][panel-horizontal (l/r/c)]-[button-vertical (t/b/c)][button-horizontal (l/r/c)]
		 * 
		 * where t = top, b = bottom, c = center, l = left, r = right.
		 * 
		 * ## Examples
		 * 
		 * - `tl-tr` means top-left corner of the Panel to the top-right corner of the Button
		 * - `tc-bc` means top-center of the Panel to the bottom-center of the Button
		 * 
		 * You can put a '?' at the end of the alignment string to constrain the positioned element to the
		 * [Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html)
		 * 
		 *    // show `panel` by `button` using the default positioning (auto fit)
		 *    panel.showBy(button);
		 *    
		 *    // align the top left corner of `panel` with the top right corner of `button` (constrained to viewport)
		 *    panel.showBy(button, "tl-tr?");
		 *    
		 *    // align the bottom right corner of `panel` with the center left edge of `button` (not constrained by viewport)
		 *    panel.showBy(button, "br-cl");
		 * 
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} component   The target component to show this component by.
		 * @param   {string}        [alignment] The specific alignment.
		 * @param   {object}        [options]   An object containing options for the [Ext.util.Region.alignTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Region.html#method-alignTo) method.
		 * @returns {void}                      
		 */
		showBy? (component: Ext.Component, alignment?: string, options?: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
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
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Add or removes a class based on if the class is already added to the Component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                                            className The class to toggle.
		 * @param   {boolean}                                           [state]
		 * If specified as `true`, causes the class to be added. If specified as `false`, causes
		 * the class to be removed.
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|void}           this
		 */
		toggleCls? (className: string, state?: boolean): Ext.panel.Header;
		toggleCls? (className: string, state?: boolean): Ext.Container;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		toggleCls? (className: string, state?: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
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
		 * Convenience method which calls [setMasked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-setMasked) with a value of false (to hide the mask). For additional
		 * functionality, call the [setMasked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-setMasked) function direction (See the [masked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-masked) configuration documentation
		 * for more information).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		unmask? (): void;
		/** 
		 * Walks up the ownership hierarchy looking for an ancestor Component which matches
		 * the passed simple selector.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}                      [selector] The simple selector to test.
		 * @param   {string|number|Ext.Component} [limit]    This may be a selector upon which to stop the upward scan, or a limit of the number of steps, or Component reference to stop on.
		 * @returns {Ext.Container}                          The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string, limit?: string | number | Ext.Component): Ext.Container;
		/** 
		 * Updates the [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls) configuration
		 * @method
		 * @public (method)
		 * @param   {object} newHtmlCls
		 * @param   {object} oldHtmlCls
		 * @returns {void}              
		 */
		updateStyleHtmlCls? (newHtmlCls: object, oldHtmlCls: object): void;
		/** 
		 * Returns the value of [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @method
		 * @protected (method)
		 * @returns {string|boolean}  
		 */
		getBaseCls? (): string | boolean;
		/** 
		 * Sets the value of [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @method
		 * @protected (method)
		 * @param   {string|boolean} baseCls The new value.
		 * @returns {void}                   
		 */
		setBaseCls? (baseCls: string | boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		applyData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDraggable? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		updateDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} ui
		 * @param   {object} oldValue
		 * @returns {void}            
		 */
		updateUi? (ui: object, oldValue: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.updateUi](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateUi).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateUi? (): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
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
		 * Called when an item is added to this container either during initialization of the [items](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-items) config,
		 * or when new items are [added), or {@link #method-insert inserted](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-add).
		 * 
		 * If the passed object is _not_ an instanced component, it converts the passed object into an instanced
		 * child component.
		 * 
		 * It applies [defaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-defaults) applied for contained child items - that is items
		 * which are not positiond using [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left),  [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered) or [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * 
		 * Derived classes can override this method to process context appropriate short-hands
		 * such as [Ext.Toolbar](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Toolbar.html) and "->" to insert a spacer.
		 * @method
		 * @protected (method)
		 * @param   {any}           item
		 * The item being added. May be a raw config object or an instanced
		 * Component or some other short-hand understood by the container.
		 * @returns {Ext.Component}      The component to be added.
		 */
		factoryItem? (item: any): Ext.Component;
		/** 
		 * A template method for modifying the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#property-element) config before it is processed.
		 * By default adds the result of `this.getTemplate()` as the `children` array of
		 * [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#property-element) if `children` were not specified in the original
		 * [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#property-element) config.  Typically this method should not need to be implemented
		 * in subclasses.  Instead the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#property-element) property should be use to configure
		 * the element template for a given Widget subclass.
		 * 
		 * This method is called once when the first instance of each Widget subclass is
		 * created.  The element config object that is returned is cached and used as the template
		 * for all successive instances.  The scope object for this method is the class prototype,
		 * not the instance.
		 * @method
		 * @protected (method)
		 * @returns {object}  the element config object
		 */
		getElementConfig? (): object;
		/** 
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-up)
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
		 * @param   {object}                                                                       config
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.panel.Header;
		initConfig? (config: object): Ext.Container;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#property-element) config will be
		 * processed to create an Element.  This Element is then cached on the prototype (see
		 * afterCachedConfig) so that future instances can obtain their element by simply
		 * cloning the Element that was cached by the first instance.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initElement? (): void;
		/** 
		 * Called by `getInherited` to initialize the inheritedState the first time it is
		 * requested.
		 * @method
		 * @protected (method)
		 * @param   {object} inheritedState
		 * @param   {object} inheritedStateInner
		 * @returns {void}                       
		 */
		initInheritedState? (inheritedState: object, inheritedStateInner: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Bindable.initInheritedState](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-initInheritedState).
		 * Called by `getInherited` to initialize the inheritedState the first time it is
		 * requested.
		 * @method
		 * @protected (method)
		 * @param   {object} inheritedState
		 * @returns {void}                  
		 */
		initInheritedState? (inheritedState: object): void;
		/** 
		 * This method should be called when the instance is ready to start listening for
		 * keyboard events. This is called automatically for [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) and derived
		 * classes. In Classic Toolkit, this is done after the component is rendered.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initKeyMap? (): void;
		/** 
		 * Allows addition of behavior to the rendering phase.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initialize? (): void;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
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
		 * Gets the Controller or Component that is used as the event root for this view.
		 * @method
		 * @protected (method)
		 * @param   {object}                                         defaultScope
		 * @param   {object}                                         skipThis
		 * @returns {Ext.app.ViewController|Ext.container.Container}              The default listener scope.
		 */
		resolveListenerScope? (defaultScope: object, skipThis: object): Ext.app.ViewController | Ext.container.Container;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Observable.resolveListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resolveListenerScope).
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object}                                                [defaultScope] The default scope to return if none is found.
		 * @returns {Ext.app.ViewController|Ext.container.Container|object}                The default event scope
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
		 * @method
		 * @protected (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateHeight? (height: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @returns {void}         
		 */
		updateStyle? (style: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateWidth? (width: object): void;
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
		 * @returns {Ext.panel.Header.Statics|Ext.Container.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.panel.Header.Statics;
		statics? (): Ext.Container.Statics;
		statics? (): Ext.Component.Statics;
		statics? (): Ext.Widget.Statics;
		statics? (): Ext.Evented.Statics;
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
		 * Creates a particular plugin type if defined in the `plugins` configuration.
		 * @method
		 * @private (method)
		 * @param   {string}              type The `type` of the plugin.
		 * @returns {Ext.plugin.Abstract}      The plugin that was created.
		 */
		activatePlugin? (type: string): Ext.plugin.Abstract;
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
		 * Adds a listeners with the "delegate" event option.  Users should not invoke this
		 * method directly.  Use the "delegate" event option of
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) instead.
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
		 * Adds an element reference to this Widget instance.
		 * @method
		 * @private (method)
		 * @param   {string}          name    The name of the reference
		 * @param   {HTMLElement}     domNode
		 * @returns {Ext.dom.Element}         
		 */
		addElementReference? (name: string, domNode: HTMLElement): Ext.dom.Element;
		/** 
		 * Reduces instantiation time for a Widget by lazily instantiating [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 * references the first time they are used.  This optimization only works for elements
		 * with no listeners specified.
		 * @method
		 * @private (method)
		 * @param   {string}      name    The name of the reference
		 * @param   {HTMLElement} domNode
		 * @returns {void}                
		 */
		addElementReferenceOnDemand? (name: string, domNode: HTMLElement): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterCachedConfig? (): void;
		/** 
		 * Used to handle joining of a record to a tpl
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterEdit? (): void;
		/** 
		 * Used to handle joining of a record to a tpl
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterErase? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		afterItemHide? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		afterItemShow? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @param   {object} component
		 * @param   {object} newState
		 * @param   {object} oldState
		 * @param   {object} controller
		 * @returns {void}              
		 */
		animateFn? (animation: object, component: object, newState: object, oldState: object, controller: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} activeItem
		 * @param   {object} currentActiveItem
		 * @returns {void}                     
		 */
		applyActiveItem? (activeItem: object, currentActiveItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} baseCls
		 * @returns {void}           
		 */
		applyBaseCls? (baseCls: object): void;
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
		 * @param   {object} bottom
		 * @returns {void}          
		 */
		applyBottom? (bottom: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} centered
		 * @returns {boolean}          
		 */
		applyCentered? (centered: boolean): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} contentEl
		 * @returns {void}             
		 */
		applyContentEl? (contentEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} selectors
		 * @returns {void}             
		 */
		applyControl? (selectors: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		applyDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @returns {void}          
		 */
		applyDocked? (docked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyDraggable? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		applyHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyHideAnimation? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @param   {object} collection
		 * @returns {void}              
		 */
		applyItems? (items: object, collection: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} left
		 * @returns {void}        
		 */
		applyLeft? (left: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyMaxHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyMaxWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyMinHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyMinWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modal
		 * @param   {object} currentModal
		 * @returns {void}                
		 */
		applyModal? (modal: object, currentModal: object): void;
		/** 
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyRecord? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} right
		 * @returns {void}         
		 */
		applyRight? (right: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyShowAnimation? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyStyleHtmlContent? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tooltip
		 * @returns {void}           
		 */
		applyTooltip? (tooltip: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} top
		 * @returns {void}       
		 */
		applyTop? (top: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @param   {object} oldTouchAction
		 * @returns {void}                  
		 */
		applyTouchAction? (touchAction: object, oldTouchAction: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tpl
		 * @returns {void}       
		 */
		applyTpl? (tpl: object): void;
		/** 
		 * Transforms a ViewModel config to a proper instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel
		 * @returns {Ext.app.ViewModel}                         
		 */
		applyViewModel? (viewModel: string | object | Ext.app.ViewModel): Ext.app.ViewModel;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} zIndex
		 * @returns {void}          
		 */
		applyZIndex? (zIndex: object): void;
		/** 
		 * Sets up a component reference.
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component The component to reference.
		 * @returns {void}                    
		 */
		attachReference? (component: Ext.Component): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		beforeInitConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeInitialize? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeShowAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 */
		captureArgs? (o: object, fn: object, scope: object): void;
		/** 
		 * Clears all listeners that were attached using the "delegate" event option.
		 * Users should not invoke this method directly.  It is called automatically as
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * Clear a component reference.
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component The component to remove.
		 * @returns {void}                    
		 */
		clearReference? (component: Ext.Component): void;
		/** 
		 * Invalidates the references collection. Typically called when
		 * removing a container from this container, since it's difficult
		 * to know what references got removed.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearReferences? (): void;
		/** 
		 * Converts the provided type or config object into a plugin instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.plugin.Abstract} config
		 * The plugin type, config
		 * object or instance.
		 * @returns {Ext.plugin.Abstract}                      
		 */
		createPlugin? (config: string | object | Ext.plugin.Abstract): Ext.plugin.Abstract;
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
		 * @param   {Ext.Component} item
		 * @param   {boolean}       instanced when received.
		 * @returns {void}                    
		 */
		doAdd? (item: Ext.Component, instanced: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} name
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} options
		 * @param   {object} order
		 * @param   {object} caller
		 * @param   {object} manager
		 * @returns {void}           
		 */
		doAddListener? (name: object, fn: object, scope: object, options: object, order: object, caller: object, manager: object): void;
		/** 
		 * Fires a delegated event.  Users should not invoke this method directly.  It
		 * is called automatically by the framework as needed (see the "delegate" event
		 * option of [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) for more
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
		 * @param   {number}        index
		 * @param   {Ext.Component} item
		 * @param   {boolean}       instanced
		 * @returns {void}                    
		 */
		doInsert? (index: number, item: Ext.Component, instanced: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} index
		 * @returns {void}         
		 */
		doItemLayoutAdd? (item: object, index: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} toIndex
		 * @param   {object} fromIndex
		 * @returns {void}             
		 */
		doItemLayoutMove? (item: object, toIndex: object, fromIndex: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} index
		 * @param   {object} destroying
		 * @returns {void}              
		 */
		doItemLayoutRemove? (item: object, index: object, destroying: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doRefreshPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doRefreshSizeState? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} index
		 * @param   {object} destroy
		 * @returns {void}           
		 */
		doRemove? (item: object, index: object, destroy: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} innerIndex
		 * @returns {void}              
		 */
		doResetActiveItem? (innerIndex: object): void;
		/** 
		 * Sets up a reference on our current reference holder.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		fixReference? (): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBubbleTarget? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getClassCls? (): void;
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
		getDraggableBehavior? (): void;
		/** 
		 * This method is in place on the instance during construction to ensure that any
		 * [lookup](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-lookup) or [getReferences](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-getReferences) calls have the [items](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-items) initialized
		 * prior to the lookup.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFirstReferences? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} index
		 * @returns {void}         
		 */
		getInnerAt? (index: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getInnerHtmlElement? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @chainable
		 * @returns {Ext.panel.Header|Ext.Container}  this
		 */
		getQueryRoot? (): Ext.panel.Header;
		getQueryRoot? (): Ext.Container;
		/** 
		 * Used by ComponentQuery to retrieve all of the items
		 * which can potentially be considered a child of this Container.
		 * This should be overridden by components which have child items
		 * that are not contained in items. For example `dockedItems`, `menu`, etc
		 * @method
		 * @private (method)
		 * @param   {object} deep
		 * @returns {void}        
		 */
		getRefItems? (deep: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSizeFlags? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSizeState? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTemplate? (): void;
		/** 
		 * Returns the value of [useBodyElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getUseBodyElement? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		has? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		hasInnerItem? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		indexOf? (item: object): void;
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
		 * Called for the first instance of this Widget to create an object that contains the
		 * listener configs for all of the element references keyed by reference name. The
		 * object is cached on the prototype and has the following shape:
		 * 
		 *    _elementListeners: {
		 *        element: {
		 *            click: 'onClick',
		 *            scope: this
		 *        },
		 *        fooReference: {
		 *            tap: {
		 *                fn: someFunction,
		 *                delay: 100
		 *            }
		 *        }
		 *    }
		 * 
		 * The returned object is prototype chained to the _elementListeners object of its
		 * superclass, and each key in the object is prototype chained to object with the
		 * corresponding key in the superclass _elementListeners.  This allows element
		 * listeners to be inherited and overridden when subclassing widgets.
		 * 
		 * This method is invoked with the prototype object as the scope
		 * @method
		 * @private (method)
		 * @param   {object} elementConfig
		 * @returns {void}                 
		 */
		initElementListeners? (elementConfig: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		innerIndexOf? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {object}                         item
		 * @param   {object}                         relativeToItem
		 * @returns {Ext.panel.Header|Ext.Container}                this
		 */
		insertAfter? (item: object, relativeToItem: object): Ext.panel.Header;
		insertAfter? (item: object, relativeToItem: object): Ext.Container;
		/** 
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {object}                         item
		 * @param   {object}                         relativeToItem
		 * @returns {Ext.panel.Header|Ext.Container}                this
		 */
		insertBefore? (item: object, relativeToItem: object): Ext.panel.Header;
		insertBefore? (item: object, relativeToItem: object): Ext.Container;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		insertFirst? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {Ext.Component}                  item
		 * @param   {number}                         index
		 * @returns {Ext.panel.Header|Ext.Container}       this
		 */
		insertInner? (item: Ext.Component, index: number): Ext.panel.Header;
		insertInner? (item: Ext.Component, index: number): Ext.Container;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		insertLast? (item: object): void;
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
		 * @returns {void}  
		 */
		isAncestor? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isCentered? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isDocked? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isPainted? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isRendered? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-destroy)).
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
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-publishState)
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
		 * @param   {object} parent
		 * @param   {object} instanced
		 * @returns {void}             
		 */
		onAdded? (parent: object, instanced: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @param   {object} data
		 * @returns {void}             
		 */
		onAnimationStart? (animation: object, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} T
		 * @returns {void}     
		 */
		onClassMixedIn? (T: object): void;
		/** 
		 * Initialize layout and event listeners the very first time an item is added
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFirstItemAdd? (): void;
		/** 
		 * Temporary workarounds to keep [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentManager.html) from throwing errors when dealing
		 * Widgets.  TODO: remove these emptyFns when proper focus handling is implmented
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFocusEnter? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFocusLeave? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} args
		 * @returns {void}         
		 */
		onInitialized? (fn: object, scope: object, args: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onInnerItemMove? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} index
		 * @returns {void}         
		 */
		onItemAdd? (item: object, index: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} floated
		 * @returns {void}           
		 */
		onItemFloatedChange? (item: object, floated: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} isInner
		 * @returns {void}           
		 */
		onItemInnerStateChange? (item: object, isInner: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} toIndex
		 * @param   {object} fromIndex
		 * @returns {void}             
		 */
		onItemMove? (item: object, toIndex: object, fromIndex: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} index
		 * @param   {object} destroying
		 * @returns {void}              
		 */
		onItemRemove? (item: object, index: object, destroying: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} destroying
		 * @returns {void}              
		 */
		onRemoved? (destroying: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component
		 * @returns {void}                    
		 */
		onShowByErased? (component: Ext.Component): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @param   {object} alignment
		 * @param   {object} options
		 * @returns {void}             
		 */
		onViewportResize? (component: object, alignment: object, options: object): void;
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
		 * Recursively processes the element templates for this class and its superclasses,
		 * ascending the hierarchy until it reaches a superclass whose element template
		 * has already been processed.  This method is invoked using the prototype as the scope.
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		processElementConfig? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshSizeState? (): void;
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
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {Ext.Component}                  item
		 * @returns {Ext.panel.Header|Ext.Container}      this
		 */
		removeInner? (item: Ext.Component): Ext.panel.Header;
		removeInner? (item: Ext.Component): Ext.Container;
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
		 * @method
		 * @private (method)
		 * @param   {object} flags
		 * @returns {void}         
		 */
		setLayoutSizeFlags? (flags: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rendered
		 * @returns {void}            
		 */
		setRendered? (rendered: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} flags
		 * @returns {void}         
		 */
		setSizeFlags? (flags: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} state
		 * @returns {void}         
		 */
		setSizeState? (state: object): void;
		/** 
		 * Sets the value of [useBodyElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement The new value.
		 * @returns {void}                  
		 */
		setUseBodyElement? (useBodyElement: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} isVisible
		 * @returns {void}             
		 */
		setVisibility? (isVisible: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} axis
		 * @param   {object} value
		 * @param   {object} animation
		 * @returns {void}             
		 */
		translateAxis? (axis: object, value: object, animation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		triggerInitialized? (): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                     names The names of the linked objects to destroy.
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.panel.Header;
		unlink? (names: string[]): Ext.Container;
		unlink? (names: string[]): Ext.Component;
		unlink? (names: string[]): Ext.Widget;
		unlink? (names: string[]): Ext.Evented;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newActiveItem
		 * @param   {object} oldActiveItem
		 * @returns {void}                 
		 */
		updateActiveItem? (newActiveItem: object, oldActiveItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBaseCls
		 * @param   {object} oldBaseCls
		 * @returns {void}              
		 */
		updateBaseCls? (newBaseCls: object, oldBaseCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} border
		 * @returns {void}          
		 */
		updateBorder? (border: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} bottom
		 * @returns {void}          
		 */
		updateBottom? (bottom: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} centered
		 * @returns {void}            
		 */
		updateCentered? (centered: object): void;
		/** 
		 * All cls methods directly report to the [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls) configuration, so anytime it changes, [updateCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateCls) will be called
		 * @method
		 * @private (method)
		 * @param   {object} newCls
		 * @param   {object} oldCls
		 * @returns {void}          
		 */
		updateCls? (newCls: object, oldCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newContentEl
		 * @param   {object} oldContentEl
		 * @returns {void}                
		 */
		updateContentEl? (newContentEl: object, oldContentEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newData
		 * @returns {void}           
		 */
		updateData? (newData: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} defaultType
		 * @returns {void}               
		 */
		updateDefaultType? (defaultType: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @param   {object} oldDocked
		 * @returns {void}             
		 */
		updateDocked? (docked: object, oldDocked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateFlex? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @param   {object} oldHidden
		 * @returns {void}             
		 */
		updateHidden? (hidden: object, oldHidden: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.updateHidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateHidden).
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hide
		 * @returns {void}        
		 */
		updateHideOnMaskTap? (hide: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} html
		 * @returns {void}        
		 */
		updateHtml? (html: object): void;
		/** 
		 * <debug></debug>
		 * @method
		 * @private (method)
		 * @param   {object} newLayout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		updateLayout? (newLayout: object, oldLayout: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.updateLayout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateLayout).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} left
		 * @returns {void}        
		 */
		updateLeft? (left: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} margin
		 * @returns {void}          
		 */
		updateMargin? (margin: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateMaxHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateMaxWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateMinHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateMinWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modal
		 * @returns {void}         
		 */
		updateModal? (modal: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @returns {void}           
		 */
		updatePadding? (padding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRecord
		 * @param   {object} oldRecord
		 * @returns {void}             
		 */
		updateRecord? (newRecord: object, oldRecord: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newContainer
		 * @returns {void}                
		 */
		updateRenderTo? (newContainer: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} right
		 * @returns {void}         
		 */
		updateRight? (right: object): void;
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
		 * @param   {object} styleHtmlContent
		 * @returns {void}                    
		 */
		updateStyleHtmlContent? (styleHtmlContent: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tooltip
		 * @param   {object} oldTooltip
		 * @returns {void}              
		 */
		updateTooltip? (tooltip: object, oldTooltip: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} top
		 * @returns {void}       
		 */
		updateTop? (top: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @returns {void}               
		 */
		updateTouchAction? (touchAction: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement
		 * @returns {void}                  
		 */
		updateUseBodyElement? (useBodyElement: object): void;
		/** 
		 * Updates the viewModel config.
		 * @method
		 * @private (method)
		 * @param   {Ext.app.ViewModel} viewModel
		 * @param   {Ext.app.ViewModel} oldViewModel
		 * @returns {void}                           
		 */
		updateViewModel? (viewModel: Ext.app.ViewModel, oldViewModel: Ext.app.ViewModel): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} zIndex
		 * @returns {void}          
		 */
		updateZIndex? (zIndex: object): void;
	}
	/** 
	 * [Ext.panel.Title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html)
	 * A basic title component for a Panel Header.
	 */
	class Title extends Ext.Component {
		/** 
		 * This property is used to determine the property of a `bind` config that is just
		 * the value. For example, if `defaultBindProperty="value"`, then this shorthand
		 * `bind` config:
		 * 
		 *     bind: '{name}'
		 * 
		 * Is equivalent to this object form:
		 * 
		 *     bind: {
		 *         value: '{name}'
		 *     }
		 * 
		 * The `defaultBindProperty` is set to "value" for form fields and to "store" for
		 * grids and trees.
		 * @property
		 * @public (property)
		 * @default 'html'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * A CSS class to apply to the main element that will be inherited down the class
		 * hierarchy.  Subclasses may override this property on their prototype to add their
		 * own CSS class in addition to the CSS classes inherited from ancestor classes via
		 * the prototype chain.  For example
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Widget',
		 *        classCls: 'foo'
		 *    });
		 *    
		 *    Ext.define('Bar', {
		 *        extend: 'Foo',
		 *        classCls: 'bar'
		 *    });
		 *    
		 *    var bar = new Bar();
		 *    
		 *    console.log(bar.element.className); // outputs 'foo bar'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.baseCSSPrefix + 'component'
		 * @type {object}
		 */
		classCls?: object;
		/** 
		 * Setting this property to `false` will prevent nulling object references
		 * on a Class instance after destruction. Setting this to `"async"` will delay
		 * the clearing for approx 50ms.
		 * @property
		 * @protected (property)
		 * @default true
		 * @type {boolean|'async'}
		 */
		clearPropertiesOnDestroy?: boolean | 'async';
		/** 
		 * A configuration object for [Ext.Element.create](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html#static-method-create)() that is used to create the Element
		 * template.  Supports all the standard options of a [Ext.Element.create](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html#static-method-create)() config and
		 * adds 2 additional options:
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `reference` - this option specifies a name for Element references.  These
		 * references names become properties of the Widget instance and refer to [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 * instances that were created using the template:
		 * 
		 *   element: {
		 * 
		 *        reference: 'element',
		 *        children: [{
		 *            reference: 'innerElement'
		 *        }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  After construction of a widget the reference elements are accessible as follows:
		 * 
		 *    var foo = new FooWidget(),
		 *        innerEl = foo.innerElement; // an Ext.Element that wraps the innerElement
		 * 
		 * The reference attribute is optional, but all Widgets must have a `'element'`
		 * reference on some element within the template (usually the outermost one).
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `listeners` - a standard listeners object as specified by [Ext.mixin.Observable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html).
		 * 
		 *  element: {
		 * 
		 *       reference: 'element',
		 *       listeners: {
		 *           click: 'onClick'
		 *       },
		 *       children: [{
		 *           reference: 'innerElement',
		 *           listeners: {
		 *               click: 'onInnerClick'
		 *           }
		 *       }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  Since listeners cannot be attached without an [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) reference the `reference`
		 *  property MUST be specified in order to use `listeners`.
		 *  
		 *  
		 *  
		 *  
		 *  The Widget instance is used as the scope for all listeners specified in this way,
		 *  so it is invalid to use the `scope` option in the `listeners` config since it will
		 *  always be overwritten using `this`.
		 * @property
		 * @protected (property)
		 * @default {unselectable: 'on', reference: 'element', cls: Ext.baseCSSPrefix + 'panel-title-align-left', children: [{reference: 'iconElement', style: 'display:none', cls: Ext.baseCSSPrefix + 'panel-title-icon ' + Ext.baseCSSPrefix + 'panel-title-icon-left'}, {reference: 'textElement', cls: Ext.baseCSSPrefix + 'panel-title-text'}]}
		 * @type {object}
		 */
		element?: object;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.panel.Title.Statics}
		 */
		self?: Ext.panel.Title.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * ---
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
		 * @param   {object}                                                        members    The members to add to this class.
		 * @param   {boolean}                                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.panel.Title;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Widget;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Evented;
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
		 * @param   {object}                                                        members
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.panel.Title;
		static addStatics? (members: object): typeof Ext.Component;
		static addStatics? (members: object): typeof Ext.Widget;
		static addStatics? (members: object): typeof Ext.Evented;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Loader.html)
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
		 * @param   {object}                                                        name
		 * @param   {object}                                                        member
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.panel.Title;
		static addMember? (name: object, member: object): typeof Ext.Component;
		static addMember? (name: object, member: object): typeof Ext.Widget;
		static addMember? (name: object, member: object): typeof Ext.Evented;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                        fn
		 * @param   {object}                                                        scope
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.panel.Title;
		static onExtended? (fn: object, scope: object): typeof Ext.Component;
		static onExtended? (fn: object, scope: object): typeof Ext.Widget;
		static onExtended? (fn: object, scope: object): typeof Ext.Evented;
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
		 * @param   {object} config The standard configuration object.
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * Adds a CSS class (or classes) to this Component's rendered element.
		 * @method
		 * @public (method)
		 * @param   {string} cls      The CSS class to add.
		 * @param   {string} [prefix] Optional prefix to add to each class.
		 * @param   {string} [suffix] Optional suffix to add to each class.
		 * @returns {void}            
		 */
		addCls? (cls: string, prefix?: string, suffix?: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.addCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-addCls).
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) is an Observable instance.
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Adds a plugin. For example:
		 * 
		 *     list.addPlugin('pullrefresh');
		 * 
		 * Or:
		 * 
		 *     list.addPlugin({
		 *         type: 'pullrefresh',
		 *         pullRefreshText: 'Pull to refresh...'
		 *     });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|string|Ext.plugin.Abstract} plugin
		 * The plugin or config object or
		 * alias to add.
		 * @returns {void}                                     
		 */
		addPlugin? (plugin: object | string | Ext.plugin.Abstract): void;
		/** 
		 * Center this _floated_ Component in its parent.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.panel.Title|Ext.Component}  this
		 */
		center? (): Ext.panel.Title;
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
		 * Removes and destroys a plugin.
		 * 
		 * **Note:** Not all plugins are designed to be removable. Consult the documentation
		 * for the specific plugin in question to be sure.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.plugin.Abstract} plugin The plugin or its `id` to remove.
		 * @returns {Ext.plugin.Abstract}               plugin instance or `null` if not found.
		 */
		destroyPlugin? (plugin: string | Ext.plugin.Abstract): Ext.plugin.Abstract;
		/** 
		 * Disables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component.
		 * 
		 * If the Component is currently added to a Container it will first be removed
		 * from that Container. All [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) references are also deleted and
		 * the Component is de-registered from [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentManager.html).
		 * 
		 * As a rule of thumb, subclasses should destroy their child Components, Elements,
		 * and/or other objects before calling parent method. Any object references will be
		 * nulled after this method has finished, to prevent the possibility of memory leaks.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		doDestroy? (): void;
		/** 
		 * Enables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) returns the
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
		 * Retrieves plugin by its `type` alias. For example:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: ['listpaging', 'pullrefresh']
		 *     });
		 *    
		 *     list.findPlugin('pullrefresh').setPullRefreshText('Pull to refresh...');
		 * 
		 * **Note:** See also [getPlugin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Pluggable.html#method-getPlugin).
		 * @method
		 * @public (method)
		 * @param   {string}              type
		 * The Plugin's `type` as specified by the class's
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) configuration.
		 * @returns {Ext.plugin.Abstract}      plugin instance or `null` if not found.
		 */
		findPlugin? (type: string): Ext.plugin.Abstract;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)), but before any other
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
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * Returns the value of [axisLock](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-axisLock).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAxisLock? (): boolean;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getBorder? (): boolean;
		/** 
		 * Returns the value of [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getBottom? (): number | string;
		/** 
		 * Returns the value of [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCentered? (): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getCls? (): string | string[];
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
		 * Returns the value of [contentEl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element|HTMLElement|string}  
		 */
		getContentEl? (): Ext.Element | HTMLElement | string;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDisabled? (): boolean;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Returns the value of [enterAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getEnterAnimation? (): string | any;
		/** 
		 * Returns the value of [exitAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getExitAnimation? (): string | any;
		/** 
		 * Returns the stack of floated components in which this Component resides.
		 * This Component and all siblings at this level are returned.
		 * @method
		 * @public (method)
		 * @param   {Function|string} selector
		 * A ComponentQuery selector, or
		 * a selection function which returns `true` to select a component.
		 * @returns {void}                     
		 */
		getFloatedStack? (selector: ExtGlobalFunction | string): void;
		/** 
		 * Returns the value of [glyph](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-glyph).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGlyph? (): object;
		/** 
		 * Returns the value of [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getHeight? (): number | string;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getHideAnimation? (): string | any;
		/** 
		 * Returns the value of [hideOnMaskTap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideOnMaskTap).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHideOnMaskTap? (): boolean;
		/** 
		 * Returns the value of [html](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.Element|HTMLElement}  
		 */
		getHtml? (): string | Ext.Element | HTMLElement;
		/** 
		 * Returns the value of [icon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-icon).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIcon? (): object;
		/** 
		 * Returns the value of [iconAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-iconAlign).
		 * @method
		 * @public (method)
		 * @returns {'top'|'right'|'bottom'|'left'}  
		 */
		getIconAlign? (): 'top' | 'right' | 'bottom' | 'left';
		/** 
		 * Returns the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIconCls? (): object;
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
		 * Returns the value of [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getLeft? (): number | string;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMargin? (): number | string;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxHeight? (): number | string;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxWidth? (): number | string;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinHeight? (): number | string;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinWidth? (): number | string;
		/** 
		 * Returns the value of [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getModal? (): boolean;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Retrieves a plugin by its `id`.
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: {
		 *             xclass: 'Ext.plugin.PullRefresh',
		 *             id: 'foo'
		 *         }
		 *     });
		 *    
		 *     list.getPlugin('foo').setPullRefreshText('Pull to refresh...');
		 * 
		 * **Note:** See also [findPlugin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Pluggable.html#method-findPlugin).
		 * @method
		 * @public (method)
		 * @param   {string}              id The `id` of the plugin.
		 * @returns {Ext.plugin.Abstract}    plugin instance or `null` if not found.
		 */
		getPlugin? (id: string): Ext.plugin.Abstract;
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Model}  
		 */
		getRecord? (): Ext.data.Model;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [renderTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element}  
		 */
		getRenderTo? (): Ext.Element;
		/** 
		 * Returns the value of [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getRight? (): number | string;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getShowAnimation? (): string | any;
		/** 
		 * Returns the height and width of the Component.
		 * @method
		 * @public (method)
		 * @returns {object}  The current `height` and `width` of the Component.
		 */
		getSize? (): object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStyleHtmlCls? (): string;
		/** 
		 * Returns the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getStyleHtmlContent? (): boolean;
		/** 
		 * Returns the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-text).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getText? (): string;
		/** 
		 * Returns the value of [textAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-textAlign).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTextAlign? (): object;
		/** 
		 * Returns the value of [tooltip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tooltip).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTooltip? (): string | object;
		/** 
		 * Returns the value of [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getTop? (): number | string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Returns the value of [tpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|Ext.Template|Ext.XTemplate[]}  
		 */
		getTpl? (): string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * Returns the value of [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTplWriteMode? (): string;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUi? (): string | string[];
		/** 
		 * Returns the value of [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUserCls? (): string | string[];
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns the value of [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getWidth? (): number | string;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
		 * available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) header.
		 * 
		 * **Note:** If using your own subclasses, be aware that a Component must register its own xtype
		 * to participate in determination of inherited xtypes.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.field.Text();
		 *    alert(t.getXTypes());  // alerts 'component/field/textfield'
		 * 
		 * @method
		 * @public (method)
		 * @returns {string}  The xtype hierarchy string.
		 */
		getXTypes? (): string;
		/** 
		 * Returns the value of [zIndex](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-zIndex).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getZIndex? (): number;
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
		 * Hides this Component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}  [animation] You can specify an animation here or a bool to use the [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation) config.
		 * @returns {Ext.panel.Title}             
		 */
		hide? (animation?: object | boolean): Ext.panel.Title;
		hide? (animation?: object | boolean): Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {Ext.panel.Title|Ext.Component|void}  
		 */
		hide? (): void;
		/** 
		 * Tests whether this Widget matches a [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html)
		 * selector string.
		 * @method
		 * @public (method)
		 * @param   {string}  selector The selector string to test against.
		 * @returns {boolean}          `true` if this Widget matches the selector.
		 */
		is? (selector: string): boolean;
		/** 
		 * Returns `true` if this Component is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if currently disabled.
		 */
		isDisabled? (): boolean;
		/** 
		 * Returns `true` if this Component is currently hidden.
		 * @method
		 * @public (method)
		 * @param   {boolean|Ext.Widget} [deep]
		 * `true` to check if this component
		 * is hidden because a parent container is hidden. Alternatively, a reference to the
		 * top-most parent at which to stop climbing.
		 * @returns {boolean}                   `true` if currently hidden.
		 */
		isHidden? (deep?: boolean | Ext.Widget): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Returns `true` if this Component is currently visible.
		 * @method
		 * @public (method)
		 * @param   {boolean} [deep]
		 * `true` to check if this component
		 * is visible and all parents are also visible.
		 * @returns {boolean}        `true` if currently visible.
		 */
		isVisible? (deep?: boolean): boolean;
		/** 
		 * Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
		 * from the xtype (default) or whether it is directly of the xtype specified (`shallow = true`).
		 * **If using your own subclasses, be aware that a Component must register its own xtype
		 * to participate in determination of inherited xtypes.__
		 * 
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) header.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.field.Text();
		 *    var isText = t.isXType('textfield'); // true
		 *    var isBoxSubclass = t.isXType('field'); // true, descended from Ext.field.Field
		 *    var isBoxInstance = t.isXType('field', true); // false, not a direct Ext.field.Field instance
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}  xtype     The xtype to check for this Component.
		 * @param   {boolean} [shallow]
		 * `false` to check whether this Component is descended from the xtype (this is
		 * the default), or `true` to check whether this Component is directly of the specified xtype.
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
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Gets a named template instance for this class. See [Ext.XTemplate.getTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html#static-method-getTpl).
		 * @method
		 * @public (method)
		 * @param   {string}        name The name of the property that holds the template.
		 * @returns {Ext.XTemplate}      The template, `null` if not found.
		 */
		lookupTpl? (name: string): Ext.XTemplate;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-addManagedListener).
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeManagedListener).
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
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes the given CSS class(es) from this Component's rendered element.
		 * @method
		 * @public (method)
		 * @param   {string} cls      The class(es) to remove.
		 * @param   {string} [prefix] Optional prefix to prepend before each class.
		 * @param   {string} [suffix] Optional suffix to append to each class.
		 * @returns {void}            
		 */
		removeCls? (cls: string, prefix?: string, suffix?: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.removeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-removeCls).
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-mon) method.
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
		 * Removes and (optionally) destroys a plugin.
		 * 
		 * **Note:** Not all plugins are designed to be removable. Consult the documentation
		 * for the specific plugin in question to be sure.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.plugin.Abstract} plugin    The plugin or its `id` to remove.
		 * @param   {boolean}                    [destroy] Pass `true` to not call `destroy()` on the plugin.
		 * @returns {Ext.plugin.Abstract}                  plugin instance or `null` if not found.
		 */
		removePlugin? (plugin: string | Ext.plugin.Abstract, destroy?: boolean): Ext.plugin.Abstract;
		/** 
		 * Replaces specified classes with the newly specified classes.
		 * It uses the [addCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-addCls) and [removeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-removeCls) methods, so if the class(es) you are removing don't exist, it will
		 * still add the new classes.
		 * @method
		 * @public (method)
		 * @param   {string} oldCls   The class(es) to remove.
		 * @param   {string} newCls   The class(es) to add.
		 * @param   {string} [prefix] Optional prefix to prepend before each class.
		 * @param   {string} [suffix] Optional suffix to append to each class.
		 * @returns {void}            
		 */
		replaceCls? (oldCls: string, newCls: string, prefix?: string, suffix?: string): void;
		/** 
		 * Resets [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will cause this component to stop being 'positioned' and to take its place in its owning container's
		 * layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetFloating? (): void;
		/** 
		 * Resets [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will cause this component to stop being 'positioned' and to take its place in its owning container's
		 * layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetPositioned? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
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
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets the value of [axisLock](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-axisLock).
		 * @method
		 * @public (method)
		 * @param   {boolean} axisLock The new value.
		 * @returns {void}             
		 */
		setAxisLock? (axisLock: boolean): void;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {boolean} border The new value.
		 * @returns {void}           
		 */
		setBorder? (border: boolean): void;
		/** 
		 * Sets the value of [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @param   {number|string} bottom The new value.
		 * @returns {void}                 
		 */
		setBottom? (bottom: number | string): void;
		/** 
		 * Sets the value of [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @param   {boolean} centered The new value.
		 * @returns {void}             
		 */
		setCentered? (centered: boolean): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The new value.
		 * @returns {void}                
		 */
		setCls? (cls: string | string[]): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                        [value] The value to set for the name parameter.
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.panel.Title;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [contentEl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element|HTMLElement|string} contentEl The new value.
		 * @returns {void}                                     
		 */
		setContentEl? (contentEl: Ext.Element | HTMLElement | string): void;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled The new value.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [draggable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-draggable).
		 * @method
		 * @public (method)
		 * @param   {object} draggable The new value.
		 * @returns {void}             
		 */
		setDraggable? (draggable: object): void;
		/** 
		 * Sets the value of [enterAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} enterAnimation The new value.
		 * @returns {void}                      
		 */
		setEnterAnimation? (enterAnimation: string | any): void;
		/** 
		 * Sets the value of [exitAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} exitAnimation The new value.
		 * @returns {void}                     
		 */
		setExitAnimation? (exitAnimation: string | any): void;
		/** 
		 * Sets the value of [glyph](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-glyph).
		 * @method
		 * @public (method)
		 * @param   {object} glyph The new value.
		 * @returns {void}         
		 */
		setGlyph? (glyph: object): void;
		/** 
		 * Sets the value of [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @param   {number|string} height The new value.
		 * @returns {void}                 
		 */
		setHeight? (height: number | string): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} hideAnimation The new value.
		 * @returns {void}                     
		 */
		setHideAnimation? (hideAnimation: string | any): void;
		/** 
		 * Sets the value of [hideOnMaskTap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideOnMaskTap).
		 * @method
		 * @public (method)
		 * @param   {boolean} hideOnMaskTap The new value.
		 * @returns {void}                  
		 */
		setHideOnMaskTap? (hideOnMaskTap: boolean): void;
		/** 
		 * Sets the value of [html](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Element|HTMLElement} html The new value.
		 * @returns {void}                                
		 */
		setHtml? (html: string | Ext.Element | HTMLElement): void;
		/** 
		 * Sets the value of [icon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-icon).
		 * @method
		 * @public (method)
		 * @param   {object} icon The new value.
		 * @returns {void}        
		 */
		setIcon? (icon: object): void;
		/** 
		 * Sets the value of [iconAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-iconAlign).
		 * @method
		 * @public (method)
		 * @param   {'top'|'right'|'bottom'|'left'} iconAlign The new value.
		 * @returns {void}                                    
		 */
		setIconAlign? (iconAlign: 'top' | 'right' | 'bottom' | 'left'): void;
		/** 
		 * Sets the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @param   {object} iconCls The new value.
		 * @returns {void}           
		 */
		setIconCls? (iconCls: object): void;
		/** 
		 * Sets the value of [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @param   {number|string} left The new value.
		 * @returns {void}               
		 */
		setLeft? (left: number | string): void;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The new value.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxHeight The new value.
		 * @returns {void}                    
		 */
		setMaxHeight? (maxHeight: number | string): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxWidth The new value.
		 * @returns {void}                   
		 */
		setMaxWidth? (maxWidth: number | string): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} minHeight The new value.
		 * @returns {void}                    
		 */
		setMinHeight? (minHeight: number | string): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} minWidth The new value.
		 * @returns {void}                   
		 */
		setMinWidth? (minWidth: number | string): void;
		/** 
		 * Sets the value of [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal).
		 * @method
		 * @public (method)
		 * @param   {boolean} modal The new value.
		 * @returns {void}          
		 */
		setModal? (modal: boolean): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The new value.
		 * @returns {void}                  
		 */
		setRecord? (record: Ext.data.Model): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [renderTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element} renderTo The new value.
		 * @returns {void}                 
		 */
		setRenderTo? (renderTo: Ext.Element): void;
		/** 
		 * Sets the value of [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @param   {number|string} right The new value.
		 * @returns {void}                
		 */
		setRight? (right: number | string): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} showAnimation The new value.
		 * @returns {void}                     
		 */
		setShowAnimation? (showAnimation: string | any): void;
		/** 
		 * Sets the size of the Component.
		 * @method
		 * @public (method)
		 * @param   {number} width  The new width for the Component.
		 * @param   {number} height The new height for the Component.
		 * @returns {void}          
		 */
		setSize? (width: number, height: number): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @param   {string} styleHtmlCls The new value.
		 * @returns {void}                
		 */
		setStyleHtmlCls? (styleHtmlCls: string): void;
		/** 
		 * Sets the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @param   {boolean} styleHtmlContent The new value.
		 * @returns {void}                     
		 */
		setStyleHtmlContent? (styleHtmlContent: boolean): void;
		/** 
		 * Sets the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-text).
		 * @method
		 * @public (method)
		 * @param   {string} text The new value.
		 * @returns {void}        
		 */
		setText? (text: string): void;
		/** 
		 * Sets the value of [textAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-textAlign).
		 * @method
		 * @public (method)
		 * @param   {object} textAlign The new value.
		 * @returns {void}             
		 */
		setTextAlign? (textAlign: object): void;
		/** 
		 * Sets the value of [tooltip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tooltip).
		 * @method
		 * @public (method)
		 * @param   {string|object} tooltip The new value.
		 * @returns {void}                  
		 */
		setTooltip? (tooltip: string | object): void;
		/** 
		 * Sets the value of [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @param   {number|string} top The new value.
		 * @returns {void}              
		 */
		setTop? (top: number | string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Sets the value of [tpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|Ext.Template|Ext.XTemplate[]} tpl The new value.
		 * @returns {void}                                             
		 */
		setTpl? (tpl: string | string[] | Ext.Template | Ext.XTemplate[]): void;
		/** 
		 * Sets the value of [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @param   {string} tplWriteMode The new value.
		 * @returns {void}                
		 */
		setTplWriteMode? (tplWriteMode: string): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} ui The new value.
		 * @returns {void}               
		 */
		setUi? (ui: string | string[]): void;
		/** 
		 * Sets the value of [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} userCls The new value.
		 * @returns {void}                    
		 */
		setUserCls? (userCls: string | string[]): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Sets the value of [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @param   {number|string} width The new value.
		 * @returns {void}                
		 */
		setWidth? (width: number | string): void;
		/** 
		 * Sets the value of [zIndex](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-zIndex).
		 * @method
		 * @public (method)
		 * @param   {number} zIndex The new value.
		 * @returns {void}          
		 */
		setZIndex? (zIndex: number): void;
		/** 
		 * Shows this component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}  [animation] You can specify an animation here or a bool to use the [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation) config.
		 * @returns {Ext.panel.Title}             
		 */
		show? (animation?: object | boolean): Ext.panel.Title;
		show? (animation?: object | boolean): Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {Ext.panel.Title|Ext.Component|void}  
		 */
		show? (): void;
		/** 
		 * Shows this component by another component. If you specify no alignment, it will automatically
		 * position this component relative to the reference component.
		 * 
		 * For example, say we are aligning a Panel next to a Button, the alignment string would look like this:
		 * 
		 *    [panel-vertical (t/b/c)][panel-horizontal (l/r/c)]-[button-vertical (t/b/c)][button-horizontal (l/r/c)]
		 * 
		 * where t = top, b = bottom, c = center, l = left, r = right.
		 * 
		 * ## Examples
		 * 
		 * - `tl-tr` means top-left corner of the Panel to the top-right corner of the Button
		 * - `tc-bc` means top-center of the Panel to the bottom-center of the Button
		 * 
		 * You can put a '?' at the end of the alignment string to constrain the positioned element to the
		 * [Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html)
		 * 
		 *    // show `panel` by `button` using the default positioning (auto fit)
		 *    panel.showBy(button);
		 *    
		 *    // align the top left corner of `panel` with the top right corner of `button` (constrained to viewport)
		 *    panel.showBy(button, "tl-tr?");
		 *    
		 *    // align the bottom right corner of `panel` with the center left edge of `button` (not constrained by viewport)
		 *    panel.showBy(button, "br-cl");
		 * 
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} component   The target component to show this component by.
		 * @param   {string}        [alignment] The specific alignment.
		 * @param   {object}        [options]   An object containing options for the [Ext.util.Region.alignTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Region.html#method-alignTo) method.
		 * @returns {void}                      
		 */
		showBy? (component: Ext.Component, alignment?: string, options?: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
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
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Add or removes a class based on if the class is already added to the Component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                             className The class to toggle.
		 * @param   {boolean}                            [state]
		 * If specified as `true`, causes the class to be added. If specified as `false`, causes
		 * the class to be removed.
		 * @returns {Ext.panel.Title|Ext.Component|void}           this
		 */
		toggleCls? (className: string, state?: boolean): Ext.panel.Title;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		toggleCls? (className: string, state?: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
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
		 * Walks up the ownership hierarchy looking for an ancestor Component which matches
		 * the passed simple selector.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}                      [selector] The simple selector to test.
		 * @param   {string|number|Ext.Component} [limit]    This may be a selector upon which to stop the upward scan, or a limit of the number of steps, or Component reference to stop on.
		 * @returns {Ext.Container}                          The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string, limit?: string | number | Ext.Component): Ext.Container;
		/** 
		 * Updates the [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls) configuration
		 * @method
		 * @public (method)
		 * @param   {object} newHtmlCls
		 * @param   {object} oldHtmlCls
		 * @returns {void}              
		 */
		updateStyleHtmlCls? (newHtmlCls: object, oldHtmlCls: object): void;
		/** 
		 * Returns the value of [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @method
		 * @protected (method)
		 * @returns {string|boolean}  
		 */
		getBaseCls? (): string | boolean;
		/** 
		 * Sets the value of [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @method
		 * @protected (method)
		 * @param   {string|boolean} baseCls The new value.
		 * @returns {void}                   
		 */
		setBaseCls? (baseCls: string | boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		applyData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDraggable? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		updateDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateUi? (): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
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
		 * A template method for modifying the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config before it is processed.
		 * By default adds the result of `this.getTemplate()` as the `children` array of
		 * [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) if `children` were not specified in the original
		 * [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config.  Typically this method should not need to be implemented
		 * in subclasses.  Instead the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) property should be use to configure
		 * the element template for a given Widget subclass.
		 * 
		 * This method is called once when the first instance of each Widget subclass is
		 * created.  The element config object that is returned is cached and used as the template
		 * for all successive instances.  The scope object for this method is the class prototype,
		 * not the instance.
		 * @method
		 * @protected (method)
		 * @returns {object}  the element config object
		 */
		getElementConfig? (): object;
		/** 
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-up)
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
		 * @param   {object}                                                        config
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.panel.Title;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#property-element) config will be
		 * processed to create an Element.  This Element is then cached on the prototype (see
		 * afterCachedConfig) so that future instances can obtain their element by simply
		 * cloning the Element that was cached by the first instance.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initElement? (): void;
		/** 
		 * Called by `getInherited` to initialize the inheritedState the first time it is
		 * requested.
		 * @method
		 * @protected (method)
		 * @param   {object} inheritedState
		 * @returns {void}                  
		 */
		initInheritedState? (inheritedState: object): void;
		/** 
		 * This method should be called when the instance is ready to start listening for
		 * keyboard events. This is called automatically for [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) and derived
		 * classes. In Classic Toolkit, this is done after the component is rendered.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initKeyMap? (): void;
		/** 
		 * Allows addition of behavior to the rendering phase.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initialize? (): void;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
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
		 * Gets the Controller or Component that is used as the event root for this view.
		 * @method
		 * @protected (method)
		 * @param   {object}                                         defaultScope
		 * @param   {object}                                         skipThis
		 * @returns {Ext.app.ViewController|Ext.container.Container}              The default listener scope.
		 */
		resolveListenerScope? (defaultScope: object, skipThis: object): Ext.app.ViewController | Ext.container.Container;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Observable.resolveListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resolveListenerScope).
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object}                                                [defaultScope] The default scope to return if none is found.
		 * @returns {Ext.app.ViewController|Ext.container.Container|object}                The default event scope
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
		 * @method
		 * @protected (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateHeight? (height: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @returns {void}         
		 */
		updateStyle? (style: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateWidth? (width: object): void;
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
		 * @returns {Ext.panel.Title.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.panel.Title.Statics;
		statics? (): Ext.Component.Statics;
		statics? (): Ext.Widget.Statics;
		statics? (): Ext.Evented.Statics;
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
		 * Creates a particular plugin type if defined in the `plugins` configuration.
		 * @method
		 * @private (method)
		 * @param   {string}              type The `type` of the plugin.
		 * @returns {Ext.plugin.Abstract}      The plugin that was created.
		 */
		activatePlugin? (type: string): Ext.plugin.Abstract;
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
		 * Adds a listeners with the "delegate" event option.  Users should not invoke this
		 * method directly.  Use the "delegate" event option of
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) instead.
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
		 * Adds an element reference to this Widget instance.
		 * @method
		 * @private (method)
		 * @param   {string}          name    The name of the reference
		 * @param   {HTMLElement}     domNode
		 * @returns {Ext.dom.Element}         
		 */
		addElementReference? (name: string, domNode: HTMLElement): Ext.dom.Element;
		/** 
		 * Reduces instantiation time for a Widget by lazily instantiating [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 * references the first time they are used.  This optimization only works for elements
		 * with no listeners specified.
		 * @method
		 * @private (method)
		 * @param   {string}      name    The name of the reference
		 * @param   {HTMLElement} domNode
		 * @returns {void}                
		 */
		addElementReferenceOnDemand? (name: string, domNode: HTMLElement): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterCachedConfig? (): void;
		/** 
		 * Used to handle joining of a record to a tpl
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterEdit? (): void;
		/** 
		 * Used to handle joining of a record to a tpl
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterErase? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @param   {object} component
		 * @param   {object} newState
		 * @param   {object} oldState
		 * @param   {object} controller
		 * @returns {void}              
		 */
		animateFn? (animation: object, component: object, newState: object, oldState: object, controller: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} baseCls
		 * @returns {void}           
		 */
		applyBaseCls? (baseCls: object): void;
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
		 * @param   {object} bottom
		 * @returns {void}          
		 */
		applyBottom? (bottom: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} centered
		 * @returns {boolean}          
		 */
		applyCentered? (centered: boolean): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} contentEl
		 * @returns {void}             
		 */
		applyContentEl? (contentEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		applyDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @returns {void}          
		 */
		applyDocked? (docked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyDraggable? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		applyHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyHideAnimation? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} left
		 * @returns {void}        
		 */
		applyLeft? (left: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyMaxHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyMaxWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyMinHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyMinWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modal
		 * @param   {object} currentModal
		 * @returns {void}                
		 */
		applyModal? (modal: object, currentModal: object): void;
		/** 
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyRecord? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} right
		 * @returns {void}         
		 */
		applyRight? (right: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyShowAnimation? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyStyleHtmlContent? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tooltip
		 * @returns {void}           
		 */
		applyTooltip? (tooltip: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} top
		 * @returns {void}       
		 */
		applyTop? (top: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @param   {object} oldTouchAction
		 * @returns {void}                  
		 */
		applyTouchAction? (touchAction: object, oldTouchAction: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tpl
		 * @returns {void}       
		 */
		applyTpl? (tpl: object): void;
		/** 
		 * Transforms a ViewModel config to a proper instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel
		 * @returns {Ext.app.ViewModel}                         
		 */
		applyViewModel? (viewModel: string | object | Ext.app.ViewModel): Ext.app.ViewModel;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} zIndex
		 * @returns {void}          
		 */
		applyZIndex? (zIndex: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		beforeInitConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeInitialize? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeShowAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 */
		captureArgs? (o: object, fn: object, scope: object): void;
		/** 
		 * Clears all listeners that were attached using the "delegate" event option.
		 * Users should not invoke this method directly.  It is called automatically as
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * Converts the provided type or config object into a plugin instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.plugin.Abstract} config
		 * The plugin type, config
		 * object or instance.
		 * @returns {Ext.plugin.Abstract}                      
		 */
		createPlugin? (config: string | object | Ext.plugin.Abstract): Ext.plugin.Abstract;
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
		 * @param   {object} name
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} options
		 * @param   {object} order
		 * @param   {object} caller
		 * @param   {object} manager
		 * @returns {void}           
		 */
		doAddListener? (name: object, fn: object, scope: object, options: object, order: object, caller: object, manager: object): void;
		/** 
		 * Fires a delegated event.  Users should not invoke this method directly.  It
		 * is called automatically by the framework as needed (see the "delegate" event
		 * option of [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) for more
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
		doRefreshPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doRefreshSizeState? (): void;
		/** 
		 * Sets up a reference on our current reference holder.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		fixReference? (): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBubbleTarget? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getClassCls? (): void;
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
		getDraggableBehavior? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getInnerHtmlElement? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSizeFlags? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSizeState? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTemplate? (): void;
		/** 
		 * Returns the value of [useBodyElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getUseBodyElement? (): object;
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
		 * Called for the first instance of this Widget to create an object that contains the
		 * listener configs for all of the element references keyed by reference name. The
		 * object is cached on the prototype and has the following shape:
		 * 
		 *    _elementListeners: {
		 *        element: {
		 *            click: 'onClick',
		 *            scope: this
		 *        },
		 *        fooReference: {
		 *            tap: {
		 *                fn: someFunction,
		 *                delay: 100
		 *            }
		 *        }
		 *    }
		 * 
		 * The returned object is prototype chained to the _elementListeners object of its
		 * superclass, and each key in the object is prototype chained to object with the
		 * corresponding key in the superclass _elementListeners.  This allows element
		 * listeners to be inherited and overridden when subclassing widgets.
		 * 
		 * This method is invoked with the prototype object as the scope
		 * @method
		 * @private (method)
		 * @param   {object} elementConfig
		 * @returns {void}                 
		 */
		initElementListeners? (elementConfig: object): void;
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
		 * @returns {void}  
		 */
		isAncestor? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isCentered? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isDocked? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isPainted? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isRendered? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-destroy)).
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
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-publishState)
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
		 * @param   {object} parent
		 * @param   {object} instanced
		 * @returns {void}             
		 */
		onAdded? (parent: object, instanced: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @param   {object} data
		 * @returns {void}             
		 */
		onAnimationStart? (animation: object, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} T
		 * @returns {void}     
		 */
		onClassMixedIn? (T: object): void;
		/** 
		 * Temporary workarounds to keep [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentManager.html) from throwing errors when dealing
		 * Widgets.  TODO: remove these emptyFns when proper focus handling is implmented
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFocusEnter? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFocusLeave? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} args
		 * @returns {void}         
		 */
		onInitialized? (fn: object, scope: object, args: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component
		 * @returns {void}                    
		 */
		onShowByErased? (component: Ext.Component): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @param   {object} alignment
		 * @param   {object} options
		 * @returns {void}             
		 */
		onViewportResize? (component: object, alignment: object, options: object): void;
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
		 * Recursively processes the element templates for this class and its superclasses,
		 * ascending the hierarchy until it reaches a superclass whose element template
		 * has already been processed.  This method is invoked using the prototype as the scope.
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		processElementConfig? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshSizeState? (): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} flags
		 * @returns {void}         
		 */
		setLayoutSizeFlags? (flags: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} flags
		 * @returns {void}         
		 */
		setSizeFlags? (flags: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} state
		 * @returns {void}         
		 */
		setSizeState? (state: object): void;
		/** 
		 * Sets the value of [useBodyElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement The new value.
		 * @returns {void}                  
		 */
		setUseBodyElement? (useBodyElement: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} isVisible
		 * @returns {void}             
		 */
		setVisibility? (isVisible: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} axis
		 * @param   {object} value
		 * @param   {object} animation
		 * @returns {void}             
		 */
		translateAxis? (axis: object, value: object, animation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		triggerInitialized? (): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                      names The names of the linked objects to destroy.
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.panel.Title;
		unlink? (names: string[]): Ext.Component;
		unlink? (names: string[]): Ext.Widget;
		unlink? (names: string[]): Ext.Evented;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBaseCls
		 * @param   {object} oldBaseCls
		 * @returns {void}              
		 */
		updateBaseCls? (newBaseCls: object, oldBaseCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} border
		 * @returns {void}          
		 */
		updateBorder? (border: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} bottom
		 * @returns {void}          
		 */
		updateBottom? (bottom: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} centered
		 * @returns {void}            
		 */
		updateCentered? (centered: object): void;
		/** 
		 * All cls methods directly report to the [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls) configuration, so anytime it changes, [updateCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateCls) will be called
		 * @method
		 * @private (method)
		 * @param   {object} newCls
		 * @param   {object} oldCls
		 * @returns {void}          
		 */
		updateCls? (newCls: object, oldCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newContentEl
		 * @param   {object} oldContentEl
		 * @returns {void}                
		 */
		updateContentEl? (newContentEl: object, oldContentEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newData
		 * @returns {void}           
		 */
		updateData? (newData: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @param   {object} oldDocked
		 * @returns {void}             
		 */
		updateDocked? (docked: object, oldDocked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateFlex? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @param   {object} oldHidden
		 * @returns {void}             
		 */
		updateHidden? (hidden: object, oldHidden: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.updateHidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateHidden).
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hide
		 * @returns {void}        
		 */
		updateHideOnMaskTap? (hide: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} html
		 * @returns {void}        
		 */
		updateHtml? (html: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} left
		 * @returns {void}        
		 */
		updateLeft? (left: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} margin
		 * @returns {void}          
		 */
		updateMargin? (margin: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateMaxHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateMaxWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateMinHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateMinWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modal
		 * @returns {void}         
		 */
		updateModal? (modal: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @returns {void}           
		 */
		updatePadding? (padding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRecord
		 * @param   {object} oldRecord
		 * @returns {void}             
		 */
		updateRecord? (newRecord: object, oldRecord: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newContainer
		 * @returns {void}                
		 */
		updateRenderTo? (newContainer: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} right
		 * @returns {void}         
		 */
		updateRight? (right: object): void;
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
		 * @param   {object} styleHtmlContent
		 * @returns {void}                    
		 */
		updateStyleHtmlContent? (styleHtmlContent: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tooltip
		 * @param   {object} oldTooltip
		 * @returns {void}              
		 */
		updateTooltip? (tooltip: object, oldTooltip: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} top
		 * @returns {void}       
		 */
		updateTop? (top: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @returns {void}               
		 */
		updateTouchAction? (touchAction: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement
		 * @returns {void}                  
		 */
		updateUseBodyElement? (useBodyElement: object): void;
		/** 
		 * Updates the viewModel config.
		 * @method
		 * @private (method)
		 * @param   {Ext.app.ViewModel} viewModel
		 * @param   {Ext.app.ViewModel} oldViewModel
		 * @returns {void}                           
		 */
		updateViewModel? (viewModel: Ext.app.ViewModel, oldViewModel: Ext.app.ViewModel): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} zIndex
		 * @returns {void}          
		 */
		updateZIndex? (zIndex: object): void;
	}
	/** 
	 * [Ext.panel.Tool](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html)
	 * This class is used to display small visual icons in the header of a panel. There are a set of
	 * 25 icons that can be specified by using the [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type) config. The [handler](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-handler) config
	 * can be used to provide a function that will respond to any click events. In general, this class
	 * will not be instantiated directly, rather it will be created by specifying the [Ext.Panel.tools](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html#cfg-tools)
	 * configuration on the Panel itself.
	 * 
	 *    Ext.create('Ext.Panel', {
	 *        title: 'A Panel',
	 *        fullscreen: true,
	 *    
	 *        tools: [{
	 *            type: 'help',
	 *            handler: function() {
	 *                // show help here
	 *            }
	 *        }, {
	 *            itemId: 'refresh',
	 *            type: 'refresh',
	 *            hidden: true,
	 *            handler: function () {
	 *                // do refresh
	 *            }
	 *        }, {
	 *            type: 'search',
	 *            handler: function (panel) {
	 *                // do search
	 *                panel.down('#refresh').show();
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	class Tool extends Ext.Component {
		/** 
		 * This property is used to determine the property of a `bind` config that is just
		 * the value. For example, if `defaultBindProperty="value"`, then this shorthand
		 * `bind` config:
		 * 
		 *     bind: '{name}'
		 * 
		 * Is equivalent to this object form:
		 * 
		 *     bind: {
		 *         value: '{name}'
		 *     }
		 * 
		 * The `defaultBindProperty` is set to "value" for form fields and to "store" for
		 * grids and trees.
		 * @property
		 * @public (property)
		 * @default 'html'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * `true` in this class to identify an object as an instantiated Tool, or subclass thereof.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default true
		 * @type {boolean}
		 */
		readonly isPanelTool?: boolean;
		/** 
		 * A CSS class to apply to the main element that will be inherited down the class
		 * hierarchy.  Subclasses may override this property on their prototype to add their
		 * own CSS class in addition to the CSS classes inherited from ancestor classes via
		 * the prototype chain.  For example
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.Widget',
		 *        classCls: 'foo'
		 *    });
		 *    
		 *    Ext.define('Bar', {
		 *        extend: 'Foo',
		 *        classCls: 'bar'
		 *    });
		 *    
		 *    var bar = new Bar();
		 *    
		 *    console.log(bar.element.className); // outputs 'foo bar'
		 * 
		 * @property
		 * @protected (property)
		 * @default Ext.baseCSSPrefix + 'component'
		 * @type {object}
		 */
		classCls?: object;
		/** 
		 * Setting this property to `false` will prevent nulling object references
		 * on a Class instance after destruction. Setting this to `"async"` will delay
		 * the clearing for approx 50ms.
		 * @property
		 * @protected (property)
		 * @default true
		 * @type {boolean|'async'}
		 */
		clearPropertiesOnDestroy?: boolean | 'async';
		/** 
		 * A configuration object for [Ext.Element.create](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html#static-method-create)() that is used to create the Element
		 * template.  Supports all the standard options of a [Ext.Element.create](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html#static-method-create)() config and
		 * adds 2 additional options:
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `reference` - this option specifies a name for Element references.  These
		 * references names become properties of the Widget instance and refer to [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 * instances that were created using the template:
		 * 
		 *   element: {
		 * 
		 *        reference: 'element',
		 *        children: [{
		 *            reference: 'innerElement'
		 *        }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  After construction of a widget the reference elements are accessible as follows:
		 * 
		 *    var foo = new FooWidget(),
		 *        innerEl = foo.innerElement; // an Ext.Element that wraps the innerElement
		 * 
		 * The reference attribute is optional, but all Widgets must have a `'element'`
		 * reference on some element within the template (usually the outermost one).
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `listeners` - a standard listeners object as specified by [Ext.mixin.Observable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html).
		 * 
		 *  element: {
		 * 
		 *       reference: 'element',
		 *       listeners: {
		 *           click: 'onClick'
		 *       },
		 *       children: [{
		 *           reference: 'innerElement',
		 *           listeners: {
		 *               click: 'onInnerClick'
		 *           }
		 *       }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  Since listeners cannot be attached without an [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) reference the `reference`
		 *  property MUST be specified in order to use `listeners`.
		 *  
		 *  
		 *  
		 *  
		 *  The Widget instance is used as the scope for all listeners specified in this way,
		 *  so it is invalid to use the `scope` option in the `listeners` config since it will
		 *  always be overwritten using `this`.
		 * @property
		 * @protected (property)
		 * @default {reference: 'element', listeners: {click: 'onClick', mousedown: 'onMouseDown', mouseover: 'onMouseOver', mouseout: 'onMouseOut'}, children: [{reference: 'toolElement'}]}
		 * @type {object}
		 */
		element?: object;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.panel.Tool.Statics}
		 */
		self?: Ext.panel.Tool.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'tool-disabled'
		 * @type {string}
		 */
		disabledCls?: string;
		/** 
		 * ---
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
		 * @param   {object}                                                       members    The members to add to this class.
		 * @param   {boolean}                                                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.panel.Tool;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Widget;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Evented;
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
		 * @param   {object}                                                       members
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.panel.Tool;
		static addStatics? (members: object): typeof Ext.Component;
		static addStatics? (members: object): typeof Ext.Widget;
		static addStatics? (members: object): typeof Ext.Evented;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Loader.html)
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
		 * @param   {object}                                                       name
		 * @param   {object}                                                       member
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.panel.Tool;
		static addMember? (name: object, member: object): typeof Ext.Component;
		static addMember? (name: object, member: object): typeof Ext.Widget;
		static addMember? (name: object, member: object): typeof Ext.Evented;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                       fn
		 * @param   {object}                                                       scope
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.panel.Tool;
		static onExtended? (fn: object, scope: object): typeof Ext.Component;
		static onExtended? (fn: object, scope: object): typeof Ext.Widget;
		static onExtended? (fn: object, scope: object): typeof Ext.Evented;
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
		 * @param   {object} config The standard configuration object.
		 */
		constructor (config: object);
		/** 
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-onBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addBeforeListener? (): void;
		/** 
		 * Adds a CSS class (or classes) to this Component's rendered element.
		 * @method
		 * @public (method)
		 * @param   {string} cls      The CSS class to add.
		 * @param   {string} [prefix] Optional prefix to add to each class.
		 * @param   {string} [suffix] Optional suffix to add to each class.
		 * @returns {void}            
		 */
		addCls? (cls: string, prefix?: string, suffix?: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.addCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-addCls).
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) is an Observable instance.
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Adds a plugin. For example:
		 * 
		 *     list.addPlugin('pullrefresh');
		 * 
		 * Or:
		 * 
		 *     list.addPlugin({
		 *         type: 'pullrefresh',
		 *         pullRefreshText: 'Pull to refresh...'
		 *     });
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|string|Ext.plugin.Abstract} plugin
		 * The plugin or config object or
		 * alias to add.
		 * @returns {void}                                     
		 */
		addPlugin? (plugin: object | string | Ext.plugin.Abstract): void;
		/** 
		 * Center this _floated_ Component in its parent.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.panel.Tool|Ext.Component}  this
		 */
		center? (): Ext.panel.Tool;
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
		 * Removes and destroys a plugin.
		 * 
		 * **Note:** Not all plugins are designed to be removable. Consult the documentation
		 * for the specific plugin in question to be sure.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.plugin.Abstract} plugin The plugin or its `id` to remove.
		 * @returns {Ext.plugin.Abstract}               plugin instance or `null` if not found.
		 */
		destroyPlugin? (plugin: string | Ext.plugin.Abstract): Ext.plugin.Abstract;
		/** 
		 * Disables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component.
		 * 
		 * If the Component is currently added to a Container it will first be removed
		 * from that Container. All [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) references are also deleted and
		 * the Component is de-registered from [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentManager.html).
		 * 
		 * As a rule of thumb, subclasses should destroy their child Components, Elements,
		 * and/or other objects before calling parent method. Any object references will be
		 * nulled after this method has finished, to prevent the possibility of memory leaks.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		doDestroy? (): void;
		/** 
		 * Enables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		enable? (): void;
		/** 
		 * Enables events fired by this Observable to bubble up an owner hierarchy by calling `this.getBubbleTarget()` if
		 * present. There is no implementation in the Observable base class.
		 * 
		 * This is commonly used by Ext.Components to bubble events to owner Containers.
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) returns the
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
		 * Retrieves plugin by its `type` alias. For example:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: ['listpaging', 'pullrefresh']
		 *     });
		 *    
		 *     list.findPlugin('pullrefresh').setPullRefreshText('Pull to refresh...');
		 * 
		 * **Note:** See also [getPlugin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Pluggable.html#method-getPlugin).
		 * @method
		 * @public (method)
		 * @param   {string}              type
		 * The Plugin's `type` as specified by the class's
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) configuration.
		 * @returns {Ext.plugin.Abstract}      plugin instance or `null` if not found.
		 */
		findPlugin? (type: string): Ext.plugin.Abstract;
		/** 
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)), but before any other
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
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * Returns the value of [axisLock](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-axisLock).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAxisLock? (): boolean;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getBorder? (): boolean;
		/** 
		 * Returns the value of [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getBottom? (): number | string;
		/** 
		 * Returns the value of [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCentered? (): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getCls? (): string | string[];
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
		 * Returns the value of [contentEl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element|HTMLElement|string}  
		 */
		getContentEl? (): Ext.Element | HTMLElement | string;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDisabled? (): boolean;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Returns the value of [enterAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getEnterAnimation? (): string | any;
		/** 
		 * Returns the value of [exitAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getExitAnimation? (): string | any;
		/** 
		 * Returns the stack of floated components in which this Component resides.
		 * This Component and all siblings at this level are returned.
		 * @method
		 * @public (method)
		 * @param   {Function|string} selector
		 * A ComponentQuery selector, or
		 * a selection function which returns `true` to select a component.
		 * @returns {void}                     
		 */
		getFloatedStack? (selector: ExtGlobalFunction | string): void;
		/** 
		 * Returns the value of [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getHeight? (): number | string;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getHideAnimation? (): string | any;
		/** 
		 * Returns the value of [hideOnMaskTap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideOnMaskTap).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHideOnMaskTap? (): boolean;
		/** 
		 * Returns the value of [html](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.Element|HTMLElement}  
		 */
		getHtml? (): string | Ext.Element | HTMLElement;
		/** 
		 * Returns the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconCls? (): string;
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
		 * Returns the value of [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getLeft? (): number | string;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMargin? (): number | string;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxHeight? (): number | string;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxWidth? (): number | string;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinHeight? (): number | string;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinWidth? (): number | string;
		/** 
		 * Returns the value of [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getModal? (): boolean;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Retrieves a plugin by its `id`.
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: {
		 *             xclass: 'Ext.plugin.PullRefresh',
		 *             id: 'foo'
		 *         }
		 *     });
		 *    
		 *     list.getPlugin('foo').setPullRefreshText('Pull to refresh...');
		 * 
		 * **Note:** See also [findPlugin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Pluggable.html#method-findPlugin).
		 * @method
		 * @public (method)
		 * @param   {string}              id The `id` of the plugin.
		 * @returns {Ext.plugin.Abstract}    plugin instance or `null` if not found.
		 */
		getPlugin? (id: string): Ext.plugin.Abstract;
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Model}  
		 */
		getRecord? (): Ext.data.Model;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [renderTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element}  
		 */
		getRenderTo? (): Ext.Element;
		/** 
		 * Returns the value of [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getRight? (): number | string;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getShowAnimation? (): string | any;
		/** 
		 * Returns the height and width of the Component.
		 * @method
		 * @public (method)
		 * @returns {object}  The current `height` and `width` of the Component.
		 */
		getSize? (): object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStyleHtmlCls? (): string;
		/** 
		 * Returns the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getStyleHtmlContent? (): boolean;
		/** 
		 * Returns the value of [tooltip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tooltip).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTooltip? (): string | object;
		/** 
		 * Returns the value of [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getTop? (): number | string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Returns the value of [tpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|Ext.Template|Ext.XTemplate[]}  
		 */
		getTpl? (): string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * Returns the value of [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTplWriteMode? (): string;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getType? (): string;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUi? (): string | string[];
		/** 
		 * Returns the value of [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUserCls? (): string | string[];
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns the value of [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getWidth? (): number | string;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
		 * available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) header.
		 * 
		 * **Note:** If using your own subclasses, be aware that a Component must register its own xtype
		 * to participate in determination of inherited xtypes.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.field.Text();
		 *    alert(t.getXTypes());  // alerts 'component/field/textfield'
		 * 
		 * @method
		 * @public (method)
		 * @returns {string}  The xtype hierarchy string.
		 */
		getXTypes? (): string;
		/** 
		 * Returns the value of [zIndex](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-zIndex).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getZIndex? (): number;
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
		 * Hides this Component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean} [animation] You can specify an animation here or a bool to use the [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation) config.
		 * @returns {Ext.panel.Tool}             
		 */
		hide? (animation?: object | boolean): Ext.panel.Tool;
		hide? (animation?: object | boolean): Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {Ext.panel.Tool|Ext.Component|void}  
		 */
		hide? (): void;
		/** 
		 * Tests whether this Widget matches a [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html)
		 * selector string.
		 * @method
		 * @public (method)
		 * @param   {string}  selector The selector string to test against.
		 * @returns {boolean}          `true` if this Widget matches the selector.
		 */
		is? (selector: string): boolean;
		/** 
		 * Returns `true` if this Component is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if currently disabled.
		 */
		isDisabled? (): boolean;
		/** 
		 * Returns `true` if this Component is currently hidden.
		 * @method
		 * @public (method)
		 * @param   {boolean|Ext.Widget} [deep]
		 * `true` to check if this component
		 * is hidden because a parent container is hidden. Alternatively, a reference to the
		 * top-most parent at which to stop climbing.
		 * @returns {boolean}                   `true` if currently hidden.
		 */
		isHidden? (deep?: boolean | Ext.Widget): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
		/** 
		 * Returns `true` if this Component is currently visible.
		 * @method
		 * @public (method)
		 * @param   {boolean} [deep]
		 * `true` to check if this component
		 * is visible and all parents are also visible.
		 * @returns {boolean}        `true` if currently visible.
		 */
		isVisible? (deep?: boolean): boolean;
		/** 
		 * Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
		 * from the xtype (default) or whether it is directly of the xtype specified (`shallow = true`).
		 * **If using your own subclasses, be aware that a Component must register its own xtype
		 * to participate in determination of inherited xtypes.__
		 * 
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) header.
		 * 
		 * Example usage:
		 * 
		 *    var t = new Ext.field.Text();
		 *    var isText = t.isXType('textfield'); // true
		 *    var isBoxSubclass = t.isXType('field'); // true, descended from Ext.field.Field
		 *    var isBoxInstance = t.isXType('field', true); // false, not a direct Ext.field.Field instance
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}  xtype     The xtype to check for this Component.
		 * @param   {boolean} [shallow]
		 * `false` to check whether this Component is descended from the xtype (this is
		 * the default), or `true` to check whether this Component is directly of the specified xtype.
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
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Gets a named template instance for this class. See [Ext.XTemplate.getTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html#static-method-getTpl).
		 * @method
		 * @public (method)
		 * @param   {string}        name The name of the property that holds the template.
		 * @returns {Ext.XTemplate}      The template, `null` if not found.
		 */
		lookupTpl? (name: string): Ext.XTemplate;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-addManagedListener).
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
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeManagedListener).
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
		 * Appends an after-event handler.
		 * 
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-unBefore).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeBeforeListener? (): void;
		/** 
		 * Removes the given CSS class(es) from this Component's rendered element.
		 * @method
		 * @public (method)
		 * @param   {string} cls      The class(es) to remove.
		 * @param   {string} [prefix] Optional prefix to prepend before each class.
		 * @param   {string} [suffix] Optional suffix to append to each class.
		 * @returns {void}            
		 */
		removeCls? (cls: string, prefix?: string, suffix?: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.removeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-removeCls).
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * Removes an event handler.
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-mon) method.
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
		 * Removes and (optionally) destroys a plugin.
		 * 
		 * **Note:** Not all plugins are designed to be removable. Consult the documentation
		 * for the specific plugin in question to be sure.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.plugin.Abstract} plugin    The plugin or its `id` to remove.
		 * @param   {boolean}                    [destroy] Pass `true` to not call `destroy()` on the plugin.
		 * @returns {Ext.plugin.Abstract}                  plugin instance or `null` if not found.
		 */
		removePlugin? (plugin: string | Ext.plugin.Abstract, destroy?: boolean): Ext.plugin.Abstract;
		/** 
		 * Replaces specified classes with the newly specified classes.
		 * It uses the [addCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-addCls) and [removeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-removeCls) methods, so if the class(es) you are removing don't exist, it will
		 * still add the new classes.
		 * @method
		 * @public (method)
		 * @param   {string} oldCls   The class(es) to remove.
		 * @param   {string} newCls   The class(es) to add.
		 * @param   {string} [prefix] Optional prefix to prepend before each class.
		 * @param   {string} [suffix] Optional suffix to append to each class.
		 * @returns {void}            
		 */
		replaceCls? (oldCls: string, newCls: string, prefix?: string, suffix?: string): void;
		/** 
		 * Resets [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will cause this component to stop being 'positioned' and to take its place in its owning container's
		 * layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetFloating? (): void;
		/** 
		 * Resets [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will cause this component to stop being 'positioned' and to take its place in its owning container's
		 * layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetPositioned? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
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
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets the value of [axisLock](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-axisLock).
		 * @method
		 * @public (method)
		 * @param   {boolean} axisLock The new value.
		 * @returns {void}             
		 */
		setAxisLock? (axisLock: boolean): void;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {boolean} border The new value.
		 * @returns {void}           
		 */
		setBorder? (border: boolean): void;
		/** 
		 * Sets the value of [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @param   {number|string} bottom The new value.
		 * @returns {void}                 
		 */
		setBottom? (bottom: number | string): void;
		/** 
		 * Sets the value of [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @param   {boolean} centered The new value.
		 * @returns {void}             
		 */
		setCentered? (centered: boolean): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} cls The new value.
		 * @returns {void}                
		 */
		setCls? (cls: string | string[]): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                       [value] The value to set for the name parameter.
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.panel.Tool;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [contentEl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element|HTMLElement|string} contentEl The new value.
		 * @returns {void}                                     
		 */
		setContentEl? (contentEl: Ext.Element | HTMLElement | string): void;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled The new value.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [draggable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-draggable).
		 * @method
		 * @public (method)
		 * @param   {object} draggable The new value.
		 * @returns {void}             
		 */
		setDraggable? (draggable: object): void;
		/** 
		 * Sets the value of [enterAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} enterAnimation The new value.
		 * @returns {void}                      
		 */
		setEnterAnimation? (enterAnimation: string | any): void;
		/** 
		 * Sets the value of [exitAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} exitAnimation The new value.
		 * @returns {void}                     
		 */
		setExitAnimation? (exitAnimation: string | any): void;
		/** 
		 * Sets the value of [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @param   {number|string} height The new value.
		 * @returns {void}                 
		 */
		setHeight? (height: number | string): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [hideAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} hideAnimation The new value.
		 * @returns {void}                     
		 */
		setHideAnimation? (hideAnimation: string | any): void;
		/** 
		 * Sets the value of [hideOnMaskTap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-hideOnMaskTap).
		 * @method
		 * @public (method)
		 * @param   {boolean} hideOnMaskTap The new value.
		 * @returns {void}                  
		 */
		setHideOnMaskTap? (hideOnMaskTap: boolean): void;
		/** 
		 * Sets the value of [html](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Element|HTMLElement} html The new value.
		 * @returns {void}                                
		 */
		setHtml? (html: string | Ext.Element | HTMLElement): void;
		/** 
		 * Sets the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @param   {string} iconCls The new value.
		 * @returns {void}           
		 */
		setIconCls? (iconCls: string): void;
		/** 
		 * Sets the value of [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @param   {number|string} left The new value.
		 * @returns {void}               
		 */
		setLeft? (left: number | string): void;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The new value.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxHeight The new value.
		 * @returns {void}                    
		 */
		setMaxHeight? (maxHeight: number | string): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxWidth The new value.
		 * @returns {void}                   
		 */
		setMaxWidth? (maxWidth: number | string): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} minHeight The new value.
		 * @returns {void}                    
		 */
		setMinHeight? (minHeight: number | string): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} minWidth The new value.
		 * @returns {void}                   
		 */
		setMinWidth? (minWidth: number | string): void;
		/** 
		 * Sets the value of [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal).
		 * @method
		 * @public (method)
		 * @param   {boolean} modal The new value.
		 * @returns {void}          
		 */
		setModal? (modal: boolean): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The new value.
		 * @returns {void}                  
		 */
		setRecord? (record: Ext.data.Model): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [renderTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element} renderTo The new value.
		 * @returns {void}                 
		 */
		setRenderTo? (renderTo: Ext.Element): void;
		/** 
		 * Sets the value of [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @param   {number|string} right The new value.
		 * @returns {void}                
		 */
		setRight? (right: number | string): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} showAnimation The new value.
		 * @returns {void}                     
		 */
		setShowAnimation? (showAnimation: string | any): void;
		/** 
		 * Sets the size of the Component.
		 * @method
		 * @public (method)
		 * @param   {number} width  The new width for the Component.
		 * @param   {number} height The new height for the Component.
		 * @returns {void}          
		 */
		setSize? (width: number, height: number): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @param   {string} styleHtmlCls The new value.
		 * @returns {void}                
		 */
		setStyleHtmlCls? (styleHtmlCls: string): void;
		/** 
		 * Sets the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @param   {boolean} styleHtmlContent The new value.
		 * @returns {void}                     
		 */
		setStyleHtmlContent? (styleHtmlContent: boolean): void;
		/** 
		 * Sets the value of [tooltip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tooltip).
		 * @method
		 * @public (method)
		 * @param   {string|object} tooltip The new value.
		 * @returns {void}                  
		 */
		setTooltip? (tooltip: string | object): void;
		/** 
		 * Sets the value of [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @param   {number|string} top The new value.
		 * @returns {void}              
		 */
		setTop? (top: number | string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Sets the value of [tpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|Ext.Template|Ext.XTemplate[]} tpl The new value.
		 * @returns {void}                                             
		 */
		setTpl? (tpl: string | string[] | Ext.Template | Ext.XTemplate[]): void;
		/** 
		 * Sets the value of [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @param   {string} tplWriteMode The new value.
		 * @returns {void}                
		 */
		setTplWriteMode? (tplWriteMode: string): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type).
		 * @method
		 * @public (method)
		 * @param   {string} type The new value.
		 * @returns {void}        
		 */
		setType? (type: string): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} ui The new value.
		 * @returns {void}               
		 */
		setUi? (ui: string | string[]): void;
		/** 
		 * Sets the value of [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} userCls The new value.
		 * @returns {void}                    
		 */
		setUserCls? (userCls: string | string[]): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Sets the value of [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @param   {number|string} width The new value.
		 * @returns {void}                
		 */
		setWidth? (width: number | string): void;
		/** 
		 * Sets the value of [zIndex](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-zIndex).
		 * @method
		 * @public (method)
		 * @param   {number} zIndex The new value.
		 * @returns {void}          
		 */
		setZIndex? (zIndex: number): void;
		/** 
		 * Shows this component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean} [animation] You can specify an animation here or a bool to use the [showAnimation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-showAnimation) config.
		 * @returns {Ext.panel.Tool}             
		 */
		show? (animation?: object | boolean): Ext.panel.Tool;
		show? (animation?: object | boolean): Ext.Component;
		/** 
		 * @method
		 * @private (method)
		 * @returns {Ext.panel.Tool|Ext.Component|void}  
		 */
		show? (): void;
		/** 
		 * Shows this component by another component. If you specify no alignment, it will automatically
		 * position this component relative to the reference component.
		 * 
		 * For example, say we are aligning a Panel next to a Button, the alignment string would look like this:
		 * 
		 *    [panel-vertical (t/b/c)][panel-horizontal (l/r/c)]-[button-vertical (t/b/c)][button-horizontal (l/r/c)]
		 * 
		 * where t = top, b = bottom, c = center, l = left, r = right.
		 * 
		 * ## Examples
		 * 
		 * - `tl-tr` means top-left corner of the Panel to the top-right corner of the Button
		 * - `tc-bc` means top-center of the Panel to the bottom-center of the Button
		 * 
		 * You can put a '?' at the end of the alignment string to constrain the positioned element to the
		 * [Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html)
		 * 
		 *    // show `panel` by `button` using the default positioning (auto fit)
		 *    panel.showBy(button);
		 *    
		 *    // align the top left corner of `panel` with the top right corner of `button` (constrained to viewport)
		 *    panel.showBy(button, "tl-tr?");
		 *    
		 *    // align the bottom right corner of `panel` with the center left edge of `button` (not constrained by viewport)
		 *    panel.showBy(button, "br-cl");
		 * 
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} component   The target component to show this component by.
		 * @param   {string}        [alignment] The specific alignment.
		 * @param   {object}        [options]   An object containing options for the [Ext.util.Region.alignTo](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Region.html#method-alignTo) method.
		 * @returns {void}                      
		 */
		showBy? (component: Ext.Component, alignment?: string, options?: object): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
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
		 * [resumeEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Add or removes a class based on if the class is already added to the Component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                            className The class to toggle.
		 * @param   {boolean}                           [state]
		 * If specified as `true`, causes the class to be added. If specified as `false`, causes
		 * the class to be removed.
		 * @returns {Ext.panel.Tool|Ext.Component|void}           this
		 */
		toggleCls? (className: string, state?: boolean): Ext.panel.Tool;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		toggleCls? (className: string, state?: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
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
		 * Walks up the ownership hierarchy looking for an ancestor Component which matches
		 * the passed simple selector.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}                      [selector] The simple selector to test.
		 * @param   {string|number|Ext.Component} [limit]    This may be a selector upon which to stop the upward scan, or a limit of the number of steps, or Component reference to stop on.
		 * @returns {Ext.Container}                          The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string, limit?: string | number | Ext.Component): Ext.Container;
		/** 
		 * Updates the [styleHtmlCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-styleHtmlCls) configuration
		 * @method
		 * @public (method)
		 * @param   {object} newHtmlCls
		 * @param   {object} oldHtmlCls
		 * @returns {void}              
		 */
		updateStyleHtmlCls? (newHtmlCls: object, oldHtmlCls: object): void;
		/** 
		 * Returns the value of [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @method
		 * @protected (method)
		 * @returns {string|boolean}  
		 */
		getBaseCls? (): string | boolean;
		/** 
		 * Sets the value of [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @method
		 * @protected (method)
		 * @param   {string|boolean} baseCls The new value.
		 * @returns {void}                   
		 */
		setBaseCls? (baseCls: string | boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} data
		 * @returns {void}        
		 */
		applyData? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDraggable? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		updateDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateUi? (): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
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
		 * A template method for modifying the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config before it is processed.
		 * By default adds the result of `this.getTemplate()` as the `children` array of
		 * [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) if `children` were not specified in the original
		 * [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config.  Typically this method should not need to be implemented
		 * in subclasses.  Instead the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) property should be use to configure
		 * the element template for a given Widget subclass.
		 * 
		 * This method is called once when the first instance of each Widget subclass is
		 * created.  The element config object that is returned is cached and used as the template
		 * for all successive instances.  The scope object for this method is the class prototype,
		 * not the instance.
		 * @method
		 * @protected (method)
		 * @returns {object}  the element config object
		 */
		getElementConfig? (): object;
		/** 
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-up)
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
		 * @param   {object}                                                       config
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.panel.Tool;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#property-element) config will be
		 * processed to create an Element.  This Element is then cached on the prototype (see
		 * afterCachedConfig) so that future instances can obtain their element by simply
		 * cloning the Element that was cached by the first instance.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initElement? (): void;
		/** 
		 * Called by `getInherited` to initialize the inheritedState the first time it is
		 * requested.
		 * @method
		 * @protected (method)
		 * @param   {object} inheritedState
		 * @returns {void}                  
		 */
		initInheritedState? (inheritedState: object): void;
		/** 
		 * This method should be called when the instance is ready to start listening for
		 * keyboard events. This is called automatically for [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) and derived
		 * classes. In Classic Toolkit, this is done after the component is rendered.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initKeyMap? (): void;
		/** 
		 * Allows addition of behavior to the rendering phase.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initialize? (): void;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
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
		 * Gets the Controller or Component that is used as the event root for this view.
		 * @method
		 * @protected (method)
		 * @param   {object}                                         defaultScope
		 * @param   {object}                                         skipThis
		 * @returns {Ext.app.ViewController|Ext.container.Container}              The default listener scope.
		 */
		resolveListenerScope? (defaultScope: object, skipThis: object): Ext.app.ViewController | Ext.container.Container;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Observable.resolveListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resolveListenerScope).
		 * Gets the default scope for firing late bound events (string names with
		 * no scope attached) at runtime.
		 * @method
		 * @protected (method)
		 * @param   {object}                                                [defaultScope] The default scope to return if none is found.
		 * @returns {Ext.app.ViewController|Ext.container.Container|object}                The default event scope
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
		 * @method
		 * @protected (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateHeight? (height: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @returns {void}         
		 */
		updateStyle? (style: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateWidth? (width: object): void;
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
		 * @returns {Ext.panel.Tool.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.panel.Tool.Statics;
		statics? (): Ext.Component.Statics;
		statics? (): Ext.Widget.Statics;
		statics? (): Ext.Evented.Statics;
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
		 * Creates a particular plugin type if defined in the `plugins` configuration.
		 * @method
		 * @private (method)
		 * @param   {string}              type The `type` of the plugin.
		 * @returns {Ext.plugin.Abstract}      The plugin that was created.
		 */
		activatePlugin? (type: string): Ext.plugin.Abstract;
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
		 * Adds a listeners with the "delegate" event option.  Users should not invoke this
		 * method directly.  Use the "delegate" event option of
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) instead.
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
		 * Adds an element reference to this Widget instance.
		 * @method
		 * @private (method)
		 * @param   {string}          name    The name of the reference
		 * @param   {HTMLElement}     domNode
		 * @returns {Ext.dom.Element}         
		 */
		addElementReference? (name: string, domNode: HTMLElement): Ext.dom.Element;
		/** 
		 * Reduces instantiation time for a Widget by lazily instantiating [Ext.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 * references the first time they are used.  This optimization only works for elements
		 * with no listeners specified.
		 * @method
		 * @private (method)
		 * @param   {string}      name    The name of the reference
		 * @param   {HTMLElement} domNode
		 * @returns {void}                
		 */
		addElementReferenceOnDemand? (name: string, domNode: HTMLElement): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterCachedConfig? (): void;
		/** 
		 * Used to handle joining of a record to a tpl
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterEdit? (): void;
		/** 
		 * Used to handle joining of a record to a tpl
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterErase? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @param   {object} component
		 * @param   {object} newState
		 * @param   {object} oldState
		 * @param   {object} controller
		 * @returns {void}              
		 */
		animateFn? (animation: object, component: object, newState: object, oldState: object, controller: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} baseCls
		 * @returns {void}           
		 */
		applyBaseCls? (baseCls: object): void;
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
		 * @param   {object} bottom
		 * @returns {void}          
		 */
		applyBottom? (bottom: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} centered
		 * @returns {boolean}          
		 */
		applyCentered? (centered: boolean): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} contentEl
		 * @returns {void}             
		 */
		applyContentEl? (contentEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		applyDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @returns {void}          
		 */
		applyDocked? (docked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyDraggable? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		applyHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyHideAnimation? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} left
		 * @returns {void}        
		 */
		applyLeft? (left: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyMaxHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyMaxWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		applyMinHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyMinWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modal
		 * @param   {object} currentModal
		 * @returns {void}                
		 */
		applyModal? (modal: object, currentModal: object): void;
		/** 
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyRecord? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} right
		 * @returns {void}         
		 */
		applyRight? (right: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyShowAnimation? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyStyleHtmlContent? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tooltip
		 * @returns {void}           
		 */
		applyTooltip? (tooltip: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} top
		 * @returns {void}       
		 */
		applyTop? (top: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @param   {object} oldTouchAction
		 * @returns {void}                  
		 */
		applyTouchAction? (touchAction: object, oldTouchAction: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tpl
		 * @returns {void}       
		 */
		applyTpl? (tpl: object): void;
		/** 
		 * Transforms a ViewModel config to a proper instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel
		 * @returns {Ext.app.ViewModel}                         
		 */
		applyViewModel? (viewModel: string | object | Ext.app.ViewModel): Ext.app.ViewModel;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} zIndex
		 * @returns {void}          
		 */
		applyZIndex? (zIndex: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		beforeInitConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeInitialize? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		beforeShowAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} o
		 * @param   {object} fn
		 * @param   {object} scope
		 * @returns {void}         
		 */
		captureArgs? (o: object, fn: object, scope: object): void;
		/** 
		 * Clears all listeners that were attached using the "delegate" event option.
		 * Users should not invoke this method directly.  It is called automatically as
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * Converts the provided type or config object into a plugin instance.
		 * @method
		 * @private (method)
		 * @param   {string|object|Ext.plugin.Abstract} config
		 * The plugin type, config
		 * object or instance.
		 * @returns {Ext.plugin.Abstract}                      
		 */
		createPlugin? (config: string | object | Ext.plugin.Abstract): Ext.plugin.Abstract;
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
		 * @param   {object} name
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} options
		 * @param   {object} order
		 * @param   {object} caller
		 * @param   {object} manager
		 * @returns {void}           
		 */
		doAddListener? (name: object, fn: object, scope: object, options: object, order: object, caller: object, manager: object): void;
		/** 
		 * Fires a delegated event.  Users should not invoke this method directly.  It
		 * is called automatically by the framework as needed (see the "delegate" event
		 * option of [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) for more
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
		doRefreshPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doRefreshSizeState? (): void;
		/** 
		 * Sets up a reference on our current reference holder.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		fixReference? (): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBubbleTarget? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getClassCls? (): void;
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
		getDraggableBehavior? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getInnerHtmlElement? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSizeFlags? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSizeState? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTemplate? (): void;
		/** 
		 * Returns the value of [useBodyElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getUseBodyElement? (): object;
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
		 * Called for the first instance of this Widget to create an object that contains the
		 * listener configs for all of the element references keyed by reference name. The
		 * object is cached on the prototype and has the following shape:
		 * 
		 *    _elementListeners: {
		 *        element: {
		 *            click: 'onClick',
		 *            scope: this
		 *        },
		 *        fooReference: {
		 *            tap: {
		 *                fn: someFunction,
		 *                delay: 100
		 *            }
		 *        }
		 *    }
		 * 
		 * The returned object is prototype chained to the _elementListeners object of its
		 * superclass, and each key in the object is prototype chained to object with the
		 * corresponding key in the superclass _elementListeners.  This allows element
		 * listeners to be inherited and overridden when subclassing widgets.
		 * 
		 * This method is invoked with the prototype object as the scope
		 * @method
		 * @private (method)
		 * @param   {object} elementConfig
		 * @returns {void}                 
		 */
		initElementListeners? (elementConfig: object): void;
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
		 * @returns {void}  
		 */
		isAncestor? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		isCentered? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isDocked? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isPainted? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isRendered? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-destroy)).
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
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-publishState)
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
		 * @param   {object} parent
		 * @param   {object} instanced
		 * @returns {void}             
		 */
		onAdded? (parent: object, instanced: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @param   {object} data
		 * @returns {void}             
		 */
		onAnimationStart? (animation: object, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} T
		 * @returns {void}     
		 */
		onClassMixedIn? (T: object): void;
		/** 
		 * Temporary workarounds to keep [Ext.ComponentManager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentManager.html) from throwing errors when dealing
		 * Widgets.  TODO: remove these emptyFns when proper focus handling is implmented
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFocusEnter? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onFocusLeave? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fn
		 * @param   {object} scope
		 * @param   {object} args
		 * @returns {void}         
		 */
		onInitialized? (fn: object, scope: object, args: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component
		 * @returns {void}                    
		 */
		onShowByErased? (component: Ext.Component): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @param   {object} alignment
		 * @param   {object} options
		 * @returns {void}             
		 */
		onViewportResize? (component: object, alignment: object, options: object): void;
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
		 * Recursively processes the element templates for this class and its superclasses,
		 * ascending the hierarchy until it reaches a superclass whose element template
		 * has already been processed.  This method is invoked using the prototype as the scope.
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		processElementConfig? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshPositioned? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshSizeState? (): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} flags
		 * @returns {void}         
		 */
		setLayoutSizeFlags? (flags: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} flags
		 * @returns {void}         
		 */
		setSizeFlags? (flags: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} state
		 * @returns {void}         
		 */
		setSizeState? (state: object): void;
		/** 
		 * Sets the value of [useBodyElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement The new value.
		 * @returns {void}                  
		 */
		setUseBodyElement? (useBodyElement: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} isVisible
		 * @returns {void}             
		 */
		setVisibility? (isVisible: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} axis
		 * @param   {object} value
		 * @param   {object} animation
		 * @returns {void}             
		 */
		translateAxis? (axis: object, value: object, animation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		triggerInitialized? (): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                     names The names of the linked objects to destroy.
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.panel.Tool;
		unlink? (names: string[]): Ext.Component;
		unlink? (names: string[]): Ext.Widget;
		unlink? (names: string[]): Ext.Evented;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBaseCls
		 * @param   {object} oldBaseCls
		 * @returns {void}              
		 */
		updateBaseCls? (newBaseCls: object, oldBaseCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} border
		 * @returns {void}          
		 */
		updateBorder? (border: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} bottom
		 * @returns {void}          
		 */
		updateBottom? (bottom: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} centered
		 * @returns {void}            
		 */
		updateCentered? (centered: object): void;
		/** 
		 * All cls methods directly report to the [cls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-cls) configuration, so anytime it changes, [updateCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateCls) will be called
		 * @method
		 * @private (method)
		 * @param   {object} newCls
		 * @param   {object} oldCls
		 * @returns {void}          
		 */
		updateCls? (newCls: object, oldCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newContentEl
		 * @param   {object} oldContentEl
		 * @returns {void}                
		 */
		updateContentEl? (newContentEl: object, oldContentEl: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newData
		 * @returns {void}           
		 */
		updateData? (newData: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @param   {object} oldDocked
		 * @returns {void}             
		 */
		updateDocked? (docked: object, oldDocked: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateFlex? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @param   {object} oldHidden
		 * @returns {void}             
		 */
		updateHidden? (hidden: object, oldHidden: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.updateHidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-updateHidden).
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hide
		 * @returns {void}        
		 */
		updateHideOnMaskTap? (hide: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} html
		 * @returns {void}        
		 */
		updateHtml? (html: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} left
		 * @returns {void}        
		 */
		updateLeft? (left: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} margin
		 * @returns {void}          
		 */
		updateMargin? (margin: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateMaxHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateMaxWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} height
		 * @returns {void}          
		 */
		updateMinHeight? (height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		updateMinWidth? (width: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modal
		 * @returns {void}         
		 */
		updateModal? (modal: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @returns {void}           
		 */
		updatePadding? (padding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRecord
		 * @param   {object} oldRecord
		 * @returns {void}             
		 */
		updateRecord? (newRecord: object, oldRecord: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newContainer
		 * @returns {void}                
		 */
		updateRenderTo? (newContainer: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} right
		 * @returns {void}         
		 */
		updateRight? (right: object): void;
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
		 * @param   {object} styleHtmlContent
		 * @returns {void}                    
		 */
		updateStyleHtmlContent? (styleHtmlContent: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} tooltip
		 * @param   {object} oldTooltip
		 * @returns {void}              
		 */
		updateTooltip? (tooltip: object, oldTooltip: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} top
		 * @returns {void}       
		 */
		updateTop? (top: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} touchAction
		 * @returns {void}               
		 */
		updateTouchAction? (touchAction: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement
		 * @returns {void}                  
		 */
		updateUseBodyElement? (useBodyElement: object): void;
		/** 
		 * Updates the viewModel config.
		 * @method
		 * @private (method)
		 * @param   {Ext.app.ViewModel} viewModel
		 * @param   {Ext.app.ViewModel} oldViewModel
		 * @returns {void}                           
		 */
		updateViewModel? (viewModel: Ext.app.ViewModel, oldViewModel: Ext.app.ViewModel): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} zIndex
		 * @returns {void}          
		 */
		updateZIndex? (zIndex: object): void;
	}
}
declare namespace Ext.panel.Header {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.panel.Header](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html)
	 * This container class is used to manage the items (such as title and tools) for [`Ext.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html).
	 */
	interface Def extends Ext.panel.Header {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.panel.Header.Cfg}
		 */
		config?: Ext.panel.Header.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * @returns {Ext.panel.Header.Statics|Ext.Container.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.panel.Header.Statics}
		 */
		statics?: (() => Ext.panel.Header.Statics | Ext.Container.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.panel.Header.Statics | any;
	}
}
declare namespace Ext.panel.Title {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.panel.Title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html)
	 * A basic title component for a Panel Header.
	 */
	interface Def extends Ext.panel.Title {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.panel.Title.Cfg}
		 */
		config?: Ext.panel.Title.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * @returns {Ext.panel.Title.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.panel.Title.Statics}
		 */
		statics?: (() => Ext.panel.Title.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.panel.Title.Statics | any;
	}
}
declare namespace Ext.panel.Tool {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.panel.Tool](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html)
	 * This class is used to display small visual icons in the header of a panel. There are a set of
	 * 25 icons that can be specified by using the [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type) config. The [handler](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-handler) config
	 * can be used to provide a function that will respond to any click events. In general, this class
	 * will not be instantiated directly, rather it will be created by specifying the [Ext.Panel.tools](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html#cfg-tools)
	 * configuration on the Panel itself.
	 * 
	 *    Ext.create('Ext.Panel', {
	 *        title: 'A Panel',
	 *        fullscreen: true,
	 *    
	 *        tools: [{
	 *            type: 'help',
	 *            handler: function() {
	 *                // show help here
	 *            }
	 *        }, {
	 *            itemId: 'refresh',
	 *            type: 'refresh',
	 *            hidden: true,
	 *            handler: function () {
	 *                // do refresh
	 *            }
	 *        }, {
	 *            type: 'search',
	 *            handler: function (panel) {
	 *                // do search
	 *                panel.down('#refresh').show();
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Def extends Ext.panel.Tool {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.panel.Tool.Cfg}
		 */
		config?: Ext.panel.Tool.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * @returns {Ext.panel.Tool.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.panel.Tool.Statics}
		 */
		statics?: (() => Ext.panel.Tool.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.panel.Tool.Statics | any;
	}
}
declare namespace Ext.panel.Header {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.panel.Header](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html)
	 * This container class is used to manage the items (such as title and tools) for [`Ext.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html).
	 */
	interface Statics extends Ext.base.Statics {
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
		 * @param   {object}                                                                       members    The members to add to this class.
		 * @param   {boolean}                                                                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.panel.Header;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Container;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Widget;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Evented;
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
		 * @param   {object}                                                                       members
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.panel.Header;
		addStatics? (members: object): typeof Ext.Container;
		addStatics? (members: object): typeof Ext.Component;
		addStatics? (members: object): typeof Ext.Widget;
		addStatics? (members: object): typeof Ext.Evented;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Loader.html)
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
		 * @param   {object}                                                                       name
		 * @param   {object}                                                                       member
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.panel.Header;
		addMember? (name: object, member: object): typeof Ext.Container;
		addMember? (name: object, member: object): typeof Ext.Component;
		addMember? (name: object, member: object): typeof Ext.Widget;
		addMember? (name: object, member: object): typeof Ext.Evented;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                       fn
		 * @param   {object}                                                                       scope
		 * @returns {Ext.panel.Header|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.panel.Header;
		onExtended? (fn: object, scope: object): typeof Ext.Container;
		onExtended? (fn: object, scope: object): typeof Ext.Component;
		onExtended? (fn: object, scope: object): typeof Ext.Widget;
		onExtended? (fn: object, scope: object): typeof Ext.Evented;
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
declare namespace Ext.panel.Title {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.panel.Title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html)
	 * A basic title component for a Panel Header.
	 */
	interface Statics extends Ext.base.Statics {
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
		 * @param   {object}                                                        members    The members to add to this class.
		 * @param   {boolean}                                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.panel.Title;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Widget;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Evented;
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
		 * @param   {object}                                                        members
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.panel.Title;
		addStatics? (members: object): typeof Ext.Component;
		addStatics? (members: object): typeof Ext.Widget;
		addStatics? (members: object): typeof Ext.Evented;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Loader.html)
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
		 * @param   {object}                                                        name
		 * @param   {object}                                                        member
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.panel.Title;
		addMember? (name: object, member: object): typeof Ext.Component;
		addMember? (name: object, member: object): typeof Ext.Widget;
		addMember? (name: object, member: object): typeof Ext.Evented;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                        fn
		 * @param   {object}                                                        scope
		 * @returns {Ext.panel.Title|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.panel.Title;
		onExtended? (fn: object, scope: object): typeof Ext.Component;
		onExtended? (fn: object, scope: object): typeof Ext.Widget;
		onExtended? (fn: object, scope: object): typeof Ext.Evented;
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
declare namespace Ext.panel.Tool {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.panel.Tool](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html)
	 * This class is used to display small visual icons in the header of a panel. There are a set of
	 * 25 icons that can be specified by using the [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type) config. The [handler](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-handler) config
	 * can be used to provide a function that will respond to any click events. In general, this class
	 * will not be instantiated directly, rather it will be created by specifying the [Ext.Panel.tools](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html#cfg-tools)
	 * configuration on the Panel itself.
	 * 
	 *    Ext.create('Ext.Panel', {
	 *        title: 'A Panel',
	 *        fullscreen: true,
	 *    
	 *        tools: [{
	 *            type: 'help',
	 *            handler: function() {
	 *                // show help here
	 *            }
	 *        }, {
	 *            itemId: 'refresh',
	 *            type: 'refresh',
	 *            hidden: true,
	 *            handler: function () {
	 *                // do refresh
	 *            }
	 *        }, {
	 *            type: 'search',
	 *            handler: function (panel) {
	 *                // do search
	 *                panel.down('#refresh').show();
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Statics extends Ext.base.Statics {
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
		 * @param   {object}                                                       members    The members to add to this class.
		 * @param   {boolean}                                                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.panel.Tool;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Component;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Widget;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.Evented;
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
		 * @param   {object}                                                       members
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.panel.Tool;
		addStatics? (members: object): typeof Ext.Component;
		addStatics? (members: object): typeof Ext.Widget;
		addStatics? (members: object): typeof Ext.Evented;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Loader.html)
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
		 * @param   {object}                                                       name
		 * @param   {object}                                                       member
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.panel.Tool;
		addMember? (name: object, member: object): typeof Ext.Component;
		addMember? (name: object, member: object): typeof Ext.Widget;
		addMember? (name: object, member: object): typeof Ext.Evented;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                       fn
		 * @param   {object}                                                       scope
		 * @returns {Ext.panel.Tool|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.panel.Tool;
		onExtended? (fn: object, scope: object): typeof Ext.Component;
		onExtended? (fn: object, scope: object): typeof Ext.Widget;
		onExtended? (fn: object, scope: object): typeof Ext.Evented;
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
declare namespace Ext.panel.Header.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.panel.Header.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
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
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.panel.Header.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.panel.Header.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
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
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.panel.Title.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.panel.Title.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
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
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.panel.Title.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.panel.Title.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
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
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.panel.Tool.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.panel.Tool.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
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
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.panel.Tool.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.panel.Tool.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
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
		 *   The `capture` option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		capture?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.panel.Header {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.panel.Header](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html)
	 * This container class is used to manage the items (such as title and tools) for [`Ext.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The item from the [items](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-items) collection that will be active first. This is
		 * usually only meaningful in a [card layout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.layout.Card.html), where only one item can be active at a
		 * time. If passes a string, it will be assumed to be a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {object|string|number}
		 */
		activeItem?: object | string | number;
		/** 
		 * If `true`, child items will be destroyed as soon as they are [removed](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-remove)
		 * from this container.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * If `true`, then, when [showBy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-showBy) or alignTo fallback on
		 * constraint violation only takes place along the major align axis.
		 * 
		 * That is, if alignment `"l-r"` is being used, and `axisLock: true` is used, then if constraints
		 * fail, only fallback to `"r-l"` is considered.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		axisLock?: boolean;
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'panel-header'
		 * @type {string|boolean}
		 */
		baseCls?: string | boolean;
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html#method-bind). The
		 * `ViewModel` instance is determined by `lookupViewModel`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {object}
		 */
		bind?: object;
		/** 
		 * Enables or disables bordering on this component.
		 * The following values are accepted:
		 * 
		 * - `null` or `true (default): Do nothing and allow the border to be specified by the theme.
		 * - `false`: suppress the default border provided by the theme.
		 * 
		 * Please note that enabling bordering via this config will not add a `border-color`
		 * or `border-style` CSS property to the component; you provide the `border-color`
		 * and `border-style` via CSS rule or [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style) configuration
		 * (if not already provide by the theme).
		 * 
		 * ## Using [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style):
		 * 
		 *    Ext.Viewport.add({
		 *        centered: true,
		 *        width: 100,
		 *        height: 100,
		 *    
		 *        style: 'border: 1px solid blue;'
		 *        // ...
		 *    });
		 * 
		 * ## Using CSS:
		 * 
		 *    Ext.Viewport.add({
		 *        centered: true,
		 *        width: 100,
		 *        height: 100,
		 *    
		 *        cls: 'my-component'
		 *        // ...
		 *    });
		 * 
		 * And your CSS file:
		 * 
		 *    .my-component {
		 *        border: 1px solid red;
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		border?: boolean;
		/** 
		 * The absolute bottom position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		bottom?: number | string;
		/** 
		 * Animation to be used during transitions of cards.
		 * @configuration
		 * @optional
		 * @type {string|object|boolean}
		 */
		cardSwitchAnimation?: string | object | boolean;
		/** 
		 * Configure this as `true` to have this Component centered within its Container.
		 * Setting this value to `true` will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		centered?: boolean;
		/** 
		 * The CSS class to add to this widget's element, in
		 * addition to the [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls). In many cases, this property will be specified
		 * by the derived widget class. See [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls) for adding additional CSS
		 * classes to widget instances (such as items in a [Ext.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html)).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		cls?: string | string[];
		/** 
		 * The configured element will automatically be
		 * added as the content of this component. When you pass a string, we expect it to be an element id.
		 * If the content element is hidden, we will automatically show it.
		 * @configuration
		 * @optional
		 * @type {Ext.Element|HTMLElement|string}
		 */
		contentEl?: Ext.Element | HTMLElement | string;
		/** 
		 * Enables you to easily control Components inside this Container by listening to their
		 * events and taking some action. For example, if we had a container with a nested Disable button, and we
		 * wanted to hide the Container when the Disable button is tapped, we could do this:
		 * 
		 *    Ext.create('Ext.Container', {
		 *        control: {
		 *           'button[text=Disable]': {
		 *               tap: 'hideMe'
		 *           }
		 *        },
		 *    
		 *        hideMe: function () {
		 *            this.hide();
		 *        }
		 *    });
		 * 
		 * We used a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ComponentQuery.html) selector to listen to the [tap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Button.html#event-tap) event on any
		 * [button](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Button.html) anywhere inside the Container that has the [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Button.html#cfg-text) 'Disable'.
		 * Whenever a Component matching that selector fires the `tap` event our `hideMe` function is called. `hideMe` is
		 * called with scope: `this` (e.g. `this` is the Container instance).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		control?: object;
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl) to
		 * update the content area of the Component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		data?: object;
		/** 
		 * If `true`, this component will be the default scope (this pointer) for events
		 * specified with string names so that the scope can be dynamically resolved. The
		 * component will automatically become the defaultListenerScope if a
		 * [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for some sample
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
		 * The default [xtype](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) of child Components to create in this Container when a child item
		 * is specified as a raw configuration object, rather than as an instantiated Component.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		defaultType?: string;
		/** 
		 * A set of default configurations to apply to all child Components in this Container.
		 * It's often useful to specify defaults when creating more than one items with similar configurations. For
		 * example here we can specify that each child is a panel and avoid repeating the xtype declaration for each
		 * one:
		 * 
		 *    Ext.create('Ext.Container', {
		 *        defaults: {
		 *            xtype: 'panel'
		 *        },
		 *        items: [
		 *            {
		 *                html: 'Panel 1'
		 *            },
		 *            {
		 *                html: 'Panel 2'
		 *            }
		 *        ]
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		defaults?: object;
		/** 
		 * Whether or not this component is disabled
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		disabled?: boolean;
		/** 
		 * The dock position of this component in its container. Can be `left`, `top`, `right` or `bottom`.
		 * 
		 * **Notes**
		 * 
		 * You must use a HTML5 doctype for [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) `bottom` to work. To do this, simply add the following code to the HTML file:
		 * 
		 *    &lt;!doctype html&gt;
		 * 
		 * So your index.html file should look a little like this:
		 * 
		 *    &lt;!doctype html&gt;
		 *    &lt;html&gt;
		 *        &lt;head&gt;
		 *            &lt;title&gt;MY application title&lt;/title&gt;
		 *            ...
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		docked?: string;
		/** 
		 * Configuration options to make this Component draggable
		 * @cmd-auto-dependency {defaultType: "[Ext.behavior.Draggable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.behavior.Draggable.html)"}
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		draggable?: object;
		/** 
		 * Animation effect to apply when the Component is being shown.  Typically you want to use an
		 * inbound animation type such as 'fadeIn' or 'slideIn'.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		enterAnimation?: string | any;
		/** 
		 * Animation effect to apply when the Component is being hidden.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		exitAnimation?: string | any;
		/** 
		 * Force the component to take up 100% width and height available, by adding it
		 * to [Ext.Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		fullscreen?: boolean;
		/** 
		 * A numeric unicode character code to use as the icon.  The default font-family
		 * for glyphs can be set globally using
		 * [glyphFontFamily](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.Application.html#cfg-glyphFontFamily) application
		 * config or the Ext.setGlyphFontFamily() method.
		 * 
		 * The following shows how to set the glyph using the font icons provided in the
		 * SDK (assuming the font-family has been configured globally):
		 * 
		 *    // assumes the glyphFontFamily is "FontAwesome"
		 *    glyph: 'xf005'     // the "home" icon
		 *    
		 *    // assumes the glyphFontFamily is "Pictos"
		 *    glyph: 'H'         // the "home" icon
		 * 
		 * Alternatively, this config option accepts a string with the charCode and
		 * font-family separated by the `@` symbol.
		 * 
		 *    // using Font Awesome
		 *    glyph: 'xf005@FontAwesome'     // the "home" icon
		 *    
		 *    // using Pictos
		 *    glyph: 'H@Pictos'              // the "home" icon
		 * 
		 * Depending on the theme you're using, you may need include the font icon
		 * packages in your application in order to use the icons included in the
		 * SDK.  For more information see:
		 * 
		 * - [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/cheatsheet/)
		 * - [Pictos icons](http://docs.sencha.com/extjs/6.0/core_concepts/font_ext.html)
		 * - [Theming Guide](http://docs.sencha.com/extjs/6.0/core_concepts/theming.html)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		glyph?: number | string;
		/** 
		 * The height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * By default, if this is not explicitly set, this Component's element will simply have its own natural size.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		height?: number | string;
		/** 
		 * Whether or not this Component is hidden (its CSS `display` property is set to `none`).
		 * 
		 * Defaults to `true` for floated Components.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Animation effect to apply when the Component is being hidden.  Typically you want to use an
		 * outbound animation type such as 'fadeOut' or 'slideOut'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		hideAnimation?: string | any;
		/** 
		 * When using a [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal) Component, setting this to `true` will hide the modal
		 * mask and the Container when the mask is tapped on.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hideOnMaskTap?: boolean;
		/** 
		 * Optional HTML content to render inside this Component, or a reference
		 * to an existing element on the page.
		 * @configuration
		 * @optional
		 * @type {string|Ext.Element|HTMLElement}
		 */
		html?: string | Ext.Element | HTMLElement;
		/** 
		 * Path to an image to use as an icon.
		 * 
		 * For instructions on how you can use icon fonts including those distributed in
		 * the SDK see [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html#cfg-iconCls).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		icon?: string;
		/** 
		 * The side of the title to render the icon.
		 * @configuration
		 * @optional
		 * @default 'left'
		 * @type {'top'|'right'|'bottom'|'left'}
		 */
		iconAlign?: 'top' | 'right' | 'bottom' | 'left';
		/** 
		 * One or more space separated CSS classes to be applied to the icon element.
		 * The CSS rule(s) applied should specify a background image to be used as the
		 * icon.
		 * 
		 * An example of specifying a custom icon class would be something like:
		 * 
		 *    // specify the property in the config for the class:
		 *    iconCls: 'my-home-icon'
		 *    
		 *    // css rule specifying the background image to be used as the icon image:
		 *    .my-home-icon {
		 *        background-image: url(../images/my-home-icon.gif) !important;
		 *    }
		 * 
		 * In addition to specifying your own classes, you can use the font icons
		 * provided in the SDK using the following syntax:
		 * 
		 *    // using Font Awesome
		 *    iconCls: 'x-fa fa-home'
		 *    
		 *    // using Pictos
		 *    iconCls: 'pictos pictos-home'
		 * 
		 * Depending on the theme you're using, you may need include the font icon
		 * packages in your application in order to use the icons included in the
		 * SDK.  For more information see:
		 * 
		 * - [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/cheatsheet/)
		 * - [Pictos icons](http://docs.sencha.com/extjs/6.0/core_concepts/font_ext.html)
		 * - [Theming Guide](http://docs.sencha.com/extjs/6.0/core_concepts/theming.html)
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		iconCls?: string;
		/** 
		 * The child items to add to this Container. This is usually an array of Component
		 * configurations or instances, for example:
		 * 
		 *    Ext.create('Ext.Container', {
		 *        items: [
		 *            {
		 *                xtype: 'panel',
		 *                html: 'This is an item'
		 *            }
		 *        ]
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		items?: any[] | object;
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
		 * be set to `true`. Since `initKeyMap` is called by [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) at the
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
		 * Configuration for this Container's layout. Example:
		 * 
		 *    Ext.create('Ext.Container', {
		 *        layout: {
		 *            type: 'hbox',
		 *            align: 'middle'
		 *        },
		 *        items: [
		 *            {
		 *                xtype: 'panel',
		 *                flex: 1,
		 *                style: 'background-color: red;'
		 *            },
		 *            {
		 *                xtype: 'panel',
		 *                flex: 2,
		 *                style: 'background-color: green'
		 *            }
		 *        ]
		 *    });
		 * 
		 * @cmd-auto-dependency { aliasPrefix : "layout."}
		 * @configuration
		 * @optional
		 * @default {type: 'hbox', align: 'center'}
		 * @type {object|string}
		 */
		layout?: object | string;
		/** 
		 * The absolute left position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		left?: number | string;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the DataView's **`itemclick`** event passing the node clicked on. To access DOM events directly from a
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
		 * `true` to enable border management of docked items.  When enabled, borders of docked
		 * items will collapse where they meet to avoid duplicated borders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		manageBorders?: boolean;
		/** 
		 * The margin to use on this Component. Can be specified as a number (in which case
		 * all edges get the same margin) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		margin?: number | string;
		/** 
		 * A configuration to allow you to mask this container.
		 * You can optionally pass an object block with and xtype of `loadmask`, and an optional `message` value to
		 * display a loading mask. Please refer to the [Ext.LoadMask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.LoadMask.html) component to see other configurations.
		 * 
		 *    masked: {
		 *        xtype: 'loadmask',
		 *        message: 'My message'
		 *    }
		 * 
		 * Alternatively, you can just call the setter at any time with `true`/`false` to show/hide the mask:
		 * 
		 *    setMasked(true); //show the mask
		 *    setMasked(false); //hides the mask
		 * 
		 * There are also two convenient methods, [mask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-mask) and [unmask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-unmask), to allow you to mask and unmask
		 * this container at any time.
		 * 
		 * Remember, the [Ext.Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html) is always a container, so if you want to mask your whole application at anytime,
		 * can call:
		 * 
		 *    Ext.Viewport.setMasked({
		 *        xtype: 'loadmask',
		 *        message: 'Hello'
		 *    });
		 * 
		 * @cmd-auto-dependency {defaultType: "[Ext.Mask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Mask.html)"}
		 * @configuration
		 * @optional
		 * @type {boolean|object|Ext.Mask|Ext.LoadMask}
		 */
		masked?: boolean | object | Ext.Mask | Ext.LoadMask;
		/** 
		 * The maximum height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'positioned' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxHeight?: number | string;
		/** 
		 * The maximum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'positioned' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxWidth?: number | string;
		/** 
		 * The minimum height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		minHeight?: number | string;
		/** 
		 * The minimum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		minWidth?: number | string;
		/** 
		 * `true` to make this Componenrt modal. This will create a mask underneath the Component
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Component is dismissed.
		 * @cmd-auto-dependency {defaultType: "[Ext.Mask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Mask.html)"}
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		modal?: boolean;
		/** 
		 * The padding to use on this Component. Can be specified as a number (in which
		 * case all edges get the same padding) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An object or array of objects that will provide custom functionality for this
		 * component. If a string is provided or a string is one of the elements of the
		 * array, that string is treated as the `type` alias. For example, "listpaging"
		 * is the type alias for [`Ext.plugin.ListPaging`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.ListPaging.html). The full alias includes the
		 * "plugin." prefix (i.e., 'plugin.listpaging').
		 * 
		 * Plugins should derive from [`Ext.plugin.Abstract`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html) but this is not required. The
		 * only requirement for a valid plugin is that it contain an `init()` method that
		 * accepts a reference to the owning component.
		 * 
		 * When a component is created, if any plugins are available, the component will
		 * call the [`init`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html#method-init) method on each plugin,
		 * passing a reference to itself. Each plugin can then call methods or respond to
		 * events on the component as needed to provide its functionality.
		 * 
		 * ## Example code
		 * 
		 * A plugin by alias:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: 'listpaging'
		 *     });
		 * 
		 * Multiple plugins by alias:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: ['listpaging', 'pullrefresh']
		 *     });
		 * 
		 * Single plugin by class name with config options:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: {
		 *             type: 'listpaging',
		 *             autoPaging: true
		 *         }
		 *     });
		 * 
		 * Multiple plugins by type and class name with config options:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: [{
		 *             xclass: 'Ext.plugin.PullRefresh',
		 *             pullRefreshText: 'Pull to refresh...'
		 *         }, {
		 *             type: 'listpaging',
		 *             autoPaging: true
		 *         }]
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {object|string|object[]|string[]}
		 */
		plugins?: object | string | object[] | string[];
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-publishState) if the property has a
		 * setter method.  Let's use setFieldLabel as an example:
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
		 * A model instance which updates the Component's html based on it's tpl. Similar to the data
		 * configuration, but tied to to a record to make allow dynamic updates.  This must be a model
		 * instance and not a configuration of one.
		 * @configuration
		 * @optional
		 * @type {Ext.data.Model}
		 */
		record?: Ext.data.Model;
		/** 
		 * Specifies a name for this component inside its component hierarchy. This name
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for more information about references.
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
		 * If `true`, this container will be marked as being a point in the hierarchy where
		 * references to items with a specified `reference` config will be held. The container
		 * will automatically become a referenceHolder if a controller is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for more information
		 * about references &amp; reference holders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		referenceHolder?: boolean;
		/** 
		 * Optional element to render this Component to. Usually this is not needed because
		 * a Component is normally full screen or automatically rendered inside another [Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html)
		 * @configuration
		 * @optional
		 * @type {Ext.Element}
		 */
		renderTo?: Ext.Element;
		/** 
		 * The absolute right position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		right?: number | string;
		/** 
		 * Configuration options to make this Component scrollable. Acceptable values are:
		 * 
		 * - `true` to enable auto scrolling.
		 * - `false` (or `null`) to disable scrolling - this is the default.
		 * - `x` or `horizontal` to enable horizontal scrolling only
		 * - `y` or `vertical` to enable vertical scrolling only
		 * 
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.scroll.Scroller.html)
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
		 * Animation effect to apply when the Component is being shown.  Typically you want to use an
		 * inbound animation type such as 'fadeIn' or 'slideIn'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		showAnimation?: string | any;
		/** 
		 * Additional CSS styles that will be rendered into an inline style attribute when
		 * the widget is rendered.
		 * 
		 * You can pass either a string syntax:
		 * 
		 *    style: 'background:red'
		 * 
		 * Or by using an object:
		 * 
		 *    style: {
		 *        background: 'red'
		 *    }
		 * 
		 * When using the object syntax, you can define CSS Properties by using a string:
		 * 
		 *    style: {
		 *        'border-left': '1px solid red'
		 *    }
		 * 
		 * Although the object syntax is much easier to read, we suggest you to use the
		 * string syntax for better performance.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		style?: string | object;
		/** 
		 * The class that is added to the content target when you set `styleHtmlContent` to `true`.
		 * @configuration
		 * @optional
		 * @default "x-html"
		 * @type {string}
		 */
		styleHtmlCls?: string;
		/** 
		 * `true` to automatically style the HTML inside the content target of this component (body for panels).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		styleHtmlContent?: boolean;
		/** 
		 * The title text or config object for the [Title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html) component.
		 * @configuration
		 * @optional
		 * @type {string|Ext.panel.Title}
		 */
		title?: string | Ext.panel.Title;
		/** 
		 * The alignment of the title text within the available space between the
		 * icon and the tools.
		 * @configuration
		 * @optional
		 * @default 'left'
		 * @type {'left'|'center'|'right'}
		 */
		titleAlign?: 'left' | 'center' | 'right';
		/** 
		 * The tooltip for this component - can be a string to be used as innerHTML
		 * (html tags are accepted) or [Ext.tip.ToolTip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.ToolTip.html) config object.
		 * 
		 * The default behavior is to use a shared tip instance. The tooltip configuration is registered with the
		 * [Ext.tip.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.Manager.html). To enable this, your application can set the [Ext.app.Application.quickTips](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.Application.html#cfg-quickTips)
		 * config, or an instance of the [Ext.tip.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.Manager.html) may be created manually.
		 * 
		 * To force a unique tooltip instance to be created, specify `autoCreate: true` on this configuration.
		 * 
		 * Configuring this with `autoHide: false` implies `autoCreate: true` so that the desired persistent
		 * behavior can be obtained with other targets still showing the singleton instance.
		 * 
		 * @cmd-auto-dependency {defaultType: "[Ext.tip.ToolTip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.ToolTip.html)"}
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		tooltip?: string | object;
		/** 
		 * The absolute top position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		top?: number | string;
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
		 * Touch actions can be specified on reference elements using the reference element
		 * name, for example:
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
		 *    Ext.create('Ext.Widget', {
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
		 * A [String](https://docs.sencha.com/extjs/6.2.0/modern/String.html), [Ext.Template](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html) or an [Array](https://docs.sencha.com/extjs/6.2.0/modern/Array.html) of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html).
		 * Used in conjunction with the [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data) and [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * 
		 * **Note**
		 * The [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data) configuration _must_ be set for any content to be shown in the component when using this configuration.
		 * @configuration
		 * @optional
		 * @type {string|string[]|Ext.Template|Ext.XTemplate[]}
		 */
		tpl?: string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * The Ext.(X)Template method to use when
		 * updating the content area of the Component.
		 * Valid modes are:
		 * 
		 * - append
		 * - insertAfter
		 * - insertBefore
		 * - insertFirst
		 * - overwrite
		 * @configuration
		 * @optional
		 * @default 'overwrite'
		 * @type {string}
		 */
		tplWriteMode?: string;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * The ui or uis to be used on this Component
		 * 
		 * When a ui is configured, CSS class names are added to the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element), created
		 * by appending the ui name(s) to each [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) and/or [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		ui?: string | string[];
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		useBodyElement?: object;
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html). This is
		 * determined by calling `getInheritedSession`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {string|object|Ext.app.ViewModel}
		 */
		viewModel?: string | object | Ext.app.ViewModel;
		/** 
		 * The width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * By default, if this is not explicitly set, this Component's element will simply have its own natural size.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		width?: number | string;
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * @configuration
		 * @optional
		 * @default 'component'
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * The z-index to give this Component when it is rendered.
		 * 
		 * Not valid for floated Components. The Z ordering of floated
		 * Components is managed by ordering of the DOM elements.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		zIndex?: number;
		/** 
		 * Allows addition of behavior to the rendering phase.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initialize? (): void;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
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
		 * @param   {object}                   config
		 * @returns {Ext.panel.Header.Statics}        this
		 */
		initConfig? (config: object): Ext.panel.Header.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                   [value] The value to set for the name parameter.
		 * @returns {Ext.panel.Header.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.panel.Header.Statics;
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
		 * @returns {Ext.panel.Header.Statics}  
		 */
		statics? (): Ext.panel.Header.Statics;
	}
}
declare namespace Ext.panel.Title {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.panel.Title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html)
	 * A basic title component for a Panel Header.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * If `true`, then, when [showBy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-showBy) or alignTo fallback on
		 * constraint violation only takes place along the major align axis.
		 * 
		 * That is, if alignment `"l-r"` is being used, and `axisLock: true` is used, then if constraints
		 * fail, only fallback to `"r-l"` is considered.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		axisLock?: boolean;
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'panel-title'
		 * @type {string|boolean}
		 */
		baseCls?: string | boolean;
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html#method-bind). The
		 * `ViewModel` instance is determined by `lookupViewModel`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {object}
		 */
		bind?: object;
		/** 
		 * Enables or disables bordering on this component.
		 * The following values are accepted:
		 * 
		 * - `null` or `true (default): Do nothing and allow the border to be specified by the theme.
		 * - `false`: suppress the default border provided by the theme.
		 * 
		 * Please note that enabling bordering via this config will not add a `border-color`
		 * or `border-style` CSS property to the component; you provide the `border-color`
		 * and `border-style` via CSS rule or [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style) configuration
		 * (if not already provide by the theme).
		 * 
		 * ## Using [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style):
		 * 
		 *    Ext.Viewport.add({
		 *        centered: true,
		 *        width: 100,
		 *        height: 100,
		 *    
		 *        style: 'border: 1px solid blue;'
		 *        // ...
		 *    });
		 * 
		 * ## Using CSS:
		 * 
		 *    Ext.Viewport.add({
		 *        centered: true,
		 *        width: 100,
		 *        height: 100,
		 *    
		 *        cls: 'my-component'
		 *        // ...
		 *    });
		 * 
		 * And your CSS file:
		 * 
		 *    .my-component {
		 *        border: 1px solid red;
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		border?: boolean;
		/** 
		 * The absolute bottom position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		bottom?: number | string;
		/** 
		 * Configure this as `true` to have this Component centered within its Container.
		 * Setting this value to `true` will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		centered?: boolean;
		/** 
		 * The CSS class to add to this widget's element, in
		 * addition to the [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls). In many cases, this property will be specified
		 * by the derived widget class. See [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls) for adding additional CSS
		 * classes to widget instances (such as items in a [Ext.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html)).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		cls?: string | string[];
		/** 
		 * The configured element will automatically be
		 * added as the content of this component. When you pass a string, we expect it to be an element id.
		 * If the content element is hidden, we will automatically show it.
		 * @configuration
		 * @optional
		 * @type {Ext.Element|HTMLElement|string}
		 */
		contentEl?: Ext.Element | HTMLElement | string;
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl) to
		 * update the content area of the Component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		data?: object;
		/** 
		 * If `true`, this component will be the default scope (this pointer) for events
		 * specified with string names so that the scope can be dynamically resolved. The
		 * component will automatically become the defaultListenerScope if a
		 * [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for some sample
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
		 * Whether or not this component is disabled
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		disabled?: boolean;
		/** 
		 * The dock position of this component in its container. Can be `left`, `top`, `right` or `bottom`.
		 * 
		 * **Notes**
		 * 
		 * You must use a HTML5 doctype for [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) `bottom` to work. To do this, simply add the following code to the HTML file:
		 * 
		 *    &lt;!doctype html&gt;
		 * 
		 * So your index.html file should look a little like this:
		 * 
		 *    &lt;!doctype html&gt;
		 *    &lt;html&gt;
		 *        &lt;head&gt;
		 *            &lt;title&gt;MY application title&lt;/title&gt;
		 *            ...
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		docked?: string;
		/** 
		 * Configuration options to make this Component draggable
		 * @cmd-auto-dependency {defaultType: "[Ext.behavior.Draggable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.behavior.Draggable.html)"}
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		draggable?: object;
		/** 
		 * Animation effect to apply when the Component is being shown.  Typically you want to use an
		 * inbound animation type such as 'fadeIn' or 'slideIn'.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		enterAnimation?: string | any;
		/** 
		 * Animation effect to apply when the Component is being hidden.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		exitAnimation?: string | any;
		/** 
		 * Force the component to take up 100% width and height available, by adding it
		 * to [Ext.Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		fullscreen?: boolean;
		/** 
		 * A numeric unicode character code to use as the icon.  The default font-family
		 * for glyphs can be set globally using
		 * [glyphFontFamily](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.Application.html#cfg-glyphFontFamily) application
		 * config or the Ext.setGlyphFontFamily() method.
		 * 
		 * The following shows how to set the glyph using the font icons provided in the
		 * SDK (assuming the font-family has been configured globally):
		 * 
		 *    // assumes the glyphFontFamily is "FontAwesome"
		 *    glyph: 'xf005'     // the "home" icon
		 *    
		 *    // assumes the glyphFontFamily is "Pictos"
		 *    glyph: 'H'         // the "home" icon
		 * 
		 * Alternatively, this config option accepts a string with the charCode and
		 * font-family separated by the `@` symbol.
		 * 
		 *    // using Font Awesome
		 *    glyph: 'xf005@FontAwesome'     // the "home" icon
		 *    
		 *    // using Pictos
		 *    glyph: 'H@Pictos'              // the "home" icon
		 * 
		 * Depending on the theme you're using, you may need include the font icon
		 * packages in your application in order to use the icons included in the
		 * SDK.  For more information see:
		 * 
		 * - [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/cheatsheet/)
		 * - [Pictos icons](http://docs.sencha.com/extjs/6.0/core_concepts/font_ext.html)
		 * - [Theming Guide](http://docs.sencha.com/extjs/6.0/core_concepts/theming.html)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		glyph?: number | string;
		/** 
		 * The height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * By default, if this is not explicitly set, this Component's element will simply have its own natural size.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		height?: number | string;
		/** 
		 * Whether or not this Component is hidden (its CSS `display` property is set to `none`).
		 * 
		 * Defaults to `true` for floated Components.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Animation effect to apply when the Component is being hidden.  Typically you want to use an
		 * outbound animation type such as 'fadeOut' or 'slideOut'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		hideAnimation?: string | any;
		/** 
		 * When using a [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal) Component, setting this to `true` will hide the modal
		 * mask and the Container when the mask is tapped on.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hideOnMaskTap?: boolean;
		/** 
		 * Optional HTML content to render inside this Component, or a reference
		 * to an existing element on the page.
		 * @configuration
		 * @optional
		 * @type {string|Ext.Element|HTMLElement}
		 */
		html?: string | Ext.Element | HTMLElement;
		/** 
		 * Path to an image to use as an icon.
		 * 
		 * For instructions on how you can use icon fonts including those distributed in
		 * the SDK see [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html#cfg-iconCls).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		icon?: string;
		/** 
		 * alignment of the icon
		 * @configuration
		 * @optional
		 * @default 'left'
		 * @type {'top'|'right'|'bottom'|'left'}
		 */
		iconAlign?: 'top' | 'right' | 'bottom' | 'left';
		/** 
		 * One or more space separated CSS classes to be applied to the icon element.
		 * The CSS rule(s) applied should specify a background image to be used as the
		 * icon.
		 * 
		 * An example of specifying a custom icon class would be something like:
		 * 
		 *    // specify the property in the config for the class:
		 *    iconCls: 'my-home-icon'
		 *    
		 *    // css rule specifying the background image to be used as the icon image:
		 *    .my-home-icon {
		 *        background-image: url(../images/my-home-icon.gif) !important;
		 *    }
		 * 
		 * In addition to specifying your own classes, you can use the font icons
		 * provided in the SDK using the following syntax:
		 * 
		 *    // using Font Awesome
		 *    iconCls: 'x-fa fa-home'
		 *    
		 *    // using Pictos
		 *    iconCls: 'pictos pictos-home'
		 * 
		 * Depending on the theme you're using, you may need include the font icon
		 * packages in your application in order to use the icons included in the
		 * SDK.  For more information see:
		 * 
		 * - [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/cheatsheet/)
		 * - [Pictos icons](http://docs.sencha.com/extjs/6.0/core_concepts/font_ext.html)
		 * - [Theming Guide](http://docs.sencha.com/extjs/6.0/core_concepts/theming.html)
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		iconCls?: string;
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
		 * be set to `true`. Since `initKeyMap` is called by [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) at the
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
		 * The absolute left position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		left?: number | string;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the DataView's **`itemclick`** event passing the node clicked on. To access DOM events directly from a
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
		 * The margin to use on this Component. Can be specified as a number (in which case
		 * all edges get the same margin) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		margin?: number | string;
		/** 
		 * The maximum height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'positioned' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxHeight?: number | string;
		/** 
		 * The maximum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'positioned' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxWidth?: number | string;
		/** 
		 * The minimum height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		minHeight?: number | string;
		/** 
		 * The minimum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		minWidth?: number | string;
		/** 
		 * `true` to make this Componenrt modal. This will create a mask underneath the Component
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Component is dismissed.
		 * @cmd-auto-dependency {defaultType: "[Ext.Mask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Mask.html)"}
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		modal?: boolean;
		/** 
		 * The padding to use on this Component. Can be specified as a number (in which
		 * case all edges get the same padding) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An object or array of objects that will provide custom functionality for this
		 * component. If a string is provided or a string is one of the elements of the
		 * array, that string is treated as the `type` alias. For example, "listpaging"
		 * is the type alias for [`Ext.plugin.ListPaging`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.ListPaging.html). The full alias includes the
		 * "plugin." prefix (i.e., 'plugin.listpaging').
		 * 
		 * Plugins should derive from [`Ext.plugin.Abstract`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html) but this is not required. The
		 * only requirement for a valid plugin is that it contain an `init()` method that
		 * accepts a reference to the owning component.
		 * 
		 * When a component is created, if any plugins are available, the component will
		 * call the [`init`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html#method-init) method on each plugin,
		 * passing a reference to itself. Each plugin can then call methods or respond to
		 * events on the component as needed to provide its functionality.
		 * 
		 * ## Example code
		 * 
		 * A plugin by alias:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: 'listpaging'
		 *     });
		 * 
		 * Multiple plugins by alias:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: ['listpaging', 'pullrefresh']
		 *     });
		 * 
		 * Single plugin by class name with config options:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: {
		 *             type: 'listpaging',
		 *             autoPaging: true
		 *         }
		 *     });
		 * 
		 * Multiple plugins by type and class name with config options:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: [{
		 *             xclass: 'Ext.plugin.PullRefresh',
		 *             pullRefreshText: 'Pull to refresh...'
		 *         }, {
		 *             type: 'listpaging',
		 *             autoPaging: true
		 *         }]
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {object|string|object[]|string[]}
		 */
		plugins?: object | string | object[] | string[];
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-publishState) if the property has a
		 * setter method.  Let's use setFieldLabel as an example:
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
		 * A model instance which updates the Component's html based on it's tpl. Similar to the data
		 * configuration, but tied to to a record to make allow dynamic updates.  This must be a model
		 * instance and not a configuration of one.
		 * @configuration
		 * @optional
		 * @type {Ext.data.Model}
		 */
		record?: Ext.data.Model;
		/** 
		 * Specifies a name for this component inside its component hierarchy. This name
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for more information about references.
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
		 * Optional element to render this Component to. Usually this is not needed because
		 * a Component is normally full screen or automatically rendered inside another [Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html)
		 * @configuration
		 * @optional
		 * @type {Ext.Element}
		 */
		renderTo?: Ext.Element;
		/** 
		 * The absolute right position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		right?: number | string;
		/** 
		 * Configuration options to make this Component scrollable. Acceptable values are:
		 * 
		 * - `true` to enable auto scrolling.
		 * - `false` (or `null`) to disable scrolling - this is the default.
		 * - `x` or `horizontal` to enable horizontal scrolling only
		 * - `y` or `vertical` to enable vertical scrolling only
		 * 
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.scroll.Scroller.html)
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
		 * Animation effect to apply when the Component is being shown.  Typically you want to use an
		 * inbound animation type such as 'fadeIn' or 'slideIn'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		showAnimation?: string | any;
		/** 
		 * Additional CSS styles that will be rendered into an inline style attribute when
		 * the widget is rendered.
		 * 
		 * You can pass either a string syntax:
		 * 
		 *    style: 'background:red'
		 * 
		 * Or by using an object:
		 * 
		 *    style: {
		 *        background: 'red'
		 *    }
		 * 
		 * When using the object syntax, you can define CSS Properties by using a string:
		 * 
		 *    style: {
		 *        'border-left': '1px solid red'
		 *    }
		 * 
		 * Although the object syntax is much easier to read, we suggest you to use the
		 * string syntax for better performance.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		style?: string | object;
		/** 
		 * The class that is added to the content target when you set `styleHtmlContent` to `true`.
		 * @configuration
		 * @optional
		 * @default "x-html"
		 * @type {string}
		 */
		styleHtmlCls?: string;
		/** 
		 * `true` to automatically style the HTML inside the content target of this component (body for panels).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		styleHtmlContent?: boolean;
		/** 
		 * The title's text (can contain html tags/entities)
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		text?: string;
		/** 
		 * The alignment of the title text within the available space between the
		 * icon and the tools.
		 * @configuration
		 * @optional
		 * @default 'left'
		 * @type {'left'|'center'|'right'}
		 */
		textAlign?: 'left' | 'center' | 'right';
		/** 
		 * The tooltip for this component - can be a string to be used as innerHTML
		 * (html tags are accepted) or [Ext.tip.ToolTip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.ToolTip.html) config object.
		 * 
		 * The default behavior is to use a shared tip instance. The tooltip configuration is registered with the
		 * [Ext.tip.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.Manager.html). To enable this, your application can set the [Ext.app.Application.quickTips](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.Application.html#cfg-quickTips)
		 * config, or an instance of the [Ext.tip.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.Manager.html) may be created manually.
		 * 
		 * To force a unique tooltip instance to be created, specify `autoCreate: true` on this configuration.
		 * 
		 * Configuring this with `autoHide: false` implies `autoCreate: true` so that the desired persistent
		 * behavior can be obtained with other targets still showing the singleton instance.
		 * 
		 * @cmd-auto-dependency {defaultType: "[Ext.tip.ToolTip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.ToolTip.html)"}
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		tooltip?: string | object;
		/** 
		 * The absolute top position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		top?: number | string;
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
		 * Touch actions can be specified on reference elements using the reference element
		 * name, for example:
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
		 *    Ext.create('Ext.Widget', {
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
		 * A [String](https://docs.sencha.com/extjs/6.2.0/modern/String.html), [Ext.Template](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html) or an [Array](https://docs.sencha.com/extjs/6.2.0/modern/Array.html) of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html).
		 * Used in conjunction with the [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data) and [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * 
		 * **Note**
		 * The [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data) configuration _must_ be set for any content to be shown in the component when using this configuration.
		 * @configuration
		 * @optional
		 * @type {string|string[]|Ext.Template|Ext.XTemplate[]}
		 */
		tpl?: string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * The Ext.(X)Template method to use when
		 * updating the content area of the Component.
		 * Valid modes are:
		 * 
		 * - append
		 * - insertAfter
		 * - insertBefore
		 * - insertFirst
		 * - overwrite
		 * @configuration
		 * @optional
		 * @default 'overwrite'
		 * @type {string}
		 */
		tplWriteMode?: string;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * The ui or uis to be used on this Component
		 * 
		 * When a ui is configured, CSS class names are added to the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element), created
		 * by appending the ui name(s) to each [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) and/or [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		ui?: string | string[];
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		useBodyElement?: object;
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html). This is
		 * determined by calling `getInheritedSession`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {string|object|Ext.app.ViewModel}
		 */
		viewModel?: string | object | Ext.app.ViewModel;
		/** 
		 * The width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * By default, if this is not explicitly set, this Component's element will simply have its own natural size.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		width?: number | string;
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * @configuration
		 * @optional
		 * @default 'component'
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * The z-index to give this Component when it is rendered.
		 * 
		 * Not valid for floated Components. The Z ordering of floated
		 * Components is managed by ordering of the DOM elements.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		zIndex?: number;
		/** 
		 * Allows addition of behavior to the rendering phase.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initialize? (): void;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
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
		 * @param   {object}                  config
		 * @returns {Ext.panel.Title.Statics}        this
		 */
		initConfig? (config: object): Ext.panel.Title.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                  [value] The value to set for the name parameter.
		 * @returns {Ext.panel.Title.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.panel.Title.Statics;
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
		 * @returns {Ext.panel.Title.Statics}  
		 */
		statics? (): Ext.panel.Title.Statics;
	}
}
declare namespace Ext.panel.Tool {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.panel.Tool](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html)
	 * This class is used to display small visual icons in the header of a panel. There are a set of
	 * 25 icons that can be specified by using the [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type) config. The [handler](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-handler) config
	 * can be used to provide a function that will respond to any click events. In general, this class
	 * will not be instantiated directly, rather it will be created by specifying the [Ext.Panel.tools](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html#cfg-tools)
	 * configuration on the Panel itself.
	 * 
	 *    Ext.create('Ext.Panel', {
	 *        title: 'A Panel',
	 *        fullscreen: true,
	 *    
	 *        tools: [{
	 *            type: 'help',
	 *            handler: function() {
	 *                // show help here
	 *            }
	 *        }, {
	 *            itemId: 'refresh',
	 *            type: 'refresh',
	 *            hidden: true,
	 *            handler: function () {
	 *                // do refresh
	 *            }
	 *        }, {
	 *            type: 'search',
	 *            handler: function (panel) {
	 *                // do search
	 *                panel.down('#refresh').show();
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * If `true`, then, when [showBy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-showBy) or alignTo fallback on
		 * constraint violation only takes place along the major align axis.
		 * 
		 * That is, if alignment `"l-r"` is being used, and `axisLock: true` is used, then if constraints
		 * fail, only fallback to `"r-l"` is considered.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		axisLock?: boolean;
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'tool'
		 * @type {string|boolean}
		 */
		baseCls?: string | boolean;
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html#method-bind). The
		 * `ViewModel` instance is determined by `lookupViewModel`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {object}
		 */
		bind?: object;
		/** 
		 * Enables or disables bordering on this component.
		 * The following values are accepted:
		 * 
		 * - `null` or `true (default): Do nothing and allow the border to be specified by the theme.
		 * - `false`: suppress the default border provided by the theme.
		 * 
		 * Please note that enabling bordering via this config will not add a `border-color`
		 * or `border-style` CSS property to the component; you provide the `border-color`
		 * and `border-style` via CSS rule or [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style) configuration
		 * (if not already provide by the theme).
		 * 
		 * ## Using [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style):
		 * 
		 *    Ext.Viewport.add({
		 *        centered: true,
		 *        width: 100,
		 *        height: 100,
		 *    
		 *        style: 'border: 1px solid blue;'
		 *        // ...
		 *    });
		 * 
		 * ## Using CSS:
		 * 
		 *    Ext.Viewport.add({
		 *        centered: true,
		 *        width: 100,
		 *        height: 100,
		 *    
		 *        cls: 'my-component'
		 *        // ...
		 *    });
		 * 
		 * And your CSS file:
		 * 
		 *    .my-component {
		 *        border: 1px solid red;
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		border?: boolean;
		/** 
		 * The absolute bottom position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		bottom?: number | string;
		/** 
		 * Configure this as `true` to have this Component centered within its Container.
		 * Setting this value to `true` will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		centered?: boolean;
		/** 
		 * The CSS class to add to this widget's element, in
		 * addition to the [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls). In many cases, this property will be specified
		 * by the derived widget class. See [userCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-userCls) for adding additional CSS
		 * classes to widget instances (such as items in a [Ext.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html)).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		cls?: string | string[];
		/** 
		 * The configured element will automatically be
		 * added as the content of this component. When you pass a string, we expect it to be an element id.
		 * If the content element is hidden, we will automatically show it.
		 * @configuration
		 * @optional
		 * @type {Ext.Element|HTMLElement|string}
		 */
		contentEl?: Ext.Element | HTMLElement | string;
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tpl) to
		 * update the content area of the Component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		data?: object;
		/** 
		 * If `true`, this component will be the default scope (this pointer) for events
		 * specified with string names so that the scope can be dynamically resolved. The
		 * component will automatically become the defaultListenerScope if a
		 * [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for some sample
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
		 * Whether or not this component is disabled
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		disabled?: boolean;
		/** 
		 * The dock position of this component in its container. Can be `left`, `top`, `right` or `bottom`.
		 * 
		 * **Notes**
		 * 
		 * You must use a HTML5 doctype for [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) `bottom` to work. To do this, simply add the following code to the HTML file:
		 * 
		 *    &lt;!doctype html&gt;
		 * 
		 * So your index.html file should look a little like this:
		 * 
		 *    &lt;!doctype html&gt;
		 *    &lt;html&gt;
		 *        &lt;head&gt;
		 *            &lt;title&gt;MY application title&lt;/title&gt;
		 *            ...
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		docked?: string;
		/** 
		 * Configuration options to make this Component draggable
		 * @cmd-auto-dependency {defaultType: "[Ext.behavior.Draggable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.behavior.Draggable.html)"}
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		draggable?: object;
		/** 
		 * Animation effect to apply when the Component is being shown.  Typically you want to use an
		 * inbound animation type such as 'fadeIn' or 'slideIn'.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		enterAnimation?: string | any;
		/** 
		 * Animation effect to apply when the Component is being hidden.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		exitAnimation?: string | any;
		/** 
		 * Force the component to take up 100% width and height available, by adding it
		 * to [Ext.Viewport](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Viewport.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		fullscreen?: boolean;
		/** 
		 * A function to execute when the tool is clicked.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string}
		 */
		handler?: ExtGlobalFunction | string;
		/** 
		 * The height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * By default, if this is not explicitly set, this Component's element will simply have its own natural size.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		height?: number | string;
		/** 
		 * Whether or not this Component is hidden (its CSS `display` property is set to `none`).
		 * 
		 * Defaults to `true` for floated Components.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Animation effect to apply when the Component is being hidden.  Typically you want to use an
		 * outbound animation type such as 'fadeOut' or 'slideOut'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		hideAnimation?: string | any;
		/** 
		 * When using a [modal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-modal) Component, setting this to `true` will hide the modal
		 * mask and the Container when the mask is tapped on.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hideOnMaskTap?: boolean;
		/** 
		 * Optional HTML content to render inside this Component, or a reference
		 * to an existing element on the page.
		 * @configuration
		 * @optional
		 * @type {string|Ext.Element|HTMLElement}
		 */
		html?: string | Ext.Element | HTMLElement;
		/** 
		 * An alternative to the standard list of [types](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		iconCls?: string;
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
		 * be set to `true`. Since `initKeyMap` is called by [`Ext.Component`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) at the
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
		 * The absolute left position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		left?: number | string;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the DataView's **`itemclick`** event passing the node clicked on. To access DOM events directly from a
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
		 * The margin to use on this Component. Can be specified as a number (in which case
		 * all edges get the same margin) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		margin?: number | string;
		/** 
		 * The maximum height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'positioned' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxHeight?: number | string;
		/** 
		 * The maximum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'positioned' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxWidth?: number | string;
		/** 
		 * The minimum height of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		minHeight?: number | string;
		/** 
		 * The minimum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		minWidth?: number | string;
		/** 
		 * `true` to make this Componenrt modal. This will create a mask underneath the Component
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Component is dismissed.
		 * @cmd-auto-dependency {defaultType: "[Ext.Mask](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Mask.html)"}
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		modal?: boolean;
		/** 
		 * The padding to use on this Component. Can be specified as a number (in which
		 * case all edges get the same padding) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An object or array of objects that will provide custom functionality for this
		 * component. If a string is provided or a string is one of the elements of the
		 * array, that string is treated as the `type` alias. For example, "listpaging"
		 * is the type alias for [`Ext.plugin.ListPaging`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.ListPaging.html). The full alias includes the
		 * "plugin." prefix (i.e., 'plugin.listpaging').
		 * 
		 * Plugins should derive from [`Ext.plugin.Abstract`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html) but this is not required. The
		 * only requirement for a valid plugin is that it contain an `init()` method that
		 * accepts a reference to the owning component.
		 * 
		 * When a component is created, if any plugins are available, the component will
		 * call the [`init`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html#method-init) method on each plugin,
		 * passing a reference to itself. Each plugin can then call methods or respond to
		 * events on the component as needed to provide its functionality.
		 * 
		 * ## Example code
		 * 
		 * A plugin by alias:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: 'listpaging'
		 *     });
		 * 
		 * Multiple plugins by alias:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: ['listpaging', 'pullrefresh']
		 *     });
		 * 
		 * Single plugin by class name with config options:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: {
		 *             type: 'listpaging',
		 *             autoPaging: true
		 *         }
		 *     });
		 * 
		 * Multiple plugins by type and class name with config options:
		 * 
		 *     var list = Ext.create({
		 *         xtype: 'list',
		 *         itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *         store: 'Items',
		 *    
		 *         plugins: [{
		 *             xclass: 'Ext.plugin.PullRefresh',
		 *             pullRefreshText: 'Pull to refresh...'
		 *         }, {
		 *             type: 'listpaging',
		 *             autoPaging: true
		 *         }]
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {object|string|object[]|string[]}
		 */
		plugins?: object | string | object[] | string[];
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#method-publishState) if the property has a
		 * setter method.  Let's use setFieldLabel as an example:
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
		 * A model instance which updates the Component's html based on it's tpl. Similar to the data
		 * configuration, but tied to to a record to make allow dynamic updates.  This must be a model
		 * instance and not a configuration of one.
		 * @configuration
		 * @optional
		 * @type {Ext.data.Model}
		 */
		record?: Ext.data.Model;
		/** 
		 * Specifies a name for this component inside its component hierarchy. This name
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) for more information about references.
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
		 * Optional element to render this Component to. Usually this is not needed because
		 * a Component is normally full screen or automatically rendered inside another [Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html)
		 * @configuration
		 * @optional
		 * @type {Ext.Element}
		 */
		renderTo?: Ext.Element;
		/** 
		 * The absolute right position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		right?: number | string;
		/** 
		 * The scope to execute the [handler](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-handler) function. Defaults to the tool.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * Configuration options to make this Component scrollable. Acceptable values are:
		 * 
		 * - `true` to enable auto scrolling.
		 * - `false` (or `null`) to disable scrolling - this is the default.
		 * - `x` or `horizontal` to enable horizontal scrolling only
		 * - `y` or `vertical` to enable vertical scrolling only
		 * 
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.scroll.Scroller.html)
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
		 * Animation effect to apply when the Component is being shown.  Typically you want to use an
		 * inbound animation type such as 'fadeIn' or 'slideIn'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		showAnimation?: string | any;
		/** 
		 * Specify as false to allow click event to propagate.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Additional CSS styles that will be rendered into an inline style attribute when
		 * the widget is rendered.
		 * 
		 * You can pass either a string syntax:
		 * 
		 *    style: 'background:red'
		 * 
		 * Or by using an object:
		 * 
		 *    style: {
		 *        background: 'red'
		 *    }
		 * 
		 * When using the object syntax, you can define CSS Properties by using a string:
		 * 
		 *    style: {
		 *        'border-left': '1px solid red'
		 *    }
		 * 
		 * Although the object syntax is much easier to read, we suggest you to use the
		 * string syntax for better performance.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		style?: string | object;
		/** 
		 * The class that is added to the content target when you set `styleHtmlContent` to `true`.
		 * @configuration
		 * @optional
		 * @default "x-html"
		 * @type {string}
		 */
		styleHtmlCls?: string;
		/** 
		 * `true` to automatically style the HTML inside the content target of this component (body for panels).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		styleHtmlContent?: boolean;
		/** 
		 * The owner to report to the `handler` method. Default is `null` for the `parent`.
		 * This is automatically set to the owning [`Ext.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html) when a tool is created as a
		 * member of a panel's `tools`.
		 * @configuration
		 * @optional
		 * @type {Ext.Component}
		 */
		toolOwner?: Ext.Component;
		/** 
		 * The tooltip for this component - can be a string to be used as innerHTML
		 * (html tags are accepted) or [Ext.tip.ToolTip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.ToolTip.html) config object.
		 * 
		 * The default behavior is to use a shared tip instance. The tooltip configuration is registered with the
		 * [Ext.tip.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.Manager.html). To enable this, your application can set the [Ext.app.Application.quickTips](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.Application.html#cfg-quickTips)
		 * config, or an instance of the [Ext.tip.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.Manager.html) may be created manually.
		 * 
		 * To force a unique tooltip instance to be created, specify `autoCreate: true` on this configuration.
		 * 
		 * Configuring this with `autoHide: false` implies `autoCreate: true` so that the desired persistent
		 * behavior can be obtained with other targets still showing the singleton instance.
		 * 
		 * @cmd-auto-dependency {defaultType: "[Ext.tip.ToolTip](https://docs.sencha.com/extjs/6.2.0/modern/Ext.tip.ToolTip.html)"}
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		tooltip?: string | object;
		/** 
		 * The absolute top position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'positioned', which means it will no
		 * longer participate in the layout of the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		top?: number | string;
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
		 * Touch actions can be specified on reference elements using the reference element
		 * name, for example:
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
		 *    Ext.create('Ext.Widget', {
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
		 * A [String](https://docs.sencha.com/extjs/6.2.0/modern/String.html), [Ext.Template](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html) or an [Array](https://docs.sencha.com/extjs/6.2.0/modern/Array.html) of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.2.0/modern/Ext.XTemplate.html).
		 * Used in conjunction with the [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data) and [tplWriteMode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * 
		 * **Note**
		 * The [data](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-data) configuration _must_ be set for any content to be shown in the component when using this configuration.
		 * @configuration
		 * @optional
		 * @type {string|string[]|Ext.Template|Ext.XTemplate[]}
		 */
		tpl?: string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * The Ext.(X)Template method to use when
		 * updating the content area of the Component.
		 * Valid modes are:
		 * 
		 * - append
		 * - insertAfter
		 * - insertBefore
		 * - insertFirst
		 * - overwrite
		 * @configuration
		 * @optional
		 * @default 'overwrite'
		 * @type {string}
		 */
		tplWriteMode?: string;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * The type of tool to render. The following types are available:
		 * 
		 * ## Neptune Theme
		 * 
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAMQfAGZmZqamptbW1nNzc9nZ2eXl5ampqfv7+2pqanR0dNjY2H5+fnh4eGdnZ2xsbG5ubtfX129vb2hoaObm5qWlpaqqqvr6+qSkpI+Pj21tbY6OjoCAgH19fWlpaX9/f////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRTk3OUEzMjlBQTQxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRTk3OUEzMzlBQTQxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNFOTc5QTMwOUFBNDExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNFOTc5QTMxOUFBNDExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAHwAsAAAAABAAEAAABYLgJ35TtSCIV03jeAQNIM/NZbnYrM/aIQYARyChSwQcgMCnIAFQPoSBbED4UACSgkHGqCoiEQWUITMsZgPIRyD4QKSyk+7RXj90qHldcJ9lzlNqbG5wABtbAF0fX2FjZUxJUHBUH0BZlUFDRUeRHwc5Ozo9LjChNTctSwYcHRmHBS0hADs=) close
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAMQUAGZmZqampqmpqfv7++Xl5Wpqan5+fmdnZ2hoaObm5o+Pj21tbaSkpI6Ojqqqqvr6+oCAgGlpaX19fX9/f////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Qzg2QTQzQjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Qzg2QTQzQzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNFOTc5QTM0OUFBNDExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDODZBNDNBOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAFAAsAAAAABAAEAAABVAgJVKJYxTF5CTjOAQHIM8H87jKrM/NIAa7ICBAISCEOwRBgAwKDM3dSdaqUmQoqnUkW0CjMwgTLBMYyUoKEEykDHLNngsWrN2qS0lkISa0QgA7) minimize
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAMQYAGZmZm9vb6mpqeXl5fv7+6ampt3d3Wpqat7e3n5+fmhoaGdnZ9/f321tbY6OjqqqqoCAgPr6+qSkpObm5o+Pj319fWlpaX9/f////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Qzg2QTQzRjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Qzg2QTQ0MDlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDODZBNDNEOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDODZBNDNFOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAGAAsAAAAABAAEAAABWogJmLTkxzH9UzjSBQLIM+LFLnUrM8OIRa7IKCAGShmAUYLI1MMBEhAsjUTJGaGgFQpmp1mmKwU0ZWhwGFtgDxrXGUj8XoGgcLj6qrxPkJomwMYQEI6RBgEOYQAPS4wQTU3S08VFg11gSMhADs=) maximize
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAMQWAGZmZvv7++Xl5ampqaamprKysrOzs2pqamdnZ2hoaH5+fvr6+oCAgI+Pj46Ojqqqqubm5m1tbaSkpH19fX9/f2lpaf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Qzg2QTQ0MzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Qzg2QTQ0NDlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDODZBNDQxOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDODZBNDQyOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAFgAsAAAAABAAEAAABWCgJVrQoxwH9UDjGBAIIM+ItLjNLBe6E4gEnczCmxEsgoQQICoCEoLBktmcDRTTVvGU1QJQAEPLMo1gw60pQyoTi6aD5My9hFqCc7LwaAnk5kI+LjBLNTdjURMVEWsCLSEAOw==) restore
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUkAGZmZmpqaqmpqaampvv7++Xl5WhoaGdnZ35+fubm5qqqqo+Pj6SkpPr6+oCAgH19fW1tbY6Oju7u7re3t39/f/X19cfHx/7+/sjIyG5ubuTk5MDAwHd3d2lpabW1tYGBgZeXl29vb9fX1/b29v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RUQwMTJEQTlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RUQwMTJEQjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFRDAxMkQ4OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFRDAxMkQ5OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAJAAsAAAAABAAEAAABnFAkpCUUCACAYoiMRwSBgeAdHpgNJyLqXYaIQgH2zBgQCoYth/LeWooCLYcCcmzFSC0Ic0QpD1OAyJNIw9/AVIHGE1CCRlSEHcAE4okFxUbUg5vYmECZptabSRgn1JkJARZn11OUGFVV4puDx0QmQVNQQA7) toggle
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUqAGZmZvf394mJifX19WhoaGdnZ2tra/b29n9/f4yMjNLS0u/v7+np6Y2NjfDw8KCgoJeXl+bm5m9vb8bGxnd3d/Ly8uLi4mpqapiYmJqamvT09L6+vnh4ePHx8bCwsLi4uOjo6Le3t62trW1tbdPT06+vr3l5ebGxsePj47y8vP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RUQwMTJERTlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RUQwMTJERjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFRDAxMkRDOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFRDAxMkREOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAKgAsAAAAABAAEAAABoxAlXB4AAAOw6QqoFChPMaSReUIDAMCgsDILTw4AqtqQeGauYSm8MGVQCASbmIIKhgTA+EgYSwwVAMhRgYVSRUGRh8DZg1KKg1nXAKOW1wDKUYEf0MMBEYbeR2IAAgRQhEIRhcLQxhdCAh2RiJDJJ6RXBSsSwImJyNmBhlaYksOKhoTRhN5CsVKRUeOQQA7) gear
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUkAGZmZmpqaqmpqaampvv7++Xl5WhoaGdnZ35+fubm5qqqqo+Pj6SkpPr6+oCAgH19fW1tbY6Oju7u7re3t39/f/X19cfHx/7+/sjIyG5ubuTk5MDAwHd3d2lpabW1tYGBgZeXl29vb9fX1/b29v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RUQwMTJFMjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NTk0OEQzQzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFRDAxMkUwOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFRDAxMkUxOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAJAAsAAAAABAAEAAABnJAkpCUUFACAYQiMRw2GAeAdHoYEIaEyHQ7XVxJAy7gMNkOSAUDN4AhbQ0FATckEnIFiC1HM+QiAlMfEk1rEFMWTW5bAQ5TBh6EWwhyWyAjJBd3aVwPCRVvBWBiGRtmQlliW15OUGJVX01xDhAdDwKhQ0EAOw==) prev
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUkAGZmZmpqaqmpqaampvv7++Xl5WhoaGdnZ35+fubm5qqqqo+Pj6SkpPr6+oCAgH19fW1tbY6Oju7u7re3t39/f/X19cfHx/7+/sjIyG5ubuTk5MDAwHd3d2lpabW1tYGBgZeXl29vb9fX1/b29v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NTk0OEQzRjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NTk0OEQ0MDlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1OTQ4RDNEOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1OTQ4RDNFOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAJAAsAAAAABAAEAAABnJAkpCUUFACAYQiMRw2GAeAdHoYEIaEyHQ7XVxJg+0kyh2QCoYtCRPgGgoCrlAU4goQcqGGs0W01UMSH1MBEHlDFoQOhyQeaVIIcVsXJCMgdmhbFQkPbgVgWxsZXABmJFmkW15OUKRVX01wDhAdDwKfQ0EAOw==) next
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhCgAQAMQZAGZmZvT09NHR0XNzc729vW5ubo2NjWpqavX19bCwsL6+vtLS0vz8/Pf395SUlLGxsXJycry8vMnJybi4uG1tbfr6+rKysnx8fH19ff///wAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NTk0OEQ0MzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NTk0OEQ0NDlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1OTQ4RDQxOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1OTQ4RDQyOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAGQAsAAAAAAoAEAAABVNglgkGRRmCmCVA6yYjcBABQhwACURqNgGGAiDQCwAKg2ERMHDsej+HREZA2HCSCsTlglQyD27LIgoIXQWiKPzqNZLMRi+jaCnmGcYFw8BnFgs9IQA7) pin
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhCgAQAMQbAGZmZvT09L29vff3942NjWpqanNzc21tbfX19XBwcLi4uJSUlNLS0ry8vNHR0bCwsNDQ0Pv7+3V1dX19fcnJyfz8/Lm5uW5ubr6+vrGxsbKysv///wAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNTcyRjZBNjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNTcyRjZBNzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1OTQ4RDQ1OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1OTQ4RDQ2OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAGwAsAAAAAAoAEAAABVXgJm4MM57VNFWniAEA1g4GbAynBsPZOCQ7QAK3sQRhlk1EcgRIIhRAQRBACAoAygLQOCkAi1rgFABcLoDxqHwgcL0AgkMqQFixjs2j+RhBCAdtECIhADs=) unpin
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUgAGZmZvv7++Xl5ampqaampmhoaGpqan5+fmdnZ+bm5pWVlfr6+pGRkaenp6SkpLu7u5mZmbKyssXFxY+Pj46Ojm1tbaysrICAgPn5+aqqqsPDw7e3t2lpaX19fX9/f7a2tv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNTcyRjZBQTlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNTcyRjZBQjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1NzJGNkE4OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI1NzJGNkE5OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAIAAsAAAAABAAEAAABnBAkBCUyHgMhkMmMRwuHAiAdIogBIYBynQ7nVxBhGlB0+ACCCBBYSoRWrgFwWAL+Ua4gwNX8f1sDwZmDBhCD1MGFYKEIIZSBhd7Xxt/c1N1QndbA2psbnACYGJkZmggWWZbXk5QZlVfTXIXFRwdm01BADs=) right
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUgAGZmZvv7++Xl5ampqaampmhoaGpqan5+fmdnZ+bm5pWVlfr6+pGRkaenp6SkpLu7u5mZmbKyssXFxY+Pj46Ojm1tbaysrICAgPn5+aqqqsPDw7e3t2lpaX19fX9/f7a2tv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNTcyRjZBRTlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNTcyRjZBRjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1NzJGNkFDOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI1NzJGNkFEOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAIAAsAAAAABAAEAAABnRAkBCUyHgMhkMmMRwuHAiAdIogBIYBynQ7nVxBBC6goSlMCSCBeWsRSqYFwYAbEQYg28Fhu7EruAcGUw9CGAxiBhWDhYdcBhdbH36Ac1t1IHd5alxtIG9ScWBiZGsAaJhaYl1fIE9RXFWsQ3IXFRwdAwJNQQA7) left
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUgAGZmZvv7++Xl5ampqaampmhoaGpqan5+fmdnZ+bm5pWVlfr6+pGRkaenp6SkpLu7u5mZmbKyssXFxY+Pj46Ojm1tbaysrICAgPn5+aqqqsPDw7e3t2lpaX19fX9/f7a2tv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENUNDODdFNzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENUNDODdFODlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1NzJGNkIwOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ1Q0M4N0U2OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAIAAsAAAAABAAEAAABntAkBAkGHQ4lctAMBwGCAiAdIpwLJyTqXZKCQgJ2zCAQCyIt4WitCCBaCESM2BwkGpAAYVU4dVILwZSDUIBDAxeIA1SFYFSFkIYGEIWUwZ1UxFNEVoHA1sbQh9bS3JTDw9oTGBnU2R4WaxdTlBhVVdNIAkZBwYGHhkJTUEAOw==) down
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUgAGZmZvv7++Xl5ampqaampmhoaGpqan5+fmdnZ+bm5pWVlfr6+pGRkaenp6SkpLu7u5mZmbKyssXFxY+Pj46Ojm1tbaysrICAgPn5+aqqqsPDw7e3t2lpaX19fX9/f7a2tv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENUNDODdFQjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENUNDODdFQzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1Q0M4N0U5OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ1Q0M4N0VBOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAIAAsAAAAABAAEAAABnpAkBCUyBwMBk8mMRwGCAiAdIpwLJyTqXZKCQgJ2zCAABIUto/HtiAYbDfCz3Zw0EaaEe1xahFiMEIWU0hSDUIBDAxeIA1SFXUAGiABClIKXhpSF24ABRIQWhASZwADZmJrAiBgqFNkk1mtXU5QYVVXTWUDHRwVm6pDQQA7) up
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUuAGZmZq2trfv7+2dnZ3p6empqamhoaLOzs6ampqmpqX5+fqSkpPr6+ubm5s7OzrKysvj4+Kenp39/f+Xl5bCwsI6Ojq+vr/39/YuLi8zMzIODg+Tk5Pz8/NDQ0GlpadHR0ZOTk4+Pj6qqqqWlpWtra/n5+Xd3d66urr29vX19ff7+/tnZ2aysrMrKyv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENUNDODdFRjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENUNDODdGMDlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1Q0M4N0VEOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ1Q0M4N0VFOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAALgAsAAAAABAAEAAABoVAl9DVEEkKBQWiMTwIGSMDYEo1RDgHgEsQmhIODgcKNAAQpq4IYHASDIUfKmAifbyFEIw8YXa/83IAEgAUdy4dAYmKBQAZho+Mjo93CoSTd3wEfoYXKkJ0AHaPDxorQghrFpsuFyxlC0ICFV5gLRYmUxUlQwwLZYEDCwyGDQkpHiRKG29BADs=) refresh
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAMQVAGZmZmhoaKmpqfv7+2pqaqampubm5uXl5X9/f4+Pj6enp6qqqn5+fmdnZ21tbfr6+oCAgI6OjqWlpWlpaX19ff///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUEwNjdFMjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUEwNjdFMzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1QTA2N0UwOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1QTA2N0UxOUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAFQAsAAAAABAAEAAABVxgJVbGghAEshjj+BQBIM+BMoxDMu9zclcKnohXqBxiu+EucBDwAMqdAPGMzhgEWWtbkaG03JHMwah2eRCn8Cw9rnnMSuG9K1YGkefO55I0ng02XAYCFBMOaSwjIQA7) plus
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAMQVAGZmZmhoaKmpqfv7+2pqaqampubm5uXl5aenp4+Pj39/f4CAgKqqqm1tbX5+fmdnZ/r6+n19faWlpWlpaY6Ojv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUEwNjdFNjlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUEwNjdFNzlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1QTA2N0U0OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1QTA2N0U1OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAFQAsAAAAABAAEAAABVRgJVYGoxCEwhjjCBUBIM8BMoxDMu9zclcInhBQqBxiw13gIEgKBQonz0GQta4VGcqKHckaDulu0RTLBEfzslIwFysDitTnkjyEDxvWIIhMGmQsIyEAOw==) minus
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANU7AGZmZmdnZ8vLy8DAwLS0tGpqavv7+8rKyoCAgJaWlv7+/vX19cHBwbOzs+3t7bm5uWxsbI6OjsLCwpmZmbq6upiYmN3d3eHh4b29vbW1tZ2dnX19faqqqvPz8/39/WlpaYeHh4WFhezs7ImJiYuLi7i4uO/v74ODg+jo6Pj4+Hl5eeXl5e7u7uPj48TExPb29np6euTk5NDQ0I2NjZSUlGhoaLCwsG1tbYaGhnNzc2tra////wAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUEwNjdFQTlBQTUxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTE4NTU0NDlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1QTA2N0U4OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1QTA2N0U5OUFBNTExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAOwAsAAAAABAAEAAABn7AnVBocCyGSGQroQMAEBJFUigoADaVmTVhSK4KN8HQMQJwkhPAIflSfUxDDwQ23ZUAriELQKvLAA1DKQEgdQwAGEg4NShTEQAXSAcAIR1IFE9TGgA5NgISJE4ABEkKDRCiABEZAaNTCwIPDDFCA62kdUm2AA+5ugEnvkkWIkEAOw==) search
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAANANUtAGZmZvv7+/39/XNzc+vr629vb3d3d9/f33Fxcaqqqurq6pWVle7u7ufn52xsbHR0dKioqOPj46ysrPLy8uXl5aKioujo6O/v79fX17q6umdnZ5iYmKCgoIyMjHBwcNra2q+vr3l5eZycnJeXl9vb23x8fH9/f6enp7CwsJqamuLi4rOzs5aWlv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTE4NTU0NzlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTE4NTU0ODlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFMTg1NTQ1OUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFMTg1NTQ2OUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAALQAsAAAAABAADQAABljAlnBIFAZYn6KyFVgACoflUJACWDtSIccKME2EBOWJW7oIE4gIUcINMYQo66AhXHENYSHorshwHxZFEFwDGnIUSxVcVh4qUgIiXFBZLQIjAA4klEYbGFlBADs=) save
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQANUqAGZmZmhoaKmpqfv7+2pqaqampvr6+uXl5ebm5qenp4+Pj39/f46Ojn5+fqqqqvb29oCAgO7u7m1tbbS0tNvb2/39/WdnZ8/Pz+vr63t7e6Ojo6WlpcjIyLKyss7Ozn19fWlpafT09NnZ2YODg9DQ0Jubm7y8vHBwcIaGht3d3f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTE4NTU0QjlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTE4NTU0QzlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFMTg1NTQ5OUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFMTg1NTRBOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAKgAsAAAAABAAEAAABn9AlVCFcCwIhIUDMRwaCgGAdBpIDIYDxXQ7VVxVCarp8eCcpgXVISrtqEQYlYd6EGwjJEBGZdgKFlsaKAAMKhFbDQRcACMhFSVbSIspBgxcEg2LFReLEHaLoAJrXBMTXAEHKgVcFBRcaSoDlqBSXk4bFosWVk1CCAIfIBKeTENBADs=) help
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAOAKIFAGZmZnV1ddPT03R0dHZ2dv///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTFFNEY3QzlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTFFNEY3RDlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFMTg1NTREOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFMTg1NTRFOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAABQAsAAAAABAADgAAAyxYCtyusLgJor1RBEqD5twGjhW2TBKXPmVUUSvaiNL1AoMw3DBACC6bCRRJAAA7) print
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAQAIABAGZmZv///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTFFNEY4MDlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTFFNEY4MTlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1MUU0RjdFOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM1MUU0RjdGOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAABAAEAAAAh+EHakbh8wcgNHRJW/UvDcPQlNIflTGodP6SaOGwk4BADs=) expand
		 * - https://docs.sencha.com/extjs/6.2.0/modern/![](data:image/gif;base64,R0lGODlhEAAOAIABAGZmZv///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTFFNEY4NDlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTFFNEY4NTlBQTYxMUU0OEVCNUNFMTgyMDM3Mzc3MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1MUU0RjgyOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM1MUU0RjgzOUFBNjExRTQ4RUI1Q0UxODIwMzczNzcxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAABAADgAAAhyEHakbh8wcAq1SSeGSuvsPhmLkgNyHWWqKll8BADs=) collapse
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		type?: string;
		/** 
		 * The ui or uis to be used on this Component
		 * 
		 * When a ui is configured, CSS class names are added to the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element), created
		 * by appending the ui name(s) to each [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) and/or [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-baseCls).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		ui?: string | string[];
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		useBodyElement?: object;
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html). This is
		 * determined by calling `getInheritedSession`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {string|object|Ext.app.ViewModel}
		 */
		viewModel?: string | object | Ext.app.ViewModel;
		/** 
		 * The width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * By default, if this is not explicitly set, this Component's element will simply have its own natural size.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		width?: number | string;
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * @configuration
		 * @optional
		 * @default 'component'
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * The z-index to give this Component when it is rendered.
		 * 
		 * Not valid for floated Components. The Z ordering of floated
		 * Components is managed by ordering of the DOM elements.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		zIndex?: number;
		/** 
		 * Allows addition of behavior to the rendering phase.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		initialize? (): void;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
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
		 * @param   {object}                 config
		 * @returns {Ext.panel.Tool.Statics}        this
		 */
		initConfig? (config: object): Ext.panel.Tool.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                 [value] The value to set for the name parameter.
		 * @returns {Ext.panel.Tool.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.panel.Tool.Statics;
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
		 * @returns {Ext.panel.Tool.Statics}  
		 */
		statics? (): Ext.panel.Tool.Statics;
	}
}
declare namespace Ext.panel.Header {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.panel.Header](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Header.html)
	 * This container class is used to manage the items (such as title and tools) for [`Ext.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html).
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires whenever item within the Container is activated.
		 * @event
		 * @param   {object}        newActiveItem The new active item within the container.
		 * @param   {Ext.Container} _this         The Container instance.
		 * @param   {object}        oldActiveItem The old active item within the container.
		 * @param   {object}        eOpts         The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		activate? (newActiveItem: object, _this: Ext.Container, oldActiveItem: object, eOpts: object): void;
		/** 
		 * Fires when the [activeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#cfg-activeItem) configuration is changed by [setActiveItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html#method-setActiveItem).
		 * @event
		 * @param   {Ext.Container}        _this    The [Ext.Container](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Container.html) instance.
		 * @param   {object|string|number} value    The new value being set.
		 * @param   {object|string|number} oldValue The existing value.
		 * @param   {object}               eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                 
		 */
		activeitemchange? (_this: Ext.Container, value: object | string | number, oldValue: object | string | number, eOpts: object): void;
		/** 
		 * Fires whenever item added to the Container.
		 * @event
		 * @param   {Ext.Container} _this The Container instance.
		 * @param   {object}        item  The item added to the Container.
		 * @param   {number}        index The index of the item within the Container.
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		add? (_this: Ext.Container, item: object, index: number, eOpts: object): void;
		/** 
		 * Fires after a Component had been added to a Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Parent Container
		 * @param   {number}        index     The index of the item within the Container.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		added? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires before the Component is hidden. Hide may be vetoed by returning `false` from a handler.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforehide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		beforeorientationchange? (eOpts: object): void;
		/** 
		 * Fires before the Component is shown. Show may be vetoed by returning `false` from a handler.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforeshow? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) configuration is changed by [setBottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setBottom).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		bottomchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered) configuration is changed by [setCentered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setCentered).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		centeredchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever item within the Container is deactivated.
		 * @event
		 * @param   {object}        oldActiveItem The old active item within the container.
		 * @param   {Ext.Container} _this         The Container instance.
		 * @param   {object}        newActiveItem The new active item within the container.
		 * @param   {object}        eOpts         The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		deactivate? (oldActiveItem: object, _this: Ext.Container, newActiveItem: object, eOpts: object): void;
		/** 
		 * Fires when the component is destroyed
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		destroy? (eOpts: object): void;
		/** 
		 * Fires when the [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled) configuration is changed by [setDisabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setDisabled).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disabledchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) configuration is changed by [setDocked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setDocked).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {string}        value    The new value being set.
		 * @param   {string}        oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		dockedchange? (_this: Ext.Component, value: string, oldValue: string, eOpts: object): void;
		/** 
		 * Fires when the component is no longer displayed in the DOM.  Listening to this event will
		 * degrade performance not recommend for general use.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		erased? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the positioned status of a component
		 * @event
		 * @param   {Ext.Component} _this      The component instance
		 * @param   {boolean}       positioned
		 * The component's new positioned state. This becomes
		 * `true` is a component is positioned using the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) or [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configs.
		 * @param   {object}        eOpts      The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		floatingchange? (_this: Ext.Component, positioned: boolean, eOpts: object): void;
		/** 
		 * Fires whenever a Component with the fullscreen config is instantiated
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		fullscreen? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height) configuration is changed by [setHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setHeight).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		heightchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden) configuration is changed by [setHidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setHidden).
		 * @event
		 * @param   {Ext.Widget} _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {boolean}    value    The new value being set.
		 * @param   {boolean}    oldValue The existing value.
		 * @param   {object}     eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}       
		 */
		hiddenchange? (_this: Ext.Widget, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever the Component is hidden
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component has been initialized
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		initialize? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configuration is changed by [setLeft](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setLeft).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		leftchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight) configuration is changed by [setMaxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMaxHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth) configuration is changed by [setMaxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMaxWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight) configuration is changed by [setMinHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMinHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth) configuration is changed by [setMinWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMinWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever item moved within the Container.
		 * @event
		 * @param   {Ext.Container} _this     The Container instance.
		 * @param   {object}        item      The item moved within the Container.
		 * @param   {number}        toIndex   The new index of the item.
		 * @param   {number}        fromIndex The old index of the item.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		move? (_this: Ext.Container, item: object, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when a component si moved within its Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        toIndex   The new index of the item.
		 * @param   {number}        fromIndex The old index of the item.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		moved? (_this: Ext.Component, container: Ext.Container, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		orientationchange? (eOpts: object): void;
		/** 
		 * Fires whenever this Element actually becomes visible (painted) on the screen. This is useful when you need to
		 * perform 'read' operations on the DOM element, i.e: calculating natural sizes and positioning.
		 * 
		 * **Note:** This event is not available to be used with event delegation. Instead `painted` only fires if you explicitly
		 * add at least one listener to it, for performance reasons.
		 * @event
		 * @param   {Ext.Element} element The component's outer element (this.element)
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		painted? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the positioned status of a component
		 * @event
		 * @param   {Ext.Component} _this      The component instance
		 * @param   {boolean}       positioned
		 * The component's new positioned state. This becomes
		 * `true` is a component is positioned using the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) or [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configs.
		 * @param   {object}        eOpts      The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		positionedchange? (_this: Ext.Component, positioned: boolean, eOpts: object): void;
		/** 
		 * Fires whenever item removed from the Container.
		 * @event
		 * @param   {Ext.Container} _this The Container instance.
		 * @param   {object}        item  The item removed from the Container.
		 * @param   {number}        index The index of the item that was removed.
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		remove? (_this: Ext.Container, item: object, index: number, eOpts: object): void;
		/** 
		 * Fires when a component is removed from a Container
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        index     The index of the item that was removed.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		removed? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires whenever an item is rendered into a container or derendered
		 * from a Container.
		 * @event
		 * @param   {Ext.Container} _this    The Container instance.
		 * @param   {object}        item     The item in the Container.
		 * @param   {boolean}       rendered The current rendered status of the item.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		renderedchange? (_this: Ext.Container, item: object, rendered: boolean, eOpts: object): void;
		/** 
		 * Important note: For the best performance on mobile devices, use this only when you absolutely need to monitor
		 * a Element's size.
		 * 
		 * **Note:** This event is not available to be used with event delegation. Instead `resize` only fires if you explicitly
		 * add at least one listener to it, for performance reasons.
		 * @event
		 * @param   {Ext.Element} element The component's outer element (this.element)
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		resize? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when the [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right) configuration is changed by [setRight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setRight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		rightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable) configuration is changed by [setScrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setScrollable).
		 * @event
		 * @param   {Ext.Component}         _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean|string|object} value    The new value being set.
		 * @param   {boolean|string|object} oldValue The existing value.
		 * @param   {object}                eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		scrollablechange? (_this: Ext.Component, value: boolean | string | object, oldValue: boolean | string | object, eOpts: object): void;
		/** 
		 * Fires whenever the Component is shown
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top) configuration is changed by [setTop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setTop).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		topchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever the data of the component is updated
		 * @event
		 * @param   {Ext.Component} _this   The component instance
		 * @param   {object}        newData The new data
		 * @param   {object}        eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		updatedata? (_this: Ext.Component, newData: object, eOpts: object): void;
		/** 
		 * Fires when the [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width) configuration is changed by [setWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setWidth).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		widthchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
	}
}
declare namespace Ext.panel.Title {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.panel.Title](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Title.html)
	 * A basic title component for a Panel Header.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires after a Component had been added to a Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Parent Container
		 * @param   {number}        index     The index of the item within the Container.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		added? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires before the Component is hidden. Hide may be vetoed by returning `false` from a handler.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforehide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		beforeorientationchange? (eOpts: object): void;
		/** 
		 * Fires before the Component is shown. Show may be vetoed by returning `false` from a handler.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforeshow? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) configuration is changed by [setBottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setBottom).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		bottomchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered) configuration is changed by [setCentered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setCentered).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		centeredchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the component is destroyed
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		destroy? (eOpts: object): void;
		/** 
		 * Fires when the [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled) configuration is changed by [setDisabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setDisabled).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disabledchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) configuration is changed by [setDocked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setDocked).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {string}        value    The new value being set.
		 * @param   {string}        oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		dockedchange? (_this: Ext.Component, value: string, oldValue: string, eOpts: object): void;
		/** 
		 * Fires when the component is no longer displayed in the DOM.  Listening to this event will
		 * degrade performance not recommend for general use.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		erased? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the positioned status of a component
		 * @event
		 * @param   {Ext.Component} _this      The component instance
		 * @param   {boolean}       positioned
		 * The component's new positioned state. This becomes
		 * `true` is a component is positioned using the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) or [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configs.
		 * @param   {object}        eOpts      The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		floatingchange? (_this: Ext.Component, positioned: boolean, eOpts: object): void;
		/** 
		 * Fires whenever a Component with the fullscreen config is instantiated
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		fullscreen? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height) configuration is changed by [setHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setHeight).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		heightchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden) configuration is changed by [setHidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setHidden).
		 * @event
		 * @param   {Ext.Widget} _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {boolean}    value    The new value being set.
		 * @param   {boolean}    oldValue The existing value.
		 * @param   {object}     eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}       
		 */
		hiddenchange? (_this: Ext.Widget, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever the Component is hidden
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component has been initialized
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		initialize? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configuration is changed by [setLeft](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setLeft).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		leftchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight) configuration is changed by [setMaxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMaxHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth) configuration is changed by [setMaxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMaxWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight) configuration is changed by [setMinHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMinHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth) configuration is changed by [setMinWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMinWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when a component si moved within its Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        toIndex   The new index of the item.
		 * @param   {number}        fromIndex The old index of the item.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		moved? (_this: Ext.Component, container: Ext.Container, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		orientationchange? (eOpts: object): void;
		/** 
		 * Fires whenever this Element actually becomes visible (painted) on the screen. This is useful when you need to
		 * perform 'read' operations on the DOM element, i.e: calculating natural sizes and positioning.
		 * 
		 * **Note:** This event is not available to be used with event delegation. Instead `painted` only fires if you explicitly
		 * add at least one listener to it, for performance reasons.
		 * @event
		 * @param   {Ext.Element} element The component's outer element (this.element)
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		painted? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the positioned status of a component
		 * @event
		 * @param   {Ext.Component} _this      The component instance
		 * @param   {boolean}       positioned
		 * The component's new positioned state. This becomes
		 * `true` is a component is positioned using the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) or [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configs.
		 * @param   {object}        eOpts      The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		positionedchange? (_this: Ext.Component, positioned: boolean, eOpts: object): void;
		/** 
		 * Fires when a component is removed from a Container
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        index     The index of the item that was removed.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		removed? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Important note: For the best performance on mobile devices, use this only when you absolutely need to monitor
		 * a Element's size.
		 * 
		 * **Note:** This event is not available to be used with event delegation. Instead `resize` only fires if you explicitly
		 * add at least one listener to it, for performance reasons.
		 * @event
		 * @param   {Ext.Element} element The component's outer element (this.element)
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		resize? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when the [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right) configuration is changed by [setRight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setRight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		rightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable) configuration is changed by [setScrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setScrollable).
		 * @event
		 * @param   {Ext.Component}         _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean|string|object} value    The new value being set.
		 * @param   {boolean|string|object} oldValue The existing value.
		 * @param   {object}                eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		scrollablechange? (_this: Ext.Component, value: boolean | string | object, oldValue: boolean | string | object, eOpts: object): void;
		/** 
		 * Fires whenever the Component is shown
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top) configuration is changed by [setTop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setTop).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		topchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever the data of the component is updated
		 * @event
		 * @param   {Ext.Component} _this   The component instance
		 * @param   {object}        newData The new data
		 * @param   {object}        eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		updatedata? (_this: Ext.Component, newData: object, eOpts: object): void;
		/** 
		 * Fires when the [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width) configuration is changed by [setWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setWidth).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		widthchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
	}
}
declare namespace Ext.panel.Tool {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.panel.Tool](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html)
	 * This class is used to display small visual icons in the header of a panel. There are a set of
	 * 25 icons that can be specified by using the [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-type) config. The [handler](https://docs.sencha.com/extjs/6.2.0/modern/Ext.panel.Tool.html#cfg-handler) config
	 * can be used to provide a function that will respond to any click events. In general, this class
	 * will not be instantiated directly, rather it will be created by specifying the [Ext.Panel.tools](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html#cfg-tools)
	 * configuration on the Panel itself.
	 * 
	 *    Ext.create('Ext.Panel', {
	 *        title: 'A Panel',
	 *        fullscreen: true,
	 *    
	 *        tools: [{
	 *            type: 'help',
	 *            handler: function() {
	 *                // show help here
	 *            }
	 *        }, {
	 *            itemId: 'refresh',
	 *            type: 'refresh',
	 *            hidden: true,
	 *            handler: function () {
	 *                // do refresh
	 *            }
	 *        }, {
	 *            type: 'search',
	 *            handler: function (panel) {
	 *                // do search
	 *                panel.down('#refresh').show();
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires after a Component had been added to a Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Parent Container
		 * @param   {number}        index     The index of the item within the Container.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		added? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires before the Component is hidden. Hide may be vetoed by returning `false` from a handler.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforehide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires before orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		beforeorientationchange? (eOpts: object): void;
		/** 
		 * Fires before the Component is shown. Show may be vetoed by returning `false` from a handler.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		beforeshow? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) configuration is changed by [setBottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setBottom).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		bottomchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [centered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-centered) configuration is changed by [setCentered](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setCentered).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		centeredchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the tool is clicked
		 * @event
		 * @param   {Ext.panel.Tool}  _this
		 * @param   {Ext.event.Event} e     The event object
		 * @param   {Ext.Component}   owner
		 * The logical owner of the tool. In a typical
		 * [`Ext.panel.Panel`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Panel.html), this is set to the owning panel. This value comes from the
		 * `toolOwner` config.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		click? (_this: Ext.panel.Tool, e: Ext.event.Event, owner: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component is destroyed
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		destroy? (eOpts: object): void;
		/** 
		 * Fires when the [disabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-disabled) configuration is changed by [setDisabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setDisabled).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disabledchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-docked) configuration is changed by [setDocked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setDocked).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {string}        value    The new value being set.
		 * @param   {string}        oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		dockedchange? (_this: Ext.Component, value: string, oldValue: string, eOpts: object): void;
		/** 
		 * Fires when the component is no longer displayed in the DOM.  Listening to this event will
		 * degrade performance not recommend for general use.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		erased? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the positioned status of a component
		 * @event
		 * @param   {Ext.Component} _this      The component instance
		 * @param   {boolean}       positioned
		 * The component's new positioned state. This becomes
		 * `true` is a component is positioned using the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) or [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configs.
		 * @param   {object}        eOpts      The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		floatingchange? (_this: Ext.Component, positioned: boolean, eOpts: object): void;
		/** 
		 * Fires whenever a Component with the fullscreen config is instantiated
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		fullscreen? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [height](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-height) configuration is changed by [setHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setHeight).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		heightchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [hidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-hidden) configuration is changed by [setHidden](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setHidden).
		 * @event
		 * @param   {Ext.Widget} _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {boolean}    value    The new value being set.
		 * @param   {boolean}    oldValue The existing value.
		 * @param   {object}     eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}       
		 */
		hiddenchange? (_this: Ext.Widget, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever the Component is hidden
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component has been initialized
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		initialize? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configuration is changed by [setLeft](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setLeft).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		leftchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxHeight) configuration is changed by [setMaxHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMaxHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-maxWidth) configuration is changed by [setMaxWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMaxWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minHeight) configuration is changed by [setMinHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMinHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-minWidth) configuration is changed by [setMinWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setMinWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when a component si moved within its Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        toIndex   The new index of the item.
		 * @param   {number}        fromIndex The old index of the item.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		moved? (_this: Ext.Component, container: Ext.Container, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		orientationchange? (eOpts: object): void;
		/** 
		 * Fires whenever this Element actually becomes visible (painted) on the screen. This is useful when you need to
		 * perform 'read' operations on the DOM element, i.e: calculating natural sizes and positioning.
		 * 
		 * **Note:** This event is not available to be used with event delegation. Instead `painted` only fires if you explicitly
		 * add at least one listener to it, for performance reasons.
		 * @event
		 * @param   {Ext.Element} element The component's outer element (this.element)
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		painted? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the positioned status of a component
		 * @event
		 * @param   {Ext.Component} _this      The component instance
		 * @param   {boolean}       positioned
		 * The component's new positioned state. This becomes
		 * `true` is a component is positioned using the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right),
		 * [bottom](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-bottom) or [left](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-left) configs.
		 * @param   {object}        eOpts      The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		positionedchange? (_this: Ext.Component, positioned: boolean, eOpts: object): void;
		/** 
		 * Fires when a component is removed from a Container
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        index     The index of the item that was removed.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		removed? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Important note: For the best performance on mobile devices, use this only when you absolutely need to monitor
		 * a Element's size.
		 * 
		 * **Note:** This event is not available to be used with event delegation. Instead `resize` only fires if you explicitly
		 * add at least one listener to it, for performance reasons.
		 * @event
		 * @param   {Ext.Element} element The component's outer element (this.element)
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		resize? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when the [right](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-right) configuration is changed by [setRight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setRight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		rightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-scrollable) configuration is changed by [setScrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setScrollable).
		 * @event
		 * @param   {Ext.Component}         _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {boolean|string|object} value    The new value being set.
		 * @param   {boolean|string|object} oldValue The existing value.
		 * @param   {object}                eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		scrollablechange? (_this: Ext.Component, value: boolean | string | object, oldValue: boolean | string | object, eOpts: object): void;
		/** 
		 * Fires whenever the Component is shown
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [top](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#cfg-top) configuration is changed by [setTop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html#method-setTop).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		topchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever the data of the component is updated
		 * @event
		 * @param   {Ext.Component} _this   The component instance
		 * @param   {object}        newData The new data
		 * @param   {object}        eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		updatedata? (_this: Ext.Component, newData: object, eOpts: object): void;
		/** 
		 * Fires when the [width](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-width) configuration is changed by [setWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setWidth).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		widthchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
	}
}