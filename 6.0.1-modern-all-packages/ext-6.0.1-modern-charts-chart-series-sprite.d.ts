declare namespace Ext.chart.series.sprite {
	class Aggregative extends Ext.chart.series.sprite.Cartesian {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {dataHigh: 'data', dataLow: 'data', dataClose: 'data'}, aliases: {dataOpen: 'dataY'}, defaults: {dataHigh: null, dataLow: null, dataClose: null}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAggregator? (): object;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Aggregative;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @param   {object} clip
		 * @param   {object} rect
		 * @returns {void}           
		 */
		renderClipped? (surface: object, ctx: object, clip: object, rect: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.Cartesian.renderClipped](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html#method-renderClipped).
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                      [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {object} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: object): void;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                        matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                      [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Aggregative;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                     matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                      [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		 * @param   {object} aggregator
		 * @param   {object} oldAggr
		 * @returns {void}              
		 */
		applyAggregator? (aggregator: object, oldAggr: object): void;
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGapWidth? (): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Area](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Area.html)
	 * Area series sprite.
	 */
	class Area extends Ext.chart.series.sprite.StackedCartesian {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {step: 'bool'}, defaults: {step: false}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Area|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Area;
		hide? (): Ext.chart.series.sprite.StackedCartesian;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @param   {object} clip
		 * @returns {void}           
		 */
		renderClipped? (surface: object, ctx: object, clip: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.Cartesian.renderClipped](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html#method-renderClipped).
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                                                        [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Area|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Area;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                                                          matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                                                        [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Area|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Area;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Area|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Area;
		show? (): Ext.chart.series.sprite.StackedCartesian;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                                                       matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                                                        [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Area|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Area;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Bar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar.html)
	 * Draws a sprite used in the bar series.
	 */
	class Bar extends Ext.chart.series.sprite.StackedCartesian {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {minBarWidth: 'number', maxBarWidth: 'number', minGapWidth: 'number', radius: 'number', inGroupGapWidth: 'number'}, defaults: {minBarWidth: 2, maxBarWidth: 100, minGapWidth: 5, inGroupGapWidth: 3, radius: 0}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {object} x
		 * @param   {object} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: object, y: object): number;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.StackedCartesian.getIndexNearPoint](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.StackedCartesian.html#method-getIndexNearPoint).
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Bar;
		hide? (): Ext.chart.series.sprite.StackedCartesian;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                                                       [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Bar;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                                                         matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                                                       [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Bar;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Bar;
		show? (): Ext.chart.series.sprite.StackedCartesian;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                                                      matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                                                       [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Bar;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		 * @param   {object} ctx
		 * @param   {object} surface
		 * @param   {object} clip
		 * @param   {object} left
		 * @param   {object} top
		 * @param   {object} right
		 * @param   {object} bottom
		 * @param   {object} index
		 * @returns {void}           
		 */
		drawBar? (ctx: object, surface: object, clip: object, left: object, top: object, right: object, bottom: object, index: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} text
		 * @param   {object} dataX
		 * @param   {object} dataStartY
		 * @param   {object} dataY
		 * @param   {object} labelId
		 * @returns {void}              
		 */
		drawLabel? (text: object, dataX: object, dataStartY: object, dataY: object, labelId: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html)
	 * Draws a sprite used in [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Bar3D.html) series.
	 */
	class Bar3D extends Ext.chart.series.sprite.Bar {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {object} x
		 * @param   {object} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: object, y: object): number;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.StackedCartesian.getIndexNearPoint](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.StackedCartesian.html#method-getIndexNearPoint).
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [showStroke](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html#cfg-showStroke).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getShowStroke? (): boolean;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Bar3D|Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Bar3D;
		hide? (): Ext.chart.series.sprite.Bar;
		hide? (): Ext.chart.series.sprite.StackedCartesian;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                                                                                     [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Bar3D|Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Bar3D;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Bar;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [showStroke](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html#cfg-showStroke).
		 * @method
		 * @public (method)
		 * @param   {boolean} showStroke The new value.
		 * @returns {void}               
		 */
		setShowStroke? (showStroke: boolean): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                                                                                       matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                                                                                     [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Bar3D|Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Bar3D;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Bar;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Bar3D|Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Bar3D;
		show? (): Ext.chart.series.sprite.Bar;
		show? (): Ext.chart.series.sprite.StackedCartesian;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                                                                                    matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                                                                                     [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Bar3D|Ext.chart.series.sprite.Bar|Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Bar3D;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Bar;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		 * @param   {object} ctx
		 * @param   {object} surface
		 * @param   {object} clip
		 * @param   {object} left
		 * @param   {object} top
		 * @param   {object} right
		 * @param   {object} bottom
		 * @param   {object} index
		 * @returns {void}           
		 */
		drawBar? (ctx: object, surface: object, clip: object, left: object, top: object, right: object, bottom: object, index: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} text
		 * @param   {object} dataX
		 * @param   {object} dataStartY
		 * @param   {object} dataY
		 * @param   {object} labelId
		 * @returns {void}              
		 */
		drawLabel? (text: object, dataX: object, dataStartY: object, dataY: object, labelId: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Box](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Box.html)
	 * A sprite that represents a 3D bar or column.
	 * Used as an item template by the [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html) marker holder.
	 */
	class Box extends Ext.draw.sprite.Sprite {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {x: 'number', y: 'number', width: 'number', height: 'number', depth: 'number', orientation: 'enums(vertical,horizontal)', showStroke: 'bool', saturationFactor: 'number', brightnessFactor: 'number', colorSpread: 'number'}, triggers: {x: 'bbox', y: 'bbox', width: 'bbox', height: 'bbox', depth: 'bbox', orientation: 'bbox'}, defaults: {x: 0, y: 0, width: 8, height: 8, depth: 8, orientation: 'vertical', showStroke: false, saturationFactor: 1, brightnessFactor: 1, colorSpread: 1, lineJoin: 'bevel'}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Box|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Box;
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * @param   {boolean}                                            [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Box|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Box;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                              matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                            [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Box|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Box;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Box|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Box;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                           matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                            [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Box|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Box;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.CandleStick](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.CandleStick.html)
	 * CandleStick series sprite.
	 */
	class CandleStick extends Ext.chart.series.sprite.Aggregative {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAggregator? (): object;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.CandleStick|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.CandleStick;
		hide? (): Ext.chart.series.sprite.Aggregative;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @param   {object} clip
		 * @param   {object} rect
		 * @returns {void}           
		 */
		renderClipped? (surface: object, ctx: object, clip: object, rect: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.Cartesian.renderClipped](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html#method-renderClipped).
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                                                          [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.CandleStick|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.CandleStick;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {object} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: object): void;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                                                            matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                                                          [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.CandleStick|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.CandleStick;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.CandleStick|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.CandleStick;
		show? (): Ext.chart.series.sprite.Aggregative;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                                                         matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                                                          [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.CandleStick|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.CandleStick;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		 * @param   {object} aggregator
		 * @param   {object} oldAggr
		 * @returns {void}              
		 */
		applyAggregator? (aggregator: object, oldAggr: object): void;
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGapWidth? (): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Cartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html)
	 * Cartesian sprite.
	 */
	class Cartesian extends Ext.draw.sprite.Sprite {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                  [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                    matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                  [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                 matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                  [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Line](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Line.html)
	 * Line series sprite.
	 */
	class Line extends Ext.chart.series.sprite.Aggregative {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the value of [aggregator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getAggregator? (): object;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Line|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Line;
		hide? (): Ext.chart.series.sprite.Aggregative;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @param   {object} clip
		 * @param   {object} rect
		 * @returns {void}           
		 */
		renderClipped? (surface: object, ctx: object, clip: object, rect: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.Cartesian.renderClipped](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html#method-renderClipped).
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                                                   [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Line|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Line;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Sets the value of [aggregator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html#cfg-aggregator).
		 * @method
		 * @public (method)
		 * @param   {object} aggregator The new value.
		 * @returns {void}              
		 */
		setAggregator? (aggregator: object): void;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                                                     matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                                                   [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Line|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Line;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Line|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Line;
		show? (): Ext.chart.series.sprite.Aggregative;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                                                  matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                                                   [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Line|Ext.chart.series.sprite.Aggregative|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Line;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Aggregative;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		 * @param   {object} aggregator
		 * @param   {object} oldAggr
		 * @returns {void}              
		 */
		applyAggregator? (aggregator: object, oldAggr: object): void;
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getGapWidth? (): void;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Pie3DPart](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Pie3DPart.html)
	 * Pie3D series sprite.
	 */
	class Pie3DPart extends Ext.draw.sprite.Path {
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
		 * Returns the markers bound to the given name.
		 * @method
		 * @public (method)
		 * @param   {string}              name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers[]}      
		 */
		getBoundMarker? (name: string): Ext.chart.Markers[];
		/** 
		 * Returns all points where this sprite intersects the given sprite.
		 * The given sprite must be an instance of the [Ext.draw.sprite.Path](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Path.html) class
		 * or its subclass.
		 * @method
		 * @public (method)
		 * @param   {object} path
		 * @returns {any[]}       
		 */
		getIntersections? (path: object): any[];
		/** 
		 * Returns the marker bound to the given name (or null). See [bindMarker](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.MarkerHolder.html#method-bindMarker).
		 * @method
		 * @public (method)
		 * @param   {string}            name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers}      
		 */
		getMarker? (name: string): Ext.chart.Markers;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Pie3DPart|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Pie3DPart;
		hide? (): Ext.draw.sprite.Path;
		hide? (): Ext.draw.sprite.Sprite;
		/** 
		 * **Defined in override Ext.draw.overrides.sprite.Path.**
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
		 * Tests whether the given point is inside the path.
		 * @method
		 * @public (method)
		 * @param   {object}  x
		 * @param   {object}  y
		 * @returns {boolean}   
		 */
		isPointInPath? (x: object, y: object): boolean;
		/** 
		 * Tests whether the given point is on the path.
		 * @method
		 * @public (method)
		 * @param   {object}  x
		 * @param   {object}  y
		 * @returns {boolean}   
		 */
		isPointOnPath? (x: object, y: object): boolean;
		/** 
		 * Unregisters the given marker or a marker with the given name.
		 * Providing a name of the marker is more efficient as it avoids lookup.
		 * @method
		 * @public (method)
		 * @param   {object}            marker {String/[Ext.chart.Markers](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.Markers.html)}
		 * @returns {Ext.chart.Markers}        Released marker or null.
		 */
		releaseMarker? (marker: object): Ext.chart.Markers;
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * @param   {boolean}                                                                       [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Pie3DPart|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Pie3DPart;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Path;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                         matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                       [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Pie3DPart|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Pie3DPart;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Path;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Pie3DPart|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Pie3DPart;
		show? (): Ext.draw.sprite.Path;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                      matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                       [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Pie3DPart|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Pie3DPart;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Path;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Update the path.
		 * @method
		 * @public (method)
		 * @param   {object} path
		 * @returns {void}        
		 */
		updatePath? (path: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Path.updatePath](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Path.html#method-updatePath).
		 * Update the path.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Path} path An empty path to draw on using path API.
		 * @param   {object}        attr
		 * The attribute object. Note: DO NOT use the `sprite.attr` instead of this
		 * if you want to work with instancing.
		 * @returns {void}               
		 */
		updatePath? (path: Ext.draw.Path, attr: object): void;
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
		 * @param   {object} plain
		 * @returns {void}         
		 */
		updatePlainBBox? (plain: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		preRender? (): void;
		/** 
		 * Subclass will fill the plain object with `x`, `y`, `width`, `height` information
		 * of the transformed bounding box of this sprite.
		 * @method
		 * @protected (method)
		 * @param   {object} transform
		 * @returns {void}             
		 */
		updateTransformedBBox? (transform: object): void;
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * <debug></debug>
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @returns {void}           
		 */
		renderXRay? (surface: object, ctx: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.PieSlice](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html)
	 * Pie slice sprite.
	 */
	class PieSlice extends Ext.draw.sprite.Sector {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {doCallout: 'bool', label: 'string', rotateLabels: 'bool', labelOverflowPadding: 'number', renderer: 'default'}, defaults: {doCallout: true, rotateLabels: true, label: '', labelOverflowPadding: 10, renderer: null}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default 'sector'
		 * @type {string}
		 */
		type?: string;
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.constructor](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-constructor).
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
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
		 * Returns the markers bound to the given name.
		 * @method
		 * @public (method)
		 * @param   {string}              name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers[]}      
		 */
		getBoundMarker? (name: string): Ext.chart.Markers[];
		/** 
		 * Returns all points where this sprite intersects the given sprite.
		 * The given sprite must be an instance of the [Ext.draw.sprite.Path](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Path.html) class
		 * or its subclass.
		 * @method
		 * @public (method)
		 * @param   {object} path
		 * @returns {any[]}       
		 */
		getIntersections? (path: object): any[];
		/** 
		 * Returns the marker bound to the given name (or null). See [bindMarker](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.MarkerHolder.html#method-bindMarker).
		 * @method
		 * @public (method)
		 * @param   {string}            name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers}      
		 */
		getMarker? (name: string): Ext.chart.Markers;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [rendererIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html#cfg-rendererIndex).
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getRendererIndex? (): number;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getSeries? (): object;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.PieSlice|Ext.draw.sprite.Sector|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.PieSlice;
		hide? (): Ext.draw.sprite.Sector;
		hide? (): Ext.draw.sprite.Path;
		hide? (): Ext.draw.sprite.Sprite;
		/** 
		 * **Defined in override Ext.draw.overrides.sprite.Path.**
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
		 * Tests whether the given point is inside the path.
		 * @method
		 * @public (method)
		 * @param   {object}  x
		 * @param   {object}  y
		 * @returns {boolean}   
		 */
		isPointInPath? (x: object, y: object): boolean;
		/** 
		 * Tests whether the given point is on the path.
		 * @method
		 * @public (method)
		 * @param   {object}  x
		 * @param   {object}  y
		 * @returns {boolean}   
		 */
		isPointOnPath? (x: object, y: object): boolean;
		/** 
		 * Unregisters the given marker or a marker with the given name.
		 * Providing a name of the marker is more efficient as it avoids lookup.
		 * @method
		 * @public (method)
		 * @param   {object}            marker {String/[Ext.chart.Markers](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.Markers.html)}
		 * @returns {Ext.chart.Markers}        Released marker or null.
		 */
		releaseMarker? (marker: object): Ext.chart.Markers;
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
		 * @param   {object} clip
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, clip: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Path.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Path.html#method-render).
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * @param   {boolean}                                                                                             [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.PieSlice|Ext.draw.sprite.Sector|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.PieSlice;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sector;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Path;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [rendererIndex](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html#cfg-rendererIndex).
		 * @method
		 * @public (method)
		 * @param   {number} rendererIndex The new value.
		 * @returns {void}                 
		 */
		setRendererIndex? (rendererIndex: number): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {object} series The new value.
		 * @returns {void}          
		 */
		setSeries? (series: object): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                               matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                             [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.PieSlice|Ext.draw.sprite.Sector|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.PieSlice;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sector;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Path;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.PieSlice|Ext.draw.sprite.Sector|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.PieSlice;
		show? (): Ext.draw.sprite.Sector;
		show? (): Ext.draw.sprite.Path;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                            matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                             [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.PieSlice|Ext.draw.sprite.Sector|Ext.draw.sprite.Path|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.PieSlice;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Sector;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Path;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Update the path.
		 * @method
		 * @public (method)
		 * @param   {object} path
		 * @param   {object} attr
		 * @returns {void}        
		 */
		updatePath? (path: object, attr: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Path.updatePath](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Path.html#method-updatePath).
		 * Update the path.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Path} path An empty path to draw on using path API.
		 * @param   {object}        attr
		 * The attribute object. Note: DO NOT use the `sprite.attr` instead of this
		 * if you want to work with instancing.
		 * @returns {void}               
		 */
		updatePath? (path: Ext.draw.Path, attr: object): void;
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
		 * @param   {object} plain
		 * @returns {void}         
		 */
		updatePlainBBox? (plain: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		preRender? (): void;
		/** 
		 * Subclass will fill the plain object with `x`, `y`, `width`, `height` information
		 * of the transformed bounding box of this sprite.
		 * @method
		 * @protected (method)
		 * @param   {object} transform
		 * @returns {void}             
		 */
		updateTransformedBBox? (transform: object): void;
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getMidAngle? (): void;
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
		 * <debug></debug>
		 * @method
		 * @private (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @returns {void}           
		 */
		renderXRay? (surface: object, ctx: object): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Polar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Polar.html)
	 * Polar sprite.
	 */
	class Polar extends Ext.draw.sprite.Sprite {
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
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Polar;
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
		 * @param   {boolean}                                              [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Polar;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                              [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Polar;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Polar;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                             matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                              [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Polar;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Radar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Radar.html)
	 * Radar series sprite.
	 */
	class Radar extends Ext.chart.series.sprite.Polar {
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
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Radar|Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Radar;
		hide? (): Ext.chart.series.sprite.Polar;
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
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * @param   {boolean}                                                                            [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Radar|Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Radar;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Polar;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                              matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                            [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Radar|Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Radar;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Polar;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Radar|Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Radar;
		show? (): Ext.chart.series.sprite.Polar;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                           matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                            [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Radar|Ext.chart.series.sprite.Polar|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Radar;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Polar;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Scatter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Scatter.html)
	 * Scatter series sprite.
	 */
	class Scatter extends Ext.chart.series.sprite.Cartesian {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Scatter|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Scatter;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {object} surface
		 * @param   {object} ctx
		 * @param   {object} clip
		 * @param   {object} clipRect
		 * @returns {void}            
		 */
		renderClipped? (surface: object, ctx: object, clip: object, clipRect: object): void;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.chart.series.sprite.Cartesian.renderClipped](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html#method-renderClipped).
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                  [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Scatter|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Scatter;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                    matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                  [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Scatter|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Scatter;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Scatter|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Scatter;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                 matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                  [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Scatter|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Scatter;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html)
	 * Base class for all series sprites.
	 * Defines attributes common to all series sprites, like data in x/y directions and its min/max values,
	 * and configs, like the [Ext.chart.series.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Series.html) instance that manages the sprite.
	 */
	class Series extends Ext.draw.sprite.Sprite {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {dataMinX: 'number', dataMaxX: 'number', dataMinY: 'number', dataMaxY: 'number', rangeX: 'data', rangeY: 'data', dataX: 'data', dataY: 'data'}, defaults: {dataMinX: 0, dataMaxX: 1, dataMinY: 0, dataMaxY: 1, rangeX: null, rangeY: null, dataX: null, dataY: null}, triggers: {dataX: 'bbox', dataY: 'bbox', dataMinX: 'bbox', dataMaxX: 'bbox', dataMinY: 'bbox', dataMaxY: 'bbox'}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @method
		 * @public (method)
		 */
		constructor ();
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.constructor](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-constructor).
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
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
		 * Returns the markers bound to the given name.
		 * @method
		 * @public (method)
		 * @param   {string}              name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers[]}      
		 */
		getBoundMarker? (name: string): Ext.chart.Markers[];
		/** 
		 * Returns the value of [field](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html#cfg-field).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getField? (): string;
		/** 
		 * Returns the marker bound to the given name (or null). See [bindMarker](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.MarkerHolder.html#method-bindMarker).
		 * @method
		 * @public (method)
		 * @param   {string}            name The name of the marker (e.g., "items", "labels", etc.).
		 * @returns {Ext.chart.Markers}      
		 */
		getMarker? (name: string): Ext.chart.Markers;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html#cfg-series).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getSeries? (): object;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Series|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.Series;
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
		 * Unregisters the given marker or a marker with the given name.
		 * Providing a name of the marker is more efficient as it avoids lookup.
		 * @method
		 * @public (method)
		 * @param   {object}            marker {String/[Ext.chart.Markers](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.Markers.html)}
		 * @returns {Ext.chart.Markers}        Released marker or null.
		 */
		releaseMarker? (marker: object): Ext.chart.Markers;
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
		 * @param   {boolean}                                               [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Series|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Series;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [field](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html#cfg-field).
		 * @method
		 * @public (method)
		 * @param   {string} field The new value.
		 * @returns {void}         
		 */
		setField? (field: string): void;
		/** 
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html#cfg-series).
		 * @method
		 * @public (method)
		 * @param   {object} series The new value.
		 * @returns {void}          
		 */
		setSeries? (series: object): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                 matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                               [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Series|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Series;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.Series|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.Series;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                              matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                               [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.Series|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Series;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		preRender? (): void;
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
	/** 
	 * [Ext.chart.series.sprite.StackedCartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.StackedCartesian.html)
	 * Stacked cartesian sprite.
	 */
	class StackedCartesian extends Ext.chart.series.sprite.Cartesian {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {groupCount: 'number', groupOffset: 'number', dataStartY: 'data'}, defaults: {selectionTolerance: 20, groupCount: 1, groupOffset: 0, dataStartY: null}, triggers: {dataStartY: 'dataY,bbox'}}
		 * @type {object}
		 */
		static def?: object;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Does a binary search of the data on the x-axis using the given key.
		 * @method
		 * @public (method)
		 * @param   {string} key
		 * @returns {any}        
		 */
		binarySearch? (key: string): any;
		/** 
		 * Removes the sprite and clears all listeners.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
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
		 * Get the nearest item index from point (x, y). -1 as not found.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   The index
		 */
		getIndexNearPoint? (x: number, y: number): number;
		/** 
		 * Returns the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}  
		 */
		getParent? (): Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * Returns the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Surface}  
		 */
		getSurface? (): Ext.draw.Surface;
		/** 
		 * Hide the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		hide? (): Ext.chart.series.sprite.StackedCartesian;
		hide? (): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} rect
		 * @returns {any}    
		 * returns `false` to stop rendering in this frame.
		 * All the sprites that haven't been rendered will have their dirty flag untouched.
		 */
		render? (surface: object, ctx: object, rect: object): any;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.draw.sprite.Sprite.render](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-render).
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
		 * Render the given visible clip range.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface}                                  surface
		 * @param   {Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext} ctx
		 * @param   {any[]}                                             clip
		 * @param   {any[]}                                             rect
		 * @returns {void}                                                      
		 */
		renderClipped? (surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas | Ext.draw.engine.SvgContext, clip: any[], rect: any[]): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {boolean}                                                                                           [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		resetTransform? (isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		resetTransform? (isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Set attributes of the sprite.
		 * By default only the attributes that have processors will be set
		 * and all other attributes will be filtered out as a result of the
		 * normalization process.
		 * The normalization process can be skipped. In that case all the given
		 * attributes will be set unprocessed. This will result in better
		 * performance, but might also pollute the sprite's attributes with
		 * unwanted attributes or attributes with invalid values, if one is not
		 * careful. See also [setAttributesBypassingNormalization](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-setAttributesBypassingNormalization).
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
		 * Sets the value of [parent](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-parent).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite} parent The new value.
		 * @returns {void}                                                                         
		 */
		setParent? (parent: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite): void;
		/** 
		 * Sets the value of [surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-surface).
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The new value.
		 * @returns {void}                     
		 */
		setSurface? (surface: Ext.draw.Surface): void;
		/** 
		 * Resets current transformation matrix of a sprite to the identify matrix
		 * and pre-multiplies it with the given matrix.
		 * This is effectively the same as calling [resetTransform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-resetTransform),
		 * followed by [transform](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#method-transform) with the same arguments.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {any[]}                                                                                             matrix    The transformation matrix to apply or its raw elements as an array.
		 * @param   {boolean}                                                                                           [isSplit] If `true`, transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
		setTransform? (matrix: any[], isSplit?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Show the sprite.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}  this
		 */
		show? (): Ext.chart.series.sprite.StackedCartesian;
		show? (): Ext.chart.series.sprite.Cartesian;
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
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix|number[]}                                                                          matrix    A transformation maxtrix or array of its elements.
		 * @param   {boolean}                                                                                           [isSplit] If 'true', transformation attributes are updated.
		 * @returns {Ext.chart.series.sprite.StackedCartesian|Ext.chart.series.sprite.Cartesian|Ext.draw.sprite.Sprite}           This sprite.
		 */
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.StackedCartesian;
		transform? (matrix: Ext.draw.Matrix | number[], isSplit?: boolean): Ext.chart.series.sprite.Cartesian;
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
		 * @param   {object} plain
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
		getAnimation? (): void;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html#cfg-dirty).
		 * @method
		 * @private (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
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
		 * @method
		 * @private (method)
		 * @param   {object} additionalModifiers
		 * @returns {void}                       
		 */
		prepareModifiers? (additionalModifiers: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataX? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		processDataY? (): void;
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
		 * @param   {object} config
		 * @returns {void}          
		 */
		setAnimation? (config: object): void;
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
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		updateTransformAttributes? (): void;
	}
}
declare namespace Ext.chart.series.sprite.Aggregative {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Aggregative](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html)
	 */
	interface Def extends Ext.chart.series.sprite.Aggregative {
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
		 * @type {Ext.chart.series.sprite.Aggregative.Cfg}
		 */
		config?: Ext.chart.series.sprite.Aggregative.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Aggregative.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Aggregative.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Area {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Area](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Area.html)
	 * Area series sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Area {
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
		 * @type {Ext.chart.series.sprite.Area.Cfg}
		 */
		config?: Ext.chart.series.sprite.Area.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Area.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Area.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Bar {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Bar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar.html)
	 * Draws a sprite used in the bar series.
	 */
	interface Def extends Ext.chart.series.sprite.Bar {
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
		 * @type {Ext.chart.series.sprite.Bar.Cfg}
		 */
		config?: Ext.chart.series.sprite.Bar.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Bar.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Bar.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Bar3D {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html)
	 * Draws a sprite used in [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Bar3D.html) series.
	 */
	interface Def extends Ext.chart.series.sprite.Bar3D {
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
		 * @type {Ext.chart.series.sprite.Bar3D.Cfg}
		 */
		config?: Ext.chart.series.sprite.Bar3D.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Bar3D.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Bar3D.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Box {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Box](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Box.html)
	 * A sprite that represents a 3D bar or column.
	 * Used as an item template by the [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html) marker holder.
	 */
	interface Def extends Ext.chart.series.sprite.Box {
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
		 * @type {Ext.chart.series.sprite.Box.Cfg}
		 */
		config?: Ext.chart.series.sprite.Box.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Box.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Box.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.CandleStick {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.CandleStick](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.CandleStick.html)
	 * CandleStick series sprite.
	 */
	interface Def extends Ext.chart.series.sprite.CandleStick {
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
		 * @type {Ext.chart.series.sprite.CandleStick.Cfg}
		 */
		config?: Ext.chart.series.sprite.CandleStick.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.CandleStick.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.CandleStick.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Cartesian {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Cartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html)
	 * Cartesian sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Cartesian {
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
		 * @type {Ext.chart.series.sprite.Cartesian.Cfg}
		 */
		config?: Ext.chart.series.sprite.Cartesian.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Cartesian.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Cartesian.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Line {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Line](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Line.html)
	 * Line series sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Line {
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
		 * @type {Ext.chart.series.sprite.Line.Cfg}
		 */
		config?: Ext.chart.series.sprite.Line.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Line.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Line.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Pie3DPart {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Pie3DPart](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Pie3DPart.html)
	 * Pie3D series sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Pie3DPart {
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
		 * @type {Ext.chart.series.sprite.Pie3DPart.Cfg}
		 */
		config?: Ext.chart.series.sprite.Pie3DPart.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Pie3DPart.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Pie3DPart.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.PieSlice {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.PieSlice](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html)
	 * Pie slice sprite.
	 */
	interface Def extends Ext.chart.series.sprite.PieSlice {
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
		 * @type {Ext.chart.series.sprite.PieSlice.Cfg}
		 */
		config?: Ext.chart.series.sprite.PieSlice.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.PieSlice.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.PieSlice.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Polar {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Polar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Polar.html)
	 * Polar sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Polar {
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
		 * @type {Ext.chart.series.sprite.Polar.Cfg}
		 */
		config?: Ext.chart.series.sprite.Polar.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Polar.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Polar.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Radar {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Radar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Radar.html)
	 * Radar series sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Radar {
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
		 * @type {Ext.chart.series.sprite.Radar.Cfg}
		 */
		config?: Ext.chart.series.sprite.Radar.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Radar.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Radar.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Scatter {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Scatter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Scatter.html)
	 * Scatter series sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Scatter {
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
		 * @type {Ext.chart.series.sprite.Scatter.Cfg}
		 */
		config?: Ext.chart.series.sprite.Scatter.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Scatter.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Scatter.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Series {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html)
	 * Base class for all series sprites.
	 * Defines attributes common to all series sprites, like data in x/y directions and its min/max values,
	 * and configs, like the [Ext.chart.series.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Series.html) instance that manages the sprite.
	 */
	interface Def extends Ext.chart.series.sprite.Series {
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
		 * @type {Ext.chart.series.sprite.Series.Cfg}
		 */
		config?: Ext.chart.series.sprite.Series.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.Series.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.Series.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.StackedCartesian {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.chart.series.sprite.StackedCartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.StackedCartesian.html)
	 * Stacked cartesian sprite.
	 */
	interface Def extends Ext.chart.series.sprite.StackedCartesian {
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
		 * @type {Ext.chart.series.sprite.StackedCartesian.Cfg}
		 */
		config?: Ext.chart.series.sprite.StackedCartesian.Cfg;
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.chart.series.sprite.StackedCartesian.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.chart.series.sprite.StackedCartesian.Statics | any;
	}
}
declare namespace Ext.chart.series.sprite.Aggregative {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Aggregative](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html)
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {dataHigh: 'data', dataLow: 'data', dataClose: 'data'}, aliases: {dataOpen: 'dataY'}, defaults: {dataHigh: null, dataLow: null, dataClose: null}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Area {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Area](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Area.html)
	 * Area series sprite.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {step: 'bool'}, defaults: {step: false}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Bar {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Bar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar.html)
	 * Draws a sprite used in the bar series.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {minBarWidth: 'number', maxBarWidth: 'number', minGapWidth: 'number', radius: 'number', inGroupGapWidth: 'number'}, defaults: {minBarWidth: 2, maxBarWidth: 100, minGapWidth: 5, inGroupGapWidth: 3, radius: 0}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Bar3D {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html)
	 * Draws a sprite used in [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Bar3D.html) series.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Box {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Box](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Box.html)
	 * A sprite that represents a 3D bar or column.
	 * Used as an item template by the [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html) marker holder.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {x: 'number', y: 'number', width: 'number', height: 'number', depth: 'number', orientation: 'enums(vertical,horizontal)', showStroke: 'bool', saturationFactor: 'number', brightnessFactor: 'number', colorSpread: 'number'}, triggers: {x: 'bbox', y: 'bbox', width: 'bbox', height: 'bbox', depth: 'bbox', orientation: 'bbox'}, defaults: {x: 0, y: 0, width: 8, height: 8, depth: 8, orientation: 'vertical', showStroke: false, saturationFactor: 1, brightnessFactor: 1, colorSpread: 1, lineJoin: 'bevel'}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.CandleStick {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.CandleStick](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.CandleStick.html)
	 * CandleStick series sprite.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Line {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Line](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Line.html)
	 * Line series sprite.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.PieSlice {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.PieSlice](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html)
	 * Pie slice sprite.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {doCallout: 'bool', label: 'string', rotateLabels: 'bool', labelOverflowPadding: 'number', renderer: 'default'}, defaults: {doCallout: true, rotateLabels: true, label: '', labelOverflowPadding: 10, renderer: null}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Series {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html)
	 * Base class for all series sprites.
	 * Defines attributes common to all series sprites, like data in x/y directions and its min/max values,
	 * and configs, like the [Ext.chart.series.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Series.html) instance that manages the sprite.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {dataMinX: 'number', dataMaxX: 'number', dataMinY: 'number', dataMaxY: 'number', rangeX: 'data', rangeY: 'data', dataX: 'data', dataY: 'data'}, defaults: {dataMinX: 0, dataMaxX: 1, dataMinY: 0, dataMaxY: 1, rangeX: null, rangeY: null, dataX: null, dataY: null}, triggers: {dataX: 'bbox', dataY: 'bbox', dataMinX: 'bbox', dataMaxX: 'bbox', dataMinY: 'bbox', dataMaxY: 'bbox'}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.StackedCartesian {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.chart.series.sprite.StackedCartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.StackedCartesian.html)
	 * Stacked cartesian sprite.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * @property
		 * @private (property)
		 * @static
		 * @default {processors: {groupCount: 'number', groupOffset: 'number', dataStartY: 'data'}, defaults: {selectionTolerance: 20, groupCount: 1, groupOffset: 0, dataStartY: null}, triggers: {dataStartY: 'dataY,bbox'}}
		 * @type {object}
		 */
		def?: object;
	}
}
declare namespace Ext.chart.series.sprite.Aggregative {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Aggregative](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Aggregative.html)
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		aggregator?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * Data items representing the closing values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataClose?: object;
		/** 
		 * Data items representing the high values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataHigh?: object;
		/** 
		 * Data items representing the low values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataLow?: object;
		/** 
		 * Data items representing the opening values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataOpen?: object;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                      config
		 * @returns {Ext.chart.series.sprite.Aggregative.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Aggregative.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                      [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Aggregative.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Aggregative.Statics;
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
		 * @returns {Ext.chart.series.sprite.Aggregative.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Aggregative.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Area {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Area](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Area.html)
	 * Area series sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The starting point of the data used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataStartY?: object;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * The number of items (e.g. bars) in a group.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		groupCount?: number;
		/** 
		 * The group index of the series sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		groupOffset?: number;
		/** 
		 * Determines whether or not the sprite is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * 'true' if the area is represented with steps instead of lines.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		step?: boolean;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @returns {Ext.chart.series.sprite.Area.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Area.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Area.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Area.Statics;
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
		 * @returns {Ext.chart.series.sprite.Area.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Area.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Bar {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Bar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar.html)
	 * Draws a sprite used in the bar series.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The starting point of the data used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataStartY?: object;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * The number of items (e.g. bars) in a group.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		groupCount?: number;
		/** 
		 * The group index of the series sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		groupOffset?: number;
		/** 
		 * Determines whether or not the sprite is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * The gap between grouped bars.
		 * @configuration
		 * @optional
		 * @default 3
		 * @type {number}
		 */
		inGroupGapWidth?: number;
		/** 
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The maximum bar width.
		 * @configuration
		 * @optional
		 * @default 100
		 * @type {number}
		 */
		maxBarWidth?: number;
		/** 
		 * The minimum bar width.
		 * @configuration
		 * @optional
		 * @default 2
		 * @type {number}
		 */
		minBarWidth?: number;
		/** 
		 * The minimum gap between bars.
		 * @configuration
		 * @optional
		 * @default 5
		 * @type {number}
		 */
		minGapWidth?: number;
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
		 * The degree of rounding for rounded bars.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @returns {Ext.chart.series.sprite.Bar.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Bar.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                              [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Bar.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Bar.Statics;
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
		 * @returns {Ext.chart.series.sprite.Bar.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Bar.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Bar3D {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html)
	 * Draws a sprite used in [Ext.chart.series.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Bar3D.html) series.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The factor applied to the brightness of the bars.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		brightnessFactor?: number;
		/** 
		 * An attribute used to control how flat the bar gradient looks.
		 * A value of 0 essentially means no gradient (flat color).
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		colorSpread?: number;
		/** 
		 * The starting point of the data used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataStartY?: object;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * The number of items (e.g. bars) in a group.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		groupCount?: number;
		/** 
		 * The group index of the series sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		groupOffset?: number;
		/** 
		 * Determines whether or not the sprite is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * The gap between grouped bars.
		 * @configuration
		 * @optional
		 * @default 3
		 * @type {number}
		 */
		inGroupGapWidth?: number;
		/** 
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The maximum bar width.
		 * @configuration
		 * @optional
		 * @default 100
		 * @type {number}
		 */
		maxBarWidth?: number;
		/** 
		 * The minimum bar width.
		 * @configuration
		 * @optional
		 * @default 2
		 * @type {number}
		 */
		minBarWidth?: number;
		/** 
		 * The minimum gap between bars.
		 * @configuration
		 * @optional
		 * @default 5
		 * @type {number}
		 */
		minGapWidth?: number;
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
		 * The degree of rounding for rounded bars.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		radius?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The factor applied to the saturation of the bars.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		saturationFactor?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * @default false
		 * @type {boolean}
		 */
		showStroke?: boolean;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                config
		 * @returns {Ext.chart.series.sprite.Bar3D.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Bar3D.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Bar3D.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Bar3D.Statics;
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
		 * @returns {Ext.chart.series.sprite.Bar3D.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Bar3D.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Box {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Box](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Box.html)
	 * A sprite that represents a 3D bar or column.
	 * Used as an item template by the [Ext.chart.series.sprite.Bar3D](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Bar3D.html) marker holder.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The factor applied to the brightness of the box.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		brightnessFactor?: number;
		/** 
		 * An attribute used to control how flat the bar gradient looks.
		 * A value of 0 essentially means no gradient (flat color).
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		colorSpread?: number;
		/** 
		 * The depth of the box.
		 * @configuration
		 * @optional
		 * @default 8
		 * @type {number}
		 */
		depth?: number;
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
		 * The height of the box.
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
		 * The orientation of the box.
		 * @configuration
		 * @optional
		 * @default 'vertical'
		 * @type {string}
		 */
		orientation?: string;
		/** 
		 * The immediate parent of the sprite. Not necessarily a surface.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}
		 */
		parent?: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The factor applied to the saturation of the box.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		saturationFactor?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
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
		 * Whether to render the stroke or not.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		showStroke?: boolean;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationY?: number;
		/** 
		 * The width of the box.
		 * @configuration
		 * @optional
		 * @default 8
		 * @type {number}
		 */
		width?: number;
		/** 
		 * The position of the sprite on the x-axis.
		 * Corresponds to the center of the front face of the box.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		x?: number;
		/** 
		 * The position of the sprite on the y-axis.
		 * Corresponds to the top of the front face of the box.
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
		 * @returns {Ext.chart.series.sprite.Box.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Box.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                       name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                              [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Box.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Box.Statics;
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
		 * @returns {Ext.chart.series.sprite.Box.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Box.Statics;
	}
}
declare namespace Ext.chart.series.sprite.CandleStick {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.CandleStick](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.CandleStick.html)
	 * CandleStick series sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		aggregator?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The bar width of the candles.
		 * @configuration
		 * @optional
		 * @default 15
		 * @type {number}
		 */
		barWidth?: number;
		/** 
		 * Data items representing the closing values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataClose?: object;
		/** 
		 * Data items representing the high values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataHigh?: object;
		/** 
		 * Data items representing the low values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataLow?: object;
		/** 
		 * Data items representing the opening values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataOpen?: object;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * Determines whether candlestick or ohlc is used.
		 * @configuration
		 * @optional
		 * @default 'candlestick'
		 * @type {string}
		 */
		ohlcType?: string;
		/** 
		 * The amount of padding between candles.
		 * @configuration
		 * @optional
		 * @default 3
		 * @type {number}
		 */
		padding?: number;
		/** 
		 * The immediate parent of the sprite. Not necessarily a surface.
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface|Ext.draw.sprite.Instancing|Ext.draw.sprite.Composite}
		 */
		parent?: Ext.draw.Surface | Ext.draw.sprite.Instancing | Ext.draw.sprite.Composite;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                      config
		 * @returns {Ext.chart.series.sprite.CandleStick.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.CandleStick.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                               name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                      [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.CandleStick.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.CandleStick.Statics;
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
		 * @returns {Ext.chart.series.sprite.CandleStick.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.CandleStick.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Cartesian {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Cartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Cartesian.html)
	 * Cartesian sprite.
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                    config
		 * @returns {Ext.chart.series.sprite.Cartesian.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Cartesian.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                    [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Cartesian.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Cartesian.Statics;
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
		 * @returns {Ext.chart.series.sprite.Cartesian.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Cartesian.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Line {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Line](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Line.html)
	 * Line series sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default {}
		 * @type {object}
		 */
		aggregator?: object;
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * Data items representing the closing values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataClose?: object;
		/** 
		 * Data items representing the high values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataHigh?: object;
		/** 
		 * Data items representing the low values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataLow?: object;
		/** 
		 * Data items representing the opening values of the aggregated data.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataOpen?: object;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * `true` if the sprite paints the area underneath the line.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		fillArea?: boolean;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * `true` if the line uses precise stroke.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		preciseStroke?: boolean;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * `true` if the sprite uses line smoothing.
		 * Don't enable this if your data has gaps: NaN, undefined, etc.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		smooth?: boolean;
		/** 
		 * `true` if the line uses steps instead of straight lines to connect the dots.
		 * It is ignored if `smooth` is `true`.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		step?: boolean;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationY?: number;
		/** 
		 * Absolute maximum y-value.
		 * Larger values will be capped to avoid rendering issues.
		 * @configuration
		 * @optional
		 * @default Math.pow(2, 20)
		 * @type {number}
		 */
		yCap?: number;
		/** 
		 * The stacking order of the sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		zIndex?: number;
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
		 * @returns {Ext.chart.series.sprite.Line.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Line.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                        name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                               [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Line.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Line.Statics;
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
		 * @returns {Ext.chart.series.sprite.Line.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Line.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Pie3DPart {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Pie3DPart](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Pie3DPart.html)
	 * Pie3D series sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The color of the 3D pie part before adding the 3D effect.
		 * @configuration
		 * @optional
		 * @default 'white'
		 * @type {object}
		 */
		baseColor?: object;
		/** 
		 * The starting rotation of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		baseRotation?: number;
		/** 
		 * The size of the 3D pie bevel.
		 * @configuration
		 * @optional
		 * @default 5
		 * @type {number}
		 */
		bevelWidth?: number;
		/** 
		 * The central point of the series on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerX?: number;
		/** 
		 * The central point of the series on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerY?: number;
		/** 
		 * An attribute used to control how flat the gradient of the sprite looks.
		 * A value of 0 essentially means no gradient (flat color).
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		colorSpread?: number;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * The distortion of the 3D pie part.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		distortion?: number;
		/** 
		 * The ending angle of the polar series.
		 * @configuration
		 * @optional
		 * @default Math.PI
		 * @type {number}
		 */
		endAngle?: number;
		/** 
		 * The ending radius of the polar series.
		 * @configuration
		 * @optional
		 * @default 150
		 * @type {number}
		 */
		endRho?: number;
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
		 * The label associated with the 'top' part of the sprite.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		label?: string;
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
		 * Margin from the center of the pie. Used for donut.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
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
		 * The part of the 3D Pie represented by the sprite.
		 * @configuration
		 * @optional
		 * @default 'top'
		 * @type {string}
		 */
		part?: string;
		/** 
		 * The SVG based path string used by the sprite.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		path?: string;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
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
		 * The starting angle of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startAngle?: number;
		/** 
		 * The starting radius of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startRho?: number;
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
		 * @configuration
		 * @optional
		 * @type {Ext.draw.Surface}
		 */
		surface?: Ext.draw.Surface;
		/** 
		 * The thickness of the 3D pie part.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		thickness?: number;
		/** 
		 * Determines whether the fill and stroke are affected by sprite transformations.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		transformFillStroke?: boolean;
		/** 
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                    config
		 * @returns {Ext.chart.series.sprite.Pie3DPart.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Pie3DPart.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                    [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Pie3DPart.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Pie3DPart.Statics;
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
		 * @returns {Ext.chart.series.sprite.Pie3DPart.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Pie3DPart.Statics;
	}
}
declare namespace Ext.chart.series.sprite.PieSlice {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.PieSlice](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.PieSlice.html)
	 * Pie slice sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The center coordinate of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerX?: number;
		/** 
		 * The center coordinate of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerY?: number;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * 'true' if the pie series uses label callouts.
		 * @configuration
		 * @optional
		 * @default true
		 * @type {boolean}
		 */
		doCallout?: boolean;
		/** 
		 * The ending angle of the sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		endAngle?: number;
		/** 
		 * The ending point of the radius of the sprite.
		 * @configuration
		 * @optional
		 * @default 150
		 * @type {number}
		 */
		endRho?: number;
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
		 * Label associated with the Pie sprite.
		 * @configuration
		 * @optional
		 * @default ''
		 * @type {string}
		 */
		label?: string;
		/** 
		 * Padding around labels to determine overlap.
		 * Any negative number allows the labels to overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
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
		 * The margin of the sprite from the center of pie.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		margin?: number;
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
		 * The object that is passed to the renderer.
		 * 
		 * For instance when the PieSlice sprite is used in a Gauge chart, the object
		 * contains the 'store' and 'angleField' properties, and the 'value' as well
		 * for that one PieSlice that is used to draw the needle of the Gauge.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		rendererData?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rendererIndex?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
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
		 * The starting angle of the sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startAngle?: number;
		/** 
		 * The starting point of the radius of the sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startRho?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                   config
		 * @returns {Ext.chart.series.sprite.PieSlice.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.PieSlice.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                            name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                   [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.PieSlice.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.PieSlice.Statics;
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
		 * @returns {Ext.chart.series.sprite.PieSlice.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.PieSlice.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Polar {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Polar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Polar.html)
	 * Polar sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The starting rotation of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		baseRotation?: number;
		/** 
		 * The central point of the series on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerX?: number;
		/** 
		 * The central point of the series on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerY?: number;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * The ending angle of the polar series.
		 * @configuration
		 * @optional
		 * @default Math.PI
		 * @type {number}
		 */
		endAngle?: number;
		/** 
		 * The ending radius of the polar series.
		 * @configuration
		 * @optional
		 * @default 150
		 * @type {number}
		 */
		endRho?: number;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
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
		 * The starting angle of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startAngle?: number;
		/** 
		 * The starting radius of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startRho?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                config
		 * @returns {Ext.chart.series.sprite.Polar.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Polar.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Polar.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Polar.Statics;
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
		 * @returns {Ext.chart.series.sprite.Polar.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Polar.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Radar {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Radar](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Radar.html)
	 * Radar series sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The starting rotation of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		baseRotation?: number;
		/** 
		 * The central point of the series on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerX?: number;
		/** 
		 * The central point of the series on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		centerY?: number;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * The ending angle of the polar series.
		 * @configuration
		 * @optional
		 * @default Math.PI
		 * @type {number}
		 */
		endAngle?: number;
		/** 
		 * The ending radius of the polar series.
		 * @configuration
		 * @optional
		 * @default 150
		 * @type {number}
		 */
		endRho?: number;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
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
		 * The starting angle of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startAngle?: number;
		/** 
		 * The starting radius of the polar series.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		startRho?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                config
		 * @returns {Ext.chart.series.sprite.Radar.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Radar.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                         name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Radar.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Radar.Statics;
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
		 * @returns {Ext.chart.series.sprite.Radar.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Radar.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Scatter {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Scatter](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Scatter.html)
	 * Scatter series sprite.
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                  config
		 * @returns {Ext.chart.series.sprite.Scatter.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Scatter.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                           name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                  [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Scatter.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Scatter.Statics;
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
		 * @returns {Ext.chart.series.sprite.Scatter.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Scatter.Statics;
	}
}
declare namespace Ext.chart.series.sprite.Series {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.Series.html)
	 * Base class for all series sprites.
	 * Defines attributes common to all series sprites, like data in x/y directions and its min/max values,
	 * and configs, like the [Ext.chart.series.Series](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.Series.html) instance that manages the sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * Data maximum on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		dataMaxX?: number;
		/** 
		 * Data maximum on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		dataMaxY?: number;
		/** 
		 * Data minimum on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		dataMinX?: number;
		/** 
		 * Data minimum on the y-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		dataMinY?: number;
		/** 
		 * Data items on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataX?: object;
		/** 
		 * Data items on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataY?: object;
		/** 
		 * Current state of the sprite.
		 * Set to `true` if the sprite needs to be repainted.
		 * @configuration
		 * @optional
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * The store field used by the series.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		field?: string;
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
		 * Data range derived from all the series bound to the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {any[]}
		 */
		rangeX?: any[];
		/** 
		 * Data range derived from all the series bound to the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {any[]}
		 */
		rangeY?: any[];
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
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
		 * The store that is passed to the renderer.
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @returns {Ext.chart.series.sprite.Series.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.Series.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                 [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.Series.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.Series.Statics;
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
		 * @returns {Ext.chart.series.sprite.Series.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.Series.Statics;
	}
}
declare namespace Ext.chart.series.sprite.StackedCartesian {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.chart.series.sprite.StackedCartesian](https://docs.sencha.com/extjs/6.0.1/modern/Ext.chart.series.sprite.StackedCartesian.html)
	 * Stacked cartesian sprite.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @type {Ext.draw.modifier.Animation}
		 */
		animation?: Ext.draw.modifier.Animation;
		/** 
		 * The starting point of the data used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		dataStartY?: object;
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
		 * If flipXY is 'true', the series is flipped.
		 * @configuration
		 * @optional
		 * @default 'bool'
		 * @type {boolean}
		 */
		flipXY?: boolean;
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
		 * The number of items (e.g. bars) in a group.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		groupCount?: number;
		/** 
		 * The group index of the series sprite.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		groupOffset?: number;
		/** 
		 * Determines whether or not the sprite is hidden.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		hidden?: boolean;
		/** 
		 * Padding around labels to determine overlap.
		 * @configuration
		 * @optional
		 * @default 10
		 * @type {number}
		 */
		labelOverflowPadding?: number;
		/** 
		 * Labels used in the series.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {object}
		 */
		labels?: object;
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
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterX?: number;
		/** 
		 * The central coordinate of the sprite's rotate operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		rotationCenterY?: number;
		/** 
		 * The angle of rotation of the sprite in radians.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		rotationRads?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the x-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterX?: number;
		/** 
		 * The central coordinate of the sprite's scale operation on the y-axis.
		 * @configuration
		 * @optional
		 * @default null
		 * @type {number}
		 */
		scalingCenterY?: number;
		/** 
		 * The scaling of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingX?: number;
		/** 
		 * The scaling of the sprite on the y-axis.
		 * @configuration
		 * @optional
		 * @default 1
		 * @type {number}
		 */
		scalingY?: number;
		/** 
		 * The distance from the event position to the sprite's data points to trigger interactions (used for 'iteminfo', etc).
		 * @configuration
		 * @optional
		 * @default 20
		 * @type {number}
		 */
		selectionTolerance?: number;
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
		 * The translation of the sprite on the x-axis.
		 * @configuration
		 * @optional
		 * @default 0
		 * @type {number}
		 */
		translationX?: number;
		/** 
		 * The translation of the sprite on the y-axis.
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
		 * @param   {object}                                           config
		 * @returns {Ext.chart.series.sprite.StackedCartesian.Statics}        this
		 */
		initConfig? (config: object): Ext.chart.series.sprite.StackedCartesian.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}                                    name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                                           [value] The value to set for the name parameter.
		 * @returns {Ext.chart.series.sprite.StackedCartesian.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.chart.series.sprite.StackedCartesian.Statics;
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
		 * @returns {Ext.chart.series.sprite.StackedCartesian.Statics}  
		 */
		statics? (): Ext.chart.series.sprite.StackedCartesian.Statics;
	}
}