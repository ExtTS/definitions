declare namespace Ext.draw {
	/** 
	 * [Ext.draw.Animator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Animator.html)
	 * Singleton class that manages the animation pool.
	 * @singleton (definition)
	 */
	interface Animator extends Ext.Base {
		/** 
		 * Adds an animated object to the animation pool.
		 * @method
		 * @public (method)
		 * @param   {object} animation The animation descriptor to add to the pool.
		 * @returns {void}             
		 */
		add? (animation: object): void;
		/** 
		 * Register a recursive callback that will be called at every frame.
		 * @method
		 * @public (method)
		 * @param   {Function} callback
		 * @param   {object}   scope
		 * @returns {string}            
		 */
		addFrameCallback? (callback: ExtGlobalFunction, scope: object): string;
		/** 
		 * Cross platform `animationTime` implementation.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		animationTime? (): number;
		/** 
		 * Cancel a registered one-time callback
		 * @method
		 * @public (method)
		 * @param   {string} id
		 * @returns {void}      
		 */
		cancel? (id: string): void;
		/** 
		 * Returns `true` or `false` whether it contains the given animation or not.
		 * @method
		 * @public (method)
		 * @param   {object}  animation The animation to check for.
		 * @returns {boolean}           
		 */
		contains? (animation: object): boolean;
		/** 
		 * Returns `true` or `false` whether the pool is empty or not.
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		empty? (): boolean;
		/** 
		 * Removes an animation from the pool.
		 * TODO: This is broken when called within `step` method.
		 * @method
		 * @public (method)
		 * @param   {object} animation The animation to remove from the pool.
		 * @returns {void}             
		 */
		remove? (animation: object): void;
		/** 
		 * Unregister a recursive callback.
		 * @method
		 * @public (method)
		 * @param   {string} id
		 * @returns {void}      
		 */
		removeFrameCallback? (id: string): void;
		/** 
		 * Register a one-time callback that will be called at the next frame.
		 * @method
		 * @public (method)
		 * @param   {Function|string} callback
		 * @param   {object}          scope
		 * @returns {string}                   The ID of the scheduled callback.
		 */
		schedule? (callback: ExtGlobalFunction | string, scope: object): string;
		/** 
		 * Register a one-time callback that will be called at the next frame,
		 * if that callback (with a matching function and scope) isn't already scheduled.
		 * @method
		 * @public (method)
		 * @param   {Function|string} callback
		 * @param   {object}          scope
		 * @returns {string|null}              The ID of the scheduled callback or null, if that callback has already been scheduled.
		 */
		scheduleIf? (callback: ExtGlobalFunction | string, scope: object): string | null;
		/** 
		 * Given a frame time it will filter out finished animations from the pool.
		 * @method
		 * @public (method)
		 * @param   {number} frameTime The frame's start time, in milliseconds.
		 * @returns {void}             
		 */
		step? (frameTime: number): void;
	}
	/** 
	 * [Ext.draw.Color](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Color.html)
	 * Represents an RGB color and provides helper functions on it e.g. to get
	 * color components in HSL color space.
	 */
	class Color extends Ext.Base {
		/** 
		 * Returns a flyweight instance of [Ext.draw.Color](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Color.html).
		 * 
		 * Can be called with either a CSS color string or with separate
		 * arguments for red, green, blue, alpha.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number|string}  red     Red component (0..255) or CSS color string.
		 * @param   {number}         [green] Green component (0..255)
		 * @param   {number}         [blue]  Blue component (0..255)
		 * @param   {number}         [alpha] Alpha component (0..1)
		 * @returns {Ext.draw.Color}         
		 */
		static fly? (red: number | string, green?: number, blue?: number, alpha?: number): Ext.draw.Color;
		/** 
		 * Create a new color based on the specified HSL values.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number}         h Hue component [0..360)
		 * @param   {number}         s Saturation component [0..1]
		 * @param   {number}         l Lightness component [0..1]
		 * @returns {Ext.draw.Color}   
		 */
		static fromHSL? (h: number, s: number, l: number): Ext.draw.Color;
		/** 
		 * Create a new color based on the specified HSV values.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number}         h Hue component [0..360)
		 * @param   {number}         s Saturation component [0..1]
		 * @param   {number}         l Value component [0..1]
		 * @returns {Ext.draw.Color}   
		 */
		static fromHSV? (h: number, s: number, l: number): Ext.draw.Color;
		/** 
		 * Parse the string and create a new color.
		 * 
		 * Supported formats:
		 * 
		 * - '#rrggbb'
		 * - '#rgb', 'rgb(r,g,b)'
		 * - 'rgba(r,g,b,a)'
		 * - supported CSS color names (e.g., 'black', 'white', etc).
		 * 
		 * If the string is not recognized, fromString returns rgba(0,0,0,0).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string}         Color Color as string.
		 * @returns {Ext.draw.Color}       
		 */
		static fromString? (Color: string): Ext.draw.Color;
		/** 
		 * @method
		 * @public (method)
		 * @param   {number} red     Red component (0..255)
		 * @param   {number} green   Green component (0..255)
		 * @param   {number} blue    Blue component (0..255)
		 * @param   {number} [alpha] Alpha component (0..1)
		 */
		constructor (red: number, green: number, blue: number, alpha?: number);
		/** 
		 * Returns a new color that is darker than this color in the HSL color space.
		 * @method
		 * @public (method)
		 * @param   {number}         [factor] Darker factor (0..1).
		 * @returns {Ext.draw.Color}          
		 */
		createDarker? (factor?: number): Ext.draw.Color;
		/** 
		 * Returns a new color that is lighter than this color in the HSL color space.
		 * @method
		 * @public (method)
		 * @param   {number}         [factor] Lighter factor (0..1).
		 * @returns {Ext.draw.Color}          
		 */
		createLighter? (factor?: number): Ext.draw.Color;
		/** 
		 * Returns the gray value (0 to 255) of the color.
		 * 
		 * The gray value is calculated using the formula r_0.3 + g_0.59 + b*0.11.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getGrayscale? (): number;
		/** 
		 * Get the equivalent HSL components of the color.
		 * @method
		 * @public (method)
		 * @returns {number[]}  
		 */
		getHSL? (): number[];
		/** 
		 * Get the equivalent HSV components of the color.
		 * @method
		 * @public (method)
		 * @returns {number[]}  
		 */
		getHSV? (): number[];
		/** 
		 * Parse the string and set the current color.
		 * 
		 * Supported formats:
		 * 
		 * - '#rrggbb'
		 * - '#rgb', 'rgb(r,g,b)'
		 * - 'rgba(r,g,b,a)'
		 * - supported CSS color names (e.g., 'black', 'white', etc).
		 * 
		 * If the string is not recognized, setFromString returns rgba(0,0,0,0).
		 * @method
		 * @public (method)
		 * @param   {string} Color Color as string.
		 * @returns {object}       this
		 */
		setFromString? (Color: string): object;
		/** 
		 * Set current color based on the specified HSL values.
		 * @method
		 * @public (method)
		 * @param   {number}         h Hue component [0..360)
		 * @param   {number}         s Saturation component [0..1]
		 * @param   {number}         l Lightness component [0..1]
		 * @returns {Ext.draw.Color}   
		 */
		setHSL? (h: number, s: number, l: number): Ext.draw.Color;
		/** 
		 * Set current color based on the specified HSV values.
		 * @method
		 * @public (method)
		 * @param   {number}         h Hue component [0..360)
		 * @param   {number}         s Saturation component [0..1]
		 * @param   {number}         v Value component [0..1]
		 * @returns {Ext.draw.Color}   
		 */
		setHSV? (h: number, s: number, v: number): Ext.draw.Color;
		/** 
		 * Convert a color to hexadecimal format.
		 * @method
		 * @public (method)
		 * @param   {string|any[]} color
		 * The color value (i.e 'rgb(255, 255, 255)', 'color: #ffffff').
		 * Can also be an Array, in this case the function handles the first member.
		 * @returns {string}             The color in hexadecimal format.
		 */
		toHex? (color: string | any[]): string;
		/** 
		 * toString() returns a color in hex format ('#rrggbb') if the alpha is 1. If the
		 * alpha is less than one, toString() returns the color in RGBA format ('rgba(255,0,0,0.3)').
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		toString? (): string;
	}
	/** 
	 * [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html)
	 * The container that holds and manages instances of the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * in which sprites are rendered.
	 * 
	 * One way to create a draw container is:
	 * 
	 *     var drawContainer = Ext.create('Ext.draw.Container', {
	 *          renderTo: Ext.getBody(),
	 *          width:200,
	 *          height:200,
	 *          sprites: [{
	 *               type: 'circle',
	 *               fillStyle: '#79BB3F',
	 *               r: 100,
	 *               x: 100,
	 *               y: 100
	 *          }]
	 *     });
	 * 
	 * In this case we created a draw container and added a sprite to it.
	 * The _type_ of the sprite is _circle_, so if you run this code you'll see a green circle.
	 * 
	 * One can attach sprite event listeners to the draw container with the help of the
	 * [Ext.draw.plugin.SpriteEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.plugin.SpriteEvents.html) plugin.
	 * 
	 * For more information on Sprites, the core elements added to a draw container's surface,
	 * refer to the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html) documentation.
	 */
	class Container extends Ext.draw.ContainerBase {
		/** 
		 * The default URL used by [download](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#method-download).
		 * @property
		 * @public (property)
		 * @default "http://svg.sencha.io"
		 * @type {string}
		 */
		defaultDownloadServerUrl?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default 'surface'
		 * @type {string}
		 */
		defaultType?: string;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isDrawContainer?: boolean;
		/** 
		 * A list of export types supported by the server.
		 * @property
		 * @private (property)
		 * @default ["png", "pdf", "jpeg", "gif"]
		 * @type {any[]}
		 */
		supportedFormats?: any[];
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		supportedOptions?: object;
		/** 
		 * Downloads an image or PDF of the chart / drawing or opens it in a separate
		 * browser tab/window if the download can't be triggered. The exact behavior is
		 * platform and browser specific. For more consistent results on mobile devices use
		 * the [preview](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#method-preview) method instead.
		 * @method
		 * @public (method)
		 * @param   {object|Ext.draw.Container.methodParams.download.Config} [config] The following config options are supported:
		 * @returns {boolean}                                                         True if request was successfully sent to the server.
		 */
		download? (config?: object | Ext.draw.Container.methodParams.download.Config): boolean;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getCls? (): string;
		/** 
		 * Returns the value of [gradients](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getGradients? (): object[];
		/** 
		 * Produces an image of the chart / drawing.
		 * @method
		 * @public (method)
		 * @param   {string} [format]
		 * Possible options are 'image' (the method will return an
		 * Image object) and 'stream' (the method will return the image as a byte stream).<br/>
		 * If missing, the DataURL of the drawing's (or chart's) image will be returned.
		 * @returns {object}          
		 */
		getImage? (format?: string): object;
		/** 
		 * Returns the value of [resizeHandler](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-resizeHandler).
		 * @method
		 * @public (method)
		 * @returns {Function}  
		 */
		getResizeHandler? (): ExtGlobalFunction;
		/** 
		 * Returns the value of [sprites](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @returns {object[]}  
		 */
		getSprites? (): object[];
		/** 
		 * Get a surface by the given id or create one if it doesn't exist.
		 * @method
		 * @public (method)
		 * @param   {string}           [id]
		 * @returns {Ext.draw.Surface}      
		 */
		getSurface? (id?: string): Ext.draw.Surface;
		/** 
		 * Displays an image of a [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html) on screen.
		 * On mobile devices this lets users tap-and-hold to bring up the menu
		 * with image saving options.
		 * Note: some browsers won't save the preview image if it's SVG based
		 * (i.e. generated from a draw container that uses '[Ext.draw.engine.Svg](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.engine.Svg.html)' engine).
		 * And some platforms may not have the means of viewing successfully saved SVG images.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		preview? (): void;
		/** 
		 * Render all the surfaces in the container.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string} cls The new value.
		 * @returns {void}       
		 */
		setCls? (cls: string): void;
		/** 
		 * Sets the value of [gradients](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-gradients).
		 * @method
		 * @public (method)
		 * @param   {object[]} gradients The new value.
		 * @returns {void}               
		 */
		setGradients? (gradients: object[]): void;
		/** 
		 * Sets the value of [resizeHandler](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-resizeHandler).
		 * @method
		 * @public (method)
		 * @param   {Function} resizeHandler The new value.
		 * @returns {void}                   
		 */
		setResizeHandler? (resizeHandler: ExtGlobalFunction): void;
		/** 
		 * Sets the value of [sprites](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-sprites).
		 * @method
		 * @public (method)
		 * @param   {object[]} sprites The new value.
		 * @returns {void}             
		 */
		setSprites? (sprites: object[]): void;
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
		 * @param   {object} sprites
		 * @returns {void}           
		 */
		applySprites? (sprites: object): void;
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
		initAnimator? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onBodyResize? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} size
		 * @returns {void}        
		 */
		setBodySize? (size: object): void;
	}
	/** 
	 * [Ext.draw.Draw](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Draw.html)
	 * Utility class providing mathematics functionalities through all the draw package.
	 * @singleton (definition)
	 */
	interface Draw extends Ext.Base {
		/** 
		 * Converting radians to degrees.
		 * @method
		 * @public (method)
		 * @param   {number} radian
		 * @returns {number}        
		 */
		degrees? (radian: number): number;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object}  bbox1
		 * @param   {object}  bbox2
		 * @param   {number}  [padding]
		 * @returns {boolean}           
		 */
		isBBoxIntersect? (bbox1: object, bbox2: object, padding?: number): boolean;
		/** 
		 * Checks if a point is within a bounding box.
		 * @method
		 * @public (method)
		 * @param   {object}  x
		 * @param   {object}  y
		 * @param   {object}  bbox
		 * @returns {boolean}      
		 */
		isPointInBBox? (x: object, y: object, bbox: object): boolean;
		/** 
		 * Converting degrees to radians.
		 * @method
		 * @public (method)
		 * @param   {number} degrees
		 * @returns {number}         
		 */
		rad? (degrees: number): number;
		/** 
		 * @method
		 * @public (method)
		 * @param   {any} a
		 * @returns {any}   
		 */
		reflectFn? (a: any): any;
		/** 
		 * Given coordinates of the points, calculates coordinates of a Bezier curve that goes through them.
		 * @method
		 * @public (method)
		 * @param   {object} dataX x-coordinates of the points.
		 * @param   {object} dataY y-coordinates of the points.
		 * @param   {object} value A value to control the smoothness of the curve.
		 * @returns {object}       Object holding two arrays, for x and y coordinates of the curve.
		 */
		smooth? (dataX: object, dataY: object, value: object): object;
		/** 
		 * Natural cubic spline interpolation.
		 * This algorithm runs in linear time.
		 * @method
		 * @public (method)
		 * @param   {any[]} points Array of numbers.
		 * @returns {void}         
		 */
		spline? (points: any[]): void;
	}
	/** 
	 * Limited cache is a size limited cache container that stores limited number of objects.
	 * 
	 * When [get](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.LimitedCache.html#method-get) is called, the container will try to find the object in the list.
	 * If failed it will call the [feeder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.LimitedCache.html#cfg-feeder) to create that object. If there are too many
	 * objects in the container, the old ones are removed.
	 * 
	 * **Note:** This is not using a Least Recently Used policy due to simplicity and performance consideration.
	 * @private (class)
	 */
	class LimitedCache extends Ext.Base {}
	/** 
	 * [Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html)
	 * Utility class to calculate [affine transformation](http://en.wikipedia.org/wiki/Affine_transformation) matrix.
	 * 
	 * This class is compatible with [SVGMatrix](http://www.w3.org/TR/SVG11/coords.html#InterfaceSVGMatrix) except:
	 * 
	 * 1. [Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html) is not read only.
	 * 2. Using Number as its components rather than floats.
	 * 
	 * Using this class helps to reduce the severe numeric
	 * [problem with HTML Canvas and SVG transformation](http://stackoverflow.com/questions/8784405/large-numbers-in-html-canvas-translate-result-in-strange-behavior)
	 * 
	 * There's also no way to get current transformation matrix [in Canvas](http://stackoverflow.com/questions/7395813/html5-canvas-get-transform-matrix).
	 */
	class Matrix extends Ext.Base {
		/** 
		 * Get x-to-x component of the matrix. Avoid using it for performance consideration.
		 * Use [getXX](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html#method-getXX) instead.
		 * @property
		 * @public (property)
		 * @type {number}
		 */
		a?: number;
		/** 
		 * Create a matrix from `mat`. If `mat` is already a matrix, returns it.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {any}             mat
		 * @returns {Ext.draw.Matrix}     
		 */
		static create? (mat: any): Ext.draw.Matrix;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Base.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-create).
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
		 * @returns {Ext.draw.Matrix|object}  the created instance.
		 */
		static create? (): object;
		/** 
		 * Return the affine matrix that transform two points (x0, y0) and (x1, y1) to (x0p, y0p) and (x1p, y1p)
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number} x0
		 * @param   {number} y0
		 * @param   {number} x1
		 * @param   {number} y1
		 * @param   {number} x0p
		 * @param   {number} y0p
		 * @param   {number} x1p
		 * @param   {number} y1p
		 * @returns {void}       
		 */
		static createAffineMatrixFromTwoPair? (x0: number, y0: number, x1: number, y1: number, x0p: number, y0p: number, x1p: number, y1p: number): void;
		/** 
		 * Return the affine matrix that transform two points (x0, y0) and (x1, y1) to (x0p, y0p) and (x1p, y1p)
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number} x0
		 * @param   {number} y0
		 * @param   {number} x1
		 * @param   {number} y1
		 * @param   {number} x0p
		 * @param   {number} y0p
		 * @param   {number} x1p
		 * @param   {number} y1p
		 * @returns {void}       
		 */
		static createPanZoomFromTwoPair? (x0: number, y0: number, x1: number, y1: number, x0p: number, y0p: number, x1p: number, y1p: number): void;
		/** 
		 * Create a flyweight to wrap the given array.
		 * The flyweight will directly refer the object and the elements can be changed by other methods.
		 * 
		 * Do not hold the instance of flyweight matrix.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {any[]}           elements
		 * @returns {Ext.draw.Matrix}          
		 */
		static fly? (elements: any[]): Ext.draw.Matrix;
		/** 
		 * Create an affine transform matrix.
		 * @method
		 * @public (method)
		 * @param   {number} xx Coefficient from x to x
		 * @param   {number} xy Coefficient from x to y
		 * @param   {number} yx Coefficient from y to x
		 * @param   {number} yy Coefficient from y to y
		 * @param   {number} dx Offset of x
		 * @param   {number} dy Offset of y
		 */
		constructor (xx: number, xy: number, yx: number, yy: number, dx: number, dy: number);
		/** 
		 * Postpend a matrix onto the current.
		 * 
		 * **Note:** The given transform will come before the current one.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          xx Coefficient from x to x.
		 * @param   {number}          xy Coefficient from x to y.
		 * @param   {number}          yx Coefficient from y to x.
		 * @param   {number}          yy Coefficient from y to y.
		 * @param   {number}          dx Offset of x.
		 * @param   {number}          dy Offset of y.
		 * @returns {Ext.draw.Matrix}    this
		 */
		append? (xx: number, xy: number, yx: number, yy: number, dx: number, dy: number): Ext.draw.Matrix;
		/** 
		 * Postpend a matrix onto the current.
		 * 
		 * **Note:** The given transform will come before the current one.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix} matrix
		 * @returns {Ext.draw.Matrix}        this
		 */
		appendMatrix? (matrix: Ext.draw.Matrix): Ext.draw.Matrix;
		/** 
		 * Clone this matrix.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Matrix}  
		 */
		clone? (): Ext.draw.Matrix;
		/** 
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Matrix} matrix
		 * @returns {boolean}                
		 */
		equals? (matrix: Ext.draw.Matrix): boolean;
		/** 
		 * Horizontally flip the matrix
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.draw.Matrix}  this
		 */
		flipX? (): Ext.draw.Matrix;
		/** 
		 * Vertically flip the matrix
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.draw.Matrix}  this
		 */
		flipY? (): Ext.draw.Matrix;
		/** 
		 * Get offset x component of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getDX? (): number;
		/** 
		 * Get offset y component of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getDY? (): number;
		/** 
		 * Get the x scale of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getScaleX? (): number;
		/** 
		 * Get the y scale of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getScaleY? (): number;
		/** 
		 * Get x-to-x component of the matrix
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getXX? (): number;
		/** 
		 * Get x-to-y component of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getXY? (): number;
		/** 
		 * Get y-to-x component of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getYX? (): number;
		/** 
		 * Get y-to-y component of the matrix.
		 * @method
		 * @public (method)
		 * @returns {number}  
		 */
		getYY? (): number;
		/** 
		 * Return a new matrix represents the opposite transformation of the current one.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Matrix} [target]
		 * A target matrix. If present, it will receive
		 * the result of inversion to avoid creating a new object.
		 * @returns {Ext.draw.Matrix}          
		 */
		inverse? (target?: Ext.draw.Matrix): Ext.draw.Matrix;
		/** 
		 * Determines if this matrix has the same values as another matrix.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Matrix} matrix A maxtrix or array of its elements.
		 * @returns {boolean}                
		 */
		isEqual? (matrix: Ext.draw.Matrix): boolean;
		/** 
		 * Determines whether this matrix is an identity matrix (no transform).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		isIdentity? (): boolean;
		/** 
		 * Performs matrix multiplication. This matrix is post-multiplied by another matrix.
		 * 
		 * **Note:** The given transform will come before the current one.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix} matrix
		 * @returns {Ext.draw.Matrix}        this
		 */
		multiply? (matrix: Ext.draw.Matrix): Ext.draw.Matrix;
		/** 
		 * Prepend a matrix onto the current.
		 * 
		 * **Note:** The given transform will come after the current one.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          xx Coefficient from x to x.
		 * @param   {number}          xy Coefficient from x to y.
		 * @param   {number}          yx Coefficient from y to x.
		 * @param   {number}          yy Coefficient from y to y.
		 * @param   {number}          dx Offset of x.
		 * @param   {number}          dy Offset of y.
		 * @returns {Ext.draw.Matrix}    this
		 */
		prepend? (xx: number, xy: number, yx: number, yy: number, dx: number, dy: number): Ext.draw.Matrix;
		/** 
		 * Prepend a matrix onto the current.
		 * 
		 * **Note:** The given transform will come after the current one.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {Ext.draw.Matrix} matrix
		 * @returns {Ext.draw.Matrix}        this
		 */
		prependMatrix? (matrix: Ext.draw.Matrix): Ext.draw.Matrix;
		/** 
		 * Reset the matrix to identical.
		 * @method
		 * @public (method)
		 * @chainable
		 * @returns {Ext.draw.Matrix}  this
		 */
		reset? (): Ext.draw.Matrix;
		/** 
		 * Rotate the matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          angle     Radians to rotate
		 * @param   {number|null}     rcx       Center of rotation.
		 * @param   {number|null}     rcy       Center of rotation.
		 * @param   {boolean}         [prepend] If `true`, this will transformation be prepended to the matrix.
		 * @returns {Ext.draw.Matrix}           this
		 */
		rotate? (angle: number, rcx: number | null, rcy: number | null, prepend?: boolean): Ext.draw.Matrix;
		/** 
		 * Rotate the matrix by the angle of a vector.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          x
		 * @param   {number}          y
		 * @param   {boolean}         [prepend] If `true`, this will transformation be prepended to the matrix.
		 * @returns {Ext.draw.Matrix}           this
		 */
		rotateFromVector? (x: number, y: number, prepend?: boolean): Ext.draw.Matrix;
		/** 
		 * Scale the matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          sx
		 * @param   {number}          sy
		 * @param   {number}          scx
		 * @param   {number}          scy
		 * @param   {boolean}         [prepend] If `true`, this will transformation be prepended to the matrix.
		 * @returns {Ext.draw.Matrix}           this
		 */
		scale? (sx: number, sy: number, scx: number, scy: number, prepend?: boolean): Ext.draw.Matrix;
		/** 
		 * Set the elements of a Matrix
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          xx
		 * @param   {number}          xy
		 * @param   {number}          yx
		 * @param   {number}          yy
		 * @param   {number}          dx
		 * @param   {number}          dy
		 * @returns {Ext.draw.Matrix}    this
		 */
		set? (xx: number, xy: number, yx: number, yy: number, dx: number, dy: number): Ext.draw.Matrix;
		/** 
		 * Shear the matrix along the x-axis.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}          factor The horizontal shear factor.
		 * @returns {Ext.draw.Matrix}        this
		 */
		shearX? (factor: object): Ext.draw.Matrix;
		/** 
		 * Shear the matrix along the y-axis.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}          factor The vertical shear factor.
		 * @returns {Ext.draw.Matrix}        this
		 */
		shearY? (factor: object): Ext.draw.Matrix;
		/** 
		 * Skew the matrix
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          angle
		 * @returns {Ext.draw.Matrix}       this
		 */
		skewX? (angle: number): Ext.draw.Matrix;
		/** 
		 * Skew the matrix
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          angle
		 * @returns {Ext.draw.Matrix}       this
		 */
		skewY? (angle: number): Ext.draw.Matrix;
		/** 
		 * Splits this transformation matrix into Scale, Rotate, Translate components,
		 * assuming it was produced by applying transformations in that order.
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		split? (): object;
		/** 
		 * Create an array of elements by horizontal order (xx,yx,dx,yx,yy,dy).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		toArray? (): any[];
		/** 
		 * Apply the matrix to a drawing context.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {object}          ctx
		 * @returns {Ext.draw.Matrix}     this
		 */
		toContext? (ctx: object): Ext.draw.Matrix;
		/** 
		 * Get an array of elements.
		 * The numbers are rounded to keep only 4 decimals.
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		toString? (): any[];
		/** 
		 * Return a string that can be used as transform attribute in SVG.
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		toSvg? (): string;
		/** 
		 * Create an array of elements by vertical order (xx,xy,yx,yy,dx,dy).
		 * @method
		 * @public (method)
		 * @returns {any[]|string}  
		 */
		toVerticalArray? (): any[] | string;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} bbox     Given as `{x: Number, y: Number, width: Number, height: Number}`.
		 * @param   {number} [radius]
		 * @param   {object} [target]
		 * Optional target object to recieve the result.
		 * Recommended to use it for better gc.
		 * @returns {object}          Object with x, y, width and height.
		 */
		transformBBox? (bbox: object, radius?: number, target?: object): object;
		/** 
		 * Transform a list for points.
		 * 
		 * **Note:** will change the original list but not points inside it.
		 * @method
		 * @public (method)
		 * @param   {any[]} list
		 * @returns {any[]}      list
		 */
		transformList? (list: any[]): any[];
		/** 
		 * Transform a point to a new array.
		 * @method
		 * @public (method)
		 * @param   {any[]} point
		 * @returns {any[]}       
		 */
		transformPoint? (point: any[]): any[];
		/** 
		 * Translate the matrix.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {number}          x
		 * @param   {number}          y
		 * @param   {boolean}         [prepend] If `true`, this will transformation be prepended to the matrix.
		 * @returns {Ext.draw.Matrix}           this
		 */
		translate? (x: number, y: number, prepend?: boolean): Ext.draw.Matrix;
		/** 
		 * Transform point returning the x component of the result.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   x component of the result.
		 */
		x? (x: number, y: number): number;
		/** 
		 * Transform point returning the y component of the result.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {number}   y component of the result.
		 */
		y? (x: number, y: number): number;
	}
	/** 
	 * [Ext.draw.Path](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Path.html)
	 * Class representing a path.
	 * Designed to be compatible with [CanvasPathMethods](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#canvaspathmethods)
	 * and will hopefully be replaced by the browsers' implementation of the Path object.
	 */
	class Path extends Ext.Base {
		/** 
		 * Create a path from pathString.
		 * @method
		 * @public (method)
		 * @param   {string} pathString
		 */
		constructor (pathString: string);
		/** 
		 * Create an circular arc.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @param   {number} radius
		 * @param   {number} startAngle
		 * @param   {number} endAngle
		 * @param   {number} anticlockwise
		 * @returns {void}                 
		 */
		arc? (x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: number): void;
		/** 
		 * [http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes](http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes)
		 * @method
		 * @public (method)
		 * @param   {number} rx
		 * @param   {number} ry
		 * @param   {number} rotation Differ from svg spec, this is radian.
		 * @param   {number} fA
		 * @param   {number} fS
		 * @param   {number} x2
		 * @param   {number} y2
		 * @returns {void}            
		 */
		arcSvg? (rx: number, ry: number, rotation: number, fA: number, fS: number, x2: number, y2: number): void;
		/** 
		 * Create a elliptic arc curve compatible with SVG's arc to instruction.
		 * 
		 * The curve start from (`x1`, `y1`) and ends at (`x2`, `y2`). The ellipse
		 * has radius `rx` and `ry` and a rotation of `rotation`.
		 * @method
		 * @public (method)
		 * @param   {number} x1
		 * @param   {number} y1
		 * @param   {number} x2
		 * @param   {number} y2
		 * @param   {number} [rx]
		 * @param   {number} [ry]
		 * @param   {number} [rotation]
		 * @returns {void}              
		 */
		arcTo? (x1: number, y1: number, x2: number, y2: number, rx?: number, ry?: number, rotation?: number): void;
		/** 
		 * A cubic bezier curve to a position.
		 * @method
		 * @public (method)
		 * @param   {number} cx1
		 * @param   {number} cy1
		 * @param   {number} cx2
		 * @param   {number} cy2
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {void}       
		 */
		bezierCurveTo? (cx1: number, cy1: number, cx2: number, cy2: number, x: number, y: number): void;
		/** 
		 * Clear the path.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clear? (): void;
		/** 
		 * Clone this path.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Path}  
		 */
		clone? (): Ext.draw.Path;
		/** 
		 * Close this path with a straight line.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		closePath? (): void;
		/** 
		 * Create an elliptic arc.
		 * 
		 * See [the whatwg reference of ellipse](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-ellipse).
		 * @method
		 * @public (method)
		 * @param   {number} cx
		 * @param   {number} cy
		 * @param   {number} radiusX
		 * @param   {number} radiusY
		 * @param   {number} rotation
		 * @param   {number} startAngle
		 * @param   {number} endAngle
		 * @param   {number} anticlockwise
		 * @returns {void}                 
		 */
		ellipse? (cx: number, cy: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: number): void;
		/** 
		 * Reconstruct path from cubic bezier curve stripes.
		 * @method
		 * @public (method)
		 * @param   {any[]} stripes
		 * @returns {void}          
		 */
		fromStripes? (stripes: any[]): void;
		/** 
		 * Feed the path from svg path string.
		 * @method
		 * @public (method)
		 * @param   {string} pathString
		 * @returns {void}              
		 */
		fromSvgString? (pathString: string): void;
		/** 
		 * Get the bounding box of this matrix.
		 * @method
		 * @public (method)
		 * @param   {object} [target] Optional object to receive the result.
		 * @returns {object}          Object with x, y, width and height
		 */
		getDimension? (target?: object): object;
		/** 
		 * Get the bounding box as if the path is transformed by a matrix.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Matrix} matrix
		 * @param   {object}          [target] Optional object to receive the result.
		 * @returns {object}                   An object with x, y, width and height.
		 */
		getDimensionWithTransform? (matrix: Ext.draw.Matrix, target?: object): object;
		/** 
		 * Calculates the points where the given segment intersects the path.
		 * If four parameters are given then the segment is considered to be a line segment,
		 * where given parameters are the coordinates of the start and end points.
		 * If eight parameters are given then the segment is considered to be
		 * a cubic Bezier curve segment, where given parameters are the
		 * coordinates of its edge points and control points.
		 * @method
		 * @public (method)
		 * @param   {object} x1
		 * @param   {object} y1
		 * @param   {object} x2
		 * @param   {object} y2
		 * @param   {object} x3
		 * @param   {object} y3
		 * @param   {object} x4
		 * @param   {object} y4
		 * @returns {any[]}     
		 */
		getSegmentIntersections? (x1: object, y1: object, x2: object, y2: object, x3: object, y3: object, x4: object, y4: object): any[];
		/** 
		 * Tests whether the given point is inside the path.
		 * @method
		 * @public (method)
		 * @param   {number}  x
		 * @param   {number}  y
		 * @returns {boolean}   
		 */
		isPointInPath? (x: number, y: number): boolean;
		/** 
		 * Tests whether the given point is on the path.
		 * @method
		 * @public (method)
		 * @param   {number}  x
		 * @param   {number}  y
		 * @returns {boolean}   
		 */
		isPointOnPath? (x: number, y: number): boolean;
		/** 
		 * A straight line to a position.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {void}     
		 */
		lineTo? (x: number, y: number): void;
		/** 
		 * Move to a position.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {void}     
		 */
		moveTo? (x: number, y: number): void;
		/** 
		 * A quadratic bezier curve to a position.
		 * @method
		 * @public (method)
		 * @param   {number} cx
		 * @param   {number} cy
		 * @param   {number} x
		 * @param   {number} y
		 * @returns {void}      
		 */
		quadraticCurveTo? (cx: number, cy: number, x: number, y: number): void;
		/** 
		 * Draw a rectangle and close it.
		 * @method
		 * @public (method)
		 * @param   {number} x
		 * @param   {number} y
		 * @param   {number} width
		 * @param   {number} height
		 * @returns {void}          
		 */
		rect? (x: number, y: number, width: number, height: number): void;
		/** 
		 * Return an svg path string for this path.
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		toString? (): string;
		/** 
		 * Convert path to bezier curve stripes.
		 * @method
		 * @public (method)
		 * @param   {any[]} [target] The optional array to receive the result.
		 * @returns {any[]}          
		 */
		toStripes? (target?: any[]): any[];
		/** 
		 * Transform the current path by a matrix.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Matrix} matrix
		 * @returns {void}                   
		 */
		transform? (matrix: Ext.draw.Matrix): void;
	}
	/** 
	 * Singleton that provides methods used by the [Ext.draw.Path](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Path.html)
	 * for hit testing and finding path intersection points.
	 * @private (class)
	 */
	class PathUtil extends Ext.Base {}
	/** 
	 * [Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)
	 * A helper class to facilitate common operations on points and vectors.
	 */
	class Point extends Ext.Base {
		/** 
		 * Creates a flyweight [Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html) instance.
		 * Takes the same parameters as the [constructor](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html#method-constructor).
		 * Do not hold the instance of the flyweight point.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}         point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {Ext.draw.Point}       
		 */
		static fly? (point: object): Ext.draw.Point;
		/** 
		 * Creates a point.
		 * 
		 *    new Ext.draw.Point(3, 4);
		 *    new Ext.draw.Point(3); // both x and y equal 3
		 *    new Ext.draw.Point([3, 4]);
		 *    new Ext.draw.Point({x: 3, y: 4});
		 *    new Ext.draw.Point(p); // where `p` is a Ext.draw.Point instance.
		 * 
		 * @method
		 * @public (method)
		 * @param   {object} point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 */
		constructor (point: object);
		/** 
		 * Returns a new point with absolute values of the x and y values of this point.
		 * This point is not modified.
		 * @method
		 * @public (method)
		 * @param   {object}         x
		 * @param   {object}         y
		 * @returns {Ext.draw.Point}   
		 */
		abs? (x: object, y: object): Ext.draw.Point;
		/** 
		 * Adds another vector to this one and returns the resulting vector
		 * without changing this vector.
		 * @method
		 * @public (method)
		 * @param   {object}         point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {Ext.draw.Point}       
		 */
		add? (point: object): Ext.draw.Point;
		/** 
		 * Returns a new point with ceiled x and y values. This point is not modified.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Point}  
		 */
		ceil? (): Ext.draw.Point;
		/** 
		 * Returns a copy of the point.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Point}  
		 */
		clone? (): Ext.draw.Point;
		/** 
		 * Returns a vector which coordinates are the result of division of this vector's
		 * coordinates by the given number. This vector is not modified.
		 * This vector is not modified.
		 * @method
		 * @public (method)
		 * @param   {object}         n {Number} The denominator.
		 * @returns {Ext.draw.Point}   
		 */
		div? (n: object): Ext.draw.Point;
		/** 
		 * Returns the dot product of this vector and the given vector.
		 * @method
		 * @public (method)
		 * @param   {object} point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {number}       
		 */
		dot? (point: object): number;
		/** 
		 * Checks whether coordinates of the point match those of the point provided.
		 * @method
		 * @public (method)
		 * @param   {object}  point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {boolean}       
		 */
		equals? (point: object): boolean;
		/** 
		 * Returns a new point with floored x and y values. This point is not modified.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Point}  
		 */
		floor? (): Ext.draw.Point;
		/** 
		 * Returns the vector from the point perpendicular to the line (shortest distance).
		 * Where line is specified using two points or the coordinates of those points.
		 * @method
		 * @public (method)
		 * @param   {object}         p1 {[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @param   {object}         p2 {[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {Ext.draw.Point}    
		 */
		getDistanceToLine? (p1: object, p2: object): Ext.draw.Point;
		/** 
		 * Checks if both x and y coordinates of the point are valid numbers.
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		isNumber? (): boolean;
		/** 
		 * Checks if both x and y coordinates of the point are zero.
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		isZero? (): boolean;
		/** 
		 * Returns the result of scalar multiplication of this vector by the given factor.
		 * This vector is not modified.
		 * @method
		 * @public (method)
		 * @param   {object}         n {Number} The factor.
		 * @returns {Ext.draw.Point}   
		 */
		mul? (n: object): Ext.draw.Point;
		/** 
		 * Normalizes the vector by changing its length to 1 without changing its angle.
		 * The returned result is a normalized vector. This vector is not modified.
		 * @method
		 * @public (method)
		 * @param   {object}         length {Number=1} The length of the normalized vector. Defaults to 1.
		 * @returns {Ext.draw.Point}        
		 */
		normalize? (length: object): Ext.draw.Point;
		/** 
		 * Rotates the point by the given angle. This point is not modified.
		 * @method
		 * @public (method)
		 * @param   {object}         angle  {Number} The rotation angle.
		 * @param   {object}         center {[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)} The center of rotation (optional). Defaults to origin.
		 * @returns {Ext.draw.Point}        The rotated point.
		 */
		rotate? (angle: object, center: object): Ext.draw.Point;
		/** 
		 * Returns a new point with rounded x and y values. This point is not modified.
		 * @method
		 * @public (method)
		 * @returns {Ext.draw.Point}  
		 */
		round? (): Ext.draw.Point;
		/** 
		 * Sets coordinates of the point.
		 * Takes the same parameters as the [constructor](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html#method-constructor).
		 * @method
		 * @public (method)
		 * @param   {object} point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {void}         
		 */
		set? (point: object): void;
		/** 
		 * Sets the angle of the vector (measured from the x-axis to the vector)
		 * without changing its length.
		 * @method
		 * @public (method)
		 * @param   {object} angle {Number}
		 * @returns {void}         
		 */
		setAngle? (angle: object): void;
		/** 
		 * Sets the length of the vector without changing its angle.
		 * @method
		 * @public (method)
		 * @param   {object} length {Number}
		 * @returns {void}          
		 */
		setLength? (length: object): void;
		/** 
		 * Sets both the angle and the length of the vector.
		 * A point can be thought of as a vector pointing from the origin to the point's location.
		 * This can also be interpreted as setting coordinates of a point in the polar
		 * coordinate system.
		 * @method
		 * @public (method)
		 * @param   {object} angle  {Number}
		 * @param   {object} length {Number}
		 * @returns {void}          
		 */
		setPolar? (angle: object, length: object): void;
		/** 
		 * Sets the x-coordinate of the point.
		 * @method
		 * @public (method)
		 * @param   {object} x {Number}
		 * @returns {void}     
		 */
		setX? (x: object): void;
		/** 
		 * Sets the y-coordinate of the point.
		 * @method
		 * @public (method)
		 * @param   {object} y {Number}
		 * @returns {void}     
		 */
		setY? (y: object): void;
		/** 
		 * Subtracts another vector from this one and returns the resulting vector
		 * without changing this vector.
		 * @method
		 * @public (method)
		 * @param   {object}         point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {Ext.draw.Point}       
		 */
		sub? (point: object): Ext.draw.Point;
		/** 
		 * Transforms the point from one coordinate system to another
		 * using the transformation matrix provided. This point is not modified.
		 * @method
		 * @public (method)
		 * @param   {object}         matrix {[Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html)/Number[]} A trasformation matrix or its elements.
		 * @returns {Ext.draw.Point}        
		 */
		transform? (matrix: object): Ext.draw.Point;
	}
	/** 
	 * [Ext.draw.SegmentTree](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.SegmentTree.html)
	 * This class we summarize the data and returns it when required.
	 */
	class SegmentTree extends Ext.Base {
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Returns the minimum range of data that fits the given range and step size.
		 * @method
		 * @public (method)
		 * @param   {number} min
		 * @param   {number} max
		 * @param   {number} estStep
		 * @returns {object}         The aggregation information.
		 */
		getAggregation? (min: number, max: number, estStep: number): object;
		/** 
		 * Returns the value of [strategy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.SegmentTree.html#cfg-strategy).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getStrategy? (): string;
		/** 
		 * Sets the data of the segment tree.
		 * @method
		 * @public (method)
		 * @param   {number} dataX
		 * @param   {number} dataOpen
		 * @param   {number} dataHigh
		 * @param   {number} dataLow
		 * @param   {number} dataClose
		 * @returns {void}             
		 */
		setData? (dataX: number, dataOpen: number, dataHigh: number, dataLow: number, dataClose: number): void;
		/** 
		 * Sets the value of [strategy](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.SegmentTree.html#cfg-strategy).
		 * @method
		 * @public (method)
		 * @param   {string} strategy The new value.
		 * @returns {void}            
		 */
		setStrategy? (strategy: string): void;
	}
	/** 
	 * [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * A Surface is an interface to render methods inside a draw [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html).
	 * A Surface contains methods to render sprites, get bounding boxes of sprites, add
	 * sprites to the canvas, initialize other graphic components, etc. One of the most used
	 * methods for this class is the `add` method, to add Sprites to the surface.
	 * 
	 * Most of the Surface methods are abstract and they have a concrete implementation
	 * in Canvas or SVG engines.
	 * 
	 * A Surface instance can be accessed as a property of a draw container. For example:
	 * 
	 *    drawContainer.getSurface('main').add({
	 *        type: 'circle',
	 *        fill: '#ffc',
	 *        radius: 100,
	 *        x: 100,
	 *        y: 100
	 *    });
	 *    drawContainer.renderFrame();
	 * 
	 * The configuration object passed in the `add` method is the same as described in the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html)
	 * class documentation.
	 * 
	 * ## Example
	 * 
	 *    drawContainer.getSurface('main').add([
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#f00',
	 *            x: 10,
	 *            y: 10
	 *        },
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#0f0',
	 *            x: 50,
	 *            y: 50
	 *        },
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#00f',
	 *            x: 100,
	 *            y: 100
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 10,
	 *            y: 10
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 50,
	 *            y: 50
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 100,
	 *            y: 100
	 *        }
	 *    ]);
	 *    drawContainer.renderFrame();
	 * 
	 * **From override Ext.draw.overrides.Surface:** Adds hit testing methods to the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html).
	 * Included by the [Ext.draw.PathUtil](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.PathUtil.html).
	 */
	class Surface extends Ext.draw.SurfaceBase {
		/** 
		 * The reported device pixel density.
		 * devicePixelRatio is only supported from IE11,
		 * so we use deviceXDPI and logicalXDPI that are supported from IE6.
		 * @property
		 * @public (property)
		 * @type {object}
		 */
		devicePixelRatio?: object;
		/** 
		 * @property
		 * @private (property)
		 * @type {object}
		 */
		deprecated?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default 0
		 * @type {number}
		 */
		dirtyPredecessorCount?: number;
		/** 
		 * @property
		 * @private (property)
		 * @default [0, 0, 0, 0]
		 * @type {any[]}
		 */
		emptyRect?: any[];
		/** 
		 * This flag is used to indicate that `predecessors` surfaces that should render
		 * before this surface renders are dirty, and to call `renderFrame`
		 * when all `predecessors` have their `renderFrame` called (i.e. not dirty anymore).
		 * This flag indicates that current surface has surfaces that are yet to render
		 * before current surface can render. When all the `predecessors` surfaces
		 * have rendered, i.e. when `dirtyPredecessorCount` reaches zero,
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		isPendingRenderFrame?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		isSurface?: boolean;
		/** 
		 * @method
		 * @public (method)
		 * @param   {object} config
		 */
		constructor (config: object);
		/** 
		 * Add a Sprite to the surface.
		 * You can put any number of objects as the parameter.
		 * See [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html) for the configuration object to be passed into this method.
		 * 
		 * For example:
		 * 
		 *    drawContainer.getSurface().add({
		 *        type: 'circle',
		 *        fill: '#ffc',
		 *        radius: 100,
		 *        x: 100,
		 *        y: 100
		 *    });
		 *    drawContainer.renderFrame();
		 * 
		 * @method
		 * @public (method)
		 * @param   {object|object[]}                                 sprite
		 * @returns {Ext.draw.sprite.Sprite|Ext.draw.sprite.Sprite[]}        
		 */
		add? (sprite: object | object[]): Ext.draw.sprite.Sprite | Ext.draw.sprite.Sprite[];
		/** 
		 * Empty the surface content (without touching the sprites.)
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		clear? (): void;
		/** 
		 * Destroys the surface. This is done by removing all components from it and
		 * also removing its reference to a DOM element.
		 * 
		 * For example:
		 * 
		 *     drawContainer.surface.destroy();
		 * 
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Flattens the given drawing surfaces into a single image
		 * and returns an object containing the data (in the DataURL format)
		 * and the type (e.g. 'png' or 'svg') of that image.
		 * @method
		 * @public (method)
		 * @param   {object|Ext.draw.Surface.methodParams.flatten.Size} size     The size of the final image.
		 * @param   {Ext.draw.Surface[]}                                surfaces The surfaces to flatten.
		 * @returns {object}                                                     
		 */
		flatten? (size: object | Ext.draw.Surface.methodParams.flatten.Size, surfaces: Ext.draw.Surface[]): object;
		/** 
		 * Get the sprite by id or index.
		 * It will first try to find a sprite with the given id, otherwise will try to use the id as an index.
		 * @method
		 * @public (method)
		 * @param   {string|number}          id
		 * @returns {Ext.draw.sprite.Sprite}    
		 */
		get? (id: string | number): Ext.draw.sprite.Sprite;
		/** 
		 * Return the minimal bounding box that contains all the sprites bounding boxes in the given list of sprites.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.sprite.Sprite[]|Ext.draw.sprite.Sprite} sprites
		 * @param   {boolean}                                         [isWithoutTransform]
		 * @returns {Ext.draw.Surface.methodReturns.getBBox}                               
		 */
		getBBox? (sprites: Ext.draw.sprite.Sprite[] | Ext.draw.sprite.Sprite, isWithoutTransform?: boolean): Ext.draw.Surface.methodReturns.getBBox;
		/** 
		 * Returns the value of [background](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-background).
		 * @method
		 * @public (method)
		 * @returns {object}  
		 */
		getBackground? (): object;
		/** 
		 * Returns the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @returns {string}  
		 */
		getCls? (): string;
		/** 
		 * Returns the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-dirty).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getDirty? (): boolean;
		/** 
		 * Returns the value of [flipRtlText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-flipRtlText).
		 * @method
		 * @public (method)
		 * @returns {boolean}  
		 */
		getFlipRtlText? (): boolean;
		/** 
		 * Returns the value of [items](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-items).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getItems? (): any[];
		/** 
		 * Returns the value of [rect](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-rect).
		 * @method
		 * @public (method)
		 * @returns {any[]}  
		 */
		getRect? (): any[];
		/** 
		 * Performs a hit test on all sprites in the surface, returning the first matching one.
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
		 * Performs a hit test on all sprites in the surface, returning the first matching one.
		 * Since hit testing is typically performed on mouse events, this convenience method
		 * converts event's page coordinates to surface coordinates before calling [hitTest](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#method-hitTest).
		 * @method
		 * @public (method)
		 * @param   {any[]}  point   An event object.
		 * @param   {object} options Hit testing options.
		 * @returns {object} 
		 * A hit result object that contains more information about what
		 * exactly was hit or null if nothing was hit.
		 */
		hitTestEvent? (point: any[], options: object): object;
		/** 
		 * Remove a given sprite from the surface,
		 * optionally destroying the sprite in the process.
		 * You can also call the sprite's own `remove` method.
		 * 
		 * For example:
		 * 
		 *     drawContainer.surface.remove(sprite);
		 *     // or...
		 *     sprite.remove();
		 * 
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.sprite.Sprite|string} sprite      A sprite instance or its ID.
		 * @param   {boolean}                       [isDestroy] If `true`, the sprite will be destroyed.
		 * @returns {Ext.draw.sprite.Sprite}                    Returns the removed/destroyed sprite or `null` otherwise.
		 */
		remove? (sprite: Ext.draw.sprite.Sprite | string, isDestroy?: boolean): Ext.draw.sprite.Sprite;
		/** 
		 * Remove all sprites from the surface, optionally destroying the sprites in the process.
		 * 
		 * For example:
		 * 
		 *    drawContainer.getSurface('main').removeAll();
		 * 
		 * @method
		 * @public (method)
		 * @param   {boolean} [isDestroy]
		 * @returns {void}                
		 */
		removeAll? (isDestroy?: boolean): void;
		/** 
		 * Triggers the re-rendering of the canvas.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		renderFrame? (): void;
		/** 
		 * Force the element to redraw.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		repaint? (): void;
		/** 
		 * Reset the matrix of the surface.
		 * @method
		 * @public (method)
		 * @returns {void}  
		 */
		resetTransform? (): void;
		/** 
		 * Round the number to align to the pixels on device.
		 * @method
		 * @public (method)
		 * @param   {number} num The number to align.
		 * @returns {number}     The resultant alignment.
		 */
		roundPixel? (num: number): number;
		/** 
		 * Sets the value of [background](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-background).
		 * @method
		 * @public (method)
		 * @param   {object} background The new value.
		 * @returns {void}              
		 */
		setBackground? (background: object): void;
		/** 
		 * Sets the value of [cls](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-cls).
		 * @method
		 * @public (method)
		 * @param   {string} cls The new value.
		 * @returns {void}       
		 */
		setCls? (cls: string): void;
		/** 
		 * Sets the value of [dirty](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-dirty).
		 * @method
		 * @public (method)
		 * @param   {boolean} dirty The new value.
		 * @returns {void}          
		 */
		setDirty? (dirty: boolean): void;
		/** 
		 * Sets the value of [flipRtlText](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-flipRtlText).
		 * @method
		 * @public (method)
		 * @param   {boolean} flipRtlText The new value.
		 * @returns {void}                
		 */
		setFlipRtlText? (flipRtlText: boolean): void;
		/** 
		 * Sets the value of [items](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-items).
		 * @method
		 * @public (method)
		 * @param   {any[]} items The new value.
		 * @returns {void}        
		 */
		setItems? (items: any[]): void;
		/** 
		 * Sets the value of [rect](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#cfg-rect).
		 * @method
		 * @public (method)
		 * @param   {any[]} rect The new value.
		 * @returns {void}       
		 */
		setRect? (rect: any[]): void;
		/** 
		 * @method
		 * @public (method)
		 * @param   {any[]} list
		 * @returns {any[]}      Sorted array.
		 */
		stableSort? (list: any[]): any[];
		/** 
		 * Mark the surface to render after another surface is updated.
		 * @method
		 * @public (method)
		 * @param   {Ext.draw.Surface} surface The surface to wait for.
		 * @returns {void}                     
		 */
		waitFor? (surface: Ext.draw.Surface): void;
		/** 
		 * Clears the current transformation state on the surface.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		clearTransform? (): void;
		/** 
		 * Renders a single sprite into the surface.
		 * Do not call it from outside `renderFrame` method.
		 * @method
		 * @private (method)
		 * @param   {Ext.draw.sprite.Sprite} sprite The Sprite to be rendered.
		 * @returns {boolean}                       returns `false` to stop the rendering to continue.
		 */
		renderSprite? (sprite: Ext.draw.sprite.Sprite): boolean;
		/** 
		 * Invoked when a sprite is added to the surface.
		 * @method
		 * @protected (method)
		 * @param   {Ext.draw.sprite.Sprite} sprite The sprite to be added.
		 * @returns {void}                          
		 */
		onAdd? (sprite: Ext.draw.sprite.Sprite): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} background
		 * @param   {object} oldBackground
		 * @returns {void}                 
		 */
		applyBackground? (background: object, oldBackground: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @returns {void}         
		 */
		applyItems? (items: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rect
		 * @param   {object} oldRect
		 * @returns {void}           
		 */
		applyRect? (rect: object, oldRect: object): void;
		/** 
		 * Creates an item and appends it to the surface. Called
		 * as an internal method when calling `add`.
		 * @method
		 * @private (method)
		 * @param   {object} config
		 * @returns {void}          
		 */
		createItem? (config: object): void;
		/** 
		 * Converts event's page coordinates into surface coordinates.
		 * Note: surface's x-coordinates always go LTR, regardless of RTL mode.
		 * @method
		 * @private (method)
		 * @param   {object} e
		 * @returns {void}     
		 */
		getEventXY? (e: object): void;
		/** 
		 * Order the items by their z-index if any of that has been changed since last sort.
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		orderByZIndex? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} dirty
		 * @returns {void}         
		 */
		updateDirty? (dirty: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} rect
		 * @returns {void}        
		 */
		updateRect? (rect: object): void;
	}
	/** 
	 * [Ext.draw.TextMeasurer](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.TextMeasurer.html)
	 * Utility class to provide a way to _approximately_ measure the dimension of text
	 * without a drawing context.
	 * @singleton (definition)
	 */
	interface TextMeasurer extends Ext.Base {
		/** 
		 * Measure a text with specific font.
		 * This will split the text to lines and add up their size.
		 * That may _not_ be the exact size of the text as it is displayed.
		 * @method
		 * @public (method)
		 * @param   {string} text
		 * @param   {string} font
		 * @returns {object}      An object with `width`, `height` and `sizes` properties.
		 */
		measureText? (text: string, font: string): object;
		/** 
		 * Measure a single-line text with specific font.
		 * This will split the text into characters and add up their size.
		 * That may _not_ be the exact size of the text as it is displayed.
		 * @method
		 * @public (method)
		 * @param   {string} text
		 * @param   {string} font
		 * @returns {object}      An object with `width` and `height` properties.
		 */
		measureTextSingleLine? (text: string, font: string): object;
	}
	/** 
	 * [Ext.draw.TimingFunctions](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.TimingFunctions.html)
	 * Singleton that provides easing functions for use in sprite animations.
	 * @singleton (definition)
	 */
	interface TimingFunctions extends Ext.Base {}
}
declare namespace Ext {
	class draw {
		/** 
		 * [Ext.draw.Animator](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Animator.html)
		 * Singleton class that manages the animation pool.
		 * @singleton (instance)
		 */
		static readonly Animator?: Ext.draw.Animator;
		/** 
		 * [Ext.draw.Draw](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Draw.html)
		 * Utility class providing mathematics functionalities through all the draw package.
		 * @singleton (instance)
		 */
		static readonly Draw?: Ext.draw.Draw;
		/** 
		 * [Ext.draw.TimingFunctions](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.TimingFunctions.html)
		 * Singleton that provides easing functions for use in sprite animations.
		 * @singleton (instance)
		 */
		static readonly TimingFunctions?: Ext.draw.TimingFunctions;
		/** 
		 * [Ext.draw.TextMeasurer](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.TextMeasurer.html)
		 * Utility class to provide a way to _approximately_ measure the dimension of text
		 * without a drawing context.
		 * @singleton (instance)
		 */
		static readonly TextMeasurer?: Ext.draw.TextMeasurer;
	}
}
declare namespace Ext.draw {
	class Component extends Ext.draw.Container {}
}
declare namespace Ext.draw.Color {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.Color](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Color.html)
	 * Represents an RGB color and provides helper functions on it e.g. to get
	 * color components in HSL color space.
	 */
	interface Def extends Ext.draw.Color {
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
		 * @type {Ext.draw.Color.Cfg}
		 */
		config?: Ext.draw.Color.Cfg;
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
		 * @type {Ext.draw.Color.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.draw.Color.Statics | any;
	}
}
declare namespace Ext.draw.Container {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html)
	 * The container that holds and manages instances of the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * in which sprites are rendered.
	 * 
	 * One way to create a draw container is:
	 * 
	 *     var drawContainer = Ext.create('Ext.draw.Container', {
	 *          renderTo: Ext.getBody(),
	 *          width:200,
	 *          height:200,
	 *          sprites: [{
	 *               type: 'circle',
	 *               fillStyle: '#79BB3F',
	 *               r: 100,
	 *               x: 100,
	 *               y: 100
	 *          }]
	 *     });
	 * 
	 * In this case we created a draw container and added a sprite to it.
	 * The _type_ of the sprite is _circle_, so if you run this code you'll see a green circle.
	 * 
	 * One can attach sprite event listeners to the draw container with the help of the
	 * [Ext.draw.plugin.SpriteEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.plugin.SpriteEvents.html) plugin.
	 * 
	 * For more information on Sprites, the core elements added to a draw container's surface,
	 * refer to the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html) documentation.
	 */
	interface Def extends Ext.draw.Container {
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
		 * @type {Ext.draw.Container.Cfg}
		 */
		config?: Ext.draw.Container.Cfg;
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
	}
}
declare namespace Ext.draw.Matrix {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html)
	 * Utility class to calculate [affine transformation](http://en.wikipedia.org/wiki/Affine_transformation) matrix.
	 * 
	 * This class is compatible with [SVGMatrix](http://www.w3.org/TR/SVG11/coords.html#InterfaceSVGMatrix) except:
	 * 
	 * 1. [Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html) is not read only.
	 * 2. Using Number as its components rather than floats.
	 * 
	 * Using this class helps to reduce the severe numeric
	 * [problem with HTML Canvas and SVG transformation](http://stackoverflow.com/questions/8784405/large-numbers-in-html-canvas-translate-result-in-strange-behavior)
	 * 
	 * There's also no way to get current transformation matrix [in Canvas](http://stackoverflow.com/questions/7395813/html5-canvas-get-transform-matrix).
	 */
	interface Def extends Ext.draw.Matrix {
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.draw.Matrix.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.draw.Matrix.Statics | any;
	}
}
declare namespace Ext.draw.Path {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.Path](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Path.html)
	 * Class representing a path.
	 * Designed to be compatible with [CanvasPathMethods](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#canvaspathmethods)
	 * and will hopefully be replaced by the browsers' implementation of the Path object.
	 */
	interface Def extends Ext.draw.Path {
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.draw.Path.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.draw.Path.Statics | any;
	}
}
declare namespace Ext.draw.Point {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)
	 * A helper class to facilitate common operations on points and vectors.
	 */
	interface Def extends Ext.draw.Point {
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
		 * @returns {Ext.Base.Statics}  
		 * @type {Ext.draw.Point.Statics}
		 */
		statics?: (() => Ext.Base.Statics) | Ext.draw.Point.Statics | any;
	}
}
declare namespace Ext.draw.SegmentTree {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.SegmentTree](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.SegmentTree.html)
	 * This class we summarize the data and returns it when required.
	 */
	interface Def extends Ext.draw.SegmentTree {
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
		 * @type {Ext.draw.SegmentTree.Cfg}
		 */
		config?: Ext.draw.SegmentTree.Cfg;
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
		 * @type {object}
		 */
		statics?: (() => Ext.Base.Statics) | object | any;
	}
}
declare namespace Ext.draw.Surface {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * A Surface is an interface to render methods inside a draw [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html).
	 * A Surface contains methods to render sprites, get bounding boxes of sprites, add
	 * sprites to the canvas, initialize other graphic components, etc. One of the most used
	 * methods for this class is the `add` method, to add Sprites to the surface.
	 * 
	 * Most of the Surface methods are abstract and they have a concrete implementation
	 * in Canvas or SVG engines.
	 * 
	 * A Surface instance can be accessed as a property of a draw container. For example:
	 * 
	 *    drawContainer.getSurface('main').add({
	 *        type: 'circle',
	 *        fill: '#ffc',
	 *        radius: 100,
	 *        x: 100,
	 *        y: 100
	 *    });
	 *    drawContainer.renderFrame();
	 * 
	 * The configuration object passed in the `add` method is the same as described in the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html)
	 * class documentation.
	 * 
	 * ## Example
	 * 
	 *    drawContainer.getSurface('main').add([
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#f00',
	 *            x: 10,
	 *            y: 10
	 *        },
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#0f0',
	 *            x: 50,
	 *            y: 50
	 *        },
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#00f',
	 *            x: 100,
	 *            y: 100
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 10,
	 *            y: 10
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 50,
	 *            y: 50
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 100,
	 *            y: 100
	 *        }
	 *    ]);
	 *    drawContainer.renderFrame();
	 * 
	 * **From override Ext.draw.overrides.Surface:** Adds hit testing methods to the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html).
	 * Included by the [Ext.draw.PathUtil](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.PathUtil.html).
	 */
	interface Def extends Ext.draw.Surface {
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
		 * @type {Ext.draw.Surface.Cfg}
		 */
		config?: Ext.draw.Surface.Cfg;
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
	}
}
declare namespace Ext.draw.Color {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.draw.Color](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Color.html)
	 * Represents an RGB color and provides helper functions on it e.g. to get
	 * color components in HSL color space.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Returns a flyweight instance of [Ext.draw.Color](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Color.html).
		 * 
		 * Can be called with either a CSS color string or with separate
		 * arguments for red, green, blue, alpha.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number|string}  red     Red component (0..255) or CSS color string.
		 * @param   {number}         [green] Green component (0..255)
		 * @param   {number}         [blue]  Blue component (0..255)
		 * @param   {number}         [alpha] Alpha component (0..1)
		 * @returns {Ext.draw.Color}         
		 */
		fly? (red: number | string, green?: number, blue?: number, alpha?: number): Ext.draw.Color;
		/** 
		 * Create a new color based on the specified HSL values.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number}         h Hue component [0..360)
		 * @param   {number}         s Saturation component [0..1]
		 * @param   {number}         l Lightness component [0..1]
		 * @returns {Ext.draw.Color}   
		 */
		fromHSL? (h: number, s: number, l: number): Ext.draw.Color;
		/** 
		 * Create a new color based on the specified HSV values.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number}         h Hue component [0..360)
		 * @param   {number}         s Saturation component [0..1]
		 * @param   {number}         l Value component [0..1]
		 * @returns {Ext.draw.Color}   
		 */
		fromHSV? (h: number, s: number, l: number): Ext.draw.Color;
		/** 
		 * Parse the string and create a new color.
		 * 
		 * Supported formats:
		 * 
		 * - '#rrggbb'
		 * - '#rgb', 'rgb(r,g,b)'
		 * - 'rgba(r,g,b,a)'
		 * - supported CSS color names (e.g., 'black', 'white', etc).
		 * 
		 * If the string is not recognized, fromString returns rgba(0,0,0,0).
		 * @method
		 * @public (method)
		 * @static
		 * @param   {string}         Color Color as string.
		 * @returns {Ext.draw.Color}       
		 */
		fromString? (Color: string): Ext.draw.Color;
	}
}
declare namespace Ext.draw.Matrix {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html)
	 * Utility class to calculate [affine transformation](http://en.wikipedia.org/wiki/Affine_transformation) matrix.
	 * 
	 * This class is compatible with [SVGMatrix](http://www.w3.org/TR/SVG11/coords.html#InterfaceSVGMatrix) except:
	 * 
	 * 1. [Ext.draw.Matrix](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Matrix.html) is not read only.
	 * 2. Using Number as its components rather than floats.
	 * 
	 * Using this class helps to reduce the severe numeric
	 * [problem with HTML Canvas and SVG transformation](http://stackoverflow.com/questions/8784405/large-numbers-in-html-canvas-translate-result-in-strange-behavior)
	 * 
	 * There's also no way to get current transformation matrix [in Canvas](http://stackoverflow.com/questions/7395813/html5-canvas-get-transform-matrix).
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Create a matrix from `mat`. If `mat` is already a matrix, returns it.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {any}             mat
		 * @returns {Ext.draw.Matrix}     
		 */
		create? (mat: any): Ext.draw.Matrix;
		/** 
		 * @compatible DO NOT USE THIS METHOD VARIANT. It's only compatibility for class [Ext.Base.create](https://docs.sencha.com/extjs/6.0.1/modern/Ext.Base.html#static-method-create).
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
		 * @returns {Ext.draw.Matrix|object}  the created instance.
		 */
		create? (): object;
		/** 
		 * Return the affine matrix that transform two points (x0, y0) and (x1, y1) to (x0p, y0p) and (x1p, y1p)
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number} x0
		 * @param   {number} y0
		 * @param   {number} x1
		 * @param   {number} y1
		 * @param   {number} x0p
		 * @param   {number} y0p
		 * @param   {number} x1p
		 * @param   {number} y1p
		 * @returns {void}       
		 */
		createAffineMatrixFromTwoPair? (x0: number, y0: number, x1: number, y1: number, x0p: number, y0p: number, x1p: number, y1p: number): void;
		/** 
		 * Return the affine matrix that transform two points (x0, y0) and (x1, y1) to (x0p, y0p) and (x1p, y1p)
		 * @method
		 * @public (method)
		 * @static
		 * @param   {number} x0
		 * @param   {number} y0
		 * @param   {number} x1
		 * @param   {number} y1
		 * @param   {number} x0p
		 * @param   {number} y0p
		 * @param   {number} x1p
		 * @param   {number} y1p
		 * @returns {void}       
		 */
		createPanZoomFromTwoPair? (x0: number, y0: number, x1: number, y1: number, x0p: number, y0p: number, x1p: number, y1p: number): void;
		/** 
		 * Create a flyweight to wrap the given array.
		 * The flyweight will directly refer the object and the elements can be changed by other methods.
		 * 
		 * Do not hold the instance of flyweight matrix.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {any[]}           elements
		 * @returns {Ext.draw.Matrix}          
		 */
		fly? (elements: any[]): Ext.draw.Matrix;
	}
}
declare namespace Ext.draw.Path {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.draw.Path](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Path.html)
	 * Class representing a path.
	 * Designed to be compatible with [CanvasPathMethods](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#canvaspathmethods)
	 * and will hopefully be replaced by the browsers' implementation of the Path object.
	 */
	interface Statics extends Ext.base.Statics {
	}
}
declare namespace Ext.draw.Point {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)
	 * A helper class to facilitate common operations on points and vectors.
	 */
	interface Statics extends Ext.base.Statics {
		/** 
		 * Creates a flyweight [Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html) instance.
		 * Takes the same parameters as the [constructor](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html#method-constructor).
		 * Do not hold the instance of the flyweight point.
		 * @method
		 * @public (method)
		 * @static
		 * @param   {object}         point {Number/Number[]/Object/[Ext.draw.Point](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Point.html)}
		 * @returns {Ext.draw.Point}       
		 */
		fly? (point: object): Ext.draw.Point;
	}
}
declare namespace Ext.draw.Container.methodParams.download {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.draw.Container.download](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#method-download)
	 * The following config options are supported:
	 */
	interface Config extends Ext.base.Params {
		/** 
		 * The url to post the data to. Defaults to
		 * the [defaultDownloadServerUrl](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#property-defaultDownloadServerUrl) configuration on the class.
		 * @configuration
		 * @optional
		 * @type {string}
		 */
		url?: string;
		/** 
		 * The format of image to export. See the
		 * [supportedFormats](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#property-supportedFormats). Defaults to 'png' on the Sencha IO server.
		 * Note that you can't export to 'svg' format if the [Canvas](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.engine.Canvas.html)
		 * [engine](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-engine) is used.
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
		 * [Canvas](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.engine.Canvas.html) [engine](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#cfg-engine) is
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
declare namespace Ext.draw.Surface.methodParams.flatten {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.draw.Surface.flatten](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#method-flatten)
	 * The size of the final image.
	 */
	interface Size extends Ext.base.Params {
		/** 
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		width?: number;
		/** 
		 * @configuration
		 * @optional
		 * @type {number}
		 */
		height?: number;
	}
}
declare namespace Ext.draw.Surface.methodReturns {
	/** 
	 * @returns
	 * Method return interface: 
	 * [Ext.draw.Surface.getBBox](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html#method-getBBox)
	 */
	interface getBBox extends Ext.base.Returns {
	}
}
declare namespace Ext.draw.Color {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.draw.Color](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Color.html)
	 * Represents an RGB color and provides helper functions on it e.g. to get
	 * color components in HSL color space.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * The default factor to compute the lighter or darker color.
		 * @configuration
		 * @optional
		 * @default 0.2
		 * @type {number}
		 */
		lightnessFactor?: number;
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
		 * @param   {object}                 config
		 * @returns {Ext.draw.Color.Statics}        this
		 */
		initConfig? (config: object): Ext.draw.Color.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}          name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                 [value] The value to set for the name parameter.
		 * @returns {Ext.draw.Color.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.draw.Color.Statics;
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
		 * @returns {Ext.draw.Color.Statics}  
		 */
		statics? (): Ext.draw.Color.Statics;
	}
}
declare namespace Ext.draw.Container {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html)
	 * The container that holds and manages instances of the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * in which sprites are rendered.
	 * 
	 * One way to create a draw container is:
	 * 
	 *     var drawContainer = Ext.create('Ext.draw.Container', {
	 *          renderTo: Ext.getBody(),
	 *          width:200,
	 *          height:200,
	 *          sprites: [{
	 *               type: 'circle',
	 *               fillStyle: '#79BB3F',
	 *               r: 100,
	 *               x: 100,
	 *               y: 100
	 *          }]
	 *     });
	 * 
	 * In this case we created a draw container and added a sprite to it.
	 * The _type_ of the sprite is _circle_, so if you run this code you'll see a green circle.
	 * 
	 * One can attach sprite event listeners to the draw container with the help of the
	 * [Ext.draw.plugin.SpriteEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.plugin.SpriteEvents.html) plugin.
	 * 
	 * For more information on Sprites, the core elements added to a draw container's surface,
	 * refer to the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html) documentation.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'draw-container'
		 * @type {string}
		 */
		cls?: string;
		/** 
		 * Defines the engine (type of surface) used to render draw container contents.
		 * 
		 * The render engine is selected automatically depending on the platform used. Priority
		 * is given to the [Ext.draw.engine.Canvas](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.engine.Canvas.html) engine due to its performance advantage.
		 * 
		 * You may also set the engine config to be [`Ext.draw.engine.Svg`](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.engine.Svg.html) if so desired.
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
		 * The resize function that can be configured to have a behavior,
		 * e.g. resize draw surfaces based on new draw container dimensions.
		 * 
		 * **Note:** since resize events trigger [renderFrame](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html#method-renderFrame) calls automatically,
		 * return `false` from the resize function, if it also calls `renderFrame`,
		 * to prevent double rendering.
		 * @configuration
		 * @optional
		 */
		resizeHandler?: ExtGlobalFunction;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.draw.LimitedCache {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.draw.LimitedCache](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.LimitedCache.html)
	 * Limited cache is a size limited cache container that stores limited number of objects.
	 * 
	 * When [get](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.LimitedCache.html#method-get) is called, the container will try to find the object in the list.
	 * If failed it will call the [feeder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.LimitedCache.html#cfg-feeder) to create that object. If there are too many
	 * objects in the container, the old ones are removed.
	 * 
	 * **Note:** This is not using a Least Recently Used policy due to simplicity and performance consideration.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Function that generates the object when look-up failed.
		 * @configuration
		 * @optional
		 */
		feeder?: ExtGlobalFunction;
		/** 
		 * The amount limit of the cache.
		 * @configuration
		 * @optional
		 * @default 40
		 * @type {number}
		 */
		limit?: number;
		/** 
		 * The scope for [feeder](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.LimitedCache.html#cfg-feeder)
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.draw.SegmentTree {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.draw.SegmentTree](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.SegmentTree.html)
	 * This class we summarize the data and returns it when required.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * @configuration
		 * @optional
		 * @default "double"
		 * @type {string}
		 */
		strategy?: string;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.draw.Surface {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * A Surface is an interface to render methods inside a draw [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html).
	 * A Surface contains methods to render sprites, get bounding boxes of sprites, add
	 * sprites to the canvas, initialize other graphic components, etc. One of the most used
	 * methods for this class is the `add` method, to add Sprites to the surface.
	 * 
	 * Most of the Surface methods are abstract and they have a concrete implementation
	 * in Canvas or SVG engines.
	 * 
	 * A Surface instance can be accessed as a property of a draw container. For example:
	 * 
	 *    drawContainer.getSurface('main').add({
	 *        type: 'circle',
	 *        fill: '#ffc',
	 *        radius: 100,
	 *        x: 100,
	 *        y: 100
	 *    });
	 *    drawContainer.renderFrame();
	 * 
	 * The configuration object passed in the `add` method is the same as described in the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html)
	 * class documentation.
	 * 
	 * ## Example
	 * 
	 *    drawContainer.getSurface('main').add([
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#f00',
	 *            x: 10,
	 *            y: 10
	 *        },
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#0f0',
	 *            x: 50,
	 *            y: 50
	 *        },
	 *        {
	 *            type: 'circle',
	 *            radius: 10,
	 *            fill: '#00f',
	 *            x: 100,
	 *            y: 100
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 10,
	 *            y: 10
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 50,
	 *            y: 50
	 *        },
	 *        {
	 *            type: 'rect',
	 *            radius: 10,
	 *            x: 100,
	 *            y: 100
	 *        }
	 *    ]);
	 *    drawContainer.renderFrame();
	 * 
	 * **From override Ext.draw.overrides.Surface:** Adds hit testing methods to the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html).
	 * Included by the [Ext.draw.PathUtil](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.PathUtil.html).
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * Background sprite config of the surface.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		background?: object;
		/** 
		 * @configuration
		 * @optional
		 * @default Ext.baseCSSPrefix + 'surface'
		 * @type {string}
		 */
		cls?: string;
		/** 
		 * Indicates whether the surface needs to redraw.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		dirty?: boolean;
		/** 
		 * If the surface is in the RTL mode, text will render with the RTL direction,
		 * but the alignment and position of the text won't change by default.
		 * Setting this config to 'true' will get text alignment and its position
		 * within a surface mirrored.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		flipRtlText?: boolean;
		/** 
		 * Array of sprite instances.
		 * @configuration
		 * @optional
		 * @default []
		 * @type {any[]}
		 */
		items?: any[];
		/** 
		 * The [x, y, width, height] rect of the surface related to its container.
		 * @configuration
		 * @optional
		 * @type {any[]}
		 */
		rect?: any[];
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.draw.TextMeasurer {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.draw.TextMeasurer](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.TextMeasurer.html)
	 * Utility class to provide a way to _approximately_ measure the dimension of text
	 * without a drawing context.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * This singleton tries not to make use of the Ext.util.TextMetrics because it is
		 * several times slower than TextMeasurer's own solution. TextMetrics is more precise
		 * though, so if you have a case where the error is too big, you may want to set
		 * this config to `true` to get perfect results at the expense of performance.
		 * Note: defaults to `true` in IE8.
		 * @configuration
		 * @optional
		 * @default false
		 * @type {boolean}
		 */
		precise?: boolean;
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
		 * @returns {Ext.Base.Statics}  
		 */
		statics? (): Ext.Base.Statics;
	}
}
declare namespace Ext.draw.Container {
	/** 
	 * @events
	 * Config interface for class listeners: 
	 * [Ext.draw.Container](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Container.html)
	 * The container that holds and manages instances of the [Ext.draw.Surface](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.Surface.html)
	 * in which sprites are rendered.
	 * 
	 * One way to create a draw container is:
	 * 
	 *     var drawContainer = Ext.create('Ext.draw.Container', {
	 *          renderTo: Ext.getBody(),
	 *          width:200,
	 *          height:200,
	 *          sprites: [{
	 *               type: 'circle',
	 *               fillStyle: '#79BB3F',
	 *               r: 100,
	 *               x: 100,
	 *               y: 100
	 *          }]
	 *     });
	 * 
	 * In this case we created a draw container and added a sprite to it.
	 * The _type_ of the sprite is _circle_, so if you run this code you'll see a green circle.
	 * 
	 * One can attach sprite event listeners to the draw container with the help of the
	 * [Ext.draw.plugin.SpriteEvents](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.plugin.SpriteEvents.html) plugin.
	 * 
	 * For more information on Sprites, the core elements added to a draw container's surface,
	 * refer to the [Ext.draw.sprite.Sprite](https://docs.sencha.com/extjs/6.0.1/modern/Ext.draw.sprite.Sprite.html) documentation.
	 */
	interface Events extends Ext.base.Events {
		/** 
		 * Fires when the size of the draw container body changes.
		 * @event
		 * @param   {object} size  The object containing 'width' and 'height' of the draw container's body.
		 * @param   {object} eOpts The options object passed to Ext.util.Observable.addListener.
		 * @returns {void}   
		 */
		bodyresize? (size: object, eOpts: object): void;
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
	}
}
