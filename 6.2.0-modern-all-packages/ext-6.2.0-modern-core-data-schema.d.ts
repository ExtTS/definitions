declare namespace Ext.data.schema {
	/** 
	 * [Ext.data.schema.Association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Associations enable you to express relationships between different [Models](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). Consider
	 * an ecommerce system where Users can place Orders - there is a one to many relationship between these Models,
	 * one user can have many orders (including 0 orders). Here is what a sample implementation of this association
	 * could look like. This example will be referred to in the following sections.
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name']
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, {
	 *            name: 'userId',
	 *            type: 'int',
	 *            reference: 'User'
	 *        }]
	 *    });
	 * 
	 * # Association Types
	 * 
	 * Assocations can describe relationships in 3 ways:
	 * 
	 * ## Many To One
	 * 
	 * A single entity (`A`) has a relationship with many (`B`) entities. An example of this is
	 * an ecommerce system `User` can have many `Order` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html) for keyless associations.
	 * 
	 * ## One To One
	 * 
	 * A less common form of Many To One, a single entity (`A`) has a relationship with at most 1 entity (`B`). This is often
	 * used when partitioning data. For example a `User` may have a single `UserInfo` object that stores extra
	 * metadata about the user.
	 * 
	 * This can be defined using [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html) for keyless associations.
	 * 
	 * ## Many To Many
	 * 
	 * An entity (`A`) may have a have a relationship with many (`B`) entities. That (`B`) entity may also
	 * have a relationship with many `A` entities. For example a single `Student` can have many `Subject` entities and
	 * a single `Subject` can have many `Student` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html). Many To Many relationships are readonly unless used with
	 * a [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html).
	 * 
	 * # Keyed vs Keyless Associations
	 * 
	 * Associations can be declared in 2 ways, which are outlined below.
	 * 
	 * ## Keyed associations
	 * 
	 * A keyed association relies on a field in the model matching the id of another model. Membership is driven by the key.
	 * This is the type of relationship that is typically used in a relational database.
	 * This is declared using the ||reference|| configuration on a model field. An example of this can be seen
	 * above for `User/Order`.
	 * 
	 * # Keyless associations
	 * 
	 * A keyless association relies on data hierarchy to determine membership. Items are members because they are
	 * contained by another entity. This type of relationship is common with NoSQL databases.
	 * formats. A simple example definition using `User/Order`:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name'],
	 *        hasMany: 'Order'
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }]
	 *    });
	 * 
	 * # Advantages of Associations
	 * 
	 * Assocations make it easier to work with Models that share a connection. Some of the main functionality includes:
	 * 
	 * ## Generated Accessors/Setters
	 * 
	 * Associated models will automatically generate named methods that allow for accessing the associated data.
	 * The names for these are created using a [Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html), to provide a consistent and
	 * predictable naming structure.
	 * 
	 * Using the example code above, there will be 3 generated methods:
	 * + `User` will have an `orders()` function that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) of`Orders`.
	 * + `Order` will have a `getUser` method which will return a `User` Model.
	 * + `Order` will have a `setUser` method that will accept a `User` model or a key value.
	 * 
	 * ## Nested Loading
	 * 
	 * Nested loading is the ability to load hierarchical associated data from a remote source within a single request.
	 * In the following example, each `User` in the `users` store has an `orders` store. Each `orders` store is populated
	 * with `Order` models read from the request. Each `Order` model also has a reference back to the appropriate `User`.
	 * 
	 *    // Sample JSON data returned by /Users
	 *    [{
	 *        "id": 1,
	 *        "name": "User Foo",
	 *        "orders": [{
	 *            "id": 101,
	 *            "userId": 1
	 *        }, {
	 *            "id": 102,
	 *            "userId": 1
	 *        }, {
	 *            "id": 103,
	 *            "userId": 1
	 *        }]
	 *    }, {
	 *        "id": 2,
	 *        "name": "User Bar",
	 *        "orders": [{
	 *            "id": 201,
	 *            "userId": 2
	 *        }, {
	 *            "id": 202,
	 *            "userId": 2
	 *        }]
	 *    }]
	 *    
	 *    // Application code
	 *    var users = new Ext.data.Store({
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url: '/Users'
	 *        }
	 *    });
	 *    users.load(function() {
	 *        var user1 = users.first(),
	 *            user2 = users.last(),
	 *            orders1 = user1.orders(),
	 *            orders2 = user2.orders();
	 *    
	 *        // 3 orders, same reference back to user1
	 *        console.log(orders1.getCount(), orders1.first().getUser() === user1);
	 *        // 2 orders, same reference back to user2
	 *        console.log(orders2.getCount(), orders2.first().getUser() === user2);
	 *    });
	 * 
	 * ## Binding
	 * 
	 * Data binding using [ViewModels](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) have functionality to be able to recognize
	 * associated data as part of a bind statement. For example:
	 * + `{user.orders}` binds to the orders store for a user.
	 * + `{order.user.name}` binds to the name of the user taken from the order.
	 * 
	 * # Association Concepts
	 * 
	 * ## Roles
	 * 
	 * The role is used to determine generated names for an association. By default, the role is generated from
	 * either the field name (in a keyed association) or the model name. This naming follows a pattern defined by
	 * the [`Ext.data.schema.Namer`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html). To change a specific instance, an explicit role can be specified:
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: {
	 *                type: 'Thread',
	 *                role: 'discussion',
	 *                inverse: 'comments'
	 *    
	 *            }
	 *        }]
	 *    });
	 * 
	 * In the above example, the `Thread` will be decorated with a `comments` method that returns the store.
	 * The `Post` will be decorated with `getDiscussion/setDiscussion` methods.
	 * 
	 * ## Generated Methods
	 * 
	 * Associations generate methods to allow reading and manipulation on associated data.
	 * 
	 * On records that have a "to many" relationship, a single methods that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) is created.
	 * See [storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). On records that have a "to one" relationship, 2 methods are generated, a
	 * [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and a [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 * 
	 * ## Reflexive
	 * 
	 * Associations are reflexive. By declaring one "side" of the relationship, the other is automatically setup. In
	 * the example below, there is no code in the `Thread` entity regarding the association, however by virtue of the
	 * declaration in post, `Thread` is decorated with the appropriate infrastructure to participate in the association.
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: 'Thread'
	 *        }]
	 *    });
	 * 
	 * ## Naming
	 * 
	 * Referring to model names in associations depends on their [Ext.data.Model.entityName](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName). See
	 * the "Relative Naming" section in the [`Ext.data.schema.Schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html) documentation.
	 */
	class Association extends Ext.Base {
		/** 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {Ext.Class}
		 */
		readonly definedBy?: Ext.Class;
		/** 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {Ext.data.field.Field}
		 */
		readonly field?: Ext.data.field.Field;
		/** 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {Ext.data.schema.Role}
		 */
		readonly left?: Ext.data.schema.Role;
		/** 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {boolean}
		 */
		readonly nullable?: boolean;
		/** 
		 * Points at either `left` or `right` objects if one is the owning party in this
		 * association or is `null` if there is no owner.
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {object}
		 */
		readonly owner?: object;
		/** 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {Ext.data.schema.Role}
		 */
		readonly right?: Ext.data.schema.Role;
		/** 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {Ext.data.schema.Schema}
		 */
		readonly schema?: Ext.data.schema.Schema;
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
		 * @type {Ext.data.schema.Association.Statics}
		 */
		self?: Ext.data.schema.Association.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		isManyToMany?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		isManyToOne?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		isOneToOne?: boolean;
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
		 * @param   {object}                               members    The members to add to this class.
		 * @param   {boolean}                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.Association|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @param   {object}                               members
		 * @returns {Ext.data.schema.Association|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                               name
		 * @param   {object}                               member
		 * @returns {Ext.data.schema.Association|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                               fn
		 * @param   {object}                               scope
		 * @returns {Ext.data.schema.Association|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
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
		 * ** This is not a real method, it is placeholder documentation for a generated method on a [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). **
		 * 
		 * Gets a model of the "one" type.
		 * @method
		 * @public (method)
		 * @param   {Function|object|Ext.data.schema.Association.methodParams.recordGetter.Options} [options]
		 * The options for the getter, or a callback function to execute. If specified as
		 * a function, it will act as the `callback` option.
		 * @param   {boolean}                                                                       [options.reload]   `true` to force the record to reload from the server.
		 * @param   {object}                                                                        [options.scope]    The `this` reference for the callback. Defaults to the record.
		 * @param   {Function}                                                                      [options.success]
		 * A function to execute when the record loads successfully.
		 * If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @param   {Function}                                                                      [options.failure]
		 * A function to execute when the record load fails.
		 * If the record has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @param   {Function}                                                                      [options.callback]
		 * A function to execute when the record loads, whether it is successful
		 * or failed. If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @param   {void}                                                                          [options.returns]
		 * @param   {object}                                                                        [scope]            The `this` reference for the callback. Defaults to the record.
		 * @returns {Ext.data.Model}                                                                                   The record. `null` if the reference has been previously specified as empty.
		 */
		recordGetter? (options?: ((reload?: boolean, scope?: object, success?: ExtGlobalFunction, failure?: ExtGlobalFunction, callback?: ExtGlobalFunction) => void) | ExtGlobalFunction | object | Ext.data.schema.Association.methodParams.recordGetter.Options, scope?: object): Ext.data.Model;
		/** 
		 * ** This is not a real method, it is placeholder documentation for a generated method on a [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). **
		 * 
		 * Sets a model of the "one" type.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model|object} value
		 * The value to set. This can be a model instance, a key value (if a keyed association) or `null`
		 * to clear the value.
		 * @param   {Function|object}       [options]
		 * Options to handle callback. If specified as
		 * a function, it will act as the `callback` option. If specified as an object, the params are the same as
		 * [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save). If  options is specified, [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save) will be called on this record.
		 * @returns {void}                            
		 */
		recordSetter? (value: Ext.data.Model | object, options?: ExtGlobalFunction | object): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.Association|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.Association;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * ** This is not a real method, it is placeholder documentation for a generated method on a [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). **
		 * 
		 * Gets a store configured with the model of the "many" record.
		 * @method
		 * @public (method)
		 * @param   {Function|object|Ext.data.schema.Association.methodParams.storeGetter.Options} [options]
		 * The options for the getter, or a callback function to execute. If specified as
		 * a function, it will act as the `callback` option.
		 * @param   {boolean}                                                                      [options.reload]   `true` to force the store to reload from the server.
		 * @param   {object}                                                                       [options.scope]    The `this` reference for the callback. Defaults to the record.
		 * @param   {Function}                                                                     [options.success]
		 * A function to execute when the store loads successfully.
		 * If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @param   {Function}                                                                     [options.failure]
		 * A function to execute when the store load fails.
		 * If the store has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @param   {Function}                                                                     [options.callback]
		 * A function to execute when the store loads, whether it is successful
		 * or failed. If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @param   {void}                                                                         [options.returns]
		 * @param   {object}                                                                       [scope]            The `this` reference for the callback. Defaults to the record.
		 * @returns {Ext.data.Store}                                                                                  The store.
		 */
		storeGetter? (options?: ((reload?: boolean, scope?: object, success?: ExtGlobalFunction, failure?: ExtGlobalFunction, callback?: ExtGlobalFunction) => void) | ExtGlobalFunction | object | Ext.data.schema.Association.methodParams.storeGetter.Options, scope?: object): Ext.data.Store;
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
		 * @param   {object}                               config
		 * @returns {Ext.data.schema.Association|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.schema.Association;
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
		 * @returns {Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.schema.Association.Statics;
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
		 * @returns {void}  
		 */
		getFieldName? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hasField? (): void;
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
		 * @param   {string[]}                             names The names of the linked objects to destroy.
		 * @returns {Ext.data.schema.Association|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.schema.Association;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.schema.HasMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This class provides for creating a keyless [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) association. This declaration should
	 * be on "many" entity. See [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) and [`Ext.data.schema.Association`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) for more information.
	 */
	class HasMany {
	}
	/** 
	 * [Ext.data.schema.HasOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This class provides for creating a keyless [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) association. This declaration should
	 * be on "owner" entity. See [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) and [`Ext.data.schema.Association`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) for more information.
	 */
	class HasOne {
	}
	/** 
	 * [Ext.data.schema.ManyToMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html)
	 * This relationship describes the case where any one entity of one type may relate to any
	 * number of entities of another type, and also in the reverse.
	 * 
	 * This form of association cannot store id's in the related entities since that would
	 * limit the number of related entities to one for the entity with the foreign key. Instead,
	 * these relationships are typically implemented using a so-called "matrix" table. This
	 * table typically has two columns to hold the id's of a pair of related entities. This
	 * pair of id's is unique in the matrix table.
	 * 
	 * # Declaration Forms
	 * 
	 *     // Fully spelled out - all properties are their defaults:
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: {
	 *                     field: 'groupId',
	 *                     role: 'groups'
	 *                 }
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate "right" object and use boolean to indicate Group is on the
	 *     // right. By default, left/right is determined by alphabetic order.
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: true
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate object completely and rely on string to name the other type. Still
	 *     // keep Group on the "right".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: 'User#'   // '#' is on the side (left or right) of Group
	 *         }
	 *     });
	 *    
	 *     // Remove explicit matrix name and keep Group on the "right". Generated matrixName
	 *     // remains "UserGroups".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User#'
	 *         ]
	 *     });
	 *    
	 *     // Minimal definition but now Group is on the "left" since "Group" sorts before
	 *     // "User". Generated matrixName is now "GroupUsers".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User'
	 *         ]
	 *     });
	 * 
	 */
	class ManyToMany extends Ext.data.schema.Association {
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
		 * @type {Ext.data.schema.ManyToMany.Statics}
		 */
		self?: Ext.data.schema.ManyToMany.Statics | Ext.data.schema.Association.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isManyToMany?: boolean;
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
		 * @param   {object}                                                          members    The members to add to this class.
		 * @param   {boolean}                                                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.ManyToMany;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                          members
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.schema.ManyToMany;
		static addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                          name
		 * @param   {object}                                                          member
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.schema.ManyToMany;
		static addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                          fn
		 * @param   {object}                                                          scope
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.ManyToMany;
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
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
		 * ** This is not a real method, it is placeholder documentation for a generated method on a [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). **
		 * 
		 * Sets a model of the "one" type.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model|object} value
		 * The value to set. This can be a model instance, a key value (if a keyed association) or `null`
		 * to clear the value.
		 * @param   {Function|object}       [options]
		 * Options to handle callback. If specified as
		 * a function, it will act as the `callback` option. If specified as an object, the params are the same as
		 * [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save). If  options is specified, [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save) will be called on this record.
		 * @returns {void}                            
		 */
		recordSetter? (value: Ext.data.Model | object, options?: ExtGlobalFunction | object): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                   name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                          [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.ManyToMany;
		setConfig? (name: string | object, value?: object): Ext.data.schema.Association;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                                          config
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.schema.ManyToMany;
		initConfig? (config: object): Ext.data.schema.Association;
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
		 * @returns {Ext.data.schema.ManyToMany.Statics|Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.schema.ManyToMany.Statics;
		statics? (): Ext.data.schema.Association.Statics;
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
		 * @returns {void}  
		 */
		getFieldName? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hasField? (): void;
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
		 * @param   {string[]}                                                        names The names of the linked objects to destroy.
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.schema.ManyToMany;
		unlink? (names: string[]): Ext.data.schema.Association;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.schema.ManyToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Declares a relationship between a single entity type and multiple related entities. The relationship can
	 * be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name']
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title', {
	 *            name: 'customerId',
	 *            reference: 'Customer'
	 *        }]
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasMany: 'Ticket'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    // Generated methods
	 *    var customer = new Customer();
	 *    customer.tickets();
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.getCustomer();
	 *    ticket.setCustomer();
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * The "one" record type will have a generated [Ext.data.schema.Association.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). The "many" record type
	 * will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 */
	class ManyToOne extends Ext.data.schema.Association {
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
		 * @type {Ext.data.schema.ManyToOne.Statics}
		 */
		self?: Ext.data.schema.ManyToOne.Statics | Ext.data.schema.Association.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isManyToOne?: boolean;
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
		 * @param   {object}                                                         members    The members to add to this class.
		 * @param   {boolean}                                                        [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                        [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.ManyToOne;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                         members
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.schema.ManyToOne;
		static addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                         name
		 * @param   {object}                                                         member
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.schema.ManyToOne;
		static addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                         fn
		 * @param   {object}                                                         scope
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.ManyToOne;
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
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
		 * ** This is not a real method, it is placeholder documentation for a generated method on a [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). **
		 * 
		 * Sets a model of the "one" type.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model|object} value
		 * The value to set. This can be a model instance, a key value (if a keyed association) or `null`
		 * to clear the value.
		 * @param   {Function|object}       [options]
		 * Options to handle callback. If specified as
		 * a function, it will act as the `callback` option. If specified as an object, the params are the same as
		 * [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save). If  options is specified, [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save) will be called on this record.
		 * @returns {void}                            
		 */
		recordSetter? (value: Ext.data.Model | object, options?: ExtGlobalFunction | object): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                         [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.ManyToOne;
		setConfig? (name: string | object, value?: object): Ext.data.schema.Association;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                                         config
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.schema.ManyToOne;
		initConfig? (config: object): Ext.data.schema.Association;
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
		 * @returns {Ext.data.schema.ManyToOne.Statics|Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.schema.ManyToOne.Statics;
		statics? (): Ext.data.schema.Association.Statics;
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
		 * @returns {void}  
		 */
		getFieldName? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hasField? (): void;
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
		 * @param   {string[]}                                                       names The names of the linked objects to destroy.
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.schema.ManyToOne;
		unlink? (names: string[]): Ext.data.schema.Association;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.schema.Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html)
	 * This class provides name derivation methods for use by a `Schema`.
	 * 
	 * # Caching
	 * 
	 * Because most name derivations are only textual manipulations of input strings, the
	 * results can be cached. This is handled by the `apply` method by giving it the name of
	 * the method to call. For example:
	 * 
	 *     var str = namer.capitalize('foo'); //  = "Foo"
	 *    
	 *     var str = namer.apply('capitalize', 'foo');
	 * 
	 * The return value of the second call (using `apply`) is the same as the first, however,
	 * the results of `capitalize` are cached. This allows repeated calls to `apply` given the
	 * same operation and string to avoid the extra string manipulation.
	 * 
	 * # Usage
	 * 
	 * This class is not intended to be created by application code. It is created by `Schema`
	 * instances as directed by the `namer` config. Application code can derive from this
	 * class and set the `namer` config to customize naming conventions used by the `Schema`.
	 */
	class Namer extends Ext.Base {
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Factory.html).
		 * @property
		 * @public (property)
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
		 * @type {Ext.data.schema.Namer.Statics}
		 */
		self?: Ext.data.schema.Namer.Statics | Ext.Base.Statics;
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
		 * @returns {Ext.data.schema.Namer|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Namer;
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
		 * @param   {object}                         members
		 * @returns {Ext.data.schema.Namer|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.schema.Namer;
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
		 * @param   {object}                         name
		 * @param   {object}                         member
		 * @returns {Ext.data.schema.Namer|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.schema.Namer;
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
		 * @param   {object}                         fn
		 * @param   {object}                         scope
		 * @returns {Ext.data.schema.Namer|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.Namer;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
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
		 * Given the name of a foreign key field, return the role of the related entity. For
		 * example, fields like "fooId" or "foo_id" this implementation returns "foo".
		 * @method
		 * @public (method)
		 * @template
		 * @param   {object} name
		 * @returns {void}        
		 */
		fieldRole? (name: object): void;
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
		 * Returns the name for a one-to-many association given the left and right type and
		 * the associating `role`.
		 * 
		 * In many cases the `role` matches the target type. For example, an OrderItem might
		 * have an "orderId" field which would have a `role` of "order". If this is a reference
		 * to an Order entity then the association name will be "OrderOrderItems".
		 * 
		 * When the `role` does not match, it is included in the association name. For example,
		 * consider a Ticket entity with a "creatorId" field that references a User entity.
		 * The `role` of that field will (by default) be "creator". The returned association
		 * name will be "UserCreatorTickets".
		 * @method
		 * @public (method)
		 * @param   {object} leftType
		 * @param   {object} leftRole
		 * @param   {object} rightType
		 * @param   {object} rightRole
		 * @returns {void}             
		 */
		manyToOne? (leftType: object, leftRole: object, rightType: object, rightRole: object): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.Namer|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.Namer;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                         config
		 * @returns {Ext.data.schema.Namer|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.schema.Namer;
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
		 * @returns {Ext.data.schema.Namer.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.schema.Namer.Statics;
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
		 * @param   {string[]}                       names The names of the linked objects to destroy.
		 * @returns {Ext.data.schema.Namer|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.schema.Namer;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.schema.OneToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * This is a specialized version of [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) that declares a relationship between a single
	 * entity type and a single related entities. The relationship can be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', {
	 *            name: 'userInfoId',
	 *            reference: {
	 *                type: 'UserInfo',
	 *                unique: true
	 *            }
	 *        }]
	 *    });
	 *    
	 *    Ext.define('UserInfo', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasOne: 'UserInfo'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Generated methods
	 *    var user = new User();
	 *    user.getUserInfo();
	 *    user.setUserInfo();
	 *    
	 *    var info = new UserInfo();
	 *    info.getUser();
	 *    info.setUser();
	 *    
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.setCustomer(customer);
	 *    console.log(ticket.getCustomer()); // The customer object
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * Each record type will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 */
	class OneToOne extends Ext.data.schema.Association {
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
		 * @type {Ext.data.schema.OneToOne.Statics}
		 */
		self?: Ext.data.schema.OneToOne.Statics | Ext.data.schema.Association.Statics | Ext.Base.Statics;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isOneToOne?: boolean;
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
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.OneToOne;
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.schema.OneToOne;
		static addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                        name
		 * @param   {object}                                                        member
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.schema.OneToOne;
		static addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                        fn
		 * @param   {object}                                                        scope
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.OneToOne;
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
		static onExtended? (fn: object, scope: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @returns {void}  
		 */
		static triggerExtended? (): void;
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
		 * ** This is not a real method, it is placeholder documentation for a generated method on a [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). **
		 * 
		 * Sets a model of the "one" type.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Model|object} value
		 * The value to set. This can be a model instance, a key value (if a keyed association) or `null`
		 * to clear the value.
		 * @param   {Function|object}       [options]
		 * Options to handle callback. If specified as
		 * a function, it will act as the `callback` option. If specified as an object, the params are the same as
		 * [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save). If  options is specified, [Ext.data.Model.save](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#method-save) will be called on this record.
		 * @returns {void}                            
		 */
		recordSetter? (value: Ext.data.Model | object, options?: ExtGlobalFunction | object): void;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                                 name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                                        [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.OneToOne;
		setConfig? (name: string | object, value?: object): Ext.data.schema.Association;
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @param   {object}                                                        config
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.schema.OneToOne;
		initConfig? (config: object): Ext.data.schema.Association;
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
		 * @returns {Ext.data.schema.OneToOne.Statics|Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.schema.OneToOne.Statics;
		statics? (): Ext.data.schema.Association.Statics;
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
		 * @returns {void}  
		 */
		getFieldName? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		hasConfig? (config: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hasField? (): void;
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
		 * @param   {string[]}                                                      names The names of the linked objects to destroy.
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.schema.OneToOne;
		unlink? (names: string[]): Ext.data.schema.Association;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This documentation is for:
	 * 
	 * - [reference config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-reference)
	 * 
	 * The [name](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
	 * In most databases, this relationship is represented by a "foreign key". That is, a
	 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-idProperty)
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
	 * If a `reference` is not nullable, set the [Ext.data.field.Field.allowBlank](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-allowBlank) property
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
	 * If the name of the generated [association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) or other aspects
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
	 */
	class Reference {
	}
	/** 
	 * @private (class)
	 */
	class Role extends Ext.Base {}
	/** 
	 * [Ext.data.schema.Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html)
	 * A Schema is a collection of related [entities](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) and their respective
	 * [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html).
	 * 
	 * # Schema Instances
	 * 
	 * By default a single instance of this class is created which serves as the schema for all
	 * entities that do not have an explicit [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config
	 * either specified or inherited. This is sufficient in most cases.
	 * 
	 * When an entity does specify a [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema), however, that
	 * looks up (or creates) an instance for that entity class which is then inherited.
	 * 
	 * **Important:** All related entities _must_ belong to a single schema instance in order
	 * to properly link up their associations.
	 * 
	 * ## Configuring Schemas
	 * 
	 * The best way to control the configuration of your `schema` is to define a base class for
	 * all of your entities and use the [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config like
	 * this:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         // This configures the default schema because we don't assign an "id":
	 *         schema: {
	 *             // configs go here
	 *         }
	 *     });
	 * 
	 * **Note:** Only one explicit configuration can be applied to the default schema. In most
	 * applications this will not be an issue.
	 * 
	 * By using a base class for your entities you can ensure that the default schema is fully
	 * configured before declaration of your classes proceeds. This is especially helpful if
	 * you need to set the `namespace` for your schema (see below).
	 * 
	 * ## Relative Naming
	 * 
	 * When describing associations between entities, it is desirable to use shorthand names
	 * that do not contain the common namespace portion. This is called the `entityName` as
	 * opposed to its class name. By default, the `entityName` is the full class name. However,
	 * if a namespace is used, the common portion can be discarded and we can derive a shorter name.
	 * In the following code, `"MyApp.model.Foo"` has an `entityName` of `"Foo"` and the schema has
	 * a `namespace` of "MyApp.model".
	 * 
	 * If you use deeper nesting for entities, you may need to set the `namespace` config to
	 * account for this. For example:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model'
	 *         }
	 *     });
	 * 
	 * Your derived classes now will generate proper default `entityName` values even if they
	 * have further namespaces. For example, "MyApp.model.foo.Thing" will produce "foo.Thing"
	 * as the `entityName` given the above as a base class.
	 * 
	 * # Association Naming
	 * 
	 * There are various terms involved when describing associations. Perhaps the simplest
	 * example that will clarify these terms is that of the common many-to-many association
	 * of User and Group.
	 * 
	 * - `entityName` - The names "User" and "Group" are the `entityName` values associated
	 *   with these two classes. These are derived from their full classnames (perhaps
	 *   something like "App.model.User" and "App.model.Group").
	 * - `associationName` - When talking about associations, especially the many-to-many
	 *   variety, it is important to give them names. Associations are not owned by either of
	 *   the entities involved, so this name is similar to an `entityName`. In the case of
	 *   "User" and "Group", the default `associationName` would be "GroupUsers".
	 * - `left` and `right` - Associations describe a relationship between two entities. To
	 *   talk about specific associations we would use the `entityName` of the parties (such
	 *   as "User" or "Group"). When discussing associations in the abstract, however, it is
	 *   very helpful to be able to talk about the entities in an association in a general way.
	 *   In the case of the "GroupUsers" association, "User" is said to be the `left` while
	 *   "Group" is said to be the `right`. In a many-to-many association the selection of
	 *   `left` and `right` is arbitrary. When a foreign-key is involved, the `left` entity
	 *   is the one containing the foreign-key.
	 * 
	 * ## Custom Naming Conventions
	 * 
	 * One of the jobs the the `Schema` is to manage name generation (such as `entityName`).
	 * This job is delegated to a class called the `namer`. If you need to generate names in
	 * other ways, you can provide a custom `namer` for your classes:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model',
	 *             namer: 'custom'
	 *         }
	 *     });
	 * 
	 * This will create a class using the alias "namer.custom". For example:
	 * 
	 *     Ext.define('MyApp.model.CustomNamer', {
	 *         extend: 'Ext.data.schema.Namer',
	 *    
	 *         alias: 'namer.custom',
	 *         ...
	 *     });
	 * 
	 * For details see the documentation for [Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html).
	 */
	class Schema extends Ext.Base {
		/** 
		 * The number of [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
		 * in this `schema`.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 0
		 * @type {number}
		 */
		readonly assocCount?: number;
		/** 
		 * The number of [entities](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) in this
		 * `schema`.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 0
		 * @type {number}
		 */
		readonly entityCount?: number;
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.Factory.html).
		 * @property
		 * @public (property)
		 * @type {object}
		 */
		factoryConfig?: object;
		/** 
		 * The name of the schema's type. This should be the suffix of the `alias` for this
		 * class following the "schema." prefix. For example, if the `alias` for a schema is
		 * "schema.foo" then `type` should "foo". If an `alias` is specified on the derived
		 * class, this property is set automatically.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 'default'
		 * @type {string}
		 */
		readonly type?: string;
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
		 * @type {Ext.data.schema.Schema.Statics}
		 */
		self?: Ext.data.schema.Schema.Statics | Ext.Base.Statics;
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
		 * @param   {object}                          members    The members to add to this class.
		 * @param   {boolean}                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.Schema|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.data.schema.Schema;
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
		 * Returns the `Schema` instance given its `id` or config object. If only the `id`
		 * is specified, that `Schema` instance is looked up and returned. If there is no
		 * instance already created, the `id` is assumed to be the `type`. For example:
		 * 
		 *     schema: 'foo'
		 * 
		 * Would be created from the alias `"schema.foo"` and assigned the `id` of "foo"
		 * as well.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object|Ext.data.schema.Schema.staticMethodParams.get.Config} config The id, type or config object of the schema.
		 * @returns {Ext.data.schema.Schema}                                             
		 * The previously existing or newly created
		 * instance.
		 */
		static get? (config: string | object | Ext.data.schema.Schema.staticMethodParams.get.Config): Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.data.schema.Schema;
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
		 * Returns an `Association` by name.
		 * @method
		 * @public (method)
		 * @param   {string}                      name The name of the association.
		 * @returns {Ext.data.schema.Association}      The association instance.
		 */
		getAssociation? (name: string): Ext.data.schema.Association;
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
		 * Returns the value of [defaultIdentifier](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-defaultIdentifier).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getDefaultIdentifier? (): object;
		/** 
		 * Returns an entity by name.
		 * @method
		 * @public (method)
		 * @param   {string}         name The name of the entity
		 * @returns {Ext.data.Model}      The entity class.
		 */
		getEntity? (name: string): Ext.data.Model;
		/** 
		 * Get the entity name taking into account the [namespace](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-namespace).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.data.Model} cls The model class or name of the class.
		 * @returns {string}                    The entity name
		 */
		getEntityName? (cls: string | Ext.data.Model): string;
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
		 * Returns the value of [namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-namer).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.data.schema.Namer}  
		 */
		getNamer? (): string | object | Ext.data.schema.Namer;
		/** 
		 * Returns the value of [namespace](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-namespace).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getNamespace? (): string;
		/** 
		 * Returns the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-proxy).
		 * @method
		 * @public (method)
		 * @returns {object|Ext.util.ObjectTemplate}  
		 */
		getProxy? (): object | Ext.util.ObjectTemplate;
		/** 
		 * Returns the value of [urlPrefix](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-urlPrefix).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getUrlPrefix? (): string;
		/** 
		 * Checks if the passed entity has attached associations that need to be read when
		 * using nested loading.
		 * @method
		 * @public (method)
		 * @param   {string|Ext.Class|Ext.data.Model} name The name, instance, or Model class.
		 * @returns {boolean}                              `true` if there are associations attached to the entity.
		 */
		hasAssociations? (name: string | Ext.Class | Ext.data.Model): boolean;
		/** 
		 * Checks if an entity is defined
		 * @method
		 * @public (method)
		 * @param   {string|Ext.data.Model} entity The name or model
		 * @returns {boolean}                      True if this entity is defined
		 */
		hasEntity? (entity: string | Ext.data.Model): boolean;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                   name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                          [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.Schema|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.Schema;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Sets the value of [defaultIdentifier](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-defaultIdentifier).
		 * @method
		 * @public (method)
		 * @param   {object} defaultIdentifier The new value.
		 * @returns {void}                     
		 */
		setDefaultIdentifier? (defaultIdentifier: object): void;
		/** 
		 * Sets the value of [namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-namer).
		 * @method
		 * @public (method)
		 * @param   {string|object|Ext.data.schema.Namer} namer The new value.
		 * @returns {void}                                      
		 */
		setNamer? (namer: string | object | Ext.data.schema.Namer): void;
		/** 
		 * Sets the value of [namespace](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-namespace).
		 * @method
		 * @public (method)
		 * @param   {string} namespace The new value.
		 * @returns {void}             
		 */
		setNamespace? (namespace: string): void;
		/** 
		 * Sets the value of [proxy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-proxy).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.util.ObjectTemplate} proxy The new value.
		 * @returns {void}                                 
		 */
		setProxy? (proxy: object | Ext.util.ObjectTemplate): void;
		/** 
		 * Sets the value of [urlPrefix](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#cfg-urlPrefix).
		 * @method
		 * @public (method)
		 * @param   {string} urlPrefix The new value.
		 * @returns {void}             
		 */
		setUrlPrefix? (urlPrefix: string): void;
		/** 
		 * Adds an entry from a [matrix config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html) declared by an
		 * entity.
		 * 
		 * This is the ideal method to override in a derived class if the standard, default
		 * naming conventions need to be adjusted. In the override, apply whatever logic is
		 * appropriate to determine the missing values and pass along the proper results to
		 * this method in the `callParent`.
		 * @method
		 * @protected (method)
		 * @param   {Ext.Class}                                                  entityType A class derived from [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).
		 * @param   {string}                                                     matrixName The name of the matrix association.
		 * @param   {string}                                                     relation
		 * A base name for the matrix. For information about the
		 * meaning of this see Ext.data.Schema.ManyToMany.
		 * @param   {object|Ext.data.schema.Schema.methodParams.addMatrix.Left}  left       The descriptor for the "left" of the matrix.
		 * @param   {object|Ext.data.schema.Schema.methodParams.addMatrix.Right} right      The descriptor for the "right" of the matrix.
		 * @returns {void}                                                                  
		 */
		addMatrix? (entityType: Ext.Class, matrixName: string, relation: string, left: object | Ext.data.schema.Schema.methodParams.addMatrix.Left, right: object | Ext.data.schema.Schema.methodParams.addMatrix.Right): void;
		/** 
		 * Adds a [reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-reference) field association for an entity
		 * to this `schema`.
		 * 
		 * This is the ideal method to override in a derived class if the standard, default
		 * naming conventions need to be adjusted. In the override, apply whatever logic is
		 * appropriate to determine the missing values and pass along the proper results to
		 * this method in the `callParent`.
		 * @method
		 * @protected (method)
		 * @param   {Ext.Class}            entityType     A class derived from [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).
		 * @param   {Ext.data.field.Field} referenceField The `field` with the `reference` config.
		 * @param   {string}               association
		 * The name of the association. If empty or null, this
		 * will be derived from `entityType`, `role`, `inverse` and
		 * `referenceField.unique`.
		 * @param   {string}               role
		 * The name of the relationship from `entityType` to the target
		 * `type`. If not specified, the default is the `referenceField.name` (minus any "Id"
		 * suffix if present).
		 * @param   {string}               inverse
		 * The name of the relationship from the target `type`
		 * to the `entityType`. If not specified, this is derived from the
		 * [entityName](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName) of the `entityType`
		 * ([singularized](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Inflector.html#method-singularize) or
		 * [pluralized](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Inflector.html#method-pluralize) based on `referenceField.unique`).
		 * @param   {string}               type
		 * The [entityName](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName) of the target
		 * of the reference.
		 * @param   {object}               [descr]
		 * The `reference` descriptor from the `referenceField` if one
		 * was given in the field definition.
		 * @param   {boolean}              [unique]       Indicates if the reference is one-to-one.
		 * @returns {void}                                
		 */
		addReference? (entityType: Ext.Class, referenceField: Ext.data.field.Field, association: string, role: string, inverse: string, type: string, descr?: object, unique?: boolean): void;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.data.schema.Schema.Statics;
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
		 * @param   {string[]}                        names The names of the linked objects to destroy.
		 * @returns {Ext.data.schema.Schema|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.data.schema.Schema;
		unlink? (names: string[]): Ext.Base;
	}
}
declare namespace Ext.data.schema.Association {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.Association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Associations enable you to express relationships between different [Models](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). Consider
	 * an ecommerce system where Users can place Orders - there is a one to many relationship between these Models,
	 * one user can have many orders (including 0 orders). Here is what a sample implementation of this association
	 * could look like. This example will be referred to in the following sections.
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name']
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, {
	 *            name: 'userId',
	 *            type: 'int',
	 *            reference: 'User'
	 *        }]
	 *    });
	 * 
	 * # Association Types
	 * 
	 * Assocations can describe relationships in 3 ways:
	 * 
	 * ## Many To One
	 * 
	 * A single entity (`A`) has a relationship with many (`B`) entities. An example of this is
	 * an ecommerce system `User` can have many `Order` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html) for keyless associations.
	 * 
	 * ## One To One
	 * 
	 * A less common form of Many To One, a single entity (`A`) has a relationship with at most 1 entity (`B`). This is often
	 * used when partitioning data. For example a `User` may have a single `UserInfo` object that stores extra
	 * metadata about the user.
	 * 
	 * This can be defined using [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html) for keyless associations.
	 * 
	 * ## Many To Many
	 * 
	 * An entity (`A`) may have a have a relationship with many (`B`) entities. That (`B`) entity may also
	 * have a relationship with many `A` entities. For example a single `Student` can have many `Subject` entities and
	 * a single `Subject` can have many `Student` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html). Many To Many relationships are readonly unless used with
	 * a [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html).
	 * 
	 * # Keyed vs Keyless Associations
	 * 
	 * Associations can be declared in 2 ways, which are outlined below.
	 * 
	 * ## Keyed associations
	 * 
	 * A keyed association relies on a field in the model matching the id of another model. Membership is driven by the key.
	 * This is the type of relationship that is typically used in a relational database.
	 * This is declared using the ||reference|| configuration on a model field. An example of this can be seen
	 * above for `User/Order`.
	 * 
	 * # Keyless associations
	 * 
	 * A keyless association relies on data hierarchy to determine membership. Items are members because they are
	 * contained by another entity. This type of relationship is common with NoSQL databases.
	 * formats. A simple example definition using `User/Order`:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name'],
	 *        hasMany: 'Order'
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }]
	 *    });
	 * 
	 * # Advantages of Associations
	 * 
	 * Assocations make it easier to work with Models that share a connection. Some of the main functionality includes:
	 * 
	 * ## Generated Accessors/Setters
	 * 
	 * Associated models will automatically generate named methods that allow for accessing the associated data.
	 * The names for these are created using a [Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html), to provide a consistent and
	 * predictable naming structure.
	 * 
	 * Using the example code above, there will be 3 generated methods:
	 * + `User` will have an `orders()` function that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) of`Orders`.
	 * + `Order` will have a `getUser` method which will return a `User` Model.
	 * + `Order` will have a `setUser` method that will accept a `User` model or a key value.
	 * 
	 * ## Nested Loading
	 * 
	 * Nested loading is the ability to load hierarchical associated data from a remote source within a single request.
	 * In the following example, each `User` in the `users` store has an `orders` store. Each `orders` store is populated
	 * with `Order` models read from the request. Each `Order` model also has a reference back to the appropriate `User`.
	 * 
	 *    // Sample JSON data returned by /Users
	 *    [{
	 *        "id": 1,
	 *        "name": "User Foo",
	 *        "orders": [{
	 *            "id": 101,
	 *            "userId": 1
	 *        }, {
	 *            "id": 102,
	 *            "userId": 1
	 *        }, {
	 *            "id": 103,
	 *            "userId": 1
	 *        }]
	 *    }, {
	 *        "id": 2,
	 *        "name": "User Bar",
	 *        "orders": [{
	 *            "id": 201,
	 *            "userId": 2
	 *        }, {
	 *            "id": 202,
	 *            "userId": 2
	 *        }]
	 *    }]
	 *    
	 *    // Application code
	 *    var users = new Ext.data.Store({
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url: '/Users'
	 *        }
	 *    });
	 *    users.load(function() {
	 *        var user1 = users.first(),
	 *            user2 = users.last(),
	 *            orders1 = user1.orders(),
	 *            orders2 = user2.orders();
	 *    
	 *        // 3 orders, same reference back to user1
	 *        console.log(orders1.getCount(), orders1.first().getUser() === user1);
	 *        // 2 orders, same reference back to user2
	 *        console.log(orders2.getCount(), orders2.first().getUser() === user2);
	 *    });
	 * 
	 * ## Binding
	 * 
	 * Data binding using [ViewModels](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) have functionality to be able to recognize
	 * associated data as part of a bind statement. For example:
	 * + `{user.orders}` binds to the orders store for a user.
	 * + `{order.user.name}` binds to the name of the user taken from the order.
	 * 
	 * # Association Concepts
	 * 
	 * ## Roles
	 * 
	 * The role is used to determine generated names for an association. By default, the role is generated from
	 * either the field name (in a keyed association) or the model name. This naming follows a pattern defined by
	 * the [`Ext.data.schema.Namer`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html). To change a specific instance, an explicit role can be specified:
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: {
	 *                type: 'Thread',
	 *                role: 'discussion',
	 *                inverse: 'comments'
	 *    
	 *            }
	 *        }]
	 *    });
	 * 
	 * In the above example, the `Thread` will be decorated with a `comments` method that returns the store.
	 * The `Post` will be decorated with `getDiscussion/setDiscussion` methods.
	 * 
	 * ## Generated Methods
	 * 
	 * Associations generate methods to allow reading and manipulation on associated data.
	 * 
	 * On records that have a "to many" relationship, a single methods that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) is created.
	 * See [storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). On records that have a "to one" relationship, 2 methods are generated, a
	 * [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and a [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 * 
	 * ## Reflexive
	 * 
	 * Associations are reflexive. By declaring one "side" of the relationship, the other is automatically setup. In
	 * the example below, there is no code in the `Thread` entity regarding the association, however by virtue of the
	 * declaration in post, `Thread` is decorated with the appropriate infrastructure to participate in the association.
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: 'Thread'
	 *        }]
	 *    });
	 * 
	 * ## Naming
	 * 
	 * Referring to model names in associations depends on their [Ext.data.Model.entityName](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName). See
	 * the "Relative Naming" section in the [`Ext.data.schema.Schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html) documentation.
	 */
	interface Def extends Ext.data.schema.Association {
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
		 * @type {Ext.data.schema.Association.Cfg}
		 */
		config?: Ext.data.schema.Association.Cfg;
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
		 * @returns {Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.schema.Association.Statics}
		 */
		statics?: (() => Ext.data.schema.Association.Statics | Ext.Base.Statics) | Ext.data.schema.Association.Statics | any;
	}
}
declare namespace Ext.data.schema.HasMany {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.HasMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This class provides for creating a keyless [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) association. This declaration should
	 * be on "many" entity. See [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) and [`Ext.data.schema.Association`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) for more information.
	 */
	interface Def extends Ext.data.schema.HasMany {
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
		 * @type {Ext.data.schema.HasMany.Cfg}
		 */
		config?: Ext.data.schema.HasMany.Cfg;
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
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		statics?: object;
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
	}
}
declare namespace Ext.data.schema.HasOne {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.HasOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This class provides for creating a keyless [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) association. This declaration should
	 * be on "owner" entity. See [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) and [`Ext.data.schema.Association`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) for more information.
	 */
	interface Def extends Ext.data.schema.HasOne {
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
		 * @type {Ext.data.schema.HasOne.Cfg}
		 */
		config?: Ext.data.schema.HasOne.Cfg;
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
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		statics?: object;
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
	}
}
declare namespace Ext.data.schema.ManyToMany {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.ManyToMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html)
	 * This relationship describes the case where any one entity of one type may relate to any
	 * number of entities of another type, and also in the reverse.
	 * 
	 * This form of association cannot store id's in the related entities since that would
	 * limit the number of related entities to one for the entity with the foreign key. Instead,
	 * these relationships are typically implemented using a so-called "matrix" table. This
	 * table typically has two columns to hold the id's of a pair of related entities. This
	 * pair of id's is unique in the matrix table.
	 * 
	 * # Declaration Forms
	 * 
	 *     // Fully spelled out - all properties are their defaults:
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: {
	 *                     field: 'groupId',
	 *                     role: 'groups'
	 *                 }
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate "right" object and use boolean to indicate Group is on the
	 *     // right. By default, left/right is determined by alphabetic order.
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: true
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate object completely and rely on string to name the other type. Still
	 *     // keep Group on the "right".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: 'User#'   // '#' is on the side (left or right) of Group
	 *         }
	 *     });
	 *    
	 *     // Remove explicit matrix name and keep Group on the "right". Generated matrixName
	 *     // remains "UserGroups".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User#'
	 *         ]
	 *     });
	 *    
	 *     // Minimal definition but now Group is on the "left" since "Group" sorts before
	 *     // "User". Generated matrixName is now "GroupUsers".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User'
	 *         ]
	 *     });
	 * 
	 */
	interface Def extends Ext.data.schema.ManyToMany {
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
		 * @type {Ext.data.schema.ManyToMany.Cfg}
		 */
		config?: Ext.data.schema.ManyToMany.Cfg;
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
		 * @returns {Ext.data.schema.ManyToMany.Statics|Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.schema.ManyToMany.Statics}
		 */
		statics?: (() => Ext.data.schema.ManyToMany.Statics | Ext.data.schema.Association.Statics | Ext.Base.Statics) | Ext.data.schema.ManyToMany.Statics | any;
	}
}
declare namespace Ext.data.schema.ManyToOne {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.ManyToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Declares a relationship between a single entity type and multiple related entities. The relationship can
	 * be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name']
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title', {
	 *            name: 'customerId',
	 *            reference: 'Customer'
	 *        }]
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasMany: 'Ticket'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    // Generated methods
	 *    var customer = new Customer();
	 *    customer.tickets();
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.getCustomer();
	 *    ticket.setCustomer();
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * The "one" record type will have a generated [Ext.data.schema.Association.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). The "many" record type
	 * will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 */
	interface Def extends Ext.data.schema.ManyToOne {
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
		 * @type {Ext.data.schema.ManyToOne.Cfg}
		 */
		config?: Ext.data.schema.ManyToOne.Cfg;
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
		 * @returns {Ext.data.schema.ManyToOne.Statics|Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.schema.ManyToOne.Statics}
		 */
		statics?: (() => Ext.data.schema.ManyToOne.Statics | Ext.data.schema.Association.Statics | Ext.Base.Statics) | Ext.data.schema.ManyToOne.Statics | any;
	}
}
declare namespace Ext.data.schema.Namer {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html)
	 * This class provides name derivation methods for use by a `Schema`.
	 * 
	 * # Caching
	 * 
	 * Because most name derivations are only textual manipulations of input strings, the
	 * results can be cached. This is handled by the `apply` method by giving it the name of
	 * the method to call. For example:
	 * 
	 *     var str = namer.capitalize('foo'); //  = "Foo"
	 *    
	 *     var str = namer.apply('capitalize', 'foo');
	 * 
	 * The return value of the second call (using `apply`) is the same as the first, however,
	 * the results of `capitalize` are cached. This allows repeated calls to `apply` given the
	 * same operation and string to avoid the extra string manipulation.
	 * 
	 * # Usage
	 * 
	 * This class is not intended to be created by application code. It is created by `Schema`
	 * instances as directed by the `namer` config. Application code can derive from this
	 * class and set the `namer` config to customize naming conventions used by the `Schema`.
	 */
	interface Def extends Ext.data.schema.Namer {
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
		 * @returns {Ext.data.schema.Namer.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.schema.Namer.Statics}
		 */
		statics?: (() => Ext.data.schema.Namer.Statics | Ext.Base.Statics) | Ext.data.schema.Namer.Statics | any;
	}
}
declare namespace Ext.data.schema.OneToOne {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.OneToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * This is a specialized version of [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) that declares a relationship between a single
	 * entity type and a single related entities. The relationship can be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', {
	 *            name: 'userInfoId',
	 *            reference: {
	 *                type: 'UserInfo',
	 *                unique: true
	 *            }
	 *        }]
	 *    });
	 *    
	 *    Ext.define('UserInfo', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasOne: 'UserInfo'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Generated methods
	 *    var user = new User();
	 *    user.getUserInfo();
	 *    user.setUserInfo();
	 *    
	 *    var info = new UserInfo();
	 *    info.getUser();
	 *    info.setUser();
	 *    
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.setCustomer(customer);
	 *    console.log(ticket.getCustomer()); // The customer object
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * Each record type will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 */
	interface Def extends Ext.data.schema.OneToOne {
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
		 * @type {Ext.data.schema.OneToOne.Cfg}
		 */
		config?: Ext.data.schema.OneToOne.Cfg;
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
		 * @returns {Ext.data.schema.OneToOne.Statics|Ext.data.schema.Association.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.schema.OneToOne.Statics}
		 */
		statics?: (() => Ext.data.schema.OneToOne.Statics | Ext.data.schema.Association.Statics | Ext.Base.Statics) | Ext.data.schema.OneToOne.Statics | any;
	}
}
declare namespace Ext.data.schema.Reference {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This documentation is for:
	 * 
	 * - [reference config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-reference)
	 * 
	 * The [name](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
	 * In most databases, this relationship is represented by a "foreign key". That is, a
	 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-idProperty)
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
	 * If a `reference` is not nullable, set the [Ext.data.field.Field.allowBlank](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-allowBlank) property
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
	 * If the name of the generated [association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) or other aspects
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
	 */
	interface Def extends Ext.data.schema.Reference {
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
		 * @type {Ext.data.schema.Reference.Cfg}
		 */
		config?: Ext.data.schema.Reference.Cfg;
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
		 * @property
		 * @protected (property)
		 * @type {object}
		 */
		statics?: object;
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
	}
}
declare namespace Ext.data.schema.Schema {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.data.schema.Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html)
	 * A Schema is a collection of related [entities](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) and their respective
	 * [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html).
	 * 
	 * # Schema Instances
	 * 
	 * By default a single instance of this class is created which serves as the schema for all
	 * entities that do not have an explicit [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config
	 * either specified or inherited. This is sufficient in most cases.
	 * 
	 * When an entity does specify a [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema), however, that
	 * looks up (or creates) an instance for that entity class which is then inherited.
	 * 
	 * **Important:** All related entities _must_ belong to a single schema instance in order
	 * to properly link up their associations.
	 * 
	 * ## Configuring Schemas
	 * 
	 * The best way to control the configuration of your `schema` is to define a base class for
	 * all of your entities and use the [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config like
	 * this:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         // This configures the default schema because we don't assign an "id":
	 *         schema: {
	 *             // configs go here
	 *         }
	 *     });
	 * 
	 * **Note:** Only one explicit configuration can be applied to the default schema. In most
	 * applications this will not be an issue.
	 * 
	 * By using a base class for your entities you can ensure that the default schema is fully
	 * configured before declaration of your classes proceeds. This is especially helpful if
	 * you need to set the `namespace` for your schema (see below).
	 * 
	 * ## Relative Naming
	 * 
	 * When describing associations between entities, it is desirable to use shorthand names
	 * that do not contain the common namespace portion. This is called the `entityName` as
	 * opposed to its class name. By default, the `entityName` is the full class name. However,
	 * if a namespace is used, the common portion can be discarded and we can derive a shorter name.
	 * In the following code, `"MyApp.model.Foo"` has an `entityName` of `"Foo"` and the schema has
	 * a `namespace` of "MyApp.model".
	 * 
	 * If you use deeper nesting for entities, you may need to set the `namespace` config to
	 * account for this. For example:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model'
	 *         }
	 *     });
	 * 
	 * Your derived classes now will generate proper default `entityName` values even if they
	 * have further namespaces. For example, "MyApp.model.foo.Thing" will produce "foo.Thing"
	 * as the `entityName` given the above as a base class.
	 * 
	 * # Association Naming
	 * 
	 * There are various terms involved when describing associations. Perhaps the simplest
	 * example that will clarify these terms is that of the common many-to-many association
	 * of User and Group.
	 * 
	 * - `entityName` - The names "User" and "Group" are the `entityName` values associated
	 *   with these two classes. These are derived from their full classnames (perhaps
	 *   something like "App.model.User" and "App.model.Group").
	 * - `associationName` - When talking about associations, especially the many-to-many
	 *   variety, it is important to give them names. Associations are not owned by either of
	 *   the entities involved, so this name is similar to an `entityName`. In the case of
	 *   "User" and "Group", the default `associationName` would be "GroupUsers".
	 * - `left` and `right` - Associations describe a relationship between two entities. To
	 *   talk about specific associations we would use the `entityName` of the parties (such
	 *   as "User" or "Group"). When discussing associations in the abstract, however, it is
	 *   very helpful to be able to talk about the entities in an association in a general way.
	 *   In the case of the "GroupUsers" association, "User" is said to be the `left` while
	 *   "Group" is said to be the `right`. In a many-to-many association the selection of
	 *   `left` and `right` is arbitrary. When a foreign-key is involved, the `left` entity
	 *   is the one containing the foreign-key.
	 * 
	 * ## Custom Naming Conventions
	 * 
	 * One of the jobs the the `Schema` is to manage name generation (such as `entityName`).
	 * This job is delegated to a class called the `namer`. If you need to generate names in
	 * other ways, you can provide a custom `namer` for your classes:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model',
	 *             namer: 'custom'
	 *         }
	 *     });
	 * 
	 * This will create a class using the alias "namer.custom". For example:
	 * 
	 *     Ext.define('MyApp.model.CustomNamer', {
	 *         extend: 'Ext.data.schema.Namer',
	 *    
	 *         alias: 'namer.custom',
	 *         ...
	 *     });
	 * 
	 * For details see the documentation for [Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html).
	 */
	interface Def extends Ext.data.schema.Schema {
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
		 * @type {Ext.data.schema.Schema.Cfg}
		 */
		config?: Ext.data.schema.Schema.Cfg;
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
		 * @returns {Ext.data.schema.Schema.Statics|Ext.Base.Statics}  
		 * @type {Ext.data.schema.Schema.Statics}
		 */
		statics?: (() => Ext.data.schema.Schema.Statics | Ext.Base.Statics) | Ext.data.schema.Schema.Statics | any;
	}
}
declare namespace Ext.data.schema.Association {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.Association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Associations enable you to express relationships between different [Models](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). Consider
	 * an ecommerce system where Users can place Orders - there is a one to many relationship between these Models,
	 * one user can have many orders (including 0 orders). Here is what a sample implementation of this association
	 * could look like. This example will be referred to in the following sections.
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name']
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, {
	 *            name: 'userId',
	 *            type: 'int',
	 *            reference: 'User'
	 *        }]
	 *    });
	 * 
	 * # Association Types
	 * 
	 * Assocations can describe relationships in 3 ways:
	 * 
	 * ## Many To One
	 * 
	 * A single entity (`A`) has a relationship with many (`B`) entities. An example of this is
	 * an ecommerce system `User` can have many `Order` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html) for keyless associations.
	 * 
	 * ## One To One
	 * 
	 * A less common form of Many To One, a single entity (`A`) has a relationship with at most 1 entity (`B`). This is often
	 * used when partitioning data. For example a `User` may have a single `UserInfo` object that stores extra
	 * metadata about the user.
	 * 
	 * This can be defined using [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html) for keyless associations.
	 * 
	 * ## Many To Many
	 * 
	 * An entity (`A`) may have a have a relationship with many (`B`) entities. That (`B`) entity may also
	 * have a relationship with many `A` entities. For example a single `Student` can have many `Subject` entities and
	 * a single `Subject` can have many `Student` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html). Many To Many relationships are readonly unless used with
	 * a [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html).
	 * 
	 * # Keyed vs Keyless Associations
	 * 
	 * Associations can be declared in 2 ways, which are outlined below.
	 * 
	 * ## Keyed associations
	 * 
	 * A keyed association relies on a field in the model matching the id of another model. Membership is driven by the key.
	 * This is the type of relationship that is typically used in a relational database.
	 * This is declared using the ||reference|| configuration on a model field. An example of this can be seen
	 * above for `User/Order`.
	 * 
	 * # Keyless associations
	 * 
	 * A keyless association relies on data hierarchy to determine membership. Items are members because they are
	 * contained by another entity. This type of relationship is common with NoSQL databases.
	 * formats. A simple example definition using `User/Order`:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name'],
	 *        hasMany: 'Order'
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }]
	 *    });
	 * 
	 * # Advantages of Associations
	 * 
	 * Assocations make it easier to work with Models that share a connection. Some of the main functionality includes:
	 * 
	 * ## Generated Accessors/Setters
	 * 
	 * Associated models will automatically generate named methods that allow for accessing the associated data.
	 * The names for these are created using a [Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html), to provide a consistent and
	 * predictable naming structure.
	 * 
	 * Using the example code above, there will be 3 generated methods:
	 * + `User` will have an `orders()` function that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) of`Orders`.
	 * + `Order` will have a `getUser` method which will return a `User` Model.
	 * + `Order` will have a `setUser` method that will accept a `User` model or a key value.
	 * 
	 * ## Nested Loading
	 * 
	 * Nested loading is the ability to load hierarchical associated data from a remote source within a single request.
	 * In the following example, each `User` in the `users` store has an `orders` store. Each `orders` store is populated
	 * with `Order` models read from the request. Each `Order` model also has a reference back to the appropriate `User`.
	 * 
	 *    // Sample JSON data returned by /Users
	 *    [{
	 *        "id": 1,
	 *        "name": "User Foo",
	 *        "orders": [{
	 *            "id": 101,
	 *            "userId": 1
	 *        }, {
	 *            "id": 102,
	 *            "userId": 1
	 *        }, {
	 *            "id": 103,
	 *            "userId": 1
	 *        }]
	 *    }, {
	 *        "id": 2,
	 *        "name": "User Bar",
	 *        "orders": [{
	 *            "id": 201,
	 *            "userId": 2
	 *        }, {
	 *            "id": 202,
	 *            "userId": 2
	 *        }]
	 *    }]
	 *    
	 *    // Application code
	 *    var users = new Ext.data.Store({
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url: '/Users'
	 *        }
	 *    });
	 *    users.load(function() {
	 *        var user1 = users.first(),
	 *            user2 = users.last(),
	 *            orders1 = user1.orders(),
	 *            orders2 = user2.orders();
	 *    
	 *        // 3 orders, same reference back to user1
	 *        console.log(orders1.getCount(), orders1.first().getUser() === user1);
	 *        // 2 orders, same reference back to user2
	 *        console.log(orders2.getCount(), orders2.first().getUser() === user2);
	 *    });
	 * 
	 * ## Binding
	 * 
	 * Data binding using [ViewModels](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) have functionality to be able to recognize
	 * associated data as part of a bind statement. For example:
	 * + `{user.orders}` binds to the orders store for a user.
	 * + `{order.user.name}` binds to the name of the user taken from the order.
	 * 
	 * # Association Concepts
	 * 
	 * ## Roles
	 * 
	 * The role is used to determine generated names for an association. By default, the role is generated from
	 * either the field name (in a keyed association) or the model name. This naming follows a pattern defined by
	 * the [`Ext.data.schema.Namer`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html). To change a specific instance, an explicit role can be specified:
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: {
	 *                type: 'Thread',
	 *                role: 'discussion',
	 *                inverse: 'comments'
	 *    
	 *            }
	 *        }]
	 *    });
	 * 
	 * In the above example, the `Thread` will be decorated with a `comments` method that returns the store.
	 * The `Post` will be decorated with `getDiscussion/setDiscussion` methods.
	 * 
	 * ## Generated Methods
	 * 
	 * Associations generate methods to allow reading and manipulation on associated data.
	 * 
	 * On records that have a "to many" relationship, a single methods that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) is created.
	 * See [storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). On records that have a "to one" relationship, 2 methods are generated, a
	 * [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and a [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 * 
	 * ## Reflexive
	 * 
	 * Associations are reflexive. By declaring one "side" of the relationship, the other is automatically setup. In
	 * the example below, there is no code in the `Thread` entity regarding the association, however by virtue of the
	 * declaration in post, `Thread` is decorated with the appropriate infrastructure to participate in the association.
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: 'Thread'
	 *        }]
	 *    });
	 * 
	 * ## Naming
	 * 
	 * Referring to model names in associations depends on their [Ext.data.Model.entityName](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName). See
	 * the "Relative Naming" section in the [`Ext.data.schema.Schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html) documentation.
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
		 * @param   {object}                               members    The members to add to this class.
		 * @param   {boolean}                              [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                              [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.Association|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @param   {object}                               members
		 * @returns {Ext.data.schema.Association|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                               name
		 * @param   {object}                               member
		 * @returns {Ext.data.schema.Association|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                               fn
		 * @param   {object}                               scope
		 * @returns {Ext.data.schema.Association|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
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
declare namespace Ext.data.schema.ManyToMany {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.ManyToMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html)
	 * This relationship describes the case where any one entity of one type may relate to any
	 * number of entities of another type, and also in the reverse.
	 * 
	 * This form of association cannot store id's in the related entities since that would
	 * limit the number of related entities to one for the entity with the foreign key. Instead,
	 * these relationships are typically implemented using a so-called "matrix" table. This
	 * table typically has two columns to hold the id's of a pair of related entities. This
	 * pair of id's is unique in the matrix table.
	 * 
	 * # Declaration Forms
	 * 
	 *     // Fully spelled out - all properties are their defaults:
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: {
	 *                     field: 'groupId',
	 *                     role: 'groups'
	 *                 }
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate "right" object and use boolean to indicate Group is on the
	 *     // right. By default, left/right is determined by alphabetic order.
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: true
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate object completely and rely on string to name the other type. Still
	 *     // keep Group on the "right".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: 'User#'   // '#' is on the side (left or right) of Group
	 *         }
	 *     });
	 *    
	 *     // Remove explicit matrix name and keep Group on the "right". Generated matrixName
	 *     // remains "UserGroups".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User#'
	 *         ]
	 *     });
	 *    
	 *     // Minimal definition but now Group is on the "left" since "Group" sorts before
	 *     // "User". Generated matrixName is now "GroupUsers".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User'
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
		 * @param   {object}                                                          members    The members to add to this class.
		 * @param   {boolean}                                                         [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                         [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.ManyToMany;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                          members
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.ManyToMany;
		addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                          name
		 * @param   {object}                                                          member
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.ManyToMany;
		addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                          fn
		 * @param   {object}                                                          scope
		 * @returns {Ext.data.schema.ManyToMany|Ext.data.schema.Association|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.ManyToMany;
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
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
declare namespace Ext.data.schema.ManyToOne {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.ManyToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Declares a relationship between a single entity type and multiple related entities. The relationship can
	 * be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name']
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title', {
	 *            name: 'customerId',
	 *            reference: 'Customer'
	 *        }]
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasMany: 'Ticket'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    // Generated methods
	 *    var customer = new Customer();
	 *    customer.tickets();
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.getCustomer();
	 *    ticket.setCustomer();
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * The "one" record type will have a generated [Ext.data.schema.Association.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). The "many" record type
	 * will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
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
		 * @param   {object}                                                         members    The members to add to this class.
		 * @param   {boolean}                                                        [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                        [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.ManyToOne;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                         members
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.ManyToOne;
		addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                         name
		 * @param   {object}                                                         member
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.ManyToOne;
		addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                         fn
		 * @param   {object}                                                         scope
		 * @returns {Ext.data.schema.ManyToOne|Ext.data.schema.Association|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.ManyToOne;
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
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
declare namespace Ext.data.schema.Namer {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html)
	 * This class provides name derivation methods for use by a `Schema`.
	 * 
	 * # Caching
	 * 
	 * Because most name derivations are only textual manipulations of input strings, the
	 * results can be cached. This is handled by the `apply` method by giving it the name of
	 * the method to call. For example:
	 * 
	 *     var str = namer.capitalize('foo'); //  = "Foo"
	 *    
	 *     var str = namer.apply('capitalize', 'foo');
	 * 
	 * The return value of the second call (using `apply`) is the same as the first, however,
	 * the results of `capitalize` are cached. This allows repeated calls to `apply` given the
	 * same operation and string to avoid the extra string manipulation.
	 * 
	 * # Usage
	 * 
	 * This class is not intended to be created by application code. It is created by `Schema`
	 * instances as directed by the `namer` config. Application code can derive from this
	 * class and set the `namer` config to customize naming conventions used by the `Schema`.
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
		 * @returns {Ext.data.schema.Namer|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Namer;
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
		 * @returns {Ext.data.schema.Namer|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.Namer;
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
		 * @param   {object}                         name
		 * @param   {object}                         member
		 * @returns {Ext.data.schema.Namer|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.Namer;
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
		 * @param   {object}                         fn
		 * @param   {object}                         scope
		 * @returns {Ext.data.schema.Namer|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Namer;
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
declare namespace Ext.data.schema.OneToOne {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.OneToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * This is a specialized version of [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) that declares a relationship between a single
	 * entity type and a single related entities. The relationship can be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', {
	 *            name: 'userInfoId',
	 *            reference: {
	 *                type: 'UserInfo',
	 *                unique: true
	 *            }
	 *        }]
	 *    });
	 *    
	 *    Ext.define('UserInfo', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasOne: 'UserInfo'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Generated methods
	 *    var user = new User();
	 *    user.getUserInfo();
	 *    user.setUserInfo();
	 *    
	 *    var info = new UserInfo();
	 *    info.getUser();
	 *    info.setUser();
	 *    
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.setCustomer(customer);
	 *    console.log(ticket.getCustomer()); // The customer object
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * Each record type will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
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
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.OneToOne;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Association;
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
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.OneToOne;
		addStatics? (members: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                        name
		 * @param   {object}                                                        member
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.OneToOne;
		addMember? (name: object, member: object): typeof Ext.data.schema.Association;
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
		 * @param   {object}                                                        fn
		 * @param   {object}                                                        scope
		 * @returns {Ext.data.schema.OneToOne|Ext.data.schema.Association|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.OneToOne;
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Association;
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
declare namespace Ext.data.schema.Role {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.Role](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Role.html)
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
		 * @returns {Ext.data.schema.Role|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Role;
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
		 * @returns {Ext.data.schema.Role|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.Role;
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
		 * @param   {object}                        name
		 * @param   {object}                        member
		 * @returns {Ext.data.schema.Role|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.Role;
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
		 * @param   {object}                        fn
		 * @param   {object}                        scope
		 * @returns {Ext.data.schema.Role|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Role;
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
declare namespace Ext.data.schema.Schema {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.data.schema.Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html)
	 * A Schema is a collection of related [entities](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) and their respective
	 * [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html).
	 * 
	 * # Schema Instances
	 * 
	 * By default a single instance of this class is created which serves as the schema for all
	 * entities that do not have an explicit [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config
	 * either specified or inherited. This is sufficient in most cases.
	 * 
	 * When an entity does specify a [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema), however, that
	 * looks up (or creates) an instance for that entity class which is then inherited.
	 * 
	 * **Important:** All related entities _must_ belong to a single schema instance in order
	 * to properly link up their associations.
	 * 
	 * ## Configuring Schemas
	 * 
	 * The best way to control the configuration of your `schema` is to define a base class for
	 * all of your entities and use the [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config like
	 * this:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         // This configures the default schema because we don't assign an "id":
	 *         schema: {
	 *             // configs go here
	 *         }
	 *     });
	 * 
	 * **Note:** Only one explicit configuration can be applied to the default schema. In most
	 * applications this will not be an issue.
	 * 
	 * By using a base class for your entities you can ensure that the default schema is fully
	 * configured before declaration of your classes proceeds. This is especially helpful if
	 * you need to set the `namespace` for your schema (see below).
	 * 
	 * ## Relative Naming
	 * 
	 * When describing associations between entities, it is desirable to use shorthand names
	 * that do not contain the common namespace portion. This is called the `entityName` as
	 * opposed to its class name. By default, the `entityName` is the full class name. However,
	 * if a namespace is used, the common portion can be discarded and we can derive a shorter name.
	 * In the following code, `"MyApp.model.Foo"` has an `entityName` of `"Foo"` and the schema has
	 * a `namespace` of "MyApp.model".
	 * 
	 * If you use deeper nesting for entities, you may need to set the `namespace` config to
	 * account for this. For example:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model'
	 *         }
	 *     });
	 * 
	 * Your derived classes now will generate proper default `entityName` values even if they
	 * have further namespaces. For example, "MyApp.model.foo.Thing" will produce "foo.Thing"
	 * as the `entityName` given the above as a base class.
	 * 
	 * # Association Naming
	 * 
	 * There are various terms involved when describing associations. Perhaps the simplest
	 * example that will clarify these terms is that of the common many-to-many association
	 * of User and Group.
	 * 
	 * - `entityName` - The names "User" and "Group" are the `entityName` values associated
	 *   with these two classes. These are derived from their full classnames (perhaps
	 *   something like "App.model.User" and "App.model.Group").
	 * - `associationName` - When talking about associations, especially the many-to-many
	 *   variety, it is important to give them names. Associations are not owned by either of
	 *   the entities involved, so this name is similar to an `entityName`. In the case of
	 *   "User" and "Group", the default `associationName` would be "GroupUsers".
	 * - `left` and `right` - Associations describe a relationship between two entities. To
	 *   talk about specific associations we would use the `entityName` of the parties (such
	 *   as "User" or "Group"). When discussing associations in the abstract, however, it is
	 *   very helpful to be able to talk about the entities in an association in a general way.
	 *   In the case of the "GroupUsers" association, "User" is said to be the `left` while
	 *   "Group" is said to be the `right`. In a many-to-many association the selection of
	 *   `left` and `right` is arbitrary. When a foreign-key is involved, the `left` entity
	 *   is the one containing the foreign-key.
	 * 
	 * ## Custom Naming Conventions
	 * 
	 * One of the jobs the the `Schema` is to manage name generation (such as `entityName`).
	 * This job is delegated to a class called the `namer`. If you need to generate names in
	 * other ways, you can provide a custom `namer` for your classes:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model',
	 *             namer: 'custom'
	 *         }
	 *     });
	 * 
	 * This will create a class using the alias "namer.custom". For example:
	 * 
	 *     Ext.define('MyApp.model.CustomNamer', {
	 *         extend: 'Ext.data.schema.Namer',
	 *    
	 *         alias: 'namer.custom',
	 *         ...
	 *     });
	 * 
	 * For details see the documentation for [Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html).
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.data.schema.Schema;
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
		 * Returns the `Schema` instance given its `id` or config object. If only the `id`
		 * is specified, that `Schema` instance is looked up and returned. If there is no
		 * instance already created, the `id` is assumed to be the `type`. For example:
		 * 
		 *     schema: 'foo'
		 * 
		 * Would be created from the alias `"schema.foo"` and assigned the `id` of "foo"
		 * as well.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string|object|Ext.data.schema.Schema.staticMethodParams.get.Config} config The id, type or config object of the schema.
		 * @returns {Ext.data.schema.Schema}                                             
		 * The previously existing or newly created
		 * instance.
		 */
		get? (config: string | object | Ext.data.schema.Schema.staticMethodParams.get.Config): Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.data.schema.Schema;
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
		 * @returns {Ext.data.schema.Schema|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.data.schema.Schema;
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
declare namespace Ext.data.schema.Association.methodParams.recordGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.Association.recordGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the record to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the record loads successfully.
		 * If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.Association.methodParams.recordGetter.Options.success}
		 */
		success?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record load fails.
		 * If the record has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.Association.methodParams.recordGetter.Options.failure}
		 */
		failure?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record loads, whether it is successful
		 * or failed. If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.Association.methodParams.recordGetter.Options.callback}
		 */
		callback?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.Association.methodParams.storeGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.Association.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the store to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the store loads successfully.
		 * If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.Association.methodParams.storeGetter.Options.success}
		 */
		success?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store load fails.
		 * If the store has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.Association.methodParams.storeGetter.Options.failure}
		 */
		failure?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store loads, whether it is successful
		 * or failed. If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.Association.methodParams.storeGetter.Options.callback}
		 */
		callback?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.ManyToMany.methodParams.recordGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.ManyToMany.recordGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html#method-recordGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the record to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the record loads successfully.
		 * If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToMany.methodParams.recordGetter.Options.success}
		 */
		success?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record load fails.
		 * If the record has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToMany.methodParams.recordGetter.Options.failure}
		 */
		failure?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record loads, whether it is successful
		 * or failed. If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToMany.methodParams.recordGetter.Options.callback}
		 */
		callback?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.ManyToMany.methodParams.storeGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.ManyToMany.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html#method-storeGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the store to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the store loads successfully.
		 * If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToMany.methodParams.storeGetter.Options.success}
		 */
		success?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store load fails.
		 * If the store has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToMany.methodParams.storeGetter.Options.failure}
		 */
		failure?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store loads, whether it is successful
		 * or failed. If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToMany.methodParams.storeGetter.Options.callback}
		 */
		callback?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.ManyToOne.methodParams.recordGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.ManyToOne.recordGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html#method-recordGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the record to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the record loads successfully.
		 * If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToOne.methodParams.recordGetter.Options.success}
		 */
		success?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record load fails.
		 * If the record has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToOne.methodParams.recordGetter.Options.failure}
		 */
		failure?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record loads, whether it is successful
		 * or failed. If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToOne.methodParams.recordGetter.Options.callback}
		 */
		callback?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.ManyToOne.methodParams.storeGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.ManyToOne.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html#method-storeGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the store to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the store loads successfully.
		 * If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToOne.methodParams.storeGetter.Options.success}
		 */
		success?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store load fails.
		 * If the store has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToOne.methodParams.storeGetter.Options.failure}
		 */
		failure?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store loads, whether it is successful
		 * or failed. If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.ManyToOne.methodParams.storeGetter.Options.callback}
		 */
		callback?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.OneToOne.methodParams.recordGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.OneToOne.recordGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html#method-recordGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the record to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the record loads successfully.
		 * If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.OneToOne.methodParams.recordGetter.Options.success}
		 */
		success?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record load fails.
		 * If the record has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.OneToOne.methodParams.recordGetter.Options.failure}
		 */
		failure?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the record loads, whether it is successful
		 * or failed. If the record has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.OneToOne.methodParams.recordGetter.Options.callback}
		 */
		callback?: ((record?: Ext.data.Model, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.OneToOne.methodParams.storeGetter {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.OneToOne.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html#method-storeGetter)
	 * The options for the getter, or a callback function to execute. If specified as
	 * a function, it will act as the `callback` option.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * `true` to force the store to reload from the server.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		reload?: boolean;
		/** 
		 * The `this` reference for the callback. Defaults to the record.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
		/** 
		 * A function to execute when the store loads successfully.
		 * If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The success is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.OneToOne.methodParams.storeGetter.Options.success}
		 */
		success?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store load fails.
		 * If the store has already loaded, this will not be called.
		 * The failure is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.OneToOne.methodParams.storeGetter.Options.failure}
		 */
		failure?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation) => void) | ExtGlobalFunction;
		/** 
		 * A function to execute when the store loads, whether it is successful
		 * or failed. If the store has already loaded, this will be called immediately and the `Operation` will be `null`.
		 * The callback is passed the following parameters:
		 * @configuration
		 * @optional
		 * @type {Function|Ext.data.schema.OneToOne.methodParams.storeGetter.Options.callback}
		 */
		callback?: ((store?: Ext.data.Store, operation?: Ext.data.operation.Operation, success?: boolean) => void) | ExtGlobalFunction;
	}
}
declare namespace Ext.data.schema.Schema.methodParams.addMatrix {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.Schema.addMatrix](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#method-addMatrix)
	 * The descriptor for the "left" of the matrix.
	 */
	interface Left extends Ext.base.Params {
		/** 
		 * The type of the entity on the "left" of the matrix.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		type?: string;
		/** 
		 * The name of the field in the matrix table for the "left"
		 * side entity. If not provided, this defaults to the `left.type` name
		 * [singularized](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Inflector.html#method-singularize) and uncapitalized followed by
		 * "Id". For example, "userId" for a `left.type` of "Users".
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		field?: string;
		/** 
		 * The name of the relationship from the `left.type` to the
		 * `right.type`. If not provided, this defaults to the `left.type` name
		 * [pluralized](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Inflector.html#method-pluralize) and uncapitalized. For example,
		 * "users" for a `left.type` of "User".
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		role?: string;
	}
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.Schema.addMatrix](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#method-addMatrix)
	 * The descriptor for the "right" of the matrix.
	 */
	interface Right extends Ext.base.Params {
		/** 
		 * The type of the entity on the "right" of the matrix.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		type?: string;
		/** 
		 * The name of the field in the matrix table for the
		 * "right" side entity. If not provided, this defaults in the same way as `left.field`
		 * except this is based on `right.type`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		field?: string;
		/** 
		 * The name of the relationship from the `right.type` to
		 * the `left.type`. If not provided, this defaults in the same way as `left.role`
		 * except this is based on `right.type`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		role?: string;
	}
}
declare namespace Ext.data.schema.Schema.staticMethodParams.get {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.data.schema.Schema.get](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html#static-method-get)
	 * The id, type or config object of the schema.
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The type alias of the schema. A "schema." prefix
		 * is added to this string, if provided, to complete the alias. This should match
		 * match the "alias" of some class derived from [`Ext.data.schema.Schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		type?: string;
	}
}
declare namespace Ext.data.schema.Association {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.Association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Associations enable you to express relationships between different [Models](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html). Consider
	 * an ecommerce system where Users can place Orders - there is a one to many relationship between these Models,
	 * one user can have many orders (including 0 orders). Here is what a sample implementation of this association
	 * could look like. This example will be referred to in the following sections.
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name']
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, {
	 *            name: 'userId',
	 *            type: 'int',
	 *            reference: 'User'
	 *        }]
	 *    });
	 * 
	 * # Association Types
	 * 
	 * Assocations can describe relationships in 3 ways:
	 * 
	 * ## Many To One
	 * 
	 * A single entity (`A`) has a relationship with many (`B`) entities. An example of this is
	 * an ecommerce system `User` can have many `Order` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html) for keyless associations.
	 * 
	 * ## One To One
	 * 
	 * A less common form of Many To One, a single entity (`A`) has a relationship with at most 1 entity (`B`). This is often
	 * used when partitioning data. For example a `User` may have a single `UserInfo` object that stores extra
	 * metadata about the user.
	 * 
	 * This can be defined using [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) for keyed associations, or
	 * [`Ext.data.schema.HasOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html) for keyless associations.
	 * 
	 * ## Many To Many
	 * 
	 * An entity (`A`) may have a have a relationship with many (`B`) entities. That (`B`) entity may also
	 * have a relationship with many `A` entities. For example a single `Student` can have many `Subject` entities and
	 * a single `Subject` can have many `Student` entities.
	 * 
	 * This can be defined using [`Ext.data.schema.ManyToMany`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html). Many To Many relationships are readonly unless used with
	 * a [`Ext.data.Session`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Session.html).
	 * 
	 * # Keyed vs Keyless Associations
	 * 
	 * Associations can be declared in 2 ways, which are outlined below.
	 * 
	 * ## Keyed associations
	 * 
	 * A keyed association relies on a field in the model matching the id of another model. Membership is driven by the key.
	 * This is the type of relationship that is typically used in a relational database.
	 * This is declared using the ||reference|| configuration on a model field. An example of this can be seen
	 * above for `User/Order`.
	 * 
	 * # Keyless associations
	 * 
	 * A keyless association relies on data hierarchy to determine membership. Items are members because they are
	 * contained by another entity. This type of relationship is common with NoSQL databases.
	 * formats. A simple example definition using `User/Order`:
	 * 
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }, 'name'],
	 *        hasMany: 'Order'
	 *    });
	 *    
	 *    Ext.define('Order', {
	 *        extend: 'Ext.data.Model',
	 *        fields: [{
	 *            name: 'id',
	 *            type: 'int'
	 *        }]
	 *    });
	 * 
	 * # Advantages of Associations
	 * 
	 * Assocations make it easier to work with Models that share a connection. Some of the main functionality includes:
	 * 
	 * ## Generated Accessors/Setters
	 * 
	 * Associated models will automatically generate named methods that allow for accessing the associated data.
	 * The names for these are created using a [Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html), to provide a consistent and
	 * predictable naming structure.
	 * 
	 * Using the example code above, there will be 3 generated methods:
	 * + `User` will have an `orders()` function that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) of`Orders`.
	 * + `Order` will have a `getUser` method which will return a `User` Model.
	 * + `Order` will have a `setUser` method that will accept a `User` model or a key value.
	 * 
	 * ## Nested Loading
	 * 
	 * Nested loading is the ability to load hierarchical associated data from a remote source within a single request.
	 * In the following example, each `User` in the `users` store has an `orders` store. Each `orders` store is populated
	 * with `Order` models read from the request. Each `Order` model also has a reference back to the appropriate `User`.
	 * 
	 *    // Sample JSON data returned by /Users
	 *    [{
	 *        "id": 1,
	 *        "name": "User Foo",
	 *        "orders": [{
	 *            "id": 101,
	 *            "userId": 1
	 *        }, {
	 *            "id": 102,
	 *            "userId": 1
	 *        }, {
	 *            "id": 103,
	 *            "userId": 1
	 *        }]
	 *    }, {
	 *        "id": 2,
	 *        "name": "User Bar",
	 *        "orders": [{
	 *            "id": 201,
	 *            "userId": 2
	 *        }, {
	 *            "id": 202,
	 *            "userId": 2
	 *        }]
	 *    }]
	 *    
	 *    // Application code
	 *    var users = new Ext.data.Store({
	 *        model: 'User',
	 *        proxy: {
	 *            type: 'ajax',
	 *            url: '/Users'
	 *        }
	 *    });
	 *    users.load(function() {
	 *        var user1 = users.first(),
	 *            user2 = users.last(),
	 *            orders1 = user1.orders(),
	 *            orders2 = user2.orders();
	 *    
	 *        // 3 orders, same reference back to user1
	 *        console.log(orders1.getCount(), orders1.first().getUser() === user1);
	 *        // 2 orders, same reference back to user2
	 *        console.log(orders2.getCount(), orders2.first().getUser() === user2);
	 *    });
	 * 
	 * ## Binding
	 * 
	 * Data binding using [ViewModels](https://docs.sencha.com/extjs/6.2.0/modern/Ext.app.ViewModel.html) have functionality to be able to recognize
	 * associated data as part of a bind statement. For example:
	 * + `{user.orders}` binds to the orders store for a user.
	 * + `{order.user.name}` binds to the name of the user taken from the order.
	 * 
	 * # Association Concepts
	 * 
	 * ## Roles
	 * 
	 * The role is used to determine generated names for an association. By default, the role is generated from
	 * either the field name (in a keyed association) or the model name. This naming follows a pattern defined by
	 * the [`Ext.data.schema.Namer`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html). To change a specific instance, an explicit role can be specified:
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: {
	 *                type: 'Thread',
	 *                role: 'discussion',
	 *                inverse: 'comments'
	 *    
	 *            }
	 *        }]
	 *    });
	 * 
	 * In the above example, the `Thread` will be decorated with a `comments` method that returns the store.
	 * The `Post` will be decorated with `getDiscussion/setDiscussion` methods.
	 * 
	 * ## Generated Methods
	 * 
	 * Associations generate methods to allow reading and manipulation on associated data.
	 * 
	 * On records that have a "to many" relationship, a single methods that returns a [`Ext.data.Store`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) is created.
	 * See [storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). On records that have a "to one" relationship, 2 methods are generated, a
	 * [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and a [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 * 
	 * ## Reflexive
	 * 
	 * Associations are reflexive. By declaring one "side" of the relationship, the other is automatically setup. In
	 * the example below, there is no code in the `Thread` entity regarding the association, however by virtue of the
	 * declaration in post, `Thread` is decorated with the appropriate infrastructure to participate in the association.
	 * 
	 *    Ext.define('Thread', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    Ext.define('Post', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'content', {
	 *            name: 'threadId',
	 *            reference: 'Thread'
	 *        }]
	 *    });
	 * 
	 * ## Naming
	 * 
	 * Referring to model names in associations depends on their [Ext.data.Model.entityName](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName). See
	 * the "Relative Naming" section in the [`Ext.data.schema.Schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html) documentation.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The name of this association.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
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
		 * @param   {object}                              config
		 * @returns {Ext.data.schema.Association.Statics}        this
		 */
		initConfig? (config: object): Ext.data.schema.Association.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                              [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.Association.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.Association.Statics;
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
		 * @returns {Ext.data.schema.Association.Statics}  
		 */
		statics? (): Ext.data.schema.Association.Statics;
	}
}
declare namespace Ext.data.schema.HasMany {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.HasMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasMany.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This class provides for creating a keyless [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) association. This declaration should
	 * be on "many" entity. See [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) and [`Ext.data.schema.Association`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) for more information.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * An alias for [role](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-role).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		associatedName?: string;
		/** 
		 * The key field to use in this association
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		foreignKey?: string;
		/** 
		 * An alias for [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-type).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		model?: string;
		/** 
		 * An alias for [role](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-role).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
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
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.data.schema.HasOne {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.HasOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.HasOne.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This class provides for creating a keyless [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) association. This declaration should
	 * be on "owner" entity. See [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html) and [`Ext.data.schema.Association`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) for more information.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * An alias for [role](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-role).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		associatedName?: string;
		/** 
		 * The key field to use in this association
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		foreignKey?: string;
		/** 
		 * An alias for [type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-type).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		model?: string;
		/** 
		 * An alias for [role](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-role).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
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
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.data.schema.ManyToMany {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.ManyToMany](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToMany.html)
	 * This relationship describes the case where any one entity of one type may relate to any
	 * number of entities of another type, and also in the reverse.
	 * 
	 * This form of association cannot store id's in the related entities since that would
	 * limit the number of related entities to one for the entity with the foreign key. Instead,
	 * these relationships are typically implemented using a so-called "matrix" table. This
	 * table typically has two columns to hold the id's of a pair of related entities. This
	 * pair of id's is unique in the matrix table.
	 * 
	 * # Declaration Forms
	 * 
	 *     // Fully spelled out - all properties are their defaults:
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: {
	 *                     field: 'groupId',
	 *                     role: 'groups'
	 *                 }
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate "right" object and use boolean to indicate Group is on the
	 *     // right. By default, left/right is determined by alphabetic order.
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: {
	 *                 type: 'User',
	 *                 role: 'users',
	 *                 field: 'userId',
	 *                 right: true
	 *             }
	 *         }
	 *     });
	 *    
	 *     // Eliminate object completely and rely on string to name the other type. Still
	 *     // keep Group on the "right".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: {
	 *             UserGroups: 'User#'   // '#' is on the side (left or right) of Group
	 *         }
	 *     });
	 *    
	 *     // Remove explicit matrix name and keep Group on the "right". Generated matrixName
	 *     // remains "UserGroups".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User#'
	 *         ]
	 *     });
	 *    
	 *     // Minimal definition but now Group is on the "left" since "Group" sorts before
	 *     // "User". Generated matrixName is now "GroupUsers".
	 *    
	 *     Ext.define('App.models.Group', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         manyToMany: [
	 *             'User'
	 *         ]
	 *     });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The name of this association.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
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
		 * @param   {object}                             config
		 * @returns {Ext.data.schema.ManyToMany.Statics}        this
		 */
		initConfig? (config: object): Ext.data.schema.ManyToMany.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                      name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                             [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.ManyToMany.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.ManyToMany.Statics;
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
		 * @returns {Ext.data.schema.ManyToMany.Statics}  
		 */
		statics? (): Ext.data.schema.ManyToMany.Statics;
	}
}
declare namespace Ext.data.schema.ManyToOne {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.ManyToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * Declares a relationship between a single entity type and multiple related entities. The relationship can
	 * be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name']
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title', {
	 *            name: 'customerId',
	 *            reference: 'Customer'
	 *        }]
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('Customer', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasMany: 'Ticket'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'title']
	 *    });
	 *    
	 *    // Generated methods
	 *    var customer = new Customer();
	 *    customer.tickets();
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.getCustomer();
	 *    ticket.setCustomer();
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * The "one" record type will have a generated [Ext.data.schema.Association.storeGetter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-storeGetter). The "many" record type
	 * will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The name of this association.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
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
		 * @returns {Ext.data.schema.ManyToOne.Statics}        this
		 */
		initConfig? (config: object): Ext.data.schema.ManyToOne.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                     name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                            [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.ManyToOne.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.ManyToOne.Statics;
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
		 * @returns {Ext.data.schema.ManyToOne.Statics}  
		 */
		statics? (): Ext.data.schema.ManyToOne.Statics;
	}
}
declare namespace Ext.data.schema.OneToOne {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.OneToOne](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html)
	 * **This class is never created directly. It should be constructed through associations in [`Ext.data.Model`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html).**
	 * 
	 * This is a specialized version of [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html) that declares a relationship between a single
	 * entity type and a single related entities. The relationship can be declared as a keyed or keyless relationship.
	 * 
	 *    // Keyed
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name', {
	 *            name: 'userInfoId',
	 *            reference: {
	 *                type: 'UserInfo',
	 *                unique: true
	 *            }
	 *        }]
	 *    });
	 *    
	 *    Ext.define('UserInfo', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Keyless
	 *    Ext.define('User', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'name'],
	 *        hasOne: 'UserInfo'
	 *    });
	 *    
	 *    Ext.define('Ticket', {
	 *        extend: 'Ext.data.Model',
	 *        fields: ['id', 'secretKey']
	 *    });
	 *    
	 *    // Generated methods
	 *    var user = new User();
	 *    user.getUserInfo();
	 *    user.setUserInfo();
	 *    
	 *    var info = new UserInfo();
	 *    info.getUser();
	 *    info.setUser();
	 *    
	 *    
	 *    var ticket = new Ticket();
	 *    ticket.setCustomer(customer);
	 *    console.log(ticket.getCustomer()); // The customer object
	 * 
	 * By declaring a keyed relationship, extra functionality is gained that maintains
	 * the key field in the model as changes are made to the association.
	 * 
	 * For available configuration options, see [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html).
	 * Each record type will have a [getter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordGetter) and [setter](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html#method-recordSetter).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The name of this association.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		name?: string;
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
		 * @param   {object}                           config
		 * @returns {Ext.data.schema.OneToOne.Statics}        this
		 */
		initConfig? (config: object): Ext.data.schema.OneToOne.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                    name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                           [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.OneToOne.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.OneToOne.Statics;
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
		 * @returns {Ext.data.schema.OneToOne.Statics}  
		 */
		statics? (): Ext.data.schema.OneToOne.Statics;
	}
}
declare namespace Ext.data.schema.Reference {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.Reference](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html)
	 * **This is not a real JavaScript class and cannot be created.  This is for documentation purposes only.**
	 * 
	 * This documentation is for:
	 * 
	 * - [reference config](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-reference)
	 * 
	 * The [name](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName) of the entity referenced by this field.
	 * In most databases, this relationship is represented by a "foreign key". That is, a
	 * value for such a field matches the value of the [id](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-idProperty)
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
	 * If a `reference` is not nullable, set the [Ext.data.field.Field.allowBlank](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.field.Field.html#cfg-allowBlank) property
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
	 * If the name of the generated [association](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html) or other aspects
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
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The name of the association. By default, the name of the association is the
		 * capitalized `inverse` plus "By" plus the capitalized `role`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		association?: string;
		/** 
		 * Set this property instead of `reference.type` to indicate that the referenced entity
		 * is an owned child of this entity. That is, the `reference` entity should be deleted
		 * when this entity is deleted.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		child?: string;
		/** 
		 * The name of the setter function (if required). Typically this is generated
		 * based on the [role](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Reference.html#cfg-role).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		getterName?: string;
		/** 
		 * The name of the inverse role (of this entity with respect to the `reference`
		 * entity). By default, this is the [pluralized](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Inflector.html#method-pluralize)
		 * name of this entity, unless this `reference` is `unique`, in which case the default
		 * name is the [singularized](https://docs.sencha.com/extjs/6.2.0/modern/Ext.util.Inflector.html#method-singularize) name of this entity.
		 * 
		 * This config may also be an object containing a role, getter, or setter.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		inverse?: string | object;
		/** 
		 * Set this property instead of `reference.type` to indicate that the referenced entity
		 * is the owning parent of this entity. That is, this entity should be deleted when the
		 * `reference` entity is deleted.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		parent?: string;
		/** 
		 * A custom [Ext.data.reader.Reader](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.reader.Reader.html) configuration for reading
		 * nested data.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		reader?: object;
		/** 
		 * The name of the role played by the referenced entity. By default, this is the field
		 * name (minus its "Id" suffix if present).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		role?: string;
		/** 
		 * The type which this field references. This is the value set by the string form of
		 * `reference`. If the referenced entity has an ownership relationship this field
		 * should be omitted and `reference.parent` or `reference.child` should be specified
		 * instead.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		type?: string;
		/** 
		 * `true` True for this reference to create a [`Ext.data.schema.OneToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.OneToOne.html)
		 * relationship. If not specified, the default is [`Ext.data.schema.ManyToOne`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.ManyToOne.html).
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		unique?: boolean;
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
		 * @param   {object}   config
		 * @returns {Ext.Base}        this
		 */
		initConfig? (config: object): Ext.Base;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object} name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}        [value] The value to set for the name parameter.
		 * @returns {Ext.Base}              this
		 */
		setConfig? (name: string | object, value?: object): Ext.Base;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.data.schema.Schema {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.data.schema.Schema](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Schema.html)
	 * A Schema is a collection of related [entities](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html) and their respective
	 * [associations](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Association.html).
	 * 
	 * # Schema Instances
	 * 
	 * By default a single instance of this class is created which serves as the schema for all
	 * entities that do not have an explicit [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config
	 * either specified or inherited. This is sufficient in most cases.
	 * 
	 * When an entity does specify a [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema), however, that
	 * looks up (or creates) an instance for that entity class which is then inherited.
	 * 
	 * **Important:** All related entities _must_ belong to a single schema instance in order
	 * to properly link up their associations.
	 * 
	 * ## Configuring Schemas
	 * 
	 * The best way to control the configuration of your `schema` is to define a base class for
	 * all of your entities and use the [`schema`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-schema) config like
	 * this:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         // This configures the default schema because we don't assign an "id":
	 *         schema: {
	 *             // configs go here
	 *         }
	 *     });
	 * 
	 * **Note:** Only one explicit configuration can be applied to the default schema. In most
	 * applications this will not be an issue.
	 * 
	 * By using a base class for your entities you can ensure that the default schema is fully
	 * configured before declaration of your classes proceeds. This is especially helpful if
	 * you need to set the `namespace` for your schema (see below).
	 * 
	 * ## Relative Naming
	 * 
	 * When describing associations between entities, it is desirable to use shorthand names
	 * that do not contain the common namespace portion. This is called the `entityName` as
	 * opposed to its class name. By default, the `entityName` is the full class name. However,
	 * if a namespace is used, the common portion can be discarded and we can derive a shorter name.
	 * In the following code, `"MyApp.model.Foo"` has an `entityName` of `"Foo"` and the schema has
	 * a `namespace` of "MyApp.model".
	 * 
	 * If you use deeper nesting for entities, you may need to set the `namespace` config to
	 * account for this. For example:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model'
	 *         }
	 *     });
	 * 
	 * Your derived classes now will generate proper default `entityName` values even if they
	 * have further namespaces. For example, "MyApp.model.foo.Thing" will produce "foo.Thing"
	 * as the `entityName` given the above as a base class.
	 * 
	 * # Association Naming
	 * 
	 * There are various terms involved when describing associations. Perhaps the simplest
	 * example that will clarify these terms is that of the common many-to-many association
	 * of User and Group.
	 * 
	 * - `entityName` - The names "User" and "Group" are the `entityName` values associated
	 *   with these two classes. These are derived from their full classnames (perhaps
	 *   something like "App.model.User" and "App.model.Group").
	 * - `associationName` - When talking about associations, especially the many-to-many
	 *   variety, it is important to give them names. Associations are not owned by either of
	 *   the entities involved, so this name is similar to an `entityName`. In the case of
	 *   "User" and "Group", the default `associationName` would be "GroupUsers".
	 * - `left` and `right` - Associations describe a relationship between two entities. To
	 *   talk about specific associations we would use the `entityName` of the parties (such
	 *   as "User" or "Group"). When discussing associations in the abstract, however, it is
	 *   very helpful to be able to talk about the entities in an association in a general way.
	 *   In the case of the "GroupUsers" association, "User" is said to be the `left` while
	 *   "Group" is said to be the `right`. In a many-to-many association the selection of
	 *   `left` and `right` is arbitrary. When a foreign-key is involved, the `left` entity
	 *   is the one containing the foreign-key.
	 * 
	 * ## Custom Naming Conventions
	 * 
	 * One of the jobs the the `Schema` is to manage name generation (such as `entityName`).
	 * This job is delegated to a class called the `namer`. If you need to generate names in
	 * other ways, you can provide a custom `namer` for your classes:
	 * 
	 *     Ext.define('MyApp.model.Base', {
	 *         extend: 'Ext.data.Model',
	 *    
	 *         schema: {
	 *             namespace: 'MyApp.model',
	 *             namer: 'custom'
	 *         }
	 *     });
	 * 
	 * This will create a class using the alias "namer.custom". For example:
	 * 
	 *     Ext.define('MyApp.model.CustomNamer', {
	 *         extend: 'Ext.data.schema.Namer',
	 *    
	 *         alias: 'namer.custom',
	 *         ...
	 *     });
	 * 
	 * For details see the documentation for [Namer](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.schema.Namer.html).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * This config is used to initialize the [`Ext.data.Model.identifier`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-identifier) config
		 * for classes that do not define one.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		defaultIdentifier?: object;
		/** 
		 * The time to wait (in ms) before checking for null foreign keys on records that
		 * will cause them to be dropped. This is useful for allowing records to be moved to a different
		 * source.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		keyCheckDelay?: number;
		/** 
		 * Specifies or configures the name generator for the schema.
		 * @configuration
		 * @optional
		 * @default 'default'
		 * @type {string|object|Ext.data.schema.Namer}
		 */
		namer?: string | object | Ext.data.schema.Namer;
		/** 
		 * The namespace for entity classes in this schema.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		namespace?: string;
		/** 
		 * This is a template used to produce [`Ext.data.proxy.Proxy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.proxy.Proxy.html) configurations for
		 * Models that do not define an explicit [`proxy`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#cfg-proxy).
		 * 
		 * This template is processed with the Model class as the data object which means
		 * any static properties of the Model are available. The most useful of these are
		 * 
		 * - `prefix` - The `urlPrefix` property of this instance.
		 * - `entityName` - The [name](https://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Model.html#property-entityName) of the Model
		 *   (for example, "User").
		 * - `schema` - This instance.
		 * @configuration
		 * @optional
		 * @default {type: 'ajax', url: '{prefix}/{entityName}'}
		 * @type {object|Ext.util.ObjectTemplate}
		 */
		proxy?: object | Ext.util.ObjectTemplate;
		/** 
		 * This is the URL prefix used for all requests to the server. It could be something
		 * like "/~api". This value is included in the `proxy` template data as "prefix".
		 * @configuration
		 * @optional
		 * @default ""
		 * @type {string}
		 */
		urlPrefix?: string;
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
		 * @returns {Ext.data.schema.Schema.Statics}        this
		 */
		initConfig? (config: object): Ext.data.schema.Schema.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.data.schema.Schema.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.data.schema.Schema.Statics;
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
		 * @returns {Ext.data.schema.Schema.Statics}  
		 */
		statics? (): Ext.data.schema.Schema.Statics;
	}
}
