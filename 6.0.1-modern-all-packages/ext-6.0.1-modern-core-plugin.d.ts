declare namespace Ext.plugin {
	/** 
	 * [Ext.plugin.Abstract](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Abstract.html)
	 * The AbstractPlugin class is the base class from which user-implemented plugins should inherit.
	 * 
	 * This class defines the essential API of plugins as used by Components by defining the following methods:
	 * 
	 * - `init` : The plugin initialization method which the owning Component calls at Component initialization time.
	 *   The Component passes itself as the sole parameter.
	 *   Subclasses should set up bidirectional links between the plugin and its client Component here.
	 * - `destroy` : The plugin cleanup method which the owning Component calls at Component destruction time.
	 *   Use this method to break links between the plugin and the Component and to free any allocated resources.
	 */
	class Abstract extends Ext.Base {
		/** 
		 * `true` in this class to identify an object as an instantiated Plugin, or subclass thereof.
		 * @property
		 * @public (property)
		 * @default true
		 * @type {boolean}
		 */
		isPlugin?: boolean;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.plugin.Abstract.Statics}
		 */
		self?: Ext.plugin.Abstract.Statics | Ext.Base.Statics;
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
		 * @param   {object}                       members    The members to add to this class.
		 * @param   {boolean}                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.Abstract|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.Abstract;
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
		 * @param   {object}                       members
		 * @returns {Ext.plugin.Abstract|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.plugin.Abstract;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                       members
		 * @returns {Ext.plugin.Abstract|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.plugin.Abstract;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                       name
		 * @param   {object}                       member
		 * @returns {Ext.plugin.Abstract|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.plugin.Abstract;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                       fn
		 * @param   {object}                       scope
		 * @returns {Ext.plugin.Abstract|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.Abstract;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Instantiates the plugin.
		 * @method
		 * @public (method)
		 * @param   {object} [config] Configuration object.
		 */
		constructor (config?: object);
		/** 
		 * Creates clone of the plugin.
		 * @method
		 * @public (method)
		 * @param   {object} [overrideCfg] Additional config for the derived plugin.
		 * @returns {void}                 
		 */
		clonePlugin? (overrideCfg?: object): void;
		/** 
		 * The destroy method is invoked by the owning Component at the time the Component is
		 * being destroyed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the component to which this plugin is attached.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  Owner component.
		 */
		getCmp? (): Ext.Component;
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
		 * The init method is invoked after initComponent method has been run for the client Component.
		 * 
		 * The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional
		 * links between the plugin and its client Component in their own implementation of this method.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} client The client Component which owns this plugin.
		 * @returns {void}                 
		 */
		init? (client: Ext.Component): void;
		/** 
		 * Sets the component to which this plugin is attached.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} cmp Owner component.
		 * @returns {void}              
		 */
		setCmp? (cmp: Ext.Component): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.Abstract|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.Abstract;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                       config
		 * @returns {Ext.plugin.Abstract|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.plugin.Abstract;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.plugin.Abstract.Statics;
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
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Private.
		 * Inject a ptype property so that Component.findPlugin(ptype) works.
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @param   {object} data
		 * @param   {object} hooks
		 * @returns {void}         
		 */
		onClassExtended? (cls: object, data: object, hooks: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                     names The names of the linked objects to destroy.
		 * @returns {Ext.plugin.Abstract|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.plugin.Abstract;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.plugin.LazyItems](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.LazyItems.html)
	 * This plugin defers the execution cost of the instantiation and initialization of child components of un-rendered items.
	 * 
	 * For example, in a deferredRender [TabPanel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.tab.Panel.html), the un-rendered tabs
	 * do not have to incur the cost of instantiating and initializing their descendant components until render.
	 * 
	 * This plugin allows that.
	 * 
	 * Add the items to the plugin:
	 * 
	 *    {
	 *        xtype: 'tabpanel',
	 *        items: [{
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }, {
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }]
	 *    }
	 * 
	 */
	class LazyItems extends Ext.plugin.Abstract {
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.plugin.LazyItems.Statics}
		 */
		self?: Ext.plugin.LazyItems.Statics | Ext.plugin.Abstract.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                            members    The members to add to this class.
		 * @param   {boolean}                                           [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                           [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.LazyItems;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.Abstract;
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
		 * @param   {object}                                            members
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.plugin.LazyItems;
		static addStatics? (members: object): typeof Ext.plugin.Abstract;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                            members
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.plugin.LazyItems;
		static addInheritableStatics? (members: object): typeof Ext.plugin.Abstract;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                            name
		 * @param   {object}                                            member
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.plugin.LazyItems;
		static addMember? (name: object, member: object): typeof Ext.plugin.Abstract;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                            fn
		 * @param   {object}                                            scope
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.LazyItems;
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.Abstract;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Instantiates the plugin.
		 * @method
		 * @public (method)
		 * @param   {object} [config] Configuration object.
		 */
		constructor (config?: object);
		/** 
		 * Creates clone of the plugin.
		 * @method
		 * @public (method)
		 * @param   {object} [overrideCfg] Additional config for the derived plugin.
		 * @returns {void}                 
		 */
		clonePlugin? (overrideCfg?: object): void;
		/** 
		 * The destroy method is invoked by the owning Component at the time the Component is
		 * being destroyed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the component to which this plugin is attached.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  Owner component.
		 */
		getCmp? (): Ext.Component;
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
		 * The init method is invoked after initComponent method has been run for the client Component.
		 * 
		 * The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional
		 * links between the plugin and its client Component in their own implementation of this method.
		 * @method
		 * @public (method)
		 * @param   {object} comp
		 * @returns {void}        
		 */
		init? (comp: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.plugin.Abstract.init](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Abstract.html#method-init).
		 * The init method is invoked after initComponent method has been run for the client Component.
		 * 
		 * The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional
		 * links between the plugin and its client Component in their own implementation of this method.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} client The client Component which owns this plugin.
		 * @returns {void}                 
		 */
		init? (client: Ext.Component): void;
		/** 
		 * Sets the component to which this plugin is attached.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} cmp Owner component.
		 * @returns {void}              
		 */
		setCmp? (cmp: Ext.Component): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                            [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.LazyItems;
		setConfig? (name: string | object, value?: object): Ext.plugin.Abstract;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                            config
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.plugin.LazyItems;
		initConfig? (config: object): Ext.plugin.Abstract;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.LazyItems.Statics|Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.plugin.LazyItems.Statics;
		statics? (): Ext.plugin.Abstract.Statics;
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
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Private.
		 * Inject a ptype property so that Component.findPlugin(ptype) works.
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @param   {object} data
		 * @param   {object} hooks
		 * @returns {void}         
		 */
		onClassExtended? (cls: object, data: object, hooks: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                          names The names of the linked objects to destroy.
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.plugin.LazyItems;
		unlink? (names: string[]): Ext.plugin.Abstract;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
	 * Adds a Load More button at the bottom of the list. When the user presses this button,
	 * the next page of data will be loaded into the store and appended to the List.
	 * 
	 * By specifying [`autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging): true`, an 'infinite scroll' effect can be achieved,
	 * i.e., the next page of content will load automatically when the user scrolls to the
	 * bottom of the list.
	 * 
	 * ## Example
	 * 
	 *    Ext.create('Ext.dataview.List', {
	 *    
	 *        store: Ext.create('TweetStore'),
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.ListPaging',
	 *                autoPaging: true
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{profile_image_url}" /&gt;',
	 *            '&lt;div class="tweet"&gt;{text}&lt;/div&gt;'
	 *        ]
	 *    });
	 * 
	 */
	class ListPaging extends Ext.Component {
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
		 * A configuration object for [Ext.Element.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html#static-method-create)() that is used to create the Element
		 * template.  Supports all the standard options of a [Ext.Element.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html#static-method-create)() config and
		 * adds 2 additional options:
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `reference` - this option specifies a name for Element references.  These
		 * references names become properties of the Widget instance and refer to [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
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
		 *        innerEl = foo.innerEl; // an Ext.Element that wraps the innerElement
		 * 
		 * The reference attribute is optional, but all Widgets must have a `'element'`
		 * reference on some element within the template (usually the outermost one).
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `listeners` - a standard listeners object as specified by [Ext.mixin.Observable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html).
		 * 
		 *   element: {
		 * 
		 *        reference: 'element',
		 *        listeners: {
		 *            click: 'onClick'
		 *        },
		 *        children: [{
		 *            reference: 'innerElement',
		 *            listeners: {
		 *                click: 'onInnerClick'
		 *            }
		 *        }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  Since listeners cannot be attached without an [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) reference the `reference`
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
		 * @default {reference: 'element', classList: ['x-unsized']}
		 * @type {object}
		 */
		element?: object;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.plugin.ListPaging.Statics}
		 */
		self?: Ext.plugin.ListPaging.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default {id: 'traversable'}
		 * @type {object}
		 */
		mixinConfig?: object;
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
		 * @param   {object}                                                              members    The members to add to this class.
		 * @param   {boolean}                                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.ListPaging;
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
		 * @param   {object}                                                              members
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.plugin.ListPaging;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                                              members
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.plugin.ListPaging;
		static addInheritableStatics? (members: object): typeof Ext.Component;
		static addInheritableStatics? (members: object): typeof Ext.Widget;
		static addInheritableStatics? (members: object): typeof Ext.Evented;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                              name
		 * @param   {object}                                                              member
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.plugin.ListPaging;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                              fn
		 * @param   {object}                                                              scope
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.ListPaging;
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
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-onBefore).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.addCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-addCls).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) is an Observable instance.
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Destroys this Component. If it is currently added to a Container it will first be removed from that Container.
		 * All [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) references are also deleted and the Component is de-registered from [Ext.ComponentManager](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentManager.html)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
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
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) returns the
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
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)), but before any other
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
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * Returns the value of [autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoPaging? (): boolean;
		/** 
		 * Returns the value of [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getBaseCls? (): string;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getBorder? (): boolean;
		/** 
		 * Returns the value of [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getBottom? (): number | string;
		/** 
		 * Returns the value of [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCentered? (): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls).
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
		 * Returns the value of [contentEl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element|HTMLElement|string}  
		 */
		getContentEl? (): Ext.Element | HTMLElement | string;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDisabled? (): boolean;
		/** 
		 * Returns the value of [disabledCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabledCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDisabledCls? (): string;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Returns the value of [enterAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getEnterAnimation? (): string | any;
		/** 
		 * Returns the value of [exitAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getExitAnimation? (): string | any;
		/** 
		 * Returns the value of [floatingCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-floatingCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getFloatingCls? (): string;
		/** 
		 * Returns the value of [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getHeight? (): number | string;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [hiddenCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hiddenCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getHiddenCls? (): string;
		/** 
		 * Returns the value of [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getHideAnimation? (): string | any;
		/** 
		 * Returns the value of [html](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.Element|HTMLElement}  
		 */
		getHtml? (): string | Ext.Element | HTMLElement;
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
		 * Returns the value of [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getLeft? (): number | string;
		/** 
		 * Returns the value of [loadMoreText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-loadMoreText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getLoadMoreText? (): string;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMargin? (): number | string;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxHeight? (): number | string;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxWidth? (): number | string;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinHeight? (): number | string;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinWidth? (): number | string;
		/** 
		 * Returns the value of [noMoreRecordsText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-noMoreRecordsText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getNoMoreRecordsText? (): string;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Returns the parent of this component, if it has one.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  The parent of this component.
		 */
		getParent? (): Ext.Component;
		/** 
		 * Returns the value of [plugins](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-plugins).
		 * @method
		 * @public (method)
		 * @returns {object|any[]}  
		 */
		getPlugins? (): object | any[];
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Model}  
		 */
		getRecord? (): Ext.data.Model;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [renderTo](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element}  
		 */
		getRenderTo? (): Ext.Element;
		/** 
		 * Returns the value of [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getRight? (): number | string;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation).
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
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStyleHtmlCls? (): string;
		/** 
		 * Returns the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getStyleHtmlContent? (): boolean;
		/** 
		 * Returns the value of [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getTop? (): number | string;
		/** 
		 * Returns the value of [tpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|Ext.Template|Ext.XTemplate[]}  
		 */
		getTpl? (): string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * Returns the value of [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTplWriteMode? (): string;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getUi? (): string;
		/** 
		 * Returns the value of [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUserCls? (): string | string[];
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns the value of [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getWidth? (): number | string;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
		 * available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) header.
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
		 * Returns the value of [zIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-zIndex).
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
		 * Returns `true` if this component has a parent.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this component has a parent.
		 */
		hasParent? (): boolean;
		/** 
		 * Hides this Component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}                      [animation] You can specify an animation here or a bool to use the [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation) config.
		 * @returns {Ext.plugin.ListPaging|Ext.Component}             
		 */
		hide? (animation?: object | boolean): Ext.plugin.ListPaging;
		hide? (animation?: object | boolean): Ext.Component;
		/** 
		 * Tests whether this Widget matches a [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html)
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
		 * @param   {boolean} [deep]
		 * `true` to check if this component
		 * is hidden because a parent container is hidden.
		 * @returns {boolean}        `true` if currently hidden.
		 */
		isHidden? (deep?: boolean): boolean;
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
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) header.
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
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-addManagedListener).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeManagedListener).
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-unBefore).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.removeCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-removeCls).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-mon) method.
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
		 * Replaces specified classes with the newly specified classes.
		 * It uses the [addCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-addCls) and [removeCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-removeCls) methods, so if the class(es) you are removing don't exist, it will
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
		 * Resets [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will un-float this component.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetFloating? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
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
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets the value of [autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoPaging The new value.
		 * @returns {void}               
		 */
		setAutoPaging? (autoPaging: boolean): void;
		/** 
		 * Sets the value of [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls).
		 * @method
		 * @public (method)
		 * @param   {string} baseCls The new value.
		 * @returns {void}           
		 */
		setBaseCls? (baseCls: string): void;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {boolean} border The new value.
		 * @returns {void}           
		 */
		setBorder? (border: boolean): void;
		/** 
		 * Sets the value of [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @param   {number|string} bottom The new value.
		 * @returns {void}                 
		 */
		setBottom? (bottom: number | string): void;
		/** 
		 * Sets the value of [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @param   {boolean} centered The new value.
		 * @returns {void}             
		 */
		setCentered? (centered: boolean): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls).
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
		 * @param   {string|object}                                                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                              [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.ListPaging;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [contentEl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element|HTMLElement|string} contentEl The new value.
		 * @returns {void}                                     
		 */
		setContentEl? (contentEl: Ext.Element | HTMLElement | string): void;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled The new value.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the value of [disabledCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabledCls).
		 * @method
		 * @public (method)
		 * @param   {string} disabledCls The new value.
		 * @returns {void}               
		 */
		setDisabledCls? (disabledCls: string): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [draggable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-draggable).
		 * @method
		 * @public (method)
		 * @param   {object} draggable The new value.
		 * @returns {void}             
		 */
		setDraggable? (draggable: object): void;
		/** 
		 * Sets the value of [enterAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} enterAnimation The new value.
		 * @returns {void}                      
		 */
		setEnterAnimation? (enterAnimation: string | any): void;
		/** 
		 * Sets the value of [exitAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} exitAnimation The new value.
		 * @returns {void}                     
		 */
		setExitAnimation? (exitAnimation: string | any): void;
		/** 
		 * Sets the value of [floatingCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-floatingCls).
		 * @method
		 * @public (method)
		 * @param   {string} floatingCls The new value.
		 * @returns {void}               
		 */
		setFloatingCls? (floatingCls: string): void;
		/** 
		 * Sets the value of [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @param   {number|string} height The new value.
		 * @returns {void}                 
		 */
		setHeight? (height: number | string): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [hiddenCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hiddenCls).
		 * @method
		 * @public (method)
		 * @param   {string} hiddenCls The new value.
		 * @returns {void}             
		 */
		setHiddenCls? (hiddenCls: string): void;
		/** 
		 * Sets the value of [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} hideAnimation The new value.
		 * @returns {void}                     
		 */
		setHideAnimation? (hideAnimation: string | any): void;
		/** 
		 * Sets the value of [html](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Element|HTMLElement} html The new value.
		 * @returns {void}                                
		 */
		setHtml? (html: string | Ext.Element | HTMLElement): void;
		/** 
		 * Sets the value of [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @param   {number|string} left The new value.
		 * @returns {void}               
		 */
		setLeft? (left: number | string): void;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Sets the value of [loadMoreText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-loadMoreText).
		 * @method
		 * @public (method)
		 * @param   {string} loadMoreText The new value.
		 * @returns {void}                
		 */
		setLoadMoreText? (loadMoreText: string): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The new value.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxHeight The new value.
		 * @returns {void}                    
		 */
		setMaxHeight? (maxHeight: number | string): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxWidth The new value.
		 * @returns {void}                   
		 */
		setMaxWidth? (maxWidth: number | string): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} minHeight The new value.
		 * @returns {void}                    
		 */
		setMinHeight? (minHeight: number | string): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} minWidth The new value.
		 * @returns {void}                   
		 */
		setMinWidth? (minWidth: number | string): void;
		/** 
		 * Sets the value of [noMoreRecordsText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-noMoreRecordsText).
		 * @method
		 * @public (method)
		 * @param   {string} noMoreRecordsText The new value.
		 * @returns {void}                     
		 */
		setNoMoreRecordsText? (noMoreRecordsText: string): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [plugins](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-plugins).
		 * @method
		 * @public (method)
		 * @param   {object|any[]} plugins The new value.
		 * @returns {void}                 
		 */
		setPlugins? (plugins: object | any[]): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The new value.
		 * @returns {void}                  
		 */
		setRecord? (record: Ext.data.Model): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [renderTo](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element} renderTo The new value.
		 * @returns {void}                 
		 */
		setRenderTo? (renderTo: Ext.Element): void;
		/** 
		 * Sets the value of [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @param   {number|string} right The new value.
		 * @returns {void}                
		 */
		setRight? (right: number | string): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation).
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
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @param   {string} styleHtmlCls The new value.
		 * @returns {void}                
		 */
		setStyleHtmlCls? (styleHtmlCls: string): void;
		/** 
		 * Sets the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @param   {boolean} styleHtmlContent The new value.
		 * @returns {void}                     
		 */
		setStyleHtmlContent? (styleHtmlContent: boolean): void;
		/** 
		 * Sets the value of [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @param   {number|string} top The new value.
		 * @returns {void}              
		 */
		setTop? (top: number | string): void;
		/** 
		 * Sets the value of [tpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|Ext.Template|Ext.XTemplate[]} tpl The new value.
		 * @returns {void}                                             
		 */
		setTpl? (tpl: string | string[] | Ext.Template | Ext.XTemplate[]): void;
		/** 
		 * Sets the value of [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @param   {string} tplWriteMode The new value.
		 * @returns {void}                
		 */
		setTplWriteMode? (tplWriteMode: string): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {string} ui The new value.
		 * @returns {void}      
		 */
		setUi? (ui: string): void;
		/** 
		 * Sets the value of [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} userCls The new value.
		 * @returns {void}                    
		 */
		setUserCls? (userCls: string | string[]): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Sets the value of [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @param   {number|string} width The new value.
		 * @returns {void}                
		 */
		setWidth? (width: number | string): void;
		/** 
		 * Sets the value of [zIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-zIndex).
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
		 * @param   {object|boolean}                      [animation] You can specify an animation here or a bool to use the [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation) config.
		 * @returns {Ext.plugin.ListPaging|Ext.Component}             
		 */
		show? (animation?: object | boolean): Ext.plugin.ListPaging;
		show? (animation?: object | boolean): Ext.Component;
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
		 * You can put a '?' at the end of the alignment string to constrain the floating element to the
		 * [Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html)
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
		 * @returns {void}                      
		 */
		showBy? (component: Ext.Component, alignment?: string): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
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
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Add or removes a class based on if the class is already added to the Component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                                   className The class to toggle.
		 * @param   {boolean}                                  [state]
		 * If specified as `true`, causes the class to be added. If specified as `false`, causes
		 * the class to be removed.
		 * @returns {Ext.plugin.ListPaging|Ext.Component|void}           this
		 */
		toggleCls? (className: string, state?: boolean): Ext.plugin.ListPaging;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		toggleCls? (className: string, state?: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
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
		 * Walks up the `ownerCt` axis looking for an ancestor Container which matches
		 * the passed simple selector.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] The simple selector to test.
		 * @returns {Ext.Container}            The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string): Ext.Container;
		/** 
		 * Updates the [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls) configuration
		 * @method
		 * @public (method)
		 * @param   {object} newHtmlCls
		 * @param   {object} oldHtmlCls
		 * @returns {void}              
		 */
		updateStyleHtmlCls? (newHtmlCls: object, oldHtmlCls: object): void;
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
		 * @returns {void}  
		 */
		getTranslatable? (): void;
		/** 
		 * Returns the value of [useBodyElement](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getUseBodyElement? (): object;
		/** 
		 * Sets the value of [translatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-translatable).
		 * @method
		 * @private (method)
		 * @param   {object} translatable The new value.
		 * @returns {void}                
		 */
		setTranslatable? (translatable: object): void;
		/** 
		 * Sets the value of [useBodyElement](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement The new value.
		 * @returns {void}                  
		 */
		setUseBodyElement? (useBodyElement: object): void;
		/** 
		 * All cls methods directly report to the [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls) configuration, so anytime it changes, [updateCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-updateCls) will be called
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
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		updateDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newUi
		 * @param   {object} oldUi
		 * @returns {void}         
		 */
		updateUi? (newUi: object, oldUi: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * Prepares information on aligning this to component using alignment.
		 * Also checks to see if this is already aligned to component according to alignment.
		 * @method
		 * @protected (method)
		 * @param   {object} component
		 * @param   {object} alignment
		 * @returns {void}             
		 */
		getAlignmentInfo? (component: object, alignment: object): void;
		/** 
		 * A template method for modifying the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) config before it is processed.
		 * By default adds the result of `this.getTemplate()` as the `children` array of
		 * [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) if `children` were not specified in the original
		 * [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) config.  Typically this method should not need to be implemented
		 * in subclasses.  Instead the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) property should be use to configure
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
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-up)
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
		 * @param   {object}                                                              config
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.plugin.ListPaging;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#property-element) config will be
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
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Observable.resolveListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resolveListenerScope).
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.ListPaging.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.plugin.ListPaging.Statics;
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) instead.
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
		 * Reduces instantiation time for a Widget by lazily instantiating [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
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
		 * @param   {object} component
		 * @param   {object} alignment
		 * @returns {void}             
		 */
		alignTo? (component: object, alignment: object): void;
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
		 * Checks if the `cls` is a string. If it is, changed it into an array.
		 * @method
		 * @private (method)
		 * @param   {string|any[]} cls
		 * @returns {any[]|null}       
		 */
		applyCls? (cls: string | any[]): any[] | null;
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
		 * @param   {object} plugins
		 * @returns {void}           
		 */
		applyPlugins? (plugins: object): void;
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
		applyStyleHtmlContent? (config: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyTpl? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyTranslatable? (config: object): void;
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
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		createPlugin? (config: object): void;
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
		 * option of [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) for more
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
		doRefreshFloating? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestors? (): void;
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
		 * Current Alignment information from the last alignTo call
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentAlignmentInfo? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTranslatableBehavior? (): void;
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
		isFloating? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isInnerItem? (): void;
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
		isRendered? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
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
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-publishState)
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
		 * Temporary workarounds to keep [Ext.ComponentManager](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentManager.html) from throwing errors when dealing
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
		onPainted? (): void;
		/** 
		 * If we're using autoPaging and detect that the user has scrolled to the bottom, kick off loading of the next page
		 * @method
		 * @private (method)
		 * @param   {object} scroller
		 * @param   {object} x
		 * @param   {object} y
		 * @returns {void}            
		 */
		onScrollEnd? (scroller: object, x: object, y: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Component.onScrollEnd](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-onScrollEnd).
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component
		 * @returns {void}                    
		 */
		onShowByErased? (component: Ext.Component): void;
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
		refreshFloating? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshInnerState? (): void;
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
		 * Sets the current Alignment information, called by alignTo
		 * @method
		 * @private (method)
		 * @param   {object} alignmentInfo
		 * @returns {void}                 
		 */
		setCurrentAlignmentInfo? (alignmentInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} isInner
		 * @returns {void}           
		 */
		setIsInner? (isInner: object): void;
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
		 * @chainable
		 * @param   {object}                              parent
		 * @returns {Ext.plugin.ListPaging|Ext.Component}        this
		 */
		setParent? (parent: object): Ext.plugin.ListPaging;
		setParent? (parent: object): Ext.Component;
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
		 * @method
		 * @private (method)
		 * @param   {object} isVisible
		 * @returns {void}             
		 */
		setVisibility? (isVisible: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		translate? (): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                            names The names of the linked objects to destroy.
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.plugin.ListPaging;
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
		 * @param   {object} newDisabledCls
		 * @param   {object} oldDisabledCls
		 * @returns {void}                  
		 */
		updateDisabledCls? (newDisabledCls: object, oldDisabledCls: object): void;
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
		 * Updates the floatingCls if the component is currently floating
		 * @method
		 * @private (method)
		 * @param   {object} newFloatingCls
		 * @param   {object} oldFloatingCls
		 * @returns {void}                  
		 */
		updateFloatingCls? (newFloatingCls: object, oldFloatingCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHiddenCls
		 * @param   {object} oldHiddenCls
		 * @returns {void}                
		 */
		updateHiddenCls? (newHiddenCls: object, oldHiddenCls: object): void;
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
		 * @param   {object} padding
		 * @returns {void}           
		 */
		updatePadding? (padding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newPlugins
		 * @param   {object} oldPlugins
		 * @returns {void}              
		 */
		updatePlugins? (newPlugins: object, oldPlugins: object): void;
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
		 * @param   {object} top
		 * @returns {void}       
		 */
		updateTop? (top: object): void;
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
	 * [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html)
	 * This plugin adds pull to refresh functionality to the List.
	 * 
	 * ## Example
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'img', 'text'],
	 *        data: [
	 *            {
	 *                name: 'rdougan',
	 *                img: 'https://www.sencha.com/forum/images/statusicon/forum_new-48.png',
	 *                text: 'JavaScript development'
	 *            }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.dataview.List', {
	 *        fullscreen: true,
	 *    
	 *        store: store,
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.PullRefresh',
	 *                pullText: 'Pull down for more new Tweets!'
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{img}" alt="{name} photo" /&gt;',
	 *            '&lt;div class="tweet"&gt;&lt;b&gt;{name}:&lt;/b&gt; {text}&lt;/div&gt;'
	 *        ]
	 *    });
	 * 
	 */
	class PullRefresh extends Ext.Component {
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
		 * A configuration object for [Ext.Element.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html#static-method-create)() that is used to create the Element
		 * template.  Supports all the standard options of a [Ext.Element.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html#static-method-create)() config and
		 * adds 2 additional options:
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `reference` - this option specifies a name for Element references.  These
		 * references names become properties of the Widget instance and refer to [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
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
		 *        innerEl = foo.innerEl; // an Ext.Element that wraps the innerElement
		 * 
		 * The reference attribute is optional, but all Widgets must have a `'element'`
		 * reference on some element within the template (usually the outermost one).
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `listeners` - a standard listeners object as specified by [Ext.mixin.Observable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html).
		 * 
		 *   element: {
		 * 
		 *        reference: 'element',
		 *        listeners: {
		 *            click: 'onClick'
		 *        },
		 *        children: [{
		 *            reference: 'innerElement',
		 *            listeners: {
		 *                click: 'onInnerClick'
		 *            }
		 *        }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  Since listeners cannot be attached without an [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) reference the `reference`
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
		 * @default {reference: 'element', classList: ['x-unsized']}
		 * @type {object}
		 */
		element?: object;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.plugin.PullRefresh.Statics}
		 */
		self?: Ext.plugin.PullRefresh.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default {id: 'traversable'}
		 * @type {object}
		 */
		mixinConfig?: object;
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
		 * @param   {object}                                                               members    The members to add to this class.
		 * @param   {boolean}                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.PullRefresh;
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
		 * @param   {object}                                                               members
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.plugin.PullRefresh;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                                               members
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.plugin.PullRefresh;
		static addInheritableStatics? (members: object): typeof Ext.Component;
		static addInheritableStatics? (members: object): typeof Ext.Widget;
		static addInheritableStatics? (members: object): typeof Ext.Evented;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                               name
		 * @param   {object}                                                               member
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.plugin.PullRefresh;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                               fn
		 * @param   {object}                                                               scope
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.PullRefresh;
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
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-onBefore).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.addCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-addCls).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) is an Observable instance.
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Destroys this Component. If it is currently added to a Container it will first be removed from that Container.
		 * All [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) references are also deleted and the Component is de-registered from [Ext.ComponentManager](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentManager.html)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
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
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) returns the
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
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)), but before any other
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
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * Returns the value of [autoSnapBack](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-autoSnapBack).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoSnapBack? (): boolean;
		/** 
		 * Returns the value of [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getBaseCls? (): string;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getBorder? (): boolean;
		/** 
		 * Returns the value of [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getBottom? (): number | string;
		/** 
		 * Returns the value of [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCentered? (): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls).
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
		 * Returns the value of [contentEl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element|HTMLElement|string}  
		 */
		getContentEl? (): Ext.Element | HTMLElement | string;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDisabled? (): boolean;
		/** 
		 * Returns the value of [disabledCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabledCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDisabledCls? (): string;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Returns the value of [enterAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getEnterAnimation? (): string | any;
		/** 
		 * Returns the value of [exitAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getExitAnimation? (): string | any;
		/** 
		 * Returns the value of [floatingCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-floatingCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getFloatingCls? (): string;
		/** 
		 * Returns the value of [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getHeight? (): number | string;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [hiddenCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hiddenCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getHiddenCls? (): string;
		/** 
		 * Returns the value of [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getHideAnimation? (): string | any;
		/** 
		 * Returns the value of [html](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.Element|HTMLElement}  
		 */
		getHtml? (): string | Ext.Element | HTMLElement;
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
		 * Returns the value of [lastUpdatedDateFormat](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-lastUpdatedDateFormat).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getLastUpdatedDateFormat? (): string;
		/** 
		 * Returns the value of [lastUpdatedText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-lastUpdatedText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getLastUpdatedText? (): string;
		/** 
		 * Returns the value of [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getLeft? (): number | string;
		/** 
		 * Returns the value of [list](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-list).
		 * @method
		 * @public (method)
		 * @returns {Ext.dataview.List}  
		 */
		getList? (): Ext.dataview.List;
		/** 
		 * Returns the value of [loadedText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-loadedText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getLoadedText? (): string;
		/** 
		 * Returns the value of [loadingText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-loadingText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getLoadingText? (): string;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMargin? (): number | string;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxHeight? (): number | string;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxWidth? (): number | string;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinHeight? (): number | string;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinWidth? (): number | string;
		/** 
		 * Returns the value of [overpullSnapBackDuration](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-overpullSnapBackDuration).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getOverpullSnapBackDuration? (): number;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Returns the parent of this component, if it has one.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  The parent of this component.
		 */
		getParent? (): Ext.Component;
		/** 
		 * Returns the value of [plugins](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-plugins).
		 * @method
		 * @public (method)
		 * @returns {object|any[]}  
		 */
		getPlugins? (): object | any[];
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [pullText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-pullText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPullText? (): string;
		/** 
		 * Returns the value of [pullTpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-pullTpl).
		 * @method
		 * @public (method)
		 * @returns {Ext.XTemplate|string|any[]}  
		 */
		getPullTpl? (): Ext.XTemplate | string | any[];
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Model}  
		 */
		getRecord? (): Ext.data.Model;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [releaseText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-releaseText).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReleaseText? (): string;
		/** 
		 * Returns the value of [renderTo](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element}  
		 */
		getRenderTo? (): Ext.Element;
		/** 
		 * Returns the value of [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getRight? (): number | string;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [scrollerAutoRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-scrollerAutoRefresh).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getScrollerAutoRefresh? (): boolean;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation).
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
		 * Returns the value of [snappingAnimationDuration](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-snappingAnimationDuration).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getSnappingAnimationDuration? (): number;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStyleHtmlCls? (): string;
		/** 
		 * Returns the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getStyleHtmlContent? (): boolean;
		/** 
		 * Returns the value of [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getTop? (): number | string;
		/** 
		 * Returns the value of [tpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|Ext.Template|Ext.XTemplate[]}  
		 */
		getTpl? (): string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * Returns the value of [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTplWriteMode? (): string;
		/** 
		 * Returns the value of [translatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-translatable).
		 * @method
		 * @public (method)
		 * @returns {boolean|void}  
		 */
		getTranslatable? (): boolean;
		getTranslatable? (): void;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getUi? (): string;
		/** 
		 * Returns the value of [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUserCls? (): string | string[];
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
		 * available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) header.
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
		 * Returns the value of [zIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-zIndex).
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
		 * Returns `true` if this component has a parent.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this component has a parent.
		 */
		hasParent? (): boolean;
		/** 
		 * Hides this Component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}                       [animation] You can specify an animation here or a bool to use the [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation) config.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component}             
		 */
		hide? (animation?: object | boolean): Ext.plugin.PullRefresh;
		hide? (animation?: object | boolean): Ext.Component;
		/** 
		 * Tests whether this Widget matches a [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html)
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
		 * @param   {boolean} [deep]
		 * `true` to check if this component
		 * is hidden because a parent container is hidden.
		 * @returns {boolean}        `true` if currently hidden.
		 */
		isHidden? (deep?: boolean): boolean;
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
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) header.
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
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-addManagedListener).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeManagedListener).
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-unBefore).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.removeCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-removeCls).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-mon) method.
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
		 * Replaces specified classes with the newly specified classes.
		 * It uses the [addCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-addCls) and [removeCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-removeCls) methods, so if the class(es) you are removing don't exist, it will
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
		 * Resets [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will un-float this component.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetFloating? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
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
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets the value of [autoSnapBack](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-autoSnapBack).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoSnapBack The new value.
		 * @returns {void}                 
		 */
		setAutoSnapBack? (autoSnapBack: boolean): void;
		/** 
		 * Sets the value of [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls).
		 * @method
		 * @public (method)
		 * @param   {string} baseCls The new value.
		 * @returns {void}           
		 */
		setBaseCls? (baseCls: string): void;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {boolean} border The new value.
		 * @returns {void}           
		 */
		setBorder? (border: boolean): void;
		/** 
		 * Sets the value of [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @param   {number|string} bottom The new value.
		 * @returns {void}                 
		 */
		setBottom? (bottom: number | string): void;
		/** 
		 * Sets the value of [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @param   {boolean} centered The new value.
		 * @returns {void}             
		 */
		setCentered? (centered: boolean): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls).
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
		 * @param   {string|object}                                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                               [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.PullRefresh;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [contentEl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element|HTMLElement|string} contentEl The new value.
		 * @returns {void}                                     
		 */
		setContentEl? (contentEl: Ext.Element | HTMLElement | string): void;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled The new value.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the value of [disabledCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabledCls).
		 * @method
		 * @public (method)
		 * @param   {string} disabledCls The new value.
		 * @returns {void}               
		 */
		setDisabledCls? (disabledCls: string): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [draggable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-draggable).
		 * @method
		 * @public (method)
		 * @param   {object} draggable The new value.
		 * @returns {void}             
		 */
		setDraggable? (draggable: object): void;
		/** 
		 * Sets the value of [enterAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} enterAnimation The new value.
		 * @returns {void}                      
		 */
		setEnterAnimation? (enterAnimation: string | any): void;
		/** 
		 * Sets the value of [exitAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} exitAnimation The new value.
		 * @returns {void}                     
		 */
		setExitAnimation? (exitAnimation: string | any): void;
		/** 
		 * Sets the value of [floatingCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-floatingCls).
		 * @method
		 * @public (method)
		 * @param   {string} floatingCls The new value.
		 * @returns {void}               
		 */
		setFloatingCls? (floatingCls: string): void;
		/** 
		 * Sets the value of [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @param   {number|string} height The new value.
		 * @returns {void}                 
		 */
		setHeight? (height: number | string): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [hiddenCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hiddenCls).
		 * @method
		 * @public (method)
		 * @param   {string} hiddenCls The new value.
		 * @returns {void}             
		 */
		setHiddenCls? (hiddenCls: string): void;
		/** 
		 * Sets the value of [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} hideAnimation The new value.
		 * @returns {void}                     
		 */
		setHideAnimation? (hideAnimation: string | any): void;
		/** 
		 * Sets the value of [html](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Element|HTMLElement} html The new value.
		 * @returns {void}                                
		 */
		setHtml? (html: string | Ext.Element | HTMLElement): void;
		/** 
		 * Sets the value of [lastUpdatedDateFormat](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-lastUpdatedDateFormat).
		 * @method
		 * @public (method)
		 * @param   {string} lastUpdatedDateFormat The new value.
		 * @returns {void}                         
		 */
		setLastUpdatedDateFormat? (lastUpdatedDateFormat: string): void;
		/** 
		 * Sets the value of [lastUpdatedText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-lastUpdatedText).
		 * @method
		 * @public (method)
		 * @param   {string} lastUpdatedText The new value.
		 * @returns {void}                   
		 */
		setLastUpdatedText? (lastUpdatedText: string): void;
		/** 
		 * Sets the value of [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @param   {number|string} left The new value.
		 * @returns {void}               
		 */
		setLeft? (left: number | string): void;
		/** 
		 * Sets the value of [list](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-list).
		 * @method
		 * @public (method)
		 * @param   {Ext.dataview.List} list The new value.
		 * @returns {void}                   
		 */
		setList? (list: Ext.dataview.List): void;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Sets the value of [loadedText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-loadedText).
		 * @method
		 * @public (method)
		 * @param   {string} loadedText The new value.
		 * @returns {void}              
		 */
		setLoadedText? (loadedText: string): void;
		/** 
		 * Sets the value of [loadingText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-loadingText).
		 * @method
		 * @public (method)
		 * @param   {string} loadingText The new value.
		 * @returns {void}               
		 */
		setLoadingText? (loadingText: string): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The new value.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxHeight The new value.
		 * @returns {void}                    
		 */
		setMaxHeight? (maxHeight: number | string): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxWidth The new value.
		 * @returns {void}                   
		 */
		setMaxWidth? (maxWidth: number | string): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} minHeight The new value.
		 * @returns {void}                    
		 */
		setMinHeight? (minHeight: number | string): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} minWidth The new value.
		 * @returns {void}                   
		 */
		setMinWidth? (minWidth: number | string): void;
		/** 
		 * Sets the value of [overpullSnapBackDuration](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-overpullSnapBackDuration).
		 * @method
		 * @public (method)
		 * @param   {number} overpullSnapBackDuration The new value.
		 * @returns {void}                            
		 */
		setOverpullSnapBackDuration? (overpullSnapBackDuration: number): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [plugins](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-plugins).
		 * @method
		 * @public (method)
		 * @param   {object|any[]} plugins The new value.
		 * @returns {void}                 
		 */
		setPlugins? (plugins: object | any[]): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [pullText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-pullText).
		 * @method
		 * @public (method)
		 * @param   {string} pullText The new value.
		 * @returns {void}            
		 */
		setPullText? (pullText: string): void;
		/** 
		 * Sets the value of [pullTpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-pullTpl).
		 * @method
		 * @public (method)
		 * @param   {Ext.XTemplate|string|any[]} pullTpl The new value.
		 * @returns {void}                               
		 */
		setPullTpl? (pullTpl: Ext.XTemplate | string | any[]): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The new value.
		 * @returns {void}                  
		 */
		setRecord? (record: Ext.data.Model): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [releaseText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-releaseText).
		 * @method
		 * @public (method)
		 * @param   {string} releaseText The new value.
		 * @returns {void}               
		 */
		setReleaseText? (releaseText: string): void;
		/** 
		 * Sets the value of [renderTo](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element} renderTo The new value.
		 * @returns {void}                 
		 */
		setRenderTo? (renderTo: Ext.Element): void;
		/** 
		 * Sets the value of [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @param   {number|string} right The new value.
		 * @returns {void}                
		 */
		setRight? (right: number | string): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [scrollerAutoRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-scrollerAutoRefresh).
		 * @method
		 * @public (method)
		 * @param   {boolean} scrollerAutoRefresh The new value.
		 * @returns {void}                        
		 */
		setScrollerAutoRefresh? (scrollerAutoRefresh: boolean): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation).
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
		 * Sets the value of [snappingAnimationDuration](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-snappingAnimationDuration).
		 * @method
		 * @public (method)
		 * @param   {number} snappingAnimationDuration The new value.
		 * @returns {void}                             
		 */
		setSnappingAnimationDuration? (snappingAnimationDuration: number): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @param   {string} styleHtmlCls The new value.
		 * @returns {void}                
		 */
		setStyleHtmlCls? (styleHtmlCls: string): void;
		/** 
		 * Sets the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @param   {boolean} styleHtmlContent The new value.
		 * @returns {void}                     
		 */
		setStyleHtmlContent? (styleHtmlContent: boolean): void;
		/** 
		 * Sets the value of [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @param   {number|string} top The new value.
		 * @returns {void}              
		 */
		setTop? (top: number | string): void;
		/** 
		 * Sets the value of [tpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|Ext.Template|Ext.XTemplate[]} tpl The new value.
		 * @returns {void}                                             
		 */
		setTpl? (tpl: string | string[] | Ext.Template | Ext.XTemplate[]): void;
		/** 
		 * Sets the value of [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @param   {string} tplWriteMode The new value.
		 * @returns {void}                
		 */
		setTplWriteMode? (tplWriteMode: string): void;
		/** 
		 * Sets the value of [translatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#cfg-translatable).
		 * @method
		 * @public (method)
		 * @param   {boolean} translatable The new value.
		 * @returns {void}                 
		 */
		setTranslatable? (translatable: boolean): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Component.setTranslatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setTranslatable).
		 * Sets the value of [translatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-translatable).
		 * @method
		 * @private (method)
		 * @param   {object} translatable The new value.
		 * @returns {void}                
		 */
		setTranslatable? (translatable: object): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {string} ui The new value.
		 * @returns {void}      
		 */
		setUi? (ui: string): void;
		/** 
		 * Sets the value of [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} userCls The new value.
		 * @returns {void}                    
		 */
		setUserCls? (userCls: string | string[]): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Sets the value of [zIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-zIndex).
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
		 * @param   {object|boolean}                       [animation] You can specify an animation here or a bool to use the [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation) config.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component}             
		 */
		show? (animation?: object | boolean): Ext.plugin.PullRefresh;
		show? (animation?: object | boolean): Ext.Component;
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
		 * You can put a '?' at the end of the alignment string to constrain the floating element to the
		 * [Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html)
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
		 * @returns {void}                      
		 */
		showBy? (component: Ext.Component, alignment?: string): void;
		/** 
		 * Snaps the List back to the top after a pullrefresh is complete
		 * @method
		 * @public (method)
		 * @param   {boolean} [force] Force the snapback to occur regardless of state {optional}
		 * @returns {void}            
		 */
		snapBack? (force?: boolean): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
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
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Add or removes a class based on if the class is already added to the Component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                                    className The class to toggle.
		 * @param   {boolean}                                   [state]
		 * If specified as `true`, causes the class to be added. If specified as `false`, causes
		 * the class to be removed.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|void}           this
		 */
		toggleCls? (className: string, state?: boolean): Ext.plugin.PullRefresh;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		toggleCls? (className: string, state?: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
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
		 * Walks up the `ownerCt` axis looking for an ancestor Container which matches
		 * the passed simple selector.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] The simple selector to test.
		 * @returns {Ext.Container}            The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string): Ext.Container;
		/** 
		 * Updates the [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls) configuration
		 * @method
		 * @public (method)
		 * @param   {object} newHtmlCls
		 * @param   {object} oldHtmlCls
		 * @returns {void}              
		 */
		updateStyleHtmlCls? (newHtmlCls: object, oldHtmlCls: object): void;
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
		 * Returns the value of [useBodyElement](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getUseBodyElement? (): object;
		/** 
		 * Sets the value of [useBodyElement](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement The new value.
		 * @returns {void}                  
		 */
		setUseBodyElement? (useBodyElement: object): void;
		/** 
		 * All cls methods directly report to the [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls) configuration, so anytime it changes, [updateCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-updateCls) will be called
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
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		updateDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newUi
		 * @param   {object} oldUi
		 * @returns {void}         
		 */
		updateUi? (newUi: object, oldUi: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * Prepares information on aligning this to component using alignment.
		 * Also checks to see if this is already aligned to component according to alignment.
		 * @method
		 * @protected (method)
		 * @param   {object} component
		 * @param   {object} alignment
		 * @returns {void}             
		 */
		getAlignmentInfo? (component: object, alignment: object): void;
		/** 
		 * A template method for modifying the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#property-element) config before it is processed.
		 * By default adds the result of `this.getTemplate()` as the `children` array of
		 * [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#property-element) if `children` were not specified in the original
		 * [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#property-element) config.  Typically this method should not need to be implemented
		 * in subclasses.  Instead the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#property-element) property should be use to configure
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
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-up)
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
		 * @param   {object}                                                               config
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.plugin.PullRefresh;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#property-element) config will be
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
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Observable.resolveListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resolveListenerScope).
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.PullRefresh.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.plugin.PullRefresh.Statics;
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) instead.
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
		 * Reduces instantiation time for a Widget by lazily instantiating [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
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
		 * @param   {object} component
		 * @param   {object} alignment
		 * @returns {void}             
		 */
		alignTo? (component: object, alignment: object): void;
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
		 * Checks if the `cls` is a string. If it is, changed it into an array.
		 * @method
		 * @private (method)
		 * @param   {string|any[]} cls
		 * @returns {any[]|null}       
		 */
		applyCls? (cls: string | any[]): any[] | null;
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
		 * @param   {object} plugins
		 * @returns {void}           
		 */
		applyPlugins? (plugins: object): void;
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
		applyStyleHtmlContent? (config: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyTpl? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyTranslatable? (config: object): void;
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
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		createPlugin? (config: object): void;
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
		 * option of [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) for more
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
		doRefreshFloating? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestors? (): void;
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
		 * Current Alignment information from the last alignTo call
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentAlignmentInfo? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTranslatableBehavior? (): void;
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
		isFloating? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isInnerItem? (): void;
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
		isRendered? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
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
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-publishState)
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
		 * Temporary workarounds to keep [Ext.ComponentManager](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentManager.html) from throwing errors when dealing
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
		onPainted? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component
		 * @returns {void}                    
		 */
		onShowByErased? (component: Ext.Component): void;
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
		refreshFloating? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshInnerState? (): void;
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
		 * Sets the current Alignment information, called by alignTo
		 * @method
		 * @private (method)
		 * @param   {object} alignmentInfo
		 * @returns {void}                 
		 */
		setCurrentAlignmentInfo? (alignmentInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} isInner
		 * @returns {void}           
		 */
		setIsInner? (isInner: object): void;
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
		 * @chainable
		 * @param   {object}                               parent
		 * @returns {Ext.plugin.PullRefresh|Ext.Component}        this
		 */
		setParent? (parent: object): Ext.plugin.PullRefresh;
		setParent? (parent: object): Ext.Component;
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
		 * @method
		 * @private (method)
		 * @param   {object} isVisible
		 * @returns {void}             
		 */
		setVisibility? (isVisible: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		translate? (): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                             names The names of the linked objects to destroy.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.plugin.PullRefresh;
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
		 * @param   {object} newDisabledCls
		 * @param   {object} oldDisabledCls
		 * @returns {void}                  
		 */
		updateDisabledCls? (newDisabledCls: object, oldDisabledCls: object): void;
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
		 * Updates the floatingCls if the component is currently floating
		 * @method
		 * @private (method)
		 * @param   {object} newFloatingCls
		 * @param   {object} oldFloatingCls
		 * @returns {void}                  
		 */
		updateFloatingCls? (newFloatingCls: object, oldFloatingCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHiddenCls
		 * @param   {object} oldHiddenCls
		 * @returns {void}                
		 */
		updateHiddenCls? (newHiddenCls: object, oldHiddenCls: object): void;
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
		 * @param   {object} padding
		 * @returns {void}           
		 */
		updatePadding? (padding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newPlugins
		 * @param   {object} oldPlugins
		 * @returns {void}              
		 */
		updatePlugins? (newPlugins: object, oldPlugins: object): void;
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
		 * @param   {object} top
		 * @returns {void}       
		 */
		updateTop? (top: object): void;
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
	 * [Ext.plugin.Responsive](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Responsive.html)
	 * This plugin can be added to component instances to process a `responsiveConfig`. For
	 * example:
	 * 
	 *     Ext.create({
	 *         xtype: 'panel',
	 *         layout: 'hbox',
	 *    
	 *         items: [{
	 *             xtype: 'component',
	 *             plugins: 'responsive',
	 *    
	 *             responsiveConfig: {
	 *                 'width &lt; 800': {
	 *                     hidden: true
	 *                 },
	 *    
	 *                 'width &gt;= 800': {
	 *                     hidden: false
	 *                 }
	 *             }
	 *         },
	 *         ...]
	 *     });
	 * 
	 * For details see [`responsiveConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html#cfg-responsiveConfig).
	 */
	class Responsive extends Ext.mixin.Responsive {
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.plugin.Responsive.Statics}
		 */
		self?: Ext.plugin.Responsive.Statics | Ext.mixin.Responsive.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                              members    The members to add to this class.
		 * @param   {boolean}                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.Responsive;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Responsive;
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
		 * @param   {object}                                              members
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.plugin.Responsive;
		static addStatics? (members: object): typeof Ext.mixin.Responsive;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                              members
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.plugin.Responsive;
		static addInheritableStatics? (members: object): typeof Ext.mixin.Responsive;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                              name
		 * @param   {object}                                              member
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.plugin.Responsive;
		static addMember? (name: object, member: object): typeof Ext.mixin.Responsive;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                              fn
		 * @param   {object}                                              scope
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.Responsive;
		static onExtended? (fn: object, scope: object): typeof Ext.mixin.Responsive;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * This method removes this instance from the Responsive collection.
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
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                              [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.Responsive;
		setConfig? (name: string | object, value?: object): Ext.mixin.Responsive;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                                              config
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.plugin.Responsive;
		initConfig? (config: object): Ext.mixin.Responsive;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.Responsive.Statics|Ext.mixin.Responsive.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.plugin.Responsive.Statics;
		statics? (): Ext.mixin.Responsive.Statics;
		statics? (): Ext.Base.Statics;
		/** 
		 * Activates event listeners for all `Responsive` instances. This method is
		 * called when the first instance is registered.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		activate? (): void;
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
		 * This class system hook method is called at the tail end of the mixin process.
		 * We need to see if the `targetClass` has already got a `responsiveConfig` and
		 * if so, we must add its value to the real config.
		 * @method
		 * @private (method)
		 * @param   {Ext.Class} targetClass
		 * @returns {void}                  
		 */
		afterClassMixedIn? (targetClass: Ext.Class): void;
		/** 
		 * Deactivates event listeners. This method is called when the last instance
		 * is destroyed.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		deactivate? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * Evaluates and returns the configs based on the `responsiveConfig`. This
		 * method relies on the state being captured by the `updateContext` method.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getResponsiveState? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Updates all registered the `Responsive` instances (found in the `all`
		 * collection).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		notify? (): void;
		/** 
		 * Handler of the window resize event. Schedules a timer so that we eventually
		 * call `notify`.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onResize? (): void;
		/** 
		 * This method is the timer handler. When called this removes the timer and
		 * calls `notify`.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onTimer? (): void;
		/** 
		 * This method is called to update the internal state of a given config since
		 * the config is needed prior to `initConfig` processing the `instanceConfig`.
		 * @method
		 * @private (method)
		 * @param   {Ext.Base} instance       The instance to configure.
		 * @param   {object}   instanceConfig The config for the instance.
		 * @param   {string}   name           The name of the config to process.
		 * @returns {void}                    
		 */
		processConfig? (instance: Ext.Base, instanceConfig: object, name: string): void;
		/** 
		 * This config system hook method is called just prior to processing the specified
		 * "instanceConfig". This hook returns the instanceConfig that will actually be
		 * processed by the config system.
		 * @method
		 * @private (method)
		 * @param   {object} instanceConfig The user-supplied instance config object.
		 * @returns {void}                  
		 */
		transformInstanceConfig? (instanceConfig: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                            names The names of the linked objects to destroy.
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.plugin.Responsive;
		unlink? (names: string[]): Ext.mixin.Responsive;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * Updates the `context` object base on the current environment.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateContext? (): void;
		/** 
		 * Evaluates and applies the `responsiveConfig` to this instance. This is called
		 * by `notify` automatically.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateResponsiveState? (): void;
	}
	/** 
	 * [Ext.plugin.SortableList](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html)
	 * The SortableList plugin gives your list items the ability to be reordered by tapping and
	 * dragging elements within the item.
	 * 
	 * The list-sortablehandle is not added to your tpl by default, so it's important that you
	 * manually include it. It's also important to recognize that list-items are not draggable
	 * themselves.  You must add an element to the itemTpl for it to be dragged.
	 * 
	 *    Ext.Viewport.add({
	 *         xtype: 'list',
	 *         infinite: true,
	 *         plugins: 'sortablelist',
	 *         itemTpl: '&lt;span class="myStyle ' + Ext.baseCSSPrefix + 'list-sortablehandle"&gt;&lt;/span&gt;{text}',
	 *         data: [{
	 *             text: 'Item 1'
	 *         }, {
	 *             text: 'Item 2'
	 *         }, {
	 *             text: 'Item 3'
	 *         }]
	 *    });
	 * 
	 * The CSS for MyStyle can be anything that creates an element to tap and drag.  For this
	 * example we made a simple rectangle like so:
	 * 
	 *     .myStyle{
	 *         width:30px;
	 *         height:20px;
	 *         background:gray;
	 *         float:left;
	 *     }
	 * 
	 * Note: You must have infinite set to 'true' when using the SortableList plugin.
	 */
	class SortableList extends Ext.Component {
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
		 * A configuration object for [Ext.Element.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html#static-method-create)() that is used to create the Element
		 * template.  Supports all the standard options of a [Ext.Element.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html#static-method-create)() config and
		 * adds 2 additional options:
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `reference` - this option specifies a name for Element references.  These
		 * references names become properties of the Widget instance and refer to [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
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
		 *        innerEl = foo.innerEl; // an Ext.Element that wraps the innerElement
		 * 
		 * The reference attribute is optional, but all Widgets must have a `'element'`
		 * reference on some element within the template (usually the outermost one).
		 * 
		 * <ol>
		 * <li>
		 * 
		 * `listeners` - a standard listeners object as specified by [Ext.mixin.Observable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html).
		 * 
		 *   element: {
		 * 
		 *        reference: 'element',
		 *        listeners: {
		 *            click: 'onClick'
		 *        },
		 *        children: [{
		 *            reference: 'innerElement',
		 *            listeners: {
		 *                click: 'onInnerClick'
		 *            }
		 *        }]
		 * 
		 * }
		 *  </li>
		 *  </ol>
		 *  
		 *  
		 *  
		 *  
		 *  Since listeners cannot be attached without an [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) reference the `reference`
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
		 * @default {reference: 'element', classList: ['x-unsized']}
		 * @type {object}
		 */
		element?: object;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.plugin.SortableList.Statics}
		 */
		self?: Ext.plugin.SortableList.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default {id: 'hookable'}
		 * @type {object}
		 */
		mixinConfig?: object;
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
		 * @param   {object}                                                                members    The members to add to this class.
		 * @param   {boolean}                                                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.SortableList;
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
		 * @param   {object}                                                                members
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.plugin.SortableList;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                                                members
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.plugin.SortableList;
		static addInheritableStatics? (members: object): typeof Ext.Component;
		static addInheritableStatics? (members: object): typeof Ext.Widget;
		static addInheritableStatics? (members: object): typeof Ext.Evented;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                name
		 * @param   {object}                                                                member
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.plugin.SortableList;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                fn
		 * @param   {object}                                                                scope
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.plugin.SortableList;
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
		 * Alias for [onAfter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-onAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		addAfterListener? (): void;
		/** 
		 * Alias for [onBefore](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-onBefore).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.addCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-addCls).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) is an Observable instance.
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Disables this Component
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
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
		 * See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget). The default implementation in [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) returns the
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
		 * Fires the specified event with the passed parameters and executes a function (action).
		 * By default, the action function will be executed after any "before" event handlers
		 * (as specified using the `order` option of
		 * [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)), but before any other
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
		 * of the options of [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
		 * @param   {string}   [order]
		 * The order to call the action function relative
		 * too the event handlers (`'before'` or `'after'`).  Note that this option is
		 * simply used to sort the action function relative to the event handlers by "priority".
		 * An order of `'before'` is equivalent to a priority of `99.5`, while an order of
		 * `'after'` is equivalent to a priority of `-99.5`.  See the `priority` option
		 * of [`addListener`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) for more details.
		 * @returns {void}               
		 */
		fireAction? (eventName: string, args: any[], fn: ExtGlobalFunction, scope?: object, options?: object, order?: string): void;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to fire.
		 * @returns {boolean}           returns false if any of the handlers return false otherwise it returns true.
		 */
		fireEvent? (eventName: string): boolean;
		/** 
		 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
		 * to [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)).
		 * 
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * An event may be set to bubble up an Observable parent hierarchy (See [Ext.Component.getBubbleTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-getBubbleTarget)) by
		 * calling [enableBubble](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-enableBubble).
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
		 * Returns the value of [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getBaseCls? (): string;
		/** 
		 * Returns the value of [bind](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBind? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getBorder? (): boolean;
		/** 
		 * Returns the value of [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getBottom? (): number | string;
		/** 
		 * Returns the value of [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCentered? (): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls).
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
		 * Returns the value of [contentEl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element|HTMLElement|string}  
		 */
		getContentEl? (): Ext.Element | HTMLElement | string;
		/** 
		 * Returns the [Ext.app.ViewController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewController.html) instance associated with this
		 * component via the [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller) config or [setController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-setController) method.
		 * @method
		 * @public (method)
		 * @returns {Ext.app.ViewController} 
		 * Returns this component's ViewController or
		 * null if one was not configured
		 */
		getController? (): Ext.app.ViewController;
		/** 
		 * Returns the value of [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getData? (): object;
		/** 
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDisabled? (): boolean;
		/** 
		 * Returns the value of [disabledCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabledCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDisabledCls? (): string;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Returns the value of [enterAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getEnterAnimation? (): string | any;
		/** 
		 * Returns the value of [exitAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getExitAnimation? (): string | any;
		/** 
		 * Returns the value of [floatingCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-floatingCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getFloatingCls? (): string;
		/** 
		 * Returns the value of [handleSelector](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html#cfg-handleSelector).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getHandleSelector? (): string;
		/** 
		 * Returns the value of [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getHeight? (): number | string;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [hiddenCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hiddenCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getHiddenCls? (): string;
		/** 
		 * Returns the value of [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @returns {string|any}  
		 */
		getHideAnimation? (): string | any;
		/** 
		 * Returns the value of [html](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.Element|HTMLElement}  
		 */
		getHtml? (): string | Ext.Element | HTMLElement;
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
		 * Returns the value of [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getLeft? (): number | string;
		/** 
		 * Returns the value of [list](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html#cfg-list).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getList? (): object;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMargin? (): number | string;
		/** 
		 * Returns the value of [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxHeight? (): number | string;
		/** 
		 * Returns the value of [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMaxWidth? (): number | string;
		/** 
		 * Returns the value of [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinHeight? (): number | string;
		/** 
		 * Returns the value of [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getMinWidth? (): number | string;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Returns the parent of this component, if it has one.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  The parent of this component.
		 */
		getParent? (): Ext.Component;
		/** 
		 * Returns the value of [plugins](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-plugins).
		 * @method
		 * @public (method)
		 * @returns {object|any[]}  
		 */
		getPlugins? (): object | any[];
		/** 
		 * Returns the value of [publishes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getPublishes? (): string | string[] | object;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Model}  
		 */
		getRecord? (): Ext.data.Model;
		/** 
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [renderTo](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.Element}  
		 */
		getRenderTo? (): Ext.Element;
		/** 
		 * Returns the value of [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getRight? (): number | string;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|object}  
		 */
		getScrollable? (): boolean | string | object;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation).
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
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStyleHtmlCls? (): string;
		/** 
		 * Returns the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getStyleHtmlContent? (): boolean;
		/** 
		 * Returns the value of [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getTop? (): number | string;
		/** 
		 * Returns the value of [tpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|Ext.Template|Ext.XTemplate[]}  
		 */
		getTpl? (): string | string[] | Ext.Template | Ext.XTemplate[];
		/** 
		 * Returns the value of [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTplWriteMode? (): string;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getUi? (): string;
		/** 
		 * Returns the value of [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getUserCls? (): string | string[];
		/** 
		 * Returns the value of [viewModel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.app.ViewModel}  
		 */
		getViewModel? (): string | object | Ext.app.ViewModel;
		/** 
		 * Returns the value of [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getWidth? (): number | string;
		/** 
		 * Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
		 * available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) header.
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
		 * Returns the value of [zIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-zIndex).
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
		 * Returns `true` if this component has a parent.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this component has a parent.
		 */
		hasParent? (): boolean;
		/** 
		 * Hides this Component optionally using an animation.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object|boolean}                        [animation] You can specify an animation here or a bool to use the [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation) config.
		 * @returns {Ext.plugin.SortableList|Ext.Component}             
		 */
		hide? (animation?: object | boolean): Ext.plugin.SortableList;
		hide? (animation?: object | boolean): Ext.Component;
		/** 
		 * Tests whether this Widget matches a [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html)
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
		 * @param   {boolean} [deep]
		 * `true` to check if this component
		 * is hidden because a parent container is hidden.
		 * @returns {boolean}        `true` if currently hidden.
		 */
		isHidden? (deep?: boolean): boolean;
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
		 * For a list of all available xtypes, see the [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) header.
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
		 * Returns the [`Ext.data.Session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Session.html) for this instance. This property may come
		 * from this instance's [`session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}          [skipThis]
		 * Pass `true` to ignore a `session` configured on
		 * this instance and only consider an inherited session.
		 * @returns {Ext.data.Session}            
		 */
		lookupSession? (skipThis?: boolean): Ext.data.Session;
		/** 
		 * Returns the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewModel.html) for this instance. This property may come from this
		 * this instance's [`viewModel`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel) or be inherited from this object's parent.
		 * @method
		 * @public (method)
		 * @param   {boolean}           [skipThis]
		 * Pass `true` to ignore a `viewModel` configured on
		 * this instance and only consider an inherited view model.
		 * @returns {Ext.app.ViewModel}            
		 */
		lookupViewModel? (skipThis?: boolean): Ext.app.ViewModel;
		/** 
		 * Shorthand for [addManagedListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-addManagedListener).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) options.
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
		 * Shorthand for [removeManagedListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeManagedListener).
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Same as [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) with `order` set
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
		 * Alias for [unAfter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-unAfter).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		removeAfterListener? (): void;
		/** 
		 * Alias for [unBefore](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-unBefore).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.removeCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-removeCls).
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Removes listeners that were added by the [mon](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-mon) method.
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
		 * Replaces specified classes with the newly specified classes.
		 * It uses the [addCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-addCls) and [removeCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-removeCls) methods, so if the class(es) you are removing don't exist, it will
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
		 * Resets [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top), [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right), [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom) and [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left) configurations to `null`, which
		 * will un-float this component.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetFloating? (): void;
		/** 
		 * Resumes firing of the named event(s).
		 * 
		 * After calling this method to resume events, the events will fire when requested to fire.
		 * 
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
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
		 * **Note that if the [suspendEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvent) method is called multiple times for a certain event,
		 * this converse method will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to resume.
		 * @returns {void}                
		 */
		resumeEvent? (...eventName: string[]): void;
		/** 
		 * Resumes firing events (see [suspendEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvents)).
		 * 
		 * If events were suspended using the `queueSuspended` parameter, then all events fired
		 * during event suspension will be sent to any listeners now.
		 * @method
		 * @public (method)
		 * @param   {boolean} [discardQueue]
		 * `true` to prevent any previously queued events from firing
		 * while we were suspended. See [suspendEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-suspendEvents).
		 * @returns {void}                   
		 */
		resumeEvents? (discardQueue?: boolean): void;
		/** 
		 * Sets the value of [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls).
		 * @method
		 * @public (method)
		 * @param   {string} baseCls The new value.
		 * @returns {void}           
		 */
		setBaseCls? (baseCls: string): void;
		/** 
		 * Sets the value of [bind](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-bind).
		 * @method
		 * @public (method)
		 * @param   {object} bind The new value.
		 * @returns {void}        
		 */
		setBind? (bind: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {boolean} border The new value.
		 * @returns {void}           
		 */
		setBorder? (border: boolean): void;
		/** 
		 * Sets the value of [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom).
		 * @method
		 * @public (method)
		 * @param   {number|string} bottom The new value.
		 * @returns {void}                 
		 */
		setBottom? (bottom: number | string): void;
		/** 
		 * Sets the value of [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered).
		 * @method
		 * @public (method)
		 * @param   {boolean} centered The new value.
		 * @returns {void}             
		 */
		setCentered? (centered: boolean): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls).
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
		 * @param   {string|object}                                                         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.SortableList;
		setConfig? (name: string | object, value?: object): Ext.Component;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [contentEl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-contentEl).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element|HTMLElement|string} contentEl The new value.
		 * @returns {void}                                     
		 */
		setContentEl? (contentEl: Ext.Element | HTMLElement | string): void;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data).
		 * @method
		 * @public (method)
		 * @param   {object} data The new value.
		 * @returns {void}        
		 */
		setData? (data: object): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled).
		 * @method
		 * @public (method)
		 * @param   {boolean} disabled The new value.
		 * @returns {void}             
		 */
		setDisabled? (disabled: boolean): void;
		/** 
		 * Sets the value of [disabledCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabledCls).
		 * @method
		 * @public (method)
		 * @param   {string} disabledCls The new value.
		 * @returns {void}               
		 */
		setDisabledCls? (disabledCls: string): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [draggable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-draggable).
		 * @method
		 * @public (method)
		 * @param   {object} draggable The new value.
		 * @returns {void}             
		 */
		setDraggable? (draggable: object): void;
		/** 
		 * Sets the value of [enterAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-enterAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} enterAnimation The new value.
		 * @returns {void}                      
		 */
		setEnterAnimation? (enterAnimation: string | any): void;
		/** 
		 * Sets the value of [exitAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-exitAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} exitAnimation The new value.
		 * @returns {void}                     
		 */
		setExitAnimation? (exitAnimation: string | any): void;
		/** 
		 * Sets the value of [floatingCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-floatingCls).
		 * @method
		 * @public (method)
		 * @param   {string} floatingCls The new value.
		 * @returns {void}               
		 */
		setFloatingCls? (floatingCls: string): void;
		/** 
		 * Sets the value of [handleSelector](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html#cfg-handleSelector).
		 * @method
		 * @public (method)
		 * @param   {string} handleSelector The new value.
		 * @returns {void}                  
		 */
		setHandleSelector? (handleSelector: string): void;
		/** 
		 * Sets the value of [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height).
		 * @method
		 * @public (method)
		 * @param   {number|string} height The new value.
		 * @returns {void}                 
		 */
		setHeight? (height: number | string): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [hiddenCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hiddenCls).
		 * @method
		 * @public (method)
		 * @param   {string} hiddenCls The new value.
		 * @returns {void}             
		 */
		setHiddenCls? (hiddenCls: string): void;
		/** 
		 * Sets the value of [hideAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hideAnimation).
		 * @method
		 * @public (method)
		 * @param   {string|any} hideAnimation The new value.
		 * @returns {void}                     
		 */
		setHideAnimation? (hideAnimation: string | any): void;
		/** 
		 * Sets the value of [html](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-html).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Element|HTMLElement} html The new value.
		 * @returns {void}                                
		 */
		setHtml? (html: string | Ext.Element | HTMLElement): void;
		/** 
		 * Sets the value of [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left).
		 * @method
		 * @public (method)
		 * @param   {number|string} left The new value.
		 * @returns {void}               
		 */
		setLeft? (left: number | string): void;
		/** 
		 * Sets the value of [list](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html#cfg-list).
		 * @method
		 * @public (method)
		 * @param   {object} list The new value.
		 * @returns {void}        
		 */
		setList? (list: object): void;
		/** 
		 * An alias for [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).  In
		 * versions prior to 5.1, [listeners](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#cfg-listeners) had a generated setter which could
		 * be called to add listeners.  In 5.1 the listeners config is not processed
		 * using the config system and has no generated setter, so this method is
		 * provided for backward compatibility.  The preferred way of adding listeners
		 * is to use the [on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-on) method.
		 * @method
		 * @public (method)
		 * @param   {object} listeners The listeners
		 * @returns {void}             
		 */
		setListeners? (listeners: object): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number|string} margin The new value.
		 * @returns {void}                 
		 */
		setMargin? (margin: number | string): void;
		/** 
		 * Sets the value of [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxHeight The new value.
		 * @returns {void}                    
		 */
		setMaxHeight? (maxHeight: number | string): void;
		/** 
		 * Sets the value of [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} maxWidth The new value.
		 * @returns {void}                   
		 */
		setMaxWidth? (maxWidth: number | string): void;
		/** 
		 * Sets the value of [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight).
		 * @method
		 * @public (method)
		 * @param   {number|string} minHeight The new value.
		 * @returns {void}                    
		 */
		setMinHeight? (minHeight: number | string): void;
		/** 
		 * Sets the value of [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth).
		 * @method
		 * @public (method)
		 * @param   {number|string} minWidth The new value.
		 * @returns {void}                   
		 */
		setMinWidth? (minWidth: number | string): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [plugins](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-plugins).
		 * @method
		 * @public (method)
		 * @param   {object|any[]} plugins The new value.
		 * @returns {void}                 
		 */
		setPlugins? (plugins: object | any[]): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model} record The new value.
		 * @returns {void}                  
		 */
		setRecord? (record: Ext.data.Model): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [renderTo](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-renderTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.Element} renderTo The new value.
		 * @returns {void}                 
		 */
		setRenderTo? (renderTo: Ext.Element): void;
		/** 
		 * Sets the value of [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right).
		 * @method
		 * @public (method)
		 * @param   {number|string} right The new value.
		 * @returns {void}                
		 */
		setRight? (right: number | string): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|object} scrollable The new value.
		 * @returns {void}                             
		 */
		setScrollable? (scrollable: boolean | string | object): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation).
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
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls).
		 * @method
		 * @public (method)
		 * @param   {string} styleHtmlCls The new value.
		 * @returns {void}                
		 */
		setStyleHtmlCls? (styleHtmlCls: string): void;
		/** 
		 * Sets the value of [styleHtmlContent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlContent).
		 * @method
		 * @public (method)
		 * @param   {boolean} styleHtmlContent The new value.
		 * @returns {void}                     
		 */
		setStyleHtmlContent? (styleHtmlContent: boolean): void;
		/** 
		 * Sets the value of [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top).
		 * @method
		 * @public (method)
		 * @param   {number|string} top The new value.
		 * @returns {void}              
		 */
		setTop? (top: number | string): void;
		/** 
		 * Sets the value of [tpl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|Ext.Template|Ext.XTemplate[]} tpl The new value.
		 * @returns {void}                                             
		 */
		setTpl? (tpl: string | string[] | Ext.Template | Ext.XTemplate[]): void;
		/** 
		 * Sets the value of [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode).
		 * @method
		 * @public (method)
		 * @param   {string} tplWriteMode The new value.
		 * @returns {void}                
		 */
		setTplWriteMode? (tplWriteMode: string): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {string} ui The new value.
		 * @returns {void}      
		 */
		setUi? (ui: string): void;
		/** 
		 * Sets the value of [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-userCls).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} userCls The new value.
		 * @returns {void}                    
		 */
		setUserCls? (userCls: string | string[]): void;
		/** 
		 * Sets the value of [viewModel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-viewModel).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewModel} viewModel The new value.
		 * @returns {void}                                      
		 */
		setViewModel? (viewModel: string | object | Ext.app.ViewModel): void;
		/** 
		 * Sets the value of [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width).
		 * @method
		 * @public (method)
		 * @param   {number|string} width The new value.
		 * @returns {void}                
		 */
		setWidth? (width: number | string): void;
		/** 
		 * Sets the value of [zIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-zIndex).
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
		 * @param   {object|boolean}                        [animation] You can specify an animation here or a bool to use the [showAnimation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-showAnimation) config.
		 * @returns {Ext.plugin.SortableList|Ext.Component}             
		 */
		show? (animation?: object | boolean): Ext.plugin.SortableList;
		show? (animation?: object | boolean): Ext.Component;
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
		 * You can put a '?' at the end of the alignment string to constrain the floating element to the
		 * [Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html)
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
		 * @returns {void}                      
		 */
		showBy? (component: Ext.Component, alignment?: string): void;
		/** 
		 * Suspends firing of the named event(s).
		 * 
		 * After calling this method to suspend events, the events will no longer fire when requested to fire.
		 * 
		 * **Note that if this is called multiple times for a certain event, the converse method
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
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
		 * [resumeEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvent) will have to be called the same number of times for it to resume firing.**
		 * @method
		 * @public (method)
		 * @param   {...string} eventName Multiple event names to suspend.
		 * @returns {void}                
		 */
		suspendEvent? (...eventName: string[]): void;
		/** 
		 * Suspends the firing of all events. (see [resumeEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvents))
		 * @method
		 * @public (method)
		 * @param   {boolean} queueSuspended
		 * `true` to queue up suspended events to be fired
		 * after the [resumeEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resumeEvents) call instead of discarding all suspended events.
		 * @returns {void}                   
		 */
		suspendEvents? (queueSuspended: boolean): void;
		/** 
		 * Add or removes a class based on if the class is already added to the Component.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string}                                     className The class to toggle.
		 * @param   {boolean}                                    [state]
		 * If specified as `true`, causes the class to be added. If specified as `false`, causes
		 * the class to be removed.
		 * @returns {Ext.plugin.SortableList|Ext.Component|void}           this
		 */
		toggleCls? (className: string, state?: boolean): Ext.plugin.SortableList;
		toggleCls? (className: string, state?: boolean): Ext.Component;
		toggleCls? (className: string, state?: boolean): void;
		/** 
		 * Shorthand for [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener).
		 * @method
		 * @public (method)
		 * @param   {string}   eventName The type of event the handler was associated with.
		 * @param   {Function} fn
		 * The handler to remove. **This must be a reference to the function
		 * passed into the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) call.**
		 * @param   {object}   [scope]
		 * The scope originally specified for the handler. It
		 * must be the same as the scope argument specified in the original call to
		 * [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) or the listener will not be removed.
		 * 
		 * **Convenience Syntax**
		 * 
		 * You can use the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener)
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
		 * the [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) _element_ option.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'after'`.
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
		 * Same as [removeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-removeListener) with `order` set to `'before'`.
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
		 * Walks up the `ownerCt` axis looking for an ancestor Container which matches
		 * the passed simple selector.
		 * 
		 * Example:
		 * 
		 *    var owningTabPanel = grid.up('tabpanel');
		 * 
		 * @method
		 * @public (method)
		 * @param   {string}        [selector] The simple selector to test.
		 * @returns {Ext.Container}            The matching ancestor Container (or `undefined` if no match was found).
		 */
		up? (selector?: string): Ext.Container;
		/** 
		 * Updates the [styleHtmlCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-styleHtmlCls) configuration
		 * @method
		 * @public (method)
		 * @param   {object} newHtmlCls
		 * @param   {object} oldHtmlCls
		 * @returns {void}              
		 */
		updateStyleHtmlCls? (newHtmlCls: object, oldHtmlCls: object): void;
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
		 * @returns {void}  
		 */
		getTranslatable? (): void;
		/** 
		 * Returns the value of [useBodyElement](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getUseBodyElement? (): object;
		/** 
		 * Sets the value of [translatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-translatable).
		 * @method
		 * @private (method)
		 * @param   {object} translatable The new value.
		 * @returns {void}                
		 */
		setTranslatable? (translatable: object): void;
		/** 
		 * Sets the value of [useBodyElement](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-useBodyElement).
		 * @method
		 * @private (method)
		 * @param   {object} useBodyElement The new value.
		 * @returns {void}                  
		 */
		setUseBodyElement? (useBodyElement: object): void;
		/** 
		 * All cls methods directly report to the [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls) configuration, so anytime it changes, [updateCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-updateCls) will be called
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
		 * @param   {object} disabled
		 * @returns {void}            
		 */
		updateDisabled? (disabled: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newUi
		 * @param   {object} oldUi
		 * @returns {void}         
		 */
		updateUi? (newUi: object, oldUi: object): void;
		/** 
		 * @method
		 * @protected (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * Prepares information on aligning this to component using alignment.
		 * Also checks to see if this is already aligned to component according to alignment.
		 * @method
		 * @protected (method)
		 * @param   {object} component
		 * @param   {object} alignment
		 * @returns {void}             
		 */
		getAlignmentInfo? (component: object, alignment: object): void;
		/** 
		 * A template method for modifying the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) config before it is processed.
		 * By default adds the result of `this.getTemplate()` as the `children` array of
		 * [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) if `children` were not specified in the original
		 * [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) config.  Typically this method should not need to be implemented
		 * in subclasses.  Instead the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#property-element) property should be use to configure
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
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html), and the [up](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-up)
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
		 * @param   {object}                                                                config
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.plugin.SortableList;
		initConfig? (config: object): Ext.Component;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#property-element) config will be
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
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.mixin.Observable.resolveListenerScope](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Observable.html#method-resolveListenerScope).
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.SortableList.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.plugin.SortableList.Statics;
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) instead.
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
		 * Reduces instantiation time for a Widget by lazily instantiating [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
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
		 * @param   {object} component
		 * @param   {object} alignment
		 * @returns {void}             
		 */
		alignTo? (component: object, alignment: object): void;
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
		 * Checks if the `cls` is a string. If it is, changed it into an array.
		 * @method
		 * @private (method)
		 * @param   {string|any[]} cls
		 * @returns {any[]|null}       
		 */
		applyCls? (cls: string | any[]): any[] | null;
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
		 * @param   {object} plugins
		 * @returns {void}           
		 */
		applyPlugins? (plugins: object): void;
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
		applyStyleHtmlContent? (config: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyTpl? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		applyTranslatable? (config: object): void;
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
		 * part of normal [clearListeners](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-clearListeners)
		 * processing.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearDelegatedListeners? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		createPlugin? (config: object): void;
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
		 * option of [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) for more
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
		doRefreshFloating? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestors? (): void;
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
		 * Current Alignment information from the last alignTo call
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentAlignmentInfo? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getTranslatableBehavior? (): void;
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
		isFloating? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isInnerItem? (): void;
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
		isRendered? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
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
		 * Returns an `update` method for the given Config that will call [`publishState`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-publishState)
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
		 * Temporary workarounds to keep [Ext.ComponentManager](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentManager.html) from throwing errors when dealing
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
		onPainted? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} component
		 * @returns {void}                    
		 */
		onShowByErased? (component: Ext.Component): void;
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
		refreshFloating? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshInnerState? (): void;
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
		 * Sets the current Alignment information, called by alignTo
		 * @method
		 * @private (method)
		 * @param   {object} alignmentInfo
		 * @returns {void}                 
		 */
		setCurrentAlignmentInfo? (alignmentInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} isInner
		 * @returns {void}           
		 */
		setIsInner? (isInner: object): void;
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
		 * @chainable
		 * @param   {object}                                parent
		 * @returns {Ext.plugin.SortableList|Ext.Component}        this
		 */
		setParent? (parent: object): Ext.plugin.SortableList;
		setParent? (parent: object): Ext.Component;
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
		 * @method
		 * @private (method)
		 * @param   {object} isVisible
		 * @returns {void}             
		 */
		setVisibility? (isVisible: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		translate? (): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                              names The names of the linked objects to destroy.
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.plugin.SortableList;
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
		 * @param   {object} newDisabledCls
		 * @param   {object} oldDisabledCls
		 * @returns {void}                  
		 */
		updateDisabledCls? (newDisabledCls: object, oldDisabledCls: object): void;
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
		 * Updates the floatingCls if the component is currently floating
		 * @method
		 * @private (method)
		 * @param   {object} newFloatingCls
		 * @param   {object} oldFloatingCls
		 * @returns {void}                  
		 */
		updateFloatingCls? (newFloatingCls: object, oldFloatingCls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHiddenCls
		 * @param   {object} oldHiddenCls
		 * @returns {void}                
		 */
		updateHiddenCls? (newHiddenCls: object, oldHiddenCls: object): void;
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
		 * @param   {object} padding
		 * @returns {void}           
		 */
		updatePadding? (padding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newPlugins
		 * @param   {object} oldPlugins
		 * @returns {void}              
		 */
		updatePlugins? (newPlugins: object, oldPlugins: object): void;
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
		 * @param   {object} top
		 * @returns {void}       
		 */
		updateTop? (top: object): void;
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
declare namespace Ext {
	class AbstractPlugin extends Ext.plugin.Abstract {}
}
declare namespace Ext.plugin.Abstract {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.plugin.Abstract](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Abstract.html)
	 * The AbstractPlugin class is the base class from which user-implemented plugins should inherit.
	 * 
	 * This class defines the essential API of plugins as used by Components by defining the following methods:
	 * 
	 * - `init` : The plugin initialization method which the owning Component calls at Component initialization time.
	 *   The Component passes itself as the sole parameter.
	 *   Subclasses should set up bidirectional links between the plugin and its client Component here.
	 * - `destroy` : The plugin cleanup method which the owning Component calls at Component destruction time.
	 *   Use this method to break links between the plugin and the Component and to free any allocated resources.
	 */
	interface Def extends Ext.plugin.Abstract {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.plugin.Abstract.Cfg}
		 */
		config?: Ext.plugin.Abstract.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 * @type {Ext.plugin.Abstract.Statics}
		 */
		statics?: (() => Ext.plugin.Abstract.Statics | Ext.Base.Statics) | Ext.plugin.Abstract.Statics | any;
	}
}
declare namespace Ext.plugin.LazyItems {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.plugin.LazyItems](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.LazyItems.html)
	 * This plugin defers the execution cost of the instantiation and initialization of child components of un-rendered items.
	 * 
	 * For example, in a deferredRender [TabPanel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.tab.Panel.html), the un-rendered tabs
	 * do not have to incur the cost of instantiating and initializing their descendant components until render.
	 * 
	 * This plugin allows that.
	 * 
	 * Add the items to the plugin:
	 * 
	 *    {
	 *        xtype: 'tabpanel',
	 *        items: [{
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }, {
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }]
	 *    }
	 * 
	 */
	interface Def extends Ext.plugin.LazyItems {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.plugin.LazyItems.Cfg}
		 */
		config?: Ext.plugin.LazyItems.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.LazyItems.Statics|Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 * @type {Ext.plugin.LazyItems.Statics}
		 */
		statics?: (() => Ext.plugin.LazyItems.Statics | Ext.plugin.Abstract.Statics | Ext.Base.Statics) | Ext.plugin.LazyItems.Statics | any;
	}
}
declare namespace Ext.plugin.ListPaging {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
	 * Adds a Load More button at the bottom of the list. When the user presses this button,
	 * the next page of data will be loaded into the store and appended to the List.
	 * 
	 * By specifying [`autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging): true`, an 'infinite scroll' effect can be achieved,
	 * i.e., the next page of content will load automatically when the user scrolls to the
	 * bottom of the list.
	 * 
	 * ## Example
	 * 
	 *    Ext.create('Ext.dataview.List', {
	 *    
	 *        store: Ext.create('TweetStore'),
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.ListPaging',
	 *                autoPaging: true
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{profile_image_url}" /&gt;',
	 *            '&lt;div class="tweet"&gt;{text}&lt;/div&gt;'
	 *        ]
	 *    });
	 * 
	 */
	interface Def extends Ext.plugin.ListPaging {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.plugin.ListPaging.Cfg}
		 */
		config?: Ext.plugin.ListPaging.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.ListPaging.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.plugin.ListPaging.Statics}
		 */
		statics?: (() => Ext.plugin.ListPaging.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.plugin.ListPaging.Statics | any;
	}
}
declare namespace Ext.plugin.PullRefresh {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html)
	 * This plugin adds pull to refresh functionality to the List.
	 * 
	 * ## Example
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'img', 'text'],
	 *        data: [
	 *            {
	 *                name: 'rdougan',
	 *                img: 'https://www.sencha.com/forum/images/statusicon/forum_new-48.png',
	 *                text: 'JavaScript development'
	 *            }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.dataview.List', {
	 *        fullscreen: true,
	 *    
	 *        store: store,
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.PullRefresh',
	 *                pullText: 'Pull down for more new Tweets!'
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{img}" alt="{name} photo" /&gt;',
	 *            '&lt;div class="tweet"&gt;&lt;b&gt;{name}:&lt;/b&gt; {text}&lt;/div&gt;'
	 *        ]
	 *    });
	 * 
	 */
	interface Def extends Ext.plugin.PullRefresh {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.plugin.PullRefresh.Cfg}
		 */
		config?: Ext.plugin.PullRefresh.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.PullRefresh.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.plugin.PullRefresh.Statics}
		 */
		statics?: (() => Ext.plugin.PullRefresh.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.plugin.PullRefresh.Statics | any;
	}
}
declare namespace Ext.plugin.Responsive {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.plugin.Responsive](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Responsive.html)
	 * This plugin can be added to component instances to process a `responsiveConfig`. For
	 * example:
	 * 
	 *     Ext.create({
	 *         xtype: 'panel',
	 *         layout: 'hbox',
	 *    
	 *         items: [{
	 *             xtype: 'component',
	 *             plugins: 'responsive',
	 *    
	 *             responsiveConfig: {
	 *                 'width &lt; 800': {
	 *                     hidden: true
	 *                 },
	 *    
	 *                 'width &gt;= 800': {
	 *                     hidden: false
	 *                 }
	 *             }
	 *         },
	 *         ...]
	 *     });
	 * 
	 * For details see [`responsiveConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html#cfg-responsiveConfig).
	 */
	interface Def extends Ext.plugin.Responsive {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.plugin.Responsive.Cfg}
		 */
		config?: Ext.plugin.Responsive.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.Responsive.Statics|Ext.mixin.Responsive.Statics|Ext.Base.Statics}  
		 * @type {Ext.plugin.Responsive.Statics}
		 */
		statics?: (() => Ext.plugin.Responsive.Statics | Ext.mixin.Responsive.Statics | Ext.Base.Statics) | Ext.plugin.Responsive.Statics | any;
	}
}
declare namespace Ext.plugin.SortableList {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.plugin.SortableList](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html)
	 * The SortableList plugin gives your list items the ability to be reordered by tapping and
	 * dragging elements within the item.
	 * 
	 * The list-sortablehandle is not added to your tpl by default, so it's important that you
	 * manually include it. It's also important to recognize that list-items are not draggable
	 * themselves.  You must add an element to the itemTpl for it to be dragged.
	 * 
	 *    Ext.Viewport.add({
	 *         xtype: 'list',
	 *         infinite: true,
	 *         plugins: 'sortablelist',
	 *         itemTpl: '&lt;span class="myStyle ' + Ext.baseCSSPrefix + 'list-sortablehandle"&gt;&lt;/span&gt;{text}',
	 *         data: [{
	 *             text: 'Item 1'
	 *         }, {
	 *             text: 'Item 2'
	 *         }, {
	 *             text: 'Item 3'
	 *         }]
	 *    });
	 * 
	 * The CSS for MyStyle can be anything that creates an element to tap and drag.  For this
	 * example we made a simple rectangle like so:
	 * 
	 *     .myStyle{
	 *         width:30px;
	 *         height:20px;
	 *         background:gray;
	 *         float:left;
	 *     }
	 * 
	 * Note: You must have infinite set to 'true' when using the SortableList plugin.
	 */
	interface Def extends Ext.plugin.SortableList {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.plugin.SortableList.Cfg}
		 */
		config?: Ext.plugin.SortableList.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.SortableList.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.plugin.SortableList.Statics}
		 */
		statics?: (() => Ext.plugin.SortableList.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.plugin.SortableList.Statics | any;
	}
}
declare namespace Ext.plugin.Abstract {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.plugin.Abstract](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Abstract.html)
	 * The AbstractPlugin class is the base class from which user-implemented plugins should inherit.
	 * 
	 * This class defines the essential API of plugins as used by Components by defining the following methods:
	 * 
	 * - `init` : The plugin initialization method which the owning Component calls at Component initialization time.
	 *   The Component passes itself as the sole parameter.
	 *   Subclasses should set up bidirectional links between the plugin and its client Component here.
	 * - `destroy` : The plugin cleanup method which the owning Component calls at Component destruction time.
	 *   Use this method to break links between the plugin and the Component and to free any allocated resources.
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
		 * @param   {object}                       members    The members to add to this class.
		 * @param   {boolean}                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.Abstract|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.Abstract;
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
		 * @param   {object}                       members
		 * @returns {Ext.plugin.Abstract|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.plugin.Abstract;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                       members
		 * @returns {Ext.plugin.Abstract|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.plugin.Abstract;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                       name
		 * @param   {object}                       member
		 * @returns {Ext.plugin.Abstract|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.plugin.Abstract;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                       fn
		 * @param   {object}                       scope
		 * @returns {Ext.plugin.Abstract|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.plugin.Abstract;
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
declare namespace Ext.plugin.LazyItems {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.plugin.LazyItems](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.LazyItems.html)
	 * This plugin defers the execution cost of the instantiation and initialization of child components of un-rendered items.
	 * 
	 * For example, in a deferredRender [TabPanel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.tab.Panel.html), the un-rendered tabs
	 * do not have to incur the cost of instantiating and initializing their descendant components until render.
	 * 
	 * This plugin allows that.
	 * 
	 * Add the items to the plugin:
	 * 
	 *    {
	 *        xtype: 'tabpanel',
	 *        items: [{
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }, {
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }]
	 *    }
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
		 * @param   {object}                                            members    The members to add to this class.
		 * @param   {boolean}                                           [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                           [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.LazyItems;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.Abstract;
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
		 * @param   {object}                                            members
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.plugin.LazyItems;
		addStatics? (members: object): typeof Ext.plugin.Abstract;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                            members
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.plugin.LazyItems;
		addInheritableStatics? (members: object): typeof Ext.plugin.Abstract;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                            name
		 * @param   {object}                                            member
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.plugin.LazyItems;
		addMember? (name: object, member: object): typeof Ext.plugin.Abstract;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                            fn
		 * @param   {object}                                            scope
		 * @returns {Ext.plugin.LazyItems|Ext.plugin.Abstract|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.plugin.LazyItems;
		onExtended? (fn: object, scope: object): typeof Ext.plugin.Abstract;
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
declare namespace Ext.plugin.ListPaging {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
	 * Adds a Load More button at the bottom of the list. When the user presses this button,
	 * the next page of data will be loaded into the store and appended to the List.
	 * 
	 * By specifying [`autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging): true`, an 'infinite scroll' effect can be achieved,
	 * i.e., the next page of content will load automatically when the user scrolls to the
	 * bottom of the list.
	 * 
	 * ## Example
	 * 
	 *    Ext.create('Ext.dataview.List', {
	 *    
	 *        store: Ext.create('TweetStore'),
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.ListPaging',
	 *                autoPaging: true
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{profile_image_url}" /&gt;',
	 *            '&lt;div class="tweet"&gt;{text}&lt;/div&gt;'
	 *        ]
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
		 * @param   {object}                                                              members    The members to add to this class.
		 * @param   {boolean}                                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.ListPaging;
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
		 * @param   {object}                                                              members
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.plugin.ListPaging;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                                              members
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.plugin.ListPaging;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                              name
		 * @param   {object}                                                              member
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.plugin.ListPaging;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                              fn
		 * @param   {object}                                                              scope
		 * @returns {Ext.plugin.ListPaging|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.plugin.ListPaging;
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
declare namespace Ext.plugin.PullRefresh {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html)
	 * This plugin adds pull to refresh functionality to the List.
	 * 
	 * ## Example
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'img', 'text'],
	 *        data: [
	 *            {
	 *                name: 'rdougan',
	 *                img: 'https://www.sencha.com/forum/images/statusicon/forum_new-48.png',
	 *                text: 'JavaScript development'
	 *            }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.dataview.List', {
	 *        fullscreen: true,
	 *    
	 *        store: store,
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.PullRefresh',
	 *                pullText: 'Pull down for more new Tweets!'
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{img}" alt="{name} photo" /&gt;',
	 *            '&lt;div class="tweet"&gt;&lt;b&gt;{name}:&lt;/b&gt; {text}&lt;/div&gt;'
	 *        ]
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
		 * @param   {object}                                                               members    The members to add to this class.
		 * @param   {boolean}                                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.PullRefresh;
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
		 * @param   {object}                                                               members
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.plugin.PullRefresh;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                                               members
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.plugin.PullRefresh;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                               name
		 * @param   {object}                                                               member
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.plugin.PullRefresh;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                               fn
		 * @param   {object}                                                               scope
		 * @returns {Ext.plugin.PullRefresh|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.plugin.PullRefresh;
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
declare namespace Ext.plugin.Responsive {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.plugin.Responsive](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Responsive.html)
	 * This plugin can be added to component instances to process a `responsiveConfig`. For
	 * example:
	 * 
	 *     Ext.create({
	 *         xtype: 'panel',
	 *         layout: 'hbox',
	 *    
	 *         items: [{
	 *             xtype: 'component',
	 *             plugins: 'responsive',
	 *    
	 *             responsiveConfig: {
	 *                 'width &lt; 800': {
	 *                     hidden: true
	 *                 },
	 *    
	 *                 'width &gt;= 800': {
	 *                     hidden: false
	 *                 }
	 *             }
	 *         },
	 *         ...]
	 *     });
	 * 
	 * For details see [`responsiveConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html#cfg-responsiveConfig).
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
		 * @param   {object}                                              members    The members to add to this class.
		 * @param   {boolean}                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.Responsive;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.mixin.Responsive;
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
		 * @param   {object}                                              members
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.plugin.Responsive;
		addStatics? (members: object): typeof Ext.mixin.Responsive;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                              members
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.plugin.Responsive;
		addInheritableStatics? (members: object): typeof Ext.mixin.Responsive;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                              name
		 * @param   {object}                                              member
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.plugin.Responsive;
		addMember? (name: object, member: object): typeof Ext.mixin.Responsive;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                              fn
		 * @param   {object}                                              scope
		 * @returns {Ext.plugin.Responsive|Ext.mixin.Responsive|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.plugin.Responsive;
		onExtended? (fn: object, scope: object): typeof Ext.mixin.Responsive;
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
declare namespace Ext.plugin.SortableList {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.plugin.SortableList](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html)
	 * The SortableList plugin gives your list items the ability to be reordered by tapping and
	 * dragging elements within the item.
	 * 
	 * The list-sortablehandle is not added to your tpl by default, so it's important that you
	 * manually include it. It's also important to recognize that list-items are not draggable
	 * themselves.  You must add an element to the itemTpl for it to be dragged.
	 * 
	 *    Ext.Viewport.add({
	 *         xtype: 'list',
	 *         infinite: true,
	 *         plugins: 'sortablelist',
	 *         itemTpl: '&lt;span class="myStyle ' + Ext.baseCSSPrefix + 'list-sortablehandle"&gt;&lt;/span&gt;{text}',
	 *         data: [{
	 *             text: 'Item 1'
	 *         }, {
	 *             text: 'Item 2'
	 *         }, {
	 *             text: 'Item 3'
	 *         }]
	 *    });
	 * 
	 * The CSS for MyStyle can be anything that creates an element to tap and drag.  For this
	 * example we made a simple rectangle like so:
	 * 
	 *     .myStyle{
	 *         width:30px;
	 *         height:20px;
	 *         background:gray;
	 *         float:left;
	 *     }
	 * 
	 * Note: You must have infinite set to 'true' when using the SortableList plugin.
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
		 * @param   {object}                                                                members    The members to add to this class.
		 * @param   {boolean}                                                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.plugin.SortableList;
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
		 * @param   {object}                                                                members
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.plugin.SortableList;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html)
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
		 * @param   {object}                                                                members
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.plugin.SortableList;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                name
		 * @param   {object}                                                                member
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.plugin.SortableList;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                                                                fn
		 * @param   {object}                                                                scope
		 * @returns {Ext.plugin.SortableList|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.plugin.SortableList;
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
declare namespace Ext.plugin.ListPaging.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.plugin.ListPaging.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.plugin.ListPaging.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.plugin.ListPaging.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.plugin.PullRefresh.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.plugin.PullRefresh.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.plugin.PullRefresh.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.plugin.PullRefresh.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.plugin.SortableList.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.plugin.SortableList.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.plugin.SortableList.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.plugin.SortableList.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.plugin.Abstract {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.plugin.Abstract](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Abstract.html)
	 * The AbstractPlugin class is the base class from which user-implemented plugins should inherit.
	 * 
	 * This class defines the essential API of plugins as used by Components by defining the following methods:
	 * 
	 * - `init` : The plugin initialization method which the owning Component calls at Component initialization time.
	 *   The Component passes itself as the sole parameter.
	 *   Subclasses should set up bidirectional links between the plugin and its client Component here.
	 * - `destroy` : The plugin cleanup method which the owning Component calls at Component destruction time.
	 *   Use this method to break links between the plugin and the Component and to free any allocated resources.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A name for the plugin that can be set at creation time to then retrieve the plugin
		 * through getPlugin method.  For example:
		 * 
		 *    var grid = Ext.create('Ext.grid.Panel', {
		 *        plugins: [{
		 *            ptype: 'cellediting',
		 *            clicksToEdit: 2,
		 *            pluginId: 'cellplugin'
		 *        }]
		 *    });
		 *    
		 *    // later on:
		 *    var plugin = grid.getPlugin('cellplugin');
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		pluginId?: string;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                      config
		 * @returns {Ext.plugin.Abstract.Statics}        this
		 */
		initConfig? (config: object): Ext.plugin.Abstract.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                      [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.Abstract.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.Abstract.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.Abstract.Statics}  
		 */
		statics? (): Ext.plugin.Abstract.Statics;
	}
}
declare namespace Ext.plugin.LazyItems {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.plugin.LazyItems](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.LazyItems.html)
	 * This plugin defers the execution cost of the instantiation and initialization of child components of un-rendered items.
	 * 
	 * For example, in a deferredRender [TabPanel](https://docs.sencha.com/extjs/6.0.1/modern/Ext.tab.Panel.html), the un-rendered tabs
	 * do not have to incur the cost of instantiating and initializing their descendant components until render.
	 * 
	 * This plugin allows that.
	 * 
	 * Add the items to the plugin:
	 * 
	 *    {
	 *        xtype: 'tabpanel',
	 *        items: [{
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }, {
	 *            title: 'Tab One',
	 *            plugins: {
	 *                ptype: 'lazyitems',
	 *                items: [... tab child items...]
	 *            }
	 *        }]
	 *    }
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A name for the plugin that can be set at creation time to then retrieve the plugin
		 * through getPlugin method.  For example:
		 * 
		 *    var grid = Ext.create('Ext.grid.Panel', {
		 *        plugins: [{
		 *            ptype: 'cellediting',
		 *            clicksToEdit: 2,
		 *            pluginId: 'cellplugin'
		 *        }]
		 *    });
		 *    
		 *    // later on:
		 *    var plugin = grid.getPlugin('cellplugin');
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		pluginId?: string;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                       config
		 * @returns {Ext.plugin.LazyItems.Statics}        this
		 */
		initConfig? (config: object): Ext.plugin.LazyItems.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.LazyItems.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.LazyItems.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.LazyItems.Statics}  
		 */
		statics? (): Ext.plugin.LazyItems.Statics;
	}
}
declare namespace Ext.plugin.ListPaging {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
	 * Adds a Load More button at the bottom of the list. When the user presses this button,
	 * the next page of data will be loaded into the store and appended to the List.
	 * 
	 * By specifying [`autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging): true`, an 'infinite scroll' effect can be achieved,
	 * i.e., the next page of content will load automatically when the user scrolls to the
	 * bottom of the list.
	 * 
	 * ## Example
	 * 
	 *    Ext.create('Ext.dataview.List', {
	 *    
	 *        store: Ext.create('TweetStore'),
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.ListPaging',
	 *                autoPaging: true
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{profile_image_url}" /&gt;',
	 *            '&lt;div class="tweet"&gt;{text}&lt;/div&gt;'
	 *        ]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to automatically load the next page when you scroll to the bottom of the list.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoPaging?: boolean;
		/** 
		 * The base CSS class to apply to this component's element. This will also be prepended to
		 * other elements within this component. To add specific styling for sub-classes, use the [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls) config.
		 * @configuration
		 * @optional
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewModel.html#method-bind). The
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
		 * and `border-style` via CSS rule or [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-style) configuration
		 * (if not already provide by the theme).
		 * 
		 * ## Using [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-style):
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
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		bottom?: number | string;
		/** 
		 * Whether or not this Component is absolutely centered inside its Container
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		centered?: boolean;
		/** 
		 * The CSS class to add to this component's element, in
		 * addition to the [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls). In many cases, this property will be specified
		 * by the derived component class. See [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-userCls) for adding additional CSS
		 * classes to component instances (such as items in a [Ext.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html)).
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl) to
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
		 * [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for some sample
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
		 * The CSS class to add to the component when it is disabled
		 * @configuration
		 * @optional
		 * @default "x-item-disabled"
		 * @type {string}
		 */
		disabledCls?: string;
		/** 
		 * The dock position of this component in its container. Can be `left`, `top`, `right` or `bottom`.
		 * 
		 * **Notes**
		 * 
		 * You must use a HTML5 doctype for [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked) `bottom` to work. To do this, simply add the following code to the HTML file:
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
		 * The CSS class to add to this component when it is floatable.
		 * @configuration
		 * @optional
		 * @default "x-floating"
		 * @type {string}
		 */
		floatingCls?: string;
		/** 
		 * Force the component to take up 100% width and height available, by adding it
		 * to [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		fullscreen?: boolean;
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
		 * Whether or not this Component is hidden (its CSS `display` property is set to `none`)
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * The CSS class to add to the component when it is hidden
		 * @configuration
		 * @optional
		 * @default "x-item-hidden"
		 * @type {string}
		 */
		hiddenCls?: string;
		/** 
		 * Animation effect to apply when the Component is being hidden.  Typically you want to use an
		 * outbound animation type such as 'fadeOut' or 'slideOut'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.0.1/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		hideAnimation?: string | any;
		/** 
		 * Optional HTML content to render inside this Component, or a reference
		 * to an existing element on the page.
		 * @configuration
		 * @optional
		 * @type {string|Ext.Element|HTMLElement}
		 */
		html?: string | Ext.Element | HTMLElement;
		/** 
		 * The absolute left position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		left?: number | string;
		/** 
		 * Local reference to the List this plugin is bound to
		 * @configuration
		 * @optional
		 * @type {Ext.List}
		 */
		list?: Ext.List;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html)**
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
		 * @configuration
		 * @optional
		 * @default {xtype: 'component', baseCls: Ext.baseCSSPrefix + 'list-paging', scrollDock: 'bottom', hidden: true}
		 * @type {object}
		 */
		loadMoreCmp?: object;
		/** 
		 * Indicates whether or not the load more component has been added to the List
		 * yet.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		loadMoreCmpAdded?: boolean;
		/** 
		 * The text used as the label of the Load More button.
		 * @configuration
		 * @optional
		 * @default 'Load More...'
		 * @type {string}
		 */
		loadMoreText?: string;
		/** 
		 * The template used to render the load more text
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		loadTpl?: string;
		/** 
		 * True if the plugin has initiated a Store load that has not yet completed
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		loading?: boolean;
		/** 
		 * The CSS class that is added to the [loadMoreCmp](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-loadMoreCmp) while the Store is loading
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'loading'
		 * @type {string}
		 */
		loadingCls?: string;
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
		 * Note that this config will not apply if the Component is 'floating' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxHeight?: number | string;
		/** 
		 * The maximum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'floating' (absolutely positioned or centered)
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
		 * The text used as the label of the Load More button when the Store's
		 * totalCount indicates that all of the records available on the server are
		 * already loaded
		 * @configuration
		 * @optional
		 * @default 'No More Records'
		 * @type {string}
		 */
		noMoreRecordsText?: string;
		/** 
		 * The padding to use on this Component. Can be specified as a number (in which
		 * case all edges get the same padding) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An object or array of objects that will provide custom functionality for this component.  The only
		 * requirement for a valid plugin is that it contain an init method that accepts a reference of type [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).
		 * 
		 * When a component is created, if any plugins are available, the component will call the init method on each
		 * plugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the
		 * component as needed to provide its functionality.
		 * 
		 * For examples of plugins, see [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html) and [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
		 * 
		 * ## Example code
		 * 
		 * A plugin by alias:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: 'listpaging',
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Multiple plugins by alias:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: ['listpaging', 'pullrefresh'],
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Single plugin by class name with config options:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: {
		 *                xclass: 'Ext.plugin.ListPaging', // Reference plugin by class
		 *                autoPaging: true
		 *            },
		 *    
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Multiple plugins by class name with config options:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: [
		 *                {
		 *                    xclass: 'Ext.plugin.PullRefresh',
		 *                    pullRefreshText: 'Pull to refresh...'
		 *                },
		 *                {
		 *                    xclass: 'Ext.plugin.ListPaging',
		 *                    autoPaging: true
		 *                }
		 *            ],
		 *    
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object|any[]}
		 */
		plugins?: object | any[];
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-publishState) if the property has a
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
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information about references.
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
		 * a Component is normally full screen or automatically rendered inside another [Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html)
		 * @configuration
		 * @optional
		 * @type {Ext.Element}
		 */
		renderTo?: Ext.Element;
		/** 
		 * The absolute right position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
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
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.scroll.Scroller.html)
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
		 * Local reference to the List's Scroller
		 * @configuration
		 * @optional
		 * @type {Ext.scroll.Scroller}
		 */
		scroller?: Ext.scroll.Scroller;
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
		 * inbound animation type such as 'fadeIn' or 'slideIn'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.0.1/modern/Ext.fx.Animation.html#cfg-type) config.
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
		 * The absolute top position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		top?: number | string;
		/** 
		 * A [String](https://docs.sencha.com/extjs/6.0.1/modern/String.html), [Ext.Template](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/modern/Ext.XTemplate.html) or an [Array](https://docs.sencha.com/extjs/6.0.1/modern/Array.html) of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/modern/Ext.XTemplate.html).
		 * Used in conjunction with the [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data) and [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * 
		 * **Note**
		 * The [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data) configuration _must_ be set for any content to be shown in the component when using this configuration.
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
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		translatable?: object;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * The ui to be used on this Component
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ui?: string;
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Session.html). This is
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * The z-index to give this Component when it is rendered
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
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                        config
		 * @returns {Ext.plugin.ListPaging.Statics}        this
		 */
		initConfig? (config: object): Ext.plugin.ListPaging.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.ListPaging.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.ListPaging.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.ListPaging.Statics}  
		 */
		statics? (): Ext.plugin.ListPaging.Statics;
	}
}
declare namespace Ext.plugin.PullRefresh {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html)
	 * This plugin adds pull to refresh functionality to the List.
	 * 
	 * ## Example
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'img', 'text'],
	 *        data: [
	 *            {
	 *                name: 'rdougan',
	 *                img: 'https://www.sencha.com/forum/images/statusicon/forum_new-48.png',
	 *                text: 'JavaScript development'
	 *            }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.dataview.List', {
	 *        fullscreen: true,
	 *    
	 *        store: store,
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.PullRefresh',
	 *                pullText: 'Pull down for more new Tweets!'
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{img}" alt="{name} photo" /&gt;',
	 *            '&lt;div class="tweet"&gt;&lt;b&gt;{name}:&lt;/b&gt; {text}&lt;/div&gt;'
	 *        ]
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Determines whether the pulldown should automatically snap back after data has been loaded.
		 * If false call [snapBack](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html#method-snapBack)() to manually snap the pulldown back.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoSnapBack?: boolean;
		/** 
		 * The base CSS class to apply to this component's element. This will also be prepended to
		 * other elements within this component. To add specific styling for sub-classes, use the [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls) config.
		 * @configuration
		 * @optional
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewModel.html#method-bind). The
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
		 * and `border-style` via CSS rule or [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-style) configuration
		 * (if not already provide by the theme).
		 * 
		 * ## Using [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-style):
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
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		bottom?: number | string;
		/** 
		 * Whether or not this Component is absolutely centered inside its Container
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		centered?: boolean;
		/** 
		 * The CSS class to add to this component's element, in
		 * addition to the [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls). In many cases, this property will be specified
		 * by the derived component class. See [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-userCls) for adding additional CSS
		 * classes to component instances (such as items in a [Ext.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html)).
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl) to
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
		 * [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for some sample
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
		 * The CSS class to add to the component when it is disabled
		 * @configuration
		 * @optional
		 * @default "x-item-disabled"
		 * @type {string}
		 */
		disabledCls?: string;
		/** 
		 * The dock position of this component in its container. Can be `left`, `top`, `right` or `bottom`.
		 * 
		 * **Notes**
		 * 
		 * You must use a HTML5 doctype for [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked) `bottom` to work. To do this, simply add the following code to the HTML file:
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
		 * The CSS class to add to this component when it is floatable.
		 * @configuration
		 * @optional
		 * @default "x-floating"
		 * @type {string}
		 */
		floatingCls?: string;
		/** 
		 * Force the component to take up 100% width and height available, by adding it
		 * to [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		fullscreen?: boolean;
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
		 * Whether or not this Component is hidden (its CSS `display` property is set to `none`)
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * The CSS class to add to the component when it is hidden
		 * @configuration
		 * @optional
		 * @default "x-item-hidden"
		 * @type {string}
		 */
		hiddenCls?: string;
		/** 
		 * Animation effect to apply when the Component is being hidden.  Typically you want to use an
		 * outbound animation type such as 'fadeOut' or 'slideOut'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.0.1/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		hideAnimation?: string | any;
		/** 
		 * Optional HTML content to render inside this Component, or a reference
		 * to an existing element on the page.
		 * @configuration
		 * @optional
		 * @type {string|Ext.Element|HTMLElement}
		 */
		html?: string | Ext.Element | HTMLElement;
		/** 
		 * The format to be used on the last updated date.
		 * @configuration
		 * @optional
		 * @default 'm/d/Y h:iA'
		 * @type {string}
		 */
		lastUpdatedDateFormat?: string;
		/** 
		 * The text to be shown in front of the last updated time.
		 * @configuration
		 * @optional
		 * @default 'Last Updated:&nbsp;'
		 * @type {string}
		 */
		lastUpdatedText?: string;
		/** 
		 * The absolute left position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		left?: number | string;
		/** 
		 * The list to which this PullRefresh plugin is connected.
		 * This will usually by set automatically when configuring the list with this plugin.
		 * @configuration
		 * @optional
		 * @type {Ext.dataview.List}
		 */
		list?: Ext.dataview.List;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html)**
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
		 * The text that will be when data has been loaded.
		 * @configuration
		 * @optional
		 * @default 'Loaded.'
		 * @type {string}
		 */
		loadedText?: string;
		/** 
		 * The text that will be shown while the list is refreshing.
		 * @configuration
		 * @optional
		 * @default 'Loading...'
		 * @type {string}
		 */
		loadingText?: string;
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
		 * Note that this config will not apply if the Component is 'floating' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxHeight?: number | string;
		/** 
		 * The maximum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'floating' (absolutely positioned or centered)
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
		 * The duration for snapping back when pulldown has been lowered further then its height.
		 * @configuration
		 * @optional
		 * @default 300
		 * @type {number}
		 */
		overpullSnapBackDuration?: number;
		/** 
		 * The padding to use on this Component. Can be specified as a number (in which
		 * case all edges get the same padding) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An object or array of objects that will provide custom functionality for this component.  The only
		 * requirement for a valid plugin is that it contain an init method that accepts a reference of type [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).
		 * 
		 * When a component is created, if any plugins are available, the component will call the init method on each
		 * plugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the
		 * component as needed to provide its functionality.
		 * 
		 * For examples of plugins, see [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html) and [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
		 * 
		 * ## Example code
		 * 
		 * A plugin by alias:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: 'listpaging',
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Multiple plugins by alias:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: ['listpaging', 'pullrefresh'],
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Single plugin by class name with config options:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: {
		 *                xclass: 'Ext.plugin.ListPaging', // Reference plugin by class
		 *                autoPaging: true
		 *            },
		 *    
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Multiple plugins by class name with config options:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: [
		 *                {
		 *                    xclass: 'Ext.plugin.PullRefresh',
		 *                    pullRefreshText: 'Pull to refresh...'
		 *                },
		 *                {
		 *                    xclass: 'Ext.plugin.ListPaging',
		 *                    autoPaging: true
		 *                }
		 *            ],
		 *    
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object|any[]}
		 */
		plugins?: object | any[];
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-publishState) if the property has a
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
		 * The text that will be shown while you are pulling down.
		 * @configuration
		 * @optional
		 * @default 'Pull down to refresh...'
		 * @type {string}
		 */
		pullText?: string;
		/** 
		 * The template being used for the pull to refresh markup.
		 * Will be passed a config object with properties state, message and updated
		 * @configuration
		 * @optional
		 * @type {Ext.XTemplate|string|any[]}
		 */
		pullTpl?: Ext.XTemplate | string | any[];
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
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information about references.
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
		 * The text that will be shown after you have pulled down enough to show the release message.
		 * @configuration
		 * @optional
		 * @default 'Release to refresh...'
		 * @type {string}
		 */
		releaseText?: string;
		/** 
		 * Optional element to render this Component to. Usually this is not needed because
		 * a Component is normally full screen or automatically rendered inside another [Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html)
		 * @configuration
		 * @optional
		 * @type {Ext.Element}
		 */
		renderTo?: Ext.Element;
		/** 
		 * The absolute right position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
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
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.scroll.Scroller.html)
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
		 * Determines whether the attached scroller should automatically track size changes of its container.
		 * Enabling this will have performance impacts but will be necessary if your list size changes dynamically. For example if your list contains images
		 * that will be loading and have unspecified heights.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		scrollerAutoRefresh?: boolean;
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
		 * inbound animation type such as 'fadeIn' or 'slideIn'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.0.1/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		showAnimation?: string | any;
		/** 
		 * The duration for snapping back animation after the data has been refreshed
		 * @configuration
		 * @optional
		 * @default 300
		 * @type {number}
		 */
		snappingAnimationDuration?: number;
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
		 * The absolute top position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		top?: number | string;
		/** 
		 * A [String](https://docs.sencha.com/extjs/6.0.1/modern/String.html), [Ext.Template](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/modern/Ext.XTemplate.html) or an [Array](https://docs.sencha.com/extjs/6.0.1/modern/Array.html) of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/modern/Ext.XTemplate.html).
		 * Used in conjunction with the [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data) and [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * 
		 * **Note**
		 * The [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data) configuration _must_ be set for any content to be shown in the component when using this configuration.
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
		 * @configuration
		 * @optional
		 * @default true
		 * @type {object}
		 */
		translatable?: object;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * The ui to be used on this Component
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ui?: string;
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Session.html). This is
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
		 * @default '100%'
		 * @type {number|string}
		 */
		width?: number | string;
		/** 
		 * The `xtype` configuration option can be used to optimize Component creation and rendering. It serves as a
		 * shortcut to the full component name. For example, the component `Ext.button.Button` has an xtype of `button`.
		 * 
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * The z-index to give this Component when it is rendered
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
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                         config
		 * @returns {Ext.plugin.PullRefresh.Statics}        this
		 */
		initConfig? (config: object): Ext.plugin.PullRefresh.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.PullRefresh.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.PullRefresh.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.PullRefresh.Statics}  
		 */
		statics? (): Ext.plugin.PullRefresh.Statics;
	}
}
declare namespace Ext.plugin.Responsive {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.plugin.Responsive](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.Responsive.html)
	 * This plugin can be added to component instances to process a `responsiveConfig`. For
	 * example:
	 * 
	 *     Ext.create({
	 *         xtype: 'panel',
	 *         layout: 'hbox',
	 *    
	 *         items: [{
	 *             xtype: 'component',
	 *             plugins: 'responsive',
	 *    
	 *             responsiveConfig: {
	 *                 'width &lt; 800': {
	 *                     hidden: true
	 *                 },
	 *    
	 *                 'width &gt;= 800': {
	 *                     hidden: false
	 *                 }
	 *             }
	 *         },
	 *         ...]
	 *     });
	 * 
	 * For details see [`responsiveConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html#cfg-responsiveConfig).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * This object consists of keys that represent the conditions on which configs
		 * will be applied. For example:
		 * 
		 *     responsiveConfig: {
		 *         landscape: {
		 *             region: 'west'
		 *         },
		 *         portrait: {
		 *             region: 'north'
		 *         }
		 *     }
		 * 
		 * In this case the keys ("landscape" and "portrait") are the criteria (or "rules")
		 * and the object to their right contains the configs that will apply when that
		 * rule is true.
		 * 
		 * These rules can be any valid JavaScript expression but the following values
		 * are considered in scope:
		 * 
		 * - `landscape` - True if the device orientation is landscape (always `true` on
		 *   desktop devices).
		 * - `portrait` - True if the device orientation is portrait (always `false` on
		 *   desktop devices).
		 * - `tall` - True if `width` &lt; `height` regardless of device type.
		 * - `wide` - True if `width` > `height` regardless of device type.
		 * - `width` - The width of the viewport in pixels.
		 * - `height` - The height of the viewport in pixels.
		 * - `platform` - An object containing various booleans describing the platform
		 *   (see [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags)). The properties of this
		 *   object are also available implicitly (without "platform." prefix) but this
		 *   sub-object may be useful to resolve ambiguity (for example, if one of the
		 *   [`responsiveFormulas`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html#cfg-responsiveFormulas) overlaps and hides any of these properties).
		 *   Previous to Ext JS 5.1, the `platformTags` were only available using this
		 *   prefix.
		 * 
		 * A more complex example:
		 * 
		 *     responsiveConfig: {
		 *         'desktop || width &gt; 800': {
		 *             region: 'west'
		 *         },
		 *    
		 *         '!(desktop || width &gt; 800)': {
		 *             region: 'north'
		 *         }
		 *     }
		 * 
		 * **NOTE**: If multiple rules set a single config (like above), it is important
		 * that the rules be mutually exclusive. That is, only one rule should set each
		 * config. If multiple rules are actively setting a single config, the order of
		 * these (and therefore the config's value) is unspecified.
		 * 
		 * For a config to participate as a `responsiveConfig` it must have a "setter"
		 * method. In the above example, a "setRegion" method must exist.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		responsiveConfig?: object;
		/** 
		 * It is common when using `responsiveConfig` to have recurring expressions that
		 * make for complex configurations. Using `responsiveFormulas` allows you to cut
		 * down on this repetition by adding new properties to the "scope" for the rules
		 * in a `responsiveConfig`.
		 * 
		 * For example:
		 * 
		 *     Ext.define('MyApp.view.main.Main', {
		 *         extend: 'Ext.container.Container',
		 *    
		 *         mixins: [
		 *             'Ext.mixin.Responsive'
		 *         ],
		 *    
		 *         responsiveFormulas: {
		 *             small: 'width &lt; 600',
		 *    
		 *             medium: 'width &gt;= 600 &amp;&amp; width &lt; 800',
		 *    
		 *             large: 'width &gt;= 800',
		 *    
		 *             tuesday: function (context) {
		 *                 return (new Date()).getDay() === 2;
		 *             }
		 *         }
		 *     });
		 * 
		 * With the above declaration, any `responsiveConfig` can now use these values
		 * like so:
		 * 
		 *     responsiveConfig: {
		 *         small: {
		 *             hidden: true
		 *         },
		 *         'medium &amp;&amp; !tuesday': {
		 *             hidden: false,
		 *             region: 'north'
		 *         },
		 *         large: {
		 *             hidden: false,
		 *             region: 'west'
		 *         }
		 *     }
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		responsiveFormulas?: object;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                        config
		 * @returns {Ext.plugin.Responsive.Statics}        this
		 */
		initConfig? (config: object): Ext.plugin.Responsive.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.Responsive.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.Responsive.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.Responsive.Statics}  
		 */
		statics? (): Ext.plugin.Responsive.Statics;
	}
}
declare namespace Ext.plugin.SortableList {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.plugin.SortableList](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html)
	 * The SortableList plugin gives your list items the ability to be reordered by tapping and
	 * dragging elements within the item.
	 * 
	 * The list-sortablehandle is not added to your tpl by default, so it's important that you
	 * manually include it. It's also important to recognize that list-items are not draggable
	 * themselves.  You must add an element to the itemTpl for it to be dragged.
	 * 
	 *    Ext.Viewport.add({
	 *         xtype: 'list',
	 *         infinite: true,
	 *         plugins: 'sortablelist',
	 *         itemTpl: '&lt;span class="myStyle ' + Ext.baseCSSPrefix + 'list-sortablehandle"&gt;&lt;/span&gt;{text}',
	 *         data: [{
	 *             text: 'Item 1'
	 *         }, {
	 *             text: 'Item 2'
	 *         }, {
	 *             text: 'Item 3'
	 *         }]
	 *    });
	 * 
	 * The CSS for MyStyle can be anything that creates an element to tap and drag.  For this
	 * example we made a simple rectangle like so:
	 * 
	 *     .myStyle{
	 *         width:30px;
	 *         height:20px;
	 *         background:gray;
	 *         float:left;
	 *     }
	 * 
	 * Note: You must have infinite set to 'true' when using the SortableList plugin.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The base CSS class to apply to this component's element. This will also be prepended to
		 * other elements within this component. To add specific styling for sub-classes, use the [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-cls) config.
		 * @configuration
		 * @optional
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewModel.html#method-bind). The
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
		 * and `border-style` via CSS rule or [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-style) configuration
		 * (if not already provide by the theme).
		 * 
		 * ## Using [style](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-style):
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
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		bottom?: number | string;
		/** 
		 * Whether or not this Component is absolutely centered inside its Container
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		centered?: boolean;
		/** 
		 * The CSS class to add to this component's element, in
		 * addition to the [baseCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-baseCls). In many cases, this property will be specified
		 * by the derived component class. See [userCls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-userCls) for adding additional CSS
		 * classes to component instances (such as items in a [Ext.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html)).
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tpl) to
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
		 * [controller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for some sample
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
		 * The CSS class to add to the component when it is disabled
		 * @configuration
		 * @optional
		 * @default "x-item-disabled"
		 * @type {string}
		 */
		disabledCls?: string;
		/** 
		 * The dock position of this component in its container. Can be `left`, `top`, `right` or `bottom`.
		 * 
		 * **Notes**
		 * 
		 * You must use a HTML5 doctype for [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked) `bottom` to work. To do this, simply add the following code to the HTML file:
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
		 * The CSS class to add to this component when it is floatable.
		 * @configuration
		 * @optional
		 * @default "x-floating"
		 * @type {string}
		 */
		floatingCls?: string;
		/** 
		 * Force the component to take up 100% width and height available, by adding it
		 * to [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		fullscreen?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default '.' + Ext.baseCSSPrefix + 'list-sortablehandle'
		 * @type {string}
		 */
		handleSelector?: string;
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
		 * Whether or not this Component is hidden (its CSS `display` property is set to `none`)
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * The CSS class to add to the component when it is hidden
		 * @configuration
		 * @optional
		 * @default "x-item-hidden"
		 * @type {string}
		 */
		hiddenCls?: string;
		/** 
		 * Animation effect to apply when the Component is being hidden.  Typically you want to use an
		 * outbound animation type such as 'fadeOut' or 'slideOut'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.0.1/modern/Ext.fx.Animation.html#cfg-type) config.
		 * @configuration
		 * @optional
		 * @type {string|any}
		 */
		hideAnimation?: string | any;
		/** 
		 * Optional HTML content to render inside this Component, or a reference
		 * to an existing element on the page.
		 * @configuration
		 * @optional
		 * @type {string|Ext.Element|HTMLElement}
		 */
		html?: string | Ext.Element | HTMLElement;
		/** 
		 * The absolute left position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		left?: number | string;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		list?: object;
		/** 
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html)**
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
		 * Note that this config will not apply if the Component is 'floating' (absolutely positioned or centered)
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		maxHeight?: number | string;
		/** 
		 * The maximum width of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * If set to `auto`, it will set the width to `null` meaning it will have its own natural size.
		 * Note that this config will not apply if the Component is 'floating' (absolutely positioned or centered)
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
		 * The padding to use on this Component. Can be specified as a number (in which
		 * case all edges get the same padding) or a CSS string like '5 10 10 10'
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * An object or array of objects that will provide custom functionality for this component.  The only
		 * requirement for a valid plugin is that it contain an init method that accepts a reference of type [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html).
		 * 
		 * When a component is created, if any plugins are available, the component will call the init method on each
		 * plugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the
		 * component as needed to provide its functionality.
		 * 
		 * For examples of plugins, see [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html) and [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
		 * 
		 * ## Example code
		 * 
		 * A plugin by alias:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: 'listpaging',
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Multiple plugins by alias:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: ['listpaging', 'pullrefresh'],
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Single plugin by class name with config options:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: {
		 *                xclass: 'Ext.plugin.ListPaging', // Reference plugin by class
		 *                autoPaging: true
		 *            },
		 *    
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * Multiple plugins by class name with config options:
		 * 
		 *    Ext.create('Ext.dataview.List', {
		 *        config: {
		 *            plugins: [
		 *                {
		 *                    xclass: 'Ext.plugin.PullRefresh',
		 *                    pullRefreshText: 'Pull to refresh...'
		 *                },
		 *                {
		 *                    xclass: 'Ext.plugin.ListPaging',
		 *                    autoPaging: true
		 *                }
		 *            ],
		 *    
		 *            itemTpl: '&lt;div class="item"&gt;{title}&lt;/div&gt;',
		 *            store: 'Items'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {object|any[]}
		 */
		plugins?: object | any[];
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#method-publishState) if the property has a
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
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.0.1/modern/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information about references.
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
		 * a Component is normally full screen or automatically rendered inside another [Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html)
		 * @configuration
		 * @optional
		 * @type {Ext.Element}
		 */
		renderTo?: Ext.Element;
		/** 
		 * The absolute right position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
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
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.scroll.Scroller.html)
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
		 * inbound animation type such as 'fadeIn' or 'slideIn'. For more animations, check the [Ext.fx.Animation.type](https://docs.sencha.com/extjs/6.0.1/modern/Ext.fx.Animation.html#cfg-type) config.
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
		 * The absolute top position of this Component; must be a valid CSS length value, e.g: `300`, `100px`, `30%`, etc.
		 * Explicitly setting this value will make this Component become 'floating', which means its layout will no
		 * longer be affected by the Container that it resides in.
		 * @configuration
		 * @optional
		 * @type {number|string}
		 */
		top?: number | string;
		/** 
		 * A [String](https://docs.sencha.com/extjs/6.0.1/modern/String.html), [Ext.Template](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/modern/Ext.XTemplate.html) or an [Array](https://docs.sencha.com/extjs/6.0.1/modern/Array.html) of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/modern/Ext.XTemplate.html).
		 * Used in conjunction with the [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data) and [tplWriteMode](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * 
		 * **Note**
		 * The [data](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-data) configuration _must_ be set for any content to be shown in the component when using this configuration.
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
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		translatable?: object;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * The ui to be used on this Component
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ui?: string;
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Session.html). This is
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
		 * You can define your own xtype on a custom [component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) by specifying the
		 * [alias](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-alias) config option with a prefix of `widget`. For example:
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
		 * The z-index to give this Component when it is rendered
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
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollStart? (x: number, y: number): void;
		/** 
		 * Call the original method that was previously overridden with [override](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-override)
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
		 * overridden by derivation or by an override (see [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define)).
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
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper). This is often done to patch a method to fix a bug.
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
		 * The patch method cannot use [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent) to call the superclass
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
		 * @param   {object}                          config
		 * @returns {Ext.plugin.SortableList.Statics}        this
		 */
		initConfig? (config: object): Ext.plugin.SortableList.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                   name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                          [value] The value to set for the name parameter.
		 * @returns {Ext.plugin.SortableList.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.plugin.SortableList.Statics;
		/** 
		 * Get the reference to the class from which this object was instantiated. Note that unlike [self](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#property-self),
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
		 * @returns {Ext.plugin.SortableList.Statics}  
		 */
		statics? (): Ext.plugin.SortableList.Statics;
	}
}
declare namespace Ext.plugin.ListPaging {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.plugin.ListPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html)
	 * Adds a Load More button at the bottom of the list. When the user presses this button,
	 * the next page of data will be loaded into the store and appended to the List.
	 * 
	 * By specifying [`autoPaging](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.ListPaging.html#cfg-autoPaging): true`, an 'infinite scroll' effect can be achieved,
	 * i.e., the next page of content will load automatically when the user scrolls to the
	 * bottom of the list.
	 * 
	 * ## Example
	 * 
	 *    Ext.create('Ext.dataview.List', {
	 *    
	 *        store: Ext.create('TweetStore'),
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.ListPaging',
	 *                autoPaging: true
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{profile_image_url}" /&gt;',
	 *            '&lt;div class="tweet"&gt;{text}&lt;/div&gt;'
	 *        ]
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
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		added? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires before orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		beforeorientationchange? (eOpts: object): void;
		/** 
		 * Fires when the [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom) configuration is changed by [setBottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setBottom).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		bottomchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered) configuration is changed by [setCentered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setCentered).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		centeredchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the component is destroyed
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		destroy? (eOpts: object): void;
		/** 
		 * Fires when the [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled) configuration is changed by [setDisabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setDisabled).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disabledchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked) configuration is changed by [setDocked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setDocked).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {string}        value    The new value being set.
		 * @param   {string}        oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		dockedchange? (_this: Ext.Component, value: string, oldValue: string, eOpts: object): void;
		/** 
		 * Fires when the component is no longer displayed in the DOM.  Listening to this event will
		 * degrade performance not recommend for general use.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		erased? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the floating status of a component
		 * @event
		 * @param   {Ext.Component} _this    The component instance
		 * @param   {boolean}       floating The component's new floating state
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		floatingchange? (_this: Ext.Component, floating: boolean, eOpts: object): void;
		/** 
		 * Fires whenever a Component with the fullscreen config is instantiated
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		fullscreen? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height) configuration is changed by [setHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-setHeight).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		heightchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden) configuration is changed by [setHidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setHidden).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hiddenchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever the Component is hidden
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component has been initialized
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		initialize? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left) configuration is changed by [setLeft](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setLeft).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		leftchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fired when the Load More component is added to the list. Fires on the List.
		 * @event
		 * @param   {Ext.plugin.ListPaging} _this The list paging plugin
		 * @param   {Ext.List}              list  The list
		 * @param   {object}                eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		loadmorecmpadded? (_this: Ext.plugin.ListPaging, list: Ext.List, eOpts: object): void;
		/** 
		 * Fires when the [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight) configuration is changed by [setMaxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMaxHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth) configuration is changed by [setMaxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMaxWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight) configuration is changed by [setMinHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMinHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth) configuration is changed by [setMinWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMinWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		moved? (_this: Ext.Component, container: Ext.Container, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		painted? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when a component is removed from a Container
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        index     The index of the item that was removed.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		resize? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when the [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right) configuration is changed by [setRight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setRight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		rightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable) configuration is changed by [setScrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setScrollable).
		 * @event
		 * @param   {Ext.Component}         _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean|string|object} value    The new value being set.
		 * @param   {boolean|string|object} oldValue The existing value.
		 * @param   {object}                eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		scrollablechange? (_this: Ext.Component, value: boolean | string | object, oldValue: boolean | string | object, eOpts: object): void;
		/** 
		 * Fires whenever the Component is shown
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top) configuration is changed by [setTop](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setTop).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		topchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever the data of the component is updated
		 * @event
		 * @param   {Ext.Component} _this   The component instance
		 * @param   {object}        newData The new data
		 * @param   {object}        eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		updatedata? (_this: Ext.Component, newData: object, eOpts: object): void;
		/** 
		 * Fires when the [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width) configuration is changed by [setWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-setWidth).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		widthchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
	}
}
declare namespace Ext.plugin.PullRefresh {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.plugin.PullRefresh](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.PullRefresh.html)
	 * This plugin adds pull to refresh functionality to the List.
	 * 
	 * ## Example
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        fields: ['name', 'img', 'text'],
	 *        data: [
	 *            {
	 *                name: 'rdougan',
	 *                img: 'https://www.sencha.com/forum/images/statusicon/forum_new-48.png',
	 *                text: 'JavaScript development'
	 *            }
	 *        ]
	 *    });
	 *    
	 *    Ext.create('Ext.dataview.List', {
	 *        fullscreen: true,
	 *    
	 *        store: store,
	 *    
	 *        plugins: [
	 *            {
	 *                xclass: 'Ext.plugin.PullRefresh',
	 *                pullText: 'Pull down for more new Tweets!'
	 *            }
	 *        ],
	 *    
	 *        itemTpl: [
	 *            '&lt;img src="{img}" alt="{name} photo" /&gt;',
	 *            '&lt;div class="tweet"&gt;&lt;b&gt;{name}:&lt;/b&gt; {text}&lt;/div&gt;'
	 *        ]
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
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		added? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires before orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		beforeorientationchange? (eOpts: object): void;
		/** 
		 * Fires when the [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom) configuration is changed by [setBottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setBottom).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		bottomchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered) configuration is changed by [setCentered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setCentered).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		centeredchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the component is destroyed
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		destroy? (eOpts: object): void;
		/** 
		 * Fires when the [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled) configuration is changed by [setDisabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setDisabled).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disabledchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked) configuration is changed by [setDocked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setDocked).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {string}        value    The new value being set.
		 * @param   {string}        oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		dockedchange? (_this: Ext.Component, value: string, oldValue: string, eOpts: object): void;
		/** 
		 * Fires when the component is no longer displayed in the DOM.  Listening to this event will
		 * degrade performance not recommend for general use.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		erased? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the floating status of a component
		 * @event
		 * @param   {Ext.Component} _this    The component instance
		 * @param   {boolean}       floating The component's new floating state
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		floatingchange? (_this: Ext.Component, floating: boolean, eOpts: object): void;
		/** 
		 * Fires whenever a Component with the fullscreen config is instantiated
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		fullscreen? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height) configuration is changed by [setHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-setHeight).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		heightchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden) configuration is changed by [setHidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setHidden).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hiddenchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever the Component is hidden
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component has been initialized
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		initialize? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left) configuration is changed by [setLeft](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setLeft).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		leftchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight) configuration is changed by [setMaxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMaxHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth) configuration is changed by [setMaxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMaxWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight) configuration is changed by [setMinHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMinHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth) configuration is changed by [setMinWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMinWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		moved? (_this: Ext.Component, container: Ext.Container, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		painted? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when a component is removed from a Container
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        index     The index of the item that was removed.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		resize? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when the [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right) configuration is changed by [setRight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setRight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		rightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable) configuration is changed by [setScrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setScrollable).
		 * @event
		 * @param   {Ext.Component}         _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean|string|object} value    The new value being set.
		 * @param   {boolean|string|object} oldValue The existing value.
		 * @param   {object}                eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		scrollablechange? (_this: Ext.Component, value: boolean | string | object, oldValue: boolean | string | object, eOpts: object): void;
		/** 
		 * Fires whenever the Component is shown
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top) configuration is changed by [setTop](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setTop).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		topchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever the data of the component is updated
		 * @event
		 * @param   {Ext.Component} _this   The component instance
		 * @param   {object}        newData The new data
		 * @param   {object}        eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		updatedata? (_this: Ext.Component, newData: object, eOpts: object): void;
		/** 
		 * Fires when the [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width) configuration is changed by [setWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-setWidth).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		widthchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
	}
}
declare namespace Ext.plugin.SortableList {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.plugin.SortableList](https://docs.sencha.com/extjs/6.0.1/modern/Ext.plugin.SortableList.html)
	 * The SortableList plugin gives your list items the ability to be reordered by tapping and
	 * dragging elements within the item.
	 * 
	 * The list-sortablehandle is not added to your tpl by default, so it's important that you
	 * manually include it. It's also important to recognize that list-items are not draggable
	 * themselves.  You must add an element to the itemTpl for it to be dragged.
	 * 
	 *    Ext.Viewport.add({
	 *         xtype: 'list',
	 *         infinite: true,
	 *         plugins: 'sortablelist',
	 *         itemTpl: '&lt;span class="myStyle ' + Ext.baseCSSPrefix + 'list-sortablehandle"&gt;&lt;/span&gt;{text}',
	 *         data: [{
	 *             text: 'Item 1'
	 *         }, {
	 *             text: 'Item 2'
	 *         }, {
	 *             text: 'Item 3'
	 *         }]
	 *    });
	 * 
	 * The CSS for MyStyle can be anything that creates an element to tap and drag.  For this
	 * example we made a simple rectangle like so:
	 * 
	 *     .myStyle{
	 *         width:30px;
	 *         height:20px;
	 *         background:gray;
	 *         float:left;
	 *     }
	 * 
	 * Note: You must have infinite set to 'true' when using the SortableList plugin.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires after a Component had been added to a Container.
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Parent Container
		 * @param   {number}        index     The index of the item within the Container.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		added? (_this: Ext.Component, container: Ext.Container, index: number, eOpts: object): void;
		/** 
		 * Fires before orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		beforeorientationchange? (eOpts: object): void;
		/** 
		 * Fires when the [bottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-bottom) configuration is changed by [setBottom](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setBottom).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		bottomchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [centered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-centered) configuration is changed by [setCentered](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setCentered).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		centeredchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the component is destroyed
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}   
		 */
		destroy? (eOpts: object): void;
		/** 
		 * Fires when the [disabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-disabled) configuration is changed by [setDisabled](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setDisabled).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		disabledchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires when the [docked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-docked) configuration is changed by [setDocked](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setDocked).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {string}        value    The new value being set.
		 * @param   {string}        oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		dockedchange? (_this: Ext.Component, value: string, oldValue: string, eOpts: object): void;
		/** 
		 * Fires when the component is no longer displayed in the DOM.  Listening to this event will
		 * degrade performance not recommend for general use.
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		erased? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires whenever there is a change in the floating status of a component
		 * @event
		 * @param   {Ext.Component} _this    The component instance
		 * @param   {boolean}       floating The component's new floating state
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		floatingchange? (_this: Ext.Component, floating: boolean, eOpts: object): void;
		/** 
		 * Fires whenever a Component with the fullscreen config is instantiated
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		fullscreen? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [height](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-height) configuration is changed by [setHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-setHeight).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		heightchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [hidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-hidden) configuration is changed by [setHidden](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setHidden).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean}       value    The new value being set.
		 * @param   {boolean}       oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hiddenchange? (_this: Ext.Component, value: boolean, oldValue: boolean, eOpts: object): void;
		/** 
		 * Fires whenever the Component is hidden
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		hide? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the component has been initialized
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		initialize? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [left](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-left) configuration is changed by [setLeft](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setLeft).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		leftchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxHeight) configuration is changed by [setMaxHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMaxHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [maxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-maxWidth) configuration is changed by [setMaxWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMaxWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		maxwidthchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minHeight) configuration is changed by [setMinHeight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMinHeight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		minheightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [minWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-minWidth) configuration is changed by [setMinWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setMinWidth).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		moved? (_this: Ext.Component, container: Ext.Container, toIndex: number, fromIndex: number, eOpts: object): void;
		/** 
		 * Fires when orientation changes.
		 * @event
		 * @param   {object} eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		painted? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when a component is removed from a Container
		 * @event
		 * @param   {Ext.Component} _this
		 * @param   {Ext.Container} container Container which holds the component
		 * @param   {number}        index     The index of the item that was removed.
		 * @param   {object}        eOpts     The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
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
		 * @param   {object}      eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}        
		 */
		resize? (element: Ext.Element, eOpts: object): void;
		/** 
		 * Fires when the [right](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-right) configuration is changed by [setRight](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setRight).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		rightchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires when the [scrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-scrollable) configuration is changed by [setScrollable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setScrollable).
		 * @event
		 * @param   {Ext.Component}         _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {boolean|string|object} value    The new value being set.
		 * @param   {boolean|string|object} oldValue The existing value.
		 * @param   {object}                eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                  
		 */
		scrollablechange? (_this: Ext.Component, value: boolean | string | object, oldValue: boolean | string | object, eOpts: object): void;
		/** 
		 * Fires whenever the Component is shown
		 * @event
		 * @param   {Ext.Component} _this The component instance
		 * @param   {object}        eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		show? (_this: Ext.Component, eOpts: object): void;
		/** 
		 * Fires when the [top](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#cfg-top) configuration is changed by [setTop](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html#method-setTop).
		 * @event
		 * @param   {Ext.Component} _this    The [Ext.Component](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		topchange? (_this: Ext.Component, value: number | string, oldValue: number | string, eOpts: object): void;
		/** 
		 * Fires whenever the data of the component is updated
		 * @event
		 * @param   {Ext.Component} _this   The component instance
		 * @param   {object}        newData The new data
		 * @param   {object}        eOpts   The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		updatedata? (_this: Ext.Component, newData: object, eOpts: object): void;
		/** 
		 * Fires when the [width](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#cfg-width) configuration is changed by [setWidth](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html#method-setWidth).
		 * @event
		 * @param   {Ext.Widget}    _this    The [Ext.Widget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Widget.html) instance.
		 * @param   {number|string} value    The new value being set.
		 * @param   {number|string} oldValue The existing value.
		 * @param   {object}        eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}          
		 */
		widthchange? (_this: Ext.Widget, value: number | string, oldValue: number | string, eOpts: object): void;
	}
}