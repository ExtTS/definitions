declare namespace Ext.chart.legend.sprite {
	/** 
	 * @private (class)
	 */
	class Border extends Ext.draw.sprite.Rect {}
	/** 
	 * @private (class)
	 */
	class Item extends Ext.draw.sprite.Composite {}
}
declare namespace Ext.chart.legend.store {
	/** 
	 * [Ext.chart.legend.store.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Item.html)
	 * The data model for legend items.
	 */
	class Item extends Ext.data.Model {
		/** 
		 * @property
		 * @private (property)
		 * @default ['id', 'name', 'mark', 'disabled', 'series', 'index']
		 * @type {any[]}
		 */
		fields?: any[];
	}
	/** 
	 * [Ext.chart.legend.store.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Store.html)
	 * The store type used for legend items.
	 */
	class Store extends Ext.data.Store {
		/** 
		 * Returns the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Store.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAutoDestroy? (): boolean;
		/** 
		 * Sets the value of [autoDestroy](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Store.html#cfg-autoDestroy).
		 * @method
		 * @public (method)
		 * @param   {boolean} autoDestroy The new value.
		 * @returns {void}                
		 */
		setAutoDestroy? (autoDestroy: boolean): void;
	}
}
declare namespace Ext.chart.legend.store.Item {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.legend.store.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Item.html)
	 * The data model for legend items.
	 */
	interface Def extends Ext.chart.legend.store.Item {
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
		 * @returns {Ext.data.Model.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.data.Model.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.legend.store.Store {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.legend.store.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Store.html)
	 * The store type used for legend items.
	 */
	interface Def extends Ext.chart.legend.store.Store {
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
		 * @type {Ext.chart.legend.store.Store.Cfg}
		 */
		config?: Ext.chart.legend.store.Store.Cfg;
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
		 * @returns {Ext.data.Store.Statics|Ext.data.ProxyStore.Statics|Ext.data.AbstractStore.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.data.Store.Statics | Ext.data.ProxyStore.Statics | Ext.data.AbstractStore.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.legend.sprite.Border {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.legend.sprite.Border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.sprite.Border.html)
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {x: 'number', y: 'number', width: 'number', height: 'number', radius: 'number'}, aliases: {}, triggers: {x: 'path', y: 'path', width: 'path', height: 'path', radius: 'path'}, defaults: {x: 0, y: 0, width: 8, height: 8, radius: 0}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.legend.sprite.Item {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.legend.sprite.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.sprite.Item.html)
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {enabled: 'limited01', markerLabelGap: 'number'}, animationProcessors: {enabled: null, markerLabelGap: null}, defaults: {enabled: true, markerLabelGap: 5}, triggers: {enabled: 'enabled', markerLabelGap: 'layout'}, updaters: {layout: 'layoutUpdater', enabled: 'enabledUpdater'}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.legend.sprite.Border {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.legend.sprite.Border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.sprite.Border.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * The opacity of the fill. Limited from 0 to 1.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		fillOpacity?: number;
		/** 
		 * The color of the shape (a CSS color value).
		 * @configuration
		 * @optional
		 * @default "none"
		 * @type {string}
		 */
		fillStyle?: string;
		/** 
		 * The opacity of the sprite. Limited from 0 to 1.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		globalAlpha?: number;
		/** 
		 * Indicates how source images are drawn onto a destination image.
		 * globalCompositeOperation attribute is not supported by the SVG and VML (excanvas) engines.
		 * @configuration
		 * @optional
		 * @default source-over
		 * @type {string}
		 */
		globalCompositeOperation?: string;
		/** 
		 * The height of the sprite.
		 * @configuration
		 * @optional
		 * @default 8
		 * @type {number}
		 */
		height?: number;
		/** 
		 * Determines whether or not the sprite is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * The style of the line caps.
		 * @configuration
		 * @optional
		 * @default "butt"
		 * @type {string}
		 */
		lineCap?: string;
		/** 
		 * An even number of non-negative numbers specifying a dash/space sequence.
		 * Note that while this is supported in IE8 (VML engine), the behavior is
		 * different from Canvas and SVG. Please refer to this document for details:
		 * http://msdn.microsoft.com/en-us/library/bb264085(v=vs.85).aspx
		 * Although IE9 and IE10 have Canvas support, the 'lineDash'
		 * attribute is not supported in those browsers.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		lineDash?: any[];
		/** 
		 * A number specifying how far into the line dash sequence drawing commences.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		lineDashOffset?: number;
		/** 
		 * The style of the line join.
		 * @configuration
		 * @optional
		 * @default "miter"
		 * @type {string}
		 */
		lineJoin?: string;
		/** 
		 * The width of the line stroke.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		lineWidth?: number;
		/** 
		 * Sets the distance between the inner corner and the outer corner where two lines meet.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		miterLimit?: number;
		/** 
		 * The immediate parent of the sprite. Not necessarily a surface.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}
		 */
		parent?: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * The SVG based path string used by the sprite.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		path?: string;
		/** 
		 * The radius of the rounded corners.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * Applies an initial angle of rotation to the sprite.  May be a number
		 * specifying the rotation in degrees.  Or may be a config object using
		 * the below config options.
		 * 
		 * **Note:** Rotation config options will be overridden by values set on
		 * the [rotationRads](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationRads), [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY) configs.
		 * 
		 *    Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: Ext.getBody(),
		 *        width: 600,
		 *        height: 400,
		 *        sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91',
		 *            //rotation: 45
		 *            rotation: {
		 *                degrees: 45,
		 *                //rads: Math.PI / 4,
		 *                //centerX: 50,
		 *                //centerY: 50
		 *            }
		 *        }]
		 *    });
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		rotation?: number | object;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.<br/>
		 * Unless explicitly set, will default to the calculated center of the
		 * sprite along the x-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationRads](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationRads), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * Unless explicitly set, will default to the calculated center of the
		 * sprite along the y-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationRads](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationRads), and
		 * [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY)
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * Applies initial scaling to the sprite.  May be a number specifying
		 * the amount to scale both the x and y-axis.  The number value
		 * represents a percentage by which to scale the sprite.  **1** is equal
		 * to 100%, **2** would be 200%, etc.  Or may be a config object using
		 * the below config options.
		 * 
		 * **Note:** Scaling config options will be overridden by values set on
		 * the [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX), [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY), [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX),
		 * and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY) configs.
		 * 
		 *    Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: Ext.getBody(),
		 *        width: 600,
		 *        height: 400,
		 *        sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91',
		 *            //scaling: 2,
		 *            scaling: {
		 *                x: 2,
		 *                y: 2
		 *                //centerX: 100,
		 *                //centerY: 100
		 *            }
		 *        }]
		 *    });
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		scaling?: number | object;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY), and [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * The number value represents a percentage by which to scale the
		 * sprite.  **1** is equal to 100%, **2** would be 200%, etc.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY),
		 * [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.<br/>
		 * The number value represents a percentage by which to scale the
		 * sprite.  **1** is equal to 100%, **2** would be 200%, etc.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The amount blur used on the shadow.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		shadowBlur?: number;
		/** 
		 * The color of the shadow (a CSS color value).
		 * @configuration
		 * @optional
		 * @default "none"
		 * @type {string}
		 */
		shadowColor?: string;
		/** 
		 * The offset of the sprite's shadow on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		shadowOffsetX?: number;
		/** 
		 * The offset of the sprite's shadow on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		shadowOffsetY?: number;
		/** 
		 * The opacity of the stroke. Limited from 0 to 1.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		strokeOpacity?: number;
		/** 
		 * The color of the stroke (a CSS color value).
		 * @configuration
		 * @optional
		 * @default "none"
		 * @type {string}
		 */
		strokeStyle?: string;
		/** 
		 * The surface that this sprite is rendered into.
		 * This config is not meant to be used directly.
		 * Please use the [Ext.draw.Surface.add](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.Surface.html#method-add) method instead.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface}
		 */
		surface?: Ext.draw.Surface;
		/** 
		 * Determines whether the fill and stroke are affected by sprite transformations.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		transformFillStroke?: boolean;
		/** 
		 * Applies an initial translation, adjustment in x/y positioning, to the
		 * sprite.
		 * 
		 * **Note:** Translation config options will be overridden by values set
		 * on the [translationX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationX) and [translationY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationY) configs.
		 * 
		 *    Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: Ext.getBody(),
		 *        width: 600,
		 *        height: 400,
		 *            sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91',
		 *            translation: {
		 *                x: 50,
		 *                y: 50
		 *            }
		 *        }]
		 *    });
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		translation?: object;
		/** 
		 * The translation, position offset, of the sprite on the x-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [translation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translation) and [translationY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationY)
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation, position offset, of the sprite on the y-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [translation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translation) and [translationX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationX)
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationY?: number;
		/** 
		 * The width of the sprite.
		 * @configuration
		 * @optional
		 * @default 8
		 * @type {number}
		 */
		width?: number;
		/** 
		 * The position of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		x?: number;
		/** 
		 * The position of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		y?: number;
		/** 
		 * The stacking order of the sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		zIndex?: number;
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
		 * @param   {object}                                 config
		 * @returns {Ext.chart.legend.sprite.Border.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.legend.sprite.Border.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                 [value] The value to set for the name parameter.
		 * @returns {Ext.chart.legend.sprite.Border.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.legend.sprite.Border.Statics;
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
		 * @returns {Ext.chart.legend.sprite.Border.Statics}  
		 */
		statics? (): Ext.chart.legend.sprite.Border.Statics;
	}
}
declare namespace Ext.chart.legend.sprite.Item {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.legend.sprite.Item](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.sprite.Item.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * The opacity of the fill. Limited from 0 to 1.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		fillOpacity?: number;
		/** 
		 * The color of the shape (a CSS color value).
		 * @configuration
		 * @optional
		 * @default "none"
		 * @type {string}
		 */
		fillStyle?: string;
		/** 
		 * The opacity of the sprite. Limited from 0 to 1.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		globalAlpha?: number;
		/** 
		 * Indicates how source images are drawn onto a destination image.
		 * globalCompositeOperation attribute is not supported by the SVG and VML (excanvas) engines.
		 * @configuration
		 * @optional
		 * @default source-over
		 * @type {string}
		 */
		globalCompositeOperation?: string;
		/** 
		 * Determines whether or not the sprite is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Sprite's attributes are processed after initConfig.
		 * So we need to init below configs lazily, as otherwise
		 * adding sprites (created from those configs) to composite
		 * will result in an attempt to access attributes that
		 * composite doesn't have yet.
		 * @configuration
		 * @optional
		 * @default {$value: {type: 'text'}, lazy: true}
		 * @type {object}
		 */
		label?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		legend?: object;
		/** 
		 * The style of the line caps.
		 * @configuration
		 * @optional
		 * @default "butt"
		 * @type {string}
		 */
		lineCap?: string;
		/** 
		 * An even number of non-negative numbers specifying a dash/space sequence.
		 * Note that while this is supported in IE8 (VML engine), the behavior is
		 * different from Canvas and SVG. Please refer to this document for details:
		 * http://msdn.microsoft.com/en-us/library/bb264085(v=vs.85).aspx
		 * Although IE9 and IE10 have Canvas support, the 'lineDash'
		 * attribute is not supported in those browsers.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		lineDash?: any[];
		/** 
		 * A number specifying how far into the line dash sequence drawing commences.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		lineDashOffset?: number;
		/** 
		 * The style of the line join.
		 * @configuration
		 * @optional
		 * @default "miter"
		 * @type {string}
		 */
		lineJoin?: string;
		/** 
		 * The width of the line stroke.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		lineWidth?: number;
		/** 
		 * @configuration
		 * @optional
		 * @default {$value: {type: 'circle'}, lazy: true}
		 * @type {object}
		 */
		marker?: object;
		/** 
		 * Sets the distance between the inner corner and the outer corner where two lines meet.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		miterLimit?: number;
		/** 
		 * The immediate parent of the sprite. Not necessarily a surface.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}
		 */
		parent?: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		record?: object;
		/** 
		 * Applies an initial angle of rotation to the sprite.  May be a number
		 * specifying the rotation in degrees.  Or may be a config object using
		 * the below config options.
		 * 
		 * **Note:** Rotation config options will be overridden by values set on
		 * the [rotationRads](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationRads), [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY) configs.
		 * 
		 *    Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: Ext.getBody(),
		 *        width: 600,
		 *        height: 400,
		 *        sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91',
		 *            //rotation: 45
		 *            rotation: {
		 *                degrees: 45,
		 *                //rads: Math.PI / 4,
		 *                //centerX: 50,
		 *                //centerY: 50
		 *            }
		 *        }]
		 *    });
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		rotation?: number | object;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.<br/>
		 * Unless explicitly set, will default to the calculated center of the
		 * sprite along the x-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationRads](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationRads), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * Unless explicitly set, will default to the calculated center of the
		 * sprite along the y-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationRads](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationRads), and
		 * [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY)
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * Applies initial scaling to the sprite.  May be a number specifying
		 * the amount to scale both the x and y-axis.  The number value
		 * represents a percentage by which to scale the sprite.  **1** is equal
		 * to 100%, **2** would be 200%, etc.  Or may be a config object using
		 * the below config options.
		 * 
		 * **Note:** Scaling config options will be overridden by values set on
		 * the [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX), [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY), [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX),
		 * and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY) configs.
		 * 
		 *    Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: Ext.getBody(),
		 *        width: 600,
		 *        height: 400,
		 *        sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91',
		 *            //scaling: 2,
		 *            scaling: {
		 *                x: 2,
		 *                y: 2
		 *                //centerX: 100,
		 *                //centerY: 100
		 *            }
		 *        }]
		 *    });
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		scaling?: number | object;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY), and [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX)
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * The number value represents a percentage by which to scale the
		 * sprite.  **1** is equal to 100%, **2** would be 200%, etc.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingY),
		 * [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.<br/>
		 * The number value represents a percentage by which to scale the
		 * sprite.  **1** is equal to 100%, **2** would be 200%, etc.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		series?: object;
		/** 
		 * The amount blur used on the shadow.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		shadowBlur?: number;
		/** 
		 * The color of the shadow (a CSS color value).
		 * @configuration
		 * @optional
		 * @default "none"
		 * @type {string}
		 */
		shadowColor?: string;
		/** 
		 * The offset of the sprite's shadow on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		shadowOffsetX?: number;
		/** 
		 * The offset of the sprite's shadow on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		shadowOffsetY?: number;
		/** 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		sprites?: any[];
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		store?: object;
		/** 
		 * The opacity of the stroke. Limited from 0 to 1.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		strokeOpacity?: number;
		/** 
		 * The color of the stroke (a CSS color value).
		 * @configuration
		 * @optional
		 * @default "none"
		 * @type {string}
		 */
		strokeStyle?: string;
		/** 
		 * The surface that this sprite is rendered into.
		 * This config is not meant to be used directly.
		 * Please use the [Ext.draw.Surface.add](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.Surface.html#method-add) method instead.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface}
		 */
		surface?: Ext.draw.Surface;
		/** 
		 * Determines whether the fill and stroke are affected by sprite transformations.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		transformFillStroke?: boolean;
		/** 
		 * Applies an initial translation, adjustment in x/y positioning, to the
		 * sprite.
		 * 
		 * **Note:** Translation config options will be overridden by values set
		 * on the [translationX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationX) and [translationY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationY) configs.
		 * 
		 *    Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: Ext.getBody(),
		 *        width: 600,
		 *        height: 400,
		 *            sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91',
		 *            translation: {
		 *                x: 50,
		 *                y: 50
		 *            }
		 *        }]
		 *    });
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		translation?: object;
		/** 
		 * The translation, position offset, of the sprite on the x-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [translation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translation) and [translationY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationY)
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation, position offset, of the sprite on the y-axis.
		 * 
		 * **Note:** Transform configs are _always_ performed in the following
		 * order:
		 * 
		 * 1. Scaling
		 * 2. Rotation
		 * 3. Translation
		 * 
		 * See also: [translation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translation) and [translationX](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-translationX)
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationY?: number;
		/** 
		 * The stacking order of the sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		zIndex?: number;
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
		 * @param   {object}                               config
		 * @returns {Ext.chart.legend.sprite.Item.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.legend.sprite.Item.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.chart.legend.sprite.Item.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.legend.sprite.Item.Statics;
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
		 * @returns {Ext.chart.legend.sprite.Item.Statics}  
		 */
		statics? (): Ext.chart.legend.sprite.Item.Statics;
	}
}
declare namespace Ext.chart.legend.store.Store {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.legend.store.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Store.html)
	 * The store type used for legend items.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		autoDestroy?: boolean;
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
