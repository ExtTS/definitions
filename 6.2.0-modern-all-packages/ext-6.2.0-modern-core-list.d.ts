declare namespace Ext.list {
	/** 
	 * [Ext.list.AbstractTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html)
	 * The base class for all items in the [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	class AbstractTreeItem extends Ext.Widget {
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isTreeListItem?: boolean;
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
		 * @type {Ext.list.AbstractTreeItem.Statics}
		 */
		self?: Ext.list.AbstractTreeItem.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                                    members    The members to add to this class.
		 * @param   {boolean}                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                    members
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                    name
		 * @param   {object}                                                    member
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                    fn
		 * @param   {object}                                                    scope
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.list.AbstractTreeItem;
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
		 * Collapse this item. Does nothing if already collapsed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		collapse? (): void;
		/** 
		 * Destroys the Widget. This method should not be overridden in custom Widgets,
		 * because it sets the flags and does final cleanup that must go last. Instead,
		 * override [doDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-doDestroy) method to add functionality at destruction time.
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
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component or Widget.
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
		 * Expand this item. Does nothing if already expanded.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		expand? (): void;
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
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [expandable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expandable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpandable? (): boolean;
		/** 
		 * Returns the value of [expanded](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expanded).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpanded? (): boolean;
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
		 * Returns the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconCls? (): string;
		/** 
		 * Returns the value of [iconClsProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconClsProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconClsProperty? (): string;
		/** 
		 * Returns the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIndent? (): object;
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
		 * Returns the value of [leaf](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-leaf).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLeaf? (): boolean;
		/** 
		 * Returns the value of [loading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-loading).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLoading? (): boolean;
		/** 
		 * Returns the value of [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.TreeModel}  
		 */
		getNode? (): Ext.data.TreeModel;
		/** 
		 * Returns the value of [over](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-over).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getOver? (): number;
		/** 
		 * Returns the value of [owner](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-owner).
		 * @method
		 * @public (method)
		 * @returns {Ext.list.Tree}  
		 */
		getOwner? (): Ext.list.Tree;
		/** 
		 * Returns the value of [parentItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-parentItem).
		 * @method
		 * @public (method)
		 * @returns {Ext.list.AbstractTreeItem}  
		 */
		getParentItem? (): Ext.list.AbstractTreeItem;
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
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelected? (): boolean;
		/** 
		 * Returns the value of [selectedParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selectedParent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelectedParent? (): boolean;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
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
		 * Returns the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getText? (): string;
		/** 
		 * Returns the value of [textProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-textProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTextProperty? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
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
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
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
		 * Check if the current item is expanded.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this item is expanded.
		 */
		isExpanded? (): boolean;
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
		 * @param   {string|object}                                             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                    [value] The value to set for the name parameter.
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.AbstractTreeItem;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [expandable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expandable).
		 * @method
		 * @public (method)
		 * @param   {boolean} expandable The new value.
		 * @returns {void}               
		 */
		setExpandable? (expandable: boolean): void;
		/** 
		 * Sets the value of [expanded](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expanded).
		 * @method
		 * @public (method)
		 * @param   {boolean} expanded The new value.
		 * @returns {void}             
		 */
		setExpanded? (expanded: boolean): void;
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
		 * Sets the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @param   {string} iconCls The new value.
		 * @returns {void}           
		 */
		setIconCls? (iconCls: string): void;
		/** 
		 * Sets the value of [iconClsProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconClsProperty).
		 * @method
		 * @public (method)
		 * @param   {string} iconClsProperty The new value.
		 * @returns {void}                   
		 */
		setIconClsProperty? (iconClsProperty: string): void;
		/** 
		 * Sets the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @param   {object} indent The new value.
		 * @returns {void}          
		 */
		setIndent? (indent: object): void;
		/** 
		 * Sets the value of [leaf](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-leaf).
		 * @method
		 * @public (method)
		 * @param   {boolean} leaf The new value.
		 * @returns {void}         
		 */
		setLeaf? (leaf: boolean): void;
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
		 * Sets the value of [loading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-loading).
		 * @method
		 * @public (method)
		 * @param   {boolean} loading The new value.
		 * @returns {void}            
		 */
		setLoading? (loading: boolean): void;
		/** 
		 * Sets the value of [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.TreeModel} node The new value.
		 * @returns {void}                    
		 */
		setNode? (node: Ext.data.TreeModel): void;
		/** 
		 * Sets the value of [over](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-over).
		 * @method
		 * @public (method)
		 * @param   {number} over The new value.
		 * @returns {void}        
		 */
		setOver? (over: number): void;
		/** 
		 * Sets the value of [owner](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-owner).
		 * @method
		 * @public (method)
		 * @param   {Ext.list.Tree} owner The new value.
		 * @returns {void}                
		 */
		setOwner? (owner: Ext.list.Tree): void;
		/** 
		 * Sets the value of [parentItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-parentItem).
		 * @method
		 * @public (method)
		 * @param   {Ext.list.AbstractTreeItem} parentItem The new value.
		 * @returns {void}                                 
		 */
		setParentItem? (parentItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected).
		 * @method
		 * @public (method)
		 * @param   {boolean} selected The new value.
		 * @returns {void}             
		 */
		setSelected? (selected: boolean): void;
		/** 
		 * Sets the value of [selectedParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selectedParent).
		 * @method
		 * @public (method)
		 * @param   {boolean} selectedParent The new value.
		 * @returns {void}                   
		 */
		setSelectedParent? (selectedParent: boolean): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
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
		 * Sets the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text).
		 * @method
		 * @public (method)
		 * @param   {string} text The new value.
		 * @returns {void}        
		 */
		setText? (text: string): void;
		/** 
		 * Sets the value of [textProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-textProperty).
		 * @method
		 * @public (method)
		 * @param   {string} textProperty The new value.
		 * @returns {void}                
		 */
		setTextProperty? (textProperty: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
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
		 * Toggles the specified CSS class on this element (removes it if it already exists,
		 * otherwise adds it).
		 * @method
		 * @public (method)
		 * @param   {string}  className The CSS class to toggle.
		 * @param   {boolean} [state]
		 * If specified as `true`, causes the class to be added. If
		 * specified as `false`, causes the class to be removed.
		 * @returns {void}              
		 */
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		show? (): void;
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
		 * Gets the element to be used for the tree when it is in
		 * [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro) mode.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {Ext.dom.Element}  The element.
		 */
		getToolElement? (): Ext.dom.Element;
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
		 * @param   {object}                                                    config
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.list.AbstractTreeItem;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config will be
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
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item    The item to insert.
		 * @param   {Ext.list.AbstractTreeItem} refItem
		 * The item the node is to
		 * be inserted before. `null` if the item is to be added to the end.
		 * @returns {void}                              
		 */
		insertItem? (item: Ext.list.AbstractTreeItem, refItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should select this node.
		 */
		isSelectionEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Handle this node being collapsed.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being collapsed.
		 * @returns {void}                    
		 */
		nodeCollapse? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle this node being expanded.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being expanded.
		 * @returns {void}                    
		 */
		nodeExpand? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle a node being inserted as a child of this item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node    The node being inserted.
		 * @param   {Ext.data.TreeModel} refNode
		 * The node that is to be inserted before. `null`
		 * if this operation is an append.
		 * @returns {void}                       
		 */
		nodeInsert? (node: Ext.data.TreeModel, refNode: Ext.data.TreeModel): void;
		/** 
		 * Handle a node being removed as a child of this item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being removed.
		 * @returns {void}                    
		 */
		nodeRemove? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle this node having fields changed.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node               The node.
		 * @param   {string[]}           modifiedFieldNames The modified field names, if known.
		 * @returns {void}                                  
		 */
		nodeUpdate? (node: Ext.data.TreeModel, modifiedFieldNames: string[]): void;
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
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item The item to remove.
		 * @returns {void}                           
		 */
		removeItem? (item: Ext.list.AbstractTreeItem): void;
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
		 * @returns {Ext.list.AbstractTreeItem.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.list.AbstractTreeItem.Statics;
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
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
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
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
		 * Update properties after a node update.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.TreeModel} node               The node.
		 * @param   {string[]}           modifiedFieldNames The modified field names, if known.
		 * @returns {void}                                  
		 */
		doNodeUpdate? (node: Ext.data.TreeModel, modifiedFieldNames: string[]): void;
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
		getTemplate? (): void;
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
		 * @param   {object} animation
		 * @param   {object} collapsingForExpand
		 * @returns {void}                       
		 */
		nodeCollapseBegin? (animation: object, collapsingForExpand: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsingForExpand
		 * @returns {void}                       
		 */
		nodeCollapseEnd? (collapsingForExpand: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @returns {void}             
		 */
		nodeExpandBegin? (animation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		nodeExpandEnd? (): void;
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
		 * Handle a click on this item.
		 * @method
		 * @private (method)
		 * @param   {Ext.event.Event} e The event
		 * @returns {void}              
		 */
		onClick? (e: Ext.event.Event): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                  names The names of the linked objects to destroy.
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.list.AbstractTreeItem;
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
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @returns {void}        
		 */
		updateNode? (node: object): void;
		/** 
		 * Implementation so that the Traversable mixin which manipulates the parent
		 * axis can function in a TreeList.
		 * @method
		 * @private (method)
		 * @param   {Ext.list.Tree|Ext.list.TreeItem} owner The owner of this node.
		 * @returns {void}                                  
		 */
		updateOwner? (owner: Ext.list.Tree | Ext.list.TreeItem): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} selected
		 * @returns {void}            
		 */
		updateSelected? (selected: object): void;
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
	/** 
	 * [Ext.list.RootTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html)
	 * This class implements the top-level node in a [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html). Unlike
	 * other nodes, this item is only a container for other items. It does not correspond to
	 * a data record.
	 */
	class RootTreeItem extends Ext.list.AbstractTreeItem {
		/** 
		 * This property is `true` to allow type checking for this or derived class.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default true
		 * @type {boolean}
		 */
		readonly isRootListItem?: boolean;
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
		 * @default {reference: 'element', tag: 'ul', cls: Ext.baseCSSPrefix + 'treelist-root-container'}
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
		 * @type {Ext.list.RootTreeItem.Statics}
		 */
		self?: Ext.list.RootTreeItem.Statics | Ext.list.AbstractTreeItem.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                                                          members    The members to add to this class.
		 * @param   {boolean}                                                                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.RootTreeItem;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                          members
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.list.RootTreeItem;
		static addStatics? (members: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                          name
		 * @param   {object}                                                                          member
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.list.RootTreeItem;
		static addMember? (name: object, member: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                          fn
		 * @param   {object}                                                                          scope
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.list.RootTreeItem;
		static onExtended? (fn: object, scope: object): typeof Ext.list.AbstractTreeItem;
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
		 * Collapse this item. Does nothing if already collapsed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		collapse? (): void;
		/** 
		 * Destroys the Widget. This method should not be overridden in custom Widgets,
		 * because it sets the flags and does final cleanup that must go last. Instead,
		 * override [doDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-doDestroy) method to add functionality at destruction time.
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
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component or Widget.
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
		 * Expand this item. Does nothing if already expanded.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		expand? (): void;
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
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [expandable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expandable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpandable? (): boolean;
		/** 
		 * Returns the value of [expanded](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expanded).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpanded? (): boolean;
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
		 * Returns the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconCls? (): string;
		/** 
		 * Returns the value of [iconClsProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconClsProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconClsProperty? (): string;
		/** 
		 * Returns the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIndent? (): object;
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
		 * Returns the value of [leaf](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-leaf).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLeaf? (): boolean;
		/** 
		 * Returns the value of [loading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-loading).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLoading? (): boolean;
		/** 
		 * Returns the value of [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.TreeModel}  
		 */
		getNode? (): Ext.data.TreeModel;
		/** 
		 * Returns the value of [over](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-over).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getOver? (): number;
		/** 
		 * Returns the value of [owner](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-owner).
		 * @method
		 * @public (method)
		 * @returns {Ext.list.Tree}  
		 */
		getOwner? (): Ext.list.Tree;
		/** 
		 * Returns the value of [parentItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-parentItem).
		 * @method
		 * @public (method)
		 * @returns {Ext.list.AbstractTreeItem}  
		 */
		getParentItem? (): Ext.list.AbstractTreeItem;
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
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelected? (): boolean;
		/** 
		 * Returns the value of [selectedParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selectedParent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelectedParent? (): boolean;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
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
		 * Returns the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getText? (): string;
		/** 
		 * Returns the value of [textProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-textProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTextProperty? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
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
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
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
		 * Check if the current item is expanded.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this item is expanded.
		 */
		isExpanded? (): boolean;
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
		 * @param   {string|object}                                                                   name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                          [value] The value to set for the name parameter.
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.RootTreeItem;
		setConfig? (name: string | object, value?: object): Ext.list.AbstractTreeItem;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [expandable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expandable).
		 * @method
		 * @public (method)
		 * @param   {boolean} expandable The new value.
		 * @returns {void}               
		 */
		setExpandable? (expandable: boolean): void;
		/** 
		 * Sets the value of [expanded](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expanded).
		 * @method
		 * @public (method)
		 * @param   {boolean} expanded The new value.
		 * @returns {void}             
		 */
		setExpanded? (expanded: boolean): void;
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
		 * Sets the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @param   {string} iconCls The new value.
		 * @returns {void}           
		 */
		setIconCls? (iconCls: string): void;
		/** 
		 * Sets the value of [iconClsProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconClsProperty).
		 * @method
		 * @public (method)
		 * @param   {string} iconClsProperty The new value.
		 * @returns {void}                   
		 */
		setIconClsProperty? (iconClsProperty: string): void;
		/** 
		 * Sets the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @param   {object} indent The new value.
		 * @returns {void}          
		 */
		setIndent? (indent: object): void;
		/** 
		 * Sets the value of [leaf](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-leaf).
		 * @method
		 * @public (method)
		 * @param   {boolean} leaf The new value.
		 * @returns {void}         
		 */
		setLeaf? (leaf: boolean): void;
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
		 * Sets the value of [loading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-loading).
		 * @method
		 * @public (method)
		 * @param   {boolean} loading The new value.
		 * @returns {void}            
		 */
		setLoading? (loading: boolean): void;
		/** 
		 * Sets the value of [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.TreeModel} node The new value.
		 * @returns {void}                    
		 */
		setNode? (node: Ext.data.TreeModel): void;
		/** 
		 * Sets the value of [over](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-over).
		 * @method
		 * @public (method)
		 * @param   {number} over The new value.
		 * @returns {void}        
		 */
		setOver? (over: number): void;
		/** 
		 * Sets the value of [owner](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-owner).
		 * @method
		 * @public (method)
		 * @param   {Ext.list.Tree} owner The new value.
		 * @returns {void}                
		 */
		setOwner? (owner: Ext.list.Tree): void;
		/** 
		 * Sets the value of [parentItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-parentItem).
		 * @method
		 * @public (method)
		 * @param   {Ext.list.AbstractTreeItem} parentItem The new value.
		 * @returns {void}                                 
		 */
		setParentItem? (parentItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected).
		 * @method
		 * @public (method)
		 * @param   {boolean} selected The new value.
		 * @returns {void}             
		 */
		setSelected? (selected: boolean): void;
		/** 
		 * Sets the value of [selectedParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selectedParent).
		 * @method
		 * @public (method)
		 * @param   {boolean} selectedParent The new value.
		 * @returns {void}                   
		 */
		setSelectedParent? (selectedParent: boolean): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
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
		 * Sets the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text).
		 * @method
		 * @public (method)
		 * @param   {string} text The new value.
		 * @returns {void}        
		 */
		setText? (text: string): void;
		/** 
		 * Sets the value of [textProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-textProperty).
		 * @method
		 * @public (method)
		 * @param   {string} textProperty The new value.
		 * @returns {void}                
		 */
		setTextProperty? (textProperty: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
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
		 * Toggles the specified CSS class on this element (removes it if it already exists,
		 * otherwise adds it).
		 * @method
		 * @public (method)
		 * @param   {string}  className The CSS class to toggle.
		 * @param   {boolean} [state]
		 * If specified as `true`, causes the class to be added. If
		 * specified as `false`, causes the class to be removed.
		 * @returns {void}              
		 */
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		show? (): void;
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
		 * Gets the element to be used for the tree when it is in
		 * [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro) mode.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {Ext.dom.Element}  The element.
		 */
		getToolElement? (): Ext.dom.Element;
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
		 * @param   {object}                                                                          config
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.list.RootTreeItem;
		initConfig? (config: object): Ext.list.AbstractTreeItem;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config will be
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
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} item
		 * @param   {object} refItem
		 * @returns {void}           
		 */
		insertItem? (item: object, refItem: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.insertItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-insertItem).
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item    The item to insert.
		 * @param   {Ext.list.AbstractTreeItem} refItem
		 * The item the node is to
		 * be inserted before. `null` if the item is to be added to the end.
		 * @returns {void}                              
		 */
		insertItem? (item: Ext.list.AbstractTreeItem, refItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should select this node.
		 */
		isSelectionEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}  e
		 * @returns {boolean}   `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: object): boolean;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.isToggleEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isToggleEvent).
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Handle this node being collapsed.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being collapsed.
		 * @returns {void}                    
		 */
		nodeCollapse? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle this node being expanded.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being expanded.
		 * @returns {void}                    
		 */
		nodeExpand? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle a node being inserted as a child of this item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node    The node being inserted.
		 * @param   {Ext.data.TreeModel} refNode
		 * The node that is to be inserted before. `null`
		 * if this operation is an append.
		 * @returns {void}                       
		 */
		nodeInsert? (node: Ext.data.TreeModel, refNode: Ext.data.TreeModel): void;
		/** 
		 * Handle a node being removed as a child of this item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being removed.
		 * @returns {void}                    
		 */
		nodeRemove? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle this node having fields changed.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node               The node.
		 * @param   {string[]}           modifiedFieldNames The modified field names, if known.
		 * @returns {void}                                  
		 */
		nodeUpdate? (node: Ext.data.TreeModel, modifiedFieldNames: string[]): void;
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
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item The item to remove.
		 * @returns {void}                           
		 */
		removeItem? (item: Ext.list.AbstractTreeItem): void;
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
		 * @returns {Ext.list.RootTreeItem.Statics|Ext.list.AbstractTreeItem.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.list.RootTreeItem.Statics;
		statics? (): Ext.list.AbstractTreeItem.Statics;
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
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
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
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
		 * Update properties after a node update.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.TreeModel} node               The node.
		 * @param   {string[]}           modifiedFieldNames The modified field names, if known.
		 * @returns {void}                                  
		 */
		doNodeUpdate? (node: Ext.data.TreeModel, modifiedFieldNames: string[]): void;
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
		getTemplate? (): void;
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
		 * @param   {object} animation
		 * @param   {object} collapsingForExpand
		 * @returns {void}                       
		 */
		nodeCollapseBegin? (animation: object, collapsingForExpand: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsingForExpand
		 * @returns {void}                       
		 */
		nodeCollapseEnd? (collapsingForExpand: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @returns {void}             
		 */
		nodeExpandBegin? (animation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		nodeExpandEnd? (): void;
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
		 * Handle a click on this item.
		 * @method
		 * @private (method)
		 * @param   {Ext.event.Event} e The event
		 * @returns {void}              
		 */
		onClick? (e: Ext.event.Event): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                        names The names of the linked objects to destroy.
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.list.RootTreeItem;
		unlink? (names: string[]): Ext.list.AbstractTreeItem;
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
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @returns {void}        
		 */
		updateNode? (node: object): void;
		/** 
		 * Implementation so that the Traversable mixin which manipulates the parent
		 * axis can function in a TreeList.
		 * @method
		 * @private (method)
		 * @param   {Ext.list.Tree|Ext.list.TreeItem} owner The owner of this node.
		 * @returns {void}                                  
		 */
		updateOwner? (owner: Ext.list.Tree | Ext.list.TreeItem): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} selected
		 * @returns {void}            
		 */
		updateSelected? (selected: object): void;
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
	/** 
	 * [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html)
	 * A lightweight component to display data in a simple tree structure.
	 */
	class Tree extends Ext.Widget {
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
		 * @protected (property)
		 * @default 'store'
		 * @type {string}
		 */
		defaultBindProperty?: string;
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
		 * @default {reference: 'element', cls: Ext.baseCSSPrefix + 'treelist ' + Ext.baseCSSPrefix + 'unselectable', listeners: {click: 'onClick', mouseenter: 'onMouseEnter', mouseleave: 'onMouseLeave', mouseover: 'onMouseOver'}, children: [{reference: 'toolsElement', cls: Ext.baseCSSPrefix + 'treelist-toolstrip', listeners: {click: 'onToolStripClick', mouseover: 'onToolStripMouseOver'}}]}
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
		 * @type {Ext.list.Tree.Statics}
		 */
		self?: Ext.list.Tree.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                        members    The members to add to this class.
		 * @param   {boolean}                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.Tree;
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
		 * @param   {object}                                        members
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.list.Tree;
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
		 * @param   {object}                                        name
		 * @param   {object}                                        member
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.list.Tree;
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
		 * @param   {object}                                        fn
		 * @param   {object}                                        scope
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.list.Tree;
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
		 * Destroys the Widget. This method should not be overridden in custom Widgets,
		 * because it sets the flags and does final cleanup that must go last. Instead,
		 * override [doDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#method-doDestroy) method to add functionality at destruction time.
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
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component or Widget.
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
		 * Returns the value of [animation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAnimation? (): object;
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
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [defaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-defaults).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getDefaults? (): object;
		/** 
		 * Returns the value of [expanderFirst](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-expanderFirst).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpanderFirst? (): boolean;
		/** 
		 * Returns the value of [expanderOnly](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-expanderOnly).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpanderOnly? (): boolean;
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
		 * Returns the value of [highlightPath](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-highlightPath).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getHighlightPath? (): object;
		/** 
		 * Returns the value of [iconSize](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-iconSize).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIconSize? (): object;
		/** 
		 * Returns the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIndent? (): object;
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
		 * Get a child [item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html) by node.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.TreeModel}        node The node.
		 * @returns {Ext.list.AbstractTreeItem}      The item. `null` if not found.
		 */
		getItem? (node: Ext.data.TreeModel): Ext.list.AbstractTreeItem;
		/** 
		 * This method is called to populate and return a config object for new nodes. This
		 * can be overridden by derived classes to manipulate properties or `xtype` of the
		 * returned object. Upon return, the object is passed to [`Ext.create`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-create) and the
		 * reference is stored as part of this tree.
		 * 
		 * The base class implementation will apply any configured [`defaults`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-defaults) to the
		 * object it returns.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {Ext.data.TreeModel}        node   The node backing the item.
		 * @param   {Ext.list.AbstractTreeItem} parent
		 * The parent item. This is never `null` but
		 * may be an instance of [`Ext.list.RootTreeItem`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html).
		 * @returns {object}                           The config object to pass to [`Ext.create`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-create) for the item.
		 */
		getItemConfig? (node: Ext.data.TreeModel, parent: Ext.list.AbstractTreeItem): object;
		/** 
		 * Returns the value of [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getMicro? (): boolean;
		/** 
		 * Returns the value of [overItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-overItem).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getOverItem? (): object;
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
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [selectOnExpander](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-selectOnExpander).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelectOnExpander? (): boolean;
		/** 
		 * Returns the value of [selection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-selection).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.TreeModel}  
		 */
		getSelection? (): Ext.data.TreeModel;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
		/** 
		 * Returns the value of [singleExpand](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-singleExpand).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSingleExpand? (): boolean;
		/** 
		 * Returns the height and width of the Component.
		 * @method
		 * @public (method)
		 * @returns {object}  The current `height` and `width` of the Component.
		 */
		getSize? (): object;
		/** 
		 * Returns the value of [store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-store).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.data.TreeStore}  
		 */
		getStore? (): string | object | Ext.data.TreeStore;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getStyle? (): string | object;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Returns the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @returns {string|string[]|object}  
		 */
		getTwoWayBindable? (): string | string[] | object;
		/** 
		 * Returns the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @returns {object|string|string[]}  
		 */
		getUi? (): object;
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
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
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
		 * Sets the value of [animation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @param   {object} animation The new value.
		 * @returns {void}             
		 */
		setAnimation? (animation: object): void;
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
		 * @param   {string|object}                                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                        [value] The value to set for the name parameter.
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.Tree;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [defaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-defaults).
		 * @method
		 * @public (method)
		 * @param   {object} defaults The new value.
		 * @returns {void}            
		 */
		setDefaults? (defaults: object): void;
		/** 
		 * Sets the value of [expanderFirst](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-expanderFirst).
		 * @method
		 * @public (method)
		 * @param   {boolean} expanderFirst The new value.
		 * @returns {void}                  
		 */
		setExpanderFirst? (expanderFirst: boolean): void;
		/** 
		 * Sets the value of [expanderOnly](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-expanderOnly).
		 * @method
		 * @public (method)
		 * @param   {boolean} expanderOnly The new value.
		 * @returns {void}                 
		 */
		setExpanderOnly? (expanderOnly: boolean): void;
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
		 * Sets the value of [highlightPath](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-highlightPath).
		 * @method
		 * @public (method)
		 * @param   {object} highlightPath The new value.
		 * @returns {void}                 
		 */
		setHighlightPath? (highlightPath: object): void;
		/** 
		 * Sets the value of [iconSize](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-iconSize).
		 * @method
		 * @public (method)
		 * @param   {object} iconSize The new value.
		 * @returns {void}            
		 */
		setIconSize? (iconSize: object): void;
		/** 
		 * Sets the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @param   {object} indent The new value.
		 * @returns {void}          
		 */
		setIndent? (indent: object): void;
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
		 * Sets the value of [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro).
		 * @method
		 * @public (method)
		 * @param   {boolean} micro The new value.
		 * @returns {void}          
		 */
		setMicro? (micro: boolean): void;
		/** 
		 * Sets the value of [overItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-overItem).
		 * @method
		 * @public (method)
		 * @param   {object} overItem The new value.
		 * @returns {void}            
		 */
		setOverItem? (overItem: object): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [selectOnExpander](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-selectOnExpander).
		 * @method
		 * @public (method)
		 * @param   {boolean} selectOnExpander The new value.
		 * @returns {void}                     
		 */
		setSelectOnExpander? (selectOnExpander: boolean): void;
		/** 
		 * Sets the value of [selection](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-selection).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.TreeModel} selection The new value.
		 * @returns {void}                         
		 */
		setSelection? (selection: Ext.data.TreeModel): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
		/** 
		 * Sets the value of [singleExpand](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-singleExpand).
		 * @method
		 * @public (method)
		 * @param   {boolean} singleExpand The new value.
		 * @returns {void}                 
		 */
		setSingleExpand? (singleExpand: boolean): void;
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
		 * Sets the value of [store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-store).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.data.TreeStore} store The new value.
		 * @returns {void}                                   
		 */
		setStore? (store: string | object | Ext.data.TreeStore): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {string|object} style The new value.
		 * @returns {void}                
		 */
		setStyle? (style: string | object): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Sets the value of [twoWayBindable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-twoWayBindable).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} twoWayBindable The new value.
		 * @returns {void}                                  
		 */
		setTwoWayBindable? (twoWayBindable: string | string[] | object): void;
		/** 
		 * Sets the value of [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-ui).
		 * @method
		 * @public (method)
		 * @param   {object} ui The new value.
		 * @returns {void}      
		 */
		setUi? (ui: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Widget.setUi](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#method-setUi).
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
		 * Toggles the specified CSS class on this element (removes it if it already exists,
		 * otherwise adds it).
		 * @method
		 * @public (method)
		 * @param   {string}  className The CSS class to toggle.
		 * @param   {boolean} [state]
		 * If specified as `true`, causes the class to be added. If
		 * specified as `false`, causes the class to be removed.
		 * @returns {void}              
		 */
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		show? (): void;
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
		 * @param   {object}                                        config
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.list.Tree;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config will be
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
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
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
		 * @returns {Ext.list.Tree.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.list.Tree.Statics;
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
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
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
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
		getTemplate? (): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                      names The names of the linked objects to destroy.
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.list.Tree;
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
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
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
	/** 
	 * [Ext.list.TreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html)
	 * The default implementation of the class used for [`Ext.list.Tree`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 * 
	 * This class can only be used in conjunction with [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	class TreeItem extends Ext.list.AbstractTreeItem {
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
		 * @default {reference: 'element', tag: 'li', cls: Ext.baseCSSPrefix + 'treelist-item', children: [{reference: 'rowElement', cls: Ext.baseCSSPrefix + 'treelist-row', children: [{reference: 'wrapElement', cls: Ext.baseCSSPrefix + 'treelist-item-wrap', children: [{reference: 'iconElement', cls: Ext.baseCSSPrefix + 'treelist-item-icon'}, {reference: 'textElement', cls: Ext.baseCSSPrefix + 'treelist-item-text'}, {reference: 'expanderElement', cls: Ext.baseCSSPrefix + 'treelist-item-expander'}]}]}, {reference: 'itemContainer', tag: 'ul', cls: Ext.baseCSSPrefix + 'treelist-container'}, {reference: 'toolElement', cls: Ext.baseCSSPrefix + 'treelist-item-tool'}]}
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
		 * @type {Ext.list.TreeItem.Statics}
		 */
		self?: Ext.list.TreeItem.Statics | Ext.list.AbstractTreeItem.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics;
		/** 
		 * ---
		 * 
		 *  Private
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
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.TreeItem;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                      members
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.list.TreeItem;
		static addStatics? (members: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                      name
		 * @param   {object}                                                                      member
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.list.TreeItem;
		static addMember? (name: object, member: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                      fn
		 * @param   {object}                                                                      scope
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.list.TreeItem;
		static onExtended? (fn: object, scope: object): typeof Ext.list.AbstractTreeItem;
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
		 * Collapse this item. Does nothing if already collapsed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		collapse? (): void;
		/** 
		 * Destroys the Widget. This method should not be overridden in custom Widgets,
		 * because it sets the flags and does final cleanup that must go last. Instead,
		 * override [doDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-doDestroy) method to add functionality at destruction time.
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
		 * Perform the actual destruction sequence. This is the method to override in your
		 * subclasses to add steps specific to the destruction of custom Component or Widget.
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
		 * Expand this item. Does nothing if already expanded.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		expand? (): void;
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
		 * Returns the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDefaultListenerScope? (): boolean;
		/** 
		 * Returns the value of [expandable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expandable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpandable? (): boolean;
		/** 
		 * Returns the value of [expanded](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expanded).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getExpanded? (): boolean;
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
		 * Returns the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconCls? (): string;
		/** 
		 * Returns the value of [iconClsProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconClsProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getIconClsProperty? (): string;
		/** 
		 * Returns the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getIndent? (): object;
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
		 * Returns the value of [leaf](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-leaf).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLeaf? (): boolean;
		/** 
		 * Returns the value of [loading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-loading).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLoading? (): boolean;
		/** 
		 * Returns the value of [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.TreeModel}  
		 */
		getNode? (): Ext.data.TreeModel;
		/** 
		 * Returns the value of [over](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-over).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getOver? (): number;
		/** 
		 * Returns the value of [owner](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-owner).
		 * @method
		 * @public (method)
		 * @returns {Ext.list.Tree}  
		 */
		getOwner? (): Ext.list.Tree;
		/** 
		 * Returns the value of [parentItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-parentItem).
		 * @method
		 * @public (method)
		 * @returns {Ext.list.AbstractTreeItem}  
		 */
		getParentItem? (): Ext.list.AbstractTreeItem;
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
		 * Returns the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getReference? (): string;
		/** 
		 * Returns the value of [rowCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html#cfg-rowCls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getRowCls? (): string;
		/** 
		 * Returns the value of [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelected? (): boolean;
		/** 
		 * Returns the value of [selectedParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selectedParent).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getSelectedParent? (): boolean;
		/** 
		 * Returns the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @returns {boolean|object|Ext.data.Session}  
		 */
		getSession? (): boolean | object | Ext.data.Session;
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
		 * Returns the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getText? (): string;
		/** 
		 * Returns the value of [textProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-textProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTextProperty? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
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
		 * Checks to see if this object has any listeners for a specified event, or whether the event bubbles. The answer
		 * indicates whether the event needs firing or not.
		 * @method
		 * @public (method)
		 * @param   {string}  eventName The name of the event to check for
		 * @returns {boolean}           `true` if the event is being listened for or bubbles, else `false`
		 */
		hasListener? (eventName: string): boolean;
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
		 * Check if the current item is expanded.
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if this item is expanded.
		 */
		isExpanded? (): boolean;
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
		 * @param   {string|object}                                                               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                      [value] The value to set for the name parameter.
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.TreeItem;
		setConfig? (name: string | object, value?: object): Ext.list.AbstractTreeItem;
		setConfig? (name: string | object, value?: object): Ext.Widget;
		setConfig? (name: string | object, value?: object): Ext.Evented;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [controller](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-controller).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.app.ViewController} controller The new value.
		 * @returns {void}                                            
		 */
		setController? (controller: string | object | Ext.app.ViewController): void;
		/** 
		 * Sets the value of [defaultListenerScope](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-defaultListenerScope).
		 * @method
		 * @public (method)
		 * @param   {boolean} defaultListenerScope The new value.
		 * @returns {void}                         
		 */
		setDefaultListenerScope? (defaultListenerScope: boolean): void;
		/** 
		 * Sets the value of [expandable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expandable).
		 * @method
		 * @public (method)
		 * @param   {boolean} expandable The new value.
		 * @returns {void}               
		 */
		setExpandable? (expandable: boolean): void;
		/** 
		 * Sets the value of [expanded](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-expanded).
		 * @method
		 * @public (method)
		 * @param   {boolean} expanded The new value.
		 * @returns {void}             
		 */
		setExpanded? (expanded: boolean): void;
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
		 * Sets the value of [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls).
		 * @method
		 * @public (method)
		 * @param   {string} iconCls The new value.
		 * @returns {void}           
		 */
		setIconCls? (iconCls: string): void;
		/** 
		 * Sets the value of [iconClsProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconClsProperty).
		 * @method
		 * @public (method)
		 * @param   {string} iconClsProperty The new value.
		 * @returns {void}                   
		 */
		setIconClsProperty? (iconClsProperty: string): void;
		/** 
		 * Sets the value of [indent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-indent).
		 * @method
		 * @public (method)
		 * @param   {object} indent The new value.
		 * @returns {void}          
		 */
		setIndent? (indent: object): void;
		/** 
		 * Sets the value of [leaf](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-leaf).
		 * @method
		 * @public (method)
		 * @param   {boolean} leaf The new value.
		 * @returns {void}         
		 */
		setLeaf? (leaf: boolean): void;
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
		 * Sets the value of [loading](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-loading).
		 * @method
		 * @public (method)
		 * @param   {boolean} loading The new value.
		 * @returns {void}            
		 */
		setLoading? (loading: boolean): void;
		/** 
		 * Sets the value of [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.TreeModel} node The new value.
		 * @returns {void}                    
		 */
		setNode? (node: Ext.data.TreeModel): void;
		/** 
		 * Sets the value of [over](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-over).
		 * @method
		 * @public (method)
		 * @param   {number} over The new value.
		 * @returns {void}        
		 */
		setOver? (over: number): void;
		/** 
		 * Sets the value of [owner](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-owner).
		 * @method
		 * @public (method)
		 * @param   {Ext.list.Tree} owner The new value.
		 * @returns {void}                
		 */
		setOwner? (owner: Ext.list.Tree): void;
		/** 
		 * Sets the value of [parentItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-parentItem).
		 * @method
		 * @public (method)
		 * @param   {Ext.list.AbstractTreeItem} parentItem The new value.
		 * @returns {void}                                 
		 */
		setParentItem? (parentItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Sets the value of [publishes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-publishes).
		 * @method
		 * @public (method)
		 * @param   {string|string[]|object} publishes The new value.
		 * @returns {void}                             
		 */
		setPublishes? (publishes: string | string[] | object): void;
		/** 
		 * Sets the value of [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-reference).
		 * @method
		 * @public (method)
		 * @param   {string} reference The new value.
		 * @returns {void}             
		 */
		setReference? (reference: string): void;
		/** 
		 * Sets the value of [rowCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html#cfg-rowCls).
		 * @method
		 * @public (method)
		 * @param   {string} rowCls The new value.
		 * @returns {void}          
		 */
		setRowCls? (rowCls: string): void;
		/** 
		 * Sets the value of [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected).
		 * @method
		 * @public (method)
		 * @param   {boolean} selected The new value.
		 * @returns {void}             
		 */
		setSelected? (selected: boolean): void;
		/** 
		 * Sets the value of [selectedParent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selectedParent).
		 * @method
		 * @public (method)
		 * @param   {boolean} selectedParent The new value.
		 * @returns {void}                   
		 */
		setSelectedParent? (selectedParent: boolean): void;
		/** 
		 * Sets the value of [session](https://docs.sencha.com/extjs/6.2.0/modern/Ext.mixin.Bindable.html#cfg-session).
		 * @method
		 * @public (method)
		 * @param   {boolean|object|Ext.data.Session} session The new value.
		 * @returns {void}                                    
		 */
		setSession? (session: boolean | object | Ext.data.Session): void;
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
		 * Sets the value of [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text).
		 * @method
		 * @public (method)
		 * @param   {string} text The new value.
		 * @returns {void}        
		 */
		setText? (text: string): void;
		/** 
		 * Sets the value of [textProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-textProperty).
		 * @method
		 * @public (method)
		 * @param   {string} textProperty The new value.
		 * @returns {void}                
		 */
		setTextProperty? (textProperty: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
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
		 * Toggles the specified CSS class on this element (removes it if it already exists,
		 * otherwise adds it).
		 * @method
		 * @public (method)
		 * @param   {string}  className The CSS class to toggle.
		 * @param   {boolean} [state]
		 * If specified as `true`, causes the class to be added. If
		 * specified as `false`, causes the class to be removed.
		 * @returns {void}              
		 */
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		addCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} cls
		 * @returns {void}       
		 */
		removeCls? (cls: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		show? (): void;
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
		 * Gets the element to be used for the tree when it is in
		 * [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro) mode.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {Ext.dom.Element}  The element.
		 */
		getToolElement? (): Ext.dom.Element;
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
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.list.TreeItem;
		initConfig? (config: object): Ext.list.AbstractTreeItem;
		initConfig? (config: object): Ext.Widget;
		initConfig? (config: object): Ext.Evented;
		initConfig? (config: object): Ext.Base;
		/** 
		 * Initializes the Element for this Widget instance.  If this is the first time a
		 * Widget of this type has been instantiated the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-element) config will be
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
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} item
		 * @param   {object} refItem
		 * @returns {void}           
		 */
		insertItem? (item: object, refItem: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.insertItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-insertItem).
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item    The item to insert.
		 * @param   {Ext.list.AbstractTreeItem} refItem
		 * The item the node is to
		 * be inserted before. `null` if the item is to be added to the end.
		 * @returns {void}                              
		 */
		insertItem? (item: Ext.list.AbstractTreeItem, refItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}  e
		 * @returns {boolean}   `true` if the event should select this node.
		 */
		isSelectionEvent? (e: object): boolean;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.isSelectionEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isSelectionEvent).
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should select this node.
		 */
		isSelectionEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Checks if a particular binding is synchronizing the value.
		 * @method
		 * @protected (method)
		 * @param   {string}  name The name of the property being bound to.
		 * @returns {boolean}      `true` if the binding is syncing.
		 */
		isSyncing? (name: string): boolean;
		/** 
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}  e
		 * @returns {boolean}   `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: object): boolean;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.isToggleEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isToggleEvent).
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Handle this node being collapsed.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being collapsed.
		 * @returns {void}                    
		 */
		nodeCollapse? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle this node being expanded.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being expanded.
		 * @returns {void}                    
		 */
		nodeExpand? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle a node being inserted as a child of this item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node    The node being inserted.
		 * @param   {Ext.data.TreeModel} refNode
		 * The node that is to be inserted before. `null`
		 * if this operation is an append.
		 * @returns {void}                       
		 */
		nodeInsert? (node: Ext.data.TreeModel, refNode: Ext.data.TreeModel): void;
		/** 
		 * Handle a node being removed as a child of this item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node The node being removed.
		 * @returns {void}                    
		 */
		nodeRemove? (node: Ext.data.TreeModel): void;
		/** 
		 * Handle this node having fields changed.
		 * @method
		 * @protected (method)
		 * @param   {Ext.data.TreeModel} node               The node.
		 * @param   {string[]}           modifiedFieldNames The modified field names, if known.
		 * @returns {void}                                  
		 */
		nodeUpdate? (node: Ext.data.TreeModel, modifiedFieldNames: string[]): void;
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
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} item
		 * @returns {void}        
		 */
		removeItem? (item: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.removeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-removeItem).
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item The item to remove.
		 * @returns {void}                           
		 */
		removeItem? (item: Ext.list.AbstractTreeItem): void;
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
		 * @returns {Ext.list.TreeItem.Statics|Ext.list.AbstractTreeItem.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.list.TreeItem.Statics;
		statics? (): Ext.list.AbstractTreeItem.Statics;
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
		 * @param   {object} cls
		 * @returns {void}       
		 */
		applyCls? (cls: object): void;
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
		 * Applier for the `plugins` config property.
		 * @method
		 * @private (method)
		 * @param   {string[]|object[]|Ext.plugin.Abstract[]} plugins    The new plugins to use.
		 * @param   {Ext.plugin.Abstract[]}                   oldPlugins The existing plugins in use.
		 * @returns {void}                                               
		 */
		applyPlugins? (plugins: string[] | object[] | Ext.plugin.Abstract[], oldPlugins: Ext.plugin.Abstract[]): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @returns {void}         
		 */
		applyWidth? (width: object): void;
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
		 * Update properties after a node update.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.TreeModel} node               The node.
		 * @param   {string[]}           modifiedFieldNames The modified field names, if known.
		 * @returns {void}                                  
		 */
		doNodeUpdate? (node: Ext.data.TreeModel, modifiedFieldNames: string[]): void;
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
		getTemplate? (): void;
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
		 * @param   {object} animation
		 * @param   {object} collapsingForExpand
		 * @returns {void}                       
		 */
		nodeCollapseBegin? (animation: object, collapsingForExpand: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} collapsingForExpand
		 * @returns {void}                       
		 */
		nodeCollapseEnd? (collapsingForExpand: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} animation
		 * @returns {void}             
		 */
		nodeExpandBegin? (animation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		nodeExpandEnd? (): void;
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
		 * Handle a click on this item.
		 * @method
		 * @private (method)
		 * @param   {Ext.event.Event} e The event
		 * @returns {void}              
		 */
		onClick? (e: Ext.event.Event): void;
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                    names The names of the linked objects to destroy.
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.list.TreeItem;
		unlink? (names: string[]): Ext.list.AbstractTreeItem;
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
		 * @param   {object} hidden
		 * @returns {void}          
		 */
		updateHidden? (hidden: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateLayout? (): void;
		/** 
		 * ---
		 * 
		 *  Updaters
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} oldNode
		 * @returns {void}           
		 */
		updateNode? (node: object, oldNode: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.updateNode](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-updateNode).
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @returns {void}        
		 */
		updateNode? (node: object): void;
		/** 
		 * Implementation so that the Traversable mixin which manipulates the parent
		 * axis can function in a TreeList.
		 * @method
		 * @private (method)
		 * @param   {Ext.list.Tree|Ext.list.TreeItem} owner The owner of this node.
		 * @returns {void}                                  
		 */
		updateOwner? (owner: Ext.list.Tree | Ext.list.TreeItem): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} selected
		 * @param   {object} oldSelected
		 * @returns {void}               
		 */
		updateSelected? (selected: object, oldSelected: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.list.AbstractTreeItem.updateSelected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-updateSelected).
		 * @method
		 * @private (method)
		 * @param   {object} selected
		 * @returns {void}            
		 */
		updateSelected? (selected: object): void;
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
declare namespace Ext.list.AbstractTreeItem {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.list.AbstractTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html)
	 * The base class for all items in the [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	interface Def extends Ext.list.AbstractTreeItem {
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
		 * @type {Ext.list.AbstractTreeItem.Cfg}
		 */
		config?: Ext.list.AbstractTreeItem.Cfg;
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
		 * @returns {Ext.list.AbstractTreeItem.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.list.AbstractTreeItem.Statics}
		 */
		statics?: (() => Ext.list.AbstractTreeItem.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.list.AbstractTreeItem.Statics | any;
	}
}
declare namespace Ext.list.RootTreeItem {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.list.RootTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html)
	 * This class implements the top-level node in a [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html). Unlike
	 * other nodes, this item is only a container for other items. It does not correspond to
	 * a data record.
	 */
	interface Def extends Ext.list.RootTreeItem {
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
		 * @type {Ext.list.RootTreeItem.Cfg}
		 */
		config?: Ext.list.RootTreeItem.Cfg;
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
		 * @returns {Ext.list.RootTreeItem.Statics|Ext.list.AbstractTreeItem.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.list.RootTreeItem.Statics}
		 */
		statics?: (() => Ext.list.RootTreeItem.Statics | Ext.list.AbstractTreeItem.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.list.RootTreeItem.Statics | any;
	}
}
declare namespace Ext.list.Tree {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html)
	 * A lightweight component to display data in a simple tree structure.
	 */
	interface Def extends Ext.list.Tree {
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
		 * @type {Ext.list.Tree.Cfg}
		 */
		config?: Ext.list.Tree.Cfg;
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
		 * @returns {Ext.list.Tree.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.list.Tree.Statics}
		 */
		statics?: (() => Ext.list.Tree.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.list.Tree.Statics | any;
	}
}
declare namespace Ext.list.TreeItem {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.list.TreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html)
	 * The default implementation of the class used for [`Ext.list.Tree`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 * 
	 * This class can only be used in conjunction with [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	interface Def extends Ext.list.TreeItem {
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
		 * @type {Ext.list.TreeItem.Cfg}
		 */
		config?: Ext.list.TreeItem.Cfg;
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
		 * @returns {Ext.list.TreeItem.Statics|Ext.list.AbstractTreeItem.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {Ext.list.TreeItem.Statics}
		 */
		statics?: (() => Ext.list.TreeItem.Statics | Ext.list.AbstractTreeItem.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | Ext.list.TreeItem.Statics | any;
	}
}
declare namespace Ext.list.AbstractTreeItem {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.list.AbstractTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html)
	 * The base class for all items in the [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
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
		 * @param   {object}                                                    members    The members to add to this class.
		 * @param   {boolean}                                                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                    members
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                    name
		 * @param   {object}                                                    member
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                    fn
		 * @param   {object}                                                    scope
		 * @returns {Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.list.AbstractTreeItem;
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
declare namespace Ext.list.RootTreeItem {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.list.RootTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html)
	 * This class implements the top-level node in a [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html). Unlike
	 * other nodes, this item is only a container for other items. It does not correspond to
	 * a data record.
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
		 * @param   {object}                                                                          members    The members to add to this class.
		 * @param   {boolean}                                                                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.RootTreeItem;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                          members
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.list.RootTreeItem;
		addStatics? (members: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                          name
		 * @param   {object}                                                                          member
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.list.RootTreeItem;
		addMember? (name: object, member: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                          fn
		 * @param   {object}                                                                          scope
		 * @returns {Ext.list.RootTreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.list.RootTreeItem;
		onExtended? (fn: object, scope: object): typeof Ext.list.AbstractTreeItem;
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
declare namespace Ext.list.Tree {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html)
	 * A lightweight component to display data in a simple tree structure.
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
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.Tree;
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
		 * @param   {object}                                        members
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.list.Tree;
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
		 * @param   {object}                                        name
		 * @param   {object}                                        member
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.list.Tree;
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
		 * @param   {object}                                        fn
		 * @param   {object}                                        scope
		 * @returns {Ext.list.Tree|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.list.Tree;
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
declare namespace Ext.list.TreeItem {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.list.TreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html)
	 * The default implementation of the class used for [`Ext.list.Tree`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 * 
	 * This class can only be used in conjunction with [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
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
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.TreeItem;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                      members
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.list.TreeItem;
		addStatics? (members: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                      name
		 * @param   {object}                                                                      member
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.list.TreeItem;
		addMember? (name: object, member: object): typeof Ext.list.AbstractTreeItem;
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
		 * @param   {object}                                                                      fn
		 * @param   {object}                                                                      scope
		 * @returns {Ext.list.TreeItem|Ext.list.AbstractTreeItem|Ext.Widget|Ext.Evented|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.list.TreeItem;
		onExtended? (fn: object, scope: object): typeof Ext.list.AbstractTreeItem;
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
declare namespace Ext.list.AbstractTreeItem.eventsParams.itemclick {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.AbstractTreeItem.itemclick](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#event-itemclick)
	 */
	interface Info extends Ext.base.Params {
		/** 
		 * The DOM event that precipitated this
		 * event.
		 * @configuration
		 * @optional
		 * @type {Ext.event.Event}
		 */
		event?: Ext.event.Event;
		/** 
		 * The tree node that was clicked.
		 * @configuration
		 * @optional
		 * @type {Ext.list.AbstractTreeItem}
		 */
		item?: Ext.list.AbstractTreeItem;
		/** 
		 * The `treelist` that fired this event.
		 * @configuration
		 * @optional
		 * @type {Ext.list.Tree}
		 */
		tree?: Ext.list.Tree;
		/** 
		 * On input this is value is the result of the
		 *   [isSelectionEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isSelectionEvent) method. On return from event handlers (assuming a
		 *   `false` return does not cancel things) this property is used to determine
		 *   if the clicked node should be selected.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		select?: boolean;
		/** 
		 * On input this is value is the result of the
		 *   [isToggleEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isToggleEvent) method. On return from event handlers (assuming a
		 *   `false` return does not cancel things) this property is used to determine
		 *   if the clicked node's expand/collapse state should be toggled.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		toggle?: boolean;
	}
}
declare namespace Ext.list.AbstractTreeItem.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.AbstractTreeItem.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-addListener)
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
declare namespace Ext.list.AbstractTreeItem.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.AbstractTreeItem.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-on)
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
declare namespace Ext.list.RootTreeItem.eventsParams.itemclick {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.RootTreeItem.itemclick](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html#event-itemclick)
	 */
	interface Info extends Ext.base.Params {
		/** 
		 * The DOM event that precipitated this
		 * event.
		 * @configuration
		 * @optional
		 * @type {Ext.event.Event}
		 */
		event?: Ext.event.Event;
		/** 
		 * The tree node that was clicked.
		 * @configuration
		 * @optional
		 * @type {Ext.list.AbstractTreeItem}
		 */
		item?: Ext.list.AbstractTreeItem;
		/** 
		 * The `treelist` that fired this event.
		 * @configuration
		 * @optional
		 * @type {Ext.list.Tree}
		 */
		tree?: Ext.list.Tree;
		/** 
		 * On input this is value is the result of the
		 *   [isSelectionEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isSelectionEvent) method. On return from event handlers (assuming a
		 *   `false` return does not cancel things) this property is used to determine
		 *   if the clicked node should be selected.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		select?: boolean;
		/** 
		 * On input this is value is the result of the
		 *   [isToggleEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isToggleEvent) method. On return from event handlers (assuming a
		 *   `false` return does not cancel things) this property is used to determine
		 *   if the clicked node's expand/collapse state should be toggled.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		toggle?: boolean;
	}
}
declare namespace Ext.list.RootTreeItem.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.RootTreeItem.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html#method-addListener)
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
declare namespace Ext.list.RootTreeItem.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.RootTreeItem.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html#method-on)
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
declare namespace Ext.list.Tree.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.Tree.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#method-addListener)
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
declare namespace Ext.list.Tree.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.Tree.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#method-on)
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
declare namespace Ext.list.TreeItem.eventsParams.itemclick {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.TreeItem.itemclick](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html#event-itemclick)
	 */
	interface Info extends Ext.base.Params {
		/** 
		 * The DOM event that precipitated this
		 * event.
		 * @configuration
		 * @optional
		 * @type {Ext.event.Event}
		 */
		event?: Ext.event.Event;
		/** 
		 * The tree node that was clicked.
		 * @configuration
		 * @optional
		 * @type {Ext.list.AbstractTreeItem}
		 */
		item?: Ext.list.AbstractTreeItem;
		/** 
		 * The `treelist` that fired this event.
		 * @configuration
		 * @optional
		 * @type {Ext.list.Tree}
		 */
		tree?: Ext.list.Tree;
		/** 
		 * On input this is value is the result of the
		 *   [isSelectionEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isSelectionEvent) method. On return from event handlers (assuming a
		 *   `false` return does not cancel things) this property is used to determine
		 *   if the clicked node should be selected.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		select?: boolean;
		/** 
		 * On input this is value is the result of the
		 *   [isToggleEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#method-isToggleEvent) method. On return from event handlers (assuming a
		 *   `false` return does not cancel things) this property is used to determine
		 *   if the clicked node's expand/collapse state should be toggled.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		toggle?: boolean;
	}
}
declare namespace Ext.list.TreeItem.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.TreeItem.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html#method-addListener)
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
declare namespace Ext.list.TreeItem.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.list.TreeItem.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html#method-on)
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
declare namespace Ext.list.AbstractTreeItem {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.list.AbstractTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html)
	 * The base class for all items in the [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default true
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
		 * `true` if this item is expandable. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expandable?: boolean;
		/** 
		 * `true` if this item is expanded. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expanded?: boolean;
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
		 * @default ''
		 * @type {string}
		 */
		iconCls?: string;
		/** 
		 * The property from the [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node) to map for the [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls) config.
		 * @configuration
		 * @optional
		 * @default 'iconCls'
		 * @type {string}
		 */
		iconClsProperty?: string;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		indent?: object;
		/** 
		 * `true` if this item is a leaf. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		leaf?: boolean;
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
		 * `true` if this item is currently loading data. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		loading?: boolean;
		/** 
		 * The backing node for this item.
		 * @configuration
		 * @optional
		 * @type {Ext.data.TreeModel}
		 */
		node?: Ext.data.TreeModel;
		/** 
		 * One of three possible values:
		 * 
		 * - 0 if mouse is not over this item or any of its descendants.
		 * - 1 if mouse is not over this item but is over one of this item's descendants.
		 * - 2 if mouse is directly over this item.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		over?: number;
		/** 
		 * The owning list for this container.
		 * @configuration
		 * @optional
		 * @type {Ext.list.Tree}
		 */
		owner?: Ext.list.Tree;
		/** 
		 * The parent item for this item.
		 * @configuration
		 * @optional
		 * @type {Ext.list.AbstractTreeItem}
		 */
		parentItem?: Ext.list.AbstractTreeItem;
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
		 * `true` if this is the selected item in the tree.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selected?: boolean;
		/** 
		 * `true` if this item contains the [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected) item in the tree.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selectedParent?: boolean;
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
		 * The text for this item. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default {lazy: true, $value: ''}
		 * @type {string}
		 */
		text?: string;
		/** 
		 * The property from the [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node) to map for the [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text) config.
		 * @configuration
		 * @optional
		 * @default 'text'
		 * @type {string}
		 */
		textProperty?: string;
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
		 * Gets the element to be used for the tree when it is in
		 * [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro) mode.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {Ext.dom.Element}  The element.
		 */
		getToolElement? (): Ext.dom.Element;
		/** 
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item    The item to insert.
		 * @param   {Ext.list.AbstractTreeItem} refItem
		 * The item the node is to
		 * be inserted before. `null` if the item is to be added to the end.
		 * @returns {void}                              
		 */
		insertItem? (item: Ext.list.AbstractTreeItem, refItem: Ext.list.AbstractTreeItem): void;
		/** 
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should select this node.
		 */
		isSelectionEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item The item to remove.
		 * @returns {void}                           
		 */
		removeItem? (item: Ext.list.AbstractTreeItem): void;
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
		 * @param   {object}                            config
		 * @returns {Ext.list.AbstractTreeItem.Statics}        this
		 */
		initConfig? (config: object): Ext.list.AbstractTreeItem.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                            [value] The value to set for the name parameter.
		 * @returns {Ext.list.AbstractTreeItem.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.AbstractTreeItem.Statics;
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
		 * @returns {Ext.list.AbstractTreeItem.Statics}  
		 */
		statics? (): Ext.list.AbstractTreeItem.Statics;
	}
}
declare namespace Ext.list.RootTreeItem {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.list.RootTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html)
	 * This class implements the top-level node in a [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html). Unlike
	 * other nodes, this item is only a container for other items. It does not correspond to
	 * a data record.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default true
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
		 * `true` if this item is expandable. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expandable?: boolean;
		/** 
		 * `true` if this item is expanded. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expanded?: boolean;
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
		 * @default ''
		 * @type {string}
		 */
		iconCls?: string;
		/** 
		 * The property from the [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node) to map for the [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls) config.
		 * @configuration
		 * @optional
		 * @default 'iconCls'
		 * @type {string}
		 */
		iconClsProperty?: string;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		indent?: object;
		/** 
		 * `true` if this item is a leaf. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		leaf?: boolean;
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
		 * `true` if this item is currently loading data. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		loading?: boolean;
		/** 
		 * The backing node for this item.
		 * @configuration
		 * @optional
		 * @type {Ext.data.TreeModel}
		 */
		node?: Ext.data.TreeModel;
		/** 
		 * One of three possible values:
		 * 
		 * - 0 if mouse is not over this item or any of its descendants.
		 * - 1 if mouse is not over this item but is over one of this item's descendants.
		 * - 2 if mouse is directly over this item.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		over?: number;
		/** 
		 * The owning list for this container.
		 * @configuration
		 * @optional
		 * @type {Ext.list.Tree}
		 */
		owner?: Ext.list.Tree;
		/** 
		 * The parent item for this item.
		 * @configuration
		 * @optional
		 * @type {Ext.list.AbstractTreeItem}
		 */
		parentItem?: Ext.list.AbstractTreeItem;
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
		 * `true` if this is the selected item in the tree.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selected?: boolean;
		/** 
		 * `true` if this item contains the [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected) item in the tree.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selectedParent?: boolean;
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
		 * The text for this item. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default {lazy: true, $value: ''}
		 * @type {string}
		 */
		text?: string;
		/** 
		 * The property from the [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node) to map for the [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text) config.
		 * @configuration
		 * @optional
		 * @default 'text'
		 * @type {string}
		 */
		textProperty?: string;
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
		 * Gets the element to be used for the tree when it is in
		 * [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro) mode.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {Ext.dom.Element}  The element.
		 */
		getToolElement? (): Ext.dom.Element;
		/** 
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} item
		 * @param   {object} refItem
		 * @returns {void}           
		 */
		insertItem? (item: object, refItem: object): void;
		/** 
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.event.Event} e The event object.
		 * @returns {boolean}           `true` if the event should select this node.
		 */
		isSelectionEvent? (e: Ext.event.Event): boolean;
		/** 
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}  e
		 * @returns {boolean}   `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: object): boolean;
		/** 
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {Ext.list.AbstractTreeItem} item The item to remove.
		 * @returns {void}                           
		 */
		removeItem? (item: Ext.list.AbstractTreeItem): void;
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
		 * @param   {object}                        config
		 * @returns {Ext.list.RootTreeItem.Statics}        this
		 */
		initConfig? (config: object): Ext.list.RootTreeItem.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.list.RootTreeItem.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.RootTreeItem.Statics;
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
		 * @returns {Ext.list.RootTreeItem.Statics}  
		 */
		statics? (): Ext.list.RootTreeItem.Statics;
	}
}
declare namespace Ext.list.Tree {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html)
	 * A lightweight component to display data in a simple tree structure.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default {duration: 500, easing: 'ease'}
		 * @type {object}
		 */
		animation?: object;
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default true
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
		 * The default configuration for the widgets created for tree items.
		 * @configuration
		 * @optional
		 * @default {xtype: 'treelistitem'}
		 * @type {object}
		 */
		defaults?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		expanderFirst?: boolean;
		/** 
		 * `true` to expand only on the click of the expander element. Setting this to
		 * `false` will allow expansion on click of any part of the element.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		expanderOnly?: boolean;
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
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		highlightPath?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		iconSize?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		indent?: object;
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
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		micro?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		overItem?: object;
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
		 * This config uses the [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-reference) to determine the name of the data
		 * object to place in the `ViewModel`. If `reference` is not set then this config
		 * is ignored.
		 * 
		 * By using this config and [`reference`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-reference) you can bind configs between
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
		 * config block. In these situations, you may utilize [publishState](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#method-publishState) if the property has a
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
		 * @default {selection: 1}
		 * @type {string|string[]|object}
		 */
		publishes?: string | string[] | object;
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
		 * `true` to select the node when clicking the expander.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selectOnExpander?: boolean;
		/** 
		 * The current selected node.
		 * @configuration
		 * @optional
		 * @type {Ext.data.TreeModel}
		 */
		selection?: Ext.data.TreeModel;
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
		 * `true` if only 1 node per branch may be expanded.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		singleExpand?: boolean;
		/** 
		 * The data source to which this component is bound.
		 * @configuration
		 * @optional
		 * @type {string|object|Ext.data.TreeStore}
		 */
		store?: string | object | Ext.data.TreeStore;
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
		 * This object holds a map of `config` properties that will update their binding
		 * as they are modified. For example, `value` is a key added by form fields. The
		 * form of this config is the same as [`publishes`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-publishes).
		 * 
		 * This config is defined so that updaters are not created and added for all
		 * bound properties since most cannot be modified by the end-user and hence are
		 * not appropriate for two-way binding.
		 * @configuration
		 * @optional
		 * @default {selection: 1}
		 * @type {string|string[]|object}
		 */
		twoWayBindable?: string | string[] | object;
		/** 
		 * The ui or uis to be used on this Component
		 * 
		 * When a ui is configured, CSS class names are added to the [element](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#property-element), created
		 * by appending the ui name(s) to each [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#property-classCls) and/or [baseCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-baseCls).
		 * @configuration
		 * @optional
		 * @type {string|string[]}
		 */
		ui?: string | string[];
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
		 * This method is called to populate and return a config object for new nodes. This
		 * can be overridden by derived classes to manipulate properties or `xtype` of the
		 * returned object. Upon return, the object is passed to [`Ext.create`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-create) and the
		 * reference is stored as part of this tree.
		 * 
		 * The base class implementation will apply any configured [`defaults`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-defaults) to the
		 * object it returns.
		 * @method
		 * @public (method)
		 * @template
		 * @param   {Ext.data.TreeModel}        node   The node backing the item.
		 * @param   {Ext.list.AbstractTreeItem} parent
		 * The parent item. This is never `null` but
		 * may be an instance of [`Ext.list.RootTreeItem`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html).
		 * @returns {object}                           The config object to pass to [`Ext.create`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-create) for the item.
		 */
		getItemConfig? (node: Ext.data.TreeModel, parent: Ext.list.AbstractTreeItem): object;
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
		 * @returns {Ext.list.Tree.Statics}        this
		 */
		initConfig? (config: object): Ext.list.Tree.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                [value] The value to set for the name parameter.
		 * @returns {Ext.list.Tree.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.Tree.Statics;
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
		 * @returns {Ext.list.Tree.Statics}  
		 */
		statics? (): Ext.list.Tree.Statics;
	}
}
declare namespace Ext.list.TreeItem {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.list.TreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html)
	 * The default implementation of the class used for [`Ext.list.Tree`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 * 
	 * This class can only be used in conjunction with [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The base CSS class to apply to this widget's element.
		 * Used as the prefix for [ui](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#cfg-ui)-specific class names.
		 * When set to `true` the [classCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Widget.html#property-classCls) will be used as the baseCls
		 * @configuration
		 * @optional
		 * @default true
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
		 * `true` if this item is expandable. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expandable?: boolean;
		/** 
		 * `true` if this item is expanded. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		expanded?: boolean;
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
		 * @default ''
		 * @type {string}
		 */
		iconCls?: string;
		/** 
		 * The property from the [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node) to map for the [iconCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-iconCls) config.
		 * @configuration
		 * @optional
		 * @default 'iconCls'
		 * @type {string}
		 */
		iconClsProperty?: string;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		indent?: object;
		/** 
		 * `true` if this item is a leaf. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		leaf?: boolean;
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
		 * `true` if this item is currently loading data. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		loading?: boolean;
		/** 
		 * The backing node for this item.
		 * @configuration
		 * @optional
		 * @type {Ext.data.TreeModel}
		 */
		node?: Ext.data.TreeModel;
		/** 
		 * One of three possible values:
		 * 
		 * - 0 if mouse is not over this item or any of its descendants.
		 * - 1 if mouse is not over this item but is over one of this item's descendants.
		 * - 2 if mouse is directly over this item.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		over?: number;
		/** 
		 * The owning list for this container.
		 * @configuration
		 * @optional
		 * @type {Ext.list.Tree}
		 */
		owner?: Ext.list.Tree;
		/** 
		 * The parent item for this item.
		 * @configuration
		 * @optional
		 * @type {Ext.list.AbstractTreeItem}
		 */
		parentItem?: Ext.list.AbstractTreeItem;
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
		 * One or more CSS classes to add to the tree item's logical "row" element. This
		 * element fills from left-to-right of the line.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		rowCls?: string;
		/** 
		 * The name of the associated record's field to map to the [rowCls](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html#cfg-rowCls) config.
		 * @configuration
		 * @optional
		 * @default "rowCls"
		 * @type {string}
		 */
		rowClsProperty?: string;
		/** 
		 * `true` if this is the selected item in the tree.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selected?: boolean;
		/** 
		 * `true` if this item contains the [selected](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-selected) item in the tree.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		selectedParent?: boolean;
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
		 * The text for this item. This value is taken from
		 * the underlying [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node).
		 * @configuration
		 * @optional
		 * @default {lazy: true, $value: ''}
		 * @type {string}
		 */
		text?: string;
		/** 
		 * The property from the [node](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-node) to map for the [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html#cfg-text) config.
		 * @configuration
		 * @optional
		 * @default 'text'
		 * @type {string}
		 */
		textProperty?: string;
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
		 * Gets the element to be used for the tree when it is in
		 * [micro](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html#cfg-micro) mode.
		 * @method
		 * @protected (method)
		 * @template
		 * @returns {Ext.dom.Element}  The element.
		 */
		getToolElement? (): Ext.dom.Element;
		/** 
		 * Append a new child item to the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} item
		 * @param   {object} refItem
		 * @returns {void}           
		 */
		insertItem? (item: object, refItem: object): void;
		/** 
		 * Checks whether the event is an event that should select this node.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}  e
		 * @returns {boolean}   `true` if the event should select this node.
		 */
		isSelectionEvent? (e: object): boolean;
		/** 
		 * Checks whether the event is an event that should toggle the expand/collapse state.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object}  e
		 * @returns {boolean}   `true` if the event should toggle the expand/collapsed state.
		 */
		isToggleEvent? (e: object): boolean;
		/** 
		 * Remove a child item from the DOM.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} item
		 * @returns {void}        
		 */
		removeItem? (item: object): void;
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
		 * @param   {object}                    config
		 * @returns {Ext.list.TreeItem.Statics}        this
		 */
		initConfig? (config: object): Ext.list.TreeItem.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                    [value] The value to set for the name parameter.
		 * @returns {Ext.list.TreeItem.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.list.TreeItem.Statics;
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
		 * @returns {Ext.list.TreeItem.Statics}  
		 */
		statics? (): Ext.list.TreeItem.Statics;
	}
}
declare namespace Ext.list.AbstractTreeItem {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.list.AbstractTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.AbstractTreeItem.html)
	 * The base class for all items in the [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	interface Events extends Ext.base.Events {
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
		 * @event
		 * @param   {Ext.list.Tree}                                                sender The `treelist` that fired this event.
		 * @param   {object|Ext.list.AbstractTreeItem.eventsParams.itemclick.Info} info
		 * @param   {object}                                                       eOpts  The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                                                         
		 */
		itemclick? (sender: Ext.list.Tree, info: object | Ext.list.AbstractTreeItem.eventsParams.itemclick.Info, eOpts: object): void;
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
declare namespace Ext.list.RootTreeItem {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.list.RootTreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.RootTreeItem.html)
	 * This class implements the top-level node in a [`treelist`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html). Unlike
	 * other nodes, this item is only a container for other items. It does not correspond to
	 * a data record.
	 */
	interface Events extends Ext.base.Events {
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
		 * @event
		 * @param   {Ext.list.Tree}                                            sender The `treelist` that fired this event.
		 * @param   {object|Ext.list.RootTreeItem.eventsParams.itemclick.Info} info
		 * @param   {object}                                                   eOpts  The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                                                     
		 */
		itemclick? (sender: Ext.list.Tree, info: object | Ext.list.RootTreeItem.eventsParams.itemclick.Info, eOpts: object): void;
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
declare namespace Ext.list.Tree {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html)
	 * A lightweight component to display data in a simple tree structure.
	 */
	interface Events extends Ext.base.Events {
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
declare namespace Ext.list.TreeItem {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.list.TreeItem](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.TreeItem.html)
	 * The default implementation of the class used for [`Ext.list.Tree`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 * 
	 * This class can only be used in conjunction with [Ext.list.Tree](https://docs.sencha.com/extjs/6.2.0/modern/Ext.list.Tree.html).
	 */
	interface Events extends Ext.base.Events {
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
		 * @event
		 * @param   {Ext.list.Tree}                                        sender The `treelist` that fired this event.
		 * @param   {object|Ext.list.TreeItem.eventsParams.itemclick.Info} info
		 * @param   {object}                                               eOpts  The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                                                 
		 */
		itemclick? (sender: Ext.list.Tree, info: object | Ext.list.TreeItem.eventsParams.itemclick.Info, eOpts: object): void;
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
