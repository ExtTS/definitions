/** 
 * This class implements CanvasRenderingContext2D interface as described by
 * the WHATWG.
 * @private (class)
 */
declare class CanvasRenderingContext2D_ {}
declare namespace Ext.chart {
	/** 
	 * [Ext.chart.AbstractChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html)
	 * The Ext.chart package provides the capability to visualize data.
	 * Each chart binds directly to a store enabling automatic updates of the chart.
	 * A chart configuration object has some overall styling options as well as an array of axes
	 * and series. A chart instance example could look like this:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        width: 800,
	 *        height: 600,
	 *        animation: {
	 *            easing: 'backOut',
	 *            duration: 500
	 *        },
	 *        store: store1,
	 *        legend: {
	 *            position: 'right'
	 *        },
	 *        axes: [
	 *            // ...some axes options...
	 *        ],
	 *        series: [
	 *            // ...some series options...
	 *        ]
	 *    });
	 * 
	 * In this example we set the `width` and `height` of a chart; We decide whether our series are
	 * animated or not and we select a store to be bound to the chart; We also set the legend to the right part of the
	 * chart.
	 * 
	 * You can register certain interactions such as [Ext.chart.interactions.PanZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) on the chart by specify an
	 * array of names or more specific config objects. All the events will be wired automatically.
	 * 
	 * You can also listen to series `itemXXX` events on both chart and series level.
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
	 *                    console.log('itemmousemove', item.category, item.field);
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
	 * For more information about the axes and series configurations please check the documentation of
	 * each series (Line, Bar, Pie, etc).
	 */
	class AbstractChart extends Ext.draw.Container {
		/** 
		 * @property
		 * @private (property)
		 * @default 'store'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * Toggle for chart interactions that require animation to be suspended.
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		animationSuspendCount?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		axisThicknessSuspendCount?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		chartLayoutSuspendCount?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default 'dom'
		 * @type {string}
		 */
		defaultLegendType?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isChart?: boolean;
		/** 
		 * Indicates that thickness of one or more axes has changed,
		 * at the time of [performLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-performLayout) call. I.e. 'performLayout'
		 * should be called again when current layout is done.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		isThicknessChanged?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * The number of records in the chart's store last time the data was changed.
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		recordCount?: number;
		/** 
		 * The z-indexes to use for the various surfaces
		 * @property
		 * @private (property)
		 * @default {background: 0, main: 1, grid: 2, series: 3, axis: 4, chart: 5, overlay: 6, legend: 7, title: 8}
		 * @type {object}
		 */
		surfaceZIndexes?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default {}
		 * @type {object}
		 */
		themeOnlyIfConfigured?: object;
		/** 
		 * Adds a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) to this chart.
		 * 
		 * The Series (or array) passed will be added to the existing series. If an `id` is specified
		 * in a new Series, any existing Series of that `id` will be updated.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {object|object[]|Ext.chart.series.Series|Ext.chart.series.Series[]} newSeries
		 * A config object
		 * describing the Series to add, or an instantiated Series object. Or an array of these.
		 * @returns {void}                                                                        
		 */
		addSeries? (newSeries: object | object[] | Ext.chart.series.Series | Ext.chart.series.Series[]): void;
		/** 
		 * Changes the data store bound to this chart and refreshes it.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store} store The store to bind to this chart.
		 * @returns {void}                 
		 */
		bindStore? (store: Ext.data.Store): void;
		/** 
		 * Cancel a scheduled layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		cancelChartLayout? (): void;
		/** 
		 * Returns the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|any[]|object}  
		 */
		getAxes? (): Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Returns an axis instance based on the type of data passed.
		 * @method
		 * @public (method)
		 * @param   {string|number|Ext.chart.axis.Axis} axis
		 * You may request an axis by passing
		 * an id, the number of the array key returned by [getAxes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-getAxes), or an axis instance.
		 * @returns {Ext.chart.axis.Axis}                    The axis requested.
		 */
		getAxis? (axis: string | number | Ext.chart.axis.Axis): Ext.chart.axis.Axis;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getCls? (): string;
		/** 
		 * Returns the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getGradients? (): object[];
		/** 
		 * Returns the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getHighlightItem? (): object;
		/** 
		 * Produces an image of the chart / drawing.
		 * @method
		 * @public (method)
		 * @param   {string} [format]
		 * Possible options are 'image' (the method will return an
		 * Image object) and 'stream' (the method will return the image as a byte stream).<br/>
		 * If missing, the data URI of the drawing's (or chart's) image will be returned.
		 * Note: for an SVG based drawing/chart in IE/Edge browsers the method will always
		 * return SVG markup instead of a data URI, as 'img' elements won't accept a data
		 * URI anyway in those browsers.
		 * @returns {object}          
		 */
		getImage? (format?: string): object;
		/** 
		 * Returns the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @returns {object|number|string}  
		 */
		getInsetPadding? (): object | number | string;
		/** 
		 * Get an interaction by type.
		 * @method
		 * @public (method)
		 * @param   {string}                          type The type of the interaction.
		 * @returns {Ext.chart.interactions.Abstract} 
		 * The interaction. `null`
		 * if not found.
		 */
		getInteraction? (type: string): Ext.chart.interactions.Abstract;
		/** 
		 * Returns the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getInteractions? (): any[];
		/** 
		 * Given an x/y point relative to the chart, find and return the first series item that
		 * matches that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {object}   An object with `series` and `item` properties, or `false` if no item found.
		 */
		getItemForPoint? (x: number, y: number): object;
		/** 
		 * Given an x/y point relative to the chart, find and return all series items that match that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {any[]}    An array of objects with `series` and `item` properties.
		 */
		getItemsForPoint? (x: number, y: number): any[];
		/** 
		 * Returns the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}  
		 */
		getLegend? (): Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * Return the legend store that contains all the legend information.
		 * This information is collected from all the series.
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.store.Store}  
		 */
		getLegendStore? (): Ext.chart.legend.store.Store;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.series.Series|any[]}  
		 */
		getSeries? (): Ext.chart.series.Series | any[];
		/** 
		 * Returns the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getSprites? (): object[];
		/** 
		 * Returns the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Store|string|object}  
		 */
		getStore? (): Ext.data.Store | string | object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {object}           name
		 * @param   {object}           type
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (name: object, type: object): Ext.draw.Surface;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.getSurface](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-getSurface).
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {string}           [id]
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (id?: string): Ext.draw.Surface;
		/** 
		 * Returns the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTheme? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Triggers the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler) with the size of the draw container
		 * element as the parameter.
		 * @method
		 * @public (method)
		 * @param   {object} size
		 * @param   {object} instantly
		 * @returns {void}             
		 */
		handleResize? (size: object, instantly: object): void;
		/** 
		 * Displays an image of a [Ext.draw.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html) on screen.
		 * On mobile devices this lets users tap-and-hold to bring up the menu
		 * with image saving options.
		 * Notes:
		 * 
		 * - some browsers won't save the preview image if it's SVG based
		 *   (i.e. generated from a draw container that uses '[Ext.draw.engine.Svg](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html)' engine);
		 * - some platforms may not have the means of viewing successfully saved SVG images;
		 * - this method does not work on IE8.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		preview? (): void;
		/** 
		 * Redraw the chart. If animations are set this will animate the chart too.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		redraw? (): void;
		/** 
		 * Remove a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) from this chart.
		 * The Series (or array) passed will be removed from the existing series.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|string} series The Series or the `id` of the Series to remove. May be an array.
		 * @returns {void}                                  
		 */
		removeSeries? (series: Ext.chart.series.Series | string): void;
		/** 
		 * Render all the surfaces in the container.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Decrements chart's layout suspend count.
		 * When the suspend count is decremented to zero,
		 * a layout is scheduled.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeChartLayout? (): void;
		/** 
		 * Decrements axis thickness suspend count.
		 * When axis thickness suspend count is decremented to zero,
		 * chart layout is performed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeThicknessChanged? (): void;
		/** 
		 * Schedule a layout at next frame.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		scheduleLayout? (): void;
		/** 
		 * Sets the value of [animation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} animation The new value.
		 * @returns {void}                     
		 */
		setAnimation? (animation: boolean | object): void;
		/** 
		 * Sets the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|any[]|object} axes The new value.
		 * @returns {void}                                  
		 */
		setAxes? (axes: Ext.chart.axis.Axis | any[] | object): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string} cls The new value.
		 * @returns {void}       
		 */
		setCls? (cls: string): void;
		/** 
		 * Sets the value of [colors](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-colors).
		 * @method
		 * @public (method)
		 * @param   {any[]} colors The new value.
		 * @returns {void}         
		 */
		setColors? (colors: any[]): void;
		/** 
		 * Sets the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @param   {object[]} gradients The new value.
		 * @returns {void}               
		 */
		setGradients? (gradients: object[]): void;
		/** 
		 * Sets the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @param   {object} highlightItem The new value.
		 * @returns {void}                 
		 */
		setHighlightItem? (highlightItem: object): void;
		/** 
		 * Sets the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @param   {object|number|string} insetPadding The new value.
		 * @returns {void}                              
		 */
		setInsetPadding? (insetPadding: object | number | string): void;
		/** 
		 * Sets the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @param   {any[]} interactions The new value.
		 * @returns {void}               
		 */
		setInteractions? (interactions: any[]): void;
		/** 
		 * Sets the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean} legend The new value.
		 * @returns {void}                                                                 
		 */
		setLegend? (legend: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|any[]} series The new value.
		 * @returns {void}                                 
		 */
		setSeries? (series: Ext.chart.series.Series | any[]): void;
		/** 
		 * Sets the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @param   {object[]} sprites The new value.
		 * @returns {void}             
		 */
		setSprites? (sprites: object[]): void;
		/** 
		 * Sets the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store|string|object} store The new value.
		 * @returns {void}                               
		 */
		setStore? (store: Ext.data.Store | string | object): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Component.setStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setStyle).
		 * Sets the style for this Component's primary element.
		 * 
		 * Styles should be a valid DOM element style property.
		 * [Valid style property names](http://www.w3schools.com/jsref/dom_obj_style.asp)
		 * (_along with the supported CSS version for each_)
		 * 
		 *    var name = Ext.create({
		 *        xtype: 'component',
		 *        renderTo: Ext.getBody(),
		 *        html: 'Phineas Flynn'
		 *    });
		 *    
		 *    // two-param syntax
		 *    name.setStyle('color', 'white');
		 *    
		 *    // single-param syntax
		 *    name.setStyle({
		 *        fontWeight: 'bold',
		 *        backgroundColor: 'gray',
		 *        padding: '10px'
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                              property
		 * The style property to be set, or an object of
		 * multiple styles.
		 * @param   {string}                                                     [value]
		 * The value to apply to the given property, or null if an
		 * object was passed.
		 * @returns {void|Ext.panel.Panel|Ext.container.Container|Ext.Component}          this
		 */
		setStyle? (property: string | object, value?: string): Ext.panel.Panel;
		setStyle? (property: string | object, value?: string): Ext.container.Container;
		setStyle? (property: string | object, value?: string): Ext.Component;
		/** 
		 * Sets the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @param   {string} theme The new value.
		 * @returns {void}         
		 */
		setTheme? (theme: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Suspends chart's layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendChartLayout? (): void;
		/** 
		 * Prevent axes from triggering chart layout when their thickness changes.
		 * E.g. during an interaction that makes changes to the axes,
		 * or when chart layout was triggered by something else,
		 * for example a chart resize event.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendThicknessChanged? (): void;
		/** 
		 * Returns the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @returns {object|Function}  
		 */
		getResizeHandler? (): object;
		getResizeHandler? (): ExtGlobalFunction;
		/** 
		 * Note: the actual layout is performed in a subclass.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @param   {object} resizeHandler The new value.
		 * @returns {void}                 
		 */
		setResizeHandler? (resizeHandler: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.setResizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-setResizeHandler).
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler).
		 * @method
		 * @public (method)
		 * @param   {Function} resizeHandler The new value.
		 * @returns {void}                   
		 */
		setResizeHandler? (resizeHandler: ExtGlobalFunction): void;
		/** 
		 * Adds a listener to this draw container's element. If the element does not yet exist
		 * addition of the listener will be deferred until onRender.  Useful when listeners
		 * need to be attached during initConfig.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		addElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		allowSchedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAnimation
		 * @param   {object} oldAnimation
		 * @returns {void}                
		 */
		applyAnimation? (newAnimation: object, oldAnimation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAxes
		 * @param   {object} oldAxes
		 * @returns {void}           
		 */
		applyAxes? (newAxes: object, oldAxes: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBackground
		 * @param   {object} oldBackground
		 * @returns {void}                 
		 */
		applyBackground? (newBackground: object, oldBackground: object): void;
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
		 * @param   {object} gradients
		 * @returns {void}             
		 */
		applyGradients? (gradients: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		applyHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @param   {object} oldPadding
		 * @returns {void}              
		 */
		applyInsetPadding? (padding: object, oldPadding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} interactions
		 * @param   {object} oldInteractions
		 * @returns {void}                   
		 */
		applyInteractions? (interactions: object, oldInteractions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @returns {void}          
		 */
		applyLegend? (legend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRect
		 * @param   {object} rect
		 * @returns {void}           
		 */
		applyMainRect? (newRect: object, rect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		applySeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} sprites
		 * @returns {void}           
		 */
		applySprites? (sprites: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @returns {void}         
		 */
		applyStore? (store: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		applyTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inArray
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyArray? (inArray: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inObject
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyObject? (inObject: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chartRect
		 * @returns {void}             
		 */
		computeSpriteLegendRect? (chartRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		createSurface? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} size
		 * @returns {void}        
		 */
		defaultResizeHandler? (size: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroyChart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doScheduleLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @returns {void}           
		 */
		forgetSurface? (surface: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		get? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * The area of the chart minus the legend.
		 * Cache chart rect as element.getSize() results in
		 * a relatively expensive call to the getComputedStyle().
		 * @method
		 * @private (method)
		 * @param   {object} isRecompute
		 * @returns {void}               
		 */
		getChartRect? (isRecompute: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getColors? (): void;
		/** 
		 * Converts page coordinates into chart's 'main' surface coordinates.
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		getEventXY? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItems? (): void;
		/** 
		 * Returns the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getMainRect? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} deep
		 * @returns {any[]}        
		 */
		getRefItems? (deep: boolean): any[];
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.panel.Panel.getRefItems](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-getRefItems).
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html), [child](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-child) and [down](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-down) to retrieve all of the items
		 * which can potentially be considered a child of this Container.
		 * 
		 * This may be overriden by Components which have ownership of Components
		 * that are not contained in the [items](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#property-items) collection.
		 * 
		 * NOTE: IMPORTANT note for maintainers:
		 * Items are returned in tree traversal order. Each item is appended to the result array
		 * followed by the results of that child's getRefItems call.
		 * Floating child items are appended after internal child items.
		 * @method
		 * @protected (method)
		 * @param   {object}     deep
		 * @returns {any[]|void}      
		 */
		getRefItems? (deep: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initAnimator? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initItems? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationEnd? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationStart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onDataChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @param   {object} oldWidth
		 * @param   {object} oldHeight
		 * @returns {void}             
		 */
		onResize? (width: object, height: object, oldWidth: object, oldHeight: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.container.Container.onResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-onResize).
		 * Called when the component is resized.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width     The new width that was set
		 * @param   {number} height    The new height that was set
		 * @param   {number} oldWidth  The previous width
		 * @param   {number} oldHeight The previous height
		 * @returns {void}             
		 */
		onResize? (width: number, height: number, oldWidth: number, oldHeight: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @param   {object} record
		 * @returns {void}          
		 */
		onUpdateLegendStore? (store: object, record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * The background updater. Used by both the chart and the sprite legend.
		 * @method
		 * @private (method)
		 * @param   {object}                                      surface       The surface to put the background in.
		 * @param   {object}                                      newBackground
		 * @param   {object}                                      oldBackground
		 * @returns {Ext.draw.sprite.Rect|Ext.draw.sprite.Sprite}               
		 */
		refreshBackground? (surface: object, newBackground: object, oldBackground: object): Ext.draw.sprite.Rect | Ext.draw.sprite.Sprite;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshLegendStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		register? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		removeElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		resumeAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @returns {void}         
		 */
		setItems? (items: object): void;
		/** 
		 * Sets the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @param   {object} mainRect The new value.
		 * @returns {void}            
		 */
		setMainRect? (mainRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @returns {void}          
		 */
		setSurfaceSize? (width: object, height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		suspendAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		unregister? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateAxes? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateChartTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newColors
		 * @returns {void}             
		 */
		updateColors? (newColors: object): void;
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
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		updateHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @param   {object} oldLegend
		 * @returns {void}             
		 */
		updateLegend? (legend: object, oldLegend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		updateSeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateSpriteTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newStore
		 * @param   {object} oldStore
		 * @returns {void}            
		 */
		updateStore? (newStore: object, oldStore: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
	}
	/** 
	 * [Ext.chart.CartesianChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html)
	 * Represents a chart that uses cartesian coordinates.
	 * A cartesian chart has two directions, X direction and Y direction.
	 * The series and axes are coordinated along these directions.
	 * By default the x direction is horizontal and y direction is vertical,
	 * You can swap the direction by setting the [flipXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-flipXY) config to `true`.
	 * 
	 * Cartesian series often treats x direction an y direction differently.
	 * In most cases, data on x direction are assumed to be monotonically increasing.
	 * Based on this property, cartesian series can be trimmed and summarized properly
	 * to gain a better performance.
	 */
	class CartesianChart extends Ext.chart.AbstractChart {
		/** 
		 * @property
		 * @private (property)
		 * @default 'store'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Adds a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) to this chart.
		 * 
		 * The Series (or array) passed will be added to the existing series. If an `id` is specified
		 * in a new Series, any existing Series of that `id` will be updated.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {object|object[]|Ext.chart.series.Series|Ext.chart.series.Series[]} newSeries
		 * A config object
		 * describing the Series to add, or an instantiated Series object. Or an array of these.
		 * @returns {void}                                                                        
		 */
		addSeries? (newSeries: object | object[] | Ext.chart.series.Series | Ext.chart.series.Series[]): void;
		/** 
		 * Changes the data store bound to this chart and refreshes it.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store} store The store to bind to this chart.
		 * @returns {void}                 
		 */
		bindStore? (store: Ext.data.Store): void;
		/** 
		 * Cancel a scheduled layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		cancelChartLayout? (): void;
		/** 
		 * Returns the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|any[]|object}  
		 */
		getAxes? (): Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Returns an axis instance based on the type of data passed.
		 * @method
		 * @public (method)
		 * @param   {string|number|Ext.chart.axis.Axis} axis
		 * You may request an axis by passing
		 * an id, the number of the array key returned by [getAxes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-getAxes), or an axis instance.
		 * @returns {Ext.chart.axis.Axis}                    The axis requested.
		 */
		getAxis? (axis: string | number | Ext.chart.axis.Axis): Ext.chart.axis.Axis;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getCls? (): string;
		/** 
		 * Returns the value of [flipXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-flipXY).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getFlipXY? (): boolean;
		/** 
		 * Returns the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getGradients? (): object[];
		/** 
		 * Returns the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getHighlightItem? (): object;
		/** 
		 * Produces an image of the chart / drawing.
		 * @method
		 * @public (method)
		 * @param   {string} [format]
		 * Possible options are 'image' (the method will return an
		 * Image object) and 'stream' (the method will return the image as a byte stream).<br/>
		 * If missing, the data URI of the drawing's (or chart's) image will be returned.
		 * Note: for an SVG based drawing/chart in IE/Edge browsers the method will always
		 * return SVG markup instead of a data URI, as 'img' elements won't accept a data
		 * URI anyway in those browsers.
		 * @returns {object}          
		 */
		getImage? (format?: string): object;
		/** 
		 * Returns the value of [innerPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-innerPadding).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getInnerPadding? (): object;
		/** 
		 * Returns the value of [innerRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-innerRect).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getInnerRect? (): any[];
		/** 
		 * Returns the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @returns {object|number|string}  
		 */
		getInsetPadding? (): object | number | string;
		/** 
		 * Get an interaction by type.
		 * @method
		 * @public (method)
		 * @param   {string}                          type The type of the interaction.
		 * @returns {Ext.chart.interactions.Abstract} 
		 * The interaction. `null`
		 * if not found.
		 */
		getInteraction? (type: string): Ext.chart.interactions.Abstract;
		/** 
		 * Returns the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getInteractions? (): any[];
		/** 
		 * Given an x/y point relative to the chart, find and return the first series item that
		 * matches that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {object}   An object with `series` and `item` properties, or `false` if no item found.
		 */
		getItemForPoint? (x: number, y: number): object;
		/** 
		 * Given an x/y point relative to the chart, find and return all series items that match that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {any[]}    An array of objects with `series` and `item` properties.
		 */
		getItemsForPoint? (x: number, y: number): any[];
		/** 
		 * Returns the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}  
		 */
		getLegend? (): Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * Return the legend store that contains all the legend information.
		 * This information is collected from all the series.
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.store.Store}  
		 */
		getLegendStore? (): Ext.chart.legend.store.Store;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.series.Series|any[]}  
		 */
		getSeries? (): Ext.chart.series.Series | any[];
		/** 
		 * Returns the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getSprites? (): object[];
		/** 
		 * Returns the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Store|string|object}  
		 */
		getStore? (): Ext.data.Store | string | object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {object}           name
		 * @param   {object}           type
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (name: object, type: object): Ext.draw.Surface;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.getSurface](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-getSurface).
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {string}           [id]
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (id?: string): Ext.draw.Surface;
		/** 
		 * Returns the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTheme? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Triggers the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler) with the size of the draw container
		 * element as the parameter.
		 * @method
		 * @public (method)
		 * @param   {object} size
		 * @param   {object} instantly
		 * @returns {void}             
		 */
		handleResize? (size: object, instantly: object): void;
		/** 
		 * Layout the axes and series.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * Displays an image of a [Ext.draw.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html) on screen.
		 * On mobile devices this lets users tap-and-hold to bring up the menu
		 * with image saving options.
		 * Notes:
		 * 
		 * - some browsers won't save the preview image if it's SVG based
		 *   (i.e. generated from a draw container that uses '[Ext.draw.engine.Svg](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html)' engine);
		 * - some platforms may not have the means of viewing successfully saved SVG images;
		 * - this method does not work on IE8.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		preview? (): void;
		/** 
		 * Redraw the chart. If animations are set this will animate the chart too.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		redraw? (): void;
		/** 
		 * Remove a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) from this chart.
		 * The Series (or array) passed will be removed from the existing series.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|string} series The Series or the `id` of the Series to remove. May be an array.
		 * @returns {void}                                  
		 */
		removeSeries? (series: Ext.chart.series.Series | string): void;
		/** 
		 * Render all the surfaces in the container.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Decrements chart's layout suspend count.
		 * When the suspend count is decremented to zero,
		 * a layout is scheduled.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeChartLayout? (): void;
		/** 
		 * Decrements axis thickness suspend count.
		 * When axis thickness suspend count is decremented to zero,
		 * chart layout is performed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeThicknessChanged? (): void;
		/** 
		 * Schedule a layout at next frame.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		scheduleLayout? (): void;
		/** 
		 * Sets the value of [animation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} animation The new value.
		 * @returns {void}                     
		 */
		setAnimation? (animation: boolean | object): void;
		/** 
		 * Sets the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|any[]|object} axes The new value.
		 * @returns {void}                                  
		 */
		setAxes? (axes: Ext.chart.axis.Axis | any[] | object): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string} cls The new value.
		 * @returns {void}       
		 */
		setCls? (cls: string): void;
		/** 
		 * Sets the value of [colors](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-colors).
		 * @method
		 * @public (method)
		 * @param   {any[]} colors The new value.
		 * @returns {void}         
		 */
		setColors? (colors: any[]): void;
		/** 
		 * Sets the value of [flipXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-flipXY).
		 * @method
		 * @public (method)
		 * @param   {boolean} flipXY The new value.
		 * @returns {void}           
		 */
		setFlipXY? (flipXY: boolean): void;
		/** 
		 * Sets the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @param   {object[]} gradients The new value.
		 * @returns {void}               
		 */
		setGradients? (gradients: object[]): void;
		/** 
		 * Sets the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @param   {object} highlightItem The new value.
		 * @returns {void}                 
		 */
		setHighlightItem? (highlightItem: object): void;
		/** 
		 * Sets the value of [innerPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-innerPadding).
		 * @method
		 * @public (method)
		 * @param   {object} innerPadding The new value.
		 * @returns {void}                
		 */
		setInnerPadding? (innerPadding: object): void;
		/** 
		 * Sets the value of [innerRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-innerRect).
		 * @method
		 * @public (method)
		 * @param   {any[]} innerRect The new value.
		 * @returns {void}            
		 */
		setInnerRect? (innerRect: any[]): void;
		/** 
		 * Sets the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @param   {object|number|string} insetPadding The new value.
		 * @returns {void}                              
		 */
		setInsetPadding? (insetPadding: object | number | string): void;
		/** 
		 * Sets the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @param   {any[]} interactions The new value.
		 * @returns {void}               
		 */
		setInteractions? (interactions: any[]): void;
		/** 
		 * Sets the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean} legend The new value.
		 * @returns {void}                                                                 
		 */
		setLegend? (legend: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|any[]} series The new value.
		 * @returns {void}                                 
		 */
		setSeries? (series: Ext.chart.series.Series | any[]): void;
		/** 
		 * Sets the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @param   {object[]} sprites The new value.
		 * @returns {void}             
		 */
		setSprites? (sprites: object[]): void;
		/** 
		 * Sets the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store|string|object} store The new value.
		 * @returns {void}                               
		 */
		setStore? (store: Ext.data.Store | string | object): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Component.setStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setStyle).
		 * Sets the style for this Component's primary element.
		 * 
		 * Styles should be a valid DOM element style property.
		 * [Valid style property names](http://www.w3schools.com/jsref/dom_obj_style.asp)
		 * (_along with the supported CSS version for each_)
		 * 
		 *    var name = Ext.create({
		 *        xtype: 'component',
		 *        renderTo: Ext.getBody(),
		 *        html: 'Phineas Flynn'
		 *    });
		 *    
		 *    // two-param syntax
		 *    name.setStyle('color', 'white');
		 *    
		 *    // single-param syntax
		 *    name.setStyle({
		 *        fontWeight: 'bold',
		 *        backgroundColor: 'gray',
		 *        padding: '10px'
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                              property
		 * The style property to be set, or an object of
		 * multiple styles.
		 * @param   {string}                                                     [value]
		 * The value to apply to the given property, or null if an
		 * object was passed.
		 * @returns {void|Ext.panel.Panel|Ext.container.Container|Ext.Component}          this
		 */
		setStyle? (property: string | object, value?: string): Ext.panel.Panel;
		setStyle? (property: string | object, value?: string): Ext.container.Container;
		setStyle? (property: string | object, value?: string): Ext.Component;
		/** 
		 * Sets the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @param   {string} theme The new value.
		 * @returns {void}         
		 */
		setTheme? (theme: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Suspends chart's layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendChartLayout? (): void;
		/** 
		 * Prevent axes from triggering chart layout when their thickness changes.
		 * E.g. during an interaction that makes changes to the axes,
		 * or when chart layout was triggered by something else,
		 * for example a chart resize event.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendThicknessChanged? (): void;
		/** 
		 * Returns the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @returns {object|Function}  
		 */
		getResizeHandler? (): object;
		getResizeHandler? (): ExtGlobalFunction;
		/** 
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @param   {object} resizeHandler The new value.
		 * @returns {void}                 
		 */
		setResizeHandler? (resizeHandler: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.setResizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-setResizeHandler).
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler).
		 * @method
		 * @public (method)
		 * @param   {Function} resizeHandler The new value.
		 * @returns {void}                   
		 */
		setResizeHandler? (resizeHandler: ExtGlobalFunction): void;
		/** 
		 * Adds a listener to this draw container's element. If the element does not yet exist
		 * addition of the listener will be deferred until onRender.  Useful when listeners
		 * need to be attached during initConfig.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		addElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		allowSchedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAnimation
		 * @param   {object} oldAnimation
		 * @returns {void}                
		 */
		applyAnimation? (newAnimation: object, oldAnimation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAxes
		 * @param   {object} oldAxes
		 * @returns {void}           
		 */
		applyAxes? (newAxes: object, oldAxes: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBackground
		 * @param   {object} oldBackground
		 * @returns {void}                 
		 */
		applyBackground? (newBackground: object, oldBackground: object): void;
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
		 * @param   {object} gradients
		 * @returns {void}             
		 */
		applyGradients? (gradients: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		applyHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @param   {object} oldPadding
		 * @returns {void}              
		 */
		applyInsetPadding? (padding: object, oldPadding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} interactions
		 * @param   {object} oldInteractions
		 * @returns {void}                   
		 */
		applyInteractions? (interactions: object, oldInteractions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @returns {void}          
		 */
		applyLegend? (legend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRect
		 * @param   {object} rect
		 * @returns {void}           
		 */
		applyMainRect? (newRect: object, rect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		applySeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} sprites
		 * @returns {void}           
		 */
		applySprites? (sprites: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @returns {void}         
		 */
		applyStore? (store: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		applyTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inArray
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyArray? (inArray: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inObject
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyObject? (inObject: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chartRect
		 * @returns {void}             
		 */
		computeSpriteLegendRect? (chartRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		createSurface? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} size
		 * @returns {void}        
		 */
		defaultResizeHandler? (size: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroyChart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doScheduleLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @returns {void}           
		 */
		forgetSurface? (surface: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		get? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * The area of the chart minus the legend.
		 * Cache chart rect as element.getSize() results in
		 * a relatively expensive call to the getComputedStyle().
		 * @method
		 * @private (method)
		 * @param   {object} isRecompute
		 * @returns {void}               
		 */
		getChartRect? (isRecompute: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getColors? (): void;
		/** 
		 * Converts page coordinates into chart's 'main' surface coordinates.
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		getEventXY? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItems? (): void;
		/** 
		 * Returns the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getMainRect? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} deep
		 * @returns {any[]}        
		 */
		getRefItems? (deep: boolean): any[];
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.panel.Panel.getRefItems](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-getRefItems).
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html), [child](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-child) and [down](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-down) to retrieve all of the items
		 * which can potentially be considered a child of this Container.
		 * 
		 * This may be overriden by Components which have ownership of Components
		 * that are not contained in the [items](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#property-items) collection.
		 * 
		 * NOTE: IMPORTANT note for maintainers:
		 * Items are returned in tree traversal order. Each item is appended to the result array
		 * followed by the results of that child's getRefItems call.
		 * Floating child items are appended after internal child items.
		 * @method
		 * @protected (method)
		 * @param   {object}     deep
		 * @returns {any[]|void}      
		 */
		getRefItems? (deep: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initAnimator? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initItems? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationEnd? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationStart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onDataChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @param   {object} oldWidth
		 * @param   {object} oldHeight
		 * @returns {void}             
		 */
		onResize? (width: object, height: object, oldWidth: object, oldHeight: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.container.Container.onResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-onResize).
		 * Called when the component is resized.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width     The new width that was set
		 * @param   {number} height    The new height that was set
		 * @param   {number} oldWidth  The previous width
		 * @param   {number} oldHeight The previous height
		 * @returns {void}             
		 */
		onResize? (width: number, height: number, oldWidth: number, oldHeight: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @param   {object} record
		 * @returns {void}          
		 */
		onUpdateLegendStore? (store: object, record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * The background updater. Used by both the chart and the sprite legend.
		 * @method
		 * @private (method)
		 * @param   {object}                                      surface       The surface to put the background in.
		 * @param   {object}                                      newBackground
		 * @param   {object}                                      oldBackground
		 * @returns {Ext.draw.sprite.Rect|Ext.draw.sprite.Sprite}               
		 */
		refreshBackground? (surface: object, newBackground: object, oldBackground: object): Ext.draw.sprite.Rect | Ext.draw.sprite.Sprite;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshLegendStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		register? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		removeElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		resumeAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @returns {void}         
		 */
		setItems? (items: object): void;
		/** 
		 * Sets the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @param   {object} mainRect The new value.
		 * @returns {void}            
		 */
		setMainRect? (mainRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @returns {void}          
		 */
		setSurfaceSize? (width: object, height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		suspendAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		unregister? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateAxes? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateChartTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newColors
		 * @returns {void}             
		 */
		updateColors? (newColors: object): void;
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
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		updateHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @param   {object} oldLegend
		 * @returns {void}             
		 */
		updateLegend? (legend: object, oldLegend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		updateSeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateSpriteTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newStore
		 * @param   {object} oldStore
		 * @returns {void}            
		 */
		updateStore? (newStore: object, oldStore: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
	}
	/** 
	 * [Ext.chart.MarkerHolder](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.MarkerHolder.html)
	 * Mixin that provides the functionality to place markers.
	 */
	class MarkerHolder extends Ext.Mixin {
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Registers the given marker with the marker holder under the specified name.
		 * @method
		 * @public (method)
		 * @param   {string}            name   The name of the marker (e.g., "items", "labels", etc.).
		 * @param   {Ext.chart.Markers} marker
		 * @returns {void}                     
		 */
		bindMarker? (name: string, marker: Ext.chart.Markers): void;
		/** 
		 * Returns the markers bound to the given name.
		 * @method
		 * @public (method)
		 * @param   {string}              name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers[]}      
		 */
		getBoundMarker? (name: string): Ext.chart.Markers[];
		/** 
		 * Returns the marker bound to the given name (or null). See [bindMarker](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.MarkerHolder.html#method-bindMarker).
		 * @method
		 * @public (method)
		 * @param   {string}            name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers}      
		 */
		getMarker? (name: string): Ext.chart.Markers;
		/** 
		 * Unregisters the given marker or a marker with the given name.
		 * Providing a name of the marker is more efficient as it avoids lookup.
		 * @method
		 * @public (method)
		 * @param   {object}            marker {String/[Ext.chart.Markers](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.Markers.html)}
		 * @returns {Ext.chart.Markers}        Released marker or null.
		 */
		releaseMarker? (marker: object): Ext.chart.Markers;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
	}
	/** 
	 * [Ext.chart.Markers](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.Markers.html)
	 * Marker sprite. A specialized version of instancing sprite that groups instances.
	 * Putting a marker is grouped by its category id. Clearing removes that category.
	 */
	class Markers extends Ext.draw.sprite.Instancing {
		/** 
		 * Creates a new sprite instance.
		 * @method
		 * @public (method)
		 * @param   {object}  config                The configuration of the instance.
		 * @param   {boolean} [bypassNormalization] 'true' to bypass attribute normalization.
		 * @param   {boolean} [avoidCopy]           'true' to avoid copying the `config` object.
		 * @returns {object}                        The attributes of the instance.
		 */
		add? (config: object, bypassNormalization?: boolean, avoidCopy?: boolean): object;
		/** 
		 * Clears the markers in the category.
		 * @method
		 * @public (method)
		 * @param   {string} category
		 * @returns {void}            
		 */
		clear? (category: string): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 * @param   {object} bypassNormalization
		 * @param   {object} avoidCopy
		 * @returns {void}                       
		 */
		createInstance? (config: object, bypassNormalization: object, avoidCopy: object): void;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the current animation instance.
		 * return {[Ext.draw.modifier.Animation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.modifier.Animation.html)} The animation modifier used to animate the
		 * sprite
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * Not supported.
		 * @method
		 * @public (method)
		 * @returns {null}  
		 */
		getBBox? (): null;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.getBBox](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-getBBox).
		 * Returns the bounding box for the given Sprite as calculated with the Canvas engine.
		 * @method
		 * @public (method)
		 * @param   {boolean}   [isWithoutTransform] Whether to calculate the bounding box with the current transforms or not.
		 * @returns {null|void}                      
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
		 * Returns the bounding box for the instance at the given index.
		 * @method
		 * @public (method)
		 * @param   {number}  index                The index of the instance.
		 * @param   {boolean} [isWithoutTransform] 'true' to not apply sprite transforms to the bounding box.
		 * @returns {object}                       The bounding box for the instance.
		 */
		getBBoxFor? (index: number, isWithoutTransform?: boolean): object;
		/** 
		 * Returns the value of [instances](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Instancing.html#cfg-instances).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getInstances? (): any[];
		/** 
		 * @method
		 * @public (method)
		 * @param   {string}  category
		 * @param   {any}     index
		 * @param   {boolean} [isWithoutTransform]
		 * @returns {void}                         
		 */
		getMarkerBBoxFor? (category: string, index: any, isWithoutTransform?: boolean): void;
		/** 
		 * Returns the value of [template](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Instancing.html#cfg-template).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTemplate? (): object;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.Markers|Ext.draw.sprite.Instancing|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.Markers;
		hide? (): Ext.draw.sprite.Instancing;
		hide? (): Ext.draw.sprite.Sprite;
		/** 
		 * Performs a hit test on the instances of an instancing sprite.
		 * 
		 * **Defined in override Ext.draw.overrides.hittest.sprite.Instancing.**
		 * @method
		 * @public (method)
		 * @param   {object} point   A two-item array containing x and y coordinates of the point.
		 * @param   {object} options Hit testing options.
		 * @returns {object} 
		 * A hit result object that contains more information about what
		 * exactly was hit or null if nothing was hit.
		 */
		hitTest? (point: object, options: object): object;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.hitTest](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-hitTest).
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
		 * Puts a marker in the category with additional attributes.
		 * @method
		 * @public (method)
		 * @param   {string}        category
		 * @param   {object}        attr
		 * @param   {string|number} index
		 * @param   {boolean}       [bypassNormalization]
		 * @param   {boolean}       [keepRevision]
		 * @returns {void}                                
		 */
		putMarkerFor? (category: string, attr: object, index: string | number, bypassNormalization?: boolean, keepRevision?: boolean): void;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-render).
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
		 * @param   {boolean}                                                             [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.Markers|Ext.draw.sprite.Instancing|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.Markers;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Instancing;
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
		 * The [Ext.draw.modifier.Animation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.modifier.Animation.html) config for this sprite's
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
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the attributes for the instance at the given index.
		 * @method
		 * @public (method)
		 * @param   {number}  index                 the index of the instance
		 * @param   {object}  changes               the attributes to change
		 * @param   {boolean} [bypassNormalization] 'true' to avoid attribute normalization
		 * @returns {void}                          
		 */
		setAttributesFor? (index: number, changes: object, bypassNormalization?: boolean): void;
		/** 
		 * Sets the value of [instances](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Instancing.html#cfg-instances).
		 * @method
		 * @public (method)
		 * @param   {any[]} instances The new value.
		 * @returns {void}            
		 */
		setInstances? (instances: any[]): void;
		/** 
		 * Sets the value of [template](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Instancing.html#cfg-template).
		 * @method
		 * @public (method)
		 * @param   {object} template The new value.
		 * @returns {void}            
		 */
		setTemplate? (template: object): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * 
		 * See also: [transform](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-transform)
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
		 * @param   {Ext.draw.Matrix|number[]}                                            matrix
		 * The transformation matrix to apply or its
		 * raw elements as an array.
		 * @param   {boolean}                                                             [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.Markers|Ext.draw.sprite.Instancing|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.Markers;
		setTransform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Instancing;
		setTransform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.Markers|Ext.draw.sprite.Instancing|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.Markers;
		show? (): Ext.draw.sprite.Instancing;
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
		 * See also: [setTransform](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#method-setTransform)
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                            matrix    A transformation matrix or array of its elements.
		 * @param   {boolean}                                                             [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.Markers|Ext.draw.sprite.Instancing|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.Markers;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Instancing;
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
		 * @method
		 * @private (method)
		 * @param   {object} template
		 * @returns {void}            
		 */
		applyTemplate? (template: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearAll? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} index
		 * @returns {void}         
		 */
		get? (index: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCount? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @private (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-surface).
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
		 * Checks if the instance of an instancing sprite can be seen.
		 * @method
		 * @private (method)
		 * @param   {number} index The index of the instance.
		 * @returns {void}         
		 */
		isInstanceVisible? (index: number): void;
		/** 
		 * Checks if the instancing sprite can be seen.
		 * @method
		 * @private (method)
		 * @returns {boolean}  
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} instances
		 * @returns {void}             
		 */
		updateInstances? (instances: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @returns {void}           
		 */
		updateSurface? (surface: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} template
		 * @param   {object} oldTemplate
		 * @returns {void}               
		 */
		updateTemplate? (template: object, oldTemplate: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.PolarChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html)
	 * Represent a chart that uses polar coordinates.
	 * A polar chart has two axes: an angular axis (which is a circle) and
	 * a radial axis (a straight line from the center to the edge of the circle).
	 * The angular axis is usually a Category axis while the radial axis is
	 * typically numerical.
	 * 
	 * Pie charts and Radar charts are common examples of Polar charts.
	 */
	class PolarChart extends Ext.chart.AbstractChart {
		/** 
		 * @property
		 * @private (property)
		 * @default 'store'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Adds a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) to this chart.
		 * 
		 * The Series (or array) passed will be added to the existing series. If an `id` is specified
		 * in a new Series, any existing Series of that `id` will be updated.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {object|object[]|Ext.chart.series.Series|Ext.chart.series.Series[]} newSeries
		 * A config object
		 * describing the Series to add, or an instantiated Series object. Or an array of these.
		 * @returns {void}                                                                        
		 */
		addSeries? (newSeries: object | object[] | Ext.chart.series.Series | Ext.chart.series.Series[]): void;
		/** 
		 * Changes the data store bound to this chart and refreshes it.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store} store The store to bind to this chart.
		 * @returns {void}                 
		 */
		bindStore? (store: Ext.data.Store): void;
		/** 
		 * Cancel a scheduled layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		cancelChartLayout? (): void;
		/** 
		 * Returns the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|any[]|object}  
		 */
		getAxes? (): Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Returns an axis instance based on the type of data passed.
		 * @method
		 * @public (method)
		 * @param   {string|number|Ext.chart.axis.Axis} axis
		 * You may request an axis by passing
		 * an id, the number of the array key returned by [getAxes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-getAxes), or an axis instance.
		 * @returns {Ext.chart.axis.Axis}                    The axis requested.
		 */
		getAxis? (axis: string | number | Ext.chart.axis.Axis): Ext.chart.axis.Axis;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#cfg-center).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getCls? (): string;
		/** 
		 * Returns the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getGradients? (): object[];
		/** 
		 * Returns the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getHighlightItem? (): object;
		/** 
		 * Produces an image of the chart / drawing.
		 * @method
		 * @public (method)
		 * @param   {string} [format]
		 * Possible options are 'image' (the method will return an
		 * Image object) and 'stream' (the method will return the image as a byte stream).<br/>
		 * If missing, the data URI of the drawing's (or chart's) image will be returned.
		 * Note: for an SVG based drawing/chart in IE/Edge browsers the method will always
		 * return SVG markup instead of a data URI, as 'img' elements won't accept a data
		 * URI anyway in those browsers.
		 * @returns {object}          
		 */
		getImage? (format?: string): object;
		/** 
		 * Returns the value of [innerPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#cfg-innerPadding).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getInnerPadding? (): number;
		/** 
		 * Returns the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @returns {object|number|string}  
		 */
		getInsetPadding? (): object | number | string;
		/** 
		 * Get an interaction by type.
		 * @method
		 * @public (method)
		 * @param   {string}                          type The type of the interaction.
		 * @returns {Ext.chart.interactions.Abstract} 
		 * The interaction. `null`
		 * if not found.
		 */
		getInteraction? (type: string): Ext.chart.interactions.Abstract;
		/** 
		 * Returns the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getInteractions? (): any[];
		/** 
		 * Given an x/y point relative to the chart, find and return the first series item that
		 * matches that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {object}   An object with `series` and `item` properties, or `false` if no item found.
		 */
		getItemForPoint? (x: number, y: number): object;
		/** 
		 * Given an x/y point relative to the chart, find and return all series items that match that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {any[]}    An array of objects with `series` and `item` properties.
		 */
		getItemsForPoint? (x: number, y: number): any[];
		/** 
		 * Returns the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}  
		 */
		getLegend? (): Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * Return the legend store that contains all the legend information.
		 * This information is collected from all the series.
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.store.Store}  
		 */
		getLegendStore? (): Ext.chart.legend.store.Store;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#cfg-radius).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.series.Series|any[]}  
		 */
		getSeries? (): Ext.chart.series.Series | any[];
		/** 
		 * Returns the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getSprites? (): object[];
		/** 
		 * Returns the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Store|string|object}  
		 */
		getStore? (): Ext.data.Store | string | object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {object}           name
		 * @param   {object}           type
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (name: object, type: object): Ext.draw.Surface;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.getSurface](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-getSurface).
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {string}           [id]
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (id?: string): Ext.draw.Surface;
		/** 
		 * Returns the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTheme? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Triggers the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler) with the size of the draw container
		 * element as the parameter.
		 * @method
		 * @public (method)
		 * @param   {object} size
		 * @param   {object} instantly
		 * @returns {void}             
		 */
		handleResize? (size: object, instantly: object): void;
		/** 
		 * Displays an image of a [Ext.draw.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html) on screen.
		 * On mobile devices this lets users tap-and-hold to bring up the menu
		 * with image saving options.
		 * Notes:
		 * 
		 * - some browsers won't save the preview image if it's SVG based
		 *   (i.e. generated from a draw container that uses '[Ext.draw.engine.Svg](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html)' engine);
		 * - some platforms may not have the means of viewing successfully saved SVG images;
		 * - this method does not work on IE8.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		preview? (): void;
		/** 
		 * Redraw the chart. If animations are set this will animate the chart too.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		redraw? (): void;
		/** 
		 * Remove a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) from this chart.
		 * The Series (or array) passed will be removed from the existing series.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|string} series The Series or the `id` of the Series to remove. May be an array.
		 * @returns {void}                                  
		 */
		removeSeries? (series: Ext.chart.series.Series | string): void;
		/** 
		 * Render all the surfaces in the container.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Decrements chart's layout suspend count.
		 * When the suspend count is decremented to zero,
		 * a layout is scheduled.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeChartLayout? (): void;
		/** 
		 * Decrements axis thickness suspend count.
		 * When axis thickness suspend count is decremented to zero,
		 * chart layout is performed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeThicknessChanged? (): void;
		/** 
		 * Schedule a layout at next frame.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		scheduleLayout? (): void;
		/** 
		 * Sets the value of [animation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} animation The new value.
		 * @returns {void}                     
		 */
		setAnimation? (animation: boolean | object): void;
		/** 
		 * Sets the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|any[]|object} axes The new value.
		 * @returns {void}                                  
		 */
		setAxes? (axes: Ext.chart.axis.Axis | any[] | object): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#cfg-center).
		 * @method
		 * @public (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string} cls The new value.
		 * @returns {void}       
		 */
		setCls? (cls: string): void;
		/** 
		 * Sets the value of [colors](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-colors).
		 * @method
		 * @public (method)
		 * @param   {any[]} colors The new value.
		 * @returns {void}         
		 */
		setColors? (colors: any[]): void;
		/** 
		 * Sets the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @param   {object[]} gradients The new value.
		 * @returns {void}               
		 */
		setGradients? (gradients: object[]): void;
		/** 
		 * Sets the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @param   {object} highlightItem The new value.
		 * @returns {void}                 
		 */
		setHighlightItem? (highlightItem: object): void;
		/** 
		 * Sets the value of [innerPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#cfg-innerPadding).
		 * @method
		 * @public (method)
		 * @param   {number} innerPadding The new value.
		 * @returns {void}                
		 */
		setInnerPadding? (innerPadding: number): void;
		/** 
		 * Sets the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @param   {object|number|string} insetPadding The new value.
		 * @returns {void}                              
		 */
		setInsetPadding? (insetPadding: object | number | string): void;
		/** 
		 * Sets the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @param   {any[]} interactions The new value.
		 * @returns {void}               
		 */
		setInteractions? (interactions: any[]): void;
		/** 
		 * Sets the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean} legend The new value.
		 * @returns {void}                                                                 
		 */
		setLegend? (legend: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#cfg-radius).
		 * @method
		 * @public (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|any[]} series The new value.
		 * @returns {void}                                 
		 */
		setSeries? (series: Ext.chart.series.Series | any[]): void;
		/** 
		 * Sets the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @param   {object[]} sprites The new value.
		 * @returns {void}             
		 */
		setSprites? (sprites: object[]): void;
		/** 
		 * Sets the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store|string|object} store The new value.
		 * @returns {void}                               
		 */
		setStore? (store: Ext.data.Store | string | object): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Component.setStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setStyle).
		 * Sets the style for this Component's primary element.
		 * 
		 * Styles should be a valid DOM element style property.
		 * [Valid style property names](http://www.w3schools.com/jsref/dom_obj_style.asp)
		 * (_along with the supported CSS version for each_)
		 * 
		 *    var name = Ext.create({
		 *        xtype: 'component',
		 *        renderTo: Ext.getBody(),
		 *        html: 'Phineas Flynn'
		 *    });
		 *    
		 *    // two-param syntax
		 *    name.setStyle('color', 'white');
		 *    
		 *    // single-param syntax
		 *    name.setStyle({
		 *        fontWeight: 'bold',
		 *        backgroundColor: 'gray',
		 *        padding: '10px'
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                              property
		 * The style property to be set, or an object of
		 * multiple styles.
		 * @param   {string}                                                     [value]
		 * The value to apply to the given property, or null if an
		 * object was passed.
		 * @returns {void|Ext.panel.Panel|Ext.container.Container|Ext.Component}          this
		 */
		setStyle? (property: string | object, value?: string): Ext.panel.Panel;
		setStyle? (property: string | object, value?: string): Ext.container.Container;
		setStyle? (property: string | object, value?: string): Ext.Component;
		/** 
		 * Sets the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @param   {string} theme The new value.
		 * @returns {void}         
		 */
		setTheme? (theme: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Suspends chart's layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendChartLayout? (): void;
		/** 
		 * Prevent axes from triggering chart layout when their thickness changes.
		 * E.g. during an interaction that makes changes to the axes,
		 * or when chart layout was triggered by something else,
		 * for example a chart resize event.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendThicknessChanged? (): void;
		/** 
		 * Returns the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @returns {object|Function}  
		 */
		getResizeHandler? (): object;
		getResizeHandler? (): ExtGlobalFunction;
		/** 
		 * Note: the actual layout is performed in a subclass.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @param   {object} resizeHandler The new value.
		 * @returns {void}                 
		 */
		setResizeHandler? (resizeHandler: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.setResizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-setResizeHandler).
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler).
		 * @method
		 * @public (method)
		 * @param   {Function} resizeHandler The new value.
		 * @returns {void}                   
		 */
		setResizeHandler? (resizeHandler: ExtGlobalFunction): void;
		/** 
		 * Adds a listener to this draw container's element. If the element does not yet exist
		 * addition of the listener will be deferred until onRender.  Useful when listeners
		 * need to be attached during initConfig.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		addElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		allowSchedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAnimation
		 * @param   {object} oldAnimation
		 * @returns {void}                
		 */
		applyAnimation? (newAnimation: object, oldAnimation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAxes
		 * @param   {object} oldAxes
		 * @returns {void}           
		 */
		applyAxes? (newAxes: object, oldAxes: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBackground
		 * @param   {object} oldBackground
		 * @returns {void}                 
		 */
		applyBackground? (newBackground: object, oldBackground: object): void;
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
		 * @param   {object} gradients
		 * @returns {void}             
		 */
		applyGradients? (gradients: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		applyHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @param   {object} oldPadding
		 * @returns {void}              
		 */
		applyInsetPadding? (padding: object, oldPadding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} interactions
		 * @param   {object} oldInteractions
		 * @returns {void}                   
		 */
		applyInteractions? (interactions: object, oldInteractions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @returns {void}          
		 */
		applyLegend? (legend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRect
		 * @param   {object} rect
		 * @returns {void}           
		 */
		applyMainRect? (newRect: object, rect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		applySeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} sprites
		 * @returns {void}           
		 */
		applySprites? (sprites: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @returns {void}         
		 */
		applyStore? (store: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		applyTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inArray
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyArray? (inArray: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inObject
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyObject? (inObject: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chartRect
		 * @returns {void}             
		 */
		computeSpriteLegendRect? (chartRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		createSurface? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} size
		 * @returns {void}        
		 */
		defaultResizeHandler? (size: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroyChart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doScheduleLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @returns {void}           
		 */
		forgetSurface? (surface: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		get? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * The area of the chart minus the legend.
		 * Cache chart rect as element.getSize() results in
		 * a relatively expensive call to the getComputedStyle().
		 * @method
		 * @private (method)
		 * @param   {object} isRecompute
		 * @returns {void}               
		 */
		getChartRect? (isRecompute: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getColors? (): void;
		/** 
		 * Converts page coordinates into chart's 'main' surface coordinates.
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		getEventXY? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItems? (): void;
		/** 
		 * Returns the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getMainRect? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} deep
		 * @returns {any[]}        
		 */
		getRefItems? (deep: boolean): any[];
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.panel.Panel.getRefItems](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-getRefItems).
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html), [child](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-child) and [down](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-down) to retrieve all of the items
		 * which can potentially be considered a child of this Container.
		 * 
		 * This may be overriden by Components which have ownership of Components
		 * that are not contained in the [items](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#property-items) collection.
		 * 
		 * NOTE: IMPORTANT note for maintainers:
		 * Items are returned in tree traversal order. Each item is appended to the result array
		 * followed by the results of that child's getRefItems call.
		 * Floating child items are appended after internal child items.
		 * @method
		 * @protected (method)
		 * @param   {object}     deep
		 * @returns {any[]|void}      
		 */
		getRefItems? (deep: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initAnimator? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initItems? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationEnd? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationStart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onDataChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @param   {object} oldWidth
		 * @param   {object} oldHeight
		 * @returns {void}             
		 */
		onResize? (width: object, height: object, oldWidth: object, oldHeight: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.container.Container.onResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-onResize).
		 * Called when the component is resized.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width     The new width that was set
		 * @param   {number} height    The new height that was set
		 * @param   {number} oldWidth  The previous width
		 * @param   {number} oldHeight The previous height
		 * @returns {void}             
		 */
		onResize? (width: number, height: number, oldWidth: number, oldHeight: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @param   {object} record
		 * @returns {void}          
		 */
		onUpdateLegendStore? (store: object, record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * The background updater. Used by both the chart and the sprite legend.
		 * @method
		 * @private (method)
		 * @param   {object}                                      surface       The surface to put the background in.
		 * @param   {object}                                      newBackground
		 * @param   {object}                                      oldBackground
		 * @returns {Ext.draw.sprite.Rect|Ext.draw.sprite.Sprite}               
		 */
		refreshBackground? (surface: object, newBackground: object, oldBackground: object): Ext.draw.sprite.Rect | Ext.draw.sprite.Sprite;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshLegendStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		register? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		removeElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		resumeAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @returns {void}         
		 */
		setItems? (items: object): void;
		/** 
		 * Sets the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @param   {object} mainRect The new value.
		 * @returns {void}            
		 */
		setMainRect? (mainRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @returns {void}          
		 */
		setSurfaceSize? (width: object, height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		suspendAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		unregister? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateAxes? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateChartTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newColors
		 * @returns {void}             
		 */
		updateColors? (newColors: object): void;
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
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		updateHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @param   {object} oldLegend
		 * @returns {void}             
		 */
		updateLegend? (legend: object, oldLegend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		updateSeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateSpriteTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newStore
		 * @param   {object} oldStore
		 * @returns {void}            
		 */
		updateStore? (newStore: object, oldStore: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
	}
	/** 
	 * [Ext.chart.SpaceFillingChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.SpaceFillingChart.html)
	 * Creates a chart that fills the entire area of the chart.
	 * e.g. Gauge Charts
	 */
	class SpaceFillingChart extends Ext.chart.AbstractChart {
		/** 
		 * @property
		 * @private (property)
		 * @default 'store'
		 * @type {string}
		 */
		defaultBindProperty?: string;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		privates?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Adds a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) to this chart.
		 * 
		 * The Series (or array) passed will be added to the existing series. If an `id` is specified
		 * in a new Series, any existing Series of that `id` will be updated.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {object|object[]|Ext.chart.series.Series|Ext.chart.series.Series[]} newSeries
		 * A config object
		 * describing the Series to add, or an instantiated Series object. Or an array of these.
		 * @returns {void}                                                                        
		 */
		addSeries? (newSeries: object | object[] | Ext.chart.series.Series | Ext.chart.series.Series[]): void;
		/** 
		 * Changes the data store bound to this chart and refreshes it.
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store} store The store to bind to this chart.
		 * @returns {void}                 
		 */
		bindStore? (store: Ext.data.Store): void;
		/** 
		 * Cancel a scheduled layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		cancelChartLayout? (): void;
		/** 
		 * Returns the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|any[]|object}  
		 */
		getAxes? (): Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Returns an axis instance based on the type of data passed.
		 * @method
		 * @public (method)
		 * @param   {string|number|Ext.chart.axis.Axis} axis
		 * You may request an axis by passing
		 * an id, the number of the array key returned by [getAxes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-getAxes), or an axis instance.
		 * @returns {Ext.chart.axis.Axis}                    The axis requested.
		 */
		getAxis? (axis: string | number | Ext.chart.axis.Axis): Ext.chart.axis.Axis;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getCls? (): string;
		/** 
		 * Returns the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getGradients? (): object[];
		/** 
		 * Returns the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getHighlightItem? (): object;
		/** 
		 * Produces an image of the chart / drawing.
		 * @method
		 * @public (method)
		 * @param   {string} [format]
		 * Possible options are 'image' (the method will return an
		 * Image object) and 'stream' (the method will return the image as a byte stream).<br/>
		 * If missing, the data URI of the drawing's (or chart's) image will be returned.
		 * Note: for an SVG based drawing/chart in IE/Edge browsers the method will always
		 * return SVG markup instead of a data URI, as 'img' elements won't accept a data
		 * URI anyway in those browsers.
		 * @returns {object}          
		 */
		getImage? (format?: string): object;
		/** 
		 * Returns the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @returns {object|number|string}  
		 */
		getInsetPadding? (): object | number | string;
		/** 
		 * Get an interaction by type.
		 * @method
		 * @public (method)
		 * @param   {string}                          type The type of the interaction.
		 * @returns {Ext.chart.interactions.Abstract} 
		 * The interaction. `null`
		 * if not found.
		 */
		getInteraction? (type: string): Ext.chart.interactions.Abstract;
		/** 
		 * Returns the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getInteractions? (): any[];
		/** 
		 * Given an x/y point relative to the chart, find and return the first series item that
		 * matches that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {object}   An object with `series` and `item` properties, or `false` if no item found.
		 */
		getItemForPoint? (x: number, y: number): object;
		/** 
		 * Given an x/y point relative to the chart, find and return all series items that match that point.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {any[]}    An array of objects with `series` and `item` properties.
		 */
		getItemsForPoint? (x: number, y: number): any[];
		/** 
		 * Returns the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}  
		 */
		getLegend? (): Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * Return the legend store that contains all the legend information.
		 * This information is collected from all the series.
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.legend.store.Store}  
		 */
		getLegendStore? (): Ext.chart.legend.store.Store;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.series.Series|any[]}  
		 */
		getSeries? (): Ext.chart.series.Series | any[];
		/** 
		 * Returns the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getSprites? (): object[];
		/** 
		 * Returns the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @returns {Ext.data.Store|string|object}  
		 */
		getStore? (): Ext.data.Store | string | object;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {object}           name
		 * @param   {object}           type
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (name: object, type: object): Ext.draw.Surface;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.getSurface](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-getSurface).
		 * Get a surface by the given id or create one if it doesn't exist.
		 * This will automatically call the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler). Which
		 * means that, if no custom resize handler has been provided, the
		 * surface will be sized to match the container.
		 * If the add method is used, it is the responsibility
		 * of the user to call the [handleResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-handleResize) method, to update
		 * the size of all added surfaces.
		 * @method
		 * @public (method)
		 * @param   {string}           [id]
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (id?: string): Ext.draw.Surface;
		/** 
		 * Returns the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getTheme? (): string;
		/** 
		 * Returns the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getTouchAction? (): object;
		/** 
		 * Triggers the [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler) with the size of the draw container
		 * element as the parameter.
		 * @method
		 * @public (method)
		 * @param   {object} size
		 * @param   {object} instantly
		 * @returns {void}             
		 */
		handleResize? (size: object, instantly: object): void;
		/** 
		 * Displays an image of a [Ext.draw.Container](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html) on screen.
		 * On mobile devices this lets users tap-and-hold to bring up the menu
		 * with image saving options.
		 * Notes:
		 * 
		 * - some browsers won't save the preview image if it's SVG based
		 *   (i.e. generated from a draw container that uses '[Ext.draw.engine.Svg](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html)' engine);
		 * - some platforms may not have the means of viewing successfully saved SVG images;
		 * - this method does not work on IE8.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		preview? (): void;
		/** 
		 * Redraw the chart. If animations are set this will animate the chart too.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		redraw? (): void;
		/** 
		 * Remove a [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) from this chart.
		 * The Series (or array) passed will be removed from the existing series.
		 * 
		 * The chart will be redrawn in response to the change.
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|string} series The Series or the `id` of the Series to remove. May be an array.
		 * @returns {void}                                  
		 */
		removeSeries? (series: Ext.chart.series.Series | string): void;
		/** 
		 * Render all the surfaces in the container.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Decrements chart's layout suspend count.
		 * When the suspend count is decremented to zero,
		 * a layout is scheduled.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeChartLayout? (): void;
		/** 
		 * Decrements axis thickness suspend count.
		 * When axis thickness suspend count is decremented to zero,
		 * chart layout is performed.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resumeThicknessChanged? (): void;
		/** 
		 * Schedule a layout at next frame.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		scheduleLayout? (): void;
		/** 
		 * Sets the value of [animation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-animation).
		 * @method
		 * @public (method)
		 * @param   {boolean|object} animation The new value.
		 * @returns {void}                     
		 */
		setAnimation? (animation: boolean | object): void;
		/** 
		 * Sets the value of [axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|any[]|object} axes The new value.
		 * @returns {void}                                  
		 */
		setAxes? (axes: Ext.chart.axis.Axis | any[] | object): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string} cls The new value.
		 * @returns {void}       
		 */
		setCls? (cls: string): void;
		/** 
		 * Sets the value of [colors](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-colors).
		 * @method
		 * @public (method)
		 * @param   {any[]} colors The new value.
		 * @returns {void}         
		 */
		setColors? (colors: any[]): void;
		/** 
		 * Sets the value of [gradients](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @param   {object[]} gradients The new value.
		 * @returns {void}               
		 */
		setGradients? (gradients: object[]): void;
		/** 
		 * Sets the value of [highlightItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-highlightItem).
		 * @method
		 * @public (method)
		 * @param   {object} highlightItem The new value.
		 * @returns {void}                 
		 */
		setHighlightItem? (highlightItem: object): void;
		/** 
		 * Sets the value of [insetPadding](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-insetPadding).
		 * @method
		 * @public (method)
		 * @param   {object|number|string} insetPadding The new value.
		 * @returns {void}                              
		 */
		setInsetPadding? (insetPadding: object | number | string): void;
		/** 
		 * Sets the value of [interactions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-interactions).
		 * @method
		 * @public (method)
		 * @param   {any[]} interactions The new value.
		 * @returns {void}               
		 */
		setInteractions? (interactions: any[]): void;
		/** 
		 * Sets the value of [legend](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-legend).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean} legend The new value.
		 * @returns {void}                                                                 
		 */
		setLegend? (legend: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.series.Series|any[]} series The new value.
		 * @returns {void}                                 
		 */
		setSeries? (series: Ext.chart.series.Series | any[]): void;
		/** 
		 * Sets the value of [sprites](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @param   {object[]} sprites The new value.
		 * @returns {void}             
		 */
		setSprites? (sprites: object[]): void;
		/** 
		 * Sets the value of [store](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-store).
		 * @method
		 * @public (method)
		 * @param   {Ext.data.Store|string|object} store The new value.
		 * @returns {void}                               
		 */
		setStore? (store: Ext.data.Store | string | object): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Component.setStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-setStyle).
		 * Sets the style for this Component's primary element.
		 * 
		 * Styles should be a valid DOM element style property.
		 * [Valid style property names](http://www.w3schools.com/jsref/dom_obj_style.asp)
		 * (_along with the supported CSS version for each_)
		 * 
		 *    var name = Ext.create({
		 *        xtype: 'component',
		 *        renderTo: Ext.getBody(),
		 *        html: 'Phineas Flynn'
		 *    });
		 *    
		 *    // two-param syntax
		 *    name.setStyle('color', 'white');
		 *    
		 *    // single-param syntax
		 *    name.setStyle({
		 *        fontWeight: 'bold',
		 *        backgroundColor: 'gray',
		 *        padding: '10px'
		 *    });
		 * 
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                              property
		 * The style property to be set, or an object of
		 * multiple styles.
		 * @param   {string}                                                     [value]
		 * The value to apply to the given property, or null if an
		 * object was passed.
		 * @returns {void|Ext.panel.Panel|Ext.container.Container|Ext.Component}          this
		 */
		setStyle? (property: string | object, value?: string): Ext.panel.Panel;
		setStyle? (property: string | object, value?: string): Ext.container.Container;
		setStyle? (property: string | object, value?: string): Ext.Component;
		/** 
		 * Sets the value of [theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-theme).
		 * @method
		 * @public (method)
		 * @param   {string} theme The new value.
		 * @returns {void}         
		 */
		setTheme? (theme: string): void;
		/** 
		 * Sets the value of [touchAction](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-touchAction).
		 * @method
		 * @public (method)
		 * @param   {object} touchAction The new value.
		 * @returns {void}               
		 */
		setTouchAction? (touchAction: object): void;
		/** 
		 * Suspends chart's layout.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendChartLayout? (): void;
		/** 
		 * Prevent axes from triggering chart layout when their thickness changes.
		 * E.g. during an interaction that makes changes to the axes,
		 * or when chart layout was triggered by something else,
		 * for example a chart resize event.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		suspendThicknessChanged? (): void;
		/** 
		 * Returns the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @returns {object|Function}  
		 */
		getResizeHandler? (): object;
		getResizeHandler? (): ExtGlobalFunction;
		/** 
		 * Note: the actual layout is performed in a subclass.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-resizeHandler).
		 * @method
		 * @private (method)
		 * @param   {object} resizeHandler The new value.
		 * @returns {void}                 
		 */
		setResizeHandler? (resizeHandler: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.Container.setResizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-setResizeHandler).
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-resizeHandler).
		 * @method
		 * @public (method)
		 * @param   {Function} resizeHandler The new value.
		 * @returns {void}                   
		 */
		setResizeHandler? (resizeHandler: ExtGlobalFunction): void;
		/** 
		 * Adds a listener to this draw container's element. If the element does not yet exist
		 * addition of the listener will be deferred until onRender.  Useful when listeners
		 * need to be attached during initConfig.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		addElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		afterRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		allowSchedule? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAnimation
		 * @param   {object} oldAnimation
		 * @returns {void}                
		 */
		applyAnimation? (newAnimation: object, oldAnimation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newAxes
		 * @param   {object} oldAxes
		 * @returns {void}           
		 */
		applyAxes? (newAxes: object, oldAxes: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newBackground
		 * @param   {object} oldBackground
		 * @returns {void}                 
		 */
		applyBackground? (newBackground: object, oldBackground: object): void;
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
		 * @param   {object} gradients
		 * @returns {void}             
		 */
		applyGradients? (gradients: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		applyHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} padding
		 * @param   {object} oldPadding
		 * @returns {void}              
		 */
		applyInsetPadding? (padding: object, oldPadding: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} interactions
		 * @param   {object} oldInteractions
		 * @returns {void}                   
		 */
		applyInteractions? (interactions: object, oldInteractions: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @returns {void}          
		 */
		applyLegend? (legend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRect
		 * @param   {object} rect
		 * @returns {void}           
		 */
		applyMainRect? (newRect: object, rect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		applySeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} sprites
		 * @returns {void}           
		 */
		applySprites? (sprites: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @returns {void}         
		 */
		applyStore? (store: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		applyTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inArray
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyArray? (inArray: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} inObject
		 * @param   {object} startIndex
		 * @param   {object} count
		 * @returns {void}              
		 */
		circularCopyObject? (inObject: object, startIndex: object, count: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chartRect
		 * @returns {void}             
		 */
		computeSpriteLegendRect? (chartRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		createSurface? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} size
		 * @returns {void}        
		 */
		defaultResizeHandler? (size: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroyChart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		doScheduleLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @returns {void}           
		 */
		forgetSurface? (surface: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} id
		 * @returns {void}      
		 */
		get? (id: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * The area of the chart minus the legend.
		 * Cache chart rect as element.getSize() results in
		 * a relatively expensive call to the getComputedStyle().
		 * @method
		 * @private (method)
		 * @param   {object} isRecompute
		 * @returns {void}               
		 */
		getChartRect? (isRecompute: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getColors? (): void;
		/** 
		 * Converts page coordinates into chart's 'main' surface coordinates.
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		getEventXY? (e: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItems? (): void;
		/** 
		 * Returns the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getMainRect? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @param   {boolean} deep
		 * @returns {any[]}        
		 */
		getRefItems? (deep: boolean): any[];
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.panel.Panel.getRefItems](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-getRefItems).
		 * Used by [ComponentQuery](https://docs.sencha.com/extjs/6.2.0/classic/Ext.ComponentQuery.html), [child](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-child) and [down](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#method-down) to retrieve all of the items
		 * which can potentially be considered a child of this Container.
		 * 
		 * This may be overriden by Components which have ownership of Components
		 * that are not contained in the [items](https://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html#property-items) collection.
		 * 
		 * NOTE: IMPORTANT note for maintainers:
		 * Items are returned in tree traversal order. Each item is appended to the result array
		 * followed by the results of that child's getRefItems call.
		 * Floating child items are appended after internal child items.
		 * @method
		 * @protected (method)
		 * @param   {object}     deep
		 * @returns {any[]|void}      
		 */
		getRefItems? (deep: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initAnimator? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		initItems? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationEnd? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onAnimationStart? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onDataChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @param   {object} oldWidth
		 * @param   {object} oldHeight
		 * @returns {void}             
		 */
		onResize? (width: object, height: object, oldWidth: object, oldHeight: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.container.Container.onResize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#method-onResize).
		 * Called when the component is resized.
		 * 
		 * This method is not called on components that use [liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Container.html#cfg-liquidLayout), such as
		 * [Buttons](https://docs.sencha.com/extjs/6.2.0/classic/Ext.button.Button.html) and [Form Fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Base.html).
		 * @method
		 * @protected (method)
		 * @template
		 * @param   {number} width     The new width that was set
		 * @param   {number} height    The new height that was set
		 * @param   {number} oldWidth  The previous width
		 * @param   {number} oldHeight The previous height
		 * @returns {void}             
		 */
		onResize? (width: number, height: number, oldWidth: number, oldHeight: number): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} store
		 * @param   {object} record
		 * @returns {void}          
		 */
		onUpdateLegendStore? (store: object, record: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * The background updater. Used by both the chart and the sprite legend.
		 * @method
		 * @private (method)
		 * @param   {object}                                      surface       The surface to put the background in.
		 * @param   {object}                                      newBackground
		 * @param   {object}                                      oldBackground
		 * @returns {Ext.draw.sprite.Rect|Ext.draw.sprite.Sprite}               
		 */
		refreshBackground? (surface: object, newBackground: object, oldBackground: object): Ext.draw.sprite.Rect | Ext.draw.sprite.Sprite;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		refreshLegendStore? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		register? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		removeElementListener? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		resumeAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @returns {void}         
		 */
		setItems? (items: object): void;
		/** 
		 * Sets the value of [mainRect](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-mainRect).
		 * @method
		 * @private (method)
		 * @param   {object} mainRect The new value.
		 * @returns {void}            
		 */
		setMainRect? (mainRect: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} width
		 * @param   {object} height
		 * @returns {void}          
		 */
		setSurfaceSize? (width: object, height: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		suspendAnimation? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} component
		 * @returns {void}             
		 */
		unregister? (component: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateAxes? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateChartTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newColors
		 * @returns {void}             
		 */
		updateColors? (newColors: object): void;
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
		 * @param   {object} newHighlightItem
		 * @param   {object} oldHighlightItem
		 * @returns {void}                    
		 */
		updateHighlightItem? (newHighlightItem: object, oldHighlightItem: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} legend
		 * @param   {object} oldLegend
		 * @returns {void}             
		 */
		updateLegend? (legend: object, oldLegend: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newSeries
		 * @param   {object} oldSeries
		 * @returns {void}             
		 */
		updateSeries? (newSeries: object, oldSeries: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateSpriteTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newStore
		 * @param   {object} oldStore
		 * @returns {void}            
		 */
		updateStore? (newStore: object, oldStore: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
	}
	class Chart extends Ext.chart.CartesianChart {}
}
declare namespace Ext.chart.AbstractChart {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.AbstractChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html)
	 * The Ext.chart package provides the capability to visualize data.
	 * Each chart binds directly to a store enabling automatic updates of the chart.
	 * A chart configuration object has some overall styling options as well as an array of axes
	 * and series. A chart instance example could look like this:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        width: 800,
	 *        height: 600,
	 *        animation: {
	 *            easing: 'backOut',
	 *            duration: 500
	 *        },
	 *        store: store1,
	 *        legend: {
	 *            position: 'right'
	 *        },
	 *        axes: [
	 *            // ...some axes options...
	 *        ],
	 *        series: [
	 *            // ...some series options...
	 *        ]
	 *    });
	 * 
	 * In this example we set the `width` and `height` of a chart; We decide whether our series are
	 * animated or not and we select a store to be bound to the chart; We also set the legend to the right part of the
	 * chart.
	 * 
	 * You can register certain interactions such as [Ext.chart.interactions.PanZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) on the chart by specify an
	 * array of names or more specific config objects. All the events will be wired automatically.
	 * 
	 * You can also listen to series `itemXXX` events on both chart and series level.
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
	 *                    console.log('itemmousemove', item.category, item.field);
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
	 * For more information about the axes and series configurations please check the documentation of
	 * each series (Line, Bar, Pie, etc).
	 */
	interface Def extends Ext.chart.AbstractChart {
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
		 * @type {Ext.chart.AbstractChart.Cfg}
		 */
		config?: Ext.chart.AbstractChart.Cfg;
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
		 * @returns {Ext.panel.Panel.Statics|Ext.container.Container.Statics|Ext.Component.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.panel.Panel.Statics | Ext.container.Container.Statics | Ext.Component.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.CartesianChart {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.CartesianChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html)
	 * Represents a chart that uses cartesian coordinates.
	 * A cartesian chart has two directions, X direction and Y direction.
	 * The series and axes are coordinated along these directions.
	 * By default the x direction is horizontal and y direction is vertical,
	 * You can swap the direction by setting the [flipXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-flipXY) config to `true`.
	 * 
	 * Cartesian series often treats x direction an y direction differently.
	 * In most cases, data on x direction are assumed to be monotonically increasing.
	 * Based on this property, cartesian series can be trimmed and summarized properly
	 * to gain a better performance.
	 */
	interface Def extends Ext.chart.CartesianChart {
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
		 * @type {Ext.chart.CartesianChart.Cfg}
		 */
		config?: Ext.chart.CartesianChart.Cfg;
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
		 * @returns {Ext.panel.Panel.Statics|Ext.container.Container.Statics|Ext.Component.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.panel.Panel.Statics | Ext.container.Container.Statics | Ext.Component.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.MarkerHolder {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.MarkerHolder](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.MarkerHolder.html)
	 * Mixin that provides the functionality to place markers.
	 */
	interface Def extends Ext.chart.MarkerHolder {
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
		 * @returns {Ext.Mixin.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.Mixin.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.Markers {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.Markers](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.Markers.html)
	 * Marker sprite. A specialized version of instancing sprite that groups instances.
	 * Putting a marker is grouped by its category id. Clearing removes that category.
	 */
	interface Def extends Ext.chart.Markers {
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
		 * @type {Ext.chart.Markers.Cfg}
		 */
		config?: Ext.chart.Markers.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.Markers.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.Markers.Statics | any;
	}
}
declare namespace Ext.chart.PolarChart {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.PolarChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html)
	 * Represent a chart that uses polar coordinates.
	 * A polar chart has two axes: an angular axis (which is a circle) and
	 * a radial axis (a straight line from the center to the edge of the circle).
	 * The angular axis is usually a Category axis while the radial axis is
	 * typically numerical.
	 * 
	 * Pie charts and Radar charts are common examples of Polar charts.
	 */
	interface Def extends Ext.chart.PolarChart {
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
		 * @type {Ext.chart.PolarChart.Cfg}
		 */
		config?: Ext.chart.PolarChart.Cfg;
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
		 * @returns {Ext.panel.Panel.Statics|Ext.container.Container.Statics|Ext.Component.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.panel.Panel.Statics | Ext.container.Container.Statics | Ext.Component.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.SpaceFillingChart {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.SpaceFillingChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.SpaceFillingChart.html)
	 * Creates a chart that fills the entire area of the chart.
	 * e.g. Gauge Charts
	 */
	interface Def extends Ext.chart.SpaceFillingChart {
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
		 * @type {Ext.chart.SpaceFillingChart.Cfg}
		 */
		config?: Ext.chart.SpaceFillingChart.Cfg;
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
		 * @returns {Ext.panel.Panel.Statics|Ext.container.Container.Statics|Ext.Component.Statics|Ext.Base.Statics}  
		 * @type {object}
		 */
		statics?: (() => Ext.panel.Panel.Statics | Ext.container.Container.Statics | Ext.Component.Statics | Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.AbstractChart.methodParams.download {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.chart.AbstractChart.download](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#method-download)
	 * The following config options are supported:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The url to post the data to. Defaults to
		 * the [defaultDownloadServerUrl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-defaultDownloadServerUrl) configuration on the class.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The format of image to export. See the
		 * [supportedFormats](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-supportedFormats). Defaults to 'png' on the Sencha IO server.
		 * Note that you can't export to 'svg' format if the [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html)
		 * [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is used.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		format?: string;
		/** 
		 * A width to send to the server for
		 * configuring the image width. Defaults to natural image width on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		width?: number;
		/** 
		 * A height to send to the server for
		 * configuring the image height. Defaults to natural image height on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		height?: number;
		/** 
		 * The filename of the downloaded image.
		 * Defaults to 'chart' on the Sencha IO server. The config.format is used
		 * as a filename extension.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		filename?: string;
		/** 
		 * The scaling of the downloaded image.
		 * Defaults to 1 on the Sencha IO server. The server will try to determine the natural
		 * size of the image unless the width/height configs have been set. If the
		 * [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is
		 * used the natural image size will depend on the value of the window.devicePixelRatio.
		 * For example, for devices with devicePixelRatio of 2 the produced image will be
		 * two times larger than for devices with devicePixelRatio of 1 for the same drawing.
		 * This is done so that the users with devices with HiDPI screens get a downloaded
		 * image that looks as crisp on their device as the original drawing.
		 * If you want image size to be consistent across devices with different device
		 * pixel ratios, you can set the value of this config to 1/devicePixelRatio.
		 * This parameter is ignored by the Sencha IO server if config.format is set to 'svg'.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		scale?: number;
		/** 
		 * PDF specific options.
		 * This config is only used if config.format is set to 'pdf'.
		 * The given object should be in either this format:
		 * 
		 *    {
		 *      width: '200px',
		 *      height: '300px',
		 *      border: '0px'
		 *    }
		 * 
		 * or this format:
		 * 
		 *    {
		 *      format: 'A4',
		 *      orientation: 'portrait',
		 *      border: '1cm'
		 *    }
		 * 
		 * Supported dimension units are: 'mm', 'cm', 'in', 'px'. No unit means 'px'.
		 * Supported formats are: 'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'.
		 * Orientation ('portrait', 'landscape') is optional and defaults to 'portrait'.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		pdf?: object;
		/** 
		 * JPEG specific options.
		 * This config is only used if config.format is set to 'jpeg'.
		 * The given object should be in this format:
		 * 
		 *    {
		 *      quality: 80
		 *    }
		 * 
		 * Where quality is an integer between 0 and 100.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		jpeg?: object;
	}
}
declare namespace Ext.chart.CartesianChart.methodParams.download {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.chart.CartesianChart.download](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#method-download)
	 * The following config options are supported:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The url to post the data to. Defaults to
		 * the [defaultDownloadServerUrl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-defaultDownloadServerUrl) configuration on the class.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The format of image to export. See the
		 * [supportedFormats](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-supportedFormats). Defaults to 'png' on the Sencha IO server.
		 * Note that you can't export to 'svg' format if the [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html)
		 * [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is used.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		format?: string;
		/** 
		 * A width to send to the server for
		 * configuring the image width. Defaults to natural image width on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		width?: number;
		/** 
		 * A height to send to the server for
		 * configuring the image height. Defaults to natural image height on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		height?: number;
		/** 
		 * The filename of the downloaded image.
		 * Defaults to 'chart' on the Sencha IO server. The config.format is used
		 * as a filename extension.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		filename?: string;
		/** 
		 * The scaling of the downloaded image.
		 * Defaults to 1 on the Sencha IO server. The server will try to determine the natural
		 * size of the image unless the width/height configs have been set. If the
		 * [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is
		 * used the natural image size will depend on the value of the window.devicePixelRatio.
		 * For example, for devices with devicePixelRatio of 2 the produced image will be
		 * two times larger than for devices with devicePixelRatio of 1 for the same drawing.
		 * This is done so that the users with devices with HiDPI screens get a downloaded
		 * image that looks as crisp on their device as the original drawing.
		 * If you want image size to be consistent across devices with different device
		 * pixel ratios, you can set the value of this config to 1/devicePixelRatio.
		 * This parameter is ignored by the Sencha IO server if config.format is set to 'svg'.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		scale?: number;
		/** 
		 * PDF specific options.
		 * This config is only used if config.format is set to 'pdf'.
		 * The given object should be in either this format:
		 * 
		 *    {
		 *      width: '200px',
		 *      height: '300px',
		 *      border: '0px'
		 *    }
		 * 
		 * or this format:
		 * 
		 *    {
		 *      format: 'A4',
		 *      orientation: 'portrait',
		 *      border: '1cm'
		 *    }
		 * 
		 * Supported dimension units are: 'mm', 'cm', 'in', 'px'. No unit means 'px'.
		 * Supported formats are: 'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'.
		 * Orientation ('portrait', 'landscape') is optional and defaults to 'portrait'.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		pdf?: object;
		/** 
		 * JPEG specific options.
		 * This config is only used if config.format is set to 'jpeg'.
		 * The given object should be in this format:
		 * 
		 *    {
		 *      quality: 80
		 *    }
		 * 
		 * Where quality is an integer between 0 and 100.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		jpeg?: object;
	}
}
declare namespace Ext.chart.PolarChart.methodParams.download {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.chart.PolarChart.download](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html#method-download)
	 * The following config options are supported:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The url to post the data to. Defaults to
		 * the [defaultDownloadServerUrl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-defaultDownloadServerUrl) configuration on the class.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The format of image to export. See the
		 * [supportedFormats](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-supportedFormats). Defaults to 'png' on the Sencha IO server.
		 * Note that you can't export to 'svg' format if the [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html)
		 * [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is used.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		format?: string;
		/** 
		 * A width to send to the server for
		 * configuring the image width. Defaults to natural image width on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		width?: number;
		/** 
		 * A height to send to the server for
		 * configuring the image height. Defaults to natural image height on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		height?: number;
		/** 
		 * The filename of the downloaded image.
		 * Defaults to 'chart' on the Sencha IO server. The config.format is used
		 * as a filename extension.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		filename?: string;
		/** 
		 * The scaling of the downloaded image.
		 * Defaults to 1 on the Sencha IO server. The server will try to determine the natural
		 * size of the image unless the width/height configs have been set. If the
		 * [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is
		 * used the natural image size will depend on the value of the window.devicePixelRatio.
		 * For example, for devices with devicePixelRatio of 2 the produced image will be
		 * two times larger than for devices with devicePixelRatio of 1 for the same drawing.
		 * This is done so that the users with devices with HiDPI screens get a downloaded
		 * image that looks as crisp on their device as the original drawing.
		 * If you want image size to be consistent across devices with different device
		 * pixel ratios, you can set the value of this config to 1/devicePixelRatio.
		 * This parameter is ignored by the Sencha IO server if config.format is set to 'svg'.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		scale?: number;
		/** 
		 * PDF specific options.
		 * This config is only used if config.format is set to 'pdf'.
		 * The given object should be in either this format:
		 * 
		 *    {
		 *      width: '200px',
		 *      height: '300px',
		 *      border: '0px'
		 *    }
		 * 
		 * or this format:
		 * 
		 *    {
		 *      format: 'A4',
		 *      orientation: 'portrait',
		 *      border: '1cm'
		 *    }
		 * 
		 * Supported dimension units are: 'mm', 'cm', 'in', 'px'. No unit means 'px'.
		 * Supported formats are: 'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'.
		 * Orientation ('portrait', 'landscape') is optional and defaults to 'portrait'.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		pdf?: object;
		/** 
		 * JPEG specific options.
		 * This config is only used if config.format is set to 'jpeg'.
		 * The given object should be in this format:
		 * 
		 *    {
		 *      quality: 80
		 *    }
		 * 
		 * Where quality is an integer between 0 and 100.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		jpeg?: object;
	}
}
declare namespace Ext.chart.SpaceFillingChart.methodParams.download {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.chart.SpaceFillingChart.download](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.SpaceFillingChart.html#method-download)
	 * The following config options are supported:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The url to post the data to. Defaults to
		 * the [defaultDownloadServerUrl](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-defaultDownloadServerUrl) configuration on the class.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The format of image to export. See the
		 * [supportedFormats](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#property-supportedFormats). Defaults to 'png' on the Sencha IO server.
		 * Note that you can't export to 'svg' format if the [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html)
		 * [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is used.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		format?: string;
		/** 
		 * A width to send to the server for
		 * configuring the image width. Defaults to natural image width on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		width?: number;
		/** 
		 * A height to send to the server for
		 * configuring the image height. Defaults to natural image height on
		 * the Sencha IO server.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		height?: number;
		/** 
		 * The filename of the downloaded image.
		 * Defaults to 'chart' on the Sencha IO server. The config.format is used
		 * as a filename extension.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		filename?: string;
		/** 
		 * The scaling of the downloaded image.
		 * Defaults to 1 on the Sencha IO server. The server will try to determine the natural
		 * size of the image unless the width/height configs have been set. If the
		 * [Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) [engine](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#cfg-engine) is
		 * used the natural image size will depend on the value of the window.devicePixelRatio.
		 * For example, for devices with devicePixelRatio of 2 the produced image will be
		 * two times larger than for devices with devicePixelRatio of 1 for the same drawing.
		 * This is done so that the users with devices with HiDPI screens get a downloaded
		 * image that looks as crisp on their device as the original drawing.
		 * If you want image size to be consistent across devices with different device
		 * pixel ratios, you can set the value of this config to 1/devicePixelRatio.
		 * This parameter is ignored by the Sencha IO server if config.format is set to 'svg'.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		scale?: number;
		/** 
		 * PDF specific options.
		 * This config is only used if config.format is set to 'pdf'.
		 * The given object should be in either this format:
		 * 
		 *    {
		 *      width: '200px',
		 *      height: '300px',
		 *      border: '0px'
		 *    }
		 * 
		 * or this format:
		 * 
		 *    {
		 *      format: 'A4',
		 *      orientation: 'portrait',
		 *      border: '1cm'
		 *    }
		 * 
		 * Supported dimension units are: 'mm', 'cm', 'in', 'px'. No unit means 'px'.
		 * Supported formats are: 'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'.
		 * Orientation ('portrait', 'landscape') is optional and defaults to 'portrait'.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		pdf?: object;
		/** 
		 * JPEG specific options.
		 * This config is only used if config.format is set to 'jpeg'.
		 * The given object should be in this format:
		 * 
		 *    {
		 *      quality: 80
		 *    }
		 * 
		 * Where quality is an integer between 0 and 100.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		jpeg?: object;
	}
}
declare namespace Ext.chart.AbstractChart {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.AbstractChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html)
	 * The Ext.chart package provides the capability to visualize data.
	 * Each chart binds directly to a store enabling automatic updates of the chart.
	 * A chart configuration object has some overall styling options as well as an array of axes
	 * and series. A chart instance example could look like this:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        width: 800,
	 *        height: 600,
	 *        animation: {
	 *            easing: 'backOut',
	 *            duration: 500
	 *        },
	 *        store: store1,
	 *        legend: {
	 *            position: 'right'
	 *        },
	 *        axes: [
	 *            // ...some axes options...
	 *        ],
	 *        series: [
	 *            // ...some series options...
	 *        ]
	 *    });
	 * 
	 * In this example we set the `width` and `height` of a chart; We decide whether our series are
	 * animated or not and we select a store to be bound to the chart; We also set the legend to the right part of the
	 * chart.
	 * 
	 * You can register certain interactions such as [Ext.chart.interactions.PanZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) on the chart by specify an
	 * array of names or more specific config objects. All the events will be wired automatically.
	 * 
	 * You can also listen to series `itemXXX` events on both chart and series level.
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
	 *                    console.log('itemmousemove', item.category, item.field);
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
	 * For more information about the axes and series configurations please check the documentation of
	 * each series (Line, Bar, Pie, etc).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * (optional) `true` for the default animation (easing: 'ease' and duration: 500)
		 * or a standard animation config object to be used for default chart animations.
		 * @configuration
		 * @optional
		 * @type {boolean|object}
		 */
		animation?: boolean | object;
		/** 
		 * Array of [Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html) instances or config objects. For example:
		 * 
		 *    axes: [{
		 *        type: 'numeric',
		 *        position: 'left',
		 *        title: 'Number of Hits',
		 *        minimum: 0
		 *    }, {
		 *        type: 'category',
		 *        position: 'bottom',
		 *        title: 'Month of the Year'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.axis.Axis|any[]|object}
		 */
		axes?: Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Set the chart background.
		 * This can be a gradient object, image, or color.
		 * 
		 * For example, if `background` were to be a color we could set the object as
		 * 
		 *    background: '#ccc'
		 * 
		 * You can specify an image by using:
		 * 
		 *    background: {
		 *        type: 'image',
		 *        src: 'http://path.to.image/'
		 *    }
		 * 
		 * Also you can specify a gradient by using the gradient object syntax:
		 * 
		 *    background: {
		 *        type: 'linear',
		 *        degrees: 0,
		 *        stops: [
		 *            {
		 *                offset: 0,
		 *                color: 'white'
		 *            },
		 *            {
		 *                offset: 1,
		 *                color: 'blue'
		 *            }
		 *        ]
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'draw-container'
		 * @type {string}
		 */
		cls?: string;
		/** 
		 * Array of colors/gradients to override the color of items and legends.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		colors?: any[];
		/** 
		 * Defines the engine (type of surface) used to render draw container contents.
		 * 
		 * The render engine is selected automatically depending on the platform used. Priority
		 * is given to the [Ext.draw.engine.Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) engine due to its performance advantage.
		 * 
		 * You may also set the engine config to be [`Ext.draw.engine.Svg`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html) if so desired.
		 * @configuration
		 * @optional
		 * @default "Ext.draw.engine.Canvas"
		 * @type {string}
		 */
		engine?: string;
		/** 
		 * Defines a set of gradients that can be used as color properties
		 * (fillStyle and strokeStyle, but not shadowColor) in sprites.
		 * The gradients array is an array of objects with the following properties:
		 * 
		 * - **id** - string - The unique name of the gradient.
		 * - **type** - string, optional - The type of the gradient. Available types are: 'linear', 'radial'. Defaults to 'linear'.
		 * - **angle** - number, optional - The angle of the gradient in degrees.
		 * - **stops** - array - An array of objects with 'color' and 'offset' properties, where 'offset' is a real number from 0 to 1.
		 * 
		 * For example:
		 * 
		 *    gradients: [{
		 *        id: 'gradientId1',
		 *        type: 'linear',
		 *        angle: 45,
		 *        stops: [{
		 *            offset: 0,
		 *            color: 'red'
		 *        }, {
		 *           offset: 1,
		 *           color: 'yellow'
		 *        }]
		 *    }, {
		 *       id: 'gradientId2',
		 *       type: 'radial',
		 *       stops: [{
		 *           offset: 0,
		 *           color: '#555',
		 *       }, {
		 *           offset: 1,
		 *           color: '#ddd',
		 *       }]
		 *    }]
		 * 
		 * Then the sprites can use 'gradientId1' and 'gradientId2' by setting the color attributes to those ids, for example:
		 * 
		 *    sprite.setAttributes({
		 *        fillStyle: 'url(#gradientId1)',
		 *        strokeStyle: 'url(#gradientId2)'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {object[]}
		 */
		gradients?: object[];
		/** 
		 * The current highlight item in the chart.
		 * The object must be the one that you get from item events.
		 * 
		 * Note that series can also own highlight items.
		 * This notion is separate from this one and should not be used at the same time.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		highlightItem?: object;
		/** 
		 * The amount of inset padding in pixels for the chart.
		 * Inset padding is the padding from the boundary of the chart to any of its contents.
		 * @configuration
		 * @optional
		 * @default {top: 10, left: 10, right: 10, bottom: 10}
		 * @type {object|number|string}
		 */
		insetPadding?: object | number | string;
		/** 
		 * Interactions are optional modules that can be plugged in to a chart
		 * to allow the user to interact with the chart and its data in special ways.
		 * The `interactions` config takes an Array of Object configurations,
		 * each one corresponding to a particular interaction class identified
		 * by a `type` property:
		 * 
		 *    new Ext.chart.AbstractChart({
		 *        renderTo: Ext.getBody(),
		 *        width: 800,
		 *        height: 600,
		 *        store: store1,
		 *        axes: [
		 *            // ...some axes options...
		 *        ],
		 *        series: [
		 *            // ...some series options...
		 *        ],
		 *        interactions: [{
		 *            type: 'interactiontype'
		 *            // ...additional configs for the interaction...
		 *        }]
		 *    });
		 * 
		 * When adding an interaction which uses only its default configuration
		 * (no extra properties other than `type`), you can alternately specify
		 * only the type as a String rather than the full Object:
		 * 
		 *    interactions: ['reset', 'rotate']
		 * 
		 * The current supported interaction types include:
		 * 
		 * - [panzoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) - allows pan and zoom of axes
		 * - [itemhighlight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemHighlight.html) - allows highlighting of series data points
		 * - [iteminfo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemInfo.html) - allows displaying details of a data point in a popup panel
		 * - [rotate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.Rotate.html) - allows rotation of pie and radar series
		 * 
		 * See the documentation for each of those interaction classes to see how they can be configured.
		 * 
		 * Additional custom interactions can be registered using `'interactions.'` alias prefix.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		interactions?: any[];
		/** 
		 * The legend config for the chart. If specified, a legend block will be shown
		 * next to the chart.
		 * Each legend item displays the [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html#cfg-title)
		 * of the series, the color of the series and allows to toggle the visibility
		 * of the series (at least one series should remain visible).
		 * 
		 * Sencha Charts support two types of legends: DOM based and sprite based.
		 * 
		 * The sprite based legend can be shown in chart [preview](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-preview)
		 * and is a part of the downloaded [chart image](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-download).
		 * The sprite based legend is always displayed in full and takes as much space as necessary,
		 * the legend items are split into columns to use the available space efficiently.
		 * The sprite based legend is styled via a [chart theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html).
		 * 
		 * The DOM based legend supports RTL.
		 * It occupies a fixed width or height and scrolls when the content overflows.
		 * The DOM based legend is styled via CSS rules.
		 * 
		 * By default the DOM legend is used. The type can be explicitly specified:
		 * 
		 *    legend: {
		 *        type: 'sprite', // 'dom' is another possible value
		 *        docked: 'top'
		 *    }
		 * 
		 * If the legend config is set to `true`, the DOM legend will be used
		 * docked to the bottom.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}
		 */
		legend?: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * The main area of the chart where grid and series are drawn.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		mainRect?: object;
		/** 
		 * The text to place in the Preview image alt attribute.
		 * @configuration
		 * @optional
		 * @default 'Chart preview'
		 * @type {string}
		 */
		previewAltText?: string;
		/** 
		 * The text to place in Preview Chart window title.
		 * @configuration
		 * @optional
		 * @default 'Chart Preview'
		 * @type {string}
		 */
		previewTitleText?: string;
		/** 
		 * Override value.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		resizeHandler?: object;
		/** 
		 * Array of [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) instances or config objects. For example:
		 * 
		 *    series: [{
		 *        type: 'column',
		 *        axis: 'left',
		 *        listeners: {
		 *            'afterrender': function() {
		 *                console.log('afterrender');
		 *            }
		 *        },
		 *        xField: 'category',
		 *        yField: 'data1'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.series.Series|any[]}
		 */
		series?: Ext.chart.series.Series | any[];
		/** 
		 * Defines a set of sprites to be added to the drawContainer surface.
		 * 
		 * For example:
		 * 
		 *     sprites: [{
		 *          type: 'circle',
		 *          fillStyle: '#79BB3F',
		 *          r: 100,
		 *          x: 100,
		 *          y: 100
		 *     }]
		 * 
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		sprites?: object[];
		/** 
		 * The data source to which the chart is bound. Acceptable values for this property are:
		 * 
		 * - **any Store class / subclass**
		 * - **an ID of a store**
		 * - **a Store config object**.  When passing a config you can
		 *   specify the store type by alias.  Passing a config object with a store type will
		 *   dynamically create a new store of that type when the chart is instantiated.
		 * 
		 * For example:
		 * 
		 *    Ext.define('MyApp.store.Customer', {
		 *        extend: 'Ext.data.Store',
		 *        alias: 'store.customerstore',
		 *    
		 *        fields: ['name', 'value']
		 *    });
		 *    
		 *    
		 *    Ext.create({
		 *        xtype: 'cartesian',
		 *        renderTo: document.body,
		 *        height: 400,
		 *        width: 400,
		 *        store: {
		 *            type: 'customerstore',
		 *            data: [{
		 *                name: 'metric one',
		 *                value: 10
		 *            }]
		 *        },
		 *        axes: [{
		 *            type: 'numeric',
		 *            position: 'left',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'value'
		 *        }, {
		 *            type: 'category',
		 *            position: 'bottom',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'name'
		 *        }],
		 *        series: {
		 *            type: 'bar',
		 *            xField: 'name',
		 *            yField: 'value'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default 'ext-empty-store'
		 * @type {Ext.data.Store|string|object}
		 */
		store?: Ext.data.Store | string | object;
		/** 
		 * The style for the chart component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The name of the theme to be used. A theme defines the colors and styles
		 * used by the series, axes, markers and other chart components.
		 * Please see the documentation for the [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html) class for more information.
		 * Possible theme values are:
		 *   - 'green', 'sky', 'red', 'purple', 'blue', 'yellow'
		 *   - 'category1' to 'category6'
		 *   - and the above theme names with the '-gradients' suffix, e.g. 'green-gradients'
		 * @configuration
		 * @optional
		 * @default "default"
		 * @type {string}
		 */
		theme?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default {panX: false, panY: false, pinchZoom: false, doubleTapZoom: false}
		 * @type {object}
		 */
		touchAction?: object;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.chart.CartesianChart {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.CartesianChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html)
	 * Represents a chart that uses cartesian coordinates.
	 * A cartesian chart has two directions, X direction and Y direction.
	 * The series and axes are coordinated along these directions.
	 * By default the x direction is horizontal and y direction is vertical,
	 * You can swap the direction by setting the [flipXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-flipXY) config to `true`.
	 * 
	 * Cartesian series often treats x direction an y direction differently.
	 * In most cases, data on x direction are assumed to be monotonically increasing.
	 * Based on this property, cartesian series can be trimmed and summarized properly
	 * to gain a better performance.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * (optional) `true` for the default animation (easing: 'ease' and duration: 500)
		 * or a standard animation config object to be used for default chart animations.
		 * @configuration
		 * @optional
		 * @type {boolean|object}
		 */
		animation?: boolean | object;
		/** 
		 * Array of [Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html) instances or config objects. For example:
		 * 
		 *    axes: [{
		 *        type: 'numeric',
		 *        position: 'left',
		 *        title: 'Number of Hits',
		 *        minimum: 0
		 *    }, {
		 *        type: 'category',
		 *        position: 'bottom',
		 *        title: 'Month of the Year'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.axis.Axis|any[]|object}
		 */
		axes?: Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Set the chart background.
		 * This can be a gradient object, image, or color.
		 * 
		 * For example, if `background` were to be a color we could set the object as
		 * 
		 *    background: '#ccc'
		 * 
		 * You can specify an image by using:
		 * 
		 *    background: {
		 *        type: 'image',
		 *        src: 'http://path.to.image/'
		 *    }
		 * 
		 * Also you can specify a gradient by using the gradient object syntax:
		 * 
		 *    background: {
		 *        type: 'linear',
		 *        degrees: 0,
		 *        stops: [
		 *            {
		 *                offset: 0,
		 *                color: 'white'
		 *            },
		 *            {
		 *                offset: 1,
		 *                color: 'blue'
		 *            }
		 *        ]
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'draw-container'
		 * @type {string}
		 */
		cls?: string;
		/** 
		 * Array of colors/gradients to override the color of items and legends.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		colors?: any[];
		/** 
		 * Defines the engine (type of surface) used to render draw container contents.
		 * 
		 * The render engine is selected automatically depending on the platform used. Priority
		 * is given to the [Ext.draw.engine.Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) engine due to its performance advantage.
		 * 
		 * You may also set the engine config to be [`Ext.draw.engine.Svg`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html) if so desired.
		 * @configuration
		 * @optional
		 * @default "Ext.draw.engine.Canvas"
		 * @type {string}
		 */
		engine?: string;
		/** 
		 * Flip the direction of X and Y axis.
		 * If flipXY is `true`, the X axes will be vertical and Y axes will be horizontal.
		 * Note that [positions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position) of chart axes have
		 * to be updated accordingly: axes positioned to the `top` and `bottom` should
		 * be positioned to the `left` or `right` and vice versa.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		flipXY?: boolean;
		/** 
		 * Defines a set of gradients that can be used as color properties
		 * (fillStyle and strokeStyle, but not shadowColor) in sprites.
		 * The gradients array is an array of objects with the following properties:
		 * 
		 * - **id** - string - The unique name of the gradient.
		 * - **type** - string, optional - The type of the gradient. Available types are: 'linear', 'radial'. Defaults to 'linear'.
		 * - **angle** - number, optional - The angle of the gradient in degrees.
		 * - **stops** - array - An array of objects with 'color' and 'offset' properties, where 'offset' is a real number from 0 to 1.
		 * 
		 * For example:
		 * 
		 *    gradients: [{
		 *        id: 'gradientId1',
		 *        type: 'linear',
		 *        angle: 45,
		 *        stops: [{
		 *            offset: 0,
		 *            color: 'red'
		 *        }, {
		 *           offset: 1,
		 *           color: 'yellow'
		 *        }]
		 *    }, {
		 *       id: 'gradientId2',
		 *       type: 'radial',
		 *       stops: [{
		 *           offset: 0,
		 *           color: '#555',
		 *       }, {
		 *           offset: 1,
		 *           color: '#ddd',
		 *       }]
		 *    }]
		 * 
		 * Then the sprites can use 'gradientId1' and 'gradientId2' by setting the color attributes to those ids, for example:
		 * 
		 *    sprite.setAttributes({
		 *        fillStyle: 'url(#gradientId1)',
		 *        strokeStyle: 'url(#gradientId2)'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {object[]}
		 */
		gradients?: object[];
		/** 
		 * The current highlight item in the chart.
		 * The object must be the one that you get from item events.
		 * 
		 * Note that series can also own highlight items.
		 * This notion is separate from this one and should not be used at the same time.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		highlightItem?: object;
		/** 
		 * The amount of inner padding in pixels.
		 * Inner padding is the padding from the innermost axes to the series.
		 * @configuration
		 * @optional
		 * @default {top: 0, left: 0, right: 0, bottom: 0}
		 * @type {object}
		 */
		innerPadding?: object;
		/** 
		 * While it may seem tedious to change the position config of all axes every time
		 * when the value of the flipXY config is changed, it's hard to predict the
		 * expectaction of the user here, as illustrated below.
		 * 
		 * The 'num' and 'cat' here stand for the numeric and the category axis, respectively.
		 * And the right column shows the expected (subjective) result of setting the flipXY
		 * config of the chart to 'true'.
		 * 
		 * As one can see, there's no single rule (e.g. position swapping, clockwise 90° chart
		 * rotation) that will produce a universally accepted result.
		 * So we are letting the user decide, instead of doing it for them.
		 * 
		 * ---
		 * 
		 * ## |   flipXY: false       |    flipXY: true   |
		 * 
		 * |        ^              |      ^            |
		 * |        |     *        |      | * * *      |
		 * |   num1 |   * *        |  cat | * *        |
		 * |        | * * *        |      | *          |
		 * |        -------->      |      -------->    |
		 * 
		 * ## |           cat         |         num1      |
		 * 
		 * |                       |         num1      |
		 * |       ^       ^       |      ^------->    |
		 * |       |     * |       |      | * * *      |
		 * |  num1 |   * * | num2  |  cat | * *        |
		 * |       | * * * |       |      | *          |
		 * |       -------->       |      -------->    |
		 * 
		 * ## |          cat          |         num2      |
		 * @configuration
		 * @optional
		 * @default [0, 0, 1, 1]
		 * @type {any[]}
		 */
		innerRect?: any[];
		/** 
		 * The amount of inset padding in pixels for the chart.
		 * Inset padding is the padding from the boundary of the chart to any of its contents.
		 * @configuration
		 * @optional
		 * @default {top: 10, left: 10, right: 10, bottom: 10}
		 * @type {object|number|string}
		 */
		insetPadding?: object | number | string;
		/** 
		 * Interactions are optional modules that can be plugged in to a chart
		 * to allow the user to interact with the chart and its data in special ways.
		 * The `interactions` config takes an Array of Object configurations,
		 * each one corresponding to a particular interaction class identified
		 * by a `type` property:
		 * 
		 *    new Ext.chart.AbstractChart({
		 *        renderTo: Ext.getBody(),
		 *        width: 800,
		 *        height: 600,
		 *        store: store1,
		 *        axes: [
		 *            // ...some axes options...
		 *        ],
		 *        series: [
		 *            // ...some series options...
		 *        ],
		 *        interactions: [{
		 *            type: 'interactiontype'
		 *            // ...additional configs for the interaction...
		 *        }]
		 *    });
		 * 
		 * When adding an interaction which uses only its default configuration
		 * (no extra properties other than `type`), you can alternately specify
		 * only the type as a String rather than the full Object:
		 * 
		 *    interactions: ['reset', 'rotate']
		 * 
		 * The current supported interaction types include:
		 * 
		 * - [panzoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) - allows pan and zoom of axes
		 * - [itemhighlight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemHighlight.html) - allows highlighting of series data points
		 * - [iteminfo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemInfo.html) - allows displaying details of a data point in a popup panel
		 * - [rotate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.Rotate.html) - allows rotation of pie and radar series
		 * 
		 * See the documentation for each of those interaction classes to see how they can be configured.
		 * 
		 * Additional custom interactions can be registered using `'interactions.'` alias prefix.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		interactions?: any[];
		/** 
		 * The legend config for the chart. If specified, a legend block will be shown
		 * next to the chart.
		 * Each legend item displays the [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html#cfg-title)
		 * of the series, the color of the series and allows to toggle the visibility
		 * of the series (at least one series should remain visible).
		 * 
		 * Sencha Charts support two types of legends: DOM based and sprite based.
		 * 
		 * The sprite based legend can be shown in chart [preview](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-preview)
		 * and is a part of the downloaded [chart image](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-download).
		 * The sprite based legend is always displayed in full and takes as much space as necessary,
		 * the legend items are split into columns to use the available space efficiently.
		 * The sprite based legend is styled via a [chart theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html).
		 * 
		 * The DOM based legend supports RTL.
		 * It occupies a fixed width or height and scrolls when the content overflows.
		 * The DOM based legend is styled via CSS rules.
		 * 
		 * By default the DOM legend is used. The type can be explicitly specified:
		 * 
		 *    legend: {
		 *        type: 'sprite', // 'dom' is another possible value
		 *        docked: 'top'
		 *    }
		 * 
		 * If the legend config is set to `true`, the DOM legend will be used
		 * docked to the bottom.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}
		 */
		legend?: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * The main area of the chart where grid and series are drawn.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		mainRect?: object;
		/** 
		 * The text to place in the Preview image alt attribute.
		 * @configuration
		 * @optional
		 * @default 'Chart preview'
		 * @type {string}
		 */
		previewAltText?: string;
		/** 
		 * The text to place in Preview Chart window title.
		 * @configuration
		 * @optional
		 * @default 'Chart Preview'
		 * @type {string}
		 */
		previewTitleText?: string;
		/** 
		 * Override value.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		resizeHandler?: object;
		/** 
		 * Array of [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) instances or config objects. For example:
		 * 
		 *    series: [{
		 *        type: 'column',
		 *        axis: 'left',
		 *        listeners: {
		 *            'afterrender': function() {
		 *                console.log('afterrender');
		 *            }
		 *        },
		 *        xField: 'category',
		 *        yField: 'data1'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.series.Series|any[]}
		 */
		series?: Ext.chart.series.Series | any[];
		/** 
		 * Defines a set of sprites to be added to the drawContainer surface.
		 * 
		 * For example:
		 * 
		 *     sprites: [{
		 *          type: 'circle',
		 *          fillStyle: '#79BB3F',
		 *          r: 100,
		 *          x: 100,
		 *          y: 100
		 *     }]
		 * 
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		sprites?: object[];
		/** 
		 * The data source to which the chart is bound. Acceptable values for this property are:
		 * 
		 * - **any Store class / subclass**
		 * - **an ID of a store**
		 * - **a Store config object**.  When passing a config you can
		 *   specify the store type by alias.  Passing a config object with a store type will
		 *   dynamically create a new store of that type when the chart is instantiated.
		 * 
		 * For example:
		 * 
		 *    Ext.define('MyApp.store.Customer', {
		 *        extend: 'Ext.data.Store',
		 *        alias: 'store.customerstore',
		 *    
		 *        fields: ['name', 'value']
		 *    });
		 *    
		 *    
		 *    Ext.create({
		 *        xtype: 'cartesian',
		 *        renderTo: document.body,
		 *        height: 400,
		 *        width: 400,
		 *        store: {
		 *            type: 'customerstore',
		 *            data: [{
		 *                name: 'metric one',
		 *                value: 10
		 *            }]
		 *        },
		 *        axes: [{
		 *            type: 'numeric',
		 *            position: 'left',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'value'
		 *        }, {
		 *            type: 'category',
		 *            position: 'bottom',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'name'
		 *        }],
		 *        series: {
		 *            type: 'bar',
		 *            xField: 'name',
		 *            yField: 'value'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default 'ext-empty-store'
		 * @type {Ext.data.Store|string|object}
		 */
		store?: Ext.data.Store | string | object;
		/** 
		 * The style for the chart component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The name of the theme to be used. A theme defines the colors and styles
		 * used by the series, axes, markers and other chart components.
		 * Please see the documentation for the [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html) class for more information.
		 * Possible theme values are:
		 *   - 'green', 'sky', 'red', 'purple', 'blue', 'yellow'
		 *   - 'category1' to 'category6'
		 *   - and the above theme names with the '-gradients' suffix, e.g. 'green-gradients'
		 * @configuration
		 * @optional
		 * @default "default"
		 * @type {string}
		 */
		theme?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default {panX: false, panY: false, pinchZoom: false, doubleTapZoom: false}
		 * @type {object}
		 */
		touchAction?: object;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.chart.Markers {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.Markers](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.Markers.html)
	 * Marker sprite. A specialized version of instancing sprite that groups instances.
	 * Putting a marker is grouped by its category id. Clearing removes that category.
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
		 * The instances of the [template](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Instancing.html#cfg-template) sprite as configs of attributes.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		instances?: any[];
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
		 * the [rotationRads](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationRads), [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY) configs.
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
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationRads](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationRads), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY)
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
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationRads](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationRads), and
		 * [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX)
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
		 * See also: [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotation), [rotationCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationCenterX), and
		 * [rotationCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-rotationCenterY)
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
		 * the [scalingX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingX), [scalingY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingY), [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX),
		 * and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY) configs.
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
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingY), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
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
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingY), and [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX)
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
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingY),
		 * [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
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
		 * See also: [scaling](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scaling), [scalingX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingX),
		 * [scalingCenterX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterX), and [scalingCenterY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-scalingCenterY)
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
		 * Please use the [Ext.draw.Surface.add](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Surface.html#method-add) method instead.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface}
		 */
		surface?: Ext.draw.Surface;
		/** 
		 * The sprite template used by all instances.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		template?: object;
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
		 * on the [translationX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-translationX) and [translationY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-translationY) configs.
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
		 * See also: [translation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-translation) and [translationY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-translationY)
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
		 * See also: [translation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-translation) and [translationX](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.sprite.Sprite.html#cfg-translationX)
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
		 * @param   {object}                    config
		 * @returns {Ext.chart.Markers.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.Markers.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                    [value] The value to set for the name parameter.
		 * @returns {Ext.chart.Markers.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.Markers.Statics;
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
		 * @returns {Ext.chart.Markers.Statics}  
		 */
		statics? (): Ext.chart.Markers.Statics;
	}
}
declare namespace Ext.chart.PolarChart {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.PolarChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html)
	 * Represent a chart that uses polar coordinates.
	 * A polar chart has two axes: an angular axis (which is a circle) and
	 * a radial axis (a straight line from the center to the edge of the circle).
	 * The angular axis is usually a Category axis while the radial axis is
	 * typically numerical.
	 * 
	 * Pie charts and Radar charts are common examples of Polar charts.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * (optional) `true` for the default animation (easing: 'ease' and duration: 500)
		 * or a standard animation config object to be used for default chart animations.
		 * @configuration
		 * @optional
		 * @type {boolean|object}
		 */
		animation?: boolean | object;
		/** 
		 * Array of [Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html) instances or config objects. For example:
		 * 
		 *    axes: [{
		 *        type: 'numeric',
		 *        position: 'left',
		 *        title: 'Number of Hits',
		 *        minimum: 0
		 *    }, {
		 *        type: 'category',
		 *        position: 'bottom',
		 *        title: 'Month of the Year'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.axis.Axis|any[]|object}
		 */
		axes?: Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Set the chart background.
		 * This can be a gradient object, image, or color.
		 * 
		 * For example, if `background` were to be a color we could set the object as
		 * 
		 *    background: '#ccc'
		 * 
		 * You can specify an image by using:
		 * 
		 *    background: {
		 *        type: 'image',
		 *        src: 'http://path.to.image/'
		 *    }
		 * 
		 * Also you can specify a gradient by using the gradient object syntax:
		 * 
		 *    background: {
		 *        type: 'linear',
		 *        degrees: 0,
		 *        stops: [
		 *            {
		 *                offset: 0,
		 *                color: 'white'
		 *            },
		 *            {
		 *                offset: 1,
		 *                color: 'blue'
		 *            }
		 *        ]
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Determines the center of the polar chart.
		 * Updated when the chart performs layout.
		 * @configuration
		 * @optional
		 * @default [0, 0]
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'draw-container'
		 * @type {string}
		 */
		cls?: string;
		/** 
		 * Array of colors/gradients to override the color of items and legends.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		colors?: any[];
		/** 
		 * Defines the engine (type of surface) used to render draw container contents.
		 * 
		 * The render engine is selected automatically depending on the platform used. Priority
		 * is given to the [Ext.draw.engine.Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) engine due to its performance advantage.
		 * 
		 * You may also set the engine config to be [`Ext.draw.engine.Svg`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html) if so desired.
		 * @configuration
		 * @optional
		 * @default "Ext.draw.engine.Canvas"
		 * @type {string}
		 */
		engine?: string;
		/** 
		 * Defines a set of gradients that can be used as color properties
		 * (fillStyle and strokeStyle, but not shadowColor) in sprites.
		 * The gradients array is an array of objects with the following properties:
		 * 
		 * - **id** - string - The unique name of the gradient.
		 * - **type** - string, optional - The type of the gradient. Available types are: 'linear', 'radial'. Defaults to 'linear'.
		 * - **angle** - number, optional - The angle of the gradient in degrees.
		 * - **stops** - array - An array of objects with 'color' and 'offset' properties, where 'offset' is a real number from 0 to 1.
		 * 
		 * For example:
		 * 
		 *    gradients: [{
		 *        id: 'gradientId1',
		 *        type: 'linear',
		 *        angle: 45,
		 *        stops: [{
		 *            offset: 0,
		 *            color: 'red'
		 *        }, {
		 *           offset: 1,
		 *           color: 'yellow'
		 *        }]
		 *    }, {
		 *       id: 'gradientId2',
		 *       type: 'radial',
		 *       stops: [{
		 *           offset: 0,
		 *           color: '#555',
		 *       }, {
		 *           offset: 1,
		 *           color: '#ddd',
		 *       }]
		 *    }]
		 * 
		 * Then the sprites can use 'gradientId1' and 'gradientId2' by setting the color attributes to those ids, for example:
		 * 
		 *    sprite.setAttributes({
		 *        fillStyle: 'url(#gradientId1)',
		 *        strokeStyle: 'url(#gradientId2)'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {object[]}
		 */
		gradients?: object[];
		/** 
		 * The current highlight item in the chart.
		 * The object must be the one that you get from item events.
		 * 
		 * Note that series can also own highlight items.
		 * This notion is separate from this one and should not be used at the same time.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		highlightItem?: object;
		/** 
		 * The amount of inner padding in pixels.
		 * Inner padding is the padding from the outermost angular axis to the series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		innerPadding?: number;
		/** 
		 * The amount of inset padding in pixels for the chart.
		 * Inset padding is the padding from the boundary of the chart to any of its contents.
		 * @configuration
		 * @optional
		 * @default {top: 10, left: 10, right: 10, bottom: 10}
		 * @type {object|number|string}
		 */
		insetPadding?: object | number | string;
		/** 
		 * Interactions are optional modules that can be plugged in to a chart
		 * to allow the user to interact with the chart and its data in special ways.
		 * The `interactions` config takes an Array of Object configurations,
		 * each one corresponding to a particular interaction class identified
		 * by a `type` property:
		 * 
		 *    new Ext.chart.AbstractChart({
		 *        renderTo: Ext.getBody(),
		 *        width: 800,
		 *        height: 600,
		 *        store: store1,
		 *        axes: [
		 *            // ...some axes options...
		 *        ],
		 *        series: [
		 *            // ...some series options...
		 *        ],
		 *        interactions: [{
		 *            type: 'interactiontype'
		 *            // ...additional configs for the interaction...
		 *        }]
		 *    });
		 * 
		 * When adding an interaction which uses only its default configuration
		 * (no extra properties other than `type`), you can alternately specify
		 * only the type as a String rather than the full Object:
		 * 
		 *    interactions: ['reset', 'rotate']
		 * 
		 * The current supported interaction types include:
		 * 
		 * - [panzoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) - allows pan and zoom of axes
		 * - [itemhighlight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemHighlight.html) - allows highlighting of series data points
		 * - [iteminfo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemInfo.html) - allows displaying details of a data point in a popup panel
		 * - [rotate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.Rotate.html) - allows rotation of pie and radar series
		 * 
		 * See the documentation for each of those interaction classes to see how they can be configured.
		 * 
		 * Additional custom interactions can be registered using `'interactions.'` alias prefix.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		interactions?: any[];
		/** 
		 * The legend config for the chart. If specified, a legend block will be shown
		 * next to the chart.
		 * Each legend item displays the [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html#cfg-title)
		 * of the series, the color of the series and allows to toggle the visibility
		 * of the series (at least one series should remain visible).
		 * 
		 * Sencha Charts support two types of legends: DOM based and sprite based.
		 * 
		 * The sprite based legend can be shown in chart [preview](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-preview)
		 * and is a part of the downloaded [chart image](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-download).
		 * The sprite based legend is always displayed in full and takes as much space as necessary,
		 * the legend items are split into columns to use the available space efficiently.
		 * The sprite based legend is styled via a [chart theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html).
		 * 
		 * The DOM based legend supports RTL.
		 * It occupies a fixed width or height and scrolls when the content overflows.
		 * The DOM based legend is styled via CSS rules.
		 * 
		 * By default the DOM legend is used. The type can be explicitly specified:
		 * 
		 *    legend: {
		 *        type: 'sprite', // 'dom' is another possible value
		 *        docked: 'top'
		 *    }
		 * 
		 * If the legend config is set to `true`, the DOM legend will be used
		 * docked to the bottom.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}
		 */
		legend?: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * The main area of the chart where grid and series are drawn.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		mainRect?: object;
		/** 
		 * The text to place in the Preview image alt attribute.
		 * @configuration
		 * @optional
		 * @default 'Chart preview'
		 * @type {string}
		 */
		previewAltText?: string;
		/** 
		 * The text to place in Preview Chart window title.
		 * @configuration
		 * @optional
		 * @default 'Chart Preview'
		 * @type {string}
		 */
		previewTitleText?: string;
		/** 
		 * Determines the radius of the polar chart.
		 * Updated when the chart performs layout.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * Override value.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		resizeHandler?: object;
		/** 
		 * Array of [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) instances or config objects. For example:
		 * 
		 *    series: [{
		 *        type: 'column',
		 *        axis: 'left',
		 *        listeners: {
		 *            'afterrender': function() {
		 *                console.log('afterrender');
		 *            }
		 *        },
		 *        xField: 'category',
		 *        yField: 'data1'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.series.Series|any[]}
		 */
		series?: Ext.chart.series.Series | any[];
		/** 
		 * Defines a set of sprites to be added to the drawContainer surface.
		 * 
		 * For example:
		 * 
		 *     sprites: [{
		 *          type: 'circle',
		 *          fillStyle: '#79BB3F',
		 *          r: 100,
		 *          x: 100,
		 *          y: 100
		 *     }]
		 * 
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		sprites?: object[];
		/** 
		 * The data source to which the chart is bound. Acceptable values for this property are:
		 * 
		 * - **any Store class / subclass**
		 * - **an ID of a store**
		 * - **a Store config object**.  When passing a config you can
		 *   specify the store type by alias.  Passing a config object with a store type will
		 *   dynamically create a new store of that type when the chart is instantiated.
		 * 
		 * For example:
		 * 
		 *    Ext.define('MyApp.store.Customer', {
		 *        extend: 'Ext.data.Store',
		 *        alias: 'store.customerstore',
		 *    
		 *        fields: ['name', 'value']
		 *    });
		 *    
		 *    
		 *    Ext.create({
		 *        xtype: 'cartesian',
		 *        renderTo: document.body,
		 *        height: 400,
		 *        width: 400,
		 *        store: {
		 *            type: 'customerstore',
		 *            data: [{
		 *                name: 'metric one',
		 *                value: 10
		 *            }]
		 *        },
		 *        axes: [{
		 *            type: 'numeric',
		 *            position: 'left',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'value'
		 *        }, {
		 *            type: 'category',
		 *            position: 'bottom',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'name'
		 *        }],
		 *        series: {
		 *            type: 'bar',
		 *            xField: 'name',
		 *            yField: 'value'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default 'ext-empty-store'
		 * @type {Ext.data.Store|string|object}
		 */
		store?: Ext.data.Store | string | object;
		/** 
		 * The style for the chart component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The name of the theme to be used. A theme defines the colors and styles
		 * used by the series, axes, markers and other chart components.
		 * Please see the documentation for the [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html) class for more information.
		 * Possible theme values are:
		 *   - 'green', 'sky', 'red', 'purple', 'blue', 'yellow'
		 *   - 'category1' to 'category6'
		 *   - and the above theme names with the '-gradients' suffix, e.g. 'green-gradients'
		 * @configuration
		 * @optional
		 * @default "default"
		 * @type {string}
		 */
		theme?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default {panX: false, panY: false, pinchZoom: false, doubleTapZoom: false}
		 * @type {object}
		 */
		touchAction?: object;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.chart.SpaceFillingChart {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.SpaceFillingChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.SpaceFillingChart.html)
	 * Creates a chart that fills the entire area of the chart.
	 * e.g. Gauge Charts
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * (optional) `true` for the default animation (easing: 'ease' and duration: 500)
		 * or a standard animation config object to be used for default chart animations.
		 * @configuration
		 * @optional
		 * @type {boolean|object}
		 */
		animation?: boolean | object;
		/** 
		 * Array of [Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html) instances or config objects. For example:
		 * 
		 *    axes: [{
		 *        type: 'numeric',
		 *        position: 'left',
		 *        title: 'Number of Hits',
		 *        minimum: 0
		 *    }, {
		 *        type: 'category',
		 *        position: 'bottom',
		 *        title: 'Month of the Year'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.axis.Axis|any[]|object}
		 */
		axes?: Ext.chart.axis.Axis | any[] | object;
		/** 
		 * Set the chart background.
		 * This can be a gradient object, image, or color.
		 * 
		 * For example, if `background` were to be a color we could set the object as
		 * 
		 *    background: '#ccc'
		 * 
		 * You can specify an image by using:
		 * 
		 *    background: {
		 *        type: 'image',
		 *        src: 'http://path.to.image/'
		 *    }
		 * 
		 * Also you can specify a gradient by using the gradient object syntax:
		 * 
		 *    background: {
		 *        type: 'linear',
		 *        degrees: 0,
		 *        stops: [
		 *            {
		 *                offset: 0,
		 *                color: 'white'
		 *            },
		 *            {
		 *                offset: 1,
		 *                color: 'blue'
		 *            }
		 *        ]
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'draw-container'
		 * @type {string}
		 */
		cls?: string;
		/** 
		 * Array of colors/gradients to override the color of items and legends.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		colors?: any[];
		/** 
		 * Defines the engine (type of surface) used to render draw container contents.
		 * 
		 * The render engine is selected automatically depending on the platform used. Priority
		 * is given to the [Ext.draw.engine.Canvas](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html) engine due to its performance advantage.
		 * 
		 * You may also set the engine config to be [`Ext.draw.engine.Svg`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Svg.html) if so desired.
		 * @configuration
		 * @optional
		 * @default "Ext.draw.engine.Canvas"
		 * @type {string}
		 */
		engine?: string;
		/** 
		 * Defines a set of gradients that can be used as color properties
		 * (fillStyle and strokeStyle, but not shadowColor) in sprites.
		 * The gradients array is an array of objects with the following properties:
		 * 
		 * - **id** - string - The unique name of the gradient.
		 * - **type** - string, optional - The type of the gradient. Available types are: 'linear', 'radial'. Defaults to 'linear'.
		 * - **angle** - number, optional - The angle of the gradient in degrees.
		 * - **stops** - array - An array of objects with 'color' and 'offset' properties, where 'offset' is a real number from 0 to 1.
		 * 
		 * For example:
		 * 
		 *    gradients: [{
		 *        id: 'gradientId1',
		 *        type: 'linear',
		 *        angle: 45,
		 *        stops: [{
		 *            offset: 0,
		 *            color: 'red'
		 *        }, {
		 *           offset: 1,
		 *           color: 'yellow'
		 *        }]
		 *    }, {
		 *       id: 'gradientId2',
		 *       type: 'radial',
		 *       stops: [{
		 *           offset: 0,
		 *           color: '#555',
		 *       }, {
		 *           offset: 1,
		 *           color: '#ddd',
		 *       }]
		 *    }]
		 * 
		 * Then the sprites can use 'gradientId1' and 'gradientId2' by setting the color attributes to those ids, for example:
		 * 
		 *    sprite.setAttributes({
		 *        fillStyle: 'url(#gradientId1)',
		 *        strokeStyle: 'url(#gradientId2)'
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {object[]}
		 */
		gradients?: object[];
		/** 
		 * The current highlight item in the chart.
		 * The object must be the one that you get from item events.
		 * 
		 * Note that series can also own highlight items.
		 * This notion is separate from this one and should not be used at the same time.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		highlightItem?: object;
		/** 
		 * The amount of inset padding in pixels for the chart.
		 * Inset padding is the padding from the boundary of the chart to any of its contents.
		 * @configuration
		 * @optional
		 * @default {top: 10, left: 10, right: 10, bottom: 10}
		 * @type {object|number|string}
		 */
		insetPadding?: object | number | string;
		/** 
		 * Interactions are optional modules that can be plugged in to a chart
		 * to allow the user to interact with the chart and its data in special ways.
		 * The `interactions` config takes an Array of Object configurations,
		 * each one corresponding to a particular interaction class identified
		 * by a `type` property:
		 * 
		 *    new Ext.chart.AbstractChart({
		 *        renderTo: Ext.getBody(),
		 *        width: 800,
		 *        height: 600,
		 *        store: store1,
		 *        axes: [
		 *            // ...some axes options...
		 *        ],
		 *        series: [
		 *            // ...some series options...
		 *        ],
		 *        interactions: [{
		 *            type: 'interactiontype'
		 *            // ...additional configs for the interaction...
		 *        }]
		 *    });
		 * 
		 * When adding an interaction which uses only its default configuration
		 * (no extra properties other than `type`), you can alternately specify
		 * only the type as a String rather than the full Object:
		 * 
		 *    interactions: ['reset', 'rotate']
		 * 
		 * The current supported interaction types include:
		 * 
		 * - [panzoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) - allows pan and zoom of axes
		 * - [itemhighlight](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemHighlight.html) - allows highlighting of series data points
		 * - [iteminfo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.ItemInfo.html) - allows displaying details of a data point in a popup panel
		 * - [rotate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.Rotate.html) - allows rotation of pie and radar series
		 * 
		 * See the documentation for each of those interaction classes to see how they can be configured.
		 * 
		 * Additional custom interactions can be registered using `'interactions.'` alias prefix.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		interactions?: any[];
		/** 
		 * The legend config for the chart. If specified, a legend block will be shown
		 * next to the chart.
		 * Each legend item displays the [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html#cfg-title)
		 * of the series, the color of the series and allows to toggle the visibility
		 * of the series (at least one series should remain visible).
		 * 
		 * Sencha Charts support two types of legends: DOM based and sprite based.
		 * 
		 * The sprite based legend can be shown in chart [preview](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-preview)
		 * and is a part of the downloaded [chart image](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.Container.html#method-download).
		 * The sprite based legend is always displayed in full and takes as much space as necessary,
		 * the legend items are split into columns to use the available space efficiently.
		 * The sprite based legend is styled via a [chart theme](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html).
		 * 
		 * The DOM based legend supports RTL.
		 * It occupies a fixed width or height and scrolls when the content overflows.
		 * The DOM based legend is styled via CSS rules.
		 * 
		 * By default the DOM legend is used. The type can be explicitly specified:
		 * 
		 *    legend: {
		 *        type: 'sprite', // 'dom' is another possible value
		 *        docked: 'top'
		 *    }
		 * 
		 * If the legend config is set to `true`, the DOM legend will be used
		 * docked to the bottom.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.legend.Legend|Ext.chart.legend.SpriteLegend|boolean}
		 */
		legend?: Ext.chart.legend.Legend | Ext.chart.legend.SpriteLegend | boolean;
		/** 
		 * The main area of the chart where grid and series are drawn.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		mainRect?: object;
		/** 
		 * The text to place in the Preview image alt attribute.
		 * @configuration
		 * @optional
		 * @default 'Chart preview'
		 * @type {string}
		 */
		previewAltText?: string;
		/** 
		 * The text to place in Preview Chart window title.
		 * @configuration
		 * @optional
		 * @default 'Chart Preview'
		 * @type {string}
		 */
		previewTitleText?: string;
		/** 
		 * Override value.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		resizeHandler?: object;
		/** 
		 * Array of [Series](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Series.html) instances or config objects. For example:
		 * 
		 *    series: [{
		 *        type: 'column',
		 *        axis: 'left',
		 *        listeners: {
		 *            'afterrender': function() {
		 *                console.log('afterrender');
		 *            }
		 *        },
		 *        xField: 'category',
		 *        yField: 'data1'
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @default []
		 * @type {Ext.chart.series.Series|any[]}
		 */
		series?: Ext.chart.series.Series | any[];
		/** 
		 * Defines a set of sprites to be added to the drawContainer surface.
		 * 
		 * For example:
		 * 
		 *     sprites: [{
		 *          type: 'circle',
		 *          fillStyle: '#79BB3F',
		 *          r: 100,
		 *          x: 100,
		 *          y: 100
		 *     }]
		 * 
		 * @configuration
		 * @optional
		 * @type {object[]}
		 */
		sprites?: object[];
		/** 
		 * The data source to which the chart is bound. Acceptable values for this property are:
		 * 
		 * - **any Store class / subclass**
		 * - **an ID of a store**
		 * - **a Store config object**.  When passing a config you can
		 *   specify the store type by alias.  Passing a config object with a store type will
		 *   dynamically create a new store of that type when the chart is instantiated.
		 * 
		 * For example:
		 * 
		 *    Ext.define('MyApp.store.Customer', {
		 *        extend: 'Ext.data.Store',
		 *        alias: 'store.customerstore',
		 *    
		 *        fields: ['name', 'value']
		 *    });
		 *    
		 *    
		 *    Ext.create({
		 *        xtype: 'cartesian',
		 *        renderTo: document.body,
		 *        height: 400,
		 *        width: 400,
		 *        store: {
		 *            type: 'customerstore',
		 *            data: [{
		 *                name: 'metric one',
		 *                value: 10
		 *            }]
		 *        },
		 *        axes: [{
		 *            type: 'numeric',
		 *            position: 'left',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'value'
		 *        }, {
		 *            type: 'category',
		 *            position: 'bottom',
		 *            title: {
		 *                text: 'Sample Values',
		 *                fontSize: 15
		 *            },
		 *            fields: 'name'
		 *        }],
		 *        series: {
		 *            type: 'bar',
		 *            xField: 'name',
		 *            yField: 'value'
		 *        }
		 *    });
		 * 
		 * @configuration
		 * @optional
		 * @default 'ext-empty-store'
		 * @type {Ext.data.Store|string|object}
		 */
		store?: Ext.data.Store | string | object;
		/** 
		 * The style for the chart component.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The name of the theme to be used. A theme defines the colors and styles
		 * used by the series, axes, markers and other chart components.
		 * Please see the documentation for the [Ext.chart.theme.Base](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.theme.Base.html) class for more information.
		 * Possible theme values are:
		 *   - 'green', 'sky', 'red', 'purple', 'blue', 'yellow'
		 *   - 'category1' to 'category6'
		 *   - and the above theme names with the '-gradients' suffix, e.g. 'green-gradients'
		 * @configuration
		 * @optional
		 * @default "default"
		 * @type {string}
		 */
		theme?: string;
		/** 
		 * @configuration
		 * @optional
		 * @default {panX: false, panY: false, pinchZoom: false, doubleTapZoom: false}
		 * @type {object}
		 */
		touchAction?: object;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.chart.AbstractChart {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.AbstractChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html)
	 * The Ext.chart package provides the capability to visualize data.
	 * Each chart binds directly to a store enabling automatic updates of the chart.
	 * A chart configuration object has some overall styling options as well as an array of axes
	 * and series. A chart instance example could look like this:
	 * 
	 *    Ext.create('Ext.chart.CartesianChart', {
	 *        width: 800,
	 *        height: 600,
	 *        animation: {
	 *            easing: 'backOut',
	 *            duration: 500
	 *        },
	 *        store: store1,
	 *        legend: {
	 *            position: 'right'
	 *        },
	 *        axes: [
	 *            // ...some axes options...
	 *        ],
	 *        series: [
	 *            // ...some series options...
	 *        ]
	 *    });
	 * 
	 * In this example we set the `width` and `height` of a chart; We decide whether our series are
	 * animated or not and we select a store to be bound to the chart; We also set the legend to the right part of the
	 * chart.
	 * 
	 * You can register certain interactions such as [Ext.chart.interactions.PanZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.interactions.PanZoom.html) on the chart by specify an
	 * array of names or more specific config objects. All the events will be wired automatically.
	 * 
	 * You can also listen to series `itemXXX` events on both chart and series level.
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
	 *                    console.log('itemmousemove', item.category, item.field);
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
	 * For more information about the axes and series configurations please check the documentation of
	 * each series (Line, Bar, Pie, etc).
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires before a refresh to the chart data is called.  If the `beforerefresh` handler returns
		 * `false` the [refresh](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#event-refresh) action will be canceled.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		beforerefresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when the size of the draw container body changes.
		 * @event
		 * @param   {object} size  The object containing 'width' and 'height' of the draw container's body.
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		bodyresize? (size: object, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemdblclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousedown? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousemove? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseout? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseover? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseup? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemtap? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires after the chart is redrawn.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		redraw? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires after the chart data has been refreshed.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		refresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spriteclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritedblclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousedown? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousemove? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseout? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseover? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseup? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritetap? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the store of the chart changes.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {Ext.data.Store}          newStore
		 * @param   {Ext.data.Store}          oldStore
		 * @param   {object}                  eOpts    The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		storechange? (chart: Ext.chart.AbstractChart, newStore: Ext.data.Store, oldStore: Ext.data.Store, eOpts: object): void;
	}
}
declare namespace Ext.chart.CartesianChart {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.CartesianChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html)
	 * Represents a chart that uses cartesian coordinates.
	 * A cartesian chart has two directions, X direction and Y direction.
	 * The series and axes are coordinated along these directions.
	 * By default the x direction is horizontal and y direction is vertical,
	 * You can swap the direction by setting the [flipXY](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.CartesianChart.html#cfg-flipXY) config to `true`.
	 * 
	 * Cartesian series often treats x direction an y direction differently.
	 * In most cases, data on x direction are assumed to be monotonically increasing.
	 * Based on this property, cartesian series can be trimmed and summarized properly
	 * to gain a better performance.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires before a refresh to the chart data is called.  If the `beforerefresh` handler returns
		 * `false` the [refresh](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#event-refresh) action will be canceled.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		beforerefresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when the size of the draw container body changes.
		 * @event
		 * @param   {object} size  The object containing 'width' and 'height' of the draw container's body.
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		bodyresize? (size: object, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemdblclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousedown? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousemove? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseout? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseover? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseup? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemtap? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires after the chart is redrawn.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		redraw? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires after the chart data has been refreshed.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		refresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spriteclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritedblclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousedown? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousemove? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseout? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseover? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseup? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritetap? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the store of the chart changes.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {Ext.data.Store}          newStore
		 * @param   {Ext.data.Store}          oldStore
		 * @param   {object}                  eOpts    The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		storechange? (chart: Ext.chart.AbstractChart, newStore: Ext.data.Store, oldStore: Ext.data.Store, eOpts: object): void;
	}
}
declare namespace Ext.chart.PolarChart {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.PolarChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.PolarChart.html)
	 * Represent a chart that uses polar coordinates.
	 * A polar chart has two axes: an angular axis (which is a circle) and
	 * a radial axis (a straight line from the center to the edge of the circle).
	 * The angular axis is usually a Category axis while the radial axis is
	 * typically numerical.
	 * 
	 * Pie charts and Radar charts are common examples of Polar charts.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires before a refresh to the chart data is called.  If the `beforerefresh` handler returns
		 * `false` the [refresh](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#event-refresh) action will be canceled.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		beforerefresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when the size of the draw container body changes.
		 * @event
		 * @param   {object} size  The object containing 'width' and 'height' of the draw container's body.
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		bodyresize? (size: object, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemdblclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousedown? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousemove? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseout? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseover? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseup? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemtap? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires after the chart is redrawn.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		redraw? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires after the chart data has been refreshed.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		refresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spriteclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritedblclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousedown? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousemove? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseout? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseover? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseup? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritetap? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the store of the chart changes.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {Ext.data.Store}          newStore
		 * @param   {Ext.data.Store}          oldStore
		 * @param   {object}                  eOpts    The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		storechange? (chart: Ext.chart.AbstractChart, newStore: Ext.data.Store, oldStore: Ext.data.Store, eOpts: object): void;
	}
}
declare namespace Ext.chart.SpaceFillingChart {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.SpaceFillingChart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.SpaceFillingChart.html)
	 * Creates a chart that fills the entire area of the chart.
	 * e.g. Gauge Charts
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires before a refresh to the chart data is called.  If the `beforerefresh` handler returns
		 * `false` the [refresh](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#event-refresh) action will be canceled.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		beforerefresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when the size of the draw container body changes.
		 * @event
		 * @param   {object} size  The object containing 'width' and 'height' of the draw container's body.
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		bodyresize? (size: object, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemdblclick? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousedown? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmousemove? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseout? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseover? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemmouseup? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a series item.
		 * _Note_: This event requires the [chartitemevents](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.plugin.ItemEvents.html)
		 * plugin be added to the chart.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {object}                  item
		 * @param   {Event}                   event
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		itemtap? (chart: Ext.chart.AbstractChart, item: object, event: Event, eOpts: object): void;
		/** 
		 * Fires after the chart is redrawn.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		redraw? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires after the chart data has been refreshed.
		 * @event
		 * @param   {Ext.chart.AbstractChart} _this
		 * @param   {object}                  eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		refresh? (_this: Ext.chart.AbstractChart, eOpts: object): void;
		/** 
		 * Fires when a click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spriteclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a double click event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritedblclick? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mousedown event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousedown? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse is moved on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemousemove? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse exits a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseout? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the mouse enters a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseover? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a mouseup event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritemouseup? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when a tap event occurs on a sprite.
		 * @event
		 * @param   {object} sprite
		 * @param   {Event}  event
		 * @param   {object} eOpts  The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		spritetap? (sprite: object, event: Event, eOpts: object): void;
		/** 
		 * Fires when the store of the chart changes.
		 * @event
		 * @param   {Ext.chart.AbstractChart} chart
		 * @param   {Ext.data.Store}          newStore
		 * @param   {Ext.data.Store}          oldStore
		 * @param   {object}                  eOpts    The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                    
		 */
		storechange? (chart: Ext.chart.AbstractChart, newStore: Ext.data.Store, oldStore: Ext.data.Store, eOpts: object): void;
	}
}
