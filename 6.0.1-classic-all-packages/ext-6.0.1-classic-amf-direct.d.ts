declare namespace Ext.direct {
	/** 
	 * [Ext.direct.AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * The [AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * allows making RPC calls to a Java object on a BlazeDS or ColdFusion using either the AMFX or the AMF protocols.
	 * 
	 * The default protocol is AMFX which works on all browsers. If you choose AMF, a flash plugin might be loaded in certain browsers that do not support posting binary data to the server, e.g. Internet Explorer version 9 or less. To choose AMF, set the [binary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html#cfg-binary) property to true.
	 * 
	 * For AMFX, the server must be configured to expose the desired services via an HTTPEndpoint. For example, the following configuration snippet adds an HTTPEndpoint (AMFX endpoint) to the BlazeDS services-config.xml file:
	 * 
	 *    &lt;channel-definition id="my-http" class="mx.messaging.channels.HTTPChannel"&gt;
	 *     &lt;endpoint url="http://{server.name}:{server.port}/{context.root}/messagebroker/http" class="flex.messaging.endpoints.HTTPEndpoint"/&gt;
	 *    &lt;/channel-definition&gt;
	 *     
	 * 
	 * Once the HTTPEndpoint is configured, make sure the service is exposed via the channel by adding the channel (e.g. my-http) to your remoting-services.xml file.
	 * For example this allows services to be accessed remotely by both AMF and AMFX:
	 * 
	 *    &lt;default-channels&gt;
	 *     &lt;channel ref="my-amf"/&gt;
	 *     &lt;channel ref="my-http"/&gt;
	 *    &lt;/default-channels&gt;
	 * 
	 * In order to make a call, you first need to declare the API to Ext direct. The following example defines local methods to the services provided by the sample Products application provided by Adobe as part of the BlazeDS 4.x binary turnkey distribution's testdrive (Sample 5: Updating Data):
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/http", // URL for the HTTPEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-http", // the name of the HTTPEndpoint channel as defined in the server's services-config.xml
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * You can now call the service as follows:
	 * 
	 *    product.getProducts((function(provider, response) {
	 *        // do something with the response
	 *        console.log("Got " + response.data.length + " objects");
	 *    });
	 * 
	 * Note that in case server methods require parameters of a specific class (e.g. flex.samples.product.Product), you should make sure the passed parameter has a field called $flexType set to the class name (in this case flex.Samples.product.Product). This is similar to the remote class alias definition in ActionScript.
	 * 
	 * The following example shows how to define a binary AMF-based call:
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/amf", // URL for the AMFEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-amf", // the name of the AMFEndpoint channel as defined in the server's services-config.xml
	 *            "binary": true, // chooses AMF encoding
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * Calling the server is done the same way as for the AMFX-based definition.
	 */
	class AmfRemotingProvider extends Ext.direct.Provider {
		/** 
		 * Create an event from an AMFX response object
		 * @method
		 * @public (method)
		 * @param   {object}           response The AMFX response object
		 * @returns {Ext.direct.Event}          The event
		 */
		createEvent? (response: object): Ext.direct.Event;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		connect? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isConnected? (): void;
	}
}
declare namespace Ext.direct.AmfRemotingProvider {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.direct.AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * The [AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * allows making RPC calls to a Java object on a BlazeDS or ColdFusion using either the AMFX or the AMF protocols.
	 * 
	 * The default protocol is AMFX which works on all browsers. If you choose AMF, a flash plugin might be loaded in certain browsers that do not support posting binary data to the server, e.g. Internet Explorer version 9 or less. To choose AMF, set the [binary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html#cfg-binary) property to true.
	 * 
	 * For AMFX, the server must be configured to expose the desired services via an HTTPEndpoint. For example, the following configuration snippet adds an HTTPEndpoint (AMFX endpoint) to the BlazeDS services-config.xml file:
	 * 
	 *    &lt;channel-definition id="my-http" class="mx.messaging.channels.HTTPChannel"&gt;
	 *     &lt;endpoint url="http://{server.name}:{server.port}/{context.root}/messagebroker/http" class="flex.messaging.endpoints.HTTPEndpoint"/&gt;
	 *    &lt;/channel-definition&gt;
	 *     
	 * 
	 * Once the HTTPEndpoint is configured, make sure the service is exposed via the channel by adding the channel (e.g. my-http) to your remoting-services.xml file.
	 * For example this allows services to be accessed remotely by both AMF and AMFX:
	 * 
	 *    &lt;default-channels&gt;
	 *     &lt;channel ref="my-amf"/&gt;
	 *     &lt;channel ref="my-http"/&gt;
	 *    &lt;/default-channels&gt;
	 * 
	 * In order to make a call, you first need to declare the API to Ext direct. The following example defines local methods to the services provided by the sample Products application provided by Adobe as part of the BlazeDS 4.x binary turnkey distribution's testdrive (Sample 5: Updating Data):
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/http", // URL for the HTTPEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-http", // the name of the HTTPEndpoint channel as defined in the server's services-config.xml
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * You can now call the service as follows:
	 * 
	 *    product.getProducts((function(provider, response) {
	 *        // do something with the response
	 *        console.log("Got " + response.data.length + " objects");
	 *    });
	 * 
	 * Note that in case server methods require parameters of a specific class (e.g. flex.samples.product.Product), you should make sure the passed parameter has a field called $flexType set to the class name (in this case flex.Samples.product.Product). This is similar to the remote class alias definition in ActionScript.
	 * 
	 * The following example shows how to define a binary AMF-based call:
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/amf", // URL for the AMFEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-amf", // the name of the AMFEndpoint channel as defined in the server's services-config.xml
	 *            "binary": true, // chooses AMF encoding
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * Calling the server is done the same way as for the AMFX-based definition.
	 */
	interface Def extends Ext.direct.AmfRemotingProvider {
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
		 * - **feature** - [Grid](https://docs.sencha.com/extjs/6.0.1/classic/Ext.grid.Panel.html) features
		 * - **plugin** - Plugins
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/classic/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * @type {Ext.direct.AmfRemotingProvider.Cfg}
		 */
		config?: Ext.direct.AmfRemotingProvider.Cfg;
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-define) for additional usage examples.
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
		 * not cost for each instance created.
		 * 
		 * The rules are evaluated expressions in the context of the platform tags contained
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/classic/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/classic/Ext.html#method-onReady) listeners are
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
		 * @property
		 * @protected (property)
		 * @type {Ext.enums.Widget}
		 */
		xtype?: Ext.enums.Widget;
		/** 
		 * @mixed
		 * @method
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
		 * @returns {Ext.direct.Provider.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.direct.Provider.Statics | Ext.Base.Statics) | object | any;
	}
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.direct.AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * The [AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * allows making RPC calls to a Java object on a BlazeDS or ColdFusion using either the AMFX or the AMF protocols.
	 * 
	 * The default protocol is AMFX which works on all browsers. If you choose AMF, a flash plugin might be loaded in certain browsers that do not support posting binary data to the server, e.g. Internet Explorer version 9 or less. To choose AMF, set the [binary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html#cfg-binary) property to true.
	 * 
	 * For AMFX, the server must be configured to expose the desired services via an HTTPEndpoint. For example, the following configuration snippet adds an HTTPEndpoint (AMFX endpoint) to the BlazeDS services-config.xml file:
	 * 
	 *    &lt;channel-definition id="my-http" class="mx.messaging.channels.HTTPChannel"&gt;
	 *     &lt;endpoint url="http://{server.name}:{server.port}/{context.root}/messagebroker/http" class="flex.messaging.endpoints.HTTPEndpoint"/&gt;
	 *    &lt;/channel-definition&gt;
	 *     
	 * 
	 * Once the HTTPEndpoint is configured, make sure the service is exposed via the channel by adding the channel (e.g. my-http) to your remoting-services.xml file.
	 * For example this allows services to be accessed remotely by both AMF and AMFX:
	 * 
	 *    &lt;default-channels&gt;
	 *     &lt;channel ref="my-amf"/&gt;
	 *     &lt;channel ref="my-http"/&gt;
	 *    &lt;/default-channels&gt;
	 * 
	 * In order to make a call, you first need to declare the API to Ext direct. The following example defines local methods to the services provided by the sample Products application provided by Adobe as part of the BlazeDS 4.x binary turnkey distribution's testdrive (Sample 5: Updating Data):
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/http", // URL for the HTTPEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-http", // the name of the HTTPEndpoint channel as defined in the server's services-config.xml
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * You can now call the service as follows:
	 * 
	 *    product.getProducts((function(provider, response) {
	 *        // do something with the response
	 *        console.log("Got " + response.data.length + " objects");
	 *    });
	 * 
	 * Note that in case server methods require parameters of a specific class (e.g. flex.samples.product.Product), you should make sure the passed parameter has a field called $flexType set to the class name (in this case flex.Samples.product.Product). This is similar to the remote class alias definition in ActionScript.
	 * 
	 * The following example shows how to define a binary AMF-based call:
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/amf", // URL for the AMFEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-amf", // the name of the AMFEndpoint channel as defined in the server's services-config.xml
	 *            "binary": true, // chooses AMF encoding
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * Calling the server is done the same way as for the AMFX-based definition.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Object literal defining the server side actions and methods. For example, if
		 * the Provider is configured with:
		 * 
		 *    "actions":{ // each property within the 'actions' object represents a server side Class 
		 *        "TestAction":[ // array of methods within each server side Class to be   
		 *        {              // stubbed out on client
		 *            "name":"doEcho", 
		 *            "len":1            
		 *        },{
		 *            "name":"multiply",// name of method
		 *            "len":2           // The number of parameters that will be used to create an
		 *                              // array of data to send to the server side function.
		 *                              // Ensure the server sends back a Number, not a String. 
		 *        },{
		 *            "name":"doForm",
		 *            "formHandler":true, // direct the client to use specialized form handling method 
		 *            "len":1
		 *        }]
		 *    }
		 * 
		 * Note that a Store is not required, a server method can be called at any time.
		 * In the following example a **client side** handler is used to call the
		 * server side method "multiply" in the server-side "TestAction" Class:
		 * 
		 *    TestAction.multiply(
		 *        2, 4, // pass two arguments to server, so specify len=2
		 *        // callback function after the server is called
		 *        // result: the result returned by the server
		 *        //      e: Ext.direct.RemotingEvent object
		 *        function(result, e) {
		 *            var t = e.getTransaction();
		 *            var action = t.action; // server side Class called
		 *            var method = t.method; // server side method called
		 *            if(e.status) {
		 *                var answer = Ext.encode(result); // 8
		 *        
		 *            } else {
		 *                var msg = e.message; // failure message
		 *            }
		 *        }
		 *    );
		 * 
		 * In the example above, the server side "multiply" function will be passed two
		 * arguments (2 and 4).  The "multiply" method should return the value 8 which will be
		 * available as the <tt>result</tt> in the example above.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		actions?: object;
		/** 
		 * If true, use AMF binary encoding instead of AMFX XML-based encoding. Note that on some browsers, this will load a flash plugin to handle binary communication with the server. Important: If using binary encoding with older browsers, see notes in BinaryXhr regarding packaging the Flash plugin for use in older browsers.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {string}
		 */
		binary?: string;
		/** 
		 * Specify which param will hold the arguments for the method.
		 * Defaults to <tt>'data'</tt>.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		enableUrlEncode?: string;
		/** 
		 * **Requred**. This is the channel id defined in services-config.xml on the server (e.g. my-amf or my-http).
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		endpoint?: string;
		/** 
		 * Number of times to re-attempt delivery on failure of a call.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		maxRetries?: number;
		/** 
		 * Namespace for the Remoting Provider (defaults to the browser global scope of _window_).
		 * Explicitly specify the namespace Object, or specify a String to have a
		 * namespace created implicitly.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		namespace?: string | object;
		/** 
		 * The timeout to use for each request.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		timeout?: number;
		/** 
		 * **Required**. The URL to connect to the Flex remoting server (LCDS, BlazeDS, etc).
		 * This should include the /messagebroker/amf suffix as defined in the services-config.xml and remoting-config.xml files.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.direct.AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * The [AmfRemotingProvider](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html)
	 * allows making RPC calls to a Java object on a BlazeDS or ColdFusion using either the AMFX or the AMF protocols.
	 * 
	 * The default protocol is AMFX which works on all browsers. If you choose AMF, a flash plugin might be loaded in certain browsers that do not support posting binary data to the server, e.g. Internet Explorer version 9 or less. To choose AMF, set the [binary](https://docs.sencha.com/extjs/6.0.1/classic/Ext.direct.AmfRemotingProvider.html#cfg-binary) property to true.
	 * 
	 * For AMFX, the server must be configured to expose the desired services via an HTTPEndpoint. For example, the following configuration snippet adds an HTTPEndpoint (AMFX endpoint) to the BlazeDS services-config.xml file:
	 * 
	 *    &lt;channel-definition id="my-http" class="mx.messaging.channels.HTTPChannel"&gt;
	 *     &lt;endpoint url="http://{server.name}:{server.port}/{context.root}/messagebroker/http" class="flex.messaging.endpoints.HTTPEndpoint"/&gt;
	 *    &lt;/channel-definition&gt;
	 *     
	 * 
	 * Once the HTTPEndpoint is configured, make sure the service is exposed via the channel by adding the channel (e.g. my-http) to your remoting-services.xml file.
	 * For example this allows services to be accessed remotely by both AMF and AMFX:
	 * 
	 *    &lt;default-channels&gt;
	 *     &lt;channel ref="my-amf"/&gt;
	 *     &lt;channel ref="my-http"/&gt;
	 *    &lt;/default-channels&gt;
	 * 
	 * In order to make a call, you first need to declare the API to Ext direct. The following example defines local methods to the services provided by the sample Products application provided by Adobe as part of the BlazeDS 4.x binary turnkey distribution's testdrive (Sample 5: Updating Data):
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/http", // URL for the HTTPEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-http", // the name of the HTTPEndpoint channel as defined in the server's services-config.xml
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * You can now call the service as follows:
	 * 
	 *    product.getProducts((function(provider, response) {
	 *        // do something with the response
	 *        console.log("Got " + response.data.length + " objects");
	 *    });
	 * 
	 * Note that in case server methods require parameters of a specific class (e.g. flex.samples.product.Product), you should make sure the passed parameter has a field called $flexType set to the class name (in this case flex.Samples.product.Product). This is similar to the remote class alias definition in ActionScript.
	 * 
	 * The following example shows how to define a binary AMF-based call:
	 * 
	 *        Ext.direct.Manager.addProvider({
	 *            "url":"/samples/messagebroker/amf", // URL for the AMFEndpoint
	 *            "type":"amfremoting",
	 *            "endpoint": "my-amf", // the name of the AMFEndpoint channel as defined in the server's services-config.xml
	 *            "binary": true, // chooses AMF encoding
	 *            "actions":{
	 *            "product":[{ // name of the destination as defined in remoting-config.xml on the server
	 *                "name":"getProducts", // method name of the method to call
	 *                "len":0 // number of parameters
	 *            },{
	 *                "name":"add",
	 *                "len":1
	 *            },{
	 *                "name":"bad",
	 *                "len":0
	 *            }]
	 *            }
	 *        });
	 * 
	 * Calling the server is done the same way as for the AMFX-based definition.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires immediately before the client-side sends off the RPC call.
		 * By returning false from an event handler you can prevent the call from
		 * executing.
		 * @event
		 * @param   {Ext.direct.AmfRemotingProvider} provider
		 * @param   {Ext.direct.Transaction}         transaction
		 * @param   {object}                         meta        The meta data
		 * @param   {object}                         eOpts       The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                           
		 */
		beforecall? (provider: Ext.direct.AmfRemotingProvider, transaction: Ext.direct.Transaction, meta: object, eOpts: object): void;
		/** 
		 * Fires immediately after the request to the server-side is sent. This does
		 * NOT fire after the response has come back from the call.
		 * @event
		 * @param   {Ext.direct.AmfRemotingProvider} provider
		 * @param   {Ext.direct.Transaction}         transaction
		 * @param   {object}                         meta        The meta data
		 * @param   {object}                         eOpts       The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                           
		 */
		call? (provider: Ext.direct.AmfRemotingProvider, transaction: Ext.direct.Transaction, meta: object, eOpts: object): void;
	}
}
