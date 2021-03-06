/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./vendor/kartik-v/bootstrap-fileinput/js/fileinput.min.js":
/*!*****************************************************************!*\
  !*** ./vendor/kartik-v/bootstrap-fileinput/js/fileinput.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * bootstrap-fileinput v5.1.1
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2020, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
!function (e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (e) {
  "use strict";

  e.fn.fileinputLocales = {}, e.fn.fileinputThemes = {}, String.prototype.setTokens = function (e) {
    var t,
        i,
        a = this.toString();

    for (t in e) {
      e.hasOwnProperty(t) && (i = new RegExp("{" + t + "}", "g"), a = a.replace(i, e[t]));
    }

    return a;
  }, Array.prototype.flatMap || (Array.prototype.flatMap = function (e) {
    return [].concat(this.map(e));
  });
  var t, i;
  t = {
    FRAMES: ".kv-preview-thumb",
    SORT_CSS: "file-sortable",
    INIT_FLAG: "init-",
    OBJECT_PARAMS: '<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',
    DEFAULT_PREVIEW: '<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',
    MODAL_ID: "kvFileinputModal",
    MODAL_EVENTS: ["show", "shown", "hide", "hidden", "loaded"],
    logMessages: {
      ajaxError: "{status}: {error}. Error Details: {text}.",
      badDroppedFiles: "Error scanning dropped files!",
      badExifParser: "Error loading the piexif.js library. {details}",
      badInputType: 'The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.',
      exifWarning: 'To avoid this warning, either set "autoOrientImage" to "false" OR ensure you have loaded the "piexif.js" library correctly on your page before the "fileinput.js" script.',
      invalidChunkSize: 'Invalid upload chunk size: "{chunkSize}". Resumable uploads are disabled.',
      invalidThumb: 'Invalid thumb frame with id: "{id}".',
      noResumableSupport: "The browser does not support resumable or chunk uploads.",
      noUploadUrl: 'The "uploadUrl" is not set. Ajax uploads and resumable uploads have been disabled.',
      retryStatus: "Retrying upload for chunk # {chunk} for {filename}... retry # {retry}.",
      chunkQueueError: "Could not push task to ajax pool for chunk index # {index}."
    },
    objUrl: window.URL || window.webkitURL,
    now: function now() {
      return new Date();
    },
    round: function round(e) {
      return e = parseFloat(e), isNaN(e) ? 0 : Math.floor(Math.round(e));
    },
    getFileRelativePath: function getFileRelativePath(e) {
      return String(e.newPath || e.relativePath || e.webkitRelativePath || t.getFileName(e) || null);
    },
    getFileId: function getFileId(e, i) {
      var a = t.getFileRelativePath(e);
      return "function" == typeof i ? i(e) : e && a ? e.size + "_" + a.replace(/\s/gim, "_") : null;
    },
    getFrameSelector: function getFrameSelector(e, t) {
      return t = t || "", '[id="' + e + '"]' + t;
    },
    getZoomSelector: function getZoomSelector(e, t) {
      return t = t || "", '[id="zoom-' + e + '"]' + t;
    },
    getFrameElement: function getFrameElement(e, i, a) {
      return e.find(t.getFrameSelector(i, a));
    },
    getZoomElement: function getZoomElement(e, i, a) {
      return e.find(t.getZoomSelector(i, a));
    },
    getElapsed: function getElapsed(i) {
      var a = i,
          r = "",
          n = {},
          o = {
        year: 31536e3,
        month: 2592e3,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      return t.getObjectKeys(o).forEach(function (e) {
        n[e] = Math.floor(a / o[e]), a -= n[e] * o[e];
      }), e.each(n, function (e, t) {
        t > 0 && (r += (r ? " " : "") + t + e.substring(0, 1));
      }), r;
    },
    debounce: function debounce(e, t) {
      var i;
      return function () {
        var a = arguments,
            r = this;
        clearTimeout(i), i = setTimeout(function () {
          e.apply(r, a);
        }, t);
      };
    },
    stopEvent: function stopEvent(e) {
      e.stopPropagation(), e.preventDefault();
    },
    getFileName: function getFileName(e) {
      return e ? e.fileName || e.name || "" : "";
    },
    createObjectURL: function createObjectURL(e) {
      return t.objUrl && t.objUrl.createObjectURL && e ? t.objUrl.createObjectURL(e) : "";
    },
    revokeObjectURL: function revokeObjectURL(e) {
      t.objUrl && t.objUrl.revokeObjectURL && e && t.objUrl.revokeObjectURL(e);
    },
    compare: function compare(e, t, i) {
      return void 0 !== e && (i ? e === t : e.match(t));
    },
    isIE: function isIE(e) {
      var t, i;
      return "Microsoft Internet Explorer" !== navigator.appName ? !1 : 10 === e ? new RegExp("msie\\s" + e, "i").test(navigator.userAgent) : (t = document.createElement("div"), t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", i = t.getElementsByTagName("i").length, document.body.appendChild(t), t.parentNode.removeChild(t), i);
    },
    canOrientImage: function canOrientImage(t) {
      var i = e(document.createElement("img")).css({
        width: "1px",
        height: "1px"
      }).insertAfter(t),
          a = i.css("image-orientation");
      return i.remove(), !!a;
    },
    canAssignFilesToInput: function canAssignFilesToInput() {
      var e = document.createElement("input");

      try {
        return e.type = "file", e.files = null, !0;
      } catch (t) {
        return !1;
      }
    },
    getDragDropFolders: function getDragDropFolders(e) {
      var t,
          i,
          a = e ? e.length : 0,
          r = 0;
      if (a > 0 && e[0].webkitGetAsEntry()) for (t = 0; a > t; t++) {
        i = e[t].webkitGetAsEntry(), i && i.isDirectory && r++;
      }
      return r;
    },
    initModal: function initModal(t) {
      var i = e("body");
      i.length && t.appendTo(i);
    },
    isFunction: function isFunction(e) {
      return "function" == typeof e;
    },
    isEmpty: function isEmpty(i, a) {
      return void 0 === i || null === i || !t.isFunction(i) && (0 === i.length || a && "" === e.trim(i));
    },
    isArray: function isArray(e) {
      return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e);
    },
    ifSet: function ifSet(e, t, i) {
      return i = i || "", t && "object" == _typeof(t) && e in t ? t[e] : i;
    },
    cleanArray: function cleanArray(e) {
      return e instanceof Array || (e = []), e.filter(function (e) {
        return void 0 !== e && null !== e;
      });
    },
    spliceArray: function spliceArray(t, i, a) {
      var r,
          n,
          o = 0,
          l = [];
      if (!(t instanceof Array)) return [];

      for (n = e.extend(!0, [], t), a && n.reverse(), r = 0; r < n.length; r++) {
        r !== i && (l[o] = n[r], o++);
      }

      return a && l.reverse(), l;
    },
    getNum: function getNum(e, t) {
      return t = t || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? t : e);
    },
    hasFileAPISupport: function hasFileAPISupport() {
      return !(!window.File || !window.FileReader);
    },
    hasDragDropSupport: function hasDragDropSupport() {
      var e = document.createElement("div");
      return !t.isIE(9) && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop);
    },
    hasFileUploadSupport: function hasFileUploadSupport() {
      return t.hasFileAPISupport() && window.FormData;
    },
    hasBlobSupport: function hasBlobSupport() {
      try {
        return !!window.Blob && Boolean(new Blob());
      } catch (e) {
        return !1;
      }
    },
    hasArrayBufferViewSupport: function hasArrayBufferViewSupport() {
      try {
        return 100 === new Blob([new Uint8Array(100)]).size;
      } catch (e) {
        return !1;
      }
    },
    hasResumableUploadSupport: function hasResumableUploadSupport() {
      return t.hasFileUploadSupport() && t.hasBlobSupport() && t.hasArrayBufferViewSupport() && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || !1);
    },
    dataURI2Blob: function dataURI2Blob(e) {
      var i,
          a,
          r,
          n,
          o,
          l,
          s = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
          d = t.hasBlobSupport(),
          c = (d || s) && window.atob && window.ArrayBuffer && window.Uint8Array;
      if (!c) return null;

      for (i = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURIComponent(e.split(",")[1]), a = new ArrayBuffer(i.length), r = new Uint8Array(a), n = 0; n < i.length; n += 1) {
        r[n] = i.charCodeAt(n);
      }

      return o = e.split(",")[0].split(":")[1].split(";")[0], d ? new Blob([t.hasArrayBufferViewSupport() ? r : a], {
        type: o
      }) : (l = new s(), l.append(a), l.getBlob(o));
    },
    arrayBuffer2String: function arrayBuffer2String(e) {
      if (window.TextDecoder) return new TextDecoder("utf-8").decode(e);
      var t,
          i,
          a,
          r,
          n = Array.prototype.slice.apply(new Uint8Array(e)),
          o = "",
          l = 0;

      for (t = n.length; t > l;) {
        switch (i = n[l++], i >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            o += String.fromCharCode(i);
            break;

          case 12:
          case 13:
            a = n[l++], o += String.fromCharCode((31 & i) << 6 | 63 & a);
            break;

          case 14:
            a = n[l++], r = n[l++], o += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | (63 & r) << 0);
        }
      }

      return o;
    },
    isHtml: function isHtml(e) {
      var t = document.createElement("div");
      t.innerHTML = e;

      for (var i = t.childNodes, a = i.length; a--;) {
        if (1 === i[a].nodeType) return !0;
      }

      return !1;
    },
    isSvg: function isSvg(e) {
      return e.match(/^\s*<\?xml/i) && (e.match(/<!DOCTYPE svg/i) || e.match(/<svg/i));
    },
    getMimeType: function getMimeType(e, t, i) {
      switch (e) {
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
          return "image/jpeg";

        case "89504e47":
          return "image/png";

        case "47494638":
          return "image/gif";

        case "49492a00":
          return "image/tiff";

        case "52494646":
          return "image/webp";

        case "66747970":
          return "video/3gp";

        case "4f676753":
          return "video/ogg";

        case "1a45dfa3":
          return "video/mkv";

        case "000001ba":
        case "000001b3":
          return "video/mpeg";

        case "3026b275":
          return "video/wmv";

        case "25504446":
          return "application/pdf";

        case "25215053":
          return "application/ps";

        case "504b0304":
        case "504b0506":
        case "504b0508":
          return "application/zip";

        case "377abcaf":
          return "application/7z";

        case "75737461":
          return "application/tar";

        case "7801730d":
          return "application/dmg";

        default:
          switch (e.substring(0, 6)) {
            case "435753":
              return "application/x-shockwave-flash";

            case "494433":
              return "audio/mp3";

            case "425a68":
              return "application/bzip";

            default:
              switch (e.substring(0, 4)) {
                case "424d":
                  return "image/bmp";

                case "fffb":
                  return "audio/mp3";

                case "4d5a":
                  return "application/exe";

                case "1f9d":
                case "1fa0":
                  return "application/zip";

                case "1f8b":
                  return "application/gzip";

                default:
                  return t && !t.match(/[^\u0000-\u007f]/) ? "application/text-plain" : i;
              }

          }

      }
    },
    addCss: function addCss(e, t) {
      e.removeClass(t).addClass(t);
    },
    getElement: function getElement(i, a, r) {
      return t.isEmpty(i) || t.isEmpty(i[a]) ? r : e(i[a]);
    },
    createElement: function createElement(t, i) {
      return i = i || "div", e(e.parseHTML("<" + i + ">" + t + "</" + i + ">"));
    },
    uniqId: function uniqId() {
      return (new Date().getTime() + Math.floor(Math.random() * Math.pow(10, 15))).toString(36);
    },
    parseEventCallback: function parseEventCallback(e) {
      return Function("'use strict'; return (function() { " + e + " });")();
    },
    cspBuffer: {
      CSP_ATTRIB: "data-csp-01928735",
      domEventsList: ["mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mousewheel", "mouseout", "contextmenu", "touchstart", "touchmove", "touchend", "touchcancel", "keydown", "keypress", "keyup", "focus", "blur", "change", "submit", "scroll", "resize", "hashchange", "load", "unload", "cut", "copy", "paste"],
      domElementEvents: {},
      domElementsStyles: {},
      stash: function stash(i) {
        var a = this,
            r = e.parseHTML("<div>" + i + "</div>"),
            n = e(r);
        n.find("[style]").each(function (i, r) {
          var n = e(r),
              o = n.attr("style"),
              l = t.uniqId(),
              s = {};
          o && o.length && (-1 === o.indexOf(";") && (o += ";"), o.slice(0, o.length - 1).split(";").map(function (e) {
            e = e.split(":"), e[0] && (s[e[0]] = e[1] ? e[1] : "");
          }), a.domElementsStyles[l] = s, n.removeAttr("style").attr(a.CSP_ATTRIB, l));
        }), n.filter("*").removeAttr("style"), e.each(a.domEventsList, function (e, i) {
          var r,
              o,
              l = "on" + i,
              s = n.find("[" + l + "]");
          s.length && (o = t.parseEventCallback(s.attr(l)), s.attr(a.CSP_ATTRIB) ? r = s.attr(a.CSP_ATTRIB) : (r = t.uniqId(), a.domElementEvents[r] = []), a.domElementEvents[r].push({
            name: i + ".csp",
            handler: o
          }), s.removeAttr(l).attr(a.CSP_ATTRIB, r));
        });
        var o = Object.values ? Object.values(r) : Object.keys(r).map(function (e) {
          return r[e];
        });
        return o.flatMap(function (e) {
          return e.innerHTML;
        }).join("");
      },
      apply: function apply(t) {
        var i = this,
            a = e(t);
        a.find("[" + i.CSP_ATTRIB + "]").each(function (t, a) {
          var r = e(a),
              n = r.attr(i.CSP_ATTRIB),
              o = i.domElementsStyles[n],
              l = i.domElementEvents[n];
          o && r.css(o), l && e.each(l, function (e, t) {
            t && t.name && r.off(t.name).on(t.name, t.handler);
          }), r.removeAttr(i.CSP_ATTRIB);
        }), i.domElementsStyles = {}, i.domElementEvents = {};
      }
    },
    setHtml: function setHtml(e, i) {
      var a = t.cspBuffer;
      return e.html(a.stash(i)), a.apply(e), e;
    },
    htmlEncode: function htmlEncode(e, t) {
      return void 0 === e ? t || null : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    },
    replaceTags: function replaceTags(t, i) {
      var a = t;
      return i ? (e.each(i, function (e, t) {
        "function" == typeof t && (t = t()), a = a.split(e).join(t);
      }), a) : a;
    },
    cleanMemory: function cleanMemory(e) {
      var i = e.is("img") ? e.attr("src") : e.find("source").attr("src");
      t.revokeObjectURL(i);
    },
    findFileName: function findFileName(e) {
      var t = e.lastIndexOf("/");
      return -1 === t && (t = e.lastIndexOf("\\")), e.split(e.substring(t, t + 1)).pop();
    },
    checkFullScreen: function checkFullScreen() {
      return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    },
    toggleFullScreen: function toggleFullScreen(e) {
      var i = document,
          a = i.documentElement,
          r = t.checkFullScreen();
      a && e && !r ? a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : r && (i.exitFullscreen ? i.exitFullscreen() : i.msExitFullscreen ? i.msExitFullscreen() : i.mozCancelFullScreen ? i.mozCancelFullScreen() : i.webkitExitFullscreen && i.webkitExitFullscreen());
    },
    moveArray: function moveArray(t, i, a, r) {
      var n = e.extend(!0, [], t);
      if (r && n.reverse(), a >= n.length) for (var o = a - n.length; o-- + 1;) {
        n.push(void 0);
      }
      return n.splice(a, 0, n.splice(i, 1)[0]), r && n.reverse(), n;
    },
    closeButton: function closeButton(e) {
      return e = e ? "close " + e : "close", '<button type="button" class="' + e + '" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n</button>';
    },
    getRotation: function getRotation(e) {
      switch (e) {
        case 2:
          return "rotateY(180deg)";

        case 3:
          return "rotate(180deg)";

        case 4:
          return "rotate(180deg) rotateY(180deg)";

        case 5:
          return "rotate(270deg) rotateY(180deg)";

        case 6:
          return "rotate(90deg)";

        case 7:
          return "rotate(90deg) rotateY(180deg)";

        case 8:
          return "rotate(270deg)";

        default:
          return "";
      }
    },
    setTransform: function setTransform(e, t) {
      e && (e.style.transform = t, e.style.webkitTransform = t, e.style["-moz-transform"] = t, e.style["-ms-transform"] = t, e.style["-o-transform"] = t);
    },
    getObjectKeys: function getObjectKeys(t) {
      var i = [];
      return t && e.each(t, function (e) {
        i.push(e);
      }), i;
    },
    getObjectSize: function getObjectSize(e) {
      return t.getObjectKeys(e).length;
    },
    whenAll: function whenAll(i) {
      var a,
          r,
          n,
          o,
          l,
          s,
          d = [].slice,
          c = 1 === arguments.length && t.isArray(i) ? i : d.call(arguments),
          u = e.Deferred(),
          p = 0,
          f = c.length,
          g = f;

      for (n = o = l = Array(f), s = function s(e, t, i) {
        return function () {
          i !== c && p++, u.notifyWith(t[e] = this, i[e] = d.call(arguments)), --g || u[(p ? "reject" : "resolve") + "With"](t, i);
        };
      }, a = 0; f > a; a++) {
        (r = c[a]) && e.isFunction(r.promise) ? r.promise().done(s(a, l, c)).fail(s(a, n, o)) : (u.notifyWith(this, r), --g);
      }

      return g || u.resolveWith(l, c), u.promise();
    }
  }, i = function i(_i, a) {
    var r = this;
    r.$element = e(_i), r.$parent = r.$element.parent(), r._validate() && (r.isPreviewable = t.hasFileAPISupport(), r.isIE9 = t.isIE(9), r.isIE10 = t.isIE(10), (r.isPreviewable || r.isIE9) && (r._init(a), r._listen()), r.$element.removeClass("file-loading"));
  }, i.prototype = {
    constructor: i,
    _cleanup: function _cleanup() {
      var e = this;
      e.reader = null, e.clearFileStack(), e.fileBatchCompleted = !0, e.isError = !1, e.isPersistentError = !1, e.cancelling = !1, e.paused = !1, e.lastProgress = 0, e._initAjax();
    },
    _isAborted: function _isAborted() {
      var e = this;
      return e.cancelling || e.paused;
    },
    _initAjax: function _initAjax() {
      var i = this,
          a = i.taskManager = {
        pool: {},
        addPool: function addPool(e) {
          return a.pool[e] = new a.TasksPool(e);
        },
        getPool: function getPool(e) {
          return a.pool[e];
        },
        addTask: function addTask(e, t) {
          return new a.Task(e, t);
        },
        TasksPool: function TasksPool(i) {
          var r = this;
          r.id = i, r.cancelled = !1, r.cancelledDeferrer = e.Deferred(), r.tasks = {}, r.addTask = function (e, t) {
            return r.tasks[e] = new a.Task(e, t);
          }, r.size = function () {
            return t.getObjectSize(r.tasks);
          }, r.run = function (i) {
            var a,
                n,
                o,
                l = 0,
                s = !1,
                d = t.getObjectKeys(r.tasks).map(function (e) {
              return r.tasks[e];
            }),
                c = [],
                u = e.Deferred();
            if (r.cancelled) return r.cancelledDeferrer.resolve(), u.reject();

            if (!i) {
              var p = t.getObjectKeys(r.tasks).map(function (e) {
                return r.tasks[e].deferred;
              });
              return t.whenAll(p).done(function () {
                var e = Array.from(arguments);
                r.cancelled ? (u.reject.apply(null, e), r.cancelledDeferrer.resolve()) : (u.resolve.apply(null, e), r.cancelledDeferrer.reject());
              }).fail(function () {
                var e = Array.from(arguments);
                u.reject.apply(null, e), r.cancelled ? r.cancelledDeferrer.resolve() : r.cancelledDeferrer.reject();
              }), e.each(r.tasks, function (e) {
                a = r.tasks[e], a.run();
              }), u;
            }

            for (n = function n(t) {
              e.when(t.deferred).fail(function () {
                s = !0, o.apply(null, arguments);
              }).always(o);
            }, o = function o() {
              var e = Array.from(arguments);
              return u.notify(e), c.push(e), r.cancelled ? (u.reject.apply(null, c), void r.cancelledDeferrer.resolve()) : (c.length === r.size() && (s ? u.reject.apply(null, c) : u.resolve.apply(null, c)), void (d.length && (a = d.shift(), n(a), a.run())));
            }; d.length && l++ < i;) {
              a = d.shift(), n(a), a.run();
            }

            return u;
          }, r.cancel = function () {
            return r.cancelled = !0, r.cancelledDeferrer;
          };
        },
        Task: function Task(t, i) {
          var a = this;
          a.id = t, a.deferred = e.Deferred(), a.logic = i, a.context = null, a.run = function () {
            var e = Array.from(arguments);
            return e.unshift(a.deferred), i.apply(a.context, e), a.deferred;
          }, a.runWithContext = function (e) {
            return a.context = e, a.run();
          };
        }
      };
      i.ajaxQueue = [], i.ajaxRequests = [], i.ajaxAborted = !1;
    },
    _init: function _init(i, a) {
      var r,
          n,
          o,
          l,
          s = this,
          d = s.$element;
      s.options = i, s.canOrientImage = t.canOrientImage(d), e.each(i, function (e, i) {
        switch (e) {
          case "minFileCount":
          case "maxFileCount":
          case "maxTotalFileCount":
          case "minFileSize":
          case "maxFileSize":
          case "maxFilePreviewSize":
          case "resizeImageQuality":
          case "resizeIfSizeMoreThan":
          case "progressUploadThreshold":
          case "initialPreviewCount":
          case "zoomModalHeight":
          case "minImageHeight":
          case "maxImageHeight":
          case "minImageWidth":
          case "maxImageWidth":
            s[e] = t.getNum(i);
            break;

          default:
            s[e] = i;
        }
      }), s.maxTotalFileCount > 0 && s.maxTotalFileCount < s.maxFileCount && (s.maxTotalFileCount = s.maxFileCount), s.rtl && (l = s.previewZoomButtonIcons.prev, s.previewZoomButtonIcons.prev = s.previewZoomButtonIcons.next, s.previewZoomButtonIcons.next = l), !isNaN(s.maxAjaxThreads) && s.maxAjaxThreads < s.resumableUploadOptions.maxThreads && (s.resumableUploadOptions.maxThreads = s.maxAjaxThreads), s._initFileManager(), "function" == typeof s.autoOrientImage && (s.autoOrientImage = s.autoOrientImage()), "function" == typeof s.autoOrientImageInitial && (s.autoOrientImageInitial = s.autoOrientImageInitial()), a || s._cleanup(), s.duplicateErrors = [], s.$form = d.closest("form"), s._initTemplateDefaults(), s.uploadFileAttr = t.isEmpty(d.attr("name")) ? "file_data" : d.attr("name"), o = s._getLayoutTemplate("progress"), s.progressTemplate = o.replace("{class}", s.progressClass), s.progressInfoTemplate = o.replace("{class}", s.progressInfoClass), s.progressPauseTemplate = o.replace("{class}", s.progressPauseClass), s.progressCompleteTemplate = o.replace("{class}", s.progressCompleteClass), s.progressErrorTemplate = o.replace("{class}", s.progressErrorClass), s.isDisabled = d.attr("disabled") || d.attr("readonly"), s.isDisabled && d.attr("disabled", !0), s.isClickable = s.browseOnZoneClick && s.showPreview && (s.dropZoneEnabled || !t.isEmpty(s.defaultPreviewContent)), s.isAjaxUpload = t.hasFileUploadSupport() && !t.isEmpty(s.uploadUrl), s.dropZoneEnabled = t.hasDragDropSupport() && s.dropZoneEnabled, s.isAjaxUpload || (s.dropZoneEnabled = s.dropZoneEnabled && t.canAssignFilesToInput()), s.slug = "function" == typeof i.slugCallback ? i.slugCallback : s._slugDefault, s.mainTemplate = s.showCaption ? s._getLayoutTemplate("main1") : s._getLayoutTemplate("main2"), s.captionTemplate = s._getLayoutTemplate("caption"), s.previewGenericTemplate = s._getPreviewTemplate("generic"), !s.imageCanvas && s.resizeImage && (s.maxImageWidth || s.maxImageHeight) && (s.imageCanvas = document.createElement("canvas"), s.imageCanvasContext = s.imageCanvas.getContext("2d")), t.isEmpty(d.attr("id")) && d.attr("id", t.uniqId()), s.namespace = ".fileinput_" + d.attr("id").replace(/-/g, "_"), void 0 === s.$container ? s.$container = s._createContainer() : s._refreshContainer(), n = s.$container, s.$dropZone = n.find(".file-drop-zone"), s.$progress = n.find(".kv-upload-progress"), s.$btnUpload = n.find(".fileinput-upload"), s.$captionContainer = t.getElement(i, "elCaptionContainer", n.find(".file-caption")), s.$caption = t.getElement(i, "elCaptionText", n.find(".file-caption-name")), t.isEmpty(s.msgPlaceholder) || (r = d.attr("multiple") ? s.filePlural : s.fileSingle, s.$caption.attr("placeholder", s.msgPlaceholder.replace("{files}", r))), s.$captionIcon = s.$captionContainer.find(".file-caption-icon"), s.$previewContainer = t.getElement(i, "elPreviewContainer", n.find(".file-preview")), s.$preview = t.getElement(i, "elPreviewImage", n.find(".file-preview-thumbnails")), s.$previewStatus = t.getElement(i, "elPreviewStatus", n.find(".file-preview-status")), s.$errorContainer = t.getElement(i, "elErrorContainer", s.$previewContainer.find(".kv-fileinput-error")), s._validateDisabled(), t.isEmpty(s.msgErrorClass) || t.addCss(s.$errorContainer, s.msgErrorClass), a ? s._errorsExist() || s.$errorContainer.hide() : (s._resetErrors(), s.$errorContainer.hide(), s.previewInitId = "thumb-" + d.attr("id"), s._initPreviewCache(), s._initPreview(!0), s._initPreviewActions(), s.$parent.hasClass("file-loading") && (s.$container.insertBefore(s.$parent), s.$parent.remove())), s._setFileDropZoneTitle(), d.attr("disabled") && s.disable(), s._initZoom(), s.hideThumbnailContent && t.addCss(s.$preview, "hide-content");
    },
    _initFileManager: function _initFileManager() {
      var i = this;
      i.fileManager = {
        stack: {},
        filesProcessed: [],
        errors: [],
        loadedImages: {},
        totalImages: 0,
        totalFiles: null,
        totalSize: null,
        uploadedSize: 0,
        stats: {},
        initStats: function initStats(e) {
          var a = {
            started: t.now().getTime()
          };
          e ? i.fileManager.stats[e] = a : i.fileManager.stats = a;
        },
        getUploadStats: function getUploadStats(e, a, r) {
          var n = i.fileManager,
              o = e ? n.stats[e] && n.stats[e].started || null : null;
          o || (o = t.now().getTime());

          var l = (t.now().getTime() - o) / 1e3,
              s = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s", "PB/s", "EB/s", "ZB/s", "YB/s"],
              d = l ? a / l : 0,
              c = i._getSize(d, s),
              u = r - a,
              p = {
            fileId: e,
            started: o,
            elapsed: l,
            loaded: a,
            total: r,
            bps: d,
            bitrate: c,
            pendingBytes: u
          };

          return e ? n.stats[e] = p : n.stats = p, p;
        },
        exists: function exists(t) {
          return -1 !== e.inArray(t, i.fileManager.getIdList());
        },
        count: function count() {
          return i.fileManager.getIdList().length;
        },
        total: function total() {
          var e = i.fileManager;
          return e.totalFiles || (e.totalFiles = e.count()), e.totalFiles;
        },
        getTotalSize: function getTotalSize() {
          var t = i.fileManager;
          return t.totalSize ? t.totalSize : (t.totalSize = 0, e.each(i.fileManager.stack, function (e, i) {
            var a = parseFloat(i.size);
            t.totalSize += isNaN(a) ? 0 : a;
          }), t.totalSize);
        },
        add: function add(e, a) {
          a || (a = i.fileManager.getId(e)), a && (i.fileManager.stack[a] = {
            file: e,
            name: t.getFileName(e),
            relativePath: t.getFileRelativePath(e),
            size: e.size,
            nameFmt: i._getFileName(e, ""),
            sizeFmt: i._getSize(e.size)
          });
        },
        remove: function remove(e) {
          var t = e.attr("data-fileid");
          t && i.fileManager.removeFile(t);
        },
        removeFile: function removeFile(e) {
          delete i.fileManager.stack[e], delete i.fileManager.loadedImages[e];
        },
        move: function move(t, a) {
          var r = {},
              n = i.fileManager.stack;
          (t || a) && t !== a && (e.each(n, function (e, i) {
            e !== t && (r[e] = i), e === a && (r[t] = n[t]);
          }), i.fileManager.stack = r);
        },
        list: function list() {
          var t = [];
          return e.each(i.fileManager.stack, function (e, i) {
            i && i.file && t.push(i.file);
          }), t;
        },
        isPending: function isPending(t) {
          return -1 === e.inArray(t, i.fileManager.filesProcessed) && i.fileManager.exists(t);
        },
        isProcessed: function isProcessed() {
          var t = !0,
              a = i.fileManager;
          return e.each(a.stack, function (e) {
            a.isPending(e) && (t = !1);
          }), t;
        },
        clear: function clear() {
          var e = i.fileManager;
          i.isPersistentError = !1, e.totalFiles = null, e.totalSize = null, e.uploadedSize = 0, e.stack = {}, e.errors = [], e.filesProcessed = [], e.stats = {}, e.clearImages();
        },
        clearImages: function clearImages() {
          i.fileManager.loadedImages = {}, i.fileManager.totalImages = 0;
        },
        addImage: function addImage(e, t) {
          i.fileManager.loadedImages[e] = t;
        },
        removeImage: function removeImage(e) {
          delete i.fileManager.loadedImages[e];
        },
        getImageIdList: function getImageIdList() {
          return t.getObjectKeys(i.fileManager.loadedImages);
        },
        getImageCount: function getImageCount() {
          return i.fileManager.getImageIdList().length;
        },
        getId: function getId(e) {
          return i._getFileId(e);
        },
        getIndex: function getIndex(e) {
          return i.fileManager.getIdList().indexOf(e);
        },
        getThumb: function getThumb(t) {
          var a = null;
          return i._getThumbs().each(function () {
            var i = e(this);
            i.attr("data-fileid") === t && (a = i);
          }), a;
        },
        getThumbIndex: function getThumbIndex(e) {
          var t = e.attr("data-fileid");
          return i.fileManager.getIndex(t);
        },
        getIdList: function getIdList() {
          return t.getObjectKeys(i.fileManager.stack);
        },
        getFile: function getFile(e) {
          return i.fileManager.stack[e] || null;
        },
        getFileName: function getFileName(e, t) {
          var a = i.fileManager.getFile(e);
          return a ? t ? a.nameFmt || "" : a.name || "" : "";
        },
        getFirstFile: function getFirstFile() {
          var e = i.fileManager.getIdList(),
              t = e && e.length ? e[0] : null;
          return i.fileManager.getFile(t);
        },
        setFile: function setFile(e, t) {
          i.fileManager.getFile(e) ? i.fileManager.stack[e].file = t : i.fileManager.add(t, e);
        },
        setProcessed: function setProcessed(e) {
          i.fileManager.filesProcessed.push(e);
        },
        getProgress: function getProgress() {
          var e = i.fileManager.total(),
              t = i.fileManager.filesProcessed.length;
          return e ? Math.ceil(t / e * 100) : 0;
        },
        setProgress: function setProgress(e, t) {
          var a = i.fileManager.getFile(e);
          !isNaN(t) && a && (a.progress = t);
        }
      };
    },
    _setUploadData: function _setUploadData(i, a) {
      var r = this;
      e.each(a, function (e, a) {
        var n = r.uploadParamNames[e] || e;
        t.isArray(a) ? i.append(n, a[0], a[1]) : i.append(n, a);
      });
    },
    _initResumableUpload: function _initResumableUpload() {
      var i = this,
          a = i.resumableUploadOptions,
          r = t.logMessages;

      if (i.enableResumableUpload) {
        if (a.fallback !== !1 && "function" != typeof a.fallback && (a.fallback = function (e) {
          e._log(r.noResumableSupport), e.enableResumableUpload = !1;
        }), !t.hasResumableUploadSupport() && a.fallback !== !1) return void a.fallback(i);
        if (!i.uploadUrl && i.enableResumableUpload) return i._log(r.noUploadUrl), void (i.enableResumableUpload = !1);
        if (a.chunkSize = parseFloat(a.chunkSize), a.chunkSize <= 0 || isNaN(a.chunkSize)) return i._log(r.invalidChunkSize, {
          chunkSize: a.chunkSize
        }), void (i.enableResumableUpload = !1);
        i.resumableManager = {
          init: function init(e, t, a) {
            var r = i.resumableManager,
                n = i.fileManager;
            r.logs = [], r.stack = [], r.error = "", r.id = e, r.file = t.file, r.fileName = t.name, r.fileIndex = a, r.completed = !1, r.testing = !1, r.lastProgress = 0, i.showPreview && (r.$thumb = n.getThumb(e) || null, r.$progress = r.$btnDelete = null, r.$thumb && r.$thumb.length && (r.$progress = r.$thumb.find(".file-thumb-progress"), r.$btnDelete = r.$thumb.find(".kv-file-remove"))), r.chunkSize = 1024 * i.resumableUploadOptions.chunkSize, r.chunkCount = r.getTotalChunks();
          },
          setAjaxError: function setAjaxError(e, t, a, n) {
            e.responseJSON && e.responseJSON.error && (a = e.responseJSON.error.toString()), n || (rm.error = a), i.resumableUploadOptions.showErrorLog && i._log(r.ajaxError, {
              status: e.status,
              error: a,
              text: e.responseText || ""
            });
          },
          reset: function reset() {
            var e = i.resumableManager;
            e.stack = [], e.chunksProcessed = {};
          },
          setProcessed: function setProcessed(e) {
            var t,
                a = i.resumableManager,
                r = i.fileManager,
                n = a.id,
                o = a.$thumb,
                l = a.$progress,
                s = o && o.length,
                d = {
              id: s ? o.attr("id") : "",
              index: r.getIndex(n),
              fileId: n
            };
            a.completed = !0, a.lastProgress = 0, s && o.removeClass("file-uploading"), "success" === e ? (r.uploadedSize += a.file.size, i.showPreview && (i._setProgress(101, l), i._setThumbStatus(o, "Success"), i._initUploadSuccess(a.chunksProcessed[n].data, o)), i.fileManager.removeFile(n), delete a.chunksProcessed[n], i._raise("fileuploaded", [d.id, d.index, d.fileId]), r.isProcessed() && i._setProgress(101)) : "cancel" !== e && (i.showPreview && (i._setThumbStatus(o, "Error"), i._setPreviewError(o, !0), i._setProgress(101, l, i.msgProgressError), i._setProgress(101, i.$progress, i.msgProgressError), i.cancelling = !0), i.$errorContainer.find('li[data-file-id="' + d.fileId + '"]').length || (t = i.msgResumableUploadRetriesExceeded.setTokens({
              file: a.fileName,
              max: i.resumableUploadOptions.maxRetries,
              error: a.error
            }), i._showFileError(t, d))), r.isProcessed() && a.reset();
          },
          check: function check() {
            var t = i.resumableManager,
                a = !0;
            e.each(t.logs, function (e, t) {
              return t ? void 0 : (a = !1, !1);
            });
          },
          processedResumables: function processedResumables() {
            var e,
                t = i.resumableManager.logs,
                a = 0;
            if (!t || !t.length) return 0;

            for (e = 0; e < t.length; e++) {
              t[e] === !0 && a++;
            }

            return a;
          },
          getUploadedSize: function getUploadedSize() {
            var e = i.resumableManager,
                t = e.processedResumables() * e.chunkSize;
            return t > e.file.size ? e.file.size : t;
          },
          getTotalChunks: function getTotalChunks() {
            var e = i.resumableManager,
                t = parseFloat(e.chunkSize);
            return !isNaN(t) && t > 0 ? Math.ceil(e.file.size / t) : 0;
          },
          getProgress: function getProgress() {
            var e = i.resumableManager,
                t = e.processedResumables(),
                a = e.chunkCount;
            return 0 === a ? 0 : Math.ceil(t / a * 100);
          },
          checkAborted: function checkAborted(e) {
            i._isAborted() && (clearInterval(e), i.unlock());
          },
          upload: function upload() {
            var e,
                a = i.resumableManager,
                r = i.fileManager,
                n = r.getIdList(),
                o = "new";
            e = setInterval(function () {
              var l;

              if (a.checkAborted(e), "new" === o && (i.lock(), o = "processing", l = n.shift(), r.initStats(l), r.stack[l] && (a.init(l, r.stack[l], r.getIndex(l)), a.testUpload(), a.uploadResumable())), !r.isPending(l) && a.completed && (o = "new"), r.isProcessed()) {
                var s = i.$preview.find(".file-preview-initial");
                s.length && (t.addCss(s, t.SORT_CSS), i._initSortable()), clearInterval(e), i._clearFileInput(), i.unlock(), setTimeout(function () {
                  var e = i.previewCache.data;
                  e && (i.initialPreview = e.content, i.initialPreviewConfig = e.config, i.initialPreviewThumbTags = e.tags), i._raise("filebatchuploadcomplete", [i.initialPreview, i.initialPreviewConfig, i.initialPreviewThumbTags, i._getExtraData()]);
                }, i.processDelay);
              }
            }, i.processDelay);
          },
          uploadResumable: function uploadResumable() {
            var e,
                t,
                a = i.taskManager,
                r = i.resumableManager,
                n = r.chunkCount;

            for (t = a.addPool(r.id), e = 0; n > e; e++) {
              r.logs[e] = !(!r.chunksProcessed[r.id] || !r.chunksProcessed[r.id][e]), r.logs[e] || r.pushAjax(e, 0);
            }

            r.testing || t.run(i.resumableUploadOptions.maxThreads).done(function () {
              r.setProcessed("success");
            }).fail(function () {
              t.cancelled ? r.setProcessed("cancel") : r.setProcessed("error");
            });
          },
          testUpload: function testUpload() {
            var a,
                r,
                n,
                o,
                l,
                s,
                d,
                c = i.resumableManager,
                u = i.resumableUploadOptions,
                p = i.fileManager,
                f = c.id;
            return u.testUrl ? (c.testing = !0, a = new FormData(), r = p.stack[f], i._setUploadData(a, {
              fileId: f,
              fileName: r.fileName,
              fileSize: r.size,
              fileRelativePath: r.relativePath,
              chunkSize: c.chunkSize,
              chunkCount: c.chunkCount
            }), n = function n(e) {
              d = i._getOutData(a, e), i._raise("filetestbeforesend", [f, p, c, d]);
            }, o = function o(r, n, _o) {
              d = i._getOutData(a, _o, r);
              var l = i.uploadParamNames,
                  s = l.chunksUploaded || "chunksUploaded",
                  u = [f, p, c, d];
              r[s] && t.isArray(r[s]) ? (c.chunksProcessed[f] || (c.chunksProcessed[f] = {}), e.each(r[s], function (e, t) {
                c.logs[t] = !0, c.chunksProcessed[f][t] = !0;
              }), c.chunksProcessed[f].data = r, i._raise("filetestsuccess", u)) : i._raise("filetesterror", u), c.testing = !1;
            }, l = function l(e, t, r) {
              d = i._getOutData(a, e), i._raise("filetestajaxerror", [f, p, c, d]), c.setAjaxError(e, t, r, !0), c.testing = !1;
            }, s = function s() {
              i._raise("filetestcomplete", [f, p, c, i._getOutData(a)]), c.testing = !1;
            }, void i._ajaxSubmit(n, o, s, l, a, f, c.fileIndex, u.testUrl)) : void (c.testing = !1);
          },
          pushAjax: function pushAjax(e, t) {
            var a = i.taskManager,
                n = i.resumableManager,
                o = a.getPool(n.id);
            o.addTask(o.size() + 1, function (e) {
              var t,
                  a = n.stack.shift();
              t = a[0], n.chunksProcessed[n.id] && n.chunksProcessed[n.id][t] ? i._log(r.chunkQueueError, {
                index: t
              }) : n.sendAjax(t, a[1], e);
            }), n.stack.push([e, t]);
          },
          sendAjax: function sendAjax(e, a, n) {
            var o,
                l = i.fileManager,
                s = i.resumableManager,
                d = i.resumableUploadOptions,
                c = s.chunkSize,
                u = s.id,
                p = s.file,
                f = s.$thumb,
                g = s.$btnDelete;

            if (!s.chunksProcessed[u] || !s.chunksProcessed[u][e]) {
              if (a > d.maxRetries) return n.reject("max try reached"), void s.setProcessed("error");

              var m,
                  h,
                  v,
                  w,
                  b,
                  _,
                  C = p.slice ? "slice" : p.mozSlice ? "mozSlice" : p.webkitSlice ? "webkitSlice" : "slice",
                  y = p[C](c * e, c * (e + 1));

              m = new FormData(), o = l.stack[u], i._setUploadData(m, {
                chunkCount: s.chunkCount,
                chunkIndex: e,
                chunkSize: c,
                chunkSizeStart: c * e,
                fileBlob: [y, s.fileName],
                fileId: u,
                fileName: s.fileName,
                fileRelativePath: o.relativePath,
                fileSize: p.size,
                retryCount: a
              }), s.$progress && s.$progress.length && s.$progress.show(), v = function v(r) {
                h = i._getOutData(m, r), i.showPreview && (f.hasClass("file-preview-success") || (i._setThumbStatus(f, "Loading"), t.addCss(f, "file-uploading")), g.attr("disabled", !0)), i._raise("filechunkbeforesend", [u, e, a, l, s, h]);
              }, w = function w(t, o, d) {
                if (i._isAborted()) return void n.reject("cancelling");
                h = i._getOutData(m, d, t);
                var c = i.uploadParamNames,
                    p = c.chunkIndex || "chunkIndex",
                    f = i.resumableUploadOptions,
                    g = [u, e, a, l, s, h];
                t.error ? (f.showErrorLog && i._log(r.retryStatus, {
                  retry: a + 1,
                  filename: s.fileName,
                  chunk: e
                }), s.pushAjax(e, a + 1), s.error = t.error, i._raise("filechunkerror", g)) : (s.logs[t[p]] = !0, s.chunksProcessed[u] || (s.chunksProcessed[u] = {}), s.chunksProcessed[u][t[p]] = !0, s.chunksProcessed[u].data = t, n.resolve.call(null, t), i._raise("filechunksuccess", g), s.check());
              }, b = function b(t, r, o) {
                return i._isAborted() ? void n.reject("cancelling") : (h = i._getOutData(m, t), s.setAjaxError(t, r, o), i._raise("filechunkajaxerror", [u, e, a, l, s, h]), s.pushAjax(e, a + 1), void n.reject("try failed"));
              }, _ = function _() {
                i._isAborted() || i._raise("filechunkcomplete", [u, e, a, l, s, i._getOutData(m)]);
              }, i._ajaxSubmit(v, w, _, b, m, u, s.fileIndex);
            }
          }
        }, i.resumableManager.reset();
      }
    },
    _initTemplateDefaults: function _initTemplateDefaults() {
      var i,
          a,
          r,
          n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          h,
          v,
          w,
          b,
          _,
          C,
          y,
          x,
          T,
          P,
          k,
          E,
          F,
          S,
          I,
          A,
          D,
          z,
          M,
          j,
          U,
          $,
          R,
          O,
          B,
          L,
          N,
          Z = this;

      i = '{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="input-group {class}">\n  {caption}\n<div class="input-group-btn input-group-append">\n      {remove}\n      {cancel}\n      {pause}\n      {upload}\n      {browse}\n    </div>\n</div>', a = '{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', r = '<div class="file-preview {class}">\n  {close}  <div class="{dropClass} clearfix">\n    <div class="file-preview-thumbnails clearfix">\n    </div>\n    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n  </div>\n</div>', o = t.closeButton("fileinput-remove"), n = '<i class="glyphicon glyphicon-file"></i>', l = '<div class="file-caption form-control {class}" tabindex="500">\n  <span class="file-caption-icon"></span>\n  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n</div>', s = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>', d = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>', c = '<div tabindex="500" class="{css}" {status}>{icon} {label}</div>', u = '<div id="' + t.MODAL_ID + '" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="' + t.MODAL_ID + 'Label"></div>', p = '<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n', f = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>{stats}', N = '<div class="text-info file-upload-stats"><span class="pending-time">{pendingTime}</span> <span class="upload-speed">{uploadSpeed}</span></div>', g = " <samp>({sizeText})</samp>", m = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>', h = '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>', v = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n', w = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>', b = '<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>', _ = '<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>', C = '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>', y = '<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>', x = '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-fileid="{fileid}" data-template="{template}"', T = x + '><div class="kv-file-content">\n', P = x + ' title="{caption}"><div class="kv-file-content">\n', k = "</div>{footer}\n{zoomCache}</div>\n", E = "{content}\n", O = " {style}", F = '<div class="kv-preview-data file-preview-html" title="{caption}"' + O + ">{data}</div>\n", S = '<img src="{data}" class="file-preview-image kv-preview-data" title="{title}" alt="{alt}"' + O + ">\n", I = '<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly' + O + ">{data}</textarea>\n", A = '<iframe class="kv-preview-data file-preview-office" src="https://view.officeapps.live.com/op/embed.aspx?src={data}"' + O + "></iframe>", D = '<iframe class="kv-preview-data file-preview-gdocs" src="https://docs.google.com/gview?url={data}&embedded=true"' + O + "></iframe>", z = '<video class="kv-preview-data file-preview-video" controls' + O + '>\n<source src="{data}" type="{type}">\n' + t.DEFAULT_PREVIEW + "\n</video>\n", M = '<!--suppress ALL --><audio class="kv-preview-data file-preview-audio" controls' + O + '>\n<source src="{data}" type="{type}">\n' + t.DEFAULT_PREVIEW + "\n</audio>\n", j = '<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash"' + O + ">\n", $ = '<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf"' + O + ">\n", U = '<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}"' + O + '>\n<param name="movie" value="{caption}" />\n' + t.OBJECT_PARAMS + " " + t.DEFAULT_PREVIEW + "\n</object>\n", R = '<div class="kv-preview-data file-preview-other-frame"' + O + ">\n" + t.DEFAULT_PREVIEW + "\n</div>\n", B = '<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>', L = {
        width: "100%",
        height: "100%",
        "min-height": "480px"
      }, Z._isPdfRendered() && ($ = Z.pdfRendererTemplate.replace("{renderer}", Z._encodeURI(Z.pdfRendererUrl))), Z.defaults = {
        layoutTemplates: {
          main1: i,
          main2: a,
          preview: r,
          close: o,
          fileIcon: n,
          caption: l,
          modalMain: u,
          modal: p,
          progress: f,
          stats: N,
          size: g,
          footer: m,
          indicator: y,
          actions: h,
          actionDelete: v,
          actionUpload: w,
          actionDownload: b,
          actionZoom: _,
          actionDrag: C,
          btnDefault: s,
          btnLink: d,
          btnBrowse: c,
          zoomCache: B
        },
        previewMarkupTags: {
          tagBefore1: T,
          tagBefore2: P,
          tagAfter: k
        },
        previewContentTemplates: {
          generic: E,
          html: F,
          image: S,
          text: I,
          office: A,
          gdocs: D,
          video: z,
          audio: M,
          flash: j,
          object: U,
          pdf: $,
          other: R
        },
        allowedPreviewTypes: ["image", "html", "text", "video", "audio", "flash", "pdf", "object"],
        previewTemplates: {},
        previewSettings: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%"
          },
          html: {
            width: "213px",
            height: "160px"
          },
          text: {
            width: "213px",
            height: "160px"
          },
          office: {
            width: "213px",
            height: "160px"
          },
          gdocs: {
            width: "213px",
            height: "160px"
          },
          video: {
            width: "213px",
            height: "160px"
          },
          audio: {
            width: "100%",
            height: "30px"
          },
          flash: {
            width: "213px",
            height: "160px"
          },
          object: {
            width: "213px",
            height: "160px"
          },
          pdf: {
            width: "100%",
            height: "160px",
            position: "relative"
          },
          other: {
            width: "213px",
            height: "160px"
          }
        },
        previewSettingsSmall: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%"
          },
          html: {
            width: "100%",
            height: "160px"
          },
          text: {
            width: "100%",
            height: "160px"
          },
          office: {
            width: "100%",
            height: "160px"
          },
          gdocs: {
            width: "100%",
            height: "160px"
          },
          video: {
            width: "100%",
            height: "auto"
          },
          audio: {
            width: "100%",
            height: "30px"
          },
          flash: {
            width: "100%",
            height: "auto"
          },
          object: {
            width: "100%",
            height: "auto"
          },
          pdf: {
            width: "100%",
            height: "160px"
          },
          other: {
            width: "100%",
            height: "160px"
          }
        },
        previewZoomSettings: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%"
          },
          html: L,
          text: L,
          office: {
            width: "100%",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px"
          },
          gdocs: {
            width: "100%",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px"
          },
          video: {
            width: "auto",
            height: "100%",
            "max-width": "100%"
          },
          audio: {
            width: "100%",
            height: "30px"
          },
          flash: {
            width: "auto",
            height: "480px"
          },
          object: {
            width: "auto",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px"
          },
          pdf: L,
          other: {
            width: "auto",
            height: "100%",
            "min-height": "480px"
          }
        },
        mimeTypeAliases: {
          "video/quicktime": "video/mp4"
        },
        fileTypeSettings: {
          image: function image(e, i) {
            return t.compare(e, "image.*") && !t.compare(e, /(tiff?|wmf)$/i) || t.compare(i, /\.(gif|png|jpe?g)$/i);
          },
          html: function html(e, i) {
            return t.compare(e, "text/html") || t.compare(i, /\.(htm|html)$/i);
          },
          office: function office(e, i) {
            return t.compare(e, /(word|excel|powerpoint|office)$/i) || t.compare(i, /\.(docx?|xlsx?|pptx?|pps|potx?)$/i);
          },
          gdocs: function gdocs(e, i) {
            return t.compare(e, /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i) || t.compare(i, /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i);
          },
          text: function text(e, i) {
            return t.compare(e, "text.*") || t.compare(i, /\.(xml|javascript)$/i) || t.compare(i, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
          },
          video: function video(e, i) {
            return t.compare(e, "video.*") && (t.compare(e, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) || t.compare(i, /\.(og?|mp4|webm|mp?g|mov|3gp)$/i));
          },
          audio: function audio(e, i) {
            return t.compare(e, "audio.*") && (t.compare(i, /(ogg|mp3|mp?g|wav)$/i) || t.compare(i, /\.(og?|mp3|mp?g|wav)$/i));
          },
          flash: function flash(e, i) {
            return t.compare(e, "application/x-shockwave-flash", !0) || t.compare(i, /\.(swf)$/i);
          },
          pdf: function pdf(e, i) {
            return t.compare(e, "application/pdf", !0) || t.compare(i, /\.(pdf)$/i);
          },
          object: function object() {
            return !0;
          },
          other: function other() {
            return !0;
          }
        },
        fileActionSettings: {
          showRemove: !0,
          showUpload: !0,
          showDownload: !0,
          showZoom: !0,
          showDrag: !0,
          removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
          removeClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          removeErrorClass: "btn btn-sm btn-kv btn-danger",
          removeTitle: "Remove file",
          uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
          uploadClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          uploadTitle: "Upload file",
          uploadRetryIcon: '<i class="glyphicon glyphicon-repeat"></i>',
          uploadRetryTitle: "Retry upload",
          downloadIcon: '<i class="glyphicon glyphicon-download"></i>',
          downloadClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          downloadTitle: "Download file",
          zoomIcon: '<i class="glyphicon glyphicon-zoom-in"></i>',
          zoomClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          zoomTitle: "View Details",
          dragIcon: '<i class="glyphicon glyphicon-move"></i>',
          dragClass: "text-info",
          dragTitle: "Move / Rearrange",
          dragSettings: {},
          indicatorNew: '<i class="glyphicon glyphicon-plus-sign text-warning"></i>',
          indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
          indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
          indicatorLoading: '<i class="glyphicon glyphicon-hourglass text-muted"></i>',
          indicatorPaused: '<i class="glyphicon glyphicon-pause text-primary"></i>',
          indicatorNewTitle: "Not uploaded yet",
          indicatorSuccessTitle: "Uploaded",
          indicatorErrorTitle: "Upload Error",
          indicatorLoadingTitle: "Uploading &hellip;",
          indicatorPausedTitle: "Upload Paused"
        }
      }, e.each(Z.defaults, function (t, i) {
        return "allowedPreviewTypes" === t ? void (void 0 === Z.allowedPreviewTypes && (Z.allowedPreviewTypes = i)) : void (Z[t] = e.extend(!0, {}, i, Z[t]));
      }), Z._initPreviewTemplates();
    },
    _initPreviewTemplates: function _initPreviewTemplates() {
      var i,
          a = this,
          r = a.previewMarkupTags,
          n = r.tagAfter;
      e.each(a.previewContentTemplates, function (e, o) {
        t.isEmpty(a.previewTemplates[e]) && (i = r.tagBefore2, "generic" !== e && "image" !== e && "html" !== e && "text" !== e || (i = r.tagBefore1), a._isPdfRendered() && "pdf" === e && (i = i.replace("kv-file-content", "kv-file-content kv-pdf-rendered")), a.previewTemplates[e] = i + o + n);
      });
    },
    _initPreviewCache: function _initPreviewCache() {
      var i = this;
      i.previewCache = {
        data: {},
        init: function init() {
          var e = i.initialPreview;
          e.length > 0 && !t.isArray(e) && (e = e.split(i.initialPreviewDelimiter)), i.previewCache.data = {
            content: e,
            config: i.initialPreviewConfig,
            tags: i.initialPreviewThumbTags
          };
        },
        count: function count(e) {
          if (!i.previewCache.data || !i.previewCache.data.content) return 0;

          if (e) {
            var t = i.previewCache.data.content.filter(function (e) {
              return null !== e;
            });
            return t.length;
          }

          return i.previewCache.data.content.length;
        },
        get: function get(e, a) {
          var r,
              n,
              o,
              l,
              s,
              d,
              c,
              u = t.INIT_FLAG + e,
              p = i.previewCache.data,
              f = p.config[e],
              g = p.content[e],
              m = t.ifSet("previewAsData", f, i.initialPreviewAsData),
              h = f ? {
            title: f.title || null,
            alt: f.alt || null
          } : {
            title: null,
            alt: null
          },
              v = function v(e, a, r, n, o, l, s, d) {
            var c = " file-preview-initial " + t.SORT_CSS + (s ? " " + s : ""),
                u = i.previewInitId + "-" + l,
                p = f && f.fileId || u;
            return i._generatePreviewTemplate(e, a, r, n, u, p, !1, null, c, o, l, d, h, f && f.zoomData || a);
          };

          return g && g.length ? (a = void 0 === a ? !0 : a, o = t.ifSet("type", f, i.initialPreviewFileType || "generic"), s = t.ifSet("filename", f, t.ifSet("caption", f)), d = t.ifSet("filetype", f, o), l = i.previewCache.footer(e, a, f && f.size || null), c = t.ifSet("frameClass", f), r = m ? v(o, g, s, d, l, u, c) : v("generic", g, s, d, l, u, c, o).setTokens({
            content: p.content[e]
          }), p.tags.length && p.tags[e] && (r = t.replaceTags(r, p.tags[e])), t.isEmpty(f) || t.isEmpty(f.frameAttr) || (n = t.createElement(r), n.find(".file-preview-initial").attr(f.frameAttr), r = n.html(), n.remove()), r) : "";
        },
        clean: function clean(e) {
          e.content = t.cleanArray(e.content), e.config = t.cleanArray(e.config), e.tags = t.cleanArray(e.tags), i.previewCache.data = e;
        },
        add: function add(e, a, r, n) {
          var o,
              l = i.previewCache.data;
          return e && e.length ? (o = e.length - 1, t.isArray(e) || (e = e.split(i.initialPreviewDelimiter)), n && l.content ? (o = l.content.push(e[0]) - 1, l.config[o] = a, l.tags[o] = r) : (l.content = e, l.config = a, l.tags = r), i.previewCache.clean(l), o) : 0;
        },
        set: function set(e, a, r, n) {
          var o,
              l,
              s = i.previewCache.data;

          if (e && e.length && (t.isArray(e) || (e = e.split(i.initialPreviewDelimiter)), l = e.filter(function (e) {
            return null !== e;
          }), l.length)) {
            if (void 0 === s.content && (s.content = []), void 0 === s.config && (s.config = []), void 0 === s.tags && (s.tags = []), n) {
              for (o = 0; o < e.length; o++) {
                e[o] && s.content.push(e[o]);
              }

              for (o = 0; o < a.length; o++) {
                a[o] && s.config.push(a[o]);
              }

              for (o = 0; o < r.length; o++) {
                r[o] && s.tags.push(r[o]);
              }
            } else s.content = e, s.config = a, s.tags = r;

            i.previewCache.clean(s);
          }
        },
        unset: function unset(a) {
          var r = i.previewCache.count(),
              n = i.reversePreviewOrder;

          if (r) {
            if (1 === r) return i.previewCache.data.content = [], i.previewCache.data.config = [], i.previewCache.data.tags = [], i.initialPreview = [], i.initialPreviewConfig = [], void (i.initialPreviewThumbTags = []);
            i.previewCache.data.content = t.spliceArray(i.previewCache.data.content, a, n), i.previewCache.data.config = t.spliceArray(i.previewCache.data.config, a, n), i.previewCache.data.tags = t.spliceArray(i.previewCache.data.tags, a, n);
            var o = e.extend(!0, {}, i.previewCache.data);
            i.previewCache.clean(o);
          }
        },
        out: function out() {
          var e,
              t,
              a,
              r = "",
              n = i.previewCache.count();
          if (0 === n) return {
            content: "",
            caption: ""
          };

          for (t = 0; n > t; t++) {
            a = i.previewCache.get(t), r = i.reversePreviewOrder ? a + r : r + a;
          }

          return e = i._getMsgSelected(n), {
            content: r,
            caption: e
          };
        },
        footer: function footer(e, a, r) {
          var n = i.previewCache.data || {};
          if (t.isEmpty(n.content)) return "";
          (t.isEmpty(n.config) || t.isEmpty(n.config[e])) && (n.config[e] = {}), a = void 0 === a ? !0 : a;

          var o,
              l = n.config[e],
              s = t.ifSet("caption", l),
              d = t.ifSet("width", l, "auto"),
              c = t.ifSet("url", l, !1),
              u = t.ifSet("key", l, null),
              p = t.ifSet("fileId", l, null),
              f = i.fileActionSettings,
              g = i.initialPreviewShowDelete || !1,
              m = i.initialPreviewDownloadUrl ? i.initialPreviewDownloadUrl + "?key=" + u + (p ? "&fileId=" + p : "") : "",
              h = l.downloadUrl || m,
              v = l.filename || l.caption || "",
              w = !!h,
              b = t.ifSet("showRemove", l, g),
              _ = t.ifSet("showDownload", l, t.ifSet("showDownload", f, w)),
              C = t.ifSet("showZoom", l, t.ifSet("showZoom", f, !0)),
              y = t.ifSet("showDrag", l, t.ifSet("showDrag", f, !0)),
              x = c === !1 && a;

          return _ = _ && l.downloadUrl !== !1 && !!h, o = i._renderFileActions(l, !1, _, b, C, y, x, c, u, !0, h, v), i._getLayoutTemplate("footer").setTokens({
            progress: i._renderThumbProgress(),
            actions: o,
            caption: s,
            size: i._getSize(r),
            width: d,
            indicator: ""
          });
        }
      }, i.previewCache.init();
    },
    _isPdfRendered: function _isPdfRendered() {
      var e = this,
          t = e.usePdfRenderer,
          i = "function" == typeof t ? t() : !!t;
      return i && e.pdfRendererUrl;
    },
    _handler: function _handler(e, t, i) {
      var a = this,
          r = a.namespace,
          n = t.split(" ").join(r + " ") + r;
      e && e.length && e.off(n).on(n, i);
    },
    _encodeURI: function _encodeURI(e) {
      var t = this;
      return t.encodeUrl ? encodeURI(e) : e;
    },
    _log: function _log(e, t) {
      var i = this,
          a = i.$element.attr("id");
      i.showConsoleLogs && (a && (e = '"' + a + '": ' + e), e = "bootstrap-fileinput: " + e, "object" == _typeof(t) && (e = e.setTokens(t)), window.console && "undefined" != typeof window.console.log ? window.console.log(e) : window.alert(e));
    },
    _validate: function _validate() {
      var e = this,
          i = "file" === e.$element.attr("type");
      return i || e._log(t.logMessages.badInputType), i;
    },
    _errorsExist: function _errorsExist() {
      var i,
          a = this,
          r = a.$errorContainer.find("li");
      return r.length ? !0 : (i = t.createElement(a.$errorContainer.html()), i.find(".kv-error-close").remove(), i.find("ul").remove(), !!e.trim(i.text()).length);
    },
    _errorHandler: function _errorHandler(e, t) {
      var i = this,
          a = e.target.error,
          r = function r(e) {
        i._showError(e.replace("{name}", t));
      };

      r(a.code === a.NOT_FOUND_ERR ? i.msgFileNotFound : a.code === a.SECURITY_ERR ? i.msgFileSecured : a.code === a.NOT_READABLE_ERR ? i.msgFileNotReadable : a.code === a.ABORT_ERR ? i.msgFilePreviewAborted : i.msgFilePreviewError);
    },
    _addError: function _addError(e) {
      var i = this,
          a = i.$errorContainer;
      e && a.length && (t.setHtml(a, i.errorCloseButton + e), i._handler(a.find(".kv-error-close"), "click", function () {
        setTimeout(function () {
          i.showPreview && !i.getFrames().length && i.clear(), a.fadeOut("slow");
        }, i.processDelay);
      }));
    },
    _setValidationError: function _setValidationError(e) {
      var i = this;
      e = (e ? e + " " : "") + "has-error", i.$container.removeClass(e).addClass("has-error"), t.addCss(i.$captionContainer, "is-invalid");
    },
    _resetErrors: function _resetErrors(e) {
      var t = this,
          i = t.$errorContainer;
      t.isPersistentError || (t.isError = !1, t.$container.removeClass("has-error"), t.$captionContainer.removeClass("is-invalid"), i.html(""), e ? i.fadeOut("slow") : i.hide());
    },
    _showFolderError: function _showFolderError(e) {
      var t,
          i = this,
          a = i.$errorContainer;
      e && (i.isAjaxUpload || i._clearFileInput(), t = i.msgFoldersNotAllowed.replace("{n}", e), i._addError(t), i._setValidationError(), a.fadeIn(i.fadeDelay), i._raise("filefoldererror", [e, t]));
    },
    _showFileError: function _showFileError(e, t, i) {
      var a = this,
          r = a.$errorContainer,
          n = i || "fileuploaderror",
          o = t && t.fileId || "",
          l = t && t.id ? '<li data-thumb-id="' + t.id + '" data-file-id="' + o + '">' + e + "</li>" : "<li>" + e + "</li>";
      return 0 === r.find("ul").length ? a._addError("<ul>" + l + "</ul>") : r.find("ul").append(l), r.fadeIn(a.fadeDelay), a._raise(n, [t, e]), a._setValidationError("file-input-new"), !0;
    },
    _showError: function _showError(e, t, i) {
      var a = this,
          r = a.$errorContainer,
          n = i || "fileerror";
      return t = t || {}, t.reader = a.reader, a._addError(e), r.fadeIn(a.fadeDelay), a._raise(n, [t, e]), a.isAjaxUpload || a._clearFileInput(), a._setValidationError("file-input-new"), a.$btnUpload.attr("disabled", !0), !0;
    },
    _noFilesError: function _noFilesError(e) {
      var t = this,
          i = t.minFileCount > 1 ? t.filePlural : t.fileSingle,
          a = t.msgFilesTooLess.replace("{n}", t.minFileCount).replace("{files}", i),
          r = t.$errorContainer;
      a = "<li>" + a + "</li>", 0 === r.find("ul").length ? t._addError("<ul>" + a + "</ul>") : r.find("ul").append(a), t.isError = !0, t._updateFileDetails(0), r.fadeIn(t.fadeDelay), t._raise("fileerror", [e, a]), t._clearFileInput(), t._setValidationError();
    },
    _parseError: function _parseError(t, i, a, r) {
      var n,
          o,
          l,
          s = this,
          d = e.trim(a + "");
      return o = i.responseJSON && i.responseJSON.error ? i.responseJSON.error.toString() : "", l = o ? o : i.responseText, s.cancelling && s.msgUploadAborted && (d = s.msgUploadAborted), s.showAjaxErrorDetails && l && (o ? d = e.trim(o + "") : (l = e.trim(l.replace(/\n\s*\n/g, "\n")), n = l.length ? "<pre>" + l + "</pre>" : "", d += d ? n : l)), d || (d = s.msgAjaxError.replace("{operation}", t)), s.cancelling = !1, r ? "<b>" + r + ": </b>" + d : d;
    },
    _parseFileType: function _parseFileType(e, i) {
      var a,
          r,
          n,
          o,
          l = this,
          s = l.allowedPreviewTypes || [];
      if ("application/text-plain" === e) return "text";

      for (o = 0; o < s.length; o++) {
        if (n = s[o], a = l.fileTypeSettings[n], r = a(e, i) ? n : "", !t.isEmpty(r)) return r;
      }

      return "other";
    },
    _getPreviewIcon: function _getPreviewIcon(t) {
      var i,
          a = this,
          r = null;
      return t && t.indexOf(".") > -1 && (i = t.split(".").pop(), a.previewFileIconSettings && (r = a.previewFileIconSettings[i] || a.previewFileIconSettings[i.toLowerCase()] || null), a.previewFileExtSettings && e.each(a.previewFileExtSettings, function (e, t) {
        return a.previewFileIconSettings[e] && t(i) ? void (r = a.previewFileIconSettings[e]) : void 0;
      })), r || a.previewFileIcon;
    },
    _parseFilePreviewIcon: function _parseFilePreviewIcon(e, t) {
      var i = this,
          a = i._getPreviewIcon(t),
          r = e;

      return r.indexOf("{previewFileIcon}") > -1 && (r = r.setTokens({
        previewFileIconClass: i.previewFileIconClass,
        previewFileIcon: a
      })), r;
    },
    _raise: function _raise(t, i) {
      var a = this,
          r = e.Event(t);
      if (void 0 !== i ? a.$element.trigger(r, i) : a.$element.trigger(r), r.isDefaultPrevented() || r.result === !1) return !1;

      switch (t) {
        case "filebatchuploadcomplete":
        case "filebatchuploadsuccess":
        case "fileuploaded":
        case "fileclear":
        case "filecleared":
        case "filereset":
        case "fileerror":
        case "filefoldererror":
        case "fileuploaderror":
        case "filebatchuploaderror":
        case "filedeleteerror":
        case "filecustomerror":
        case "filesuccessremove":
          break;

        default:
          a.ajaxAborted || (a.ajaxAborted = r.result);
      }

      return !0;
    },
    _listenFullScreen: function _listenFullScreen(e) {
      var t,
          i,
          a = this,
          r = a.$modal;
      r && r.length && (t = r && r.find(".btn-fullscreen"), i = r && r.find(".btn-borderless"), t.length && i.length && (t.removeClass("active").attr("aria-pressed", "false"), i.removeClass("active").attr("aria-pressed", "false"), e ? t.addClass("active").attr("aria-pressed", "true") : i.addClass("active").attr("aria-pressed", "true"), r.hasClass("file-zoom-fullscreen") ? a._maximizeZoomDialog() : e ? a._maximizeZoomDialog() : i.removeClass("active").attr("aria-pressed", "false")));
    },
    _listen: function _listen() {
      var i,
          a = this,
          r = a.$element,
          n = a.$form,
          o = a.$container;
      a._handler(r, "click", function (e) {
        r.hasClass("file-no-browse") && (r.data("zoneClicked") ? r.data("zoneClicked", !1) : e.preventDefault());
      }), a._handler(r, "change", e.proxy(a._change, a)), a.showBrowse && a._handler(a.$btnFile, "click", e.proxy(a._browse, a)), a._handler(o.find(".fileinput-remove:not([disabled])"), "click", e.proxy(a.clear, a)), a._handler(o.find(".fileinput-cancel"), "click", e.proxy(a.cancel, a)), a._handler(o.find(".fileinput-pause"), "click", e.proxy(a.pause, a)), a._initDragDrop(), a._handler(n, "reset", e.proxy(a.clear, a)), a.isAjaxUpload || a._handler(n, "submit", e.proxy(a._submitForm, a)), a._handler(a.$container.find(".fileinput-upload"), "click", e.proxy(a._uploadClick, a)), a._handler(e(window), "resize", function () {
        a._listenFullScreen(screen.width === window.innerWidth && screen.height === window.innerHeight);
      }), i = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", a._handler(e(document), i, function () {
        a._listenFullScreen(t.checkFullScreen());
      }), a._autoFitContent(), a._initClickable(), a._refreshPreview();
    },
    _autoFitContent: function _autoFitContent() {
      var t,
          i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          a = this,
          r = 400 > i ? a.previewSettingsSmall || a.defaults.previewSettingsSmall : a.previewSettings || a.defaults.previewSettings;
      e.each(r, function (e, i) {
        t = ".file-preview-frame .file-preview-" + e, a.$preview.find(t + ".kv-preview-data," + t + " .kv-preview-data").css(i);
      });
    },
    _scanDroppedItems: function _scanDroppedItems(e, i, a) {
      a = a || "";

      var r,
          n,
          _o2,
          l = this,
          s = function s(e) {
        l._log(t.logMessages.badDroppedFiles), l._log(e);
      };

      e.isFile ? e.file(function (e) {
        a && (e.newPath = a + e.name), i.push(e);
      }, s) : e.isDirectory && (n = e.createReader(), (_o2 = function o() {
        n.readEntries(function (t) {
          if (t && t.length > 0) {
            for (r = 0; r < t.length; r++) {
              l._scanDroppedItems(t[r], i, a + e.name + "/");
            }

            _o2();
          }

          return null;
        }, s);
      })());
    },
    _initDragDrop: function _initDragDrop() {
      var t = this,
          i = t.$dropZone;
      t.dropZoneEnabled && t.showPreview && (t._handler(i, "dragenter dragover", e.proxy(t._zoneDragEnter, t)), t._handler(i, "dragleave", e.proxy(t._zoneDragLeave, t)), t._handler(i, "drop", e.proxy(t._zoneDrop, t)), t._handler(e(document), "dragenter dragover drop", t._zoneDragDropInit));
    },
    _zoneDragDropInit: function _zoneDragDropInit(e) {
      e.stopPropagation(), e.preventDefault();
    },
    _zoneDragEnter: function _zoneDragEnter(i) {
      var a = this,
          r = i.originalEvent.dataTransfer,
          n = e.inArray("Files", r.types) > -1;
      return a._zoneDragDropInit(i), a.isDisabled || !n ? (i.originalEvent.dataTransfer.effectAllowed = "none", void (i.originalEvent.dataTransfer.dropEffect = "none")) : void (a._raise("fileDragEnter", {
        sourceEvent: i,
        files: r.types.Files
      }) && t.addCss(a.$dropZone, "file-highlighted"));
    },
    _zoneDragLeave: function _zoneDragLeave(e) {
      var t = this;
      t._zoneDragDropInit(e), t.isDisabled || t._raise("fileDragLeave", {
        sourceEvent: e
      }) && t.$dropZone.removeClass("file-highlighted");
    },
    _zoneDrop: function _zoneDrop(e) {
      var i,
          a = this,
          r = a.$element,
          n = e.originalEvent.dataTransfer,
          o = n.files,
          l = n.items,
          s = t.getDragDropFolders(l),
          d = function d() {
        a.isAjaxUpload ? a._change(e, o) : (a.changeTriggered = !0, r.get(0).files = o, setTimeout(function () {
          a.changeTriggered = !1, r.trigger("change" + a.namespace);
        }, a.processDelay)), a.$dropZone.removeClass("file-highlighted");
      };

      if (e.preventDefault(), !a.isDisabled && !t.isEmpty(o) && a._raise("fileDragDrop", {
        sourceEvent: e,
        files: o
      })) if (s > 0) {
        if (!a.isAjaxUpload) return void a._showFolderError(s);

        for (o = [], i = 0; i < l.length; i++) {
          var c = l[i].webkitGetAsEntry();
          c && a._scanDroppedItems(c, o);
        }

        setTimeout(function () {
          d();
        }, 500);
      } else d();
    },
    _uploadClick: function _uploadClick(e) {
      var i,
          a = this,
          r = a.$container.find(".fileinput-upload"),
          n = !r.hasClass("disabled") && t.isEmpty(r.attr("disabled"));

      if (!e || !e.isDefaultPrevented()) {
        if (!a.isAjaxUpload) return void (n && "submit" !== r.attr("type") && (i = r.closest("form"), i.length && i.trigger("submit"), e.preventDefault()));
        e.preventDefault(), n && a.upload();
      }
    },
    _submitForm: function _submitForm() {
      var e = this;
      return e._isFileSelectionValid() && !e._abort({});
    },
    _clearPreview: function _clearPreview() {
      var t = this,
          i = t.showUploadedThumbs ? t.getFrames(":not(.file-preview-success)") : t.getFrames();
      i.each(function () {
        var t = e(this);
        t.remove();
      }), t.getFrames().length && t.showPreview || t._resetUpload(), t._validateDefaultPreview();
    },
    _initSortable: function _initSortable() {
      var i,
          a,
          r,
          n,
          o = this,
          l = o.$preview,
          s = "." + t.SORT_CSS,
          d = e("body"),
          c = e("html"),
          u = o.reversePreviewOrder,
          p = window.Sortable;
      p && 0 !== l.find(s).length && (a = d.length ? d : c.length ? c : o.$container, r = function r() {
        a.addClass("file-grabbing");
      }, n = function n() {
        a.removeClass("file-grabbing");
      }, i = {
        handle: ".drag-handle-init",
        dataIdAttr: "data-fileid",
        animation: 600,
        draggable: s,
        scroll: !1,
        forceFallback: !0,
        onChoose: r,
        onStart: r,
        onUnchoose: n,
        onEnd: n,
        onSort: function onSort(i) {
          var a,
              r = i.oldIndex,
              n = i.newIndex,
              l = 0,
              s = o.initialPreviewConfig.length,
              d = s > 0 && n >= s,
              c = e(i.item);
          d && (n = s - 1), o.initialPreview = t.moveArray(o.initialPreview, r, n, u), o.initialPreviewConfig = t.moveArray(o.initialPreviewConfig, r, n, u), o.previewCache.init(), o.getFrames(".file-preview-initial").each(function () {
            e(this).attr("data-fileindex", t.INIT_FLAG + l), l++;
          }), d && (a = o.getFrames(":not(.file-preview-initial):first"), a.length && c.slideUp(function () {
            c.insertBefore(a).slideDown();
          })), o._raise("filesorted", {
            previewId: c.attr("id"),
            oldIndex: r,
            newIndex: n,
            stack: o.initialPreviewConfig
          });
        }
      }, e.extend(!0, i, o.fileActionSettings.dragSettings), o.sortable && o.sortable.destroy(), o.sortable = p.create(l[0], i));
    },
    _setPreviewContent: function _setPreviewContent(e) {
      var i = this;
      t.setHtml(i.$preview, e), i._autoFitContent();
    },
    _initPreviewImageOrientations: function _initPreviewImageOrientations() {
      var t = this,
          i = 0,
          a = t.canOrientImage;
      (t.autoOrientImageInitial || a) && t.getFrames(".file-preview-initial").each(function () {
        var r,
            n,
            o,
            l = e(this),
            s = t.initialPreviewConfig[i];
        s && s.exif && s.exif.Orientation && (o = l.attr("id"), r = l.find(">.kv-file-content img"), n = t._getZoom(o, " >.kv-file-content img"), a ? r.css("image-orientation", t.autoOrientImageInitial ? "from-image" : "none") : t.setImageOrientation(r, n, s.exif.Orientation, l)), i++;
      });
    },
    _initPreview: function _initPreview(e) {
      var i,
          a = this,
          r = a.initialCaption || "";
      return a.previewCache.count(!0) ? (i = a.previewCache.out(), r = e && a.initialCaption ? a.initialCaption : i.caption, a._setPreviewContent(i.content), a._setInitThumbAttr(), a._setCaption(r), a._initSortable(), t.isEmpty(i.content) || a.$container.removeClass("file-input-new"), void a._initPreviewImageOrientations()) : (a._clearPreview(), void (e ? a._setCaption(r) : a._initCaption()));
    },
    _getZoomButton: function _getZoomButton(e) {
      var t = this,
          i = t.previewZoomButtonIcons[e],
          a = t.previewZoomButtonClasses[e],
          r = ' title="' + (t.previewZoomButtonTitles[e] || "") + '" ',
          n = r + ("close" === e ? ' data-dismiss="modal" aria-hidden="true"' : "");
      return "fullscreen" !== e && "borderless" !== e && "toggleheader" !== e || (n += ' data-toggle="button" aria-pressed="false" autocomplete="off"'), '<button type="button" class="' + a + " btn-" + e + '"' + n + ">" + i + "</button>";
    },
    _getModalContent: function _getModalContent() {
      var e = this;
      return e._getLayoutTemplate("modal").setTokens({
        rtl: e.rtl ? " kv-rtl" : "",
        zoomFrameClass: e.frameClass,
        heading: e.msgZoomModalHeading,
        prev: e._getZoomButton("prev"),
        next: e._getZoomButton("next"),
        toggleheader: e._getZoomButton("toggleheader"),
        fullscreen: e._getZoomButton("fullscreen"),
        borderless: e._getZoomButton("borderless"),
        close: e._getZoomButton("close")
      });
    },
    _listenModalEvent: function _listenModalEvent(e) {
      var i = this,
          a = i.$modal,
          r = function r(e) {
        return {
          sourceEvent: e,
          previewId: a.data("previewId"),
          modal: a
        };
      };

      a.on(e + ".bs.modal", function (n) {
        var o = a.find(".btn-fullscreen"),
            l = a.find(".btn-borderless");
        a.data("fileinputPluginId") === i.$element.attr("id") && i._raise("filezoom" + e, r(n)), "shown" === e && (l.removeClass("active").attr("aria-pressed", "false"), o.removeClass("active").attr("aria-pressed", "false"), a.hasClass("file-zoom-fullscreen") && (i._maximizeZoomDialog(), t.checkFullScreen() ? o.addClass("active").attr("aria-pressed", "true") : l.addClass("active").attr("aria-pressed", "true")));
      });
    },
    _initZoom: function _initZoom() {
      var i,
          a = this,
          r = a._getLayoutTemplate("modalMain"),
          n = "#" + t.MODAL_ID;

      a.showPreview && (a.$modal = e(n), a.$modal && a.$modal.length || (i = t.createElement(t.cspBuffer.stash(r)).insertAfter(a.$container), a.$modal = e(n).insertBefore(i), t.cspBuffer.apply(a.$modal), i.remove()), t.initModal(a.$modal), a.$modal.html(t.cspBuffer.stash(a._getModalContent())), t.cspBuffer.apply(a.$modal), e.each(t.MODAL_EVENTS, function (e, t) {
        a._listenModalEvent(t);
      }));
    },
    _initZoomButtons: function _initZoomButtons() {
      var t,
          i,
          a = this,
          r = a.$modal.data("previewId") || "",
          n = a.getFrames().toArray(),
          o = n.length,
          l = a.$modal.find(".btn-prev"),
          s = a.$modal.find(".btn-next");
      return n.length < 2 ? (l.hide(), void s.hide()) : (l.show(), s.show(), void (o && (t = e(n[0]), i = e(n[o - 1]), l.removeAttr("disabled"), s.removeAttr("disabled"), t.length && t.attr("id") === r && l.attr("disabled", !0), i.length && i.attr("id") === r && s.attr("disabled", !0))));
    },
    _maximizeZoomDialog: function _maximizeZoomDialog() {
      var t = this,
          i = t.$modal,
          a = i.find(".modal-header:visible"),
          r = i.find(".modal-footer:visible"),
          n = i.find(".modal-body"),
          o = e(window).height(),
          l = 0;
      i.addClass("file-zoom-fullscreen"), a && a.length && (o -= a.outerHeight(!0)), r && r.length && (o -= r.outerHeight(!0)), n && n.length && (l = n.outerHeight(!0) - n.height(), o -= l), i.find(".kv-zoom-body").height(o);
    },
    _resizeZoomDialog: function _resizeZoomDialog(e) {
      var i = this,
          a = i.$modal,
          r = a.find(".btn-fullscreen"),
          n = a.find(".btn-borderless");
      if (a.hasClass("file-zoom-fullscreen")) t.toggleFullScreen(!1), e ? r.hasClass("active") || (a.removeClass("file-zoom-fullscreen"), i._resizeZoomDialog(!0), n.hasClass("active") && n.removeClass("active").attr("aria-pressed", "false")) : r.hasClass("active") ? r.removeClass("active").attr("aria-pressed", "false") : (a.removeClass("file-zoom-fullscreen"), i.$modal.find(".kv-zoom-body").css("height", i.zoomModalHeight));else {
        if (!e) return void i._maximizeZoomDialog();
        t.toggleFullScreen(!0);
      }
      a.focus();
    },
    _setZoomContent: function _setZoomContent(i, a) {
      var r,
          n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g = this,
          m = i.attr("id"),
          h = g._getZoom(m),
          v = g.$modal,
          w = v.find(".btn-fullscreen"),
          b = v.find(".btn-borderless"),
          _ = v.find(".btn-toggleheader");

      n = h.attr("data-template") || "generic", r = h.find(".kv-file-content"), o = r.length ? r.html() : "", p = i.data("caption") || "", f = i.data("size") || "", l = p + " " + f, v.find(".kv-zoom-title").attr("title", e("<div/>").html(l).text()).html(l), s = v.find(".kv-zoom-body"), v.removeClass("kv-single-content"), a ? (u = s.addClass("file-thumb-loading").clone().insertAfter(s), t.setHtml(s, o).hide(), u.fadeOut("fast", function () {
        s.fadeIn("fast", function () {
          s.removeClass("file-thumb-loading");
        }), u.remove();
      })) : t.setHtml(s, o), c = g.previewZoomSettings[n], c && (d = s.find(".kv-preview-data"), t.addCss(d, "file-zoom-detail"), e.each(c, function (e, t) {
        d.css(e, t), (d.attr("width") && "width" === e || d.attr("height") && "height" === e) && d.removeAttr(e);
      })), v.data("previewId", m), g._handler(v.find(".btn-prev"), "click", function () {
        g._zoomSlideShow("prev", m);
      }), g._handler(v.find(".btn-next"), "click", function () {
        g._zoomSlideShow("next", m);
      }), g._handler(w, "click", function () {
        g._resizeZoomDialog(!0);
      }), g._handler(b, "click", function () {
        g._resizeZoomDialog(!1);
      }), g._handler(_, "click", function () {
        var e,
            t = v.find(".modal-header"),
            i = v.find(".modal-body .floating-buttons"),
            a = t.find(".kv-zoom-actions"),
            r = function r(e) {
          var i = g.$modal.find(".kv-zoom-body"),
              a = g.zoomModalHeight;
          v.hasClass("file-zoom-fullscreen") && (a = i.outerHeight(!0), e || (a -= t.outerHeight(!0))), i.css("height", e ? a + e : a);
        };

        t.is(":visible") ? (e = t.outerHeight(!0), t.slideUp("slow", function () {
          a.find(".btn").appendTo(i), r(e);
        })) : (i.find(".btn").appendTo(a), t.slideDown("slow", function () {
          r();
        })), v.focus();
      }), g._handler(v, "keydown", function (t) {
        var i = t.which || t.keyCode,
            a = e(this).find(".btn-prev"),
            r = e(this).find(".btn-next"),
            n = e(this).data("previewId"),
            o = g.rtl ? 39 : 37,
            l = g.rtl ? 37 : 39;
        i === o && a.length && !a.attr("disabled") && g._zoomSlideShow("prev", n), i === l && r.length && !r.attr("disabled") && g._zoomSlideShow("next", n);
      });
    },
    _showModal: function _showModal(e) {
      var i = this,
          a = i.$modal;
      e && e.length && (t.initModal(a), t.setHtml(a, i._getModalContent()), i._setZoomContent(e), a.data("fileinputPluginId", i.$element.attr("id")), a.modal("show"), i._initZoomButtons());
    },
    _zoomPreview: function _zoomPreview(e) {
      var i,
          a = this;
      if (!e.length) throw "Cannot zoom to detailed preview!";
      i = e.closest(t.FRAMES), a._showModal(i);
    },
    _zoomSlideShow: function _zoomSlideShow(t, i) {
      var a,
          r,
          n,
          o,
          l = this,
          s = l.$modal.find(".kv-zoom-actions .btn-" + t),
          d = l.getFrames().toArray(),
          c = [],
          u = d.length;

      if (!s.attr("disabled")) {
        for (r = 0; u > r; r++) {
          n = e(d[r]), n && n.length && n.find(".kv-file-zoom:visible").length && c.push(d[r]);
        }

        for (u = c.length, r = 0; u > r; r++) {
          if (e(c[r]).attr("id") === i) {
            o = "prev" === t ? r - 1 : r + 1;
            break;
          }
        }

        0 > o || o >= u || !c[o] || (a = e(c[o]), a.length && l._setZoomContent(a, !0), l._initZoomButtons(), l._raise("filezoom" + t, {
          previewId: i,
          modal: l.$modal
        }));
      }
    },
    _initZoomButton: function _initZoomButton() {
      var t = this;
      t.$preview.find(".kv-file-zoom").each(function () {
        var i = e(this);

        t._handler(i, "click", function () {
          t._zoomPreview(i);
        });
      });
    },
    _inputFileCount: function _inputFileCount() {
      return this.$element[0].files.length;
    },
    _refreshPreview: function _refreshPreview() {
      var t,
          i = this;
      (i._inputFileCount() || i.isAjaxUpload) && i.showPreview && i.isPreviewable && (i.isAjaxUpload && i.fileManager.count() > 0 ? (t = e.extend(!0, {}, i.fileManager.stack), i.fileManager.clear(), i._clearFileInput()) : t = i.$element[0].files, t && t.length && (i.readFiles(t), i._setFileDropZoneTitle()));
    },
    _clearObjects: function _clearObjects(t) {
      t.find("video audio").each(function () {
        this.pause(), e(this).remove();
      }), t.find("img object div").each(function () {
        e(this).remove();
      });
    },
    _clearFileInput: function _clearFileInput() {
      var t,
          i,
          a,
          r = this,
          n = r.$element;
      r._inputFileCount() && (t = n.closest("form"), i = e(document.createElement("form")), a = e(document.createElement("div")), n.before(a), t.length ? t.after(i) : a.after(i), i.append(n).trigger("reset"), a.before(n).remove(), i.remove());
    },
    _resetUpload: function _resetUpload() {
      var e = this;
      e.uploadCache = [], e.$btnUpload.removeAttr("disabled"), e._setProgress(0), e._hideProgress(), e._resetErrors(!1), e._initAjax(), e.fileManager.clearImages(), e._resetCanvas(), e.overwriteInitial && (e.initialPreview = [], e.initialPreviewConfig = [], e.initialPreviewThumbTags = [], e.previewCache.data = {
        content: [],
        config: [],
        tags: []
      });
    },
    _resetCanvas: function _resetCanvas() {
      var e = this;
      e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height);
    },
    _hasInitialPreview: function _hasInitialPreview() {
      var e = this;
      return !e.overwriteInitial && e.previewCache.count(!0);
    },
    _resetPreview: function _resetPreview() {
      var e,
          t,
          i = this;
      i.previewCache.count(!0) ? (e = i.previewCache.out(), i._setPreviewContent(e.content), i._setInitThumbAttr(), t = i.initialCaption ? i.initialCaption : e.caption, i._setCaption(t)) : (i._clearPreview(), i._initCaption()), i.showPreview && (i._initZoom(), i._initSortable());
    },
    _clearDefaultPreview: function _clearDefaultPreview() {
      var e = this;
      e.$preview.find(".file-default-preview").remove();
    },
    _validateDefaultPreview: function _validateDefaultPreview() {
      var e = this;
      e.showPreview && !t.isEmpty(e.defaultPreviewContent) && (e._setPreviewContent('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), e.$container.removeClass("file-input-new"), e._initClickable());
    },
    _resetPreviewThumbs: function _resetPreviewThumbs(e) {
      var t,
          i = this;
      return e ? (i._clearPreview(), void i.clearFileStack()) : void (i._hasInitialPreview() ? (t = i.previewCache.out(), i._setPreviewContent(t.content), i._setInitThumbAttr(), i._setCaption(t.caption), i._initPreviewActions()) : i._clearPreview());
    },
    _getLayoutTemplate: function _getLayoutTemplate(e) {
      var i = this,
          a = i.layoutTemplates[e];
      return t.isEmpty(i.customLayoutTags) ? a : t.replaceTags(a, i.customLayoutTags);
    },
    _getPreviewTemplate: function _getPreviewTemplate(e) {
      var i = this,
          a = i.previewTemplates,
          r = a[e] || a.other;
      return t.isEmpty(i.customPreviewTags) ? r : t.replaceTags(r, i.customPreviewTags);
    },
    _getOutData: function _getOutData(e, t, i, a) {
      var r = this;
      return t = t || {}, i = i || {}, a = a || r.fileManager.list(), {
        formdata: e,
        files: a,
        filenames: r.filenames,
        filescount: r.getFilesCount(),
        extra: r._getExtraData(),
        response: i,
        reader: r.reader,
        jqXHR: t
      };
    },
    _getMsgSelected: function _getMsgSelected(e) {
      var t = this,
          i = 1 === e ? t.fileSingle : t.filePlural;
      return e > 0 ? t.msgSelected.replace("{n}", e).replace("{files}", i) : t.msgNoFilesSelected;
    },
    _getFrame: function _getFrame(e, i) {
      var a = this,
          r = t.getFrameElement(a.$preview, e);
      return !a.showPreview || i || r.length || a._log(t.logMessages.invalidThumb, {
        id: e
      }), r;
    },
    _getZoom: function _getZoom(e, i) {
      var a = this,
          r = t.getZoomElement(a.$preview, e, i);
      return a.showPreview && !r.length && a._log(t.logMessages.invalidThumb, {
        id: e
      }), r;
    },
    _getThumbs: function _getThumbs(e) {
      return e = e || "", this.getFrames(":not(.file-preview-initial)" + e);
    },
    _getThumbId: function _getThumbId(e) {
      var t = this;
      return t.previewInitId + "-" + e;
    },
    _getExtraData: function _getExtraData(e, t) {
      var i = this,
          a = i.uploadExtraData;
      return "function" == typeof i.uploadExtraData && (a = i.uploadExtraData(e, t)), a;
    },
    _initXhr: function _initXhr(e, i, a) {
      var r = this,
          n = r.fileManager,
          o = function o(e) {
        var o = 0,
            l = e.total,
            s = e.loaded || e.position,
            d = n.getUploadStats(i, s, l);
        e.lengthComputable && !r.enableResumableUpload && (o = t.round(s / l * 100)), i ? r._setFileUploadStats(i, o, a, d) : r._setProgress(o, null, null, r._getStats(d)), r._raise("fileajaxprogress", [d]);
      };

      return e.upload && (r.progressDelay && (o = t.debounce(o, r.progressDelay)), e.upload.addEventListener("progress", o, !1)), e;
    },
    _initAjaxSettings: function _initAjaxSettings() {
      var t = this;
      t._ajaxSettings = e.extend(!0, {}, t.ajaxSettings), t._ajaxDeleteSettings = e.extend(!0, {}, t.ajaxDeleteSettings);
    },
    _mergeAjaxCallback: function _mergeAjaxCallback(e, t, i) {
      var a,
          r = this,
          n = r._ajaxSettings,
          o = r.mergeAjaxCallbacks;
      "delete" === i && (n = r._ajaxDeleteSettings, o = r.mergeAjaxDeleteCallbacks), a = n[e], o && "function" == typeof a ? "before" === o ? n[e] = function () {
        a.apply(this, arguments), t.apply(this, arguments);
      } : n[e] = function () {
        t.apply(this, arguments), a.apply(this, arguments);
      } : n[e] = t;
    },
    _ajaxSubmit: function _ajaxSubmit(t, i, a, r, n, o, l, s) {
      var d,
          c,
          u,
          p,
          f = this;
      f._raise("filepreajax", [n, o, l]) && (n.append("initialPreview", JSON.stringify(f.initialPreview)), n.append("initialPreviewConfig", JSON.stringify(f.initialPreviewConfig)), n.append("initialPreviewThumbTags", JSON.stringify(f.initialPreviewThumbTags)), f._initAjaxSettings(), f._mergeAjaxCallback("beforeSend", t), f._mergeAjaxCallback("success", i), f._mergeAjaxCallback("complete", a), f._mergeAjaxCallback("error", r), s = s || f.uploadUrlThumb || f.uploadUrl, "function" == typeof s && (s = s()), u = f._getExtraData(o, l) || {}, "object" == _typeof(u) && e.each(u, function (e, t) {
        n.append(e, t);
      }), c = {
        xhr: function xhr() {
          var t = e.ajaxSettings.xhr();
          return f._initXhr(t, o, f.fileManager.count());
        },
        url: f._encodeURI(s),
        type: "POST",
        dataType: "json",
        data: n,
        cache: !1,
        processData: !1,
        contentType: !1
      }, d = e.extend(!0, {}, c, f._ajaxSettings), p = f.taskManager.addTask(o + "-" + l, function () {
        var t,
            i,
            a = this.self;
        t = a.ajaxQueue.shift(), i = e.ajax(t), a.ajaxRequests.push(i);
      }), f.ajaxQueue.push(d), p.runWithContext({
        self: f
      }));
    },
    _mergeArray: function _mergeArray(e, i) {
      var a = this,
          r = t.cleanArray(a[e]),
          n = t.cleanArray(i);
      a[e] = r.concat(n);
    },
    _initUploadSuccess: function _initUploadSuccess(i, a, r) {
      var n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m = this;
      return !m.showPreview || "object" != _typeof(i) || e.isEmptyObject(i) ? void m._resetCaption() : (void 0 !== i.initialPreview && i.initialPreview.length > 0 && (m.hasInitData = !0, c = i.initialPreview || [], u = i.initialPreviewConfig || [], p = i.initialPreviewThumbTags || [], n = void 0 === i.append || i.append, c.length > 0 && !t.isArray(c) && (c = c.split(m.initialPreviewDelimiter)), c.length && (m._mergeArray("initialPreview", c), m._mergeArray("initialPreviewConfig", u), m._mergeArray("initialPreviewThumbTags", p)), void 0 !== a ? r ? (f = a.attr("id"), g = m._getUploadCacheIndex(f), null !== g && (m.uploadCache[g] = {
        id: f,
        content: c[0],
        config: u[0] || [],
        tags: p[0] || [],
        append: n
      })) : (l = m.previewCache.add(c[0], u[0], p[0], n), o = m.previewCache.get(l, !1), s = t.createElement(o).hide().appendTo(a), d = s.find(".kv-zoom-cache"), d && d.length && d.appendTo(a), a.fadeOut("slow", function () {
        var e = s.find(".file-preview-frame");
        e && e.length && e.insertBefore(a).fadeIn("slow").css("display:inline-block"), m._initPreviewActions(), m._clearFileInput(), a.remove(), s.remove(), m._initSortable();
      })) : (m.previewCache.set(c, u, p, n), m._initPreview(), m._initPreviewActions())), void m._resetCaption());
    },
    _getUploadCacheIndex: function _getUploadCacheIndex(e) {
      var t,
          i,
          a = this,
          r = a.uploadCache.length;

      for (t = 0; r > t; t++) {
        if (i = a.uploadCache[t], i.id === e) return t;
      }

      return null;
    },
    _initSuccessThumbs: function _initSuccessThumbs() {
      var i = this;
      i.showPreview && i._getThumbs(t.FRAMES + ".file-preview-success").each(function () {
        var a = e(this),
            r = a.find(".kv-file-remove");
        r.removeAttr("disabled"), i._handler(r, "click", function () {
          var e = a.attr("id"),
              r = i._raise("filesuccessremove", [e, a.attr("data-fileindex")]);

          t.cleanMemory(a), r !== !1 && a.fadeOut("slow", function () {
            a.remove(), i.getFrames().length || i.reset();
          });
        });
      });
    },
    _updateInitialPreview: function _updateInitialPreview() {
      var t = this,
          i = t.uploadCache;
      t.showPreview && (e.each(i, function (e, i) {
        t.previewCache.add(i.content, i.config, i.tags, i.append);
      }), t.hasInitData && (t._initPreview(), t._initPreviewActions()));
    },
    _uploadSingle: function _uploadSingle(i, a, r) {
      var n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          h,
          v,
          w = this,
          b = w.fileManager,
          _ = b.count(),
          C = new FormData(),
          y = w._getThumbId(a),
          x = _ > 0 || !e.isEmptyObject(w.uploadExtraData),
          T = w.ajaxOperations.uploadThumb,
          P = b.getFile(a),
          k = {
        id: y,
        index: i,
        fileId: a
      },
          E = w.fileManager.getFileName(a, !0);

      w.enableResumableUpload || (w.showPreview && (o = w.fileManager.getThumb(a), u = o.find(".file-thumb-progress"), s = o.find(".kv-file-upload"), d = o.find(".kv-file-remove"), u.show()), 0 === _ || !x || w.showPreview && s && s.hasClass("disabled") || w._abort(k) || (v = function v() {
        c ? b.errors.push(a) : b.removeFile(a), b.setProcessed(a), b.isProcessed() && (w.fileBatchCompleted = !0, l());
      }, l = function l() {
        var e;
        w.fileBatchCompleted && setTimeout(function () {
          var i = 0 === b.count(),
              a = b.errors.length;
          w._updateInitialPreview(), w.unlock(i), i && w._clearFileInput(), e = w.$preview.find(".file-preview-initial"), w.uploadAsync && e.length && (t.addCss(e, t.SORT_CSS), w._initSortable()), w._raise("filebatchuploadcomplete", [b.stack, w._getExtraData()]), w.retryErrorUploads && 0 !== a || b.clear(), w._setProgress(101), w.ajaxAborted = !1;
        }, w.processDelay);
      }, p = function p(l) {
        n = w._getOutData(C, l), b.initStats(a), w.fileBatchCompleted = !1, r || (w.ajaxAborted = !1), w.showPreview && (o.hasClass("file-preview-success") || (w._setThumbStatus(o, "Loading"), t.addCss(o, "file-uploading")), s.attr("disabled", !0), d.attr("disabled", !0)), r || w.lock(), -1 !== b.errors.indexOf(a) && delete b.errors[a], w._raise("filepreupload", [n, y, i]), e.extend(!0, k, n), w._abort(k) && (l.abort(), r || (w._setThumbStatus(o, "New"), o.removeClass("file-uploading"), s.removeAttr("disabled"), d.removeAttr("disabled"), w.unlock()), w._setProgressCancelled());
      }, g = function g(l, d, p) {
        var g = w.showPreview && o.attr("id") ? o.attr("id") : y;
        n = w._getOutData(C, p, l), e.extend(!0, k, n), setTimeout(function () {
          t.isEmpty(l) || t.isEmpty(l.error) ? (w.showPreview && (w._setThumbStatus(o, "Success"), s.hide(), w._initUploadSuccess(l, o, r), w._setProgress(101, u)), w._raise("fileuploaded", [n, g, i]), r ? v() : w.fileManager.remove(o)) : (c = !0, f = w._parseError(T, p, w.msgUploadError, w.fileManager.getFileName(a)), w._showFileError(f, k), w._setPreviewError(o, !0), w.retryErrorUploads || s.hide(), r && v(), w._setProgress(101, w._getFrame(g).find(".file-thumb-progress"), w.msgUploadError));
        }, w.processDelay);
      }, m = function m() {
        w.showPreview && (s.removeAttr("disabled"), d.removeAttr("disabled"), o.removeClass("file-uploading")), r ? l() : (w.unlock(!1), w._clearFileInput()), w._initSuccessThumbs();
      }, h = function h(t, i, n) {
        f = w._parseError(T, t, n, w.fileManager.getFileName(a)), c = !0, setTimeout(function () {
          var i;
          r && v(), w.fileManager.setProgress(a, 100), w._setPreviewError(o, !0), w.retryErrorUploads || s.hide(), e.extend(!0, k, w._getOutData(C, t)), w._setProgress(101, w.$progress, w.msgAjaxProgressError.replace("{operation}", T)), i = w.showPreview && o ? o.find(".file-thumb-progress") : "", w._setProgress(101, i, w.msgUploadError), w._showFileError(f, k);
        }, w.processDelay);
      }, C.append(w.uploadFileAttr, P.file, E), w._setUploadData(C, {
        fileId: a
      }), w._ajaxSubmit(p, g, m, h, C, a, i)));
    },
    _uploadBatch: function _uploadBatch() {
      var i,
          a,
          r,
          n,
          o,
          l,
          s = this,
          d = s.fileManager,
          c = d.total(),
          u = {},
          p = c > 0 || !e.isEmptyObject(s.uploadExtraData),
          f = new FormData(),
          g = s.ajaxOperations.uploadBatch;

      if (0 !== c && p && !s._abort(u)) {
        l = function l() {
          s.fileManager.clear(), s._clearFileInput();
        }, i = function i(_i2) {
          s.lock(), d.initStats();

          var a = s._getOutData(f, _i2);

          s.ajaxAborted = !1, s.showPreview && s._getThumbs().each(function () {
            var i = e(this),
                a = i.find(".kv-file-upload"),
                r = i.find(".kv-file-remove");
            i.hasClass("file-preview-success") || (s._setThumbStatus(i, "Loading"), t.addCss(i, "file-uploading")), a.attr("disabled", !0), r.attr("disabled", !0);
          }), s._raise("filebatchpreupload", [a]), s._abort(a) && (_i2.abort(), s._getThumbs().each(function () {
            var t = e(this),
                i = t.find(".kv-file-upload"),
                a = t.find(".kv-file-remove");
            t.hasClass("file-preview-loading") && (s._setThumbStatus(t, "New"), t.removeClass("file-uploading")), i.removeAttr("disabled"), a.removeAttr("disabled");
          }), s._setProgressCancelled());
        }, a = function a(i, _a, r) {
          var n = s._getOutData(f, r, i),
              d = 0,
              c = s._getThumbs(":not(.file-preview-success)"),
              u = t.isEmpty(i) || t.isEmpty(i.errorkeys) ? [] : i.errorkeys;

          t.isEmpty(i) || t.isEmpty(i.error) ? (s._raise("filebatchuploadsuccess", [n]), l(), s.showPreview ? (c.each(function () {
            var t = e(this);
            s._setThumbStatus(t, "Success"), t.removeClass("file-uploading"), t.find(".kv-file-upload").hide().removeAttr("disabled");
          }), s._initUploadSuccess(i)) : s.reset(), s._setProgress(101)) : (s.showPreview && (c.each(function () {
            var t = e(this);
            t.removeClass("file-uploading"), t.find(".kv-file-upload").removeAttr("disabled"), t.find(".kv-file-remove").removeAttr("disabled"), 0 === u.length || -1 !== e.inArray(d, u) ? (s._setPreviewError(t, !0), s.retryErrorUploads || (t.find(".kv-file-upload").hide(), s.fileManager.remove(t))) : (t.find(".kv-file-upload").hide(), s._setThumbStatus(t, "Success"), s.fileManager.remove(t)), t.hasClass("file-preview-error") && !s.retryErrorUploads || d++;
          }), s._initUploadSuccess(i)), o = s._parseError(g, r, s.msgUploadError), s._showFileError(o, n, "filebatchuploaderror"), s._setProgress(101, s.$progress, s.msgUploadError));
        }, n = function n() {
          s.unlock(), s._initSuccessThumbs(), s._clearFileInput(), s._raise("filebatchuploadcomplete", [s.fileManager.stack, s._getExtraData()]);
        }, r = function r(t, i, a) {
          var r = s._getOutData(f, t);

          o = s._parseError(g, t, a), s._showFileError(o, r, "filebatchuploaderror"), s.uploadFileCount = c - 1, s.showPreview && (s._getThumbs().each(function () {
            var t = e(this);
            t.removeClass("file-uploading"), s.fileManager.getFile(t.attr("data-fileid")) && s._setPreviewError(t);
          }), s._getThumbs().removeClass("file-uploading"), s._getThumbs(" .kv-file-upload").removeAttr("disabled"), s._getThumbs(" .kv-file-delete").removeAttr("disabled"), s._setProgress(101, s.$progress, s.msgAjaxProgressError.replace("{operation}", g)));
        };
        var m = 0;
        e.each(s.fileManager.stack, function (e, i) {
          t.isEmpty(i.file) || f.append(s.uploadFileAttr, i.file, i.nameFmt || "untitled_" + m), m++;
        }), s._ajaxSubmit(i, a, n, r, f);
      }
    },
    _uploadExtraOnly: function _uploadExtraOnly() {
      var e,
          i,
          a,
          r,
          n,
          o = this,
          l = {},
          s = new FormData(),
          d = o.ajaxOperations.uploadExtra;
      o._abort(l) || (e = function e(_e) {
        o.lock();

        var t = o._getOutData(s, _e);

        o._raise("filebatchpreupload", [t]), o._setProgress(50), l.data = t, l.xhr = _e, o._abort(l) && (_e.abort(), o._setProgressCancelled());
      }, i = function i(e, _i3, a) {
        var r = o._getOutData(s, a, e);

        t.isEmpty(e) || t.isEmpty(e.error) ? (o._raise("filebatchuploadsuccess", [r]), o._clearFileInput(), o._initUploadSuccess(e), o._setProgress(101)) : (n = o._parseError(d, a, o.msgUploadError), o._showFileError(n, r, "filebatchuploaderror"));
      }, a = function a() {
        o.unlock(), o._clearFileInput(), o._raise("filebatchuploadcomplete", [o.fileManager.stack, o._getExtraData()]);
      }, r = function r(e, t, i) {
        var a = o._getOutData(s, e);

        n = o._parseError(d, e, i), l.data = a, o._showFileError(n, a, "filebatchuploaderror"), o._setProgress(101, o.$progress, o.msgAjaxProgressError.replace("{operation}", d));
      }, o._ajaxSubmit(e, i, a, r, s));
    },
    _deleteFileIndex: function _deleteFileIndex(i) {
      var a = this,
          r = i.attr("data-fileindex"),
          n = a.reversePreviewOrder;
      r.substring(0, 5) === t.INIT_FLAG && (r = parseInt(r.replace(t.INIT_FLAG, "")), a.initialPreview = t.spliceArray(a.initialPreview, r, n), a.initialPreviewConfig = t.spliceArray(a.initialPreviewConfig, r, n), a.initialPreviewThumbTags = t.spliceArray(a.initialPreviewThumbTags, r, n), a.getFrames().each(function () {
        var i = e(this),
            a = i.attr("data-fileindex");
        a.substring(0, 5) === t.INIT_FLAG && (a = parseInt(a.replace(t.INIT_FLAG, "")), a > r && (a--, i.attr("data-fileindex", t.INIT_FLAG + a)));
      }));
    },
    _resetCaption: function _resetCaption() {
      var e = this;
      setTimeout(function () {
        var t,
            i,
            a,
            r = e.previewCache.count(!0),
            n = e.fileManager.count(),
            o = ":not(.file-preview-success):not(.file-preview-error)",
            l = e.showPreview && e.getFrames(o).length;
        0 !== n || 0 !== r || l ? (i = r + n, i > 1 ? t = e._getMsgSelected(i) : (a = e.fileManager.getFirstFile(), t = a ? a.nameFmt : "_"), e._setCaption(t)) : e.reset();
      }, e.processDelay);
    },
    _initFileActions: function _initFileActions() {
      var i = this;
      i.showPreview && (i._initZoomButton(), i.getFrames(" .kv-file-remove").each(function () {
        var a,
            r,
            n = e(this),
            o = n.closest(t.FRAMES),
            l = o.attr("id"),
            s = o.attr("data-fileindex");

        i._handler(n, "click", function () {
          return r = i._raise("filepreremove", [l, s]), r !== !1 && i._validateMinCount() ? (a = o.hasClass("file-preview-error"), t.cleanMemory(o), void o.fadeOut("slow", function () {
            i.fileManager.remove(o), i._clearObjects(o), o.remove(), l && a && i.$errorContainer.find('li[data-thumb-id="' + l + '"]').fadeOut("fast", function () {
              e(this).remove(), i._errorsExist() || i._resetErrors();
            }), i._clearFileInput(), i._resetCaption(), i._raise("fileremoved", [l, s]);
          })) : !1;
        });
      }), i.getFrames(" .kv-file-upload").each(function () {
        var a = e(this);

        i._handler(a, "click", function () {
          var e = a.closest(t.FRAMES),
              r = e.attr("data-fileid");
          i._hideProgress(), e.hasClass("file-preview-error") && !i.retryErrorUploads || i._uploadSingle(i.fileManager.getIndex(r), r, !1);
        });
      }));
    },
    _initPreviewActions: function _initPreviewActions() {
      var i = this,
          a = i.$preview,
          r = i.deleteExtraData || {},
          n = t.FRAMES + " .kv-file-remove",
          o = i.fileActionSettings,
          l = o.removeClass,
          s = o.removeErrorClass,
          d = function d() {
        var e = i.isAjaxUpload ? i.previewCache.count(!0) : i._inputFileCount();
        i.getFrames().length || e || (i._setCaption(""), i.reset(), i.initialCaption = "");
      };

      i._initZoomButton(), a.find(n).each(function () {
        var a,
            n,
            o,
            c,
            u = e(this),
            p = u.data("url") || i.deleteUrl,
            f = u.data("key"),
            g = i.ajaxOperations.deleteThumb;

        if (!t.isEmpty(p) && void 0 !== f) {
          "function" == typeof p && (p = p());

          var m,
              h,
              v,
              w,
              b,
              _ = u.closest(t.FRAMES),
              C = i.previewCache.data,
              y = _.attr("data-fileindex");

          y = parseInt(y.replace(t.INIT_FLAG, "")), v = t.isEmpty(C.config) && t.isEmpty(C.config[y]) ? null : C.config[y], b = t.isEmpty(v) || t.isEmpty(v.extra) ? r : v.extra, w = v && (v.filename || v.caption) || "", "function" == typeof b && (b = b()), h = {
            id: u.attr("id"),
            key: f,
            extra: b
          }, n = function n(e) {
            i.ajaxAborted = !1, i._raise("filepredelete", [f, e, b]), i._abort() ? e.abort() : (u.removeClass(s), t.addCss(_, "file-uploading"), t.addCss(u, "disabled " + l));
          }, o = function o(e, r, n) {
            var o, c;
            return t.isEmpty(e) || t.isEmpty(e.error) ? (_.removeClass("file-uploading").addClass("file-deleted"), void _.fadeOut("slow", function () {
              y = parseInt(_.attr("data-fileindex").replace(t.INIT_FLAG, "")), i.previewCache.unset(y), i._deleteFileIndex(_), o = i.previewCache.count(!0), c = o > 0 ? i._getMsgSelected(o) : "", i._setCaption(c), i._raise("filedeleted", [f, n, b]), i._clearObjects(_), _.remove(), d();
            })) : (h.jqXHR = n, h.response = e, a = i._parseError(g, n, i.msgDeleteError, w), i._showFileError(a, h, "filedeleteerror"), _.removeClass("file-uploading"), u.removeClass("disabled " + l).addClass(s), void d());
          }, c = function c(e, t, a) {
            var r = i._parseError(g, e, a, w);

            h.jqXHR = e, h.response = {}, i._showFileError(r, h, "filedeleteerror"), _.removeClass("file-uploading"), u.removeClass("disabled " + l).addClass(s), d();
          }, i._initAjaxSettings(), i._mergeAjaxCallback("beforeSend", n, "delete"), i._mergeAjaxCallback("success", o, "delete"), i._mergeAjaxCallback("error", c, "delete"), m = e.extend(!0, {}, {
            url: i._encodeURI(p),
            type: "POST",
            dataType: "json",
            data: e.extend(!0, {}, {
              key: f
            }, b)
          }, i._ajaxDeleteSettings), i._handler(u, "click", function () {
            return i._validateMinCount() ? (i.ajaxAborted = !1, i._raise("filebeforedelete", [f, b]), void (i.ajaxAborted instanceof Promise ? i.ajaxAborted.then(function (t) {
              t || e.ajax(m);
            }) : i.ajaxAborted || e.ajax(m))) : !1;
          });
        }
      });
    },
    _hideFileIcon: function _hideFileIcon() {
      var e = this;
      e.overwriteInitial && e.$captionContainer.removeClass("icon-visible");
    },
    _showFileIcon: function _showFileIcon() {
      var e = this;
      t.addCss(e.$captionContainer, "icon-visible");
    },
    _getSize: function _getSize(t, i) {
      var a,
          r,
          n = this,
          o = parseFloat(t),
          l = n.fileSizeGetter;
      return e.isNumeric(t) && e.isNumeric(o) ? ("function" == typeof l ? r = l(o) : 0 === o ? r = "0.00 B" : (a = Math.floor(Math.log(o) / Math.log(1024)), i || (i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]), r = 1 * (o / Math.pow(1024, a)).toFixed(2) + " " + i[a]), n._getLayoutTemplate("size").replace("{sizeText}", r)) : "";
    },
    _getFileType: function _getFileType(e) {
      var t = this;
      return t.mimeTypeAliases[e] || e;
    },
    _generatePreviewTemplate: function _generatePreviewTemplate(i, a, r, n, o, l, s, d, c, u, p, f, g, m) {
      var h,
          v,
          w,
          b = this,
          _ = b.slug(r),
          C = "",
          y = "",
          x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          T = _,
          P = _,
          k = "type-default",
          E = u || b._renderFileFooter(i, _, d, "auto", s),
          F = b.preferIconicPreview,
          S = b.preferIconicZoomPreview,
          I = F ? "other" : i;

      return v = 400 > x ? b.previewSettingsSmall[I] || b.defaults.previewSettingsSmall[I] : b.previewSettings[I] || b.defaults.previewSettings[I], v && e.each(v, function (e, t) {
        y += e + ":" + t + ";";
      }), w = function w(a, s, d, u) {
        var m = d ? "zoom-" + o : o,
            h = b._getPreviewTemplate(a),
            v = (c || "") + " " + u;

        return b.frameClass && (v = b.frameClass + " " + v), d && (v = v.replace(" " + t.SORT_CSS, "")), h = b._parseFilePreviewIcon(h, r), "text" === a && (s = t.htmlEncode(s)), "object" !== i || n || e.each(b.defaults.fileTypeSettings, function (e, t) {
          "object" !== e && "other" !== e && t(r, n) && (k = "type-" + e);
        }), t.isEmpty(g) || (void 0 !== g.title && null !== g.title && (T = g.title), void 0 !== g.alt && null !== g.alt && (T = g.alt)), h.setTokens({
          previewId: m,
          caption: _,
          title: T,
          alt: P,
          frameClass: v,
          type: b._getFileType(n),
          fileindex: p,
          fileid: l || "",
          typeCss: k,
          footer: E,
          data: s,
          template: f || i,
          style: y ? 'style="' + y + '"' : ""
        });
      }, p = p || o.slice(o.lastIndexOf("-") + 1), b.fileActionSettings.showZoom && (C = w(S ? "other" : i, m ? m : a, !0, "kv-zoom-thumb")), C = "\n" + b._getLayoutTemplate("zoomCache").replace("{zoomContent}", C), "function" == typeof b.sanitizeZoomCache && (C = b.sanitizeZoomCache(C)), h = w(F ? "other" : i, a, !1, "kv-preview-thumb"), h.setTokens({
        zoomCache: C
      });
    },
    _addToPreview: function _addToPreview(e, i) {
      var a,
          r = this;
      return i = t.cspBuffer.stash(i), a = r.reversePreviewOrder ? e.prepend(i) : e.append(i), t.cspBuffer.apply(e), a;
    },
    _previewDefault: function _previewDefault(e, i) {
      var a = this,
          r = a.$preview;

      if (a.showPreview) {
        var n,
            o = t.getFileName(e),
            l = e ? e.type : "",
            s = e.size || 0,
            d = a._getFileName(e, ""),
            c = i === !0 && !a.isAjaxUpload,
            u = t.createObjectURL(e),
            p = a.fileManager.getId(e),
            f = a._getThumbId(p);

        a._clearDefaultPreview(), n = a._generatePreviewTemplate("other", u, o, l, f, p, c, s), a._addToPreview(r, n), a._setThumbAttr(f, d, s), i === !0 && a.isAjaxUpload && a._setThumbStatus(a._getFrame(f), "Error");
      }
    },
    _previewFile: function _previewFile(e, i, a, r, n) {
      if (this.showPreview) {
        var o,
            l = this,
            s = t.getFileName(i),
            d = n.type,
            c = n.name,
            u = l._parseFileType(d, s),
            p = l.$preview,
            f = i.size || 0,
            g = "text" === u || "html" === u || "image" === u ? a.target.result : r,
            m = l.fileManager.getId(i),
            h = l._getThumbId(m);

        "html" === u && l.purifyHtml && window.DOMPurify && (g = window.DOMPurify.sanitize(g)), o = l._generatePreviewTemplate(u, g, s, d, h, m, !1, f), l._clearDefaultPreview(), l._addToPreview(p, o);

        var v = l._getFrame(h);

        l._validateImageOrientation(v.find("img"), i, h, m, c, d, f, g), l._setThumbAttr(h, c, f), l._initSortable();
      }
    },
    _setThumbAttr: function _setThumbAttr(e, t, i) {
      var a = this,
          r = a._getFrame(e);

      r.length && (i = i && i > 0 ? a._getSize(i) : "", r.data({
        caption: t,
        size: i
      }));
    },
    _setInitThumbAttr: function _setInitThumbAttr() {
      var e,
          i,
          a,
          r,
          n = this,
          o = n.previewCache.data,
          l = n.previewCache.count(!0);
      if (0 !== l) for (var s = 0; l > s; s++) {
        e = o.config[s], r = n.previewInitId + "-" + t.INIT_FLAG + s, i = t.ifSet("caption", e, t.ifSet("filename", e)), a = t.ifSet("size", e), n._setThumbAttr(r, i, a);
      }
    },
    _slugDefault: function _slugDefault(e) {
      return t.isEmpty(e, !0) ? "" : String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
    },
    _updateFileDetails: function _updateFileDetails(e, i) {
      var a,
          r,
          n,
          o,
          l,
          s = this,
          d = s.$element,
          c = t.isIE(9) && t.findFileName(d.val()) || d[0].files[0] && d[0].files[0].name;
      !c && s.fileManager.count() > 0 ? (l = s.fileManager.getFirstFile(), a = l.nameFmt) : a = c ? s.slug(c) : "_", r = s.isAjaxUpload ? s.fileManager.count() : e, o = s.previewCache.count(!0) + r, n = 1 === r ? a : s._getMsgSelected(o), s.isError ? (s.$previewContainer.removeClass("file-thumb-loading"), s.$previewStatus.html(""), s.$captionContainer.removeClass("icon-visible")) : s._showFileIcon(), s._setCaption(n, s.isError), s.$container.removeClass("file-input-new file-input-ajax-new"), i || s._raise("fileselect", [e, a]), s.previewCache.count(!0) && s._initPreviewActions();
    },
    _setThumbStatus: function _setThumbStatus(e, i) {
      var a = this;

      if (a.showPreview) {
        var r = "indicator" + i,
            n = r + "Title",
            o = "file-preview-" + i.toLowerCase(),
            l = e.find(".file-upload-indicator"),
            s = a.fileActionSettings;
        e.removeClass("file-preview-success file-preview-error file-preview-paused file-preview-loading"), "Success" === i && e.find(".file-drag-handle").remove(), t.setHtml(l, s[r]), l.attr("title", s[n]), e.addClass(o), "Error" !== i || a.retryErrorUploads || e.find(".kv-file-upload").attr("disabled", !0);
      }
    },
    _setProgressCancelled: function _setProgressCancelled() {
      var e = this;

      e._setProgress(101, e.$progress, e.msgCancelled);
    },
    _setProgress: function _setProgress(e, i, a, r) {
      var n = this;

      if (i = i || n.$progress, i.length) {
        var o,
            l = Math.min(e, 100),
            s = n.progressUploadThreshold,
            d = 100 >= e ? n.progressTemplate : n.progressCompleteTemplate,
            c = 100 > l ? n.progressTemplate : a ? n.paused ? n.progressPauseTemplate : n.progressErrorTemplate : d;
        e >= 100 && (r = ""), t.isEmpty(c) || (o = s && l > s && 100 >= e ? c.setTokens({
          percent: s,
          status: n.msgUploadThreshold
        }) : c.setTokens({
          percent: l,
          status: e > 100 ? n.msgUploadEnd : l + "%"
        }), r = r || "", o = o.setTokens({
          stats: r
        }), t.setHtml(i, o), a && t.setHtml(i.find('[role="progressbar"]'), a));
      }
    },
    _hasFiles: function _hasFiles() {
      var e = this.$element[0];
      return !!(e && e.files && e.files.length);
    },
    _setFileDropZoneTitle: function _setFileDropZoneTitle() {
      var e,
          i = this,
          a = i.$container.find(".file-drop-zone"),
          r = i.dropZoneTitle;
      i.isClickable && (e = t.isEmpty(i.$element.attr("multiple")) ? i.fileSingle : i.filePlural, r += i.dropZoneClickTitle.replace("{files}", e)), a.find("." + i.dropZoneTitleClass).remove(), !i.showPreview || 0 === a.length || i.fileManager.count() > 0 || !i.dropZoneEnabled || i.previewCache.count() > 0 || !i.isAjaxUpload && i._hasFiles() || (0 === a.find(t.FRAMES).length && t.isEmpty(i.defaultPreviewContent) && a.prepend('<div class="' + i.dropZoneTitleClass + '">' + r + "</div>"), i.$container.removeClass("file-input-new"), t.addCss(i.$container, "file-input-ajax-new"));
    },
    _getStats: function _getStats(e) {
      var i,
          a,
          r = this;
      return r.showUploadStats && e && e.bitrate ? (a = r._getLayoutTemplate("stats"), i = e.elapsed && e.bps ? r.msgPendingTime.setTokens({
        time: t.getElapsed(Math.ceil(e.pendingBytes / e.bps))
      }) : r.msgCalculatingTime, a.setTokens({
        uploadSpeed: e.bitrate,
        pendingTime: i
      })) : "";
    },
    _setResumableProgress: function _setResumableProgress(e, t, i) {
      var a = this,
          r = a.resumableManager,
          n = i ? r : a,
          o = i ? i.find(".file-thumb-progress") : null;
      0 === n.lastProgress && (n.lastProgress = e), e < n.lastProgress && (e = n.lastProgress), a._setProgress(e, o, null, a._getStats(t)), n.lastProgress = e;
    },
    _toggleResumableProgress: function _toggleResumableProgress(e, i) {
      var a = this,
          r = a.$progress;
      r && r.length && t.setHtml(r, e.setTokens({
        percent: 101,
        status: i,
        stats: ""
      }));
    },
    _setFileUploadStats: function _setFileUploadStats(i, a, r, n) {
      var o = this,
          l = o.$progress;

      if (o.showPreview || l && l.length) {
        var s,
            d = o.fileManager,
            c = d.getThumb(i),
            u = o.resumableManager,
            p = 0,
            f = d.getTotalSize(),
            g = e.extend(!0, {}, n);

        if (o.enableResumableUpload) {
          var m,
              h = n.loaded,
              v = u.getUploadedSize(),
              w = u.file.size;
          h += v, m = d.uploadedSize + h, a = t.round(100 * h / w), n.pendingBytes = w - v, o._setResumableProgress(a, n, c), s = Math.floor(100 * m / f), g.pendingBytes = f - m, o._setResumableProgress(s, g);
        } else d.setProgress(i, a), l = c && c.length ? c.find(".file-thumb-progress") : null, o._setProgress(a, l, null, o._getStats(n)), e.each(d.stats, function (e, t) {
          p += t.loaded;
        }), g.pendingBytes = f - p, s = t.round(p / f * 100), o._setProgress(s, null, null, o._getStats(g));
      }
    },
    _validateMinCount: function _validateMinCount() {
      var e = this,
          t = e.isAjaxUpload ? e.fileManager.count() : e._inputFileCount();
      return e.validateInitialCount && e.minFileCount > 0 && e._getFileCount(t - 1) < e.minFileCount ? (e._noFilesError({}), !1) : !0;
    },
    _getFileCount: function _getFileCount(e, t) {
      var i = this,
          a = 0;
      return void 0 === t && (t = i.validateInitialCount && !i.overwriteInitial), t && (a = i.previewCache.count(!0), e += a), e;
    },
    _getFileId: function _getFileId(e) {
      return t.getFileId(e, this.generateFileId);
    },
    _getFileName: function _getFileName(e, i) {
      var a = this,
          r = t.getFileName(e);
      return r ? a.slug(r) : i;
    },
    _getFileNames: function _getFileNames(e) {
      var t = this;
      return t.filenames.filter(function (t) {
        return e ? void 0 !== t : void 0 !== t && null !== t;
      });
    },
    _setPreviewError: function _setPreviewError(e, t) {
      var i = this,
          a = i.removeFromPreviewOnError && !i.retryErrorUploads;

      if (t && !a || i.fileManager.remove(e), i.showPreview) {
        if (a) return void e.remove();
        i._setThumbStatus(e, "Error"), i._refreshUploadButton(e);
      }
    },
    _refreshUploadButton: function _refreshUploadButton(e) {
      var i = this,
          a = e.find(".kv-file-upload"),
          r = i.fileActionSettings,
          n = r.uploadIcon,
          o = r.uploadTitle;
      a.length && (i.retryErrorUploads && (n = r.uploadRetryIcon, o = r.uploadRetryTitle), a.attr("title", o), t.setHtml(a, n));
    },
    _checkDimensions: function _checkDimensions(e, i, a, r, n, o, l) {
      var s,
          d,
          c,
          u,
          p = this,
          f = "Small" === i ? "min" : "max",
          g = p[f + "Image" + o];
      !t.isEmpty(g) && a.length && (c = a[0], d = "Width" === o ? c.naturalWidth || c.width : c.naturalHeight || c.height, u = "Small" === i ? d >= g : g >= d, u || (s = p["msgImage" + o + i].setTokens({
        name: n,
        size: g
      }), p._showFileError(s, l), p._setPreviewError(r)));
    },
    _getExifObj: function _getExifObj(e) {
      var i,
          a = this,
          r = t.logMessages.exifWarning;
      if ("data:image/jpeg;base64," !== e.slice(0, 23) && "data:image/jpg;base64," !== e.slice(0, 22)) return void (i = null);

      try {
        i = window.piexif ? window.piexif.load(e) : null;
      } catch (n) {
        i = null, r = n && n.message || "";
      }

      return i || a._log(t.logMessages.badExifParser, {
        details: r
      }), i;
    },
    setImageOrientation: function setImageOrientation(i, a, r, n) {
      var o,
          l,
          s,
          d = this,
          c = !i || !i.length,
          u = !a || !a.length,
          p = !1,
          f = c && n && "image" === n.attr("data-template");
      c && u || (s = "load.fileinputimageorient", f ? (i = a, a = null, i.css(d.previewSettings.image), l = e(document.createElement("div")).appendTo(n.find(".kv-file-content")), o = e(document.createElement("span")).insertBefore(i), i.css("visibility", "hidden").removeClass("file-zoom-detail").appendTo(l)) : p = !i.is(":visible"), i.off(s).on(s, function () {
        p && (d.$preview.removeClass("hide-content"), n.find(".kv-file-content").css("visibility", "hidden"));
        var e = i[0],
            s = a && a.length ? a[0] : null,
            c = e.offsetHeight,
            u = e.offsetWidth,
            g = t.getRotation(r);
        if (p && (n.find(".kv-file-content").css("visibility", "visible"), d.$preview.addClass("hide-content")), i.data("orientation", r), s && a.data("orientation", r), 5 > r) return t.setTransform(e, g), void t.setTransform(s, g);
        var m = Math.atan(u / c),
            h = Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)),
            v = h ? c / Math.cos(Math.PI / 2 + m) / h : 1,
            w = " scale(" + Math.abs(v) + ")";
        t.setTransform(e, g + w), t.setTransform(s, g + w), f && (i.css("visibility", "visible").insertAfter(o).addClass("file-zoom-detail"), o.remove(), l.remove());
      }));
    },
    _validateImageOrientation: function _validateImageOrientation(i, a, r, n, o, l, s, d) {
      var c,
          u,
          p,
          f = this,
          g = f.autoOrientImage;
      return f.canOrientImage ? void i.css("image-orientation", g ? "from-image" : "none") : (p = t.getZoomSelector(r, " img"), c = g ? f._getExifObj(d) : null, (u = c ? c["0th"][piexif.ImageIFD.Orientation] : null) ? (f.setImageOrientation(i, e(p), u, f._getFrame(r)), f._raise("fileimageoriented", {
        $img: i,
        file: a
      }), void f._validateImage(r, n, o, l, s, d, c)) : void f._validateImage(r, n, o, l, s, d, c));
    },
    _validateImage: function _validateImage(t, i, a, r, n, o, l) {
      var s,
          d,
          c,
          u = this,
          p = u.$preview,
          f = u._getFrame(t),
          g = f.attr("data-fileindex"),
          m = f.find("img");

      a = a || "Untitled", m.one("load", function () {
        d = f.width(), c = p.width(), d > c && m.css("width", "100%"), s = {
          ind: g,
          id: t,
          fileId: i
        }, u._checkDimensions(g, "Small", m, f, a, "Width", s), u._checkDimensions(g, "Small", m, f, a, "Height", s), u.resizeImage || (u._checkDimensions(g, "Large", m, f, a, "Width", s), u._checkDimensions(g, "Large", m, f, a, "Height", s)), u._raise("fileimageloaded", [t]), u.fileManager.addImage(i, {
          ind: g,
          img: m,
          thumb: f,
          pid: t,
          typ: r,
          siz: n,
          validated: !1,
          imgData: o,
          exifObj: l
        }), f.data("exif", l), u._validateAllImages();
      }).one("error", function () {
        u._raise("fileimageloaderror", [t]);
      }).each(function () {
        this.complete ? e(this).trigger("load") : this.error && e(this).trigger("error");
      });
    },
    _validateAllImages: function _validateAllImages() {
      var t,
          i = this,
          a = {
        val: 0
      },
          r = i.fileManager.getImageCount(),
          n = i.resizeIfSizeMoreThan;
      r === i.fileManager.totalImages && (i._raise("fileimagesloaded"), i.resizeImage && e.each(i.fileManager.loadedImages, function (e, o) {
        o.validated || (t = o.siz, t && t > 1e3 * n && i._getResizedImage(e, o, a, r), o.validated = !0);
      }));
    },
    _getResizedImage: function _getResizedImage(i, a, r, n) {
      var o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          h = this,
          v = e(a.img)[0],
          w = v.naturalWidth,
          b = v.naturalHeight,
          _ = 1,
          C = h.maxImageWidth || w,
          y = h.maxImageHeight || b,
          x = !(!w || !b),
          T = h.imageCanvas,
          P = h.imageCanvasContext,
          k = a.typ,
          E = a.pid,
          F = a.ind,
          S = a.thumb,
          I = a.exifObj;
      if (c = function c(e, t, i) {
        h.isAjaxUpload ? h._showFileError(e, t, i) : h._showError(e, t, i), h._setPreviewError(S);
      }, f = h.fileManager.getFile(i), g = {
        id: E,
        index: F,
        fileId: i
      }, m = [i, E, F], (!f || !x || C >= w && y >= b) && (x && f && h._raise("fileimageresized", m), r.val++, r.val === n && h._raise("fileimagesresized"), !x)) return void c(h.msgImageResizeError, g, "fileimageresizeerror");
      k = k || h.resizeDefaultImageType, l = w > C, s = b > y, _ = "width" === h.resizePreference ? l ? C / w : s ? y / b : 1 : s ? y / b : l ? C / w : 1, h._resetCanvas(), w *= _, b *= _, T.width = w, T.height = b;

      try {
        P.drawImage(v, 0, 0, w, b), d = T.toDataURL(k, h.resizeQuality), I && (p = window.piexif.dump(I), d = window.piexif.insert(p, d)), o = t.dataURI2Blob(d), h.fileManager.setFile(i, o), h._raise("fileimageresized", m), r.val++, r.val === n && h._raise("fileimagesresized", [void 0, void 0]), o instanceof Blob || c(h.msgImageResizeError, g, "fileimageresizeerror");
      } catch (A) {
        r.val++, r.val === n && h._raise("fileimagesresized", [void 0, void 0]), u = h.msgImageResizeException.replace("{errors}", A.message), c(u, g, "fileimageresizeexception");
      }
    },
    _showProgress: function _showProgress() {
      var e = this;
      e.$progress && e.$progress.length && e.$progress.show();
    },
    _hideProgress: function _hideProgress() {
      var e = this;
      e.$progress && e.$progress.length && e.$progress.hide();
    },
    _initBrowse: function _initBrowse(e) {
      var i = this,
          a = i.$element;
      i.showBrowse ? i.$btnFile = e.find(".btn-file").append(a) : (a.appendTo(e).attr("tabindex", -1), t.addCss(a, "file-no-browse"));
    },
    _initClickable: function _initClickable() {
      var i,
          a,
          r = this;
      r.isClickable && (i = r.$dropZone, r.isAjaxUpload || (a = r.$preview.find(".file-default-preview"), a.length && (i = a)), t.addCss(i, "clickable"), i.attr("tabindex", -1), r._handler(i, "click", function (t) {
        var a = e(t.target);
        e(r.elErrorContainer + ":visible").length || a.parents(".file-preview-thumbnails").length && !a.parents(".file-default-preview").length || (r.$element.data("zoneClicked", !0).trigger("click"), i.blur());
      }));
    },
    _initCaption: function _initCaption() {
      var e = this,
          i = e.initialCaption || "";
      return e.overwriteInitial || t.isEmpty(i) ? (e.$caption.val(""), !1) : (e._setCaption(i), !0);
    },
    _setCaption: function _setCaption(i, a) {
      var r,
          n,
          o,
          l,
          s,
          d,
          c = this;

      if (c.$caption.length) {
        if (c.$captionContainer.removeClass("icon-visible"), a) r = e("<div>" + c.msgValidationError + "</div>").text(), l = c.fileManager.count(), l ? (d = c.fileManager.getFirstFile(), s = 1 === l && d ? d.nameFmt : c._getMsgSelected(l)) : s = c._getMsgSelected(c.msgNo), n = t.isEmpty(i) ? s : i, o = '<span class="' + c.msgValidationErrorClass + '">' + c.msgValidationErrorIcon + "</span>";else {
          if (t.isEmpty(i)) return;
          r = e("<div>" + i + "</div>").text(), n = r, o = c._getLayoutTemplate("fileIcon");
        }
        c.$captionContainer.addClass("icon-visible"), c.$caption.attr("title", r).val(n), t.setHtml(c.$captionIcon, o);
      }
    },
    _createContainer: function _createContainer() {
      var e = this,
          i = {
        "class": "file-input file-input-new" + (e.rtl ? " kv-rtl" : "")
      },
          a = t.createElement(t.cspBuffer.stash(e._renderMain()));
      return t.cspBuffer.apply(a), a.insertBefore(e.$element).attr(i), e._initBrowse(a), e.theme && a.addClass("theme-" + e.theme), a;
    },
    _refreshContainer: function _refreshContainer() {
      var e = this,
          i = e.$container,
          a = e.$element;
      a.insertAfter(i), t.setHtml(i, e._renderMain()), e._initBrowse(i), e._validateDisabled();
    },
    _validateDisabled: function _validateDisabled() {
      var e = this;
      e.$caption.attr({
        readonly: e.isDisabled
      });
    },
    _renderMain: function _renderMain() {
      var e = this,
          t = e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled",
          i = e.showClose ? e._getLayoutTemplate("close") : "",
          a = e.showPreview ? e._getLayoutTemplate("preview").setTokens({
        "class": e.previewClass,
        dropClass: t
      }) : "",
          r = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass,
          n = e.captionTemplate.setTokens({
        "class": r + " kv-fileinput-caption"
      });
      return e.mainTemplate.setTokens({
        "class": e.mainClass + (!e.showBrowse && e.showCaption ? " no-browse" : ""),
        preview: a,
        close: i,
        caption: n,
        upload: e._renderButton("upload"),
        remove: e._renderButton("remove"),
        cancel: e._renderButton("cancel"),
        pause: e._renderButton("pause"),
        browse: e._renderButton("browse")
      });
    },
    _renderButton: function _renderButton(e) {
      var i = this,
          a = i._getLayoutTemplate("btnDefault"),
          r = i[e + "Class"],
          n = i[e + "Title"],
          o = i[e + "Icon"],
          l = i[e + "Label"],
          s = i.isDisabled ? " disabled" : "",
          d = "button";

      switch (e) {
        case "remove":
          if (!i.showRemove) return "";
          break;

        case "cancel":
          if (!i.showCancel) return "";
          r += " kv-hidden";
          break;

        case "pause":
          if (!i.showPause) return "";
          r += " kv-hidden";
          break;

        case "upload":
          if (!i.showUpload) return "";
          i.isAjaxUpload && !i.isDisabled ? a = i._getLayoutTemplate("btnLink").replace("{href}", i.uploadUrl) : d = "submit";
          break;

        case "browse":
          if (!i.showBrowse) return "";
          a = i._getLayoutTemplate("btnBrowse");
          break;

        default:
          return "";
      }

      return r += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", t.isEmpty(l) || (l = ' <span class="' + i.buttonLabelClass + '">' + l + "</span>"), a.setTokens({
        type: d,
        css: r,
        title: n,
        status: s,
        icon: o,
        label: l
      });
    },
    _renderThumbProgress: function _renderThumbProgress() {
      var e = this;
      return '<div class="file-thumb-progress kv-hidden">' + e.progressInfoTemplate.setTokens({
        percent: 101,
        status: e.msgUploadBegin,
        stats: ""
      }) + "</div>";
    },
    _renderFileFooter: function _renderFileFooter(e, i, a, r, n) {
      var o,
          l,
          s = this,
          d = s.fileActionSettings,
          c = d.showRemove,
          u = d.showDrag,
          p = d.showUpload,
          f = d.showZoom,
          g = s._getLayoutTemplate("footer"),
          m = s._getLayoutTemplate("indicator"),
          h = n ? d.indicatorError : d.indicatorNew,
          v = n ? d.indicatorErrorTitle : d.indicatorNewTitle,
          w = m.setTokens({
        indicator: h,
        indicatorTitle: v
      });

      return a = s._getSize(a), l = {
        type: e,
        caption: i,
        size: a,
        width: r,
        progress: "",
        indicator: w
      }, s.isAjaxUpload ? (l.progress = s._renderThumbProgress(), l.actions = s._renderFileActions(l, p, !1, c, f, u, !1, !1, !1)) : l.actions = s._renderFileActions(l, !1, !1, !1, f, u, !1, !1, !1), o = g.setTokens(l), o = t.replaceTags(o, s.previewThumbTags);
    },
    _renderFileActions: function _renderFileActions(e, t, i, a, r, n, o, l, s, d, c, u) {
      var p = this;
      if (!e.type && d && (e.type = "image"), p.enableResumableUpload ? t = !1 : "function" == typeof t && (t = t(e)), "function" == typeof i && (i = i(e)), "function" == typeof a && (a = a(e)), "function" == typeof r && (r = r(e)), "function" == typeof n && (n = n(e)), !(t || i || a || r || n)) return "";

      var f,
          g = l === !1 ? "" : ' data-url="' + l + '"',
          m = "",
          h = "",
          v = s === !1 ? "" : ' data-key="' + s + '"',
          w = "",
          b = "",
          _ = "",
          C = p._getLayoutTemplate("actions"),
          y = p.fileActionSettings,
          x = p.otherActionButtons.setTokens({
        dataKey: v,
        key: s
      }),
          T = o ? y.removeClass + " disabled" : y.removeClass;

      return a && (w = p._getLayoutTemplate("actionDelete").setTokens({
        removeClass: T,
        removeIcon: y.removeIcon,
        removeTitle: y.removeTitle,
        dataUrl: g,
        dataKey: v,
        key: s
      })), t && (b = p._getLayoutTemplate("actionUpload").setTokens({
        uploadClass: y.uploadClass,
        uploadIcon: y.uploadIcon,
        uploadTitle: y.uploadTitle
      })), i && (_ = p._getLayoutTemplate("actionDownload").setTokens({
        downloadClass: y.downloadClass,
        downloadIcon: y.downloadIcon,
        downloadTitle: y.downloadTitle,
        downloadUrl: c || p.initialPreviewDownloadUrl
      }), _ = _.setTokens({
        filename: u,
        key: s
      })), r && (m = p._getLayoutTemplate("actionZoom").setTokens({
        zoomClass: y.zoomClass,
        zoomIcon: y.zoomIcon,
        zoomTitle: y.zoomTitle
      })), n && d && (f = "drag-handle-init " + y.dragClass, h = p._getLayoutTemplate("actionDrag").setTokens({
        dragClass: f,
        dragTitle: y.dragTitle,
        dragIcon: y.dragIcon
      })), C.setTokens({
        "delete": w,
        upload: b,
        download: _,
        zoom: m,
        drag: h,
        other: x
      });
    },
    _browse: function _browse(e) {
      var t = this;
      e && e.isDefaultPrevented() || !t._raise("filebrowse") || (t.isError && !t.isAjaxUpload && t.clear(), t.focusCaptionOnBrowse && t.$captionContainer.focus());
    },
    _change: function _change(i) {
      var a = this;

      if (!a.changeTriggered) {
        var r,
            n,
            o,
            l,
            s = a.$element,
            d = arguments.length > 1,
            c = a.isAjaxUpload,
            u = d ? arguments[1] : s[0].files,
            p = a.fileManager.count(),
            f = t.isEmpty(s.attr("multiple")),
            g = !c && f ? 1 : a.maxFileCount,
            m = a.maxTotalFileCount,
            h = m > 0 && m > g,
            v = f && p > 0,
            w = function w(t, i, r, n) {
          var o = e.extend(!0, {}, a._getOutData(null, {}, {}, u), {
            id: r,
            index: n
          }),
              l = {
            id: r,
            index: n,
            file: i,
            files: u
          };
          return a.isPersistentError = !0, c ? a._showFileError(t, o) : a._showError(t, l);
        },
            b = function b(e, t, i) {
          var r = i ? a.msgTotalFilesTooMany : a.msgFilesTooMany;
          r = r.replace("{m}", t).replace("{n}", e), a.isError = w(r, null, null, null), a.$captionContainer.removeClass("icon-visible"), a._setCaption("", !0), a.$container.removeClass("file-input-new file-input-ajax-new");
        };

        if (a.reader = null, a._resetUpload(), a._hideFileIcon(), a.dropZoneEnabled && a.$container.find(".file-drop-zone ." + a.dropZoneTitleClass).remove(), c || (u = i.target && void 0 === i.target.files ? i.target.value ? [{
          name: i.target.value.replace(/^.+\\/, "")
        }] : [] : i.target.files || {}), r = u, t.isEmpty(r) || 0 === r.length) return c || a.clear(), void a._raise("fileselectnone");

        if (a._resetErrors(), l = r.length, o = c ? a.fileManager.count() + l : l, n = a._getFileCount(o, h ? !1 : void 0), g > 0 && n > g) {
          if (!a.autoReplace || l > g) return void b(a.autoReplace && l > g ? l : n, g);
          n > g && a._resetPreviewThumbs(c);
        } else {
          if (h && (n = a._getFileCount(o, !0), m > 0 && n > m)) {
            if (!a.autoReplace || l > g) return void b(a.autoReplace && l > m ? l : n, m, !0);
            n > g && a._resetPreviewThumbs(c);
          }

          !c || v ? (a._resetPreviewThumbs(!1), v && a.clearFileStack()) : !c || 0 !== p || a.previewCache.count(!0) && !a.overwriteInitial || a._resetPreviewThumbs(!0);
        }

        a.readFiles(r);
      }
    },
    _abort: function _abort(t) {
      var i,
          a = this;
      return a.ajaxAborted && "object" == _typeof(a.ajaxAborted) && void 0 !== a.ajaxAborted.message ? (i = e.extend(!0, {}, a._getOutData(null), t), i.abortData = a.ajaxAborted.data || {}, i.abortMessage = a.ajaxAborted.message, a._setProgress(101, a.$progress, a.msgCancelled), a._showFileError(a.ajaxAborted.message, i, "filecustomerror"), a.cancel(), !0) : !!a.ajaxAborted;
    },
    _resetFileStack: function _resetFileStack() {
      var t = this,
          i = 0;

      t._getThumbs().each(function () {
        var a = e(this),
            r = a.attr("data-fileindex"),
            n = a.attr("id");
        "-1" !== r && -1 !== r && (t.fileManager.getFile(a.attr("data-fileid")) ? a.attr({
          "data-fileindex": "-1"
        }) : (a.attr({
          "data-fileindex": i
        }), i++), t._getZoom(n).attr({
          "data-fileindex": a.attr("data-fileindex")
        }));
      });
    },
    _isFileSelectionValid: function _isFileSelectionValid(e) {
      var t = this;
      return e = e || 0, t.required && !t.getFilesCount() ? (t.$errorContainer.html(""), t._showFileError(t.msgFileRequired), !1) : t.minFileCount > 0 && t._getFileCount(e) < t.minFileCount ? (t._noFilesError({}), !1) : !0;
    },
    _canPreview: function _canPreview(e) {
      var i = this;
      if (!(e && i.showPreview && i.$preview && i.$preview.length)) return !1;

      var a,
          r,
          n,
          o,
          l = e.name || "",
          s = e.type || "",
          d = (e.size || 0) / 1e3,
          c = i._parseFileType(s, l),
          u = i.allowedPreviewTypes,
          p = i.allowedPreviewMimeTypes,
          f = i.allowedPreviewExtensions || [],
          g = i.disabledPreviewTypes,
          m = i.disabledPreviewMimeTypes,
          h = i.disabledPreviewExtensions || [],
          v = i.maxFilePreviewSize && parseFloat(i.maxFilePreviewSize) || 0,
          w = new RegExp("\\.(" + f.join("|") + ")$", "i"),
          b = new RegExp("\\.(" + h.join("|") + ")$", "i");

      return a = !u || -1 !== u.indexOf(c), r = !p || -1 !== p.indexOf(s), n = !f.length || t.compare(l, w), o = g && -1 !== g.indexOf(c) || m && -1 !== m.indexOf(s) || h.length && t.compare(l, b) || v && !isNaN(v) && d > v, !o && (a || r || n);
    },
    addToStack: function addToStack(e, t) {
      this.fileManager.add(e, t);
    },
    clearFileStack: function clearFileStack() {
      var e = this;
      return e.fileManager.clear(), e._initResumableUpload(), e.enableResumableUpload ? (null === e.showPause && (e.showPause = !0), null === e.showCancel && (e.showCancel = !1)) : (e.showPause = !1, null === e.showCancel && (e.showCancel = !0)), e.$element;
    },
    getFileStack: function getFileStack() {
      return this.fileManager.stack;
    },
    getFileList: function getFileList() {
      return this.fileManager.list();
    },
    getFilesCount: function getFilesCount(e) {
      var t = this,
          i = t.isAjaxUpload ? t.fileManager.count() : t._inputFileCount();
      return e && (i += t.previewCache.count(!0)), t._getFileCount(i);
    },
    readFiles: function readFiles(i) {
      this.reader = new FileReader();

      var _a2,
          r = this,
          n = r.reader,
          o = r.$previewContainer,
          l = r.$previewStatus,
          s = r.msgLoading,
          d = r.msgProgress,
          c = r.previewInitId,
          u = i.length,
          p = r.fileTypeSettings,
          f = r.allowedFileTypes,
          g = f ? f.length : 0,
          m = r.allowedFileExtensions,
          h = t.isEmpty(m) ? "" : m.join(", "),
          v = function v(t, n, o, l, s, d) {
        var c,
            p = e.extend(!0, {}, r._getOutData(null, {}, {}, i), {
          id: o,
          index: l,
          fileId: s
        }),
            f = {
          id: o,
          index: l,
          fileId: s,
          file: n,
          files: i
        };
        d = d || r.removeFromPreviewOnError, d || r._previewDefault(n, !0), c = r._getFrame(o, !0), r.isAjaxUpload ? setTimeout(function () {
          _a2(l + 1);
        }, r.processDelay) : (r.unlock(), u = 0), d && c.length ? c.remove() : (r._initFileActions(), c.find(".kv-file-upload").remove()), r.isPersistentError = !0, r.isError = r.isAjaxUpload ? r._showFileError(t, p) : r._showError(t, f), r._updateFileDetails(u);
      };

      r.fileManager.clearImages(), e.each(i, function (e, t) {
        var i = r.fileTypeSettings.image;
        i && i(t.type) && r.fileManager.totalImages++;
      }), _a2 = function a(w) {
        var b,
            _ = r.$errorContainer,
            C = r.fileManager;
        if (w >= u) return r.unlock(), r.duplicateErrors.length && (b = "<li>" + r.duplicateErrors.join("</li><li>") + "</li>", 0 === _.find("ul").length ? t.setHtml(_, r.errorCloseButton + "<ul>" + b + "</ul>") : _.find("ul").append(b), _.fadeIn(r.fadeDelay), r._handler(_.find(".kv-error-close"), "click", function () {
          _.fadeOut(r.fadeDelay);
        }), r.duplicateErrors = []), r.isAjaxUpload ? (r._raise("filebatchselected", [C.stack]), 0 !== C.count() || r.isError || r.reset()) : r._raise("filebatchselected", [i]), o.removeClass("file-thumb-loading"), void l.html("");
        r.lock(!0);

        var y,
            x,
            T,
            P,
            k,
            E,
            F,
            S,
            I,
            A,
            D,
            z,
            M,
            j,
            U = i[w],
            $ = c + "-" + r._getFileId(U),
            R = p.text,
            O = p.image,
            B = p.html,
            L = r._getFileName(U, ""),
            N = (U && U.size || 0) / 1e3,
            Z = "",
            H = t.createObjectURL(U),
            W = 0,
            q = "",
            V = !1,
            K = 0,
            G = function G() {
          var e = d.setTokens({
            index: w + 1,
            files: u,
            percent: 50,
            name: L
          });
          setTimeout(function () {
            l.html(e), r._updateFileDetails(u), _a2(w + 1);
          }, r.processDelay), r._raise("fileloaded", [U, $, w, n]) && r.isAjaxUpload && C.add(U);
        };

        if (U) {
          if (S = C.getId(U), g > 0) for (x = 0; g > x; x++) {
            E = f[x], F = r.msgFileTypes[E] || E, q += 0 === x ? F : ", " + F;
          }
          if (L === !1) return void _a2(w + 1);
          if (0 === L.length) return T = r.msgInvalidFileName.replace("{name}", t.htmlEncode(t.getFileName(U), "[unknown]")), void v(T, U, $, w, S);

          if (t.isEmpty(m) || (Z = new RegExp("\\.(" + m.join("|") + ")$", "i")), y = N.toFixed(2), r.isAjaxUpload && C.exists(S) || r._getFrame($, !0).length) {
            var Y = {
              id: $,
              index: w,
              fileId: S,
              file: U,
              files: i
            };
            return T = r.msgDuplicateFile.setTokens({
              name: L,
              size: y
            }), void (r.isAjaxUpload ? setTimeout(function () {
              r.duplicateErrors.push(T), r._raise("fileduplicateerror", [U, S, L, y, $, w]), _a2(w + 1), r._updateFileDetails(u);
            }, r.processDelay) : (r._showError(T, Y), r.unlock(), u = 0, r._clearFileInput(), r.reset(), r._updateFileDetails(u)));
          }

          if (r.maxFileSize > 0 && N > r.maxFileSize) return T = r.msgSizeTooLarge.setTokens({
            name: L,
            size: y,
            maxSize: r.maxFileSize
          }), void v(T, U, $, w, S);
          if (null !== r.minFileSize && N <= t.getNum(r.minFileSize)) return T = r.msgSizeTooSmall.setTokens({
            name: L,
            size: y,
            minSize: r.minFileSize
          }), void v(T, U, $, w, S);

          if (!t.isEmpty(f) && t.isArray(f)) {
            for (x = 0; x < f.length; x += 1) {
              P = f[x], A = p[P], W += A && "function" == typeof A && A(U.type, t.getFileName(U)) ? 1 : 0;
            }

            if (0 === W) return T = r.msgInvalidFileType.setTokens({
              name: L,
              types: q
            }), void v(T, U, $, w, S);
          }

          if (0 === W && !t.isEmpty(m) && t.isArray(m) && !t.isEmpty(Z) && (k = t.compare(L, Z), W += t.isEmpty(k) ? 0 : k.length, 0 === W)) return T = r.msgInvalidFileExtension.setTokens({
            name: L,
            extensions: h
          }), void v(T, U, $, w, S);
          if (!r._canPreview(U)) return I = r.isAjaxUpload && r._raise("filebeforeload", [U, w, n]), r.isAjaxUpload && I && C.add(U), r.showPreview && I && (o.addClass("file-thumb-loading"), r._previewDefault(U), r._initFileActions()), void setTimeout(function () {
            I && r._updateFileDetails(u), _a2(w + 1), r._raise("fileloaded", [U, $, w]);
          }, 10);
          D = R(U.type, L), z = B(U.type, L), M = O(U.type, L), l.html(s.replace("{index}", w + 1).replace("{files}", u)), o.addClass("file-thumb-loading"), n.onerror = function (e) {
            r._errorHandler(e, L);
          }, n.onload = function (i) {
            var a,
                s,
                d,
                c,
                u,
                f,
                g = [],
                m = function m(e) {
              var t = new FileReader();
              t.onerror = function (e) {
                r._errorHandler(e, L);
              }, t.onload = function (e) {
                return r.isAjaxUpload && !r._raise("filebeforeload", [U, w, n]) ? (V = !0, r._resetCaption(), n.abort(), l.html(""), o.removeClass("file-thumb-loading"), void r.enable()) : (r._previewFile(w, U, e, H, s), r._initFileActions(), void G());
              }, e ? t.readAsText(U, r.textEncoding) : t.readAsDataURL(U);
            };

            if (s = {
              name: L,
              type: U.type
            }, e.each(p, function (e, t) {
              "object" !== e && "other" !== e && "function" == typeof t && t(U.type, L) && K++;
            }), 0 === K) {
              for (d = new Uint8Array(i.target.result), x = 0; x < d.length; x++) {
                c = d[x].toString(16), g.push(c);
              }

              if (a = g.join("").toLowerCase().substring(0, 8), f = t.getMimeType(a, "", ""), t.isEmpty(f) && (u = t.arrayBuffer2String(n.result), f = t.isSvg(u) ? "image/svg+xml" : t.getMimeType(a, u, U.type)), s = {
                name: L,
                type: f
              }, D = R(f, ""), z = B(f, ""), M = O(f, ""), j = D || z, j || M) return void m(j);
            }

            return r.isAjaxUpload && !r._raise("filebeforeload", [U, w, n]) ? (V = !0, r._resetCaption(), n.abort(), l.html(""), o.removeClass("file-thumb-loading"), void r.enable()) : (r._previewFile(w, U, i, H, s), r._initFileActions(), void G());
          }, n.onprogress = function (e) {
            if (e.lengthComputable) {
              var t = e.loaded / e.total * 100,
                  i = Math.ceil(t);
              T = d.setTokens({
                index: w + 1,
                files: u,
                percent: i,
                name: L
              }), setTimeout(function () {
                V || l.html(T);
              }, r.processDelay);
            }
          }, D || z ? n.readAsText(U, r.textEncoding) : M ? n.readAsDataURL(U) : n.readAsArrayBuffer(U);
        }
      }, _a2(0), r._updateFileDetails(u, !0);
    },
    lock: function lock(e) {
      var t = this,
          i = t.$container;
      return t._resetErrors(), t.disable(), !e && t.showCancel && i.find(".fileinput-cancel").show(), !e && t.showPause && i.find(".fileinput-pause").show(), t._raise("filelock", [t.fileManager.stack, t._getExtraData()]), t.$element;
    },
    unlock: function unlock(e) {
      var t = this,
          i = t.$container;
      return void 0 === e && (e = !0), t.enable(), i.removeClass("is-locked"), t.showCancel && i.find(".fileinput-cancel").hide(), t.showPause && i.find(".fileinput-pause").hide(), e && t._resetFileStack(), t._raise("fileunlock", [t.fileManager.stack, t._getExtraData()]), t.$element;
    },
    resume: function resume() {
      var e = this,
          t = !1,
          i = e.resumableManager;
      return e.enableResumableUpload ? (e.paused ? e._toggleResumableProgress(e.progressPauseTemplate, e.msgUploadResume) : t = !0, e.paused = !1, t && e._toggleResumableProgress(e.progressInfoTemplate, e.msgUploadBegin), setTimeout(function () {
        i.upload();
      }, e.processDelay), e.$element) : e.$element;
    },
    pause: function pause() {
      var t,
          i = this,
          a = i.resumableManager,
          r = i.ajaxRequests,
          n = r.length,
          o = a.getProgress(),
          l = i.fileActionSettings,
          s = i.taskManager,
          d = s.getPool(a.id);
      if (!i.enableResumableUpload) return i.$element;
      if (d && d.cancel(), i._raise("fileuploadpaused", [i.fileManager, a]), n > 0) for (t = 0; n > t; t += 1) {
        i.paused = !0, r[t].abort();
      }
      return i.showPreview && i._getThumbs().each(function () {
        var t,
            a = e(this),
            r = a.attr("data-fileid"),
            n = i._getLayoutTemplate("stats"),
            s = a.find(".file-upload-indicator");

        a.removeClass("file-uploading"), s.attr("title") === l.indicatorLoadingTitle && (i._setThumbStatus(a, "Paused"), t = n.setTokens({
          pendingTime: i.msgPaused,
          uploadSpeed: ""
        }), i.paused = !0, i._setProgress(o, a.find(".file-thumb-progress"), o + "%", t)), i.fileManager.getFile(r) || a.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled");
      }), i._setProgress(101, i.$progress, i.msgPaused), i.$element;
    },
    cancel: function cancel() {
      var t,
          i = this,
          a = i.ajaxRequests,
          r = i.resumableManager,
          n = i.taskManager,
          o = r ? n.getPool(r.id) : void 0,
          l = a.length;
      if (i.enableResumableUpload && o ? (o.cancel().done(function () {
        i._setProgressCancelled();
      }), r.reset(), i._raise("fileuploadcancelled", [i.fileManager, r])) : i._raise("fileuploadcancelled", [i.fileManager]), i._initAjax(), l > 0) for (t = 0; l > t; t += 1) {
        i.cancelling = !0, a[t].abort();
      }
      return i._getThumbs().each(function () {
        var t = e(this),
            a = t.attr("data-fileid"),
            r = t.find(".file-thumb-progress");
        t.removeClass("file-uploading"), i._setProgress(0, r), r.hide(), i.fileManager.getFile(a) || (t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), i.unlock();
      }), setTimeout(function () {
        i._setProgressCancelled();
      }, i.processDelay), i.$element;
    },
    clear: function clear() {
      var i,
          a = this;
      if (a._raise("fileclear")) return a.$btnUpload.removeAttr("disabled"), a._getThumbs().find("video,audio,img").each(function () {
        t.cleanMemory(e(this));
      }), a._clearFileInput(), a._resetUpload(), a.clearFileStack(), a.isPersistentError = !1, a._resetErrors(!0), a._hasInitialPreview() ? (a._showFileIcon(), a._resetPreview(), a._initPreviewActions(), a.$container.removeClass("file-input-new")) : (a._getThumbs().each(function () {
        a._clearObjects(e(this));
      }), a.isAjaxUpload && (a.previewCache.data = {}), a.$preview.html(""), i = !a.overwriteInitial && a.initialCaption.length > 0 ? a.initialCaption : "", a.$caption.attr("title", "").val(i), t.addCss(a.$container, "file-input-new"), a._validateDefaultPreview()), 0 === a.$container.find(t.FRAMES).length && (a._initCaption() || a.$captionContainer.removeClass("icon-visible")), a._hideFileIcon(), a.focusCaptionOnClear && a.$captionContainer.focus(), a._setFileDropZoneTitle(), a._raise("filecleared"), a.$element;
    },
    reset: function reset() {
      var e = this;
      if (e._raise("filereset")) return e.lastProgress = 0, e._resetPreview(), e.$container.find(".fileinput-filename").text(""), t.addCss(e.$container, "file-input-new"), e.getFrames().length && e.$container.removeClass("file-input-new"), e.clearFileStack(), e._setFileDropZoneTitle(), e.$element;
    },
    disable: function disable() {
      var e = this,
          i = e.$container;
      return e.isDisabled = !0, e._raise("filedisabled"), e.$element.attr("disabled", "disabled"), i.addClass("is-locked"), t.addCss(i.find(".btn-file"), "disabled"), i.find(".kv-fileinput-caption").addClass("file-caption-disabled"), i.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), e._initDragDrop(), e.$element;
    },
    enable: function enable() {
      var e = this,
          t = e.$container;
      return e.isDisabled = !1, e._raise("fileenabled"), e.$element.removeAttr("disabled"), t.removeClass("is-locked"), t.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), t.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), t.find(".btn-file").removeClass("disabled"), e._initDragDrop(), e.$element;
    },
    upload: function upload() {
      var i,
          a,
          r = this,
          n = r.fileManager,
          o = n.count(),
          l = !e.isEmptyObject(r._getExtraData());
      if (r.isAjaxUpload && !r.isDisabled && r._isFileSelectionValid(o)) return r.lastProgress = 0, r._resetUpload(), 0 !== o || l ? (r.cancelling = !1, r._showProgress(), r.lock(), 0 === o && l ? (r._setProgress(2), void r._uploadExtraOnly()) : r.enableResumableUpload ? r.resume() : ((r.uploadAsync || r.enableResumableUpload) && (a = r._getOutData(null), r._raise("filebatchpreupload", [a]), r.fileBatchCompleted = !1, r.uploadCache = [], e.each(r.getFileStack(), function (e) {
        var t = r._getThumbId(e);

        r.uploadCache.push({
          id: t,
          content: null,
          config: null,
          tags: null,
          append: !0
        });
      }), r.$preview.find(".file-preview-initial").removeClass(t.SORT_CSS), r._initSortable()), r._setProgress(2), r.hasInitData = !1, r.uploadAsync ? (i = 0, void e.each(n.stack, function (e) {
        r._uploadSingle(i, e, !0), i++;
      })) : (r._uploadBatch(), r.$element))) : void r._showFileError(r.msgUploadEmpty);
    },
    destroy: function destroy() {
      var t = this,
          i = t.$form,
          a = t.$container,
          r = t.$element,
          n = t.namespace;
      return e(document).off(n), e(window).off(n), i && i.length && i.off(n), t.isAjaxUpload && t._clearFileInput(), t._cleanup(), t._initPreviewCache(), r.insertBefore(a).off(n).removeData(), a.off().remove(), r;
    },
    refresh: function refresh(i) {
      var a = this,
          r = a.$element;
      return i = "object" != _typeof(i) || t.isEmpty(i) ? a.options : e.extend(!0, {}, a.options, i), a._init(i, !0), a._listen(), r;
    },
    zoom: function zoom(e) {
      var t = this,
          i = t._getFrame(e);

      t._showModal(i);
    },
    getExif: function getExif(e) {
      var t = this,
          i = t._getFrame(e);

      return i && i.data("exif") || null;
    },
    getFrames: function getFrames(i) {
      var a,
          r = this;
      return i = i || "", a = r.$preview.find(t.FRAMES + i), r.reversePreviewOrder && (a = e(a.get().reverse())), a;
    },
    getPreview: function getPreview() {
      var e = this;
      return {
        content: e.initialPreview,
        config: e.initialPreviewConfig,
        tags: e.initialPreviewThumbTags
      };
    }
  }, e.fn.fileinput = function (a) {
    if (t.hasFileAPISupport() || t.isIE(9)) {
      var r = Array.apply(null, arguments),
          n = [];

      switch (r.shift(), this.each(function () {
        var o,
            l = e(this),
            s = l.data("fileinput"),
            d = "object" == _typeof(a) && a,
            c = d.theme || l.data("theme"),
            u = {},
            p = {},
            f = d.language || l.data("language") || e.fn.fileinput.defaults.language || "en";
        s || (c && (p = e.fn.fileinputThemes[c] || {}), "en" === f || t.isEmpty(e.fn.fileinputLocales[f]) || (u = e.fn.fileinputLocales[f] || {}), o = e.extend(!0, {}, e.fn.fileinput.defaults, p, e.fn.fileinputLocales.en, u, d, l.data()), s = new i(this, o), l.data("fileinput", s)), "string" == typeof a && n.push(s[a].apply(s, r));
      }), n.length) {
        case 0:
          return this;

        case 1:
          return n[0];

        default:
          return n;
      }
    }
  };
  var a = 'class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}';
  e.fn.fileinput.defaults = {
    language: "en",
    showCaption: !0,
    showBrowse: !0,
    showPreview: !0,
    showRemove: !0,
    showUpload: !0,
    showUploadStats: !0,
    showCancel: null,
    showPause: null,
    showClose: !0,
    showUploadedThumbs: !0,
    showConsoleLogs: !1,
    browseOnZoneClick: !1,
    autoReplace: !1,
    autoOrientImage: function autoOrientImage() {
      var e = window.navigator.userAgent,
          t = !!e.match(/WebKit/i),
          i = !!e.match(/iP(od|ad|hone)/i),
          a = i && t && !e.match(/CriOS/i);
      return !a;
    },
    autoOrientImageInitial: !0,
    required: !1,
    rtl: !1,
    hideThumbnailContent: !1,
    encodeUrl: !0,
    focusCaptionOnBrowse: !0,
    focusCaptionOnClear: !0,
    generateFileId: null,
    previewClass: "",
    captionClass: "",
    frameClass: "krajee-default",
    mainClass: "file-caption-main",
    mainTemplate: null,
    purifyHtml: !0,
    fileSizeGetter: null,
    initialCaption: "",
    initialPreview: [],
    initialPreviewDelimiter: "*$$*",
    initialPreviewAsData: !1,
    initialPreviewFileType: "image",
    initialPreviewConfig: [],
    initialPreviewThumbTags: [],
    previewThumbTags: {},
    initialPreviewShowDelete: !0,
    initialPreviewDownloadUrl: "",
    removeFromPreviewOnError: !1,
    deleteUrl: "",
    deleteExtraData: {},
    overwriteInitial: !0,
    sanitizeZoomCache: function sanitizeZoomCache(e) {
      var i = t.createElement(e);
      return i.find("input,select,.file-thumbnail-footer").remove(), i.html();
    },
    previewZoomButtonIcons: {
      prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
      next: '<i class="glyphicon glyphicon-triangle-right"></i>',
      toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
      fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
      borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
      close: '<i class="glyphicon glyphicon-remove"></i>'
    },
    previewZoomButtonClasses: {
      prev: "btn btn-navigate",
      next: "btn btn-navigate",
      toggleheader: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      fullscreen: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      borderless: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      close: "btn btn-sm btn-kv btn-default btn-outline-secondary"
    },
    previewTemplates: {},
    previewContentTemplates: {},
    preferIconicPreview: !1,
    preferIconicZoomPreview: !1,
    allowedFileTypes: null,
    allowedFileExtensions: null,
    allowedPreviewTypes: void 0,
    allowedPreviewMimeTypes: null,
    allowedPreviewExtensions: null,
    disabledPreviewTypes: void 0,
    disabledPreviewExtensions: ["msi", "exe", "com", "zip", "rar", "app", "vb", "scr"],
    disabledPreviewMimeTypes: null,
    defaultPreviewContent: null,
    customLayoutTags: {},
    customPreviewTags: {},
    previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
    previewFileIconClass: "file-other-icon",
    previewFileIconSettings: {},
    previewFileExtSettings: {},
    buttonLabelClass: "hidden-xs",
    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
    browseClass: "btn btn-primary",
    removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
    removeClass: "btn btn-default btn-secondary",
    cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
    cancelClass: "btn btn-default btn-secondary",
    pauseIcon: '<i class="glyphicon glyphicon-pause"></i>',
    pauseClass: "btn btn-default btn-secondary",
    uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
    uploadClass: "btn btn-default btn-secondary",
    uploadUrl: null,
    uploadUrlThumb: null,
    uploadAsync: !0,
    uploadParamNames: {
      chunkCount: "chunkCount",
      chunkIndex: "chunkIndex",
      chunkSize: "chunkSize",
      chunkSizeStart: "chunkSizeStart",
      chunksUploaded: "chunksUploaded",
      fileBlob: "fileBlob",
      fileId: "fileId",
      fileName: "fileName",
      fileRelativePath: "fileRelativePath",
      fileSize: "fileSize",
      retryCount: "retryCount"
    },
    maxAjaxThreads: 5,
    fadeDelay: 800,
    processDelay: 100,
    queueDelay: 10,
    progressDelay: 0,
    enableResumableUpload: !1,
    resumableUploadOptions: {
      fallback: null,
      testUrl: null,
      chunkSize: 2048,
      maxThreads: 4,
      maxRetries: 3,
      showErrorLog: !0
    },
    uploadExtraData: {},
    zoomModalHeight: 480,
    minImageWidth: null,
    minImageHeight: null,
    maxImageWidth: null,
    maxImageHeight: null,
    resizeImage: !1,
    resizePreference: "width",
    resizeQuality: .92,
    resizeDefaultImageType: "image/jpeg",
    resizeIfSizeMoreThan: 0,
    minFileSize: 0,
    maxFileSize: 0,
    maxFilePreviewSize: 25600,
    minFileCount: 0,
    maxFileCount: 0,
    maxTotalFileCount: 0,
    validateInitialCount: !1,
    msgValidationErrorClass: "text-danger",
    msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
    msgErrorClass: "file-error-message",
    progressThumbClass: "progress-bar progress-bar-striped active",
    progressClass: "progress-bar bg-success progress-bar-success progress-bar-striped active",
    progressInfoClass: "progress-bar bg-info progress-bar-info progress-bar-striped active",
    progressCompleteClass: "progress-bar bg-success progress-bar-success",
    progressPauseClass: "progress-bar bg-primary progress-bar-primary progress-bar-striped active",
    progressErrorClass: "progress-bar bg-danger progress-bar-danger",
    progressUploadThreshold: 99,
    previewFileType: "image",
    elCaptionContainer: null,
    elCaptionText: null,
    elPreviewContainer: null,
    elPreviewImage: null,
    elPreviewStatus: null,
    elErrorContainer: null,
    errorCloseButton: t.closeButton("kv-error-close"),
    slugCallback: null,
    dropZoneEnabled: !0,
    dropZoneTitleClass: "file-drop-zone-title",
    fileActionSettings: {},
    otherActionButtons: "",
    textEncoding: "UTF-8",
    ajaxSettings: {},
    ajaxDeleteSettings: {},
    showAjaxErrorDetails: !0,
    mergeAjaxCallbacks: !1,
    mergeAjaxDeleteCallbacks: !1,
    retryErrorUploads: !0,
    reversePreviewOrder: !1,
    usePdfRenderer: function usePdfRenderer() {
      var e = !!window.MSInputMethodContext && !!document.documentMode;
      return !!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i) || e;
    },
    pdfRendererUrl: "",
    pdfRendererTemplate: "<iframe " + a + "></iframe>"
  }, e.fn.fileinputLocales.en = {
    fileSingle: "file",
    filePlural: "files",
    browseLabel: "Browse &hellip;",
    removeLabel: "Remove",
    removeTitle: "Clear all unprocessed files",
    cancelLabel: "Cancel",
    cancelTitle: "Abort ongoing upload",
    pauseLabel: "Pause",
    pauseTitle: "Pause ongoing upload",
    uploadLabel: "Upload",
    uploadTitle: "Upload selected files",
    msgNo: "No",
    msgNoFilesSelected: "No files selected",
    msgCancelled: "Cancelled",
    msgPaused: "Paused",
    msgPlaceholder: "Select {files} ...",
    msgZoomModalHeading: "Detailed Preview",
    msgFileRequired: "You must select a file to upload.",
    msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
    msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
    msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
    msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
    msgTotalFilesTooMany: "You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).",
    msgFileNotFound: 'File "{name}" not found!',
    msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
    msgFileNotReadable: 'File "{name}" is not readable.',
    msgFilePreviewAborted: 'File preview aborted for "{name}".',
    msgFilePreviewError: 'An error occurred while reading the file "{name}".',
    msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
    msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
    msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
    msgFileTypes: {
      image: "image",
      html: "HTML",
      text: "text",
      video: "video",
      audio: "audio",
      flash: "flash",
      pdf: "PDF",
      object: "object"
    },
    msgUploadAborted: "The file upload was aborted",
    msgUploadThreshold: "Processing &hellip;",
    msgUploadBegin: "Initializing &hellip;",
    msgUploadEnd: "Done",
    msgUploadResume: "Resuming upload &hellip;",
    msgUploadEmpty: "No valid data available for upload.",
    msgUploadError: "Upload Error",
    msgDeleteError: "Delete Error",
    msgProgressError: "Error",
    msgValidationError: "Validation Error",
    msgLoading: "Loading file {index} of {files} &hellip;",
    msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
    msgSelected: "{n} {files} selected",
    msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
    msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
    msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
    msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
    msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
    msgImageResizeError: "Could not get the image dimensions to resize.",
    msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
    msgAjaxError: "Something went wrong with the {operation} operation. Please try again later!",
    msgAjaxProgressError: "{operation} failed",
    msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
    msgResumableUploadRetriesExceeded: "Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>",
    msgPendingTime: "{time} remaining",
    msgCalculatingTime: "calculating time remaining",
    ajaxOperations: {
      deleteThumb: "file delete",
      uploadThumb: "file upload",
      uploadBatch: "batch file upload",
      uploadExtra: "form data upload"
    },
    dropZoneTitle: "Drag & drop files here &hellip;",
    dropZoneClickTitle: "<br>(or click to select {files})",
    previewZoomButtonTitles: {
      prev: "View previous file",
      next: "View next file",
      toggleheader: "Toggle header",
      fullscreen: "Toggle full screen",
      borderless: "Toggle borderless mode",
      close: "Close detailed preview"
    }
  }, e.fn.fileinput.Constructor = i, e(document).ready(function () {
    var t = e("input.file[type=file]");
    t.length && t.fileinput();
  });
});

/***/ }),

