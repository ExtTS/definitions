declare namespace Ext.layout {
	/** 
	 * Manages context information during a layout.
	 * 
	 * # Algorithm
	 * 
	 * This class performs the following jobs:
	 * 
	 * - Cache DOM reads to avoid reading the same values repeatedly.
	 * - Buffer DOM writes and flush them as a block to avoid read/write interleaving.
	 * - Track layout dependencies so each layout does not have to figure out the source of
	 *   its dependent values.
	 * - Intelligently run layouts when the values on which they depend change (a trigger).
	 * - Allow layouts to avoid processing when required values are unavailable (a block).
	 * 
	 * Work done during layout falls into either a "read phase" or a "write phase" and it is
	 * essential to always be aware of the current phase. Most methods in
	 * [Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html) are called during a read phase:
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate),
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) and
	 * [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout). The exceptions to this are
	 * [beginLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayout),
	 * [beginLayoutCycle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayoutCycle) and
	 * [finishedLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finishedLayout) which are called during
	 * a write phase. While [finishedLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finishedLayout) is called
	 * a write phase, it is really intended to be a catch-all for post-processing after a
	 * layout run.
	 * 
	 * In a read phase, it is OK to read the DOM but this should be done using the appropriate
	 * [ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) where possible since that provides a cache
	 * to avoid redundant reads. No writes should be made to the DOM in a read phase! Instead,
	 * the values should be written to the proper ContextItem for later write-back.
	 * 
	 * The rules flip-flop in a write phase. The only difference is that ContextItem methods
	 * like [getStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getStyle) will still read the DOM unless the
	 * value was previously read. This detail is unknowable from the outside of ContextItem, so
	 * read calls to ContextItem should also be avoided in a write phase.
	 * 
	 * Calculating interdependent layouts requires a certain amount of iteration. In a given
	 * cycle, some layouts will contribute results that allow other layouts to proceed. The
	 * general flow then is to gather all of the layouts (both component and container) in a
	 * component tree and queue them all for processing. The initial queue order is bottom-up
	 * and component layout first, then container layout (if applicable) for each component.
	 * 
	 * This initial step also calls the beginLayout method on all layouts to clear any values
	 * from the DOM that might interfere with calculations and measurements. In other words,
	 * this is a "write phase" and reads from the DOM should be strictly avoided.
	 * 
	 * Next the layout enters into its iterations or "cycles". Each cycle consists of calling
	 * the [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) method on all layouts in the
	 * [layoutQueue](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#property-layoutQueue). These calls are part of a "read phase" and writes to the DOM should
	 * be strictly avoided.
	 * 
	 * # Considerations
	 * 
	 * **RULE 1**: Respect the read/write cycles. Always use the [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp)
	 * or [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp) methods to get calculated values;
	 * only use the [getStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getStyle) method to read styles; use
	 * [setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp) to set DOM values. Some reads will, of
	 * course, still go directly to the DOM, but if there is a method in
	 * [ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) to do a certain job, it should be used instead
	 * of a lower-level equivalent.
	 * 
	 * The basic logic flow in [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) consists of gathering
	 * values by calling [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) or
	 * [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp), calculating results and publishing
	 * them by calling [setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp). It is important to realize
	 * that [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) will return `undefined` if the value
	 * is not yet known. But the act of calling the method is enough to track the fact that the
	 * calling layout depends (in some way) on this value. In other words, the calling layout is
	 * "triggered" by the properties it requests.
	 * 
	 * **RULE 2**: Avoid calling [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) unless the value
	 * is needed. Gratuitous calls cause inefficiency because the layout will appear to depend on
	 * values that it never actually uses. This applies equally to
	 * [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp) and the test-only methods
	 * [hasProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasProp) and [hasDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasDomProp).
	 * 
	 * Because [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) can return `undefined`, it is often
	 * the case that subsequent math will produce NaN's. This is usually not a problem as the
	 * NaN's simply propagate along and result in final results that are NaN. Both `undefined`
	 * and NaN are ignored by [Ext.layout.ContextItem.setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp), so it is often not necessary
	 * to even know that this is happening. It does become important for determining if a layout
	 * is not done or if it might lead to publishing an incorrect (but not NaN or `undefined`)
	 * value.
	 * 
	 * **RULE 3**: If a layout has not calculated all the values it is required to calculate, it
	 * must set [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) to `false` before returning from
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate). This value is always `true` on entry because
	 * it is simpler to detect the incomplete state rather than the complete state (especially up
	 * and down a class hierarchy).
	 * 
	 * **RULE 4**: A layout must never publish an incomplete (wrong) result. Doing so would cause
	 * dependent layouts to run their calculations on those wrong values, producing more wrong
	 * values and some layouts may even incorrectly flag themselves as [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done)
	 * before the correct values are determined and republished. Doing this will poison the
	 * calculations.
	 * 
	 * **RULE 5**: Each value should only be published by one layout. If multiple layouts attempt
	 * to publish the same values, it would be nearly impossible to avoid breaking **RULE 4**. To
	 * help detect this problem, the layout diagnostics will trap on an attempt to set a value
	 * from different layouts.
	 * 
	 * Complex layouts can produce many results as part of their calculations. These values are
	 * important for other layouts to proceed and need to be published by the earliest possible
	 * call to [Ext.layout.Layout.calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) to avoid unnecessary cycles and poor performance. It is
	 * also possible, however, for some results to be related in a way such that publishing them
	 * may be an all-or-none proposition (typically to avoid breaking _RULE 4_).
	 * 
	 * **RULE 6**: Publish results as soon as they are known to be correct rather than wait for
	 * all values to be calculated. Waiting for everything to be complete can lead to deadlock.
	 * The key here is not to forget **RULE 4** in the process.
	 * 
	 * Some layouts depend on certain critical values as part of their calculations. For example,
	 * HBox depends on width and cannot do anything until the width is known. In these cases, it
	 * is best to use [block](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-block) or
	 * [domBlock](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-domBlock) and thereby avoid processing the layout
	 * until the needed value is available.
	 * 
	 * **RULE 7**: Use [block](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-block) or
	 * [domBlock](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-domBlock) when values are required to make progress.
	 * This will mimize wasted recalculations.
	 * 
	 * **RULE 8**: Blocks should only be used when no forward progress can be made. If even one
	 * value could still be calculated, a block could result in a deadlock.
	 * 
	 * Historically, layouts have been invoked directly by component code, sometimes in places
	 * like an `afterLayout` method for a child component. With the flexibility now available
	 * to solve complex, iterative issues, such things should be done in a responsible layout
	 * (be it component or container).
	 * 
	 * **RULE 9**: Use layouts to solve layout issues and don't wait for the layout to finish to
	 * perform further layouts. This is especially important now that layouts process entire
	 * component trees and not each layout in isolation.
	 * 
	 * # Sequence Diagram
	 * 
	 * The simplest sequence diagram for a layout run looks roughly like this:
	 * 
	 *      Context         Layout 1     Item 1     Layout 2     Item 2
	 *         |               |           |           |           |
	 *    ----&gt;X--------------&gt;X           |           |           |
	 *    run  X---------------|-----------|----------&gt;X           |
	 *         X beginLayout   |           |           |           |
	 *         X               |           |           |           |
	 *       A X--------------&gt;X           |           |           |
	 *         X  calculate    X----------&gt;X           |           |
	 *         X             C X  getProp  |           |           |
	 *       B X               X----------&gt;X           |           |
	 *         X               |  setProp  |           |           |
	 *         X               |           |           |           |
	 *       D X---------------|-----------|----------&gt;X           |
	 *         X  calculate    |           |           X----------&gt;X
	 *         X               |           |           |  setProp  |
	 *       E X               |           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X completeLayout|           |         F |           |
	 *         X               |           |           |           |
	 *       G X               |           |           |           |
	 *       H X--------------&gt;X           |           |           |
	 *         X  calculate    X----------&gt;X           |           |
	 *         X             I X  getProp  |           |           |
	 *         X               X----------&gt;X           |           |
	 *         X               |  setProp  |           |           |
	 *       J X--------------&gt;X           |           |           |
	 *         X completeLayout|           |           |           |
	 *         X               |           |           |           |
	 *       K X--------------&gt;X           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X finalizeLayout|           |           |           |
	 *         X               |           |           |           |
	 *       L X--------------&gt;X           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X finishedLayout|           |           |           |
	 *         X               |           |           |           |
	 *       M X--------------&gt;X           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X notifyOwner   |           |           |           |
	 *       N |               |           |           |           |
	 *         -               -           -           -           -
	 * 
	 * Notes:
	 * 
	 * **A.** This is a call from the [run](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-run) method to the [run](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-run) method.
	 * Each layout in the queue will have its [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate)
	 * method called.
	 * 
	 * **B.** After each [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) method is called the
	 * [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) flag is checked to see if the Layout has completed.
	 * If it has completed and that layout object implements a
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) method, this layout is queued to
	 * receive its call. Otherwise, the layout will be queued again unless there are blocks or
	 * triggers that govern its requeueing.
	 * 
	 * **C.** The call to [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) is made to the Item
	 * and that will be tracked as a trigger (keyed by the name of the property being requested).
	 * Changes to this property will cause this layout to be requeued. The call to
	 * [setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp) will place a value in the item and not
	 * directly into the DOM.
	 * 
	 * **D.** Call the other layouts now in the first cycle (repeat **B** and **C** for each
	 * layout).
	 * 
	 * **E.** After completing a cycle, if progress was made (new properties were written to
	 * the context) and if the [layoutQueue](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#property-layoutQueue) is not empty, the next cycle is run. If no
	 * progress was made or no layouts are ready to run, all buffered values are written to
	 * the DOM (a flush).
	 * 
	 * **F.** After flushing, any layouts that were marked as [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done)
	 * that also have a [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) method are called.
	 * This can cause them to become no longer done (see [invalidate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-invalidate)). As with
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate), this is considered a "read phase" and
	 * direct DOM writes should be avoided.
	 * 
	 * **G.** Flushing and calling any pending [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout)
	 * methods will likely trigger layouts that called [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp)
	 * and unblock layouts that have called [domBlock](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-domBlock).
	 * These variants are used when a layout needs the value to be correct in the DOM and not
	 * simply known. If this does not cause at least one layout to enter the queue, we have a
	 * layout FAILURE. Otherwise, we continue with the next cycle.
	 * 
	 * **H.** Call [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) on any layouts in the queue
	 * at the start of this cycle. Just a repeat of **B** through **G**.
	 * 
	 * **I.** Once the layout has calculated all that it is resposible for, it can leave itself
	 * in the [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) state. This is the value on entry to
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) and must be cleared in that call if the
	 * layout has more work to do.
	 * 
	 * **J.** Now that all layouts are done, flush any DOM values and
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) calls. This can again cause
	 * layouts to become not done, and so we will be back on another cycle if that happens.
	 * 
	 * **K.** After all layouts are done, call the [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout)
	 * method on any layouts that have one. As with [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout),
	 * this can cause layouts to become no longer done. This is less desirable than using
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) because it will cause all
	 * [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout) methods to be called again
	 * when we think things are all wrapped up.
	 * 
	 * **L.** After finishing the last iteration, layouts that have a
	 * [finishedLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finishedLayout) method will be called. This
	 * call will only happen once per run and cannot cause layouts to be run further.
	 * 
	 * **M.** After calling finahedLayout, layouts that have a
	 * [notifyOwner](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-notifyOwner) method will be called. This
	 * call will only happen once per run and cannot cause layouts to be run further.
	 * 
	 * **N.** One last flush to make sure everything has been written to the DOM.
	 * 
	 * # Inter-Layout Collaboration
	 * 
	 * Many layout problems require collaboration between multiple layouts. In some cases, this
	 * is as simple as a component's container layout providing results used by its component
	 * layout or vise-versa. A slightly more distant collaboration occurs in a box layout when
	 * stretchmax is used: the child item's component layout provides results that are consumed
	 * by the ownerCt's box layout to determine the size of the children.
	 * 
	 * The various forms of interdependence between a container and its children are described by
	 * each components' [size model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getSizeModel).
	 * 
	 * To facilitate this collaboration, the following pairs of properties are published to the
	 * component's [ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html):
	 * 
	 * - width/height: These hold the final size of the component. The layout indicated by the
	 *   [size model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getSizeModel) is responsible for setting these.
	 * - contentWidth/contentHeight: These hold size information published by the container
	 *   layout or from DOM measurement. These describe the content only. These values are
	 *   used by the component layout to determine the outer width/height when that component
	 *   is [shrink-wrapped](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-shrinkWrap). They are also used to
	 *   determine overflow. All container layouts must publish these values for dimensions
	 *   that are shrink-wrapped. If a component has raw content (not container items), the
	 *   componentLayout must publish these values instead.
	 * @private (class)
	 */
	class Context extends Ext.Base {}
	/** 
	 * This class manages state information for a component or element during a layout.
	 * 
	 * # Blocks
	 * 
	 * A "block" is a required value that is preventing further calculation. When a layout has
	 * encountered a situation where it cannot possibly calculate results, it can associate
	 * itself with the context item and missing property so that it will not be rescheduled
	 * until that property is set.
	 * 
	 * Blocks are a one-shot registration. Once the property changes, the block is removed.
	 * 
	 * Be careful with blocks. If _any_ further calculations can be made, a block is not the
	 * right choice.
	 * 
	 * # Triggers
	 * 
	 * Whenever any call to [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp), [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp), [hasProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasProp) or
	 * [hasDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasDomProp) is made, the current layout is automatically registered as being
	 * dependent on that property in the appropriate state. Any changes to the property will
	 * trigger the layout and it will be queued in the [Ext.layout.Context](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html).
	 * 
	 * Triggers, once added, remain for the entire layout. Any changes to the property will
	 * reschedule all unfinished layouts in their trigger set.
	 * @private (class)
	 */
	class ContextItem extends Ext.Base {}
	/** 
	 * [Ext.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html)
	 * This class is the base for all layout types: component and container.
	 */
	class Layout extends Ext.Base {
		/** 
		 * Used only during a layout run, this value indicates that a
		 * layout has finished its calculations. This flag is set to true prior to the call to
		 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) and should be set to false if this layout has more work to do.
		 * @property
		 * @public (property)
		 * @type {boolean}
		 */
		done?: boolean;
		/** 
		 * If this property is specified by the target class of this mixin its properties are
		 * used to configure the created [`Ext.Factory`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Factory.html).
		 * @property
		 * @public (property)
		 * @default {type: 'layout'}
		 * @type {object}
		 */
		factoryConfig?: object;
		/** 
		 * `true` in this class to identify an object as an instantiated Layout, or subclass thereof.
		 * @property
		 * @public (property)
		 * @readonly
		 * @default true
		 * @type {boolean}
		 */
		readonly isLayout?: boolean;
		/** 
		 * Get the reference to the current class from which this object was instantiated. Unlike [statics](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-statics),
		 * `this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See [statics](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-statics)
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
		 * @type {Ext.layout.Layout.Statics}
		 */
		self?: Ext.layout.Layout.Statics | Ext.Base.Statics;
		/** 
		 * The value `true` causes `config` values to be stored on instances using a
		 * property name prefixed with an underscore ("_") character. A value of `false`
		 * stores `config` values as properties using their exact name (no prefix).
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configPrefixed?: boolean;
		/** 
		 * The value `true` instructs the `initConfig` method to only honor values for
		 * properties declared in the `config` block of a class. When `false`, properties
		 * that are not declared in a `config` block will be placed on the instance.
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		$configStrict?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default {readsWidth: 1, readsHeight: 1, setsWidth: 0, setsHeight: 0}
		 * @type {object}
		 */
		autoSizePolicy?: object;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		initialized?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default 'factoryable'
		 * @type {string}
		 */
		mixinId?: string;
		/** 
		 * `true` if this layout may need to incorporate the dimensions of individual child
		 * items into its layout calculations.  Layouts that handle the size of their children
		 * as a group (autocontainer, form) can set this to false for an additional performance
		 * optimization.  When `false` the layout system will not recurse into the child
		 * items if [Ext.layout.container.Container.activeItemCount](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Container.html#property-activeItemCount) is `0`, which will be the case if all child items
		 * use "liquid" CSS layout, e.g. form fields.  (See [Ext.Component.liquidLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-liquidLayout))
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		needsItemSize?: boolean;
		/** 
		 * @property
		 * @private (property)
		 * @default false
		 * @type {boolean}
		 */
		running?: boolean;
		/** 
		 * `true` if this layout may set the size of its child items.  Layouts that do not
		 * set the size of their child items (autocontainer, form) can set this to false
		 * for an additional performance optimization.  When `true` the layout system will
		 * not create a context item for children that use liquid layout, because there is
		 * no need for a context item if item size is neither read nor set by the owning layout.
		 * @property
		 * @private (property)
		 * @default true
		 * @type {boolean}
		 */
		setsItemSize?: boolean;
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
		 * @param   {object}                     members    The members to add to this class.
		 * @param   {boolean}                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.layout.Layout|Ext.Base}            
		 */
		static addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.layout.Layout;
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
		 * @param   {object}                     members
		 * @returns {Ext.layout.Layout|Ext.Base}         this
		 */
		static addStatics? (members: object): typeof Ext.layout.Layout;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
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
		 * @param   {object}                     name
		 * @param   {object}                     member
		 * @returns {Ext.layout.Layout|Ext.Base}        
		 */
		static addMember? (name: object, member: object): typeof Ext.layout.Layout;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                     fn
		 * @param   {object}                     scope
		 * @returns {Ext.layout.Layout|Ext.Base}       
		 */
		static onExtended? (fn: object, scope: object): typeof Ext.layout.Layout;
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
		 * Called before any calculation cycles to prepare for layout.
		 * 
		 * This is a write phase and DOM reads should be strictly avoided when overridding
		 * this method.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		beginLayout? (ownerContext: Ext.layout.ContextItem): void;
		/** 
		 * Called before any calculation cycles to reset DOM values and prepare for calculation.
		 * 
		 * This is a write phase and DOM reads should be strictly avoided when overridding
		 * this method.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		beginLayoutCycle? (ownerContext: Ext.layout.ContextItem): void;
		/** 
		 * Called to perform the calculations for this layout. This method will be called at
		 * least once and may be called repeatedly if the [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) property is cleared
		 * before return to indicate that this layout is not yet done. The [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) property
		 * is always set to `true` before entering this method.
		 * 
		 * This is a read phase and DOM writes should be strictly avoided in derived classes.
		 * Instead, DOM writes need to be written to [Ext.layout.ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) objects to
		 *  be flushed at the next opportunity.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		calculate? (ownerContext: Ext.layout.ContextItem): void;
		/** 
		 * This method (if implemented) is called at the end of the cycle in which this layout
		 * completes (by not setting [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) to `false` in [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate)). It is
		 * possible for the layout to complete and yet become invalid before the end of the cycle,
		 * in which case, this method will not be called. It is also possible for this method to
		 * be called and then later the layout becomes invalidated. This will result in
		 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) being called again, followed by another call to this method.
		 * 
		 * This is a read phase and DOM writes should be strictly avoided in derived classes.
		 * Instead, DOM writes need to be written to [Ext.layout.ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) objects to
		 * be flushed at the next opportunity.
		 * 
		 * This method need not be implemented by derived classes and, in fact, should only be
		 * implemented when needed.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		completeLayout? (ownerContext: Ext.layout.ContextItem): void;
		/** 
		 * This method (if implemented) is called after all layouts have completed. In most
		 * ways this is similar to [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout). This call can cause this (or any
		 * layout) to be become invalid (see [Ext.layout.Context.invalidate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-invalidate)), but this
		 * is best avoided. This method is intended to be where final reads are made and so it
		 * is best to avoid invalidating layouts at this point whenever possible. Even so, this
		 * method can be used to perform final checks that may require all other layouts to be
		 * complete and then invalidate some results.
		 * 
		 * This is a read phase and DOM writes should be strictly avoided in derived classes.
		 * Instead, DOM writes need to be written to [Ext.layout.ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) objects to
		 * be flushed at the next opportunity.
		 * 
		 * This method need not be implemented by derived classes and, in fact, should only be
		 * implemented when needed.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		finalizeLayout? (ownerContext: Ext.layout.ContextItem): void;
		/** 
		 * This method is called after all layouts are complete and their calculations flushed
		 * to the DOM. No further layouts will be run and this method is only called once per
		 * layout run. The base component layout caches `lastComponentSize`.
		 * 
		 * This is a write phase and DOM reads should be avoided if possible when overridding
		 * this method.
		 * 
		 * This method need not be implemented by derived classes and, in fact, should only be
		 * implemented when needed.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		finishedLayout? (ownerContext: Ext.layout.ContextItem): void;
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
		 * This method (if implemented) is called after all layouts are finished, and all have
		 * a `lastComponentSize` cached. No further layouts will be run and this method is only
		 * called once per layout run. It is the bookend to [beginLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayout).
		 * 
		 * This is a write phase and DOM reads should be avoided if possible when overridding
		 * this method. This is the catch-all tail method to a layout and so the rules are more
		 * relaxed. Even so, for performance reasons, it is best to avoid reading the DOM. If
		 * a read is necessary, consider implementing a [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout) method to do the
		 * required reads.
		 * 
		 * This method need not be implemented by derived classes and, in fact, should only be
		 * implemented when needed.
		 * @method
		 * @public (method)
		 * @param   {Ext.layout.ContextItem} ownerContext
		 * The context item for the layout's owner
		 * component.
		 * @returns {void}                                
		 */
		notifyOwner? (ownerContext: Ext.layout.ContextItem): void;
		/** 
		 * This method is called when a child item changes in some way. By default this calls
		 * [Ext.Component.updateLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-updateLayout) on this layout's owner.
		 * @method
		 * @public (method)
		 * @param   {Ext.Component} child The child item that has changed.
		 * @returns {boolean}             True if this layout has handled the content change.
		 */
		onContentChange? (child: Ext.Component): boolean;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}              name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                     [value] The value to set for the name parameter.
		 * @returns {Ext.layout.Layout|Ext.Base}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.layout.Layout;
		setConfig? (name: string | object, value?: object): Ext.Base;
		/** 
		 * Destroys this layout. This method removes a `targetCls` from the `target`
		 * element and calls `onDestroy`.
		 * 
		 * A derived class can override either this method or `onDestroy` but in all
		 * cases must call the base class versions of these methods to allow the base class to
		 * perform its cleanup.
		 * 
		 * This method (or `onDestroy`) are overridden by subclasses most often to purge
		 * event handlers or remove unmanged DOM nodes.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		destroy? (): void;
		/** 
		 * Returns the set of items to layout (empty by default).
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		getLayoutItems? (): void;
		/** 
		 * Removes layout's itemCls and owning Container's itemCls.
		 * Clears the managed dimensions flags
		 * @method
		 * @protected (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		afterRemove? (item: object): void;
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
		 * Called before an item is rendered to allow the layout to configure the item.
		 * @method
		 * @protected (method)
		 * @param   {Ext.Component} item The item to be configured
		 * @returns {void}               
		 */
		configureItem? (item: Ext.Component): void;
		/** 
		 * Returns an object describing how this layout manages the size of the given component.
		 * This method must be implemented by any layout that manages components.
		 * @method
		 * @protected (method)
		 * @param   {Ext.Component}         item
		 * @returns {Ext.layout.SizePolicy} 
		 * An object describing the sizing done by the layout
		 * for this item.
		 */
		getItemSizePolicy? (item: Ext.Component): Ext.layout.SizePolicy;
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
		 * @param   {object}                     config
		 * @returns {Ext.layout.Layout|Ext.Base}        this
		 */
		initConfig? (config: object): Ext.layout.Layout;
		initConfig? (config: object): Ext.Base;
		/** 
		 * A one-time initialization method called just before rendering.
		 * @method
		 * @protected (method)
		 * @returns {void}  
		 */
		initLayout? (): void;
		/** 
		 * Validates item is in the proper place in the dom.
		 * @method
		 * @protected (method)
		 * @param   {object} item
		 * @param   {object} target
		 * @param   {object} position
		 * @returns {void}            
		 */
		isValidParent? (item: object, target: object, position: object): void;
		/** 
		 * Iterates over all passed items, ensuring they are rendered.  If the items are already rendered,
		 * also determines if the items are in the proper place in the dom.
		 * @method
		 * @protected (method)
		 * @param   {object} items
		 * @param   {object} target
		 * @returns {void}          
		 */
		renderItems? (items: object, target: object): void;
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
		 * @returns {Ext.layout.Layout.Statics|Ext.Base.Statics}  
		 */
		statics? (): Ext.layout.Layout.Statics;
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
		 * Called by an owning Panel after the Panel finishes its collapse process.
		 * @method
		 * @private (method)
		 * @param   {object} owner
		 * @param   {object} animated
		 * @returns {void}            
		 */
		afterCollapse? (owner: object, animated: object): void;
		/** 
		 * Called by an owning Panel after the Panel finishes its expand process.
		 * @method
		 * @private (method)
		 * @param   {object} owner
		 * @param   {object} animated
		 * @returns {void}            
		 */
		afterExpand? (owner: object, animated: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		finishRender? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} target
		 * @param   {object} items
		 * @returns {void}          
		 */
		finishRenderItems? (target: object, items: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		getCurrentConfig? (): void;
		/** 
		 * For a given item, returns the element that participates in the childNodes array
		 * of the layout's target element.  This is usually the component's "el", but can
		 * also be a wrapper
		 * @method
		 * @private (method)
		 * @param   {Ext.Component} item
		 * @returns {HTMLElement}        
		 */
		getItemLayoutEl? (item: Ext.Component): HTMLElement;
		/** 
		 * ---
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @param   {object} renderCfgs
		 * @returns {void}              
		 */
		getItemsRenderTree? (items: object, renderCfgs: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} position
		 * @returns {void}            
		 */
		getPositionOffset? (position: object): void;
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
		 * @param   {object} itemContext
		 * @returns {void}               
		 */
		isItemBoxParent? (itemContext: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		isItemLayoutRoot? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		isItemShrinkWrap? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		isRunning? (): void;
		/** 
		 * Adds a "destroyable" object to an internal list of objects that will be destroyed
		 * when this instance is destroyed (via [`destroy`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-destroy)).
		 * @method
		 * @private (method)
		 * @param   {string} name
		 * @param   {object} value
		 * @returns {object}       The `value` passed.
		 */
		link? (name: string, value: object): object;
		/** 
		 * Moves Component to the provided target instead.
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @param   {object} target
		 * @param   {object} position
		 * @returns {void}            
		 */
		moveItem? (item: object, target: object, position: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} item
		 * @returns {void}        
		 */
		onAdd? (item: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} targetClass
		 * @returns {void}               
		 */
		onClassMixedIn? (targetClass: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onDestroy? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		onRemove? (): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		renderChildren? (): void;
		/** 
		 * Renders the given Component into the target Element.
		 * @method
		 * @private (method)
		 * @param   {Ext.Component}   item     The Component to render
		 * @param   {Ext.dom.Element} target   The target Element
		 * @param   {number}          position The position within the target to render the item to
		 * @returns {void}                     
		 */
		renderItem? (item: Ext.Component, target: Ext.dom.Element, position: number): void;
		/** 
		 * Sets the layout owner
		 * @method
		 * @private (method)
		 * @param   {object} owner
		 * @returns {void}         
		 */
		setOwner? (owner: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @param   {object} items
		 * @param   {object} reverseProp
		 * @returns {void}               
		 */
		sortWeightedItems? (items: object, reverseProp: object): void;
		/** 
		 * @method
		 * @private (method)
		 * @returns {void}  
		 */
		undoLayout? (): void;
		/** 
		 * Destroys a given set of [`linked`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-link) objects. This is only needed if
		 * the linked object is being destroyed before this instance.
		 * @method
		 * @private (method)
		 * @chainable
		 * @param   {string[]}                   names The names of the linked objects to destroy.
		 * @returns {Ext.layout.Layout|Ext.Base}       this
		 */
		unlink? (names: string[]): Ext.layout.Layout;
		unlink? (names: string[]): Ext.Base;
	}
	/** 
	 * This class describes a size determination strategy or algorithm used by the layout
	 * system. There are special instances of this class stored as static properties to
	 * avoid needless object instantiation. These instances should be treated as readonly.
	 * 
	 * - `calculated`
	 * - `configured`
	 * - `constrainedMax`
	 * - `constrainedMin`
	 * - `natural`
	 * - `shrinkWrap`
	 * - `calculatedFromConfigured`
	 * - `calculatedFromNatural`
	 * - `calculatedFromShrinkWrap`
	 * 
	 * Using one of these instances is simply:
	 * 
	 *      var calculated = Ext.layout.SizeModel.calculated;
	 * 
	 * @private (class)
	 */
	class SizeModel extends Ext.Base {}
	/** 
	 * [Ext.layout.SizePolicy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.SizePolicy.html)
	 * This class describes how a layout will interact with a component it manages.
	 * 
	 * There are special instances of this class stored as static properties to avoid object
	 * instantiation. All instances of this class should be treated as readonly objects.
	 */
	class SizePolicy {
		/** 
		 * Indicates that the `height` of the component is consumed.
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {boolean}
		 */
		readonly readsHeight?: boolean;
		/** 
		 * Indicates that the `width` of the component is consumed.
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {boolean}
		 */
		readonly readsWidth?: boolean;
		/** 
		 * Indicates that the `height` of the component will be set (i.e., calculated).
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {boolean}
		 */
		readonly setsHeight?: boolean;
		/** 
		 * Indicates that the `width` of the component will be set (i.e., calculated).
		 * @property
		 * @public (property)
		 * @readonly
		 * @type {boolean}
		 */
		readonly setsWidth?: boolean;
	}
}
declare namespace Ext.layout.Layout {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html)
	 * This class is the base for all layout types: component and container.
	 */
	interface Def extends Ext.layout.Layout {
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
		 * @type {Ext.layout.Layout.Cfg}
		 */
		config?: Ext.layout.Layout.Cfg;
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
		 * @returns {Ext.layout.Layout.Statics|Ext.Base.Statics}  
		 * @type {Ext.layout.Layout.Statics}
		 */
		statics?: (() => Ext.layout.Layout.Statics | Ext.Base.Statics) | Ext.layout.Layout.Statics | any;
	}
}
declare namespace Ext.layout.SizePolicy {
	/** 
	 * @definitions
	 * Config interface to declare class: 
	 * [Ext.layout.SizePolicy](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.SizePolicy.html)
	 * This class describes how a layout will interact with a component it manages.
	 * 
	 * There are special instances of this class stored as static properties to avoid object
	 * instantiation. All instances of this class should be treated as readonly objects.
	 */
	interface Def extends Ext.layout.SizePolicy {
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
	}
}
declare namespace Ext.layout.Context {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.layout.Context](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html)
	 * Manages context information during a layout.
	 * 
	 * # Algorithm
	 * 
	 * This class performs the following jobs:
	 * 
	 * - Cache DOM reads to avoid reading the same values repeatedly.
	 * - Buffer DOM writes and flush them as a block to avoid read/write interleaving.
	 * - Track layout dependencies so each layout does not have to figure out the source of
	 *   its dependent values.
	 * - Intelligently run layouts when the values on which they depend change (a trigger).
	 * - Allow layouts to avoid processing when required values are unavailable (a block).
	 * 
	 * Work done during layout falls into either a "read phase" or a "write phase" and it is
	 * essential to always be aware of the current phase. Most methods in
	 * [Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html) are called during a read phase:
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate),
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) and
	 * [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout). The exceptions to this are
	 * [beginLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayout),
	 * [beginLayoutCycle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayoutCycle) and
	 * [finishedLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finishedLayout) which are called during
	 * a write phase. While [finishedLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finishedLayout) is called
	 * a write phase, it is really intended to be a catch-all for post-processing after a
	 * layout run.
	 * 
	 * In a read phase, it is OK to read the DOM but this should be done using the appropriate
	 * [ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) where possible since that provides a cache
	 * to avoid redundant reads. No writes should be made to the DOM in a read phase! Instead,
	 * the values should be written to the proper ContextItem for later write-back.
	 * 
	 * The rules flip-flop in a write phase. The only difference is that ContextItem methods
	 * like [getStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getStyle) will still read the DOM unless the
	 * value was previously read. This detail is unknowable from the outside of ContextItem, so
	 * read calls to ContextItem should also be avoided in a write phase.
	 * 
	 * Calculating interdependent layouts requires a certain amount of iteration. In a given
	 * cycle, some layouts will contribute results that allow other layouts to proceed. The
	 * general flow then is to gather all of the layouts (both component and container) in a
	 * component tree and queue them all for processing. The initial queue order is bottom-up
	 * and component layout first, then container layout (if applicable) for each component.
	 * 
	 * This initial step also calls the beginLayout method on all layouts to clear any values
	 * from the DOM that might interfere with calculations and measurements. In other words,
	 * this is a "write phase" and reads from the DOM should be strictly avoided.
	 * 
	 * Next the layout enters into its iterations or "cycles". Each cycle consists of calling
	 * the [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) method on all layouts in the
	 * [layoutQueue](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#property-layoutQueue). These calls are part of a "read phase" and writes to the DOM should
	 * be strictly avoided.
	 * 
	 * # Considerations
	 * 
	 * **RULE 1**: Respect the read/write cycles. Always use the [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp)
	 * or [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp) methods to get calculated values;
	 * only use the [getStyle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getStyle) method to read styles; use
	 * [setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp) to set DOM values. Some reads will, of
	 * course, still go directly to the DOM, but if there is a method in
	 * [ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html) to do a certain job, it should be used instead
	 * of a lower-level equivalent.
	 * 
	 * The basic logic flow in [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) consists of gathering
	 * values by calling [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) or
	 * [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp), calculating results and publishing
	 * them by calling [setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp). It is important to realize
	 * that [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) will return `undefined` if the value
	 * is not yet known. But the act of calling the method is enough to track the fact that the
	 * calling layout depends (in some way) on this value. In other words, the calling layout is
	 * "triggered" by the properties it requests.
	 * 
	 * **RULE 2**: Avoid calling [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) unless the value
	 * is needed. Gratuitous calls cause inefficiency because the layout will appear to depend on
	 * values that it never actually uses. This applies equally to
	 * [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp) and the test-only methods
	 * [hasProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasProp) and [hasDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasDomProp).
	 * 
	 * Because [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) can return `undefined`, it is often
	 * the case that subsequent math will produce NaN's. This is usually not a problem as the
	 * NaN's simply propagate along and result in final results that are NaN. Both `undefined`
	 * and NaN are ignored by [Ext.layout.ContextItem.setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp), so it is often not necessary
	 * to even know that this is happening. It does become important for determining if a layout
	 * is not done or if it might lead to publishing an incorrect (but not NaN or `undefined`)
	 * value.
	 * 
	 * **RULE 3**: If a layout has not calculated all the values it is required to calculate, it
	 * must set [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) to `false` before returning from
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate). This value is always `true` on entry because
	 * it is simpler to detect the incomplete state rather than the complete state (especially up
	 * and down a class hierarchy).
	 * 
	 * **RULE 4**: A layout must never publish an incomplete (wrong) result. Doing so would cause
	 * dependent layouts to run their calculations on those wrong values, producing more wrong
	 * values and some layouts may even incorrectly flag themselves as [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done)
	 * before the correct values are determined and republished. Doing this will poison the
	 * calculations.
	 * 
	 * **RULE 5**: Each value should only be published by one layout. If multiple layouts attempt
	 * to publish the same values, it would be nearly impossible to avoid breaking **RULE 4**. To
	 * help detect this problem, the layout diagnostics will trap on an attempt to set a value
	 * from different layouts.
	 * 
	 * Complex layouts can produce many results as part of their calculations. These values are
	 * important for other layouts to proceed and need to be published by the earliest possible
	 * call to [Ext.layout.Layout.calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) to avoid unnecessary cycles and poor performance. It is
	 * also possible, however, for some results to be related in a way such that publishing them
	 * may be an all-or-none proposition (typically to avoid breaking _RULE 4_).
	 * 
	 * **RULE 6**: Publish results as soon as they are known to be correct rather than wait for
	 * all values to be calculated. Waiting for everything to be complete can lead to deadlock.
	 * The key here is not to forget **RULE 4** in the process.
	 * 
	 * Some layouts depend on certain critical values as part of their calculations. For example,
	 * HBox depends on width and cannot do anything until the width is known. In these cases, it
	 * is best to use [block](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-block) or
	 * [domBlock](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-domBlock) and thereby avoid processing the layout
	 * until the needed value is available.
	 * 
	 * **RULE 7**: Use [block](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-block) or
	 * [domBlock](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-domBlock) when values are required to make progress.
	 * This will mimize wasted recalculations.
	 * 
	 * **RULE 8**: Blocks should only be used when no forward progress can be made. If even one
	 * value could still be calculated, a block could result in a deadlock.
	 * 
	 * Historically, layouts have been invoked directly by component code, sometimes in places
	 * like an `afterLayout` method for a child component. With the flexibility now available
	 * to solve complex, iterative issues, such things should be done in a responsible layout
	 * (be it component or container).
	 * 
	 * **RULE 9**: Use layouts to solve layout issues and don't wait for the layout to finish to
	 * perform further layouts. This is especially important now that layouts process entire
	 * component trees and not each layout in isolation.
	 * 
	 * # Sequence Diagram
	 * 
	 * The simplest sequence diagram for a layout run looks roughly like this:
	 * 
	 *      Context         Layout 1     Item 1     Layout 2     Item 2
	 *         |               |           |           |           |
	 *    ----&gt;X--------------&gt;X           |           |           |
	 *    run  X---------------|-----------|----------&gt;X           |
	 *         X beginLayout   |           |           |           |
	 *         X               |           |           |           |
	 *       A X--------------&gt;X           |           |           |
	 *         X  calculate    X----------&gt;X           |           |
	 *         X             C X  getProp  |           |           |
	 *       B X               X----------&gt;X           |           |
	 *         X               |  setProp  |           |           |
	 *         X               |           |           |           |
	 *       D X---------------|-----------|----------&gt;X           |
	 *         X  calculate    |           |           X----------&gt;X
	 *         X               |           |           |  setProp  |
	 *       E X               |           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X completeLayout|           |         F |           |
	 *         X               |           |           |           |
	 *       G X               |           |           |           |
	 *       H X--------------&gt;X           |           |           |
	 *         X  calculate    X----------&gt;X           |           |
	 *         X             I X  getProp  |           |           |
	 *         X               X----------&gt;X           |           |
	 *         X               |  setProp  |           |           |
	 *       J X--------------&gt;X           |           |           |
	 *         X completeLayout|           |           |           |
	 *         X               |           |           |           |
	 *       K X--------------&gt;X           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X finalizeLayout|           |           |           |
	 *         X               |           |           |           |
	 *       L X--------------&gt;X           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X finishedLayout|           |           |           |
	 *         X               |           |           |           |
	 *       M X--------------&gt;X           |           |           |
	 *         X---------------|-----------|----------&gt;X           |
	 *         X notifyOwner   |           |           |           |
	 *       N |               |           |           |           |
	 *         -               -           -           -           -
	 * 
	 * Notes:
	 * 
	 * **A.** This is a call from the [run](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-run) method to the [run](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-run) method.
	 * Each layout in the queue will have its [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate)
	 * method called.
	 * 
	 * **B.** After each [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) method is called the
	 * [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) flag is checked to see if the Layout has completed.
	 * If it has completed and that layout object implements a
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) method, this layout is queued to
	 * receive its call. Otherwise, the layout will be queued again unless there are blocks or
	 * triggers that govern its requeueing.
	 * 
	 * **C.** The call to [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp) is made to the Item
	 * and that will be tracked as a trigger (keyed by the name of the property being requested).
	 * Changes to this property will cause this layout to be requeued. The call to
	 * [setProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-setProp) will place a value in the item and not
	 * directly into the DOM.
	 * 
	 * **D.** Call the other layouts now in the first cycle (repeat **B** and **C** for each
	 * layout).
	 * 
	 * **E.** After completing a cycle, if progress was made (new properties were written to
	 * the context) and if the [layoutQueue](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#property-layoutQueue) is not empty, the next cycle is run. If no
	 * progress was made or no layouts are ready to run, all buffered values are written to
	 * the DOM (a flush).
	 * 
	 * **F.** After flushing, any layouts that were marked as [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done)
	 * that also have a [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) method are called.
	 * This can cause them to become no longer done (see [invalidate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html#method-invalidate)). As with
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate), this is considered a "read phase" and
	 * direct DOM writes should be avoided.
	 * 
	 * **G.** Flushing and calling any pending [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout)
	 * methods will likely trigger layouts that called [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp)
	 * and unblock layouts that have called [domBlock](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-domBlock).
	 * These variants are used when a layout needs the value to be correct in the DOM and not
	 * simply known. If this does not cause at least one layout to enter the queue, we have a
	 * layout FAILURE. Otherwise, we continue with the next cycle.
	 * 
	 * **H.** Call [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) on any layouts in the queue
	 * at the start of this cycle. Just a repeat of **B** through **G**.
	 * 
	 * **I.** Once the layout has calculated all that it is resposible for, it can leave itself
	 * in the [done](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#property-done) state. This is the value on entry to
	 * [calculate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-calculate) and must be cleared in that call if the
	 * layout has more work to do.
	 * 
	 * **J.** Now that all layouts are done, flush any DOM values and
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) calls. This can again cause
	 * layouts to become not done, and so we will be back on another cycle if that happens.
	 * 
	 * **K.** After all layouts are done, call the [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout)
	 * method on any layouts that have one. As with [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout),
	 * this can cause layouts to become no longer done. This is less desirable than using
	 * [completeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-completeLayout) because it will cause all
	 * [finalizeLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finalizeLayout) methods to be called again
	 * when we think things are all wrapped up.
	 * 
	 * **L.** After finishing the last iteration, layouts that have a
	 * [finishedLayout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-finishedLayout) method will be called. This
	 * call will only happen once per run and cannot cause layouts to be run further.
	 * 
	 * **M.** After calling finahedLayout, layouts that have a
	 * [notifyOwner](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-notifyOwner) method will be called. This
	 * call will only happen once per run and cannot cause layouts to be run further.
	 * 
	 * **N.** One last flush to make sure everything has been written to the DOM.
	 * 
	 * # Inter-Layout Collaboration
	 * 
	 * Many layout problems require collaboration between multiple layouts. In some cases, this
	 * is as simple as a component's container layout providing results used by its component
	 * layout or vise-versa. A slightly more distant collaboration occurs in a box layout when
	 * stretchmax is used: the child item's component layout provides results that are consumed
	 * by the ownerCt's box layout to determine the size of the children.
	 * 
	 * The various forms of interdependence between a container and its children are described by
	 * each components' [size model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getSizeModel).
	 * 
	 * To facilitate this collaboration, the following pairs of properties are published to the
	 * component's [ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html):
	 * 
	 * - width/height: These hold the final size of the component. The layout indicated by the
	 *   [size model](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#method-getSizeModel) is responsible for setting these.
	 * - contentWidth/contentHeight: These hold size information published by the container
	 *   layout or from DOM measurement. These describe the content only. These values are
	 *   used by the component layout to determine the outer width/height when that component
	 *   is [shrink-wrapped](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Component.html#cfg-shrinkWrap). They are also used to
	 *   determine overflow. All container layouts must publish these values for dimensions
	 *   that are shrink-wrapped. If a component has raw content (not container items), the
	 *   componentLayout must publish these values instead.
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
		 * @param   {object}                      members    The members to add to this class.
		 * @param   {boolean}                     [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                     [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.layout.Context|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.layout.Context;
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
		 * @param   {object}                      members
		 * @returns {Ext.layout.Context|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.layout.Context;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
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
		 * @param   {object}                      name
		 * @param   {object}                      member
		 * @returns {Ext.layout.Context|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.layout.Context;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                      fn
		 * @param   {object}                      scope
		 * @returns {Ext.layout.Context|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.layout.Context;
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
declare namespace Ext.layout.ContextItem {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.layout.ContextItem](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html)
	 * This class manages state information for a component or element during a layout.
	 * 
	 * # Blocks
	 * 
	 * A "block" is a required value that is preventing further calculation. When a layout has
	 * encountered a situation where it cannot possibly calculate results, it can associate
	 * itself with the context item and missing property so that it will not be rescheduled
	 * until that property is set.
	 * 
	 * Blocks are a one-shot registration. Once the property changes, the block is removed.
	 * 
	 * Be careful with blocks. If _any_ further calculations can be made, a block is not the
	 * right choice.
	 * 
	 * # Triggers
	 * 
	 * Whenever any call to [getProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getProp), [getDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-getDomProp), [hasProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasProp) or
	 * [hasDomProp](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-hasDomProp) is made, the current layout is automatically registered as being
	 * dependent on that property in the appropriate state. Any changes to the property will
	 * trigger the layout and it will be queued in the [Ext.layout.Context](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Context.html).
	 * 
	 * Triggers, once added, remain for the entire layout. Any changes to the property will
	 * reschedule all unfinished layouts in their trigger set.
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
		 * @returns {Ext.layout.ContextItem|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.layout.ContextItem;
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
		 * @returns {Ext.layout.ContextItem|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.layout.ContextItem;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
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
		 * @returns {Ext.layout.ContextItem|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.layout.ContextItem;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
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
		 * @returns {Ext.layout.ContextItem|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.layout.ContextItem;
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
declare namespace Ext.layout.Layout {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html)
	 * This class is the base for all layout types: component and container.
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
		 * @param   {object}                     members    The members to add to this class.
		 * @param   {boolean}                    [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                    [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.layout.Layout|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.layout.Layout;
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
		 * @param   {object}                     members
		 * @returns {Ext.layout.Layout|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.layout.Layout;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
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
		 * @param   {object}                     name
		 * @param   {object}                     member
		 * @returns {Ext.layout.Layout|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.layout.Layout;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
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
		 * @param   {object}                     fn
		 * @param   {object}                     scope
		 * @returns {Ext.layout.Layout|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.layout.Layout;
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
declare namespace Ext.layout.SizeModel {
	/** 
	 * @statics
	 * Class static members interface: 
	 * [Ext.layout.SizeModel](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.SizeModel.html)
	 * This class describes a size determination strategy or algorithm used by the layout
	 * system. There are special instances of this class stored as static properties to
	 * avoid needless object instantiation. These instances should be treated as readonly.
	 * 
	 * - `calculated`
	 * - `configured`
	 * - `constrainedMax`
	 * - `constrainedMin`
	 * - `natural`
	 * - `shrinkWrap`
	 * - `calculatedFromConfigured`
	 * - `calculatedFromNatural`
	 * - `calculatedFromShrinkWrap`
	 * 
	 * Using one of these instances is simply:
	 * 
	 *      var calculated = Ext.layout.SizeModel.calculated;
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
		 * @param   {object}                        members    The members to add to this class.
		 * @param   {boolean}                       [isStatic] Pass `true` if the members are static.
		 * @param   {boolean}                       [privacy]
		 * Pass `true` if the members are private. This
		 * only has meaning in debug mode and only for methods.
		 * @returns {Ext.layout.SizeModel|Ext.Base}            
		 */
		addMembers? (members: object, isStatic?: boolean, privacy?: boolean): typeof Ext.layout.SizeModel;
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
		 * @returns {Ext.layout.SizeModel|Ext.Base}         this
		 */
		addStatics? (members: object): typeof Ext.layout.SizeModel;
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
		 * [flexSetter](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Function.html#method-flexSetter)
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
		 * [callParent](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Base.html#method-callParent).
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
		 * Direct use of this method should be rare. Use [Ext.define](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-define)
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
		 * The above accomplishes the same result but can be managed by the [Ext.Loader](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Loader.html)
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
		 * @returns {Ext.layout.SizeModel|Ext.Base}        
		 */
		addMember? (name: object, member: object): typeof Ext.layout.SizeModel;
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
		 * Returns the [`Ext.Configurator`](https://docs.sencha.com/extjs/6.2.0/classic/Ext.Configurator.html) for this class.
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
		 * @returns {Ext.layout.SizeModel|Ext.Base}       
		 */
		onExtended? (fn: object, scope: object): typeof Ext.layout.SizeModel;
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
declare namespace Ext.layout.ContextItem.methodParams.invalidate {
	/** 
	 * @params
	 * Config interface to call method: 
	 * [Ext.layout.ContextItem.invalidate](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#method-invalidate)
	 * An object describing how to handle the invalidation.
	 */
	interface Options extends Ext.base.Params {
		/** 
		 * An object to [Ext.apply](https://docs.sencha.com/extjs/6.2.0/classic/Ext.html#method-apply) to the [state](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.ContextItem.html#property-state)
		 *  of this item after invalidation clears all other properties.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		state?: object;
		/** 
		 * A function to call after the context data is cleared
		 * and before the [Ext.layout.Layout.beginLayoutCycle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayoutCycle) methods are called.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.layout.ContextItem.methodParams.invalidate.Options.before}
		 */
		before?: ((item?: Ext.layout.ContextItem, options?: object) => void) | ExtGlobalFunction;
		/** 
		 * A function to call after the context data is cleared
		 * and after the [Ext.layout.Layout.beginLayoutCycle](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html#method-beginLayoutCycle) methods are called.
		 * @configuration
		 * @optional
		 * @type {Function|Ext.layout.ContextItem.methodParams.invalidate.Options.after}
		 */
		after?: ((item?: Ext.layout.ContextItem, options?: object) => void) | ExtGlobalFunction;
		/** 
		 * The scope to use when calling the callback functions.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		scope?: object;
	}
}
declare namespace Ext.layout.Layout {
	/** 
	 * @configurations
	 * Config interface to create class: 
	 * [Ext.layout.Layout](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.Layout.html)
	 * This class is the base for all layout types: component and container.
	 */
	interface Cfg extends Ext.base.Configs {
		/** 
		 * An object that contains as keys the names of the properties that can be animated
		 * by child items as a consequence of a layout. This config is used internally by the
		 * [accordion](https://docs.sencha.com/extjs/6.2.0/classic/Ext.layout.container.Accordion.html) layout to cause the child panels
		 * to animate to their proper size and position after a collapse/expand event.
		 * @configuration
		 * @optional
		 * @type {object}
		 */
		animatePolicy?: object;
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
		 * @returns {Ext.layout.Layout.Statics}        this
		 */
		initConfig? (config: object): Ext.layout.Layout.Statics;
		/** 
		 * Sets a single/multiple configuration options.
		 * @method
		 * @public (method)
		 * @chainable
		 * @param   {string|object}             name    The name of the property to set, or a set of key value pairs to set.
		 * @param   {object}                    [value] The value to set for the name parameter.
		 * @returns {Ext.layout.Layout.Statics}         this
		 */
		setConfig? (name: string | object, value?: object): Ext.layout.Layout.Statics;
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
		 * @returns {Ext.layout.Layout.Statics}  
		 */
		statics? (): Ext.layout.Layout.Statics;
	}
}
