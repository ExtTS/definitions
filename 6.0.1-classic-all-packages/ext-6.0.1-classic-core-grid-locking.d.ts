declare namespace Ext.grid.locking {
	/** 
	 * Private class which acts as a HeaderContainer for the Lockable which aggregates all columns
	 * from both sides of the Lockable. It is never rendered, it's just used to interrogate the
	 * column collection.
	 * @private (class)
	 */
	class HeaderContainer extends Ext.grid.header.Container {}
	/** 
	 * Lockable is a private mixin which injects lockable behavior into any
	 * TablePanel subclass such as GridPanel or TreePanel. TablePanel will
	 * automatically inject the [Ext.grid.locking.Lockable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html) mixin in when one of the
	 * these conditions are met:
	 * 
	 * - The TablePanel has the lockable configuration set to true
	 * - One of the columns in the TablePanel has locked set to true/false
	 * 
	 * Each TablePanel subclass must register an alias. It should have an array
	 * of configurations to copy to the 2 separate tablepanels that will be generated
	 * to note what configurations should be copied. These are named normalCfgCopy and
	 * lockedCfgCopy respectively.
	 * 
	 * Configurations which are specified in this class will be available on any grid or
	 * tree which is using the lockable functionality.
	 * 
	 * By default the two grids, "locked" and "normal" will be arranged using an [hbox](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.HBox.html)
	 * layout. If the lockable grid is configured with [`split:true`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html#cfg-split), a vertical splitter
	 * will be placed between the two grids to resize them.
	 * 
	 * It is possible to override the layout of the lockable grid, or example, you may wish to
	 * use a border layout and have one of the grids collapsible.
	 * @private (class)
	 */
	class Lockable extends Ext.Base {}
	/** 
	 * @private (class)
	 */
	class RowSynchronizer extends Ext.Base {}
	/** 
	 * This class is used internally to provide a single interface when using
	 * a locking grid. Internally, the locking grid creates two separate grids,
	 * so this class is used to map calls appropriately.
	 * @private (class)
	 */
	class View extends Ext.Base {}
}
declare namespace Ext.grid {
	class Lockable extends Ext.grid.locking.Lockable {}
	class LockingView extends Ext.grid.locking.View {}
}
declare namespace Ext.grid.locking.HeaderContainer {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.locking.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html)
	 * Private class which acts as a HeaderContainer for the Lockable which aggregates all columns
	 * from both sides of the Lockable. It is never rendered, it's just used to interrogate the
	 * column collection.
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
		 * @returns {Ext.grid.locking.HeaderContainer|Ext.grid.header.Container|Ext.container.Container|Ext.Component|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.locking.HeaderContainer;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.header.Container;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.container.Container;
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
		 * @param   {object}                                                                                                    members
		 * @returns {Ext.grid.locking.HeaderContainer|Ext.grid.header.Container|Ext.container.Container|Ext.Component|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.locking.HeaderContainer;
		addStatics? (members: object): typeof Ext.grid.header.Container;
		addStatics? (members: object): typeof Ext.container.Container;
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
		 * @returns {Ext.grid.locking.HeaderContainer|Ext.grid.header.Container|Ext.container.Container|Ext.Component|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.locking.HeaderContainer;
		addInheritableStatics? (members: object): typeof Ext.grid.header.Container;
		addInheritableStatics? (members: object): typeof Ext.container.Container;
		addInheritableStatics? (members: object): typeof Ext.Component;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                                                                    name
		 * @param   {object}                                                                                                    member
		 * @returns {Ext.grid.locking.HeaderContainer|Ext.grid.header.Container|Ext.container.Container|Ext.Component|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.locking.HeaderContainer;
		addMember? (name: object, member: object): typeof Ext.grid.header.Container;
		addMember? (name: object, member: object): typeof Ext.container.Container;
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
		 * @returns {Ext.grid.locking.HeaderContainer|Ext.grid.header.Container|Ext.container.Container|Ext.Component|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.locking.HeaderContainer;
		onExtended? (fn: object, scope: object): typeof Ext.grid.header.Container;
		onExtended? (fn: object, scope: object): typeof Ext.container.Container;
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
declare namespace Ext.grid.locking.Lockable {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.locking.Lockable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html)
	 * Lockable is a private mixin which injects lockable behavior into any
	 * TablePanel subclass such as GridPanel or TreePanel. TablePanel will
	 * automatically inject the [Ext.grid.locking.Lockable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html) mixin in when one of the
	 * these conditions are met:
	 * 
	 * - The TablePanel has the lockable configuration set to true
	 * - One of the columns in the TablePanel has locked set to true/false
	 * 
	 * Each TablePanel subclass must register an alias. It should have an array
	 * of configurations to copy to the 2 separate tablepanels that will be generated
	 * to note what configurations should be copied. These are named normalCfgCopy and
	 * lockedCfgCopy respectively.
	 * 
	 * Configurations which are specified in this class will be available on any grid or
	 * tree which is using the lockable functionality.
	 * 
	 * By default the two grids, "locked" and "normal" will be arranged using an [hbox](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.HBox.html)
	 * layout. If the lockable grid is configured with [`split:true`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html#cfg-split), a vertical splitter
	 * will be placed between the two grids to resize them.
	 * 
	 * It is possible to override the layout of the lockable grid, or example, you may wish to
	 * use a border layout and have one of the grids collapsible.
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
		 * @param   {object}                             members    The members to add to this class.
		 * @param   {boolean}                            [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                            [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.locking.Lockable|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.locking.Lockable;
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
		 * @param   {object}                             members
		 * @returns {Ext.grid.locking.Lockable|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.locking.Lockable;
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
		 * @param   {object}                             members
		 * @returns {Ext.grid.locking.Lockable|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.locking.Lockable;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                             name
		 * @param   {object}                             member
		 * @returns {Ext.grid.locking.Lockable|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.locking.Lockable;
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
		 * @param   {object}                             fn
		 * @param   {object}                             scope
		 * @returns {Ext.grid.locking.Lockable|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.locking.Lockable;
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
declare namespace Ext.grid.locking.RowSynchronizer {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.locking.RowSynchronizer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.RowSynchronizer.html)
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
		 * @param   {object}                                    members    The members to add to this class.
		 * @param   {boolean}                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.grid.locking.RowSynchronizer|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.locking.RowSynchronizer;
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
		 * @param   {object}                                    members
		 * @returns {Ext.grid.locking.RowSynchronizer|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.locking.RowSynchronizer;
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
		 * @param   {object}                                    members
		 * @returns {Ext.grid.locking.RowSynchronizer|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.locking.RowSynchronizer;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                    name
		 * @param   {object}                                    member
		 * @returns {Ext.grid.locking.RowSynchronizer|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.locking.RowSynchronizer;
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
		 * @param   {object}                                    fn
		 * @param   {object}                                    scope
		 * @returns {Ext.grid.locking.RowSynchronizer|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.locking.RowSynchronizer;
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
declare namespace Ext.grid.locking.View {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.grid.locking.View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.View.html)
	 * This class is used internally to provide a single interface when using
	 * a locking grid. Internally, the locking grid creates two separate grids,
	 * so this class is used to map calls appropriately.
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
		 * @returns {Ext.grid.locking.View|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.grid.locking.View;
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
		 * @returns {Ext.grid.locking.View|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.grid.locking.View;
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
		 * @param   {object}                         members
		 * @returns {Ext.grid.locking.View|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.grid.locking.View;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                         name
		 * @param   {object}                         member
		 * @returns {Ext.grid.locking.View|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.grid.locking.View;
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
		 * @param   {object}                         fn
		 * @param   {object}                         scope
		 * @returns {Ext.grid.locking.View|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.grid.locking.View;
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
declare namespace Ext.grid.locking.HeaderContainer.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.HeaderContainer.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.grid.locking.HeaderContainer.methodParams.forceComponentLayout {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.HeaderContainer.forceComponentLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html#method-forceComponentLayout)
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
declare namespace Ext.grid.locking.HeaderContainer.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.HeaderContainer.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.grid.locking.HeaderContainer.methodParams.onFocusEnter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.HeaderContainer.onFocusEnter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html#method-onFocusEnter)
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
declare namespace Ext.grid.locking.HeaderContainer.methodParams.onFocusLeave {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.HeaderContainer.onFocusLeave](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html#method-onFocusLeave)
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
declare namespace Ext.grid.locking.HeaderContainer.methodParams.updateLayout {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.HeaderContainer.updateLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html#method-updateLayout)
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
declare namespace Ext.grid.locking.View.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.View.addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.View.html#method-addListener)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.grid.locking.View.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.View.on](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.View.html#method-on)
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
		 * Causes the handler to be scheduled to run in an [Ext.util.DelayedTask](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.DelayedTask.html) delayed
		 *   by the specified number of milliseconds. If the event fires again within that time,
		 *   the original handler is _not_ invoked, but the new handler is scheduled in its place.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Causes the handler to be scheduled to run at the next
		 *   [animation frame event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Function.html#method-requestAnimationFrame). If the
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
		 * **This option is only valid for listeners bound to [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html).**
		 *   The name of a Component property which references an [element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html)
		 *   to add a listener to.
		 * 
		 *   This option is useful during Component construction to add DOM event listeners to
		 *   elements of [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) which will exist only after the
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
		 *   The "delegate" option is only available on [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) instances (or
		 *   when attaching a listener to a [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) via a Component using the
		 *   element option).
		 * 
		 *   See the _delegate_ example below.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		delegate?: string;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopPropagation](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopPropagation) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopPropagation?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [preventDefault](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-preventDefault) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		preventDefault?: boolean;
		/** 
		 * **This option is only valid for listeners bound to [Elements](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html).**
		 *   `true` to call [stopEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html#method-stopEvent) on the event object
		 *   before firing the handler.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		stopEvent?: boolean;
		/** 
		 * Optional arguments to pass to the handler function. Any additional arguments
		 *   passed to [fireEvent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-fireEvent) will be appended
		 *   to these arguments.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		args?: any[];
		/** 
		 * When specified as `true`, the function returns a `destroyable` object. An object
		 *   which implements the `destroy` method which removes all listeners added in this call.
		 *   This syntax can be a helpful shortcut to using [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un); particularly when
		 *   removing multiple listeners.  _NOTE_ - not compatible when using the _element_
		 *   option.  See [un](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-un) for the proper syntax for removing listeners added using the
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
declare namespace Ext.grid.locking.View.methodParams.onFocusEnter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.View.onFocusEnter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.View.html#method-onFocusEnter)
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
declare namespace Ext.grid.locking.View.methodParams.onFocusLeave {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.grid.locking.View.onFocusLeave](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.View.html#method-onFocusLeave)
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
declare namespace Ext.grid.locking.HeaderContainer {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.locking.HeaderContainer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.HeaderContainer.html)
	 * Private class which acts as a HeaderContainer for the Lockable which aggregates all columns
	 * from both sides of the Lockable. It is never rendered, it's just used to interrogate the
	 * column collection.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * DOM tabIndex attribute to set on the
		 * active Focusable child of this container when using the "Roaming tabindex"
		 * technique. Set this value to > 0 to precisely control the tabbing order
		 * of the components/containers on the page.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		activeChildTabIndex?: number;
		/** 
		 * An incrementing numeric counter indicating activation index for use by the [zIndexManager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Floating.html#property-zIndexManager)
		 * to sort its stack.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		activeCounter?: number;
		/** 
		 * A string component id or the numeric index of the component that should be
		 * initially activated within the container's layout on render.  For example,
		 * activeItem: 'item-1' or activeItem: 0 (index 0 = the first item in the
		 * container's collection).  activeItem only applies to layout styles that can
		 * display items one at a time (like [Ext.layout.container.Card](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Card.html) and
		 * [Ext.layout.container.Fit](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Fit.html)).
		 * @configuration
		 * @optional
		 * @type {string|number}
		 */
		activeItem?: string | number;
		/** 
		 * A Component or Element by which to position this component according to the [defaultAlign](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-defaultAlign).
		 * Defaults to the owning Container.
		 * 
		 * _Only applicable if this component is [floating](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-floating)_
		 * 
		 * _Used upon first show_.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		alignTarget?: string;
		/** 
		 * A flag indicating that this component should be on the top of the z-index stack for use by the [zIndexManager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Floating.html#property-zIndexManager)
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
		 * by an [Anchor Layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Anchor.html).
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
		 * Defines the anchoring size of container.
		 * Either a number to define the width of the container or an object with `width` and `height` fields.
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		anchorSize?: number | object;
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
		 * The selector works the same way as [ariaLabelledBy](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ariaDescribedBy?: string;
		/** 
		 * ARIA label for this Component. It is best to use
		 * [ariaLabelledBy](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy) option instead, because screen readers prefer
		 * `aria-labelledby` attribute to `aria-label`. [ariaLabel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Accessible.html#cfg-ariaLabel) and
		 * [ariaLabelledBy](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy) config options are mutually exclusive.
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
		 * [ariaLabelledBy](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Accessible.html#cfg-ariaLabelledBy) and [ariaLabel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Accessible.html#cfg-ariaLabel) config options are
		 * mutually exclusive, and `ariaLabelledBy` has the higher precedence.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		ariaLabelledBy?: string;
		/** 
		 * If true the container will automatically destroy any contained component that is removed
		 * from it, else destruction must be handled manually.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
		/** 
		 * A tag name or [DomHelper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Helper.html) spec used to create the [Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getEl) which will
		 * encapsulate this Component.
		 * 
		 * You do not normally need to specify this. For the base classes [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) and
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html), this defaults to **'div'**. The more complex Sencha classes use a more
		 * complex DOM structure specified by their own [renderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderTpl)s.
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
		 * This config is intended mainly for non-[floating](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-floating) Components which may or may not be shown. Instead of using
		 * [renderTo](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderTo) in the configuration, and rendering upon construction, this allows a Component to render itself
		 * upon first _[show](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-show)_. If [floating](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-floating) is `true`, the value of this config is omitted as if it is `true`.
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
		 * This should not be combined with [overflowX](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-overflowX) or  [overflowY](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-overflowY).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoScroll?: boolean;
		/** 
		 * `true` to automatically show the component upon creation. This config option may only be used for
		 * [floating](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-floating) components or components that use [autoRender](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-autoRender).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		autoShow?: boolean;
		/** 
		 * The base CSS class to apply to this component's element. This will also be prepended to elements within this
		 * component like Panel's body will get a class `x-panel-body`. This means that if you create a subclass of Panel, and
		 * you want it to get all the Panels styling for the element and the body, you leave the `baseCls` `x-panel` and use
		 * `componentCls` to add specific styling for this component.
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'grid-header-ct'
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
		 * The bind expressions are presented to [`Ext.app.ViewModel.bind`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.app.ViewModel.html#method-bind). The
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
		 * @default true
		 * @type {number|string|boolean}
		 */
		border?: number | string | boolean;
		/** 
		 * An array of events that, when fired, should be bubbled to any parent container.
		 * See [Ext.util.Observable.enableBubble](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-enableBubble).
		 * @configuration
		 * @optional
		 * @type {string[]}
		 */
		bubbleEvents?: string[];
		/** 
		 * The canonical form of `childEls` is an object keyed by child's property name
		 * with values that are objects with the following properties.
		 * 
		 * - `itemId` - The id to combine with the Component's id that is the id of the
		 *   child element.
		 * - `id` - The id of the child element.
		 * - `leaf` - Set to `true` to ignore content when scanning for childEls. This
		 *   should be set on things like the generated content for an [`Ext.view.View`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html).
		 * - `select`: A selector that will be passed to [Ext.dom.Element.select](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html#method-select).
		 * - `selectNode`: A selector that will be passed to [Ext.dom.Element.selectNode](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html#method-selectNode).
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
		 * **Note:** `childEl`s in the [renderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderTpl)
		 * must be referenced in a **data-ref** attribute.  Notice in the above example
		 * that the "title" `childEl` is set in the `renderTpl` using
		 * **data-ref="title"**.
		 * 
		 * When using `select`, the property will be an instance of [Ext.CompositeElement](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.CompositeElement.html).
		 * In all other cases, the property will be an [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html) or `null`
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
		 * Defines the column width inside [column layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Column.html).
		 * 
		 * The columnWidth property is always evaluated as a percentage and must be a decimal value greater than 0 and
		 * less than 1 (e.g., .25).  See the description at the top of [column layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Column.html) for
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
		 * elements sizing (Such as [input fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Base.html)) come with their own componentLayout managers.
		 * 
		 * The [default layout manager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Auto.html) will be used on instances of the base [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)
		 * class which simply sizes the Component's encapsulating element to the height and width specified in the
		 * [setSize](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-setSize) method.
		 * @configuration
		 * @optional
		 * @default 'autocomponent'
		 * @type {string|object}
		 */
		componentLayout?: string | object;
		/** 
		 * True to constrain this Components within its containing element, false to allow it to fall outside of its containing
		 * element. By default this Component will be rendered to `document.body`. To render and constrain this Component within
		 * another element specify [renderTo](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderTo).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		constrain?: boolean;
		/** 
		 * A [Region](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Region.html) (or an element from which a Region measurement will be read) which is used
		 * to constrain the component. Only applies when the component is floating.
		 * @configuration
		 * @optional
		 * @type {Ext.util.Region|Ext.dom.Element}
		 */
		constrainTo?: Ext.util.Region | Ext.dom.Element;
		/** 
		 * An object or a string (in TRBL order) specifying insets from the configured [constrain region](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-constrainTo)
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
		 * [HTML](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-html) has been inserted_, and so the document will not contain this element at the time
		 * the [render](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-render) event is fired.
		 * 
		 * The specified HTML element used will not participate in any **[`layout`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-layout)**
		 * scheme that the Component may use. It is just HTML. Layouts operate on child
		 * **[`items`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-items)**.
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
		 * The initial set of data to apply to the [`tpl`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-tpl) to update the content
		 * area of the Component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		data?: object;
		/** 
		 * The default [Ext.dom.Element#getAlignToXY](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Positionable.html#method-getAlignToXY) anchor position value for this component
		 * relative to its [alignTarget](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-alignTarget) (which defaults to its owning Container).
		 * 
		 * _Only applicable if this component is [floating](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-floating)_
		 * 
		 * _Used upon first show_.
		 * @configuration
		 * @optional
		 * @default "c-c"
		 * @type {string}
		 */
		defaultAlign?: string;
		/** 
		 * Specifies a child Component to receive focus when this Container's [focus](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-focus)
		 * method is called. Should be a valid [query](https://docs.sencha.com/extjs/6.0.1/classic/Ext.ComponentQuery.html) selector.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		defaultFocus?: string;
		/** 
		 * If `true`, this component will be the default scope (this pointer) for events
		 * specified with string names so that the scope can be dynamically resolved. The
		 * component will automatically become the defaultListenerScope if a
		 * [controller](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Bindable.html#cfg-controller) is specified.
		 * 
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html) for some sample
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
		 * The default [xtype](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) of child Components to create in this Container when
		 * a child item is specified as a raw configuration object, rather than as an instantiated Component.
		 * @configuration
		 * @optional
		 * @default 'gridcolumn'
		 * @type {string}
		 */
		defaultType?: string;
		/** 
		 * Width of the header if no width or flex is specified.
		 * @configuration
		 * @optional
		 * @default 100
		 * @type {number}
		 */
		defaultWidth?: number;
		/** 
		 * This option is a means of applying default settings to all added items whether added
		 * through the [items](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-items) config or via the [add](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-add) or [insert](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-insert) methods.
		 * 
		 * Defaults are applied to both config objects and instantiated components conditionally
		 * so as not to override existing properties in the item (see [Ext.applyIf](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-applyIf)).
		 * 
		 * If the defaults option is specified as a function, then the function will be called
		 * using this Container as the scope (`this` reference) and passing the added item as
		 * the first parameter. Any resulting object from that call is then applied to the item
		 * as default properties.
		 * 
		 * For example, to automatically apply padding to the body of each of a set of
		 * contained [Ext.panel.Panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.panel.Panel.html) items, you could pass:
		 * `defaults: {bodyStyle:'padding:15px'}`.
		 * 
		 * Usage:
		 * 
		 *    defaults: { // defaults are applied to items, not the container
		 *        scrollable: true
		 *    },
		 *    items: [
		 *        // default will not be applied here, panel1 will be scrollable: false
		 *        {
		 *            xtype: 'panel',
		 *            id: 'panel1',
		 *            scrollable: false
		 *        },
		 *        // this component will have scrollable: true
		 *        new Ext.panel.Panel({
		 *            id: 'panel2'
		 *        })
		 *    ]
		 * 
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|object}
		 */
		defaults?: ExtGlobalFunction | object;
		/** 
		 * True to move any component to the detachedBody when the component is
		 * removed from this container. This option is only applicable when the component is not destroyed while
		 * being removed, see [autoDestroy](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.header.Container.html#cfg-autoDestroy) and [remove](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.header.Container.html#method-remove). If this option is set to false, the DOM
		 * of the component will remain in the current place until it is explicitly moved.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		detachOnRemove?: boolean;
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
		 * The side of the [panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.panel.Panel.html) where this component is to be
		 * docked when specified in the panel's
		 * [dockedItems](https://docs.sencha.com/extjs/6.0.1/classic/Ext.panel.Panel.html#cfg-dockedItems) config.
		 * 
		 * Possible values are:
		 * 
		 * - top
		 * - bottom
		 * - left
		 * - right
		 * @configuration
		 * @optional
		 * @default 'top'
		 * @type {'top'|'bottom'|'left'|'right'}
		 */
		dock?: 'top' | 'bottom' | 'left' | 'right';
		/** 
		 * Specify as true to make a [floating](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-floating) Component draggable using the Component's encapsulating element as
		 * the drag handle.
		 * 
		 * This may also be specified as a config object for the [ComponentDragger](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.ComponentDragger.html) which is
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
		 * False to disable column hiding within this grid.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableColumnHide?: boolean;
		/** 
		 * Disable FocusableContainer behavior by default, since we only want it
		 * to be enabled for the root header container (we'll set the flag in initComponent)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		enableFocusableContainer?: boolean;
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
		 * Flex may be applied to **child items** of a box layout ([vbox](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.VBox.html) or
		 * [hbox](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.HBox.html)). Each child item with a flex property will
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
		 * Components such as [Window](https://docs.sencha.com/extjs/6.0.1/classic/Ext.window.Window.html)s and [Menu](https://docs.sencha.com/extjs/6.0.1/classic/Ext.menu.Menu.html)s are floating by default.
		 * 
		 * Floating Components that are programmatically [rendered](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-render) will register
		 * themselves with the global [ZIndexManager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.WindowManager.html)
		 * 
		 * ### Floating Components as child items of a Container
		 * 
		 * A floating Component may be used as a child item of a Container. This just allows the floating Component to seek
		 * a ZIndexManager by examining the ownerCt chain.
		 * 
		 * When configured as floating, Components acquire, at render time, a [ZIndexManager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.ZIndexManager.html) which
		 * manages a stack of related floating Components. The ZIndexManager sorts its stack according to
		 * an incrementing access counter and the [alwaysOnTop](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Floating.html#cfg-alwaysOnTop) config when the Component's [toFront](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-toFront) method is called.
		 * 
		 * The ZIndexManager is found by traversing up the [ownerCt](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#property-ownerCt) chain to find an ancestor which itself is
		 * floating. This is so that descendant floating Components of floating _Containers_ (Such as a ComboBox dropdown
		 * within a Window) can have its zIndex managed relative to any siblings, but always **above** that floating
		 * ancestor Container.
		 * 
		 * If no floating ancestor is found, a floating Component registers itself with the default [ZIndexManager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.WindowManager.html).
		 * 
		 * Floating components _do not participate in the Container's layout_. Because of this, they are not rendered until
		 * you explicitly [show](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-show) them.
		 * 
		 * After rendering, the ownerCt reference is deleted, and the [floatParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#property-floatParent) property is set to the found
		 * floating ancestor Container. If no floating ancestor Container was found the [floatParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#property-floatParent) property will
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
		 * Specifies whether the floated component should be automatically [focused](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-focus) when
		 * it is [brought to the front](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Floating.html#method-toFront).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		focusOnToFront?: boolean;
		/** 
		 * When inside FormPanel, any component configured with `formBind: true` will
		 * be enabled/disabled depending on the validity state of the form.
		 * See [Ext.form.Panel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.Panel.html) for more information and example.
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
		 * The extra space taken up by this framing is available from the read only property [frameSize](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#property-frameSize).
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
		 * An HTML fragment, or a [DomHelper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Helper.html) specification to use as the layout element content.
		 * The HTML content is added after the component is rendered, so the document will not contain this HTML at the time
		 * the [render](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-render) event is fired. This content is inserted into the body _before_ any configured [contentEl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-contentEl)
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
		 * using [Ext.getCmp](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-getCmp).
		 * 
		 * Instead of using assigned ids, consider a [reference](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-reference) config and a [ViewController](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-controller)
		 * to respond to events and perform processing upon this Component.
		 * 
		 * Alternatively, [itemId](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-itemId) and [ComponentQuery](https://docs.sencha.com/extjs/6.0.1/classic/Ext.ComponentQuery.html) can be
		 * used to perform selector-based searching for Components analogous to DOM querying.
		 * The [Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html) class contains several helpful
		 * [shortcut methods](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-down) to query its descendant
		 * Components by selector.
		 * 
		 * Note that this `id` will also be used as the element id for the containing HTML
		 * element that is rendered to the page for this component. This allows you to write
		 * id-based CSS rules to style the specific instance of this component uniquely, and
		 * also to select sub-elements using this component's `id` as the parent.
		 * 
		 * Defaults to an [auto-assigned id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getId).
		 * 
		 * **Note**: Valid identifiers start with a letter or underscore and are followed by
		 * (optional) additional letters, underscores, digits or hyphens.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		id?: string;
		/** 
		 * DOM tabIndex attribute to set on
		 * inactive Focusable children of this container when using the "Roaming tabindex"
		 * technique. This value rarely needs to be changed from its default.
		 * @configuration
		 * @optional
		 * @default -1
		 * @type {number}
		 */
		inactiveChildTabIndex?: number;
		/** 
		 * The **unique** id of this component instance within its container. See also the
		 * [reference](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-reference) config.
		 * 
		 * An `itemId` can be used as an alternative way to get a reference to a component when no object reference is
		 * available. Instead of using an [`id`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-id) with [getCmp](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-getCmp), use
		 * `itemId` with [getComponent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-getComponent) which will
		 * retrieve `itemId`'s or [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-id)'s. Since `itemId`'s are an index to the container's
		 * internal collection, the `itemId` is scoped locally to the container -- avoiding
		 * potential conflicts with [Ext.ComponentManager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.ComponentManager.html) which requires a **unique**
		 * [`id`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-id) values.
		 * 
		 *    var c = new Ext.panel.Panel({ //
		 *        height: 300,
		 *        renderTo: document.body,
		 *        layout: 'auto',
		 *        items: [
		 *            {
		 *                itemId: 'p1',
		 *                title: 'Panel 1',
		 *                height: 150
		 *            },
		 *            {
		 *                itemId: 'p2',
		 *                title: 'Panel 2',
		 *                height: 150
		 *            }
		 *        ]
		 *    })
		 *    p1 = c.getComponent('p1'); // not the same as Ext.getCmp()
		 *    p2 = p1.ownerCt.getComponent('p2'); // reference via a sibling
		 * 
		 * Also see [id](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-id), [`Ext.container.Container.query`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-query), [`Ext.container.Container.down`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-down) and
		 * [`Ext.container.Container.child`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-child).
		 * 
		 * **Note**: Valid identifiers start with a letter or underscore and are followed by
		 * (optional) additional letters, underscores, digits or hyphens.
		 * 
		 * **Note**: to access the container of an item see [ownerCt](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#property-ownerCt).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		itemId?: string;
		/** 
		 * A single item, or an array of child Components to be added to this container
		 * 
		 * **Unless configured with a [layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-layout), a Container simply renders child
		 * Components serially into its encapsulating element and performs no sizing or
		 * positioning upon them.**
		 * 
		 * Example:
		 * 
		 *    // specifying a single item
		 *    items: {...},
		 *    layout: 'fit',    // The single items is sized to fit
		 *    
		 *    // specifying multiple items
		 *    items: [{...}, {...}],
		 *    layout: 'hbox', // The items are arranged horizontally
		 * 
		 * Each item may be:
		 * 
		 * - A [Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)
		 * - A Component configuration object
		 * 
		 * If a configuration object is specified, the actual type of Component to be
		 * instantiated my be indicated by using the [xtype](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-xtype) option.
		 * 
		 * Every Component class has its own [xtype](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-xtype).
		 * 
		 * If an [xtype](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-xtype) is not explicitly specified, the
		 * [defaultType](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-defaultType) for the Container is used, which by default is usually `panel`.
		 * 
		 * # Notes:
		 * 
		 * Ext uses lazy rendering. Child Components will only be rendered
		 * should it become necessary. Items are automatically laid out when they are first
		 * shown (no sizing is done while hidden), or in response to a [updateLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-updateLayout) call.
		 * 
		 * Do not specify [contentEl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.panel.Panel.html#cfg-contentEl) or
		 * [html](https://docs.sencha.com/extjs/6.0.1/classic/Ext.panel.Panel.html#cfg-html) with `items`.
		 * @configuration
		 * @optional
		 * @type {object|object[]}
		 */
		items?: object | object[];
		/** 
		 * Handlers for keydown events.
		 * 
		 * This object's keys correspond to keyboard key names in
		 * [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/classic/Ext.event.Event.html), with values defined as method
		 * names that should be executed when a keydown event occurs
		 * for the specified key name.
		 * For example:
		 * 
		 *     Ext.define('MyButton', {
		 *         extend: 'Ext.button.Button',
		 *    
		 *         config: {
		 *             keyHandlers: {
		 *                 ENTER: 'onEnterKey'
		 *             }
		 *         },
		 *    
		 *         onEnterKey: function(event) {
		 *             ...
		 *         }
		 *     });
		 * 
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {object}
		 */
		keyHandlers?: object;
		/** 
		 * **Important**: In order for child items to be correctly sized and
		 * positioned, typically a layout manager **must** be specified through
		 * the `layout` configuration option.
		 * 
		 * The sizing and positioning of child [items](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-items) is the responsibility of
		 * the Container's layout manager which creates and manages the type of layout
		 * you have in mind.  For example:
		 * 
		 * If the layout configuration is not explicitly specified for
		 * a general purpose container (e.g. Container or Panel) the
		 * [default layout manager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Auto.html) will be used
		 * which does nothing but render child components sequentially into the
		 * Container (no sizing or positioning will be performed in this situation).
		 * 
		 * **layout** may be specified as either as an Object or as a String:
		 * 
		 * ## Specify as an Object
		 * 
		 * Example usage:
		 * 
		 *    layout: {
		 *        type: 'vbox',
		 *        align: 'left'
		 *    }
		 * 
		 * - **type**
		 *   The layout type to be used for this container.  If not specified,
		 *   a default [Ext.layout.container.Auto](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Auto.html) will be created and used.
		 *   Valid layout `type` values are listed in [Ext.enums.Layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Layout.html).
		 * - Layout specific configuration properties
		 *   Additional layout specific configuration properties may also be
		 *   specified. For complete details regarding the valid config options for
		 *   each layout type, see the layout class corresponding to the `type`
		 *   specified.
		 * 
		 * ## Specify as a String
		 * 
		 * Example usage:
		 * 
		 *    layout: 'vbox'
		 * 
		 * - **layout**
		 *   The layout `type` to be used for this container (see [Ext.enums.Layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Layout.html)
		 *   for list of valid values).
		 *   Additional layout specific configuration properties. For complete
		 *   details regarding the valid config options for each layout type, see the
		 *   layout class corresponding to the `layout` specified.
		 * 
		 * ## Configuring the default layout type
		 * 
		 * If a certain Container class has a default layout (For example a [Toolbar](https://docs.sencha.com/extjs/6.0.1/classic/Ext.toolbar.Toolbar.html)
		 * with a default `Box` layout), then to simply configure the default layout,
		 * use an object, but without the `type` property:
		 * 
		 *    xtype: 'toolbar',
		 *    layout: {
		 *        pack: 'center'
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default 'auto'
		 * @type {Ext.enums.Layout|object}
		 */
		layout?: Ext.enums.Layout | object;
		/** 
		 * Components that achieve their internal layout results using solely CSS with no JS
		 * intervention must set this to true.  This allows the component to opt out of the
		 * layout run when used inside certain container layouts such as [Form](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Form.html) and [Auto](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Auto.html)
		 * resulting in a performance gain. The following components currently use liquid
		 * layout (`liquidLayout: true`):
		 * 
		 * - All Form Fields (subclasses of [Ext.form.field.Base](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Base.html))
		 * - [Ext.button.Button](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html)
		 * 
		 * It is important to keep in mind that components using liquidLayout do not fire
		 * the following events:
		 * 
		 * - [resize](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-resize)
		 * - [boxready](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-boxready)
		 * 
		 * In addition liquidLayout components do not call the following template methods:
		 * 
		 * - [afterComponentLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-afterComponentLayout)
		 * - [onBoxReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-onBoxReady)
		 * - [onResize](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-onResize)
		 * 
		 * Any component that needs to fire these events or to have these methods called during
		 * its life cycle needs to set `liquidLayout` to `false`.  The following example
		 * demonstrates how to enable the resize event for a
		 * [TextArea Field](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.TextArea.html):
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
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
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
		 * [Ext.util.ComponentDragger](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.ComponentDragger.html).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		liveDrag?: boolean;
		/** 
		 * A configuration object or an instance of a [Ext.ComponentLoader](https://docs.sencha.com/extjs/6.0.1/classic/Ext.ComponentLoader.html) to load remote content
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
		 * Related to the [childEls](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-childEls) configuration which specifies named properties which correspond to component sub-elements.
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
		 * This config enables binding to your [`Ext.data.Model.validators`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#cfg-validators). This
		 * is only processed by form fields (e.g., [`Ext.form.field.Text`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Text.html)) at present, but
		 * this setting is inherited and so can be set on a parent container.
		 * 
		 * When set to `true` by a component or not set by a component but inherited from
		 * an ancestor container, [`Ext.data.Validation`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Validation.html) records are used to automatically
		 * bind validation results for any form field to which a `value` is bound.
		 * 
		 * While this config can be set arbitrarily high in the component hierarchy, doing
		 * so can create a lot overhead if most of your form fields do not actually rely on
		 * `validators` in your data model.
		 * 
		 * Using this setting for a form that is bound to an [`Ext.data.Model`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html) might look
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
		 * [`Ext.data.Model.getValidation`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Model.html#method-getValidation) for further details.
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
		 * The default is overflow-x: 'hidden'. This should not be combined with [autoScroll](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-autoScroll).
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
		 * The default is overflow-y: 'hidden'. This should not be combined with [autoScroll](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-autoScroll).
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
		 * a valid plugin is that it contain an `init` method that accepts a reference of type [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html). When a component
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
		 * See [Ext.enums.Plugin](https://docs.sencha.com/extjs/6.0.1/classic/Ext.enums.Plugin.html) for list of all ptypes.
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Bindable.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Bindable.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Bindable.html#method-publishState) if the property has a
		 * setter method.  Let's use [setFieldLabel](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.Labelable.html#method-setFieldLabel) as an example:
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
		 * must be unique within its [view](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-referenceHolder)
		 * or its [ViewController](https://docs.sencha.com/extjs/6.0.1/classic/Ext.app.ViewController.html). See the documentation in
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html) for more information about references.
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
		 * See the introductory docs for [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html) for more information
		 * about references &amp; reference holders.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		referenceHolder?: boolean;
		/** 
		 * Defines the region inside [border layout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.Border.html).
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
		 * The data used by [renderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderTpl) in addition to the following property values of the component:
		 * 
		 * - id
		 * - ui
		 * - uiCls
		 * - baseCls
		 * - componentCls
		 * - frame
		 * 
		 * See [renderSelectors](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderSelectors) and [childEls](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-childEls) for usage examples.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		renderData?: object;
		/** 
		 * An object containing properties specifying CSS selectors which identify child elements
		 * created by the render process.
		 * 
		 * After the Component's internal structure is rendered according to the [renderTpl](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-renderTpl), this object is iterated through,
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
		 * Do _not_ use this option if the Component is to be a child item of a [Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html).
		 * It is the responsibility of the [Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html)'s
		 * [layout manager](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-layout) to render and manage its child items.
		 * 
		 * When using this config, a call to `render()` is not required.
		 * 
		 * See also: [render](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-render).
		 * @configuration
		 * @optional
		 * @type {string|HTMLElement|Ext.dom.Element}
		 */
		renderTo?: string | HTMLElement | Ext.dom.Element;
		/** 
		 * An [XTemplate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html) used to create the internal structure inside this Component's encapsulating
		 * [Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-getEl).
		 * 
		 * You do not normally need to specify this. For the base classes [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) and
		 * [Ext.container.Container](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html), this defaults to **`null`** which means that they will be initially rendered
		 * with no internal structure; they render their [Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#method-getEl) empty. The more specialized
		 * classes with complex DOM structures provide their own template definitions.
		 * 
		 * This is intended to allow the developer to create application-specific utility Components with customized
		 * internal structure.
		 * 
		 * Upon rendering, any created child elements may be automatically imported into object properties using the
		 * [renderSelectors](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-renderSelectors) and [childEls](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-childEls) options.
		 * @configuration
		 * @optional
		 * @default '{%this.renderContainer(out,values)%}'
		 * @type {Ext.XTemplate|string|string[]}
		 */
		renderTpl?: Ext.XTemplate | string | string[];
		/** 
		 * Specify as `true` to apply a [Resizer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.resizer.Resizer.html) to this Component after rendering.
		 * 
		 * May also be specified as a config object to be passed to the constructor of [Resizer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.resizer.Resizer.html)
		 * to override any defaults. By default the Component passes its minimum and maximum size, and uses
		 * [`Ext.resizer.Resizer.dynamic](https://docs.sencha.com/extjs/6.0.1/classic/Ext.resizer.Resizer.html#cfg-dynamic): false`
		 * @configuration
		 * @optional
		 * @type {boolean|object}
		 */
		resizable?: boolean | object;
		/** 
		 * A valid [Ext.resizer.Resizer](https://docs.sencha.com/extjs/6.0.1/classic/Ext.resizer.Resizer.html) handles config string. Only applies when resizable = true.
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
		 * Also accepts a configuration object for a [`Ext.scroll.Scroller`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.scroll.Scroller.html) if
		 * if advanced configuration is needed.
		 * 
		 * The getter for this config returns the [Scroller](https://docs.sencha.com/extjs/6.0.1/classic/Ext.scroll.Scroller.html)
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
		 * Specify as `true` to constrain column dragging so that a column cannot be dragged into or out of this column.
		 * 
		 * **Note that this config is only valid for column headers which contain child column headers, eg:**
		 * 
		 *      {
		 *          sealed: true
		 *          text: 'ExtJS',
		 *          columns: [{
		 *              text: '3.0.4',
		 *              dataIndex: 'ext304'
		 *          }, {
		 *              text: '4.1.0',
		 *              dataIndex: 'ext410'
		 *          }
		 *      }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		sealed?: boolean;
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
		 * [Ext.Shadow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Shadow.html), or a string indicating the shadow's display [Ext.Shadow.mode](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Shadow.html#cfg-mode). Set to false to
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
		 * Provides the default sortable state for all Headers within this HeaderContainer.
		 * Also turns on or off the menus in the HeaderContainer. Note that the menu is
		 * shared across every header and therefore turning it off will remove the menu
		 * items for every header.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		sortable?: boolean;
		/** 
		 * An array of events that, when fired, should trigger this object to
		 * save its state. Defaults to none. `stateEvents` may be any type
		 * of event supported by this object, including browser or custom events
		 * (e.g., `['click', 'customerchange']`).
		 * 
		 * See [`stateful`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-stateful) for an explanation of saving and
		 * restoring object state.
		 * @configuration
		 * @optional
		 * @type {string[]}
		 */
		stateEvents?: string[];
		/** 
		 * The unique id for this object to use for state management purposes.
		 * 
		 * See [stateful](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#cfg-stateful) for an explanation of saving and restoring state.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		stateId?: string;
		/** 
		 * A flag which causes the object to attempt to restore the state of
		 * internal properties from a saved state on startup. The object must have
		 * a [stateId](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#cfg-stateId) for state to be managed.
		 * 
		 * Auto-generated ids are not guaranteed to be stable across page loads and
		 * cannot be relied upon to save and restore the same state for a object.
		 * 
		 * For state saving to work, the state manager's provider must have been
		 * set to an implementation of [Ext.state.Provider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Provider.html) which overrides the
		 * [set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Provider.html#method-set) and [get](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Provider.html#method-get)
		 * methods to save and recall name/value pairs. A built-in implementation,
		 * [Ext.state.CookieProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.CookieProvider.html) is available.
		 * 
		 * To set the state provider for the current page:
		 * 
		 *     Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
		 *         expires: new Date(new Date().getTime()+(1000<em>60</em>60<em>24</em>7)), //7 days from now
		 *     }));
		 * 
		 * A stateful object attempts to save state when one of the events
		 *  listed in the [stateEvents](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#cfg-stateEvents) configuration fires.
		 *  
		 *  
		 *  
		 *  
		 *  To save state, a stateful object first serializes its state by
		 *  calling _[getState](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#method-getState)_.
		 *  
		 *  
		 *  
		 *  
		 *  The Component base class implements [getState](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#method-getState) to save its width and height within the state
		 *  only if they were initially configured, and have changed from the configured value.
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
		 *  The value yielded by getState is passed to [Ext.state.Manager.set](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Manager.html#method-set)
		 *  which uses the configured [Ext.state.Provider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Provider.html) to save the object
		 *  keyed by the [stateId](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#cfg-stateId).
		 *  
		 *  
		 *  
		 *  
		 *  During construction, a stateful object attempts to _restore_ its state by calling
		 *  [Ext.state.Manager.get](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Manager.html#method-get) passing the [stateId](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#cfg-stateId)
		 *  
		 *  
		 *  
		 *  
		 *  The resulting object is passed to [applyState](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#method-applyState)*. The default implementation of
		 *  [applyState](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#method-applyState) simply copies properties into the object, but a developer may
		 *  override this to support restoration of more complex application state.
		 *  
		 *  
		 *  
		 *  
		 *  You can perform extra processing on state save and restore by attaching
		 *  handlers to the [beforestaterestore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#event-beforestaterestore), [staterestore](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#event-staterestore),
		 *  [beforestatesave](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#event-beforestatesave) and [statesave](https://docs.sencha.com/extjs/6.0.1/classic/Ext.state.Stateful.html#event-statesave) events.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		stateful?: boolean;
		/** 
		 * A custom style specification to be applied to this component's Element. Should be a valid argument to
		 * [Ext.dom.Element.applyStyles](https://docs.sencha.com/extjs/6.0.1/classic/Ext.dom.Element.html#method-applyStyles).
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
		 * If true, suspend calls to updateLayout. Useful when batching multiple adds to a container
		 * and not passing them as multiple arguments or an array.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		suspendLayout?: boolean;
		/** 
		 * DOM tabIndex attribute for this Focusable's
		 * focusEl.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		tabIndex?: number;
		/** 
		 * True to automatically call [toFront](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-toFront) when the [show](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-show) method is called on an already visible,
		 * floating component.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		toFrontOnShow?: boolean;
		/** 
		 * An [Ext.Template](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Template.html), [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html) or an array of strings to form an [Ext.XTemplate](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html). Used in
		 * conjunction with the [`data`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-data) and [`tplWriteMode`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-tplWriteMode) configurations.
		 * @configuration
		 * @optional
		 * @type {Ext.XTemplate|Ext.Template|string|string[]}
		 */
		tpl?: Ext.XTemplate | Ext.Template | string | string[];
		/** 
		 * The Ext.(X)Template method to use when updating the content area of the Component.
		 * See [`Ext.XTemplate.overwrite`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.XTemplate.html#method-overwrite) for information on default mode.
		 * @configuration
		 * @optional
		 * @default 'overwrite'
		 * @type {string}
		 */
		tplWriteMode?: string;
		/** 
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Bindable.html#cfg-publishes).
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
		 * component's associated [`Data Session`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Session.html). This is
		 * determined by calling `getInheritedSession`.
		 * @configuration
		 * @optional
		 * @default {$value: null, lazy: true}
		 * @type {string|object|Ext.app.ViewModel}
		 */
		viewModel?: string | object | Ext.app.ViewModel;
		/** 
		 * HeaderContainer overrides the default weight of 0 for all docked items to 100.
		 * This is so that it has more priority over things like toolbars.
		 * @configuration
		 * @optional
		 * @default 100
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
		 * @configuration
		 * @optional
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * Called by the layout system after the Component has been laid out.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		afterComponentLayout? (): void;
		/** 
		 * Invoked after the Component has been hidden.
		 * 
		 * Gets passed the same `callback` and `scope` parameters that [onHide](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-onHide) received.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Function} [callback]
		 * @param   {object}   [scope]
		 * @returns {void}                
		 */
		afterHide? (callback?: ExtGlobalFunction, scope?: object): void;
		/** 
		 * Invoked after the Container has laid out (and rendered if necessary)
		 * its child Components.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.layout.container.Container} layout
		 * @returns {void}                                  
		 */
		afterLayout? (layout: Ext.layout.container.Container): void;
		/** 
		 * Allows additional behavior after rendering is complete. At this stage, the
		 * [Component's](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) [Element](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-getEl) will have
		 * been styled according to the configuration, will have had any configured CSS
		 * class names added, and will be in the configured visibility and configured enable
		 * state.
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-controller)
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
		 * Invoked after the Component is shown (after [onShow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-onShow) is called).
		 * 
		 * Gets passed the same parameters as [show](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-show).
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
		 * Occurs before `componentLayout` is run. Returning `false` from this method will prevent the `componentLayout` from
		 * being executed.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} adjWidth  The box-adjusted width that was set.
		 * @param   {number} adjHeight The box-adjusted height that was set.
		 * @returns {void}             
		 */
		beforeComponentLayout? (adjWidth: number, adjHeight: number): void;
		/** 
		 * Invoked before the Component is destroyed.
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
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-controller)
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
		 * implemented by each subclass of [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) to provide any needed constructor logic. The
		 * initComponent method of the class being created is called first, with each initComponent method
		 * up the hierarchy to [Ext.Component](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html) being called thereafter. This makes it easy to implement and,
		 * if needed, override the constructor logic of the Component at any step in the hierarchy.
		 * 
		 * The initComponent method **must** contain a call to [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent) in order
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
		 * Invalidate column cache on add
		 * We cannot refresh the View on every add because this method is called
		 * when the HeaderDropZone moves Headers around, that will also refresh the view
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} c
		 * @returns {void}     
		 */
		onAdd? (c: object): void;
		/** 
		 * Method to manage awareness of when components are added to their
		 * respective Container, firing an [added](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#event-added) event. References are
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
		 * @param   {object} container
		 * @param   {object} pos
		 * @param   {object} instanced
		 * @returns {void}             
		 */
		onAdded? (container: object, pos: object, instanced: object): void;
		/** 
		 * This method is invoked before adding a new child Component. It
		 * is passed the new Component, and may be used to modify the
		 * Component, or prepare the Container in some way. Returning
		 * false aborts the add operation.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.Component} item
		 * @returns {void}               
		 */
		onBeforeAdd? (item: Ext.Component): void;
		/** 
		 * Invoked when this component has first achieved size. Occurs after the
		 * [componentLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-componentLayout) has completed its initial run.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Base.html).
		 * 
		 * **Note:** If the Component has a [ViewController](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-controller)
		 * and the controller has a boxReady method
		 * it will be called passing the Component as the single param.
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
		 * After calling the superclass's onDestroy, the Component will be destroyed.
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
		 * @param   {object|Ext.grid.locking.HeaderContainer.methodParams.onFocusEnter.E} e
		 * @returns {void}                                                                  
		 */
		onFocusEnter? (e: object | Ext.grid.locking.HeaderContainer.methodParams.onFocusEnter.E): void;
		/** 
		 * Called when focus exits from this Component's hierarchy
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event|Ext.grid.locking.HeaderContainer.methodParams.onFocusLeave.E} e
		 * @returns {void}                                                                           
		 */
		onFocusLeave? (e: Ext.event.Event | Ext.grid.locking.HeaderContainer.methodParams.onFocusLeave.E): void;
		/** 
		 * Allows addition of behavior to the hide operation. After
		 * calling the superclass's onHide, the Component will be hidden.
		 * 
		 * Gets passed the same parameters as [hide](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-hide).
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
		 * @returns {void}  
		 */
		onPosition? (): void;
		/** 
		 * Invalidate column cache on remove
		 * We cannot refresh the View on every remove because this method is called
		 * when the HeaderDropZone moves Headers around, that will also refresh the view
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} c
		 * @param   {object} isDestroying
		 * @returns {void}                
		 */
		onRemove? (c: object, isDestroying: object): void;
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
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.0.1/classic/Ext.container.Container.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.0.1/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.0.1/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {void}  
		 */
		onResize? (): void;
		/** 
		 * Invoked when a scroll operation is completed via this component's [scroller](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollEnd? (x: number, y: number): void;
		/** 
		 * Invoked when this component is scrolled via its [scroller](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-scrollable).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} x The current x position
		 * @param   {number} y The current y position
		 * @returns {void}     
		 */
		onScrollMove? (x: number, y: number): void;
		/** 
		 * Invoked when a scroll is initiated on this component via its [scroller](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#cfg-scrollable).
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
		 * Gets passed the same parameters as [show](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#event-show).
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
		 * Invoked after the [afterShow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-afterShow) method is complete.
		 * 
		 * Gets passed the same `callback` and `scope` parameters that [afterShow](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html#method-afterShow) received.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Function} [callback]
		 * @param   {object}   [scope]
		 * @returns {void}                
		 */
		onShowComplete? (callback?: ExtGlobalFunction, scope?: object): void;
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
		 * @param   {object}                                   config
		 * @returns {Ext.grid.locking.HeaderContainer.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.locking.HeaderContainer.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                   [value] The value to set for the name parameter.
		 * @returns {Ext.grid.locking.HeaderContainer.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.locking.HeaderContainer.Statics;
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
		 * @returns {Ext.grid.locking.HeaderContainer.Statics}  
		 */
		statics? (): Ext.grid.locking.HeaderContainer.Statics;
	}
}
declare namespace Ext.grid.locking.Lockable {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.locking.Lockable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html)
	 * Lockable is a private mixin which injects lockable behavior into any
	 * TablePanel subclass such as GridPanel or TreePanel. TablePanel will
	 * automatically inject the [Ext.grid.locking.Lockable](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html) mixin in when one of the
	 * these conditions are met:
	 * 
	 * - The TablePanel has the lockable configuration set to true
	 * - One of the columns in the TablePanel has locked set to true/false
	 * 
	 * Each TablePanel subclass must register an alias. It should have an array
	 * of configurations to copy to the 2 separate tablepanels that will be generated
	 * to note what configurations should be copied. These are named normalCfgCopy and
	 * lockedCfgCopy respectively.
	 * 
	 * Configurations which are specified in this class will be available on any grid or
	 * tree which is using the lockable functionality.
	 * 
	 * By default the two grids, "locked" and "normal" will be arranged using an [hbox](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.HBox.html)
	 * layout. If the lockable grid is configured with [`split:true`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.Lockable.html#cfg-split), a vertical splitter
	 * will be placed between the two grids to resize them.
	 * 
	 * It is possible to override the layout of the lockable grid, or example, you may wish to
	 * use a border layout and have one of the grids collapsible.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * By default, a lockable grid uses an [HBox](https://docs.sencha.com/extjs/6.0.1/classic/Ext.layout.container.HBox.html) layout to arrange
		 * the two grids (possibly separated by a splitter).
		 * 
		 * Using this config it is possible to specify a different layout to arrange the two grids.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		layout?: object;
		/** 
		 * Any special configuration options for the locked part of the grid
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		lockedGridConfig?: object;
		/** 
		 * A view configuration to be applied to the
		 * locked side of the grid. Any conflicting configurations between lockedViewConfig
		 * and viewConfig will be overwritten by the lockedViewConfig.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		lockedViewConfig?: object;
		/** 
		 * Any special configuration options for the normal part of the grid
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		normalGridConfig?: object;
		/** 
		 * A view configuration to be applied to the
		 * normal/unlocked side of the grid. Any conflicting configurations between normalViewConfig
		 * and viewConfig will be overwritten by the normalViewConfig.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		normalViewConfig?: object;
		/** 
		 * Number of pixels to scroll when scrolling the locked section with mousewheel.
		 * @configuration
		 * @optional
		 * @default 40
		 * @type {number}
		 */
		scrollDelta?: number;
		/** 
		 * Configure as true to place a resizing [splitter](https://docs.sencha.com/extjs/6.0.1/classic/Ext.resizer.Splitter.html) between the locked
		 * and unlocked columns.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		split?: boolean;
		/** 
		 * An array of events that, when fired, should trigger this object to
		 * save its state. Defaults to none. `stateEvents` may be any type
		 * of event supported by this object, including browser or custom events
		 * (e.g., `['click', 'customerchange']`).
		 * 
		 * See `stateful` for an explanation of saving and
		 * restoring object state.
		 * @configuration
		 * @optional
		 * @type {string[]}
		 */
		stateEvents?: string[];
		/** 
		 * The xtype of the subgrid to specify. If this is
		 * not specified lockable will determine the subgrid xtype to create by the
		 * following rule. Use the superclasses xtype if the superclass is NOT
		 * tablepanel, otherwise use the xtype itself.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		subGridXType?: string;
		/** 
		 * Synchronize rowHeight between the normal and
		 * locked grid view. This is turned on by default. If your grid is guaranteed
		 * to have rows of all the same height, you should set this to false to
		 * optimize performance.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		syncRowHeight?: boolean;
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
		 * @param   {object}                            config
		 * @returns {Ext.grid.locking.Lockable.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.locking.Lockable.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                            [value] The value to set for the name parameter.
		 * @returns {Ext.grid.locking.Lockable.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.locking.Lockable.Statics;
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
		 * @returns {Ext.grid.locking.Lockable.Statics}  
		 */
		statics? (): Ext.grid.locking.Lockable.Statics;
	}
}
declare namespace Ext.grid.locking.View {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.grid.locking.View](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.locking.View.html)
	 * This class is used internally to provide a single interface when using
	 * a locking grid. Internally, the locking grid creates two separate grids,
	 * so this class is used to map calls appropriately.
	 */
	interface Cfg extends Ext.base.Configs {
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
		 * A config object containing one or more event handlers to be added to this object during initialization. This
		 * should be a valid listeners config object as specified in the
		 * [addListener](https://docs.sencha.com/extjs/6.0.1/classic/Ext.util.Observable.html#method-addListener) example for attaching
		 * multiple handlers at once.
		 * 
		 * **DOM events from Ext JS [Components](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Component.html)**
		 * 
		 * While _some_ Ext JS Component classes export selected DOM events (e.g. "click", "mouseover" etc), this is usually
		 * only done when extra value can be added. For example the [DataView](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html)'s **[`itemclick`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.view.View.html#event-itemclick)** event passing the node clicked on. To access DOM events directly from a
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
		 * DOM tabIndex attribute for this Focusable's
		 * focusEl.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		tabIndex?: number;
		/** 
		 * Called when focus enters this Component's hierarchy
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object|Ext.grid.locking.View.methodParams.onFocusEnter.E} e
		 * @returns {void}                                                       
		 */
		onFocusEnter? (e: object | Ext.grid.locking.View.methodParams.onFocusEnter.E): void;
		/** 
		 * Called when focus exits from this Component's hierarchy
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event|Ext.grid.locking.View.methodParams.onFocusLeave.E} e
		 * @returns {void}                                                                
		 */
		onFocusLeave? (e: Ext.event.Event | Ext.grid.locking.View.methodParams.onFocusLeave.E): void;
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
		 * @returns {Ext.grid.locking.View.Statics}        this
		 */
		initConfig? (config: object): Ext.grid.locking.View.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.grid.locking.View.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.grid.locking.View.Statics;
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
		 * @returns {Ext.grid.locking.View.Statics}  
		 */
		statics? (): Ext.grid.locking.View.Statics;
	}
}
