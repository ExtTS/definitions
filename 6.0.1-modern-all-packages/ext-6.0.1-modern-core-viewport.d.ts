declare namespace Ext.viewport {
	/** 
	 * Android version of viewport.
	 * @private (class)
	 */
	class Android extends Ext.viewport.Default {}
	/** 
	 * Base class for iOS and Android viewports.
	 * @private (class)
	 */
	class Default extends Ext.Container {}
	/** 
	 * iOS version of viewport.
	 * @private (class)
	 */
	class Ios extends Ext.viewport.Default {}
	/** 
	 * This class acts as a factory for environment-specific viewport implementations.
	 * 
	 * Please refer to the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) documentation about using the global instance.
	 * @private (class)
	 * @singleton (definition)
	 */
	interface Viewport extends Ext.Base {}
	/** 
	 * Windows Phone version of Viewport.
	 * @private (class)
	 */
	class WindowsPhone extends Ext.viewport.Default {}
}
declare namespace Ext {
	class viewport {
		/** 
		 * This class acts as a factory for environment-specific viewport implementations.
		 * 
		 * Please refer to the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) documentation about using the global instance.
		 * @private (class)
		 * @singleton (instance)
		 */
		static readonly Viewport?: Ext.viewport.Viewport;
	}
}
declare namespace Ext.viewport {
	class WP extends Ext.viewport.WindowsPhone {}
}
declare namespace Ext.viewport.Android {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.viewport.Android](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Android.html)
	 * Android version of viewport.
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
		 * @param   {object}                                                                                                members    The members to add to this class.
		 * @param   {boolean}                                                                                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.viewport.Android|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Android;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                                members
		 * @returns {Ext.viewport.Android|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.viewport.Android;
		addStatics? (members: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                                members
		 * @returns {Ext.viewport.Android|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.viewport.Android;
		addInheritableStatics? (members: object): typeof Ext.viewport.Default;
		addInheritableStatics? (members: object): typeof Ext.Container;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                name
		 * @param   {object}                                                                                                member
		 * @returns {Ext.viewport.Android|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.viewport.Android;
		addMember? (name: object, member: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                                fn
		 * @param   {object}                                                                                                scope
		 * @returns {Ext.viewport.Android|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Android;
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Default;
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
declare namespace Ext.viewport.Default {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.viewport.Default](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Default.html)
	 * Base class for iOS and Android viewports.
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
		 * @param   {object}                                                                           members    The members to add to this class.
		 * @param   {boolean}                                                                          [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                          [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                           members
		 * @returns {Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                           members
		 * @returns {Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.viewport.Default;
		addInheritableStatics? (members: object): typeof Ext.Container;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                           name
		 * @param   {object}                                                                           member
		 * @returns {Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                           fn
		 * @param   {object}                                                                           scope
		 * @returns {Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Default;
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
declare namespace Ext.viewport.Ios {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.viewport.Ios](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Ios.html)
	 * iOS version of viewport.
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
		 * @param   {object}                                                                                            members    The members to add to this class.
		 * @param   {boolean}                                                                                           [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                                           [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.viewport.Ios|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Ios;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                            members
		 * @returns {Ext.viewport.Ios|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.viewport.Ios;
		addStatics? (members: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                            members
		 * @returns {Ext.viewport.Ios|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.viewport.Ios;
		addInheritableStatics? (members: object): typeof Ext.viewport.Default;
		addInheritableStatics? (members: object): typeof Ext.Container;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                            name
		 * @param   {object}                                                                                            member
		 * @returns {Ext.viewport.Ios|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.viewport.Ios;
		addMember? (name: object, member: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                            fn
		 * @param   {object}                                                                                            scope
		 * @returns {Ext.viewport.Ios|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Ios;
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Default;
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
declare namespace Ext.viewport.Viewport {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.viewport.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Viewport.html)
	 * This class acts as a factory for environment-specific viewport implementations.
	 * 
	 * Please refer to the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) documentation about using the global instance.
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
		 * @returns {Ext.viewport.Viewport|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Viewport;
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
		 * @returns {Ext.viewport.Viewport|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.viewport.Viewport;
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
		 * @param   {object}                         members
		 * @returns {Ext.viewport.Viewport|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.viewport.Viewport;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                         name
		 * @param   {object}                         member
		 * @returns {Ext.viewport.Viewport|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.viewport.Viewport;
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
		 * @param   {object}                         fn
		 * @param   {object}                         scope
		 * @returns {Ext.viewport.Viewport|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Viewport;
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
declare namespace Ext.viewport.WindowsPhone {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.viewport.WindowsPhone](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.WindowsPhone.html)
	 * Windows Phone version of Viewport.
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
		 * @returns {Ext.viewport.WindowsPhone|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.WindowsPhone;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                                     members
		 * @returns {Ext.viewport.WindowsPhone|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.viewport.WindowsPhone;
		addStatics? (members: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                                     members
		 * @returns {Ext.viewport.WindowsPhone|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.viewport.WindowsPhone;
		addInheritableStatics? (members: object): typeof Ext.viewport.Default;
		addInheritableStatics? (members: object): typeof Ext.Container;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Widget;
		addInheritableStatics? (members: object): typeof Ext.Evented;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                     name
		 * @param   {object}                                                                                                     member
		 * @returns {Ext.viewport.WindowsPhone|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.viewport.WindowsPhone;
		addMember? (name: object, member: object): typeof Ext.viewport.Default;
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
		 * @param   {object}                                                                                                     fn
		 * @param   {object}                                                                                                     scope
		 * @returns {Ext.viewport.WindowsPhone|Ext.viewport.Default|Ext.Container|Ext.Component|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.viewport.WindowsPhone;
		onExtended? (fn: object, scope: object): typeof Ext.viewport.Default;
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
declare namespace Ext.viewport.Android.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Android.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Android.html#method-addListener)
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
declare namespace Ext.viewport.Android.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Android.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Android.html#method-on)
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
declare namespace Ext.viewport.Android.methodParams.setMenu {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Android.setMenu](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Android.html#method-setMenu)
	 * The configuration for the menu.
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The side to put the menu on.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		side?: string;
		/** 
		 * True to cover the viewport content. Defaults to `true`.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		cover?: boolean;
	}
}
declare namespace Ext.viewport.Default.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Default.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Default.html#method-addListener)
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
declare namespace Ext.viewport.Default.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Default.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Default.html#method-on)
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
declare namespace Ext.viewport.Default.methodParams.setMenu {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Default.setMenu](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Default.html#method-setMenu)
	 * The configuration for the menu.
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The side to put the menu on.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		side?: string;
		/** 
		 * True to cover the viewport content. Defaults to `true`.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		cover?: boolean;
	}
}
declare namespace Ext.viewport.Ios.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Ios.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Ios.html#method-addListener)
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
declare namespace Ext.viewport.Ios.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Ios.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Ios.html#method-on)
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
declare namespace Ext.viewport.Ios.methodParams.setMenu {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.Ios.setMenu](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Ios.html#method-setMenu)
	 * The configuration for the menu.
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The side to put the menu on.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		side?: string;
		/** 
		 * True to cover the viewport content. Defaults to `true`.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		cover?: boolean;
	}
}
declare namespace Ext.viewport.WindowsPhone.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.WindowsPhone.addListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.WindowsPhone.html#method-addListener)
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
declare namespace Ext.viewport.WindowsPhone.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.WindowsPhone.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.WindowsPhone.html#method-on)
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
declare namespace Ext.viewport.WindowsPhone.methodParams.setMenu {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.viewport.WindowsPhone.setMenu](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.WindowsPhone.html#method-setMenu)
	 * The configuration for the menu.
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The side to put the menu on.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		side?: string;
		/** 
		 * True to cover the viewport content. Defaults to `true`.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		cover?: boolean;
	}
}
declare namespace Ext.viewport.Android {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.viewport.Android](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Android.html)
	 * Android version of viewport.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The item from the [items](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-items) collection that will be active first. This is
		 * usually only meaningful in a [card layout](https://docs.sencha.com/extjs/6.0.1/modern/Ext.layout.Card.html), where only one item can be active at a
		 * time. If passes a string, it will be assumed to be a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {object|string|number}
		 */
		activeItem?: object | string | number;
		/** 
		 * Auto blur the focused element when touching on a non-input. This is used to work around Android bugs
		 * where the virtual keyboard is not hidden when tapping outside an input.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoBlurInput?: boolean;
		/** 
		 * If `true`, child items will be destroyed as soon as they are [removed](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-remove)
		 * from this container.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoMaximize?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoRender?: boolean;
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
		 * Animation to be used during transitions of cards.
		 * @configuration
		 * @optional
		 * @type {string|object|boolean}
		 */
		cardSwitchAnimation?: string | object | boolean;
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
		 * We used a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector to listen to the [tap](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#event-tap) event on any
		 * [button](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html) anywhere inside the Container that has the [text](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#cfg-text) 'Disable'.
		 * Whenever a Component matching that selector fires the `tap` event our `hideMe` function is called. `hideMe` is
		 * called with scope: `this` (e.g. `this` is the Container instance).
		 * @configuration
		 * @optional
		 * @default {}
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
		 * The default [xtype](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) of child Components to create in this Container when a child item
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
		 * @default '100%'
		 * @type {string}
		 */
		height?: string;
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
		 * When using a [modal](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-modal) Component, setting this to `true` will hide the modal
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
		 * See the [layouts guide](#!/guides/layouts) for more information.
		 * @configuration
		 * @optional
		 * @default 'card'
		 * @type {object|string}
		 */
		layout?: object | string;
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
		 * display a loading mask. Please refer to the [Ext.LoadMask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.LoadMask.html) component to see other configurations.
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
		 * There are also two convenient methods, [mask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-mask) and [unmask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-unmask), to allow you to mask and unmask
		 * this container at any time.
		 * 
		 * Remember, the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) is always a container, so if you want to mask your whole application at anytime,
		 * can call:
		 * 
		 *    Ext.Viewport.setMasked({
		 *        xtype: 'loadmask',
		 *        message: 'Hello'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean|object|Ext.Mask|Ext.LoadMask}
		 */
		masked?: boolean | object | Ext.Mask | Ext.LoadMask;
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
		 * An object of all the menus on this viewport.
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		menus?: object;
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
		 * `true` to make this Container modal. This will create a mask underneath the Container
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Container is dismissed.
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
		 * Whether or not to always prevent default panning behavior of the
		 * browser's viewport.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		preventPanning?: boolean;
		/** 
		 * `true` to attempt to stop zooming when you double tap on the screen on mobile devices,
		 * typically HTC devices with HTC Sense UI.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		preventZooming?: boolean;
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
		 * If `true`, this container will be marked as being a point in the hierarchy where
		 * references to items with a specified `reference` config will be held. The container
		 * will automatically become a referenceHolder if a controller is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information
		 * about references &amp; reference holders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		referenceHolder?: boolean;
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
		 * @default {translationMethod: 'csstransform'}
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
		 * @default true
		 * @type {boolean}
		 */
		useBodyElement?: boolean;
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
		 * @configuration
		 * @optional
		 * @default '100%'
		 * @type {string}
		 */
		width?: string;
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
		 * @param   {object}                       config
		 * @returns {Ext.viewport.Android.Statics}        this
		 */
		initConfig? (config: object): Ext.viewport.Android.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.viewport.Android.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.viewport.Android.Statics;
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
		 * @returns {Ext.viewport.Android.Statics}  
		 */
		statics? (): Ext.viewport.Android.Statics;
	}
}
declare namespace Ext.viewport.Default {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.viewport.Default](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Default.html)
	 * Base class for iOS and Android viewports.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The item from the [items](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-items) collection that will be active first. This is
		 * usually only meaningful in a [card layout](https://docs.sencha.com/extjs/6.0.1/modern/Ext.layout.Card.html), where only one item can be active at a
		 * time. If passes a string, it will be assumed to be a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {object|string|number}
		 */
		activeItem?: object | string | number;
		/** 
		 * Auto blur the focused element when touching on a non-input. This is used to work around Android bugs
		 * where the virtual keyboard is not hidden when tapping outside an input.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoBlurInput?: boolean;
		/** 
		 * If `true`, child items will be destroyed as soon as they are [removed](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-remove)
		 * from this container.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoMaximize?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoRender?: boolean;
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
		 * Animation to be used during transitions of cards.
		 * @configuration
		 * @optional
		 * @type {string|object|boolean}
		 */
		cardSwitchAnimation?: string | object | boolean;
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
		 * We used a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector to listen to the [tap](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#event-tap) event on any
		 * [button](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html) anywhere inside the Container that has the [text](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#cfg-text) 'Disable'.
		 * Whenever a Component matching that selector fires the `tap` event our `hideMe` function is called. `hideMe` is
		 * called with scope: `this` (e.g. `this` is the Container instance).
		 * @configuration
		 * @optional
		 * @default {}
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
		 * The default [xtype](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) of child Components to create in this Container when a child item
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
		 * @default '100%'
		 * @type {string}
		 */
		height?: string;
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
		 * When using a [modal](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-modal) Component, setting this to `true` will hide the modal
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
		 * See the [layouts guide](#!/guides/layouts) for more information.
		 * @configuration
		 * @optional
		 * @default 'card'
		 * @type {object|string}
		 */
		layout?: object | string;
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
		 * display a loading mask. Please refer to the [Ext.LoadMask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.LoadMask.html) component to see other configurations.
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
		 * There are also two convenient methods, [mask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-mask) and [unmask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-unmask), to allow you to mask and unmask
		 * this container at any time.
		 * 
		 * Remember, the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) is always a container, so if you want to mask your whole application at anytime,
		 * can call:
		 * 
		 *    Ext.Viewport.setMasked({
		 *        xtype: 'loadmask',
		 *        message: 'Hello'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean|object|Ext.Mask|Ext.LoadMask}
		 */
		masked?: boolean | object | Ext.Mask | Ext.LoadMask;
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
		 * An object of all the menus on this viewport.
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		menus?: object;
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
		 * `true` to make this Container modal. This will create a mask underneath the Container
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Container is dismissed.
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
		 * Whether or not to always prevent default panning behavior of the
		 * browser's viewport.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		preventPanning?: boolean;
		/** 
		 * `true` to attempt to stop zooming when you double tap on the screen on mobile devices,
		 * typically HTC devices with HTC Sense UI.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		preventZooming?: boolean;
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
		 * If `true`, this container will be marked as being a point in the hierarchy where
		 * references to items with a specified `reference` config will be held. The container
		 * will automatically become a referenceHolder if a controller is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information
		 * about references &amp; reference holders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		referenceHolder?: boolean;
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
		 * @default true
		 * @type {boolean}
		 */
		useBodyElement?: boolean;
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
		 * @configuration
		 * @optional
		 * @default '100%'
		 * @type {string}
		 */
		width?: string;
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
		 * @param   {object}                       config
		 * @returns {Ext.viewport.Default.Statics}        this
		 */
		initConfig? (config: object): Ext.viewport.Default.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.viewport.Default.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.viewport.Default.Statics;
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
		 * @returns {Ext.viewport.Default.Statics}  
		 */
		statics? (): Ext.viewport.Default.Statics;
	}
}
declare namespace Ext.viewport.Ios {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.viewport.Ios](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.Ios.html)
	 * iOS version of viewport.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The item from the [items](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-items) collection that will be active first. This is
		 * usually only meaningful in a [card layout](https://docs.sencha.com/extjs/6.0.1/modern/Ext.layout.Card.html), where only one item can be active at a
		 * time. If passes a string, it will be assumed to be a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {object|string|number}
		 */
		activeItem?: object | string | number;
		/** 
		 * Auto blur the focused element when touching on a non-input. This is used to work around Android bugs
		 * where the virtual keyboard is not hidden when tapping outside an input.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoBlurInput?: boolean;
		/** 
		 * If `true`, child items will be destroyed as soon as they are [removed](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-remove)
		 * from this container.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoMaximize?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoRender?: boolean;
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
		 * Animation to be used during transitions of cards.
		 * @configuration
		 * @optional
		 * @type {string|object|boolean}
		 */
		cardSwitchAnimation?: string | object | boolean;
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
		 * We used a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector to listen to the [tap](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#event-tap) event on any
		 * [button](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html) anywhere inside the Container that has the [text](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#cfg-text) 'Disable'.
		 * Whenever a Component matching that selector fires the `tap` event our `hideMe` function is called. `hideMe` is
		 * called with scope: `this` (e.g. `this` is the Container instance).
		 * @configuration
		 * @optional
		 * @default {}
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
		 * The default [xtype](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) of child Components to create in this Container when a child item
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
		 * @default '100%'
		 * @type {string}
		 */
		height?: string;
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
		 * When using a [modal](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-modal) Component, setting this to `true` will hide the modal
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
		 * See the [layouts guide](#!/guides/layouts) for more information.
		 * @configuration
		 * @optional
		 * @default 'card'
		 * @type {object|string}
		 */
		layout?: object | string;
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
		 * display a loading mask. Please refer to the [Ext.LoadMask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.LoadMask.html) component to see other configurations.
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
		 * There are also two convenient methods, [mask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-mask) and [unmask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-unmask), to allow you to mask and unmask
		 * this container at any time.
		 * 
		 * Remember, the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) is always a container, so if you want to mask your whole application at anytime,
		 * can call:
		 * 
		 *    Ext.Viewport.setMasked({
		 *        xtype: 'loadmask',
		 *        message: 'Hello'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean|object|Ext.Mask|Ext.LoadMask}
		 */
		masked?: boolean | object | Ext.Mask | Ext.LoadMask;
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
		 * An object of all the menus on this viewport.
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		menus?: object;
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
		 * `true` to make this Container modal. This will create a mask underneath the Container
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Container is dismissed.
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
		 * Whether or not to always prevent default panning behavior of the
		 * browser's viewport.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		preventPanning?: boolean;
		/** 
		 * `true` to attempt to stop zooming when you double tap on the screen on mobile devices,
		 * typically HTC devices with HTC Sense UI.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		preventZooming?: boolean;
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
		 * If `true`, this container will be marked as being a point in the hierarchy where
		 * references to items with a specified `reference` config will be held. The container
		 * will automatically become a referenceHolder if a controller is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information
		 * about references &amp; reference holders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		referenceHolder?: boolean;
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
		 * @default true
		 * @type {boolean}
		 */
		useBodyElement?: boolean;
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
		 * @configuration
		 * @optional
		 * @default '100%'
		 * @type {string}
		 */
		width?: string;
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
		 * @param   {object}                   config
		 * @returns {Ext.viewport.Ios.Statics}        this
		 */
		initConfig? (config: object): Ext.viewport.Ios.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                   [value] The value to set for the name parameter.
		 * @returns {Ext.viewport.Ios.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.viewport.Ios.Statics;
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
		 * @returns {Ext.viewport.Ios.Statics}  
		 */
		statics? (): Ext.viewport.Ios.Statics;
	}
}
declare namespace Ext.viewport.WindowsPhone {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.viewport.WindowsPhone](https://docs.sencha.com/extjs/6.0.1/modern/Ext.viewport.WindowsPhone.html)
	 * Windows Phone version of Viewport.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The item from the [items](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-items) collection that will be active first. This is
		 * usually only meaningful in a [card layout](https://docs.sencha.com/extjs/6.0.1/modern/Ext.layout.Card.html), where only one item can be active at a
		 * time. If passes a string, it will be assumed to be a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {object|string|number}
		 */
		activeItem?: object | string | number;
		/** 
		 * Auto blur the focused element when touching on a non-input. This is used to work around Android bugs
		 * where the virtual keyboard is not hidden when tapping outside an input.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoBlurInput?: boolean;
		/** 
		 * If `true`, child items will be destroyed as soon as they are [removed](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-remove)
		 * from this container.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoMaximize?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoRender?: boolean;
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
		 * Animation to be used during transitions of cards.
		 * @configuration
		 * @optional
		 * @type {string|object|boolean}
		 */
		cardSwitchAnimation?: string | object | boolean;
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
		 * We used a [Ext.ComponentQuery](https://docs.sencha.com/extjs/6.0.1/modern/Ext.ComponentQuery.html) selector to listen to the [tap](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#event-tap) event on any
		 * [button](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html) anywhere inside the Container that has the [text](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Button.html#cfg-text) 'Disable'.
		 * Whenever a Component matching that selector fires the `tap` event our `hideMe` function is called. `hideMe` is
		 * called with scope: `this` (e.g. `this` is the Container instance).
		 * @configuration
		 * @optional
		 * @default {}
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
		 * The default [xtype](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Component.html) of child Components to create in this Container when a child item
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
		 * @default '100%'
		 * @type {string}
		 */
		height?: string;
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
		 * When using a [modal](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#cfg-modal) Component, setting this to `true` will hide the modal
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
		 * See the [layouts guide](#!/guides/layouts) for more information.
		 * @configuration
		 * @optional
		 * @default 'card'
		 * @type {object|string}
		 */
		layout?: object | string;
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
		 * display a loading mask. Please refer to the [Ext.LoadMask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.LoadMask.html) component to see other configurations.
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
		 * There are also two convenient methods, [mask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-mask) and [unmask](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html#method-unmask), to allow you to mask and unmask
		 * this container at any time.
		 * 
		 * Remember, the [Ext.Viewport](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Viewport.html) is always a container, so if you want to mask your whole application at anytime,
		 * can call:
		 * 
		 *    Ext.Viewport.setMasked({
		 *        xtype: 'loadmask',
		 *        message: 'Hello'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {boolean|object|Ext.Mask|Ext.LoadMask}
		 */
		masked?: boolean | object | Ext.Mask | Ext.LoadMask;
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
		 * An object of all the menus on this viewport.
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		menus?: object;
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
		 * `true` to make this Container modal. This will create a mask underneath the Container
		 * that covers its parent and does not allow the user to interact with any other Components until this
		 * Container is dismissed.
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
		 * Whether or not to always prevent default panning behavior of the
		 * browser's viewport.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		preventPanning?: boolean;
		/** 
		 * `true` to attempt to stop zooming when you double tap on the screen on mobile devices,
		 * typically HTC devices with HTC Sense UI.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		preventZooming?: boolean;
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
		 * If `true`, this container will be marked as being a point in the hierarchy where
		 * references to items with a specified `reference` config will be held. The container
		 * will automatically become a referenceHolder if a controller is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Container.html) for more information
		 * about references &amp; reference holders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		referenceHolder?: boolean;
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
		 * @default {translationMethod: 'csstransform'}
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
		 * @default true
		 * @type {boolean}
		 */
		useBodyElement?: boolean;
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
		 * @configuration
		 * @optional
		 * @default '100%'
		 * @type {string}
		 */
		width?: string;
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
		 * @param   {object}                            config
		 * @returns {Ext.viewport.WindowsPhone.Statics}        this
		 */
		initConfig? (config: object): Ext.viewport.WindowsPhone.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                            [value] The value to set for the name parameter.
		 * @returns {Ext.viewport.WindowsPhone.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.viewport.WindowsPhone.Statics;
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
		 * @returns {Ext.viewport.WindowsPhone.Statics}  
		 */
		statics? (): Ext.viewport.WindowsPhone.Statics;
	}
}
