# Content Type Configuration

## Configuration

Use the content type and group configuration to add new content types, extend existing content types, add groups in the left menu, or rearrange content types in the groups.

The following is an example of a group configuration in `etc/groups.xml`

``` xml
<!-- Definition of main menu, used for grouping content types  -->
<groups>
    <group name="media" translate="label" sortOrder="10">
        <label>Media</label>
    </group>
</groups>
```
### Configuration reference

| Element             | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| `group`             | Describes the group name, translated field, and sort order in the menu.  |
| `label`             | Label displayed on the menu.                                             |


The following is an example of a content type configuration in `etc/content_types/banner.xml`:

``` xml
<content_types>
    <!-- Content type declaration -->
    <type name="banner" translate="label" sortOrder="1">
        <label>Banner</label>
        <icon>icon-pagebuilder-image</icon>
        <component>Magento_PageBuilder/js/component/block/banner</component>
        <preview_component>Magento_PageBuilder/js/component/block/preview/banner</preview_component>
        <form>pagebuilder_banner_form</form>
        <group>media</group>
        <allowed_parents>
            <parent name="row"/>
            <parent name="column"/>
        </allowed_parents>
        <appearances>
            <appearance name="poster" default="true">
                <data_mapping>
                    <elements>
                        <element name="main" path=".">
                            <style_properties>
                                <property var="border" name="border_style"/>
                                <property var="border_color" name="border_color" converter="Magento_PageBuilder/js/converter/default/style/color"/>
                                <property var="border_width" name="border_width" converter="Magento_PageBuilder/js/converter/default/style/border-width"/>
                                <property var="border_radius" name="border_radius" converter="Magento_PageBuilder/js/converter/default/style/remove-px"/>
                                <complex_property var="margins_and_padding" reader="Magento_PageBuilder/js/property/default/margins" converter="Magento_PageBuilder/js/converter/default/style/margins"/>
                            </style_properties>
                            <attributes>
                                <attribute var="name" name="data-role"/>
                                <attribute var="appearance" name="data-appearance"/>
                                <attribute var="show_button" name="data-show-button"/>
                                <attribute var="show_overlay" name="data-show-overlay"/>
                            </attributes>
                            <css var="css_classes"/>
                        </element>
                        <element name="link" path=".//a">
                            <attributes>
                                <attribute var="link_url" name="href" />
                                <attribute var="open_in_new_tab" name="target" converter="Magento_PageBuilder/js/converter/default/attribute/target"/>
                            </attributes>
                        </element>
                        <element name="overlay" path=".//a/div[2]/div">
                            <style_properties>
                                <property var="min_height" name="min_height" converter="Magento_PageBuilder/js/converter/default/style/remove-px"/>
                                <property var="background_color" name="background_color" virtual="true" converter="Magento_PageBuilder/js/converter/banner/style/overlay-background-color"/>
                                <complex_property var="margins_and_padding" reader="Magento_PageBuilder/js/property/default/paddings" converter="Magento_PageBuilder/js/converter/default/style/paddings"/>
                            </style_properties>
                            <attributes>
                                <attribute var="overlay_color" name="data-overlay-color" persist="false" converter="Magento_PageBuilder/js/converter/banner/attribute/overlay-color"/>
                                <attribute var="overlay_transparency" name="data-overlay-color" persist="false" converter="Magento_PageBuilder/js/converter/banner/attribute/overlay-transparency"/>
                                <attribute var="overlay_transparency" name="data-overlay-color" virtual="true" converter="Magento_PageBuilder/js/converter/banner/attribute/overlay-color-transparency"/>
                            </attributes>
                        </element>
                        <element name="desktop_image" path=".//a/div[1]">
                            <style_properties>
                                <property var="text_align" name="text_align"/>
                                <property var="background_color" name="background_color" converter="Magento_PageBuilder/js/converter/default/style/color"/>
                                <property var="background_image" name="background_image" converter="Magento_PageBuilder/js/converter/default/style/background-image" preview_converter="Magento_PageBuilder/js/converter/default/style/preview/background-image"/>
                                <property var="background_position" name="background_position"/>
                                <property var="background_size" name="background_size"/>
                                <property var="background_repeat" name="background_repeat" converter="Magento_PageBuilder/js/converter/default/style/background-repeat"/>
                                <property var="background_attachment" name="background_attachment"/>
                            </style_properties>
                        </element>
                        <element name="mobile_image" path=".//a/div[2]">
                            <style_properties>
                                <property var="text_align" name="text_align"/>
                                <property var="background_color" name="background_color" converter="Magento_PageBuilder/js/converter/default/style/color"/>
                                <property var="mobile_image" name="background_image" converter="Magento_PageBuilder/js/converter/default/style/background-image" preview_converter="Magento_PageBuilder/js/converter/default/style/preview/background-image"/>
                                <property var="background_position" name="background_position"/>
                                <property var="background_size" name="background_size"/>
                                <property var="background_repeat" name="background_repeat" converter="Magento_PageBuilder/js/converter/default/style/background-repeat"/>
                                <property var="background_attachment" name="background_attachment"/>
                            </style_properties>
                        </element>
                        <element name="content" path=".//a/div[2]/div/div/div[1]">
                            <html var="message" placeholder="Edit banner text"/>
                        </element>
                        <element name="button" path=".//a/div[2]/div/div/button">
                            <style_properties>
                                <property var="opacity" name="opacity" virtual="true" converter="Magento_PageBuilder/js/converter/banner/style/button-opacity"/>
                                <property var="visibility" name="visibility" virtual="true" converter="Magento_PageBuilder/js/converter/banner/style/button-visibility"/>
                            </style_properties>
                            <html var="button_text" placeholder="Edit Button Text"/>
                            <css var="button_type">
                                <filter>
                                    <class name="pagebuilder-banner-button"/>
                                </filter>
                            </css>
                        </element>
                    </elements>
                    <converters>
                        <converter name="empty_mobile_image" component="Magento_PageBuilder/js/converter/default/empty-mobile-image">
                            <config>
                                <item name="desktop_image_variable" value="background_image"/>
                                <item name="mobile_image_variable" value="mobile_image"/>
                            </config>
                        </converter>
                    </converters>
                </data_mapping>
                <preview_template>Magento_PageBuilder/component/block/preview/banner.html</preview_template>
                <render_template>Magento_PageBuilder/component/block/render/banner.html</render_template>
                <reader>Magento_PageBuilder/js/component/format/read/configurable</reader>
            </appearance>
            <appearance name="collage-left">
                <!-- Collage left appearance configuration -->
            </appearance>
            <appearance name="collage-centered">
                <!-- Collage centered appearance configuration -->
            </appearance>
            <appearance name="collage-right">
                <!-- Collage right appearance configuration -->
            </appearance>
        </appearances>
    </type>
</content_types>
```
### Configuration reference

