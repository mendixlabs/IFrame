#IFrame

##Description
 
Embed another HTML document in your web application

## Contributing
For more information on contributing to this repository visit [Contributing to a GitHub repository] (https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)

## Typical usage scenario
 
Embed an external website in a form

## Features and limitations

* (Partial) dynamic URLs.
* Scroll behavior is configurable but not guaranteed

## Installation
 
Import the widget to your project and configure it's properties.

## Configuration

The widget should be embedded in a dataview connected to an object containing a String or Integer attribute.

### Properties

* *Height* - Height of the viewer in pixels. Use '0' to determine the width automatically. This will use any remaining space.

* *Scroll* -  [auto, always, never] Defines whether to scroll when the contents exceed the IFrame size. Will always show scrollbars even if not strictly needed. Default: auto
Setting this property does not guarantee the expected behavior, the styling of the website displayed has much influence on the scrolling behavior of the iframe.

* *URL Attribute* - The attribute that returns the URL of the IFrame.

* *URL prefix* - Optional URL prefix. The attribute value is prefixed with this value.