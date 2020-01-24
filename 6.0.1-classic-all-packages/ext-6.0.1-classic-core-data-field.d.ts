declare namespace Ext.data.field {
	class Boolean extends Ext.data.field.Field {
		/** 
		 * Values matching this regular expression are considered `true`.
		 * @property
		 * @public (property)
		 * @default /^\s*(?:true|yes|on|1)\s*$/i
		 * @type {RegExp}
		 */
		trueRe?: RegExp;
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
		 * @type {Ext.data.field.Boolean.Statics}
		 */
		self?: Ext.data.field.Boolean.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                               members    The members to add to this class.
		 * @param   {boolean}                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Boolean;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.field.Boolean;
		static addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.data.field.Boolean;
		static addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                               name
		 * @param   {object}                                               member
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.field.Boolean;
		static addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               fn
		 * @param   {object}                                               scope
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Boolean;
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
		 * Compares two values to retrieve their relative position in sort order, taking into account
		 * any [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType). Also see [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		collate? (value1: object, value2: object): number;
		/** 
		 * Compares two values to retrieve their relative position in sort order. Also see
		 * [collate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-collate).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		compare? (value1: object, value2: object): number;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets allowBlank for this field. See [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowBlank
		 */
		getAllowBlank? (): boolean;
		/** 
		 * Gets allowNull for this field. See [allowNull](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowNull).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowNull
		 */
		getAllowNull? (): boolean;
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
		 * Gets converter for this field. See [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert).
		 * @method
		 * @public (method)
		 * @returns {Function}  convert
		 */
		getConvert? (): ExtGlobalFunction;
		/** 
		 * Gets the defaultValue for this field. See [defaultValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-defaultValue).
		 * @method
		 * @public (method)
		 * @returns {object}  defaultValue
		 */
		getDefaultValue? (): object;
		/** 
		 * Gets the depends for this field. See [depends](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @method
		 * @public (method)
		 * @returns {string[]}  depends
		 */
		getDepends? (): string[];
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
		 * Get the mapping for this field. See [mapping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping).
		 * @method
		 * @public (method)
		 * @returns {object}  mapping
		 */
		getMapping? (): object;
		/** 
		 * Gets the name for this field. See [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).
		 * @method
		 * @public (method)
		 * @returns {string}  name
		 */
		getName? (): string;
		/** 
		 * Gets the persist for this field. See [persist](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-persist).
		 * @method
		 * @public (method)
		 * @returns {boolean}  persist
		 */
		getPersist? (): boolean;
		/** 
		 * Gets the sortDir for this field.
		 * @method
		 * @public (method)
		 * @returns {string}  sortDir
		 */
		getSortDir? (): string;
		/** 
		 * Gets the sortType for this field. See [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType).
		 * @method
		 * @public (method)
		 * @returns {Function}  sortType
		 */
		getSortType? (): ExtGlobalFunction;
		/** 
		 * Gets a string representation of the type of this field.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * Checks if this field has a mapping applied.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this field has a mapping.
		 */
		hasMapping? (): boolean;
		/** 
		 * Tests whether two values are equal based on this field type.
		 * This uses the [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare) method to determine equality, so
		 * this method should generally not be overridden.
		 * @method
		 * @public (method)
		 * @param   {object}  value1 The first value.
		 * @param   {object}  value2 The second value.
		 * @returns {boolean}        `true` if the values are equal.
		 */
		isEqual? (value1: object, value2: object): boolean;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @method
		 * @public (method)
		 * @param   {any}            value  The Field's value - the value to be serialized.
		 * @param   {Ext.data.Model} record The record being serialized.
		 * @returns {string}                The string that represents the Field's value.
		 */
		serialize? (value: any, record: Ext.data.Model): string;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                               [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Boolean;
		setConfig? (name: string | object, value?: object): Ext.data.field.Field;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                               config
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.field.Boolean;
		initConfig? (config: object): Ext.data.field.Field;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @returns {Ext.data.field.Boolean.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.field.Boolean.Statics;
		statics? (): Ext.data.field.Field.Statics;
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
		compileValidators? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} validators
		 * @returns {void}              
		 */
		constructValidators? (validators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @param   {object} rec
		 * @returns {void}       
		 */
		doCalculate? (v: object, rec: object): void;
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
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
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
		 * @param   {object} modelValidators
		 * @returns {void}                   
		 */
		setModelValidators? (modelValidators: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                             names The names of the linked objects to destroy.
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.field.Boolean;
		unlink? (names: string[]): Ext.data.field.Field;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.field.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * This class provides Date specific processing for fields.
	 * 
	 * In previous releases this functionality was integral to the `Field` base class.
	 */
	class Date extends Ext.data.field.Field {
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
		 * @type {Ext.data.field.Date.Statics}
		 */
		self?: Ext.data.field.Date.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics;
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
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Date;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.field.Date;
		static addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                            members
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.data.field.Date;
		static addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                            name
		 * @param   {object}                                            member
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.field.Date;
		static addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                            fn
		 * @param   {object}                                            scope
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Date;
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
		 * Compares two values to retrieve their relative position in sort order, taking into account
		 * any [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType). Also see [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		collate? (value1: object, value2: object): number;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets allowBlank for this field. See [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowBlank
		 */
		getAllowBlank? (): boolean;
		/** 
		 * Gets allowNull for this field. See [allowNull](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowNull).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowNull
		 */
		getAllowNull? (): boolean;
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
		 * Gets converter for this field. See [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert).
		 * @method
		 * @public (method)
		 * @returns {Function}  convert
		 */
		getConvert? (): ExtGlobalFunction;
		/** 
		 * Gets the dateFormat for this field. See [dateFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @returns {string}  dateFormat
		 */
		getDateFormat? (): string;
		/** 
		 * Gets the dateReadFormat for this field. See [dateReadFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateReadFormat).
		 * @method
		 * @public (method)
		 * @returns {string}  dateReadFormat
		 */
		getDateReadFormat? (): string;
		/** 
		 * Gets the dateWriteFormat for this field. See [dateWriteFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateWriteFormat).
		 * @method
		 * @public (method)
		 * @returns {string}  dateWriteFormat
		 */
		getDateWriteFormat? (): string;
		/** 
		 * Gets the defaultValue for this field. See [defaultValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-defaultValue).
		 * @method
		 * @public (method)
		 * @returns {object}  defaultValue
		 */
		getDefaultValue? (): object;
		/** 
		 * Gets the depends for this field. See [depends](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @method
		 * @public (method)
		 * @returns {string[]}  depends
		 */
		getDepends? (): string[];
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
		 * Get the mapping for this field. See [mapping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping).
		 * @method
		 * @public (method)
		 * @returns {object}  mapping
		 */
		getMapping? (): object;
		/** 
		 * Gets the name for this field. See [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).
		 * @method
		 * @public (method)
		 * @returns {string}  name
		 */
		getName? (): string;
		/** 
		 * Gets the persist for this field. See [persist](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-persist).
		 * @method
		 * @public (method)
		 * @returns {boolean}  persist
		 */
		getPersist? (): boolean;
		/** 
		 * Gets the sortDir for this field.
		 * @method
		 * @public (method)
		 * @returns {string}  sortDir
		 */
		getSortDir? (): string;
		/** 
		 * Gets the sortType for this field. See [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType).
		 * @method
		 * @public (method)
		 * @returns {Function}  sortType
		 */
		getSortType? (): ExtGlobalFunction;
		/** 
		 * Gets a string representation of the type of this field.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * Checks if this field has a mapping applied.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this field has a mapping.
		 */
		hasMapping? (): boolean;
		/** 
		 * Tests whether two values are equal based on this field type.
		 * This uses the [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare) method to determine equality, so
		 * this method should generally not be overridden.
		 * @method
		 * @public (method)
		 * @param   {object}  value1 The first value.
		 * @param   {object}  value2 The second value.
		 * @returns {boolean}        `true` if the values are equal.
		 */
		isEqual? (value1: object, value2: object): boolean;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                            [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Date;
		setConfig? (name: string | object, value?: object): Ext.data.field.Field;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                            config
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.field.Date;
		initConfig? (config: object): Ext.data.field.Field;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @returns {Ext.data.field.Date.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.field.Date.Statics;
		statics? (): Ext.data.field.Field.Statics;
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
		compileValidators? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} validators
		 * @returns {void}              
		 */
		constructValidators? (validators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @param   {object} rec
		 * @returns {void}       
		 */
		doCalculate? (v: object, rec: object): void;
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
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
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
		 * @param   {object} modelValidators
		 * @returns {void}                   
		 */
		setModelValidators? (modelValidators: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                          names The names of the linked objects to destroy.
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.field.Date;
		unlink? (names: string[]): Ext.data.field.Field;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.field.Field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html)
	 * Fields are used to define the members of a Model. They aren't instantiated directly;
	 * instead, when we create a class that extends [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html), it automatically
	 * creates Field instances for each field configured in a [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).
	 * For example, we might set up a model like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'name', 'email',
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * Four fields will have been created for the User Model - name, email, age and gender.
	 * Note that we specified a couple of different formats here; if we only pass in the string
	 * name of the field (as with name and email), the field is set up with the 'auto' type.
	 * It's as if we'd done this instead:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            { name: 'name', type: 'auto' },
	 *            { name: 'email', type: 'auto' },
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * # Field Types
	 * 
	 * Fields come in various types. When declaring a field, the `type` property is used to
	 * specify the type of `Field` derived class used to manage values.
	 * 
	 * The predefined set of types are:
	 * 
	 * - [auto](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html) (Default, implies no conversion)
	 * - [string](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
	 * - [int](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
	 * - [number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
	 * - [boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
	 * - [date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * 
	 * # Conversion
	 * 
	 * When reading fields it is often necessary to convert the values received before using
	 * them or storing them in records. To handle these cases there is the
	 * [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This method is passed the received value (as
	 * well as the current record instance, but see below) and it returns the value to carry
	 * forward.
	 * 
	 * For `auto` fields there is no [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This is for
	 * efficiency. For other field types, there are often `convert` methods. You can provide
	 * a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config when the field is defined like this:
	 * 
	 *     {
	 *         name: 'timestamp',
	 *    
	 *         convert: function (value) {
	 *             return new Date(value);
	 *         }
	 *     }
	 * 
	 * While this can be convenient, see below for details on defining Custom Types as that is
	 * often a better practice and avoids repeating these functions.
	 * 
	 * Note that when a `defaultValue` is specified, it will also be passed through to
	 * `convert` (either to the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method or to the
	 * [`convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config)`.
	 * 
	 * ## Calculated Values
	 * 
	 * In some cases fields are the result of a calculation from other fields. Historically
	 * this was a second role for [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) but that has some short
	 * comings. The simpler solution is the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * Values produced by [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert)
	 * are stored in the record as with any other field. In fact, if we define a calculated
	 * "firstName" field and log out all of the data, we'll see this:
	 * 
	 *    var ed = Ext.create('User', { name: 'Ed Spencer' });
	 *    
	 *    console.log(ed.data);
	 *    
	 *    //outputs this:
	 *    {
	 *        age: 0,
	 *        email: "",
	 *        firstName: "Ed",  // calculated field
	 *        gender: "Unknown",
	 *        name: "Ed Spencer"
	 *    }
	 * 
	 * ### Using `calculate`
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         calculate: function (data) {
	 *             return data.name.split(' ')[0];
	 *         }
	 *     }
	 * 
	 * Using [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) is the simplest and safest way to define a
	 * calculated field. The most important part of this is that, internally, the code of the
	 * supplied function is parsed to extract its dependencies. In this case, the "name" field
	 * is the only dependency. This means that "firstName" will only need to be recalculated
	 * when "name" is modified.
	 * 
	 * ### Using `convert`
	 * 
	 * Following is the equivalent technique using [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         convert: function (value, record) {
	 *             return record.get('name').split(' ')[0];
	 *         },
	 *    
	 *         depends: [ 'name' ]
	 *     }
	 * 
	 * When a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) function accepts a 2nd argument (a reference to
	 * the record), it is considered a calculated field. If a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends)
	 * config is not provided then this field's dependencies are unknown. In this case, the
	 * [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) are provided as would be automatically determined with
	 * the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * ### Updating
	 * 
	 * Fields modified with the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set) method will have their stored
	 * value set using the convert / calculate method when present.
	 * 
	 * For example:
	 * 
	 *    Ext.define('MyApp.model.Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'salary',
	 *            convert: function (val) {
	 *                var startingBonus = val * .1;
	 *                return val + startingBonus;
	 *            }
	 *        }],
	 *        convertOnSet: false
	 *    });
	 *    
	 *    var tina = Ext.create('MyApp.model.Employee', {
	 *        salary: 50000
	 *    });
	 *    
	 *    console.log(tina.get('salary')); // logs 55000
	 *    
	 *    tina.set('salary', 60000);
	 *    console.log(tina.get('salary')); // logs 60000
	 * 
	 * This default behavior can be disabled by setting the Model's
	 * [`Ext.data.Model.convertOnSet`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) config to `false`.
	 * 
	 * **Note:** convertOnSet `false` only prevents the convert / calculate call when the
	 * set `fieldName` param matches the field's [`name`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).  See
	 * [convertOnSet](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) for additional details.
	 * 
	 * ### Dependencies
	 * 
	 * When a field's [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method processes values from the record
	 * (vs. just the field's value), it is best to also provide a `depends` config as shown
	 * above. Fields that provide a [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) method must follow the
	 * proper form for using fields so that dependencies can be extracted.
	 * 
	 * Calculated fields are processed after other fields based on their dependencies. Fields
	 * with [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) methods that use the provided record that do _not_
	 * specify a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) config are processed as a group after all other
	 * fields since such converters can rely on anything in the record. The order of processing
	 * these fields with respect to each other is unspecified and should not be relied upon.
	 * 
	 * # Serialization
	 * 
	 * To handle the inverse scenario of `convert` there is the `serialize` method. This
	 * method is called to produce the value to send to a server based on the internal value
	 * as would be returned from `convert`. In most cases, these methods should "round trip"
	 * a value:
	 * 
	 *     assertEqual(value, field.serialize(field.convert(value)));
	 * 
	 * By default, only [`date`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) fields have a `serialize` method.
	 * Other types simply send their value unmodified.
	 * 
	 * # Custom Types
	 * 
	 * Developers may create their own application-specific data types by deriving from this
	 * class. This is typically much better than applying multiple configuration values on
	 * field instances as these often become repetitive.
	 * 
	 * To illustrate, we define a "time" field type that stores a time-of-day represented as a
	 * number of minutes since Midnight.
	 * 
	 *     Ext.define('App.field.Time', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.time',
	 *    
	 *         timeFormat: 'g:i',
	 *    
	 *         convert: function (value) {
	 *             if (value &amp;&amp; Ext.isString(value)) {
	 *                 var date = Ext.Date.parse(value, this.timeFormat);
	 *                 if (!date) {
	 *                     return null;
	 *                 }
	 *                 return (date.getHours() - 1) * 60 + date.getMinutes();
	 *             }
	 *             return value;
	 *         }
	 *     });
	 * 
	 * ## Validation
	 * 
	 * Custom field types can override the [`validate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-validate) method or
	 * provide a set of [`validators`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-validators).
	 * 
	 *     Ext.define('App.field.PhoneNumber', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.phonenumber',
	 *    
	 *         // Match U.S. phone numbers for example purposes
	 *         validators: {
	 *             type: 'format',
	 *             matcher: /\d{3}\-\d{3}\-\d{4}/
	 *         }
	 *     });
	 * 
	 * Once the class is defined, fields can be declared using the new type (based on its
	 * `alias`) like so:
	 * 
	 *     Ext.define('App.model.PhoneCall', {
	 *         fields: [
	 *             { name: 'startTime', type: 'time' },
	 *             { name: 'phoneNumber', type: 'phonenumber' }
	 *         ]
	 *     });
	 * 
	 */
	class Field extends Ext.Base {
		/** 
		 * This property is `true` if this field has a [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate)
		 * method or a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method that operates on the entire
		 * record as opposed to just the data value. This property is determined from the
		 * `length` of the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) function which means this is
		 * _not_ calculated:
		 * 
		 *     convert: function (value) {
		 *         return ...
		 *     }
		 * 
		 * While this _is_ calculated:
		 * 
		 *     convert: function (value, record) {
		 *         return ...
		 *     }
		 * 
		 * **NOTE:** It is recommended for such fields to use [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate)
		 * or explicitly specify the fields used by [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) using
		 * [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @property
		 * @public (property)
		 * @readonly
		 * @default false
		 * @type {boolean}
		 */
		readonly calculated?: boolean;
		/** 
		 * The default message to present for an invalid field.
		 * @property
		 * @public (property)
		 * @default 'This field is invalid'
		 * @type {string}
		 */
		defaultInvalidMessage?: string;
		/** 
		 * The class (derived from [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html)) that defined this field.
		 * 
		 *     Ext.define('MyApp.models.Foo', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'bar' }
		 *         ],
		 *         ...
		 *     });
		 *    
		 *     var barField = MyApp.models.Foo.getField('bar');
		 *    
		 *     alert(barField.definedBy === MyApp.models.Foo); // alerts 'true'
		 * 
		 * When a field is inherited, this value will reference the class that originally
		 * defined the field.
		 * 
		 *     Ext.define('MyApp.models.Base', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'foo' }
		 *         ],
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.Derived', {
		 *         extend: 'MyApp.models.Base',
		 *    
		 *         fields: [
		 *             { name: 'bar' }
		 *         ],
		 *         ...
		 *     });
		 *    
		 *     var fooField = MyApp.models.Derived.getField('foo');
		 *    
		 *     alert(fooField.definedBy === MyApp.models.Base); // alerts 'true'
		 * 
		 * @property
		 * @public (property)
		 * @type {Ext.Class}
		 */
		definedBy?: Ext.Class;
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Factory.html).
		 * @property
		 * @public (property)
		 * @default {defaultProperty: 'name'}
		 * @type {object}
		 */
		factoryConfig?: object;
		/** 
		 * This property is set to `true` if this is an [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * field.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default false
		 * @type {boolean}
		 */
		readonly identifier?: boolean;
		/** 
		 * The position of this field in the [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) in which it was defined.
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		ordinal?: number;
		/** 
		 * A regular expression for stripping non-numeric characters from a numeric value.
		 * This should be overridden for localization.
		 * @property
		 * @protected (property)
		 * @readonly
		 * @default /[\$,%]/g
		 * @type {RegExp}
		 */
		readonly stripRe?: RegExp;
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
		 * @type {Ext.data.field.Field.Statics}
		 */
		self?: Ext.data.field.Field.Statics | Ext.Base.Statics;
		/** 
		 * also configures Factoryable
		 * @property
		 * @private (property)
		 * @default 'data.field.'
		 * @type {string}
		 */
		aliasPrefix?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default /^function\s*\(\s*([^,\)\s]+)/
		 * @type {RegExp}
		 */
		argumentNamesRe?: RegExp;
		/** 
		 * @property
		 * @private (property)
		 * @default /[^\.a-z0-9_]([a-z_][a-z_0-9]*)\.([a-z_][a-z_0-9]*)/gi
		 * @type {RegExp}
		 */
		calculateRe?: RegExp;
		/** 
		 * This array tracks the fields that have indicated this field in their `depends`
		 * list. If no fields depend on this field, this will be `null`.
		 * @property
		 * @private (property)
		 * @readonly
		 * @type {Ext.data.field.Field[]}
		 */
		readonly dependents?: Ext.data.field.Field[];
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		deprecated?: object;
		/** 
		 * This flag is set to true for fields that have `convert` methods which take the 2nd
		 * argument (the record) and do not specify a `depends` set. Good fields indicate the
		 * fields on which they depend (if any).
		 * @property
		 * @private (property)
		 * @readonly
		 * @default false
		 * @type {boolean}
		 */
		readonly evil?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isDataField?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isField?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'factoryable'
		 * @type {string}
		 */
		mixinId?: string;
		/** 
		 * This is a 1-based value that describes the dependency order of this field. This is
		 * initialized to `null` (falsey) so we can cheaply topo-sort the fields of a class.
		 * @property
		 * @private (property)
		 * @readonly
		 * @type {number}
		 */
		readonly rank?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default 'auto'
		 * @type {string}
		 */
		type?: string;
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
		 * @param   {object}                        members    The members to add to this class.
		 * @param   {boolean}                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.field.Field|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @param   {object}                        members
		 * @returns {Ext.data.field.Field|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                        members
		 * @returns {Ext.data.field.Field|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                        name
		 * @param   {object}                        member
		 * @returns {Ext.data.field.Field|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                        fn
		 * @param   {object}                        scope
		 * @returns {Ext.data.field.Field|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
		 * Compares two values to retrieve their relative position in sort order, taking into account
		 * any [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType). Also see [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		collate? (value1: object, value2: object): number;
		/** 
		 * Compares two values to retrieve their relative position in sort order. Also see
		 * [collate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-collate).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		compare? (value1: object, value2: object): number;
		/** 
		 * A function which converts the value provided by the Reader into the value that will
		 * be stored in the record. This method can be overridden by a derived class or set as
		 * a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config.
		 * 
		 * If configured as `null`, then no conversion will be applied to the raw data property
		 * when this Field is read. This will increase performance. but you must ensure that
		 * the data is of the correct type and does not _need_ converting.
		 * 
		 * Example of convert functions:
		 * 
		 *    function fullName(v, record){
		 *        return record.data.last + ', ' + record.data.first;
		 *    }
		 *    
		 *    function location(v, record){
		 *        return !record.data.city ? '' : (record.data.city + ', ' + record.data.state);
		 *    }
		 *    
		 *    Ext.define('Dude', {
		 *        extend: 'Ext.data.Model',
		 *        fields: [
		 *            {name: 'fullname',  convert: fullName},
		 *            {name: 'firstname', mapping: 'name.first'},
		 *            {name: 'lastname',  mapping: 'name.last'},
		 *            {name: 'city', defaultValue: 'unknown'},
		 *            'state',
		 *            {name: 'location',  convert: location}
		 *        ]
		 *    });
		 *    
		 *    // create the data store
		 *    var store = Ext.create('Ext.data.Store', {
		 *        model: 'Dude',
		 *        proxy: {
		 *            type: 'memory',
		 *            reader: {
		 *                type: 'json',
		 *                rootProperty: 'daRoot',
		 *                totalProperty: 'total'
		 *            }
		 *        }
		 *    });
		 *    
		 *    var myData = [
		 *        { key: 1,
		 *          name: { first: 'Fat',    last:  'Albert' }
		 *          // notice no city, state provided in data object
		 *        },
		 *        { key: 2,
		 *          name: { first: 'Barney', last:  'Rubble' },
		 *          city: 'Bedrock', state: 'Stoneridge'
		 *        },
		 *        { key: 3,
		 *          name: { first: 'Cliff',  last:  'Claven' },
		 *          city: 'Boston',  state: 'MA'
		 *        }
		 *    ];
		 * 
		 * @method
		 * @public (method)
		 * @param   {any}            value
		 * The data value as read by the Reader, if undefined will use
		 * the configured `defaultValue`.
		 * @param   {Ext.data.Model} record
		 * The data object containing the Model as read so far
		 * by the Reader. Note that the Model may not be fully populated at this point as the
		 * fields are read in the order that they are defined.
		 * [fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-fields) array.
		 * @returns {any}                   The converted value for storage in the record.
		 */
		convert? (value: any, record: Ext.data.Model): any;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets allowBlank for this field. See [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowBlank
		 */
		getAllowBlank? (): boolean;
		/** 
		 * Gets allowNull for this field. See [allowNull](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowNull).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowNull
		 */
		getAllowNull? (): boolean;
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
		 * Gets converter for this field. See [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert).
		 * @method
		 * @public (method)
		 * @returns {Function}  convert
		 */
		getConvert? (): ExtGlobalFunction;
		/** 
		 * Gets the defaultValue for this field. See [defaultValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-defaultValue).
		 * @method
		 * @public (method)
		 * @returns {object}  defaultValue
		 */
		getDefaultValue? (): object;
		/** 
		 * Gets the depends for this field. See [depends](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @method
		 * @public (method)
		 * @returns {string[]}  depends
		 */
		getDepends? (): string[];
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
		 * Get the mapping for this field. See [mapping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping).
		 * @method
		 * @public (method)
		 * @returns {object}  mapping
		 */
		getMapping? (): object;
		/** 
		 * Gets the name for this field. See [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).
		 * @method
		 * @public (method)
		 * @returns {string}  name
		 */
		getName? (): string;
		/** 
		 * Gets the persist for this field. See [persist](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-persist).
		 * @method
		 * @public (method)
		 * @returns {boolean}  persist
		 */
		getPersist? (): boolean;
		/** 
		 * Gets the sortDir for this field.
		 * @method
		 * @public (method)
		 * @returns {string}  sortDir
		 */
		getSortDir? (): string;
		/** 
		 * Gets the sortType for this field. See [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType).
		 * @method
		 * @public (method)
		 * @returns {Function}  sortType
		 */
		getSortType? (): ExtGlobalFunction;
		/** 
		 * Gets a string representation of the type of this field.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * Checks if this field has a mapping applied.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this field has a mapping.
		 */
		hasMapping? (): boolean;
		/** 
		 * Tests whether two values are equal based on this field type.
		 * This uses the [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare) method to determine equality, so
		 * this method should generally not be overridden.
		 * @method
		 * @public (method)
		 * @param   {object}  value1 The first value.
		 * @param   {object}  value2 The second value.
		 * @returns {boolean}        `true` if the values are equal.
		 */
		isEqual? (value1: object, value2: object): boolean;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @method
		 * @public (method)
		 * @param   {any}            value  The Field's value - the value to be serialized.
		 * @param   {Ext.data.Model} record The record being serialized.
		 * @returns {string}                The string that represents the Field's value.
		 */
		serialize? (value: any, record: Ext.data.Model): string;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Field|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Field;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                        config
		 * @returns {Ext.data.field.Field|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.field.Field;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @returns {Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.field.Field.Statics;
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
		compileValidators? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} validators
		 * @returns {void}              
		 */
		constructValidators? (validators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @param   {object} rec
		 * @returns {void}       
		 */
		doCalculate? (v: object, rec: object): void;
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
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
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
		 * @param   {object} modelValidators
		 * @returns {void}                   
		 */
		setModelValidators? (modelValidators: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                      names The names of the linked objects to destroy.
		 * @returns {Ext.data.field.Field|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.field.Field;
		unlink? (names: string[]): Ext.Base;
	}
	class Integer extends Ext.data.field.Field {
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
		 * @type {Ext.data.field.Integer.Statics}
		 */
		self?: Ext.data.field.Integer.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isIntegerField?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isNumeric?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'int'
		 * @type {string}
		 */
		numericType?: string;
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
		 * @param   {object}                                               members    The members to add to this class.
		 * @param   {boolean}                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Integer;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.field.Integer;
		static addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.data.field.Integer;
		static addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                               name
		 * @param   {object}                                               member
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.field.Integer;
		static addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               fn
		 * @param   {object}                                               scope
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Integer;
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
		 * Compares two values to retrieve their relative position in sort order, taking into account
		 * any [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType). Also see [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		collate? (value1: object, value2: object): number;
		/** 
		 * Compares two values to retrieve their relative position in sort order. Also see
		 * [collate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-collate).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		compare? (value1: object, value2: object): number;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets allowBlank for this field. See [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowBlank
		 */
		getAllowBlank? (): boolean;
		/** 
		 * Gets allowNull for this field. See [allowNull](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowNull).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowNull
		 */
		getAllowNull? (): boolean;
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
		 * Gets converter for this field. See [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert).
		 * @method
		 * @public (method)
		 * @returns {Function}  convert
		 */
		getConvert? (): ExtGlobalFunction;
		/** 
		 * Gets the defaultValue for this field. See [defaultValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-defaultValue).
		 * @method
		 * @public (method)
		 * @returns {object}  defaultValue
		 */
		getDefaultValue? (): object;
		/** 
		 * Gets the depends for this field. See [depends](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @method
		 * @public (method)
		 * @returns {string[]}  depends
		 */
		getDepends? (): string[];
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
		 * Get the mapping for this field. See [mapping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping).
		 * @method
		 * @public (method)
		 * @returns {object}  mapping
		 */
		getMapping? (): object;
		/** 
		 * Gets the name for this field. See [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).
		 * @method
		 * @public (method)
		 * @returns {string}  name
		 */
		getName? (): string;
		/** 
		 * Gets the persist for this field. See [persist](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-persist).
		 * @method
		 * @public (method)
		 * @returns {boolean}  persist
		 */
		getPersist? (): boolean;
		/** 
		 * Gets the sortDir for this field.
		 * @method
		 * @public (method)
		 * @returns {string}  sortDir
		 */
		getSortDir? (): string;
		/** 
		 * Gets the sortType for this field. See [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType).
		 * @method
		 * @public (method)
		 * @returns {Function}  sortType
		 */
		getSortType? (): ExtGlobalFunction;
		/** 
		 * Gets a string representation of the type of this field.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * Checks if this field has a mapping applied.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this field has a mapping.
		 */
		hasMapping? (): boolean;
		/** 
		 * Tests whether two values are equal based on this field type.
		 * This uses the [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare) method to determine equality, so
		 * this method should generally not be overridden.
		 * @method
		 * @public (method)
		 * @param   {object}  value1 The first value.
		 * @param   {object}  value2 The second value.
		 * @returns {boolean}        `true` if the values are equal.
		 */
		isEqual? (value1: object, value2: object): boolean;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @method
		 * @public (method)
		 * @param   {any}            value  The Field's value - the value to be serialized.
		 * @param   {Ext.data.Model} record The record being serialized.
		 * @returns {string}                The string that represents the Field's value.
		 */
		serialize? (value: any, record: Ext.data.Model): string;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                               [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Integer;
		setConfig? (name: string | object, value?: object): Ext.data.field.Field;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                               config
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.field.Integer;
		initConfig? (config: object): Ext.data.field.Field;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @returns {Ext.data.field.Integer.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.field.Integer.Statics;
		statics? (): Ext.data.field.Field.Statics;
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
		compileValidators? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} validators
		 * @returns {void}              
		 */
		constructValidators? (validators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @param   {object} rec
		 * @returns {void}       
		 */
		doCalculate? (v: object, rec: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @returns {void}     
		 */
		getNumber? (v: object): void;
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
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
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
		 * @param   {object} v
		 * @returns {void}     
		 */
		parse? (v: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modelValidators
		 * @returns {void}                   
		 */
		setModelValidators? (modelValidators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} s
		 * @returns {void}     
		 */
		sortType? (s: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                             names The names of the linked objects to destroy.
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.field.Integer;
		unlink? (names: string[]): Ext.data.field.Field;
		unlink? (names: string[]): Ext.Base;
	}
	class Number extends Ext.data.field.Integer {
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
		 * @type {Ext.data.field.Number.Statics}
		 */
		self?: Ext.data.field.Number.Statics | Ext.data.field.Integer.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		isIntegerField?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'float'
		 * @type {string}
		 */
		numericType?: string;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Number;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Integer;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.field.Number;
		static addStatics? (members: object): typeof Ext.data.field.Integer;
		static addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.data.field.Number;
		static addInheritableStatics? (members: object): typeof Ext.data.field.Integer;
		static addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.field.Number;
		static addMember? (name: object, member: object): typeof Ext.data.field.Integer;
		static addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Number;
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Integer;
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
		 * Compares two values to retrieve their relative position in sort order, taking into account
		 * any [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType). Also see [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		collate? (value1: object, value2: object): number;
		/** 
		 * Compares two values to retrieve their relative position in sort order. Also see
		 * [collate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-collate).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		compare? (value1: object, value2: object): number;
		/** 
		 * A function which converts the value provided by the Reader into the value that will
		 * be stored in the record. This method can be overridden by a derived class or set as
		 * a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html#cfg-convert) config.
		 * 
		 * If configured as `null`, then no conversion will be applied to the raw data property
		 * when this Field is read. This will increase performance. but you must ensure that
		 * the data is of the correct type and does not _need_ converting.
		 * 
		 * Example of convert functions:
		 * 
		 *    function fullName(v, record){
		 *        return record.data.last + ', ' + record.data.first;
		 *    }
		 *    
		 *    function location(v, record){
		 *        return !record.data.city ? '' : (record.data.city + ', ' + record.data.state);
		 *    }
		 *    
		 *    Ext.define('Dude', {
		 *        extend: 'Ext.data.Model',
		 *        fields: [
		 *            {name: 'fullname',  convert: fullName},
		 *            {name: 'firstname', mapping: 'name.first'},
		 *            {name: 'lastname',  mapping: 'name.last'},
		 *            {name: 'city', defaultValue: 'unknown'},
		 *            'state',
		 *            {name: 'location',  convert: location}
		 *        ]
		 *    });
		 *    
		 *    // create the data store
		 *    var store = Ext.create('Ext.data.Store', {
		 *        model: 'Dude',
		 *        proxy: {
		 *            type: 'memory',
		 *            reader: {
		 *                type: 'json',
		 *                rootProperty: 'daRoot',
		 *                totalProperty: 'total'
		 *            }
		 *        }
		 *    });
		 *    
		 *    var myData = [
		 *        { key: 1,
		 *          name: { first: 'Fat',    last:  'Albert' }
		 *          // notice no city, state provided in data object
		 *        },
		 *        { key: 2,
		 *          name: { first: 'Barney', last:  'Rubble' },
		 *          city: 'Bedrock', state: 'Stoneridge'
		 *        },
		 *        { key: 3,
		 *          name: { first: 'Cliff',  last:  'Claven' },
		 *          city: 'Boston',  state: 'MA'
		 *        }
		 *    ];
		 * 
		 * @method
		 * @public (method)
		 * @param   {object} v
		 * @returns {any}      The converted value for storage in the record.
		 */
		convert? (v: object): any;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets allowBlank for this field. See [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowBlank
		 */
		getAllowBlank? (): boolean;
		/** 
		 * Gets allowNull for this field. See [allowNull](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowNull).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowNull
		 */
		getAllowNull? (): boolean;
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
		 * Gets converter for this field. See [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert).
		 * @method
		 * @public (method)
		 * @returns {Function}  convert
		 */
		getConvert? (): ExtGlobalFunction;
		/** 
		 * Gets the defaultValue for this field. See [defaultValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-defaultValue).
		 * @method
		 * @public (method)
		 * @returns {object}  defaultValue
		 */
		getDefaultValue? (): object;
		/** 
		 * Gets the depends for this field. See [depends](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @method
		 * @public (method)
		 * @returns {string[]}  depends
		 */
		getDepends? (): string[];
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
		 * Get the mapping for this field. See [mapping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping).
		 * @method
		 * @public (method)
		 * @returns {object}  mapping
		 */
		getMapping? (): object;
		/** 
		 * Gets the name for this field. See [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).
		 * @method
		 * @public (method)
		 * @returns {string}  name
		 */
		getName? (): string;
		/** 
		 * Gets the persist for this field. See [persist](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-persist).
		 * @method
		 * @public (method)
		 * @returns {boolean}  persist
		 */
		getPersist? (): boolean;
		/** 
		 * Gets the sortDir for this field.
		 * @method
		 * @public (method)
		 * @returns {string}  sortDir
		 */
		getSortDir? (): string;
		/** 
		 * Gets the sortType for this field. See [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType).
		 * @method
		 * @public (method)
		 * @returns {Function}  sortType
		 */
		getSortType? (): ExtGlobalFunction;
		/** 
		 * Gets a string representation of the type of this field.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * Checks if this field has a mapping applied.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this field has a mapping.
		 */
		hasMapping? (): boolean;
		/** 
		 * Tests whether two values are equal based on this field type.
		 * This uses the [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare) method to determine equality, so
		 * this method should generally not be overridden.
		 * @method
		 * @public (method)
		 * @param   {object}  value1 The first value.
		 * @param   {object}  value2 The second value.
		 * @returns {boolean}        `true` if the values are equal.
		 */
		isEqual? (value1: object, value2: object): boolean;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @method
		 * @public (method)
		 * @param   {any}            value  The Field's value - the value to be serialized.
		 * @param   {Ext.data.Model} record The record being serialized.
		 * @returns {string}                The string that represents the Field's value.
		 */
		serialize? (value: any, record: Ext.data.Model): string;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                     [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Number;
		setConfig? (name: string | object, value?: object): Ext.data.field.Integer;
		setConfig? (name: string | object, value?: object): Ext.data.field.Field;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.field.Number;
		initConfig? (config: object): Ext.data.field.Integer;
		initConfig? (config: object): Ext.data.field.Field;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @returns {Ext.data.field.Number.Statics|Ext.data.field.Integer.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.field.Number.Statics;
		statics? (): Ext.data.field.Integer.Statics;
		statics? (): Ext.data.field.Field.Statics;
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
		compileValidators? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} validators
		 * @returns {void}              
		 */
		constructValidators? (validators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @param   {object} rec
		 * @returns {void}       
		 */
		doCalculate? (v: object, rec: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @mixed
		 * @private (method+property)
		 * @param   {object} v
		 * @returns {void}     
		 * @type {object}
		 */
		getNumber?: ((v: object) => void) | object | any;
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
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
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
		 * @param   {object} v
		 * @returns {void}     
		 */
		parse? (v: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modelValidators
		 * @returns {void}                   
		 */
		setModelValidators? (modelValidators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} s
		 * @returns {void}     
		 */
		sortType? (s: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                   names The names of the linked objects to destroy.
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.field.Number;
		unlink? (names: string[]): Ext.data.field.Integer;
		unlink? (names: string[]): Ext.data.field.Field;
		unlink? (names: string[]): Ext.Base;
	}
	class String extends Ext.data.field.Field {
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
		 * @type {Ext.data.field.String.Statics}
		 */
		self?: Ext.data.field.String.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics;
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
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.String;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.field.String;
		static addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                              members
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.data.field.String;
		static addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                              name
		 * @param   {object}                                              member
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.field.String;
		static addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                              fn
		 * @param   {object}                                              scope
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.String;
		static onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
		 * Compares two values to retrieve their relative position in sort order, taking into account
		 * any [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType). Also see [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		collate? (value1: object, value2: object): number;
		/** 
		 * Compares two values to retrieve their relative position in sort order. Also see
		 * [collate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-collate).
		 * @method
		 * @public (method)
		 * @param   {object} value1 The first value.
		 * @param   {object} value2 The second value.
		 * @returns {number} 
		 * `-1` if `value1` is less than `value2`. `1` if `value1` is greater than `value2`.
		 * `0` otherwise.
		 */
		compare? (value1: object, value2: object): number;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets allowBlank for this field. See [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowBlank
		 */
		getAllowBlank? (): boolean;
		/** 
		 * Gets allowNull for this field. See [allowNull](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowNull).
		 * @method
		 * @public (method)
		 * @returns {boolean}  allowNull
		 */
		getAllowNull? (): boolean;
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
		 * Gets converter for this field. See [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert).
		 * @method
		 * @public (method)
		 * @returns {Function}  convert
		 */
		getConvert? (): ExtGlobalFunction;
		/** 
		 * Gets the defaultValue for this field. See [defaultValue](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-defaultValue).
		 * @method
		 * @public (method)
		 * @returns {object}  defaultValue
		 */
		getDefaultValue? (): object;
		/** 
		 * Gets the depends for this field. See [depends](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends).
		 * @method
		 * @public (method)
		 * @returns {string[]}  depends
		 */
		getDepends? (): string[];
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
		 * Get the mapping for this field. See [mapping](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping).
		 * @method
		 * @public (method)
		 * @returns {object}  mapping
		 */
		getMapping? (): object;
		/** 
		 * Gets the name for this field. See [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).
		 * @method
		 * @public (method)
		 * @returns {string}  name
		 */
		getName? (): string;
		/** 
		 * Gets the persist for this field. See [persist](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-persist).
		 * @method
		 * @public (method)
		 * @returns {boolean}  persist
		 */
		getPersist? (): boolean;
		/** 
		 * Gets the sortDir for this field.
		 * @method
		 * @public (method)
		 * @returns {string}  sortDir
		 */
		getSortDir? (): string;
		/** 
		 * Gets the sortType for this field. See [sortType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-sortType).
		 * @method
		 * @public (method)
		 * @returns {Function}  sortType
		 */
		getSortType? (): ExtGlobalFunction;
		/** 
		 * Gets a string representation of the type of this field.
		 * @method
		 * @public (method)
		 * @returns {string}  type
		 */
		getType? (): string;
		/** 
		 * Checks if this field has a mapping applied.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this field has a mapping.
		 */
		hasMapping? (): boolean;
		/** 
		 * Tests whether two values are equal based on this field type.
		 * This uses the [compare](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-compare) method to determine equality, so
		 * this method should generally not be overridden.
		 * @method
		 * @public (method)
		 * @param   {object}  value1 The first value.
		 * @param   {object}  value2 The second value.
		 * @returns {boolean}        `true` if the values are equal.
		 */
		isEqual? (value1: object, value2: object): boolean;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @method
		 * @public (method)
		 * @param   {any}            value  The Field's value - the value to be serialized.
		 * @param   {Ext.data.Model} record The record being serialized.
		 * @returns {string}                The string that represents the Field's value.
		 */
		serialize? (value: any, record: Ext.data.Model): string;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                              [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.String;
		setConfig? (name: string | object, value?: object): Ext.data.field.Field;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                              config
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.field.String;
		initConfig? (config: object): Ext.data.field.Field;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @returns {Ext.data.field.String.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.field.String.Statics;
		statics? (): Ext.data.field.Field.Statics;
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
		compileValidators? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} validators
		 * @returns {void}              
		 */
		constructValidators? (validators: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} v
		 * @param   {object} rec
		 * @returns {void}       
		 */
		doCalculate? (v: object, rec: object): void;
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
		 * @param   {object} cls
		 * @param   {object} data
		 * @returns {void}        
		 */
		onClassExtended? (cls: object, data: object): void;
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
		 * @param   {object} modelValidators
		 * @returns {void}                   
		 */
		setModelValidators? (modelValidators: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                            names The names of the linked objects to destroy.
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.field.String;
		unlink? (names: string[]): Ext.data.field.Field;
		unlink? (names: string[]): Ext.Base;
	}
}
declare namespace Ext.data {
	class Field extends Ext.data.field.Field {}
}
declare namespace Ext.data.field.Boolean {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.field.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
	 */
	interface Def extends Ext.data.field.Boolean {
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
		 * @type {Ext.data.field.Boolean.Cfg}
		 */
		config?: Ext.data.field.Boolean.Cfg;
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
		 * @returns {Ext.data.field.Boolean.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.field.Boolean.Statics}
		 */
		statics?: (() => Ext.data.field.Boolean.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics) | Ext.data.field.Boolean.Statics | any;
	}
}
declare namespace Ext.data.field.Date {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.field.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * This class provides Date specific processing for fields.
	 * 
	 * In previous releases this functionality was integral to the `Field` base class.
	 */
	interface Def extends Ext.data.field.Date {
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
		 * @type {Ext.data.field.Date.Cfg}
		 */
		config?: Ext.data.field.Date.Cfg;
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
		 * @returns {Ext.data.field.Date.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.field.Date.Statics}
		 */
		statics?: (() => Ext.data.field.Date.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics) | Ext.data.field.Date.Statics | any;
	}
}
declare namespace Ext.data.field.Field {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.field.Field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html)
	 * Fields are used to define the members of a Model. They aren't instantiated directly;
	 * instead, when we create a class that extends [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html), it automatically
	 * creates Field instances for each field configured in a [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).
	 * For example, we might set up a model like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'name', 'email',
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * Four fields will have been created for the User Model - name, email, age and gender.
	 * Note that we specified a couple of different formats here; if we only pass in the string
	 * name of the field (as with name and email), the field is set up with the 'auto' type.
	 * It's as if we'd done this instead:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            { name: 'name', type: 'auto' },
	 *            { name: 'email', type: 'auto' },
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * # Field Types
	 * 
	 * Fields come in various types. When declaring a field, the `type` property is used to
	 * specify the type of `Field` derived class used to manage values.
	 * 
	 * The predefined set of types are:
	 * 
	 * - [auto](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html) (Default, implies no conversion)
	 * - [string](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
	 * - [int](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
	 * - [number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
	 * - [boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
	 * - [date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * 
	 * # Conversion
	 * 
	 * When reading fields it is often necessary to convert the values received before using
	 * them or storing them in records. To handle these cases there is the
	 * [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This method is passed the received value (as
	 * well as the current record instance, but see below) and it returns the value to carry
	 * forward.
	 * 
	 * For `auto` fields there is no [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This is for
	 * efficiency. For other field types, there are often `convert` methods. You can provide
	 * a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config when the field is defined like this:
	 * 
	 *     {
	 *         name: 'timestamp',
	 *    
	 *         convert: function (value) {
	 *             return new Date(value);
	 *         }
	 *     }
	 * 
	 * While this can be convenient, see below for details on defining Custom Types as that is
	 * often a better practice and avoids repeating these functions.
	 * 
	 * Note that when a `defaultValue` is specified, it will also be passed through to
	 * `convert` (either to the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method or to the
	 * [`convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config)`.
	 * 
	 * ## Calculated Values
	 * 
	 * In some cases fields are the result of a calculation from other fields. Historically
	 * this was a second role for [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) but that has some short
	 * comings. The simpler solution is the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * Values produced by [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert)
	 * are stored in the record as with any other field. In fact, if we define a calculated
	 * "firstName" field and log out all of the data, we'll see this:
	 * 
	 *    var ed = Ext.create('User', { name: 'Ed Spencer' });
	 *    
	 *    console.log(ed.data);
	 *    
	 *    //outputs this:
	 *    {
	 *        age: 0,
	 *        email: "",
	 *        firstName: "Ed",  // calculated field
	 *        gender: "Unknown",
	 *        name: "Ed Spencer"
	 *    }
	 * 
	 * ### Using `calculate`
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         calculate: function (data) {
	 *             return data.name.split(' ')[0];
	 *         }
	 *     }
	 * 
	 * Using [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) is the simplest and safest way to define a
	 * calculated field. The most important part of this is that, internally, the code of the
	 * supplied function is parsed to extract its dependencies. In this case, the "name" field
	 * is the only dependency. This means that "firstName" will only need to be recalculated
	 * when "name" is modified.
	 * 
	 * ### Using `convert`
	 * 
	 * Following is the equivalent technique using [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         convert: function (value, record) {
	 *             return record.get('name').split(' ')[0];
	 *         },
	 *    
	 *         depends: [ 'name' ]
	 *     }
	 * 
	 * When a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) function accepts a 2nd argument (a reference to
	 * the record), it is considered a calculated field. If a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends)
	 * config is not provided then this field's dependencies are unknown. In this case, the
	 * [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) are provided as would be automatically determined with
	 * the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * ### Updating
	 * 
	 * Fields modified with the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set) method will have their stored
	 * value set using the convert / calculate method when present.
	 * 
	 * For example:
	 * 
	 *    Ext.define('MyApp.model.Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'salary',
	 *            convert: function (val) {
	 *                var startingBonus = val * .1;
	 *                return val + startingBonus;
	 *            }
	 *        }],
	 *        convertOnSet: false
	 *    });
	 *    
	 *    var tina = Ext.create('MyApp.model.Employee', {
	 *        salary: 50000
	 *    });
	 *    
	 *    console.log(tina.get('salary')); // logs 55000
	 *    
	 *    tina.set('salary', 60000);
	 *    console.log(tina.get('salary')); // logs 60000
	 * 
	 * This default behavior can be disabled by setting the Model's
	 * [`Ext.data.Model.convertOnSet`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) config to `false`.
	 * 
	 * **Note:** convertOnSet `false` only prevents the convert / calculate call when the
	 * set `fieldName` param matches the field's [`name`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).  See
	 * [convertOnSet](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) for additional details.
	 * 
	 * ### Dependencies
	 * 
	 * When a field's [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method processes values from the record
	 * (vs. just the field's value), it is best to also provide a `depends` config as shown
	 * above. Fields that provide a [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) method must follow the
	 * proper form for using fields so that dependencies can be extracted.
	 * 
	 * Calculated fields are processed after other fields based on their dependencies. Fields
	 * with [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) methods that use the provided record that do _not_
	 * specify a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) config are processed as a group after all other
	 * fields since such converters can rely on anything in the record. The order of processing
	 * these fields with respect to each other is unspecified and should not be relied upon.
	 * 
	 * # Serialization
	 * 
	 * To handle the inverse scenario of `convert` there is the `serialize` method. This
	 * method is called to produce the value to send to a server based on the internal value
	 * as would be returned from `convert`. In most cases, these methods should "round trip"
	 * a value:
	 * 
	 *     assertEqual(value, field.serialize(field.convert(value)));
	 * 
	 * By default, only [`date`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) fields have a `serialize` method.
	 * Other types simply send their value unmodified.
	 * 
	 * # Custom Types
	 * 
	 * Developers may create their own application-specific data types by deriving from this
	 * class. This is typically much better than applying multiple configuration values on
	 * field instances as these often become repetitive.
	 * 
	 * To illustrate, we define a "time" field type that stores a time-of-day represented as a
	 * number of minutes since Midnight.
	 * 
	 *     Ext.define('App.field.Time', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.time',
	 *    
	 *         timeFormat: 'g:i',
	 *    
	 *         convert: function (value) {
	 *             if (value &amp;&amp; Ext.isString(value)) {
	 *                 var date = Ext.Date.parse(value, this.timeFormat);
	 *                 if (!date) {
	 *                     return null;
	 *                 }
	 *                 return (date.getHours() - 1) * 60 + date.getMinutes();
	 *             }
	 *             return value;
	 *         }
	 *     });
	 * 
	 * ## Validation
	 * 
	 * Custom field types can override the [`validate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-validate) method or
	 * provide a set of [`validators`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-validators).
	 * 
	 *     Ext.define('App.field.PhoneNumber', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.phonenumber',
	 *    
	 *         // Match U.S. phone numbers for example purposes
	 *         validators: {
	 *             type: 'format',
	 *             matcher: /\d{3}\-\d{3}\-\d{4}/
	 *         }
	 *     });
	 * 
	 * Once the class is defined, fields can be declared using the new type (based on its
	 * `alias`) like so:
	 * 
	 *     Ext.define('App.model.PhoneCall', {
	 *         fields: [
	 *             { name: 'startTime', type: 'time' },
	 *             { name: 'phoneNumber', type: 'phonenumber' }
	 *         ]
	 *     });
	 * 
	 */
	interface Def extends Ext.data.field.Field {
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
		 * @type {Ext.data.field.Field.Cfg}
		 */
		config?: Ext.data.field.Field.Cfg;
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
		 * @returns {Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.field.Field.Statics}
		 */
		statics?: (() => Ext.data.field.Field.Statics | Ext.Base.Statics) | Ext.data.field.Field.Statics | any;
	}
}
declare namespace Ext.data.field.Integer {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.field.Integer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
	 */
	interface Def extends Ext.data.field.Integer {
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
		 * @type {Ext.data.field.Integer.Cfg}
		 */
		config?: Ext.data.field.Integer.Cfg;
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
		 * @returns {Ext.data.field.Integer.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.field.Integer.Statics}
		 */
		statics?: (() => Ext.data.field.Integer.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics) | Ext.data.field.Integer.Statics | any;
	}
}
declare namespace Ext.data.field.Number {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.field.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
	 */
	interface Def extends Ext.data.field.Number {
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
		 * @type {Ext.data.field.Number.Cfg}
		 */
		config?: Ext.data.field.Number.Cfg;
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
		 * @returns {Ext.data.field.Number.Statics|Ext.data.field.Integer.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.field.Number.Statics}
		 */
		statics?: (() => Ext.data.field.Number.Statics | Ext.data.field.Integer.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics) | Ext.data.field.Number.Statics | any;
	}
}
declare namespace Ext.data.field.String {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.field.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
	 */
	interface Def extends Ext.data.field.String {
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
		 * @type {Ext.data.field.String.Cfg}
		 */
		config?: Ext.data.field.String.Cfg;
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
		 * @returns {Ext.data.field.String.Statics|Ext.data.field.Field.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.field.String.Statics}
		 */
		statics?: (() => Ext.data.field.String.Statics | Ext.data.field.Field.Statics | Ext.Base.Statics) | Ext.data.field.String.Statics | any;
	}
}
declare namespace Ext.data.field.Boolean {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.field.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
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
		 * @param   {object}                                               members    The members to add to this class.
		 * @param   {boolean}                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Boolean;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.field.Boolean;
		addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.data.field.Boolean;
		addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                               name
		 * @param   {object}                                               member
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.field.Boolean;
		addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               fn
		 * @param   {object}                                               scope
		 * @returns {Ext.data.field.Boolean|Ext.data.field.Field|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Boolean;
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
declare namespace Ext.data.field.Date {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.field.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * This class provides Date specific processing for fields.
	 * 
	 * In previous releases this functionality was integral to the `Field` base class.
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
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Date;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.field.Date;
		addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                            members
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.data.field.Date;
		addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                            name
		 * @param   {object}                                            member
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.field.Date;
		addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                            fn
		 * @param   {object}                                            scope
		 * @returns {Ext.data.field.Date|Ext.data.field.Field|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Date;
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
declare namespace Ext.data.field.Field {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.field.Field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html)
	 * Fields are used to define the members of a Model. They aren't instantiated directly;
	 * instead, when we create a class that extends [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html), it automatically
	 * creates Field instances for each field configured in a [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).
	 * For example, we might set up a model like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'name', 'email',
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * Four fields will have been created for the User Model - name, email, age and gender.
	 * Note that we specified a couple of different formats here; if we only pass in the string
	 * name of the field (as with name and email), the field is set up with the 'auto' type.
	 * It's as if we'd done this instead:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            { name: 'name', type: 'auto' },
	 *            { name: 'email', type: 'auto' },
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * # Field Types
	 * 
	 * Fields come in various types. When declaring a field, the `type` property is used to
	 * specify the type of `Field` derived class used to manage values.
	 * 
	 * The predefined set of types are:
	 * 
	 * - [auto](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html) (Default, implies no conversion)
	 * - [string](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
	 * - [int](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
	 * - [number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
	 * - [boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
	 * - [date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * 
	 * # Conversion
	 * 
	 * When reading fields it is often necessary to convert the values received before using
	 * them or storing them in records. To handle these cases there is the
	 * [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This method is passed the received value (as
	 * well as the current record instance, but see below) and it returns the value to carry
	 * forward.
	 * 
	 * For `auto` fields there is no [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This is for
	 * efficiency. For other field types, there are often `convert` methods. You can provide
	 * a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config when the field is defined like this:
	 * 
	 *     {
	 *         name: 'timestamp',
	 *    
	 *         convert: function (value) {
	 *             return new Date(value);
	 *         }
	 *     }
	 * 
	 * While this can be convenient, see below for details on defining Custom Types as that is
	 * often a better practice and avoids repeating these functions.
	 * 
	 * Note that when a `defaultValue` is specified, it will also be passed through to
	 * `convert` (either to the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method or to the
	 * [`convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config)`.
	 * 
	 * ## Calculated Values
	 * 
	 * In some cases fields are the result of a calculation from other fields. Historically
	 * this was a second role for [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) but that has some short
	 * comings. The simpler solution is the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * Values produced by [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert)
	 * are stored in the record as with any other field. In fact, if we define a calculated
	 * "firstName" field and log out all of the data, we'll see this:
	 * 
	 *    var ed = Ext.create('User', { name: 'Ed Spencer' });
	 *    
	 *    console.log(ed.data);
	 *    
	 *    //outputs this:
	 *    {
	 *        age: 0,
	 *        email: "",
	 *        firstName: "Ed",  // calculated field
	 *        gender: "Unknown",
	 *        name: "Ed Spencer"
	 *    }
	 * 
	 * ### Using `calculate`
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         calculate: function (data) {
	 *             return data.name.split(' ')[0];
	 *         }
	 *     }
	 * 
	 * Using [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) is the simplest and safest way to define a
	 * calculated field. The most important part of this is that, internally, the code of the
	 * supplied function is parsed to extract its dependencies. In this case, the "name" field
	 * is the only dependency. This means that "firstName" will only need to be recalculated
	 * when "name" is modified.
	 * 
	 * ### Using `convert`
	 * 
	 * Following is the equivalent technique using [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         convert: function (value, record) {
	 *             return record.get('name').split(' ')[0];
	 *         },
	 *    
	 *         depends: [ 'name' ]
	 *     }
	 * 
	 * When a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) function accepts a 2nd argument (a reference to
	 * the record), it is considered a calculated field. If a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends)
	 * config is not provided then this field's dependencies are unknown. In this case, the
	 * [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) are provided as would be automatically determined with
	 * the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * ### Updating
	 * 
	 * Fields modified with the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set) method will have their stored
	 * value set using the convert / calculate method when present.
	 * 
	 * For example:
	 * 
	 *    Ext.define('MyApp.model.Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'salary',
	 *            convert: function (val) {
	 *                var startingBonus = val * .1;
	 *                return val + startingBonus;
	 *            }
	 *        }],
	 *        convertOnSet: false
	 *    });
	 *    
	 *    var tina = Ext.create('MyApp.model.Employee', {
	 *        salary: 50000
	 *    });
	 *    
	 *    console.log(tina.get('salary')); // logs 55000
	 *    
	 *    tina.set('salary', 60000);
	 *    console.log(tina.get('salary')); // logs 60000
	 * 
	 * This default behavior can be disabled by setting the Model's
	 * [`Ext.data.Model.convertOnSet`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) config to `false`.
	 * 
	 * **Note:** convertOnSet `false` only prevents the convert / calculate call when the
	 * set `fieldName` param matches the field's [`name`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).  See
	 * [convertOnSet](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) for additional details.
	 * 
	 * ### Dependencies
	 * 
	 * When a field's [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method processes values from the record
	 * (vs. just the field's value), it is best to also provide a `depends` config as shown
	 * above. Fields that provide a [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) method must follow the
	 * proper form for using fields so that dependencies can be extracted.
	 * 
	 * Calculated fields are processed after other fields based on their dependencies. Fields
	 * with [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) methods that use the provided record that do _not_
	 * specify a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) config are processed as a group after all other
	 * fields since such converters can rely on anything in the record. The order of processing
	 * these fields with respect to each other is unspecified and should not be relied upon.
	 * 
	 * # Serialization
	 * 
	 * To handle the inverse scenario of `convert` there is the `serialize` method. This
	 * method is called to produce the value to send to a server based on the internal value
	 * as would be returned from `convert`. In most cases, these methods should "round trip"
	 * a value:
	 * 
	 *     assertEqual(value, field.serialize(field.convert(value)));
	 * 
	 * By default, only [`date`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) fields have a `serialize` method.
	 * Other types simply send their value unmodified.
	 * 
	 * # Custom Types
	 * 
	 * Developers may create their own application-specific data types by deriving from this
	 * class. This is typically much better than applying multiple configuration values on
	 * field instances as these often become repetitive.
	 * 
	 * To illustrate, we define a "time" field type that stores a time-of-day represented as a
	 * number of minutes since Midnight.
	 * 
	 *     Ext.define('App.field.Time', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.time',
	 *    
	 *         timeFormat: 'g:i',
	 *    
	 *         convert: function (value) {
	 *             if (value &amp;&amp; Ext.isString(value)) {
	 *                 var date = Ext.Date.parse(value, this.timeFormat);
	 *                 if (!date) {
	 *                     return null;
	 *                 }
	 *                 return (date.getHours() - 1) * 60 + date.getMinutes();
	 *             }
	 *             return value;
	 *         }
	 *     });
	 * 
	 * ## Validation
	 * 
	 * Custom field types can override the [`validate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-validate) method or
	 * provide a set of [`validators`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-validators).
	 * 
	 *     Ext.define('App.field.PhoneNumber', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.phonenumber',
	 *    
	 *         // Match U.S. phone numbers for example purposes
	 *         validators: {
	 *             type: 'format',
	 *             matcher: /\d{3}\-\d{3}\-\d{4}/
	 *         }
	 *     });
	 * 
	 * Once the class is defined, fields can be declared using the new type (based on its
	 * `alias`) like so:
	 * 
	 *     Ext.define('App.model.PhoneCall', {
	 *         fields: [
	 *             { name: 'startTime', type: 'time' },
	 *             { name: 'phoneNumber', type: 'phonenumber' }
	 *         ]
	 *     });
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
		 * @param   {object}                        members    The members to add to this class.
		 * @param   {boolean}                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.field.Field|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @param   {object}                        members
		 * @returns {Ext.data.field.Field|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                        members
		 * @returns {Ext.data.field.Field|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                        name
		 * @param   {object}                        member
		 * @returns {Ext.data.field.Field|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                        fn
		 * @param   {object}                        scope
		 * @returns {Ext.data.field.Field|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
declare namespace Ext.data.field.Integer {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.field.Integer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
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
		 * @param   {object}                                               members    The members to add to this class.
		 * @param   {boolean}                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Integer;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.field.Integer;
		addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               members
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.data.field.Integer;
		addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                               name
		 * @param   {object}                                               member
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.field.Integer;
		addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                               fn
		 * @param   {object}                                               scope
		 * @returns {Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Integer;
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
declare namespace Ext.data.field.Number {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.field.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Number;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Integer;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.field.Number;
		addStatics? (members: object): typeof Ext.data.field.Integer;
		addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.data.field.Number;
		addInheritableStatics? (members: object): typeof Ext.data.field.Integer;
		addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.field.Number;
		addMember? (name: object, member: object): typeof Ext.data.field.Integer;
		addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.Number|Ext.data.field.Integer|Ext.data.field.Field|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Number;
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Integer;
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
declare namespace Ext.data.field.String {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.field.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
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
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.String;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.field.Field;
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
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.field.String;
		addStatics? (members: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                              members
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.data.field.String;
		addInheritableStatics? (members: object): typeof Ext.data.field.Field;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                              name
		 * @param   {object}                                              member
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.field.String;
		addMember? (name: object, member: object): typeof Ext.data.field.Field;
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
		 * @param   {object}                                              fn
		 * @param   {object}                                              scope
		 * @returns {Ext.data.field.String|Ext.data.field.Field|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.field.String;
		onExtended? (fn: object, scope: object): typeof Ext.data.field.Field;
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
declare namespace Ext.data.field.Boolean {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.field.Boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Used for validating a [model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html). Defaults to true. An empty value here will cause
		 * [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).[isValid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-isValid) to evaluate to false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		allowBlank?: boolean;
		/** 
		 * Use when converting received data into a [&lt;code&gt;int&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html),
		 * [&lt;code&gt;float&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html), [&lt;code&gt;bool&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
		 * or [&lt;code&gt;string&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html) type. If the value cannot be
		 * parsed, `null` will be used if allowNull is true, otherwise a default value for that type will be used:
		 * 
		 * - for `int` and `float` - `0`.
		 * - for `string` - `""`.
		 * - for `bool` - `false`.
		 * 
		 * Note that when parsing of [&lt;code&gt;date&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) type fails, the value will
		 * be `null` regardless of this setting.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowNull?: boolean;
		/** 
		 * This config defines a simple field calculation function. A calculate method only
		 * has access to the record data and should return the value of the calculated field.
		 * When provided in this way, the `depends` config is automatically determined by
		 * parsing the `calculate` function. For example:
		 * 
		 *     fields: [{
		 *         name: 'firstName',
		 *         type: 'string'
		 *     },{
		 *         name: 'lastName',
		 *         type: 'string'
		 *     },{
		 *         name: 'fullName',
		 *         calculate: function (data) {
		 *             return data.firstName + ' ' + data.lastName;
		 *         }
		 *     }]
		 * 
		 * The above 'fullName' field is equivalent to:
		 * 
		 *     {
		 *         name: 'fullName',
		 *         convert: function (v, rec) {
		 *             return rec.get('firstName') + ' ' + rec.get('lastName');
		 *         },
		 *         depends: ['firstName', 'lastName']
		 *     }
		 * 
		 * The restrictions on form for a `calculate` method are that the accesses to field
		 * values must match the following regular expression (case insensitive):
		 * 
		 *     data.([a-z_][a-z0-9_]*)
		 *     // where 'data' is the param passed to the calculate method
		 * 
		 * The only advantage of a `calculate` method over a `convert` method is automatic
		 * determination of `depends`.
		 * 
		 * **Note:** The use of calculate and [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) are exclusive.  The
		 * calculate method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		calculate?: ExtGlobalFunction;
		/** 
		 * If specified this config overrides the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. See
		 * also [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) for simple field calculations.
		 * 
		 * **Note:** The use of [calculate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and convert are exclusive.  The calculate
		 * method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		convert?: ExtGlobalFunction;
		/** 
		 * A critical field is a field that must always be sent to the server even if it has
		 * not changed. The most common example of such a field is the "id" of a record (see
		 * [`Ext.data.Model.idProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty) but the [`Ext.data.Model.versionProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-versionProperty)
		 * is similarly a `critical` field.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		critical?: boolean;
		/** 
		 * The default value used when the creating an instance from a raw data object,
		 * and the property referenced by the [`mapping`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping)
		 * does not exist in that data object.
		 * 
		 * The value `undefined` prevents defaulting in a value.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {object}
		 */
		defaultValue?: object;
		/** 
		 * The field name or names within the [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) on which the value
		 * of this field depends, and from which a new value may be calculated. These values
		 * are the values used by the `convert` method. If you do not have a `convert` method
		 * then this config should not be specified.
		 * 
		 * Before using this config you should consider if using a `calculate` method instead
		 * of a `convert` method would be simpler.
		 * 
		 * Whenever any of the named fields are set using the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set)
		 * method, this fields will have its `convert` method called passing the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) so that the dependent value can be calculated from
		 * all fields which it needs.
		 * 
		 * For example, to display a person's full name, using two separate `firstName` and
		 * `lastName` fields, configure the name field like this:
		 * 
		 *    {
		 *        name: 'name',
		 *    
		 *        // Will be called whenever forename or surname fields are set
		 *        convert: function (v, rec) {
		 *            return rec.get('firstName') + ' ' + rec.get('lastName');
		 *        },
		 *    
		 *        depends: [ 'firstName', 'lastName' ],
		 *    
		 *        // It should not be returned to the server - it's not a database field
		 *        persist: false
		 *    }
		 * 
		 * Note that if you do not want the calculated field to be part of the field set sent
		 * back to the server when the store is synchronized, you should configure the field
		 * with `persist` set to `false`.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		depends?: string | string[];
		/** 
		 * (Optional) A path expression for use by the [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Reader.html) implementation that is creating the
		 * [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) to extract the Field value from the data object. If the path expression is the same
		 * as the field name, the mapping may be omitted. A function may be passed to do complex data extraction. The examples
		 * below are simple just to demonstrate the capability, typically, a function would not be used to extract such
		 * simple data.
		 * 
		 * The form of the mapping expression depends on the Reader being used.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html)
		 * 
		 * The mapping is a string containing the javascript expression to reference the data from an element of the data
		 * item's [rootProperty](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html#cfg-rootProperty) Array. Defaults to the field name. If a function is passed,
		 * a single argument is received which contains the raw json object:
		 * 
		 *    // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
		 *    mapping: function(data) {
		 *        return data.name;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html)
		 * 
		 * The mapping is an [Ext.DomQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Query.html) path to the data item relative to the DOM element that represents the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html#cfg-record). Defaults to the field name. If a function is passed, a single argument
		 * is received which contains the record node:
		 * 
		 *    // Server returns &lt;Root&gt;&lt;Person&gt;&lt;Name&gt;Foo&lt;/Name&gt;&lt;Age&gt;1&lt;/Age&gt;&lt;/Person&gt;&lt;Person&gt;&lt;Name&gt;Bar&lt;/Name&gt;&lt;Age&gt;2&lt;/Age&gt;&lt;/Person&gt;&lt;/Root&gt;
		 *    mapping: function(data) {
		 *        return data.firstChild.textContent;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Array.html)
		 * 
		 * The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's
		 * Array position. If a function is passed, a single argument is received which contains the child array.
		 * 
		 *    // Server returns [["Foo", 1], ["Bar", 2]]
		 *    mapping: function(data) {
		 *        return data[0];
		 *    }
		 * 
		 * </li>
		 * </ul>
		 * 
		 * If a more complex value extraction strategy is required, then configure the Field with a [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
		 * function. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to
		 * return the desired data.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|number}
		 */
		mapping?: ExtGlobalFunction | string | number;
		/** 
		 * The name by which the field is referenced within the Model. This is referenced by,
		 * for example, the `dataIndex` property in column definition objects passed to
		 * [Ext.grid.property.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.property.HeaderContainer.html).
		 * 
		 * Note: In the simplest case, if no properties other than `name` are required, a
		 * field definition may consist of just a String for the field name.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
		/** 
		 * False to exclude this field from the [Ext.data.Model.modified](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-modified) fields in a
		 * record. This will also exclude the field from being written using a
		 * [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html). This option is useful when fields are used to keep
		 * state on the client but do not need to be persisted to the server.
		 * 
		 * Defaults to `false` for `calculated` fields and `true` otherwise.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		persist?: boolean;
		/** 
		 * The [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
		 * In most databases, this relationship is represented by a "foreign key". That is, a
		 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * for an entity of this type.
		 * 
		 *     Ext.define('MyApp.models.Organization', {
		 *         extend: 'Ext.data.Model',
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization' }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If a `reference` is not nullable, set the [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank) property
		 * to false.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization', allowBlank: false }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If the name of the generated [association](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.schema.Association.html) or other aspects
		 * need to be specified, the `reference` can be an object. The following usage shows
		 * what would be generated by default given the above examples using the string form.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 type: 'Organization',
		 *                 association: 'UsersByOrganization',
		 *                 role: 'organization',
		 *                 inverse: 'users'
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * Finally, a `reference` can also describe ownership between the entities. By default,
		 * no ownership relationship is assumed. If, however, the User entities are owned by
		 * their Organization, we could say this:
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 parent: 'Organization' // Organization is the parent of User
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		reference?: string | object;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @configuration
		 * @optional
		 */
		serialize?: ExtGlobalFunction;
		/** 
		 * A function which converts a Field's value to a comparable value in order to ensure
		 * correct sort ordering.
		 * 
		 * Predefined functions are provided in [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html). A custom sort example:
		 * 
		 *    // current sort     after sort we want
		 *    // +-+------+          +-+------+
		 *    // |1|First |          |1|First |
		 *    // |2|Last  |          |3|Second|
		 *    // |3|Second|          |2|Last  |
		 *    // +-+------+          +-+------+
		 *    
		 *    sortType: function(value) {
		 *       switch (value.toLowerCase()) // native toLowerCase():
		 *       {
		 *          case 'first': return 1;
		 *          case 'second': return 2;
		 *          default: return 3;
		 *       }
		 *    }
		 * 
		 * May also be set to a String value, corresponding to one of the named sort types in
		 * [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html).
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string}
		 */
		sortType?: ExtGlobalFunction | string;
		/** 
		 * `true` if the value of this field is unique amongst all instances. When used with a
		 * `reference` this describes a "one-to-one" relationship. It is almost always the case
		 * that a `unique` field cannot also be [nullable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		unique?: boolean;
		/** 
		 * An array of [validators](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.validator.Validator.html) for this field. These
		 * `validators` will only be passed a field value to validate.
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		validators?: object[];
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @param   {object}                         config
		 * @returns {Ext.data.field.Boolean.Statics}        this
		 */
		initConfig? (config: object): Ext.data.field.Boolean.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Boolean.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Boolean.Statics;
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
		 * @returns {Ext.data.field.Boolean.Statics}  
		 */
		statics? (): Ext.data.field.Boolean.Statics;
	}
}
declare namespace Ext.data.field.Date {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.field.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * This class provides Date specific processing for fields.
	 * 
	 * In previous releases this functionality was integral to the `Field` base class.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Used for validating a [model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html). Defaults to true. An empty value here will cause
		 * [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).[isValid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-isValid) to evaluate to false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		allowBlank?: boolean;
		/** 
		 * Use when converting received data into a [&lt;code&gt;int&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html),
		 * [&lt;code&gt;float&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html), [&lt;code&gt;bool&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
		 * or [&lt;code&gt;string&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html) type. If the value cannot be
		 * parsed, `null` will be used if allowNull is true, otherwise a default value for that type will be used:
		 * 
		 * - for `int` and `float` - `0`.
		 * - for `string` - `""`.
		 * - for `bool` - `false`.
		 * 
		 * Note that when parsing of [&lt;code&gt;date&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) type fails, the value will
		 * be `null` regardless of this setting.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowNull?: boolean;
		/** 
		 * This config defines a simple field calculation function. A calculate method only
		 * has access to the record data and should return the value of the calculated field.
		 * When provided in this way, the `depends` config is automatically determined by
		 * parsing the `calculate` function. For example:
		 * 
		 *     fields: [{
		 *         name: 'firstName',
		 *         type: 'string'
		 *     },{
		 *         name: 'lastName',
		 *         type: 'string'
		 *     },{
		 *         name: 'fullName',
		 *         calculate: function (data) {
		 *             return data.firstName + ' ' + data.lastName;
		 *         }
		 *     }]
		 * 
		 * The above 'fullName' field is equivalent to:
		 * 
		 *     {
		 *         name: 'fullName',
		 *         convert: function (v, rec) {
		 *             return rec.get('firstName') + ' ' + rec.get('lastName');
		 *         },
		 *         depends: ['firstName', 'lastName']
		 *     }
		 * 
		 * The restrictions on form for a `calculate` method are that the accesses to field
		 * values must match the following regular expression (case insensitive):
		 * 
		 *     data.([a-z_][a-z0-9_]*)
		 *     // where 'data' is the param passed to the calculate method
		 * 
		 * The only advantage of a `calculate` method over a `convert` method is automatic
		 * determination of `depends`.
		 * 
		 * **Note:** The use of calculate and [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) are exclusive.  The
		 * calculate method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		calculate?: ExtGlobalFunction;
		/** 
		 * If specified this config overrides the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. See
		 * also [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) for simple field calculations.
		 * 
		 * **Note:** The use of [calculate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and convert are exclusive.  The calculate
		 * method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		convert?: ExtGlobalFunction;
		/** 
		 * A critical field is a field that must always be sent to the server even if it has
		 * not changed. The most common example of such a field is the "id" of a record (see
		 * [`Ext.data.Model.idProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty) but the [`Ext.data.Model.versionProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-versionProperty)
		 * is similarly a `critical` field.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		critical?: boolean;
		/** 
		 * Serves as a default for the [dateReadFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateReadFormat) and [dateWriteFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateWriteFormat) config options. This
		 * will be used in place of those other configurations if not specified.
		 * 
		 * A format string for the [Ext.Date.parse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Date.html#method-parse) function, or "timestamp" if the value provided by
		 * the Reader is a UNIX timestamp, or "time" if the value provided by the Reader is a javascript millisecond
		 * timestamp. See [Ext.Date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Date.html).
		 * 
		 * It is quite important to note that while this config is optional, it will default to using the base
		 * JavaScript Date object's `parse` function if not specified, rather than [Ext.Date.parse](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Date.html#method-parse).
		 * This can cause unexpected issues, especially when converting between timezones, or when converting dates that
		 * do not have a timezone specified. The behavior of the native [`Date.parse`](https://docs.sencha.com/extjs/6.0.1/classic/Date.html#static-method-parse) is implementation-specific, and
		 * depending on the value of the date string, it might return the UTC date or the local date. **For this reason
		 * it is strongly recommended that you always specify an explicit date format when parsing dates.**
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dateFormat?: string;
		/** 
		 * Used when converting received data into a Date when the [type](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#property-type) is specified as `"date"`.
		 * This configuration takes precedence over [dateFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateFormat).
		 * See [dateFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateFormat) for more information.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dateReadFormat?: string;
		/** 
		 * Provides a custom format when serializing dates with a [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html).
		 * If this is not specified, the [dateFormat](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html#cfg-dateFormat) will be used. If no `dateFormat`
		 * is specified, 'timestamp' format is used.
		 * 
		 * See the [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html) docs for more information on writing dates.
		 * 
		 * **Note** It is not possible to use the standard date serialization pathway or [native browser JSON production](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-USE_NATIVE_JSON)
		 * to use a [JsonWriter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Json.html) to send Microsoft formated
		 * "JSON" dates.
		 * 
		 * To use a [JsonWriter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Json.html) to write dates in a JSON packet in
		 * the form `"\/Date(1357372800000)\/"` configure the field like this:
		 * 
		 *     {
		 *         type: 'date',
		 *         dateFormat: 'MS',     // To parse incoming dates from server correctly
		 *         serialize: null       // Avoid formatting or conversion by the Writer
		 *     }
		 * 
		 * Then override the [`Ext.JSON`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.JSON.html) date serialize function:
		 * 
		 *     Ext.JSON.encodeDate = function (d) {
		 *         return '"' + Ext.Date.format(d, 'MS') + '"';
		 *     };
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dateWriteFormat?: string;
		/** 
		 * The default value used when the creating an instance from a raw data object,
		 * and the property referenced by the [`mapping`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping)
		 * does not exist in that data object.
		 * 
		 * The value `undefined` prevents defaulting in a value.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {object}
		 */
		defaultValue?: object;
		/** 
		 * The field name or names within the [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) on which the value
		 * of this field depends, and from which a new value may be calculated. These values
		 * are the values used by the `convert` method. If you do not have a `convert` method
		 * then this config should not be specified.
		 * 
		 * Before using this config you should consider if using a `calculate` method instead
		 * of a `convert` method would be simpler.
		 * 
		 * Whenever any of the named fields are set using the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set)
		 * method, this fields will have its `convert` method called passing the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) so that the dependent value can be calculated from
		 * all fields which it needs.
		 * 
		 * For example, to display a person's full name, using two separate `firstName` and
		 * `lastName` fields, configure the name field like this:
		 * 
		 *    {
		 *        name: 'name',
		 *    
		 *        // Will be called whenever forename or surname fields are set
		 *        convert: function (v, rec) {
		 *            return rec.get('firstName') + ' ' + rec.get('lastName');
		 *        },
		 *    
		 *        depends: [ 'firstName', 'lastName' ],
		 *    
		 *        // It should not be returned to the server - it's not a database field
		 *        persist: false
		 *    }
		 * 
		 * Note that if you do not want the calculated field to be part of the field set sent
		 * back to the server when the store is synchronized, you should configure the field
		 * with `persist` set to `false`.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		depends?: string | string[];
		/** 
		 * (Optional) A path expression for use by the [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Reader.html) implementation that is creating the
		 * [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) to extract the Field value from the data object. If the path expression is the same
		 * as the field name, the mapping may be omitted. A function may be passed to do complex data extraction. The examples
		 * below are simple just to demonstrate the capability, typically, a function would not be used to extract such
		 * simple data.
		 * 
		 * The form of the mapping expression depends on the Reader being used.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html)
		 * 
		 * The mapping is a string containing the javascript expression to reference the data from an element of the data
		 * item's [rootProperty](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html#cfg-rootProperty) Array. Defaults to the field name. If a function is passed,
		 * a single argument is received which contains the raw json object:
		 * 
		 *    // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
		 *    mapping: function(data) {
		 *        return data.name;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html)
		 * 
		 * The mapping is an [Ext.DomQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Query.html) path to the data item relative to the DOM element that represents the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html#cfg-record). Defaults to the field name. If a function is passed, a single argument
		 * is received which contains the record node:
		 * 
		 *    // Server returns &lt;Root&gt;&lt;Person&gt;&lt;Name&gt;Foo&lt;/Name&gt;&lt;Age&gt;1&lt;/Age&gt;&lt;/Person&gt;&lt;Person&gt;&lt;Name&gt;Bar&lt;/Name&gt;&lt;Age&gt;2&lt;/Age&gt;&lt;/Person&gt;&lt;/Root&gt;
		 *    mapping: function(data) {
		 *        return data.firstChild.textContent;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Array.html)
		 * 
		 * The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's
		 * Array position. If a function is passed, a single argument is received which contains the child array.
		 * 
		 *    // Server returns [["Foo", 1], ["Bar", 2]]
		 *    mapping: function(data) {
		 *        return data[0];
		 *    }
		 * 
		 * </li>
		 * </ul>
		 * 
		 * If a more complex value extraction strategy is required, then configure the Field with a [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
		 * function. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to
		 * return the desired data.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|number}
		 */
		mapping?: ExtGlobalFunction | string | number;
		/** 
		 * The name by which the field is referenced within the Model. This is referenced by,
		 * for example, the `dataIndex` property in column definition objects passed to
		 * [Ext.grid.property.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.property.HeaderContainer.html).
		 * 
		 * Note: In the simplest case, if no properties other than `name` are required, a
		 * field definition may consist of just a String for the field name.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
		/** 
		 * False to exclude this field from the [Ext.data.Model.modified](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-modified) fields in a
		 * record. This will also exclude the field from being written using a
		 * [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html). This option is useful when fields are used to keep
		 * state on the client but do not need to be persisted to the server.
		 * 
		 * Defaults to `false` for `calculated` fields and `true` otherwise.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		persist?: boolean;
		/** 
		 * The [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
		 * In most databases, this relationship is represented by a "foreign key". That is, a
		 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * for an entity of this type.
		 * 
		 *     Ext.define('MyApp.models.Organization', {
		 *         extend: 'Ext.data.Model',
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization' }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If a `reference` is not nullable, set the [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank) property
		 * to false.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization', allowBlank: false }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If the name of the generated [association](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.schema.Association.html) or other aspects
		 * need to be specified, the `reference` can be an object. The following usage shows
		 * what would be generated by default given the above examples using the string form.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 type: 'Organization',
		 *                 association: 'UsersByOrganization',
		 *                 role: 'organization',
		 *                 inverse: 'users'
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * Finally, a `reference` can also describe ownership between the entities. By default,
		 * no ownership relationship is assumed. If, however, the User entities are owned by
		 * their Organization, we could say this:
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 parent: 'Organization' // Organization is the parent of User
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		reference?: string | object;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @configuration
		 * @optional
		 */
		serialize?: ExtGlobalFunction;
		/** 
		 * A function which converts a Field's value to a comparable value in order to ensure
		 * correct sort ordering.
		 * 
		 * Predefined functions are provided in [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html). A custom sort example:
		 * 
		 *    // current sort     after sort we want
		 *    // +-+------+          +-+------+
		 *    // |1|First |          |1|First |
		 *    // |2|Last  |          |3|Second|
		 *    // |3|Second|          |2|Last  |
		 *    // +-+------+          +-+------+
		 *    
		 *    sortType: function(value) {
		 *       switch (value.toLowerCase()) // native toLowerCase():
		 *       {
		 *          case 'first': return 1;
		 *          case 'second': return 2;
		 *          default: return 3;
		 *       }
		 *    }
		 * 
		 * May also be set to a String value, corresponding to one of the named sort types in
		 * [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html).
		 * @configuration
		 * @optional
		 * @default 'asDate'
		 * @type {ExtGlobalFunction|string}
		 */
		sortType?: ExtGlobalFunction | string;
		/** 
		 * `true` if the value of this field is unique amongst all instances. When used with a
		 * `reference` this describes a "one-to-one" relationship. It is almost always the case
		 * that a `unique` field cannot also be [nullable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		unique?: boolean;
		/** 
		 * An array of [validators](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.validator.Validator.html) for this field. These
		 * `validators` will only be passed a field value to validate.
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		validators?: object[];
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @param   {object}                      config
		 * @returns {Ext.data.field.Date.Statics}        this
		 */
		initConfig? (config: object): Ext.data.field.Date.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                      [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Date.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Date.Statics;
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
		 * @returns {Ext.data.field.Date.Statics}  
		 */
		statics? (): Ext.data.field.Date.Statics;
	}
}
declare namespace Ext.data.field.Field {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.field.Field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html)
	 * Fields are used to define the members of a Model. They aren't instantiated directly;
	 * instead, when we create a class that extends [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html), it automatically
	 * creates Field instances for each field configured in a [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).
	 * For example, we might set up a model like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'name', 'email',
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * Four fields will have been created for the User Model - name, email, age and gender.
	 * Note that we specified a couple of different formats here; if we only pass in the string
	 * name of the field (as with name and email), the field is set up with the 'auto' type.
	 * It's as if we'd done this instead:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            { name: 'name', type: 'auto' },
	 *            { name: 'email', type: 'auto' },
	 *            { name: 'age', type: 'int' },
	 *            { name: 'gender', type: 'string', defaultValue: 'Unknown' }
	 *        ]
	 *    });
	 * 
	 * # Field Types
	 * 
	 * Fields come in various types. When declaring a field, the `type` property is used to
	 * specify the type of `Field` derived class used to manage values.
	 * 
	 * The predefined set of types are:
	 * 
	 * - [auto](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html) (Default, implies no conversion)
	 * - [string](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
	 * - [int](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
	 * - [number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
	 * - [boolean](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
	 * - [date](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html)
	 * 
	 * # Conversion
	 * 
	 * When reading fields it is often necessary to convert the values received before using
	 * them or storing them in records. To handle these cases there is the
	 * [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This method is passed the received value (as
	 * well as the current record instance, but see below) and it returns the value to carry
	 * forward.
	 * 
	 * For `auto` fields there is no [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. This is for
	 * efficiency. For other field types, there are often `convert` methods. You can provide
	 * a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config when the field is defined like this:
	 * 
	 *     {
	 *         name: 'timestamp',
	 *    
	 *         convert: function (value) {
	 *             return new Date(value);
	 *         }
	 *     }
	 * 
	 * While this can be convenient, see below for details on defining Custom Types as that is
	 * often a better practice and avoids repeating these functions.
	 * 
	 * Note that when a `defaultValue` is specified, it will also be passed through to
	 * `convert` (either to the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method or to the
	 * [`convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert) config)`.
	 * 
	 * ## Calculated Values
	 * 
	 * In some cases fields are the result of a calculation from other fields. Historically
	 * this was a second role for [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) but that has some short
	 * comings. The simpler solution is the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * Values produced by [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert)
	 * are stored in the record as with any other field. In fact, if we define a calculated
	 * "firstName" field and log out all of the data, we'll see this:
	 * 
	 *    var ed = Ext.create('User', { name: 'Ed Spencer' });
	 *    
	 *    console.log(ed.data);
	 *    
	 *    //outputs this:
	 *    {
	 *        age: 0,
	 *        email: "",
	 *        firstName: "Ed",  // calculated field
	 *        gender: "Unknown",
	 *        name: "Ed Spencer"
	 *    }
	 * 
	 * ### Using `calculate`
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         calculate: function (data) {
	 *             return data.name.split(' ')[0];
	 *         }
	 *     }
	 * 
	 * Using [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) is the simplest and safest way to define a
	 * calculated field. The most important part of this is that, internally, the code of the
	 * supplied function is parsed to extract its dependencies. In this case, the "name" field
	 * is the only dependency. This means that "firstName" will only need to be recalculated
	 * when "name" is modified.
	 * 
	 * ### Using `convert`
	 * 
	 * Following is the equivalent technique using [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
	 * 
	 *     {
	 *         name: 'firstName',
	 *    
	 *         convert: function (value, record) {
	 *             return record.get('name').split(' ')[0];
	 *         },
	 *    
	 *         depends: [ 'name' ]
	 *     }
	 * 
	 * When a [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) function accepts a 2nd argument (a reference to
	 * the record), it is considered a calculated field. If a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends)
	 * config is not provided then this field's dependencies are unknown. In this case, the
	 * [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) are provided as would be automatically determined with
	 * the [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) config.
	 * 
	 * ### Updating
	 * 
	 * Fields modified with the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set) method will have their stored
	 * value set using the convert / calculate method when present.
	 * 
	 * For example:
	 * 
	 *    Ext.define('MyApp.model.Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'salary',
	 *            convert: function (val) {
	 *                var startingBonus = val * .1;
	 *                return val + startingBonus;
	 *            }
	 *        }],
	 *        convertOnSet: false
	 *    });
	 *    
	 *    var tina = Ext.create('MyApp.model.Employee', {
	 *        salary: 50000
	 *    });
	 *    
	 *    console.log(tina.get('salary')); // logs 55000
	 *    
	 *    tina.set('salary', 60000);
	 *    console.log(tina.get('salary')); // logs 60000
	 * 
	 * This default behavior can be disabled by setting the Model's
	 * [`Ext.data.Model.convertOnSet`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) config to `false`.
	 * 
	 * **Note:** convertOnSet `false` only prevents the convert / calculate call when the
	 * set `fieldName` param matches the field's [`name`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-name).  See
	 * [convertOnSet](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-convertOnSet) for additional details.
	 * 
	 * ### Dependencies
	 * 
	 * When a field's [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method processes values from the record
	 * (vs. just the field's value), it is best to also provide a `depends` config as shown
	 * above. Fields that provide a [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) method must follow the
	 * proper form for using fields so that dependencies can be extracted.
	 * 
	 * Calculated fields are processed after other fields based on their dependencies. Fields
	 * with [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) methods that use the provided record that do _not_
	 * specify a [`depends`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-depends) config are processed as a group after all other
	 * fields since such converters can rely on anything in the record. The order of processing
	 * these fields with respect to each other is unspecified and should not be relied upon.
	 * 
	 * # Serialization
	 * 
	 * To handle the inverse scenario of `convert` there is the `serialize` method. This
	 * method is called to produce the value to send to a server based on the internal value
	 * as would be returned from `convert`. In most cases, these methods should "round trip"
	 * a value:
	 * 
	 *     assertEqual(value, field.serialize(field.convert(value)));
	 * 
	 * By default, only [`date`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) fields have a `serialize` method.
	 * Other types simply send their value unmodified.
	 * 
	 * # Custom Types
	 * 
	 * Developers may create their own application-specific data types by deriving from this
	 * class. This is typically much better than applying multiple configuration values on
	 * field instances as these often become repetitive.
	 * 
	 * To illustrate, we define a "time" field type that stores a time-of-day represented as a
	 * number of minutes since Midnight.
	 * 
	 *     Ext.define('App.field.Time', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.time',
	 *    
	 *         timeFormat: 'g:i',
	 *    
	 *         convert: function (value) {
	 *             if (value &amp;&amp; Ext.isString(value)) {
	 *                 var date = Ext.Date.parse(value, this.timeFormat);
	 *                 if (!date) {
	 *                     return null;
	 *                 }
	 *                 return (date.getHours() - 1) * 60 + date.getMinutes();
	 *             }
	 *             return value;
	 *         }
	 *     });
	 * 
	 * ## Validation
	 * 
	 * Custom field types can override the [`validate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-validate) method or
	 * provide a set of [`validators`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-validators).
	 * 
	 *     Ext.define('App.field.PhoneNumber', {
	 *         extend: 'Ext.data.field.Field',
	 *    
	 *         alias: 'data.field.phonenumber',
	 *    
	 *         // Match U.S. phone numbers for example purposes
	 *         validators: {
	 *             type: 'format',
	 *             matcher: /\d{3}\-\d{3}\-\d{4}/
	 *         }
	 *     });
	 * 
	 * Once the class is defined, fields can be declared using the new type (based on its
	 * `alias`) like so:
	 * 
	 *     Ext.define('App.model.PhoneCall', {
	 *         fields: [
	 *             { name: 'startTime', type: 'time' },
	 *             { name: 'phoneNumber', type: 'phonenumber' }
	 *         ]
	 *     });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Used for validating a [model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html). Defaults to true. An empty value here will cause
		 * [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).[isValid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-isValid) to evaluate to false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		allowBlank?: boolean;
		/** 
		 * Use when converting received data into a [&lt;code&gt;int&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html),
		 * [&lt;code&gt;float&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html), [&lt;code&gt;bool&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
		 * or [&lt;code&gt;string&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html) type. If the value cannot be
		 * parsed, `null` will be used if allowNull is true, otherwise a default value for that type will be used:
		 * 
		 * - for `int` and `float` - `0`.
		 * - for `string` - `""`.
		 * - for `bool` - `false`.
		 * 
		 * Note that when parsing of [&lt;code&gt;date&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) type fails, the value will
		 * be `null` regardless of this setting.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowNull?: boolean;
		/** 
		 * This config defines a simple field calculation function. A calculate method only
		 * has access to the record data and should return the value of the calculated field.
		 * When provided in this way, the `depends` config is automatically determined by
		 * parsing the `calculate` function. For example:
		 * 
		 *     fields: [{
		 *         name: 'firstName',
		 *         type: 'string'
		 *     },{
		 *         name: 'lastName',
		 *         type: 'string'
		 *     },{
		 *         name: 'fullName',
		 *         calculate: function (data) {
		 *             return data.firstName + ' ' + data.lastName;
		 *         }
		 *     }]
		 * 
		 * The above 'fullName' field is equivalent to:
		 * 
		 *     {
		 *         name: 'fullName',
		 *         convert: function (v, rec) {
		 *             return rec.get('firstName') + ' ' + rec.get('lastName');
		 *         },
		 *         depends: ['firstName', 'lastName']
		 *     }
		 * 
		 * The restrictions on form for a `calculate` method are that the accesses to field
		 * values must match the following regular expression (case insensitive):
		 * 
		 *     data.([a-z_][a-z0-9_]*)
		 *     // where 'data' is the param passed to the calculate method
		 * 
		 * The only advantage of a `calculate` method over a `convert` method is automatic
		 * determination of `depends`.
		 * 
		 * **Note:** The use of calculate and [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) are exclusive.  The
		 * calculate method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		calculate?: ExtGlobalFunction;
		/** 
		 * If specified this config overrides the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. See
		 * also [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) for simple field calculations.
		 * 
		 * **Note:** The use of [calculate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and convert are exclusive.  The calculate
		 * method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		convert?: ExtGlobalFunction;
		/** 
		 * A critical field is a field that must always be sent to the server even if it has
		 * not changed. The most common example of such a field is the "id" of a record (see
		 * [`Ext.data.Model.idProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty) but the [`Ext.data.Model.versionProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-versionProperty)
		 * is similarly a `critical` field.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		critical?: boolean;
		/** 
		 * The default value used when the creating an instance from a raw data object,
		 * and the property referenced by the [`mapping`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping)
		 * does not exist in that data object.
		 * 
		 * The value `undefined` prevents defaulting in a value.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {object}
		 */
		defaultValue?: object;
		/** 
		 * The field name or names within the [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) on which the value
		 * of this field depends, and from which a new value may be calculated. These values
		 * are the values used by the `convert` method. If you do not have a `convert` method
		 * then this config should not be specified.
		 * 
		 * Before using this config you should consider if using a `calculate` method instead
		 * of a `convert` method would be simpler.
		 * 
		 * Whenever any of the named fields are set using the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set)
		 * method, this fields will have its `convert` method called passing the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) so that the dependent value can be calculated from
		 * all fields which it needs.
		 * 
		 * For example, to display a person's full name, using two separate `firstName` and
		 * `lastName` fields, configure the name field like this:
		 * 
		 *    {
		 *        name: 'name',
		 *    
		 *        // Will be called whenever forename or surname fields are set
		 *        convert: function (v, rec) {
		 *            return rec.get('firstName') + ' ' + rec.get('lastName');
		 *        },
		 *    
		 *        depends: [ 'firstName', 'lastName' ],
		 *    
		 *        // It should not be returned to the server - it's not a database field
		 *        persist: false
		 *    }
		 * 
		 * Note that if you do not want the calculated field to be part of the field set sent
		 * back to the server when the store is synchronized, you should configure the field
		 * with `persist` set to `false`.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		depends?: string | string[];
		/** 
		 * (Optional) A path expression for use by the [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Reader.html) implementation that is creating the
		 * [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) to extract the Field value from the data object. If the path expression is the same
		 * as the field name, the mapping may be omitted. A function may be passed to do complex data extraction. The examples
		 * below are simple just to demonstrate the capability, typically, a function would not be used to extract such
		 * simple data.
		 * 
		 * The form of the mapping expression depends on the Reader being used.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html)
		 * 
		 * The mapping is a string containing the javascript expression to reference the data from an element of the data
		 * item's [rootProperty](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html#cfg-rootProperty) Array. Defaults to the field name. If a function is passed,
		 * a single argument is received which contains the raw json object:
		 * 
		 *    // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
		 *    mapping: function(data) {
		 *        return data.name;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html)
		 * 
		 * The mapping is an [Ext.DomQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Query.html) path to the data item relative to the DOM element that represents the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html#cfg-record). Defaults to the field name. If a function is passed, a single argument
		 * is received which contains the record node:
		 * 
		 *    // Server returns &lt;Root&gt;&lt;Person&gt;&lt;Name&gt;Foo&lt;/Name&gt;&lt;Age&gt;1&lt;/Age&gt;&lt;/Person&gt;&lt;Person&gt;&lt;Name&gt;Bar&lt;/Name&gt;&lt;Age&gt;2&lt;/Age&gt;&lt;/Person&gt;&lt;/Root&gt;
		 *    mapping: function(data) {
		 *        return data.firstChild.textContent;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Array.html)
		 * 
		 * The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's
		 * Array position. If a function is passed, a single argument is received which contains the child array.
		 * 
		 *    // Server returns [["Foo", 1], ["Bar", 2]]
		 *    mapping: function(data) {
		 *        return data[0];
		 *    }
		 * 
		 * </li>
		 * </ul>
		 * 
		 * If a more complex value extraction strategy is required, then configure the Field with a [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
		 * function. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to
		 * return the desired data.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|number}
		 */
		mapping?: ExtGlobalFunction | string | number;
		/** 
		 * The name by which the field is referenced within the Model. This is referenced by,
		 * for example, the `dataIndex` property in column definition objects passed to
		 * [Ext.grid.property.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.property.HeaderContainer.html).
		 * 
		 * Note: In the simplest case, if no properties other than `name` are required, a
		 * field definition may consist of just a String for the field name.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
		/** 
		 * False to exclude this field from the [Ext.data.Model.modified](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-modified) fields in a
		 * record. This will also exclude the field from being written using a
		 * [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html). This option is useful when fields are used to keep
		 * state on the client but do not need to be persisted to the server.
		 * 
		 * Defaults to `false` for `calculated` fields and `true` otherwise.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		persist?: boolean;
		/** 
		 * The [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
		 * In most databases, this relationship is represented by a "foreign key". That is, a
		 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * for an entity of this type.
		 * 
		 *     Ext.define('MyApp.models.Organization', {
		 *         extend: 'Ext.data.Model',
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization' }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If a `reference` is not nullable, set the [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank) property
		 * to false.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization', allowBlank: false }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If the name of the generated [association](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.schema.Association.html) or other aspects
		 * need to be specified, the `reference` can be an object. The following usage shows
		 * what would be generated by default given the above examples using the string form.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 type: 'Organization',
		 *                 association: 'UsersByOrganization',
		 *                 role: 'organization',
		 *                 inverse: 'users'
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * Finally, a `reference` can also describe ownership between the entities. By default,
		 * no ownership relationship is assumed. If, however, the User entities are owned by
		 * their Organization, we could say this:
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 parent: 'Organization' // Organization is the parent of User
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		reference?: string | object;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @configuration
		 * @optional
		 */
		serialize?: ExtGlobalFunction;
		/** 
		 * A function which converts a Field's value to a comparable value in order to ensure
		 * correct sort ordering.
		 * 
		 * Predefined functions are provided in [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html). A custom sort example:
		 * 
		 *    // current sort     after sort we want
		 *    // +-+------+          +-+------+
		 *    // |1|First |          |1|First |
		 *    // |2|Last  |          |3|Second|
		 *    // |3|Second|          |2|Last  |
		 *    // +-+------+          +-+------+
		 *    
		 *    sortType: function(value) {
		 *       switch (value.toLowerCase()) // native toLowerCase():
		 *       {
		 *          case 'first': return 1;
		 *          case 'second': return 2;
		 *          default: return 3;
		 *       }
		 *    }
		 * 
		 * May also be set to a String value, corresponding to one of the named sort types in
		 * [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html).
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string}
		 */
		sortType?: ExtGlobalFunction | string;
		/** 
		 * `true` if the value of this field is unique amongst all instances. When used with a
		 * `reference` this describes a "one-to-one" relationship. It is almost always the case
		 * that a `unique` field cannot also be [nullable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		unique?: boolean;
		/** 
		 * An array of [validators](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.validator.Validator.html) for this field. These
		 * `validators` will only be passed a field value to validate.
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		validators?: object[];
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @param   {object}                       config
		 * @returns {Ext.data.field.Field.Statics}        this
		 */
		initConfig? (config: object): Ext.data.field.Field.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Field.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Field.Statics;
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
		 * @returns {Ext.data.field.Field.Statics}  
		 */
		statics? (): Ext.data.field.Field.Statics;
	}
}
declare namespace Ext.data.field.Integer {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.field.Integer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Used for validating a [model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html). Defaults to true. An empty value here will cause
		 * [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).[isValid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-isValid) to evaluate to false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		allowBlank?: boolean;
		/** 
		 * Use when converting received data into a [&lt;code&gt;int&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html),
		 * [&lt;code&gt;float&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html), [&lt;code&gt;bool&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
		 * or [&lt;code&gt;string&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html) type. If the value cannot be
		 * parsed, `null` will be used if allowNull is true, otherwise a default value for that type will be used:
		 * 
		 * - for `int` and `float` - `0`.
		 * - for `string` - `""`.
		 * - for `bool` - `false`.
		 * 
		 * Note that when parsing of [&lt;code&gt;date&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) type fails, the value will
		 * be `null` regardless of this setting.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowNull?: boolean;
		/** 
		 * This config defines a simple field calculation function. A calculate method only
		 * has access to the record data and should return the value of the calculated field.
		 * When provided in this way, the `depends` config is automatically determined by
		 * parsing the `calculate` function. For example:
		 * 
		 *     fields: [{
		 *         name: 'firstName',
		 *         type: 'string'
		 *     },{
		 *         name: 'lastName',
		 *         type: 'string'
		 *     },{
		 *         name: 'fullName',
		 *         calculate: function (data) {
		 *             return data.firstName + ' ' + data.lastName;
		 *         }
		 *     }]
		 * 
		 * The above 'fullName' field is equivalent to:
		 * 
		 *     {
		 *         name: 'fullName',
		 *         convert: function (v, rec) {
		 *             return rec.get('firstName') + ' ' + rec.get('lastName');
		 *         },
		 *         depends: ['firstName', 'lastName']
		 *     }
		 * 
		 * The restrictions on form for a `calculate` method are that the accesses to field
		 * values must match the following regular expression (case insensitive):
		 * 
		 *     data.([a-z_][a-z0-9_]*)
		 *     // where 'data' is the param passed to the calculate method
		 * 
		 * The only advantage of a `calculate` method over a `convert` method is automatic
		 * determination of `depends`.
		 * 
		 * **Note:** The use of calculate and [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) are exclusive.  The
		 * calculate method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		calculate?: ExtGlobalFunction;
		/** 
		 * If specified this config overrides the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. See
		 * also [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) for simple field calculations.
		 * 
		 * **Note:** The use of [calculate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and convert are exclusive.  The calculate
		 * method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		convert?: ExtGlobalFunction;
		/** 
		 * A critical field is a field that must always be sent to the server even if it has
		 * not changed. The most common example of such a field is the "id" of a record (see
		 * [`Ext.data.Model.idProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty) but the [`Ext.data.Model.versionProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-versionProperty)
		 * is similarly a `critical` field.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		critical?: boolean;
		/** 
		 * The default value used when the creating an instance from a raw data object,
		 * and the property referenced by the [`mapping`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping)
		 * does not exist in that data object.
		 * 
		 * The value `undefined` prevents defaulting in a value.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {object}
		 */
		defaultValue?: object;
		/** 
		 * The field name or names within the [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) on which the value
		 * of this field depends, and from which a new value may be calculated. These values
		 * are the values used by the `convert` method. If you do not have a `convert` method
		 * then this config should not be specified.
		 * 
		 * Before using this config you should consider if using a `calculate` method instead
		 * of a `convert` method would be simpler.
		 * 
		 * Whenever any of the named fields are set using the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set)
		 * method, this fields will have its `convert` method called passing the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) so that the dependent value can be calculated from
		 * all fields which it needs.
		 * 
		 * For example, to display a person's full name, using two separate `firstName` and
		 * `lastName` fields, configure the name field like this:
		 * 
		 *    {
		 *        name: 'name',
		 *    
		 *        // Will be called whenever forename or surname fields are set
		 *        convert: function (v, rec) {
		 *            return rec.get('firstName') + ' ' + rec.get('lastName');
		 *        },
		 *    
		 *        depends: [ 'firstName', 'lastName' ],
		 *    
		 *        // It should not be returned to the server - it's not a database field
		 *        persist: false
		 *    }
		 * 
		 * Note that if you do not want the calculated field to be part of the field set sent
		 * back to the server when the store is synchronized, you should configure the field
		 * with `persist` set to `false`.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		depends?: string | string[];
		/** 
		 * (Optional) A path expression for use by the [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Reader.html) implementation that is creating the
		 * [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) to extract the Field value from the data object. If the path expression is the same
		 * as the field name, the mapping may be omitted. A function may be passed to do complex data extraction. The examples
		 * below are simple just to demonstrate the capability, typically, a function would not be used to extract such
		 * simple data.
		 * 
		 * The form of the mapping expression depends on the Reader being used.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html)
		 * 
		 * The mapping is a string containing the javascript expression to reference the data from an element of the data
		 * item's [rootProperty](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html#cfg-rootProperty) Array. Defaults to the field name. If a function is passed,
		 * a single argument is received which contains the raw json object:
		 * 
		 *    // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
		 *    mapping: function(data) {
		 *        return data.name;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html)
		 * 
		 * The mapping is an [Ext.DomQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Query.html) path to the data item relative to the DOM element that represents the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html#cfg-record). Defaults to the field name. If a function is passed, a single argument
		 * is received which contains the record node:
		 * 
		 *    // Server returns &lt;Root&gt;&lt;Person&gt;&lt;Name&gt;Foo&lt;/Name&gt;&lt;Age&gt;1&lt;/Age&gt;&lt;/Person&gt;&lt;Person&gt;&lt;Name&gt;Bar&lt;/Name&gt;&lt;Age&gt;2&lt;/Age&gt;&lt;/Person&gt;&lt;/Root&gt;
		 *    mapping: function(data) {
		 *        return data.firstChild.textContent;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Array.html)
		 * 
		 * The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's
		 * Array position. If a function is passed, a single argument is received which contains the child array.
		 * 
		 *    // Server returns [["Foo", 1], ["Bar", 2]]
		 *    mapping: function(data) {
		 *        return data[0];
		 *    }
		 * 
		 * </li>
		 * </ul>
		 * 
		 * If a more complex value extraction strategy is required, then configure the Field with a [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
		 * function. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to
		 * return the desired data.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|number}
		 */
		mapping?: ExtGlobalFunction | string | number;
		/** 
		 * The name by which the field is referenced within the Model. This is referenced by,
		 * for example, the `dataIndex` property in column definition objects passed to
		 * [Ext.grid.property.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.property.HeaderContainer.html).
		 * 
		 * Note: In the simplest case, if no properties other than `name` are required, a
		 * field definition may consist of just a String for the field name.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
		/** 
		 * False to exclude this field from the [Ext.data.Model.modified](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-modified) fields in a
		 * record. This will also exclude the field from being written using a
		 * [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html). This option is useful when fields are used to keep
		 * state on the client but do not need to be persisted to the server.
		 * 
		 * Defaults to `false` for `calculated` fields and `true` otherwise.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		persist?: boolean;
		/** 
		 * The [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
		 * In most databases, this relationship is represented by a "foreign key". That is, a
		 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * for an entity of this type.
		 * 
		 *     Ext.define('MyApp.models.Organization', {
		 *         extend: 'Ext.data.Model',
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization' }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If a `reference` is not nullable, set the [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank) property
		 * to false.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization', allowBlank: false }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If the name of the generated [association](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.schema.Association.html) or other aspects
		 * need to be specified, the `reference` can be an object. The following usage shows
		 * what would be generated by default given the above examples using the string form.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 type: 'Organization',
		 *                 association: 'UsersByOrganization',
		 *                 role: 'organization',
		 *                 inverse: 'users'
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * Finally, a `reference` can also describe ownership between the entities. By default,
		 * no ownership relationship is assumed. If, however, the User entities are owned by
		 * their Organization, we could say this:
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 parent: 'Organization' // Organization is the parent of User
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		reference?: string | object;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @configuration
		 * @optional
		 */
		serialize?: ExtGlobalFunction;
		/** 
		 * A function which converts a Field's value to a comparable value in order to ensure
		 * correct sort ordering.
		 * 
		 * Predefined functions are provided in [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html). A custom sort example:
		 * 
		 *    // current sort     after sort we want
		 *    // +-+------+          +-+------+
		 *    // |1|First |          |1|First |
		 *    // |2|Last  |          |3|Second|
		 *    // |3|Second|          |2|Last  |
		 *    // +-+------+          +-+------+
		 *    
		 *    sortType: function(value) {
		 *       switch (value.toLowerCase()) // native toLowerCase():
		 *       {
		 *          case 'first': return 1;
		 *          case 'second': return 2;
		 *          default: return 3;
		 *       }
		 *    }
		 * 
		 * May also be set to a String value, corresponding to one of the named sort types in
		 * [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html).
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string}
		 */
		sortType?: ExtGlobalFunction | string;
		/** 
		 * `true` if the value of this field is unique amongst all instances. When used with a
		 * `reference` this describes a "one-to-one" relationship. It is almost always the case
		 * that a `unique` field cannot also be [nullable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		unique?: boolean;
		/** 
		 * An array of [validators](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.validator.Validator.html) for this field. These
		 * `validators` will only be passed a field value to validate.
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		validators?: object[];
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @param   {object}                         config
		 * @returns {Ext.data.field.Integer.Statics}        this
		 */
		initConfig? (config: object): Ext.data.field.Integer.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Integer.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Integer.Statics;
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
		 * @returns {Ext.data.field.Integer.Statics}  
		 */
		statics? (): Ext.data.field.Integer.Statics;
	}
}
declare namespace Ext.data.field.Number {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.field.Number](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Used for validating a [model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html). Defaults to true. An empty value here will cause
		 * [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).[isValid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-isValid) to evaluate to false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		allowBlank?: boolean;
		/** 
		 * Use when converting received data into a [&lt;code&gt;int&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html),
		 * [&lt;code&gt;float&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html), [&lt;code&gt;bool&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
		 * or [&lt;code&gt;string&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html) type. If the value cannot be
		 * parsed, `null` will be used if allowNull is true, otherwise a default value for that type will be used:
		 * 
		 * - for `int` and `float` - `0`.
		 * - for `string` - `""`.
		 * - for `bool` - `false`.
		 * 
		 * Note that when parsing of [&lt;code&gt;date&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) type fails, the value will
		 * be `null` regardless of this setting.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowNull?: boolean;
		/** 
		 * This config defines a simple field calculation function. A calculate method only
		 * has access to the record data and should return the value of the calculated field.
		 * When provided in this way, the `depends` config is automatically determined by
		 * parsing the `calculate` function. For example:
		 * 
		 *     fields: [{
		 *         name: 'firstName',
		 *         type: 'string'
		 *     },{
		 *         name: 'lastName',
		 *         type: 'string'
		 *     },{
		 *         name: 'fullName',
		 *         calculate: function (data) {
		 *             return data.firstName + ' ' + data.lastName;
		 *         }
		 *     }]
		 * 
		 * The above 'fullName' field is equivalent to:
		 * 
		 *     {
		 *         name: 'fullName',
		 *         convert: function (v, rec) {
		 *             return rec.get('firstName') + ' ' + rec.get('lastName');
		 *         },
		 *         depends: ['firstName', 'lastName']
		 *     }
		 * 
		 * The restrictions on form for a `calculate` method are that the accesses to field
		 * values must match the following regular expression (case insensitive):
		 * 
		 *     data.([a-z_][a-z0-9_]*)
		 *     // where 'data' is the param passed to the calculate method
		 * 
		 * The only advantage of a `calculate` method over a `convert` method is automatic
		 * determination of `depends`.
		 * 
		 * **Note:** The use of calculate and [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) are exclusive.  The
		 * calculate method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		calculate?: ExtGlobalFunction;
		/** 
		 * If specified this config overrides the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. See
		 * also [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) for simple field calculations.
		 * 
		 * **Note:** The use of [calculate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and convert are exclusive.  The calculate
		 * method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		convert?: ExtGlobalFunction;
		/** 
		 * A critical field is a field that must always be sent to the server even if it has
		 * not changed. The most common example of such a field is the "id" of a record (see
		 * [`Ext.data.Model.idProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty) but the [`Ext.data.Model.versionProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-versionProperty)
		 * is similarly a `critical` field.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		critical?: boolean;
		/** 
		 * The default value used when the creating an instance from a raw data object,
		 * and the property referenced by the [`mapping`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping)
		 * does not exist in that data object.
		 * 
		 * The value `undefined` prevents defaulting in a value.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {object}
		 */
		defaultValue?: object;
		/** 
		 * The field name or names within the [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) on which the value
		 * of this field depends, and from which a new value may be calculated. These values
		 * are the values used by the `convert` method. If you do not have a `convert` method
		 * then this config should not be specified.
		 * 
		 * Before using this config you should consider if using a `calculate` method instead
		 * of a `convert` method would be simpler.
		 * 
		 * Whenever any of the named fields are set using the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set)
		 * method, this fields will have its `convert` method called passing the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) so that the dependent value can be calculated from
		 * all fields which it needs.
		 * 
		 * For example, to display a person's full name, using two separate `firstName` and
		 * `lastName` fields, configure the name field like this:
		 * 
		 *    {
		 *        name: 'name',
		 *    
		 *        // Will be called whenever forename or surname fields are set
		 *        convert: function (v, rec) {
		 *            return rec.get('firstName') + ' ' + rec.get('lastName');
		 *        },
		 *    
		 *        depends: [ 'firstName', 'lastName' ],
		 *    
		 *        // It should not be returned to the server - it's not a database field
		 *        persist: false
		 *    }
		 * 
		 * Note that if you do not want the calculated field to be part of the field set sent
		 * back to the server when the store is synchronized, you should configure the field
		 * with `persist` set to `false`.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		depends?: string | string[];
		/** 
		 * (Optional) A path expression for use by the [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Reader.html) implementation that is creating the
		 * [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) to extract the Field value from the data object. If the path expression is the same
		 * as the field name, the mapping may be omitted. A function may be passed to do complex data extraction. The examples
		 * below are simple just to demonstrate the capability, typically, a function would not be used to extract such
		 * simple data.
		 * 
		 * The form of the mapping expression depends on the Reader being used.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html)
		 * 
		 * The mapping is a string containing the javascript expression to reference the data from an element of the data
		 * item's [rootProperty](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html#cfg-rootProperty) Array. Defaults to the field name. If a function is passed,
		 * a single argument is received which contains the raw json object:
		 * 
		 *    // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
		 *    mapping: function(data) {
		 *        return data.name;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html)
		 * 
		 * The mapping is an [Ext.DomQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Query.html) path to the data item relative to the DOM element that represents the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html#cfg-record). Defaults to the field name. If a function is passed, a single argument
		 * is received which contains the record node:
		 * 
		 *    // Server returns &lt;Root&gt;&lt;Person&gt;&lt;Name&gt;Foo&lt;/Name&gt;&lt;Age&gt;1&lt;/Age&gt;&lt;/Person&gt;&lt;Person&gt;&lt;Name&gt;Bar&lt;/Name&gt;&lt;Age&gt;2&lt;/Age&gt;&lt;/Person&gt;&lt;/Root&gt;
		 *    mapping: function(data) {
		 *        return data.firstChild.textContent;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Array.html)
		 * 
		 * The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's
		 * Array position. If a function is passed, a single argument is received which contains the child array.
		 * 
		 *    // Server returns [["Foo", 1], ["Bar", 2]]
		 *    mapping: function(data) {
		 *        return data[0];
		 *    }
		 * 
		 * </li>
		 * </ul>
		 * 
		 * If a more complex value extraction strategy is required, then configure the Field with a [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
		 * function. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to
		 * return the desired data.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|number}
		 */
		mapping?: ExtGlobalFunction | string | number;
		/** 
		 * The name by which the field is referenced within the Model. This is referenced by,
		 * for example, the `dataIndex` property in column definition objects passed to
		 * [Ext.grid.property.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.property.HeaderContainer.html).
		 * 
		 * Note: In the simplest case, if no properties other than `name` are required, a
		 * field definition may consist of just a String for the field name.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
		/** 
		 * False to exclude this field from the [Ext.data.Model.modified](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-modified) fields in a
		 * record. This will also exclude the field from being written using a
		 * [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html). This option is useful when fields are used to keep
		 * state on the client but do not need to be persisted to the server.
		 * 
		 * Defaults to `false` for `calculated` fields and `true` otherwise.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		persist?: boolean;
		/** 
		 * The [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
		 * In most databases, this relationship is represented by a "foreign key". That is, a
		 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * for an entity of this type.
		 * 
		 *     Ext.define('MyApp.models.Organization', {
		 *         extend: 'Ext.data.Model',
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization' }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If a `reference` is not nullable, set the [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank) property
		 * to false.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization', allowBlank: false }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If the name of the generated [association](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.schema.Association.html) or other aspects
		 * need to be specified, the `reference` can be an object. The following usage shows
		 * what would be generated by default given the above examples using the string form.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 type: 'Organization',
		 *                 association: 'UsersByOrganization',
		 *                 role: 'organization',
		 *                 inverse: 'users'
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * Finally, a `reference` can also describe ownership between the entities. By default,
		 * no ownership relationship is assumed. If, however, the User entities are owned by
		 * their Organization, we could say this:
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 parent: 'Organization' // Organization is the parent of User
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		reference?: string | object;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @configuration
		 * @optional
		 */
		serialize?: ExtGlobalFunction;
		/** 
		 * A function which converts a Field's value to a comparable value in order to ensure
		 * correct sort ordering.
		 * 
		 * Predefined functions are provided in [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html). A custom sort example:
		 * 
		 *    // current sort     after sort we want
		 *    // +-+------+          +-+------+
		 *    // |1|First |          |1|First |
		 *    // |2|Last  |          |3|Second|
		 *    // |3|Second|          |2|Last  |
		 *    // +-+------+          +-+------+
		 *    
		 *    sortType: function(value) {
		 *       switch (value.toLowerCase()) // native toLowerCase():
		 *       {
		 *          case 'first': return 1;
		 *          case 'second': return 2;
		 *          default: return 3;
		 *       }
		 *    }
		 * 
		 * May also be set to a String value, corresponding to one of the named sort types in
		 * [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html).
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string}
		 */
		sortType?: ExtGlobalFunction | string;
		/** 
		 * `true` if the value of this field is unique amongst all instances. When used with a
		 * `reference` this describes a "one-to-one" relationship. It is almost always the case
		 * that a `unique` field cannot also be [nullable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		unique?: boolean;
		/** 
		 * An array of [validators](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.validator.Validator.html) for this field. These
		 * `validators` will only be passed a field value to validate.
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		validators?: object[];
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @param   {object}                        config
		 * @returns {Ext.data.field.Number.Statics}        this
		 */
		initConfig? (config: object): Ext.data.field.Number.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.Number.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.Number.Statics;
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
		 * @returns {Ext.data.field.Number.Statics}  
		 */
		statics? (): Ext.data.field.Number.Statics;
	}
}
declare namespace Ext.data.field.String {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.field.String](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Used for validating a [model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html). Defaults to true. An empty value here will cause
		 * [Ext.data.Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html).[isValid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-isValid) to evaluate to false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		allowBlank?: boolean;
		/** 
		 * Use when converting received data into a [&lt;code&gt;int&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Integer.html),
		 * [&lt;code&gt;float&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Number.html), [&lt;code&gt;bool&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Boolean.html)
		 * or [&lt;code&gt;string&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.String.html) type. If the value cannot be
		 * parsed, `null` will be used if allowNull is true, otherwise a default value for that type will be used:
		 * 
		 * - for `int` and `float` - `0`.
		 * - for `string` - `""`.
		 * - for `bool` - `false`.
		 * 
		 * Note that when parsing of [&lt;code&gt;date&lt;/code&gt;](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Date.html) type fails, the value will
		 * be `null` regardless of this setting.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowNull?: boolean;
		/** 
		 * This config defines a simple field calculation function. A calculate method only
		 * has access to the record data and should return the value of the calculated field.
		 * When provided in this way, the `depends` config is automatically determined by
		 * parsing the `calculate` function. For example:
		 * 
		 *     fields: [{
		 *         name: 'firstName',
		 *         type: 'string'
		 *     },{
		 *         name: 'lastName',
		 *         type: 'string'
		 *     },{
		 *         name: 'fullName',
		 *         calculate: function (data) {
		 *             return data.firstName + ' ' + data.lastName;
		 *         }
		 *     }]
		 * 
		 * The above 'fullName' field is equivalent to:
		 * 
		 *     {
		 *         name: 'fullName',
		 *         convert: function (v, rec) {
		 *             return rec.get('firstName') + ' ' + rec.get('lastName');
		 *         },
		 *         depends: ['firstName', 'lastName']
		 *     }
		 * 
		 * The restrictions on form for a `calculate` method are that the accesses to field
		 * values must match the following regular expression (case insensitive):
		 * 
		 *     data.([a-z_][a-z0-9_]*)
		 *     // where 'data' is the param passed to the calculate method
		 * 
		 * The only advantage of a `calculate` method over a `convert` method is automatic
		 * determination of `depends`.
		 * 
		 * **Note:** The use of calculate and [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) are exclusive.  The
		 * calculate method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		calculate?: ExtGlobalFunction;
		/** 
		 * If specified this config overrides the [`convert`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#method-convert) method. See
		 * also [`calculate`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) for simple field calculations.
		 * 
		 * **Note:** The use of [calculate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-calculate) and convert are exclusive.  The calculate
		 * method will override the convert method if both are configured.
		 * @configuration
		 * @optional
		 */
		convert?: ExtGlobalFunction;
		/** 
		 * A critical field is a field that must always be sent to the server even if it has
		 * not changed. The most common example of such a field is the "id" of a record (see
		 * [`Ext.data.Model.idProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty) but the [`Ext.data.Model.versionProperty`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-versionProperty)
		 * is similarly a `critical` field.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		critical?: boolean;
		/** 
		 * The default value used when the creating an instance from a raw data object,
		 * and the property referenced by the [`mapping`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-mapping)
		 * does not exist in that data object.
		 * 
		 * The value `undefined` prevents defaulting in a value.
		 * @configuration
		 * @optional
		 * @default undefined
		 * @type {object}
		 */
		defaultValue?: object;
		/** 
		 * The field name or names within the [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) on which the value
		 * of this field depends, and from which a new value may be calculated. These values
		 * are the values used by the `convert` method. If you do not have a `convert` method
		 * then this config should not be specified.
		 * 
		 * Before using this config you should consider if using a `calculate` method instead
		 * of a `convert` method would be simpler.
		 * 
		 * Whenever any of the named fields are set using the [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-set)
		 * method, this fields will have its `convert` method called passing the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) so that the dependent value can be calculated from
		 * all fields which it needs.
		 * 
		 * For example, to display a person's full name, using two separate `firstName` and
		 * `lastName` fields, configure the name field like this:
		 * 
		 *    {
		 *        name: 'name',
		 *    
		 *        // Will be called whenever forename or surname fields are set
		 *        convert: function (v, rec) {
		 *            return rec.get('firstName') + ' ' + rec.get('lastName');
		 *        },
		 *    
		 *        depends: [ 'firstName', 'lastName' ],
		 *    
		 *        // It should not be returned to the server - it's not a database field
		 *        persist: false
		 *    }
		 * 
		 * Note that if you do not want the calculated field to be part of the field set sent
		 * back to the server when the store is synchronized, you should configure the field
		 * with `persist` set to `false`.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		depends?: string | string[];
		/** 
		 * (Optional) A path expression for use by the [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Reader.html) implementation that is creating the
		 * [Model](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) to extract the Field value from the data object. If the path expression is the same
		 * as the field name, the mapping may be omitted. A function may be passed to do complex data extraction. The examples
		 * below are simple just to demonstrate the capability, typically, a function would not be used to extract such
		 * simple data.
		 * 
		 * The form of the mapping expression depends on the Reader being used.
		 * 
		 * <ul>
		 * <li>
		 * 
		 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html)
		 * 
		 * The mapping is a string containing the javascript expression to reference the data from an element of the data
		 * item's [rootProperty](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Json.html#cfg-rootProperty) Array. Defaults to the field name. If a function is passed,
		 * a single argument is received which contains the raw json object:
		 * 
		 *    // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
		 *    mapping: function(data) {
		 *        return data.name;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html)
		 * 
		 * The mapping is an [Ext.DomQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Query.html) path to the data item relative to the DOM element that represents the
		 * [record](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Xml.html#cfg-record). Defaults to the field name. If a function is passed, a single argument
		 * is received which contains the record node:
		 * 
		 *    // Server returns &lt;Root&gt;&lt;Person&gt;&lt;Name&gt;Foo&lt;/Name&gt;&lt;Age&gt;1&lt;/Age&gt;&lt;/Person&gt;&lt;Person&gt;&lt;Name&gt;Bar&lt;/Name&gt;&lt;Age&gt;2&lt;/Age&gt;&lt;/Person&gt;&lt;/Root&gt;
		 *    mapping: function(data) {
		 *        return data.firstChild.textContent;
		 *    }
		 * 
		 * </li>
		 * <li>
		 * 
		 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.reader.Array.html)
		 * 
		 * The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's
		 * Array position. If a function is passed, a single argument is received which contains the child array.
		 * 
		 *    // Server returns [["Foo", 1], ["Bar", 2]]
		 *    mapping: function(data) {
		 *        return data[0];
		 *    }
		 * 
		 * </li>
		 * </ul>
		 * 
		 * If a more complex value extraction strategy is required, then configure the Field with a [convert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-convert)
		 * function. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to
		 * return the desired data.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|number}
		 */
		mapping?: ExtGlobalFunction | string | number;
		/** 
		 * The name by which the field is referenced within the Model. This is referenced by,
		 * for example, the `dataIndex` property in column definition objects passed to
		 * [Ext.grid.property.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.property.HeaderContainer.html).
		 * 
		 * Note: In the simplest case, if no properties other than `name` are required, a
		 * field definition may consist of just a String for the field name.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
		/** 
		 * False to exclude this field from the [Ext.data.Model.modified](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-modified) fields in a
		 * record. This will also exclude the field from being written using a
		 * [Ext.data.writer.Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html). This option is useful when fields are used to keep
		 * state on the client but do not need to be persisted to the server.
		 * 
		 * Defaults to `false` for `calculated` fields and `true` otherwise.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		persist?: boolean;
		/** 
		 * The [name](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
		 * In most databases, this relationship is represented by a "foreign key". That is, a
		 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-idProperty)
		 * for an entity of this type.
		 * 
		 *     Ext.define('MyApp.models.Organization', {
		 *         extend: 'Ext.data.Model',
		 *         ...
		 *     });
		 *    
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization' }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If a `reference` is not nullable, set the [allowBlank](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank) property
		 * to false.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [
		 *             { name: 'organizationId', reference: 'Organization', allowBlank: false }
		 *         ],
		 *         ...
		 *     });
		 * 
		 * If the name of the generated [association](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.schema.Association.html) or other aspects
		 * need to be specified, the `reference` can be an object. The following usage shows
		 * what would be generated by default given the above examples using the string form.
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 type: 'Organization',
		 *                 association: 'UsersByOrganization',
		 *                 role: 'organization',
		 *                 inverse: 'users'
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * Finally, a `reference` can also describe ownership between the entities. By default,
		 * no ownership relationship is assumed. If, however, the User entities are owned by
		 * their Organization, we could say this:
		 * 
		 *     Ext.define('MyApp.models.User', {
		 *         extend: 'Ext.data.Model',
		 *    
		 *         fields: [{
		 *             name: 'organizationId',
		 *             reference: {
		 *                 parent: 'Organization' // Organization is the parent of User
		 *             }
		 *         }],
		 *         ...
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		reference?: string | object;
		/** 
		 * A function which converts the Model's value for this Field into a form which can be used by whatever [Writer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.writer.Writer.html)
		 * is being used to sync data with the server.
		 * @configuration
		 * @optional
		 */
		serialize?: ExtGlobalFunction;
		/** 
		 * A function which converts a Field's value to a comparable value in order to ensure
		 * correct sort ordering.
		 * 
		 * Predefined functions are provided in [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html). A custom sort example:
		 * 
		 *    // current sort     after sort we want
		 *    // +-+------+          +-+------+
		 *    // |1|First |          |1|First |
		 *    // |2|Last  |          |3|Second|
		 *    // |3|Second|          |2|Last  |
		 *    // +-+------+          +-+------+
		 *    
		 *    sortType: function(value) {
		 *       switch (value.toLowerCase()) // native toLowerCase():
		 *       {
		 *          case 'first': return 1;
		 *          case 'second': return 2;
		 *          default: return 3;
		 *       }
		 *    }
		 * 
		 * May also be set to a String value, corresponding to one of the named sort types in
		 * [Ext.data.SortTypes](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.SortTypes.html).
		 * @configuration
		 * @optional
		 * @default 'asUCString'
		 * @type {ExtGlobalFunction|string}
		 */
		sortType?: ExtGlobalFunction | string;
		/** 
		 * `true` if the value of this field is unique amongst all instances. When used with a
		 * `reference` this describes a "one-to-one" relationship. It is almost always the case
		 * that a `unique` field cannot also be [nullable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.field.Field.html#cfg-allowBlank).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		unique?: boolean;
		/** 
		 * An array of [validators](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.validator.Validator.html) for this field. These
		 * `validators` will only be passed a field value to validate.
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		validators?: object[];
		/** 
		 * Validates the passed value for this field.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}                   value       The value to validate.
		 * @param   {string}                   [separator]
		 * This string is passed if the caller wants all validation
		 * messages concatenated with this string between each. This can be handled as a
		 * "falsy" value because concatenating with no separator is seldom desirable.
		 * @param   {Ext.data.ErrorCollection} [errors]
		 * This parameter is passed if the caller
		 * wants all validation results individually added to the collection.
		 * @returns {boolean|string}           
		 * `true` if the value is valid. A string may be returned if
		 * the value is not valid, to indicate an error message. Any other non `true` value
		 * indicates the value is not valid. This method is not implemented by default,
		 * subclasses may override it to provide an implementation.
		 */
		validate? (value: object, separator?: string, errors?: Ext.data.ErrorCollection): boolean | string;
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
		 * @param   {object}                        config
		 * @returns {Ext.data.field.String.Statics}        this
		 */
		initConfig? (config: object): Ext.data.field.String.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.data.field.String.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.field.String.Statics;
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
		 * @returns {Ext.data.field.String.Statics}  
		 */
		statics? (): Ext.data.field.String.Statics;
	}
}
