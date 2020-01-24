declare namespace Ext.chart.label {
	/** 
	 * [Ext.chart.label.Callout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.label.Callout.html)
	 * This is a modifier to place labels and callouts by additional attributes.
	 */
	class Callout extends Ext.draw.modifier.Modifier {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [sprite](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Modifier.html#cfg-sprite).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.sprite.Sprite}  
		 */
		getSprite? (): Ext.draw.sprite.Sprite;
		/** 
		 * Sets the value of [sprite](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Modifier.html#cfg-sprite).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.sprite.Sprite} sprite The new value.
		 * @returns {void}                          
		 */
		setSprite? (sprite: Ext.draw.sprite.Sprite): void;
		/** 
		 * Returns the value of [lower](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Modifier.html#cfg-lower).
		 * @method
		 * @private (method)
		 * @returns {Ext.draw.modifier.Modifier}  
		 */
		getLower? (): Ext.draw.modifier.Modifier;
		/** 
		 * Returns the value of [upper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Modifier.html#cfg-upper).
		 * @method
		 * @private (method)
		 * @returns {Ext.draw.modifier.Modifier}  
		 */
		getUpper? (): Ext.draw.modifier.Modifier;
		/** 
		 * Invoked when changes need to be popped up to the top.
		 * @method
		 * @private (method)
		 * @param   {object} attributes The source attributes.
		 * @param   {object} changes    The changes to be popped up.
		 * @returns {void}              
		 */
		popUp? (attributes: object, changes: object): void;
		/** 
		 * Validate attribute set before use.
		 * @method
		 * @private (method)
		 * @param   {object} attr
		 * The attribute to be validated. Note that it may be already initialized, so do
		 * not override properties that have already been used.
		 * @returns {void}        
		 */
		prepareAttributes? (attr: object): void;
		/** 
		 * Invoked when changes need to be pushed down to the sprite.
		 * @method
		 * @private (method)
		 * @param   {object} attr    The source attributes.
		 * @param   {object} changes The changes to make. This object might be changed unexpectedly inside the method.
		 * @returns {any}            
		 */
		pushDown? (attr: object, changes: object): any;
		/** 
		 * Sets the value of [lower](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Modifier.html#cfg-lower).
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.modifier.Modifier} lower The new value.
		 * @returns {void}                             
		 */
		setLower? (lower: Ext.draw.modifier.Modifier): void;
		/** 
		 * Sets the value of [upper](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Modifier.html#cfg-upper).
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.modifier.Modifier} upper The new value.
		 * @returns {void}                             
		 */
		setUpper? (upper: Ext.draw.modifier.Modifier): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} lower
		 * @returns {void}         
		 */
		updateLower? (lower: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} upper
		 * @returns {void}         
		 */
		updateUpper? (upper: object): void;
	}
}
declare namespace Ext.chart.legend {
	/** 
	 * [Ext.chart.legend.Legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html)
	 * This class provides a dataview-based chart legend.
	 */
	class Legend extends Ext.chart.legend.LegendBase {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [horizontalHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-horizontalHeight).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getHorizontalHeight? (): number;
		/** 
		 * Returns the value of [inline](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-inline).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getInline? (): boolean;
		/** 
		 * Returns the value of [itemTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-itemTpl).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getItemTpl? (): any[];
		/** 
		 * Returns the value of [rect](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html#cfg-rect).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRect? (): any[];
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getScrollable? (): boolean;
		/** 
		 * Returns the value of [toggleable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html#cfg-toggleable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getToggleable? (): boolean;
		/** 
		 * Returns the value of [verticalWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-verticalWidth).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getVerticalWidth? (): number;
		/** 
		 * Sets the value of [horizontalHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-horizontalHeight).
		 * @method
		 * @public (method)
		 * @param   {number} horizontalHeight The new value.
		 * @returns {void}                    
		 */
		setHorizontalHeight? (horizontalHeight: number): void;
		/** 
		 * Sets the value of [inline](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-inline).
		 * @method
		 * @public (method)
		 * @param   {boolean} inline The new value.
		 * @returns {void}           
		 */
		setInline? (inline: boolean): void;
		/** 
		 * Sets the value of [itemTpl](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-itemTpl).
		 * @method
		 * @public (method)
		 * @param   {any[]} itemTpl The new value.
		 * @returns {void}          
		 */
		setItemTpl? (itemTpl: any[]): void;
		/** 
		 * Sets the value of [rect](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html#cfg-rect).
		 * @method
		 * @public (method)
		 * @param   {any[]} rect The new value.
		 * @returns {void}       
		 */
		setRect? (rect: any[]): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean} scrollable The new value.
		 * @returns {void}               
		 */
		setScrollable? (scrollable: boolean): void;
		/** 
		 * Sets the value of [toggleable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html#cfg-toggleable).
		 * @method
		 * @public (method)
		 * @param   {boolean} toggleable The new value.
		 * @returns {void}               
		 */
		setToggleable? (toggleable: boolean): void;
		/** 
		 * Sets the value of [verticalWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-verticalWidth).
		 * @method
		 * @public (method)
		 * @param   {number} verticalWidth The new value.
		 * @returns {void}                 
		 */
		setVerticalWidth? (verticalWidth: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} container
		 * @param   {object} target
		 * @param   {object} index
		 * @param   {object} e
		 * @returns {void}             
		 */
		onItemTap? (container: object, target: object, index: object, e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @param   {object} oldDocked
		 * @returns {void}             
		 */
		updateDocked? (docked: object, oldDocked: object): void;
	}
	/** 
	 * [Ext.chart.legend.LegendBase](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html)
	 * The legend base class adapater for modern toolkit.
	 */
	class LegendBase extends Ext.dataview.DataView {
		/** 
		 * Returns the value of [horizontalHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-horizontalHeight).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getHorizontalHeight? (): number;
		/** 
		 * Returns the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getScrollable? (): boolean;
		/** 
		 * Returns the value of [verticalWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-verticalWidth).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getVerticalWidth? (): number;
		/** 
		 * Sets the value of [horizontalHeight](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-horizontalHeight).
		 * @method
		 * @public (method)
		 * @param   {number} horizontalHeight The new value.
		 * @returns {void}                    
		 */
		setHorizontalHeight? (horizontalHeight: number): void;
		/** 
		 * Sets the value of [scrollable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-scrollable).
		 * @method
		 * @public (method)
		 * @param   {boolean} scrollable The new value.
		 * @returns {void}               
		 */
		setScrollable? (scrollable: boolean): void;
		/** 
		 * Sets the value of [verticalWidth](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html#cfg-verticalWidth).
		 * @method
		 * @public (method)
		 * @param   {number} verticalWidth The new value.
		 * @returns {void}                 
		 */
		setVerticalWidth? (verticalWidth: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} container
		 * @param   {object} target
		 * @param   {object} index
		 * @param   {object} e
		 * @returns {void}             
		 */
		onItemTap? (container: object, target: object, index: object, e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} docked
		 * @param   {object} oldDocked
		 * @returns {void}             
		 */
		updateDocked? (docked: object, oldDocked: object): void;
	}
	/** 
	 * [Ext.chart.legend.SpriteLegend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html)
	 * This class uses [`Ext.draw.sprite.Sprite`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html) to render the chart legend.
	 */
	class SpriteLegend extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-border).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBorder? (): object;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-chart).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Returns the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDocked? (): string;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [marker](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-marker).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMarker? (): object;
		/** 
		 * Returns the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getPadding? (): number;
		/** 
		 * Returns the value of [size](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-size).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getSize? (): object;
		/** 
		 * Returns the value of [store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-store).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.store.Store}  
		 */
		getStore? (): Ext.chart.legend.store.Store;
		/** 
		 * Returns the value of [toggleable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-toggleable).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getToggleable? (): boolean;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [border](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-border).
		 * @method
		 * @public (method)
		 * @param   {object} border The new value.
		 * @returns {void}          
		 */
		setBorder? (border: object): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-chart).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * Sets the value of [docked](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-docked).
		 * @method
		 * @public (method)
		 * @param   {string} docked The new value.
		 * @returns {void}          
		 */
		setDocked? (docked: string): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [marker](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-marker).
		 * @method
		 * @public (method)
		 * @param   {object} marker The new value.
		 * @returns {void}          
		 */
		setMarker? (marker: object): void;
		/** 
		 * Sets the value of [padding](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-padding).
		 * @method
		 * @public (method)
		 * @param   {number} padding The new value.
		 * @returns {void}           
		 */
		setPadding? (padding: number): void;
		/** 
		 * Sets the value of [size](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-size).
		 * @method
		 * @public (method)
		 * @param   {object} size The new value.
		 * @returns {void}        
		 */
		setSize? (size: object): void;
		/** 
		 * Sets the value of [store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-store).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.legend.store.Store} store The new value.
		 * @returns {void}                               
		 */
		setStore? (store: Ext.chart.legend.store.Store): void;
		/** 
		 * Sets the value of [toggleable](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-toggleable).
		 * @method
		 * @public (method)
		 * @param   {boolean} toggleable The new value.
		 * @returns {void}               
		 */
		setToggleable? (toggleable: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-surface).
		 * @method
		 * @protected (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html#cfg-surface).
		 * @method
		 * @protected (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
	}
}
declare namespace Ext.chart.plugin {
	/** 
	 * [Ext.chart.plugin.ItemEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.plugin.ItemEvents.html)
	 * A chart plugin that adds ability to listen to chart series
	 * items events. Item event listeners are passed two parameters: the target item and the
	 * event itself. The item object has the following properties:
	 * 
	 * - **category** - the category the item falls under: 'items' or 'markers'
	 * - **field** - the store field used by this series item
	 * - **index** - the index of the series item
	 * - **record** - the store record associated with this series item
	 * - **series** - the series the item belongs to
	 * - **sprite** - the sprite used to represents this series item
	 * 
	 * For example:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        plugins: {
	 *            ptype: 'chartitemevents',
	 *            moveEvents: true
	 *        },
	 *        store: {
	 *            fields: ['pet', 'households', 'total'],
	 *            data: [
	 *                {pet: 'Cats', households: 38, total: 93},
	 *                {pet: 'Dogs', households: 45, total: 79},
	 *                {pet: 'Fish', households: 13, total: 171}
	 *            ]
	 *        },
	 *        axes: [{
	 *            type: 'numeric',
	 *            position: 'left'
	 *        }, {
	 *            type: 'category',
	 *            position: 'bottom'
	 *        }],
	 *        series: [{
	 *            type: 'bar',
	 *            xField: 'pet',
	 *            yField: 'households',
	 *            listeners: {
	 *                itemmousemove: function (series, item, event) {
	 *                     console.log('itemmousemove', item.category, item.field);
	 *                }
	 *            }
	 *        }, {
	 *            type: 'line',
	 *            xField: 'pet',
	 *            yField: 'total',
	 *            marker: true
	 *        }],
	 *        listeners: { // Listen to itemclick events on all series.
	 *            itemclick: function (chart, item, event) {
	 *                console.log('itemclick', item.category, item.field);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	class ItemEvents extends Ext.plugin.Abstract {
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		init? (chart: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.plugin.Abstract.init](https://docs.sencha.com/extjs/6.2.0/modern/Ext.plugin.Abstract.html#method-init).
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
	}
}
declare namespace Ext.chart.sprite {
	/** 
	 * [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html)
	 * Sprite used to represent labels in series.
	 * 
	 * Important: the actual default values are determined by the theme used.
	 * Please see the `label` config of the [Ext.chart.theme.Base.axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-axis).
	 */
	class Label extends Ext.draw.sprite.Text {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the current animation instance.
		 * return {[Ext.draw.modifier.Animation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Animation.html)} The animation modifier used to animate the
		 * sprite
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * Returns the bounding box for the given Sprite as calculated with the Canvas engine.
		 * @method
		 * @public (method)
		 * @param   {boolean} [isWithoutTransform] Whether to calculate the bounding box with the current transforms or not.
		 * @returns {void}                         
		 */
		getBBox? (isWithoutTransform?: boolean): void;
		/** 
		 * Subclass can rewrite this function to gain better performance.
		 * @method
		 * @public (method)
		 * @param   {boolean} isWithoutTransform
		 * @returns {any[]}                      
		 */
		getBBoxCenter? (isWithoutTransform: boolean): any[];
		/** 
		 * Returns the value of [calloutLine](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html#cfg-calloutLine).
		 * @method
		 * @public (method)
		 * @returns {boolean|object}  
		 */
		getCalloutLine? (): boolean | object;
		/** 
		 * Returns the value of [field](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html#cfg-field).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getField? (): object;
		/** 
		 * Returns the value of [fx](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html#cfg-fx).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getFx? (): object;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.sprite.Label|Ext.draw.sprite.Text|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.sprite.Label;
		hide? (): Ext.draw.sprite.Text;
		hide? (): Ext.draw.sprite.Sprite;
		/** 
		 * Performs a hit test on the sprite.
		 * @method
		 * @public (method)
		 * @param   {any[]}  point   A two-item array containing x and y coordinates of the point.
		 * @param   {object} options Hit testing options.
		 * @returns {object} 
		 * A hit result object that contains more information about what
		 * exactly was hit or null if nothing was hit.
		 */
		hitTest? (point: any[], options: object): object;
		/** 
		 * Called before rendering.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		preRender? (): void;
		/** 
		 * Removes this sprite from its surface.
		 * The sprite itself is not destroyed.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.sprite.Sprite}  Returns the removed sprite or `null` otherwise.
		 */
		remove? (): Ext.draw.sprite.Sprite;
		/** 
		 * Render method.
		 * @method
		 * @public (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#method-render).
		 * Render method.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The surface.
		 * @param   {object}           ctx     A context object compatible with CanvasRenderingContext2D.
		 * @param   {any[]}            rect
		 * The clip rect (or called dirty rect) of the current rendering. Not to be confused
		 * with `surface.getRect()`.
		 * @returns {any}              
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: Ext.draw.Surface, ctx: object, rect: any[]): any;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                            [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.sprite.Label|Ext.draw.sprite.Text|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.sprite.Label;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Text;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Sets the animation config used by the sprite when animating the sprite's
		 * attributes and transformation properties.
		 * 
		 *    var drawCt = Ext.create({
		 *        xtype: 'draw',
		 *        renderTo: document.body,
		 *        width: 400,
		 *        height: 400,
		 *        sprites: [{
		 *            type: 'rect',
		 *            x: 50,
		 *            y: 50,
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: '#1F6D91'
		 *        }]
		 *    });
		 *    
		 *    var rect = drawCt.getSurface().getItems()[0];
		 *    
		 *    rect.setAnimation({
		 *        duration: 1000,
		 *        easing: 'elasticOut'
		 *    });
		 *    
		 *    Ext.defer(function () {
		 *        rect.setAttributes({
		 *            width: 250
		 *        });
		 *    }, 500);
		 * 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 * The [Ext.draw.modifier.Animation](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.modifier.Animation.html) config for this sprite's
		 * animations.
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
		 * If normalization is skipped, one may also chose to avoid copying
		 * the given object. This may result in even better performance, but
		 * only in cases where most of the attributes have values that are
		 * different from the old values, because copying additionally checks
		 * if the value has changed.
		 * @method
		 * @public (method)
		 * @param   {object}  changes               The content of the change.
		 * @param   {boolean} [bypassNormalization] `true` to avoid normalization of the given changes.
		 * @param   {boolean} [avoidCopy]
		 * `true` to avoid copying the `changes` object.
		 * `bypassNormalization` should also be `true`. The content of object may be destroyed.
		 * @returns {void}                          
		 */
		setAttributes? (changes: object, bypassNormalization?: boolean, avoidCopy?: boolean): void;
		/** 
		 * Set attributes of the sprite, assuming the names and values have already been
		 * normalized.
		 * @method
		 * @public (method)
		 * @param   {object}  changes     The content of the change.
		 * @param   {boolean} [avoidCopy]
		 * `true` to avoid copying the `changes` object.
		 * The content of object may be destroyed.
		 * @returns {void}                
		 */
		setAttributesBypassingNormalization? (changes: object, avoidCopy?: boolean): void;
		/** 
		 * Sets the value of [calloutLine](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html#cfg-calloutLine).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} calloutLine The new value.
		 * @returns {void}                       
		 */
		setCalloutLine? (calloutLine: boolean | object): void;
		/** 
		 * Sets the value of [field](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html#cfg-field).
		 * @method
		 * @public (method)
		 * @param   {object} field The new value.
		 * @returns {void}         
		 */
		setField? (field: object): void;
		/** 
		 * Sets the value of [fx](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html#cfg-fx).
		 * @method
		 * @public (method)
		 * @param   {object} fx The new value.
		 * @returns {void}      
		 */
		setFx? (fx: object): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * 
		 * See also: [transform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#method-transform)
		 * 
		 *    var drawContainer = new Ext.draw.Container({
		 *        renderTo: Ext.getBody(),
		 *        width: 380,
		 *        height: 380,
		 *        sprites: [{
		 *            type: 'rect',
		 *            width: 100,
		 *            height: 100,
		 *            fillStyle: 'red'
		 *        }]
		 *    });
		 *    
		 *    var main = drawContainer.getSurface();
		 *    var rect = main.getItems()[0];
		 *    
		 *    var m = new Ext.draw.Matrix().rotate(Math.PI, 100, 100);
		 *    
		 *    rect.setTransform(m);
		 *    main.renderFrame();
		 * 
		 * There may be times where the transformation you need to apply cannot easily be
		 * accomplished using the sprite’s convenience transform methods.  Or, you may want
		 * to pass a matrix directly to the sprite in order to set a transformation.  The
		 * `setTransform` method allows for this sort of advanced usage as well.  The
		 * following tables show each transformation matrix used when applying
		 * transformations to a sprite.
		 * 
		 * ### Translate
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">1</td>
		 *          <td style="font-weight: normal;">0</td>
		 *          <td style="font-weight: normal;">tx</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>1</td>
		 *          <td>ty</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * 
		 * ### Rotate (θ is the angle of rotation)
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">cos(θ)</td>
		 *          <td style="font-weight: normal;">-sin(θ)</td>
		 *          <td style="font-weight: normal;">0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>cos(θ)</td>
		 *          <td>0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * 
		 * ### Scale
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">sx</td>
		 *          <td style="font-weight: normal;">0</td>
		 *          <td style="font-weight: normal;">0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>cos(θ)</td>
		 *          <td>0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * 
		 * ### Shear X _(λ is the distance on the x axis to shear by)_
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">1</td>
		 *          <td style="font-weight: normal;">λx</td>
		 *          <td style="font-weight: normal;">0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>1</td>
		 *          <td>0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * 
		 * ### Shear Y (λ is the distance on the y axis to shear by)
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">1</td>
		 *          <td style="font-weight: normal;">0</td>
		 *          <td style="font-weight: normal;">0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>λy</td>
		 *          <td>1</td>
		 *          <td>0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * 
		 * ### Skew X (θ is the angle to skew by)
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">1</td>
		 *          <td style="font-weight: normal;">tan(θ)</td>
		 *          <td style="font-weight: normal;">0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>1</td>
		 *          <td>0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * 
		 * ### Skew Y (θ is the angle to skew by)
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">1</td>
		 *          <td style="font-weight: normal;">0</td>
		 *          <td style="font-weight: normal;">0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>tan(θ)</td>
		 *          <td>1</td>
		 *          <td>0</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 *  
		 *  
		 *  
		 *  
		 *  Multiplying matrices for translation, rotation, scaling, and shearing / skewing
		 *  any number of times in the desired order produces a single matrix for a composite
		 *  transformation.  You can use the product as a value for the `setTransform`method
		 *  of a sprite:
		 * 
		 *    mySprite.setTransform([a, b, c, d, e, f]);
		 * 
		 * Where `a`, `b`, `c`, `d`, `e`, `f` are numeric values that correspond to the
		 * following transformation matrix components:
		 * 
		 * <table style="text-align: center;">
		 * 
		 *      <tr>
		 *          <td style="font-weight: normal;">a</td>
		 *          <td style="font-weight: normal;">c</td>
		 *          <td style="font-weight: normal;">e</td>
		 *      </tr>
		 *      <tr>
		 *          <td>b</td>
		 *          <td>d</td>
		 *          <td>f</td>
		 *      </tr>
		 *      <tr>
		 *          <td>0</td>
		 *          <td>0</td>
		 *          <td>1</td>
		 *      </tr>
		 * 
		 * </table>
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                           matrix
		 * The transformation matrix to apply or its
		 * raw elements as an array.
		 * @param   {boolean}                                                            [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.sprite.Label|Ext.draw.sprite.Text|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.sprite.Label;
		setTransform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Text;
		setTransform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.sprite.Label|Ext.draw.sprite.Text|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.sprite.Label;
		show? (): Ext.draw.sprite.Text;
		show? (): Ext.draw.sprite.Sprite;
		/** 
		 * Pre-multiplies the current transformation matrix of a sprite with the given matrix.
		 * If `isSplit` parameter is `true`, the resulting matrix is also split into
		 * individual components (scaling, rotation, translation) and corresponding sprite
		 * attributes are updated. The shearing component is not extracted.
		 * Note, that transformation attributes work as if transformations are applied to the
		 * local coordinate system of a sprite, while matrix transformations transform
		 * the global coordinate space or the surface grid.
		 * Since the `transform` method returns the sprite itself, calls to the method
		 * can be chained. And if updating sprite transformation attributes is desired,
		 * it can be achieved by setting the `isSplit` parameter of the last call to `true`.
		 * For example:
		 * 
		 *    sprite.transform(matrixA).transform(matrixB).transform(matrixC, true);
		 * 
		 * See also: [setTransform](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#method-setTransform)
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                           matrix    A transformation matrix or array of its elements.
		 * @param   {boolean}                                                            [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.sprite.Label|Ext.draw.sprite.Text|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.sprite.Label;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Text;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Applies sprite's attributes to the given context.
		 * @method
		 * @public (method)
		 * @param   {object} ctx  Context to apply sprite's attributes to.
		 * @param   {any[]}  rect The rect of the context to be affected by gradients.
		 * @returns {void}        
		 */
		useAttributes? (ctx: object, rect: any[]): void;
		/** 
		 * Subclass will fill the plain object with `x`, `y`, `width`, `height` information
		 * of the plain bounding box of this sprite.
		 * @method
		 * @protected (method)
		 * @param   {object} plain Target object.
		 * @returns {void}         
		 */
		updatePlainBBox? (plain: object): void;
		/** 
		 * Subclass will fill the plain object with `x`, `y`, `width`, `height` information
		 * of the transformed bounding box of this sprite.
		 * @method
		 * @protected (method)
		 * @param   {object} transform Target object (transformed bounding box) to populate.
		 * @param   {object} plain     Untransformed bounding box.
		 * @returns {void}             
		 */
		updateTransformedBBox? (transform: object, plain: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} modifier
		 * @param   {object} reinitializeAttributes
		 * @returns {void}                          
		 */
		addModifier? (modifier: object, reinitializeAttributes: object): void;
		/** 
		 * Calculates forward and inverse transform matrices from sprite's attributes.
		 * Transformations are applied in the following order: Scaling, Rotation, Translation.
		 * @method
		 * @private (method)
		 * @param   {boolean} [force]
		 * Forces recalculation of transform matrices even when
		 * sprite's transform attributes supposedly haven't changed.
		 * @returns {void}            
		 */
		applyTransformations? (force?: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} attr
		 * @returns {void}        
		 */
		bboxUpdater? (attr: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} attr
		 * @param   {object} updater
		 * @param   {object} triggers
		 * @returns {void}            
		 */
		callUpdater? (attr: object, updater: object, triggers: object): void;
		/** 
		 * Calls updaters triggered by changes to sprite attributes.
		 * @method
		 * @private (method)
		 * @param   {object} attr The attributes of a sprite or its instance.
		 * @returns {void}        
		 */
		callUpdaters? (attr: object): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @private (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @private (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initializeAttributes? (): void;
		/** 
		 * Checks if the sprite can be seen.
		 * This includes the `hidden` attribute check, alpha/opacity checks,
		 * fill/stroke color checks and surface/parent checks.
		 * The method doesn't check if the sprite is off-screen.
		 * @method
		 * @private (method)
		 * @returns {boolean}  Returns `true`, if the sprite can be seen.
		 */
		isVisible? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} subClass
		 * @param   {object} data
		 * @returns {void}            
		 */
		onClassExtended? (subClass: object, data: object): void;
		/** 
		 * Renders the bounding box of transformed sprite.
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @returns {void}           
		 */
		renderBBox? (surface: object, ctx: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		repaint? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object}   attr       {Object} The attributes object (not necesseraly of a sprite, but of its instance).
		 * @param   {object}   updater    {String} Updater to be called.
		 * @param   {string[]} [triggers] Attributes that triggered the update.
		 * @returns {void}                
		 */
		scheduleUpdater? (attr: object, updater: object, triggers?: string[]): void;
		/** 
		 * Schedules specified updaters to be called.
		 * Updaters are called implicitly as a result of a change to sprite attributes.
		 * But sometimes it may be required to call an updater without setting an attribute,
		 * and without messing up the updater call order (by calling the updater immediately).
		 * For example:
		 * 
		 *    updaters: {
		 *         onDataX: function (attr) {
		 *             this.processDataX();
		 *             // Process data Y every time data X is processed.
		 *             // Call the onDataY updater as if changes to dataY attribute itself
		 *             // triggered the update.
		 *             this.scheduleUpdaters(attr, {onDataY: ['dataY']});
		 *             // Alternatively:
		 *             // this.scheduleUpdaters(attr, ['onDataY'], ['dataY']);
		 *         }
		 *    }
		 * 
		 * @method
		 * @private (method)
		 * @param   {object}          attr       The attributes object (not necesseraly of a sprite, but of its instance).
		 * @param   {object|string[]} updaters   A map of updaters to be called to attributes that triggered the update.
		 * @param   {string[]}        [triggers]
		 * Attributes that triggered the update. An optional parameter.
		 * If used, the `updaters` parameter will be treated as an array of updaters to be called.
		 * @returns {void}                       
		 */
		scheduleUpdaters? (attr: object, updaters: object | string[], triggers?: string[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} dirty
		 * @returns {void}         
		 */
		setDirty? (dirty: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} ctx
		 * @param   {object} rect
		 * @returns {void}        
		 */
		setGradientBBox? (ctx: object, rect: object): void;
		/** 
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
}
declare namespace Ext.chart.theme {
	/** 
	 * [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html)
	 * Abstract class that provides default styles for non-specified things.
	 * Should be sub-classed when creating new themes.
	 * For example:
	 * 
	 *    Ext.define('Ext.chart.theme.Custom', {
	 *        extend: 'Ext.chart.theme.Base',
	 *        singleton: true,
	 *        alias: 'chart.theme.custom',
	 *        config: {
	 *            baseColor: '#ff9f00'
	 *        }
	 *    });
	 * 
	 * Theme provided values will not override the values provided in an instance config.
	 * However, if a theme provided value is an object, it will be merged with the value
	 * from the instance config, unless the theme provided object has a '$default' key
	 * set to 'true'.
	 * 
	 * Certain chart theme configs (e.g. 'fontSize') may use the 'default' value to indicate
	 * that they should inherit a value from the corresponding CSS style provided by
	 * a framework theme. Additionally, one can use basic binary operators like multiplication,
	 * addition and subtraction to derive from the default value, e.g. fontSize: 'default*1.3'.
	 * 
	 * Important: the theme should not use the 'font' shorthand to specify the font of labels
	 * and other text elements of a chart. Instead, individual font properties should be used:
	 * 'fontStyle', 'fontVariant', 'fontWeight', 'fontSize' and 'fontFamily'.
	 */
	class Base extends Ext.Base {
		/** 
		 * @property
		 * @private (property)
		 * @default ['#94ae0a', '#115fa6', '#a61120', '#ff8809', '#ffd13e', '#a61187', '#24ad9a', '#7c7474', '#a66111']
		 * @type {any[]}
		 */
		colorDefaults?: any[];
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		defaultOperators?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default /^default([+\-/\*]\d+(?:\.\d+)?)?$/
		 * @type {RegExp}
		 */
		defaultRegEx?: RegExp;
		/** 
		 * @property
		 * @private (property)
		 * @default {type: 'chart.theme'}
		 * @type {object}
		 */
		factoryConfig?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isTheme?: boolean;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-axis).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAxis? (): object;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [baseColor](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-baseColor).
		 * @method
		 * @public (method)
		 * @returns {string|Ext.util.Color}  
		 */
		getBaseColor? (): string | Ext.util.Color;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-chart).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getChart? (): object;
		/** 
		 * Returns the value of [colors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-colors).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getColors? (): any[];
		/** 
		 * Returns the value of [gradients](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGradients? (): object;
		/** 
		 * Returns the value of [legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLegend? (): object;
		/** 
		 * Returns the value of [markerThemes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-markerThemes).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getMarkerThemes? (): object;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getSeries? (): object;
		/** 
		 * Returns the value of [sprites](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getSprites? (): object;
		/** 
		 * Returns the value of [useGradients](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-useGradients).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getUseGradients? (): boolean;
		/** 
		 * Sets the value of [axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-axis).
		 * @method
		 * @public (method)
		 * @param   {object} axis The new value.
		 * @returns {void}        
		 */
		setAxis? (axis: object): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [baseColor](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-baseColor).
		 * @method
		 * @public (method)
		 * @param   {string|Ext.util.Color} baseColor The new value.
		 * @returns {void}                            
		 */
		setBaseColor? (baseColor: string | Ext.util.Color): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-chart).
		 * @method
		 * @public (method)
		 * @param   {object} chart The new value.
		 * @returns {void}         
		 */
		setChart? (chart: object): void;
		/** 
		 * Sets the value of [colors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-colors).
		 * @method
		 * @public (method)
		 * @param   {any[]} colors The new value.
		 * @returns {void}         
		 */
		setColors? (colors: any[]): void;
		/** 
		 * Sets the value of [gradients](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @param   {object} gradients The new value.
		 * @returns {void}             
		 */
		setGradients? (gradients: object): void;
		/** 
		 * Sets the value of [legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @param   {object} legend The new value.
		 * @returns {void}          
		 */
		setLegend? (legend: object): void;
		/** 
		 * Sets the value of [markerThemes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-markerThemes).
		 * @method
		 * @public (method)
		 * @param   {object} markerThemes The new value.
		 * @returns {void}                
		 */
		setMarkerThemes? (markerThemes: object): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {object} series The new value.
		 * @returns {void}          
		 */
		setSeries? (series: object): void;
		/** 
		 * Sets the value of [sprites](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @param   {object} sprites The new value.
		 * @returns {void}           
		 */
		setSprites? (sprites: object): void;
		/** 
		 * Sets the value of [useGradients](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-useGradients).
		 * @method
		 * @public (method)
		 * @param   {boolean} useGradients The new value.
		 * @returns {void}                 
		 */
		setUseGradients? (useGradients: boolean): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} baseColor
		 * @returns {void}             
		 */
		applyBaseColor? (baseColor: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newColors
		 * @returns {void}             
		 */
		applyColors? (newColors: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeriesThemes
		 * @returns {void}                   
		 */
		applySeriesThemes? (newSeriesThemes: object): void;
		/** 
		 * Returns the value of [seriesThemes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-seriesThemes).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getSeriesThemes? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} target
		 * @returns {void}          
		 */
		replaceDefaults? (target: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		resolveDefaults? (): void;
		/** 
		 * Sets the value of [seriesThemes](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-seriesThemes).
		 * @method
		 * @private (method)
		 * @param   {object} seriesThemes The new value.
		 * @returns {void}                
		 */
		setSeriesThemes? (seriesThemes: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		updateBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} gradients
		 * @returns {void}             
		 */
		updateGradients? (gradients: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} useGradients
		 * @returns {void}                
		 */
		updateUseGradients? (useGradients: object): void;
	}
	/** 
	 * @private (class)
	 * @singleton (definition)
	 */
	interface Default extends Ext.chart.theme.Base {}
}
declare namespace Ext.chart.label {
	class Label extends Ext.chart.sprite.Label {}
}
declare namespace Ext.chart {
	class Legend extends Ext.chart.legend.Legend {}
	class theme {
		/** 
		 * @private (class)
		 * @singleton (instance)
		 */
		static readonly Default?: Ext.chart.theme.Default;
	}
}
declare namespace Ext.chart.label.Callout {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.label.Callout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.label.Callout.html)
	 * This is a modifier to place labels and callouts by additional attributes.
	 */
	interface Def extends Ext.chart.label.Callout {
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
		 * @type {Ext.chart.label.Callout.Cfg}
		 */
		config?: Ext.chart.label.Callout.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.legend.Legend {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.legend.Legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html)
	 * This class provides a dataview-based chart legend.
	 */
	interface Def extends Ext.chart.legend.Legend {
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
		 * @type {Ext.chart.legend.Legend.Cfg}
		 */
		config?: Ext.chart.legend.Legend.Cfg;
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
		 * @returns {Ext.dataview.DataView.Statics|Ext.Container.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.dataview.DataView.Statics | Ext.Container.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.legend.LegendBase {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.legend.LegendBase](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html)
	 * The legend base class adapater for modern toolkit.
	 */
	interface Def extends Ext.chart.legend.LegendBase {
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
		 * @type {Ext.chart.legend.LegendBase.Cfg}
		 */
		config?: Ext.chart.legend.LegendBase.Cfg;
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
		 * @returns {Ext.dataview.DataView.Statics|Ext.Container.Statics|Ext.Component.Statics|Ext.Widget.Statics|Ext.Evented.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.dataview.DataView.Statics | Ext.Container.Statics | Ext.Component.Statics | Ext.Widget.Statics | Ext.Evented.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.legend.SpriteLegend {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.legend.SpriteLegend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html)
	 * This class uses [`Ext.draw.sprite.Sprite`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html) to render the chart legend.
	 */
	interface Def extends Ext.chart.legend.SpriteLegend {
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
		 * @type {Ext.chart.legend.SpriteLegend.Cfg}
		 */
		config?: Ext.chart.legend.SpriteLegend.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.plugin.ItemEvents {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.plugin.ItemEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.plugin.ItemEvents.html)
	 * A chart plugin that adds ability to listen to chart series
	 * items events. Item event listeners are passed two parameters: the target item and the
	 * event itself. The item object has the following properties:
	 * 
	 * - **category** - the category the item falls under: 'items' or 'markers'
	 * - **field** - the store field used by this series item
	 * - **index** - the index of the series item
	 * - **record** - the store record associated with this series item
	 * - **series** - the series the item belongs to
	 * - **sprite** - the sprite used to represents this series item
	 * 
	 * For example:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        plugins: {
	 *            ptype: 'chartitemevents',
	 *            moveEvents: true
	 *        },
	 *        store: {
	 *            fields: ['pet', 'households', 'total'],
	 *            data: [
	 *                {pet: 'Cats', households: 38, total: 93},
	 *                {pet: 'Dogs', households: 45, total: 79},
	 *                {pet: 'Fish', households: 13, total: 171}
	 *            ]
	 *        },
	 *        axes: [{
	 *            type: 'numeric',
	 *            position: 'left'
	 *        }, {
	 *            type: 'category',
	 *            position: 'bottom'
	 *        }],
	 *        series: [{
	 *            type: 'bar',
	 *            xField: 'pet',
	 *            yField: 'households',
	 *            listeners: {
	 *                itemmousemove: function (series, item, event) {
	 *                     console.log('itemmousemove', item.category, item.field);
	 *                }
	 *            }
	 *        }, {
	 *            type: 'line',
	 *            xField: 'pet',
	 *            yField: 'total',
	 *            marker: true
	 *        }],
	 *        listeners: { // Listen to itemclick events on all series.
	 *            itemclick: function (chart, item, event) {
	 *                console.log('itemclick', item.category, item.field);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Def extends Ext.chart.plugin.ItemEvents {
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
		 * @type {Ext.chart.plugin.ItemEvents.Cfg}
		 */
		config?: Ext.chart.plugin.ItemEvents.Cfg;
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
		 * @returns {Ext.plugin.Abstract.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.plugin.Abstract.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.sprite.Label {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html)
	 * Sprite used to represent labels in series.
	 * 
	 * Important: the actual default values are determined by the theme used.
	 * Please see the `label` config of the [Ext.chart.theme.Base.axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-axis).
	 */
	interface Def extends Ext.chart.sprite.Label {
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
		 * @type {Ext.chart.sprite.Label.Cfg}
		 */
		config?: Ext.chart.sprite.Label.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.sprite.Label.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.sprite.Label.Statics | any;
	}
}
declare namespace Ext.chart.theme.Base {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html)
	 * Abstract class that provides default styles for non-specified things.
	 * Should be sub-classed when creating new themes.
	 * For example:
	 * 
	 *    Ext.define('Ext.chart.theme.Custom', {
	 *        extend: 'Ext.chart.theme.Base',
	 *        singleton: true,
	 *        alias: 'chart.theme.custom',
	 *        config: {
	 *            baseColor: '#ff9f00'
	 *        }
	 *    });
	 * 
	 * Theme provided values will not override the values provided in an instance config.
	 * However, if a theme provided value is an object, it will be merged with the value
	 * from the instance config, unless the theme provided object has a '$default' key
	 * set to 'true'.
	 * 
	 * Certain chart theme configs (e.g. 'fontSize') may use the 'default' value to indicate
	 * that they should inherit a value from the corresponding CSS style provided by
	 * a framework theme. Additionally, one can use basic binary operators like multiplication,
	 * addition and subtraction to derive from the default value, e.g. fontSize: 'default*1.3'.
	 * 
	 * Important: the theme should not use the 'font' shorthand to specify the font of labels
	 * and other text elements of a chart. Instead, individual font properties should be used:
	 * 'fontStyle', 'fontVariant', 'fontWeight', 'fontSize' and 'fontFamily'.
	 */
	interface Def extends Ext.chart.theme.Base {
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
		 * @type {Ext.chart.theme.Base.Cfg}
		 */
		config?: Ext.chart.theme.Base.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.label.Callout {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.label.Callout](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.label.Callout.html)
	 * This is a modifier to place labels and callouts by additional attributes.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Modifier that receives the push-down changes.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Modifier}
		 */
		lower?: Ext.draw.modifier.Modifier;
		/** 
		 * The sprite to which the modifier belongs.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.sprite.Sprite}
		 */
		sprite?: Ext.draw.sprite.Sprite;
		/** 
		 * Modifier that receives the pop-up changes.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Modifier}
		 */
		upper?: Ext.draw.modifier.Modifier;
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
declare namespace Ext.chart.legend.Legend {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.legend.Legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html)
	 * This class provides a dataview-based chart legend.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'legend'
		 * @type {string}
		 */
		baseCls?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default 64
		 * @type {number}
		 */
		horizontalHeight?: number;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		inline?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default ['<span class=\"', Ext.baseCSSPrefix, 'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-item-inactive\' : \'\' ]}\" style=\"background:{mark};\"></span>{name}']
		 * @type {any[]}
		 */
		itemTpl?: any[];
		/** 
		 * The rect of the legend relative to its container.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		rect?: any[];
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		scrollable?: boolean;
		/** 
		 * `true` to allow series items to have their visibility
		 * toggled by interaction with the legend items.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		toggleable?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 150
		 * @type {number}
		 */
		verticalWidth?: number;
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
declare namespace Ext.chart.legend.LegendBase {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.legend.LegendBase](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.LegendBase.html)
	 * The legend base class adapater for modern toolkit.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default 64
		 * @type {number}
		 */
		horizontalHeight?: number;
		/** 
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		inline?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default ['<span class=\"', Ext.baseCSSPrefix, 'legend-item-marker {[ values.disabled ? Ext.baseCSSPrefix + \'legend-item-inactive\' : \'\' ]}\" style=\"background:{mark};\"></span>{name}']
		 * @type {any[]}
		 */
		itemTpl?: any[];
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		scrollable?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 150
		 * @type {number}
		 */
		verticalWidth?: number;
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
declare namespace Ext.chart.legend.SpriteLegend {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.legend.SpriteLegend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html)
	 * This class uses [`Ext.draw.sprite.Sprite`](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Sprite.html) to render the chart legend.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Set the legend background.
		 * This can be a gradient object, image, or color. This config works similarly
		 * to the [Ext.chart.AbstractChart.background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-background) config.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * The border that goes around legend item sprites.
		 * The type of the sprite is determined by this config,
		 * while the styling comes from a theme [#legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html).
		 * If both this config and the theme provide values for the
		 * same configs, the values from this config are used.
		 * The sprite class used a legend border should have the `isLegendBorder`
		 * property set to true on the prototype. The legend border sprite
		 * should also have the `x`, `y`, `width` and `height` attributes
		 * that determine it's position and dimensions.
		 * @configuration
		 * @optional
		 * @default {$value: {type: 'legendborder'}, lazy: true}
		 * @type {object}
		 */
		border?: object;
		/** 
		 * The chart that the store belongs to.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * The position of the legend in the chart.
		 * Possible values: 'bottom' (default), 'top', 'left', 'right'.
		 * @configuration
		 * @optional
		 * @default 'bottom'
		 * @type {string}
		 */
		docked?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default {preciseMeasurement: true}
		 * @type {object}
		 */
		label?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		marker?: object;
		/** 
		 * The padding amount between legend items and legend border.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		padding?: number;
		/** 
		 * The size of the area occupied by legend sprites.
		 * This is set by the legend itself and then used during chart layout
		 * to make sure the 'legend' surface is big enough to accommodate
		 * legend sprites.
		 * @configuration
		 * @optional
		 * @default {width: 0, height: 0}
		 * @type {object}
		 */
		size?: object;
		/** 
		 * The [Ext.chart.legend.store.Store](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.store.Store.html) to bind this legend to.
		 * @configuration
		 * @optional
		 * @default 'ext-empty-store'
		 * @type {Ext.chart.legend.store.Store}
		 */
		store?: Ext.chart.legend.store.Store;
		/** 
		 * The chart surface used to render legend sprites.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface}
		 */
		surface?: Ext.draw.Surface;
		/** 
		 * `true` to allow series items to have their visibility
		 * toggled by interaction with the legend items.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		toggleable?: boolean;
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
declare namespace Ext.chart.plugin.ItemEvents {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.plugin.ItemEvents](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.plugin.ItemEvents.html)
	 * A chart plugin that adds ability to listen to chart series
	 * items events. Item event listeners are passed two parameters: the target item and the
	 * event itself. The item object has the following properties:
	 * 
	 * - **category** - the category the item falls under: 'items' or 'markers'
	 * - **field** - the store field used by this series item
	 * - **index** - the index of the series item
	 * - **record** - the store record associated with this series item
	 * - **series** - the series the item belongs to
	 * - **sprite** - the sprite used to represents this series item
	 * 
	 * For example:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        plugins: {
	 *            ptype: 'chartitemevents',
	 *            moveEvents: true
	 *        },
	 *        store: {
	 *            fields: ['pet', 'households', 'total'],
	 *            data: [
	 *                {pet: 'Cats', households: 38, total: 93},
	 *                {pet: 'Dogs', households: 45, total: 79},
	 *                {pet: 'Fish', households: 13, total: 171}
	 *            ]
	 *        },
	 *        axes: [{
	 *            type: 'numeric',
	 *            position: 'left'
	 *        }, {
	 *            type: 'category',
	 *            position: 'bottom'
	 *        }],
	 *        series: [{
	 *            type: 'bar',
	 *            xField: 'pet',
	 *            yField: 'households',
	 *            listeners: {
	 *                itemmousemove: function (series, item, event) {
	 *                     console.log('itemmousemove', item.category, item.field);
	 *                }
	 *            }
	 *        }, {
	 *            type: 'line',
	 *            xField: 'pet',
	 *            yField: 'total',
	 *            marker: true
	 *        }],
	 *        listeners: { // Listen to itemclick events on all series.
	 *            itemclick: function (chart, item, event) {
	 *                console.log('itemclick', item.category, item.field);
	 *            }
	 *        }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * If `itemmousemove`, `itemmouseover` or `itemmouseout` event listeners are attached
		 * to the chart, the plugin will detect those and will hit test series items on
		 * every move. However, if the above item events are attached on the series level
		 * only, this config has to be set to true, as the plugin won't perform a similar
		 * detection on every series.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		moveEvents?: boolean;
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
declare namespace Ext.chart.sprite.Label {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.sprite.Label.html)
	 * Sprite used to represent labels in series.
	 * 
	 * Important: the actual default values are determined by the theme used.
	 * Please see the `label` config of the [Ext.chart.theme.Base.axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-axis).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * True to draw a line between the label and the chart with the default settings,
		 * or an Object that defines the 'color', 'width' and 'length' properties of the line.
		 * This config is only applicable when the label is displayed outside the chart.
		 * 
		 * Default value: false.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean|object}
		 */
		calloutLine?: boolean | object;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		field?: object;
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
		 * The font displayed.
		 * @configuration
		 * @optional
		 * @default '10px sans-serif'
		 * @type {string}
		 */
		font?: string;
		/** 
		 * The family of the font displayed.
		 * @configuration
		 * @optional
		 * @default 'sans-serif'
		 * @type {string}
		 */
		fontFamily?: string;
		/** 
		 * The size of the font displayed.
		 * @configuration
		 * @optional
		 * @default '10px'
		 * @type {string|number}
		 */
		fontSize?: string | number;
		/** 
		 * The style of the font displayed. {normal, italic, oblique}
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		fontStyle?: string;
		/** 
		 * The variant of the font displayed. {normal, small-caps}
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		fontVariant?: string;
		/** 
		 * The weight of the font displayed. {normal, bold, bolder, lighter}
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		fontWeight?: string;
		/** 
		 * Animation configuration.
		 * @configuration
		 * @optional
		 * @default {customDurations: {callout: 200}}
		 * @type {object}
		 */
		fx?: object;
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
		 * The text represented in the sprite.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		text?: string;
		/** 
		 * The alignment of the text displayed.
		 * {left, right, center, start, end}
		 * @configuration
		 * @optional
		 * @default 'start'
		 * @type {string}
		 */
		textAlign?: string;
		/** 
		 * The baseline of the text displayed.
		 * {top, hanging, middle, alphabetic, ideographic, bottom}
		 * @configuration
		 * @optional
		 * @default "alphabetic"
		 * @type {string}
		 */
		textBaseline?: string;
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
		 * @param   {object}                         config
		 * @returns {Ext.chart.sprite.Label.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.sprite.Label.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                  name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                         [value] The value to set for the name parameter.
		 * @returns {Ext.chart.sprite.Label.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.sprite.Label.Statics;
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
		 * @returns {Ext.chart.sprite.Label.Statics}  
		 */
		statics? (): Ext.chart.sprite.Label.Statics;
	}
}
declare namespace Ext.chart.theme.Base {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html)
	 * Abstract class that provides default styles for non-specified things.
	 * Should be sub-classed when creating new themes.
	 * For example:
	 * 
	 *    Ext.define('Ext.chart.theme.Custom', {
	 *        extend: 'Ext.chart.theme.Base',
	 *        singleton: true,
	 *        alias: 'chart.theme.custom',
	 *        config: {
	 *            baseColor: '#ff9f00'
	 *        }
	 *    });
	 * 
	 * Theme provided values will not override the values provided in an instance config.
	 * However, if a theme provided value is an object, it will be merged with the value
	 * from the instance config, unless the theme provided object has a '$default' key
	 * set to 'true'.
	 * 
	 * Certain chart theme configs (e.g. 'fontSize') may use the 'default' value to indicate
	 * that they should inherit a value from the corresponding CSS style provided by
	 * a framework theme. Additionally, one can use basic binary operators like multiplication,
	 * addition and subtraction to derive from the default value, e.g. fontSize: 'default*1.3'.
	 * 
	 * Important: the theme should not use the 'font' shorthand to specify the font of labels
	 * and other text elements of a chart. Instead, individual font properties should be used:
	 * 'fontStyle', 'fontVariant', 'fontWeight', 'fontSize' and 'fontFamily'.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Theme defaults for the axes.
		 * Can apply to all axes or only axes with a specific position.
		 * For example:
		 * 
		 *    axis: {
		 *      defaults: {
		 *        style: {strokeStyle: 'red'}
		 *      },
		 *      left: {
		 *        title: {fillStyle: 'green'}
		 *      }
		 *    }
		 * 
		 * The values from the axis.defaults and axis._position_ configs (where _position_
		 * is a valid axis [Ext.chart.axis.Axis.position](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html#cfg-position), e.g. 'bottom') will be
		 * applied to corresponding [axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html) configs.
		 * E.g., the axis.defaults.label config will apply to the [Ext.chart.axis.Axis.label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html#cfg-label)
		 * config of all axes, where the axis.left.titleMargin config will only apply to the
		 * [Ext.chart.axis.Axis.titleMargin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html#cfg-titleMargin) config of all axes positioned to the left.
		 * @configuration
		 * @optional
		 * @default {defaults: {label: {x: 0, y: 0, textBaseline: 'middle', textAlign: 'center', fontSize: 'default', fontFamily: 'default', fontWeight: 'default', fillStyle: 'black'}, title: {fillStyle: 'black', fontSize: 'default*1.23', fontFamily: 'default', fontWeight: 'default'}, style: {strokeStyle: 'black'}, grid: {strokeStyle: 'rgb(221, 221, 221)'}}, top: {style: {textPadding: 5}}, bottom: {style: {textPadding: 5}}}
		 * @type {object}
		 */
		axis?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * The base color used to generate the [Ext.chart.AbstractChart.colors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-colors) of the theme.
		 * @configuration
		 * @optional
		 * @type {string|Ext.util.Color}
		 */
		baseColor?: string | Ext.util.Color;
		/** 
		 * Theme defaults for the chart.
		 * Can apply to all charts or just a specific type of chart.
		 * For example:
		 * 
		 *    chart: {
		 *      defaults: {
		 *        background: 'lightgray'
		 *      },
		 *      polar: {
		 *        background: 'green'
		 *      }
		 *    }
		 * 
		 * The values from the chart.defaults and chart._type_ configs (where _type_ is a valid
		 * chart xtype, e.g. '[cartesian](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.CartesianChart.html)' or '[polar](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.PolarChart.html)')
		 * will be applied to corresponding chart configs.
		 * E.g., the chart.defaults.background config will set the [Ext.chart.AbstractChart.background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-background)
		 * config of all charts, where the chart.cartesian.flipXY config will only set the
		 * [Ext.chart.CartesianChart.flipXY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.CartesianChart.html#cfg-flipXY) config of all cartesian charts.
		 * @configuration
		 * @optional
		 * @default {defaults: {background: 'white'}}
		 * @type {object}
		 */
		chart?: object;
		/** 
		 * Array of colors/gradients to be used by the theme.
		 * Defaults to [colorDefaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#property-colorDefaults).
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		colors?: any[];
		/** 
		 * The gradient config to be used by series' sprites. E.g.:
		 * 
		 *    {
		 *      type: 'linear',
		 *      degrees: 90
		 *    }
		 * 
		 * Please refer to the documentation for the [linear](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.gradient.Linear.html)
		 * and [radial](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.gradient.Radial.html) gradients for all possible options.
		 * The color [stops](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.gradient.Gradient.html#cfg-stops) for the gradients
		 * will be generated by the theme based on the [colors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-colors) config.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		gradients?: object;
		/** 
		 * Style information for the {[Ext.chart.legend.SpriteLegend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html) sprite legend}.
		 * If the [DOM](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html) legend is used, this config is ignored.
		 * For additional details see [Ext.chart.AbstractChart.legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-legend).
		 * @configuration
		 * @optional
		 * @default {label: {fontSize: 14, fontWeight: 'default', fontFamily: 'default', fillStyle: 'black'}, border: {lineWidth: 1, radius: 4, fillStyle: 'none', strokeStyle: 'gray'}, background: 'white'}
		 * @type {object}
		 */
		legend?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {type: ['circle', 'cross', 'plus', 'square', 'triangle', 'diamond']}
		 * @type {object}
		 */
		markerThemes?: object;
		/** 
		 * Theme defaults for the series.
		 * Can apply to all series or just a specific type of series.
		 * For example:
		 * 
		 *    series: {
		 *      defaults: {
		 *        style: {
		 *          lineWidth: 2
		 *        }
		 *      },
		 *      bar: {
		 *        animation: {
		 *          easing: 'bounceOut',
		 *          duration: 1000
		 *        }
		 *      }
		 *    }
		 * 
		 * The values from the series.defaults and series._type_ configs (where _type_
		 * is a valid series [Ext.chart.series.Series.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Series.html#property-type), e.g. 'line') will be
		 * applied to corresponding series configs.
		 * E.g., the series.defaults.label config will apply to the [Ext.chart.series.Series.label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Series.html#cfg-label)
		 * config of all series, where the series.line.step config will only apply to the
		 * [Ext.chart.series.Line.step](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Line.html#cfg-step) config of [line](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Line.html) series.
		 * @configuration
		 * @optional
		 * @default {defaults: {label: {fillStyle: 'black', strokeStyle: 'none', fontFamily: 'default', fontWeight: 'default', fontSize: 'default*1.077', textBaseline: 'middle', textAlign: 'center'}, labelOverflowPadding: 5}}
		 * @type {object}
		 */
		series?: object;
		/** 
		 * An object with the following structure:
		 * {
		 *   fillStyle: [color, color, ...],
		 *   strokeStyle: [color, color, ...],
		 *   ...
		 * }
		 * If missing, generated from the other configs: 'baseColor, 'gradients', 'colors'.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		seriesThemes?: object;
		/** 
		 * Default style for the custom chart sprites by type.
		 * For example:
		 * 
		 *    sprites: {
		 *      text: {
		 *        fontWeight: 300
		 *      }
		 *    }
		 * 
		 * These sprite attribute overrides will apply to custom sprites of all charts
		 * specified using the [Ext.draw.Container.sprites](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.Container.html#cfg-sprites) config.
		 * The overrides are specified by sprite type, e.g. sprites.text config
		 * tells to apply given attributes to all [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Text.html) sprites.
		 * @configuration
		 * @optional
		 * @default {text: {fontSize: 'default', fontWeight: 'default', fontFamily: 'default', fillStyle: 'black'}}
		 * @type {object}
		 */
		sprites?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		useGradients?: boolean;
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
declare namespace Ext.chart.theme.Default {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.theme.Default](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Default.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Theme defaults for the axes.
		 * Can apply to all axes or only axes with a specific position.
		 * For example:
		 * 
		 *    axis: {
		 *      defaults: {
		 *        style: {strokeStyle: 'red'}
		 *      },
		 *      left: {
		 *        title: {fillStyle: 'green'}
		 *      }
		 *    }
		 * 
		 * The values from the axis.defaults and axis._position_ configs (where _position_
		 * is a valid axis [Ext.chart.axis.Axis.position](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html#cfg-position), e.g. 'bottom') will be
		 * applied to corresponding [axis](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html) configs.
		 * E.g., the axis.defaults.label config will apply to the [Ext.chart.axis.Axis.label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html#cfg-label)
		 * config of all axes, where the axis.left.titleMargin config will only apply to the
		 * [Ext.chart.axis.Axis.titleMargin](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.axis.Axis.html#cfg-titleMargin) config of all axes positioned to the left.
		 * @configuration
		 * @optional
		 * @default {defaults: {label: {x: 0, y: 0, textBaseline: 'middle', textAlign: 'center', fontSize: 'default', fontFamily: 'default', fontWeight: 'default', fillStyle: 'black'}, title: {fillStyle: 'black', fontSize: 'default*1.23', fontFamily: 'default', fontWeight: 'default'}, style: {strokeStyle: 'black'}, grid: {strokeStyle: 'rgb(221, 221, 221)'}}, top: {style: {textPadding: 5}}, bottom: {style: {textPadding: 5}}}
		 * @type {object}
		 */
		axis?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * The base color used to generate the [Ext.chart.AbstractChart.colors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-colors) of the theme.
		 * @configuration
		 * @optional
		 * @type {string|Ext.util.Color}
		 */
		baseColor?: string | Ext.util.Color;
		/** 
		 * Theme defaults for the chart.
		 * Can apply to all charts or just a specific type of chart.
		 * For example:
		 * 
		 *    chart: {
		 *      defaults: {
		 *        background: 'lightgray'
		 *      },
		 *      polar: {
		 *        background: 'green'
		 *      }
		 *    }
		 * 
		 * The values from the chart.defaults and chart._type_ configs (where _type_ is a valid
		 * chart xtype, e.g. '[cartesian](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.CartesianChart.html)' or '[polar](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.PolarChart.html)')
		 * will be applied to corresponding chart configs.
		 * E.g., the chart.defaults.background config will set the [Ext.chart.AbstractChart.background](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-background)
		 * config of all charts, where the chart.cartesian.flipXY config will only set the
		 * [Ext.chart.CartesianChart.flipXY](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.CartesianChart.html#cfg-flipXY) config of all cartesian charts.
		 * @configuration
		 * @optional
		 * @default {defaults: {background: 'white'}}
		 * @type {object}
		 */
		chart?: object;
		/** 
		 * Array of colors/gradients to be used by the theme.
		 * Defaults to [colorDefaults](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#property-colorDefaults).
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		colors?: any[];
		/** 
		 * The gradient config to be used by series' sprites. E.g.:
		 * 
		 *    {
		 *      type: 'linear',
		 *      degrees: 90
		 *    }
		 * 
		 * Please refer to the documentation for the [linear](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.gradient.Linear.html)
		 * and [radial](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.gradient.Radial.html) gradients for all possible options.
		 * The color [stops](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.gradient.Gradient.html#cfg-stops) for the gradients
		 * will be generated by the theme based on the [colors](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.theme.Base.html#cfg-colors) config.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		gradients?: object;
		/** 
		 * Style information for the {[Ext.chart.legend.SpriteLegend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.SpriteLegend.html) sprite legend}.
		 * If the [DOM](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.legend.Legend.html) legend is used, this config is ignored.
		 * For additional details see [Ext.chart.AbstractChart.legend](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.AbstractChart.html#cfg-legend).
		 * @configuration
		 * @optional
		 * @default {label: {fontSize: 14, fontWeight: 'default', fontFamily: 'default', fillStyle: 'black'}, border: {lineWidth: 1, radius: 4, fillStyle: 'none', strokeStyle: 'gray'}, background: 'white'}
		 * @type {object}
		 */
		legend?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default {type: ['circle', 'cross', 'plus', 'square', 'triangle', 'diamond']}
		 * @type {object}
		 */
		markerThemes?: object;
		/** 
		 * Theme defaults for the series.
		 * Can apply to all series or just a specific type of series.
		 * For example:
		 * 
		 *    series: {
		 *      defaults: {
		 *        style: {
		 *          lineWidth: 2
		 *        }
		 *      },
		 *      bar: {
		 *        animation: {
		 *          easing: 'bounceOut',
		 *          duration: 1000
		 *        }
		 *      }
		 *    }
		 * 
		 * The values from the series.defaults and series._type_ configs (where _type_
		 * is a valid series [Ext.chart.series.Series.type](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Series.html#property-type), e.g. 'line') will be
		 * applied to corresponding series configs.
		 * E.g., the series.defaults.label config will apply to the [Ext.chart.series.Series.label](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Series.html#cfg-label)
		 * config of all series, where the series.line.step config will only apply to the
		 * [Ext.chart.series.Line.step](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Line.html#cfg-step) config of [line](https://docs.sencha.com/extjs/6.2.0/modern/Ext.chart.series.Line.html) series.
		 * @configuration
		 * @optional
		 * @default {defaults: {label: {fillStyle: 'black', strokeStyle: 'none', fontFamily: 'default', fontWeight: 'default', fontSize: 'default*1.077', textBaseline: 'middle', textAlign: 'center'}, labelOverflowPadding: 5}}
		 * @type {object}
		 */
		series?: object;
		/** 
		 * An object with the following structure:
		 * {
		 *   fillStyle: [color, color, ...],
		 *   strokeStyle: [color, color, ...],
		 *   ...
		 * }
		 * If missing, generated from the other configs: 'baseColor, 'gradients', 'colors'.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		seriesThemes?: object;
		/** 
		 * Default style for the custom chart sprites by type.
		 * For example:
		 * 
		 *    sprites: {
		 *      text: {
		 *        fontWeight: 300
		 *      }
		 *    }
		 * 
		 * These sprite attribute overrides will apply to custom sprites of all charts
		 * specified using the [Ext.draw.Container.sprites](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.Container.html#cfg-sprites) config.
		 * The overrides are specified by sprite type, e.g. sprites.text config
		 * tells to apply given attributes to all [text](https://docs.sencha.com/extjs/6.2.0/modern/Ext.draw.sprite.Text.html) sprites.
		 * @configuration
		 * @optional
		 * @default {text: {fontSize: 'default', fontWeight: 'default', fontFamily: 'default', fillStyle: 'black'}}
		 * @type {object}
		 */
		sprites?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		useGradients?: boolean;
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
