declare namespace Ext.app.bind {
	/** 
	 * This class manages bindings for a `Session` or `ViewModel`.
	 * @private (class)
	 */
	class AbstractStub extends Ext.util.Schedulable {}
	/** 
	 * This class is the base for `Binding` and `MultiBinding`.
	 * @private (class)
	 */
	class BaseBinding extends Ext.util.Schedulable {}
	/** 
	 * [Ext.app.bind.Binding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Binding.html)
	 * This class is created to manage a direct bind.  [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) returns this from
	 * its [bind](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) method.
	 */
	class Binding extends Ext.app.bind.BaseBinding {
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
		 * @type {Ext.app.bind.Binding.Statics}
		 */
		self?: Ext.app.bind.Binding.Statics | Ext.app.bind.BaseBinding.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                                                      members    The members to add to this class.
		 * @param   {boolean}                                                                     [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                     [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Binding;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                      members
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.app.bind.Binding;
		static addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		static addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                      name
		 * @param   {object}                                                                      member
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.app.bind.Binding;
		static addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		static addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                      fn
		 * @param   {object}                                                                      scope
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.Binding;
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
		 */
		constructor ();
		/** 
		 * Binds to the `validation` association for the bound property. For example, when a
		 * binding is bound to something like this:
		 * 
		 *     var binding = viewModel.bind('{theUser.name}', ...);
		 * 
		 * The validation status for the "name" property can be requested like so:
		 * 
		 *     var validationBinding = binding.bindValidation(fn, scope);
		 * 
		 * Calling this method in the above example would be equivalent to the following bind:
		 * 
		 *     var validationBinding = viewModel.bind('{theUser.validation.name}', fn, scope);
		 * 
		 * The primary reason to use this method is in cases where the original bind expression
		 * is not known.
		 * 
		 * For example, this method is used by [`Ext.form.field.Base`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html) when given the
		 * [`modelValidation`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-modelValidation) config is set. As such it
		 * not common for users to need to call this method.
		 * @method
		 * @public (method)
		 * @param   {Function}             callback The function to call when the validation changes.
		 * @param   {object}               [scope]  The scope on which to call the `callback`.
		 * @returns {Ext.app.bind.Binding}          A binding to the validation of the bound property.
		 */
		bindValidation? (callback: ExtGlobalFunction, scope?: object): Ext.app.bind.Binding;
		/** 
		 * Destroys this binding. No further calls will be made to the callback method. No
		 * methods should be called on this binding after calling this method.
		 * @method
		 * @public (method)
		 * @param   {object} fromParent
		 * @returns {void}              
		 */
		destroy? (fromParent: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.app.bind.BaseBinding.destroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.BaseBinding.html#method-destroy).
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.BaseBinding.html#property-clearPropertiesOnDestroy)
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
		 * Returns the diagnostic name for this binding.
		 * @method
		 * @public (method)
		 * @returns {string|void}  
		 */
		getFullName? (): string;
		getFullName? (): void;
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
		 * This method returns the `Scheduler` for this item.
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Scheduler}  
		 */
		getScheduler? (): Ext.util.Scheduler;
		/** 
		 * Returns the current value of the bound property. If this binding `isLoading` this
		 * value will be `undefined`.
		 * @method
		 * @public (method)
		 * @returns {any}  The value of the bound property.
		 */
		getValue? (): any;
		/** 
		 * Returns `true` if the bound property is loading. In the general case this means
		 * that the value is just not available yet. In specific cases, when the bound property
		 * is an [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html) it means that a request to the server is in progress to get
		 * the record. For an [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Store.html) it means that
		 * [`load`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Store.html#method-load) has been called on the store but it is
		 * still in progress.
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		isLoading? (): boolean;
		/** 
		 * This method returns `true` if this binding can only be read. If this method returns
		 * `false` then the binding can be set using `setValue` (meaning this binding can be
		 * a two-way binding).
		 * @method
		 * @public (method)
		 * @returns {boolean|void}  
		 */
		isReadOnly? (): boolean;
		isReadOnly? (): void;
		/** 
		 * Tells the bound property to refresh itself. This has meaning when the bound property
		 * is something like an [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html) and an [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Store.html) but does nothing in
		 * most cases.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		refresh? (): void;
		/** 
		 * Schedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		schedule? (): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                      [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Binding;
		setConfig? (name: string | object, value?: object): Ext.app.bind.BaseBinding;
		setConfig? (name: string | object, value?: object): Ext.util.Schedulable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of the bound property. This will throw an error in debug mode if
		 * this binding `isReadOnly`.
		 * @method
		 * @public (method)
		 * @param   {any}  value The new value.
		 * @returns {void}       
		 */
		setValue? (value: any): void;
		/** 
		 * This method should be overridden by items that have dependencies to insert. The
		 * standard form would be:
		 * 
		 *     sort: function () {
		 *         this.getScheduler().sortItems(this.dependencies);
		 *     }
		 * 
		 * This example assumes the item has a "dependencies" array to pass to the scheduler.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		sort? (): void;
		/** 
		 * Unschedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		unschedule? (): void;
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
		 * @param   {object}                                                                      config
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.app.bind.Binding;
		initConfig? (config: object): Ext.app.bind.BaseBinding;
		initConfig? (config: object): Ext.util.Schedulable;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.app.bind.Binding.Statics|Ext.app.bind.BaseBinding.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.app.bind.Binding.Statics;
		statics? (): Ext.app.bind.BaseBinding.Statics;
		statics? (): Ext.util.Schedulable.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                    names The names of the linked objects to destroy.
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.app.bind.Binding;
		unlink? (names: string[]): Ext.app.bind.BaseBinding;
		unlink? (names: string[]): Ext.util.Schedulable;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.app.bind.Formula](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Formula.html)
	 * This class manages a formula defined for an [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html).
	 * 
	 * ## Formula Basics
	 * 
	 * Formulas in a `ViewModel` can be defined as simply as just a function:
	 * 
	 *     formulas: {
	 *         xy: function (get) { return get('x') * get('y'); }
	 *     }
	 * 
	 * When you need to be more explicit, "xy" can become an object. The following means the
	 * same thing as above:
	 * 
	 *     formulas: {
	 *         xy: {
	 *             get: function (get) { return get('x') * get('y'); }
	 *         }
	 *     }
	 * 
	 * ### Data Dependencies
	 * 
	 * One of the important aspects of a `ViewModel` is notification of change. In order to
	 * manage this, a `ViewModel` _must_ know the dependencies between data. In the above case
	 * this is accomplished by **parsing the text of the function**. While this is convenient
	 * and reduces the maintenance/risk that would come from explicitly listing dependencies
	 * separately, there are some rules to be aware of:
	 * 
	 * - All dependencies are resolved by matching the binding statements in the getter function.
	 * - If you need to use these values in other ways, cache them as a `var` (following
	 *   the first rule to capture the value) and use that `var`.
	 * 
	 * In the above formulas, the "xy" formula depends on "x" and "y" in the `ViewModel`. As
	 * these values change, the formula is called to produce the correct value for "xy". This
	 * in turn can be used by other formulas. For example:
	 * 
	 *     formulas: {
	 *         xy: function (get) {  // "get" is arbitrary but a good convention
	 *             return get('x') * get('y');
	 *         },
	 *    
	 *         xyz: function (get) {
	 *             return get('xy') * get('z');
	 *         }
	 *     }
	 * 
	 * In the above, "xyz" depends on "xy" and "z" values in the `ViewModel`.
	 * 
	 * ### The Getter Method
	 * 
	 * The argument passed to the formula is a function that allows you to retrieve
	 * the matched bind statements.
	 * 
	 *     formulas: {
	 *         foo: function (get) {
	 *             return get('theUser.address.city');
	 *         }
	 *     }
	 * 
	 * In the above, the dependency is resolved to `theUser.address.city`. The formula will not
	 * be triggered until the value for `city` is present.
	 * 
	 * ### Capturing Values
	 * 
	 * If values need to be used repeatedly, you can use a `var` as long as the Rules are not
	 * broken.
	 * 
	 *     formulas: {
	 *         x2y2: function (get) {
	 *             // These are still "visible" as "get('x')" and "get('y')" so this is OK:
	 *             var x = get('x'),
	 *                 y = get('y');
	 *    
	 *             return x * x * y * y;
	 *         }
	 *     }
	 * 
	 * ## Explicit Binding
	 * 
	 * While function parsing is convenient, there are times it is not the best solution. In
	 * these cases, an explicit `bind` can be given. To revisit the previous example with an
	 * explicit binding:
	 * 
	 *     formulas: {
	 *         zip: {
	 *             bind: '{foo.bar.zip}',
	 *    
	 *             get: function (zip) {
	 *                 // NOTE: the only thing we get is what our bind produces.
	 *                 return zip * 2;
	 *             }
	 *         }
	 *     }
	 * 
	 * In this case we have given the formula an explicit `bind` value so it will no longer
	 * parse the `get` function. Instead, it will call [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) with
	 * the value of the `bind` property and pass the produced value to `get` whenever it
	 * changes.
	 * 
	 * ## Settable Formulas
	 * 
	 * When a formula is "reversible" it can be given a `set` method to allow it to participate
	 * in two-way binding. For example:
	 * 
	 *     formulas: {
	 *            fullName: {
	 *                get: function (get) {
	 *                    var ret = get('firstName') || '';
	 *    
	 *                    if (get('lastName')) {
	 *                        ret += ' ' +  get('lastName');
	 *                    }
	 *    
	 *                    return ret;
	 *                },
	 *    
	 *                set: function (value) {
	 *                    var space = value.indexOf(' '),
	 *                        split = (space &lt; 0) ? value.length : space;
	 *    
	 *                    this.set({
	 *                        firstName: value.substring(0, split),
	 *                        lastName: value.substring(split + 1)
	 *                    });
	 *                }
	 *            }
	 *        }
	 * 
	 * When the `set` method is called the `this` reference is the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) so it
	 * just calls its [`set method`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-set).
	 * 
	 * ## Single Run Formulas
	 * 
	 * If a formula only needs to produce an initial value, it can be marked as `single`.
	 * 
	 *     formulas: {
	 *         xy: {
	 *             single: true,
	 *    
	 *             get: function (get) {
	 *                 return get('x') * get('y');
	 *             }
	 *         }
	 *     }
	 * 
	 * This formulas `get` method will be called with `x` and `y` once and then its binding
	 * to these properties will be destroyed. This means the `get` method (and hence the value
	 * of `xy`) will only be executed/calculated once.
	 */
	class Formula extends Ext.util.Schedulable {
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
		 * @type {Ext.app.bind.Formula.Statics}
		 */
		self?: Ext.app.bind.Formula.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                             members    The members to add to this class.
		 * @param   {boolean}                                            [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                            [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Formula;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                             members
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.app.bind.Formula;
		static addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                             name
		 * @param   {object}                                             member
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.app.bind.Formula;
		static addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                             fn
		 * @param   {object}                                             scope
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.Formula;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
		 * @param   {object} stub
		 * @param   {object} formula
		 */
		constructor (stub: object, formula: object);
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.util.Schedulable.constructor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Schedulable.html#method-constructor).
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Formula.html#property-clearPropertiesOnDestroy)
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
		 * This method returns the `Scheduler` for this item.
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Scheduler}  
		 */
		getScheduler? (): Ext.util.Scheduler;
		/** 
		 * Schedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		schedule? (): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                      name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                             [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Formula;
		setConfig? (name: string | object, value?: object): Ext.util.Schedulable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * This method should be overridden by items that have dependencies to insert. The
		 * standard form would be:
		 * 
		 *     sort: function () {
		 *         this.getScheduler().sortItems(this.dependencies);
		 *     }
		 * 
		 * This example assumes the item has a "dependencies" array to pass to the scheduler.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		sort? (): void;
		/** 
		 * Unschedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		unschedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFullName? (): void;
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
		 * @param   {object}                                             config
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.app.bind.Formula;
		initConfig? (config: object): Ext.util.Schedulable;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.app.bind.Formula.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.app.bind.Formula.Statics;
		statics? (): Ext.util.Schedulable.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                           names The names of the linked objects to destroy.
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.app.bind.Formula;
		unlink? (names: string[]): Ext.util.Schedulable;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * This class manages stubs associated with `link` requests. These bind to some other
	 * descriptor and forward changes from there.
	 * @private (class)
	 */
	class LinkStub extends Ext.app.bind.Stub {}
	/** 
	 * [Ext.app.bind.Multi](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Multi.html)
	 * This class is created to manage a multi-bind against a `ViewModel`.
	 */
	class Multi extends Ext.app.bind.BaseBinding {
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
		 * @type {Ext.app.bind.Multi.Statics}
		 */
		self?: Ext.app.bind.Multi.Statics | Ext.app.bind.BaseBinding.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                                                    members    The members to add to this class.
		 * @param   {boolean}                                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Multi;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    members
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.app.bind.Multi;
		static addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		static addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    name
		 * @param   {object}                                                                    member
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.app.bind.Multi;
		static addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		static addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    fn
		 * @param   {object}                                                                    scope
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.Multi;
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
		 */
		constructor ();
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Multi.html#property-clearPropertiesOnDestroy)
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
		 * This method returns the `Scheduler` for this item.
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Scheduler}  
		 */
		getScheduler? (): Ext.util.Scheduler;
		/** 
		 * Schedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		schedule? (): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                    [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Multi;
		setConfig? (name: string | object, value?: object): Ext.app.bind.BaseBinding;
		setConfig? (name: string | object, value?: object): Ext.util.Schedulable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * This method should be overridden by items that have dependencies to insert. The
		 * standard form would be:
		 * 
		 *     sort: function () {
		 *         this.getScheduler().sortItems(this.dependencies);
		 *     }
		 * 
		 * This example assumes the item has a "dependencies" array to pass to the scheduler.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		sort? (): void;
		/** 
		 * Unschedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		unschedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFullName? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isReadOnly? (): void;
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
		 * @param   {object}                                                                    config
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.app.bind.Multi;
		initConfig? (config: object): Ext.app.bind.BaseBinding;
		initConfig? (config: object): Ext.util.Schedulable;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.app.bind.Multi.Statics|Ext.app.bind.BaseBinding.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.app.bind.Multi.Statics;
		statics? (): Ext.app.bind.BaseBinding.Statics;
		statics? (): Ext.util.Schedulable.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                  names The names of the linked objects to destroy.
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.app.bind.Multi;
		unlink? (names: string[]): Ext.app.bind.BaseBinding;
		unlink? (names: string[]): Ext.util.Schedulable;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * This class parses bind template format expressions.
	 * @private (class)
	 */
	class Parser extends Ext.parse.Parser {}
	/** 
	 * This class is the root stub for managing a `ViewModel`.
	 * @private (class)
	 */
	class RootStub extends Ext.app.bind.AbstractStub {}
	/** 
	 * This class and its derived classes are used to manage access to the properties of an
	 * object stored in a `Session`.
	 * @private (class)
	 */
	class Stub extends Ext.app.bind.AbstractStub {}
	/** 
	 * This class holds the parsed text for a bind template. The syntax is that of a normal
	 * [`Ext.Template`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Template.html) except that substitution tokens can contain dots to reference property
	 * names.
	 * 
	 * The template is parsed and stored in a representation like this:
	 * 
	 *     me.text = 'Hey {foo.bar}! Test {bar} and {foo.bar} with {abc} over {bar:number}'
	 *    
	 *     me.tokens = [ 'foo.bar', 'bar', 'abc' ]
	 *    
	 *     me.buffer = [           me.slots = [
	 *         'Hey ',                 undefined,
	 *         undefined,              { token: 'foo.bar', pos: 0 },
	 *         '! Test ',              undefined,
	 *         undefined,              { token: 'bar', pos: 1 },
	 *         ' and ',                undefined,
	 *         undefined,              { token: 'foo.bar', pos: 0 },
	 *         ' with ',               undefined,
	 *         undefined,              { token: 'abc', pos: 2 },
	 *         ' over ',               undefined,
	 *         undefined               { token: 'bar', fmt: 'number', pos: 1 }
	 *     ]                       ]
	 * 
	 * @private (class)
	 */
	class Template extends Ext.Base {}
	/** 
	 * [Ext.app.bind.TemplateBinding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.TemplateBinding.html)
	 * This class is created to manage a template against a `ViewModel`. A binding of this
	 * type uses [`Ext.app.bind.Template`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Template.html) to process the template text so see that
	 * class for details on template syntax.
	 * 
	 * The bindings to provide the data needed by the template are managed here.
	 */
	class TemplateBinding extends Ext.app.bind.BaseBinding {
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
		 * @type {Ext.app.bind.TemplateBinding.Statics}
		 */
		self?: Ext.app.bind.TemplateBinding.Statics | Ext.app.bind.BaseBinding.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                                                              members    The members to add to this class.
		 * @param   {boolean}                                                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.TemplateBinding;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                              members
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.app.bind.TemplateBinding;
		static addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		static addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                              name
		 * @param   {object}                                                                              member
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.app.bind.TemplateBinding;
		static addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		static addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                              fn
		 * @param   {object}                                                                              scope
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.TemplateBinding;
		static onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		static onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
		 * @param   {object} template
		 * @param   {object} owner
		 * @param   {object} callback
		 * @param   {object} scope
		 * @param   {object} options
		 */
		constructor (template: object, owner: object, callback: object, scope: object, options: object);
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.util.Schedulable.constructor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Schedulable.html#method-constructor).
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further in any way, including
		 * access to its methods and properties.
		 * 
		 * To prevent potential memory leaks, all object references will be nulled
		 * at the end of destruction sequence, unless [clearPropertiesOnDestroy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.TemplateBinding.html#property-clearPropertiesOnDestroy)
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
		 * This method returns the `Scheduler` for this item.
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Scheduler}  
		 */
		getScheduler? (): Ext.util.Scheduler;
		/** 
		 * Schedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		schedule? (): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                              [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.TemplateBinding;
		setConfig? (name: string | object, value?: object): Ext.app.bind.BaseBinding;
		setConfig? (name: string | object, value?: object): Ext.util.Schedulable;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * This method should be overridden by items that have dependencies to insert. The
		 * standard form would be:
		 * 
		 *     sort: function () {
		 *         this.getScheduler().sortItems(this.dependencies);
		 *     }
		 * 
		 * This example assumes the item has a "dependencies" array to pass to the scheduler.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		sort? (): void;
		/** 
		 * Unschedules this item with the associated [`Ext.util.Scheduler`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Scheduler.html).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		unschedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFullName? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isReadOnly? (): void;
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
		 * @param   {object}                                                                              config
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.app.bind.TemplateBinding;
		initConfig? (config: object): Ext.app.bind.BaseBinding;
		initConfig? (config: object): Ext.util.Schedulable;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.app.bind.TemplateBinding.Statics|Ext.app.bind.BaseBinding.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.app.bind.TemplateBinding.Statics;
		statics? (): Ext.app.bind.BaseBinding.Statics;
		statics? (): Ext.util.Schedulable.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                            names The names of the linked objects to destroy.
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.app.bind.TemplateBinding;
		unlink? (names: string[]): Ext.app.bind.BaseBinding;
		unlink? (names: string[]): Ext.util.Schedulable;
		unlink? (names: string[]): Ext.Base;
	}
}
declare namespace Ext.app.bind.Binding {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.app.bind.Binding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Binding.html)
	 * This class is created to manage a direct bind.  [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) returns this from
	 * its [bind](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) method.
	 */
	interface Def extends Ext.app.bind.Binding {
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
		 * @type {Ext.app.bind.Binding.Cfg}
		 */
		config?: Ext.app.bind.Binding.Cfg;
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
		 * @returns {Ext.app.bind.Binding.Statics|Ext.app.bind.BaseBinding.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 * @type {Ext.app.bind.Binding.Statics}
		 */
		statics?: (() => Ext.app.bind.Binding.Statics | Ext.app.bind.BaseBinding.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics) | Ext.app.bind.Binding.Statics | any;
	}
}
declare namespace Ext.app.bind.Formula {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.app.bind.Formula](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Formula.html)
	 * This class manages a formula defined for an [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html).
	 * 
	 * ## Formula Basics
	 * 
	 * Formulas in a `ViewModel` can be defined as simply as just a function:
	 * 
	 *     formulas: {
	 *         xy: function (get) { return get('x') * get('y'); }
	 *     }
	 * 
	 * When you need to be more explicit, "xy" can become an object. The following means the
	 * same thing as above:
	 * 
	 *     formulas: {
	 *         xy: {
	 *             get: function (get) { return get('x') * get('y'); }
	 *         }
	 *     }
	 * 
	 * ### Data Dependencies
	 * 
	 * One of the important aspects of a `ViewModel` is notification of change. In order to
	 * manage this, a `ViewModel` _must_ know the dependencies between data. In the above case
	 * this is accomplished by **parsing the text of the function**. While this is convenient
	 * and reduces the maintenance/risk that would come from explicitly listing dependencies
	 * separately, there are some rules to be aware of:
	 * 
	 * - All dependencies are resolved by matching the binding statements in the getter function.
	 * - If you need to use these values in other ways, cache them as a `var` (following
	 *   the first rule to capture the value) and use that `var`.
	 * 
	 * In the above formulas, the "xy" formula depends on "x" and "y" in the `ViewModel`. As
	 * these values change, the formula is called to produce the correct value for "xy". This
	 * in turn can be used by other formulas. For example:
	 * 
	 *     formulas: {
	 *         xy: function (get) {  // "get" is arbitrary but a good convention
	 *             return get('x') * get('y');
	 *         },
	 *    
	 *         xyz: function (get) {
	 *             return get('xy') * get('z');
	 *         }
	 *     }
	 * 
	 * In the above, "xyz" depends on "xy" and "z" values in the `ViewModel`.
	 * 
	 * ### The Getter Method
	 * 
	 * The argument passed to the formula is a function that allows you to retrieve
	 * the matched bind statements.
	 * 
	 *     formulas: {
	 *         foo: function (get) {
	 *             return get('theUser.address.city');
	 *         }
	 *     }
	 * 
	 * In the above, the dependency is resolved to `theUser.address.city`. The formula will not
	 * be triggered until the value for `city` is present.
	 * 
	 * ### Capturing Values
	 * 
	 * If values need to be used repeatedly, you can use a `var` as long as the Rules are not
	 * broken.
	 * 
	 *     formulas: {
	 *         x2y2: function (get) {
	 *             // These are still "visible" as "get('x')" and "get('y')" so this is OK:
	 *             var x = get('x'),
	 *                 y = get('y');
	 *    
	 *             return x * x * y * y;
	 *         }
	 *     }
	 * 
	 * ## Explicit Binding
	 * 
	 * While function parsing is convenient, there are times it is not the best solution. In
	 * these cases, an explicit `bind` can be given. To revisit the previous example with an
	 * explicit binding:
	 * 
	 *     formulas: {
	 *         zip: {
	 *             bind: '{foo.bar.zip}',
	 *    
	 *             get: function (zip) {
	 *                 // NOTE: the only thing we get is what our bind produces.
	 *                 return zip * 2;
	 *             }
	 *         }
	 *     }
	 * 
	 * In this case we have given the formula an explicit `bind` value so it will no longer
	 * parse the `get` function. Instead, it will call [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) with
	 * the value of the `bind` property and pass the produced value to `get` whenever it
	 * changes.
	 * 
	 * ## Settable Formulas
	 * 
	 * When a formula is "reversible" it can be given a `set` method to allow it to participate
	 * in two-way binding. For example:
	 * 
	 *     formulas: {
	 *            fullName: {
	 *                get: function (get) {
	 *                    var ret = get('firstName') || '';
	 *    
	 *                    if (get('lastName')) {
	 *                        ret += ' ' +  get('lastName');
	 *                    }
	 *    
	 *                    return ret;
	 *                },
	 *    
	 *                set: function (value) {
	 *                    var space = value.indexOf(' '),
	 *                        split = (space &lt; 0) ? value.length : space;
	 *    
	 *                    this.set({
	 *                        firstName: value.substring(0, split),
	 *                        lastName: value.substring(split + 1)
	 *                    });
	 *                }
	 *            }
	 *        }
	 * 
	 * When the `set` method is called the `this` reference is the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) so it
	 * just calls its [`set method`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-set).
	 * 
	 * ## Single Run Formulas
	 * 
	 * If a formula only needs to produce an initial value, it can be marked as `single`.
	 * 
	 *     formulas: {
	 *         xy: {
	 *             single: true,
	 *    
	 *             get: function (get) {
	 *                 return get('x') * get('y');
	 *             }
	 *         }
	 *     }
	 * 
	 * This formulas `get` method will be called with `x` and `y` once and then its binding
	 * to these properties will be destroyed. This means the `get` method (and hence the value
	 * of `xy`) will only be executed/calculated once.
	 */
	interface Def extends Ext.app.bind.Formula {
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
		 * @type {Ext.app.bind.Formula.Cfg}
		 */
		config?: Ext.app.bind.Formula.Cfg;
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
		 * @returns {Ext.app.bind.Formula.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 * @type {Ext.app.bind.Formula.Statics}
		 */
		statics?: (() => Ext.app.bind.Formula.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics) | Ext.app.bind.Formula.Statics | any;
	}
}
declare namespace Ext.app.bind.Multi {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.app.bind.Multi](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Multi.html)
	 * This class is created to manage a multi-bind against a `ViewModel`.
	 */
	interface Def extends Ext.app.bind.Multi {
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
		 * @type {Ext.app.bind.Multi.Cfg}
		 */
		config?: Ext.app.bind.Multi.Cfg;
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
		 * @returns {Ext.app.bind.Multi.Statics|Ext.app.bind.BaseBinding.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 * @type {Ext.app.bind.Multi.Statics}
		 */
		statics?: (() => Ext.app.bind.Multi.Statics | Ext.app.bind.BaseBinding.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics) | Ext.app.bind.Multi.Statics | any;
	}
}
declare namespace Ext.app.bind.TemplateBinding {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.app.bind.TemplateBinding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.TemplateBinding.html)
	 * This class is created to manage a template against a `ViewModel`. A binding of this
	 * type uses [`Ext.app.bind.Template`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Template.html) to process the template text so see that
	 * class for details on template syntax.
	 * 
	 * The bindings to provide the data needed by the template are managed here.
	 */
	interface Def extends Ext.app.bind.TemplateBinding {
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
		 * @type {Ext.app.bind.TemplateBinding.Cfg}
		 */
		config?: Ext.app.bind.TemplateBinding.Cfg;
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
		 * @returns {Ext.app.bind.TemplateBinding.Statics|Ext.app.bind.BaseBinding.Statics|Ext.util.Schedulable.Statics|Ext.Base.Statics}  
		 * @type {Ext.app.bind.TemplateBinding.Statics}
		 */
		statics?: (() => Ext.app.bind.TemplateBinding.Statics | Ext.app.bind.BaseBinding.Statics | Ext.util.Schedulable.Statics | Ext.Base.Statics) | Ext.app.bind.TemplateBinding.Statics | any;
	}
}
declare namespace Ext.app.bind.AbstractStub {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.AbstractStub](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.AbstractStub.html)
	 * This class manages bindings for a `Session` or `ViewModel`.
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
		 * @param   {object}                                                  members    The members to add to this class.
		 * @param   {boolean}                                                 [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                 [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.AbstractStub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                  members
		 * @returns {Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.AbstractStub;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                  name
		 * @param   {object}                                                  member
		 * @returns {Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.AbstractStub;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                  fn
		 * @param   {object}                                                  scope
		 * @returns {Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.AbstractStub;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.BaseBinding {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.BaseBinding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.BaseBinding.html)
	 * This class is the base for `Binding` and `MultiBinding`.
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
		 * @param   {object}                                                 members    The members to add to this class.
		 * @param   {boolean}                                                [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                 members
		 * @returns {Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                 name
		 * @param   {object}                                                 member
		 * @returns {Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                 fn
		 * @param   {object}                                                 scope
		 * @returns {Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.Binding {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.Binding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Binding.html)
	 * This class is created to manage a direct bind.  [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) returns this from
	 * its [bind](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) method.
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
		 * @param   {object}                                                                      members    The members to add to this class.
		 * @param   {boolean}                                                                     [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                     [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Binding;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                      members
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.Binding;
		addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                      name
		 * @param   {object}                                                                      member
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.Binding;
		addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                      fn
		 * @param   {object}                                                                      scope
		 * @returns {Ext.app.bind.Binding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Binding;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.Formula {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.Formula](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Formula.html)
	 * This class manages a formula defined for an [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html).
	 * 
	 * ## Formula Basics
	 * 
	 * Formulas in a `ViewModel` can be defined as simply as just a function:
	 * 
	 *     formulas: {
	 *         xy: function (get) { return get('x') * get('y'); }
	 *     }
	 * 
	 * When you need to be more explicit, "xy" can become an object. The following means the
	 * same thing as above:
	 * 
	 *     formulas: {
	 *         xy: {
	 *             get: function (get) { return get('x') * get('y'); }
	 *         }
	 *     }
	 * 
	 * ### Data Dependencies
	 * 
	 * One of the important aspects of a `ViewModel` is notification of change. In order to
	 * manage this, a `ViewModel` _must_ know the dependencies between data. In the above case
	 * this is accomplished by **parsing the text of the function**. While this is convenient
	 * and reduces the maintenance/risk that would come from explicitly listing dependencies
	 * separately, there are some rules to be aware of:
	 * 
	 * - All dependencies are resolved by matching the binding statements in the getter function.
	 * - If you need to use these values in other ways, cache them as a `var` (following
	 *   the first rule to capture the value) and use that `var`.
	 * 
	 * In the above formulas, the "xy" formula depends on "x" and "y" in the `ViewModel`. As
	 * these values change, the formula is called to produce the correct value for "xy". This
	 * in turn can be used by other formulas. For example:
	 * 
	 *     formulas: {
	 *         xy: function (get) {  // "get" is arbitrary but a good convention
	 *             return get('x') * get('y');
	 *         },
	 *    
	 *         xyz: function (get) {
	 *             return get('xy') * get('z');
	 *         }
	 *     }
	 * 
	 * In the above, "xyz" depends on "xy" and "z" values in the `ViewModel`.
	 * 
	 * ### The Getter Method
	 * 
	 * The argument passed to the formula is a function that allows you to retrieve
	 * the matched bind statements.
	 * 
	 *     formulas: {
	 *         foo: function (get) {
	 *             return get('theUser.address.city');
	 *         }
	 *     }
	 * 
	 * In the above, the dependency is resolved to `theUser.address.city`. The formula will not
	 * be triggered until the value for `city` is present.
	 * 
	 * ### Capturing Values
	 * 
	 * If values need to be used repeatedly, you can use a `var` as long as the Rules are not
	 * broken.
	 * 
	 *     formulas: {
	 *         x2y2: function (get) {
	 *             // These are still "visible" as "get('x')" and "get('y')" so this is OK:
	 *             var x = get('x'),
	 *                 y = get('y');
	 *    
	 *             return x * x * y * y;
	 *         }
	 *     }
	 * 
	 * ## Explicit Binding
	 * 
	 * While function parsing is convenient, there are times it is not the best solution. In
	 * these cases, an explicit `bind` can be given. To revisit the previous example with an
	 * explicit binding:
	 * 
	 *     formulas: {
	 *         zip: {
	 *             bind: '{foo.bar.zip}',
	 *    
	 *             get: function (zip) {
	 *                 // NOTE: the only thing we get is what our bind produces.
	 *                 return zip * 2;
	 *             }
	 *         }
	 *     }
	 * 
	 * In this case we have given the formula an explicit `bind` value so it will no longer
	 * parse the `get` function. Instead, it will call [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) with
	 * the value of the `bind` property and pass the produced value to `get` whenever it
	 * changes.
	 * 
	 * ## Settable Formulas
	 * 
	 * When a formula is "reversible" it can be given a `set` method to allow it to participate
	 * in two-way binding. For example:
	 * 
	 *     formulas: {
	 *            fullName: {
	 *                get: function (get) {
	 *                    var ret = get('firstName') || '';
	 *    
	 *                    if (get('lastName')) {
	 *                        ret += ' ' +  get('lastName');
	 *                    }
	 *    
	 *                    return ret;
	 *                },
	 *    
	 *                set: function (value) {
	 *                    var space = value.indexOf(' '),
	 *                        split = (space &lt; 0) ? value.length : space;
	 *    
	 *                    this.set({
	 *                        firstName: value.substring(0, split),
	 *                        lastName: value.substring(split + 1)
	 *                    });
	 *                }
	 *            }
	 *        }
	 * 
	 * When the `set` method is called the `this` reference is the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) so it
	 * just calls its [`set method`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-set).
	 * 
	 * ## Single Run Formulas
	 * 
	 * If a formula only needs to produce an initial value, it can be marked as `single`.
	 * 
	 *     formulas: {
	 *         xy: {
	 *             single: true,
	 *    
	 *             get: function (get) {
	 *                 return get('x') * get('y');
	 *             }
	 *         }
	 *     }
	 * 
	 * This formulas `get` method will be called with `x` and `y` once and then its binding
	 * to these properties will be destroyed. This means the `get` method (and hence the value
	 * of `xy`) will only be executed/calculated once.
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
		 * @param   {object}                                             members    The members to add to this class.
		 * @param   {boolean}                                            [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                            [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Formula;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                             members
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.Formula;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                             name
		 * @param   {object}                                             member
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.Formula;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                             fn
		 * @param   {object}                                             scope
		 * @returns {Ext.app.bind.Formula|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Formula;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.LinkStub {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.LinkStub](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.LinkStub.html)
	 * This class manages stubs associated with `link` requests. These bind to some other
	 * descriptor and forward changes from there.
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
		 * @param   {object}                                                                                          members    The members to add to this class.
		 * @param   {boolean}                                                                                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.LinkStub|Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.LinkStub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Stub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.AbstractStub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                                          members
		 * @returns {Ext.app.bind.LinkStub|Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.LinkStub;
		addStatics? (members: object): typeof Ext.app.bind.Stub;
		addStatics? (members: object): typeof Ext.app.bind.AbstractStub;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                                          name
		 * @param   {object}                                                                                          member
		 * @returns {Ext.app.bind.LinkStub|Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.LinkStub;
		addMember? (name: object, member: object): typeof Ext.app.bind.Stub;
		addMember? (name: object, member: object): typeof Ext.app.bind.AbstractStub;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                                          fn
		 * @param   {object}                                                                                          scope
		 * @returns {Ext.app.bind.LinkStub|Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.LinkStub;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Stub;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.AbstractStub;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.Multi {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.Multi](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Multi.html)
	 * This class is created to manage a multi-bind against a `ViewModel`.
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
		 * @param   {object}                                                                    members    The members to add to this class.
		 * @param   {boolean}                                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Multi;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    members
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.Multi;
		addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    name
		 * @param   {object}                                                                    member
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.Multi;
		addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    fn
		 * @param   {object}                                                                    scope
		 * @returns {Ext.app.bind.Multi|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Multi;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.Parser {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.Parser](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Parser.html)
	 * This class parses bind template format expressions.
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
		 * @param   {object}                                        members    The members to add to this class.
		 * @param   {boolean}                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Parser|Ext.parse.Parser|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Parser;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.parse.Parser;
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
		 * @param   {object}                                        members
		 * @returns {Ext.app.bind.Parser|Ext.parse.Parser|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.Parser;
		addStatics? (members: object): typeof Ext.parse.Parser;
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
		 * @param   {object}                                        name
		 * @param   {object}                                        member
		 * @returns {Ext.app.bind.Parser|Ext.parse.Parser|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.Parser;
		addMember? (name: object, member: object): typeof Ext.parse.Parser;
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
		 * @param   {object}                                        fn
		 * @param   {object}                                        scope
		 * @returns {Ext.app.bind.Parser|Ext.parse.Parser|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Parser;
		onExtended? (fn: object, scope: object): typeof Ext.parse.Parser;
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
declare namespace Ext.app.bind.RootStub {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.RootStub](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.RootStub.html)
	 * This class is the root stub for managing a `ViewModel`.
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
		 * @param   {object}                                                                        members    The members to add to this class.
		 * @param   {boolean}                                                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.RootStub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.RootStub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.AbstractStub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                        members
		 * @returns {Ext.app.bind.RootStub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.RootStub;
		addStatics? (members: object): typeof Ext.app.bind.AbstractStub;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                        name
		 * @param   {object}                                                                        member
		 * @returns {Ext.app.bind.RootStub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.RootStub;
		addMember? (name: object, member: object): typeof Ext.app.bind.AbstractStub;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                        fn
		 * @param   {object}                                                                        scope
		 * @returns {Ext.app.bind.RootStub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.RootStub;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.AbstractStub;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.Stub {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.Stub](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Stub.html)
	 * This class and its derived classes are used to manage access to the properties of an
	 * object stored in a `Session`.
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
		 * @param   {object}                                                                    members    The members to add to this class.
		 * @param   {boolean}                                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Stub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.AbstractStub;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    members
		 * @returns {Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.Stub;
		addStatics? (members: object): typeof Ext.app.bind.AbstractStub;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    name
		 * @param   {object}                                                                    member
		 * @returns {Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.Stub;
		addMember? (name: object, member: object): typeof Ext.app.bind.AbstractStub;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                    fn
		 * @param   {object}                                                                    scope
		 * @returns {Ext.app.bind.Stub|Ext.app.bind.AbstractStub|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Stub;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.AbstractStub;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.Template {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.Template](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Template.html)
	 * This class holds the parsed text for a bind template. The syntax is that of a normal
	 * [`Ext.Template`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Template.html) except that substitution tokens can contain dots to reference property
	 * names.
	 * 
	 * The template is parsed and stored in a representation like this:
	 * 
	 *     me.text = 'Hey {foo.bar}! Test {bar} and {foo.bar} with {abc} over {bar:number}'
	 *    
	 *     me.tokens = [ 'foo.bar', 'bar', 'abc' ]
	 *    
	 *     me.buffer = [           me.slots = [
	 *         'Hey ',                 undefined,
	 *         undefined,              { token: 'foo.bar', pos: 0 },
	 *         '! Test ',              undefined,
	 *         undefined,              { token: 'bar', pos: 1 },
	 *         ' and ',                undefined,
	 *         undefined,              { token: 'foo.bar', pos: 0 },
	 *         ' with ',               undefined,
	 *         undefined,              { token: 'abc', pos: 2 },
	 *         ' over ',               undefined,
	 *         undefined               { token: 'bar', fmt: 'number', pos: 1 }
	 *     ]                       ]
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
		 * @param   {object}                         members    The members to add to this class.
		 * @param   {boolean}                        [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                        [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.Template|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.Template;
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
		 * @param   {object}                         members
		 * @returns {Ext.app.bind.Template|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.Template;
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
		 * @param   {object}                         name
		 * @param   {object}                         member
		 * @returns {Ext.app.bind.Template|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.Template;
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
		 * @param   {object}                         fn
		 * @param   {object}                         scope
		 * @returns {Ext.app.bind.Template|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.Template;
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
declare namespace Ext.app.bind.TemplateBinding {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.app.bind.TemplateBinding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.TemplateBinding.html)
	 * This class is created to manage a template against a `ViewModel`. A binding of this
	 * type uses [`Ext.app.bind.Template`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Template.html) to process the template text so see that
	 * class for details on template syntax.
	 * 
	 * The bindings to provide the data needed by the template are managed here.
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
		 * @param   {object}                                                                              members    The members to add to this class.
		 * @param   {boolean}                                                                             [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                             [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.TemplateBinding;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.app.bind.BaseBinding;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                              members
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.app.bind.TemplateBinding;
		addStatics? (members: object): typeof Ext.app.bind.BaseBinding;
		addStatics? (members: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                              name
		 * @param   {object}                                                                              member
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.app.bind.TemplateBinding;
		addMember? (name: object, member: object): typeof Ext.app.bind.BaseBinding;
		addMember? (name: object, member: object): typeof Ext.util.Schedulable;
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
		 * @param   {object}                                                                              fn
		 * @param   {object}                                                                              scope
		 * @returns {Ext.app.bind.TemplateBinding|Ext.app.bind.BaseBinding|Ext.util.Schedulable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.TemplateBinding;
		onExtended? (fn: object, scope: object): typeof Ext.app.bind.BaseBinding;
		onExtended? (fn: object, scope: object): typeof Ext.util.Schedulable;
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
declare namespace Ext.app.bind.BaseBinding {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.app.bind.BaseBinding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.BaseBinding.html)
	 * This class is the base for `Binding` and `MultiBinding`.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * This option instructs the binding to call its `destroy` method immediately after
		 * delivering the initial value.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		single?: boolean;
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
		 * @param   {object}                           config
		 * @returns {Ext.app.bind.BaseBinding.Statics}        this
		 */
		initConfig? (config: object): Ext.app.bind.BaseBinding.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                    name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                           [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.BaseBinding.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.BaseBinding.Statics;
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
		 * @returns {Ext.app.bind.BaseBinding.Statics}  
		 */
		statics? (): Ext.app.bind.BaseBinding.Statics;
	}
}
declare namespace Ext.app.bind.Binding {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.app.bind.Binding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Binding.html)
	 * This class is created to manage a direct bind.  [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) returns this from
	 * its [bind](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) method.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Normally a binding is only notified of changes to its bound property, but if that
		 * property is an object it is sometimes helpful to be notified of changes to its
		 * properties. To receive notifications of changes to all properties of a bound object,
		 * set this to `true`.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		deep?: boolean;
		/** 
		 * This option instructs the binding to call its `destroy` method immediately after
		 * delivering the initial value.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		single?: boolean;
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
		 * @param   {object}                       config
		 * @returns {Ext.app.bind.Binding.Statics}        this
		 */
		initConfig? (config: object): Ext.app.bind.Binding.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Binding.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Binding.Statics;
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
		 * @returns {Ext.app.bind.Binding.Statics}  
		 */
		statics? (): Ext.app.bind.Binding.Statics;
	}
}
declare namespace Ext.app.bind.Formula {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.app.bind.Formula](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Formula.html)
	 * This class manages a formula defined for an [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html).
	 * 
	 * ## Formula Basics
	 * 
	 * Formulas in a `ViewModel` can be defined as simply as just a function:
	 * 
	 *     formulas: {
	 *         xy: function (get) { return get('x') * get('y'); }
	 *     }
	 * 
	 * When you need to be more explicit, "xy" can become an object. The following means the
	 * same thing as above:
	 * 
	 *     formulas: {
	 *         xy: {
	 *             get: function (get) { return get('x') * get('y'); }
	 *         }
	 *     }
	 * 
	 * ### Data Dependencies
	 * 
	 * One of the important aspects of a `ViewModel` is notification of change. In order to
	 * manage this, a `ViewModel` _must_ know the dependencies between data. In the above case
	 * this is accomplished by **parsing the text of the function**. While this is convenient
	 * and reduces the maintenance/risk that would come from explicitly listing dependencies
	 * separately, there are some rules to be aware of:
	 * 
	 * - All dependencies are resolved by matching the binding statements in the getter function.
	 * - If you need to use these values in other ways, cache them as a `var` (following
	 *   the first rule to capture the value) and use that `var`.
	 * 
	 * In the above formulas, the "xy" formula depends on "x" and "y" in the `ViewModel`. As
	 * these values change, the formula is called to produce the correct value for "xy". This
	 * in turn can be used by other formulas. For example:
	 * 
	 *     formulas: {
	 *         xy: function (get) {  // "get" is arbitrary but a good convention
	 *             return get('x') * get('y');
	 *         },
	 *    
	 *         xyz: function (get) {
	 *             return get('xy') * get('z');
	 *         }
	 *     }
	 * 
	 * In the above, "xyz" depends on "xy" and "z" values in the `ViewModel`.
	 * 
	 * ### The Getter Method
	 * 
	 * The argument passed to the formula is a function that allows you to retrieve
	 * the matched bind statements.
	 * 
	 *     formulas: {
	 *         foo: function (get) {
	 *             return get('theUser.address.city');
	 *         }
	 *     }
	 * 
	 * In the above, the dependency is resolved to `theUser.address.city`. The formula will not
	 * be triggered until the value for `city` is present.
	 * 
	 * ### Capturing Values
	 * 
	 * If values need to be used repeatedly, you can use a `var` as long as the Rules are not
	 * broken.
	 * 
	 *     formulas: {
	 *         x2y2: function (get) {
	 *             // These are still "visible" as "get('x')" and "get('y')" so this is OK:
	 *             var x = get('x'),
	 *                 y = get('y');
	 *    
	 *             return x * x * y * y;
	 *         }
	 *     }
	 * 
	 * ## Explicit Binding
	 * 
	 * While function parsing is convenient, there are times it is not the best solution. In
	 * these cases, an explicit `bind` can be given. To revisit the previous example with an
	 * explicit binding:
	 * 
	 *     formulas: {
	 *         zip: {
	 *             bind: '{foo.bar.zip}',
	 *    
	 *             get: function (zip) {
	 *                 // NOTE: the only thing we get is what our bind produces.
	 *                 return zip * 2;
	 *             }
	 *         }
	 *     }
	 * 
	 * In this case we have given the formula an explicit `bind` value so it will no longer
	 * parse the `get` function. Instead, it will call [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind) with
	 * the value of the `bind` property and pass the produced value to `get` whenever it
	 * changes.
	 * 
	 * ## Settable Formulas
	 * 
	 * When a formula is "reversible" it can be given a `set` method to allow it to participate
	 * in two-way binding. For example:
	 * 
	 *     formulas: {
	 *            fullName: {
	 *                get: function (get) {
	 *                    var ret = get('firstName') || '';
	 *    
	 *                    if (get('lastName')) {
	 *                        ret += ' ' +  get('lastName');
	 *                    }
	 *    
	 *                    return ret;
	 *                },
	 *    
	 *                set: function (value) {
	 *                    var space = value.indexOf(' '),
	 *                        split = (space &lt; 0) ? value.length : space;
	 *    
	 *                    this.set({
	 *                        firstName: value.substring(0, split),
	 *                        lastName: value.substring(split + 1)
	 *                    });
	 *                }
	 *            }
	 *        }
	 * 
	 * When the `set` method is called the `this` reference is the [`Ext.app.ViewModel`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html) so it
	 * just calls its [`set method`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-set).
	 * 
	 * ## Single Run Formulas
	 * 
	 * If a formula only needs to produce an initial value, it can be marked as `single`.
	 * 
	 *     formulas: {
	 *         xy: {
	 *             single: true,
	 *    
	 *             get: function (get) {
	 *                 return get('x') * get('y');
	 *             }
	 *         }
	 *     }
	 * 
	 * This formulas `get` method will be called with `x` and `y` once and then its binding
	 * to these properties will be destroyed. This means the `get` method (and hence the value
	 * of `xy`) will only be executed/calculated once.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * An explicit bind request to produce data to provide the `get` function. If this is
		 * specified, the result of this bind is the first argument to `get`. If not given,
		 * then `get` receives a getter function that can retrieve bind expressions. For details on what can
		 * be specified for this property see [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-bind).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		bind?: object;
		/** 
		 * The function to call to calculate the formula's value. The `get` method executes
		 * with a `this` pointer of the `ViewModel` and receives a getter function or the result of a configured `bind`.
		 * @configuration
		 * @optional
		 */
		get?: ExtGlobalFunction;
		/** 
		 * If provided this method allows a formula to be set. This method is typically called
		 * when [`Ext.app.bind.Binding.setValue`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Binding.html#method-setValue) is called. The `set` method executes
		 * with a `this` pointer of the `ViewModel`. Whatever values need to be updated can
		 * be set by calling [`Ext.app.ViewModel.set`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.ViewModel.html#method-set).
		 * @configuration
		 * @optional
		 */
		set?: ExtGlobalFunction;
		/** 
		 * This option instructs the binding to call its `destroy` method immediately after
		 * delivering the initial value.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		single?: boolean;
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
		 * @param   {object}                       config
		 * @returns {Ext.app.bind.Formula.Statics}        this
		 */
		initConfig? (config: object): Ext.app.bind.Formula.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Formula.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Formula.Statics;
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
		 * @returns {Ext.app.bind.Formula.Statics}  
		 */
		statics? (): Ext.app.bind.Formula.Statics;
	}
}
declare namespace Ext.app.bind.Multi {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.app.bind.Multi](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Multi.html)
	 * This class is created to manage a multi-bind against a `ViewModel`.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * This option instructs the binding to call its `destroy` method immediately after
		 * delivering the initial value.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		single?: boolean;
		/** 
		 * This option tracks for static branches of the root object which can be pruned using
		 * [pruneStaticKeys](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Multi.html#method-pruneStaticKeys). This can be useful to only get the dynamic parts of a multi bind:
		 * 
		 *     {
		 *         a: 1,
		 *         b: '{someBind}',
		 *         c: ['a', 'b', 'c'],
		 *         d: ['a', 'b', '{someBind}'],
		 *         e: {
		 *             y: 1,
		 *             z: 2
		 *         },
		 *         f: {
		 *             y: 1,
		 *             z: '{someBind}'
		 *         }
		 *     }
		 *    
		 *     // Will produce
		 *     {
		 *         b: value,
		 *         d: ['a', 'b', value],
		 *         f: {
		 *             y: 1,
		 *             z: value
		 *         }
		 *     }
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		trackStatics?: boolean;
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
		 * @param   {object}                     config
		 * @returns {Ext.app.bind.Multi.Statics}        this
		 */
		initConfig? (config: object): Ext.app.bind.Multi.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                     [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Multi.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Multi.Statics;
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
		 * @returns {Ext.app.bind.Multi.Statics}  
		 */
		statics? (): Ext.app.bind.Multi.Statics;
	}
}
declare namespace Ext.app.bind.Parser {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.app.bind.Parser](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Parser.html)
	 * This class parses bind template format expressions.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * A map of identifiers that should be converted to literal value tokens. The
		 * key in this object is the name of the constant and the value is the constant
		 * value.
		 * 
		 * If the value of a key is an object, it is a config object for the
		 * [`constant`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.parse.symbol.Constant.html).
		 * @configuration
		 * @optional
		 * @default {'null': null, 'false': false, 'true': true}
		 * @type {object}
		 */
		constants?: object;
		/** 
		 * A map of binary operators and their associated precedence (or binding priority).
		 * These binary operators are left-associative.
		 * 
		 * If the value of a key is an object, it is a config object for the
		 * [`operator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.parse.symbol.Infix.html).
		 * @configuration
		 * @optional
		 * @default {'+': 50, '-': 50, '*': 60, '/': 60}
		 * @type {object}
		 */
		infix?: object;
		/** 
		 * A map of binary operators and their associated precedence (or binding priority).
		 * These binary operators are right-associative.
		 * 
		 * If the value of a key is an object, it is a config object for the
		 * [`operator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.parse.symbol.InfixRight.html).
		 * @configuration
		 * @optional
		 * @default {'&&': 30, '||': 30}
		 * @type {object}
		 */
		infixRight?: object;
		/** 
		 * A map of unary operators. Typically no value is needed, so `0` is used.
		 * 
		 * If the value of a key is an object, it is a config object for the
		 * [`operator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.parse.symbol.Prefix.html).
		 * @configuration
		 * @optional
		 * @default {'@': 0}
		 * @type {object}
		 */
		prefix?: object;
		/** 
		 * General language symbols. The values in this object are used as config objects
		 * to configure the associated [`symbol`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.parse.Symbol.html). If there is no
		 * configuration, use `0` for the value.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		symbols?: object;
		/** 
		 * The current token. These tokens extend this base class and contain additional
		 * properties such as:
		 * 
		 * - `at` - The index of the token in the text.
		 * - `value` - The value of the token (e.g., the name of an identifier).
		 * @configuration
		 * @optional
		 * @type {Ext.parse.Symbol}
		 */
		token?: Ext.parse.Symbol;
		/** 
		 * The tokenizer or a config object used to create one.
		 * @configuration
		 * @optional
		 * @default {operators: {'@': 'at', '?': 'qmark', '===': 'feq', '!==': 'fneq', '==': 'eq', '!=': 'neq', '<': 'lt', '<=': 'lte', '>': 'gt', '>=': 'gte', '&&': 'and', '||': 'or'}}
		 * @type {object|Ext.parse.Tokenizer}
		 */
		tokenizer?: object | Ext.parse.Tokenizer;
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
		 * @returns {Ext.app.bind.Parser.Statics}        this
		 */
		initConfig? (config: object): Ext.app.bind.Parser.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                      [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.Parser.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.Parser.Statics;
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
		 * @returns {Ext.app.bind.Parser.Statics}  
		 */
		statics? (): Ext.app.bind.Parser.Statics;
	}
}
declare namespace Ext.app.bind.TemplateBinding {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.app.bind.TemplateBinding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.TemplateBinding.html)
	 * This class is created to manage a template against a `ViewModel`. A binding of this
	 * type uses [`Ext.app.bind.Template`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.app.bind.Template.html) to process the template text so see that
	 * class for details on template syntax.
	 * 
	 * The bindings to provide the data needed by the template are managed here.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * This option instructs the binding to call its `destroy` method immediately after
		 * delivering the initial value.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		single?: boolean;
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
		 * @param   {object}                               config
		 * @returns {Ext.app.bind.TemplateBinding.Statics}        this
		 */
		initConfig? (config: object): Ext.app.bind.TemplateBinding.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.app.bind.TemplateBinding.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.app.bind.TemplateBinding.Statics;
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
		 * @returns {Ext.app.bind.TemplateBinding.Statics}  
		 */
		statics? (): Ext.app.bind.TemplateBinding.Statics;
	}
}
