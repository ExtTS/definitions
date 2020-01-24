declare namespace Ext.data.reader {
	/** 
	 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html)
	 * Data reader class to create an Array of [Ext.data.Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) objects from an Array.
	 * Each element of that Array represents a row of data fields. The
	 * fields are pulled into a Record object using as a subscript, the `mapping` property
	 * of the field definition if it exists, or the field's ordinal position in the definition.
	 * 
	 * <u>Example code:</u>
	 * 
	 *    Employee = Ext.define('Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id',
	 *            {name: 'name', mapping: 1},         // "mapping" only needed if an "id" field is present which
	 *            {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        
	 *        ]
	 *    });
	 *    
	 *    var myReader = new Ext.data.reader.Array({
	 *        model: 'Employee'
	 *    }, Employee);
	 * 
	 * This would consume an Array like this:
	 * 
	 *    [ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]
	 * 
	 */
	class Array extends Ext.data.reader.Json {
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
		 * @type {Ext.data.reader.Array.Statics}
		 */
		self?: Ext.data.reader.Array.Statics | Ext.data.reader.Json.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Array;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Json;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.reader.Array;
		static addStatics? (members: object): typeof Ext.data.reader.Json;
		static addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.reader.Array;
		static addMember? (name: object, member: object): typeof Ext.data.reader.Json;
		static addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                                                     fn
		 * @param   {object}                                                                     scope
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Array;
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Json;
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
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
		 * Returns the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getImplicitIncludes? (): boolean;
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
		 * Returns the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getKeepRawData? (): boolean;
		/** 
		 * Returns the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getMessageProperty? (): string;
		/** 
		 * Returns the value of [metaProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-metaProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getMetaProperty? (): string;
		/** 
		 * Returns the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.data.Model}  
		 */
		getModel? (): string | Ext.data.Model;
		/** 
		 * Returns the value of [preserveRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-preserveRawData).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getPreserveRawData? (): boolean;
		/** 
		 * Returns the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReadRecordsOnFailure? (): boolean;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getRecord? (): string;
		/** 
		 * Takes a raw response object (as passed to the [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read) method) and returns the useful data
		 * segment from it. This must be implemented by each subclass.
		 * @method
		 * @public (method)
		 * @param   {object} response The response object
		 * @returns {object}          The extracted data from the response. For example, a JSON object or an XML document.
		 */
		getResponseData? (response: object): object;
		/** 
		 * Returns the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @returns {string|Function}  
		 */
		getRootProperty? (): ExtGlobalFunction | string;
		/** 
		 * Returns the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @returns {object|string}  
		 */
		getSuccessProperty? (): object;
		getSuccessProperty? (): string;
		/** 
		 * Returns the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @returns {object|string}  
		 */
		getTotalProperty? (): object;
		getTotalProperty? (): string;
		/** 
		 * Returns the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @returns {Function|string|object}  
		 */
		getTransform? (): ExtGlobalFunction | string | object;
		/** 
		 * Returns the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTypeProperty? (): string;
		/** 
		 * Returns the value of [useSimpleAccessors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-useSimpleAccessors).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getUseSimpleAccessors? (): boolean;
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
		 * Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to
		 * retrieve meta data from the response, and extractData to turn the JSON data into model instances.
		 * @method
		 * @public (method)
		 * @param   {object}             data          The raw JSON data
		 * @param   {object}             [readOptions] See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-read) for details.
		 * @returns {Ext.data.ResultSet}               A ResultSet containing model instances and meta data about the results
		 */
		readRecords? (data: object, readOptions?: object): Ext.data.ResultSet;
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
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                                     [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Array;
		setConfig? (name: string | object, value?: object): Ext.data.reader.Json;
		setConfig? (name: string | object, value?: object): Ext.data.reader.Reader;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @param   {boolean} implicitIncludes The new value.
		 * @returns {void}                     
		 */
		setImplicitIncludes? (implicitIncludes: boolean): void;
		/** 
		 * Sets the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @param   {boolean} keepRawData The new value.
		 * @returns {void}                
		 */
		setKeepRawData? (keepRawData: boolean): void;
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
		 * Sets the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @param   {string} messageProperty The new value.
		 * @returns {void}                   
		 */
		setMessageProperty? (messageProperty: string): void;
		/** 
		 * Sets the value of [metaProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-metaProperty).
		 * @method
		 * @public (method)
		 * @param   {string} metaProperty The new value.
		 * @returns {void}                
		 */
		setMetaProperty? (metaProperty: string): void;
		/** 
		 * Sets the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.data.Model} model The new value.
		 * @returns {void}                        
		 */
		setModel? (model: string | Ext.data.Model): void;
		/** 
		 * Sets the value of [preserveRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-preserveRawData).
		 * @method
		 * @public (method)
		 * @param   {boolean} preserveRawData The new value.
		 * @returns {void}                    
		 */
		setPreserveRawData? (preserveRawData: boolean): void;
		/** 
		 * Sets the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @param   {boolean} readRecordsOnFailure The new value.
		 * @returns {void}                         
		 */
		setReadRecordsOnFailure? (readRecordsOnFailure: boolean): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {string} record The new value.
		 * @returns {void}          
		 */
		setRecord? (record: string): void;
		/** 
		 * Sets the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @param   {Function|string} rootProperty The new value.
		 * @returns {void}                         
		 */
		setRootProperty? (rootProperty: ExtGlobalFunction | string): void;
		/** 
		 * Sets the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @param   {object} successProperty The new value.
		 * @returns {void}                   
		 */
		setSuccessProperty? (successProperty: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.data.reader.Reader.setSuccessProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-setSuccessProperty).
		 * Sets the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @param   {string} successProperty The new value.
		 * @returns {void}                   
		 */
		setSuccessProperty? (successProperty: string): void;
		/** 
		 * Sets the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @param   {object} totalProperty The new value.
		 * @returns {void}                 
		 */
		setTotalProperty? (totalProperty: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.data.reader.Reader.setTotalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-setTotalProperty).
		 * Sets the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @param   {string} totalProperty The new value.
		 * @returns {void}                 
		 */
		setTotalProperty? (totalProperty: string): void;
		/** 
		 * Sets the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @param   {Function|string|object} transform The new value.
		 * @returns {void}                             
		 */
		setTransform? (transform: ExtGlobalFunction | string | object): void;
		/** 
		 * Sets the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @param   {string} typeProperty The new value.
		 * @returns {void}                
		 */
		setTypeProperty? (typeProperty: string): void;
		/** 
		 * Sets the value of [useSimpleAccessors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-useSimpleAccessors).
		 * @method
		 * @public (method)
		 * @param   {boolean} useSimpleAccessors The new value.
		 * @returns {void}                       
		 */
		setUseSimpleAccessors? (useSimpleAccessors: boolean): void;
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
		 * This method provides a hook to do any data transformation before the reading process
		 * begins. By default this function just returns what is passed to it. It can be
		 * overridden in a subclass to return something else.
		 * See [XmlReader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html) for an example.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} data The data object
		 * @returns {object}      The normalized data object
		 */
		getData? (data: object): object;
		/** 
		 * Destructor for classes that extend Observable.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * @param   {object}                                                                     config
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.reader.Array;
		initConfig? (config: object): Ext.data.reader.Json;
		initConfig? (config: object): Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Array.Statics|Ext.data.reader.Json.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.reader.Array.Statics;
		statics? (): Ext.data.reader.Json.Statics;
		statics? (): Ext.data.reader.Reader.Statics;
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
		 * @param   {object} model
		 * @returns {void}         
		 */
		applyModel? (model: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} transform
		 * @returns {void}             
		 */
		applyTransform? (transform: object): void;
		/** 
		 * This builds optimized functions for retrieving record data and meta data from an object.
		 * Subclasses may need to implement their own getRoot function.
		 * @method
		 * @private (method)
		 * @param   {boolean} [force] True to automatically remove existing extractor functions first
		 * @returns {void}            
		 */
		buildExtractors? (force?: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		buildFieldExtractors? (): void;
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
		 * Returns an accessor function for the given property string. Gives support for properties such as the following:
		 * 
		 * - 'someProperty'
		 * - 'some.property'
		 * - '["someProperty"]'
		 * - 'values[0]'
		 * 
		 * This is used by [buildExtractors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-buildExtractors) to create optimized extractor functions for properties that are looked
		 * up directly on the source object (e.g. [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty), [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty), etc.).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createAccessor? (): void;
		/** 
		 * Returns an accessor function for the passed Field. Gives support for properties such as the following:
		 * 
		 * - 'someProperty'
		 * - 'some.property'
		 * - '["someProperty"]'
		 * - 'values[0]'
		 * 
		 * This is used by [buildExtractors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#method-buildExtractors) to create optimized extractor expressions when converting raw
		 * data into model instances. This method is used at the field level to dynamically map values to model fields.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {void}         
		 */
		createFieldAccessor? (field: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.data.reader.Reader.createFieldAccessor](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-createFieldAccessor).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createFieldAccessor? (): void;
		/** 
		 * Creates an object that identifies a read error occurred.
		 * @method
		 * @private (method)
		 * @param   {string} msg An error message to include
		 * @returns {object}     An error object
		 */
		createReadError? (msg: string): object;
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
		 * @param   {object} data
		 * @param   {object} Model
		 * @returns {void}         
		 */
		defaultRecordCreator? (data: object, Model: object): void;
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
		 * We're just preparing the data for the superclass by pulling out the record objects we want. If a [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record)
		 * was specified we have to pull those out of the larger JSON object, which is most of what this function is doing
		 * @method
		 * @private (method)
		 * @param   {object}           root          The JSON root node
		 * @param   {object}           [readOptions] See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-read) for details.
		 * @returns {Ext.data.Model[]}               The records
		 */
		extractData? (root: object, readOptions?: object): Ext.data.Model[];
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} raw
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractModelData? (raw: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @param   {object} entityType
		 * @param   {object} includes
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractRecord? (node: object, readOptions: object, entityType: object, includes: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @returns {void}               
		 */
		extractRecordData? (node: object, readOptions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		forceBuildExtractors? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessor? (prop: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessorKey? (prop: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * Based upon a Reader's typeProperty config, determine the type of child node to create from the raw data
		 * @method
		 * @private (method)
		 * @param   {object} schema
		 * @param   {object} rawNode
		 * @param   {object} typeProperty
		 * @returns {void}                
		 */
		getChildType? (schema: object, rawNode: object, typeProperty: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} extractors
		 * @returns {void}              
		 */
		getFieldExtractorInfo? (extractors: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFields? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} raw
		 * @returns {void}       
		 */
		getModelData? (raw: object): void;
		/** 
		 * Returns the shared null result set.
		 * @method
		 * @private (method)
		 * @returns {Ext.data.ResultSet}  The null result set.
		 */
		getNullResultSet? (): Ext.data.ResultSet;
		/** 
		 * Returns the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @returns {Ext.data.proxy.Proxy}  
		 */
		getProxy? (): Ext.data.proxy.Proxy;
		/** 
		 * This will usually need to be implemented in a subclass. Given a generic data object (the type depends on the type
		 * of data we are reading), this function should return the object as configured by the Reader's 'root' meta data config.
		 * See XmlReader's getRoot implementation for an example. By default the same data object will simply be returned.
		 * @method
		 * @private (method)
		 * @param   {object} data The data object
		 * @returns {object}      The same data object
		 */
		getRoot? (data: object): object;
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
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * Reconfigures the meta data tied to this Reader
		 * @method
		 * @private (method)
		 * @param   {object} meta
		 * @returns {void}        
		 */
		onMetaChange? (meta: object): void;
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
		 * Loads the record associations from the data object.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Model} record      The record to load associations for.
		 * @param   {object}         data        The raw data object.
		 * @param   {object}         readOptions See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read).
		 * @returns {void}                       
		 */
		readAssociated? (record: Ext.data.Model, data: object, readOptions: object): void;
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
		 * Sets the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @param   {Ext.data.proxy.Proxy} proxy The new value.
		 * @returns {void}                       
		 */
		setProxy? (proxy: Ext.data.proxy.Proxy): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                                                   names The names of the linked objects to destroy.
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.reader.Array;
		unlink? (names: string[]): Ext.data.reader.Json;
		unlink? (names: string[]): Ext.data.reader.Reader;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMessageProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMetaProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateRootProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateSuccessProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTotalProperty? (): void;
	}
	/** 
	 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html)
	 * The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually
	 * happens as a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're
	 * not already familiar with them.
	 * 
	 * We created the simplest type of JSON Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s
	 * [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a JSON Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        model: 'User'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    [
	 *        {
	 *            "id": 1,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        },
	 *        {
	 *            "id": 2,
	 *            "name": "Abe Elias",
	 *            "email": "abe@sencha.com"
	 *        }
	 *    ]
	 * 
	 * ## Reading other JSON formats
	 * 
	 * If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually
	 * pass JsonReader a couple of configuration options to make it parse your format. For example, we can use the
	 * [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration to parse data that comes back like this:
	 * 
	 *    {
	 *        "users": [
	 *           {
	 *               "id": 1,
	 *               "name": "Ed Spencer",
	 *               "email": "ed@sencha.com"
	 *           },
	 *           {
	 *               "id": 2,
	 *               "name": "Abe Elias",
	 *               "email": "abe@sencha.com"
	 *           }
	 *        ]
	 *    }
	 * 
	 * To parse this we just pass in a [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration that matches the 'users' above:
	 * 
	 *    reader: {
	 *        type: 'json',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata
	 * around each record inside a nested structure like this:
	 * 
	 *    {
	 *        "total": 122,
	 *        "offset": 0,
	 *        "users": [
	 *            {
	 *                "id": "ed-spencer-1",
	 *                "value": 1,
	 *                "user": {
	 *                    "id": 1,
	 *                    "name": "Ed Spencer",
	 *                    "email": "ed@sencha.com"
	 *                }
	 *            }
	 *        ]
	 *    }
	 * 
	 * In the case above the record data is nested an additional level inside the "users" array as each "user" item has
	 * additional metadata surrounding it ('id' and 'value' in this case). To parse data out of each "user" item in the
	 * JSON above we need to specify the [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record) configuration like this:
	 * 
	 *    reader: {
	 *        type  : 'json',
	 *        rootProperty  : 'users',
	 *        record: 'user'
	 *    }
	 * 
	 * ## Response MetaData
	 * 
	 * The server can return metadata in its response, in addition to the record data, that describe attributes
	 * of the data set itself or are used to reconfigure the Reader. To pass metadata in the response you simply
	 * add a `metaData` attribute to the root of the response data. The metaData attribute can contain anything,
	 * but supports a specific set of properties that are handled by the Reader if they are present:
	 * 
	 * - [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty): the property name of the root response node containing the record data
	 * - [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-totalProperty): property name for the total number of records in the data
	 * - [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty): property name for the success status of the response
	 * - [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty): property name for an optional response message
	 * - [fields](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-fields): Config used to reconfigure the Model's fields before converting the
	 *   response data into records
	 * 
	 * An initial Reader configuration containing all of these properties might look like this ("fields" would be
	 * included in the Model definition, not shown):
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        rootProperty : 'root',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success',
	 *        messageProperty: 'message'
	 *    }
	 * 
	 * If you were to pass a response object containing attributes different from those initially defined above, you could
	 * use the `metaData` attribute to reconfigure the Reader on the fly. For example:
	 * 
	 *    {
	 *        "count": 1,
	 *        "ok": true,
	 *        "msg": "Users found",
	 *        "users": [{
	 *            "userId": 123,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        }],
	 *        "metaData": {
	 *            "rootProperty": "users",
	 *            "totalProperty": 'count',
	 *            "successProperty": 'ok',
	 *            "messageProperty": 'msg'
	 *        }
	 *    }
	 * 
	 * You can also place any other arbitrary data you need into the `metaData` attribute which will be ignored by the Reader,
	 * but will be accessible via the Reader's [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData) property (which is also passed to listeners via the Proxy's
	 * [metachange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#event-metachange) event (also relayed by the store). Application code can then
	 * process the passed metadata in any way it chooses.
	 * 
	 * A simple example for how this can be used would be customizing the fields for a Model that is bound to a grid. By passing
	 * the `fields` property the Model will be automatically updated by the Reader internally, but that change will not be
	 * reflected automatically in the grid unless you also update the column configuration. You could do this manually, or you
	 * could simply pass a standard grid column config object as part of the `metaData` attribute
	 * and then pass that along to the grid. Here's a very simple example for how that could be accomplished:
	 * 
	 *    // response format:
	 *    {
	 *        ...
	 *        "metaData": {
	 *            "fields": [
	 *                { "name": "userId", "type": "int" },
	 *                { "name": "name", "type": "string" },
	 *                { "name": "birthday", "type": "date", "dateFormat": "Y-j-m" },
	 *            ],
	 *            "columns": [
	 *                { "text": "User ID", "dataIndex": "userId", "width": 40 },
	 *                { "text": "User Name", "dataIndex": "name", "flex": 1 },
	 *                { "text": "Birthday", "dataIndex": "birthday", "flex": 1, "format": 'Y-j-m', "xtype": "datecolumn" }
	 *            ]
	 *        }
	 *    }
	 * 
	 * The Reader will automatically read the meta fields config and rebuild the Model based on the new fields, but to handle
	 * the new column configuration you would need to handle the metadata within the application code. This is done simply enough
	 * by handling the metachange event on either the store or the proxy, e.g.:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        ...
	 *        listeners: {
	 *            'metachange': function(store, meta) {
	 *                myGrid.reconfigure(store, meta.columns);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	class Json extends Ext.data.reader.Reader {
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
		 * @type {Ext.data.reader.Json.Statics}
		 */
		self?: Ext.data.reader.Json.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics;
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
		 * @param   {object}                                               members    The members to add to this class.
		 * @param   {boolean}                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Json;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.reader.Json;
		static addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                               name
		 * @param   {object}                                               member
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.reader.Json;
		static addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                               fn
		 * @param   {object}                                               scope
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Json;
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Creates new Reader.
		 * @method
		 * @public (method)
		 * @param   {object} [config] Config object.
		 */
		constructor (config?: object);
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
		 * Returns the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getImplicitIncludes? (): boolean;
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
		 * Returns the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getKeepRawData? (): boolean;
		/** 
		 * Returns the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getMessageProperty? (): string;
		/** 
		 * Returns the value of [metaProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-metaProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getMetaProperty? (): string;
		/** 
		 * Returns the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.data.Model}  
		 */
		getModel? (): string | Ext.data.Model;
		/** 
		 * Returns the value of [preserveRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-preserveRawData).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getPreserveRawData? (): boolean;
		/** 
		 * Returns the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReadRecordsOnFailure? (): boolean;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getRecord? (): string;
		/** 
		 * Takes a raw response object (as passed to the [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read) method) and returns the useful data
		 * segment from it. This must be implemented by each subclass.
		 * @method
		 * @public (method)
		 * @param   {object} response The response object
		 * @returns {object}          The extracted data from the response. For example, a JSON object or an XML document.
		 */
		getResponseData? (response: object): object;
		/** 
		 * Returns the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @returns {string|Function}  
		 */
		getRootProperty? (): ExtGlobalFunction | string;
		/** 
		 * Returns the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getSuccessProperty? (): string;
		/** 
		 * Returns the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTotalProperty? (): string;
		/** 
		 * Returns the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @returns {Function|string|object}  
		 */
		getTransform? (): ExtGlobalFunction | string | object;
		/** 
		 * Returns the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTypeProperty? (): string;
		/** 
		 * Returns the value of [useSimpleAccessors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-useSimpleAccessors).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getUseSimpleAccessors? (): boolean;
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
		 * Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to
		 * retrieve meta data from the response, and extractData to turn the JSON data into model instances.
		 * @method
		 * @public (method)
		 * @param   {object}             data          The raw JSON data
		 * @param   {object}             [readOptions] See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-read) for details.
		 * @returns {Ext.data.ResultSet}               A ResultSet containing model instances and meta data about the results
		 */
		readRecords? (data: object, readOptions?: object): Ext.data.ResultSet;
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
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                               [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Json;
		setConfig? (name: string | object, value?: object): Ext.data.reader.Reader;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @param   {boolean} implicitIncludes The new value.
		 * @returns {void}                     
		 */
		setImplicitIncludes? (implicitIncludes: boolean): void;
		/** 
		 * Sets the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @param   {boolean} keepRawData The new value.
		 * @returns {void}                
		 */
		setKeepRawData? (keepRawData: boolean): void;
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
		 * Sets the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @param   {string} messageProperty The new value.
		 * @returns {void}                   
		 */
		setMessageProperty? (messageProperty: string): void;
		/** 
		 * Sets the value of [metaProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-metaProperty).
		 * @method
		 * @public (method)
		 * @param   {string} metaProperty The new value.
		 * @returns {void}                
		 */
		setMetaProperty? (metaProperty: string): void;
		/** 
		 * Sets the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.data.Model} model The new value.
		 * @returns {void}                        
		 */
		setModel? (model: string | Ext.data.Model): void;
		/** 
		 * Sets the value of [preserveRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-preserveRawData).
		 * @method
		 * @public (method)
		 * @param   {boolean} preserveRawData The new value.
		 * @returns {void}                    
		 */
		setPreserveRawData? (preserveRawData: boolean): void;
		/** 
		 * Sets the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @param   {boolean} readRecordsOnFailure The new value.
		 * @returns {void}                         
		 */
		setReadRecordsOnFailure? (readRecordsOnFailure: boolean): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {string} record The new value.
		 * @returns {void}          
		 */
		setRecord? (record: string): void;
		/** 
		 * Sets the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @param   {Function|string} rootProperty The new value.
		 * @returns {void}                         
		 */
		setRootProperty? (rootProperty: ExtGlobalFunction | string): void;
		/** 
		 * Sets the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @param   {string} successProperty The new value.
		 * @returns {void}                   
		 */
		setSuccessProperty? (successProperty: string): void;
		/** 
		 * Sets the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @param   {string} totalProperty The new value.
		 * @returns {void}                 
		 */
		setTotalProperty? (totalProperty: string): void;
		/** 
		 * Sets the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @param   {Function|string|object} transform The new value.
		 * @returns {void}                             
		 */
		setTransform? (transform: ExtGlobalFunction | string | object): void;
		/** 
		 * Sets the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @param   {string} typeProperty The new value.
		 * @returns {void}                
		 */
		setTypeProperty? (typeProperty: string): void;
		/** 
		 * Sets the value of [useSimpleAccessors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-useSimpleAccessors).
		 * @method
		 * @public (method)
		 * @param   {boolean} useSimpleAccessors The new value.
		 * @returns {void}                       
		 */
		setUseSimpleAccessors? (useSimpleAccessors: boolean): void;
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
		 * This method provides a hook to do any data transformation before the reading process
		 * begins. By default this function just returns what is passed to it. It can be
		 * overridden in a subclass to return something else.
		 * See [XmlReader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html) for an example.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} data The data object
		 * @returns {object}      The normalized data object
		 */
		getData? (data: object): object;
		/** 
		 * Destructor for classes that extend Observable.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * @param   {object}                                               config
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.reader.Json;
		initConfig? (config: object): Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Json.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.reader.Json.Statics;
		statics? (): Ext.data.reader.Reader.Statics;
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
		 * @param   {object} model
		 * @returns {void}         
		 */
		applyModel? (model: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} transform
		 * @returns {void}             
		 */
		applyTransform? (transform: object): void;
		/** 
		 * This builds optimized functions for retrieving record data and meta data from an object.
		 * Subclasses may need to implement their own getRoot function.
		 * @method
		 * @private (method)
		 * @param   {boolean} [force] True to automatically remove existing extractor functions first
		 * @returns {void}            
		 */
		buildExtractors? (force?: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		buildFieldExtractors? (): void;
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
		 * Returns an accessor function for the given property string. Gives support for properties such as the following:
		 * 
		 * - 'someProperty'
		 * - 'some.property'
		 * - '["someProperty"]'
		 * - 'values[0]'
		 * 
		 * This is used by [buildExtractors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-buildExtractors) to create optimized extractor functions for properties that are looked
		 * up directly on the source object (e.g. [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty), [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty), etc.).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createAccessor? (): void;
		/** 
		 * Returns an accessor function for the passed Field. Gives support for properties such as the following:
		 * 
		 * - 'someProperty'
		 * - 'some.property'
		 * - '["someProperty"]'
		 * - 'values[0]'
		 * 
		 * This is used by [buildExtractors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-buildExtractors) to create optimized extractor expressions when converting raw
		 * data into model instances. This method is used at the field level to dynamically map values to model fields.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {void}         
		 */
		createFieldAccessor? (field: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.data.reader.Reader.createFieldAccessor](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-createFieldAccessor).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createFieldAccessor? (): void;
		/** 
		 * Creates an object that identifies a read error occurred.
		 * @method
		 * @private (method)
		 * @param   {string} msg An error message to include
		 * @returns {object}     An error object
		 */
		createReadError? (msg: string): object;
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
		 * @param   {object} data
		 * @param   {object} Model
		 * @returns {void}         
		 */
		defaultRecordCreator? (data: object, Model: object): void;
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
		 * @param   {object} raw
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractModelData? (raw: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @param   {object} entityType
		 * @param   {object} includes
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractRecord? (node: object, readOptions: object, entityType: object, includes: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @returns {void}               
		 */
		extractRecordData? (node: object, readOptions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		forceBuildExtractors? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessor? (prop: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessorKey? (prop: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * Based upon a Reader's typeProperty config, determine the type of child node to create from the raw data
		 * @method
		 * @private (method)
		 * @param   {object} schema
		 * @param   {object} rawNode
		 * @param   {object} typeProperty
		 * @returns {void}                
		 */
		getChildType? (schema: object, rawNode: object, typeProperty: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} extractors
		 * @returns {void}              
		 */
		getFieldExtractorInfo? (extractors: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFields? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} raw
		 * @returns {void}       
		 */
		getModelData? (raw: object): void;
		/** 
		 * Returns the shared null result set.
		 * @method
		 * @private (method)
		 * @returns {Ext.data.ResultSet}  The null result set.
		 */
		getNullResultSet? (): Ext.data.ResultSet;
		/** 
		 * Returns the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @returns {Ext.data.proxy.Proxy}  
		 */
		getProxy? (): Ext.data.proxy.Proxy;
		/** 
		 * This will usually need to be implemented in a subclass. Given a generic data object (the type depends on the type
		 * of data we are reading), this function should return the object as configured by the Reader's 'root' meta data config.
		 * See XmlReader's getRoot implementation for an example. By default the same data object will simply be returned.
		 * @method
		 * @private (method)
		 * @param   {object} data The data object
		 * @returns {object}      The same data object
		 */
		getRoot? (data: object): object;
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
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * Reconfigures the meta data tied to this Reader
		 * @method
		 * @private (method)
		 * @param   {object} meta
		 * @returns {void}        
		 */
		onMetaChange? (meta: object): void;
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
		 * Loads the record associations from the data object.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Model} record      The record to load associations for.
		 * @param   {object}         data        The raw data object.
		 * @param   {object}         readOptions See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read).
		 * @returns {void}                       
		 */
		readAssociated? (record: Ext.data.Model, data: object, readOptions: object): void;
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
		 * Sets the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @param   {Ext.data.proxy.Proxy} proxy The new value.
		 * @returns {void}                       
		 */
		setProxy? (proxy: Ext.data.proxy.Proxy): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                             names The names of the linked objects to destroy.
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.reader.Json;
		unlink? (names: string[]): Ext.data.reader.Reader;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMessageProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMetaProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateRootProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateSuccessProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTotalProperty? (): void;
	}
	/** 
	 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html)
	 * Readers are used to interpret data to be loaded into a [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) instance or a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) - often in response to an AJAX request. In general there is usually no need to create
	 * a Reader instance directly, since a Reader is almost always used together with a [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html),
	 * and is configured using the Proxy's [reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#cfg-reader) configuration property:
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        },
	 *    });
	 * 
	 * The above reader is configured to consume a JSON string that looks something like this:
	 * 
	 *    {
	 *        "success": true,
	 *        "users": [
	 *            { "name": "User 1" },
	 *            { "name": "User 2" }
	 *        ]
	 *    }
	 * 
	 * # Loading Nested Data
	 * 
	 * Readers have the ability to automatically load deeply-nested data objects based on the [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * configured on each Model. Below is an example demonstrating the flexibility of these associations in a
	 * fictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:
	 * 
	 *    Ext.define("User", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: {model: 'Order', name: 'orders'},
	 *    
	 *        proxy: {
	 *            type: 'rest',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 *    
	 *    Ext.define("Order", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'total'
	 *        ],
	 *    
	 *        hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},
	 *        belongsTo: 'User'
	 *    });
	 *    
	 *    Ext.define("OrderItem", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'price', 'quantity', 'order_id', 'product_id'
	 *        ],
	 *    
	 *        belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]
	 *    });
	 *    
	 *    Ext.define("Product", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: 'OrderItem'
	 *    });
	 * 
	 * This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.
	 * Finally, each OrderItem has a single Product. This allows us to consume data like this:
	 * 
	 *    {
	 *        "users": [
	 *            {
	 *                "id": 123,
	 *                "name": "Ed",
	 *                "orders": [
	 *                    {
	 *                        "id": 50,
	 *                        "total": 100,
	 *                        "order_items": [
	 *                            {
	 *                                "id"      : 20,
	 *                                "price"   : 40,
	 *                                "quantity": 2,
	 *                                "product" : {
	 *                                    "id": 1000,
	 *                                    "name": "MacBook Pro"
	 *                                }
	 *                            },
	 *                            {
	 *                                "id"      : 21,
	 *                                "price"   : 20,
	 *                                "quantity": 3,
	 *                                "product" : {
	 *                                    "id": 1001,
	 *                                    "name": "iPhone"
	 *                                }
	 *                            }
	 *                        ]
	 *                    }
	 *                ]
	 *            }
	 *        ]
	 *    }
	 * 
	 * The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the
	 * Orders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),
	 * and finally the Product associated with each OrderItem. Now we can read the data and use it as follows:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: "User"
	 *    });
	 *    
	 *    store.load({
	 *        callback: function() {
	 *            //the user that was loaded
	 *            var user = store.first();
	 *    
	 *            console.log("Orders for " + user.get('name') + ":")
	 *    
	 *            //iterate over the Orders for each User
	 *            user.orders().each(function(order) {
	 *                console.log("Order ID: " + order.getId() + ", which contains items:");
	 *    
	 *                //iterate over the OrderItems for each Order
	 *                order.orderItems().each(function(orderItem) {
	 *                    //we know that the Product data is already loaded, so we can use the synchronous getProduct
	 *                    //usually, we would use the asynchronous version (see #belongsTo)
	 *                    var product = orderItem.getProduct();
	 *    
	 *                    console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
	 *                });
	 *            });
	 *        }
	 *    });
	 * 
	 * Running the code above results in the following:
	 * 
	 *    Orders for Ed:
	 *    Order ID: 50, which contains items:
	 *    2 orders of MacBook Pro
	 *    3 orders of iPhone
	 * 
	 */
	class Reader extends Ext.Base {
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Factory.html).
		 * @property
		 * @public (property)
		 * @default {defaultType: null}
		 * @type {object}
		 */
		factoryConfig?: object;
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
		 * `true` in this class to identify an object as an instantiated Reader, or subclass thereof.
		 * @property
		 * @public (property)
		 * @default true
		 * @type {boolean}
		 */
		isReader?: boolean;
		/** 
		 * The raw meta data that was most recently read, if any. Meta data can include existing
		 * Reader config options like [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty), etc. that get
		 * automatically applied to the Reader, and those can still be accessed directly from the Reader
		 * if needed. However, meta data is also often used to pass other custom data to be processed
		 * by application code. For example, it is common when reconfiguring the data model of a grid to
		 * also pass a corresponding column model config to be applied to the grid. Any such data will
		 * not get applied to the Reader directly (it just gets passed through and is ignored by Ext).
		 * This metaData property gives you access to all meta data that was passed, including any such
		 * custom data ignored by the reader.
		 * 
		 * This is a read-only property, and it will get replaced each time a new meta data object is
		 * passed to the reader. Note that typically you would handle proxy's
		 * [metachange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#event-metachange) event which passes this exact same meta
		 * object to listeners. However this property is available if it's more convenient to access it
		 * via the reader directly in certain cases.
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {object}
		 */
		readonly metaData?: object;
		/** 
		 * The raw data object that was last passed to [readRecords](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-readRecords). rawData is populated
		 * based on the results of [Ext.data.proxy.Server.processResponse](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html#method-processResponse). rawData will
		 * maintain a cached copy of the last successfully returned records. In other words,
		 * if processResponse is unsuccessful, the records from the last successful response
		 * will remain cached in rawData.
		 * 
		 * Since Ext JS 5.1.1 you can use the [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData) config option to
		 * control this behavior.
		 * @property
		 * @public (property)
		 * @type {object}
		 */
		rawData?: object;
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
		 * @type {Ext.data.reader.Reader.Statics}
		 */
		self?: Ext.data.reader.Reader.Statics | Ext.Base.Statics;
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
		 * @default 'factoryable'
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
		 * @param   {object}                          members    The members to add to this class.
		 * @param   {boolean}                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.reader.Reader|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                          members
		 * @returns {Ext.data.reader.Reader|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                          name
		 * @param   {object}                          member
		 * @returns {Ext.data.reader.Reader|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                          fn
		 * @param   {object}                          scope
		 * @returns {Ext.data.reader.Reader|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Creates new Reader.
		 * @method
		 * @public (method)
		 * @param   {object} [config] Config object.
		 */
		constructor (config?: object);
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
		 * @param   {string|object}                                                  eventName
		 * The name of the event to listen for.
		 * May also be an object who's property names are event names.
		 * @param   {Function|string}                                                [fn]
		 * The method the event invokes or the _name_ of
		 * the method within the specified `scope`.  Will be called with arguments
		 * given to [Ext.util.Observable.fireEvent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-fireEvent) plus the `options` parameter described
		 * below.
		 * @param   {object}                                                         [scope]
		 * The scope (`this` reference) in which the handler function is
		 * executed. **If omitted, defaults to the object which fired the event.**
		 * @param   {object|Ext.data.reader.Reader.methodParams.addListener.Options} [options]
		 * An object containing handler configuration.
		 * 
		 * **Note:** The options object will also be passed as the last argument to every
		 * event handler.
		 * 
		 * This object may contain any of the following properties:
		 * @param   {string}                                                         [order]
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
		addListener? (eventName: string | object, fn?: ExtGlobalFunction | string, scope?: object, options?: object | Ext.data.reader.Reader.methodParams.addListener.Options, order?: string): object;
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
		 * Returns the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getImplicitIncludes? (): boolean;
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
		 * Returns the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getKeepRawData? (): boolean;
		/** 
		 * Returns the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getMessageProperty? (): string;
		/** 
		 * Returns the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.data.Model}  
		 */
		getModel? (): string | Ext.data.Model;
		/** 
		 * Returns the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReadRecordsOnFailure? (): boolean;
		/** 
		 * Takes a raw response object (as passed to the [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read) method) and returns the useful data
		 * segment from it. This must be implemented by each subclass.
		 * @method
		 * @public (method)
		 * @param   {object} response The response object
		 * @returns {object}          The extracted data from the response. For example, a JSON object or an XML document.
		 */
		getResponseData? (response: object): object;
		/** 
		 * Returns the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @returns {string|Function}  
		 */
		getRootProperty? (): ExtGlobalFunction | string;
		/** 
		 * Returns the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getSuccessProperty? (): string;
		/** 
		 * Returns the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTotalProperty? (): string;
		/** 
		 * Returns the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @returns {Function|string|object}  
		 */
		getTransform? (): ExtGlobalFunction | string | object;
		/** 
		 * Returns the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTypeProperty? (): string;
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
		 * @param   {object|Ext.data.reader.Reader.methodParams.on.Options} [options]
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
		on? (eventName: string | object, fn?: ExtGlobalFunction | string, scope?: object, options?: object | Ext.data.reader.Reader.methodParams.on.Options, order?: string): object;
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
		 * Reads the given response object. This method normalizes the different types of response object that may be passed to it.
		 * If it's an XMLHttpRequest object, hand off to the subclass' [getResponseData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-getResponseData) method.
		 * Else, hand off the reading of records to the [readRecords](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-readRecords) method.
		 * @method
		 * @public (method)
		 * @param   {object}                                                      response      The response object. This may be either an XMLHttpRequest object or a plain JS object
		 * @param   {object|Ext.data.reader.Reader.methodParams.read.ReadOptions} [readOptions] Various options that instruct the reader on how to read the data
		 * @returns {Ext.data.ResultSet}                                                        The parsed or default ResultSet object
		 */
		read? (response: object, readOptions?: object | Ext.data.reader.Reader.methodParams.read.ReadOptions): Ext.data.ResultSet;
		/** 
		 * Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call this function
		 * before running its own logic and returning the [Ext.data.ResultSet](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.ResultSet.html) instance. For most Readers additional
		 * processing should not be needed.
		 * @method
		 * @public (method)
		 * @param   {object}             data          The raw data object
		 * @param   {object}             [readOptions] See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read) for details.
		 * @returns {Ext.data.ResultSet}               A ResultSet object
		 */
		readRecords? (data: object, readOptions?: object): Ext.data.ResultSet;
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
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                   name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                          [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Reader|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Reader;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @param   {boolean} implicitIncludes The new value.
		 * @returns {void}                     
		 */
		setImplicitIncludes? (implicitIncludes: boolean): void;
		/** 
		 * Sets the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @param   {boolean} keepRawData The new value.
		 * @returns {void}                
		 */
		setKeepRawData? (keepRawData: boolean): void;
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
		 * Sets the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @param   {string} messageProperty The new value.
		 * @returns {void}                   
		 */
		setMessageProperty? (messageProperty: string): void;
		/** 
		 * Sets the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.data.Model} model The new value.
		 * @returns {void}                        
		 */
		setModel? (model: string | Ext.data.Model): void;
		/** 
		 * Sets the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @param   {boolean} readRecordsOnFailure The new value.
		 * @returns {void}                         
		 */
		setReadRecordsOnFailure? (readRecordsOnFailure: boolean): void;
		/** 
		 * Sets the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @param   {Function|string} rootProperty The new value.
		 * @returns {void}                         
		 */
		setRootProperty? (rootProperty: ExtGlobalFunction | string): void;
		/** 
		 * Sets the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @param   {string} successProperty The new value.
		 * @returns {void}                   
		 */
		setSuccessProperty? (successProperty: string): void;
		/** 
		 * Sets the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @param   {string} totalProperty The new value.
		 * @returns {void}                 
		 */
		setTotalProperty? (totalProperty: string): void;
		/** 
		 * Sets the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @param   {Function|string|object} transform The new value.
		 * @returns {void}                             
		 */
		setTransform? (transform: ExtGlobalFunction | string | object): void;
		/** 
		 * Sets the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @param   {string} typeProperty The new value.
		 * @returns {void}                
		 */
		setTypeProperty? (typeProperty: string): void;
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
		 * This method provides a hook to do any data transformation before the reading process
		 * begins. By default this function just returns what is passed to it. It can be
		 * overridden in a subclass to return something else.
		 * See [XmlReader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html) for an example.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} data The data object
		 * @returns {object}      The normalized data object
		 */
		getData? (data: object): object;
		/** 
		 * Destructor for classes that extend Observable.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * @param   {object}                          config
		 * @returns {Ext.data.reader.Reader|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.reader.Reader.Statics;
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
		 * @param   {object} model
		 * @returns {void}         
		 */
		applyModel? (model: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} transform
		 * @returns {void}             
		 */
		applyTransform? (transform: object): void;
		/** 
		 * This builds optimized functions for retrieving record data and meta data from an object.
		 * Subclasses may need to implement their own getRoot function.
		 * @method
		 * @private (method)
		 * @param   {boolean} [force] True to automatically remove existing extractor functions first
		 * @returns {void}            
		 */
		buildExtractors? (force?: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		buildFieldExtractors? (): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createAccessor? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createFieldAccessor? (): void;
		/** 
		 * Creates an object that identifies a read error occurred.
		 * @method
		 * @private (method)
		 * @param   {string} msg An error message to include
		 * @returns {object}     An error object
		 */
		createReadError? (msg: string): object;
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
		 * @param   {object} data
		 * @param   {object} Model
		 * @returns {void}         
		 */
		defaultRecordCreator? (data: object, Model: object): void;
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
		 * Returns extracted, type-cast rows of data.
		 * @method
		 * @private (method)
		 * @param   {object[]|object}                                                    root          from server response
		 * @param   {object|Ext.data.reader.Reader.methodParams.extractData.ReadOptions} [readOptions] An object containing extra options.
		 * @returns {any[]}                                                                            An array of records containing the extracted data
		 */
		extractData? (root: object[] | object, readOptions?: object | Ext.data.reader.Reader.methodParams.extractData.ReadOptions): any[];
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} raw
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractModelData? (raw: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @param   {object} entityType
		 * @param   {object} includes
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractRecord? (node: object, readOptions: object, entityType: object, includes: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @returns {void}               
		 */
		extractRecordData? (node: object, readOptions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		forceBuildExtractors? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessor? (prop: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessorKey? (prop: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * Based upon a Reader's typeProperty config, determine the type of child node to create from the raw data
		 * @method
		 * @private (method)
		 * @param   {object} schema
		 * @param   {object} rawNode
		 * @param   {object} typeProperty
		 * @returns {void}                
		 */
		getChildType? (schema: object, rawNode: object, typeProperty: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} extractors
		 * @returns {void}              
		 */
		getFieldExtractorInfo? (extractors: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFields? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} raw
		 * @returns {void}       
		 */
		getModelData? (raw: object): void;
		/** 
		 * Returns the shared null result set.
		 * @method
		 * @private (method)
		 * @returns {Ext.data.ResultSet}  The null result set.
		 */
		getNullResultSet? (): Ext.data.ResultSet;
		/** 
		 * Returns the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @returns {Ext.data.proxy.Proxy}  
		 */
		getProxy? (): Ext.data.proxy.Proxy;
		/** 
		 * This will usually need to be implemented in a subclass. Given a generic data object (the type depends on the type
		 * of data we are reading), this function should return the object as configured by the Reader's 'root' meta data config.
		 * See XmlReader's getRoot implementation for an example. By default the same data object will simply be returned.
		 * @method
		 * @private (method)
		 * @param   {object} data The data object
		 * @returns {object}      The same data object
		 */
		getRoot? (data: object): object;
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
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * Reconfigures the meta data tied to this Reader
		 * @method
		 * @private (method)
		 * @param   {object} meta
		 * @returns {void}        
		 */
		onMetaChange? (meta: object): void;
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
		 * Loads the record associations from the data object.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Model} record      The record to load associations for.
		 * @param   {object}         data        The raw data object.
		 * @param   {object}         readOptions See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read).
		 * @returns {void}                       
		 */
		readAssociated? (record: Ext.data.Model, data: object, readOptions: object): void;
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
		 * Sets the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @param   {Ext.data.proxy.Proxy} proxy The new value.
		 * @returns {void}                       
		 */
		setProxy? (proxy: Ext.data.proxy.Proxy): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                        names The names of the linked objects to destroy.
		 * @returns {Ext.data.reader.Reader|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.reader.Reader;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMessageProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateSuccessProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTotalProperty? (): void;
	}
	/** 
	 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html)
	 * The XML Reader is used by a Proxy to read a server response that is sent back in XML format. This usually happens as
	 * a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.xml',
	 *            reader: {
	 *                type: 'xml',
	 *                record: 'user',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're not
	 * already familiar with them.
	 * 
	 * We created the simplest type of XML Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a XML Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'xml',
	 *        model: 'User',
	 *        record: 'user',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * First off there's [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) option to define the root node `&lt;users&gt;` (there should be only one in a well-formed
	 * XML document). Then the XML Reader uses the configured [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) option to pull out the data for each record -
	 * in this case we set record to 'user', so each `&lt;user&gt;` above will be converted into a User model.
	 * 
	 * Note that XmlReader doesn't care whether your [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) and [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) elements are nested deep inside a
	 * larger structure, so a response like this will still work:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;deeply&gt;
	 *        &lt;nested&gt;
	 *            &lt;xml&gt;
	 *                &lt;users&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;1&lt;/id&gt;
	 *                        &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *                        &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;2&lt;/id&gt;
	 *                        &lt;name&gt;Abe Elias&lt;/name&gt;
	 *                        &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                &lt;/users&gt;
	 *            &lt;/xml&gt;
	 *        &lt;/nested&gt;
	 *    &lt;/deeply&gt;
	 * 
	 * If this Reader is being used by a [TreeStore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.TreeStore.html) to read tree-structured data in which records
	 * are nested as descendant nodes of other records, then this lenient behaviour must be overridden by using a more specific
	 * child node selector as your [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) selector which will not select all descendants, such as:
	 * 
	 *    record: '>user'
	 * 
	 * # Response metadata
	 * 
	 * The server can return additional data in its response, such as the [total number of records](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-totalProperty) and
	 * the [success status of the response](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-successProperty). These are typically included in the XML response like
	 * this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;total&gt;100&lt;/total&gt;
	 *        &lt;success&gt;true&lt;/success&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * If these properties are present in the XML response they can be parsed out by the XmlReader and used by the Store
	 * that loaded it. We can set up the names of these properties by specifying a final pair of configuration options:
	 * 
	 *    reader: {
	 *        type: 'xml',
	 *        rootProperty: 'users',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success'
	 *    }
	 * 
	 * These final options are not necessary to make the Reader work, but can be useful when the server needs to report an
	 * error or if it needs to indicate that there is a lot of data available of which only a subset is currently being
	 * returned.
	 * 
	 * # Response format
	 * 
	 * **Note:** in order for the browser to parse a returned XML document, the Content-Type header in the HTTP response
	 * must be set to "text/xml" or "application/xml". This is very important - the XmlReader will not work correctly
	 * otherwise.
	 */
	class Xml extends Ext.data.reader.Reader {
		/** 
		 * Copy of [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#property-rawData).
		 * @property
		 * @public (property)
		 * @deprecated Since version 5.1.1.
		 *             Removed in Ext JS 5.0. Use [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#property-rawData) instead.
		 * @type {object}
		 */
		xmlData?: object;
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
		 * @type {Ext.data.reader.Xml.Statics}
		 */
		self?: Ext.data.reader.Xml.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics;
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
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Xml;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.reader.Xml;
		static addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                              name
		 * @param   {object}                                              member
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.reader.Xml;
		static addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                              fn
		 * @param   {object}                                              scope
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Xml;
		static onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
		/** 
		 * Creates new Reader.
		 * @method
		 * @public (method)
		 * @param   {object} [config] Config object.
		 */
		constructor (config?: object);
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
		 * Normalizes the data object.
		 * @method
		 * @public (method)
		 * @param   {object} data The raw data object
		 * @returns {object}      The documentElement property of the data object if present, or the same object if not.
		 */
		getData? (data: object): object;
		/** 
		 * Returns the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getImplicitIncludes? (): boolean;
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
		 * Returns the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getKeepRawData? (): boolean;
		/** 
		 * Returns the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getMessageProperty? (): string;
		/** 
		 * Returns the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.data.Model}  
		 */
		getModel? (): string | Ext.data.Model;
		/** 
		 * Returns the value of [namespace](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-namespace).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getNamespace? (): string;
		/** 
		 * Returns the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReadRecordsOnFailure? (): boolean;
		/** 
		 * Returns the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getRecord? (): string;
		/** 
		 * Takes a raw response object (as passed to the [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#method-read) method) and returns the useful data
		 * segment from it. This must be implemented by each subclass.
		 * @method
		 * @public (method)
		 * @param   {object} response
		 * @returns {object}          The extracted data from the response. For example, a JSON object or an XML document.
		 */
		getResponseData? (response: object): object;
		/** 
		 * Returns the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @returns {string|Function}  
		 */
		getRootProperty? (): ExtGlobalFunction | string;
		/** 
		 * Returns the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getSuccessProperty? (): string;
		/** 
		 * Returns the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTotalProperty? (): string;
		/** 
		 * Returns the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @returns {Function|string|object}  
		 */
		getTransform? (): ExtGlobalFunction | string | object;
		/** 
		 * Returns the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTypeProperty? (): string;
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
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                              [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Xml;
		setConfig? (name: string | object, value?: object): Ext.data.reader.Reader;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [implicitIncludes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-implicitIncludes).
		 * @method
		 * @public (method)
		 * @param   {boolean} implicitIncludes The new value.
		 * @returns {void}                     
		 */
		setImplicitIncludes? (implicitIncludes: boolean): void;
		/** 
		 * Sets the value of [keepRawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-keepRawData).
		 * @method
		 * @public (method)
		 * @param   {boolean} keepRawData The new value.
		 * @returns {void}                
		 */
		setKeepRawData? (keepRawData: boolean): void;
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
		 * Sets the value of [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-messageProperty).
		 * @method
		 * @public (method)
		 * @param   {string} messageProperty The new value.
		 * @returns {void}                   
		 */
		setMessageProperty? (messageProperty: string): void;
		/** 
		 * Sets the value of [model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-model).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.data.Model} model The new value.
		 * @returns {void}                        
		 */
		setModel? (model: string | Ext.data.Model): void;
		/** 
		 * Sets the value of [namespace](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-namespace).
		 * @method
		 * @public (method)
		 * @param   {string} namespace The new value.
		 * @returns {void}             
		 */
		setNamespace? (namespace: string): void;
		/** 
		 * Sets the value of [readRecordsOnFailure](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-readRecordsOnFailure).
		 * @method
		 * @public (method)
		 * @param   {boolean} readRecordsOnFailure The new value.
		 * @returns {void}                         
		 */
		setReadRecordsOnFailure? (readRecordsOnFailure: boolean): void;
		/** 
		 * Sets the value of [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record).
		 * @method
		 * @public (method)
		 * @param   {string} record The new value.
		 * @returns {void}          
		 */
		setRecord? (record: string): void;
		/** 
		 * Sets the value of [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-rootProperty).
		 * @method
		 * @public (method)
		 * @param   {Function|string} rootProperty The new value.
		 * @returns {void}                         
		 */
		setRootProperty? (rootProperty: ExtGlobalFunction | string): void;
		/** 
		 * Sets the value of [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty).
		 * @method
		 * @public (method)
		 * @param   {string} successProperty The new value.
		 * @returns {void}                   
		 */
		setSuccessProperty? (successProperty: string): void;
		/** 
		 * Sets the value of [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-totalProperty).
		 * @method
		 * @public (method)
		 * @param   {string} totalProperty The new value.
		 * @returns {void}                 
		 */
		setTotalProperty? (totalProperty: string): void;
		/** 
		 * Sets the value of [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform).
		 * @method
		 * @public (method)
		 * @param   {Function|string|object} transform The new value.
		 * @returns {void}                             
		 */
		setTransform? (transform: ExtGlobalFunction | string | object): void;
		/** 
		 * Sets the value of [typeProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-typeProperty).
		 * @method
		 * @public (method)
		 * @param   {string} typeProperty The new value.
		 * @returns {void}                
		 */
		setTypeProperty? (typeProperty: string): void;
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
		 * @param   {object}                                              config
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.reader.Xml;
		initConfig? (config: object): Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Xml.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.reader.Xml.Statics;
		statics? (): Ext.data.reader.Reader.Statics;
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
		 * @param   {object} model
		 * @returns {void}         
		 */
		applyModel? (model: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} transform
		 * @returns {void}             
		 */
		applyTransform? (transform: object): void;
		/** 
		 * This builds optimized functions for retrieving record data and meta data from an object.
		 * Subclasses may need to implement their own getRoot function.
		 * @method
		 * @private (method)
		 * @param   {boolean} [force] True to automatically remove existing extractor functions first
		 * @returns {void}            
		 */
		buildExtractors? (force?: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		buildFieldExtractors? (): void;
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
		 * Creates a function to return some particular key of data from a response. The totalProperty and
		 * successProperty are treated as special cases for type casting, everything else is just a simple selector.
		 * @method
		 * @private (method)
		 * @param   {string}   key
		 * @returns {Function}     
		 */
		createAccessor? (key: string): ExtGlobalFunction;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.data.reader.Reader.createAccessor](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-createAccessor).
		 * @method
		 * @private (method)
		 * @returns {Function|void}  
		 */
		createAccessor? (): void;
		/** 
		 * Returns an accessor function for the passed Field from an XML element using either the Field's mapping, or
		 * its ordinal position in the fields collection as the index.
		 * This is used by buildExtractors to create optimized on extractor function which converts raw data into model instances.
		 * @method
		 * @private (method)
		 * @param   {object} field
		 * @returns {void}         
		 */
		createFieldAccessor? (field: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.data.reader.Reader.createFieldAccessor](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-createFieldAccessor).
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		createFieldAccessor? (): void;
		/** 
		 * Creates an object that identifies a read error occurred.
		 * @method
		 * @private (method)
		 * @param   {string} msg An error message to include
		 * @returns {object}     An error object
		 */
		createReadError? (msg: string): object;
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
		 * @param   {object} data
		 * @param   {object} Model
		 * @returns {void}         
		 */
		defaultRecordCreator? (data: object, Model: object): void;
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
		 * @param   {object} raw
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractModelData? (raw: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @param   {object} entityType
		 * @param   {object} includes
		 * @param   {object} fieldExtractorInfo
		 * @returns {void}                      
		 */
		extractRecord? (node: object, readOptions: object, entityType: object, includes: object, fieldExtractorInfo: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} node
		 * @param   {object} readOptions
		 * @returns {void}               
		 */
		extractRecordData? (node: object, readOptions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		forceBuildExtractors? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessor? (prop: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} prop
		 * @returns {void}        
		 */
		getAccessorKey? (prop: object): void;
		/** 
		 * Gets the bubbling parent for an Observable
		 * @method
		 * @private (method)
		 * @returns {Ext.util.Observable}  The bubble parent. null is returned if no bubble target exists
		 */
		getBubbleParent? (): Ext.util.Observable;
		/** 
		 * Based upon a Reader's typeProperty config, determine the type of child node to create from the raw data
		 * @method
		 * @private (method)
		 * @param   {object} schema
		 * @param   {object} rawNode
		 * @param   {object} typeProperty
		 * @returns {void}                
		 */
		getChildType? (schema: object, rawNode: object, typeProperty: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} extractors
		 * @returns {void}              
		 */
		getFieldExtractorInfo? (extractors: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getFields? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} raw
		 * @returns {void}       
		 */
		getModelData? (raw: object): void;
		/** 
		 * Returns the shared null result set.
		 * @method
		 * @private (method)
		 * @returns {Ext.data.ResultSet}  The null result set.
		 */
		getNullResultSet? (): Ext.data.ResultSet;
		/** 
		 * Returns the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @returns {Ext.data.proxy.Proxy}  
		 */
		getProxy? (): Ext.data.proxy.Proxy;
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
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * Reconfigures the meta data tied to this Reader
		 * @method
		 * @private (method)
		 * @param   {object} meta
		 * @returns {void}        
		 */
		onMetaChange? (meta: object): void;
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
		 * Loads the record associations from the data object.
		 * @method
		 * @private (method)
		 * @param   {Ext.data.Model} record      The record to load associations for.
		 * @param   {object}         data        The raw data object.
		 * @param   {object}         readOptions See [read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read).
		 * @returns {void}                       
		 */
		readAssociated? (record: Ext.data.Model, data: object, readOptions: object): void;
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
		 * Sets the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-proxy).
		 * @method
		 * @private (method)
		 * @param   {Ext.data.proxy.Proxy} proxy The new value.
		 * @returns {void}                       
		 */
		setProxy? (proxy: Ext.data.proxy.Proxy): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                                            names The names of the linked objects to destroy.
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.reader.Xml;
		unlink? (names: string[]): Ext.data.reader.Reader;
		unlink? (names: string[]): Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMessageProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateSuccessProperty? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTotalProperty? (): void;
	}
}
declare namespace Ext.data {
	class ArrayReader extends Ext.data.reader.Array {}
	class DataReader extends Ext.data.reader.Reader {}
	class JsonReader extends Ext.data.reader.Json {}
	class Reader extends Ext.data.reader.Reader {}
	class XmlReader extends Ext.data.reader.Xml {}
}
declare namespace Ext.data.reader.Array {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html)
	 * Data reader class to create an Array of [Ext.data.Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) objects from an Array.
	 * Each element of that Array represents a row of data fields. The
	 * fields are pulled into a Record object using as a subscript, the `mapping` property
	 * of the field definition if it exists, or the field's ordinal position in the definition.
	 * 
	 * <u>Example code:</u>
	 * 
	 *    Employee = Ext.define('Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id',
	 *            {name: 'name', mapping: 1},         // "mapping" only needed if an "id" field is present which
	 *            {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        
	 *        ]
	 *    });
	 *    
	 *    var myReader = new Ext.data.reader.Array({
	 *        model: 'Employee'
	 *    }, Employee);
	 * 
	 * This would consume an Array like this:
	 * 
	 *    [ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]
	 * 
	 */
	interface Def extends Ext.data.reader.Array {
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
		 * @type {Ext.data.reader.Array.Cfg}
		 */
		config?: Ext.data.reader.Array.Cfg;
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
		 * @returns {Ext.data.reader.Array.Statics|Ext.data.reader.Json.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.reader.Array.Statics}
		 */
		statics?: (() => Ext.data.reader.Array.Statics | Ext.data.reader.Json.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics) | Ext.data.reader.Array.Statics | any;
	}
}
declare namespace Ext.data.reader.Json {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html)
	 * The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually
	 * happens as a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're
	 * not already familiar with them.
	 * 
	 * We created the simplest type of JSON Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s
	 * [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a JSON Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        model: 'User'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    [
	 *        {
	 *            "id": 1,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        },
	 *        {
	 *            "id": 2,
	 *            "name": "Abe Elias",
	 *            "email": "abe@sencha.com"
	 *        }
	 *    ]
	 * 
	 * ## Reading other JSON formats
	 * 
	 * If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually
	 * pass JsonReader a couple of configuration options to make it parse your format. For example, we can use the
	 * [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration to parse data that comes back like this:
	 * 
	 *    {
	 *        "users": [
	 *           {
	 *               "id": 1,
	 *               "name": "Ed Spencer",
	 *               "email": "ed@sencha.com"
	 *           },
	 *           {
	 *               "id": 2,
	 *               "name": "Abe Elias",
	 *               "email": "abe@sencha.com"
	 *           }
	 *        ]
	 *    }
	 * 
	 * To parse this we just pass in a [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration that matches the 'users' above:
	 * 
	 *    reader: {
	 *        type: 'json',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata
	 * around each record inside a nested structure like this:
	 * 
	 *    {
	 *        "total": 122,
	 *        "offset": 0,
	 *        "users": [
	 *            {
	 *                "id": "ed-spencer-1",
	 *                "value": 1,
	 *                "user": {
	 *                    "id": 1,
	 *                    "name": "Ed Spencer",
	 *                    "email": "ed@sencha.com"
	 *                }
	 *            }
	 *        ]
	 *    }
	 * 
	 * In the case above the record data is nested an additional level inside the "users" array as each "user" item has
	 * additional metadata surrounding it ('id' and 'value' in this case). To parse data out of each "user" item in the
	 * JSON above we need to specify the [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record) configuration like this:
	 * 
	 *    reader: {
	 *        type  : 'json',
	 *        rootProperty  : 'users',
	 *        record: 'user'
	 *    }
	 * 
	 * ## Response MetaData
	 * 
	 * The server can return metadata in its response, in addition to the record data, that describe attributes
	 * of the data set itself or are used to reconfigure the Reader. To pass metadata in the response you simply
	 * add a `metaData` attribute to the root of the response data. The metaData attribute can contain anything,
	 * but supports a specific set of properties that are handled by the Reader if they are present:
	 * 
	 * - [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty): the property name of the root response node containing the record data
	 * - [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-totalProperty): property name for the total number of records in the data
	 * - [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty): property name for the success status of the response
	 * - [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty): property name for an optional response message
	 * - [fields](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-fields): Config used to reconfigure the Model's fields before converting the
	 *   response data into records
	 * 
	 * An initial Reader configuration containing all of these properties might look like this ("fields" would be
	 * included in the Model definition, not shown):
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        rootProperty : 'root',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success',
	 *        messageProperty: 'message'
	 *    }
	 * 
	 * If you were to pass a response object containing attributes different from those initially defined above, you could
	 * use the `metaData` attribute to reconfigure the Reader on the fly. For example:
	 * 
	 *    {
	 *        "count": 1,
	 *        "ok": true,
	 *        "msg": "Users found",
	 *        "users": [{
	 *            "userId": 123,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        }],
	 *        "metaData": {
	 *            "rootProperty": "users",
	 *            "totalProperty": 'count',
	 *            "successProperty": 'ok',
	 *            "messageProperty": 'msg'
	 *        }
	 *    }
	 * 
	 * You can also place any other arbitrary data you need into the `metaData` attribute which will be ignored by the Reader,
	 * but will be accessible via the Reader's [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData) property (which is also passed to listeners via the Proxy's
	 * [metachange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#event-metachange) event (also relayed by the store). Application code can then
	 * process the passed metadata in any way it chooses.
	 * 
	 * A simple example for how this can be used would be customizing the fields for a Model that is bound to a grid. By passing
	 * the `fields` property the Model will be automatically updated by the Reader internally, but that change will not be
	 * reflected automatically in the grid unless you also update the column configuration. You could do this manually, or you
	 * could simply pass a standard grid column config object as part of the `metaData` attribute
	 * and then pass that along to the grid. Here's a very simple example for how that could be accomplished:
	 * 
	 *    // response format:
	 *    {
	 *        ...
	 *        "metaData": {
	 *            "fields": [
	 *                { "name": "userId", "type": "int" },
	 *                { "name": "name", "type": "string" },
	 *                { "name": "birthday", "type": "date", "dateFormat": "Y-j-m" },
	 *            ],
	 *            "columns": [
	 *                { "text": "User ID", "dataIndex": "userId", "width": 40 },
	 *                { "text": "User Name", "dataIndex": "name", "flex": 1 },
	 *                { "text": "Birthday", "dataIndex": "birthday", "flex": 1, "format": 'Y-j-m', "xtype": "datecolumn" }
	 *            ]
	 *        }
	 *    }
	 * 
	 * The Reader will automatically read the meta fields config and rebuild the Model based on the new fields, but to handle
	 * the new column configuration you would need to handle the metadata within the application code. This is done simply enough
	 * by handling the metachange event on either the store or the proxy, e.g.:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        ...
	 *        listeners: {
	 *            'metachange': function(store, meta) {
	 *                myGrid.reconfigure(store, meta.columns);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Def extends Ext.data.reader.Json {
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
		 * @type {Ext.data.reader.Json.Cfg}
		 */
		config?: Ext.data.reader.Json.Cfg;
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
		 * @returns {Ext.data.reader.Json.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.reader.Json.Statics}
		 */
		statics?: (() => Ext.data.reader.Json.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics) | Ext.data.reader.Json.Statics | any;
	}
}
declare namespace Ext.data.reader.Reader {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html)
	 * Readers are used to interpret data to be loaded into a [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) instance or a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) - often in response to an AJAX request. In general there is usually no need to create
	 * a Reader instance directly, since a Reader is almost always used together with a [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html),
	 * and is configured using the Proxy's [reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#cfg-reader) configuration property:
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        },
	 *    });
	 * 
	 * The above reader is configured to consume a JSON string that looks something like this:
	 * 
	 *    {
	 *        "success": true,
	 *        "users": [
	 *            { "name": "User 1" },
	 *            { "name": "User 2" }
	 *        ]
	 *    }
	 * 
	 * # Loading Nested Data
	 * 
	 * Readers have the ability to automatically load deeply-nested data objects based on the [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * configured on each Model. Below is an example demonstrating the flexibility of these associations in a
	 * fictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:
	 * 
	 *    Ext.define("User", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: {model: 'Order', name: 'orders'},
	 *    
	 *        proxy: {
	 *            type: 'rest',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 *    
	 *    Ext.define("Order", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'total'
	 *        ],
	 *    
	 *        hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},
	 *        belongsTo: 'User'
	 *    });
	 *    
	 *    Ext.define("OrderItem", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'price', 'quantity', 'order_id', 'product_id'
	 *        ],
	 *    
	 *        belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]
	 *    });
	 *    
	 *    Ext.define("Product", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: 'OrderItem'
	 *    });
	 * 
	 * This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.
	 * Finally, each OrderItem has a single Product. This allows us to consume data like this:
	 * 
	 *    {
	 *        "users": [
	 *            {
	 *                "id": 123,
	 *                "name": "Ed",
	 *                "orders": [
	 *                    {
	 *                        "id": 50,
	 *                        "total": 100,
	 *                        "order_items": [
	 *                            {
	 *                                "id"      : 20,
	 *                                "price"   : 40,
	 *                                "quantity": 2,
	 *                                "product" : {
	 *                                    "id": 1000,
	 *                                    "name": "MacBook Pro"
	 *                                }
	 *                            },
	 *                            {
	 *                                "id"      : 21,
	 *                                "price"   : 20,
	 *                                "quantity": 3,
	 *                                "product" : {
	 *                                    "id": 1001,
	 *                                    "name": "iPhone"
	 *                                }
	 *                            }
	 *                        ]
	 *                    }
	 *                ]
	 *            }
	 *        ]
	 *    }
	 * 
	 * The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the
	 * Orders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),
	 * and finally the Product associated with each OrderItem. Now we can read the data and use it as follows:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: "User"
	 *    });
	 *    
	 *    store.load({
	 *        callback: function() {
	 *            //the user that was loaded
	 *            var user = store.first();
	 *    
	 *            console.log("Orders for " + user.get('name') + ":")
	 *    
	 *            //iterate over the Orders for each User
	 *            user.orders().each(function(order) {
	 *                console.log("Order ID: " + order.getId() + ", which contains items:");
	 *    
	 *                //iterate over the OrderItems for each Order
	 *                order.orderItems().each(function(orderItem) {
	 *                    //we know that the Product data is already loaded, so we can use the synchronous getProduct
	 *                    //usually, we would use the asynchronous version (see #belongsTo)
	 *                    var product = orderItem.getProduct();
	 *    
	 *                    console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
	 *                });
	 *            });
	 *        }
	 *    });
	 * 
	 * Running the code above results in the following:
	 * 
	 *    Orders for Ed:
	 *    Order ID: 50, which contains items:
	 *    2 orders of MacBook Pro
	 *    3 orders of iPhone
	 * 
	 */
	interface Def extends Ext.data.reader.Reader {
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
		 * @type {Ext.data.reader.Reader.Cfg}
		 */
		config?: Ext.data.reader.Reader.Cfg;
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
		 * @returns {Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.reader.Reader.Statics}
		 */
		statics?: (() => Ext.data.reader.Reader.Statics | Ext.Base.Statics) | Ext.data.reader.Reader.Statics | any;
	}
}
declare namespace Ext.data.reader.Xml {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html)
	 * The XML Reader is used by a Proxy to read a server response that is sent back in XML format. This usually happens as
	 * a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.xml',
	 *            reader: {
	 *                type: 'xml',
	 *                record: 'user',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're not
	 * already familiar with them.
	 * 
	 * We created the simplest type of XML Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a XML Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'xml',
	 *        model: 'User',
	 *        record: 'user',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * First off there's [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) option to define the root node `&lt;users&gt;` (there should be only one in a well-formed
	 * XML document). Then the XML Reader uses the configured [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) option to pull out the data for each record -
	 * in this case we set record to 'user', so each `&lt;user&gt;` above will be converted into a User model.
	 * 
	 * Note that XmlReader doesn't care whether your [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) and [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) elements are nested deep inside a
	 * larger structure, so a response like this will still work:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;deeply&gt;
	 *        &lt;nested&gt;
	 *            &lt;xml&gt;
	 *                &lt;users&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;1&lt;/id&gt;
	 *                        &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *                        &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;2&lt;/id&gt;
	 *                        &lt;name&gt;Abe Elias&lt;/name&gt;
	 *                        &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                &lt;/users&gt;
	 *            &lt;/xml&gt;
	 *        &lt;/nested&gt;
	 *    &lt;/deeply&gt;
	 * 
	 * If this Reader is being used by a [TreeStore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.TreeStore.html) to read tree-structured data in which records
	 * are nested as descendant nodes of other records, then this lenient behaviour must be overridden by using a more specific
	 * child node selector as your [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) selector which will not select all descendants, such as:
	 * 
	 *    record: '>user'
	 * 
	 * # Response metadata
	 * 
	 * The server can return additional data in its response, such as the [total number of records](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-totalProperty) and
	 * the [success status of the response](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-successProperty). These are typically included in the XML response like
	 * this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;total&gt;100&lt;/total&gt;
	 *        &lt;success&gt;true&lt;/success&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * If these properties are present in the XML response they can be parsed out by the XmlReader and used by the Store
	 * that loaded it. We can set up the names of these properties by specifying a final pair of configuration options:
	 * 
	 *    reader: {
	 *        type: 'xml',
	 *        rootProperty: 'users',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success'
	 *    }
	 * 
	 * These final options are not necessary to make the Reader work, but can be useful when the server needs to report an
	 * error or if it needs to indicate that there is a lot of data available of which only a subset is currently being
	 * returned.
	 * 
	 * # Response format
	 * 
	 * **Note:** in order for the browser to parse a returned XML document, the Content-Type header in the HTTP response
	 * must be set to "text/xml" or "application/xml". This is very important - the XmlReader will not work correctly
	 * otherwise.
	 */
	interface Def extends Ext.data.reader.Xml {
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
		 * @type {Ext.data.reader.Xml.Cfg}
		 */
		config?: Ext.data.reader.Xml.Cfg;
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
		 * @returns {Ext.data.reader.Xml.Statics|Ext.data.reader.Reader.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.reader.Xml.Statics}
		 */
		statics?: (() => Ext.data.reader.Xml.Statics | Ext.data.reader.Reader.Statics | Ext.Base.Statics) | Ext.data.reader.Xml.Statics | any;
	}
}
declare namespace Ext.data.reader.Array {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html)
	 * Data reader class to create an Array of [Ext.data.Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) objects from an Array.
	 * Each element of that Array represents a row of data fields. The
	 * fields are pulled into a Record object using as a subscript, the `mapping` property
	 * of the field definition if it exists, or the field's ordinal position in the definition.
	 * 
	 * <u>Example code:</u>
	 * 
	 *    Employee = Ext.define('Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id',
	 *            {name: 'name', mapping: 1},         // "mapping" only needed if an "id" field is present which
	 *            {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        
	 *        ]
	 *    });
	 *    
	 *    var myReader = new Ext.data.reader.Array({
	 *        model: 'Employee'
	 *    }, Employee);
	 * 
	 * This would consume an Array like this:
	 * 
	 *    [ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]
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
		 * @param   {object}                                                                     members    The members to add to this class.
		 * @param   {boolean}                                                                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Array;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Json;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.reader.Array;
		addStatics? (members: object): typeof Ext.data.reader.Json;
		addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                                                     name
		 * @param   {object}                                                                     member
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.reader.Array;
		addMember? (name: object, member: object): typeof Ext.data.reader.Json;
		addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                                                     fn
		 * @param   {object}                                                                     scope
		 * @returns {Ext.data.reader.Array|Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Array;
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Json;
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
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
declare namespace Ext.data.reader.Json {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html)
	 * The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually
	 * happens as a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're
	 * not already familiar with them.
	 * 
	 * We created the simplest type of JSON Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s
	 * [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a JSON Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        model: 'User'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    [
	 *        {
	 *            "id": 1,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        },
	 *        {
	 *            "id": 2,
	 *            "name": "Abe Elias",
	 *            "email": "abe@sencha.com"
	 *        }
	 *    ]
	 * 
	 * ## Reading other JSON formats
	 * 
	 * If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually
	 * pass JsonReader a couple of configuration options to make it parse your format. For example, we can use the
	 * [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration to parse data that comes back like this:
	 * 
	 *    {
	 *        "users": [
	 *           {
	 *               "id": 1,
	 *               "name": "Ed Spencer",
	 *               "email": "ed@sencha.com"
	 *           },
	 *           {
	 *               "id": 2,
	 *               "name": "Abe Elias",
	 *               "email": "abe@sencha.com"
	 *           }
	 *        ]
	 *    }
	 * 
	 * To parse this we just pass in a [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration that matches the 'users' above:
	 * 
	 *    reader: {
	 *        type: 'json',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata
	 * around each record inside a nested structure like this:
	 * 
	 *    {
	 *        "total": 122,
	 *        "offset": 0,
	 *        "users": [
	 *            {
	 *                "id": "ed-spencer-1",
	 *                "value": 1,
	 *                "user": {
	 *                    "id": 1,
	 *                    "name": "Ed Spencer",
	 *                    "email": "ed@sencha.com"
	 *                }
	 *            }
	 *        ]
	 *    }
	 * 
	 * In the case above the record data is nested an additional level inside the "users" array as each "user" item has
	 * additional metadata surrounding it ('id' and 'value' in this case). To parse data out of each "user" item in the
	 * JSON above we need to specify the [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record) configuration like this:
	 * 
	 *    reader: {
	 *        type  : 'json',
	 *        rootProperty  : 'users',
	 *        record: 'user'
	 *    }
	 * 
	 * ## Response MetaData
	 * 
	 * The server can return metadata in its response, in addition to the record data, that describe attributes
	 * of the data set itself or are used to reconfigure the Reader. To pass metadata in the response you simply
	 * add a `metaData` attribute to the root of the response data. The metaData attribute can contain anything,
	 * but supports a specific set of properties that are handled by the Reader if they are present:
	 * 
	 * - [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty): the property name of the root response node containing the record data
	 * - [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-totalProperty): property name for the total number of records in the data
	 * - [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty): property name for the success status of the response
	 * - [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty): property name for an optional response message
	 * - [fields](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-fields): Config used to reconfigure the Model's fields before converting the
	 *   response data into records
	 * 
	 * An initial Reader configuration containing all of these properties might look like this ("fields" would be
	 * included in the Model definition, not shown):
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        rootProperty : 'root',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success',
	 *        messageProperty: 'message'
	 *    }
	 * 
	 * If you were to pass a response object containing attributes different from those initially defined above, you could
	 * use the `metaData` attribute to reconfigure the Reader on the fly. For example:
	 * 
	 *    {
	 *        "count": 1,
	 *        "ok": true,
	 *        "msg": "Users found",
	 *        "users": [{
	 *            "userId": 123,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        }],
	 *        "metaData": {
	 *            "rootProperty": "users",
	 *            "totalProperty": 'count',
	 *            "successProperty": 'ok',
	 *            "messageProperty": 'msg'
	 *        }
	 *    }
	 * 
	 * You can also place any other arbitrary data you need into the `metaData` attribute which will be ignored by the Reader,
	 * but will be accessible via the Reader's [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData) property (which is also passed to listeners via the Proxy's
	 * [metachange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#event-metachange) event (also relayed by the store). Application code can then
	 * process the passed metadata in any way it chooses.
	 * 
	 * A simple example for how this can be used would be customizing the fields for a Model that is bound to a grid. By passing
	 * the `fields` property the Model will be automatically updated by the Reader internally, but that change will not be
	 * reflected automatically in the grid unless you also update the column configuration. You could do this manually, or you
	 * could simply pass a standard grid column config object as part of the `metaData` attribute
	 * and then pass that along to the grid. Here's a very simple example for how that could be accomplished:
	 * 
	 *    // response format:
	 *    {
	 *        ...
	 *        "metaData": {
	 *            "fields": [
	 *                { "name": "userId", "type": "int" },
	 *                { "name": "name", "type": "string" },
	 *                { "name": "birthday", "type": "date", "dateFormat": "Y-j-m" },
	 *            ],
	 *            "columns": [
	 *                { "text": "User ID", "dataIndex": "userId", "width": 40 },
	 *                { "text": "User Name", "dataIndex": "name", "flex": 1 },
	 *                { "text": "Birthday", "dataIndex": "birthday", "flex": 1, "format": 'Y-j-m', "xtype": "datecolumn" }
	 *            ]
	 *        }
	 *    }
	 * 
	 * The Reader will automatically read the meta fields config and rebuild the Model based on the new fields, but to handle
	 * the new column configuration you would need to handle the metadata within the application code. This is done simply enough
	 * by handling the metachange event on either the store or the proxy, e.g.:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        ...
	 *        listeners: {
	 *            'metachange': function(store, meta) {
	 *                myGrid.reconfigure(store, meta.columns);
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
		 * @param   {object}                                               members    The members to add to this class.
		 * @param   {boolean}                                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Json;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.reader.Json;
		addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                               name
		 * @param   {object}                                               member
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.reader.Json;
		addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                               fn
		 * @param   {object}                                               scope
		 * @returns {Ext.data.reader.Json|Ext.data.reader.Reader|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Json;
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
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
declare namespace Ext.data.reader.Reader {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html)
	 * Readers are used to interpret data to be loaded into a [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) instance or a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) - often in response to an AJAX request. In general there is usually no need to create
	 * a Reader instance directly, since a Reader is almost always used together with a [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html),
	 * and is configured using the Proxy's [reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#cfg-reader) configuration property:
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        },
	 *    });
	 * 
	 * The above reader is configured to consume a JSON string that looks something like this:
	 * 
	 *    {
	 *        "success": true,
	 *        "users": [
	 *            { "name": "User 1" },
	 *            { "name": "User 2" }
	 *        ]
	 *    }
	 * 
	 * # Loading Nested Data
	 * 
	 * Readers have the ability to automatically load deeply-nested data objects based on the [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * configured on each Model. Below is an example demonstrating the flexibility of these associations in a
	 * fictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:
	 * 
	 *    Ext.define("User", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: {model: 'Order', name: 'orders'},
	 *    
	 *        proxy: {
	 *            type: 'rest',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 *    
	 *    Ext.define("Order", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'total'
	 *        ],
	 *    
	 *        hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},
	 *        belongsTo: 'User'
	 *    });
	 *    
	 *    Ext.define("OrderItem", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'price', 'quantity', 'order_id', 'product_id'
	 *        ],
	 *    
	 *        belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]
	 *    });
	 *    
	 *    Ext.define("Product", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: 'OrderItem'
	 *    });
	 * 
	 * This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.
	 * Finally, each OrderItem has a single Product. This allows us to consume data like this:
	 * 
	 *    {
	 *        "users": [
	 *            {
	 *                "id": 123,
	 *                "name": "Ed",
	 *                "orders": [
	 *                    {
	 *                        "id": 50,
	 *                        "total": 100,
	 *                        "order_items": [
	 *                            {
	 *                                "id"      : 20,
	 *                                "price"   : 40,
	 *                                "quantity": 2,
	 *                                "product" : {
	 *                                    "id": 1000,
	 *                                    "name": "MacBook Pro"
	 *                                }
	 *                            },
	 *                            {
	 *                                "id"      : 21,
	 *                                "price"   : 20,
	 *                                "quantity": 3,
	 *                                "product" : {
	 *                                    "id": 1001,
	 *                                    "name": "iPhone"
	 *                                }
	 *                            }
	 *                        ]
	 *                    }
	 *                ]
	 *            }
	 *        ]
	 *    }
	 * 
	 * The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the
	 * Orders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),
	 * and finally the Product associated with each OrderItem. Now we can read the data and use it as follows:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: "User"
	 *    });
	 *    
	 *    store.load({
	 *        callback: function() {
	 *            //the user that was loaded
	 *            var user = store.first();
	 *    
	 *            console.log("Orders for " + user.get('name') + ":")
	 *    
	 *            //iterate over the Orders for each User
	 *            user.orders().each(function(order) {
	 *                console.log("Order ID: " + order.getId() + ", which contains items:");
	 *    
	 *                //iterate over the OrderItems for each Order
	 *                order.orderItems().each(function(orderItem) {
	 *                    //we know that the Product data is already loaded, so we can use the synchronous getProduct
	 *                    //usually, we would use the asynchronous version (see #belongsTo)
	 *                    var product = orderItem.getProduct();
	 *    
	 *                    console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
	 *                });
	 *            });
	 *        }
	 *    });
	 * 
	 * Running the code above results in the following:
	 * 
	 *    Orders for Ed:
	 *    Order ID: 50, which contains items:
	 *    2 orders of MacBook Pro
	 *    3 orders of iPhone
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
		 * @param   {object}                          members    The members to add to this class.
		 * @param   {boolean}                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.reader.Reader|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                          members
		 * @returns {Ext.data.reader.Reader|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                          name
		 * @param   {object}                          member
		 * @returns {Ext.data.reader.Reader|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                          fn
		 * @param   {object}                          scope
		 * @returns {Ext.data.reader.Reader|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
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
declare namespace Ext.data.reader.Xml {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html)
	 * The XML Reader is used by a Proxy to read a server response that is sent back in XML format. This usually happens as
	 * a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.xml',
	 *            reader: {
	 *                type: 'xml',
	 *                record: 'user',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're not
	 * already familiar with them.
	 * 
	 * We created the simplest type of XML Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a XML Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'xml',
	 *        model: 'User',
	 *        record: 'user',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * First off there's [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) option to define the root node `&lt;users&gt;` (there should be only one in a well-formed
	 * XML document). Then the XML Reader uses the configured [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) option to pull out the data for each record -
	 * in this case we set record to 'user', so each `&lt;user&gt;` above will be converted into a User model.
	 * 
	 * Note that XmlReader doesn't care whether your [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) and [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) elements are nested deep inside a
	 * larger structure, so a response like this will still work:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;deeply&gt;
	 *        &lt;nested&gt;
	 *            &lt;xml&gt;
	 *                &lt;users&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;1&lt;/id&gt;
	 *                        &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *                        &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;2&lt;/id&gt;
	 *                        &lt;name&gt;Abe Elias&lt;/name&gt;
	 *                        &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                &lt;/users&gt;
	 *            &lt;/xml&gt;
	 *        &lt;/nested&gt;
	 *    &lt;/deeply&gt;
	 * 
	 * If this Reader is being used by a [TreeStore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.TreeStore.html) to read tree-structured data in which records
	 * are nested as descendant nodes of other records, then this lenient behaviour must be overridden by using a more specific
	 * child node selector as your [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) selector which will not select all descendants, such as:
	 * 
	 *    record: '>user'
	 * 
	 * # Response metadata
	 * 
	 * The server can return additional data in its response, such as the [total number of records](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-totalProperty) and
	 * the [success status of the response](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-successProperty). These are typically included in the XML response like
	 * this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;total&gt;100&lt;/total&gt;
	 *        &lt;success&gt;true&lt;/success&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * If these properties are present in the XML response they can be parsed out by the XmlReader and used by the Store
	 * that loaded it. We can set up the names of these properties by specifying a final pair of configuration options:
	 * 
	 *    reader: {
	 *        type: 'xml',
	 *        rootProperty: 'users',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success'
	 *    }
	 * 
	 * These final options are not necessary to make the Reader work, but can be useful when the server needs to report an
	 * error or if it needs to indicate that there is a lot of data available of which only a subset is currently being
	 * returned.
	 * 
	 * # Response format
	 * 
	 * **Note:** in order for the browser to parse a returned XML document, the Content-Type header in the HTTP response
	 * must be set to "text/xml" or "application/xml". This is very important - the XmlReader will not work correctly
	 * otherwise.
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
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Xml;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.reader.Reader;
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
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.reader.Xml;
		addStatics? (members: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                              name
		 * @param   {object}                                              member
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.reader.Xml;
		addMember? (name: object, member: object): typeof Ext.data.reader.Reader;
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
		 * @param   {object}                                              fn
		 * @param   {object}                                              scope
		 * @returns {Ext.data.reader.Xml|Ext.data.reader.Reader|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Xml;
		onExtended? (fn: object, scope: object): typeof Ext.data.reader.Reader;
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
declare namespace Ext.data.reader.Array.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Array.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#method-addListener)
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
declare namespace Ext.data.reader.Array.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Array.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#method-on)
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
declare namespace Ext.data.reader.Array.methodParams.read {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Array.read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html#method-read)
	 * Various options that instruct the reader on how to read the data
	 */
	interface ReadOptions extends Ext.base.Params {
		/** 
		 * A function to construct the model based on the processed data. By default,
		 * this just calls the model constructor and passes the raw data.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		recordCreator?: ExtGlobalFunction;
	}
}
declare namespace Ext.data.reader.Json.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Json.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-addListener)
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
declare namespace Ext.data.reader.Json.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Json.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-on)
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
declare namespace Ext.data.reader.Json.methodParams.read {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Json.read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#method-read)
	 * Various options that instruct the reader on how to read the data
	 */
	interface ReadOptions extends Ext.base.Params {
		/** 
		 * A function to construct the model based on the processed data. By default,
		 * this just calls the model constructor and passes the raw data.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		recordCreator?: ExtGlobalFunction;
	}
}
declare namespace Ext.data.reader.Reader.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Reader.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-addListener)
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
declare namespace Ext.data.reader.Reader.methodParams.extractData {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Reader.extractData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-extractData)
	 * An object containing extra options.
	 */
	interface ReadOptions extends Ext.base.Params {
		/** 
		 * The Model constructor to use.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		model?: ExtGlobalFunction;
		/** 
		 * A function to use to create and initialize records. By default a function
		 * is supplied which creates _non-phantom_ records on the assumnption that a Reader is going to be used to read server-supplied data.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.reader.Reader.methodParams.extractData.ReadOptions.recordCreator}
		 */
		recordCreator?: ((data?: object, Model?: ExtGlobalFunction) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.reader.Reader.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Reader.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-on)
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
declare namespace Ext.data.reader.Reader.methodParams.read {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Reader.read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-read)
	 * Various options that instruct the reader on how to read the data
	 */
	interface ReadOptions extends Ext.base.Params {
		/** 
		 * A function to construct the model based on the processed data. By default,
		 * this just calls the model constructor and passes the raw data.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		recordCreator?: ExtGlobalFunction;
	}
}
declare namespace Ext.data.reader.Xml.methodParams.addListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Xml.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#method-addListener)
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
declare namespace Ext.data.reader.Xml.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Xml.on](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#method-on)
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
declare namespace Ext.data.reader.Xml.methodParams.read {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.reader.Xml.read](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#method-read)
	 * Various options that instruct the reader on how to read the data
	 */
	interface ReadOptions extends Ext.base.Params {
		/** 
		 * A function to construct the model based on the processed data. By default,
		 * this just calls the model constructor and passes the raw data.
		 * @configuration
		 * @optional
		 * @type {Function}
		 */
		recordCreator?: ExtGlobalFunction;
	}
}
declare namespace Ext.data.reader.Array {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html)
	 * Data reader class to create an Array of [Ext.data.Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) objects from an Array.
	 * Each element of that Array represents a row of data fields. The
	 * fields are pulled into a Record object using as a subscript, the `mapping` property
	 * of the field definition if it exists, or the field's ordinal position in the definition.
	 * 
	 * <u>Example code:</u>
	 * 
	 *    Employee = Ext.define('Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id',
	 *            {name: 'name', mapping: 1},         // "mapping" only needed if an "id" field is present which
	 *            {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        
	 *        ]
	 *    });
	 *    
	 *    var myReader = new Ext.data.reader.Array({
	 *        model: 'Employee'
	 *    }, Employee);
	 * 
	 * This would consume an Array like this:
	 * 
	 *    [ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to automatically parse models nested within other models in a response object. See the
		 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html) intro docs for full explanation.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		implicitIncludes?: boolean;
		/** 
		 * Determines if the Reader will keep raw data
		 * received from the server in the [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#property-rawData) property.
		 * 
		 * While this might seem useful to do additional data processing, keeping raw data
		 * might cause adverse effects such as memory leaks. It is recommended to set
		 * `keepRawData` to `false` if you do not need the raw data.
		 * 
		 * If you need to process data packet to extract additional data such as row summaries,
		 * it is recommended to use [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform) function for that purpose.
		 * 
		 * Note that starting with Ext JS 6.0 the default behavior has been changed to
		 * **not** keep the raw data because of the high potential for memory leaks.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		keepRawData?: boolean;
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
		 * The name of the property which contains a response message for exception handling. If you want to return a false success
		 * response from the server, maybe due to some server-side validation, the messageProperty can hold the error message. For
		 * example:
		 * 
		 *    {
		 *        "success": false,
		 *        "error": "There was an error with your request"
		 *    }
		 * 
		 * You can retrieve this error message in a callback when loading a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) or [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) like:
		 * 
		 *    var store = new Ext.data.Store({
		 *        fields : ['foo'],
		 *        proxy  : {
		 *            type   : 'ajax',
		 *            url    : 'data.json',
		 *            reader : {
		 *                type            : 'json',
		 *                rootProperty    : 'data',
		 *                messageProperty : 'error'
		 *            }
		 *        }
		 *    });
		 *    
		 *    store.load({
		 *        callback: function(records, operation, success) {
		 *            if (success) {
		 *                // ...
		 *            } else {
		 *                var error = operation.getError();
		 *    
		 *                Ext.Msg.alert('Error', error);
		 *            }
		 *        }
		 *    });
		 * 
		 * In this example, the callback will execute with `success` being `false` and will therefore show the [Ext.Msg.alert](https://docs.sencha.com/extjs/6.2.0/modern/Ext.MessageBox.html#method-alert) with
		 * the error string returned in the response.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		messageProperty?: string;
		/** 
		 * Name of the property from which to retrieve the `metaData` attribute. See [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData).
		 * @configuration
		 * @optional
		 * @default 'metaData'
		 * @type {string}
		 */
		metaProperty?: string;
		/** 
		 * The model to use for this reader. This config is only required if the reader is being used
		 * without a proxy, otherwise the proxy will automatically set the model.
		 * @configuration
		 * @optional
		 * @type {string|Ext.data.Model}
		 */
		model?: string | Ext.data.Model;
		/** 
		 * The proxy attached to this reader. Typically only needed onMetaChange so that
		 * we can set the new model on the proxy.
		 * @configuration
		 * @optional
		 * @type {Ext.data.proxy.Proxy}
		 */
		proxy?: Ext.data.proxy.Proxy;
		/** 
		 * True to extract the records from a data packet even if the [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty) returns false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		readRecordsOnFailure?: boolean;
		/** 
		 * The optional location within the JSON response that the record data itself can be found at.
		 * See the JsonReader intro docs for more details. This is not often needed.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		record?: string;
		/** 
		 * The property that contains data items corresponding to the
		 * Model(s) of the configured Reader. `rootProperty` varies by Reader type.
		 * 
		 * ## JSON Reader
		 * 
		 * `rootProperty` is a property name. It may also be a dot-separated
		 * list of property names if the root is nested. The root JSON array will be
		 * used by default.
		 * 
		 *    // rootPropety config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [{
		 *                name: 'Scott',
		 *                age: 22
		 *            }, {
		 *                name: 'Ramona',
		 *                age: 24
		 *            }]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## XML Reader
		 * 
		 * `rootProperty` is a CSS selector. The root XML element will be used
		 * by default.
		 * 
		 *    // rootProperty config (plus record config)
		 *    rootProperty: 'myresults',
		 *    record: 'user'
		 *    
		 *    // server response
		 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
		 *    &lt;embedded&gt;
		 *        &lt;myresults&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Scott&lt;/name&gt;
		 *                &lt;age&gt;22&lt;/age&gt;
		 *            &lt;/user&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Ramona&lt;/name&gt;
		 *                &lt;age&gt;24&lt;/age&gt;
		 *            &lt;/user&gt;
		 *        &lt;/myresults&gt;
		 *    &lt;/embedded&gt;
		 * 
		 * ## Array Reader
		 * 
		 * `rootProperty` is not typically applicable since the data is assumed to be a
		 * single-level array of arrays.  However, if the array of records is returned
		 * within a JSON response a `rootProperty` config may be used:
		 * 
		 *    // rootProperty config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [['Scott', 22], ['Ramona', 24]]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## rootProperty as a function
		 * 
		 * The `rootProperty` may also be a function that returns the root node from
		 * the dataset. For example:
		 * 
		 *    var store = Ext.create('Ext.data.TreeStore', {
		 *        proxy: {
		 *            type: 'memory',
		 *            reader: {
		 *                type: 'json',
		 *                rootProperty: function(data){
		 *                    // Extract child nodes from the items or children property in the dataset
		 *                    return data.items || data.children;
		 *                }
		 *            }
		 *        }, 
		 *        data: {
		 *            items: [{
		 *                text: 'item 1',
		 *                children: [{
		 *                    text: 'child A',
		 *                    leaf: true
		 *                }]
		 *            }]
		 *        }
		 *    });
		 *    
		 *    Ext.create('Ext.tree.Panel', {
		 *        title: 'rootProperty as a function',
		 *        width: 200,
		 *        height:150,
		 *        store: store,
		 *        rootVisible: false,
		 *        renderTo: Ext.getBody()
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {ExtGlobalFunction|string}
		 */
		rootProperty?: ExtGlobalFunction | string;
		/** 
		 * Name of the property from which to retrieve the `success` attribute, the value of which indicates
		 * whether a given request succeeded or failed (typically a boolean or 'true'|'false'). See
		 * [Ext.data.proxy.Server](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html).[exception](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html#event-exception) for additional information.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		successProperty?: string;
		/** 
		 * Name of the property from which to retrieve the total number of records in the dataset. This is only needed if
		 * the whole dataset is not passed in one go, but is being paged from the remote server.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		totalProperty?: string;
		/** 
		 * If a transform function is set, it will be invoked just before [readRecords](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-readRecords) executes.
		 * It is passed the raw (deserialized) data object. The transform function returns a data object, which can be
		 * a modified version of the original data object, or a completely new data object. The transform can
		 * be a function, or a method name on the Reader instance, or an object with a 'fn' key
		 * and an optional 'scope' key.
		 * 
		 * Example usage:
		 * 
		 *    Ext.create('Ext.data.Store', {
		 *        model: 'User',
		 *        proxy: {
		 *            type: 'ajax',
		 *            url : 'users.json',
		 *            reader: {
		 *                type: 'json',
		 *                transform: {
		 *                    fn: function(data) {
		 *                        // do some manipulation of the raw data object
		 *                        return data;
		 *                    },
		 *                    scope: this
		 *                }
		 *            }
		 *        },
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|object}
		 */
		transform?: ExtGlobalFunction | string | object;
		/** 
		 * The name of the property in a node raw data block which indicates the type of the model to be created from that raw data. Useful for heterogeneous trees.
		 * 
		 * For example, hierarchical geographical data may look like this:
		 * 
		 *    {
		 *        nodeType: 'Territory',
		 *        name: 'EMEA',
		 *        children: [{
		 *            nodeType: 'Country',
		 *            name: 'United Kingdon',
		 *            children: [{
		 *                nodeType: 'City',
		 *                name: 'London'
		 *            }]
		 *        }]
		 *    }
		 * 
		 * You would configure the typeProperty in this case to be `"nodeType"` which would cause the models named "Territory", "Country" and "City" to
		 * be used.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		typeProperty?: string;
		/** 
		 * True to ensure that field names/mappings are treated as literals when
		 * reading values.
		 * 
		 * For example, by default, using the mapping "foo.bar.baz" will try and read a property foo from the root, then a property bar
		 * from foo, then a property baz from bar. Setting the simple accessors to true will read the property with the name
		 * "foo.bar.baz" direct from the root object.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		useSimpleAccessors?: boolean;
		/** 
		 * This method provides a hook to do any data transformation before the reading process
		 * begins. By default this function just returns what is passed to it. It can be
		 * overridden in a subclass to return something else.
		 * See [XmlReader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html) for an example.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} data The data object
		 * @returns {object}      The normalized data object
		 */
		getData? (data: object): object;
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
		 * @returns {Ext.data.reader.Array.Statics}        this
		 */
		initConfig? (config: object): Ext.data.reader.Array.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                        [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Array.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Array.Statics;
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
		 * @returns {Ext.data.reader.Array.Statics}  
		 */
		statics? (): Ext.data.reader.Array.Statics;
	}
}
declare namespace Ext.data.reader.Json {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html)
	 * The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually
	 * happens as a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're
	 * not already familiar with them.
	 * 
	 * We created the simplest type of JSON Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s
	 * [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a JSON Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        model: 'User'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    [
	 *        {
	 *            "id": 1,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        },
	 *        {
	 *            "id": 2,
	 *            "name": "Abe Elias",
	 *            "email": "abe@sencha.com"
	 *        }
	 *    ]
	 * 
	 * ## Reading other JSON formats
	 * 
	 * If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually
	 * pass JsonReader a couple of configuration options to make it parse your format. For example, we can use the
	 * [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration to parse data that comes back like this:
	 * 
	 *    {
	 *        "users": [
	 *           {
	 *               "id": 1,
	 *               "name": "Ed Spencer",
	 *               "email": "ed@sencha.com"
	 *           },
	 *           {
	 *               "id": 2,
	 *               "name": "Abe Elias",
	 *               "email": "abe@sencha.com"
	 *           }
	 *        ]
	 *    }
	 * 
	 * To parse this we just pass in a [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration that matches the 'users' above:
	 * 
	 *    reader: {
	 *        type: 'json',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata
	 * around each record inside a nested structure like this:
	 * 
	 *    {
	 *        "total": 122,
	 *        "offset": 0,
	 *        "users": [
	 *            {
	 *                "id": "ed-spencer-1",
	 *                "value": 1,
	 *                "user": {
	 *                    "id": 1,
	 *                    "name": "Ed Spencer",
	 *                    "email": "ed@sencha.com"
	 *                }
	 *            }
	 *        ]
	 *    }
	 * 
	 * In the case above the record data is nested an additional level inside the "users" array as each "user" item has
	 * additional metadata surrounding it ('id' and 'value' in this case). To parse data out of each "user" item in the
	 * JSON above we need to specify the [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record) configuration like this:
	 * 
	 *    reader: {
	 *        type  : 'json',
	 *        rootProperty  : 'users',
	 *        record: 'user'
	 *    }
	 * 
	 * ## Response MetaData
	 * 
	 * The server can return metadata in its response, in addition to the record data, that describe attributes
	 * of the data set itself or are used to reconfigure the Reader. To pass metadata in the response you simply
	 * add a `metaData` attribute to the root of the response data. The metaData attribute can contain anything,
	 * but supports a specific set of properties that are handled by the Reader if they are present:
	 * 
	 * - [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty): the property name of the root response node containing the record data
	 * - [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-totalProperty): property name for the total number of records in the data
	 * - [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty): property name for the success status of the response
	 * - [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty): property name for an optional response message
	 * - [fields](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-fields): Config used to reconfigure the Model's fields before converting the
	 *   response data into records
	 * 
	 * An initial Reader configuration containing all of these properties might look like this ("fields" would be
	 * included in the Model definition, not shown):
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        rootProperty : 'root',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success',
	 *        messageProperty: 'message'
	 *    }
	 * 
	 * If you were to pass a response object containing attributes different from those initially defined above, you could
	 * use the `metaData` attribute to reconfigure the Reader on the fly. For example:
	 * 
	 *    {
	 *        "count": 1,
	 *        "ok": true,
	 *        "msg": "Users found",
	 *        "users": [{
	 *            "userId": 123,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        }],
	 *        "metaData": {
	 *            "rootProperty": "users",
	 *            "totalProperty": 'count',
	 *            "successProperty": 'ok',
	 *            "messageProperty": 'msg'
	 *        }
	 *    }
	 * 
	 * You can also place any other arbitrary data you need into the `metaData` attribute which will be ignored by the Reader,
	 * but will be accessible via the Reader's [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData) property (which is also passed to listeners via the Proxy's
	 * [metachange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#event-metachange) event (also relayed by the store). Application code can then
	 * process the passed metadata in any way it chooses.
	 * 
	 * A simple example for how this can be used would be customizing the fields for a Model that is bound to a grid. By passing
	 * the `fields` property the Model will be automatically updated by the Reader internally, but that change will not be
	 * reflected automatically in the grid unless you also update the column configuration. You could do this manually, or you
	 * could simply pass a standard grid column config object as part of the `metaData` attribute
	 * and then pass that along to the grid. Here's a very simple example for how that could be accomplished:
	 * 
	 *    // response format:
	 *    {
	 *        ...
	 *        "metaData": {
	 *            "fields": [
	 *                { "name": "userId", "type": "int" },
	 *                { "name": "name", "type": "string" },
	 *                { "name": "birthday", "type": "date", "dateFormat": "Y-j-m" },
	 *            ],
	 *            "columns": [
	 *                { "text": "User ID", "dataIndex": "userId", "width": 40 },
	 *                { "text": "User Name", "dataIndex": "name", "flex": 1 },
	 *                { "text": "Birthday", "dataIndex": "birthday", "flex": 1, "format": 'Y-j-m', "xtype": "datecolumn" }
	 *            ]
	 *        }
	 *    }
	 * 
	 * The Reader will automatically read the meta fields config and rebuild the Model based on the new fields, but to handle
	 * the new column configuration you would need to handle the metadata within the application code. This is done simply enough
	 * by handling the metachange event on either the store or the proxy, e.g.:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        ...
	 *        listeners: {
	 *            'metachange': function(store, meta) {
	 *                myGrid.reconfigure(store, meta.columns);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to automatically parse models nested within other models in a response object. See the
		 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html) intro docs for full explanation.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		implicitIncludes?: boolean;
		/** 
		 * Determines if the Reader will keep raw data
		 * received from the server in the [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#property-rawData) property.
		 * 
		 * While this might seem useful to do additional data processing, keeping raw data
		 * might cause adverse effects such as memory leaks. It is recommended to set
		 * `keepRawData` to `false` if you do not need the raw data.
		 * 
		 * If you need to process data packet to extract additional data such as row summaries,
		 * it is recommended to use [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform) function for that purpose.
		 * 
		 * Note that starting with Ext JS 6.0 the default behavior has been changed to
		 * **not** keep the raw data because of the high potential for memory leaks.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		keepRawData?: boolean;
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
		 * The name of the property which contains a response message for exception handling. If you want to return a false success
		 * response from the server, maybe due to some server-side validation, the messageProperty can hold the error message. For
		 * example:
		 * 
		 *    {
		 *        "success": false,
		 *        "error": "There was an error with your request"
		 *    }
		 * 
		 * You can retrieve this error message in a callback when loading a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) or [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) like:
		 * 
		 *    var store = new Ext.data.Store({
		 *        fields : ['foo'],
		 *        proxy  : {
		 *            type   : 'ajax',
		 *            url    : 'data.json',
		 *            reader : {
		 *                type            : 'json',
		 *                rootProperty    : 'data',
		 *                messageProperty : 'error'
		 *            }
		 *        }
		 *    });
		 *    
		 *    store.load({
		 *        callback: function(records, operation, success) {
		 *            if (success) {
		 *                // ...
		 *            } else {
		 *                var error = operation.getError();
		 *    
		 *                Ext.Msg.alert('Error', error);
		 *            }
		 *        }
		 *    });
		 * 
		 * In this example, the callback will execute with `success` being `false` and will therefore show the [Ext.Msg.alert](https://docs.sencha.com/extjs/6.2.0/modern/Ext.MessageBox.html#method-alert) with
		 * the error string returned in the response.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		messageProperty?: string;
		/** 
		 * Name of the property from which to retrieve the `metaData` attribute. See [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData).
		 * @configuration
		 * @optional
		 * @default 'metaData'
		 * @type {string}
		 */
		metaProperty?: string;
		/** 
		 * The model to use for this reader. This config is only required if the reader is being used
		 * without a proxy, otherwise the proxy will automatically set the model.
		 * @configuration
		 * @optional
		 * @type {string|Ext.data.Model}
		 */
		model?: string | Ext.data.Model;
		/** 
		 * The reader will keep a copy of the most recent request in the [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-rawData) property. For performance reasons,
		 * the data object for each record is used directly as the model data. This means that these objects may be modified and
		 * thus modify the raw data. To ensure the objects are copied, set this option to `true`. NB: This only applies to items
		 * that are read as part of the data array, any other metadata will not be modified:
		 * 
		 *    {
		 *        "someOtherData": 1, // Won't be modified
		 *        "root": [{}, {}, {}] // The objects here will be modified
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		preserveRawData?: boolean;
		/** 
		 * The proxy attached to this reader. Typically only needed onMetaChange so that
		 * we can set the new model on the proxy.
		 * @configuration
		 * @optional
		 * @type {Ext.data.proxy.Proxy}
		 */
		proxy?: Ext.data.proxy.Proxy;
		/** 
		 * True to extract the records from a data packet even if the [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty) returns false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		readRecordsOnFailure?: boolean;
		/** 
		 * The optional location within the JSON response that the record data itself can be found at.
		 * See the JsonReader intro docs for more details. This is not often needed.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		record?: string;
		/** 
		 * The property that contains data items corresponding to the
		 * Model(s) of the configured Reader. `rootProperty` varies by Reader type.
		 * 
		 * ## JSON Reader
		 * 
		 * `rootProperty` is a property name. It may also be a dot-separated
		 * list of property names if the root is nested. The root JSON array will be
		 * used by default.
		 * 
		 *    // rootPropety config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [{
		 *                name: 'Scott',
		 *                age: 22
		 *            }, {
		 *                name: 'Ramona',
		 *                age: 24
		 *            }]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## XML Reader
		 * 
		 * `rootProperty` is a CSS selector. The root XML element will be used
		 * by default.
		 * 
		 *    // rootProperty config (plus record config)
		 *    rootProperty: 'myresults',
		 *    record: 'user'
		 *    
		 *    // server response
		 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
		 *    &lt;embedded&gt;
		 *        &lt;myresults&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Scott&lt;/name&gt;
		 *                &lt;age&gt;22&lt;/age&gt;
		 *            &lt;/user&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Ramona&lt;/name&gt;
		 *                &lt;age&gt;24&lt;/age&gt;
		 *            &lt;/user&gt;
		 *        &lt;/myresults&gt;
		 *    &lt;/embedded&gt;
		 * 
		 * ## Array Reader
		 * 
		 * `rootProperty` is not typically applicable since the data is assumed to be a
		 * single-level array of arrays.  However, if the array of records is returned
		 * within a JSON response a `rootProperty` config may be used:
		 * 
		 *    // rootProperty config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [['Scott', 22], ['Ramona', 24]]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## rootProperty as a function
		 * 
		 * The `rootProperty` may also be a function that returns the root node from
		 * the dataset. For example:
		 * 
		 *    var store = Ext.create('Ext.data.TreeStore', {
		 *        proxy: {
		 *            type: 'memory',
		 *            reader: {
		 *                type: 'json',
		 *                rootProperty: function(data){
		 *                    // Extract child nodes from the items or children property in the dataset
		 *                    return data.items || data.children;
		 *                }
		 *            }
		 *        }, 
		 *        data: {
		 *            items: [{
		 *                text: 'item 1',
		 *                children: [{
		 *                    text: 'child A',
		 *                    leaf: true
		 *                }]
		 *            }]
		 *        }
		 *    });
		 *    
		 *    Ext.create('Ext.tree.Panel', {
		 *        title: 'rootProperty as a function',
		 *        width: 200,
		 *        height:150,
		 *        store: store,
		 *        rootVisible: false,
		 *        renderTo: Ext.getBody()
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {ExtGlobalFunction|string}
		 */
		rootProperty?: ExtGlobalFunction | string;
		/** 
		 * Name of the property from which to retrieve the `success` attribute, the value of which indicates
		 * whether a given request succeeded or failed (typically a boolean or 'true'|'false'). See
		 * [Ext.data.proxy.Server](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html).[exception](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html#event-exception) for additional information.
		 * @configuration
		 * @optional
		 * @default 'success'
		 * @type {string}
		 */
		successProperty?: string;
		/** 
		 * Name of the property from which to retrieve the total number of records in the dataset. This is only needed if
		 * the whole dataset is not passed in one go, but is being paged from the remote server.
		 * @configuration
		 * @optional
		 * @default 'total'
		 * @type {string}
		 */
		totalProperty?: string;
		/** 
		 * If a transform function is set, it will be invoked just before [readRecords](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-readRecords) executes.
		 * It is passed the raw (deserialized) data object. The transform function returns a data object, which can be
		 * a modified version of the original data object, or a completely new data object. The transform can
		 * be a function, or a method name on the Reader instance, or an object with a 'fn' key
		 * and an optional 'scope' key.
		 * 
		 * Example usage:
		 * 
		 *    Ext.create('Ext.data.Store', {
		 *        model: 'User',
		 *        proxy: {
		 *            type: 'ajax',
		 *            url : 'users.json',
		 *            reader: {
		 *                type: 'json',
		 *                transform: {
		 *                    fn: function(data) {
		 *                        // do some manipulation of the raw data object
		 *                        return data;
		 *                    },
		 *                    scope: this
		 *                }
		 *            }
		 *        },
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|object}
		 */
		transform?: ExtGlobalFunction | string | object;
		/** 
		 * The name of the property in a node raw data block which indicates the type of the model to be created from that raw data. Useful for heterogeneous trees.
		 * 
		 * For example, hierarchical geographical data may look like this:
		 * 
		 *    {
		 *        nodeType: 'Territory',
		 *        name: 'EMEA',
		 *        children: [{
		 *            nodeType: 'Country',
		 *            name: 'United Kingdon',
		 *            children: [{
		 *                nodeType: 'City',
		 *                name: 'London'
		 *            }]
		 *        }]
		 *    }
		 * 
		 * You would configure the typeProperty in this case to be `"nodeType"` which would cause the models named "Territory", "Country" and "City" to
		 * be used.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		typeProperty?: string;
		/** 
		 * True to ensure that field names/mappings are treated as literals when
		 * reading values.
		 * 
		 * For example, by default, using the mapping "foo.bar.baz" will try and read a property foo from the root, then a property bar
		 * from foo, then a property baz from bar. Setting the simple accessors to true will read the property with the name
		 * "foo.bar.baz" direct from the root object.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		useSimpleAccessors?: boolean;
		/** 
		 * This method provides a hook to do any data transformation before the reading process
		 * begins. By default this function just returns what is passed to it. It can be
		 * overridden in a subclass to return something else.
		 * See [XmlReader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html) for an example.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} data The data object
		 * @returns {object}      The normalized data object
		 */
		getData? (data: object): object;
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
		 * @param   {object}                       config
		 * @returns {Ext.data.reader.Json.Statics}        this
		 */
		initConfig? (config: object): Ext.data.reader.Json.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                       [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Json.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Json.Statics;
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
		 * @returns {Ext.data.reader.Json.Statics}  
		 */
		statics? (): Ext.data.reader.Json.Statics;
	}
}
declare namespace Ext.data.reader.Reader {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html)
	 * Readers are used to interpret data to be loaded into a [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) instance or a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) - often in response to an AJAX request. In general there is usually no need to create
	 * a Reader instance directly, since a Reader is almost always used together with a [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html),
	 * and is configured using the Proxy's [reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#cfg-reader) configuration property:
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        },
	 *    });
	 * 
	 * The above reader is configured to consume a JSON string that looks something like this:
	 * 
	 *    {
	 *        "success": true,
	 *        "users": [
	 *            { "name": "User 1" },
	 *            { "name": "User 2" }
	 *        ]
	 *    }
	 * 
	 * # Loading Nested Data
	 * 
	 * Readers have the ability to automatically load deeply-nested data objects based on the [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * configured on each Model. Below is an example demonstrating the flexibility of these associations in a
	 * fictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:
	 * 
	 *    Ext.define("User", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: {model: 'Order', name: 'orders'},
	 *    
	 *        proxy: {
	 *            type: 'rest',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 *    
	 *    Ext.define("Order", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'total'
	 *        ],
	 *    
	 *        hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},
	 *        belongsTo: 'User'
	 *    });
	 *    
	 *    Ext.define("OrderItem", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'price', 'quantity', 'order_id', 'product_id'
	 *        ],
	 *    
	 *        belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]
	 *    });
	 *    
	 *    Ext.define("Product", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: 'OrderItem'
	 *    });
	 * 
	 * This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.
	 * Finally, each OrderItem has a single Product. This allows us to consume data like this:
	 * 
	 *    {
	 *        "users": [
	 *            {
	 *                "id": 123,
	 *                "name": "Ed",
	 *                "orders": [
	 *                    {
	 *                        "id": 50,
	 *                        "total": 100,
	 *                        "order_items": [
	 *                            {
	 *                                "id"      : 20,
	 *                                "price"   : 40,
	 *                                "quantity": 2,
	 *                                "product" : {
	 *                                    "id": 1000,
	 *                                    "name": "MacBook Pro"
	 *                                }
	 *                            },
	 *                            {
	 *                                "id"      : 21,
	 *                                "price"   : 20,
	 *                                "quantity": 3,
	 *                                "product" : {
	 *                                    "id": 1001,
	 *                                    "name": "iPhone"
	 *                                }
	 *                            }
	 *                        ]
	 *                    }
	 *                ]
	 *            }
	 *        ]
	 *    }
	 * 
	 * The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the
	 * Orders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),
	 * and finally the Product associated with each OrderItem. Now we can read the data and use it as follows:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: "User"
	 *    });
	 *    
	 *    store.load({
	 *        callback: function() {
	 *            //the user that was loaded
	 *            var user = store.first();
	 *    
	 *            console.log("Orders for " + user.get('name') + ":")
	 *    
	 *            //iterate over the Orders for each User
	 *            user.orders().each(function(order) {
	 *                console.log("Order ID: " + order.getId() + ", which contains items:");
	 *    
	 *                //iterate over the OrderItems for each Order
	 *                order.orderItems().each(function(orderItem) {
	 *                    //we know that the Product data is already loaded, so we can use the synchronous getProduct
	 *                    //usually, we would use the asynchronous version (see #belongsTo)
	 *                    var product = orderItem.getProduct();
	 *    
	 *                    console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
	 *                });
	 *            });
	 *        }
	 *    });
	 * 
	 * Running the code above results in the following:
	 * 
	 *    Orders for Ed:
	 *    Order ID: 50, which contains items:
	 *    2 orders of MacBook Pro
	 *    3 orders of iPhone
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to automatically parse models nested within other models in a response object. See the
		 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html) intro docs for full explanation.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		implicitIncludes?: boolean;
		/** 
		 * Determines if the Reader will keep raw data
		 * received from the server in the [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#property-rawData) property.
		 * 
		 * While this might seem useful to do additional data processing, keeping raw data
		 * might cause adverse effects such as memory leaks. It is recommended to set
		 * `keepRawData` to `false` if you do not need the raw data.
		 * 
		 * If you need to process data packet to extract additional data such as row summaries,
		 * it is recommended to use [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform) function for that purpose.
		 * 
		 * Note that starting with Ext JS 6.0 the default behavior has been changed to
		 * **not** keep the raw data because of the high potential for memory leaks.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		keepRawData?: boolean;
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
		 * The name of the property which contains a response message for exception handling. If you want to return a false success
		 * response from the server, maybe due to some server-side validation, the messageProperty can hold the error message. For
		 * example:
		 * 
		 *    {
		 *        "success": false,
		 *        "error": "There was an error with your request"
		 *    }
		 * 
		 * You can retrieve this error message in a callback when loading a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) or [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) like:
		 * 
		 *    var store = new Ext.data.Store({
		 *        fields : ['foo'],
		 *        proxy  : {
		 *            type   : 'ajax',
		 *            url    : 'data.json',
		 *            reader : {
		 *                type            : 'json',
		 *                rootProperty    : 'data',
		 *                messageProperty : 'error'
		 *            }
		 *        }
		 *    });
		 *    
		 *    store.load({
		 *        callback: function(records, operation, success) {
		 *            if (success) {
		 *                // ...
		 *            } else {
		 *                var error = operation.getError();
		 *    
		 *                Ext.Msg.alert('Error', error);
		 *            }
		 *        }
		 *    });
		 * 
		 * In this example, the callback will execute with `success` being `false` and will therefore show the [Ext.Msg.alert](https://docs.sencha.com/extjs/6.2.0/modern/Ext.MessageBox.html#method-alert) with
		 * the error string returned in the response.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		messageProperty?: string;
		/** 
		 * The model to use for this reader. This config is only required if the reader is being used
		 * without a proxy, otherwise the proxy will automatically set the model.
		 * @configuration
		 * @optional
		 * @type {string|Ext.data.Model}
		 */
		model?: string | Ext.data.Model;
		/** 
		 * The proxy attached to this reader. Typically only needed onMetaChange so that
		 * we can set the new model on the proxy.
		 * @configuration
		 * @optional
		 * @type {Ext.data.proxy.Proxy}
		 */
		proxy?: Ext.data.proxy.Proxy;
		/** 
		 * True to extract the records from a data packet even if the [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty) returns false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		readRecordsOnFailure?: boolean;
		/** 
		 * The property that contains data items corresponding to the
		 * Model(s) of the configured Reader. `rootProperty` varies by Reader type.
		 * 
		 * ## JSON Reader
		 * 
		 * `rootProperty` is a property name. It may also be a dot-separated
		 * list of property names if the root is nested. The root JSON array will be
		 * used by default.
		 * 
		 *    // rootPropety config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [{
		 *                name: 'Scott',
		 *                age: 22
		 *            }, {
		 *                name: 'Ramona',
		 *                age: 24
		 *            }]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## XML Reader
		 * 
		 * `rootProperty` is a CSS selector. The root XML element will be used
		 * by default.
		 * 
		 *    // rootProperty config (plus record config)
		 *    rootProperty: 'myresults',
		 *    record: 'user'
		 *    
		 *    // server response
		 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
		 *    &lt;embedded&gt;
		 *        &lt;myresults&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Scott&lt;/name&gt;
		 *                &lt;age&gt;22&lt;/age&gt;
		 *            &lt;/user&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Ramona&lt;/name&gt;
		 *                &lt;age&gt;24&lt;/age&gt;
		 *            &lt;/user&gt;
		 *        &lt;/myresults&gt;
		 *    &lt;/embedded&gt;
		 * 
		 * ## Array Reader
		 * 
		 * `rootProperty` is not typically applicable since the data is assumed to be a
		 * single-level array of arrays.  However, if the array of records is returned
		 * within a JSON response a `rootProperty` config may be used:
		 * 
		 *    // rootProperty config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [['Scott', 22], ['Ramona', 24]]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## rootProperty as a function
		 * 
		 * The `rootProperty` may also be a function that returns the root node from
		 * the dataset. For example:
		 * 
		 *    var store = Ext.create('Ext.data.TreeStore', {
		 *        proxy: {
		 *            type: 'memory',
		 *            reader: {
		 *                type: 'json',
		 *                rootProperty: function(data){
		 *                    // Extract child nodes from the items or children property in the dataset
		 *                    return data.items || data.children;
		 *                }
		 *            }
		 *        }, 
		 *        data: {
		 *            items: [{
		 *                text: 'item 1',
		 *                children: [{
		 *                    text: 'child A',
		 *                    leaf: true
		 *                }]
		 *            }]
		 *        }
		 *    });
		 *    
		 *    Ext.create('Ext.tree.Panel', {
		 *        title: 'rootProperty as a function',
		 *        width: 200,
		 *        height:150,
		 *        store: store,
		 *        rootVisible: false,
		 *        renderTo: Ext.getBody()
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {ExtGlobalFunction|string}
		 */
		rootProperty?: ExtGlobalFunction | string;
		/** 
		 * Name of the property from which to retrieve the `success` attribute, the value of which indicates
		 * whether a given request succeeded or failed (typically a boolean or 'true'|'false'). See
		 * [Ext.data.proxy.Server](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html).[exception](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html#event-exception) for additional information.
		 * @configuration
		 * @optional
		 * @default 'success'
		 * @type {string}
		 */
		successProperty?: string;
		/** 
		 * Name of the property from which to retrieve the total number of records in the dataset. This is only needed if
		 * the whole dataset is not passed in one go, but is being paged from the remote server.
		 * @configuration
		 * @optional
		 * @default 'total'
		 * @type {string}
		 */
		totalProperty?: string;
		/** 
		 * If a transform function is set, it will be invoked just before [readRecords](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-readRecords) executes.
		 * It is passed the raw (deserialized) data object. The transform function returns a data object, which can be
		 * a modified version of the original data object, or a completely new data object. The transform can
		 * be a function, or a method name on the Reader instance, or an object with a 'fn' key
		 * and an optional 'scope' key.
		 * 
		 * Example usage:
		 * 
		 *    Ext.create('Ext.data.Store', {
		 *        model: 'User',
		 *        proxy: {
		 *            type: 'ajax',
		 *            url : 'users.json',
		 *            reader: {
		 *                type: 'json',
		 *                transform: {
		 *                    fn: function(data) {
		 *                        // do some manipulation of the raw data object
		 *                        return data;
		 *                    },
		 *                    scope: this
		 *                }
		 *            }
		 *        },
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|object}
		 */
		transform?: ExtGlobalFunction | string | object;
		/** 
		 * The name of the property in a node raw data block which indicates the type of the model to be created from that raw data. Useful for heterogeneous trees.
		 * 
		 * For example, hierarchical geographical data may look like this:
		 * 
		 *    {
		 *        nodeType: 'Territory',
		 *        name: 'EMEA',
		 *        children: [{
		 *            nodeType: 'Country',
		 *            name: 'United Kingdon',
		 *            children: [{
		 *                nodeType: 'City',
		 *                name: 'London'
		 *            }]
		 *        }]
		 *    }
		 * 
		 * You would configure the typeProperty in this case to be `"nodeType"` which would cause the models named "Territory", "Country" and "City" to
		 * be used.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		typeProperty?: string;
		/** 
		 * This method provides a hook to do any data transformation before the reading process
		 * begins. By default this function just returns what is passed to it. It can be
		 * overridden in a subclass to return something else.
		 * See [XmlReader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html) for an example.
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {object} data The data object
		 * @returns {object}      The normalized data object
		 */
		getData? (data: object): object;
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
		 * @param   {object}                         config
		 * @returns {Ext.data.reader.Reader.Statics}        this
		 */
		initConfig? (config: object): Ext.data.reader.Reader.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Reader.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Reader.Statics;
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
		 * @returns {Ext.data.reader.Reader.Statics}  
		 */
		statics? (): Ext.data.reader.Reader.Statics;
	}
}
declare namespace Ext.data.reader.Xml {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html)
	 * The XML Reader is used by a Proxy to read a server response that is sent back in XML format. This usually happens as
	 * a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.xml',
	 *            reader: {
	 *                type: 'xml',
	 *                record: 'user',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're not
	 * already familiar with them.
	 * 
	 * We created the simplest type of XML Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a XML Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'xml',
	 *        model: 'User',
	 *        record: 'user',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * First off there's [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) option to define the root node `&lt;users&gt;` (there should be only one in a well-formed
	 * XML document). Then the XML Reader uses the configured [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) option to pull out the data for each record -
	 * in this case we set record to 'user', so each `&lt;user&gt;` above will be converted into a User model.
	 * 
	 * Note that XmlReader doesn't care whether your [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) and [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) elements are nested deep inside a
	 * larger structure, so a response like this will still work:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;deeply&gt;
	 *        &lt;nested&gt;
	 *            &lt;xml&gt;
	 *                &lt;users&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;1&lt;/id&gt;
	 *                        &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *                        &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;2&lt;/id&gt;
	 *                        &lt;name&gt;Abe Elias&lt;/name&gt;
	 *                        &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                &lt;/users&gt;
	 *            &lt;/xml&gt;
	 *        &lt;/nested&gt;
	 *    &lt;/deeply&gt;
	 * 
	 * If this Reader is being used by a [TreeStore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.TreeStore.html) to read tree-structured data in which records
	 * are nested as descendant nodes of other records, then this lenient behaviour must be overridden by using a more specific
	 * child node selector as your [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) selector which will not select all descendants, such as:
	 * 
	 *    record: '>user'
	 * 
	 * # Response metadata
	 * 
	 * The server can return additional data in its response, such as the [total number of records](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-totalProperty) and
	 * the [success status of the response](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-successProperty). These are typically included in the XML response like
	 * this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;total&gt;100&lt;/total&gt;
	 *        &lt;success&gt;true&lt;/success&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * If these properties are present in the XML response they can be parsed out by the XmlReader and used by the Store
	 * that loaded it. We can set up the names of these properties by specifying a final pair of configuration options:
	 * 
	 *    reader: {
	 *        type: 'xml',
	 *        rootProperty: 'users',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success'
	 *    }
	 * 
	 * These final options are not necessary to make the Reader work, but can be useful when the server needs to report an
	 * error or if it needs to indicate that there is a lot of data available of which only a subset is currently being
	 * returned.
	 * 
	 * # Response format
	 * 
	 * **Note:** in order for the browser to parse a returned XML document, the Content-Type header in the HTTP response
	 * must be set to "text/xml" or "application/xml". This is very important - the XmlReader will not work correctly
	 * otherwise.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * True to automatically parse models nested within other models in a response object. See the
		 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html) intro docs for full explanation.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		implicitIncludes?: boolean;
		/** 
		 * Determines if the Reader will keep raw data
		 * received from the server in the [rawData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#property-rawData) property.
		 * 
		 * While this might seem useful to do additional data processing, keeping raw data
		 * might cause adverse effects such as memory leaks. It is recommended to set
		 * `keepRawData` to `false` if you do not need the raw data.
		 * 
		 * If you need to process data packet to extract additional data such as row summaries,
		 * it is recommended to use [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-transform) function for that purpose.
		 * 
		 * Note that starting with Ext JS 6.0 the default behavior has been changed to
		 * **not** keep the raw data because of the high potential for memory leaks.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		keepRawData?: boolean;
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
		 * The name of the property which contains a response message for exception handling. If you want to return a false success
		 * response from the server, maybe due to some server-side validation, the messageProperty can hold the error message. For
		 * example:
		 * 
		 *    {
		 *        "success": false,
		 *        "error": "There was an error with your request"
		 *    }
		 * 
		 * You can retrieve this error message in a callback when loading a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) or [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) like:
		 * 
		 *    var store = new Ext.data.Store({
		 *        fields : ['foo'],
		 *        proxy  : {
		 *            type   : 'ajax',
		 *            url    : 'data.json',
		 *            reader : {
		 *                type            : 'json',
		 *                rootProperty    : 'data',
		 *                messageProperty : 'error'
		 *            }
		 *        }
		 *    });
		 *    
		 *    store.load({
		 *        callback: function(records, operation, success) {
		 *            if (success) {
		 *                // ...
		 *            } else {
		 *                var error = operation.getError();
		 *    
		 *                Ext.Msg.alert('Error', error);
		 *            }
		 *        }
		 *    });
		 * 
		 * In this example, the callback will execute with `success` being `false` and will therefore show the [Ext.Msg.alert](https://docs.sencha.com/extjs/6.2.0/modern/Ext.MessageBox.html#method-alert) with
		 * the error string returned in the response.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		messageProperty?: string;
		/** 
		 * The model to use for this reader. This config is only required if the reader is being used
		 * without a proxy, otherwise the proxy will automatically set the model.
		 * @configuration
		 * @optional
		 * @type {string|Ext.data.Model}
		 */
		model?: string | Ext.data.Model;
		/** 
		 * A namespace prefix that will be prepended to the field name when reading a
		 * field from an XML node.  Take, for example, the following Model:
		 * 
		 *    Ext.define('Foo', {
		 *        extend: 'Ext.data.Model',
		 *        fields: ['bar', 'baz']
		 *    });
		 * 
		 * The reader would need to be configured with a namespace of 'n' in order to read XML
		 * data in the following format:
		 * 
		 *    &lt;foo&gt;
		 *        &lt;n:bar&gt;bar&lt;/n:bar&gt;
		 *        &lt;n:baz&gt;baz&lt;/n:baz&gt;
		 *    &lt;/foo&gt;
		 * 
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		namespace?: string;
		/** 
		 * The proxy attached to this reader. Typically only needed onMetaChange so that
		 * we can set the new model on the proxy.
		 * @configuration
		 * @optional
		 * @type {Ext.data.proxy.Proxy}
		 */
		proxy?: Ext.data.proxy.Proxy;
		/** 
		 * True to extract the records from a data packet even if the [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#cfg-successProperty) returns false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		readRecordsOnFailure?: boolean;
		/** 
		 * The DomQuery path to the repeated element which contains record information.
		 * 
		 * By default, the elements which match the selector may be nested at any level
		 * below the [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty)
		 * 
		 * If this Reader is being used by a [TreeStore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.TreeStore.html) to read tree-structured data,
		 * then only first generation child nodes of the root element must be selected, so the record selector must be
		 * specified with a more specific selector which will not select all descendants. For example:
		 * 
		 *    record: '>node'
		 * @configuration
		 * @required
		 * @default ''
		 * @type {string}
		 */
		record: string;
		/** 
		 * The property that contains data items corresponding to the
		 * Model(s) of the configured Reader. `rootProperty` varies by Reader type.
		 * 
		 * ## JSON Reader
		 * 
		 * `rootProperty` is a property name. It may also be a dot-separated
		 * list of property names if the root is nested. The root JSON array will be
		 * used by default.
		 * 
		 *    // rootPropety config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [{
		 *                name: 'Scott',
		 *                age: 22
		 *            }, {
		 *                name: 'Ramona',
		 *                age: 24
		 *            }]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## XML Reader
		 * 
		 * `rootProperty` is a CSS selector. The root XML element will be used
		 * by default.
		 * 
		 *    // rootProperty config (plus record config)
		 *    rootProperty: 'myresults',
		 *    record: 'user'
		 *    
		 *    // server response
		 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
		 *    &lt;embedded&gt;
		 *        &lt;myresults&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Scott&lt;/name&gt;
		 *                &lt;age&gt;22&lt;/age&gt;
		 *            &lt;/user&gt;
		 *            &lt;user&gt;
		 *                &lt;name&gt;Ramona&lt;/name&gt;
		 *                &lt;age&gt;24&lt;/age&gt;
		 *            &lt;/user&gt;
		 *        &lt;/myresults&gt;
		 *    &lt;/embedded&gt;
		 * 
		 * ## Array Reader
		 * 
		 * `rootProperty` is not typically applicable since the data is assumed to be a
		 * single-level array of arrays.  However, if the array of records is returned
		 * within a JSON response a `rootProperty` config may be used:
		 * 
		 *    // rootProperty config
		 *    rootProperty: 'embedded.myresults'
		 *    
		 *    // server response
		 *    {
		 *        embedded: {
		 *            myresults: [['Scott', 22], ['Ramona', 24]]
		 *        },
		 *        success: true
		 *    }
		 * 
		 * ## rootProperty as a function
		 * 
		 * The `rootProperty` may also be a function that returns the root node from
		 * the dataset. For example:
		 * 
		 *    var store = Ext.create('Ext.data.TreeStore', {
		 *        proxy: {
		 *            type: 'memory',
		 *            reader: {
		 *                type: 'json',
		 *                rootProperty: function(data){
		 *                    // Extract child nodes from the items or children property in the dataset
		 *                    return data.items || data.children;
		 *                }
		 *            }
		 *        }, 
		 *        data: {
		 *            items: [{
		 *                text: 'item 1',
		 *                children: [{
		 *                    text: 'child A',
		 *                    leaf: true
		 *                }]
		 *            }]
		 *        }
		 *    });
		 *    
		 *    Ext.create('Ext.tree.Panel', {
		 *        title: 'rootProperty as a function',
		 *        width: 200,
		 *        height:150,
		 *        store: store,
		 *        rootVisible: false,
		 *        renderTo: Ext.getBody()
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {ExtGlobalFunction|string}
		 */
		rootProperty?: ExtGlobalFunction | string;
		/** 
		 * Name of the property from which to retrieve the `success` attribute, the value of which indicates
		 * whether a given request succeeded or failed (typically a boolean or 'true'|'false'). See
		 * [Ext.data.proxy.Server](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html).[exception](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Server.html#event-exception) for additional information.
		 * @configuration
		 * @optional
		 * @default 'success'
		 * @type {string}
		 */
		successProperty?: string;
		/** 
		 * Name of the property from which to retrieve the total number of records in the dataset. This is only needed if
		 * the whole dataset is not passed in one go, but is being paged from the remote server.
		 * @configuration
		 * @optional
		 * @default 'total'
		 * @type {string}
		 */
		totalProperty?: string;
		/** 
		 * If a transform function is set, it will be invoked just before [readRecords](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html#method-readRecords) executes.
		 * It is passed the raw (deserialized) data object. The transform function returns a data object, which can be
		 * a modified version of the original data object, or a completely new data object. The transform can
		 * be a function, or a method name on the Reader instance, or an object with a 'fn' key
		 * and an optional 'scope' key.
		 * 
		 * Example usage:
		 * 
		 *    Ext.create('Ext.data.Store', {
		 *        model: 'User',
		 *        proxy: {
		 *            type: 'ajax',
		 *            url : 'users.json',
		 *            reader: {
		 *                type: 'json',
		 *                transform: {
		 *                    fn: function(data) {
		 *                        // do some manipulation of the raw data object
		 *                        return data;
		 *                    },
		 *                    scope: this
		 *                }
		 *            }
		 *        },
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @type {ExtGlobalFunction|string|object}
		 */
		transform?: ExtGlobalFunction | string | object;
		/** 
		 * The name of the property in a node raw data block which indicates the type of the model to be created from that raw data. Useful for heterogeneous trees.
		 * 
		 * For example, hierarchical geographical data may look like this:
		 * 
		 *    {
		 *        nodeType: 'Territory',
		 *        name: 'EMEA',
		 *        children: [{
		 *            nodeType: 'Country',
		 *            name: 'United Kingdon',
		 *            children: [{
		 *                nodeType: 'City',
		 *                name: 'London'
		 *            }]
		 *        }]
		 *    }
		 * 
		 * You would configure the typeProperty in this case to be `"nodeType"` which would cause the models named "Territory", "Country" and "City" to
		 * be used.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		typeProperty?: string;
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
		 * @returns {Ext.data.reader.Xml.Statics}        this
		 */
		initConfig? (config: object): Ext.data.reader.Xml.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                      [value] The value to set for the name parameter.
		 * @returns {Ext.data.reader.Xml.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.reader.Xml.Statics;
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
		 * @returns {Ext.data.reader.Xml.Statics}  
		 */
		statics? (): Ext.data.reader.Xml.Statics;
	}
}
declare namespace Ext.data.reader.Array {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.data.reader.Array](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Array.html)
	 * Data reader class to create an Array of [Ext.data.Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) objects from an Array.
	 * Each element of that Array represents a row of data fields. The
	 * fields are pulled into a Record object using as a subscript, the `mapping` property
	 * of the field definition if it exists, or the field's ordinal position in the definition.
	 * 
	 * <u>Example code:</u>
	 * 
	 *    Employee = Ext.define('Employee', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id',
	 *            {name: 'name', mapping: 1},         // "mapping" only needed if an "id" field is present which
	 *            {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        
	 *        ]
	 *    });
	 *    
	 *    var myReader = new Ext.data.reader.Array({
	 *        model: 'Employee'
	 *    }, Employee);
	 * 
	 * This would consume an Array like this:
	 * 
	 *    [ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the reader receives improperly encoded data from the server
		 * @event
		 * @param   {Ext.data.reader.Reader} reader   A reference to this reader
		 * @param   {XMLHttpRequest}         response The XMLHttpRequest response object
		 * @param   {Ext.data.ResultSet}     error    The error object
		 * @param   {object}                 eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                   
		 */
		exception? (reader: Ext.data.reader.Reader, response: XMLHttpRequest, error: Ext.data.ResultSet, eOpts: object): void;
	}
}
declare namespace Ext.data.reader.Json {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.data.reader.Json](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html)
	 * The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually
	 * happens as a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're
	 * not already familiar with them.
	 * 
	 * We created the simplest type of JSON Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s
	 * [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a JSON Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        model: 'User'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    [
	 *        {
	 *            "id": 1,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        },
	 *        {
	 *            "id": 2,
	 *            "name": "Abe Elias",
	 *            "email": "abe@sencha.com"
	 *        }
	 *    ]
	 * 
	 * ## Reading other JSON formats
	 * 
	 * If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually
	 * pass JsonReader a couple of configuration options to make it parse your format. For example, we can use the
	 * [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration to parse data that comes back like this:
	 * 
	 *    {
	 *        "users": [
	 *           {
	 *               "id": 1,
	 *               "name": "Ed Spencer",
	 *               "email": "ed@sencha.com"
	 *           },
	 *           {
	 *               "id": 2,
	 *               "name": "Abe Elias",
	 *               "email": "abe@sencha.com"
	 *           }
	 *        ]
	 *    }
	 * 
	 * To parse this we just pass in a [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty) configuration that matches the 'users' above:
	 * 
	 *    reader: {
	 *        type: 'json',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata
	 * around each record inside a nested structure like this:
	 * 
	 *    {
	 *        "total": 122,
	 *        "offset": 0,
	 *        "users": [
	 *            {
	 *                "id": "ed-spencer-1",
	 *                "value": 1,
	 *                "user": {
	 *                    "id": 1,
	 *                    "name": "Ed Spencer",
	 *                    "email": "ed@sencha.com"
	 *                }
	 *            }
	 *        ]
	 *    }
	 * 
	 * In the case above the record data is nested an additional level inside the "users" array as each "user" item has
	 * additional metadata surrounding it ('id' and 'value' in this case). To parse data out of each "user" item in the
	 * JSON above we need to specify the [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-record) configuration like this:
	 * 
	 *    reader: {
	 *        type  : 'json',
	 *        rootProperty  : 'users',
	 *        record: 'user'
	 *    }
	 * 
	 * ## Response MetaData
	 * 
	 * The server can return metadata in its response, in addition to the record data, that describe attributes
	 * of the data set itself or are used to reconfigure the Reader. To pass metadata in the response you simply
	 * add a `metaData` attribute to the root of the response data. The metaData attribute can contain anything,
	 * but supports a specific set of properties that are handled by the Reader if they are present:
	 * 
	 * - [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-rootProperty): the property name of the root response node containing the record data
	 * - [totalProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-totalProperty): property name for the total number of records in the data
	 * - [successProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-successProperty): property name for the success status of the response
	 * - [messageProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#cfg-messageProperty): property name for an optional response message
	 * - [fields](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-fields): Config used to reconfigure the Model's fields before converting the
	 *   response data into records
	 * 
	 * An initial Reader configuration containing all of these properties might look like this ("fields" would be
	 * included in the Model definition, not shown):
	 * 
	 *    reader: {
	 *        type : 'json',
	 *        rootProperty : 'root',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success',
	 *        messageProperty: 'message'
	 *    }
	 * 
	 * If you were to pass a response object containing attributes different from those initially defined above, you could
	 * use the `metaData` attribute to reconfigure the Reader on the fly. For example:
	 * 
	 *    {
	 *        "count": 1,
	 *        "ok": true,
	 *        "msg": "Users found",
	 *        "users": [{
	 *            "userId": 123,
	 *            "name": "Ed Spencer",
	 *            "email": "ed@sencha.com"
	 *        }],
	 *        "metaData": {
	 *            "rootProperty": "users",
	 *            "totalProperty": 'count',
	 *            "successProperty": 'ok',
	 *            "messageProperty": 'msg'
	 *        }
	 *    }
	 * 
	 * You can also place any other arbitrary data you need into the `metaData` attribute which will be ignored by the Reader,
	 * but will be accessible via the Reader's [metaData](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Json.html#property-metaData) property (which is also passed to listeners via the Proxy's
	 * [metachange](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#event-metachange) event (also relayed by the store). Application code can then
	 * process the passed metadata in any way it chooses.
	 * 
	 * A simple example for how this can be used would be customizing the fields for a Model that is bound to a grid. By passing
	 * the `fields` property the Model will be automatically updated by the Reader internally, but that change will not be
	 * reflected automatically in the grid unless you also update the column configuration. You could do this manually, or you
	 * could simply pass a standard grid column config object as part of the `metaData` attribute
	 * and then pass that along to the grid. Here's a very simple example for how that could be accomplished:
	 * 
	 *    // response format:
	 *    {
	 *        ...
	 *        "metaData": {
	 *            "fields": [
	 *                { "name": "userId", "type": "int" },
	 *                { "name": "name", "type": "string" },
	 *                { "name": "birthday", "type": "date", "dateFormat": "Y-j-m" },
	 *            ],
	 *            "columns": [
	 *                { "text": "User ID", "dataIndex": "userId", "width": 40 },
	 *                { "text": "User Name", "dataIndex": "name", "flex": 1 },
	 *                { "text": "Birthday", "dataIndex": "birthday", "flex": 1, "format": 'Y-j-m', "xtype": "datecolumn" }
	 *            ]
	 *        }
	 *    }
	 * 
	 * The Reader will automatically read the meta fields config and rebuild the Model based on the new fields, but to handle
	 * the new column configuration you would need to handle the metadata within the application code. This is done simply enough
	 * by handling the metachange event on either the store or the proxy, e.g.:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        ...
	 *        listeners: {
	 *            'metachange': function(store, meta) {
	 *                myGrid.reconfigure(store, meta.columns);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the reader receives improperly encoded data from the server
		 * @event
		 * @param   {Ext.data.reader.Reader} reader   A reference to this reader
		 * @param   {XMLHttpRequest}         response The XMLHttpRequest response object
		 * @param   {Ext.data.ResultSet}     error    The error object
		 * @param   {object}                 eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                   
		 */
		exception? (reader: Ext.data.reader.Reader, response: XMLHttpRequest, error: Ext.data.ResultSet, eOpts: object): void;
	}
}
declare namespace Ext.data.reader.Reader {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html)
	 * Readers are used to interpret data to be loaded into a [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) instance or a [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) - often in response to an AJAX request. In general there is usually no need to create
	 * a Reader instance directly, since a Reader is almost always used together with a [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html),
	 * and is configured using the Proxy's [reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html#cfg-reader) configuration property:
	 * 
	 *    Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        },
	 *    });
	 * 
	 * The above reader is configured to consume a JSON string that looks something like this:
	 * 
	 *    {
	 *        "success": true,
	 *        "users": [
	 *            { "name": "User 1" },
	 *            { "name": "User 2" }
	 *        ]
	 *    }
	 * 
	 * # Loading Nested Data
	 * 
	 * Readers have the ability to automatically load deeply-nested data objects based on the [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * configured on each Model. Below is an example demonstrating the flexibility of these associations in a
	 * fictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:
	 * 
	 *    Ext.define("User", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: {model: 'Order', name: 'orders'},
	 *    
	 *        proxy: {
	 *            type: 'rest',
	 *            url : 'users.json',
	 *            reader: {
	 *                type: 'json',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 *    
	 *    Ext.define("Order", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'total'
	 *        ],
	 *    
	 *        hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},
	 *        belongsTo: 'User'
	 *    });
	 *    
	 *    Ext.define("OrderItem", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'price', 'quantity', 'order_id', 'product_id'
	 *        ],
	 *    
	 *        belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]
	 *    });
	 *    
	 *    Ext.define("Product", {
	 *        extend: 'Ext.data.Model',
	 *        fields: [
	 *            'id', 'name'
	 *        ],
	 *    
	 *        hasMany: 'OrderItem'
	 *    });
	 * 
	 * This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.
	 * Finally, each OrderItem has a single Product. This allows us to consume data like this:
	 * 
	 *    {
	 *        "users": [
	 *            {
	 *                "id": 123,
	 *                "name": "Ed",
	 *                "orders": [
	 *                    {
	 *                        "id": 50,
	 *                        "total": 100,
	 *                        "order_items": [
	 *                            {
	 *                                "id"      : 20,
	 *                                "price"   : 40,
	 *                                "quantity": 2,
	 *                                "product" : {
	 *                                    "id": 1000,
	 *                                    "name": "MacBook Pro"
	 *                                }
	 *                            },
	 *                            {
	 *                                "id"      : 21,
	 *                                "price"   : 20,
	 *                                "quantity": 3,
	 *                                "product" : {
	 *                                    "id": 1001,
	 *                                    "name": "iPhone"
	 *                                }
	 *                            }
	 *                        ]
	 *                    }
	 *                ]
	 *            }
	 *        ]
	 *    }
	 * 
	 * The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the
	 * Orders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),
	 * and finally the Product associated with each OrderItem. Now we can read the data and use it as follows:
	 * 
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: "User"
	 *    });
	 *    
	 *    store.load({
	 *        callback: function() {
	 *            //the user that was loaded
	 *            var user = store.first();
	 *    
	 *            console.log("Orders for " + user.get('name') + ":")
	 *    
	 *            //iterate over the Orders for each User
	 *            user.orders().each(function(order) {
	 *                console.log("Order ID: " + order.getId() + ", which contains items:");
	 *    
	 *                //iterate over the OrderItems for each Order
	 *                order.orderItems().each(function(orderItem) {
	 *                    //we know that the Product data is already loaded, so we can use the synchronous getProduct
	 *                    //usually, we would use the asynchronous version (see #belongsTo)
	 *                    var product = orderItem.getProduct();
	 *    
	 *                    console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
	 *                });
	 *            });
	 *        }
	 *    });
	 * 
	 * Running the code above results in the following:
	 * 
	 *    Orders for Ed:
	 *    Order ID: 50, which contains items:
	 *    2 orders of MacBook Pro
	 *    3 orders of iPhone
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the reader receives improperly encoded data from the server
		 * @event
		 * @param   {Ext.data.reader.Reader} reader   A reference to this reader
		 * @param   {XMLHttpRequest}         response The XMLHttpRequest response object
		 * @param   {Ext.data.ResultSet}     error    The error object
		 * @param   {object}                 eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                   
		 */
		exception? (reader: Ext.data.reader.Reader, response: XMLHttpRequest, error: Ext.data.ResultSet, eOpts: object): void;
	}
}
declare namespace Ext.data.reader.Xml {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.data.reader.Xml](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html)
	 * The XML Reader is used by a Proxy to read a server response that is sent back in XML format. This usually happens as
	 * a result of loading a Store - for example we might create something like this:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', 'email']
	 *    });
	 *    
	 *    var store = Ext.create('Ext.data.Store', {
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url : 'users.xml',
	 *            reader: {
	 *                type: 'xml',
	 *                record: 'user',
	 *                rootProperty: 'users'
	 *            }
	 *        }
	 *    });
	 * 
	 * The example above creates a 'User' model. Models are explained in the [Model](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) docs if you're not
	 * already familiar with them.
	 * 
	 * We created the simplest type of XML Reader possible by simply telling our [Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html)'s [Proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) that we want a XML Reader. The Store automatically passes the configured model to the
	 * Store, so it is as if we passed this instead:
	 * 
	 *    reader: {
	 *        type : 'xml',
	 *        model: 'User',
	 *        record: 'user',
	 *        rootProperty: 'users'
	 *    }
	 * 
	 * The reader we set up is ready to read data from our server - at the moment it will accept a response like this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * First off there's [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) option to define the root node `&lt;users&gt;` (there should be only one in a well-formed
	 * XML document). Then the XML Reader uses the configured [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) option to pull out the data for each record -
	 * in this case we set record to 'user', so each `&lt;user&gt;` above will be converted into a User model.
	 * 
	 * Note that XmlReader doesn't care whether your [rootProperty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-rootProperty) and [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) elements are nested deep inside a
	 * larger structure, so a response like this will still work:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;deeply&gt;
	 *        &lt;nested&gt;
	 *            &lt;xml&gt;
	 *                &lt;users&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;1&lt;/id&gt;
	 *                        &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *                        &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                    &lt;user&gt;
	 *                        &lt;id&gt;2&lt;/id&gt;
	 *                        &lt;name&gt;Abe Elias&lt;/name&gt;
	 *                        &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *                    &lt;/user&gt;
	 *                &lt;/users&gt;
	 *            &lt;/xml&gt;
	 *        &lt;/nested&gt;
	 *    &lt;/deeply&gt;
	 * 
	 * If this Reader is being used by a [TreeStore](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.TreeStore.html) to read tree-structured data in which records
	 * are nested as descendant nodes of other records, then this lenient behaviour must be overridden by using a more specific
	 * child node selector as your [record](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-record) selector which will not select all descendants, such as:
	 * 
	 *    record: '>user'
	 * 
	 * # Response metadata
	 * 
	 * The server can return additional data in its response, such as the [total number of records](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-totalProperty) and
	 * the [success status of the response](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Xml.html#cfg-successProperty). These are typically included in the XML response like
	 * this:
	 * 
	 *    &lt;?xml version="1.0" encoding="UTF-8"?&gt;
	 *    &lt;users&gt;
	 *        &lt;total&gt;100&lt;/total&gt;
	 *        &lt;success&gt;true&lt;/success&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;1&lt;/id&gt;
	 *            &lt;name&gt;Ed Spencer&lt;/name&gt;
	 *            &lt;email&gt;ed@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *        &lt;user&gt;
	 *            &lt;id&gt;2&lt;/id&gt;
	 *            &lt;name&gt;Abe Elias&lt;/name&gt;
	 *            &lt;email&gt;abe@sencha.com&lt;/email&gt;
	 *        &lt;/user&gt;
	 *    &lt;/users&gt;
	 * 
	 * If these properties are present in the XML response they can be parsed out by the XmlReader and used by the Store
	 * that loaded it. We can set up the names of these properties by specifying a final pair of configuration options:
	 * 
	 *    reader: {
	 *        type: 'xml',
	 *        rootProperty: 'users',
	 *        totalProperty  : 'total',
	 *        successProperty: 'success'
	 *    }
	 * 
	 * These final options are not necessary to make the Reader work, but can be useful when the server needs to report an
	 * error or if it needs to indicate that there is a lot of data available of which only a subset is currently being
	 * returned.
	 * 
	 * # Response format
	 * 
	 * **Note:** in order for the browser to parse a returned XML document, the Content-Type header in the HTTP response
	 * must be set to "text/xml" or "application/xml". This is very important - the XmlReader will not work correctly
	 * otherwise.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the reader receives improperly encoded data from the server
		 * @event
		 * @param   {Ext.data.reader.Reader} reader   A reference to this reader
		 * @param   {XMLHttpRequest}         response The XMLHttpRequest response object
		 * @param   {Ext.data.ResultSet}     error    The error object
		 * @param   {object}                 eOpts    The options object passed to [Ext.util.Observable.addListener](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Observable.html#method-addListener).
		 * @returns {void}                   
		 */
		exception? (reader: Ext.data.reader.Reader, response: XMLHttpRequest, error: Ext.data.ResultSet, eOpts: object): void;
	}
}
