module.exports = {
  parserOptions: {
    ecmaVersion       : 2020,
    requireConfigFile : false,
    sourceType        : "module"
  },
  env: {
    es6               : true,
    node              : true,
    browser           : true,
    commonjs          : true,
    "cypress/globals" : true
  },
  plugins: [
    "cypress"
  ],
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended"
  ],
  ignorePatterns : ["Template/**/*"],
  // these rules are added on top of the default recommended ones
  rules          : {
    // -------------
    // base esLint
    // https://eslint.org/docs/rules/
    // -------------
    // -------------
    // functional
    // -------------
    // disallow async functions which have no `await` expression
    "require-await"      : "error",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces" : 1,
    // require or disallow newline at the end of files
    "eol-last"           : [
      "error",
      "always"
    ],
    // enforce the consistent use of either backticks, double, or single quotes
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals : true,
        avoidEscape           : true
      }
    ],
    // enforce consistent brace style for all control statements
    curly          : [ "error", "multi-line" ],
    // enforce dot notation whenever possible
    "dot-notation" : "error",
    // require the use of `===` and `!==`
    eqeqeq         : [
      "error",
      "always",
      {
        // allow == for null check
        null: "ignore"
      }
    ],
    // require grouped accessor pairs in object literals and classes
    "grouped-accessor-pairs": [
      2,
      "setBeforeGet"
    ],
    // disallow the use of `arguments.caller` or `arguments.callee`
    "no-caller"               : "error",
    // disallow `else` blocks after `return` statements in `if` statements
    "no-else-return"          : "warn",
    // disallow empty functions
    "no-empty-function"       : "error",
    // disallow extending native types
    "no-extend-native"        : "error",
    // disallow `if` statements as the only statement in `else` blocks
    "no-lonely-if"            : "error",
    // disallow `new` operators outside of assignments or comparisons
    "no-new"                  : "error",
    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    "no-new-wrappers"         : "error",
    // disallow unnecessary `return await`
    "no-return-await"         : "error",
    // disallow throwing literals as exceptions
    "no-throw-literal"        : "error",
    // disallow initializing variables to `undefined`
    "no-undef-init"           : "error",
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary"     : "error",
    // disallow unnecessary computed property keys in objects and classes
    "no-useless-computed-key" : "error",
    // disallow redundant return statements
    "no-useless-return"       : "error",
    // require `let` or `const` instead of `var`
    "no-var"                  : "error",
    // enforce variables to be declared either together or separately in functions
    "one-var"                 : [
      "error",
      "never"
    ],
    // require `const` declarations for variables that are never reassigned after declared
    "prefer-const"         : "error",
    // require destructuring from arrays and/or objects
    // use no autofix because assigned types get removed when autofix
    // https://github.com/typescript-eslint/typescript-eslint/issues/723
    // "no-autofix/prefer-destructuring" : [
    //   "warn",
    //   {
    //     object : true,
    //     array  : false
    //   }
    // ],
    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    "prefer-object-spread" : "error",
    // require template literals instead of string concatenation
    "prefer-template"      : 1,
    // require quotes around object literal property names
    "quote-props"          : [
      "error",
      "as-needed"
    ],
    // ---------------
    // style
    // ---------------
    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing" : "warn",
    // disallow or enforce spaces inside of blocks after opening block and before closing block
    "block-spacing" : "warn",
    // enforce consistent brace style for blocks
    "brace-style"   : "warn",
    // require or disallow trailing commas
    "comma-dangle"  : [
      "error",
      "never"
    ],
    // enforce consistent spacing before and after commas
    "comma-spacing": [
      "warn",
      {
        before : false,
        after  : true
      }
    ],
    // enforce consistent comma style
    "comma-style": [
      "warn",
      "last"
    ],
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": [
      "warn",
      "always"
    ],
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": [
      "warn",
      "never"
    ],
    // enforce line breaks between arguments of a function call
    "function-call-argument-newline": [
      "warn",
      "consistent"
    ],
    // enforce consistent indentation
    indent        : ["error", 2],
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing" : [
      "warn",
      {
        align: {
          beforeColon : true,
          afterColon  : true,
          on          : "colon"
        }
      }
    ],
    // require or disallow an empty line between class members
    "lines-between-class-members": [
      "warn",
      "always"
    ],
    // disallow unnecessary parentheses
    "no-extra-parens"         : "off",
    // disallow multiple spaces
    // "no-multi-spaces": [
    //   "error",
    //   { "exceptions": {
    //       "VariableDeclarator": true,
    //       "Property": true
    //     }
    //   }
    // ],
    "no-multiple-empty-lines" : [
      "warn",
      {
        max    : 2,
        maxEOF : 1
      }
    ],
    // disallow whitespace before properties
    "no-whitespace-before-property" : "warn",
    // enforce consistent linebreak style for operators
    "operator-linebreak"            : [
      "error",
      "after"
    ],
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    // require or disallow semicolons instead of ASI
    semi: [
      "warn",
      "always"
    ],
    // enforce consistent spacing before and after semicolons
    "semi-spacing" : "warn",
    // enforce location of semicolons
    "semi-style"   : [
      "error",
      "last"
    ],
    // enforce consistent spacing before blocks
    "space-before-blocks"         : "warn",
    // enforce consistent spacing before `function` definition opening parenthesis
    "space-before-function-paren" : ["error", {
      anonymous  : "never",
      named      : "never",
      asyncArrow : "always"
    }],
    // enforce consistent spacing inside parentheses
    "space-in-parens": [
      1,
      "always"
    ],
    // enforce spacing around colons of switch statements
    "switch-colon-spacing": "warn"
    // eslint-plugin-promise
    // prefer async await
    // "promise/prefer-await-to-then" : [
    //   1
    // ]
    // currently not using extension rules
  }
};