/***/ "./vendor/kartik-v/bootstrap-fileinput/js/locales/es.js":
/*!**************************************************************!*\
  !*** ./vendor/kartik-v/bootstrap-fileinput/js/locales/es.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * FileInput Spanish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
  "use strict";

  $.fn.fileinputLocales['es'] = {
    fileSingle: 'archivo',
    filePlural: 'archivos',
    browseLabel: 'Examinar &hellip;',
    removeLabel: 'Quitar',
    removeTitle: 'Quitar archivos seleccionados',
    cancelLabel: 'Cancelar',
    cancelTitle: 'Abortar la subida en curso',
    pauseLabel: 'Pause',
    pauseTitle: 'Pause ongoing upload',
    uploadLabel: 'Subir archivo',
    uploadTitle: 'Subir archivos seleccionados',
    msgNo: 'No',
    msgNoFilesSelected: 'No hay archivos seleccionados',
    msgPaused: 'Paused',
    msgCancelled: 'Cancelado',
    msgPlaceholder: 'Seleccionar {files} ...',
    msgZoomModalHeading: 'Vista previa detallada',
    msgFileRequired: 'Debes seleccionar un archivo para subir.',
    msgSizeTooSmall: 'El archivo "{name}" (<b>{size} KB</b>) es demasiado peque??o y debe ser mayor de <b>{minSize} KB</b>.',
    msgSizeTooLarge: 'El archivo "{name}" (<b>{size} KB</b>) excede el tama??o m??ximo permitido de <b>{maxSize} KB</b>.',
    msgFilesTooLess: 'Debe seleccionar al menos <b>{n}</b> {files} a cargar.',
    msgFilesTooMany: 'El n??mero de archivos seleccionados a cargar <b>({n})</b> excede el l??mite m??ximo permitido de <b>{m}</b>.',
    msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
    msgFileNotFound: 'Archivo "{name}" no encontrado.',
    msgFileSecured: 'No es posible acceder al archivo "{name}" porque est?? siendo usado por otra aplicaci??n o no tiene permisos de lectura.',
    msgFileNotReadable: 'No es posible acceder al archivo "{name}".',
    msgFilePreviewAborted: 'Previsualizaci??n del archivo "{name}" cancelada.',
    msgFilePreviewError: 'Ocurri?? un error mientras se le??a el archivo "{name}".',
    msgInvalidFileName: 'Caracteres no v??lidos o no soportados en el nombre del archivo "{name}".',
    msgInvalidFileType: 'Tipo de archivo no v??lido para "{name}". S??lo se permiten archivos de tipo "{types}".',
    msgInvalidFileExtension: 'Extensi??n de archivo no v??lida para "{name}". S??lo se permiten archivos "{extensions}".',
    msgFileTypes: {
      'image': 'image',
      'html': 'HTML',
      'text': 'text',
      'video': 'video',
      'audio': 'audio',
      'flash': 'flash',
      'pdf': 'PDF',
      'object': 'object'
    },
    msgUploadAborted: 'La carga de archivos se ha cancelado',
    msgUploadThreshold: 'Procesando &hellip;',
    msgUploadBegin: 'Inicializando &hellip;',
    msgUploadEnd: 'Hecho',
    msgUploadResume: 'Resuming upload &hellip;',
    msgUploadEmpty: 'No existen datos v??lidos para el env??o.',
    msgUploadError: 'Upload Error',
    msgDeleteError: 'Delete Error',
    msgProgressError: 'Error',
    msgValidationError: 'Error de validaci??n',
    msgLoading: 'Subiendo archivo {index} de {files} &hellip;',
    msgProgress: 'Subiendo archivo {index} de {files} - {name} - {percent}% completado.',
    msgSelected: '{n} {files} seleccionado(s)',
    msgFoldersNotAllowed: 'Arrastre y suelte ??nicamente archivos. Omitida(s) {n} carpeta(s).',
    msgImageWidthSmall: 'El ancho de la imagen "{name}" debe ser de al menos {size} px.',
    msgImageHeightSmall: 'La altura de la imagen "{name}" debe ser de al menos {size} px.',
    msgImageWidthLarge: 'El ancho de la imagen "{name}" no puede exceder de {size} px.',
    msgImageHeightLarge: 'La altura de la imagen "{name}" no puede exceder de {size} px.',
    msgImageResizeError: 'No se pudieron obtener las dimensiones de la imagen para cambiar el tama??o.',
    msgImageResizeException: 'Error al cambiar el tama??o de la imagen.<pre>{errors}</pre>',
    msgAjaxError: 'Algo ha ido mal con la operaci??n {operation}. Por favor, int??ntelo de nuevo mas tarde.',
    msgAjaxProgressError: 'La operaci??n {operation} ha fallado',
    msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
    msgResumableUploadRetriesExceeded: 'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
    msgPendingTime: '{time} remaining',
    msgCalculatingTime: 'calculating time remaining',
    ajaxOperations: {
      deleteThumb: 'Archivo borrado',
      uploadThumb: 'Archivo subido',
      uploadBatch: 'Datos subidos en lote',
      uploadExtra: 'Datos del formulario subidos '
    },
    dropZoneTitle: 'Arrastre y suelte aqu?? los archivos &hellip;',
    dropZoneClickTitle: '<br>(o haga clic para seleccionar {files})',
    fileActionSettings: {
      removeTitle: 'Eliminar archivo',
      uploadTitle: 'Subir archivo',
      uploadRetryTitle: 'Reintentar subir',
      downloadTitle: 'Descargar archivo',
      zoomTitle: 'Ver detalles',
      dragTitle: 'Mover / Reordenar',
      indicatorNewTitle: 'No subido todav??a',
      indicatorSuccessTitle: 'Subido',
      indicatorErrorTitle: 'Error al subir',
      indicatorPausedTitle: 'Upload Paused',
      indicatorLoadingTitle: 'Subiendo &hellip;'
    },
    previewZoomButtonTitles: {
      prev: 'Anterior',
      next: 'Siguiente',
      toggleheader: 'Mostrar encabezado',
      fullscreen: 'Pantalla completa',
      borderless: 'Modo sin bordes',
      close: 'Cerrar vista detallada'
    }
  };
})(window.jQuery);

/***/ }),

