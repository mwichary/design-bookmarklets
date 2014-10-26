// The current variant of the bookmarklet (0 = inert)
var designBookmarkletVariant = 0

// The number of possible variants the bookmarklet will circle through
var DESIGN_BOOKMARKET_VARIANT_COUNT = 3

// Activated every time moment the user clicks on the bookmarklet
function designBookmarkletStart() {
  
  // Toggle through all the possible variants, wrap around after the last variant
  designBookmarkletVariant++

  if (designBookmarkletVariant > DESIGN_BOOKMARKET_VARIANT_COUNT) {
    designBookmarkletVariant = 0
  }

  switch (designBookmarkletVariant) {
    case 1:
      // Load the CSS file for the first and future variants
      var el = document.createElement('link')
      el.rel = 'stylesheet'
      el.type = 'text/css'
      // Randomize so that the file never gets cached
      el.href = 'http://localhost:5060/styles.css?' + (Math.random())
      // Put an id so that we can easily remove it later
      el.id = 'design-bookmarklet-style'
      document.querySelector('head').appendChild(el)

      // Assign an attribute to <body> so that we can target it via CSS later
      document.body.setAttribute('design-bookmarklet-variant', 1)
      break

    case 2:
    case 3:
    case 4:
    case 5:
      // Change the attribute of <body> for a specific variant
      document.body.setAttribute('design-bookmarklet-variant', designBookmarkletVariant)
      break

    case 0:
      // This means we went through all the variants, and can remove the attribute and
      // the extra CSS.
      document.body.removeAttribute('design-bookmarklet-variant')

      var el = document.querySelector('#design-bookmarklet-style')
      el.parentNode.removeChild(el)
      break
  }
}

// Run the first time after the bookmarklet is loaded
designBookmarkletStart()
