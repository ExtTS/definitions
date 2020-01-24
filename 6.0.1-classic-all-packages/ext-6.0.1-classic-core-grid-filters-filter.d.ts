declare namespace Ext.grid.filters.filter {
	/** 
	 * [Ext.grid.filters.filter.Base](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html)
	 * Abstract base class for filter implementations.
	 */
	class Base extends Ext.Base {
		/** 
		 * True if this filter is active. Use setActive() to alter after configuration. If
		 * you set a value, the filter will be actived automatically.
		 * @property
		 * @public (property)
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Factory.html).
		 * @property
		 * @public (property)
		 * @default {type: 'grid.filter'}
		 * @type {object}
		 */
		factoryConfig?: object;
		/** 
		 * The filter configuration menu that will be installed into the filter submenu of a column menu.
		 * @property
		 * @public (property)
		 * @type {Ext.menu.Menu}
		 */
		menu?: Ext.menu.Menu;
		/** 
		 * The filter type. Used by the filters.Feature class when adding filters and applying state.
		 * @property
		 * @public (property)
		 * @default 'string'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.Base.Statics}
		 */
		self?: Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'data'
		 * @type {string}
		 */
		defaultRoot?: string;
		/** 
		 * The prefix for id's used to track stateful Store filters.
		 * @property
		 * @private (property)
		 * @default Ext.baseCSSPrefix + 'gridfilter'
		 * @type {string}
		 */
		filterIdPrefix?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isGridFilter?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'factoryable'
		 * @type {string}
		 */
		mixinId?: string;
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
		 * @param   {object}                                members    The members to add to this class.
		 * @param   {boolean}                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                members
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                members
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                name
		 * @param   {object}                                member
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                fn
		 * @param   {object}                                scope
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Initializes the filter given its configuration.
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                config
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Creates the Menu for this filter.
		 * @method
		 * @private (method)
		 * @param   {object}        config Filter configuration
		 * @returns {Ext.menu.Menu}        
		 */
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @template
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                              names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Boolean.html)
	 * The boolean grid filter allows you to create a filter selection that limits results
	 * to values matching true or false.  The filter can be set programmatically or via
	 * user input with a configurable [radio field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Radio.html) in the filter section
	 * of the column header.
	 * 
	 * Boolean filters use unique radio group IDs, so you may utilize more than one.
	 * 
	 * Example Boolean Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', 'visible'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', visible: true},
	 *            {id: 1, show: 'Doctor Who', visible: true},
	 *            {id: 2, show: 'Farscape', visible: false},
	 *            {id: 3, show: 'Firefly', visible: true},
	 *            {id: 4, show: 'Star Trek', visible: true},
	 *            {id: 5, show: 'Star Wars: Christmas Special', visible: false}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'visible',
	 *            text: 'Visibility',
	 *            width: 125,
	 *            filter: {
	 *                type: 'boolean',
	 *                value: 'true',
	 *                yesText: 'True',
	 *                noText: 'False'
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	class Boolean extends Ext.grid.filters.filter.SingleFilter {
		/** 
		 * The filter type. Used by the filters.Feature class when adding filters and applying state.
		 * @property
		 * @public (property)
		 * @default 'boolean'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.Boolean.Statics}
		 */
		self?: Ext.grid.filters.filter.Boolean.Statics | Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
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
		 * @param   {object}                                                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Boolean;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                     members
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Boolean;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                     members
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Boolean;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                     name
		 * @param   {object}                                                                                                     member
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Boolean;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                     fn
		 * @param   {object}                                                                                                     scope
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Boolean;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Initializes the filter given its configuration.
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                     [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Boolean;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.SingleFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                                                     config
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Boolean;
		initConfig? (config: object): Ext.grid.filters.filter.SingleFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Boolean.Statics|Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Boolean.Statics;
		statics? (): Ext.grid.filters.filter.SingleFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Template method that is to initialize the filter and install required menu items.
		 * @method
		 * @private (method)
		 * @param   {object}             config
		 * @returns {void|Ext.menu.Menu}        
		 */
		createMenu? (config: object): void;
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {object}       The 'serialized' form of this filter
		 */
		getValue? (field: object): object;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.Base.getValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#method-getValue).
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		onFilterRemove? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                                   names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.Boolean;
		unlink? (names: string[]): Ext.grid.filters.filter.SingleFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html)
	 * The date grid filter allows you to create a filter selection that limits results
	 * to values matching specific date constraints.  The filter can be set programmatically or via
	 * user input with a configurable [DatePicker menu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html) in the filter section
	 * of the column header.
	 * 
	 * Example Date Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', {
	 *              name: 'airDate',
	 *              type: 'date',
	 *              dateFormat: 'Y-m-d'
	 *        }],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', airDate: '1978-09-17'},
	 *            {id: 1, show: 'Doctor Who', airDate: '1963-11-23'},
	 *            {id: 2, show: 'Farscape', airDate: '1999-03-19'},
	 *            {id: 3, show: 'Firefly', airDate: '2002-12-20'},
	 *            {id: 4, show: 'Star Trek', airDate: '1966-09-08'},
	 *            {id: 5, show: 'Star Wars: Christmas Special', airDate: '1978-11-17'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            xtype: 'datecolumn',
	 *            dataIndex: 'airDate',
	 *            text: 'Original Air Date',
	 *            width: 125,
	 *            filter: {
	 *                type: 'date',
	 *    
	 *                // optional picker config
	 *                pickerDefaults: {
	 *                    // any DatePicker configs
	 *                } 
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	class Date extends Ext.grid.filters.filter.TriFilter {
		/** 
		 * The filter type. Used by the filters.Feature class when adding filters and applying state.
		 * @property
		 * @public (property)
		 * @default 'date'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.Date.Statics}
		 */
		self?: Ext.grid.filters.filter.Date.Statics | Ext.grid.filters.filter.TriFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
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
		 * @param   {object}                                                                                               members    The members to add to this class.
		 * @param   {boolean}                                                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Date;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.TriFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Date;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Date;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               name
		 * @param   {object}                                                                                               member
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Date;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.TriFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                               fn
		 * @param   {object}                                                                                               scope
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Date;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.TriFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Initializes the filter given its configuration.
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Returns the value of [dateFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDateFormat? (): string;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getFields? (): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Gets the menu picker associated with the passed field
		 * @method
		 * @public (method)
		 * @param   {string} item The field identifier ('lt', 'gt', 'eq')
		 * @returns {object}      The menu picker
		 */
		getPicker? (item: string): object;
		/** 
		 * Returns the value of [pickerDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-pickerDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getPickerDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Handler for when the DatePicker for a field fires the 'select' event
		 * @method
		 * @public (method)
		 * @param   {Ext.picker.Date} picker
		 * @param   {object}          date
		 * @returns {void}                   
		 */
		onMenuSelect? (picker: Ext.picker.Date, date: object): void;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                               [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Date;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.TriFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [dateFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @param   {string} dateFormat The new value.
		 * @returns {void}              
		 */
		setDateFormat? (dateFormat: string): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {object} fields The new value.
		 * @returns {void}          
		 */
		setFields? (fields: object): void;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [pickerDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-pickerDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} pickerDefaults The new value.
		 * @returns {void}                  
		 */
		setPickerDefaults? (pickerDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                                               config
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Date;
		initConfig? (config: object): Ext.grid.filters.filter.TriFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Date.Statics|Ext.grid.filters.filter.TriFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Date.Statics;
		statics? (): Ext.grid.filters.filter.TriFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * This method will be called when a column's menu trigger is clicked as well as when a filter is
		 * activated. Depending on the caller, the UI and the store will be synced.
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		countActiveFilters? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Template method that is to initialize the filter and install required menu items.
		 * @method
		 * @private (method)
		 * @param   {object}             config
		 * @returns {void|Ext.menu.Menu}        
		 */
		createMenu? (config: object): void;
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * This method will be called when a filter is deactivated. The UI and the store will be synced.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		 * @param   {object} operator
		 * @returns {void}            
		 */
		onFilterRemove? (operator: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		onStateRestore? (filter: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.TriFilter.onStateRestore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.TriFilter.html#method-onStateRestore).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onStateRestore? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                             names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.Date;
		unlink? (names: string[]): Ext.grid.filters.filter.TriFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.List](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html)
	 * The list grid filter allows you to create a filter selection that limits results
	 * to values matching an element in a list.  The filter can be set programmatically or via
	 * user input with a configurable [check box field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Checkbox.html) in the filter section
	 * of the column header.
	 * 
	 * List filters are able to be preloaded/backed by an [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) to load
	 * their options the first time they are shown.  They are also able to create their own
	 * list of values from  all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in
	 * the store at first time of filter invocation.
	 * 
	 * Example List Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show','rating'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', rating: 2},
	 *            {id: 1, show: 'Doctor Who', rating: 4},
	 *            {id: 2, show: 'Farscape', rating: 3},
	 *            {id: 3, show: 'Firefly', rating: 4},
	 *            {id: 4, show: 'Star Trek', rating: 1},
	 *            {id: 5, show: 'Star Wars: Christmas Special', rating: 5}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 350,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'rating',
	 *            text: 'Rating',
	 *            width: 75,
	 *            filter: {
	 *                type: 'list',
	 *                value: 5                      
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Options
	 * 
	 * There are three means to determine the list of options to present to the user:
	 * 
	 * - The [`options`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) config.
	 * - The [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store) config. In this mode, the [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField)
	 *   and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField) configs are used to extract the presentation and
	 *   filtering values from the `store` and apply to the menu items and grid store
	 *   filter, respectively.
	 * - If none of the above is specified, the associated grid's store is used. In this
	 *   case, the [`dataIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) is used to determine the filter values and
	 *   the [`labelIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelIndex) is used to populate the menu items. These fields
	 *   are extracted from the records in the associated grid's store. Both of these
	 *   configs default to the column's `dataIndex` property.
	 * 
	 * In all of these modes, a store is created that is synchronized with the menu items.
	 * The records in this store have [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField) and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField)
	 * fields that get populated from which ever source was provided.
	 * 
	 *    var filters = Ext.create('Ext.grid.Panel', {
	 *        ...
	 *        columns: [{
	 *            text: 'Size',
	 *            dataIndex: 'size',
	 *    
	 *            filter: {
	 *                type: 'list',
	 *                // options will be used as data to implicitly creates an ArrayStore
	 *                options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 *            }
	 *        }],
	 *        ...
	 *    });
	 * 
	 */
	class List extends Ext.grid.filters.filter.SingleFilter {
		/** 
		 * The filter type. Used by the filters.Feature class when adding filters and applying state.
		 * @property
		 * @public (property)
		 * @default 'list'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.List.Statics}
		 */
		self?: Ext.grid.filters.filter.List.Statics | Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
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
		 * @param   {object}                                                                                                  members    The members to add to this class.
		 * @param   {boolean}                                                                                                 [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                 [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.List;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                  members
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.List;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                  members
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.List;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                  name
		 * @param   {object}                                                                                                  member
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.List;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                  fn
		 * @param   {object}                                                                                                  scope
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.List;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Initializes the filter given its configuration.
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                  [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.List;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.SingleFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                                                  config
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.List;
		initConfig? (config: object): Ext.grid.filters.filter.SingleFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.List.Statics|Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.List.Statics;
		statics? (): Ext.grid.filters.filter.SingleFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Creates the Menu for this filter.
		 * @method
		 * @private (method)
		 * @param   {object}        config Filter configuration
		 * @returns {Ext.menu.Menu}        
		 */
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {object}       The 'serialized' form of this filter
		 */
		getValue? (field: object): object;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.Base.getValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#method-getValue).
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		onFilterRemove? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                                names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.List;
		unlink? (names: string[]): Ext.grid.filters.filter.SingleFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html)
	 * Filter type for [number columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Number.html).
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *          fields: ['id','show'],
	 *          data: [
	 *              {id: 0, show: 'Battlestar Galactica'},
	 *              {id: 1, show: 'Doctor Who'},
	 *              {id: 2, show: 'Farscape'},
	 *              {id: 3, show: 'Firefly'},
	 *              {id: 4, show: 'Star Trek'},
	 *              {id: 5, show: 'Star Wars: Christmas Special'}
	 *          ]
	 *       });
	 *    
	 *      Ext.create('Ext.grid.Panel', {
	 *          renderTo: Ext.getBody(),
	 *          title: 'Sci-Fi Television',
	 *          height: 250,
	 *          width: 250,
	 *          store: shows,
	 *          plugins: 'gridfilters',
	 *          columns: [{
	 *              dataIndex: 'id',
	 *              text: 'ID',
	 *              width: 50,
	 *              filter: 'number' // May also be 'numeric'
	 *          },{
	 *              dataIndex: 'show',
	 *              text: 'Show',
	 *              flex: 1                  
	 *          }]
	 *      });
	 * 
	 */
	class Number extends Ext.grid.filters.filter.TriFilter {
		/** 
		 * The filter type. Used by the filters.Feature class when adding filters and applying state.
		 * @property
		 * @public (property)
		 * @default 'number'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.Number.Statics}
		 */
		self?: Ext.grid.filters.filter.Number.Statics | Ext.grid.filters.filter.TriFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
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
		 * @param   {object}                                                                                                 members    The members to add to this class.
		 * @param   {boolean}                                                                                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Number;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.TriFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                 members
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Number;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                 members
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Number;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                 name
		 * @param   {object}                                                                                                 member
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Number;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.TriFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                 fn
		 * @param   {object}                                                                                                 scope
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Number;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.TriFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Initializes the filter given its configuration.
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getFields? (): object;
		/** 
		 * Returns the initial configuration passed to the constructor when
		 * instantiating this class.
		 * 
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                 [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Number;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.TriFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {object} fields The new value.
		 * @returns {void}          
		 */
		setFields? (fields: object): void;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                                                 config
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Number;
		initConfig? (config: object): Ext.grid.filters.filter.TriFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Number.Statics|Ext.grid.filters.filter.TriFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Number.Statics;
		statics? (): Ext.grid.filters.filter.TriFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * This method will be called when a column's menu trigger is clicked as well as when a filter is
		 * activated. Depending on the caller, the UI and the store will be synced.
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		countActiveFilters? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Creates the Menu for this filter.
		 * @method
		 * @private (method)
		 * @param   {object}        config Filter configuration
		 * @returns {Ext.menu.Menu}        
		 */
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * This method will be called when a filter is deactivated. The UI and the store will be synced.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {object}       The 'serialized' form of this filter
		 */
		getValue? (field: object): object;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.Base.getValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#method-getValue).
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		 * @param   {object} operator
		 * @returns {void}            
		 */
		onFilterRemove? (operator: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onStateRestore? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                               names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.Number;
		unlink? (names: string[]): Ext.grid.filters.filter.TriFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.SingleFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.SingleFilter.html)
	 * This abstract base class is used by grid filters that have a single
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	class SingleFilter extends Ext.grid.filters.filter.Base {
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.SingleFilter.Statics}
		 */
		self?: Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
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
		 * @param   {object}                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                     fn
		 * @param   {object}                                                                     scope
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                     [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.SingleFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                     config
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.SingleFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.SingleFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Creates the Menu for this filter.
		 * @method
		 * @private (method)
		 * @param   {object}        config Filter configuration
		 * @returns {Ext.menu.Menu}        
		 */
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {object}       The 'serialized' form of this filter
		 */
		getValue? (field: object): object;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.Base.getValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#method-getValue).
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		onFilterRemove? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @template
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                   names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.SingleFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.String.html)
	 * The string grid filter allows you to create a filter selection that limits results
	 * to values matching a particular string.  The filter can be set programmatically or via
	 * user input with a configurable [text field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Text.html) in the filter section
	 * of the column header.
	 * 
	 * Example String Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica'},
	 *            {id: 1, show: 'Doctor Who'},
	 *            {id: 2, show: 'Farscape'},
	 *            {id: 3, show: 'Firefly'},
	 *            {id: 4, show: 'Star Trek'},
	 *            {id: 5, show: 'Star Wars: Christmas Special'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 250,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1,
	 *            filter: {
	 *                // required configs
	 *                type: 'string',
	 *                // optional configs
	 *                value: 'star',  // setting a value makes the filter active. 
	 *                itemDefaults: {
	 *                    // any Ext.form.field.Text configs accepted
	 *                }
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	class String extends Ext.grid.filters.filter.SingleFilter {
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.String.Statics}
		 */
		self?: Ext.grid.filters.filter.String.Statics | Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
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
		 * @param   {object}                                                                                                    members    The members to add to this class.
		 * @param   {boolean}                                                                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.String;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                    members
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.String;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                    members
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.String;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                    name
		 * @param   {object}                                                                                                    member
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.String;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                    fn
		 * @param   {object}                                                                                                    scope
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.String;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Initializes the filter given its configuration.
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                                             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                                                    [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.String;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.SingleFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                                                    config
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.String;
		initConfig? (config: object): Ext.grid.filters.filter.SingleFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.String.Statics|Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.String.Statics;
		statics? (): Ext.grid.filters.filter.SingleFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Template method that is to initialize the filter and install required menu items.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createMenu? (): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.Base.createMenu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#method-createMenu).
		 * Creates the Menu for this filter.
		 * @method
		 * @private (method)
		 * @param   {object}             config Filter configuration
		 * @returns {void|Ext.menu.Menu}        
		 */
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {object}       The 'serialized' form of this filter
		 */
		getValue? (field: object): object;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.grid.filters.filter.Base.getValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#method-getValue).
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		onFilterRemove? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                                                  names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.String;
		unlink? (names: string[]): Ext.grid.filters.filter.SingleFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
	/** 
	 * [Ext.grid.filters.filter.TriFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.TriFilter.html)
	 * This abstract base class is used by grid filters that have a three
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	class TriFilter extends Ext.grid.filters.filter.Base {
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.grid.filters.filter.TriFilter.Statics}
		 */
		self?: Ext.grid.filters.filter.TriFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
		/** 
		 * The items to be shown in this menu.  Items are added to the menu
		 * according to their position within this array.
		 * Defaults to:
		 *      menuItems : ['lt', 'gt', '-', 'eq']
		 * @property
		 * @private (property)
		 * @default ['lt', 'gt', '-', 'eq']
		 * @type {string[]}
		 */
		menuItems?: string[];
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
		 * @param   {object}                                                                  members    The members to add to this class.
		 * @param   {boolean}                                                                 [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                 [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.TriFilter;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                  members
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		static addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                  members
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		static addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                  name
		 * @param   {object}                                                                  member
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.TriFilter;
		static addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                  fn
		 * @param   {object}                                                                  scope
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.TriFilter;
		static onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Destroys this filter by purging any event listeners, and removing any menus.
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * Returns the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getItemDefaults? (): object;
		/** 
		 * Returns the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMenuDefaults? (): object;
		/** 
		 * Returns the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getUpdateBuffer? (): number;
		/** 
		 * Sets the status of the filter and fires the appropriate events.
		 * @method
		 * @public (method)
		 * @param   {boolean} active The new filter state.
		 * @param   {string}  key    The filter key for columns that support multiple filters.
		 * @returns {void}           
		 */
		setActive? (active: boolean, key: string): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                  [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.TriFilter;
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [itemDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} itemDefaults The new value.
		 * @returns {void}                
		 */
		setItemDefaults? (itemDefaults: object): void;
		/** 
		 * Sets the value of [menuDefaults](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-menuDefaults).
		 * @method
		 * @public (method)
		 * @param   {object} menuDefaults The new value.
		 * @returns {void}                
		 */
		setMenuDefaults? (menuDefaults: object): void;
		/** 
		 * Sets the value of [updateBuffer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-updateBuffer).
		 * @method
		 * @public (method)
		 * @param   {number} updateBuffer The new value.
		 * @returns {void}                
		 */
		setUpdateBuffer? (updateBuffer: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                                                  config
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.TriFilter;
		initConfig? (config: object): Ext.grid.filters.filter.Base;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.TriFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.TriFilter.Statics;
		statics? (): Ext.grid.filters.filter.Base.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * This method will be called when a column's menu trigger is clicked as well as when a filter is
		 * activated. Depending on the caller, the UI and the store will be synced.
		 * @method
		 * @private (method)
		 * @param   {object} showingMenu
		 * @returns {void}               
		 */
		activate? (showingMenu: object): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		addStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		countActiveFilters? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		createFilter? (config: object, key: object): void;
		/** 
		 * Creates the Menu for this filter.
		 * @method
		 * @private (method)
		 * @param   {object}        config Filter configuration
		 * @returns {Ext.menu.Menu}        
		 */
		createMenu? (config: object): Ext.menu.Menu;
		/** 
		 * This method will be called when a filter is deactivated. The UI and the store will be synced.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} value
		 * @returns {void}          
		 */
		getActiveState? (config: object, value: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getBaseIdPrefix? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Note that some derived classes may need to do specific processing and will have its own version of this method
		 * before calling parent (see the List filter).
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @param   {object} key
		 * @returns {void}          
		 */
		getFilterConfig? (config: object, key: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGridStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMenuConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} key
		 * @returns {void}       
		 */
		getStoreFilter? (key: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
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
		 * @param   {object} operator
		 * @returns {void}            
		 */
		onFilterRemove? (operator: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onStateRestore? (): void;
		/** 
		 * Handler method called when there is a significant event on an input item.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @param   {object} e
		 * @returns {void}         
		 */
		onValueChange? (field: object, e: object): void;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} filter
		 * @returns {void}          
		 */
		removeStoreFilter? (filter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} active
		 * @returns {void}          
		 */
		setColumnActive? (active: object): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} menuItem
		 * @returns {void}            
		 */
		showMenu? (menuItem: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                names The names of the linked objects to destroy.
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.grid.filters.filter.TriFilter;
		unlink? (names: string[]): Ext.grid.filters.filter.Base;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateStoreFilter? (): void;
	}
}
declare namespace Ext.grid.filters.filter.Base {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.Base](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html)
	 * Abstract base class for filter implementations.
	 */
	interface Def extends Ext.grid.filters.filter.Base {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.Base.Cfg}
		 */
		config?: Ext.grid.filters.filter.Base.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.Base.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.Base.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.Boolean {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Boolean.html)
	 * The boolean grid filter allows you to create a filter selection that limits results
	 * to values matching true or false.  The filter can be set programmatically or via
	 * user input with a configurable [radio field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Radio.html) in the filter section
	 * of the column header.
	 * 
	 * Boolean filters use unique radio group IDs, so you may utilize more than one.
	 * 
	 * Example Boolean Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', 'visible'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', visible: true},
	 *            {id: 1, show: 'Doctor Who', visible: true},
	 *            {id: 2, show: 'Farscape', visible: false},
	 *            {id: 3, show: 'Firefly', visible: true},
	 *            {id: 4, show: 'Star Trek', visible: true},
	 *            {id: 5, show: 'Star Wars: Christmas Special', visible: false}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'visible',
	 *            text: 'Visibility',
	 *            width: 125,
	 *            filter: {
	 *                type: 'boolean',
	 *                value: 'true',
	 *                yesText: 'True',
	 *                noText: 'False'
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Def extends Ext.grid.filters.filter.Boolean {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.Boolean.Cfg}
		 */
		config?: Ext.grid.filters.filter.Boolean.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Boolean.Statics|Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.Boolean.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.Boolean.Statics | Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.Boolean.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.Date {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html)
	 * The date grid filter allows you to create a filter selection that limits results
	 * to values matching specific date constraints.  The filter can be set programmatically or via
	 * user input with a configurable [DatePicker menu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html) in the filter section
	 * of the column header.
	 * 
	 * Example Date Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', {
	 *              name: 'airDate',
	 *              type: 'date',
	 *              dateFormat: 'Y-m-d'
	 *        }],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', airDate: '1978-09-17'},
	 *            {id: 1, show: 'Doctor Who', airDate: '1963-11-23'},
	 *            {id: 2, show: 'Farscape', airDate: '1999-03-19'},
	 *            {id: 3, show: 'Firefly', airDate: '2002-12-20'},
	 *            {id: 4, show: 'Star Trek', airDate: '1966-09-08'},
	 *            {id: 5, show: 'Star Wars: Christmas Special', airDate: '1978-11-17'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            xtype: 'datecolumn',
	 *            dataIndex: 'airDate',
	 *            text: 'Original Air Date',
	 *            width: 125,
	 *            filter: {
	 *                type: 'date',
	 *    
	 *                // optional picker config
	 *                pickerDefaults: {
	 *                    // any DatePicker configs
	 *                } 
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Def extends Ext.grid.filters.filter.Date {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.Date.Cfg}
		 */
		config?: Ext.grid.filters.filter.Date.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Date.Statics|Ext.grid.filters.filter.TriFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.Date.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.Date.Statics | Ext.grid.filters.filter.TriFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.Date.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.List {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.List](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html)
	 * The list grid filter allows you to create a filter selection that limits results
	 * to values matching an element in a list.  The filter can be set programmatically or via
	 * user input with a configurable [check box field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Checkbox.html) in the filter section
	 * of the column header.
	 * 
	 * List filters are able to be preloaded/backed by an [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) to load
	 * their options the first time they are shown.  They are also able to create their own
	 * list of values from  all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in
	 * the store at first time of filter invocation.
	 * 
	 * Example List Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show','rating'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', rating: 2},
	 *            {id: 1, show: 'Doctor Who', rating: 4},
	 *            {id: 2, show: 'Farscape', rating: 3},
	 *            {id: 3, show: 'Firefly', rating: 4},
	 *            {id: 4, show: 'Star Trek', rating: 1},
	 *            {id: 5, show: 'Star Wars: Christmas Special', rating: 5}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 350,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'rating',
	 *            text: 'Rating',
	 *            width: 75,
	 *            filter: {
	 *                type: 'list',
	 *                value: 5                      
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Options
	 * 
	 * There are three means to determine the list of options to present to the user:
	 * 
	 * - The [`options`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) config.
	 * - The [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store) config. In this mode, the [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField)
	 *   and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField) configs are used to extract the presentation and
	 *   filtering values from the `store` and apply to the menu items and grid store
	 *   filter, respectively.
	 * - If none of the above is specified, the associated grid's store is used. In this
	 *   case, the [`dataIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) is used to determine the filter values and
	 *   the [`labelIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelIndex) is used to populate the menu items. These fields
	 *   are extracted from the records in the associated grid's store. Both of these
	 *   configs default to the column's `dataIndex` property.
	 * 
	 * In all of these modes, a store is created that is synchronized with the menu items.
	 * The records in this store have [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField) and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField)
	 * fields that get populated from which ever source was provided.
	 * 
	 *    var filters = Ext.create('Ext.grid.Panel', {
	 *        ...
	 *        columns: [{
	 *            text: 'Size',
	 *            dataIndex: 'size',
	 *    
	 *            filter: {
	 *                type: 'list',
	 *                // options will be used as data to implicitly creates an ArrayStore
	 *                options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 *            }
	 *        }],
	 *        ...
	 *    });
	 * 
	 */
	interface Def extends Ext.grid.filters.filter.List {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.List.Cfg}
		 */
		config?: Ext.grid.filters.filter.List.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.List.Statics|Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.List.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.List.Statics | Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.List.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.Number {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html)
	 * Filter type for [number columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Number.html).
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *          fields: ['id','show'],
	 *          data: [
	 *              {id: 0, show: 'Battlestar Galactica'},
	 *              {id: 1, show: 'Doctor Who'},
	 *              {id: 2, show: 'Farscape'},
	 *              {id: 3, show: 'Firefly'},
	 *              {id: 4, show: 'Star Trek'},
	 *              {id: 5, show: 'Star Wars: Christmas Special'}
	 *          ]
	 *       });
	 *    
	 *      Ext.create('Ext.grid.Panel', {
	 *          renderTo: Ext.getBody(),
	 *          title: 'Sci-Fi Television',
	 *          height: 250,
	 *          width: 250,
	 *          store: shows,
	 *          plugins: 'gridfilters',
	 *          columns: [{
	 *              dataIndex: 'id',
	 *              text: 'ID',
	 *              width: 50,
	 *              filter: 'number' // May also be 'numeric'
	 *          },{
	 *              dataIndex: 'show',
	 *              text: 'Show',
	 *              flex: 1                  
	 *          }]
	 *      });
	 * 
	 */
	interface Def extends Ext.grid.filters.filter.Number {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.Number.Cfg}
		 */
		config?: Ext.grid.filters.filter.Number.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Number.Statics|Ext.grid.filters.filter.TriFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.Number.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.Number.Statics | Ext.grid.filters.filter.TriFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.Number.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.SingleFilter {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.SingleFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.SingleFilter.html)
	 * This abstract base class is used by grid filters that have a single
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	interface Def extends Ext.grid.filters.filter.SingleFilter {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.SingleFilter.Cfg}
		 */
		config?: Ext.grid.filters.filter.SingleFilter.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.SingleFilter.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.SingleFilter.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.String {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.String.html)
	 * The string grid filter allows you to create a filter selection that limits results
	 * to values matching a particular string.  The filter can be set programmatically or via
	 * user input with a configurable [text field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Text.html) in the filter section
	 * of the column header.
	 * 
	 * Example String Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica'},
	 *            {id: 1, show: 'Doctor Who'},
	 *            {id: 2, show: 'Farscape'},
	 *            {id: 3, show: 'Firefly'},
	 *            {id: 4, show: 'Star Trek'},
	 *            {id: 5, show: 'Star Wars: Christmas Special'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 250,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1,
	 *            filter: {
	 *                // required configs
	 *                type: 'string',
	 *                // optional configs
	 *                value: 'star',  // setting a value makes the filter active. 
	 *                itemDefaults: {
	 *                    // any Ext.form.field.Text configs accepted
	 *                }
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Def extends Ext.grid.filters.filter.String {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.String.Cfg}
		 */
		config?: Ext.grid.filters.filter.String.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.String.Statics|Ext.grid.filters.filter.SingleFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.String.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.String.Statics | Ext.grid.filters.filter.SingleFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.String.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.TriFilter {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.grid.filters.filter.TriFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.TriFilter.html)
	 * This abstract base class is used by grid filters that have a three
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	interface Def extends Ext.grid.filters.filter.TriFilter {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.grid.filters.filter.TriFilter.Cfg}
		 */
		config?: Ext.grid.filters.filter.TriFilter.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * **Note:** Only applies to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) derived classes when used as
		 * a config in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define).
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
		 * When the `xtype` is common to many items, [Ext.container.Container.defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType)
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
		 * manually used to instantiate a component using [Ext.widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-widget):
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
		 * array form into a [Ext.util.MixedCollection](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.MixedCollection.html) instance.
		 * 
		 * You can define your own `xtype` on a custom [component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) by specifying
		 * the `xtype` property in [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define). For example:
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
		 * See [Ext.enums.Widget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Widget.html) for list of all available xtypes.
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.TriFilter.Statics|Ext.grid.filters.filter.Base.Statics|Ext.Base.Statics}  
		 * @type {Ext.grid.filters.filter.TriFilter.Statics}
		 */
		statics?: (() => Ext.grid.filters.filter.TriFilter.Statics | Ext.grid.filters.filter.Base.Statics | Ext.Base.Statics) | Ext.grid.filters.filter.TriFilter.Statics | any;
	}
}
declare namespace Ext.grid.filters.filter.Base {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.Base](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html)
	 * Abstract base class for filter implementations.
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
		 * @param   {object}                                members    The members to add to this class.
		 * @param   {boolean}                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                members
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                members
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                name
		 * @param   {object}                                member
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                fn
		 * @param   {object}                                scope
		 * @returns {Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.Boolean {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Boolean.html)
	 * The boolean grid filter allows you to create a filter selection that limits results
	 * to values matching true or false.  The filter can be set programmatically or via
	 * user input with a configurable [radio field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Radio.html) in the filter section
	 * of the column header.
	 * 
	 * Boolean filters use unique radio group IDs, so you may utilize more than one.
	 * 
	 * Example Boolean Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', 'visible'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', visible: true},
	 *            {id: 1, show: 'Doctor Who', visible: true},
	 *            {id: 2, show: 'Farscape', visible: false},
	 *            {id: 3, show: 'Firefly', visible: true},
	 *            {id: 4, show: 'Star Trek', visible: true},
	 *            {id: 5, show: 'Star Wars: Christmas Special', visible: false}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'visible',
	 *            text: 'Visibility',
	 *            width: 125,
	 *            filter: {
	 *                type: 'boolean',
	 *                value: 'true',
	 *                yesText: 'True',
	 *                noText: 'False'
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
		 * @param   {object}                                                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Boolean;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                     members
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.Boolean;
		addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                     members
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Boolean;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                     name
		 * @param   {object}                                                                                                     member
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Boolean;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                     fn
		 * @param   {object}                                                                                                     scope
		 * @returns {Ext.grid.filters.filter.Boolean|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Boolean;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.Date {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html)
	 * The date grid filter allows you to create a filter selection that limits results
	 * to values matching specific date constraints.  The filter can be set programmatically or via
	 * user input with a configurable [DatePicker menu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html) in the filter section
	 * of the column header.
	 * 
	 * Example Date Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', {
	 *              name: 'airDate',
	 *              type: 'date',
	 *              dateFormat: 'Y-m-d'
	 *        }],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', airDate: '1978-09-17'},
	 *            {id: 1, show: 'Doctor Who', airDate: '1963-11-23'},
	 *            {id: 2, show: 'Farscape', airDate: '1999-03-19'},
	 *            {id: 3, show: 'Firefly', airDate: '2002-12-20'},
	 *            {id: 4, show: 'Star Trek', airDate: '1966-09-08'},
	 *            {id: 5, show: 'Star Wars: Christmas Special', airDate: '1978-11-17'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            xtype: 'datecolumn',
	 *            dataIndex: 'airDate',
	 *            text: 'Original Air Date',
	 *            width: 125,
	 *            filter: {
	 *                type: 'date',
	 *    
	 *                // optional picker config
	 *                pickerDefaults: {
	 *                    // any DatePicker configs
	 *                } 
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
		 * @param   {object}                                                                                               members    The members to add to this class.
		 * @param   {boolean}                                                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Date;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.TriFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.Date;
		addStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                               members
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Date;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                               name
		 * @param   {object}                                                                                               member
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Date;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.TriFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                               fn
		 * @param   {object}                                                                                               scope
		 * @returns {Ext.grid.filters.filter.Date|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Date;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.TriFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.List {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.List](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html)
	 * The list grid filter allows you to create a filter selection that limits results
	 * to values matching an element in a list.  The filter can be set programmatically or via
	 * user input with a configurable [check box field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Checkbox.html) in the filter section
	 * of the column header.
	 * 
	 * List filters are able to be preloaded/backed by an [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) to load
	 * their options the first time they are shown.  They are also able to create their own
	 * list of values from  all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in
	 * the store at first time of filter invocation.
	 * 
	 * Example List Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show','rating'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', rating: 2},
	 *            {id: 1, show: 'Doctor Who', rating: 4},
	 *            {id: 2, show: 'Farscape', rating: 3},
	 *            {id: 3, show: 'Firefly', rating: 4},
	 *            {id: 4, show: 'Star Trek', rating: 1},
	 *            {id: 5, show: 'Star Wars: Christmas Special', rating: 5}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 350,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'rating',
	 *            text: 'Rating',
	 *            width: 75,
	 *            filter: {
	 *                type: 'list',
	 *                value: 5                      
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Options
	 * 
	 * There are three means to determine the list of options to present to the user:
	 * 
	 * - The [`options`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) config.
	 * - The [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store) config. In this mode, the [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField)
	 *   and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField) configs are used to extract the presentation and
	 *   filtering values from the `store` and apply to the menu items and grid store
	 *   filter, respectively.
	 * - If none of the above is specified, the associated grid's store is used. In this
	 *   case, the [`dataIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) is used to determine the filter values and
	 *   the [`labelIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelIndex) is used to populate the menu items. These fields
	 *   are extracted from the records in the associated grid's store. Both of these
	 *   configs default to the column's `dataIndex` property.
	 * 
	 * In all of these modes, a store is created that is synchronized with the menu items.
	 * The records in this store have [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField) and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField)
	 * fields that get populated from which ever source was provided.
	 * 
	 *    var filters = Ext.create('Ext.grid.Panel', {
	 *        ...
	 *        columns: [{
	 *            text: 'Size',
	 *            dataIndex: 'size',
	 *    
	 *            filter: {
	 *                type: 'list',
	 *                // options will be used as data to implicitly creates an ArrayStore
	 *                options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 *            }
	 *        }],
	 *        ...
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
		 * @param   {object}                                                                                                  members    The members to add to this class.
		 * @param   {boolean}                                                                                                 [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                 [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.List;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                  members
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.List;
		addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                  members
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.List;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                  name
		 * @param   {object}                                                                                                  member
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.List;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                  fn
		 * @param   {object}                                                                                                  scope
		 * @returns {Ext.grid.filters.filter.List|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.List;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.Number {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html)
	 * Filter type for [number columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Number.html).
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *          fields: ['id','show'],
	 *          data: [
	 *              {id: 0, show: 'Battlestar Galactica'},
	 *              {id: 1, show: 'Doctor Who'},
	 *              {id: 2, show: 'Farscape'},
	 *              {id: 3, show: 'Firefly'},
	 *              {id: 4, show: 'Star Trek'},
	 *              {id: 5, show: 'Star Wars: Christmas Special'}
	 *          ]
	 *       });
	 *    
	 *      Ext.create('Ext.grid.Panel', {
	 *          renderTo: Ext.getBody(),
	 *          title: 'Sci-Fi Television',
	 *          height: 250,
	 *          width: 250,
	 *          store: shows,
	 *          plugins: 'gridfilters',
	 *          columns: [{
	 *              dataIndex: 'id',
	 *              text: 'ID',
	 *              width: 50,
	 *              filter: 'number' // May also be 'numeric'
	 *          },{
	 *              dataIndex: 'show',
	 *              text: 'Show',
	 *              flex: 1                  
	 *          }]
	 *      });
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
		 * @param   {object}                                                                                                 members    The members to add to this class.
		 * @param   {boolean}                                                                                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Number;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.TriFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                 members
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.Number;
		addStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                 members
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Number;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                 name
		 * @param   {object}                                                                                                 member
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Number;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.TriFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                 fn
		 * @param   {object}                                                                                                 scope
		 * @returns {Ext.grid.filters.filter.Number|Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Number;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.TriFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.SingleFilter {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.SingleFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.SingleFilter.html)
	 * This abstract base class is used by grid filters that have a single
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
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
		 * @param   {object}                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                     members
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                     fn
		 * @param   {object}                                                                     scope
		 * @returns {Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.String {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.String.html)
	 * The string grid filter allows you to create a filter selection that limits results
	 * to values matching a particular string.  The filter can be set programmatically or via
	 * user input with a configurable [text field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Text.html) in the filter section
	 * of the column header.
	 * 
	 * Example String Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica'},
	 *            {id: 1, show: 'Doctor Who'},
	 *            {id: 2, show: 'Farscape'},
	 *            {id: 3, show: 'Firefly'},
	 *            {id: 4, show: 'Star Trek'},
	 *            {id: 5, show: 'Star Wars: Christmas Special'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 250,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1,
	 *            filter: {
	 *                // required configs
	 *                type: 'string',
	 *                // optional configs
	 *                value: 'star',  // setting a value makes the filter active. 
	 *                itemDefaults: {
	 *                    // any Ext.form.field.Text configs accepted
	 *                }
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
		 * @param   {object}                                                                                                    members    The members to add to this class.
		 * @param   {boolean}                                                                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.String;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.SingleFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                                                    members
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.String;
		addStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                                                    members
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.String;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.SingleFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                    name
		 * @param   {object}                                                                                                    member
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.String;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.SingleFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                                                    fn
		 * @param   {object}                                                                                                    scope
		 * @returns {Ext.grid.filters.filter.String|Ext.grid.filters.filter.SingleFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.String;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.SingleFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.TriFilter {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.filters.filter.TriFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.TriFilter.html)
	 * This abstract base class is used by grid filters that have a three
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
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
		 * @param   {object}                                                                  members    The members to add to this class.
		 * @param   {boolean}                                                                 [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                 [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.TriFilter;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.filters.filter.Base;
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
		 * @param   {object}                                                                  members
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		addStatics? (members: object): typeof Ext.grid.filters.filter.Base;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Loader.html)
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
		 * @chainable
		 * @param   {object}                                                                  members
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.TriFilter;
		addInheritableStatics? (members: object): typeof Ext.grid.filters.filter.Base;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                  name
		 * @param   {object}                                                                  member
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.TriFilter;
		addMember? (name: object, member: object): typeof Ext.grid.filters.filter.Base;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                  fn
		 * @param   {object}                                                                  scope
		 * @returns {Ext.grid.filters.filter.TriFilter|Ext.grid.filters.filter.Base|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.TriFilter;
		onExtended? (fn: object, scope: object): typeof Ext.grid.filters.filter.Base;
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
declare namespace Ext.grid.filters.filter.Base {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.Base](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html)
	 * Abstract base class for filter implementations.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The default configuration options for any menu items created by this filter.
		 * 
		 * Example usage:
		 * 
		 *     itemDefaults: {
		 *         width: 150
		 *     },
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menu'}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 500
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @template
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                               config
		 * @returns {Ext.grid.filters.filter.Base.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Base.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Base.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Base.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Base.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Base.Statics;
	}
}
declare namespace Ext.grid.filters.filter.Boolean {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Boolean.html)
	 * The boolean grid filter allows you to create a filter selection that limits results
	 * to values matching true or false.  The filter can be set programmatically or via
	 * user input with a configurable [radio field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Radio.html) in the filter section
	 * of the column header.
	 * 
	 * Boolean filters use unique radio group IDs, so you may utilize more than one.
	 * 
	 * Example Boolean Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', 'visible'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', visible: true},
	 *            {id: 1, show: 'Doctor Who', visible: true},
	 *            {id: 2, show: 'Farscape', visible: false},
	 *            {id: 3, show: 'Firefly', visible: true},
	 *            {id: 4, show: 'Star Trek', visible: true},
	 *            {id: 5, show: 'Star Wars: Christmas Special', visible: false}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'visible',
	 *            text: 'Visibility',
	 *            width: 125,
	 *            filter: {
	 *                type: 'boolean',
	 *                value: 'true',
	 *                yesText: 'True',
	 *                noText: 'False'
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * Set this to null if you do not want either option to be checked by default. Defaults to false.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		defaultValue?: boolean;
		/** 
		 * The default configuration options for any menu items created by this filter.
		 * 
		 * Example usage:
		 * 
		 *     itemDefaults: {
		 *         width: 150
		 *     },
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menu'}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Defaults to 'No'.
		 * @configuration
		 * @optional
		 * @default 'No'
		 * @type {string}
		 */
		noText?: string;
		/** 
		 * 
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Defaults to 'Yes'.
		 * @configuration
		 * @optional
		 * @default 'Yes'
		 * @type {string}
		 */
		yesText?: string;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                                  config
		 * @returns {Ext.grid.filters.filter.Boolean.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Boolean.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                  [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Boolean.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Boolean.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Boolean.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Boolean.Statics;
	}
}
declare namespace Ext.grid.filters.filter.Date {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html)
	 * The date grid filter allows you to create a filter selection that limits results
	 * to values matching specific date constraints.  The filter can be set programmatically or via
	 * user input with a configurable [DatePicker menu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html) in the filter section
	 * of the column header.
	 * 
	 * Example Date Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', {
	 *              name: 'airDate',
	 *              type: 'date',
	 *              dateFormat: 'Y-m-d'
	 *        }],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', airDate: '1978-09-17'},
	 *            {id: 1, show: 'Doctor Who', airDate: '1963-11-23'},
	 *            {id: 2, show: 'Farscape', airDate: '1999-03-19'},
	 *            {id: 3, show: 'Firefly', airDate: '2002-12-20'},
	 *            {id: 4, show: 'Star Trek', airDate: '1966-09-08'},
	 *            {id: 5, show: 'Star Wars: Christmas Special', airDate: '1978-11-17'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            xtype: 'datecolumn',
	 *            dataIndex: 'airDate',
	 *            text: 'Original Air Date',
	 *            width: 125,
	 *            filter: {
	 *                type: 'date',
	 *    
	 *                // optional picker config
	 *                pickerDefaults: {
	 *                    // any DatePicker configs
	 *                } 
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The date format to return when using getValue.
		 * Defaults to [Ext.Date.defaultFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Date.html#property-defaultFormat).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dateFormat?: string;
		/** 
		 * Configures field items individually. These properties override those defined
		 * by [`itemDefaults`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html#cfg-itemDefaults).
		 * 
		 * Example usage:
		 * 
		 *       fields: {
		 *           gt: { // override fieldCfg options
		 *               width: 200
		 *           }
		 *       },
		 * 
		 * @configuration
		 * @optional
		 * @default {lt: {text: 'Before'}, gt: {text: 'After'}, eq: {text: 'On'}}
		 * @type {object}
		 */
		fields?: object;
		/** 
		 * The default configuration options for any menu items created by this filter.
		 * 
		 * Example usage:
		 * 
		 *     itemDefaults: {
		 *         width: 150
		 *     },
		 * 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menucheckitem', selectOnFocus: true, width: 125, menu: {layout: 'auto', plain: true}}
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * Allowable date as passed to the [Ext.DatePicker](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html)
		 * Defaults to undefined.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalDate}
		 */
		maxDate?: ExtGlobalDate;
		/** 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menu'}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Allowable date as passed to the [Ext.DatePicker](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html)
		 * Defaults to undefined.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalDate}
		 */
		minDate?: ExtGlobalDate;
		/** 
		 * Configuration options for the date picker associated with each field.
		 * @configuration
		 * @optional
		 * @default {xtype: 'datepicker', border: 0}
		 * @type {object}
		 */
		pickerDefaults?: object;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                               config
		 * @returns {Ext.grid.filters.filter.Date.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Date.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Date.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Date.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Date.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Date.Statics;
	}
}
declare namespace Ext.grid.filters.filter.List {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.List](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html)
	 * The list grid filter allows you to create a filter selection that limits results
	 * to values matching an element in a list.  The filter can be set programmatically or via
	 * user input with a configurable [check box field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Checkbox.html) in the filter section
	 * of the column header.
	 * 
	 * List filters are able to be preloaded/backed by an [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) to load
	 * their options the first time they are shown.  They are also able to create their own
	 * list of values from  all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in
	 * the store at first time of filter invocation.
	 * 
	 * Example List Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show','rating'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', rating: 2},
	 *            {id: 1, show: 'Doctor Who', rating: 4},
	 *            {id: 2, show: 'Farscape', rating: 3},
	 *            {id: 3, show: 'Firefly', rating: 4},
	 *            {id: 4, show: 'Star Trek', rating: 1},
	 *            {id: 5, show: 'Star Wars: Christmas Special', rating: 5}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 350,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'rating',
	 *            text: 'Rating',
	 *            width: 75,
	 *            filter: {
	 *                type: 'list',
	 *                value: 5                      
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Options
	 * 
	 * There are three means to determine the list of options to present to the user:
	 * 
	 * - The [`options`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) config.
	 * - The [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store) config. In this mode, the [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField)
	 *   and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField) configs are used to extract the presentation and
	 *   filtering values from the `store` and apply to the menu items and grid store
	 *   filter, respectively.
	 * - If none of the above is specified, the associated grid's store is used. In this
	 *   case, the [`dataIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) is used to determine the filter values and
	 *   the [`labelIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelIndex) is used to populate the menu items. These fields
	 *   are extracted from the records in the associated grid's store. Both of these
	 *   configs default to the column's `dataIndex` property.
	 * 
	 * In all of these modes, a store is created that is synchronized with the menu items.
	 * The records in this store have [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField) and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField)
	 * fields that get populated from which ever source was provided.
	 * 
	 *    var filters = Ext.create('Ext.grid.Panel', {
	 *        ...
	 *        columns: [{
	 *            text: 'Size',
	 *            dataIndex: 'size',
	 *    
	 *            filter: {
	 *                type: 'list',
	 *                // options will be used as data to implicitly creates an ArrayStore
	 *                options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 *            }
	 *        }],
	 *        ...
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The field name for the `id` of records in this list's [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store). These values are
		 * used to populate the filter for the grid's store.
		 * @configuration
		 * @optional
		 * @default "id"
		 * @type {string}
		 */
		idField?: string;
		/** 
		 * See the [documentation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html#cfg-itemDefaults) for
		 * the base class for details.
		 * 
		 * In the case of this class, however, note that the `checked` config should **not** be
		 * specified.
		 * @configuration
		 * @optional
		 * @default {checked: false, hideOnClick: false}
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * The field name for the menu item text in the records in this list's [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store).
		 * @configuration
		 * @optional
		 * @default "text"
		 * @type {string}
		 */
		labelField?: string;
		/** 
		 * The field in the records of the grid's store from which the menu item text should be retrieved.
		 * This field is only used when no [`options`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) and no [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store) is provided
		 * and the distinct value of the grid's store need to be generated dynamically.
		 * 
		 * If not provided, this field defaults to the column's `dataIndex` property.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		labelIndex?: string;
		/** 
		 * Defaults to true.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		loadOnShow?: boolean;
		/** 
		 * The text that is displayed while the configured store is loading.
		 * @configuration
		 * @optional
		 * @default "Loading..."
		 * @type {string}
		 */
		loadingText?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menu'}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * The data to be used to implicitly create a data store to back this list. This is used only when
		 * the data source is **local**. If the data for the list is remote, use the [store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store)
		 * config instead.
		 * 
		 * If neither store nor [options](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) is specified, then the choices list is automatically
		 * populated from all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in the store at first
		 * time of filter invocation.
		 * 
		 * Each item within the provided array may be in one of the following formats:
		 * 
		 * <ul>
		 * <li>
		 * 
		 * **Array** :
		 * 
		 *    options: [
		 *        [11, 'extra small'],
		 *        [18, 'small'],
		 *        [22, 'medium'],
		 *        [35, 'large'],
		 *        [44, 'extra large']
		 *    ]
		 * 
		 * </li>
		 * <li>
		 * 
		 * **Object** :
		 * 
		 *    labelField: 'name', // override default of 'text'
		 *    options: [
		 *        {id: 11, name:'extra small'},
		 *        {id: 18, name:'small'},
		 *        {id: 22, name:'medium'},
		 *        {id: 35, name:'large'},
		 *        {id: 44, name:'extra large'}
		 *    ]
		 * 
		 * </li>
		 * <li>
		 * 
		 * **String** :
		 * 
		 *    options: ['extra small', 'small', 'medium', 'large', 'extra large']
		 * 
		 * </li>
		 * </ul>
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		options?: any[];
		/** 
		 * Specify true to group all items in this list into a single-select
		 * radio button group. Defaults to false.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) this list should use as its data source.
		 * 
		 * If neither store nor [options](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) is specified, then the choices list is automatically
		 * populated from all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in the store at first
		 * time of filter invocation.
		 * @configuration
		 * @optional
		 * @type {Ext.data.Store}
		 */
		store?: Ext.data.Store;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 500
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                               config
		 * @returns {Ext.grid.filters.filter.List.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.List.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.List.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.List.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.List.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.List.Statics;
	}
}
declare namespace Ext.grid.filters.filter.Number {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html)
	 * Filter type for [number columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Number.html).
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *          fields: ['id','show'],
	 *          data: [
	 *              {id: 0, show: 'Battlestar Galactica'},
	 *              {id: 1, show: 'Doctor Who'},
	 *              {id: 2, show: 'Farscape'},
	 *              {id: 3, show: 'Firefly'},
	 *              {id: 4, show: 'Star Trek'},
	 *              {id: 5, show: 'Star Wars: Christmas Special'}
	 *          ]
	 *       });
	 *    
	 *      Ext.create('Ext.grid.Panel', {
	 *          renderTo: Ext.getBody(),
	 *          title: 'Sci-Fi Television',
	 *          height: 250,
	 *          width: 250,
	 *          store: shows,
	 *          plugins: 'gridfilters',
	 *          columns: [{
	 *              dataIndex: 'id',
	 *              text: 'ID',
	 *              width: 50,
	 *              filter: 'number' // May also be 'numeric'
	 *          },{
	 *              dataIndex: 'show',
	 *              text: 'Show',
	 *              flex: 1                  
	 *          }]
	 *      });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The empty text to show for each field.
		 * @configuration
		 * @optional
		 * @default 'Enter Number...'
		 * @type {string}
		 */
		emptyText?: string;
		/** 
		 * Configures field items individually. These properties override those defined
		 * by [`itemDefaults`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html#cfg-itemDefaults).
		 * 
		 * Example usage:
		 * 
		 *     fields: {
		 *         // Override itemDefaults for one field:
		 *         gt: {
		 *             width: 200
		 *         }
		 *    
		 *         // "lt" and "eq" fields retain all itemDefaults
		 *     },
		 * 
		 * @configuration
		 * @optional
		 * @default {gt: {iconCls: Ext.baseCSSPrefix + 'grid-filters-gt', margin: '0 0 3px 0'}, lt: {iconCls: Ext.baseCSSPrefix + 'grid-filters-lt', margin: '0 0 3px 0'}, eq: {iconCls: Ext.baseCSSPrefix + 'grid-filters-eq', margin: 0}}
		 * @type {object}
		 */
		fields?: object;
		/** 
		 * 
		 * @configuration
		 * @optional
		 * @default {xtype: 'numberfield', enableKeyEvents: true, hideEmptyLabel: false, labelSeparator: '', labelWidth: 29, selectOnFocus: false}
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {bodyPadding: 3, showSeparator: false}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 500
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                                 config
		 * @returns {Ext.grid.filters.filter.Number.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.Number.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                 [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.Number.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.Number.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.Number.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.Number.Statics;
	}
}
declare namespace Ext.grid.filters.filter.SingleFilter {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.SingleFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.SingleFilter.html)
	 * This abstract base class is used by grid filters that have a single
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The default configuration options for any menu items created by this filter.
		 * 
		 * Example usage:
		 * 
		 *     itemDefaults: {
		 *         width: 150
		 *     },
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menu'}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 500
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * set the value of the filter and fire the 'update' event.
		 * @method
		 * @private (method)
		 * @template
		 * @param   {object} data The value to set the filter
		 * @returns {void}        
		 */
		setValue? (data: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                                       config
		 * @returns {Ext.grid.filters.filter.SingleFilter.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.SingleFilter.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                       [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.SingleFilter.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.SingleFilter.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.SingleFilter.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.SingleFilter.Statics;
	}
}
declare namespace Ext.grid.filters.filter.String {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.String.html)
	 * The string grid filter allows you to create a filter selection that limits results
	 * to values matching a particular string.  The filter can be set programmatically or via
	 * user input with a configurable [text field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Text.html) in the filter section
	 * of the column header.
	 * 
	 * Example String Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica'},
	 *            {id: 1, show: 'Doctor Who'},
	 *            {id: 2, show: 'Farscape'},
	 *            {id: 3, show: 'Firefly'},
	 *            {id: 4, show: 'Star Trek'},
	 *            {id: 5, show: 'Star Wars: Christmas Special'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 250,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1,
	 *            filter: {
	 *                // required configs
	 *                type: 'string',
	 *                // optional configs
	 *                value: 'star',  // setting a value makes the filter active. 
	 *                itemDefaults: {
	 *                    // any Ext.form.field.Text configs accepted
	 *                }
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The empty text to show for each field.
		 * @configuration
		 * @optional
		 * @default 'Enter Filter Text...'
		 * @type {string}
		 */
		emptyText?: string;
		/** 
		 * 
		 * @configuration
		 * @optional
		 * @default {xtype: 'textfield', enableKeyEvents: true, hideEmptyLabel: false, iconCls: Ext.baseCSSPrefix + 'grid-filters-find', labelSeparator: '', labelWidth: 29, margin: 0, selectOnFocus: true}
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {bodyPadding: 3, showSeparator: false}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 500
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                                 config
		 * @returns {Ext.grid.filters.filter.String.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.String.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                 [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.String.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.String.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.String.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.String.Statics;
	}
}
declare namespace Ext.grid.filters.filter.TriFilter {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.filters.filter.TriFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.TriFilter.html)
	 * This abstract base class is used by grid filters that have a three
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Indicates the initial status of the filter (defaults to false).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		active?: boolean;
		/** 
		 * The [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) dataIndex of the field this filter represents.
		 * The dataIndex does not actually have to exist in the store.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dataIndex?: string;
		/** 
		 * The default configuration options for any menu items created by this filter.
		 * 
		 * Example usage:
		 * 
		 *     itemDefaults: {
		 *         width: 150
		 *     },
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		itemDefaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {xtype: 'menu'}
		 * @type {object}
		 */
		menuDefaults?: object;
		/** 
		 * Number of milliseconds to wait after user interaction to fire an update. Only supported
		 * by filters: 'list', 'numeric', and 'string'.
		 * @configuration
		 * @optional
		 * @default 500
		 * @type {number}
		 */
		updateBuffer?: number;
		/** 
		 * Template method to be implemented by all subclasses that is to
		 * get and return the value of the filter.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {object}  The 'serialized' form of this filter
		 */
		getValue? (): object;
		/** 
		 * Template method to be implemented by all subclasses that need to perform
		 * any operations before the column filter has finished construction.
		 * @method
		 * @private (method)
		 * @template
		 * @returns {void}  
		 */
		preprocess? (): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) to call the superclass
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
		 * Given this example [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) definition and instance:
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
		 * @param   {object}                                    config
		 * @returns {Ext.grid.filters.filter.TriFilter.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.filters.filter.TriFilter.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                    [value] The value to set for the name parameter.
		 * @returns {Ext.grid.filters.filter.TriFilter.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.filters.filter.TriFilter.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#property-self),
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
		 * @returns {Ext.grid.filters.filter.TriFilter.Statics}  
		 */
		statics? (): Ext.grid.filters.filter.TriFilter.Statics;
	}
}
declare namespace Ext.grid.filters.filter.Base {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.Base](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Base.html)
	 * Abstract base class for filter implementations.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.Boolean {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Boolean.html)
	 * The boolean grid filter allows you to create a filter selection that limits results
	 * to values matching true or false.  The filter can be set programmatically or via
	 * user input with a configurable [radio field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Radio.html) in the filter section
	 * of the column header.
	 * 
	 * Boolean filters use unique radio group IDs, so you may utilize more than one.
	 * 
	 * Example Boolean Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', 'visible'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', visible: true},
	 *            {id: 1, show: 'Doctor Who', visible: true},
	 *            {id: 2, show: 'Farscape', visible: false},
	 *            {id: 3, show: 'Firefly', visible: true},
	 *            {id: 4, show: 'Star Trek', visible: true},
	 *            {id: 5, show: 'Star Wars: Christmas Special', visible: false}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'visible',
	 *            text: 'Visibility',
	 *            width: 125,
	 *            filter: {
	 *                type: 'boolean',
	 *                value: 'true',
	 *                yesText: 'True',
	 *                noText: 'False'
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.Date {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Date.html)
	 * The date grid filter allows you to create a filter selection that limits results
	 * to values matching specific date constraints.  The filter can be set programmatically or via
	 * user input with a configurable [DatePicker menu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.picker.Date.html) in the filter section
	 * of the column header.
	 * 
	 * Example Date Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show', {
	 *              name: 'airDate',
	 *              type: 'date',
	 *              dateFormat: 'Y-m-d'
	 *        }],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', airDate: '1978-09-17'},
	 *            {id: 1, show: 'Doctor Who', airDate: '1963-11-23'},
	 *            {id: 2, show: 'Farscape', airDate: '1999-03-19'},
	 *            {id: 3, show: 'Firefly', airDate: '2002-12-20'},
	 *            {id: 4, show: 'Star Trek', airDate: '1966-09-08'},
	 *            {id: 5, show: 'Star Wars: Christmas Special', airDate: '1978-11-17'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 375,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            xtype: 'datecolumn',
	 *            dataIndex: 'airDate',
	 *            text: 'Original Air Date',
	 *            width: 125,
	 *            filter: {
	 *                type: 'date',
	 *    
	 *                // optional picker config
	 *                pickerDefaults: {
	 *                    // any DatePicker configs
	 *                } 
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.List {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.List](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html)
	 * The list grid filter allows you to create a filter selection that limits results
	 * to values matching an element in a list.  The filter can be set programmatically or via
	 * user input with a configurable [check box field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Checkbox.html) in the filter section
	 * of the column header.
	 * 
	 * List filters are able to be preloaded/backed by an [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html) to load
	 * their options the first time they are shown.  They are also able to create their own
	 * list of values from  all unique values of the specified [dataIndex](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) field in
	 * the store at first time of filter invocation.
	 * 
	 * Example List Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show','rating'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica', rating: 2},
	 *            {id: 1, show: 'Doctor Who', rating: 4},
	 *            {id: 2, show: 'Farscape', rating: 3},
	 *            {id: 3, show: 'Firefly', rating: 4},
	 *            {id: 4, show: 'Star Trek', rating: 1},
	 *            {id: 5, show: 'Star Wars: Christmas Special', rating: 5}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 350,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1                  
	 *        },{
	 *            dataIndex: 'rating',
	 *            text: 'Rating',
	 *            width: 75,
	 *            filter: {
	 *                type: 'list',
	 *                value: 5                      
	 *            }
	 *        }]
	 *    });
	 * 
	 * ## Options
	 * 
	 * There are three means to determine the list of options to present to the user:
	 * 
	 * - The [`options`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-options) config.
	 * - The [`store`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-store) config. In this mode, the [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField)
	 *   and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField) configs are used to extract the presentation and
	 *   filtering values from the `store` and apply to the menu items and grid store
	 *   filter, respectively.
	 * - If none of the above is specified, the associated grid's store is used. In this
	 *   case, the [`dataIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-dataIndex) is used to determine the filter values and
	 *   the [`labelIndex`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelIndex) is used to populate the menu items. These fields
	 *   are extracted from the records in the associated grid's store. Both of these
	 *   configs default to the column's `dataIndex` property.
	 * 
	 * In all of these modes, a store is created that is synchronized with the menu items.
	 * The records in this store have [`idField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-idField) and [`labelField`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.List.html#cfg-labelField)
	 * fields that get populated from which ever source was provided.
	 * 
	 *    var filters = Ext.create('Ext.grid.Panel', {
	 *        ...
	 *        columns: [{
	 *            text: 'Size',
	 *            dataIndex: 'size',
	 *    
	 *            filter: {
	 *                type: 'list',
	 *                // options will be used as data to implicitly creates an ArrayStore
	 *                options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 *            }
	 *        }],
	 *        ...
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.Number {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.Number.html)
	 * Filter type for [number columns](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.column.Number.html).
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *          fields: ['id','show'],
	 *          data: [
	 *              {id: 0, show: 'Battlestar Galactica'},
	 *              {id: 1, show: 'Doctor Who'},
	 *              {id: 2, show: 'Farscape'},
	 *              {id: 3, show: 'Firefly'},
	 *              {id: 4, show: 'Star Trek'},
	 *              {id: 5, show: 'Star Wars: Christmas Special'}
	 *          ]
	 *       });
	 *    
	 *      Ext.create('Ext.grid.Panel', {
	 *          renderTo: Ext.getBody(),
	 *          title: 'Sci-Fi Television',
	 *          height: 250,
	 *          width: 250,
	 *          store: shows,
	 *          plugins: 'gridfilters',
	 *          columns: [{
	 *              dataIndex: 'id',
	 *              text: 'ID',
	 *              width: 50,
	 *              filter: 'number' // May also be 'numeric'
	 *          },{
	 *              dataIndex: 'show',
	 *              text: 'Show',
	 *              flex: 1                  
	 *          }]
	 *      });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.SingleFilter {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.SingleFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.SingleFilter.html)
	 * This abstract base class is used by grid filters that have a single
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.String {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.String.html)
	 * The string grid filter allows you to create a filter selection that limits results
	 * to values matching a particular string.  The filter can be set programmatically or via
	 * user input with a configurable [text field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Text.html) in the filter section
	 * of the column header.
	 * 
	 * Example String Filter Usage:
	 * 
	 *    var shows = Ext.create('Ext.data.Store', {
	 *        fields: ['id','show'],
	 *        data: [
	 *            {id: 0, show: 'Battlestar Galactica'},
	 *            {id: 1, show: 'Doctor Who'},
	 *            {id: 2, show: 'Farscape'},
	 *            {id: 3, show: 'Firefly'},
	 *            {id: 4, show: 'Star Trek'},
	 *            {id: 5, show: 'Star Wars: Christmas Special'}
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.grid.Panel', {
	 *        renderTo: Ext.getBody(),
	 *        title: 'Sci-Fi Television',
	 *        height: 250,
	 *        width: 250,
	 *        store: shows,
	 *        plugins: 'gridfilters',
	 *        columns: [{
	 *            dataIndex: 'id',
	 *            text: 'ID',
	 *            width: 50
	 *        },{
	 *            dataIndex: 'show',
	 *            text: 'Show',
	 *            flex: 1,
	 *            filter: {
	 *                // required configs
	 *                type: 'string',
	 *                // optional configs
	 *                value: 'star',  // setting a value makes the filter active. 
	 *                itemDefaults: {
	 *                    // any Ext.form.field.Text configs accepted
	 *                }
	 *            }
	 *        }]
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
declare namespace Ext.grid.filters.filter.TriFilter {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.grid.filters.filter.TriFilter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.filters.filter.TriFilter.html)
	 * This abstract base class is used by grid filters that have a three
	 * [store filter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html#cfg-filters).
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when an inactive filter becomes active
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		activate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when an active filter becomes inactive
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		deactivate? (_this: Ext.grid.filters.Filters, eOpts: object): void;
		/** 
		 * Fires when a filter configuration has changed
		 * @event
		 * @param   {Ext.grid.filters.Filters} _this The filter object.
		 * @param   {object}                   eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                     
		 */
		update? (_this: Ext.grid.filters.Filters, eOpts: object): void;
	}
}
