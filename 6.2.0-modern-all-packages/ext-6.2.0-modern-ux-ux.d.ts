declare namespace Ext.ux {
	/** 
	 * [Ext.ux.Gauge](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html)
	 * Displays a value within the given interval as a gauge. For example:
	 * 
	 *    Ext.create({
	 *        xtype: 'panel',
	 *        renderTo: document.body,
	 *        width: 200,
	 *        height: 200,
	 *        layout: 'fit',
	 *        items: {
	 *            xtype: 'gauge',
	 *            padding: 20,
	 *            value: 55,
	 *            minValue: 40,
	 *            maxValue: 80
	 *        }
	 *    });
	 * 
	 * It's also possible to use gauges to create loading indicators:
	 * 
	 *    Ext.create({
	 *        xtype: 'panel',
	 *        renderTo: document.body,
	 *        width: 200,
	 *        height: 200,
	 *        layout: 'fit',
	 *        items: {
	 *            xtype: 'gauge',
	 *            padding: 20,
	 *            trackStart: 0,
	 *            trackLength: 360,
	 *            value: 20,
	 *            valueStyle: {
	 *                round: true
	 *            },
	 *            textTpl: 'Loading...',
	 *            animation: {
	 *                easing: 'linear',
	 *                duration: 100000
	 *            }
	 *        }
	 *    }).items.first().setAngleOffset(360 * 100);
	 * 
	 */
	class Gauge extends Ext.Gadget {
		/** 
		 * @property
		 * @private (property)
		 * @default 'value'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default [{reference: 'innerElement', children: [{reference: 'textElement', cls: Ext.baseCSSPrefix + 'gauge-text'}]}]
		 * @type {any[]}
		 */
		template?: any[];
		/** 
		 * Returns the value of [angleOffset](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-angleOffset).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getAngleOffset? (): number;
		/** 
		 * Returns the value of [animation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @returns {object|boolean}  
		 */
		getAnimation? (): object | boolean;
		/** 
		 * Returns the value of [clockwise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-clockwise).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getClockwise? (): boolean;
		/** 
		 * Returns the value of [maxValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-maxValue).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxValue? (): number;
		/** 
		 * Returns the value of [minValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-minValue).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinValue? (): number;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number|string}  
		 */
		getPadding? (): number | string;
		/** 
		 * Returns the value of [textAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-textAlign).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTextAlign? (): string;
		/** 
		 * Returns the value of [textTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-textTpl).
		 * @method
		 * @public (method)
		 * @returns {Ext.XTemplate}  
		 */
		getTextTpl? (): Ext.XTemplate;
		/** 
		 * Returns the value of [trackLength](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackLength).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTrackLength? (): number;
		/** 
		 * Returns the value of [trackStart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackStart).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTrackStart? (): number;
		/** 
		 * Returns the value of [trackStyle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackStyle).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTrackStyle? (): object;
		/** 
		 * Returns the value of [valueStyle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-valueStyle).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getValueStyle? (): object;
		/** 
		 * Sets the value of [angleOffset](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-angleOffset).
		 * @method
		 * @public (method)
		 * @param   {number} angleOffset The new value.
		 * @returns {void}               
		 */
		setAngleOffset? (angleOffset: number): void;
		/** 
		 * Sets the value of [animation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @param   {object|boolean} animation The new value.
		 * @returns {void}                     
		 */
		setAnimation? (animation: object | boolean): void;
		/** 
		 * Sets the value of [clockwise](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-clockwise).
		 * @method
		 * @public (method)
		 * @param   {boolean} clockwise The new value.
		 * @returns {void}              
		 */
		setClockwise? (clockwise: boolean): void;
		/** 
		 * Sets the value of [maxValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-maxValue).
		 * @method
		 * @public (method)
		 * @param   {number} maxValue The new value.
		 * @returns {void}            
		 */
		setMaxValue? (maxValue: number): void;
		/** 
		 * Sets the value of [minValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-minValue).
		 * @method
		 * @public (method)
		 * @param   {number} minValue The new value.
		 * @returns {void}            
		 */
		setMinValue? (minValue: number): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number|string} padding The new value.
		 * @returns {void}                  
		 */
		setPadding? (padding: number | string): void;
		/** 
		 * Sets the value of [textAlign](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-textAlign).
		 * @method
		 * @public (method)
		 * @param   {string} textAlign The new value.
		 * @returns {void}             
		 */
		setTextAlign? (textAlign: string): void;
		/** 
		 * Sets the value of [textTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-textTpl).
		 * @method
		 * @public (method)
		 * @param   {Ext.XTemplate} textTpl The new value.
		 * @returns {void}                  
		 */
		setTextTpl? (textTpl: Ext.XTemplate): void;
		/** 
		 * Sets the value of [trackLength](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackLength).
		 * @method
		 * @public (method)
		 * @param   {number} trackLength The new value.
		 * @returns {void}               
		 */
		setTrackLength? (trackLength: number): void;
		/** 
		 * Sets the value of [trackStart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackStart).
		 * @method
		 * @public (method)
		 * @param   {number} trackStart The new value.
		 * @returns {void}              
		 */
		setTrackStart? (trackStart: number): void;
		/** 
		 * Sets the value of [trackStyle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackStyle).
		 * @method
		 * @public (method)
		 * @param   {object} trackStyle The new value.
		 * @returns {void}              
		 */
		setTrackStyle? (trackStyle: object): void;
		/** 
		 * Sets the value of [valueStyle](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-valueStyle).
		 * @method
		 * @public (method)
		 * @param   {object} valueStyle The new value.
		 * @returns {void}              
		 */
		setValueStyle? (valueStyle: object): void;
		/** 
		 * Stops the current value or [angleOffset](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-angleOffset) animation.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		stopAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doDestroy? (): void;
	}
}
declare namespace Ext.ux.Gauge {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.ux.Gauge](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html)
	 * Displays a value within the given interval as a gauge. For example:
	 * 
	 *    Ext.create({
	 *        xtype: 'panel',
	 *        renderTo: document.body,
	 *        width: 200,
	 *        height: 200,
	 *        layout: 'fit',
	 *        items: {
	 *            xtype: 'gauge',
	 *            padding: 20,
	 *            value: 55,
	 *            minValue: 40,
	 *            maxValue: 80
	 *        }
	 *    });
	 * 
	 * It's also possible to use gauges to create loading indicators:
	 * 
	 *    Ext.create({
	 *        xtype: 'panel',
	 *        renderTo: document.body,
	 *        width: 200,
	 *        height: 200,
	 *        layout: 'fit',
	 *        items: {
	 *            xtype: 'gauge',
	 *            padding: 20,
	 *            trackStart: 0,
	 *            trackLength: 360,
	 *            value: 20,
	 *            valueStyle: {
	 *                round: true
	 *            },
	 *            textTpl: 'Loading...',
	 *            animation: {
	 *                easing: 'linear',
	 *                duration: 100000
	 *            }
	 *        }
	 *    }).items.first().setAngleOffset(360 * 100);
	 * 
	 */
	interface Def extends Ext.ux.Gauge {
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
		 * @type {Ext.ux.Gauge.Cfg}
		 */
		config?: Ext.ux.Gauge.Cfg;
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
		 * @returns {Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | object | any;
	}
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.ux.Gauge](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html)
	 * Displays a value within the given interval as a gauge. For example:
	 * 
	 *    Ext.create({
	 *        xtype: 'panel',
	 *        renderTo: document.body,
	 *        width: 200,
	 *        height: 200,
	 *        layout: 'fit',
	 *        items: {
	 *            xtype: 'gauge',
	 *            padding: 20,
	 *            value: 55,
	 *            minValue: 40,
	 *            maxValue: 80
	 *        }
	 *    });
	 * 
	 * It's also possible to use gauges to create loading indicators:
	 * 
	 *    Ext.create({
	 *        xtype: 'panel',
	 *        renderTo: document.body,
	 *        width: 200,
	 *        height: 200,
	 *        layout: 'fit',
	 *        items: {
	 *            xtype: 'gauge',
	 *            padding: 20,
	 *            trackStart: 0,
	 *            trackLength: 360,
	 *            value: 20,
	 *            valueStyle: {
	 *                round: true
	 *            },
	 *            textTpl: 'Loading...',
	 *            animation: {
	 *                easing: 'linear',
	 *                duration: 100000
	 *            }
	 *        }
	 *    }).items.first().setAngleOffset(360 * 100);
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The angle at which the [minValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-minValue) starts in case of a circular gauge.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		angleOffset?: number;
		/** 
		 * The animation applied to the gauge on changes to the value
		 * and the angleOffset configs. Defaults to 1 second animation
		 * with the  'out' easing.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {object|boolean}
		 */
		animation?: object | boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'gauge'
		 * @type {string}
		 */
		baseCls?: string;
		/** 
		 * `true` - value increments in a clockwise fashion
		 * `false` - value increments in an anticlockwise fashion
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		clockwise?: boolean;
		/** 
		 * The maximum value that the gauge can represent.
		 * @configuration
		 * @optional
		 * @default 100
		 * @type {number}
		 */
		maxValue?: number;
		/** 
		 * The minimum value that the gauge can represent.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minValue?: number;
		/** 
		 * Gauge sector padding in pixels or percent of
		 * width/height, whichever is smaller.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number|string}
		 */
		padding?: number | string;
		/** 
		 * The current value of the gauge.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		start?: number;
		/** 
		 * If the gauge has a donut hole, the text will be centered inside it.
		 * Otherwise, the text will be centered in the middle of the gauge's
		 * bounding box. This config allows to alter the position of the text
		 * in the latter case. See the docs for the `align` option to the
		 * {@Ext.util.Region#alignTo} method for possible ways of alignment
		 * of the text to the guage's bounding box.
		 * @configuration
		 * @optional
		 * @default 'c-c'
		 * @type {string}
		 */
		textAlign?: string;
		/** 
		 * The template for the text in the center of the gauge.
		 * The available data values are:
		 * 
		 * - `value` - The value of the gauge.
		 * - `percent` - The value as a percentage between 0 and 100.
		 * - `minValue` - The value of the [minValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-minValue) config.
		 * - `maxValue` - The value of the [maxValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-maxValue) config.
		 * - `delta` - The delta between the [minValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-minValue) and [maxValue](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-maxValue).
		 * @configuration
		 * @optional
		 * @default ['<tpl>{value:number("0.00")}%</tpl>']
		 * @type {Ext.XTemplate}
		 */
		textTpl?: Ext.XTemplate;
		/** 
		 * The angle in the (0, 360] interval to add to the [trackStart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.ux.Gauge.html#cfg-trackStart) angle
		 * to determine the angle at which the track ends.
		 * @configuration
		 * @optional
		 * @default 270
		 * @type {number}
		 */
		trackLength?: number;
		/** 
		 * The angle in the [0, 360) interval at which the gauge's track sector starts.
		 * E.g. 0 for 3 o-clock, 90 for 6 o-clock, 180 for 9 o-clock, 270 for noon.
		 * @configuration
		 * @optional
		 * @default 135
		 * @type {number}
		 */
		trackStart?: number;
		/** 
		 * Track sector styles.
		 * @configuration
		 * @optional
		 * @default {outerRadius: '100%', innerRadius: '100% - 20', round: false}
		 * @type {object}
		 */
		trackStyle?: object;
		/** 
		 * Value sector styles.
		 * @configuration
		 * @optional
		 * @default {outerRadius: '100% - 2', innerRadius: '100% - 18', round: false}
		 * @type {object}
		 */
		valueStyle?: object;
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