| Element             | Description                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `type`              | Describes the content type name, translated field, and sort order in the menu group. Each type should have its own configuration file.  |
| `label`             | Label displayed on the menu and stage.                                                                                                  |
| `icon`              | Icon displayed on the menu.                                                                                                             |
| `component`         | View model responsible for rendering the preview and master format.                                                                     |
| `preview_component` | Helper component that contains preview specific logic. Helper component is optional.                                                    |
| `form`              | UI component form used for editing the content type                                                                                     |
| `group`             | Existing menu group that contains this content type.                                                                                    |
| `allowed_parents`   | List of parent content types that can accept this type as a child.                                                                      |
| `appearances`       | Appearance configuration.                                                                                                               |
| `is_visible`        | Determines menu visibility for the component. System components should not be visible in the menu. Default value is true.               |


### `form` configuration reference

The `form` element specifies the name of the UiComponent form used to configure content types. All forms should extend the `pagebuilder_base_form`, which contains boilerplate form configuration and the global Advanced Configuration section.
```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd" extends="pagebuilder_base_form">
    <!-- Form Configuration for Content Type -->
</form>
```

Any modifications you might want to make to content type configuration forms use standard UiComponent functionality. Please see [UiComponent Documentation](http://devdocs.magento.com/guides/v2.3/ui_comp_guide/bk-ui_comps.html) for additional information.

### `allowed_parents` configuration reference

The `allowed_parents` element specifies which content types can accept this type as a child.
  
**Example:**
``` xml
<allowed_parents>
    <parent name="row"/>
    <parent name="column"/>
</allowed_parents>
``` 
### `appearances` configuration reference

The `appearances` element specifies how the content type renders in the admin preview and the master format.
It controls the templates, how data is read from the master format, and how to apply style properties and attributes to the elements.

| Element              | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| `appearance`         | The name of the appearance. Every content type requires one default appearance.        |
| ` data_mapping `     | Specifies how data is read from, saved to, and converted to and from the master format |
| ` preview_template ` | Template used to display the element in the preview                                    |
| ` render_template `  | Template used to render the content type to the master format                          |
| ` reader `           | Reads data for the content type from the master format                                 |

The default reader is `Magento_PageBuilder/js/component/format/read/configurable`.
It reads data based on the configuration specified in `data_mapping`.

**Example:**
``` xml
<appearance name="poster" default="true">
    <data_mapping/>
    <preview_template>Magento_PageBuilder/component/block/preview/banner.html</preview_template>
    <render_template>Magento_PageBuilder/component/block/render/banner.html</render_template>
    <reader>Magento_PageBuilder/js/component/format/read/configurable</reader>
</appearance>
```

Every content type needs a default appearance.
Set the `default` attribute to "true" in an `appearance` node to set the default appearance for a content type.

### `data_mapping` configuration reference

| Element            | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `elements`         | The container for all the elements of the content type.                                               |
| `element`          | The name of the element that contains data for the master format and the render and preview template. |
| `style_properties` | specifies styles properties for the element in the master format                                      |
| `attributes`       | specifies attributes for the element in master format                                                 |
| `css`              | specifies whether element has classes and in which variable they should be read                       |
| `html`             | specifies whether element has html content and in which variable they should be read                  |
| `tag`              | Allows you to read the tag value of the element and map it back to the master format.                 |

**Example:**
``` xml
<elements>
    <element name="main" path=".">
        <style_properties>
            <property var="border" name="border_style"/>
            <property var="border_color" name="border_color" converter="Magento_PageBuilder/js/converter/default/style/color"/>
            <complex_property var="margins_and_padding" reader="Magento_PageBuilder/js/property/default/margins" converter="Magento_PageBuilder/js/converter/default/style/margins"/>
        </style_properties>
        <attributes>
            <attribute var="name" name="data-role"/>
        </attributes>
        <css var="css_classes"/>
    </element>
    <element name="link" path=".//a">
        <attributes>
            <attribute var="link_url" name="href" />
            <attribute var="open_in_new_tab" name="target" converter="Magento_PageBuilder/js/converter/default/attribute/target"/>
        </attributes>
    </element>
    <element name="overlay" path=".//a/div[2]/div">
        <attributes>
            <attribute var="overlay_color" name="data-overlay-color" persist="false" converter="Magento_PageBuilder/js/converter/banner/attribute/overlay-color"/>
            <attribute var="overlay_transparency" name="data-overlay-color" persist="false" converter="Magento_PageBuilder/js/converter/banner/attribute/overlay-transparency"/>
            <attribute var="overlay_transparency" name="data-overlay-color" virtual="true" converter="Magento_PageBuilder/js/converter/banner/attribute/overlay-color-transparency"/>
        </attributes>
    </element>
    <element name="desktop_image" path=".//a/div[1]">
        <style_properties>
            <property var="background_image" name="background_image" converter="Magento_PageBuilder/js/converter/default/style/background-image" preview_converter="Magento_PageBuilder/js/converter/default/style/preview/background-image"/>
        </style_properties>
    </element>
    <element name="mobile_image" path=".//a/div[2]">
        <style_properties>
            <property var="mobile_image" name="background_image" converter="Magento_PageBuilder/js/converter/default/style/background-image" preview_converter="Magento_PageBuilder/js/converter/default/style/preview/background-image"/>
        </style_properties>
    </element>
    <element name="content" path=".//a/div[2]/div/div/div[1]">
        <html var="message" placeholder="Edit banner text"/>
    </element>
    <element name="button" path=".//a/div[2]/div/div/button">
        <style_properties>
            <property var="opacity" name="opacity" virtual="true" converter="Magento_PageBuilder/js/converter/banner/style/button-opacity"/>
            <property var="visibility" name="visibility" virtual="true" converter="Magento_PageBuilder/js/converter/banner/style/button-visibility"/>
        </style_properties>
        <html var="button_text" placeholder="Edit Button Text"/>
        <css var="button_type">
            <filter>
                <class name="pagebuilder-banner-button"/>
            </filter>
        </css>
    </element>
</elements>
<converters>
    <converter name="empty_mobile_image" component="Magento_PageBuilder/js/converter/default/empty-mobile-image">
        <config>
            <item name="desktop_image_variable" value="background_image"/>
            <item name="mobile_image_variable" value="mobile_image"/>
        </config>
    </converter>
</converters>
```

### Attributes for `property` and `attribute`

| Attribute           | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `var`               | The variable name for value in the data storage. Must be unique for the content type.                                  |
| `name`              | The name of the property in the DOM. Must be in snake case.                                                            |
| `converter`         | Converts the value after reading or before saving to the DOM.                                                          |
| `preview_converter` | Converts the value for the preview. Used for cases where the conversion logic is different between the two views.      |
| `virtual`           | Used for properties that need to be saved but not viewed. For example, a value that is computed using multiple values. |
| `persist`           | Used for read-only properties.                                                                                         |

`complex_property` and `complex_attribute` allows you to specify the custom reader component used for reading data for an element.

`complex_property` and `complex_attribute` can contain `converter` and `preview_converter`.

``` xml
<style_properties>
    <complex_property var="margins_and_padding" reader="Magento_PageBuilder/js/property/default/margins" converter="Magento_PageBuilder/js/converter/default/style/margins"/>
</style_properties>
```

`static_property` and `static_attribute` allows you to add specific style properites or attributes to an element.

`static_property` and `static_attribute` do not contain `converter` and `preview_converter` elements.

``` xml
<element name="desktop_image" path=".//img[1]">
    <style_properties>
        <static_property name="max-width" value="100%"/>
        <static_property name="height" value="auto"/>
    </style_properties>
</element>
```

These style properties and attributes are applied in the preview and persisted in the master format.

``` html
<img src="my-image.png" style="max-width: 100%; height: auto;" />
```

### Html element

The `html` element allows you to read the value of the element in a property and map it back to the master format.

Use the `placeholder` when you need to specify a label for preview and there is no input provided.

``` xml
<html var="message" placeholder="Edit banner text"/>
```

### Css element

The `css` element allows you to read the class value of the element in the property and map back to the master format.

`filter` allows you to specify which static CSS classes to ignore.
These classes are not read and do not appear on the form.

``` xml
<css var="button_type">
    <filter>
        <class name="pagebuilder-banner-button"/>
    </filter>
</css>
```

### Tag element

The `tag` element allows you to read the tag value of the element and map back to the master format.

``` xml
<tag var="heading_type"/>
```

## Converter Interfaces

Element converter and data converter are the two types of converters.

### Element Converter

The elemement converter converts data for the property or attribute.

The `fromDom()` method is called after data is read from the master format.

The `toDom()` method is called before observables are updated in the cycle rendering preview or master format. 

``` JS
export interface ElementConverterInterface {
    /**
     * @param {object} value
     * @returns {string | object}
     */
    fromDom(value: string): string | Object;

    /**
     * @param {object} name
     * @param {object} data
     * @returns {string | Object}
     */
    toDom(name: string, data: object): string | object;
}
```

### Data Converter

The data converter works on the data for all elements.

The `fromDom()` method is called after data is read for all element and converted by element converters.

The `toDom()` method is called before data is converted by element converters to update observables.

``` JS
export interface DataConverterInterface {
    /**
     * @param {object} data
     * @param {object} config
     * @returns {object}
     */
    fromDom(data: object, config: object): object;

    /**
     * @param {object} data
     * @param {object} config
     * @returns {object}
     */
    toDom(data: object, config: object): object;
}
```

**Example:** Data converter configuration
``` xml
<data_mapping>
    <converters>
        <converter name="empty_mobile_image" component="Magento_PageBuilder/js/converter/default/empty-mobile-image">
            <config>
                <item name="desktop_image_variable" value="background_image"/>
                <item name="mobile_image_variable" value="mobile_image"/>
            </config>
        </converter>
    </converters>
</data_mapping> 
```

Some element converters can produce a value based on multiple properties in data.

``` JS
export default class OverlayBackgroundColor implements ElementConverterInterface {
    /**
     * @param {string} value
     * @returns {object | string}
     */
    public fromDom(value: string): string | object {
        return value;
    }

    /**
     * @param {string} name
     * @param {object} data
     * @returns {object | string}
     */
    public toDom(name: string, data: object): string | object {
        let overlayColor: string = "transparent";
        if (data.show_overlay === "always" && data.overlay_color !== "" && data.overlay_color !== undefined) {
            overlayColor = fromHex(data.overlay_color, percentToDecimal(data.overlay_transparency));
        }
        return overlayColor;
    }
}
```