/***/ "./vendor/kartik-v/bootstrap-fileinput/themes/fa/theme.js":
/*!****************************************************************!*\
  !*** ./vendor/kartik-v/bootstrap-fileinput/themes/fa/theme.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * bootstrap-fileinput v5.1.1
 * http://plugins.krajee.com/file-input
 *
 * Font Awesome icon theme configuration for bootstrap-fileinput. Requires font awesome assets to be loaded.
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2020, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
(function ($) {
  "use strict";

  $.fn.fileinputThemes.fa = {
    fileActionSettings: {
      removeIcon: '<i class="fa fa-trash"></i>',
      uploadIcon: '<i class="fa fa-upload"></i>',
      uploadRetryIcon: '<i class="fa fa-repeat"></i>',
      downloadIcon: '<i class="fa fa-download"></i>',
      zoomIcon: '<i class="fa fa-search-plus"></i>',
      dragIcon: '<i class="fa fa-arrows"></i>',
      indicatorNew: '<i class="fa fa-plus-circle text-warning"></i>',
      indicatorSuccess: '<i class="fa fa-check-circle text-success"></i>',
      indicatorError: '<i class="fa fa-exclamation-circle text-danger"></i>',
      indicatorLoading: '<i class="fa fa-hourglass text-muted"></i>',
      indicatorPaused: '<i class="fa fa-pause text-info"></i>'
    },
    layoutTemplates: {
      fileIcon: '<i class="fa fa-file kv-caption-icon"></i> '
    },
    previewZoomButtonIcons: {
      prev: '<i class="fa fa-caret-left fa-lg"></i>',
      next: '<i class="fa fa-caret-right fa-lg"></i>',
      toggleheader: '<i class="fa fa-fw fa-arrows-v"></i>',
      fullscreen: '<i class="fa fa-fw fa-arrows-alt"></i>',
      borderless: '<i class="fa fa-fw fa-external-link"></i>',
      close: '<i class="fa fa-fw fa-remove"></i>'
    },
    previewFileIcon: '<i class="fa fa-file"></i>',
    browseIcon: '<i class="fa fa-folder-open"></i>',
    removeIcon: '<i class="fa fa-trash"></i>',
    cancelIcon: '<i class="fa fa-ban"></i>',
    pauseIcon: '<i class="fa fa-pause"></i>',
    uploadIcon: '<i class="fa fa-upload"></i>',
    msgValidationErrorIcon: '<i class="fa fa-exclamation-circle"></i> '
  };
})(window.jQuery);

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/kartik-v/bootstrap-fileinput/js/fileinput.min.js ./vendor/kartik-v/bootstrap-fileinput/themes/fa/theme.js ./vendor/kartik-v/bootstrap-fileinput/js/locales/es.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/dev/gus-gobernacion/gus/vendor/kartik-v/bootstrap-fileinput/js/fileinput.min.js */"./vendor/kartik-v/bootstrap-fileinput/js/fileinput.min.js");
__webpack_require__(/*! /var/www/dev/gus-gobernacion/gus/vendor/kartik-v/bootstrap-fileinput/themes/fa/theme.js */"./vendor/kartik-v/bootstrap-fileinput/themes/fa/theme.js");
module.exports = __webpack_require__(/*! /var/www/dev/gus-gobernacion/gus/vendor/kartik-v/bootstrap-fileinput/js/locales/es.js */"./vendor/kartik-v/bootstrap-fileinput/js/locales/es.js");


/***/ })

/******/ });