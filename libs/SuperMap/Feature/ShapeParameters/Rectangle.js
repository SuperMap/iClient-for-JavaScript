/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * @requires SuperMap.Feature.ShapeParameters.js
 */

/**
 * Class: SuperMap.Feature.ShapeParameters.Rectangle
 * 矩形参数对象。
 *
 * Inherits:
 *  - <SuperMap.Feature.ShapeParameters>
 */
SuperMap.Feature.ShapeParameters.Rectangle = SuperMap.Class(SuperMap.Feature.ShapeParameters, {

    /**
     * APIProperty: x
     * {Number} 左上角 x 坐标。
     */
    x: null,

    /**
     * APIProperty: y
     * {Number} 左上角 y 坐标。
     */
    y: null,

    /**
     * APIProperty: width
     * {Number} 宽度。
     */
    width: null,

    /**
     * APIProperty: height
     * {Number} 高度。
     */
    height: null,

    /**
     * APIProperty: style
     * {Object} 矩形样式对象，可设属性如下：
     *
     * Symbolizer properties:
     * fill - {Boolean} 是否填充，不需要填充则设置为false，默认值为 true。此属性与 stroke 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染。
     * fillColor - {String} 十六进制填充颜色。默认值为 "#000000"。
     * fillOpacity - {Number} 填充不透明度。取值范围[0, 1]，默认值 1。
     * stroke - {Boolean} 是否描边，不需要描边则设置为 false，默认值为 false。此属性与 fill 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染。
     * strokeColor - {String} 十六进制描边颜色。
     * strokeWidth - {Number} 描边宽度，默认值 1。
     * radius - {Array} 矩形圆角，可以用数组分别指定四个角的圆角，设：左上、右上、右下、左下角的半径依次为 r1、r2、r3、r4 则 radius为 [r1、r2、r3、r4 ]。
     * strokeOpacity - {Number} 描边的不透明度。取值范围[0, 1]，默认值 1。
     * shadowBlur - {number} 阴影模糊度，（大于 0 有效; 默认值 0）。
     * shadowColor - {string} 阴影颜色; 默认值 '#000000'。
     * shadowOffsetX - {number} 阴影 X 方向偏移值; 默认值 0。
     * shadowOffsetY - {number} 阴影 Y 方向偏移值; 默认值 0。
     */
    // * fill - {Boolean} 是否填充，不需要填充则设置为false，默认值为 true。此属性与 stroke 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染。
    // * fillColor - {String} 十六进制填充颜色。默认值为 "#000000"。
    // * fillOpacity - {Number} 填充不透明度。取值范围[0, 1]，默认值 1。
    // * stroke - {Boolean} 是否描边，不需要描边则设置为 false，默认值为 false。此属性与 fill 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染。
    // * strokeColor - {String} 十六进制描边颜色。
    // * strokeWidth - {Number} 描边宽度，默认值 1。
    // * strokeOpacity - {Number} 描边的不透明度。取值范围[0, 1]，默认值 1。
    // * radius - {Array} 矩形圆角，可以用数组分别指定四个角的圆角，设：左上、右上、右下、左下角的半径依次为 r1、r2、r3、r4 则 radius为 [r1、r2、r3、r4 ]。
    // * shadowBlur - {number} 阴影模糊度，（大于 0 有效; 默认值 0）。
    // * shadowColor - {string} 阴影颜色; 默认值 '#000000'。
    // * shadowOffsetX - {number} 阴影 X 方向偏移值; 默认值 0。
    // * shadowOffsetY - {number} 阴影 Y 方向偏移值; 默认值 0。
    // * label - {String} 图形附加文本标签内容。
    // * fontColor - {String} 附加文本字体颜色。
    // * fontSize - {Number} 附加文本字体大小。默认值 12，单位是像素。
    // * fontStyle - {String} 附加文本字体样式。可设值："normal", "italic", "oblique"; 默认值："normal" 。
    // * fontVariant - {String} 附加文本字体变体。可设值："normal", "small-caps"; 默认值："normal" 。
    // * fontWeight - {String} 附加文本字体粗细。可设值："normal", "bold", "bolder", "lighter"; 默认值："normal" 。
    // * fontFamily - {String} 附加文本字体系列。fontFamily 值是字体族名称或/及类族名称的一个优先表，每个值逗号分割，浏览器会使用它可识别的第一个值。可以使用具体的字体名称（"times"、"courier"、"arial"）或字体系列名称（"serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"）。默认值："arial,sans-serif".
    // * textPosition - {string} 附加文本位置, 可以是 'inside', 'left', 'right', 'top', 'bottom'; 默认值 'inside'。
    // * labelAlign - {string} 附加文本水平对齐。可以是 'left', 'right', 'center'; 默认值 'left'。
    // * labelBaseline - {string} 附加文本垂直对齐。 可以是 'top', 'bottom', 'middle';默认值 'top'。
    // 公开父类 style 属性

    /**
     * APIProperty: highlightStyle
     * {Object} 矩形高亮样式对象，可设样式属性与 style 的可设样式属性相同。
     *
     * Symbolizer properties:
     * fill - {Boolean} 是否填充，不需要填充则设置为false，默认值为 true。此属性与 stroke 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染。
     * fillColor - {String} 十六进制填充颜色。默认值为 "#000000"。
     * fillOpacity - {Number} 填充不透明度。取值范围[0, 1]，默认值 1。
     * stroke - {Boolean} 是否描边，不需要描边则设置为 false，默认值为 false。此属性与 fill 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染。
     * strokeColor - {String} 十六进制描边颜色。
     * strokeWidth - {Number} 描边宽度，默认值 1。
     * strokeOpacity - {Number} 描边的不透明度。取值范围[0, 1]，默认值 1。
     * shadowBlur - {number} 阴影模糊度，（大于 0 有效; 默认值 0）。
     * shadowColor - {string} 阴影颜色; 默认值 '#000000'。
     * shadowOffsetX - {number} 阴影 X 方向偏移值; 默认值 0。
     * shadowOffsetY - {number} 阴影 Y 方向偏移值; 默认值 0。
     */
    // 公开父类 highlightStyle 属性

    /**
     * Constructor: SuperMap.Feature.ShapeParameters.Rectangle
     * 创建一个图形矩形参数对象。
     *
     * Parameters:
     * x - {Number} 矩形 x 坐标，必设参数。
     * y - {Number} 矩形 y 坐标，必设参数。
     * width - {Number} 矩形 width 坐标，必设参数。
     * height - {Number} 矩形 height 坐标，必设参数。
     *
     * Returns:
     * {<SuperMap.Feature.ShapeParameters.Rectangle>} 图形矩形参数对象。
     */
    initialize: function(x, y, width, height) {
        SuperMap.Feature.ShapeParameters.prototype.initialize.apply(this, arguments);

        this.x = !isNaN(x)? x: 0;
        this.y = !isNaN(x)? y: 0;
        this.width = !isNaN(width)? width: 0;
        this.height = !isNaN(height)? height: 0;
    },

    /**
     * APIMethod: destroy
     * 销毁对象。
     */
    destroy: function() {
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;

        SuperMap.Feature.ShapeParameters.prototype.destroy.apply(this, arguments);
    },


    CLASS_NAME: "SuperMap.Feature.ShapeParameters.Rectangle"
});
