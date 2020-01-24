declare namespace Ext.tree.plugin {
	/** 
	 * [Ext.tree.plugin.TreeViewDragDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html)
	 * This plugin provides drag and drop functionality for a [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html).
	 * 
	 * A specialized instance of [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html) and [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DropZone.html) are attached to the tree view.  The DropZone will participate in drops
	 * from DragZones having the same [ddGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-ddGroup) including drops from within the same
	 * tree.
	 * 
	 * During the drop operation a data object is passed to a participating DropZone's drop
	 * handlers.  The drag data object has the following properties:
	 * 
	 * - **copy:** [Boolean](https://docs.sencha.com/extjs/6.2.0/classic/Boolean.html)
	 *   The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true
	 *   **and** the control key was pressed as the drag operation began.
	 * - **view:** [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html)
	 *   The source tree view from which the
	 *   drag originated
	 * - **ddel:** HTMLElement
	 *   The drag proxy element which moves with the cursor
	 * - **item:** HTMLElement
	 *   The tree view node upon which the mousedown event was
	 *   registered
	 * - **records:** [Array](https://docs.sencha.com/extjs/6.2.0/classic/Array.html)
	 *   An Array of [Model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html)s
	 *   representing the selected data being dragged from the source tree view.
	 * 
	 * By adding this plugin to a view, two new events will be fired from the client
	 * tree view as well as its owning Tree: [`beforedrop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop) and [`drop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop).
	 * 
	 *    var store = Ext.create('Ext.data.TreeStore', {
	 *        root: {
	 *            expanded: true,
	 *            children: [{
	 *                text: "detention",
	 *                leaf: true
	 *            }, {
	 *                text: "homework",
	 *                expanded: true,
	 *                children: [{
	 *                    text: "book report",
	 *                    leaf: true
	 *                }, {
	 *                    text: "algebra",
	 *                    leaf: true
	 *                }]
	 *            }, {
	 *                text: "buy lottery tickets",
	 *                leaf: true
	 *            }]
	 *        }
	 *    });
	 *    
	 *    Ext.create('Ext.tree.Panel', {
	 *        title: 'Simple Tree',
	 *        width: 200,
	 *        height: 200,
	 *        store: store,
	 *        rootVisible: false,
	 *        renderTo: document.body,
	 *        viewConfig: {
	 *            plugins: {
	 *                ptype: 'treeviewdragdrop',
	 *                dragText: 'Drag and drop to reorganize'
	 *            }
	 *        }
	 *    });
	 * 
	 */
	class TreeViewDragDrop extends Ext.plugin.Abstract {
		/** 
		 * An [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.view.DragZone.html) which handles mousedown and dragging of records from the grid.
		 * @property
		 * @public (property)
		 * @type {Ext.view.DragZone}
		 */
		dragZone?: Ext.view.DragZone;
		/** 
		 * An [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.grid.ViewDropZone.html) which handles mouseover and dropping records in any grid which shares the same [dropGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-dropGroup).
		 * @property
		 * @public (property)
		 * @type {Ext.grid.ViewDropZone}
		 */
		dropZone?: Ext.grid.ViewDropZone;
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
		 * @type {Ext.tree.plugin.TreeViewDragDrop.Statics}
		 */
		self?: Ext.tree.plugin.TreeViewDragDrop.Statics | Ext.plugin.Abstract.Statics | Ext.Base.Statics;
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
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * @param   {object}                                                        members
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * @param   {object}                                                        name
		 * @param   {object}                                                        member
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * @param   {object}                                                        fn
		 * @param   {object}                                                        scope
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * Initializes the plugin.
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
		 * Plugins that can be disconnected from their host component should implement
		 * this method.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		detachCmp? (): void;
		/** 
		 * Returns the component to which this plugin is attached.
		 * @method
		 * @public (method)
		 * @returns {Ext.Component}  The owning host component.
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
		 * The init method is invoked to formally associate the host component and the plugin.
		 * 
		 * Subclasses should perform initialization and set up any requires links between the
		 * plugin and its host Component in their own implementation of this method.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} host The host Component which owns this plugin.
		 * @returns {void}               
		 */
		init? (host: Ext.Component): void;
		/** 
		 * Sets the host component to which this plugin is attached. For a plugin to be
		 * removable without being destroyed, this method should be provided and be prepared
		 * to receive `null` for the component.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} host The owning host component.
		 * @returns {void}               
		 */
		setCmp? (host: Ext.Component): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                        [value] The value to set for the name parameter.
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.tree.plugin.TreeViewDragDrop;
		setConfig? (name: string | object, value?: object): Ext.plugin.Abstract;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                                        config
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.tree.plugin.TreeViewDragDrop;
		initConfig? (config: object): Ext.plugin.Abstract;
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
		 * @returns {Ext.tree.plugin.TreeViewDragDrop.Statics|Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.tree.plugin.TreeViewDragDrop.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
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
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                      names The names of the linked objects to destroy.
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.tree.plugin.TreeViewDragDrop;
		unlink? (names: string[]): Ext.plugin.Abstract;
		unlink? (names: string[]): Ext.Base;
	}
}
declare namespace Ext.tree.plugin.TreeViewDragDrop {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.tree.plugin.TreeViewDragDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html)
	 * This plugin provides drag and drop functionality for a [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html).
	 * 
	 * A specialized instance of [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html) and [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DropZone.html) are attached to the tree view.  The DropZone will participate in drops
	 * from DragZones having the same [ddGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-ddGroup) including drops from within the same
	 * tree.
	 * 
	 * During the drop operation a data object is passed to a participating DropZone's drop
	 * handlers.  The drag data object has the following properties:
	 * 
	 * - **copy:** [Boolean](https://docs.sencha.com/extjs/6.2.0/classic/Boolean.html)
	 *   The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true
	 *   **and** the control key was pressed as the drag operation began.
	 * - **view:** [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html)
	 *   The source tree view from which the
	 *   drag originated
	 * - **ddel:** HTMLElement
	 *   The drag proxy element which moves with the cursor
	 * - **item:** HTMLElement
	 *   The tree view node upon which the mousedown event was
	 *   registered
	 * - **records:** [Array](https://docs.sencha.com/extjs/6.2.0/classic/Array.html)
	 *   An Array of [Model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html)s
	 *   representing the selected data being dragged from the source tree view.
	 * 
	 * By adding this plugin to a view, two new events will be fired from the client
	 * tree view as well as its owning Tree: [`beforedrop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop) and [`drop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop).
	 * 
	 *    var store = Ext.create('Ext.data.TreeStore', {
	 *        root: {
	 *            expanded: true,
	 *            children: [{
	 *                text: "detention",
	 *                leaf: true
	 *            }, {
	 *                text: "homework",
	 *                expanded: true,
	 *                children: [{
	 *                    text: "book report",
	 *                    leaf: true
	 *                }, {
	 *                    text: "algebra",
	 *                    leaf: true
	 *                }]
	 *            }, {
	 *                text: "buy lottery tickets",
	 *                leaf: true
	 *            }]
	 *        }
	 *    });
	 *    
	 *    Ext.create('Ext.tree.Panel', {
	 *        title: 'Simple Tree',
	 *        width: 200,
	 *        height: 200,
	 *        store: store,
	 *        rootVisible: false,
	 *        renderTo: document.body,
	 *        viewConfig: {
	 *            plugins: {
	 *                ptype: 'treeviewdragdrop',
	 *                dragText: 'Drag and drop to reorganize'
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Def extends Ext.tree.plugin.TreeViewDragDrop {
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
		 * @type {Ext.tree.plugin.TreeViewDragDrop.Cfg}
		 */
		config?: Ext.tree.plugin.TreeViewDragDrop.Cfg;
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
		 * @returns {Ext.tree.plugin.TreeViewDragDrop.Statics|Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 * @type {Ext.tree.plugin.TreeViewDragDrop.Statics}
		 */
		statics?: (() => Ext.tree.plugin.TreeViewDragDrop.Statics | Ext.plugin.Abstract.Statics | Ext.Base.Statics) | Ext.tree.plugin.TreeViewDragDrop.Statics | any;
	}
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.tree.plugin.TreeViewDragDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html)
	 * This plugin provides drag and drop functionality for a [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html).
	 * 
	 * A specialized instance of [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html) and [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DropZone.html) are attached to the tree view.  The DropZone will participate in drops
	 * from DragZones having the same [ddGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-ddGroup) including drops from within the same
	 * tree.
	 * 
	 * During the drop operation a data object is passed to a participating DropZone's drop
	 * handlers.  The drag data object has the following properties:
	 * 
	 * - **copy:** [Boolean](https://docs.sencha.com/extjs/6.2.0/classic/Boolean.html)
	 *   The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true
	 *   **and** the control key was pressed as the drag operation began.
	 * - **view:** [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html)
	 *   The source tree view from which the
	 *   drag originated
	 * - **ddel:** HTMLElement
	 *   The drag proxy element which moves with the cursor
	 * - **item:** HTMLElement
	 *   The tree view node upon which the mousedown event was
	 *   registered
	 * - **records:** [Array](https://docs.sencha.com/extjs/6.2.0/classic/Array.html)
	 *   An Array of [Model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html)s
	 *   representing the selected data being dragged from the source tree view.
	 * 
	 * By adding this plugin to a view, two new events will be fired from the client
	 * tree view as well as its owning Tree: [`beforedrop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop) and [`drop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop).
	 * 
	 *    var store = Ext.create('Ext.data.TreeStore', {
	 *        root: {
	 *            expanded: true,
	 *            children: [{
	 *                text: "detention",
	 *                leaf: true
	 *            }, {
	 *                text: "homework",
	 *                expanded: true,
	 *                children: [{
	 *                    text: "book report",
	 *                    leaf: true
	 *                }, {
	 *                    text: "algebra",
	 *                    leaf: true
	 *                }]
	 *            }, {
	 *                text: "buy lottery tickets",
	 *                leaf: true
	 *            }]
	 *        }
	 *    });
	 *    
	 *    Ext.create('Ext.tree.Panel', {
	 *        title: 'Simple Tree',
	 *        width: 200,
	 *        height: 200,
	 *        store: store,
	 *        rootVisible: false,
	 *        renderTo: document.body,
	 *        viewConfig: {
	 *            plugins: {
	 *                ptype: 'treeviewdragdrop',
	 *                dragText: 'Drag and drop to reorganize'
	 *            }
	 *        }
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
		 * @param   {object}                                                        members    The members to add to this class.
		 * @param   {boolean}                                                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * @param   {object}                                                        members
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * @param   {object}                                                        name
		 * @param   {object}                                                        member
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.tree.plugin.TreeViewDragDrop;
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
		 * @param   {object}                                                        fn
		 * @param   {object}                                                        scope
		 * @returns {Ext.tree.plugin.TreeViewDragDrop|Ext.plugin.Abstract|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.tree.plugin.TreeViewDragDrop;
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
declare namespace Ext.tree.plugin.TreeViewDragDrop.eventsParams.beforedrop {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.tree.plugin.TreeViewDragDrop.beforedrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop)
	 * The data object gathered at mousedown time by the
	 * cooperating [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html)'s [getDragData](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html#method-getDragData) method.  It contains the following properties:
	 */
	interface Data extends Ext.base.Params {
		/** 
		 * The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if
		 * [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true **and** the control key was pressed as the drag
		 * operation began.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		copy?: boolean;
		/** 
		 * The source tree view from which the drag
		 * originated
		 * @configuration
		 * @optional
		 * @type {Ext.tree.View}
		 */
		view?: Ext.tree.View;
		/** 
		 * The drag proxy element which moves with the cursor
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		ddel?: HTMLElement;
		/** 
		 * The tree view node upon which the mousedown event
		 * was registered
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		item?: HTMLElement;
		/** 
		 * An Array of Models representing the
		 * selected data being dragged from the source tree view
		 * @configuration
		 * @optional
		 * @type {Ext.data.TreeModel[]}
		 */
		records?: Ext.data.TreeModel[];
	}
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.tree.plugin.TreeViewDragDrop.beforedrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop)
	 * This parameter allows the developer to control when the drop action takes place.
	 * It is useful if any asynchronous processing needs to be completed before
	 * performing the drop. This object has the following properties:
	 */
	interface DropHandlers extends Ext.base.Params {
		/** 
		 * Indicates whether the drop should be deferred.
		 * Set this property to true to defer the drop.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		wait?: boolean;
		/** 
		 * A function to be called to complete
		 * the drop operation.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		processDrop?: ExtGlobalFunction;
		/** 
		 * A function to be called to cancel the
		 * drop operation.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		cancelDrop?: ExtGlobalFunction;
	}
}
declare namespace Ext.tree.plugin.TreeViewDragDrop.eventsParams.drop {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.tree.plugin.TreeViewDragDrop.drop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop)
	 * The data object gathered at mousedown time by the
	 * cooperating [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html)'s [getDragData](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html#method-getDragData) method.  It contains the following properties:
	 */
	interface Data extends Ext.base.Params {
		/** 
		 * The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if
		 * [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true **and** the control key was pressed as the drag
		 * operation began.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		copy?: boolean;
		/** 
		 * The source tree view from which the drag
		 * originated
		 * @configuration
		 * @optional
		 * @type {Ext.tree.View}
		 */
		view?: Ext.tree.View;
		/** 
		 * The drag proxy element which moves with the cursor
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		ddel?: HTMLElement;
		/** 
		 * The tree view node upon which the mousedown event
		 * was registered
		 * @configuration
		 * @optional
		 * @type {HTMLElement}
		 */
		item?: HTMLElement;
		/** 
		 * An Array of Models representing the
		 * selected data being dragged from the source tree view
		 * @configuration
		 * @optional
		 * @type {Ext.data.TreeModel[]}
		 */
		records?: Ext.data.TreeModel[];
	}
}
declare namespace Ext.tree.plugin.TreeViewDragDrop {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.tree.plugin.TreeViewDragDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html)
	 * This plugin provides drag and drop functionality for a [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html).
	 * 
	 * A specialized instance of [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html) and [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DropZone.html) are attached to the tree view.  The DropZone will participate in drops
	 * from DragZones having the same [ddGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-ddGroup) including drops from within the same
	 * tree.
	 * 
	 * During the drop operation a data object is passed to a participating DropZone's drop
	 * handlers.  The drag data object has the following properties:
	 * 
	 * - **copy:** [Boolean](https://docs.sencha.com/extjs/6.2.0/classic/Boolean.html)
	 *   The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true
	 *   **and** the control key was pressed as the drag operation began.
	 * - **view:** [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html)
	 *   The source tree view from which the
	 *   drag originated
	 * - **ddel:** HTMLElement
	 *   The drag proxy element which moves with the cursor
	 * - **item:** HTMLElement
	 *   The tree view node upon which the mousedown event was
	 *   registered
	 * - **records:** [Array](https://docs.sencha.com/extjs/6.2.0/classic/Array.html)
	 *   An Array of [Model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html)s
	 *   representing the selected data being dragged from the source tree view.
	 * 
	 * By adding this plugin to a view, two new events will be fired from the client
	 * tree view as well as its owning Tree: [`beforedrop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop) and [`drop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop).
	 * 
	 *    var store = Ext.create('Ext.data.TreeStore', {
	 *        root: {
	 *            expanded: true,
	 *            children: [{
	 *                text: "detention",
	 *                leaf: true
	 *            }, {
	 *                text: "homework",
	 *                expanded: true,
	 *                children: [{
	 *                    text: "book report",
	 *                    leaf: true
	 *                }, {
	 *                    text: "algebra",
	 *                    leaf: true
	 *                }]
	 *            }, {
	 *                text: "buy lottery tickets",
	 *                leaf: true
	 *            }]
	 *        }
	 *    });
	 *    
	 *    Ext.create('Ext.tree.Panel', {
	 *        title: 'Simple Tree',
	 *        width: 200,
	 *        height: 200,
	 *        store: store,
	 *        rootVisible: false,
	 *        renderTo: document.body,
	 *        viewConfig: {
	 *            plugins: {
	 *                ptype: 'treeviewdragdrop',
	 *                dragText: 'Drag and drop to reorganize'
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True if drops on the tree container (outside of a specific tree node) are allowed.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowContainerDrops?: boolean;
		/** 
		 * Set as `true` to allow the user to hold down the control key at the start of the
		 * drag operation and copy the dragged records between grids.  Otherwise, dragged
		 * records will be moved.
		 * 
		 * **Note:** This only applies to records dragged between two different grids with
		 * unique stores.
		 * 
		 * See [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy) to enable the copying of all dragged records.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowCopy?: boolean;
		/** 
		 * Allow inserting a dragged node between an expanded parent node and its first child that will become a sibling of
		 * the parent when dropped.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		allowParentInserts?: boolean;
		/** 
		 * True if the tree should only allow append drops (use for trees which are sorted).
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		appendOnly?: boolean;
		/** 
		 * True to register this container with the Scrollmanager for auto scrolling during drag operations.
		 * A [Ext.dd.ScrollManager](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.ScrollManager.html) configuration may also be passed.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object|boolean}
		 */
		containerScroll?: object | boolean;
		/** 
		 * Set as `true` to copy the records from the source grid to the destination drop
		 * grid.  Otherwise, dragged records will be moved.
		 * 
		 * **Note:** This only applies to records dragged between two different grids with
		 * unique stores.
		 * 
		 * See [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) to allow only control-drag operations to copy records.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		copy?: boolean;
		/** 
		 * A named drag drop group to which this object belongs. If a group is specified, then both the DragZones and
		 * DropZone used by this plugin will only interact with other drag drop objects in the same group.
		 * @configuration
		 * @optional
		 * @default TreeDD
		 * @type {string}
		 */
		ddGroup?: string;
		/** 
		 * The name of the model field that is used to display the text for the nodes
		 * @configuration
		 * @optional
		 * @default text
		 * @type {string}
		 */
		displayField?: string;
		/** 
		 * The ddGroup to which the [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#property-dragZone) will belong.
		 * 
		 * This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other
		 * Drag/DropZones which are members of the same ddGroup.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dragGroup?: string;
		/** 
		 * The text to show while dragging.
		 * 
		 * Two placeholders can be used in the text:
		 * 
		 * - `{0}` The number of selected items.
		 * - `{1}` 's' when more than 1 items (only useful for English).
		 * 
		 * **NOTE:** The node's [text](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html#cfg-displayField) will be shown
		 * when a single node is dragged unless `dragText` is a simple text string.
		 * @configuration
		 * @optional
		 * @default '{0} selected node{1}'
		 * @type {string}
		 */
		dragText?: string;
		/** 
		 * A config object to apply to the creation of the [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#property-dragZone) which handles for drag start gestures.
		 * 
		 * Template methods of the DragZone may be overridden using this config.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		dragZone?: object;
		/** 
		 * The ddGroup to which the [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#property-dropZone) will belong.
		 * 
		 * This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other
		 * Drag/DropZones which are members of the same [ddGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-ddGroup).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dropGroup?: string;
		/** 
		 * A config object to apply to the creation of the [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#property-dropZone) which handles mouseover and drop gestures.
		 * 
		 * Template methods of the DropZone may be overridden using this config.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		dropZone?: object;
		/** 
		 * Set to `false` to disallow dragging items from the View.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableDrag?: boolean;
		/** 
		 * Set to `false` to disallow the View from accepting drop gestures.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		enableDrop?: boolean;
		/** 
		 * The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node over the
		 * target.
		 * @configuration
		 * @optional
		 * @default 1000
		 * @type {number}
		 */
		expandDelay?: number;
		/** 
		 * An identifier for the plugin that can be set at creation time to later retrieve the
		 * plugin using the getPlugin method. For example:
		 * 
		 *     var panel = Ext.create({
		 *         xtype: 'panel',
		 *    
		 *         plugins: [{
		 *             id: 'foo',
		 *             ...
		 *         }]
		 *     });
		 *    
		 *     // later on:
		 *     var plugin = panel.getPlugin('foo');
		 * 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		id?: string;
		/** 
		 * The color to use when visually highlighting the dragged or dropped node (default value is light blue).
		 * The color must be a 6 digit hex value, without a preceding '#'. See also [nodeHighlightOnDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-nodeHighlightOnDrop) and
		 * [nodeHighlightOnRepair](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-nodeHighlightOnRepair).
		 * @configuration
		 * @optional
		 * @default c3daf9
		 * @type {string}
		 */
		nodeHighlightColor?: string;
		/** 
		 * Whether or not to highlight any nodes after they are
		 * successfully dropped on their target. Defaults to the value of [`Ext.enableFx`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#property-enableFx).
		 * See also [nodeHighlightColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-nodeHighlightColor) and [nodeHighlightOnRepair](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-nodeHighlightOnRepair).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		nodeHighlightOnDrop?: boolean;
		/** 
		 * Whether or not to highlight any nodes after they are
		 * repaired from an unsuccessful drag/drop. Defaults to the value of [`Ext.enableFx`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#property-enableFx).
		 * See also [nodeHighlightColor](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-nodeHighlightColor) and [nodeHighlightOnDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-nodeHighlightOnDrop).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		nodeHighlightOnRepair?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		pluginId?: string;
		/** 
		 * Configure as `true` to sort the target node into the current tree sort order after the dropped node is added.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		sortOnDrop?: boolean;
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
		 * @param   {object}                                   config
		 * @returns {Ext.tree.plugin.TreeViewDragDrop.Statics}        this
		 */
		initConfig? (config: object): Ext.tree.plugin.TreeViewDragDrop.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                   [value] The value to set for the name parameter.
		 * @returns {Ext.tree.plugin.TreeViewDragDrop.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.tree.plugin.TreeViewDragDrop.Statics;
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
		 * @returns {Ext.tree.plugin.TreeViewDragDrop.Statics}  
		 */
		statics? (): Ext.tree.plugin.TreeViewDragDrop.Statics;
	}
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.tree.plugin.TreeViewDragDrop](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html)
	 * This plugin provides drag and drop functionality for a [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html).
	 * 
	 * A specialized instance of [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html) and [DropZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DropZone.html) are attached to the tree view.  The DropZone will participate in drops
	 * from DragZones having the same [ddGroup](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-ddGroup) including drops from within the same
	 * tree.
	 * 
	 * During the drop operation a data object is passed to a participating DropZone's drop
	 * handlers.  The drag data object has the following properties:
	 * 
	 * - **copy:** [Boolean](https://docs.sencha.com/extjs/6.2.0/classic/Boolean.html)
	 *   The value of [copy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-copy).  Or `true` if [allowCopy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#cfg-allowCopy) is true
	 *   **and** the control key was pressed as the drag operation began.
	 * - **view:** [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html)
	 *   The source tree view from which the
	 *   drag originated
	 * - **ddel:** HTMLElement
	 *   The drag proxy element which moves with the cursor
	 * - **item:** HTMLElement
	 *   The tree view node upon which the mousedown event was
	 *   registered
	 * - **records:** [Array](https://docs.sencha.com/extjs/6.2.0/classic/Array.html)
	 *   An Array of [Model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.data.Model.html)s
	 *   representing the selected data being dragged from the source tree view.
	 * 
	 * By adding this plugin to a view, two new events will be fired from the client
	 * tree view as well as its owning Tree: [`beforedrop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-beforedrop) and [`drop`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop).
	 * 
	 *    var store = Ext.create('Ext.data.TreeStore', {
	 *        root: {
	 *            expanded: true,
	 *            children: [{
	 *                text: "detention",
	 *                leaf: true
	 *            }, {
	 *                text: "homework",
	 *                expanded: true,
	 *                children: [{
	 *                    text: "book report",
	 *                    leaf: true
	 *                }, {
	 *                    text: "algebra",
	 *                    leaf: true
	 *                }]
	 *            }, {
	 *                text: "buy lottery tickets",
	 *                leaf: true
	 *            }]
	 *        }
	 *    });
	 *    
	 *    Ext.create('Ext.tree.Panel', {
	 *        title: 'Simple Tree',
	 *        width: 200,
	 *        height: 200,
	 *        store: store,
	 *        rootVisible: false,
	 *        renderTo: document.body,
	 *        viewConfig: {
	 *            plugins: {
	 *                ptype: 'treeviewdragdrop',
	 *                dragText: 'Drag and drop to reorganize'
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * **This event is fired through the [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html) and its owning
		 * [Tree](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html). You can add listeners to the tree or tree [view config](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html#cfg-viewConfig) object**
		 * 
		 * Fired when a drop gesture has been triggered by a mouseup event in a valid drop
		 * position in the tree view.
		 * 
		 * Returning `false` to this event signals that the drop gesture was invalid and
		 * animates the drag proxy back to the point from which the drag began.
		 * 
		 * The dropHandlers parameter can be used to defer the processing of this event. For
		 * example, you can force the handler to wait for the result of a message box
		 * confirmation or an asynchronous server call (_see the details of the dropHandlers
		 * property for more information_).
		 * 
		 *    tree.on('beforedrop', function(node, data, overModel, dropPosition, dropHandlers) {
		 *        // Defer the handling
		 *        dropHandlers.wait = true;
		 *        Ext.MessageBox.confirm('Drop', 'Are you sure', function(btn){
		 *            if (btn === 'yes') {
		 *                dropHandlers.processDrop();
		 *            } else {
		 *                dropHandlers.cancelDrop();
		 *            }
		 *        });
		 *    });
		 * 
		 * Any other return value continues with the data transfer operation unless the wait
		 * property is set.
		 * @event
		 * @param   {HTMLElement}                                                                  node
		 * The [tree view](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html) node **if any** over
		 * which the cursor was positioned.
		 * @param   {object|Ext.tree.plugin.TreeViewDragDrop.eventsParams.beforedrop.Data}         data
		 * The data object gathered at mousedown time by the
		 * cooperating [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html)'s [getDragData](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html#method-getDragData) method.  It contains the following properties:
		 * @param   {Ext.data.TreeModel}                                                           overModel    The Model over which the drop gesture took place
		 * @param   {string}                                                                       dropPosition
		 * `"before"` or `"after"` depending on whether the
		 * cursor is above or below the mid-line of the node.
		 * @param   {object|Ext.tree.plugin.TreeViewDragDrop.eventsParams.beforedrop.DropHandlers} dropHandlers
		 * This parameter allows the developer to control when the drop action takes place.
		 * It is useful if any asynchronous processing needs to be completed before
		 * performing the drop. This object has the following properties:
		 * @param   {object}                                                                       eOpts        The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                                                                         
		 */
		beforedrop? (node: HTMLElement, data: object | Ext.tree.plugin.TreeViewDragDrop.eventsParams.beforedrop.Data, overModel: Ext.data.TreeModel, dropPosition: string, dropHandlers: object | Ext.tree.plugin.TreeViewDragDrop.eventsParams.beforedrop.DropHandlers, eOpts: object): void;
		/** 
		 * **This event is fired through the [TreeView](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html) and its owning
		 * [Tree](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html). You can add listeners to the tree or tree [view config](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html#cfg-viewConfig) object**
		 * 
		 * Fired when a drop operation has been completed and the data has been moved or
		 * copied.
		 * @event
		 * @param   {HTMLElement}                                                    node
		 * The [tree view](https://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.View.html) node **if any** over
		 * which the cursor was positioned.
		 * @param   {object|Ext.tree.plugin.TreeViewDragDrop.eventsParams.drop.Data} data
		 * The data object gathered at mousedown time by the
		 * cooperating [DragZone](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html)'s [getDragData](https://docs.sencha.com/extjs/6.2.0/classic/Ext.dd.DragZone.html#method-getDragData) method.  It contains the following properties:
		 * @param   {Ext.data.TreeModel}                                             overModel
		 * The Model over which the drop gesture took
		 * place.
		 * @param   {string}                                                         dropPosition
		 * `"before"` or `"after"` depending on whether the
		 * cursor is above or below the mid-line of the node.
		 * @param   {object}                                                         eOpts        The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/classic/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                                                           
		 */
		drop? (node: HTMLElement, data: object | Ext.tree.plugin.TreeViewDragDrop.eventsParams.drop.Data, overModel: Ext.data.TreeModel, dropPosition: string, eOpts: object): void;
	}
}
