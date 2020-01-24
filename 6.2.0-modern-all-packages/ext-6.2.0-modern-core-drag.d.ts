declare namespace Ext.drag {
	/** 
	 * [Ext.drag.Constraint](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html)
	 * Provides constraining behavior for a [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html).
	 */
	class Constraint extends Ext.Base {
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Factory.html).
		 * @property
		 * @public (property)
		 * @default {defaultType: 'base', type: 'drag.constraint'}
		 * @type {object}
		 */
		factoryConfig?: object;
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
		 * @type {Ext.drag.Constraint.Statics}
		 */
		self?: Ext.drag.Constraint.Statics | Ext.Base.Statics;
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
		 * @param   {object}                       members    The members to add to this class.
		 * @param   {boolean}                      [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                      [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Constraint|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Constraint;
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
		 * @returns {Ext.drag.Constraint|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.drag.Constraint;
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
		 * @param   {object}                       name
		 * @param   {object}                       member
		 * @returns {Ext.drag.Constraint|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.drag.Constraint;
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
		 * @param   {object}                       fn
		 * @param   {object}                       scope
		 * @returns {Ext.drag.Constraint|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Constraint;
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
		 * Constrain the position of the drag proxy using the configured rules.
		 * @method
		 * @public (method)
		 * @param   {number[]}      xy   The position.
		 * @param   {Ext.drag.Info} info The drag information.
		 * @returns {number[]}           The xy position.
		 */
		constrain? (xy: number[], info: Ext.drag.Info): number[];
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#property-clearPropertiesOnDestroy)
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
		 * Returns the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-element).
		 * @method
		 * @public (method)
		 * @returns {boolean|string|HTMLElement|Ext.dom.Element}  
		 */
		getElement? (): boolean | string | HTMLElement | Ext.dom.Element;
		/** 
		 * Returns the value of [horizontal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-horizontal).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHorizontal? (): boolean;
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
		 * Returns the value of [region](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-region).
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Region}  
		 */
		getRegion? (): Ext.util.Region;
		/** 
		 * Returns the value of [snap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-snap).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getSnap? (): number | object;
		/** 
		 * Returns the value of [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-source).
		 * @method
		 * @public (method)
		 * @returns {Ext.drag.Source}  
		 */
		getSource? (): Ext.drag.Source;
		/** 
		 * Returns the value of [vertical](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-vertical).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getVertical? (): boolean;
		/** 
		 * Returns the value of [x](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-x).
		 * @method
		 * @public (method)
		 * @returns {number[]}  
		 */
		getX? (): number[];
		/** 
		 * Returns the value of [y](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-y).
		 * @method
		 * @public (method)
		 * @returns {number[]}  
		 */
		getY? (): number[];
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Constraint|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Constraint;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-element).
		 * @method
		 * @public (method)
		 * @param   {boolean|string|HTMLElement|Ext.dom.Element} element The new value.
		 * @returns {void}                                               
		 */
		setElement? (element: boolean | string | HTMLElement | Ext.dom.Element): void;
		/** 
		 * Sets the value of [horizontal](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-horizontal).
		 * @method
		 * @public (method)
		 * @param   {boolean} horizontal The new value.
		 * @returns {void}               
		 */
		setHorizontal? (horizontal: boolean): void;
		/** 
		 * Sets the value of [region](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-region).
		 * @method
		 * @public (method)
		 * @param   {Ext.util.Region} region The new value.
		 * @returns {void}                   
		 */
		setRegion? (region: Ext.util.Region): void;
		/** 
		 * Sets the value of [snap](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-snap).
		 * @method
		 * @public (method)
		 * @param   {number|object} snap The new value.
		 * @returns {void}               
		 */
		setSnap? (snap: number | object): void;
		/** 
		 * Sets the value of [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-source).
		 * @method
		 * @public (method)
		 * @param   {Ext.drag.Source} source The new value.
		 * @returns {void}                   
		 */
		setSource? (source: Ext.drag.Source): void;
		/** 
		 * Sets the value of [vertical](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-vertical).
		 * @method
		 * @public (method)
		 * @param   {boolean} vertical The new value.
		 * @returns {void}             
		 */
		setVertical? (vertical: boolean): void;
		/** 
		 * Sets the value of [x](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-x).
		 * @method
		 * @public (method)
		 * @param   {number[]} x The new value.
		 * @returns {void}       
		 */
		setX? (x: number[]): void;
		/** 
		 * Sets the value of [y](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html#cfg-y).
		 * @method
		 * @public (method)
		 * @param   {number[]} y The new value.
		 * @returns {void}       
		 */
		setY? (y: number[]): void;
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
		 * @returns {Ext.drag.Constraint|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.drag.Constraint;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.drag.Constraint.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.drag.Constraint.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                     names The names of the linked objects to destroy.
		 * @returns {Ext.drag.Constraint|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.drag.Constraint;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.drag.Info](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html)
	 * This class is used to unify information for a specific drag instance.
	 * This object is passed to template methods and events to obtain
	 * details about the current operation.
	 * 
	 * It is not expected that this class will be created by user code.
	 */
	class Info extends Ext.Base {
		/** 
		 * Information about the cursor position. Not available when
		 * [isNative](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-isNative) is `true`.
		 * @property
		 * @public (property)
		 * @type {object}
		 */
		cursor?: object;
		/** 
		 * Information about the [Ext.drag.Source.element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element) position.
		 * Not available when [isNative](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-isNative) is `true`.
		 * @property
		 * @public (property)
		 * @type {object}
		 */
		element?: object;
		/** 
		 * The event target that the drag started on.
		 * 
		 * Not available when [isNative](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-isNative) is `true`.
		 * @property
		 * @public (property)
		 * @type {HTMLElement}
		 */
		eventTarget?: HTMLElement;
		/** 
		 * A list of files included for this drag. See:
		 * https://developer.mozilla.org/en/docs/Web/API/FileList
		 * 
		 * Only available when [isNative](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-isNative) is `true`.
		 * @property
		 * @public (property)
		 * @type {FileList}
		 */
		files?: FileList;
		/** 
		 * `true` if the drag is a native drag event, for example
		 * a file draggedi nto the browser.
		 * @property
		 * @public (property)
		 * @default false
		 * @type {boolean}
		 */
		isNative?: boolean;
		/** 
		 * Information about the [Ext.drag.Source.proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) position.
		 * This may be the actual [Ext.drag.Source.element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element).
		 * Not available when [isNative](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-isNative) is `true`.
		 * @property
		 * @public (property)
		 * @type {object}
		 */
		proxy?: object;
		/** 
		 * The drag source. Not available when [isNative](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-isNative) is `true`.
		 * @property
		 * @public (property)
		 * @type {Ext.drag.Source}
		 */
		source?: Ext.drag.Source;
		/** 
		 * The active target. `null` if not over a target.
		 * @property
		 * @public (property)
		 * @type {Ext.drag.Target}
		 */
		target?: Ext.drag.Target;
		/** 
		 * The data types this drag provides. Added via [setData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-setData).
		 * @property
		 * @public (property)
		 * @type {string[]}
		 */
		types?: string[];
		/** 
		 * `true` if the [target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-target) is valid. See [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) for
		 * information about validity. `false` if there is no target.
		 * @property
		 * @public (property)
		 * @default false
		 * @type {boolean}
		 */
		valid?: boolean;
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
		 * @type {Ext.drag.Info.Statics}
		 */
		self?: Ext.drag.Info.Statics | Ext.Base.Statics;
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
		 * @param   {object}                 members    The members to add to this class.
		 * @param   {boolean}                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Info|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Info;
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
		 * @param   {object}                 members
		 * @returns {Ext.drag.Info|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.drag.Info;
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
		 * @param   {object}                 name
		 * @param   {object}                 member
		 * @returns {Ext.drag.Info|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.drag.Info;
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
		 * @param   {object}                 fn
		 * @param   {object}                 scope
		 * @returns {Ext.drag.Info|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Info;
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
		 * @param   {object} source
		 * @param   {object} e
		 */
		constructor (source: object, e: object);
		/** 
		 * Clear the data for a particular type.
		 * @method
		 * @public (method)
		 * @param   {string} type The type.
		 * @returns {void}        
		 */
		clearData? (type: string): void;
		/** 
		 * Create a copy of this object with the current state.
		 * @method
		 * @public (method)
		 * @returns {Ext.drag.Info}  A copy of this object.
		 */
		clone? (): Ext.drag.Info;
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-clearPropertiesOnDestroy)
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
		 * Get data for this drag. This method may only be called once the drop completes.
		 * @method
		 * @public (method)
		 * @param   {string}      type
		 * The type of data to retrieve. Must be in the [types](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-types).
		 * See also [setData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-setData).
		 * @returns {Ext.Promise} 
		 * The data. If the produced data is not a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html),
		 * it will be wrapped in one.
		 */
		getData? (type: string): Ext.Promise;
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
		 * @param   {string|object}          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                 [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Info|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Info;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Set data for this drag. Multiple types may be registered. Each type will be
		 * added to [types](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#property-types).
		 * @method
		 * @public (method)
		 * @param   {string}          type  The type of data being registered.
		 * @param   {Function|object} value
		 * The value being registered. If a function
		 * is provided it will be evaluated if requested when the drop completes. The
		 * function should return a value or a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) that will produce a value.
		 * @returns {void}                  
		 */
		setData? (type: string, value: ExtGlobalFunction | object): void;
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
		 * @returns {Ext.drag.Info|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.drag.Info;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.drag.Info.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.drag.Info.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}               names The names of the linked objects to destroy.
		 * @returns {Ext.drag.Info|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.drag.Info;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.drag.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html)
	 * A base class for draggable and droppable items that wrap a DOM element.
	 */
	class Item extends Ext.Base {
		/** 
		 * This object holds a key for any event that has a listener. The listener may be set
		 * directly on the instance, or on its class or a super class (via [observe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#static-method-observe)) or
		 * on the [MVC EventBus](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.EventBus.html). The values of this object are truthy
		 * (a non-zero number) and falsy (0 or undefined). They do not represent an exact count
		 * of listeners. The value for an event is truthy if the event must be fired and is
		 * falsy if there is no need to fire the event.
		 * 
		 * The intended use of this property is to avoid the expense of fireEvent calls when
		 * there are no listeners. This can be particularly helpful when one would otherwise
		 * have to call fireEvent hundreds or thousands of times. It is used like this:
		 * 
		 *     if (this.hasListeners.foo) {
		 *         this.fireEvent('foo', this, arg1);
		 *     }
		 * 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {object}
		 */
		readonly hasListeners?: object;
		/** 
		 * `true` in this class to identify an object as an instantiated Observable, or subclass thereof.
		 * @property
		 * @public (property)
		 * @default true
		 * @type {boolean}
		 */
		isObservable?: boolean;
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
		 * @type {Ext.drag.Item.Statics}
		 */
		self?: Ext.drag.Item.Statics | Ext.Base.Statics;
		/** 
		 * Matches options property names within a listeners specification object  - property names which are never used as event names.
		 * @property
		 * @private (property)
		 * @default {scope: 1, delay: 1, buffer: 1, onFrame: 1, single: 1, args: 1, destroyable: 1, priority: 1, order: 1}
		 * @type {object}
		 */
		$eventOptions?: object;
		/** 
		 * We don't want the base destructor to clear the prototype because
		 * our destroyObservable handler must be called the very last. It will take care
		 * of the prototype after completing Observable destruction sequence.
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		$vetoClearingPrototypeOnDestroy?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'ext-'
		 * @type {string}
		 */
		defaultIdPrefix?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default '-'
		 * @type {string}
		 */
		defaultIdSeparator?: string;
		/** 
		 * `true` if this item is disabled.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		disabled?: boolean;
		/** 
		 * Initial suspended call count. Incremented when [suspendEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-suspendEvents) is called, decremented when [resumeEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-resumeEvents) is called.
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		eventsSuspended?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default /\.|[^\w\-]/g
		 * @type {RegExp}
		 */
		idCleanRegex?: RegExp;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isIdentifiable?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'identifiable'
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
		 * @param   {object}                 members    The members to add to this class.
		 * @param   {boolean}                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Item|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Item;
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
		 * @param   {object}                 members
		 * @returns {Ext.drag.Item|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.drag.Item;
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
		 * @param   {object}                 name
		 * @param   {object}                 member
		 * @returns {Ext.drag.Item|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.drag.Item;
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
		 * @param   {object}                 fn
		 * @param   {object}                 scope
		 * @returns {Ext.drag.Item|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Item;
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
		 * The [on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-on) method is shorthand for
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * 
		 * Appends an event handler to this object.  For example:
		 * 
		 *    myGridPanel.on("itemclick", this.onItemClick, this);
		 * 
		 * The method also allows for a single argument to be passed which is a config object
		 * containing properties which specify multiple events. For example:
		 * 
		 *    myGridPanel.on({
		 *        cellclick: this.onCellClick,
		 *        select: this.onSelect,
		 *        viewready: this.onViewReady,
		 *        scope: this // Important. Ensure "this" is correct during handler execution
		 *    });
		 * 
		 * One can also specify options for each event handler separately:
		 * 
		 *    myGridPanel.on({
		 *        cellclick: {fn: this.onCellClick, scope: this, single: true},
		 *        viewready: {fn: panel.onViewReady, scope: panel}
		 *    });
		 * 
		 * _Names_ of methods in a specified scope may also be used:
		 * 
		 *    myGridPanel.on({
		 *        cellclick: {fn: 'onCellClick', scope: this, single: true},
		 *        viewready: {fn: 'onViewReady', scope: panel}
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|object}                                         eventName
		 * The name of the event to listen for.
		 * May also be an object who's property names are event names.
		 * @param   {Function|string}                                       [fn]
		 * The method the event invokes or the _name_ of
		 * the method within the specified `scope`.  Will be called with arguments
		 * given to [Ext.util.Observable.fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) plus the `options` parameter described
		 * below.
		 * @param   {object}                                                [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object|Ext.drag.Item.methodParams.addListener.Options} [options]
		 * An object containing handler configuration.
		 * 
		 * **Note:** The options object will also be passed as the last argument to every
		 * event handler.
		 * 
		 * This object may contain any of the following properties:
		 * @param   {string}                                                [order]
		 * A shortcut for the `order` event option.  Provided for backward compatibility.
		 *   Please use the `priority` event option instead.
		 * 
		 * **Combining Options**
		 * 
		 * Using the options argument, it is possible to combine different types of listeners:
		 * 
		 * A delayed, one-time listener.
		 * 
		 *    myPanel.on('hide', this.handleClick, this, {
		 *        single: true,
		 *        delay: 100
		 *    });
		 * 
		 * **Attaching multiple handlers in 1 call**
		 * 
		 * The method also allows for a single argument to be passed which is a config object
		 * containing properties which specify multiple handlers and handler configs.
		 * 
		 *    grid.on({
		 *        itemclick: 'onItemClick',
		 *        itemcontextmenu: grid.onItemContextmenu,
		 *        destroy: {
		 *            fn: function () {
		 *                // function called within the 'altCmp' scope instead of grid
		 *            },
		 *            scope: altCmp // unique scope for the destroy handler
		 *        },
		 *        scope: grid       // default scope - provided for example clarity
		 *    });
		 * 
		 * **Delegate**
		 * 
		 * This is a configuration option that you can pass along when registering a handler for
		 * an event to assist with event delegation. By setting this configuration option
		 * to a simple selector, the target element will be filtered to look for a
		 * descendant of the target. For example:
		 * 
		 *    var panel = Ext.create({
		 *        xtype: 'panel',
		 *        renderTo: document.body,
		 *        title: 'Delegate Handler Example',
		 *        frame: true,
		 *        height: 220,
		 *        width: 220,
		 *        html: '&lt;h1 class="myTitle"&gt;BODY TITLE&lt;/h1&gt;Body content'
		 *    });
		 *    
		 *    // The click handler will only be called when the click occurs on the
		 *    // delegate: h1.myTitle ("h1" tag with class "myTitle")
		 *    panel.on({
		 *        click: function (e) {
		 *            console.log(e.getTarget().innerHTML);
		 *        },
		 *        element: 'body',
		 *        delegate: 'h1.myTitle'
		 *     });
		 * 
		 * @returns {object}                                                
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes
		 *  all listeners added in this call. For example:
		 * 
		 *    this.btnListeners =  = myButton.on({
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
		addListener? (eventName: string | object, fn?: ExtGlobalFunction | string, scope?: object, options?: object | Ext.drag.Item.methodParams.addListener.Options, order?: string): object;
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
		 * Disable the current item to disallow it from participating
		 * in drag/drop operations.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enable the current item to allow it to participate in
		 * drag/drop operations.
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
		 * Returns the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoDestroy? (): boolean;
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
		 * Returns the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element).
		 * @method
		 * @public (method)
		 * @returns {string|HTMLElement|Ext.dom.Element}  
		 */
		getElement? (): string | HTMLElement | Ext.dom.Element;
		/** 
		 * Returns the value of [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-groups).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getGroups? (): string | string[];
		/** 
		 * Retrieves the id of this component. Will autogenerate an id if one has not already been set.
		 * @method
		 * @public (method)
		 * @returns {string}  id
		 */
		getId? (): string;
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
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
		/** 
		 * Checks whether this item is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this item is disabled.
		 */
		isDisabled? (): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
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
		 * The [on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Observable.html#method-on) method is shorthand for
		 * [addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * 
		 * Appends an event handler to this object.  For example:
		 * 
		 *    myGridPanel.on("itemclick", this.onItemClick, this);
		 * 
		 * The method also allows for a single argument to be passed which is a config object
		 * containing properties which specify multiple events. For example:
		 * 
		 *    myGridPanel.on({
		 *        cellclick: this.onCellClick,
		 *        select: this.onSelect,
		 *        viewready: this.onViewReady,
		 *        scope: this // Important. Ensure "this" is correct during handler execution
		 *    });
		 * 
		 * One can also specify options for each event handler separately:
		 * 
		 *    myGridPanel.on({
		 *        cellclick: {fn: this.onCellClick, scope: this, single: true},
		 *        viewready: {fn: panel.onViewReady, scope: panel}
		 *    });
		 * 
		 * _Names_ of methods in a specified scope may also be used:
		 * 
		 *    myGridPanel.on({
		 *        cellclick: {fn: 'onCellClick', scope: this, single: true},
		 *        viewready: {fn: 'onViewReady', scope: panel}
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|object}                                eventName
		 * The name of the event to listen for.
		 * May also be an object who's property names are event names.
		 * @param   {Function|string}                              [fn]
		 * The method the event invokes or the _name_ of
		 * the method within the specified `scope`.  Will be called with arguments
		 * given to [Ext.util.Observable.fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) plus the `options` parameter described
		 * below.
		 * @param   {object}                                       [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object|Ext.drag.Item.methodParams.on.Options} [options]
		 * An object containing handler configuration.
		 * 
		 * **Note:** The options object will also be passed as the last argument to every
		 * event handler.
		 * 
		 * This object may contain any of the following properties:
		 * @param   {string}                                       [order]
		 * A shortcut for the `order` event option.  Provided for backward compatibility.
		 *   Please use the `priority` event option instead.
		 * 
		 * **Combining Options**
		 * 
		 * Using the options argument, it is possible to combine different types of listeners:
		 * 
		 * A delayed, one-time listener.
		 * 
		 *    myPanel.on('hide', this.handleClick, this, {
		 *        single: true,
		 *        delay: 100
		 *    });
		 * 
		 * **Attaching multiple handlers in 1 call**
		 * 
		 * The method also allows for a single argument to be passed which is a config object
		 * containing properties which specify multiple handlers and handler configs.
		 * 
		 *    grid.on({
		 *        itemclick: 'onItemClick',
		 *        itemcontextmenu: grid.onItemContextmenu,
		 *        destroy: {
		 *            fn: function () {
		 *                // function called within the 'altCmp' scope instead of grid
		 *            },
		 *            scope: altCmp // unique scope for the destroy handler
		 *        },
		 *        scope: grid       // default scope - provided for example clarity
		 *    });
		 * 
		 * **Delegate**
		 * 
		 * This is a configuration option that you can pass along when registering a handler for
		 * an event to assist with event delegation. By setting this configuration option
		 * to a simple selector, the target element will be filtered to look for a
		 * descendant of the target. For example:
		 * 
		 *    var panel = Ext.create({
		 *        xtype: 'panel',
		 *        renderTo: document.body,
		 *        title: 'Delegate Handler Example',
		 *        frame: true,
		 *        height: 220,
		 *        width: 220,
		 *        html: '&lt;h1 class="myTitle"&gt;BODY TITLE&lt;/h1&gt;Body content'
		 *    });
		 *    
		 *    // The click handler will only be called when the click occurs on the
		 *    // delegate: h1.myTitle ("h1" tag with class "myTitle")
		 *    panel.on({
		 *        click: function (e) {
		 *            console.log(e.getTarget().innerHTML);
		 *        },
		 *        element: 'body',
		 *        delegate: 'h1.myTitle'
		 *     });
		 * 
		 * @returns {object}                                       
		 * **Only when the `destroyable` option is specified. **
		 * 
		 *  A `Destroyable` object. An object which implements the `destroy` method which removes
		 *  all listeners added in this call. For example:
		 * 
		 *    this.btnListeners =  = myButton.on({
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
		on? (eventName: string | object, fn?: ExtGlobalFunction | string, scope?: object, options?: object | Ext.drag.Item.methodParams.on.Options, order?: string): object;
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
		 * Sets the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoDestroy The new value.
		 * @returns {void}                
		 */
		setAutoDestroy? (autoDestroy: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                 [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Item|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Item;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element).
		 * @method
		 * @public (method)
		 * @param   {string|HTMLElement|Ext.dom.Element} element The new value.
		 * @returns {void}                                       
		 */
		setElement? (element: string | HTMLElement | Ext.dom.Element): void;
		/** 
		 * Sets the value of [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-groups).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} groups The new value.
		 * @returns {void}                   
		 */
		setGroups? (groups: string | string[]): void;
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
		 * Destructor for classes that extend Observable.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets any listeners to attach for the current element.
		 * @method
		 * @private (method)
		 * @returns {object}  The listeners for thie element.
		 */
		getElListeners? (): object;
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
		 * @returns {Ext.drag.Item|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.drag.Item;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.drag.Item.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.drag.Item.Statics;
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
		 * @param   {object} element
		 * @returns {void}           
		 */
		applyElement? (element: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @returns {void}         
		 */
		applyGroups? (group: object): void;
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
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
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
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getOptimizedId? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getUniqueId? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
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
		 * @param   {object} id
		 * @returns {void}      
		 */
		setId? (id: object): void;
		/** 
		 * Detach any existing listeners and add new listeners
		 * to the element.
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		setupListeners? (element: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}               names The names of the linked objects to destroy.
		 * @returns {Ext.drag.Item|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.drag.Item;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		updateElement? (element: object): void;
	}
	/** 
	 * Acts as a mediator between sources and targets.
	 * 
	 * Typically this class will not be used in user code.
	 * @private (class)
	 * @singleton (definition)
	 */
	interface Manager extends Ext.Base {}
	/** 
	 * [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * A wrapper around a DOM element that allows it to be dragged.
	 * 
	 * ## Constraining
	 * 
	 * The [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain) config gives various options for limiting drag, for example:
	 * 
	 * - Vertical or horizontal only
	 * - Minimum/maximum x/y values.
	 * - Snap to grid
	 * - Constrain to an element or region.
	 * 
	 * See Ext.drag.Constrain for detailed options.
	 * 
	 *     new Ext.drag.Source({
	 *         element: dragEl,
	 *         constrain: {
	 *             // Drag only vertically in 30px increments
	 *             vertical: true,
	 *             snap: {
	 *                 y: 30
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Data
	 * 
	 * Data representing the underlying drag is driven by the [describe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-describe) method. This method
	 * is called once at the beginning of the drag. It should populate the info object with data using
	 * the setData method. It accepts 2 arguments.
	 * 
	 * - The `type` is used to indicate to [targets](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) the type(s) of data being provided.
	 *   This allows the [target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) to decide whether it is able to interact with the source.
	 *   All types added are available in types.
	 * - The value can be a static value, or a function reference. In the latter case, the function is evaluated
	 *   when the data is requested.
	 * 
	 * The [Ext.drag.Info.getData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-getData) method may be called once the drop completes. The data for the relevant type
	 * is retrieved. All values from this method return a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) to allow for consistency when dealing
	 * with synchronous and asynchronous data.
	 * 
	 * ## Proxy
	 * 
	 * A [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) is an element that follows the mouse cursor during a drag. This may be the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element),
	 * a newly created element, or none at all (if the purpose is to just track the cursor).
	 * 
	 * See [for details](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.None.html).
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         proxy: {
	 *             type: 'placeholder',
	 *             getElement: function(info) {
	 *                 return Ext.getBody().createChild({
	 *                     cls: 'foo',
	 *                     html: info.eventTarget.innerHTML
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Handle
	 * 
	 * A [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle) is a CSS selector that allows certain child elements of the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element)
	 * to begin a drag. This is useful in 2 case:
	 * 
	 * - Where only a certain part of the element should trigger a drag, but the whole element should move.
	 * - When there are several repeated elements that may represent objects.
	 * 
	 * In the example below, each child element becomes draggable and
	 * the describe method is used to extract the id from the DOM element.
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         describe: function(info) {
	 *             info.setData('item', Ext.fly(info.eventTarget).getAttribute('data-id'));
	 *         }
	 *     });
	 * 
	 */
	class Source extends Ext.drag.Item {
		/** 
		 * `true` if this source is currently dragging.
		 * @property
		 * @protected (property)
		 * @default false
		 * @type {boolean}
		 */
		dragging?: boolean;
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
		 * @type {Ext.drag.Source.Statics}
		 */
		self?: Ext.drag.Source.Statics | Ext.drag.Item.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default 'source-'
		 * @type {string}
		 */
		defaultIdPrefix?: string;
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
		 * @param   {object}                                 members    The members to add to this class.
		 * @param   {boolean}                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Source;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Item;
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
		 * @param   {object}                                 members
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.drag.Source;
		static addStatics? (members: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 name
		 * @param   {object}                                 member
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.drag.Source;
		static addMember? (name: object, member: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 fn
		 * @param   {object}                                 scope
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Source;
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Item;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
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
		 * Disable the current item to disallow it from participating
		 * in drag/drop operations.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enable the current item to allow it to participate in
		 * drag/drop operations.
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
		 * Returns the value of [activeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-activeCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getActiveCls? (): string;
		/** 
		 * Returns the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoDestroy? (): boolean;
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
		 * Returns the value of [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain).
		 * @method
		 * @public (method)
		 * @returns {object|Ext.util.Region|Ext.dom.Element}  
		 */
		getConstrain? (): object | Ext.util.Region | Ext.dom.Element;
		/** 
		 * Gets any listeners to attach for the current element.
		 * @method
		 * @public (method)
		 * @returns {object}  The listeners for thie element.
		 */
		getElListeners? (): object;
		/** 
		 * Returns the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element).
		 * @method
		 * @public (method)
		 * @returns {string|HTMLElement|Ext.dom.Element}  
		 */
		getElement? (): string | HTMLElement | Ext.dom.Element;
		/** 
		 * Returns the value of [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-groups).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getGroups? (): string | string[];
		/** 
		 * Returns the value of [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getHandle? (): string;
		/** 
		 * Retrieves the id of this component. Will autogenerate an id if one has not already been set.
		 * @method
		 * @public (method)
		 * @returns {string}  id
		 */
		getId? (): string;
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
		 * Returns the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getProxy? (): string;
		/** 
		 * Returns the value of [revert](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-revert).
		 * @method
		 * @public (method)
		 * @returns {boolean|object}  
		 */
		getRevert? (): boolean | object;
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
		 * Checks whether this item is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this item is disabled.
		 */
		isDisabled? (): boolean;
		/** 
		 * Checks whether this source is actively dragging.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this source is dragging.
		 */
		isDragging? (): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
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
		 * Sets the value of [activeCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-activeCls).
		 * @method
		 * @public (method)
		 * @param   {string} activeCls The new value.
		 * @returns {void}             
		 */
		setActiveCls? (activeCls: string): void;
		/** 
		 * Sets the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoDestroy The new value.
		 * @returns {void}                
		 */
		setAutoDestroy? (autoDestroy: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                 [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Source;
		setConfig? (name: string | object, value?: object): Ext.drag.Item;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.util.Region|Ext.dom.Element} constrain The new value.
		 * @returns {void}                                             
		 */
		setConstrain? (constrain: object | Ext.util.Region | Ext.dom.Element): void;
		/** 
		 * Sets the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element).
		 * @method
		 * @public (method)
		 * @param   {string|HTMLElement|Ext.dom.Element} element The new value.
		 * @returns {void}                                       
		 */
		setElement? (element: string | HTMLElement | Ext.dom.Element): void;
		/** 
		 * Sets the value of [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-groups).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} groups The new value.
		 * @returns {void}                   
		 */
		setGroups? (groups: string | string[]): void;
		/** 
		 * Sets the value of [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle).
		 * @method
		 * @public (method)
		 * @param   {string} handle The new value.
		 * @returns {void}          
		 */
		setHandle? (handle: string): void;
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
		 * Sets the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy).
		 * @method
		 * @public (method)
		 * @param   {string} proxy The new value.
		 * @returns {void}         
		 */
		setProxy? (proxy: string): void;
		/** 
		 * Sets the value of [revert](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-revert).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} revert The new value.
		 * @returns {void}                  
		 */
		setRevert? (revert: boolean | object): void;
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
		 * Destructor for classes that extend Observable.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Called before a drag starts. Return `false` to veto the drag.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.data.Info} The drag info.
		 * @returns {boolean}           `false` to veto the drag.
		 */
		beforeDragStart? (The: Ext.data.Info): boolean;
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
		 * Sets up the underlying data that describes the drag. This method
		 * is called once at the start of the drag operation.
		 * 
		 * Data should be set on the [info](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html) using the
		 * [setData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-setData) method. See
		 * [setData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-setData) for more information.
		 * 
		 * This method should not be called by user code.
		 * @method
		 * @protected (method)
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		describe? (info: Ext.drag.Info): void;
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
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.drag.Source;
		initConfig? (config: object): Ext.drag.Item;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Called when a drag is cancelled.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragCancel? (): void;
		/** 
		 * Called when a drag ends.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragEnd? (): void;
		/** 
		 * Called for each move in a drag.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragMove? (): void;
		/** 
		 * Called when a drag starts.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragStart? (): void;
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
		 * @returns {Ext.drag.Source.Statics|Ext.drag.Item.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.drag.Source.Statics;
		statics? (): Ext.drag.Item.Statics;
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
		 * @param   {object} element
		 * @returns {void}           
		 */
		applyElement? (element: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @returns {void}         
		 */
		applyGroups? (group: object): void;
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
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
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
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getOptimizedId? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getUniqueId? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
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
		 * @param   {object} id
		 * @returns {void}      
		 */
		setId? (id: object): void;
		/** 
		 * Detach any existing listeners and add new listeners
		 * to the element.
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		setupListeners? (element: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                               names The names of the linked objects to destroy.
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.drag.Source;
		unlink? (names: string[]): Ext.drag.Item;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @param   {object} oldElement
		 * @returns {void}              
		 */
		updateElement? (element: object, oldElement: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.drag.Item.updateElement](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#method-updateElement).
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		updateElement? (element: object): void;
	}
	/** 
	 * [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html)
	 * A wrapper around a DOM element that allows it to receive drops.
	 * 
	 * ## Validity of drag operations
	 * 
	 * There are certain conditions that govern whether a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and a target can interact. By default (without configuration), all [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and targets can interact with each other, the conditions are evaluated in this order:
	 * 
	 * ### [Disabled State](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-isDisabled)
	 * 
	 * If the target is disabled, the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * cannot interact with it.
	 * 
	 * ### [Groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-groups)
	 * 
	 * Both the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and target can belong to multiple groups.
	 * They may interact if:
	 * 
	 * - Neither has a group
	 * - Both have one (or more) of the same group
	 * 
	 * ### [Accept](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-accepts)
	 * 
	 * This method is called each time a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) enters this
	 * target. If the method returns `false`, the drag is not considered valid.
	 * 
	 * ## Asynchronous drop processing
	 * 
	 *  When the drop completes, the [drop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#event-drop) event will fire, however the underlying data
	 * may not be ready to be consumed. By returning a [Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) from the data,
	 * it allows either:
	 * 
	 * - The data to be fetched (either from a remote source or generated if expensive).
	 * - Any validation to take place before the drop is finalized.
	 * 
	 * Once the promise is [resolved](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve) or [rejected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve),
	 * further processing can be completed.
	 * 
	 * Validation example:
	 * 
	 *     var confirmSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         describe: function(info) {
	 *             // Provide the data up front
	 *             info.setData('records', theRecords);
	 *         }
	 *     });  
	 *    
	 *     var confirmTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 Ext.MessageBox.confirm('Really', 'Are you sure?', function(btn) {
	 *                     if (btn === 'yes') {
	 *                         info.getData('records').then(function(data) {
	 *                             // Process the data
	 *                         });
	 *                     }
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * Remote data example:
	 * 
	 *     var fetchSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         // The resulting drag data will be a binary blob
	 *         // of image data, we don't want to fetch it up front, so
	 *         // pass a callback to be executed when data is requested.
	 *         describe: function(info) {
	 *             info.setData('image', function() {
	 *                 return Ext.Ajax.request({
	 *                     url: 'data.json'
	 *                     // some options
	 *                 }).then(function(result) {
	 *                     var imageData;
	 *                     // Do some post-processing
	 *                     return imageData;
	 *                 }, function() {
	 *                     return Ext.Promise.reject('Something went wrong!');
	 *                 });
	 *             });
	 *         }
	 *     });
	 *    
	 *     var fetchTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         accepts: function(info) {
	 *             return info.types.indexOf('image') &gt; -1;
	 *         },
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 info.getData('image').then(function() {
	 *                     // All good, show the image
	 *                 }, function() {
	 *                     // Handle failure case
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 */
	class Target extends Ext.drag.Item {
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
		 * @type {Ext.drag.Target.Statics}
		 */
		self?: Ext.drag.Target.Statics | Ext.drag.Item.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default 'target-'
		 * @type {string}
		 */
		defaultIdPrefix?: string;
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
		 * @param   {object}                                 members    The members to add to this class.
		 * @param   {boolean}                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Target;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Item;
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
		 * @param   {object}                                 members
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.drag.Target;
		static addStatics? (members: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 name
		 * @param   {object}                                 member
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.drag.Target;
		static addMember? (name: object, member: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 fn
		 * @param   {object}                                 scope
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Target;
		static onExtended? (fn: object, scope: object): typeof Ext.drag.Item;
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
		 * Disable the current item to disallow it from participating
		 * in drag/drop operations.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		disable? (): void;
		/** 
		 * Enable the current item to allow it to participate in
		 * drag/drop operations.
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
		 * Returns the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoDestroy? (): boolean;
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
		 * Gets any listeners to attach for the current element.
		 * @method
		 * @public (method)
		 * @returns {object}  The listeners for thie element.
		 */
		getElListeners? (): object;
		/** 
		 * Returns the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element).
		 * @method
		 * @public (method)
		 * @returns {string|HTMLElement|Ext.dom.Element}  
		 */
		getElement? (): string | HTMLElement | Ext.dom.Element;
		/** 
		 * Returns the value of [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-groups).
		 * @method
		 * @public (method)
		 * @returns {string|string[]}  
		 */
		getGroups? (): string | string[];
		/** 
		 * Retrieves the id of this component. Will autogenerate an id if one has not already been set.
		 * @method
		 * @public (method)
		 * @returns {string}  id
		 */
		getId? (): string;
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
		 * Returns the value of [invalidCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-invalidCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getInvalidCls? (): string;
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
		 * Checks whether this item is currently disabled.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this item is disabled.
		 */
		isDisabled? (): boolean;
		/** 
		 * Checks if all events, or a specific event, is suspended.
		 * @method
		 * @public (method)
		 * @param   {string}  [event] The name of the specific event to check
		 * @returns {boolean}         `true` if events are suspended
		 */
		isSuspended? (event?: string): boolean;
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
		 * Sets the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoDestroy The new value.
		 * @returns {void}                
		 */
		setAutoDestroy? (autoDestroy: boolean): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                 [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Target;
		setConfig? (name: string | object, value?: object): Ext.drag.Item;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element).
		 * @method
		 * @public (method)
		 * @param   {string|HTMLElement|Ext.dom.Element} element The new value.
		 * @returns {void}                                       
		 */
		setElement? (element: string | HTMLElement | Ext.dom.Element): void;
		/** 
		 * Sets the value of [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-groups).
		 * @method
		 * @public (method)
		 * @param   {string|string[]} groups The new value.
		 * @returns {void}                   
		 */
		setGroups? (groups: string | string[]): void;
		/** 
		 * Sets the value of [invalidCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-invalidCls).
		 * @method
		 * @public (method)
		 * @param   {string} invalidCls The new value.
		 * @returns {void}              
		 */
		setInvalidCls? (invalidCls: string): void;
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
		 * Destructor for classes that extend Observable.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Called each time a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) enters this target.
		 * Allows this target to indicate whether it will interact with
		 * the given drag. Determined after [isDisabled](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-isDisabled) and
		 * [groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-groups) checks. If either of the aforementioned conditions
		 * means the target is not valid, this will not be called.
		 * 
		 * Defaults to returning `true`.
		 * @method
		 * @protected (method)
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {boolean}            `true` if the drag is valid for this target.
		 */
		accepts? (info: Ext.drag.Info): boolean;
		/** 
		 * Called before a drag finishes on this target. Return `false` to veto
		 * the drop.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {boolean}            `false` to veto the drop.
		 */
		beforeDrop? (info: Ext.drag.Info): boolean;
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
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.drag.Target;
		initConfig? (config: object): Ext.drag.Item;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Called when a drag enters this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDragEnter? (info: Ext.drag.Info): void;
		/** 
		 * Called when a source leaves this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDragLeave? (info: Ext.drag.Info): void;
		/** 
		 * Called when a drag is moved while inside this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDragMove? (info: Ext.drag.Info): void;
		/** 
		 * Called when a drag is dropped on this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDrop? (info: Ext.drag.Info): void;
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
		 * @returns {Ext.drag.Target.Statics|Ext.drag.Item.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.drag.Target.Statics;
		statics? (): Ext.drag.Item.Statics;
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
		 * @param   {object} element
		 * @returns {void}           
		 */
		applyElement? (element: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} group
		 * @returns {void}         
		 */
		applyGroups? (group: object): void;
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
		 * Creates an event handling function which re-fires the event from this object as the passed event name.
		 * @method
		 * @private (method)
		 * @param   {string}   newName    The name under which to re-fire the passed parameters.
		 * @param   {any[]}    [beginEnd] The caller can specify on which indices to slice.
		 * @returns {Function}            
		 */
		createRelayer? (newName: string, beginEnd?: any[]): ExtGlobalFunction;
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
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getOptimizedId? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getUniqueId? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
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
		 * @param   {object} id
		 * @returns {void}      
		 */
		setId? (id: object): void;
		/** 
		 * Detach any existing listeners and add new listeners
		 * to the element.
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		setupListeners? (element: object): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                               names The names of the linked objects to destroy.
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.drag.Target;
		unlink? (names: string[]): Ext.drag.Item;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} element
		 * @returns {void}           
		 */
		updateElement? (element: object): void;
	}
}
declare namespace Ext {
	class drag {
		/** 
		 * Acts as a mediator between sources and targets.
		 * 
		 * Typically this class will not be used in user code.
		 * @private (class)
		 * @singleton (instance)
		 */
		static readonly Manager?: Ext.drag.Manager;
	}
}
declare namespace Ext.drag.Constraint {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.drag.Constraint](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html)
	 * Provides constraining behavior for a [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html).
	 */
	interface Def extends Ext.drag.Constraint {
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
		 * @type {Ext.drag.Constraint.Cfg}
		 */
		config?: Ext.drag.Constraint.Cfg;
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
		 * @returns {Ext.drag.Constraint.Statics|Ext.Base.Statics}  
		 * @type {Ext.drag.Constraint.Statics}
		 */
		statics?: (() => Ext.drag.Constraint.Statics | Ext.Base.Statics) | Ext.drag.Constraint.Statics | any;
	}
}
declare namespace Ext.drag.Info {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.drag.Info](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html)
	 * This class is used to unify information for a specific drag instance.
	 * This object is passed to template methods and events to obtain
	 * details about the current operation.
	 * 
	 * It is not expected that this class will be created by user code.
	 */
	interface Def extends Ext.drag.Info {
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
		 * @type {object}
		 */
		config?: object;
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
		 * @returns {Ext.drag.Info.Statics|Ext.Base.Statics}  
		 * @type {Ext.drag.Info.Statics}
		 */
		statics?: (() => Ext.drag.Info.Statics | Ext.Base.Statics) | Ext.drag.Info.Statics | any;
	}
}
declare namespace Ext.drag.Item {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.drag.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html)
	 * A base class for draggable and droppable items that wrap a DOM element.
	 */
	interface Def extends Ext.drag.Item {
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
		 * @type {Ext.drag.Item.Cfg}
		 */
		config?: Ext.drag.Item.Cfg;
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
		 * @returns {Ext.drag.Item.Statics|Ext.Base.Statics}  
		 * @type {Ext.drag.Item.Statics}
		 */
		statics?: (() => Ext.drag.Item.Statics | Ext.Base.Statics) | Ext.drag.Item.Statics | any;
	}
}
declare namespace Ext.drag.Source {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * A wrapper around a DOM element that allows it to be dragged.
	 * 
	 * ## Constraining
	 * 
	 * The [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain) config gives various options for limiting drag, for example:
	 * 
	 * - Vertical or horizontal only
	 * - Minimum/maximum x/y values.
	 * - Snap to grid
	 * - Constrain to an element or region.
	 * 
	 * See Ext.drag.Constrain for detailed options.
	 * 
	 *     new Ext.drag.Source({
	 *         element: dragEl,
	 *         constrain: {
	 *             // Drag only vertically in 30px increments
	 *             vertical: true,
	 *             snap: {
	 *                 y: 30
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Data
	 * 
	 * Data representing the underlying drag is driven by the [describe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-describe) method. This method
	 * is called once at the beginning of the drag. It should populate the info object with data using
	 * the setData method. It accepts 2 arguments.
	 * 
	 * - The `type` is used to indicate to [targets](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) the type(s) of data being provided.
	 *   This allows the [target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) to decide whether it is able to interact with the source.
	 *   All types added are available in types.
	 * - The value can be a static value, or a function reference. In the latter case, the function is evaluated
	 *   when the data is requested.
	 * 
	 * The [Ext.drag.Info.getData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-getData) method may be called once the drop completes. The data for the relevant type
	 * is retrieved. All values from this method return a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) to allow for consistency when dealing
	 * with synchronous and asynchronous data.
	 * 
	 * ## Proxy
	 * 
	 * A [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) is an element that follows the mouse cursor during a drag. This may be the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element),
	 * a newly created element, or none at all (if the purpose is to just track the cursor).
	 * 
	 * See [for details](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.None.html).
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         proxy: {
	 *             type: 'placeholder',
	 *             getElement: function(info) {
	 *                 return Ext.getBody().createChild({
	 *                     cls: 'foo',
	 *                     html: info.eventTarget.innerHTML
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Handle
	 * 
	 * A [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle) is a CSS selector that allows certain child elements of the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element)
	 * to begin a drag. This is useful in 2 case:
	 * 
	 * - Where only a certain part of the element should trigger a drag, but the whole element should move.
	 * - When there are several repeated elements that may represent objects.
	 * 
	 * In the example below, each child element becomes draggable and
	 * the describe method is used to extract the id from the DOM element.
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         describe: function(info) {
	 *             info.setData('item', Ext.fly(info.eventTarget).getAttribute('data-id'));
	 *         }
	 *     });
	 * 
	 */
	interface Def extends Ext.drag.Source {
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
		 * @type {Ext.drag.Source.Cfg}
		 */
		config?: Ext.drag.Source.Cfg;
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
		 * @returns {Ext.drag.Source.Statics|Ext.drag.Item.Statics|Ext.Base.Statics}  
		 * @type {Ext.drag.Source.Statics}
		 */
		statics?: (() => Ext.drag.Source.Statics | Ext.drag.Item.Statics | Ext.Base.Statics) | Ext.drag.Source.Statics | any;
	}
}
declare namespace Ext.drag.Target {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html)
	 * A wrapper around a DOM element that allows it to receive drops.
	 * 
	 * ## Validity of drag operations
	 * 
	 * There are certain conditions that govern whether a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and a target can interact. By default (without configuration), all [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and targets can interact with each other, the conditions are evaluated in this order:
	 * 
	 * ### [Disabled State](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-isDisabled)
	 * 
	 * If the target is disabled, the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * cannot interact with it.
	 * 
	 * ### [Groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-groups)
	 * 
	 * Both the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and target can belong to multiple groups.
	 * They may interact if:
	 * 
	 * - Neither has a group
	 * - Both have one (or more) of the same group
	 * 
	 * ### [Accept](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-accepts)
	 * 
	 * This method is called each time a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) enters this
	 * target. If the method returns `false`, the drag is not considered valid.
	 * 
	 * ## Asynchronous drop processing
	 * 
	 *  When the drop completes, the [drop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#event-drop) event will fire, however the underlying data
	 * may not be ready to be consumed. By returning a [Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) from the data,
	 * it allows either:
	 * 
	 * - The data to be fetched (either from a remote source or generated if expensive).
	 * - Any validation to take place before the drop is finalized.
	 * 
	 * Once the promise is [resolved](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve) or [rejected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve),
	 * further processing can be completed.
	 * 
	 * Validation example:
	 * 
	 *     var confirmSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         describe: function(info) {
	 *             // Provide the data up front
	 *             info.setData('records', theRecords);
	 *         }
	 *     });  
	 *    
	 *     var confirmTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 Ext.MessageBox.confirm('Really', 'Are you sure?', function(btn) {
	 *                     if (btn === 'yes') {
	 *                         info.getData('records').then(function(data) {
	 *                             // Process the data
	 *                         });
	 *                     }
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * Remote data example:
	 * 
	 *     var fetchSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         // The resulting drag data will be a binary blob
	 *         // of image data, we don't want to fetch it up front, so
	 *         // pass a callback to be executed when data is requested.
	 *         describe: function(info) {
	 *             info.setData('image', function() {
	 *                 return Ext.Ajax.request({
	 *                     url: 'data.json'
	 *                     // some options
	 *                 }).then(function(result) {
	 *                     var imageData;
	 *                     // Do some post-processing
	 *                     return imageData;
	 *                 }, function() {
	 *                     return Ext.Promise.reject('Something went wrong!');
	 *                 });
	 *             });
	 *         }
	 *     });
	 *    
	 *     var fetchTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         accepts: function(info) {
	 *             return info.types.indexOf('image') &gt; -1;
	 *         },
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 info.getData('image').then(function() {
	 *                     // All good, show the image
	 *                 }, function() {
	 *                     // Handle failure case
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 */
	interface Def extends Ext.drag.Target {
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
		 * @type {Ext.drag.Target.Cfg}
		 */
		config?: Ext.drag.Target.Cfg;
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
		 * @returns {Ext.drag.Target.Statics|Ext.drag.Item.Statics|Ext.Base.Statics}  
		 * @type {Ext.drag.Target.Statics}
		 */
		statics?: (() => Ext.drag.Target.Statics | Ext.drag.Item.Statics | Ext.Base.Statics) | Ext.drag.Target.Statics | any;
	}
}
declare namespace Ext.drag.Constraint {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.drag.Constraint](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html)
	 * Provides constraining behavior for a [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html).
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
		 * @returns {Ext.drag.Constraint|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Constraint;
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
		 * @returns {Ext.drag.Constraint|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.drag.Constraint;
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
		 * @param   {object}                       name
		 * @param   {object}                       member
		 * @returns {Ext.drag.Constraint|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.drag.Constraint;
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
		 * @param   {object}                       fn
		 * @param   {object}                       scope
		 * @returns {Ext.drag.Constraint|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.drag.Constraint;
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
declare namespace Ext.drag.Info {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.drag.Info](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html)
	 * This class is used to unify information for a specific drag instance.
	 * This object is passed to template methods and events to obtain
	 * details about the current operation.
	 * 
	 * It is not expected that this class will be created by user code.
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
		 * @param   {object}                 members    The members to add to this class.
		 * @param   {boolean}                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Info|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Info;
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
		 * @param   {object}                 members
		 * @returns {Ext.drag.Info|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.drag.Info;
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
		 * @param   {object}                 name
		 * @param   {object}                 member
		 * @returns {Ext.drag.Info|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.drag.Info;
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
		 * @param   {object}                 fn
		 * @param   {object}                 scope
		 * @returns {Ext.drag.Info|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.drag.Info;
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
declare namespace Ext.drag.Item {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.drag.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html)
	 * A base class for draggable and droppable items that wrap a DOM element.
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
		 * @param   {object}                 members    The members to add to this class.
		 * @param   {boolean}                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Item|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Item;
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
		 * @param   {object}                 members
		 * @returns {Ext.drag.Item|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.drag.Item;
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
		 * @param   {object}                 name
		 * @param   {object}                 member
		 * @returns {Ext.drag.Item|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.drag.Item;
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
		 * @param   {object}                 fn
		 * @param   {object}                 scope
		 * @returns {Ext.drag.Item|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.drag.Item;
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
declare namespace Ext.drag.Manager {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.drag.Manager](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Manager.html)
	 * Acts as a mediator between sources and targets.
	 * 
	 * Typically this class will not be used in user code.
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
		 * @param   {object}                    members    The members to add to this class.
		 * @param   {boolean}                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Manager|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Manager;
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
		 * @param   {object}                    members
		 * @returns {Ext.drag.Manager|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.drag.Manager;
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
		 * @param   {object}                    name
		 * @param   {object}                    member
		 * @returns {Ext.drag.Manager|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.drag.Manager;
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
		 * @param   {object}                    fn
		 * @param   {object}                    scope
		 * @returns {Ext.drag.Manager|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.drag.Manager;
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
declare namespace Ext.drag.Source {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * A wrapper around a DOM element that allows it to be dragged.
	 * 
	 * ## Constraining
	 * 
	 * The [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain) config gives various options for limiting drag, for example:
	 * 
	 * - Vertical or horizontal only
	 * - Minimum/maximum x/y values.
	 * - Snap to grid
	 * - Constrain to an element or region.
	 * 
	 * See Ext.drag.Constrain for detailed options.
	 * 
	 *     new Ext.drag.Source({
	 *         element: dragEl,
	 *         constrain: {
	 *             // Drag only vertically in 30px increments
	 *             vertical: true,
	 *             snap: {
	 *                 y: 30
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Data
	 * 
	 * Data representing the underlying drag is driven by the [describe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-describe) method. This method
	 * is called once at the beginning of the drag. It should populate the info object with data using
	 * the setData method. It accepts 2 arguments.
	 * 
	 * - The `type` is used to indicate to [targets](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) the type(s) of data being provided.
	 *   This allows the [target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) to decide whether it is able to interact with the source.
	 *   All types added are available in types.
	 * - The value can be a static value, or a function reference. In the latter case, the function is evaluated
	 *   when the data is requested.
	 * 
	 * The [Ext.drag.Info.getData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-getData) method may be called once the drop completes. The data for the relevant type
	 * is retrieved. All values from this method return a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) to allow for consistency when dealing
	 * with synchronous and asynchronous data.
	 * 
	 * ## Proxy
	 * 
	 * A [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) is an element that follows the mouse cursor during a drag. This may be the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element),
	 * a newly created element, or none at all (if the purpose is to just track the cursor).
	 * 
	 * See [for details](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.None.html).
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         proxy: {
	 *             type: 'placeholder',
	 *             getElement: function(info) {
	 *                 return Ext.getBody().createChild({
	 *                     cls: 'foo',
	 *                     html: info.eventTarget.innerHTML
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Handle
	 * 
	 * A [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle) is a CSS selector that allows certain child elements of the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element)
	 * to begin a drag. This is useful in 2 case:
	 * 
	 * - Where only a certain part of the element should trigger a drag, but the whole element should move.
	 * - When there are several repeated elements that may represent objects.
	 * 
	 * In the example below, each child element becomes draggable and
	 * the describe method is used to extract the id from the DOM element.
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         describe: function(info) {
	 *             info.setData('item', Ext.fly(info.eventTarget).getAttribute('data-id'));
	 *         }
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
		 * @param   {object}                                 members    The members to add to this class.
		 * @param   {boolean}                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Source;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Item;
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
		 * @param   {object}                                 members
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.drag.Source;
		addStatics? (members: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 name
		 * @param   {object}                                 member
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.drag.Source;
		addMember? (name: object, member: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 fn
		 * @param   {object}                                 scope
		 * @returns {Ext.drag.Source|Ext.drag.Item|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.drag.Source;
		onExtended? (fn: object, scope: object): typeof Ext.drag.Item;
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
declare namespace Ext.drag.Target {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html)
	 * A wrapper around a DOM element that allows it to receive drops.
	 * 
	 * ## Validity of drag operations
	 * 
	 * There are certain conditions that govern whether a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and a target can interact. By default (without configuration), all [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and targets can interact with each other, the conditions are evaluated in this order:
	 * 
	 * ### [Disabled State](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-isDisabled)
	 * 
	 * If the target is disabled, the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * cannot interact with it.
	 * 
	 * ### [Groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-groups)
	 * 
	 * Both the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and target can belong to multiple groups.
	 * They may interact if:
	 * 
	 * - Neither has a group
	 * - Both have one (or more) of the same group
	 * 
	 * ### [Accept](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-accepts)
	 * 
	 * This method is called each time a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) enters this
	 * target. If the method returns `false`, the drag is not considered valid.
	 * 
	 * ## Asynchronous drop processing
	 * 
	 *  When the drop completes, the [drop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#event-drop) event will fire, however the underlying data
	 * may not be ready to be consumed. By returning a [Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) from the data,
	 * it allows either:
	 * 
	 * - The data to be fetched (either from a remote source or generated if expensive).
	 * - Any validation to take place before the drop is finalized.
	 * 
	 * Once the promise is [resolved](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve) or [rejected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve),
	 * further processing can be completed.
	 * 
	 * Validation example:
	 * 
	 *     var confirmSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         describe: function(info) {
	 *             // Provide the data up front
	 *             info.setData('records', theRecords);
	 *         }
	 *     });  
	 *    
	 *     var confirmTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 Ext.MessageBox.confirm('Really', 'Are you sure?', function(btn) {
	 *                     if (btn === 'yes') {
	 *                         info.getData('records').then(function(data) {
	 *                             // Process the data
	 *                         });
	 *                     }
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * Remote data example:
	 * 
	 *     var fetchSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         // The resulting drag data will be a binary blob
	 *         // of image data, we don't want to fetch it up front, so
	 *         // pass a callback to be executed when data is requested.
	 *         describe: function(info) {
	 *             info.setData('image', function() {
	 *                 return Ext.Ajax.request({
	 *                     url: 'data.json'
	 *                     // some options
	 *                 }).then(function(result) {
	 *                     var imageData;
	 *                     // Do some post-processing
	 *                     return imageData;
	 *                 }, function() {
	 *                     return Ext.Promise.reject('Something went wrong!');
	 *                 });
	 *             });
	 *         }
	 *     });
	 *    
	 *     var fetchTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         accepts: function(info) {
	 *             return info.types.indexOf('image') &gt; -1;
	 *         },
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 info.getData('image').then(function() {
	 *                     // All good, show the image
	 *                 }, function() {
	 *                     // Handle failure case
	 *                 });
	 *             }
	 *         }
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
		 * @param   {object}                                 members    The members to add to this class.
		 * @param   {boolean}                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Target;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.drag.Item;
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
		 * @param   {object}                                 members
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.drag.Target;
		addStatics? (members: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 name
		 * @param   {object}                                 member
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.drag.Target;
		addMember? (name: object, member: object): typeof Ext.drag.Item;
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
		 * @param   {object}                                 fn
		 * @param   {object}                                 scope
		 * @returns {Ext.drag.Target|Ext.drag.Item|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.drag.Target;
		onExtended? (fn: object, scope: object): typeof Ext.drag.Item;
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
declare namespace Ext.drag.Item.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.drag.Item.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#method-addListener)
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
declare namespace Ext.drag.Item.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.drag.Item.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#method-on)
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
declare namespace Ext.drag.Source.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.drag.Source.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#method-addListener)
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
declare namespace Ext.drag.Source.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.drag.Source.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#method-on)
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
declare namespace Ext.drag.Target.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.drag.Target.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-addListener)
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
declare namespace Ext.drag.Target.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.drag.Target.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-on)
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
declare namespace Ext.drag.Constraint {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.drag.Constraint](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html)
	 * Provides constraining behavior for a [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The element to constrain to:
		 * 
		 * - `true` to constrain to the parent of the [Ext.drag.Source.element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element).
		 * - The id, DOM element or [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) to constrain to.
		 * @configuration
		 * @optional
		 * @type {boolean|string|HTMLElement|Ext.dom.Element}
		 */
		element?: boolean | string | HTMLElement | Ext.dom.Element;
		/** 
		 * `true` to limit dragging to the horizontal axis.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		horizontal?: boolean;
		/** 
		 * The region to constrain to.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Region}
		 */
		region?: Ext.util.Region;
		/** 
		 * The interval to move this drag target during a drag in both dimensions.
		 * 
		 * - `{x: 30}`, snap only x
		 * - `{y: 30}`, snap only y
		 * - `{x: 30, y: 40}`, snap both
		 * - `40`, snap both to `40`.
		 * 
		 * The snap may also be a function to calculate the snap value on each tick.
		 * 
		 *     snap: {
		 *         x: function(info, x) {
		 *             return x &lt; 300 ? 150 : 500;
		 *         }
		 *     }
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		snap?: number | object;
		/** 
		 * The [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) for the constraint. This will be
		 * set automatically when constructed via the source.
		 * @configuration
		 * @optional
		 * @type {Ext.drag.Source}
		 */
		source?: Ext.drag.Source;
		/** 
		 * `true` to limit dragging to the vertical axis.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		vertical?: boolean;
		/** 
		 * The minimum and maximum x position. Use `null` to
		 * not set a constraint:
		 * 
		 * - `[100, null]`, constrain only the minimum
		 * - `[null, 100]`, constrain only the maximum
		 * - `[200, 200]`, constrain both.
		 * @configuration
		 * @optional
		 * @type {number[]}
		 */
		x?: number[];
		/** 
		 * The minimum and maximum y position. Use `null` to
		 * not set a constraint:
		 * 
		 * - `[100, null]`, constrain only the minimum
		 * - `[null, 100]`, constrain only the maximum
		 * - `[200, 200]`, constrain both.
		 * @configuration
		 * @optional
		 * @type {number[]}
		 */
		y?: number[];
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
		 * @param   {object}                      config
		 * @returns {Ext.drag.Constraint.Statics}        this
		 */
		initConfig? (config: object): Ext.drag.Constraint.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                      [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Constraint.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Constraint.Statics;
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
		 * @returns {Ext.drag.Constraint.Statics}  
		 */
		statics? (): Ext.drag.Constraint.Statics;
	}
}
declare namespace Ext.drag.Item {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.drag.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html)
	 * A base class for draggable and droppable items that wrap a DOM element.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * `true` to destroy the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element) when this item is destroyed.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * The id, dom or Element reference for this item.
		 * @configuration
		 * @optional
		 * @type {string|HTMLElement|Ext.dom.Element}
		 */
		element?: string | HTMLElement | Ext.dom.Element;
		/** 
		 * A group controls which [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) targets
		 * can interact with each other. Only items that have the same (or intersecting) groups will
		 * react to each other. Items with no groups will be in the default pool.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		groups?: string | string[];
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
		 * @param   {object}                config
		 * @returns {Ext.drag.Item.Statics}        this
		 */
		initConfig? (config: object): Ext.drag.Item.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Item.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Item.Statics;
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
		 * @returns {Ext.drag.Item.Statics}  
		 */
		statics? (): Ext.drag.Item.Statics;
	}
}
declare namespace Ext.drag.Source {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * A wrapper around a DOM element that allows it to be dragged.
	 * 
	 * ## Constraining
	 * 
	 * The [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain) config gives various options for limiting drag, for example:
	 * 
	 * - Vertical or horizontal only
	 * - Minimum/maximum x/y values.
	 * - Snap to grid
	 * - Constrain to an element or region.
	 * 
	 * See Ext.drag.Constrain for detailed options.
	 * 
	 *     new Ext.drag.Source({
	 *         element: dragEl,
	 *         constrain: {
	 *             // Drag only vertically in 30px increments
	 *             vertical: true,
	 *             snap: {
	 *                 y: 30
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Data
	 * 
	 * Data representing the underlying drag is driven by the [describe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-describe) method. This method
	 * is called once at the beginning of the drag. It should populate the info object with data using
	 * the setData method. It accepts 2 arguments.
	 * 
	 * - The `type` is used to indicate to [targets](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) the type(s) of data being provided.
	 *   This allows the [target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) to decide whether it is able to interact with the source.
	 *   All types added are available in types.
	 * - The value can be a static value, or a function reference. In the latter case, the function is evaluated
	 *   when the data is requested.
	 * 
	 * The [Ext.drag.Info.getData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-getData) method may be called once the drop completes. The data for the relevant type
	 * is retrieved. All values from this method return a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) to allow for consistency when dealing
	 * with synchronous and asynchronous data.
	 * 
	 * ## Proxy
	 * 
	 * A [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) is an element that follows the mouse cursor during a drag. This may be the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element),
	 * a newly created element, or none at all (if the purpose is to just track the cursor).
	 * 
	 * See [for details](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.None.html).
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         proxy: {
	 *             type: 'placeholder',
	 *             getElement: function(info) {
	 *                 return Ext.getBody().createChild({
	 *                     cls: 'foo',
	 *                     html: info.eventTarget.innerHTML
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Handle
	 * 
	 * A [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle) is a CSS selector that allows certain child elements of the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element)
	 * to begin a drag. This is useful in 2 case:
	 * 
	 * - Where only a certain part of the element should trigger a drag, but the whole element should move.
	 * - When there are several repeated elements that may represent objects.
	 * 
	 * In the example below, each child element becomes draggable and
	 * the describe method is used to extract the id from the DOM element.
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         describe: function(info) {
	 *             info.setData('item', Ext.fly(info.eventTarget).getAttribute('data-id'));
	 *         }
	 *     });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A css class to add to the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element) while dragging is
		 * active.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		activeCls?: string;
		/** 
		 * `true` to always begin a drag with longpress. `false` to
		 * never drag with longpress. If a string (or strings) are passed, it should
		 * correspond to the pointer event type that should initiate a a drag on
		 * longpress. See {@[Ext.event.Event.pointerType](https://docs.sencha.com/extjs/6.2.0/modern/Ext.event.Event.html#property-pointerType)} for available types.
		 * @configuration
		 * @optional
		 * @type {boolean|string|string[]}
		 */
		activeOnLongPress?: boolean | string | string[];
		/** 
		 * `true` to destroy the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element) when this item is destroyed.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * Adds constraining behavior for this drag source. See [Ext.drag.Constraint](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Constraint.html) for
		 * configuration options. As a shortcut, a [Region](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Region.html)
		 * or [Ext.dom.Element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.dom.Element.html) may be passed, which will be mapped to the
		 * appropriate configuration on the constraint.
		 * @configuration
		 * @optional
		 * @type {object|Ext.util.Region|Ext.dom.Element}
		 */
		constrain?: object | Ext.util.Region | Ext.dom.Element;
		/** 
		 * See [describe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#method-describe).
		 * @configuration
		 * @optional
		 */
		describe?: ExtGlobalFunction;
		/** 
		 * The id, dom or Element reference for this item.
		 * @configuration
		 * @optional
		 * @type {string|HTMLElement|Ext.dom.Element}
		 */
		element?: string | HTMLElement | Ext.dom.Element;
		/** 
		 * A group controls which [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) targets
		 * can interact with each other. Only items that have the same (or intersecting) groups will
		 * react to each other. Items with no groups will be in the default pool.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		groups?: string | string[];
		/** 
		 * A CSS selector to identify child elements of the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element) that will cause
		 * a drag to be activated. If this is not specified, the entire [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element) will
		 * be draggable.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		handle?: string;
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
		 * {String/Object/Ext.drag.proxy.Base} proxy
		 * The proxy to show while this element is dragging. This may be
		 * the alias, a config, or instance of a proxy.
		 * 
		 * See [None](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.None.html), [Original](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.Original.html),
		 * Status.
		 * @configuration
		 * @optional
		 * @default 'original'
		 * @type {string}
		 */
		proxy?: string;
		/** 
		 * `true` (or an animation configuration) to animate the [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) (which may be
		 * the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element)) back to the original position after drag.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean|object}
		 */
		revert?: boolean | object;
		/** 
		 * Called before a drag starts. Return `false` to veto the drag.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.data.Info} The drag info.
		 * @returns {boolean}           `false` to veto the drag.
		 */
		beforeDragStart? (The: Ext.data.Info): boolean;
		/** 
		 * Called when a drag is cancelled.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragCancel? (): void;
		/** 
		 * Called when a drag ends.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragEnd? (): void;
		/** 
		 * Called for each move in a drag.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragMove? (): void;
		/** 
		 * Called when a drag starts.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onDragStart? (): void;
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
		 * @returns {Ext.drag.Source.Statics}        this
		 */
		initConfig? (config: object): Ext.drag.Source.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                  [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Source.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Source.Statics;
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
		 * @returns {Ext.drag.Source.Statics}  
		 */
		statics? (): Ext.drag.Source.Statics;
	}
}
declare namespace Ext.drag.Target {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html)
	 * A wrapper around a DOM element that allows it to receive drops.
	 * 
	 * ## Validity of drag operations
	 * 
	 * There are certain conditions that govern whether a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and a target can interact. By default (without configuration), all [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and targets can interact with each other, the conditions are evaluated in this order:
	 * 
	 * ### [Disabled State](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-isDisabled)
	 * 
	 * If the target is disabled, the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * cannot interact with it.
	 * 
	 * ### [Groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-groups)
	 * 
	 * Both the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and target can belong to multiple groups.
	 * They may interact if:
	 * 
	 * - Neither has a group
	 * - Both have one (or more) of the same group
	 * 
	 * ### [Accept](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-accepts)
	 * 
	 * This method is called each time a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) enters this
	 * target. If the method returns `false`, the drag is not considered valid.
	 * 
	 * ## Asynchronous drop processing
	 * 
	 *  When the drop completes, the [drop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#event-drop) event will fire, however the underlying data
	 * may not be ready to be consumed. By returning a [Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) from the data,
	 * it allows either:
	 * 
	 * - The data to be fetched (either from a remote source or generated if expensive).
	 * - Any validation to take place before the drop is finalized.
	 * 
	 * Once the promise is [resolved](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve) or [rejected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve),
	 * further processing can be completed.
	 * 
	 * Validation example:
	 * 
	 *     var confirmSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         describe: function(info) {
	 *             // Provide the data up front
	 *             info.setData('records', theRecords);
	 *         }
	 *     });  
	 *    
	 *     var confirmTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 Ext.MessageBox.confirm('Really', 'Are you sure?', function(btn) {
	 *                     if (btn === 'yes') {
	 *                         info.getData('records').then(function(data) {
	 *                             // Process the data
	 *                         });
	 *                     }
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * Remote data example:
	 * 
	 *     var fetchSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         // The resulting drag data will be a binary blob
	 *         // of image data, we don't want to fetch it up front, so
	 *         // pass a callback to be executed when data is requested.
	 *         describe: function(info) {
	 *             info.setData('image', function() {
	 *                 return Ext.Ajax.request({
	 *                     url: 'data.json'
	 *                     // some options
	 *                 }).then(function(result) {
	 *                     var imageData;
	 *                     // Do some post-processing
	 *                     return imageData;
	 *                 }, function() {
	 *                     return Ext.Promise.reject('Something went wrong!');
	 *                 });
	 *             });
	 *         }
	 *     });
	 *    
	 *     var fetchTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         accepts: function(info) {
	 *             return info.types.indexOf('image') &gt; -1;
	 *         },
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 info.getData('image').then(function() {
	 *                     // All good, show the image
	 *                 }, function() {
	 *                     // Handle failure case
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * See [accepts](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-accepts).
		 * @configuration
		 * @optional
		 */
		accepts?: ExtGlobalFunction;
		/** 
		 * `true` to destroy the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Item.html#cfg-element) when this item is destroyed.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * The id, dom or Element reference for this item.
		 * @configuration
		 * @optional
		 * @type {string|HTMLElement|Ext.dom.Element}
		 */
		element?: string | HTMLElement | Ext.dom.Element;
		/** 
		 * A group controls which [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) targets
		 * can interact with each other. Only items that have the same (or intersecting) groups will
		 * react to each other. Items with no groups will be in the default pool.
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		groups?: string | string[];
		/** 
		 * A class to add to the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-element) when an
		 * invalid drag is over this target.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		invalidCls?: string;
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
		 * Called before a drag finishes on this target. Return `false` to veto
		 * the drop.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {boolean}            `false` to veto the drop.
		 */
		beforeDrop? (info: Ext.drag.Info): boolean;
		/** 
		 * Called when a drag enters this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDragEnter? (info: Ext.drag.Info): void;
		/** 
		 * Called when a source leaves this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDragLeave? (info: Ext.drag.Info): void;
		/** 
		 * Called when a drag is moved while inside this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDragMove? (info: Ext.drag.Info): void;
		/** 
		 * Called when a drag is dropped on this target.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.drag.Info} info The drag info.
		 * @returns {void}               
		 */
		onDrop? (info: Ext.drag.Info): void;
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
		 * @returns {Ext.drag.Target.Statics}        this
		 */
		initConfig? (config: object): Ext.drag.Target.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                  [value] The value to set for the name parameter.
		 * @returns {Ext.drag.Target.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.drag.Target.Statics;
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
		 * @returns {Ext.drag.Target.Statics}  
		 */
		statics? (): Ext.drag.Target.Statics;
	}
}
declare namespace Ext.drag.Source {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.drag.Source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * A wrapper around a DOM element that allows it to be dragged.
	 * 
	 * ## Constraining
	 * 
	 * The [constrain](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-constrain) config gives various options for limiting drag, for example:
	 * 
	 * - Vertical or horizontal only
	 * - Minimum/maximum x/y values.
	 * - Snap to grid
	 * - Constrain to an element or region.
	 * 
	 * See Ext.drag.Constrain for detailed options.
	 * 
	 *     new Ext.drag.Source({
	 *         element: dragEl,
	 *         constrain: {
	 *             // Drag only vertically in 30px increments
	 *             vertical: true,
	 *             snap: {
	 *                 y: 30
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Data
	 * 
	 * Data representing the underlying drag is driven by the [describe](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-describe) method. This method
	 * is called once at the beginning of the drag. It should populate the info object with data using
	 * the setData method. It accepts 2 arguments.
	 * 
	 * - The `type` is used to indicate to [targets](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) the type(s) of data being provided.
	 *   This allows the [target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html) to decide whether it is able to interact with the source.
	 *   All types added are available in types.
	 * - The value can be a static value, or a function reference. In the latter case, the function is evaluated
	 *   when the data is requested.
	 * 
	 * The [Ext.drag.Info.getData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Info.html#method-getData) method may be called once the drop completes. The data for the relevant type
	 * is retrieved. All values from this method return a [Ext.Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) to allow for consistency when dealing
	 * with synchronous and asynchronous data.
	 * 
	 * ## Proxy
	 * 
	 * A [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-proxy) is an element that follows the mouse cursor during a drag. This may be the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element),
	 * a newly created element, or none at all (if the purpose is to just track the cursor).
	 * 
	 * See [for details](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.proxy.None.html).
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         proxy: {
	 *             type: 'placeholder',
	 *             getElement: function(info) {
	 *                 return Ext.getBody().createChild({
	 *                     cls: 'foo',
	 *                     html: info.eventTarget.innerHTML
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * ## Handle
	 * 
	 * A [handle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-handle) is a CSS selector that allows certain child elements of the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html#cfg-element)
	 * to begin a drag. This is useful in 2 case:
	 * 
	 * - Where only a certain part of the element should trigger a drag, but the whole element should move.
	 * - When there are several repeated elements that may represent objects.
	 * 
	 * In the example below, each child element becomes draggable and
	 * the describe method is used to extract the id from the DOM element.
	 * 
	 *     var data = [{
	 *         id: 1,
	 *         name: 'Adam'
	 *     }, {
	 *         id: 2,
	 *         name: 'Barbara'
	 *     }, {
	 *         id: 3,
	 *         name: 'Charlie'
	 *     }];
	 *    
	 *     var tpl = new Ext.XTemplate(
	 *         '&lt;div class="container"&gt;',
	 *             '&lt;tpl for="."&gt;',
	 *                 '&lt;div class="child" data-id="{id}"&gt;{name}&lt;/div&gt;',
	 *             '&lt;/tpl&gt;',
	 *         '&lt;/div&gt;'
	 *     );
	 *    
	 *     var el = tpl.append(Ext.getBody(), data);
	 *    
	 *     new Ext.drag.Source({
	 *         element: el,
	 *         handle: '.child',
	 *         describe: function(info) {
	 *             info.setData('item', Ext.fly(info.eventTarget).getAttribute('data-id'));
	 *         }
	 *     });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires before drag starts on this source. Return `false` to cancel the drag.
		 * @event
		 * @param   {Ext.drag.Source} _this This source.
		 * @param   {Ext.drag.Info}   The   drag info.
		 * @param   {Ext.event.Event} event The event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		beforedragstart? (_this: Ext.drag.Source, The: Ext.drag.Info, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires when a drag is cancelled.
		 * @event
		 * @param   {Ext.drag.Source} _this This source.
		 * @param   {Ext.drag.Info}   The   drag info.
		 * @param   {Ext.event.Event} event The event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragcancel? (_this: Ext.drag.Source, The: Ext.drag.Info, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires when the drag ends on this source.
		 * @event
		 * @param   {Ext.drag.Source} _this This source.
		 * @param   {Ext.drag.Info}   The   drag info.
		 * @param   {Ext.event.Event} event The event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragend? (_this: Ext.drag.Source, The: Ext.drag.Info, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires continuously as this source is dragged.
		 * @event
		 * @param   {Ext.drag.Source} _this This source.
		 * @param   {Ext.drag.Info}   The   drag info.
		 * @param   {Ext.event.Event} event The event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragmove? (_this: Ext.drag.Source, The: Ext.drag.Info, event: Ext.event.Event, eOpts: object): void;
		/** 
		 * Fires when the drag starts on this source.
		 * @event
		 * @param   {Ext.drag.Source} _this This source.
		 * @param   {Ext.drag.Info}   The   drag info.
		 * @param   {Ext.event.Event} event The event.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragstart? (_this: Ext.drag.Source, The: Ext.drag.Info, event: Ext.event.Event, eOpts: object): void;
	}
}
declare namespace Ext.drag.Target {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.drag.Target](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html)
	 * A wrapper around a DOM element that allows it to receive drops.
	 * 
	 * ## Validity of drag operations
	 * 
	 * There are certain conditions that govern whether a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and a target can interact. By default (without configuration), all [sources](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * and targets can interact with each other, the conditions are evaluated in this order:
	 * 
	 * ### [Disabled State](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#method-isDisabled)
	 * 
	 * If the target is disabled, the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html)
	 * cannot interact with it.
	 * 
	 * ### [Groups](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-groups)
	 * 
	 * Both the [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) and target can belong to multiple groups.
	 * They may interact if:
	 * 
	 * - Neither has a group
	 * - Both have one (or more) of the same group
	 * 
	 * ### [Accept](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#cfg-accepts)
	 * 
	 * This method is called each time a [source](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Source.html) enters this
	 * target. If the method returns `false`, the drag is not considered valid.
	 * 
	 * ## Asynchronous drop processing
	 * 
	 *  When the drop completes, the [drop](https://docs.sencha.com/extjs/6.2.0/modern/Ext.drag.Target.html#event-drop) event will fire, however the underlying data
	 * may not be ready to be consumed. By returning a [Promise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html) from the data,
	 * it allows either:
	 * 
	 * - The data to be fetched (either from a remote source or generated if expensive).
	 * - Any validation to take place before the drop is finalized.
	 * 
	 * Once the promise is [resolved](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve) or [rejected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Promise.html#static-method-resolve),
	 * further processing can be completed.
	 * 
	 * Validation example:
	 * 
	 *     var confirmSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         describe: function(info) {
	 *             // Provide the data up front
	 *             info.setData('records', theRecords);
	 *         }
	 *     });  
	 *    
	 *     var confirmTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 Ext.MessageBox.confirm('Really', 'Are you sure?', function(btn) {
	 *                     if (btn === 'yes') {
	 *                         info.getData('records').then(function(data) {
	 *                             // Process the data
	 *                         });
	 *                     }
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 * Remote data example:
	 * 
	 *     var fetchSource = new Ext.drag.Source({
	 *         element: dragEl,
	 *         // The resulting drag data will be a binary blob
	 *         // of image data, we don't want to fetch it up front, so
	 *         // pass a callback to be executed when data is requested.
	 *         describe: function(info) {
	 *             info.setData('image', function() {
	 *                 return Ext.Ajax.request({
	 *                     url: 'data.json'
	 *                     // some options
	 *                 }).then(function(result) {
	 *                     var imageData;
	 *                     // Do some post-processing
	 *                     return imageData;
	 *                 }, function() {
	 *                     return Ext.Promise.reject('Something went wrong!');
	 *                 });
	 *             });
	 *         }
	 *     });
	 *    
	 *     var fetchTarget = new Ext.drag.Target({
	 *         element: dropEl,
	 *         accepts: function(info) {
	 *             return info.types.indexOf('image') &gt; -1;
	 *         },
	 *         listeners: {
	 *             drop: function(target, info) {
	 *                 info.getData('image').then(function() {
	 *                     // All good, show the image
	 *                 }, function() {
	 *                     // Handle failure case
	 *                 });
	 *             }
	 *         }
	 *     });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires before a valid drop occurs. Return `false` to prevent the drop from
		 * completing.
		 * @event
		 * @param   {Ext.drag.Target} _this This target.
		 * @param   {Ext.drag.Info}   info  The drag info.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		beforedrop? (_this: Ext.drag.Target, info: Ext.drag.Info, eOpts: object): void;
		/** 
		 * Fires when a drag enters this target.
		 * @event
		 * @param   {Ext.drag.Target} _this This target.
		 * @param   {Ext.drag.Info}   info  The drag info.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragenter? (_this: Ext.drag.Target, info: Ext.drag.Info, eOpts: object): void;
		/** 
		 * Fires when a source leaves this target.
		 * @event
		 * @param   {Ext.drag.Target} _this This target.
		 * @param   {Ext.drag.Info}   info  The drag info.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragleave? (_this: Ext.drag.Target, info: Ext.drag.Info, eOpts: object): void;
		/** 
		 * Fires when a drag moves while inside this target.
		 * @event
		 * @param   {Ext.drag.Target} _this This target.
		 * @param   {Ext.drag.Info}   info  The drag info.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		dragmove? (_this: Ext.drag.Target, info: Ext.drag.Info, eOpts: object): void;
		/** 
		 * Fires when a valid drop occurs.
		 * @event
		 * @param   {Ext.drag.Target} _this This target.
		 * @param   {Ext.drag.Info}   info  The drag info.
		 * @param   {object}          eOpts The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}            
		 */
		drop? (_this: Ext.drag.Target, info: Ext.drag.Info, eOpts: object): void;
	}
}
