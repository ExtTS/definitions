declare namespace Ext.chart.axis {
	/** 
	 * [Ext.chart.axis.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html)
	 * Defines axis for charts.
	 * 
	 * Using the current model, the type of axis can be easily extended. By default, Sencha Charts provide three different
	 * types of axis:
	 * 
	 * - **numeric** - the data attached to this axis is numeric and continuous.
	 * - **time** - the data attached to this axis is (or gets converted into) a date/time value; it is continuous.
	 * - **category** - the data attached to this axis belongs to a finite set. The data points are evenly placed along the axis.
	 * 
	 * The behavior of an axis can be easily changed by setting different types of axis layout and axis segmenter to the axis.
	 * 
	 * Axis layout defines how the data points are placed. Using continuous layout, the data points will be distributed by
	 * the numeric value. Using discrete layout the data points will be spaced evenly. Furthermore, if you want to combine
	 * the data points with the duplicate values in a discrete layout, you should use combineDuplicate layout.
	 * 
	 * Segmenter defines the way to segment data range. For example, if you have a Date-type data range from Jan 1, 1997 to
	 * Jan 1, 2017, the segmenter will segement the data range into years, months or days based on the current zooming
	 * level.
	 * 
	 * It is possible to write custom axis layouts and segmenters to extends this behavior by simply implementing interfaces
	 * [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html) and [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html).
	 * 
	 * Here's an example for the axes part of a chart definition:
	 * An example of axis for a series (in this case for an area chart that has multiple layers of yFields) could be:
	 * 
	 *    axes: [{
	 *        type: 'numeric',
	 *        position: 'left',
	 *        title: 'Number of Hits',
	 *        grid: {
	 *            odd: {
	 *                opacity: 1,
	 *                fill: '#ddd',
	 *                stroke: '#bbb',
	 *                lineWidth: 1
	 *            }
	 *        },
	 *        minimum: 0
	 *    }, {
	 *        type: 'category',
	 *        position: 'bottom',
	 *        title: 'Month of the Year',
	 *        grid: true,
	 *        label: {
	 *            rotate: {
	 *                degrees: 315
	 *            }
	 *        }
	 *    }]
	 * 
	 * In this case we use a `numeric` axis for displaying the values of the Area series and a `category` axis for displaying the names of
	 * the store elements. The numeric axis is placed on the left of the screen, while the category axis is placed at the bottom of the chart.
	 * Both the category and numeric axes have `grid` set, which means that horizontal and vertical lines will cover the chart background. In the
	 * category axis the labels will be rotated so they can fit the space better.
	 */
	class Axis extends Ext.Base {
		/** 
		 * @property
		 * @private (property)
		 * @default []
		 * @type {any[]}
		 */
		boundSeries?: any[];
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isAxis?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		masterAxis?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default 1
		 * @type {number}
		 */
		prevMax?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		prevMin?: number;
		/** 
		 * The full data range of the axis. Should not be set directly, Clear it to `null`
		 * and use `getRange` to update.
		 * @property
		 * @private (property)
		 * @type {any[]}
		 */
		range?: any[];
		/** 
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		spriteAnimationCount?: number;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		sprites?: object;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		surface?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default {grid: true}
		 * @type {object}
		 */
		themeOnlyIfConfigured?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		titleOffset?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default []
		 * @type {any[]}
		 */
		xValues?: any[];
		/** 
		 * @property
		 * @private (property)
		 * @default []
		 * @type {any[]}
		 */
		yValues?: any[];
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Mapping data value into coordinate.
		 * @method
		 * @public (method)
		 * @param   {any}                      value
		 * @param   {string}                   field
		 * @param   {number}                   [idx]
		 * @param   {Ext.util.MixedCollection} [items]
		 * @returns {number}                           
		 */
		getCoordFor? (value: any, field: string, idx?: number, items?: Ext.util.MixedCollection): number;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	/** 
	 * [Ext.chart.axis.Axis3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html)
	 * Defines a 3D axis for charts.
	 * 
	 * A 3D axis has the same properties as the regular [axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html),
	 * plus a notion of depth. The depth of the 3D axis is determined automatically
	 * based on the depth of the bound series.
	 * 
	 * This type of axis has the following limitations compared to the regular axis class:
	 * 
	 * - supported [positions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position) are 'left' and 'bottom' only;
	 * - floating axes are not supported.
	 * 
	 * At the present moment only [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Bar3D.html) series can make use of the 3D axis.
	 */
	class Axis3D extends Ext.chart.axis.Axis {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Mapping data value into coordinate.
		 * @method
		 * @public (method)
		 * @param   {any}                      value
		 * @param   {string}                   field
		 * @param   {number}                   [idx]
		 * @param   {Ext.util.MixedCollection} [items]
		 * @returns {number}                           
		 */
		getCoordFor? (value: any, field: string, idx?: number, items?: Ext.util.MixedCollection): number;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * Returns the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getDepth? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} series
		 * @param   {object} depth
		 * @returns {void}          
		 */
		onSeriesDepthChange? (series: object, depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @param   {number} depth The new value.
		 * @returns {void}         
		 */
		setDepth? (depth: number): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} depth
		 * @returns {void}         
		 */
		updateDepth? (depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	/** 
	 * [Ext.chart.axis.Category](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html)
	 * A type of axis that displays items in categories. This axis is generally used to
	 * display categorical information like names of items, month names, quarters, etc.
	 * but no quantitative values. For that other type of information [Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * axis are more suitable.
	 * 
	 * As with other axis you can set the position of the axis and its title. For example:
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       innerPadding: '0 40 0 40',
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 'metric one',
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric two',
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 'metric three',
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric four',
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 'metric five',
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'category',
	 *           position: 'bottom',
	 *           fields: ['name'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example with set the category axis to the bottom of the surface, bound the axis to
	 * the `name` property and set as title "Sample Values".
	 */
	class Category extends Ext.chart.axis.Axis {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Mapping data value into coordinate.
		 * @method
		 * @public (method)
		 * @param   {any}                      value
		 * @param   {string}                   field
		 * @param   {number}                   [idx]
		 * @param   {Ext.util.MixedCollection} [items]
		 * @returns {number}                           
		 */
		getCoordFor? (value: any, field: string, idx?: number, items?: Ext.util.MixedCollection): number;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): string;
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): string;
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {string} layout The new value.
		 * @returns {void}          
		 */
		setLayout? (layout: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setLayout).
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {string} segmenter The new value.
		 * @returns {void}             
		 */
		setSegmenter? (segmenter: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setSegmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setSegmenter).
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	/** 
	 * [Ext.chart.axis.Category3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html)
	 * Category 3D Axis
	 */
	class Category3D extends Ext.chart.axis.Axis3D {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Mapping data value into coordinate.
		 * @method
		 * @public (method)
		 * @param   {any}                      value
		 * @param   {string}                   field
		 * @param   {number}                   [idx]
		 * @param   {Ext.util.MixedCollection} [items]
		 * @returns {number}                           
		 */
		getCoordFor? (value: any, field: string, idx?: number, items?: Ext.util.MixedCollection): number;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): string;
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): string;
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {string} layout The new value.
		 * @returns {void}          
		 */
		setLayout? (layout: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setLayout).
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {string} segmenter The new value.
		 * @returns {void}             
		 */
		setSegmenter? (segmenter: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setSegmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setSegmenter).
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * Returns the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getDepth? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} series
		 * @param   {object} depth
		 * @returns {void}          
		 */
		onSeriesDepthChange? (series: object, depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @param   {number} depth The new value.
		 * @returns {void}         
		 */
		setDepth? (depth: number): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} depth
		 * @returns {void}         
		 */
		updateDepth? (depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	/** 
	 * [Ext.chart.axis.Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * An axis to handle numeric values. This axis is used for quantitative data as
	 * opposed to the category axis. You can set minimum and maximum values to the
	 * axis so that the values are bound to that. If no values are set, then the
	 * scale will auto-adjust to the values.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 1,
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 2,
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 3,
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 4,
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 5,
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'numeric',
	 *           position: 'left',
	 *           minimum: 0,
	 *           fields: ['data1', 'data2', 'data3'],
	 *           title: 'Sample Values',
	 *           grid: {
	 *               odd: {
	 *                   opacity: 1,
	 *                   fill: '#F2F2F2',
	 *                   stroke: '#DDD',
	 *                   'lineWidth': 1
	 *               }
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example we create an axis of Numeric type. We set a minimum value so that
	 * even if all series have values greater than zero, the grid starts at zero. We bind
	 * the axis onto the left part of the surface by setting _position_ to _left_.
	 * We bind three different store fields to this axis by setting _fields_ to an array.
	 * We set the title of the axis to _Number of Hits_ by using the _title_ property.
	 * We use a _grid_ configuration to set odd background rows to a certain style and even rows
	 * to be transparent/ignored.
	 */
	class Numeric extends Ext.chart.axis.Axis {
		/** 
		 * @property
		 * @private (property)
		 * @default 'numeric'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getAggregator? (): string;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Mapping data value into coordinate.
		 * @method
		 * @public (method)
		 * @param   {any}                      value
		 * @param   {string}                   field
		 * @param   {number}                   [idx]
		 * @param   {Ext.util.MixedCollection} [items]
		 * @returns {number}                           
		 */
		getCoordFor? (value: any, field: string, idx?: number, items?: Ext.util.MixedCollection): number;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): string;
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): string;
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {string} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: string): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {string} layout The new value.
		 * @returns {void}          
		 */
		setLayout? (layout: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setLayout).
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {string} segmenter The new value.
		 * @returns {void}             
		 */
		setSegmenter? (segmenter: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setSegmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setSegmenter).
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	class Numeric3D extends Ext.chart.axis.Axis3D {
		/** 
		 * @property
		 * @private (property)
		 * @default 'numeric3d'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getAggregator? (): string;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Mapping data value into coordinate.
		 * @method
		 * @public (method)
		 * @param   {any}                      value
		 * @param   {string}                   field
		 * @param   {number}                   [idx]
		 * @param   {Ext.util.MixedCollection} [items]
		 * @returns {number}                           
		 */
		getCoordFor? (value: any, field: string, idx?: number, items?: Ext.util.MixedCollection): number;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): string;
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): string;
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {string} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: string): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {string} layout The new value.
		 * @returns {void}          
		 */
		setLayout? (layout: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setLayout).
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {string} segmenter The new value.
		 * @returns {void}             
		 */
		setSegmenter? (segmenter: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setSegmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setSegmenter).
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * Returns the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getDepth? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} series
		 * @param   {object} depth
		 * @returns {void}          
		 */
		onSeriesDepthChange? (series: object, depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @param   {number} depth The new value.
		 * @returns {void}         
		 */
		setDepth? (depth: number): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} depth
		 * @returns {void}         
		 */
		updateDepth? (depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	/** 
	 * [Ext.chart.axis.Time](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html)
	 * A type of axis whose units are measured in time values. Use this axis
	 * for listing dates that you will want to group or dynamically change.
	 * If you just want to display dates as categories then use the
	 * Category class for axis instead.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['time', 'open', 'high', 'low', 'close'],
	 *           data: [{
	 *               'time': new Date('Jan 1 2010').getTime(),
	 *               'open': 600,
	 *               'high': 614,
	 *               'low': 578,
	 *               'close': 590
	 *           }, {
	 *               'time': new Date('Jan 2 2010').getTime(),
	 *               'open': 590,
	 *               'high': 609,
	 *               'low': 580,
	 *               'close': 580
	 *           }, {
	 *               'time': new Date('Jan 3 2010').getTime(),
	 *               'open': 580,
	 *               'high': 602,
	 *               'low': 578,
	 *               'close': 602
	 *           }, {
	 *               'time': new Date('Jan 4 2010').getTime(),
	 *               'open': 602,
	 *               'high': 614,
	 *               'low': 586,
	 *               'close': 586
	 *           }]
	 *       },
	 *       axes: [{
	 *           type: 'numeric',
	 *           position: 'left',
	 *           fields: ['open', 'high', 'low', 'close'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           grid: true,
	 *           minimum: 560,
	 *           maximum: 640
	 *       }, {
	 *           type: 'time',
	 *           position: 'bottom',
	 *           fields: ['time'],
	 *           fromDate: new Date('Dec 31 2009'),
	 *           toDate: new Date('Jan 5 2010'),
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           style: {
	 *               axisLine: false
	 *           }
	 *       }],
	 *       series: {
	 *           type: 'candlestick',
	 *           xField: 'time',
	 *           openField: 'open',
	 *           highField: 'high',
	 *           lowField: 'low',
	 *           closeField: 'close',
	 *           style: {
	 *               ohlcType: 'ohlc',
	 *               dropStyle: {
	 *                   fill: 'rgb(255, 128, 128)',
	 *                   stroke: 'rgb(255, 128, 128)',
	 *                   lineWidth: 3
	 *               },
	 *               raiseStyle: {
	 *                   fill: 'rgb(48, 189, 167)',
	 *                   stroke: 'rgb(48, 189, 167)',
	 *                   lineWidth: 3
	 *               }
	 *           }
	 *       }
	 *    });
	 * 
	 */
	class Time extends Ext.chart.axis.Numeric {
		/** 
		 * @property
		 * @private (property)
		 * @default 'time'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getAggregator? (): string;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [calculateByLabelSize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-calculateByLabelSize).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCalculateByLabelSize? (): boolean;
		/** 
		 * Returns the value of [dateFormat](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getDateFormat? (): string;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [fromDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-fromDate).
		 * @method
		 * @public (method)
		 * @returns {Date}  
		 */
		getFromDate? (): ExtGlobalDate;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): string;
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): string;
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [toDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-toDate).
		 * @method
		 * @public (method)
		 * @returns {Date}  
		 */
		getToDate? (): ExtGlobalDate;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {string} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: string): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [calculateByLabelSize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-calculateByLabelSize).
		 * @method
		 * @public (method)
		 * @param   {boolean} calculateByLabelSize The new value.
		 * @returns {void}                         
		 */
		setCalculateByLabelSize? (calculateByLabelSize: boolean): void;
		/** 
		 * Sets the value of [dateFormat](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @param   {string} dateFormat The new value.
		 * @returns {void}              
		 */
		setDateFormat? (dateFormat: string): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [fromDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-fromDate).
		 * @method
		 * @public (method)
		 * @param   {Date} fromDate The new value.
		 * @returns {void}          
		 */
		setFromDate? (fromDate: ExtGlobalDate): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {string} layout The new value.
		 * @returns {void}          
		 */
		setLayout? (layout: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setLayout).
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {string} segmenter The new value.
		 * @returns {void}             
		 */
		setSegmenter? (segmenter: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setSegmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setSegmenter).
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [toDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-toDate).
		 * @method
		 * @public (method)
		 * @param   {Date} toDate The new value.
		 * @returns {void}        
		 */
		setToDate? (toDate: ExtGlobalDate): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
	class Time3D extends Ext.chart.axis.Numeric3D {
		/** 
		 * @property
		 * @private (property)
		 * @default 'time3d'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getAdjustByMajorUnit? (): boolean;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getAggregator? (): string;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [calculateByLabelSize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-calculateByLabelSize).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getCalculateByLabelSize? (): boolean;
		/** 
		 * Returns the value of [dateFormat](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @returns {string|boolean}  
		 */
		getDateFormat? (): string | boolean;
		/** 
		 * Returns the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getFields? (): any[];
		/** 
		 * Returns the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @returns {number|object}  
		 */
		getFloating? (): number | object;
		/** 
		 * Returns the value of [fromDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-fromDate).
		 * @method
		 * @public (method)
		 * @returns {Date}  
		 */
		getFromDate? (): ExtGlobalDate;
		/** 
		 * Returns the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getGrid? (): object;
		/** 
		 * Returns the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getHidden? (): boolean;
		/** 
		 * Returns the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getIncrement? (): number;
		/** 
		 * Returns the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getLabel? (): object;
		/** 
		 * Returns the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getLabelInSpan? (): boolean;
		/** 
		 * Returns the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.layout.Layout}  
		 */
		getLayout? (): string;
		getLayout? (): object | Ext.chart.axis.layout.Layout;
		/** 
		 * Returns the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @returns {any[]|object}  
		 */
		getLimits? (): any[] | object;
		/** 
		 * Returns the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @returns {Ext.chart.axis.Axis|string|number}  
		 */
		getLinkedTo? (): Ext.chart.axis.Axis | string | number;
		/** 
		 * Returns the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMajorTickSteps? (): number;
		/** 
		 * Returns the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMargin? (): number;
		/** 
		 * Returns the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaxZoom? (): number;
		/** 
		 * Returns the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMaximum? (): number;
		/** 
		 * Returns the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinZoom? (): number;
		/** 
		 * Returns the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinimum? (): number;
		/** 
		 * Returns the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getMinorTickSteps? (): number;
		/** 
		 * Returns the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getNeedHighPrecision? (): boolean;
		/** 
		 * Returns the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getPosition? (): string;
		/** 
		 * Get the range derived from all the bound series.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRange? (): any[];
		/** 
		 * Returns the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getReconcileRange? (): boolean;
		/** 
		 * Returns the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getRenderer? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @returns {string|object|Ext.chart.axis.segmenter.Segmenter}  
		 */
		getSegmenter? (): string;
		getSegmenter? (): object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * Returns the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getStyle? (): object;
		/** 
		 * Returns the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @returns {string|object}  
		 */
		getTitle? (): string | object;
		/** 
		 * Returns the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getTitleMargin? (): number;
		/** 
		 * Returns the value of [toDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-toDate).
		 * @method
		 * @public (method)
		 * @returns {Date}  
		 */
		getToDate? (): ExtGlobalDate;
		/** 
		 * Returns the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getVisibleRange? (): any[];
		/** 
		 * Expands the range of the axis
		 * based on the range of other axes with the same direction (if any).
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		reconcileRange? (): void;
		/** 
		 * Invokes renderFrame on this axis's surface(s)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [adjustByMajorUnit](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-adjustByMajorUnit).
		 * @method
		 * @public (method)
		 * @param   {boolean} adjustByMajorUnit The new value.
		 * @returns {void}                      
		 */
		setAdjustByMajorUnit? (adjustByMajorUnit: boolean): void;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {string} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: string): void;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [calculateByLabelSize](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-calculateByLabelSize).
		 * @method
		 * @public (method)
		 * @param   {boolean} calculateByLabelSize The new value.
		 * @returns {void}                         
		 */
		setCalculateByLabelSize? (calculateByLabelSize: boolean): void;
		/** 
		 * Sets the value of [dateFormat](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-dateFormat).
		 * @method
		 * @public (method)
		 * @param   {string|boolean} dateFormat The new value.
		 * @returns {void}                      
		 */
		setDateFormat? (dateFormat: string | boolean): void;
		/** 
		 * Sets the value of [fields](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-fields).
		 * @method
		 * @public (method)
		 * @param   {any[]} fields The new value.
		 * @returns {void}         
		 */
		setFields? (fields: any[]): void;
		/** 
		 * Sets the value of [floating](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-floating).
		 * @method
		 * @public (method)
		 * @param   {number|object} floating The new value.
		 * @returns {void}                   
		 */
		setFloating? (floating: number | object): void;
		/** 
		 * Sets the value of [fromDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-fromDate).
		 * @method
		 * @public (method)
		 * @param   {Date} fromDate The new value.
		 * @returns {void}          
		 */
		setFromDate? (fromDate: ExtGlobalDate): void;
		/** 
		 * Sets the value of [grid](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-grid).
		 * @method
		 * @public (method)
		 * @param   {object} grid The new value.
		 * @returns {void}        
		 */
		setGrid? (grid: object): void;
		/** 
		 * Sets the value of [hidden](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-hidden).
		 * @method
		 * @public (method)
		 * @param   {boolean} hidden The new value.
		 * @returns {void}           
		 */
		setHidden? (hidden: boolean): void;
		/** 
		 * Sets the value of [increment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-increment).
		 * @method
		 * @public (method)
		 * @param   {number} increment The new value.
		 * @returns {void}             
		 */
		setIncrement? (increment: number): void;
		/** 
		 * Sets the value of [label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-label).
		 * @method
		 * @public (method)
		 * @param   {object} label The new value.
		 * @returns {void}         
		 */
		setLabel? (label: object): void;
		/** 
		 * Sets the value of [labelInSpan](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-labelInSpan).
		 * @method
		 * @public (method)
		 * @param   {boolean} labelInSpan The new value.
		 * @returns {void}                
		 */
		setLabelInSpan? (labelInSpan: boolean): void;
		/** 
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {string} layout The new value.
		 * @returns {void}          
		 */
		setLayout? (layout: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setLayout).
		 * Sets the value of [layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-layout).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.layout.Layout} layout The new value.
		 * @returns {void}                                       
		 */
		setLayout? (layout: object | Ext.chart.axis.layout.Layout): void;
		/** 
		 * Sets the value of [limits](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-limits).
		 * @method
		 * @public (method)
		 * @param   {any[]|object} limits The new value.
		 * @returns {void}                
		 */
		setLimits? (limits: any[] | object): void;
		/** 
		 * Sets the value of [linkedTo](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-linkedTo).
		 * @method
		 * @public (method)
		 * @param   {Ext.chart.axis.Axis|string|number} linkedTo The new value.
		 * @returns {void}                                       
		 */
		setLinkedTo? (linkedTo: Ext.chart.axis.Axis | string | number): void;
		/** 
		 * Sets the value of [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} majorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMajorTickSteps? (majorTickSteps: number): void;
		/** 
		 * Sets the value of [margin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-margin).
		 * @method
		 * @public (method)
		 * @param   {number} margin The new value.
		 * @returns {void}          
		 */
		setMargin? (margin: number): void;
		/** 
		 * Sets the value of [maxZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maxZoom).
		 * @method
		 * @public (method)
		 * @param   {number} maxZoom The new value.
		 * @returns {void}           
		 */
		setMaxZoom? (maxZoom: number): void;
		/** 
		 * Sets the value of [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum).
		 * @method
		 * @public (method)
		 * @param   {number} maximum The new value.
		 * @returns {void}           
		 */
		setMaximum? (maximum: number): void;
		/** 
		 * Sets the value of [minZoom](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minZoom).
		 * @method
		 * @public (method)
		 * @param   {number} minZoom The new value.
		 * @returns {void}           
		 */
		setMinZoom? (minZoom: number): void;
		/** 
		 * Sets the value of [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum).
		 * @method
		 * @public (method)
		 * @param   {number} minimum The new value.
		 * @returns {void}           
		 */
		setMinimum? (minimum: number): void;
		/** 
		 * Sets the value of [minorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minorTickSteps).
		 * @method
		 * @public (method)
		 * @param   {number} minorTickSteps The new value.
		 * @returns {void}                  
		 */
		setMinorTickSteps? (minorTickSteps: number): void;
		/** 
		 * Sets the value of [needHighPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-needHighPrecision).
		 * @method
		 * @public (method)
		 * @param   {boolean} needHighPrecision The new value.
		 * @returns {void}                      
		 */
		setNeedHighPrecision? (needHighPrecision: boolean): void;
		/** 
		 * Sets the value of [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position).
		 * @method
		 * @public (method)
		 * @param   {string} position The new value.
		 * @returns {void}            
		 */
		setPosition? (position: string): void;
		/** 
		 * Sets the value of [reconcileRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-reconcileRange).
		 * @method
		 * @public (method)
		 * @param   {boolean} reconcileRange The new value.
		 * @returns {void}                   
		 */
		setReconcileRange? (reconcileRange: boolean): void;
		/** 
		 * Sets the value of [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-renderer).
		 * @method
		 * @public (method)
		 * @param   {Function} renderer The new value.
		 * @returns {string}            The label to display.
		 */
		setRenderer? (renderer: ExtGlobalFunction): string;
		/** 
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {string} segmenter The new value.
		 * @returns {void}             
		 */
		setSegmenter? (segmenter: string): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.axis.Axis.setSegmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-setSegmenter).
		 * Sets the value of [segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-segmenter).
		 * @method
		 * @public (method)
		 * @param   {object|Ext.chart.axis.segmenter.Segmenter} segmenter The new value.
		 * @returns {void}                                                
		 */
		setSegmenter? (segmenter: object | Ext.chart.axis.segmenter.Segmenter): void;
		/** 
		 * Sets the value of [style](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-style).
		 * @method
		 * @public (method)
		 * @param   {object} style The new value.
		 * @returns {void}         
		 */
		setStyle? (style: object): void;
		/** 
		 * Sets the value of [title](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-title).
		 * @method
		 * @public (method)
		 * @param   {string|object} title The new value.
		 * @returns {void}                
		 */
		setTitle? (title: string | object): void;
		/** 
		 * Sets the value of [titleMargin](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-titleMargin).
		 * @method
		 * @public (method)
		 * @param   {number} titleMargin The new value.
		 * @returns {void}               
		 */
		setTitleMargin? (titleMargin: number): void;
		/** 
		 * Sets the value of [toDate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html#cfg-toDate).
		 * @method
		 * @public (method)
		 * @param   {Date} toDate The new value.
		 * @returns {void}        
		 */
		setToDate? (toDate: ExtGlobalDate): void;
		/** 
		 * Sets the value of [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange).
		 * @method
		 * @public (method)
		 * @param   {any[]} visibleRange The new value.
		 * @returns {void}               
		 */
		setVisibleRange? (visibleRange: any[]): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @returns {Ext.chart.AbstractChart}  
		 */
		getChart? (): Ext.chart.AbstractChart;
		/** 
		 * Invoked when data has changed.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		processData? (): void;
		/** 
		 * Sets the value of [chart](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-chart).
		 * @method
		 * @protected (method)
		 * @param   {Ext.chart.AbstractChart} chart The new value.
		 * @returns {void}                          
		 */
		setChart? (chart: Ext.chart.AbstractChart): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @returns {void}              
		 */
		applyBackground? (background: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} fields
		 * @returns {void}          
		 */
		applyFields? (fields: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} floating
		 * @param   {object} oldFloating
		 * @returns {void}               
		 */
		applyFloating? (floating: object, oldFloating: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		applyGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newText
		 * @param   {object} oldText
		 * @returns {void}           
		 */
		applyLabel? (newText: object, oldText: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} layout
		 * @param   {object} oldLayout
		 * @returns {void}             
		 */
		applyLayout? (layout: object, oldLayout: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} length
		 * @param   {object} oldLength
		 * @returns {void}             
		 */
		applyLength? (length: object, oldLength: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} pos
		 * @returns {void}       
		 */
		applyPosition? (pos: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newRange
		 * @returns {void}            
		 */
		applyRange? (newRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		applyRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} segmenter
		 * @param   {object} oldSegmenter
		 * @returns {void}                
		 */
		applySegmenter? (segmenter: object, oldSegmenter: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} style
		 * @param   {object} oldStyle
		 * @returns {void}            
		 */
		applyStyle? (style: object, oldStyle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} title
		 * @param   {object} oldTitle
		 * @returns {void}            
		 */
		applyTitle? (title: object, oldTitle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @param   {object} oldVisibleRange
		 * @returns {void}                   
		 */
		applyVisibleRange? (visibleRange: object, oldVisibleRange: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearRange? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getAlignment? (): string;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAncestorIds? (): void;
		/** 
		 * Returns the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @returns {any[]}  
		 */
		getCenter? (): any[];
		/** 
		 * Returns the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getDepth? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getDirection? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {string}  
		 */
		getGridAlignment? (): string;
		/** 
		 * Methods used in ComponentQuery and controller
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getItemId? (): void;
		/** 
		 * Returns the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getLength? (): number;
		/** 
		 * Returns the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRadius? (): number;
		/** 
		 * Returns the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @returns {number}  
		 */
		getRotation? (): number;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSprites? (): void;
		/** 
		 * Get the surface for drawing the series sprites
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getSurface? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getThickness? (): void;
		/** 
		 * Returns the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @returns {object}  
		 */
		getTotalAngle? (): object;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		hideLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isSide? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} xtype
		 * @returns {void}         
		 */
		isXType? (xtype: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @returns {void}              
		 */
		linkAxis? (masterAxis: object): void;
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
		 * @param   {object} data
		 * @returns {void}        
		 */
		onDataChange? (data: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} masterAxis
		 * @param   {object} range
		 * @returns {void}              
		 */
		onMasterAxisRangeChange? (masterAxis: object, range: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} chart
		 * @returns {void}         
		 */
		onSeriesChange? (chart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} series
		 * @param   {object} depth
		 * @returns {void}          
		 */
		onSeriesDepthChange? (series: object, depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onThicknessChanged? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		performLayout? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderLimits? (): void;
		/** 
		 * Override the Observable's method to redirect listener scope
		 * resolution to the chart.
		 * @method
		 * @private (method)
		 * @param   {object} defaultScope
		 * @returns {void}                
		 */
		resolveListenerScope? (defaultScope: object): void;
		/** 
		 * Sets the value of [center](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-center).
		 * @method
		 * @private (method)
		 * @param   {any[]} center The new value.
		 * @returns {void}         
		 */
		setCenter? (center: any[]): void;
		/** 
		 * Sets the value of [depth](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html#cfg-depth).
		 * @method
		 * @private (method)
		 * @param   {number} depth The new value.
		 * @returns {void}         
		 */
		setDepth? (depth: number): void;
		/** 
		 * Sets the value of [length](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-length).
		 * @method
		 * @private (method)
		 * @param   {number} length The new value.
		 * @returns {void}          
		 */
		setLength? (length: number): void;
		/** 
		 * Sets the value of [radius](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-radius).
		 * @method
		 * @private (method)
		 * @param   {number} radius The new value.
		 * @returns {void}          
		 */
		setRadius? (radius: number): void;
		/** 
		 * Sets the value of [rotation](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-rotation).
		 * @method
		 * @private (method)
		 * @param   {number} rotation The new value.
		 * @returns {void}            
		 */
		setRotation? (rotation: number): void;
		/** 
		 * Sets the value of [totalAngle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-totalAngle).
		 * @method
		 * @private (method)
		 * @param   {object} totalAngle The new value.
		 * @returns {void}              
		 */
		setTotalAngle? (totalAngle: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		showLabels? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} center
		 * @returns {void}          
		 */
		updateCenter? (center: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} newChart
		 * @param   {object} oldChart
		 * @returns {void}            
		 */
		updateChart? (newChart: object, oldChart: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} depth
		 * @returns {void}         
		 */
		updateDepth? (depth: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} grid
		 * @returns {void}        
		 */
		updateGrid? (grid: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMaximum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateMinimum? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} minorTickSteps
		 * @returns {void}                  
		 */
		updateMinorTickSteps? (minorTickSteps: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rotation
		 * @returns {void}            
		 */
		updateRotation? (rotation: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} theme
		 * @returns {void}         
		 */
		updateTheme? (theme: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTitleSprite? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} visibleRange
		 * @returns {void}                
		 */
		updateVisibleRange? (visibleRange: object): void;
	}
}
declare namespace Ext.chart.axis.Axis {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html)
	 * Defines axis for charts.
	 * 
	 * Using the current model, the type of axis can be easily extended. By default, Sencha Charts provide three different
	 * types of axis:
	 * 
	 * - **numeric** - the data attached to this axis is numeric and continuous.
	 * - **time** - the data attached to this axis is (or gets converted into) a date/time value; it is continuous.
	 * - **category** - the data attached to this axis belongs to a finite set. The data points are evenly placed along the axis.
	 * 
	 * The behavior of an axis can be easily changed by setting different types of axis layout and axis segmenter to the axis.
	 * 
	 * Axis layout defines how the data points are placed. Using continuous layout, the data points will be distributed by
	 * the numeric value. Using discrete layout the data points will be spaced evenly. Furthermore, if you want to combine
	 * the data points with the duplicate values in a discrete layout, you should use combineDuplicate layout.
	 * 
	 * Segmenter defines the way to segment data range. For example, if you have a Date-type data range from Jan 1, 1997 to
	 * Jan 1, 2017, the segmenter will segement the data range into years, months or days based on the current zooming
	 * level.
	 * 
	 * It is possible to write custom axis layouts and segmenters to extends this behavior by simply implementing interfaces
	 * [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html) and [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html).
	 * 
	 * Here's an example for the axes part of a chart definition:
	 * An example of axis for a series (in this case for an area chart that has multiple layers of yFields) could be:
	 * 
	 *    axes: [{
	 *        type: 'numeric',
	 *        position: 'left',
	 *        title: 'Number of Hits',
	 *        grid: {
	 *            odd: {
	 *                opacity: 1,
	 *                fill: '#ddd',
	 *                stroke: '#bbb',
	 *                lineWidth: 1
	 *            }
	 *        },
	 *        minimum: 0
	 *    }, {
	 *        type: 'category',
	 *        position: 'bottom',
	 *        title: 'Month of the Year',
	 *        grid: true,
	 *        label: {
	 *            rotate: {
	 *                degrees: 315
	 *            }
	 *        }
	 *    }]
	 * 
	 * In this case we use a `numeric` axis for displaying the values of the Area series and a `category` axis for displaying the names of
	 * the store elements. The numeric axis is placed on the left of the screen, while the category axis is placed at the bottom of the chart.
	 * Both the category and numeric axes have `grid` set, which means that horizontal and vertical lines will cover the chart background. In the
	 * category axis the labels will be rotated so they can fit the space better.
	 */
	interface Def extends Ext.chart.axis.Axis {
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
		 * @type {Ext.chart.axis.Axis.Cfg}
		 */
		config?: Ext.chart.axis.Axis.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Axis3D {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Axis3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html)
	 * Defines a 3D axis for charts.
	 * 
	 * A 3D axis has the same properties as the regular [axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html),
	 * plus a notion of depth. The depth of the 3D axis is determined automatically
	 * based on the depth of the bound series.
	 * 
	 * This type of axis has the following limitations compared to the regular axis class:
	 * 
	 * - supported [positions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position) are 'left' and 'bottom' only;
	 * - floating axes are not supported.
	 * 
	 * At the present moment only [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Bar3D.html) series can make use of the 3D axis.
	 */
	interface Def extends Ext.chart.axis.Axis3D {
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
		 * @type {Ext.chart.axis.Axis3D.Cfg}
		 */
		config?: Ext.chart.axis.Axis3D.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Category {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Category](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html)
	 * A type of axis that displays items in categories. This axis is generally used to
	 * display categorical information like names of items, month names, quarters, etc.
	 * but no quantitative values. For that other type of information [Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * axis are more suitable.
	 * 
	 * As with other axis you can set the position of the axis and its title. For example:
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       innerPadding: '0 40 0 40',
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 'metric one',
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric two',
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 'metric three',
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric four',
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 'metric five',
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'category',
	 *           position: 'bottom',
	 *           fields: ['name'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example with set the category axis to the bottom of the surface, bound the axis to
	 * the `name` property and set as title "Sample Values".
	 */
	interface Def extends Ext.chart.axis.Category {
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
		 * @type {Ext.chart.axis.Category.Cfg}
		 */
		config?: Ext.chart.axis.Category.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Category3D {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Category3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html)
	 * Category 3D Axis
	 */
	interface Def extends Ext.chart.axis.Category3D {
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
		 * @type {Ext.chart.axis.Category3D.Cfg}
		 */
		config?: Ext.chart.axis.Category3D.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Numeric {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * An axis to handle numeric values. This axis is used for quantitative data as
	 * opposed to the category axis. You can set minimum and maximum values to the
	 * axis so that the values are bound to that. If no values are set, then the
	 * scale will auto-adjust to the values.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 1,
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 2,
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 3,
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 4,
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 5,
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'numeric',
	 *           position: 'left',
	 *           minimum: 0,
	 *           fields: ['data1', 'data2', 'data3'],
	 *           title: 'Sample Values',
	 *           grid: {
	 *               odd: {
	 *                   opacity: 1,
	 *                   fill: '#F2F2F2',
	 *                   stroke: '#DDD',
	 *                   'lineWidth': 1
	 *               }
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example we create an axis of Numeric type. We set a minimum value so that
	 * even if all series have values greater than zero, the grid starts at zero. We bind
	 * the axis onto the left part of the surface by setting _position_ to _left_.
	 * We bind three different store fields to this axis by setting _fields_ to an array.
	 * We set the title of the axis to _Number of Hits_ by using the _title_ property.
	 * We use a _grid_ configuration to set odd background rows to a certain style and even rows
	 * to be transparent/ignored.
	 */
	interface Def extends Ext.chart.axis.Numeric {
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
		 * @type {Ext.chart.axis.Numeric.Cfg}
		 */
		config?: Ext.chart.axis.Numeric.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Numeric3D {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Numeric3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html)
	 */
	interface Def extends Ext.chart.axis.Numeric3D {
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
		 * @type {Ext.chart.axis.Numeric3D.Cfg}
		 */
		config?: Ext.chart.axis.Numeric3D.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Time {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Time](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html)
	 * A type of axis whose units are measured in time values. Use this axis
	 * for listing dates that you will want to group or dynamically change.
	 * If you just want to display dates as categories then use the
	 * Category class for axis instead.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['time', 'open', 'high', 'low', 'close'],
	 *           data: [{
	 *               'time': new Date('Jan 1 2010').getTime(),
	 *               'open': 600,
	 *               'high': 614,
	 *               'low': 578,
	 *               'close': 590
	 *           }, {
	 *               'time': new Date('Jan 2 2010').getTime(),
	 *               'open': 590,
	 *               'high': 609,
	 *               'low': 580,
	 *               'close': 580
	 *           }, {
	 *               'time': new Date('Jan 3 2010').getTime(),
	 *               'open': 580,
	 *               'high': 602,
	 *               'low': 578,
	 *               'close': 602
	 *           }, {
	 *               'time': new Date('Jan 4 2010').getTime(),
	 *               'open': 602,
	 *               'high': 614,
	 *               'low': 586,
	 *               'close': 586
	 *           }]
	 *       },
	 *       axes: [{
	 *           type: 'numeric',
	 *           position: 'left',
	 *           fields: ['open', 'high', 'low', 'close'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           grid: true,
	 *           minimum: 560,
	 *           maximum: 640
	 *       }, {
	 *           type: 'time',
	 *           position: 'bottom',
	 *           fields: ['time'],
	 *           fromDate: new Date('Dec 31 2009'),
	 *           toDate: new Date('Jan 5 2010'),
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           style: {
	 *               axisLine: false
	 *           }
	 *       }],
	 *       series: {
	 *           type: 'candlestick',
	 *           xField: 'time',
	 *           openField: 'open',
	 *           highField: 'high',
	 *           lowField: 'low',
	 *           closeField: 'close',
	 *           style: {
	 *               ohlcType: 'ohlc',
	 *               dropStyle: {
	 *                   fill: 'rgb(255, 128, 128)',
	 *                   stroke: 'rgb(255, 128, 128)',
	 *                   lineWidth: 3
	 *               },
	 *               raiseStyle: {
	 *                   fill: 'rgb(48, 189, 167)',
	 *                   stroke: 'rgb(48, 189, 167)',
	 *                   lineWidth: 3
	 *               }
	 *           }
	 *       }
	 *    });
	 * 
	 */
	interface Def extends Ext.chart.axis.Time {
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
		 * @type {Ext.chart.axis.Time.Cfg}
		 */
		config?: Ext.chart.axis.Time.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Time3D {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.axis.Time3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html)
	 */
	interface Def extends Ext.chart.axis.Time3D {
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
		 * @type {Ext.chart.axis.Time3D.Cfg}
		 */
		config?: Ext.chart.axis.Time3D.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.chart.axis.Axis {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html)
	 * Defines axis for charts.
	 * 
	 * Using the current model, the type of axis can be easily extended. By default, Sencha Charts provide three different
	 * types of axis:
	 * 
	 * - **numeric** - the data attached to this axis is numeric and continuous.
	 * - **time** - the data attached to this axis is (or gets converted into) a date/time value; it is continuous.
	 * - **category** - the data attached to this axis belongs to a finite set. The data points are evenly placed along the axis.
	 * 
	 * The behavior of an axis can be easily changed by setting different types of axis layout and axis segmenter to the axis.
	 * 
	 * Axis layout defines how the data points are placed. Using continuous layout, the data points will be distributed by
	 * the numeric value. Using discrete layout the data points will be spaced evenly. Furthermore, if you want to combine
	 * the data points with the duplicate values in a discrete layout, you should use combineDuplicate layout.
	 * 
	 * Segmenter defines the way to segment data range. For example, if you have a Date-type data range from Jan 1, 1997 to
	 * Jan 1, 2017, the segmenter will segement the data range into years, months or days based on the current zooming
	 * level.
	 * 
	 * It is possible to write custom axis layouts and segmenters to extends this behavior by simply implementing interfaces
	 * [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html) and [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html).
	 * 
	 * Here's an example for the axes part of a chart definition:
	 * An example of axis for a series (in this case for an area chart that has multiple layers of yFields) could be:
	 * 
	 *    axes: [{
	 *        type: 'numeric',
	 *        position: 'left',
	 *        title: 'Number of Hits',
	 *        grid: {
	 *            odd: {
	 *                opacity: 1,
	 *                fill: '#ddd',
	 *                stroke: '#bbb',
	 *                lineWidth: 1
	 *            }
	 *        },
	 *        minimum: 0
	 *    }, {
	 *        type: 'category',
	 *        position: 'bottom',
	 *        title: 'Month of the Year',
	 *        grid: true,
	 *        label: {
	 *            rotate: {
	 *                degrees: 315
	 *            }
	 *        }
	 *    }]
	 * 
	 * In this case we use a `numeric` axis for displaying the values of the Area series and a `category` axis for displaying the names of
	 * the store elements. The numeric axis is placed on the left of the screen, while the category axis is placed at the bottom of the chart.
	 * Both the category and numeric axes have `grid` set, which means that horizontal and vertical lines will cover the chart background. In the
	 * category axis the labels will be rotated so they can fit the space better.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'continuous'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left`, `bottom`, `right`, `top`, `radial` and `angular`.
		 * @configuration
		 * @optional
		 * @default 'bottom'
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'numeric'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Axis3D {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Axis3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html)
	 * Defines a 3D axis for charts.
	 * 
	 * A 3D axis has the same properties as the regular [axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html),
	 * plus a notion of depth. The depth of the 3D axis is determined automatically
	 * based on the depth of the bound series.
	 * 
	 * This type of axis has the following limitations compared to the regular axis class:
	 * 
	 * - supported [positions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position) are 'left' and 'bottom' only;
	 * - floating axes are not supported.
	 * 
	 * At the present moment only [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Bar3D.html) series can make use of the 3D axis.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * The depth of the axis. Determined automatically.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		depth?: number;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'continuous'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left` and `bottom`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'numeric'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Category {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Category](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html)
	 * A type of axis that displays items in categories. This axis is generally used to
	 * display categorical information like names of items, month names, quarters, etc.
	 * but no quantitative values. For that other type of information [Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * axis are more suitable.
	 * 
	 * As with other axis you can set the position of the axis and its title. For example:
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       innerPadding: '0 40 0 40',
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 'metric one',
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric two',
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 'metric three',
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric four',
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 'metric five',
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'category',
	 *           position: 'bottom',
	 *           fields: ['name'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example with set the category axis to the bottom of the surface, bound the axis to
	 * the `name` property and set as title "Sample Values".
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'combineDuplicate'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left`, `bottom`, `right`, `top`, `radial` and `angular`.
		 * @configuration
		 * @optional
		 * @default 'bottom'
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'names'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Category3D {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Category3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html)
	 * Category 3D Axis
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * The depth of the axis. Determined automatically.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		depth?: number;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'combineDuplicate'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left` and `bottom`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'names'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Numeric {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * An axis to handle numeric values. This axis is used for quantitative data as
	 * opposed to the category axis. You can set minimum and maximum values to the
	 * axis so that the values are bound to that. If no values are set, then the
	 * scale will auto-adjust to the values.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 1,
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 2,
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 3,
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 4,
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 5,
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'numeric',
	 *           position: 'left',
	 *           minimum: 0,
	 *           fields: ['data1', 'data2', 'data3'],
	 *           title: 'Sample Values',
	 *           grid: {
	 *               odd: {
	 *                   opacity: 1,
	 *                   fill: '#F2F2F2',
	 *                   stroke: '#DDD',
	 *                   'lineWidth': 1
	 *               }
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example we create an axis of Numeric type. We set a minimum value so that
	 * even if all series have values greater than zero, the grid starts at zero. We bind
	 * the axis onto the left part of the surface by setting _position_ to _left_.
	 * We bind three different store fields to this axis by setting _fields_ to an array.
	 * We set the title of the axis to _Number of Hits_ by using the _title_ property.
	 * We use a _grid_ configuration to set odd background rows to a certain style and even rows
	 * to be transparent/ignored.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 'double'
		 * @type {string}
		 */
		aggregator?: string;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'continuous'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left`, `bottom`, `right`, `top`, `radial` and `angular`.
		 * @configuration
		 * @optional
		 * @default 'bottom'
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'numeric'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Numeric3D {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Numeric3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 'double'
		 * @type {string}
		 */
		aggregator?: string;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * The depth of the axis. Determined automatically.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		depth?: number;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'continuous'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left` and `bottom`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'numeric'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Time {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Time](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html)
	 * A type of axis whose units are measured in time values. Use this axis
	 * for listing dates that you will want to group or dynamically change.
	 * If you just want to display dates as categories then use the
	 * Category class for axis instead.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['time', 'open', 'high', 'low', 'close'],
	 *           data: [{
	 *               'time': new Date('Jan 1 2010').getTime(),
	 *               'open': 600,
	 *               'high': 614,
	 *               'low': 578,
	 *               'close': 590
	 *           }, {
	 *               'time': new Date('Jan 2 2010').getTime(),
	 *               'open': 590,
	 *               'high': 609,
	 *               'low': 580,
	 *               'close': 580
	 *           }, {
	 *               'time': new Date('Jan 3 2010').getTime(),
	 *               'open': 580,
	 *               'high': 602,
	 *               'low': 578,
	 *               'close': 602
	 *           }, {
	 *               'time': new Date('Jan 4 2010').getTime(),
	 *               'open': 602,
	 *               'high': 614,
	 *               'low': 586,
	 *               'close': 586
	 *           }]
	 *       },
	 *       axes: [{
	 *           type: 'numeric',
	 *           position: 'left',
	 *           fields: ['open', 'high', 'low', 'close'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           grid: true,
	 *           minimum: 560,
	 *           maximum: 640
	 *       }, {
	 *           type: 'time',
	 *           position: 'bottom',
	 *           fields: ['time'],
	 *           fromDate: new Date('Dec 31 2009'),
	 *           toDate: new Date('Jan 5 2010'),
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           style: {
	 *               axisLine: false
	 *           }
	 *       }],
	 *       series: {
	 *           type: 'candlestick',
	 *           xField: 'time',
	 *           openField: 'open',
	 *           highField: 'high',
	 *           lowField: 'low',
	 *           closeField: 'close',
	 *           style: {
	 *               ohlcType: 'ohlc',
	 *               dropStyle: {
	 *                   fill: 'rgb(255, 128, 128)',
	 *                   stroke: 'rgb(255, 128, 128)',
	 *                   lineWidth: 3
	 *               },
	 *               raiseStyle: {
	 *                   fill: 'rgb(48, 189, 167)',
	 *                   stroke: 'rgb(48, 189, 167)',
	 *                   lineWidth: 3
	 *               }
	 *           }
	 *       }
	 *    });
	 * 
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 'time'
		 * @type {string}
		 */
		aggregator?: string;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		calculateByLabelSize?: boolean;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * Indicates the format the date will be rendered in.
		 * For example: 'M d' will render the dates as 'Jan 30'.
		 * This config works by setting the [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-renderer) config
		 * to a function that uses Ext.Date.format to format the dates
		 * using the given `dateFormat`.
		 * If the [renderer](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html#cfg-renderer) config was set by the user, changes to this config
		 * won't replace the user set renderer (until the user removes the renderer by
		 * setting the `renderer` config to `null`). In this case the way the `dateFormat`
		 * is used (if at all) is up to the user.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		dateFormat?: string;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The starting date for the time axis.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalDate}
		 */
		fromDate?: ExtGlobalDate;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'continuous'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left`, `bottom`, `right`, `top`, `radial` and `angular`.
		 * @configuration
		 * @optional
		 * @default 'bottom'
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'time'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * The ending date for the time axis.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalDate}
		 */
		toDate?: ExtGlobalDate;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Time3D {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.axis.Time3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Whether to make the auto-calculated minimum and maximum of the axis
		 * a multiple of the interval between the major ticks of the axis.
		 * If [majorTickSteps](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-majorTickSteps), [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) or [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum)
		 * configs have been set, this config will be ignored.
		 * Defaults to 'true'.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		adjustByMajorUnit?: boolean;
		/** 
		 * @configuration
		 * @optional
		 * @default 'time'
		 * @type {string}
		 */
		aggregator?: string;
		/** 
		 * The background config for the axis surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		calculateByLabelSize?: boolean;
		/** 
		 * Center of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		center?: any[];
		/** 
		 * The Chart that the Axis is bound.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.AbstractChart}
		 */
		chart?: Ext.chart.AbstractChart;
		/** 
		 * Indicates the format the date will be rendered on.
		 * For example: 'M d' will render the dates as 'Jan 30', etc.
		 * @configuration
		 * @optional
		 * @type {string|boolean}
		 */
		dateFormat?: string | boolean;
		/** 
		 * The depth of the axis. Determined automatically.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		depth?: number;
		/** 
		 * An array containing the names of the record fields which should be mapped along the axis.
		 * This is optional if the binding between series and fields is clear.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		fields?: any[];
		/** 
		 * If `floating` is a number, then it's a percentage displacement of the axis from its initial [position](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position)
		 * in the direction opposite to the axis' direction. For instance, '{position:"left", floating:75}' displays a vertical
		 * axis at 3/4 of the chart, starting from the left. It is equivalent to '{position:"right", floating:25}'.
		 * If `floating` is an object, then `floating.value` is the position of this axis along another axis,
		 * defined by `floating.alongAxis`, where `alongAxis` is an ID, an [Ext.chart.AbstractChart.axes](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.AbstractChart.html#cfg-axes) config index,
		 * or the other axis itself. `alongAxis` must have an opposite [alignment](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#method-getAlignment).
		 * For example:
		 * 
		 *     axes: [
		 *         {
		 *             title: 'Average Temperature (F)',
		 *             type: 'numeric',
		 *             position: 'left',
		 *             id: 'temperature-vertical-axis',
		 *             minimum: -30,
		 *             maximum: 130
		 *         },
		 *         {
		 *             title: 'Month (2013)',
		 *             type: 'category',
		 *             position: 'bottom',
		 *             floating: {
		 *                 value: 32,
		 *                 alongAxis: 'temperature-vertical-axis'
		 *             }
		 *         }
		 *     ]
		 * 
		 * @configuration
		 * @optional
		 * @type {number|object}
		 */
		floating?: number | object;
		/** 
		 * The starting date for the time axis.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalDate}
		 */
		fromDate?: ExtGlobalDate;
		/** 
		 * The grid configuration object for the Axis style. Can contain `stroke` or `fill` attributes.
		 * Also may contain an `odd` or `even` property in which you only style things on odd or even rows.
		 * For example:
		 * 
		 *    grid {
		 *        odd: {
		 *            stroke: '#555'
		 *        },
		 *        even: {
		 *            stroke: '#ccc'
		 *        }
		 *    }
		 * 
		 * @configuration
		 * @optional
		 * @default false
		 * @type {object}
		 */
		grid?: object;
		/** 
		 * Indicate whether to hide the axis.
		 * If the axis is hidden, one of the axis line, ticks, labels or the title will be shown and
		 * no margin will be taken.
		 * The coordination mechanism works fine no matter if the axis is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Given a minimum and maximum bound for the series to be rendered (that can be obtained
		 * automatically or by manually setting `minimum` and `maximum`) tick marks will be added
		 * on each `increment` from the minimum value to the maximum one.
		 * @configuration
		 * @optional
		 * @default 0.5
		 * @type {number}
		 */
		increment?: number;
		/** 
		 * The label configuration object for the Axis. This object may include style attributes
		 * like `spacing`, `padding`, `font` that receives a string or number and
		 * returns a new string with the modified values.
		 * 
		 * For more supported values, see the configurations for [Ext.chart.sprite.Label](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.sprite.Label.html).
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		label?: object;
		/** 
		 * Draws the labels in the middle of the spans.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		labelInSpan?: boolean;
		/** 
		 * The axis layout config. See [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html)
		 * @configuration
		 * @optional
		 * @default 'continuous'
		 * @type {object|Ext.chart.axis.layout.Layout}
		 */
		layout?: object | Ext.chart.axis.layout.Layout;
		/** 
		 * Length of the axis position. Equals to the size of inner rect on the docking side of this axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		length?: number;
		/** 
		 * The limit lines configuration for the axis.
		 * For example:
		 * 
		 *    limits: [{
		 *        value: 50,
		 *        line: {
		 *            strokeStyle: 'red',
		 *            lineDash: [6, 3],
		 *            title: {
		 *                text: 'Monthly minimum',
		 *                fontSize: 14
		 *            }
		 *        }
		 *    }]
		 * 
		 * @configuration
		 * @optional
		 * @type {any[]|object}
		 */
		limits?: any[] | object;
		/** 
		 * Axis (itself, its ID or index) that this axis is linked to.
		 * When an axis is linked to a master axis, it will use the same data as the master axis.
		 * It can be used to show additional info, or to ease reading the chart by duplicating the scales.
		 * @configuration
		 * @optional
		 * @type {Ext.chart.axis.Axis|string|number}
		 */
		linkedTo?: Ext.chart.axis.Axis | string | number;
		/** 
		 * Forces the number of major ticks to the specified value.
		 * Both [minimum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-minimum) and [maximum](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-maximum) should be specified.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		majorTickSteps?: number;
		/** 
		 * The margin of the axis. Used to control the spacing between axes in charts with multiple axes.
		 * Unlike CSS where the margin is added on all 4 sides of an element, the `margin` is the total space
		 * that is added horizontally for a vertical axis, vertically for a horizontal axis,
		 * and radially for an angular axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
		/** 
		 * The maximum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 10000
		 * @type {number}
		 */
		maxZoom?: number;
		/** 
		 * The maximum value drawn by the axis. If not set explicitly, the axis
		 * maximum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		maximum?: number;
		/** 
		 * The minimum zooming level for axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		minZoom?: number;
		/** 
		 * The minimum value drawn by the axis. If not set explicitly, the axis
		 * minimum will be calculated automatically.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		minimum?: number;
		/** 
		 * The number of small ticks between two major ticks.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		minorTickSteps?: number;
		/** 
		 * Indicates that the axis needs high precision surface implementation.
		 * See [Ext.draw.engine.Canvas.highPrecision](https://docs.sencha.com/extjs/6.2.0/classic/Ext.draw.engine.Canvas.html#cfg-highPrecision)
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		needHighPrecision?: boolean;
		/** 
		 * Where to set the axis. Available options are `left` and `bottom`.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		position?: string;
		/** 
		 * Radius of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * If 'true' the range of the axis will be a union of ranges
		 * of all the axes with the same direction. Defaults to 'false'.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		reconcileRange?: boolean;
		/** 
		 * Allows to change the text shown next to the tick.
		 * @configuration
		 * @optional
		 */
		renderer?: ExtGlobalFunction;
		/** 
		 * Rotation of the polar axis.
		 * WARNING: Meant to be set automatically by chart. Do not set it manually.
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		rotation?: number;
		/** 
		 * The segmenter config. See [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html)
		 * @configuration
		 * @optional
		 * @default 'time'
		 * @type {object|Ext.chart.axis.segmenter.Segmenter}
		 */
		segmenter?: object | Ext.chart.axis.segmenter.Segmenter;
		/** 
		 * The style for the axis line and ticks.
		 * Refer to the [Ext.chart.axis.sprite.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.sprite.Axis.html)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		style?: object;
		/** 
		 * The title for the Axis.
		 * If given a String, the 'text' attribute of the title sprite will be set,
		 * otherwise the style will be set.
		 * @configuration
		 * @optional
		 * @type {string|object}
		 */
		title?: string | object;
		/** 
		 * The margin around the axis title. Unlike CSS where the margin is added on all 4
		 * sides of an element, the `titleMargin` is the total space that is added horizontally
		 * for a vertical title and vertically for an horizontal title, with half the `titleMargin`
		 * being added on either side.
		 * @configuration
		 * @optional
		 * @default 4
		 * @type {number}
		 */
		titleMargin?: number;
		/** 
		 * The ending date for the time axis.
		 * @configuration
		 * @optional
		 * @type {ExtGlobalDate}
		 */
		toDate?: ExtGlobalDate;
		/** 
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		totalAngle?: object;
		/** 
		 * Specify the proportion of the axis to be rendered. The series bound to
		 * this axis will be synchronized and transformed accordingly.
		 * @configuration
		 * @optional
		 * @default [0, 1]
		 * @type {any[]}
		 */
		visibleRange?: any[];
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
declare namespace Ext.chart.axis.Axis {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html)
	 * Defines axis for charts.
	 * 
	 * Using the current model, the type of axis can be easily extended. By default, Sencha Charts provide three different
	 * types of axis:
	 * 
	 * - **numeric** - the data attached to this axis is numeric and continuous.
	 * - **time** - the data attached to this axis is (or gets converted into) a date/time value; it is continuous.
	 * - **category** - the data attached to this axis belongs to a finite set. The data points are evenly placed along the axis.
	 * 
	 * The behavior of an axis can be easily changed by setting different types of axis layout and axis segmenter to the axis.
	 * 
	 * Axis layout defines how the data points are placed. Using continuous layout, the data points will be distributed by
	 * the numeric value. Using discrete layout the data points will be spaced evenly. Furthermore, if you want to combine
	 * the data points with the duplicate values in a discrete layout, you should use combineDuplicate layout.
	 * 
	 * Segmenter defines the way to segment data range. For example, if you have a Date-type data range from Jan 1, 1997 to
	 * Jan 1, 2017, the segmenter will segement the data range into years, months or days based on the current zooming
	 * level.
	 * 
	 * It is possible to write custom axis layouts and segmenters to extends this behavior by simply implementing interfaces
	 * [Ext.chart.axis.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.layout.Layout.html) and [Ext.chart.axis.segmenter.Segmenter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.segmenter.Segmenter.html).
	 * 
	 * Here's an example for the axes part of a chart definition:
	 * An example of axis for a series (in this case for an area chart that has multiple layers of yFields) could be:
	 * 
	 *    axes: [{
	 *        type: 'numeric',
	 *        position: 'left',
	 *        title: 'Number of Hits',
	 *        grid: {
	 *            odd: {
	 *                opacity: 1,
	 *                fill: '#ddd',
	 *                stroke: '#bbb',
	 *                lineWidth: 1
	 *            }
	 *        },
	 *        minimum: 0
	 *    }, {
	 *        type: 'category',
	 *        position: 'bottom',
	 *        title: 'Month of the Year',
	 *        grid: true,
	 *        label: {
	 *            rotate: {
	 *                degrees: 315
	 *            }
	 *        }
	 *    }]
	 * 
	 * In this case we use a `numeric` axis for displaying the values of the Area series and a `category` axis for displaying the names of
	 * the store elements. The numeric axis is placed on the left of the screen, while the category axis is placed at the bottom of the chart.
	 * Both the category and numeric axes have `grid` set, which means that horizontal and vertical lines will cover the chart background. In the
	 * category axis the labels will be rotated so they can fit the space better.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Axis3D {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Axis3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis3D.html)
	 * Defines a 3D axis for charts.
	 * 
	 * A 3D axis has the same properties as the regular [axis](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html),
	 * plus a notion of depth. The depth of the 3D axis is determined automatically
	 * based on the depth of the bound series.
	 * 
	 * This type of axis has the following limitations compared to the regular axis class:
	 * 
	 * - supported [positions](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-position) are 'left' and 'bottom' only;
	 * - floating axes are not supported.
	 * 
	 * At the present moment only [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.series.Bar3D.html) series can make use of the 3D axis.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Category {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Category](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category.html)
	 * A type of axis that displays items in categories. This axis is generally used to
	 * display categorical information like names of items, month names, quarters, etc.
	 * but no quantitative values. For that other type of information [Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * axis are more suitable.
	 * 
	 * As with other axis you can set the position of the axis and its title. For example:
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       innerPadding: '0 40 0 40',
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 'metric one',
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric two',
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 'metric three',
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 'metric four',
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 'metric five',
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'category',
	 *           position: 'bottom',
	 *           fields: ['name'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example with set the category axis to the bottom of the surface, bound the axis to
	 * the `name` property and set as title "Sample Values".
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Category3D {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Category3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Category3D.html)
	 * Category 3D Axis
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Numeric {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Numeric](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric.html)
	 * An axis to handle numeric values. This axis is used for quantitative data as
	 * opposed to the category axis. You can set minimum and maximum values to the
	 * axis so that the values are bound to that. If no values are set, then the
	 * scale will auto-adjust to the values.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['name', 'data1', 'data2', 'data3'],
	 *           data: [{
	 *               'name': 1,
	 *               'data1': 10,
	 *               'data2': 12,
	 *               'data3': 14
	 *           }, {
	 *               'name': 2,
	 *               'data1': 7,
	 *               'data2': 8,
	 *               'data3': 16
	 *           }, {
	 *               'name': 3,
	 *               'data1': 5,
	 *               'data2': 2,
	 *               'data3': 14
	 *           }, {
	 *               'name': 4,
	 *               'data1': 2,
	 *               'data2': 14,
	 *               'data3': 6
	 *           }, {
	 *               'name': 5,
	 *               'data1': 27,
	 *               'data2': 38,
	 *               'data3': 36
	 *           }]
	 *       },
	 *       axes: {
	 *           type: 'numeric',
	 *           position: 'left',
	 *           minimum: 0,
	 *           fields: ['data1', 'data2', 'data3'],
	 *           title: 'Sample Values',
	 *           grid: {
	 *               odd: {
	 *                   opacity: 1,
	 *                   fill: '#F2F2F2',
	 *                   stroke: '#DDD',
	 *                   'lineWidth': 1
	 *               }
	 *           }
	 *       },
	 *       series: {
	 *           type: 'area',
	 *           subStyle: {
	 *               fill: ['#0A3F50', '#30BDA7', '#96D4C6']
	 *           },
	 *           xField: 'name',
	 *           yField: ['data1', 'data2', 'data3']
	 *       }
	 *    });
	 * 
	 * In this example we create an axis of Numeric type. We set a minimum value so that
	 * even if all series have values greater than zero, the grid starts at zero. We bind
	 * the axis onto the left part of the surface by setting _position_ to _left_.
	 * We bind three different store fields to this axis by setting _fields_ to an array.
	 * We set the title of the axis to _Number of Hits_ by using the _title_ property.
	 * We use a _grid_ configuration to set odd background rows to a certain style and even rows
	 * to be transparent/ignored.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Numeric3D {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Numeric3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Numeric3D.html)
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Time {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Time](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time.html)
	 * A type of axis whose units are measured in time values. Use this axis
	 * for listing dates that you will want to group or dynamically change.
	 * If you just want to display dates as categories then use the
	 * Category class for axis instead.
	 * 
	 *    Ext.create({
	 *       xtype: 'cartesian', 
	 *       renderTo: document.body,
	 *       width: 600,
	 *       height: 400,
	 *       store: {
	 *           fields: ['time', 'open', 'high', 'low', 'close'],
	 *           data: [{
	 *               'time': new Date('Jan 1 2010').getTime(),
	 *               'open': 600,
	 *               'high': 614,
	 *               'low': 578,
	 *               'close': 590
	 *           }, {
	 *               'time': new Date('Jan 2 2010').getTime(),
	 *               'open': 590,
	 *               'high': 609,
	 *               'low': 580,
	 *               'close': 580
	 *           }, {
	 *               'time': new Date('Jan 3 2010').getTime(),
	 *               'open': 580,
	 *               'high': 602,
	 *               'low': 578,
	 *               'close': 602
	 *           }, {
	 *               'time': new Date('Jan 4 2010').getTime(),
	 *               'open': 602,
	 *               'high': 614,
	 *               'low': 586,
	 *               'close': 586
	 *           }]
	 *       },
	 *       axes: [{
	 *           type: 'numeric',
	 *           position: 'left',
	 *           fields: ['open', 'high', 'low', 'close'],
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           grid: true,
	 *           minimum: 560,
	 *           maximum: 640
	 *       }, {
	 *           type: 'time',
	 *           position: 'bottom',
	 *           fields: ['time'],
	 *           fromDate: new Date('Dec 31 2009'),
	 *           toDate: new Date('Jan 5 2010'),
	 *           title: {
	 *               text: 'Sample Values',
	 *               fontSize: 15
	 *           },
	 *           style: {
	 *               axisLine: false
	 *           }
	 *       }],
	 *       series: {
	 *           type: 'candlestick',
	 *           xField: 'time',
	 *           openField: 'open',
	 *           highField: 'high',
	 *           lowField: 'low',
	 *           closeField: 'close',
	 *           style: {
	 *               ohlcType: 'ohlc',
	 *               dropStyle: {
	 *                   fill: 'rgb(255, 128, 128)',
	 *                   stroke: 'rgb(255, 128, 128)',
	 *                   lineWidth: 3
	 *               },
	 *               raiseStyle: {
	 *                   fill: 'rgb(48, 189, 167)',
	 *                   stroke: 'rgb(48, 189, 167)',
	 *                   lineWidth: 3
	 *               }
	 *           }
	 *       }
	 *    });
	 * 
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
declare namespace Ext.chart.axis.Time3D {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.chart.axis.Time3D](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Time3D.html)
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the [range](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#property-range) of the axis  changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               range
		 * @param   {object}              eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		rangechange? (axis: Ext.chart.axis.Axis, range: any[], eOpts: object): void;
		/** 
		 * Fires when the [visibleRange](https://docs.sencha.com/extjs/6.2.0/classic/Ext.chart.axis.Axis.html#cfg-visibleRange) of the axis changes.
		 * @event
		 * @param   {Ext.chart.axis.Axis} axis
		 * @param   {any[]}               visibleRange
		 * @param   {object}              eOpts        The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}                
		 */
		visiblerangechange? (axis: Ext.chart.axis.Axis, visibleRange: any[], eOpts: object): void;
	}
}
