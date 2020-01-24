declare namespace Ext.behavior {
	/** 
	 * @private (class)
	 */
	class Behavior extends Ext.Base {}
	/** 
	 * @private (class)
	 */
	class Draggable extends Ext.behavior.Behavior {}
	/** 
	 * @private (class)
	 */
	class Translatable extends Ext.behavior.Behavior {}
}
declare namespace Ext.env {
	/** 
	 * Provides information about browser.
	 * 
	 * Should not be manually instantiated unless for unit-testing.
	 * Access the global instance stored in [Ext.browser](https://docs.sencha.com/extjs/6.0.1/modern/Ext.browser.html) instead.
	 * @private (class)
	 */
	class Browser {}
	/** 
	 * Provides information about operating system environment.
	 * 
	 * Should not be manually instantiated unless for unit-testing.
	 * Access the global instance stored in [Ext.os](https://docs.sencha.com/extjs/6.0.1/modern/Ext.os.html) instead.
	 * @private (class)
	 */
	class OS {}
	/** 
	 * This class manages ready detection and handling. Direct use of this class is not
	 * recommended. Instead use [`Ext.onReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady):
	 * 
	 *     Ext.onReady(function () {
	 *         // DOM and Framework are ready...
	 *     });
	 * 
	 * ## DOM Ready
	 * 
	 * The lowest-level of readiness is DOM readiness. This level implies only that the document
	 * body exists. Many things require the DOM to be ready for manipulation. If that is all
	 * that is required, the [`Ext.onDocumentReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onDocumentReady) method can be called to register a callback
	 * to be called as soon as the DOM is ready:
	 * 
	 *     Ext.onDocumentReady(function () {
	 *         // the document body is ready
	 *     });
	 * 
	 * ## Framework Ready
	 * 
	 * In production builds of applications it is common to have all of the code loaded before
	 * DOM ready, so the need to wait for "onReady" is often confused with only that concern.
	 * This is easy to understand, at least in part because historically [`Ext.onReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) only
	 * waited for DOM ready.
	 * 
	 * With the introduction of [`Ext.Loader`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html), however, it became common for DOM ready to occur
	 * in the middle of dynamically loading code. If application code were executed at that
	 * time, any use of the yet-to-be-loaded classes would throw errors. As a consequence of
	 * this, the [`Ext.onReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) mechanism was extended to wait for both DOM ready _and_ all of
	 * the required classes to be loaded.
	 * 
	 * When the framework enters or leaves a state where it is not ready (for example, the
	 * first dynamic load is requested or last load completes), [`Ext.env.Ready`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.env.Ready.html) is informed.
	 * For example:
	 * 
	 *     Ext.env.Ready.block();
	 *    
	 *     //...
	 *    
	 *     Ext.env.Ready.unblock();
	 * 
	 * When there are no blocks and the DOM is ready, the Framework is ready and the "onReady"
	 * callbacks are called.
	 * 
	 * Priority can be used to control the ordering of onReady listeners, for example:
	 * 
	 *    Ext.onReady(function() {
	 *    
	 *    }, null, {
	 *        priority: 100
	 *    });
	 * 
	 * Ready listeners with higher priorities will run sooner than those with lower priorities,
	 * the default priority being `0`.  Internally the framework reserves priorities of 1000
	 * or greater, and -1000 or lesser for onReady handlers that must run before or after
	 * any application code.  Applications should stick to using priorities in the -999 - 999
	 * range. The following priorities are currently in use by the framework:
	 * 
	 * - Element_scroll rtl override: `1001`
	 * - Event system initialization: `2000`
	 * - [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html): `1500`
	 * @private (class)
	 * @singleton (definition)
	 */
	interface Ready {}
}
declare namespace Ext.event {
	/** 
	 * [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html)
	 * Just as [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) wraps around a native DOM node, [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html) wraps the browser's native
	 * event-object normalizing cross-browser differences such as mechanisms to stop event-propagation along with a method
	 * to prevent default actions from taking place.
	 * 
	 * Here is a simple example of how you use it:
	 * 
	 *    var container = Ext.create('Ext.Container', {
	 *        layout: 'fit',
	 *        renderTo: Ext.getBody(),
	 *        items: [{
	 *            id: 'logger',
	 *            styleHtmlContent: true,
	 *            html: 'Click somewhere!',
	 *            padding: 5
	 *        }]
	 *    });
	 *    
	 *    container.getEl().on({
	 *        click: function(e, node) {
	 *            var string = '';
	 *    
	 *            string += 'You clicked at: &lt;strong&gt;{ x: ' + e.pageX + ', y: ' + e.pageY + ' }&lt;/strong&gt; &lt;i&gt;(e.pageX &amp; e.pageY)&lt;/i&gt;';
	 *            string += '&lt;hr /&gt;';
	 *            string += 'The HTMLElement you clicked has the className of: &lt;strong&gt;' + e.target.className + '&lt;/strong&gt; &lt;i&gt;(e.target)&lt;/i&gt;';
	 *            string += '&lt;hr /&gt;';
	 *            string += 'The HTMLElement which has the listener has a className of: &lt;strong&gt;' + e.currentTarget.className + '&lt;/strong&gt; &lt;i&gt;(e.currentTarget)&lt;/i&gt;';
	 *    
	 *            Ext.getCmp('logger').setHtml(string);
	 *        }
	 *    });
	 * 
	 * ## Recognizers
	 * 
	 * Ext JS includes many default event recognizers to know when a user interacts with the application.
	 * 
	 * For a full list of default recognizers, and more information, please view the [Ext.event.gesture.Recognizer](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.gesture.Recognizer.html) documentation.
	 * 
	 * This class also provides a set of constants for use with key events.  These are useful
	 * for determining if a specific key was pressed, and are available both on instances,
	 * and as static properties of the class.  The following two statements are equivalent:
	 * 
	 *    if (e.getKey() === Ext.event.Event.TAB) {
	 *        // tab key was pressed
	 *    }
	 *    
	 *    if (e.getKey() === e.TAB) {
	 *        // tab key was pressed
	 *    }
	 * 
	 */
	class Event extends Ext.Base {
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 65
		 * @type {number}
		 */
		readonly A?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 18
		 * @type {number}
		 */
		readonly ALT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 66
		 * @type {number}
		 */
		readonly B?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 8
		 * @type {number}
		 */
		readonly BACKSPACE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 67
		 * @type {number}
		 */
		readonly C?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 20
		 * @type {number}
		 */
		readonly CAPS_LOCK?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 93
		 * @type {number}
		 */
		readonly CONTEXT_MENU?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 17
		 * @type {number}
		 */
		readonly CTRL?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 68
		 * @type {number}
		 */
		readonly D?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 46
		 * @type {number}
		 */
		readonly DELETE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 40
		 * @type {number}
		 */
		readonly DOWN?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 69
		 * @type {number}
		 */
		readonly E?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 56
		 * @type {number}
		 */
		readonly EIGHT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 35
		 * @type {number}
		 */
		readonly END?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 13
		 * @type {number}
		 */
		readonly ENTER?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 27
		 * @type {number}
		 */
		readonly ESC?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 70
		 * @type {number}
		 */
		readonly F?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 112
		 * @type {number}
		 */
		readonly F1?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 121
		 * @type {number}
		 */
		readonly F10?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 122
		 * @type {number}
		 */
		readonly F11?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 123
		 * @type {number}
		 */
		readonly F12?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 113
		 * @type {number}
		 */
		readonly F2?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 114
		 * @type {number}
		 */
		readonly F3?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 115
		 * @type {number}
		 */
		readonly F4?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 116
		 * @type {number}
		 */
		readonly F5?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 117
		 * @type {number}
		 */
		readonly F6?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 118
		 * @type {number}
		 */
		readonly F7?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 119
		 * @type {number}
		 */
		readonly F8?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 120
		 * @type {number}
		 */
		readonly F9?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 53
		 * @type {number}
		 */
		readonly FIVE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 52
		 * @type {number}
		 */
		readonly FOUR?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 71
		 * @type {number}
		 */
		readonly G?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 72
		 * @type {number}
		 */
		readonly H?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 36
		 * @type {number}
		 */
		readonly HOME?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 73
		 * @type {number}
		 */
		readonly I?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 45
		 * @type {number}
		 */
		readonly INSERT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 74
		 * @type {number}
		 */
		readonly J?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 75
		 * @type {number}
		 */
		readonly K?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 76
		 * @type {number}
		 */
		readonly L?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 37
		 * @type {number}
		 */
		readonly LEFT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 77
		 * @type {number}
		 */
		readonly M?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 78
		 * @type {number}
		 */
		readonly N?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 57
		 * @type {number}
		 */
		readonly NINE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 12
		 * @type {number}
		 */
		readonly NUM_CENTER?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 111
		 * @type {number}
		 */
		readonly NUM_DIVISION?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 104
		 * @type {number}
		 */
		readonly NUM_EIGHT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 101
		 * @type {number}
		 */
		readonly NUM_FIVE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 100
		 * @type {number}
		 */
		readonly NUM_FOUR?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 109
		 * @type {number}
		 */
		readonly NUM_MINUS?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 106
		 * @type {number}
		 */
		readonly NUM_MULTIPLY?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 105
		 * @type {number}
		 */
		readonly NUM_NINE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 97
		 * @type {number}
		 */
		readonly NUM_ONE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 110
		 * @type {number}
		 */
		readonly NUM_PERIOD?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 107
		 * @type {number}
		 */
		readonly NUM_PLUS?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 103
		 * @type {number}
		 */
		readonly NUM_SEVEN?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 102
		 * @type {number}
		 */
		readonly NUM_SIX?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 99
		 * @type {number}
		 */
		readonly NUM_THREE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 98
		 * @type {number}
		 */
		readonly NUM_TWO?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 96
		 * @type {number}
		 */
		readonly NUM_ZERO?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 79
		 * @type {number}
		 */
		readonly O?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 49
		 * @type {number}
		 */
		readonly ONE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 80
		 * @type {number}
		 */
		readonly P?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 34
		 * @type {number}
		 */
		readonly PAGE_DOWN?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 33
		 * @type {number}
		 */
		readonly PAGE_UP?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 19
		 * @type {number}
		 */
		readonly PAUSE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 44
		 * @type {number}
		 */
		readonly PRINT_SCREEN?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 81
		 * @type {number}
		 */
		readonly Q?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 82
		 * @type {number}
		 */
		readonly R?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 13
		 * @type {number}
		 */
		readonly RETURN?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 39
		 * @type {number}
		 */
		readonly RIGHT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 83
		 * @type {number}
		 */
		readonly S?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 55
		 * @type {number}
		 */
		readonly SEVEN?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 16
		 * @type {number}
		 */
		readonly SHIFT?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 54
		 * @type {number}
		 */
		readonly SIX?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 32
		 * @type {number}
		 */
		readonly SPACE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 84
		 * @type {number}
		 */
		readonly T?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 9
		 * @type {number}
		 */
		readonly TAB?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 51
		 * @type {number}
		 */
		readonly THREE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 50
		 * @type {number}
		 */
		readonly TWO?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 85
		 * @type {number}
		 */
		readonly U?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 38
		 * @type {number}
		 */
		readonly UP?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 86
		 * @type {number}
		 */
		readonly V?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 87
		 * @type {number}
		 */
		readonly W?: number;
		/** 
		 * The mouse wheel delta scaling factor. This value depends on browser version and OS and
		 * attempts to produce a similar scrolling experience across all platforms and browsers.
		 * 
		 * To change this value:
		 * 
		 *     Ext.event.Event.prototype.WHEEL_SCALE = 72;
		 * 
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {number}
		 */
		readonly WHEEL_SCALE?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 88
		 * @type {number}
		 */
		readonly X?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 89
		 * @type {number}
		 */
		readonly Y?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 90
		 * @type {number}
		 */
		readonly Z?: number;
		/** 
		 * Key constant
		 * @property
		 * @public (property)
		 * @readonly
		 * @default 48
		 * @type {number}
		 */
		readonly ZERO?: number;
		/** 
		 * True if the alt key was down during the event.
		 * @property
		 * @public (property)
		 * @type {boolean}
		 */
		altKey?: boolean;
		/** 
		 * The angle of the rotation.
		 * 
		 * **This is only available when the event type is `rotate`**
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		angle?: number;
		/** 
		 * The raw browser event which this object wraps.
		 * @property
		 * @public (property)
		 * @type {Event}
		 */
		browserEvent?: Event;
		/** 
		 * Indicates which mouse button caused the event for mouse events, for example
		 * `mousedown`, `click`, `mouseup`:
		 * 
		 * - `0` for left button.
		 * - `1` for middle button.
		 * - `2` for right button.
		 * 
		 * _Note_: In IE8 &amp; IE9, the `click` event does not provide the button.
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		button?: number;
		/** 
		 * True if the control key was down during the event.
		 * In Mac this will also be true when meta key was down.
		 * @property
		 * @public (property)
		 * @type {boolean}
		 */
		ctrlKey?: boolean;
		/** 
		 * Refers to the element the event handler was attached to, vs the `target`, which is
		 * the actual element that fired the event.  For example, if the event bubbles, the
		 * `target` element may be a descendant of the `currentTarget`, as the event may
		 * have been triggered on the `target` and then bubbled up to the `currentTarget`
		 * where it was handled.
		 * @property
		 * @public (property)
		 * @type {HTMLElement}
		 */
		currentTarget?: HTMLElement;
		/** 
		 * Indicates whether or not [preventDefault()](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) was called on the event.
		 * @property
		 * @public (property)
		 * @default false
		 * @type {boolean}
		 */
		defaultPrevented?: boolean;
		/** 
		 * Same as `currentTarget`
		 * @property
		 * @public (property)
		 * @deprecated Since version 5.0.0.
		 *             use [currentTarget](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#property-currentTarget) instead.
		 * @type {HTMLElement}
		 */
		delegatedTarget?: HTMLElement;
		/** 
		 * The direction of the swipe. Available options are:
		 * 
		 * - up
		 * - down
		 * - left
		 * - right
		 * 
		 * **This is only available when the event type is `swipe`**
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		direction?: number;
		/** 
		 * The distance of the event.
		 * 
		 * **This is only available when the event type is `swipe` and `pinch`.**
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		distance?: number;
		/** 
		 * The duration of the swipe.
		 * 
		 * **This is only available when the event type is `swipe`**
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		duration?: number;
		/** 
		 * The browsers x coordinate of the event.
		 * Note: this only works in browsers that support pageX on the native browser event
		 * object (pageX is not natively supported in IE9 and earlier).  In Ext JS, for a
		 * cross browser normalized x-coordinate use [getX](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-getX)
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		pageX?: number;
		/** 
		 * The browsers y coordinate of the event.
		 * Note: this only works in browsers that support pageY on the native browser event
		 * object (pageY is not natively supported in IE9 and earlier).  In Ext JS, for a
		 * cross browser normalized y-coordinate use [getY](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-getY)
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		pageY?: number;
		/** 
		 * A amount of rotation, since the start of the event.
		 * 
		 * **This is only available when the event type is `rotate`**
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The scape of a pinch event.
		 * 
		 * **This is only available when the event type is `pinch`**
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		scale?: number;
		/** 
		 * True if the shift key was down during the event.
		 * @property
		 * @public (property)
		 * @type {boolean}
		 */
		shiftKey?: boolean;
		/** 
		 * The element that fired this event.  For the element whose handlers are currently
		 * being processed, i.e. the element that the event handler was attached to, use
		 * `currentTarget`
		 * @property
		 * @public (property)
		 * @type {HTMLElement}
		 */
		target?: HTMLElement;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-statics)
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
		 * @type {Ext.event.Event.Statics}
		 */
		self?: Ext.event.Event.Statics | Ext.Base.Statics;
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
		 * @param   {object}                   members    The members to add to this class.
		 * @param   {boolean}                  [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                  [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.event.Event|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.event.Event;
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
		 * @param   {object}                   members
		 * @returns {Ext.event.Event|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.event.Event;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Function.html#method-flexSetter)
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
		 * @chainable
		 * @param   {object}                   members
		 * @returns {Ext.event.Event|Ext.Base}         
		 */
		static addInheritableStatics? (members: object): typeof Ext.event.Event;
		static addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                   name
		 * @param   {object}                   member
		 * @returns {Ext.event.Event|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.event.Event;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Configurator.html) for this class.
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
		 * @param   {object}                   fn
		 * @param   {object}                   scope
		 * @returns {Ext.event.Event|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.event.Event;
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
		 * @param   {object} event
		 */
		constructor (event: object);
		/** 
		 * This method is called to cleanup an object and its resources. After calling
		 * this method, the object should not be used any further.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Gets the character code for the event.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getCharCode? (): number;
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
		 * Returns a normalized keyCode for the event.
		 * @method
		 * @public (method)
		 * @returns {number}  The key code
		 */
		getKey? (): number;
		/** 
		 * Returns the name of the keyCode for the event.
		 * @method
		 * @public (method)
		 * @returns {string}  The key name
		 */
		getKeyName? (): string;
		/** 
		 * Gets the x coordinate of the event.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getPageX? (): number;
		/** 
		 * Gets the y coordinate of the event.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getPageY? (): number;
		/** 
		 * Returns a point object that consists of the object coordinates.
		 * @method
		 * @public (method)
		 * @returns {Ext.util.Point}  point
		 */
		getPoint? (): Ext.util.Point;
		/** 
		 * Gets the related target.
		 * @method
		 * @public (method)
		 * @param   {string}             [selector]
		 * A simple selector to filter the target or look for an
		 * ancestor of the target. See [Ext.dom.Query](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Query.html) for information about simple
		 * selectors.
		 * @param   {number|HTMLElement} [maxDepth]
		 * The max depth to search as a number or
		 * element (defaults to 10 || document.body).
		 * @param   {boolean}            [returnEl]
		 * `true` to return a [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) object instead of DOM
		 * node.
		 * @returns {HTMLElement}                   
		 */
		getRelatedTarget? (selector?: string, maxDepth?: number | HTMLElement, returnEl?: boolean): HTMLElement;
		/** 
		 * Gets the target for the event.
		 * @method
		 * @public (method)
		 * @param   {string}      [selector]
		 * A simple selector to filter the target or look
		 * for an ancestor of the target
		 * @param   {number|any}  [maxDepth]
		 * The max depth to
		 * search as a number or element (defaults to 10 || document.body)
		 * @param   {boolean}     [returnEl]
		 * `true` to return a [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) object instead
		 * of DOM node.
		 * @returns {HTMLElement}            
		 */
		getTarget? (selector?: string, maxDepth?: number | any, returnEl?: boolean): HTMLElement;
		/** 
		 * Returns the time of the event.
		 * @method
		 * @public (method)
		 * @returns {Date}  
		 */
		getTime? (): ExtGlobalDate;
		/** 
		 * Normalizes mouse wheel y-delta across browsers. To get x-delta information, use
		 * [getWheelDeltas](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-getWheelDeltas) instead.
		 * @method
		 * @public (method)
		 * @returns {number}  The mouse wheel y-delta
		 */
		getWheelDelta? (): number;
		/** 
		 * Returns the mouse wheel deltas for this event.
		 * @method
		 * @public (method)
		 * @returns {object}  An object with "x" and "y" properties holding the mouse wheel deltas.
		 */
		getWheelDeltas? (): object;
		/** 
		 * Gets the x coordinate of the event.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getX? (): number;
		/** 
		 * Gets the X and Y coordinates of the event.
		 * @method
		 * @public (method)
		 * @returns {number[]}  The xy values like [x, y]
		 */
		getXY? (): number[];
		/** 
		 * Gets the y coordinate of the event.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getY? (): number;
		/** 
		 * Returns true if the control, meta, shift or alt key was pressed during this event.
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		hasModifier? (): boolean;
		/** 
		 * Checks if the key pressed was a "navigation" key. A navigation key is defined by
		 * these keys:
		 * 
		 * - Page Up
		 * - Page Down
		 * - End
		 * - Home
		 * - Left
		 * - Up
		 * - Right
		 * - Down
		 * - Return
		 * - Tab
		 * - Esc
		 * @method
		 * @public (method)
		 * @param   {boolean} [scrollableOnly]
		 * Only check navigation keys that can cause
		 * element scrolling by their default action.
		 * @returns {boolean}                  `true` if the press is a navigation keypress
		 */
		isNavKeyPress? (scrollableOnly?: boolean): boolean;
		/** 
		 * Checks if the key pressed was a "special" key. A special key is defined as one of
		 * these keys:
		 * 
		 * - Page Up
		 * - Page Down
		 * - End
		 * - Home
		 * - Left arrow
		 * - Up arrow
		 * - Right arrow
		 * - Down arrow
		 * - Return
		 * - Tab
		 * - Esc
		 * - Backspace
		 * - Delete
		 * - Shift
		 * - Ctrl
		 * - Alt
		 * - Pause
		 * - Caps Lock
		 * - Print Screen
		 * - Insert
		 * @method
		 * @public (method)
		 * @returns {boolean}  `true` if the key for this event is special
		 */
		isSpecialKey? (): boolean;
		/** 
		 * Prevents the browsers default handling of the event.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.event.Event}  this
		 */
		preventDefault? (): Ext.event.Event;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                   [value] The value to set for the name parameter.
		 * @returns {Ext.event.Event|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.event.Event;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Stop the event ([`preventDefault`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-preventDefault) and [`stopPropagation`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html#method-stopPropagation)).
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.event.Event}  this
		 */
		stopEvent? (): Ext.event.Event;
		/** 
		 * Cancels bubbling of the event.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.event.Event}  this
		 */
		stopPropagation? (): Ext.event.Event;
		/** 
		 * Returns true if the target of this event is a child of `el`.  Unless the allowEl
		 * parameter is set, it will return false if if the target is `el`.
		 * Example usage:
		 * 
		 *    // Handle click on any child of an element
		 *    Ext.getBody().on('click', function(e){
		 *        if(e.within('some-el')){
		 *            alert('Clicked on a child of some-el!');
		 *        }
		 *    });
		 *    
		 *    // Handle click directly on an element, ignoring clicks on child nodes
		 *    Ext.getBody().on('click', function(e,t){
		 *        if((t.id == 'some-el') &amp;&amp; !e.within(t, true)){
		 *            alert('Clicked directly on some-el!');
		 *        }
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @param   {string|HTMLElement|Ext.dom.Element} el        The id, DOM element or [Ext.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) to check
		 * @param   {boolean}                            [related]
		 * `true` to test if the related target is within el instead
		 * of the target
		 * @param   {boolean}                            [allowEl]
		 * `true` to also check if the passed element is the target
		 * or related target
		 * @returns {boolean}                                      
		 */
		within? (el: string | HTMLElement | Ext.dom.Element, related?: boolean, allowEl?: boolean): boolean;
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
		 * @returns {Ext.event.Event|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.event.Event;
		initConfig? (config: object): Ext.Base;
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
		 * @returns {Ext.event.Event.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.event.Event.Statics;
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
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                 names The names of the linked objects to destroy.
		 * @returns {Ext.event.Event|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.event.Event;
		unlink? (names: string[]): Ext.Base;
	}
}
declare namespace Ext.perf {
	/** 
	 * @private (class)
	 */
	class Accumulator extends Ext.Base {}
	/** 
	 * @private (class)
	 * @singleton (definition)
	 */
	interface Monitor extends Ext.Base {}
}
declare namespace Ext {
	class env {
		/** 
		 * This class manages ready detection and handling. Direct use of this class is not
		 * recommended. Instead use [`Ext.onReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady):
		 * 
		 *     Ext.onReady(function () {
		 *         // DOM and Framework are ready...
		 *     });
		 * 
		 * ## DOM Ready
		 * 
		 * The lowest-level of readiness is DOM readiness. This level implies only that the document
		 * body exists. Many things require the DOM to be ready for manipulation. If that is all
		 * that is required, the [`Ext.onDocumentReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onDocumentReady) method can be called to register a callback
		 * to be called as soon as the DOM is ready:
		 * 
		 *     Ext.onDocumentReady(function () {
		 *         // the document body is ready
		 *     });
		 * 
		 * ## Framework Ready
		 * 
		 * In production builds of applications it is common to have all of the code loaded before
		 * DOM ready, so the need to wait for "onReady" is often confused with only that concern.
		 * This is easy to understand, at least in part because historically [`Ext.onReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) only
		 * waited for DOM ready.
		 * 
		 * With the introduction of [`Ext.Loader`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Loader.html), however, it became common for DOM ready to occur
		 * in the middle of dynamically loading code. If application code were executed at that
		 * time, any use of the yet-to-be-loaded classes would throw errors. As a consequence of
		 * this, the [`Ext.onReady`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) mechanism was extended to wait for both DOM ready _and_ all of
		 * the required classes to be loaded.
		 * 
		 * When the framework enters or leaves a state where it is not ready (for example, the
		 * first dynamic load is requested or last load completes), [`Ext.env.Ready`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.env.Ready.html) is informed.
		 * For example:
		 * 
		 *     Ext.env.Ready.block();
		 *    
		 *     //...
		 *    
		 *     Ext.env.Ready.unblock();
		 * 
		 * When there are no blocks and the DOM is ready, the Framework is ready and the "onReady"
		 * callbacks are called.
		 * 
		 * Priority can be used to control the ordering of onReady listeners, for example:
		 * 
		 *    Ext.onReady(function() {
		 *    
		 *    }, null, {
		 *        priority: 100
		 *    });
		 * 
		 * Ready listeners with higher priorities will run sooner than those with lower priorities,
		 * the default priority being `0`.  Internally the framework reserves priorities of 1000
		 * or greater, and -1000 or lesser for onReady handlers that must run before or after
		 * any application code.  Applications should stick to using priorities in the -999 - 999
		 * range. The following priorities are currently in use by the framework:
		 * 
		 * - Element_scroll rtl override: `1001`
		 * - Event system initialization: `2000`
		 * - [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html): `1500`
		 * @private (class)
		 * @singleton (instance)
		 */
		static readonly Ready?: Ext.env.Ready;
	}
	class EventObjectImpl extends Ext.event.Event {}
	class perf {
		/** 
		 * @private (class)
		 * @singleton (instance)
		 */
		static readonly Monitor?: Ext.perf.Monitor;
	}
	interface Perf extends Ext.perf.Monitor {}
}
declare namespace Ext.event.Event {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html)
	 * Just as [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) wraps around a native DOM node, [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html) wraps the browser's native
	 * event-object normalizing cross-browser differences such as mechanisms to stop event-propagation along with a method
	 * to prevent default actions from taking place.
	 * 
	 * Here is a simple example of how you use it:
	 * 
	 *    var container = Ext.create('Ext.Container', {
	 *        layout: 'fit',
	 *        renderTo: Ext.getBody(),
	 *        items: [{
	 *            id: 'logger',
	 *            styleHtmlContent: true,
	 *            html: 'Click somewhere!',
	 *            padding: 5
	 *        }]
	 *    });
	 *    
	 *    container.getEl().on({
	 *        click: function(e, node) {
	 *            var string = '';
	 *    
	 *            string += 'You clicked at: &lt;strong&gt;{ x: ' + e.pageX + ', y: ' + e.pageY + ' }&lt;/strong&gt; &lt;i&gt;(e.pageX &amp; e.pageY)&lt;/i&gt;';
	 *            string += '&lt;hr /&gt;';
	 *            string += 'The HTMLElement you clicked has the className of: &lt;strong&gt;' + e.target.className + '&lt;/strong&gt; &lt;i&gt;(e.target)&lt;/i&gt;';
	 *            string += '&lt;hr /&gt;';
	 *            string += 'The HTMLElement which has the listener has a className of: &lt;strong&gt;' + e.currentTarget.className + '&lt;/strong&gt; &lt;i&gt;(e.currentTarget)&lt;/i&gt;';
	 *    
	 *            Ext.getCmp('logger').setHtml(string);
	 *        }
	 *    });
	 * 
	 * ## Recognizers
	 * 
	 * Ext JS includes many default event recognizers to know when a user interacts with the application.
	 * 
	 * For a full list of default recognizers, and more information, please view the [Ext.event.gesture.Recognizer](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.gesture.Recognizer.html) documentation.
	 * 
	 * This class also provides a set of constants for use with key events.  These are useful
	 * for determining if a specific key was pressed, and are available both on instances,
	 * and as static properties of the class.  The following two statements are equivalent:
	 * 
	 *    if (e.getKey() === Ext.event.Event.TAB) {
	 *        // tab key was pressed
	 *    }
	 *    
	 *    if (e.getKey() === e.TAB) {
	 *        // tab key was pressed
	 *    }
	 * 
	 */
	interface Def extends Ext.event.Event {
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
		 * - **store** - [Ext.data.Store](https://docs.sencha.com/extjs/6.0.1/modern/Ext.data.Store.html)
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
		 * This configuration works in a very similar manner to the [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config) option.
		 * The difference is that the configurations are only ever processed when the first instance
		 * of that class is created. The processed value is then stored on the class prototype and
		 * will not be processed on subsequent instances of the class. Getters/setters will be generated
		 * in exactly the same way as [config](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-config).
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
		 * **Note:** You need to make sure [Ext.Base.initConfig](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig) is called from your constructor if you are defining
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
		 * Otherwise just like [statics](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Class.html#cfg-statics) but subclasses inherit these methods.
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
		 * [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) in order to use the `override` config.
		 * 
		 * Methods defined on the overriding class will not automatically call the methods of
		 * the same name in the ancestor class chain.  To call the parent's method of the
		 * same name you must call [callParent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callParent).  To skip the
		 * method of the overridden class and call its parent you will instead call
		 * [callSuper](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-callSuper).
		 * 
		 * See [Ext.define](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-define) for additional usage examples.
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
		 * in [`Ext.platformTags`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#property-platformTags). Any properties of that object are
		 * implicitly usable (as shown above).
		 * 
		 * If a `platformConfig` specifies a config value, it will replace any values declared
		 * on the class itself.
		 * 
		 * Use of `platformConfig` on instances is handled by the config system when classes
		 * call [`initConfig`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#method-initConfig). For example:
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
		 * To adjust configs based on dynamic conditions, see [`Ext.mixin.Responsive`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.mixin.Responsive.html).
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
		 * this class is created, but are guaranteed to be available before [Ext.onReady](https://docs.sencha.com/extjs/6.0.1/modern/Ext.html#method-onReady) listeners are
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
		 * @property
		 * @protected (property)
		 * @type {string}
		 */
		xtype?: string;
		/** 
		 * @mixed
		 * @method
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
		 * @returns {Ext.event.Event.Statics|Ext.Base.Statics}  
		 * @type {Ext.event.Event.Statics}
		 */
		statics?: (() => Ext.event.Event.Statics | Ext.Base.Statics) | Ext.event.Event.Statics | any;
	}
}
declare namespace Ext.base {
	/** 
	 * @statics
	 * Class static members interface: 
	 * Base static members interface.
	 */
	interface Statics {
		/** @indexer */
		[others: string]: any;
	}
}
declare namespace Ext.behavior.Behavior {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.behavior.Behavior](https://docs.sencha.com/extjs/6.0.1/modern/Ext.behavior.Behavior.html)
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
		 * @returns {Ext.behavior.Behavior|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.behavior.Behavior;
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
		 * @returns {Ext.behavior.Behavior|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.behavior.Behavior;
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
		 * @returns {Ext.behavior.Behavior|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.behavior.Behavior;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                         name
		 * @param   {object}                         member
		 * @returns {Ext.behavior.Behavior|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.behavior.Behavior;
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
		 * @returns {Ext.behavior.Behavior|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.behavior.Behavior;
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
declare namespace Ext.behavior.Draggable {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.behavior.Draggable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.behavior.Draggable.html)
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
		 * @param   {object}                                                members    The members to add to this class.
		 * @param   {boolean}                                               [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                               [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.behavior.Draggable|Ext.behavior.Behavior|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.behavior.Draggable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.behavior.Behavior;
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
		 * @param   {object}                                                members
		 * @returns {Ext.behavior.Draggable|Ext.behavior.Behavior|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.behavior.Draggable;
		addStatics? (members: object): typeof Ext.behavior.Behavior;
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
		 * @param   {object}                                                members
		 * @returns {Ext.behavior.Draggable|Ext.behavior.Behavior|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.behavior.Draggable;
		addInheritableStatics? (members: object): typeof Ext.behavior.Behavior;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                name
		 * @param   {object}                                                member
		 * @returns {Ext.behavior.Draggable|Ext.behavior.Behavior|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.behavior.Draggable;
		addMember? (name: object, member: object): typeof Ext.behavior.Behavior;
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
		 * @param   {object}                                                fn
		 * @param   {object}                                                scope
		 * @returns {Ext.behavior.Draggable|Ext.behavior.Behavior|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.behavior.Draggable;
		onExtended? (fn: object, scope: object): typeof Ext.behavior.Behavior;
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
declare namespace Ext.behavior.Translatable {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.behavior.Translatable](https://docs.sencha.com/extjs/6.0.1/modern/Ext.behavior.Translatable.html)
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
		 * @param   {object}                                                   members    The members to add to this class.
		 * @param   {boolean}                                                  [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                                                  [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.behavior.Translatable|Ext.behavior.Behavior|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.behavior.Translatable;
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.behavior.Behavior;
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
		 * @param   {object}                                                   members
		 * @returns {Ext.behavior.Translatable|Ext.behavior.Behavior|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.behavior.Translatable;
		addStatics? (members: object): typeof Ext.behavior.Behavior;
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
		 * @param   {object}                                                   members
		 * @returns {Ext.behavior.Translatable|Ext.behavior.Behavior|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.behavior.Translatable;
		addInheritableStatics? (members: object): typeof Ext.behavior.Behavior;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                                                   name
		 * @param   {object}                                                   member
		 * @returns {Ext.behavior.Translatable|Ext.behavior.Behavior|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.behavior.Translatable;
		addMember? (name: object, member: object): typeof Ext.behavior.Behavior;
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
		 * @param   {object}                                                   fn
		 * @param   {object}                                                   scope
		 * @returns {Ext.behavior.Translatable|Ext.behavior.Behavior|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.behavior.Translatable;
		onExtended? (fn: object, scope: object): typeof Ext.behavior.Behavior;
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
declare namespace Ext.event.Event {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html)
	 * Just as [Ext.dom.Element](https://docs.sencha.com/extjs/6.0.1/modern/Ext.dom.Element.html) wraps around a native DOM node, [Ext.event.Event](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.Event.html) wraps the browser's native
	 * event-object normalizing cross-browser differences such as mechanisms to stop event-propagation along with a method
	 * to prevent default actions from taking place.
	 * 
	 * Here is a simple example of how you use it:
	 * 
	 *    var container = Ext.create('Ext.Container', {
	 *        layout: 'fit',
	 *        renderTo: Ext.getBody(),
	 *        items: [{
	 *            id: 'logger',
	 *            styleHtmlContent: true,
	 *            html: 'Click somewhere!',
	 *            padding: 5
	 *        }]
	 *    });
	 *    
	 *    container.getEl().on({
	 *        click: function(e, node) {
	 *            var string = '';
	 *    
	 *            string += 'You clicked at: &lt;strong&gt;{ x: ' + e.pageX + ', y: ' + e.pageY + ' }&lt;/strong&gt; &lt;i&gt;(e.pageX &amp; e.pageY)&lt;/i&gt;';
	 *            string += '&lt;hr /&gt;';
	 *            string += 'The HTMLElement you clicked has the className of: &lt;strong&gt;' + e.target.className + '&lt;/strong&gt; &lt;i&gt;(e.target)&lt;/i&gt;';
	 *            string += '&lt;hr /&gt;';
	 *            string += 'The HTMLElement which has the listener has a className of: &lt;strong&gt;' + e.currentTarget.className + '&lt;/strong&gt; &lt;i&gt;(e.currentTarget)&lt;/i&gt;';
	 *    
	 *            Ext.getCmp('logger').setHtml(string);
	 *        }
	 *    });
	 * 
	 * ## Recognizers
	 * 
	 * Ext JS includes many default event recognizers to know when a user interacts with the application.
	 * 
	 * For a full list of default recognizers, and more information, please view the [Ext.event.gesture.Recognizer](https://docs.sencha.com/extjs/6.0.1/modern/Ext.event.gesture.Recognizer.html) documentation.
	 * 
	 * This class also provides a set of constants for use with key events.  These are useful
	 * for determining if a specific key was pressed, and are available both on instances,
	 * and as static properties of the class.  The following two statements are equivalent:
	 * 
	 *    if (e.getKey() === Ext.event.Event.TAB) {
	 *        // tab key was pressed
	 *    }
	 *    
	 *    if (e.getKey() === e.TAB) {
	 *        // tab key was pressed
	 *    }
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
		 * @param   {object}                   members    The members to add to this class.
		 * @param   {boolean}                  [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                  [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.event.Event|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.event.Event;
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
		 * @param   {object}                   members
		 * @returns {Ext.event.Event|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.event.Event;
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
		 * @param   {object}                   members
		 * @returns {Ext.event.Event|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.event.Event;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                   name
		 * @param   {object}                   member
		 * @returns {Ext.event.Event|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.event.Event;
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
		 * @param   {object}                   fn
		 * @param   {object}                   scope
		 * @returns {Ext.event.Event|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.event.Event;
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
declare namespace Ext.perf.Accumulator {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.perf.Accumulator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.perf.Accumulator.html)
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
		 * @returns {Ext.perf.Accumulator|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.perf.Accumulator;
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
		 * @returns {Ext.perf.Accumulator|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.perf.Accumulator;
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
		 * @param   {object}                        members
		 * @returns {Ext.perf.Accumulator|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.perf.Accumulator;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                        name
		 * @param   {object}                        member
		 * @returns {Ext.perf.Accumulator|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.perf.Accumulator;
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
		 * @param   {object}                        fn
		 * @param   {object}                        scope
		 * @returns {Ext.perf.Accumulator|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.perf.Accumulator;
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
declare namespace Ext.perf.Monitor {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.perf.Monitor](https://docs.sencha.com/extjs/6.0.1/modern/Ext.perf.Monitor.html)
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
		 * @param   {object}                    members    The members to add to this class.
		 * @param   {boolean}                   [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                   [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.perf.Monitor|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.perf.Monitor;
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
		 * @param   {object}                    members
		 * @returns {Ext.perf.Monitor|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.perf.Monitor;
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
		 * @param   {object}                    members
		 * @returns {Ext.perf.Monitor|Ext.Base}         
		 */
		addInheritableStatics? (members: object): typeof Ext.perf.Monitor;
		addInheritableStatics? (members: object): typeof Ext.Base;
		/** 
		 * @method
		 * @private (method)
		 * @static
		 * @chainable
		 * @param   {object}                    name
		 * @param   {object}                    member
		 * @returns {Ext.perf.Monitor|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.perf.Monitor;
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
		 * @param   {object}                    fn
		 * @param   {object}                    scope
		 * @returns {Ext.perf.Monitor|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.perf.Monitor;
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
declare namespace Ext.base {
	/** 
	 * @params
	 * Config interface to call method: 
	 * Base interface for method config params.
	 */
	interface Params {
		/** @indexer */
		[others: string]: any;
	}
}
declare namespace Ext.env.Ready.methodParams.makeListener {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.env.Ready.makeListener](https://docs.sencha.com/extjs/6.0.1/modern/Ext.env.Ready.html#method-makeListener)
	 * An object with extra options.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * A number of milliseconds to delay.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * Relative priority of this callback. A larger
		 * number will result in the callback being sorted before the others.  Priorities
		 * 1000 or greater and -1000 or lesser are reserved for internal framework use only.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * Pass `true` to only wait for DOM ready, `false`
		 * means full Framework and DOM readiness.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		dom?: boolean;
	}
}
declare namespace Ext.env.Ready.methodParams.on {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.env.Ready.on](https://docs.sencha.com/extjs/6.0.1/modern/Ext.env.Ready.html#method-on)
	 * An object with extra options.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * A number of milliseconds to delay.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		delay?: number;
		/** 
		 * Relative priority of this callback. A larger
		 * number will result in the callback being sorted before the others.  Priorities
		 * 1000 or greater and -1000 or lesser are reserved for internal framework use only.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		priority?: number;
		/** 
		 * Pass `true` to only wait for DOM ready, `false`
		 * means full Framework and DOM readiness.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		dom?: boolean;
	}
}
declare namespace Ext.base {
	/** 
	 * @returns
	 * Method return interface: 
	 * Base interface for method return objects.
	 */
	interface Returns {
		/** @indexer */
		[others: string]: any;
	}
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * Base configurations interface.
	 */
	interface Configs {
		/** @indexer */
		[others: string]: any;
	}
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * Event config interface.
	 */
	interface EventConfig {
		/** 
		 * Event handler.
		 * @required
		 * @optional
		 */
		fn?: ExtGlobalFunction;
		/** 
		 * Event handler `this` context value.
		 * @optional
		 * @type {any}
		 */
		scope?: any;
		/** 
		 * Handler is invoked only once every `n` miliseconds in `buffer`, 
		 * regardless of how many times user fire it.
		 * @optional
		 * @type {number}
		 */
		buffer?: number;
		/** 
		 * Handler is invoked only once.
		 * @optional
		 * @type {boolean}
		 */
		single?: boolean;
	}
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * Base events interface.
	 */
	interface Events {
		/** @indexer */
		[events: string]: Ext.base.EventConfig | ExtGlobalFunction;
	}
}
